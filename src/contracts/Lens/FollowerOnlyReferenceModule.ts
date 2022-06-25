/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface FollowerOnlyReferenceModuleInterface extends utils.Interface {
  functions: {
    "HUB()": FunctionFragment;
    "initializeReferenceModule(uint256,uint256,bytes)": FunctionFragment;
    "processComment(uint256,uint256,uint256,bytes)": FunctionFragment;
    "processMirror(uint256,uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initializeReferenceModule",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "processComment",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "processMirror",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeReferenceModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processComment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMirror",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FollowerOnlyReferenceModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FollowerOnlyReferenceModuleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    HUB(overrides?: CallOverrides): Promise<[string]>;

    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  initializeReferenceModule(
    profileId: BigNumberish,
    pubId: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  processComment(
    profileId: BigNumberish,
    profileIdPointed: BigNumberish,
    pubIdPointed: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  processMirror(
    profileId: BigNumberish,
    profileIdPointed: BigNumberish,
    pubIdPointed: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;

    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeReferenceModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processComment(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processMirror(
      profileId: BigNumberish,
      profileIdPointed: BigNumberish,
      pubIdPointed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
