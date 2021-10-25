import { deployments, ethers, getNamedAccounts } from "hardhat";
import hre from "hardhat";
import { expect } from "chai";
import { BigNumber } from "@ethersproject/bignumber";
import {
  BalanceRedirectPresale__factory,
  MiniMeToken__factory,
  Controller__factory,
  MarketMaker__factory,
  BancorFormula__factory,
  ContinuousToken__factory,
} from "../typechain";
import { initialize } from "../deploy/initialize";

const setupTest = deployments.createFixture(async ({ deployments }) => {
  await deployments.fixture("everything"); // ensure you start from a fresh deployments
  //initialize contracts
  await initialize(hre)
});

const State = {
  Pending: 0, // presale is idle and pending to be started
  Funding: 1, // presale has started and contributors can purchase tokens
  Finished: 2, // presale period is over, but it hasn't been closed yet
  Closed: 3, // presale has been closed and trading has been open
};

const PPM = BigNumber.from(1e6);
let reserveRatio: BigNumber;
let presaleEchangeRate: BigNumber;

describe("Presale Interaction", () => {
  let Presale: any, Controller: any, MarketMaker: any, ZEROToken: any, SOVToken: any, BancorFormula: any;
  const tokens = BigNumber.from(1000000);
  const contributionAmount = BigNumber.from(100000);
  const UserContribution = contributionAmount.div(2);
  const amount = BigNumber.from(100);
  let deployer: string;
  let zeroBalanceBeforeClosing: BigNumber;
  before(async () => {
    await setupTest();

    ({ deployer } = await getNamedAccounts());
    const [, account1] = await ethers.getSigners();

    const sConfig = JSON.stringify(hre.network.config);
    const config = JSON.parse(sConfig);
    const { parameters, mockPresale } = config;

    reserveRatio = parameters.reserveRatio;
    presaleEchangeRate = parameters.presaleEchangeRate;
    const presaleToDeploy = mockPresale ? "MockedBalancedRedirectPresale" : "BalanceRedirectPresale";

    const controller = await deployments.get("Controller");
    Controller = await Controller__factory.connect(controller.address, ethers.provider.getSigner());

    const marketMaker = await deployments.get("MarketMaker");
    MarketMaker = await MarketMaker__factory.connect(marketMaker.address, ethers.provider.getSigner());

    const bancorFormula = await MarketMaker.formula();
    BancorFormula = await BancorFormula__factory.connect(bancorFormula, ethers.provider.getSigner());

    const zeroToken = await deployments.get("BondedToken");
    ZEROToken = ContinuousToken__factory.connect(zeroToken.address, ethers.provider.getSigner());

    const sovToken = await deployments.get("CollateralToken");
    SOVToken = MiniMeToken__factory.connect(sovToken.address, ethers.provider.getSigner());
    await SOVToken.generateTokens(deployer, tokens);
    await SOVToken.generateTokens(account1.address, tokens);


    expect(await SOVToken.balanceOf(deployer)).to.eq(tokens);

    const presale = await deployments.get(presaleToDeploy);
    Presale = await BalanceRedirectPresale__factory.connect(presale.address, ethers.provider.getSigner());
    await SOVToken.approve(Presale.address, tokens);
    await SOVToken.approve(MarketMaker.address, tokens);

    await SOVToken.connect(account1).approve(Presale.address, tokens);
    await SOVToken.connect(account1).approve(MarketMaker.address, tokens);
  });

  it("Should revert if presale is not open", async () => {
    await expect(Controller.contribute(UserContribution)).to.be.revertedWith("PRESALE_INVALID_STATE");
  });

  it("Should open presale and allow to contribute", async () => {
    expect(await Presale.state()).to.eq(State.Pending);
    await Controller.openPresale();
    expect(await Presale.state()).to.eq(State.Funding);
    expect(await Presale.contributorsCounter()).to.eq(0);
    await Controller.contribute(UserContribution.div(2));
    expect(await Presale.contributorsCounter()).to.eq(1);
    expect(await Presale.contributors(deployer)).to.eq(UserContribution.div(2));
  });

  it("Should increase contribution amount but not increase contributors counter", async () => {
    await Controller.contribute(UserContribution.div(2));
    expect(await Presale.contributorsCounter()).to.eq(1);
    expect(await Presale.contributors(deployer)).to.eq(UserContribution);
  });

  it("Should increase contributors counter", async () => {
    const [, account1] = await ethers.getSigners();
    await Controller.connect(account1).contribute(UserContribution);
    expect(await Presale.contributorsCounter()).to.eq(2);
    expect(await Presale.contributors(account1.address)).to.eq(UserContribution);
  });

  it("A user can query how many project tokens would be obtained for a given amount of contribution tokens", async () => {
    const reportedAmount = await Presale.contributionToTokens(UserContribution);
    const expectedAmount = UserContribution.mul(await Presale.exchangeRate()).div(await Presale.PPM());
    expect(expectedAmount).to.eq(reportedAmount);
  });

  it("Mints the correct amount of project tokens", async () => {
    const totalSupply = await ZEROToken.totalSupply();
    const expectedAmount = contributionAmount.mul(await Presale.exchangeRate()).div(await Presale.PPM());
    expect(expectedAmount).to.eq(totalSupply);
  });

  it("Reduces user contribution token balance", async () => {
    const userBalance = await SOVToken.balanceOf(deployer);
    const expectedBalance = tokens.sub(UserContribution);
    expect(expectedBalance).to.eq(userBalance);
  });

  it("Increases presale contribution token balance", async () => {
    const appBalance = await SOVToken.balanceOf(Presale.address);
    expect(appBalance).to.eq(contributionAmount);
  });

  it("Vested tokens are assigned to the buyer", async () => {
    const userBalance = await ZEROToken.balanceOf(deployer);
    const expectedAmount = UserContribution.mul(await Presale.exchangeRate()).div(await Presale.PPM());
    expect(expectedAmount).to.eq(userBalance);
  });

  it("Keeps track of total tokens raised", async () => {
    const raised = await Presale.totalRaised();
    expect(raised).to.eq(contributionAmount);
  });

  it("Should revert trying to close presale", async () => {
    await expect(Controller.closePresale()).to.be.revertedWith("PRESALE_INVALID_STATE");
  });

  it("Should finish presale", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await hre.timeAndMine.increaseTime("10 weeks");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await hre.timeAndMine.mine("1");

    expect(await Presale.state()).to.eq(State.Finished);
    await expect(Controller.contribute(contributionAmount)).to.be.revertedWith("PRESALE_INVALID_STATE");
  });

  it("market maker should not be open", async () => {
    expect(!(await MarketMaker.isOpen()));
  });

  it("Should close presale", async () => {
    zeroBalanceBeforeClosing = await ZEROToken.balanceOf(deployer);
    await Controller.closePresale();
    expect(await Presale.state()).to.eq(State.Closed);
    await expect(Controller.contribute(contributionAmount)).to.be.revertedWith("PRESALE_INVALID_STATE");
  });

  it("Raised funds are transferred to the fundraising reserve and the beneficiary address", async () => {
    expect((await SOVToken.balanceOf(Presale.address)).toNumber()).to.eq(0);

    const totalSold = await Presale.totalRaised();
    const mintingForBeneficiary = await Presale.mintingForBeneficiaryPct();
    const zeroTokensForBeneficiary = totalSold.mul(mintingForBeneficiary).div(PPM.sub(mintingForBeneficiary));
    expect(await ZEROToken.balanceOf(deployer)).to.eq(
      zeroBalanceBeforeClosing.add(zeroTokensForBeneficiary.mul(presaleEchangeRate).div(PPM)),
    );

    const totalRaised = await Presale.totalRaised();

    const aux = totalRaised.mul(PPM).div(PPM.sub(mintingForBeneficiary));
    const sovTokensForReserve = aux.mul(reserveRatio).div(PPM);
    const sovTokensForBeneficiary = totalRaised.sub(sovTokensForReserve);
    const reserve = await Presale.reserve();

    expect(await SOVToken.balanceOf(deployer)).to.eq(tokens.sub(UserContribution).add(sovTokensForBeneficiary));
    expect(await SOVToken.balanceOf(reserve)).to.eq(sovTokensForReserve);
  });

  it("Market maker should be open", async () => {
    expect(await MarketMaker.isOpen());
  });

  it("Should open a buy order", async () => {
    const zeroSupplyBefore = await ZEROToken.totalSupply();
    const reserve = await Controller.reserve();
    const sovReserveBalanceBefore = await SOVToken.balanceOf(reserve);
    const tx1 = await (await Controller.openBuyOrder(SOVToken.address, amount)).wait();
    const newBatch1 = tx1.logs
      .map((log: any) => {
        if (log.address === MarketMaker.address) {
          const parsed = MarketMaker.interface.parseLog(log);
          return parsed;
        }
      })
      .find((event: any) => event?.name === "NewBatch");

    const tokensTobeMinted = await MarketMaker.tokensToBeMinted();
    const purchaseReturn = await BancorFormula.calculatePurchaseReturn(
      newBatch1.args.supply,
      newBatch1.args.balance,
      newBatch1.args.reserveRatio,
      amount,
    );

    expect(tokensTobeMinted).to.eq(purchaseReturn);
    expect(await SOVToken.balanceOf(reserve)).to.eq(sovReserveBalanceBefore.add(amount));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await hre.timeAndMine.mine("10");

    const tx2 = await (await Controller.openBuyOrder(SOVToken.address, amount)).wait();
    const newBatch2 = tx2.logs
      .map((log: any) => {
        if (log.address === MarketMaker.address) {
          const parsed = MarketMaker.interface.parseLog(log);
          return parsed;
        }
      })
      .find((event: any) => event?.name === "NewBatch");

    expect(newBatch2.args.supply).to.eq(tokensTobeMinted.add(await ZEROToken.totalSupply()));
    expect(newBatch2.args.supply).to.eq(tokensTobeMinted.add(newBatch1.args.supply));
    expect(newBatch2.args.balance).to.eq(newBatch1.args.balance.add(amount));

    const zeroBalanceBefore = await ZEROToken.balanceOf(deployer);
    await Controller.claimBuyOrder(deployer, newBatch1.args.id, SOVToken.address);
    expect(await ZEROToken.totalSupply()).to.eq(zeroSupplyBefore.add(tokensTobeMinted));
    expect(await ZEROToken.balanceOf(deployer)).to.eq(zeroBalanceBefore.add(purchaseReturn));
  });

  it("Should open a sell order", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await hre.timeAndMine.mine("10");

    const zeroSupplyBefore = await ZEROToken.totalSupply();
    const zeroBalanceBefore = await ZEROToken.balanceOf(deployer);
    const sovBalanceBefore = await SOVToken.balanceOf(deployer);

    const tx1 = await (await Controller.openSellOrder(SOVToken.address, amount)).wait();
    const newBatch1 = tx1.logs
      .map((log: any) => {
        if (log.address === MarketMaker.address) {
          const parsed = MarketMaker.interface.parseLog(log);
          return parsed;
        }
      })
      .find((event: any) => event?.name === "NewBatch");

    expect(zeroSupplyBefore).to.eq((await ZEROToken.totalSupply()).add(amount));
    expect(zeroBalanceBefore).to.eq((await ZEROToken.balanceOf(deployer)).add(amount));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await hre.timeAndMine.mine("10");

    const collateralsToBeClaimed = await MarketMaker.collateralsToBeClaimed(SOVToken.address);

    await Controller.claimSellOrder(deployer, newBatch1.args.id, SOVToken.address);

    expect(await SOVToken.balanceOf(deployer)).to.eq(sovBalanceBefore.add(collateralsToBeClaimed));
  });
});
