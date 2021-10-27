/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BancorFormula",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BancorFormula__factory>;
    getContractFactory(
      name: "IBancorFormula",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBancorFormula__factory>;
    getContractFactory(
      name: "Utils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Utils__factory>;
    getContractFactory(
      name: "IAragonFundraisingController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAragonFundraisingController__factory>;
    getContractFactory(
      name: "IPresale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPresale__factory>;
    getContractFactory(
      name: "ITap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITap__factory>;
    getContractFactory(
      name: "SignatureValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignatureValidator__factory>;
    getContractFactory(
      name: "ERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1271__factory>;
    getContractFactory(
      name: "ERC1271Bytes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1271Bytes__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ITokenController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenController__factory>;
    getContractFactory(
      name: "ApproveAndCallFallBack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApproveAndCallFallBack__factory>;
    getContractFactory(
      name: "Controlled",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Controlled__factory>;
    getContractFactory(
      name: "MiniMeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MiniMeToken__factory>;
    getContractFactory(
      name: "MiniMeTokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MiniMeTokenFactory__factory>;
    getContractFactory(
      name: "ACL",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ACL__factory>;
    getContractFactory(
      name: "IACL",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IACL__factory>;
    getContractFactory(
      name: "IACLOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IACLOracle__factory>;
    getContractFactory(
      name: "AppProxyBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AppProxyBase__factory>;
    getContractFactory(
      name: "AppProxyPinned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AppProxyPinned__factory>;
    getContractFactory(
      name: "AppProxyUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AppProxyUpgradeable__factory>;
    getContractFactory(
      name: "AppStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AppStorage__factory>;
    getContractFactory(
      name: "AragonApp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AragonApp__factory>;
    getContractFactory(
      name: "UnsafeAragonApp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UnsafeAragonApp__factory>;
    getContractFactory(
      name: "Autopetrified",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Autopetrified__factory>;
    getContractFactory(
      name: "DelegateProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DelegateProxy__factory>;
    getContractFactory(
      name: "DepositableDelegateProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DepositableDelegateProxy__factory>;
    getContractFactory(
      name: "DepositableStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DepositableStorage__factory>;
    getContractFactory(
      name: "IForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IForwarder__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "IVaultRecoverable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVaultRecoverable__factory>;
    getContractFactory(
      name: "Petrifiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Petrifiable__factory>;
    getContractFactory(
      name: "VaultRecoverable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultRecoverable__factory>;
    getContractFactory(
      name: "EVMScriptRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EVMScriptRegistry__factory>;
    getContractFactory(
      name: "EVMScriptRunner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EVMScriptRunner__factory>;
    getContractFactory(
      name: "BaseEVMScriptExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseEVMScriptExecutor__factory>;
    getContractFactory(
      name: "CallsScript",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallsScript__factory>;
    getContractFactory(
      name: "IEVMScriptExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEVMScriptExecutor__factory>;
    getContractFactory(
      name: "IEVMScriptRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEVMScriptRegistry__factory>;
    getContractFactory(
      name: "AppProxyFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AppProxyFactory__factory>;
    getContractFactory(
      name: "DAOFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAOFactory__factory>;
    getContractFactory(
      name: "EVMScriptRegistryFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EVMScriptRegistryFactory__factory>;
    getContractFactory(
      name: "IKernel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKernel__factory>;
    getContractFactory(
      name: "IKernelEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKernelEvents__factory>;
    getContractFactory(
      name: "Kernel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Kernel__factory>;
    getContractFactory(
      name: "KernelProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KernelProxy__factory>;
    getContractFactory(
      name: "KernelStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KernelStorage__factory>;
    getContractFactory(
      name: "ERCProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERCProxy__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ACLConfigurator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ACLConfigurator__factory>;
    getContractFactory(
      name: "Agent",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Agent__factory>;
    getContractFactory(
      name: "BalanceRedirectPresale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalanceRedirectPresale__factory>;
    getContractFactory(
      name: "BondingCurve",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondingCurve__factory>;
    getContractFactory(
      name: "ContinuousToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContinuousToken__factory>;
    getContractFactory(
      name: "Controller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Controller__factory>;
    getContractFactory(
      name: "IMarketMaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMarketMaker__factory>;
    getContractFactory(
      name: "MarketMaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketMaker__factory>;
    getContractFactory(
      name: "Reserve",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reserve__factory>;
    getContractFactory(
      name: "TapDisabled",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TapDisabled__factory>;
    getContractFactory(
      name: "MockedBalancedRedirectPresale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockedBalancedRedirectPresale__factory>;
    getContractFactory(
      name: "Vault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
