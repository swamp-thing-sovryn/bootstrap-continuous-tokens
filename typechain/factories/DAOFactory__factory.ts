/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DAOFactory, DAOFactoryInterface } from "../DAOFactory";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "baseACL",
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
    constant: false,
    inputs: [
      {
        name: "_root",
        type: "address",
      },
    ],
    name: "newDAO",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "regFactory",
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
    name: "baseKernel",
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
        name: "_baseKernel",
        type: "address",
      },
      {
        name: "_baseACL",
        type: "address",
      },
      {
        name: "_regFactory",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "dao",
        type: "address",
      },
    ],
    name: "DeployDAO",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "reg",
        type: "address",
      },
    ],
    name: "DeployEVMScriptRegistry",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051606080610f45833981016040908152815160208301519190920151600160a060020a0381161561005a5760028054600160a060020a031916600160a060020a0383161790555b5060008054600160a060020a03938416600160a060020a03199182161790915560018054929093169116179055610eaf806100966000396000f3006080604052600436106100615763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663086b339e81146100665780632168744414610097578063656362b5146100b8578063b16dd130146100cd575b600080fd5b34801561007257600080fd5b5061007b6100e2565b60408051600160a060020a039092168252519081900360200190f35b3480156100a357600080fd5b5061007b600160a060020a03600435166100f1565b3480156100c457600080fd5b5061007b610977565b3480156100d957600080fd5b5061007b610986565b600154600160a060020a031681565b6000805481908190819081908190600160a060020a0316610110610995565b600160a060020a03909116815260405190819003602001906000f08015801561013d573d6000803e3d6000fd5b50600254909550600160a060020a031615156101df57600154604080517f485cc955000000000000000000000000000000000000000000000000000000008152600160a060020a039283166004820152898316602482015290519187169163485cc9559160448082019260009290919082900301818387803b1580156101c257600080fd5b505af11580156101d6573d6000803e3d6000fd5b50505050610930565b600154604080517f485cc955000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015230602482015290519187169163485cc9559160448082019260009290919082900301818387803b15801561024c57600080fd5b505af1158015610260573d6000803e3d6000fd5b5050505084600160a060020a031663de2873596040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156102bb57600080fd5b505af11580156102cf573d6000803e3d6000fd5b505050506040513d60208110156102e557600080fd5b5051604080517f3d6ab68f0000000000000000000000000000000000000000000000000000000081529051919550600160a060020a03861691633d6ab68f916004808201926020929091908290030181600087803b15801561034657600080fd5b505af115801561035a573d6000803e3d6000fd5b505050506040513d602081101561037057600080fd5b5051604080517f8ea8dc9d0000000000000000000000000000000000000000000000000000000081529051919450600160a060020a03871691638ea8dc9d916004808201926020929091908290030181600087803b1580156103d157600080fd5b505af11580156103e5573d6000803e3d6000fd5b505050506040513d60208110156103fb57600080fd5b5051600254604080517f0a8ed3db000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201529187166024830181905260448301879052905192945091630a8ed3db9160648082019260009290919082900301818387803b15801561047557600080fd5b505af1158015610489573d6000803e3d6000fd5b5050600254604080517fbe038478000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201528983166024820152604481018790523060648201529051918816935063be038478925060848082019260009290919082900301818387803b15801561050957600080fd5b505af115801561051d573d6000803e3d6000fd5b5050600254604080517f33404143000000000000000000000000000000000000000000000000000000008152600160a060020a038a8116600483015291519190921693506333404143925060248083019260209291908290030181600087803b15801561058957600080fd5b505af115801561059d573d6000803e3d6000fd5b505050506040513d60208110156105b357600080fd5b505160408051600160a060020a038316815290519192507f1a40224412580c1ae5a2fbe8029a565f49a3a029608a8fd9320b32477f314579919081900360200190a1600254604080517f9d0effdb000000000000000000000000000000000000000000000000000000008152600160a060020a039283166004820152878316602482015260448101859052905191861691639d0effdb9160648082019260009290919082900301818387803b15801561066b57600080fd5b505af115801561067f573d6000803e3d6000fd5b5050604080517fa885508a000000000000000000000000000000000000000000000000000000008152600160a060020a038981166004830152602482018790529151918816935063a885508a925060448082019260009290919082900301818387803b1580156106ee57600080fd5b505af1158015610702573d6000803e3d6000fd5b5050600254604080517f9d0effdb000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015291881660248301819052604483018890529051909350639d0effdb9250606480830192600092919082900301818387803b15801561077b57600080fd5b505af115801561078f573d6000803e3d6000fd5b5050604080517f9d0effdb000000000000000000000000000000000000000000000000000000008152306004820152600160a060020a03881660248201819052604482018890529151919350639d0effdb925060648082019260009290919082900301818387803b15801561080357600080fd5b505af1158015610817573d6000803e3d6000fd5b5050604080517f0a8ed3db000000000000000000000000000000000000000000000000000000008152600160a060020a038b81166004830152881660248201819052604482018890529151919350630a8ed3db925060648082019260009290919082900301818387803b15801561088d57600080fd5b505af11580156108a1573d6000803e3d6000fd5b5050604080517fafd925df000000000000000000000000000000000000000000000000000000008152600160a060020a038b8116600483015288166024820181905260448201889052915191935063afd925df925060648082019260009290919082900301818387803b15801561091757600080fd5b505af115801561092b573d6000803e3d6000fd5b505050505b60408051600160a060020a038716815290517f3a7eb042a769adf51e9be78b68ed7af0ad7b379246536efc376ed2ca012382829181900360200190a1509295945050505050565b600254600160a060020a031681565b600054600160a060020a031681565b6040516104de806109a6833901905600608060405234801561001057600080fd5b506040516020806104de833981016040525161003481640100000000610120810204565b151561003f57600080fd5b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c60008190527fc67454ed56db7ff90a4bb32fc9a8de1ab3174b221e5fecea22b7503a3111791f60209081527f8e2ed18767e9c33b25344c240cdf92034fae56be99e2c07f3d9946d949ffede48054600160a060020a031916600160a060020a03851690811790915560408051918252517fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f8927f2ec1ae0a449b7ae354b9dacfb3ade6b6332ba26b7fcbb935835fa39dd7263b23928290030190a35061014d565b600080600160a060020a038316151561013c5760009150610147565b823b90506000811191505b50919050565b6103828061015c6000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634555d5c9811461012b5780634558850c1461015257806348a0c8dd146101965780635c60da1b146101bf57806386070cfe146101d4575b60006127105a10156100e357600034118015610086575036155b151561009157600080fd5b6100996101e9565b15156100a457600080fd5b6040805133815234602082015281517f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1929181900390910190a1610128565b6100eb610219565b9050610128816000368080601f0160208091040260200160405190810160405280939291908181526020018383808284375061029c945050505050565b50005b34801561013757600080fd5b506101406102dd565b60408051918252519081900360200190f35b34801561015e57600080fd5b5061016d6004356024356102e2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156101a257600080fd5b506101ab6101e9565b604080519115158252519081900360200190f35b3480156101cb57600080fd5b5061016d610219565b3480156101e057600080fd5b50610140610312565b60006102147f665fd576fbbe6f247aff98f5c94a561e3f71ec2d3c988d56f12d342396c50cea610318565b905090565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c6000527fc67454ed56db7ff90a4bb32fc9a8de1ab3174b221e5fecea22b7503a3111791f6020527f8e2ed18767e9c33b25344c240cdf92034fae56be99e2c07f3d9946d949ffede45473ffffffffffffffffffffffffffffffffffffffff1690565b60006102a78361031c565b15156102b257600080fd5b612710905060008083516020850186855a03f43d604051816000823e8280156102d9578282f35b8282fd5b600290565b600060208181529281526040808220909352908152205473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b5490565b60008073ffffffffffffffffffffffffffffffffffffffff831615156103455760009150610350565b823b90506000811191505b509190505600a165627a7a7230582045061c09c5b23ed88ace1114602777a6712a3b3b810bad9b932780793465e0dc0029a165627a7a72305820fb3adb5b0bc8742f6b71dbbaab46991fecf54b2a7083cc544e8f8578265f98f10029";

export class DAOFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _baseKernel: string,
    _baseACL: string,
    _regFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DAOFactory> {
    return super.deploy(
      _baseKernel,
      _baseACL,
      _regFactory,
      overrides || {}
    ) as Promise<DAOFactory>;
  }
  getDeployTransaction(
    _baseKernel: string,
    _baseACL: string,
    _regFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _baseKernel,
      _baseACL,
      _regFactory,
      overrides || {}
    );
  }
  attach(address: string): DAOFactory {
    return super.attach(address) as DAOFactory;
  }
  connect(signer: Signer): DAOFactory__factory {
    return super.connect(signer) as DAOFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOFactoryInterface {
    return new utils.Interface(_abi) as DAOFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DAOFactory {
    return new Contract(address, _abi, signerOrProvider) as DAOFactory;
  }
}
