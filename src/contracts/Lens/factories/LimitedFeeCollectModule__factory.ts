/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LimitedFeeCollectModule,
  LimitedFeeCollectModuleInterface,
} from "../LimitedFeeCollectModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
      {
        internalType: "address",
        name: "moduleGlobals",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MintLimitExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleDataMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MODULE_GLOBALS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
    ],
    name: "getPublicationData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "collectLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentCollects",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "referralFee",
            type: "uint16",
          },
          {
            internalType: "bool",
            name: "followerOnly",
            type: "bool",
          },
        ],
        internalType: "struct ProfilePublicationData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializePublicationCollectModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "referrerProfileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processCollect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405162001512380380620015128339810160408190526100319161012a565b81816001600160a01b03811661005a576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527f4e84a529f4c627b5e787037d117873af1018768804cca3c7f0d47041fe2c89ed9060200160405180910390a2506001600160a01b0381166100c4576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660a08190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250505061015d565b80516001600160a01b038116811461012557600080fd5b919050565b6000806040838503121561013d57600080fd5b6101468361010e565b91506101546020840161010e565b90509250929050565b60805160a051611357620001bb600039600081816101df01528181610243015281816104ba01528181610673015281816107910152818161089f0152610b1d0152600081816101a0015281816105e70152610c5801526113576000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633f5038921461005c57806388ffe8511461019b578063a4c52b86146101da578063c233f95114610201578063e49c3dda14610221575b600080fd5b61012861006a366004610f81565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091525060009182526020828152604080842092845291815291819020815160e0810183528154815260018201549381019390935260028101549183019190915260038101546001600160a01b0390811660608401526004909101549081166080830152600160a01b810461ffff1660a0830152600160b01b900460ff16151560c082015290565b6040516101929190600060e082019050825182526020830151602083015260408301516040830152606083015160018060a01b038082166060850152806080860151166080850152505061ffff60a08401511660a083015260c0830151151560c083015292915050565b60405180910390f35b6101c27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610192565b6101c27f000000000000000000000000000000000000000000000000000000000000000081565b61021461020f366004610fec565b610236565b6040516101929190611097565b61023461022f3660046110c2565b6104af565b005b6060336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610281576040516313bd2e8360e31b815260040160405180910390fd5b60008080808080610294888a018a611153565b95509550955095509550955085600014806102b557506102b3846105c5565b155b806102c757506001600160a01b038316155b806102d7575061271061ffff8316115b806102e0575084155b156102fe576040516348be0eb360e01b815260040160405180910390fd5b856000808d815260200190815260200160002060008c815260200190815260200160002060000181905550846000808d815260200190815260200160002060008c815260200190815260200160002060020181905550836000808d815260200190815260200160002060008c815260200190815260200160002060030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550826000808d815260200190815260200160002060008c815260200190815260200160002060040160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000808d815260200190815260200160002060008c815260200190815260200160002060040160146101000a81548161ffff021916908361ffff160217905550806000808d815260200190815260200160002060008c815260200190815260200160002060040160166101000a81548160ff02191690831515021790555088888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929e9d5050505050505050505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104f8576040516313bd2e8360e31b815260040160405180910390fd5b600084815260208181526040808320868452909152902060040154600160b01b900460ff161561052c5761052c848661065a565b600084815260208181526040808320868452909152902080546001909101541061056957604051635b21dfd360e11b815260040160405180910390fd5b60008481526020818152604080832086845290915281206001018054909190610591906111d9565b90915550858414156105af576105aa858585858561095c565b6105bd565b6105bd868686868686610a34565b505050505050565b6040516343b938c560e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906343b938c590602401602060405180830381865afa158015610630573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065491906111f4565b92915050565b604051633648f48360e21b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d923d20c90602401602060405180830381865afa1580156106c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e69190611211565b905060006001600160a01b03821615610778576040516311470f4360e21b8152600481018590526001600160a01b0384811660248301526000604483015283169063451c3d0c90606401602060405180830381865afa15801561074d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077191906111f4565b905061088a565b60405163a9ec656360e01b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa1580156107e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108049190611211565b90506001600160a01b0381161580159061088657506040516370a0823160e01b81526001600160a01b0385811660048301528216906370a0823190602401602060405180830381865afa15801561085f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610883919061122e565b15155b9150505b801580156109385750826001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636352211e866040518263ffffffff1660e01b81526004016108eb91815260200190565b602060405180830381865afa158015610908573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092c9190611211565b6001600160a01b031614155b1561095657604051636992d36b60e11b815260040160405180910390fd5b50505050565b600084815260208181526040808320868452909152902060028101546003909101546001600160a01b031661099384848385610c01565b60008061099e610c53565b60008a8152602081815260408083208c84529091528120600401549294509092506001600160a01b03909116906127106109dc61ffff851688611247565b6109e69190611266565b905060006109f48288611288565b9050610a0b6001600160a01b0387168d8584610cdf565b8115610a2657610a266001600160a01b0387168d8785610cdf565b505050505050505050505050565b600084815260208181526040808320868452909152902060028101546003909101546001600160a01b0316610a6b84848385610c01565b600086815260208181526040808320888452909152812060040154600160a01b900461ffff16908080610a9c610c53565b9093509050612710610ab261ffff831688611247565b610abc9190611266565b915060009050610acc8287611288565b90508315610ba2576000612710610ae38684611247565b610aed9190611266565b9050610af98183611288565b6040516331a9108f60e11b8152600481018f90529092506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636352211e90602401602060405180830381865afa158015610b64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b889190611211565b9050610b9f6001600160a01b0388168e8385610cdf565b50505b60008a8152602081815260408083208c84529091529020600401546001600160a01b0390811690610bd79087168d8385610cdf565b8215610bf257610bf26001600160a01b0387168d8686610cdf565b50505050505050505050505050565b600080610c108587018761129f565b915091508281141580610c355750836001600160a01b0316826001600160a01b031614155b156105bd576040516346308bd560e01b815260040160405180910390fd5b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166398f965d16040518163ffffffff1660e01b81526004016040805180830381865afa158015610cb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd791906112cb565b915091509091565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180516001600160e01b03166323b872dd60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261095692879291600091610d77918516908490610dfe565b805190915015610df95780806020019051810190610d9591906111f4565b610df95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b505050565b6060610e0d8484600085610e17565b90505b9392505050565b606082471015610e785760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610df0565b6001600160a01b0385163b610ecf5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610df0565b600080866001600160a01b03168587604051610eeb9190611305565b60006040518083038185875af1925050503d8060008114610f28576040519150601f19603f3d011682016040523d82523d6000602084013e610f2d565b606091505b5091509150610f3d828286610f48565b979650505050505050565b60608315610f57575081610e10565b825115610f675782518084602001fd5b8160405162461bcd60e51b8152600401610df09190611097565b60008060408385031215610f9457600080fd5b50508035926020909101359150565b60008083601f840112610fb557600080fd5b50813567ffffffffffffffff811115610fcd57600080fd5b602083019150836020828501011115610fe557600080fd5b9250929050565b6000806000806060858703121561100257600080fd5b8435935060208501359250604085013567ffffffffffffffff81111561102757600080fd5b61103387828801610fa3565b95989497509550505050565b60005b8381101561105a578181015183820152602001611042565b838111156109565750506000910152565b6000815180845261108381602086016020860161103f565b601f01601f19169290920160200192915050565b602081526000610e10602083018461106b565b6001600160a01b03811681146110bf57600080fd5b50565b60008060008060008060a087890312156110db57600080fd5b8635955060208701356110ed816110aa565b94506040870135935060608701359250608087013567ffffffffffffffff81111561111757600080fd5b61112389828a01610fa3565b979a9699509497509295939492505050565b61ffff811681146110bf57600080fd5b80151581146110bf57600080fd5b60008060008060008060c0878903121561116c57600080fd5b86359550602087013594506040870135611185816110aa565b93506060870135611195816110aa565b925060808701356111a581611135565b915060a08701356111b581611145565b809150509295509295509295565b634e487b7160e01b600052601160045260246000fd5b60006000198214156111ed576111ed6111c3565b5060010190565b60006020828403121561120657600080fd5b8151610e1081611145565b60006020828403121561122357600080fd5b8151610e10816110aa565b60006020828403121561124057600080fd5b5051919050565b6000816000190483118215151615611261576112616111c3565b500290565b60008261128357634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561129a5761129a6111c3565b500390565b600080604083850312156112b257600080fd5b82356112bd816110aa565b946020939093013593505050565b600080604083850312156112de57600080fd5b82516112e9816110aa565b60208401519092506112fa81611135565b809150509250929050565b6000825161131781846020870161103f565b919091019291505056fea2646970667358221220a4b701fb0adf02014da43483504f2a9e1ba2fc82408ab67710e8dbffb64e862b64736f6c634300080a0033";

type LimitedFeeCollectModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LimitedFeeCollectModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LimitedFeeCollectModule__factory extends ContractFactory {
  constructor(...args: LimitedFeeCollectModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LimitedFeeCollectModule> {
    return super.deploy(
      hub,
      moduleGlobals,
      overrides || {}
    ) as Promise<LimitedFeeCollectModule>;
  }
  getDeployTransaction(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, moduleGlobals, overrides || {});
  }
  attach(address: string): LimitedFeeCollectModule {
    return super.attach(address) as LimitedFeeCollectModule;
  }
  connect(signer: Signer): LimitedFeeCollectModule__factory {
    return super.connect(signer) as LimitedFeeCollectModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitedFeeCollectModuleInterface {
    return new utils.Interface(_abi) as LimitedFeeCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LimitedFeeCollectModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LimitedFeeCollectModule;
  }
}
