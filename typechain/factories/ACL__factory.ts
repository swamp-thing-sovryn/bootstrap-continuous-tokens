/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ACL, ACLInterface } from "../ACL";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "hasInitialized",
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
    constant: false,
    inputs: [
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "createBurnedPermission",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "burnPermissionManager",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_entity",
        type: "address",
      },
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "grantPermission",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_entity",
        type: "address",
      },
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "getPermissionParamsLength",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_paramsHash",
        type: "bytes32",
      },
      {
        name: "_who",
        type: "address",
      },
      {
        name: "_where",
        type: "address",
      },
      {
        name: "_what",
        type: "bytes32",
      },
      {
        name: "_how",
        type: "uint256[]",
      },
    ],
    name: "evalParams",
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
    name: "NO_PERMISSION",
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
    inputs: [
      {
        name: "_script",
        type: "bytes",
      },
    ],
    name: "getEVMScriptExecutor",
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
    name: "getRecoveryVault",
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
    name: "CREATE_PERMISSIONS_ROLE",
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
    constant: false,
    inputs: [
      {
        name: "_entity",
        type: "address",
      },
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
      {
        name: "_params",
        type: "uint256[]",
      },
    ],
    name: "grantPermissionP",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_who",
        type: "address",
      },
      {
        name: "_where",
        type: "address",
      },
      {
        name: "_what",
        type: "bytes32",
      },
    ],
    name: "hasPermission",
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
    inputs: [
      {
        name: "token",
        type: "address",
      },
    ],
    name: "allowRecoverability",
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
    name: "getInitializationBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
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
        name: "_entity",
        type: "address",
      },
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "revokePermission",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "transferToVault",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_entity",
        type: "address",
      },
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
      {
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getPermissionParam",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
      {
        name: "",
        type: "uint8",
      },
      {
        name: "",
        type: "uint240",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_sender",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
      {
        name: "_params",
        type: "uint256[]",
      },
    ],
    name: "canPerform",
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
    name: "getEVMScriptRegistry",
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
    name: "ANY_ENTITY",
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
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "removePermissionManager",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newManager",
        type: "address",
      },
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "setPermissionManager",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
    ],
    name: "getPermissionManager",
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
        name: "_entity",
        type: "address",
      },
      {
        name: "_app",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
      {
        name: "_manager",
        type: "address",
      },
    ],
    name: "createPermission",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionsCreator",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "EMPTY_PARAM_HASH",
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
    constant: true,
    inputs: [],
    name: "isPetrified",
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
    name: "BURN_ENTITY",
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
    inputs: [
      {
        name: "_who",
        type: "address",
      },
      {
        name: "_where",
        type: "address",
      },
      {
        name: "_what",
        type: "bytes32",
      },
      {
        name: "_how",
        type: "uint256[]",
      },
    ],
    name: "hasPermission",
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
    inputs: [
      {
        name: "_who",
        type: "address",
      },
      {
        name: "_where",
        type: "address",
      },
      {
        name: "_what",
        type: "bytes32",
      },
      {
        name: "_how",
        type: "bytes",
      },
    ],
    name: "hasPermission",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "entity",
        type: "address",
      },
      {
        indexed: true,
        name: "app",
        type: "address",
      },
      {
        indexed: true,
        name: "role",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "allowed",
        type: "bool",
      },
    ],
    name: "SetPermission",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "entity",
        type: "address",
      },
      {
        indexed: true,
        name: "app",
        type: "address",
      },
      {
        indexed: true,
        name: "role",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "paramsHash",
        type: "bytes32",
      },
    ],
    name: "SetPermissionParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "app",
        type: "address",
      },
      {
        indexed: true,
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "manager",
        type: "address",
      },
    ],
    name: "ChangePermissionManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        name: "script",
        type: "bytes",
      },
      {
        indexed: false,
        name: "input",
        type: "bytes",
      },
      {
        indexed: false,
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "ScriptResult",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "vault",
        type: "address",
      },
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RecoverToVault",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052620000176401000000006200001d810204565b6200023b565b6200003064010000000062000125810204565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a45440000000000000000602082015290156200010c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620000d0578181015183820152602001620000b6565b50505050905090810190601f168015620000fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506200012360001964010000000062000154810204565b565b60006200014f600080516020620029a183398151915264010000000062001e156200023382021704565b905090565b6200016764010000000062000125810204565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a454400000000000000006020820152901562000206576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181518152602001915080519060200190808383600083811015620000d0578181015183820152602001620000b6565b5062000230600080516020620029a1833981519152826401000000006200268d6200023782021704565b50565b5490565b9055565b612756806200024b6000396000f30060806040526004361061017c5763ffffffff60e060020a6000350416630803fac081146101815780630808343e146101aa57806309699ff5146101d05780630a8ed3db146101f457806315949ed71461021e5780631b5e75be1461025a5780631d63ff2b146102cf5780632914b9bd146102e457806332f0a3b5146103595780633d6ab68f1461036e5780636815c992146103835780636d6712d8146103f75780637e7db6e11461042157806380afdea8146104425780638b3dd749146104575780639d0effdb1461046c5780639d4941d814610496578063a03c5832146104b7578063a1658fad14610511578063a479e50814610578578063a5ed8bf81461058d578063a885508a146105a2578063afd925df146105c6578063b1905727146105f0578063be03847814610614578063c4d66de814610645578063c513f66e14610666578063d4aae0c41461067b578063de4796ed14610690578063f516bc0e146106a5578063f520b58d146106ba578063fdef91061461072e575b600080fd5b34801561018d57600080fd5b5061019661079d565b604080519115158252519081900360200190f35b3480156101b657600080fd5b506101ce600160a060020a03600435166024356107c6565b005b3480156101dc57600080fd5b506101ce600160a060020a036004351660243561096d565b34801561020057600080fd5b506101ce600160a060020a0360043581169060243516604435610a09565b34801561022a57600080fd5b50610248600160a060020a0360043581169060243516604435610a45565b60408051918252519081900360200190f35b34801561026657600080fd5b5060408051602060046084358181013583810280860185019096528085526101969583359560248035600160a060020a039081169760443590911696606435963696919560a495949091019282919085019084908082843750949750610a879650505050505050565b3480156102db57600080fd5b50610248610ac2565b3480156102f057600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261033d943694929360249392840191908190840183828082843750949750610ac79650505050505050565b60408051600160a060020a039092168252519081900360200190f35b34801561036557600080fd5b5061033d610bad565b34801561037a57600080fd5b50610248610c25565b34801561038f57600080fd5b5060408051606435600481810135602081810285810182019096528185526101ce95600160a060020a0384358116966024803590921696604435963696909560849593949290920192909182919085019084908082843750949750610c379650505050505050565b34801561040357600080fd5b50610196600160a060020a0360043581169060243516604435610d00565b34801561042d57600080fd5b50610196600160a060020a0360043516610d27565b34801561044e57600080fd5b50610248610d2d565b34801561046357600080fd5b50610248610d5d565b34801561047857600080fd5b506101ce600160a060020a0360043581169060243516604435610d88565b3480156104a257600080fd5b506101ce600160a060020a0360043516610e1f565b3480156104c357600080fd5b506104e4600160a060020a03600435811690602435166044356064356110ae565b6040805160ff9485168152929093166020830152600160f060020a03168183015290519081900360600190f35b34801561051d57600080fd5b506040805160206004604435818101358381028086018501909652808552610196958335600160a060020a031695602480359636969560649593949201929182918501908490808284375094975061112c9650505050505050565b34801561058457600080fd5b5061033d61127a565b34801561059957600080fd5b5061033d61132f565b3480156105ae57600080fd5b506101ce600160a060020a0360043516602435611335565b3480156105d257600080fd5b506101ce600160a060020a03600435811690602435166044356113cb565b3480156105fc57600080fd5b5061033d600160a060020a0360043516602435611460565b34801561062057600080fd5b506101ce600160a060020a036004358116906024358116906044359060643516611491565b34801561065157600080fd5b506101ce600160a060020a03600435166115f3565b34801561067257600080fd5b5061024861173e565b34801561068757600080fd5b5061033d611750565b34801561069c57600080fd5b5061019661177b565b3480156106b157600080fd5b5061033d61178e565b3480156106c657600080fd5b50604080516064356004818101356020818102858101820190965281855261019695600160a060020a03843581169660248035909216966044359636969095608495939492909201929091829190850190849080828437509497506117939650505050505050565b34801561073a57600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261019694600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506118379650505050505050565b6000806107a8610d5d565b905080158015906107c05750806107bd61184d565b10155b91505090565b604080516000808252602082019092526000805160206126eb833981519152916107f69133918491905b5061112c565b60408051808201909152600f81527f4150505f415554485f4641494c4544000000000000000000000000000000000060208201529015156108b85760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561087d578181015183820152602001610865565b50505050905090810190601f1680156108aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50828260006108c78383611460565b600160a060020a0316146040805190810160405280601481526020017f41434c5f4558495354454e545f4d414e414745520000000000000000000000008152509015156109595760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b5061096660018686611851565b5050505050565b81816109798282611460565b604080518082019091526013815260008051602061270b833981519152602082015290600160a060020a031633146109f65760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b50610a0360018585611851565b50505050565b610a408383836000604051908082528060200260200182016040528015610a3a578160200160208202803883390190505b50610c37565b505050565b600060016000806000610a598888886118d0565b81526020808201929092526040908101600090812054845291830193909352910190205490505b9392505050565b60006000805160206126cb833981519152861415610aa757506001610ab9565b610ab6866000878787876119a4565b90505b95945050505050565b600081565b6000610ad161127a565b600160a060020a03166304bf2a7f836040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b2f578181015183820152602001610b17565b50505050905090810190601f168015610b5c5780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015610b7b57600080fd5b505af1158015610b8f573d6000803e3d6000fd5b505050506040513d6020811015610ba557600080fd5b505192915050565b6000610bb7611750565b600160a060020a03166332f0a3b56040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610bf457600080fd5b505af1158015610c08573d6000803e3d6000fd5b505050506040513d6020811015610c1e57600080fd5b5051905090565b6000805160206126eb83398151915281565b60008383610c458282611460565b604080518082019091526013815260008051602061270b833981519152602082015290600160a060020a03163314610cc25760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b506000845111610ce0576000805160206126cb833981519152610ce9565b610ce984611b91565b9250610cf787878786611d33565b50505050505050565b60408051600080825260208201909252610d1c85858584611793565b91505b509392505050565b50600190565b6000610d587fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b611e15565b905090565b6000610d587febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e611e15565b8181610d948282611460565b604080518082019091526013815260008051602061270b833981519152602082015290600160a060020a03163314610e115760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b506109668585856000611d33565b6000806000610e2d84610d27565b60408051808201909152601281527f5245434f5645525f444953414c4c4f57454400000000000000000000000000006020820152901515610eb35760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b50610ebc610bad565b9250610ec783611e1d565b60408051808201909152601a81527f5245434f5645525f5641554c545f4e4f545f434f4e54524143540000000000006020820152901515610f4d5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b50600160a060020a0384161515610f9e5760405130319250600160a060020a0384169083156108fc029084906000818181858888f19350505050158015610f98573d6000803e3d6000fd5b5061105d565b5082610fb9600160a060020a0382163063ffffffff611e4a16565b9150610fd5600160a060020a038216848463ffffffff611f4a16565b60408051808201909152601d81527f5245434f5645525f544f4b454e5f5452414e534645525f4641494c4544000000602082015290151561105b5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b505b83600160a060020a031683600160a060020a03167f596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02846040518082815260200191505060405180910390a350505050565b600080600080600160008060006110c68c8c8c6118d0565b81526020808201929092526040908101600090812054845291830193909352910190208054869081106110f557fe5b60009182526020909120015460ff8082169a6101008304909116995062010000909104600160f060020a0316975095505050505050565b60008061113761079d565b15156111465760009150610d1f565b61114e611750565b9050600160a060020a03811615156111695760009150610d1f565b80600160a060020a031663fdef910686308761118488611fb7565b60405160e060020a63ffffffff8716028152600160a060020a03808616600483019081529085166024830152604482018490526080606483019081528351608484015283519192909160a490910190602085019080838360005b838110156111f65781810151838201526020016111de565b50505050905090810190601f1680156112235780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561124557600080fd5b505af1158015611259573d6000803e3d6000fd5b505050506040513d602081101561126f57600080fd5b505195945050505050565b600080611285611750565b604080517fbe00bbd80000000000000000000000000000000000000000000000000000000081527fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb60048201527fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6160248201529051600160a060020a03929092169163be00bbd8916044808201926020929091908290030181600087803b158015610b7b57600080fd5b60001981565b81816113418282611460565b604080518082019091526013815260008051602061270b833981519152602082015290600160a060020a031633146113be5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b50610a0360008585611851565b81816113d78282611460565b604080518082019091526013815260008051602061270b833981519152602082015290600160a060020a031633146114545760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b50610966858585611851565b6000600260006114708585611fc1565b8152602081019190915260400160002054600160a060020a03169392505050565b604080516000808252602082019092526000805160206126eb833981519152916114bf9133918491906107f0565b60408051808201909152600f81527f4150505f415554485f4641494c4544000000000000000000000000000000000060208201529015156115455760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b50838360006115548383611460565b600160a060020a0316146040805190810160405280601481526020017f41434c5f4558495354454e545f4d414e414745520000000000000000000000008152509015156115e65760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b50610cf78787878761208a565b6115fb610d5d565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a45440000000000000000602082015290156116805760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b506116896120af565b611691611750565b60408051808201909152601481527f41434c5f415554485f494e49545f4b45524e454c000000000000000000000000602082015290600160a060020a031633146117205760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b5061173b81306000805160206126eb8339815191528261208a565b50565b6000805160206126cb83398151915281565b6000610d587f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b611e15565b6000600019611788610d5d565b14905090565b600181565b60008060008060006117a68989896118d0565b8152602081019190915260400160002054915081158015906117d057506117d08288888888610a87565b156117de576001925061182d565b6000806117ee60001989896118d0565b81526020810191909152604001600020549050801580159061181a575061181a81600019888888610a87565b15611828576001925061182d565b600092505b5050949350505050565b6000610ab985858561184886612177565b611793565b4390565b82600260006118608585611fc1565b8152602081019190915260409081016000908120805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039485161790559051858316928492908616917ff3addc8b8e25ee11528a61b0e65092cae0666ef0ec0c64cb303993c88d689b4d9190a4505050565b604080517f5045524d495353494f4e000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000600160a060020a038088168202602a850152861602603e8301526052808301859052835180840390910181526072909201928390528151600093918291908401908083835b602083106119705780518252601f199092019160209182019101611951565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120979650505050505050565b60006119ae6126aa565b600088815260016020526040812054819063ffffffff8a16106119d45760009350611b84565b60008a8152600160205260409020805463ffffffff8b169081106119f457fe5b600091825260209182902060408051606081018252929091015460ff808216808552610100830490911694840194909452620100009004600160f060020a031690820152935060cc1415611a5757611a50838b8a8a8a8a612221565b9350611b84565b5060408201518251600160f060020a039091169060ff1660cb1415611aa357611a878360400151898989896123c6565b611a92576000611a95565b60015b60ff16915060019050611b33565b825160ff1660c81415611abf57611ab861184d565b9150611b33565b825160ff1660c91415611ad457611ab8612502565b825160ff1660cd1415611af6578260400151600160f060020a03169150611b33565b8451835160ff1610611b0b5760009350611b84565b82518551869160ff16908110611b1d57fe5b90602001906020020151600160f060020a031691505b6007836020015160ff16600c811115611b4857fe5b600c811115611b5357fe5b1415611b6457600082119350611b84565b611b8182846020015160ff16600c811115611b7b57fe5b83612506565b93505b5050509695505050505050565b6000806000806000611ba16126aa565b8660405160200180828051906020019060200280838360005b83811015611bd2578181015183820152602001611bba565b505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310611c1a5780518252601f199092019160209182019101611bfb565b51815160209384036101000a6000190180199092169116179052604080519290940182900390912060008181526001909252929020805492995097505015159150611d28905057600092505b8651831015611d28578683815181101515611c7d57fe5b906020019060200201519150606060405190810160405280611c9e846125c3565b60ff168152602001611caf846125e9565b60ff9081168252600160f060020a03858116602093840152875460018082018a5560008a815285902086519201805495870151604088015160ff199097169386169390931761ff00191661010093909516929092029390931761ffff166201000094909216939093021790915593909301929050611c66565b509295945050505050565b60008082600080611d458989896118d0565b81526020810191909152604001600020558215801592508290611d7657506000805160206126cb8339815191528314155b60408051841515815290519192508591600160a060020a0380891692908a16917f759b9a74d5354b5801710a0c1b283cc9f0d32b607ac8ced10c83ac8e75c77d529181900360200190a48015611e0d576040805184815290518591600160a060020a0380891692908a16917f8dfee25d92d73b8c9b868f9fa3e215cc1981033f426e53803e3da4f09a2cfc30919081900360200190a45b505050505050565b5490565b5490565b600080600160a060020a0383161515611e395760009150611e44565b823b90506000811191505b50919050565b60408051600160a060020a038316602480830191909152825180830390910181526044909101909152602081018051600160e060020a03167f70a08231000000000000000000000000000000000000000000000000000000001790526000908180611eb5868461260e565b60408051808201909152601c81527f534146455f4552435f32305f42414c414e43455f52455645525445440000000060208201529193509150821515611f405760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b5095945050505050565b60408051600160a060020a03841660248201526044808201849052825180830390910181526064909101909152602081018051600160e060020a03167fa9059cbb00000000000000000000000000000000000000000000000000000000179052600090610d1c858261263f565b8051602002815290565b604080517f524f4c45000000000000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000600160a060020a0386160260248301526038808301859052835180840390910181526058909201928390528151600093918291908401908083835b602083106120575780518252601f199092019160209182019101612038565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209695505050505050565b6120a48484846000805160206126cb833981519152611d33565b610a03818484611851565b6120b7610d5d565b60408051808201909152601881527f494e49545f414c52454144595f494e495449414c495a454400000000000000006020820152901561213c5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b5061217561214861184d565b7febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e9063ffffffff61268d16565b565b606060006020835181151561218857fe5b049050806020028351146040805190810160405280601a81526020017f434f4e56455253494f4e5f494d50524f5045525f4c454e47544800000000000081525090151561221a5760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360008381101561087d578181015183820152602001610865565b5082525090565b60008080808080808080600c8f6020015160ff16600c81111561224057fe5b600c81111561224b57fe5b141561229f576122678f60400151600160f060020a0316612691565b9199509750955061227c8e898f8f8f8f6119a4565b94506122988e8661228d578761228f565b885b8f8f8f8f6119a4565b98506123b4565b6122b58f60400151600160f060020a0316612691565b5090945092506122c98e858f8f8f8f6119a4565b915060088f6020015160ff16600c8111156122e057fe5b600c8111156122eb57fe5b14156122fa57811598506123b4565b8180156123245750600a8f6020015160ff16600c81111561231757fe5b600c81111561232257fe5b145b1561233257600198506123b4565b8115801561235d575060098f6020015160ff16600c81111561235057fe5b600c81111561235b57fe5b145b1561236b57600098506123b4565b6123798e848f8f8f8f6119a4565b9050600b8f6020015160ff16600c81111561239057fe5b600c81111561239b57fe5b14156123b057801515821515141598506123b4565b8098505b50505050505050509695505050505050565b604051600160a060020a0385811660248301908152908516604483015260648201849052608060848301908152835160a484015283516000937f2a1510900000000000000000000000000000000000000000000000000000000093606093869384938493849389938f938f938f938f939192909160c490910190602080860191028083838d5b8381101561246457818101518382015260200161244c565b505050509050019550505050505060405160208183030381529060405290600160e060020a031916602082018051600160e060020a038381831617835250505050945061753093506000808651602088018f88fa92508215156124ca57600096506124f3565b3d9150602082146124de57600096506124f3565b604051826000823e8051915060008152508096505b50505050505095945050505050565b4290565b6000600183600c81111561251657fe5b14156125255750828114610a80565b600283600c81111561253357fe5b1415612543575082811415610a80565b600383600c81111561255157fe5b14156125605750808311610a80565b600483600c81111561256e57fe5b141561257d5750808310610a80565b600583600c81111561258b57fe5b141561259b575080831015610a80565b600683600c8111156125a957fe5b14156125b9575080831115610a80565b5060009392505050565b7f0100000000000000000000000000000000000000000000000000000000000000900490565b7e01000000000000000000000000000000000000000000000000000000000000900490565b6000806000806040516020818751602089018a5afa9250600083111561263357805191505b50909590945092505050565b6000806040516020818551602087016000895af16000811115612683573d8015612670576020811461267957612681565b60019350612681565b600183511493505b505b5090949350505050565b9055565b9064010000000082049068010000000000000000830490565b6040805160608101825260008082526020820181905291810191909152905600290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630b719b33c83b8e5d300c521cb8b54ae9bd933996a14bef8c2f4e0285d2d2400a41434c5f415554485f4e4f5f4d414e4147455200000000000000000000000000a165627a7a7230582029325bccd0752f9d3193855a663da4745f85b7767890e9f6c86d7ee49c01fba80029ebb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e";

export class ACL__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ACL> {
    return super.deploy(overrides || {}) as Promise<ACL>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ACL {
    return super.attach(address) as ACL;
  }
  connect(signer: Signer): ACL__factory {
    return super.connect(signer) as ACL__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ACLInterface {
    return new utils.Interface(_abi) as ACLInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ACL {
    return new Contract(address, _abi, signerOrProvider) as ACL;
  }
}
