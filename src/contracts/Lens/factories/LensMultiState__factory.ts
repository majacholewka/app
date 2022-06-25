/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  LensMultiState,
  LensMultiStateInterface,
} from "../LensMultiState";

const _abi = [
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "enum DataTypes.ProtocolState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class LensMultiState__factory {
  static readonly abi = _abi;
  static createInterface(): LensMultiStateInterface {
    return new utils.Interface(_abi) as LensMultiStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LensMultiState {
    return new Contract(address, _abi, signerOrProvider) as LensMultiState;
  }
}
