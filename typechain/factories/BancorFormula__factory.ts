/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BancorFormula, BancorFormulaInterface } from "../BancorFormula";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_supply",
        type: "uint256",
      },
      {
        name: "_connectorBalance",
        type: "uint256",
      },
      {
        name: "_connectorWeight",
        type: "uint32",
      },
      {
        name: "_depositAmount",
        type: "uint256",
      },
    ],
    name: "calculatePurchaseReturn",
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
        name: "_supply",
        type: "uint256",
      },
      {
        name: "_connectorBalance",
        type: "uint256",
      },
      {
        name: "_connectorWeight",
        type: "uint32",
      },
      {
        name: "_sellAmount",
        type: "uint256",
      },
    ],
    name: "calculateSaleReturn",
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
    inputs: [],
    name: "version",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "_fromConnectorBalance",
        type: "uint256",
      },
      {
        name: "_fromConnectorWeight",
        type: "uint32",
      },
      {
        name: "_toConnectorBalance",
        type: "uint256",
      },
      {
        name: "_toConnectorWeight",
        type: "uint32",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateCrossConnectorReturn",
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
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60c0604052600360808190527f302e33000000000000000000000000000000000000000000000000000000000060a0908152620000409160009190620007f7565b503480156200004e57600080fd5b506001606060020a641c35fedd1502036021556001605e60020a646c3390ecc902036022556001606160020a640cf801476102036023556001605f60020a6431bdb23e1d02036024556001605b60020a6502fb1d8fe08302036025556001605a60020a6505b771955b3702036026556001605960020a650af67a93bb5102036027556001605860020a6515060c256cb302036028556001605860020a651428a2f98d7302036029556001605660020a654d51566397090203602a556001605560020a65944620b0e70f0203602b557011c592761c666fffffffffffffffffffff602c5570110a688680a757ffffffffffffffffffff602d55701056f1b5bedf77ffffffffffffffffffff602e55700faadceceeff8bffffffffffffffffffff602f55700f05dc6b27edadffffffffffffffffffff603055700e67a5a25da4107fffffffffffffffffff603155700dcff115b14eedffffffffffffffffffff603255700d3e7a392431239fffffffffffffffffff603355700cb2ff529eb71e4fffffffffffffffffff603455700c2d415c3db974afffffffffffffffffff603555700bad03e7d883f69bffffffffffffffffff603655700b320d03b2c343d5ffffffffffffffffff603755700abc25204e02828dffffffffffffffffff603855700a4b16f74ee4bb207fffffffffffffffff6039557009deaf736ac1f569ffffffffffffffffff603a55700976bd9952c7aa957fffffffffffffffff603b557009131271922eaa606fffffffffffffffff603c557008b380f3558668c46fffffffffffffffff603d55700857ddf0117efa215bffffffffffffffff603e556001608360020a03603f557007abbf6f6abb9d087fffffffffffffffff60405570075af62cbac95f7dfa7fffffffffffffff60415570070d7fb7452e187ac13fffffffffffffff6042557006c3390ecc8af379295fffffffffffffff60435570067c00a3b07ffc01fd6fffffffffffffff604455700637b647c39cbb9d3d27ffffffffffffff6045557005f63b1fc104dbd39587ffffffffffffff6046557005b771955b36e12f7235ffffffffffffff60475570057b3d49dda84556d6f6ffffffffffffff60485570054183095b2c8ececf30ffffffffffffff60495570050a28be635ca2b888f77fffffffffffff604a557004d5156639708c9db33c3fffffffffffff604b557004a23105873875bd52dfdfffffffffffff604c55700471649d87199aa990756fffffffffffff604d557004429a21a029d4c1457cfbffffffffffff604e55700415bc6d6fb7dd71af2cb3ffffffffffff604f557003eab73b3bbfe282243ce1ffffffffffff6050557003c1771ac9fb6b4c18e229ffffffffffff605155700399e96897690418f785257fffffffffff605255700373fc456c53bb779bf0ea9fffffffffff60535570034f9e8e490c48e67e6ab8bfffffffffff60545570032cbfd4a7adc790560b3337ffffffffff60555570030b50570f6e5d2acca94613ffffffffff6056557002eb40f9f620fda6b56c2861ffffffffff6057557002cc8340ecb0d0f520a6af58ffffffffff6058557002af09481380a0a35cf1ba02ffffffffff605955700292c5bdd3b92ec810287b1b3fffffffff605a55700277abdcdab07d5a77ac6d6b9fffffffff605b5570025daf6654b1eaa55fd64df5efffffffff605c55700244c49c648baa98192dce88b7ffffffff605d5570022ce03cd5619a311b2471268bffffffff605e55700215f77c045fbe885654a44a0fffffffff605f556001608160020a036060557001eaefdbdaaee7421fc4d3ede5ffffffff6061557001d6bd8b2eb257df7e8ca57b09bfffffff6062557001c35fedd14b861eb0443f7f133fffffff6063557001b0ce43b322bcde4a56e8ada5afffffff60645570019f0028ec1fff007f5a195a39dfffffff60655570018ded91f0e72ee74f49b15ba527ffffff60665570017d8ec7f04136f4e5615fd41a63ffffff60675570016ddc6556cdb84bdc8d12d22e6fffffff60685570015ecf52776a1155b5bd8395814f7fffff60695570015060c256cb23b3b3cc3754cf40ffffff606a557001428a2f98d728ae223ddab715be3fffff606b5570013545598e5c23276ccf0ede68034fffff606c557001288c4161ce1d6f54b7f61081194fffff606d5570011c592761c666aa641d5a01a40f17ffff606e55700110a688680a7530515f3e6e6cfdcdffff606f557001056f1b5bedf75c6bcb2ce8aed428ffff6070556ffaadceceeff8a0890f3875f008277fff6071556ff05dc6b27edad306388a600f6ba0bfff6072556fe67a5a25da41063de1495d5b18cdbfff6073556fdcff115b14eedde6fc3aa5353f2e4fff6074556fd3e7a3924312399f9aae2e0f868f8fff6075556fcb2ff529eb71e41582cccd5a1ee26fff6076556fc2d415c3db974ab32a51840c0b67edff6077556fbad03e7d883f69ad5b0a186184e06bff6078556fb320d03b2c343d4829abd6075f0cc5ff6079556fabc25204e02828d73c6e80bcdb1a95bf607a556fa4b16f74ee4bb2040a1ec6c15fbbf2df607b556f9deaf736ac1f569deb1b5ae3f36c130f607c556f976bd9952c7aa957f5937d790ef65037607d556f9131271922eaa6064b73a22d0bd4f2bf607e556f8b380f3558668c46c91c49a2f8e967b9607f556f857ddf0117efa215952912839f6473e66080556200089c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200083a57805160ff19168380011785556200086a565b828001600101855582156200086a579182015b828111156200086a5782518255916020019190600101906200084d565b50620008789291506200087c565b5090565b6200089991905b8082111562000878576000815560010162000883565b90565b6115e180620008ac6000396000f3006080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166329a00e7c811461006657806349f9b0f71461009f57806354fd4d50146100c657806365098bb314610150575b600080fd5b34801561007257600080fd5b5061008d60043560243563ffffffff6044351660643561017e565b60408051918252519081900360200190f35b3480156100ab57600080fd5b5061008d60043560243563ffffffff6044351660643561025e565b3480156100d257600080fd5b506100db61035b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101155781810151838201526020016100fd565b50505050905090810190601f1680156101425780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015c57600080fd5b5061008d60043563ffffffff60243581169060443590606435166084356103e9565b600080600080600080891180156101955750600088115b80156101a7575060008763ffffffff16115b80156101bc5750620f424063ffffffff881611155b15156101c757600080fd5b8515156101d75760009450610252565b63ffffffff8716620f4240141561020a57876101f98a8863ffffffff6104fe16565b81151561020257fe5b049450610252565b61021a868963ffffffff61060816565b915061022b828989620f42406106ad565b909450925060ff83166102448a8663ffffffff6104fe16565b9060020a9004905088810394505b50505050949350505050565b60008060008060008060008a1180156102775750600089115b8015610289575060008863ffffffff16115b801561029e5750620f424063ffffffff891611155b80156102aa5750898711155b15156102b557600080fd5b8615156102c5576000955061034e565b898714156102d55788955061034e565b63ffffffff8816620f4240141561030857896102f78a8963ffffffff6104fe16565b81151561030057fe5b04955061034e565b868a03925061031c8a84620f42408b6106ad565b9095509350610331898663ffffffff6104fe16565b91505060ff831660020a88028481830381151561034a57fe5b0495505b5050505050949350505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103e15780601f106103b6576101008083540402835291602001916103e1565b820191906000526020600020905b8154815290600101906020018083116103c457829003601f168201915b505050505081565b60008060008060008060008b118015610408575060008a63ffffffff16115b801561041d5750620f424063ffffffff8b1611155b80156104295750600089115b801561043b575060008863ffffffff16115b80156104505750620f424063ffffffff891611155b151561045b57600080fd5b8763ffffffff168a63ffffffff1614156104a05761047f8b8863ffffffff61060816565b61048f8a8963ffffffff6104fe16565b81151561049857fe5b0495506104f0565b6104b08b8863ffffffff61060816565b92506104be838c8c8b6106ad565b90955093506104d3898663ffffffff6104fe16565b91505060ff831660020a8802848183038115156104ec57fe5b0495505b505050505095945050505050565b6000808315156105115760009150610601565b5082820282848281151561052157fe5b60408051808201909152601181527f4d4154485f4d554c5f4f564552464c4f57000000000000000000000000000000602082015292919004146105fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156105c15781810151838201526020016105a9565b50505050905090810190601f1680156105ee5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508091505b5092915050565b60408051808201909152601181527f4d4154485f4144445f4f564552464c4f57000000000000000000000000000000602082015260009083830190848210156105fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382528381815181526020019150805190602001908083836000838110156105c15781810151838201526020016105a9565b600080808080807002000000000000000000000000000000008a106106d157600080fd5b88607f60020a8b028115156106e257fe5b04925070015bf0a8b1457695355fb8ac404e7a79e383101561070e5761070783610797565b935061071a565b61071783610bbc565b93505b8663ffffffff168863ffffffff16850281151561073357fe5b0491507008000000000000000000000000000000008210156107635761075882610c8f565b607f9550955061078a565b61076c8261109c565b905061078460ff607f8390031660020a830482611129565b81955095505b5050505094509492505050565b6000808080806fd3094c70f034de4b96ff7d5b6f99fcd886106107e6576f4000000000000000000000000000000093909301926fd3094c70f034de4b96ff7d5b6f99fcd8607f60020a87020495505b6fa45af1e1f40c333b3de1db4dd55f29a7861061082f576f2000000000000000000000000000000093909301926fa45af1e1f40c333b3de1db4dd55f29a7607f60020a87020495505b6f910b022db7ae67ce76b441c27035c6a18610610878576f1000000000000000000000000000000093909301926f910b022db7ae67ce76b441c27035c6a1607f60020a87020495505b6f88415abbe9a76bead8d00cf112e4d4a886106108c1576f0800000000000000000000000000000093909301926f88415abbe9a76bead8d00cf112e4d4a8607f60020a87020495505b6f84102b00893f64c705e841d5d4064bd3861061090a576f0400000000000000000000000000000093909301926f84102b00893f64c705e841d5d4064bd3607f60020a87020495505b6f8204055aaef1c8bd5c3259f4822735a28610610953576f0200000000000000000000000000000093909301926f8204055aaef1c8bd5c3259f4822735a2607f60020a87020495505b6f810100ab00222d861931c15e39b44e99861061099c576f0100000000000000000000000000000093909301926f810100ab00222d861931c15e39b44e99607f60020a87020495505b6f808040155aabbbe9451521693554f73386106109e4576e80000000000000000000000000000093909301926f808040155aabbbe9451521693554f733607f60020a87020495505b6f7fffffffffffffffffffffffffffffff1986019250829150607f60020a8280020490507001000000000000000000000000000000008381038302049390930192607f60020a8282020491507002000000000000000000000000000000006faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8490038302049390930192607f60020a8282020491507003000000000000000000000000000000006f999999999999999999999999999999998490038302049390930192607f60020a8282020491507004000000000000000000000000000000006f924924924924924924924924924924928490038302049390930192607f60020a8282020491507005000000000000000000000000000000006f8e38e38e38e38e38e38e38e38e38e38e8490038302049390930192607f60020a8282020491507006000000000000000000000000000000006f8ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b8490038302049390930192607f60020a8282020491507007000000000000000000000000000000006f89d89d89d89d89d89d89d89d89d89d898490038302049390930192607f60020a8282020491507008000000000000000000000000000000006f888888888888888888888888888888888490038302049390930195945050505050565b60008080807001000000000000000000000000000000008510610c0057610be8607f60020a860461154c565b60ff8116600281900a90960495607f60020a02935091505b607f60020a851115610c5f5750607f5b60008160ff161115610c5f57607f60020a8580020494507001000000000000000000000000000000008510610c56576002948590049460ff600019830116900a92909201915b60001901610c10565b6f05b9de1d10bf4103d647b0955897ba806f03f80fe03f80fe03f80fe03f80fe03f884020493505b505050919050565b6000670168244fdac78000607f60020a6f0fffffffffffffffffffffffffffffff84168080028290048082028390048083028490049485026710e1b3be415a00009092026705a0913f6b1e000091909102010192909181830204905080664807432bc180000283019250607f60020a828202811515610d0a57fe5b04905080660c0135dca040000283019250607f60020a828202811515610d2c57fe5b049050806601b707b1cdc0000283019250607f60020a828202811515610d4e57fe5b049050806536e0f639b8000283019250607f60020a828202811515610d6f57fe5b04905080650618fee9f8000283019250607f60020a828202811515610d9057fe5b04905080649c197dcc000283019250607f60020a828202811515610db057fe5b04905080640e30dce4000283019250607f60020a828202811515610dd057fe5b0490508064012ebd13000283019250607f60020a828202811515610df057fe5b049050806317499f000283019250607f60020a828202811515610e0f57fe5b049050806301a9d4800283019250607f60020a828202811515610e2e57fe5b04905080621c63800283019250607f60020a828202811515610e4c57fe5b049050806201c6380283019250607f60020a828202811515610e6a57fe5b04905080611ab80283019250607f60020a828202811515610e8757fe5b0490508061017c0283019250607f60020a828202811515610ea457fe5b0490508060140283019250607f60020a828202811515610ec057fe5b6721c3677c82b40000919004938401048201607f60020a019290506f10000000000000000000000000000000851615610f1d5770018ebef9eac820ae8682b9793ac6d1e7767001c3d6a24ed82218787d624d3e5eba95f984020492505b6f20000000000000000000000000000000851615610f5f577001368b2fc6f9609fe7aceb46aa619baed470018ebef9eac820ae8682b9793ac6d1e77884020492505b6f40000000000000000000000000000000851615610fa0576fbc5ab1b16779be3575bd8f0520a9f21f7001368b2fc6f9609fe7aceb46aa619baed584020492505b607f60020a851615610fd4576f454aaa8efe072e7f6ddbab84b40a55c96fbc5ab1b16779be3575bd8f0520a9f21e84020492505b700100000000000000000000000000000000851615611015576f0960aadc109e7a3bf4578099615711ea6f454aaa8efe072e7f6ddbab84b40a55c584020492505b700200000000000000000000000000000000851615611055576e2bf84208204f5977f9a8cf01fdce3d6f0960aadc109e7a3bf4578099615711d784020492505b700400000000000000000000000000000000851615611093576d03c6ab775dd0b95b4cbee7e65d116e2bf84208204f5977f9a8cf01fdc30784020492505b50909392505050565b60006020607f825b8160ff168360010160ff1610156110e957600260ff8484011604905084600160ff8316608081106110d157fe5b0154106110e0578092506110e4565b8091505b6110a4565b84600160ff8416608081106110fa57fe5b01541061110957819350610c87565b84600160ff85166080811061111a57fe5b01541061006157829350610c87565b6000806000849150600090508360ff168583029060020a90049150816f03442c4e6074a82f1797f72ac000000002810190508360ff168583029060020a90049150816f0116b96f757c380fb287fd0e4000000002810190508360ff168583029060020a90049150816e45ae5bdd5f0e03eca1ff439000000002810190508360ff168583029060020a90049150816e0defabf91302cd95b9ffda5000000002810190508360ff168583029060020a90049150816e02529ca9832b22439efff9b800000002810190508360ff168583029060020a90049150816d54f1cf12bd04e516b6da8800000002810190508360ff168583029060020a90049150816d0a9e39e257a09ca2d6db5100000002810190508360ff168583029060020a90049150816d012e066e7b839fa050c30900000002810190508360ff168583029060020a90049150816c1e33d7d926c329a1ad1a80000002810190508360ff168583029060020a90049150816c02bee513bdb4a6b19b5f80000002810190508360ff168583029060020a90049150816b3a9316fa79b88eccf2a0000002810190508360ff168583029060020a90049150816b048177ebe1fa81237520000002810190508360ff168583029060020a90049150816a5263fe90242dcbacf0000002810190508360ff168583029060020a90049150816a057e22099c030d9410000002810190508360ff168583029060020a90049150816957e22099c030d941000002810190508360ff168583029060020a900491508169052b6b5456997631000002810190508360ff168583029060020a9004915081684985f67696bf74800002810190508360ff168583029060020a90049150816803dea12ea99e49800002810190508360ff168583029060020a90049150816731880f2214b6e00002810190508360ff168583029060020a900491508167025bcff56eb3600002810190508360ff168583029060020a9004915081661b722e10ab100002810190508360ff168583029060020a90049150816601317c7007700002810190508360ff168583029060020a9004915081650cba84aafa0002810190508360ff168583029060020a90049150816482573a0a0002810190508360ff168583029060020a90049150816405035ad90002810190508360ff168583029060020a9004915081632f881b0002810190508360ff168583029060020a90049150816301b2934002810190508360ff168583029060020a9004915081620efc4002810190508360ff168583029060020a9004915081617fe002810190508360ff168583029060020a900491508161042002810190508360ff168583029060020a9004915081602102810190508360ff168583029060020a9004915081600102810190508360ff1660019060020a02856f0688589cc0e9505e2f2fee55800000008381151561154057fe5b04010195945050505050565b6000808061010084101561157b575b6001841115611576576002909304926001919091019061155b565b610601565b5060805b60008160ff1611156106015760ff811660020a84106115a85760ff811660020a90930492908117905b600260ff9091160461157f5600a165627a7a723058209465847e84e6c4aa1f61f6082a52a98947fc2febcbc117c61f7f5c0b26e7a0af0029";

export class BancorFormula__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BancorFormula> {
    return super.deploy(overrides || {}) as Promise<BancorFormula>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BancorFormula {
    return super.attach(address) as BancorFormula;
  }
  connect(signer: Signer): BancorFormula__factory {
    return super.connect(signer) as BancorFormula__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BancorFormulaInterface {
    return new utils.Interface(_abi) as BancorFormulaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BancorFormula {
    return new Contract(address, _abi, signerOrProvider) as BancorFormula;
  }
}
