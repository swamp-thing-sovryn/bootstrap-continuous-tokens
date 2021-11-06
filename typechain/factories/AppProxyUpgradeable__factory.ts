/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AppProxyUpgradeable,
  AppProxyUpgradeableInterface,
} from "../AppProxyUpgradeable";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "proxyType",
    outputs: [
      {
        name: "proxyTypeId",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isDepositable",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "implementation",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "appId",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kernel",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_kernel",
        type: "address",
      },
      {
        name: "_appId",
        type: "bytes32",
      },
      {
        name: "_initializePayload",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "ProxyDeposit",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106e93803806106e98339810160409081528151602083015191830151909201828282600061004b84640100000000610124810204565b61005d8364010000000061014c810204565b61006f83640100000000610183810204565b90506000825111156101185761008d81640100000000610253810204565b151561009857600080fd5b80600160a060020a03168260405180828051906020019080838360005b838110156100cd5781810151838201526020016100b5565b50505050905090810190601f1680156100fa5780820380516001836020036101000a031916815260200191505b50915050600060405180830381855af4915050151561011857600080fd5b505050505050506102b3565b6101496000805160206106c9833981519152826401000000006103d361028082021704565b50565b6101497fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b826401000000006103d361028082021704565b6000610196640100000000610284810204565b604080517fbe00bbd80000000000000000000000000000000000000000000000000000000081527ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f6004820152602481018590529051600160a060020a03929092169163be00bbd8916044808201926020929091908290030181600087803b15801561022157600080fd5b505af1158015610235573d6000803e3d6000fd5b505050506040513d602081101561024b57600080fd5b505192915050565b600080600160a060020a038316151561026f576000915061027a565b823b90506000811191505b50919050565b9055565b60006102aa6000805160206106c98339815191526401000000006102bd6102af82021704565b905090565b5490565b610407806102c26000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634555d5c9811461012b57806348a0c8dd146101525780635c60da1b1461017b57806380afdea8146101b9578063d4aae0c4146101ce575b60006127105a10156100e357600034118015610086575036155b151561009157600080fd5b6100996101e3565b15156100a457600080fd5b6040805133815234602082015281517f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1929181900390910190a1610128565b6100eb610213565b9050610128816000368080601f01602080910402602001604051908101604052809392919081815260200183838082843750610225945050505050565b50005b34801561013757600080fd5b50610140610266565b60408051918252519081900360200190f35b34801561015e57600080fd5b506101676101e3565b604080519115158252519081900360200190f35b34801561018757600080fd5b50610190610213565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156101c557600080fd5b5061014061026b565b3480156101da57600080fd5b50610190610296565b600061020e7f665fd576fbbe6f247aff98f5c94a561e3f71ec2d3c988d56f12d342396c50cea6102bd565b905090565b600061020e61022061026b565b6102c1565b600061023083610395565b151561023b57600080fd5b612710905060008083516020850186855a03f43d604051816000823e828015610262578282f35b8282fd5b600290565b600061020e7fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b6102bd565b600061020e7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b5b5490565b60006102cb610296565b604080517fbe00bbd80000000000000000000000000000000000000000000000000000000081527ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f600482015260248101859052905173ffffffffffffffffffffffffffffffffffffffff929092169163be00bbd8916044808201926020929091908290030181600087803b15801561036357600080fd5b505af1158015610377573d6000803e3d6000fd5b505050506040513d602081101561038d57600080fd5b505192915050565b60008073ffffffffffffffffffffffffffffffffffffffff831615156103be57600091506103c9565b823b90506000811191505b50919050565b5490565b9055565b90555600a165627a7a72305820d01404714bda88c55f804eb5332d30c3b811b6b00583f32a3a455777b099727100294172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b";

export class AppProxyUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _kernel: string,
    _appId: BytesLike,
    _initializePayload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AppProxyUpgradeable> {
    return super.deploy(
      _kernel,
      _appId,
      _initializePayload,
      overrides || {}
    ) as Promise<AppProxyUpgradeable>;
  }
  getDeployTransaction(
    _kernel: string,
    _appId: BytesLike,
    _initializePayload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _kernel,
      _appId,
      _initializePayload,
      overrides || {}
    );
  }
  attach(address: string): AppProxyUpgradeable {
    return super.attach(address) as AppProxyUpgradeable;
  }
  connect(signer: Signer): AppProxyUpgradeable__factory {
    return super.connect(signer) as AppProxyUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AppProxyUpgradeableInterface {
    return new utils.Interface(_abi) as AppProxyUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AppProxyUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as AppProxyUpgradeable;
  }
}
