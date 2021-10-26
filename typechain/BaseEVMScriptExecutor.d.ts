/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BaseEVMScriptExecutorInterface extends ethers.utils.Interface {
  functions: {
    "hasInitialized()": FunctionFragment;
    "execScript(bytes,bytes,address[])": FunctionFragment;
    "executorType()": FunctionFragment;
    "getInitializationBlock()": FunctionFragment;
    "isPetrified()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "hasInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execScript",
    values: [BytesLike, BytesLike, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executorType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInitializationBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isPetrified",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "hasInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execScript", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executorType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitializationBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPetrified",
    data: BytesLike
  ): Result;

  events: {};
}

export class BaseEVMScriptExecutor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BaseEVMScriptExecutorInterface;

  functions: {
    hasInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    execScript(
      script: BytesLike,
      input: BytesLike,
      blacklist: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executorType(overrides?: CallOverrides): Promise<[string]>;

    getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    isPetrified(overrides?: CallOverrides): Promise<[boolean]>;
  };

  hasInitialized(overrides?: CallOverrides): Promise<boolean>;

  execScript(
    script: BytesLike,
    input: BytesLike,
    blacklist: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executorType(overrides?: CallOverrides): Promise<string>;

  getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

  isPetrified(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    hasInitialized(overrides?: CallOverrides): Promise<boolean>;

    execScript(
      script: BytesLike,
      input: BytesLike,
      blacklist: string[],
      overrides?: CallOverrides
    ): Promise<string>;

    executorType(overrides?: CallOverrides): Promise<string>;

    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

    isPetrified(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    hasInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    execScript(
      script: BytesLike,
      input: BytesLike,
      blacklist: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executorType(overrides?: CallOverrides): Promise<BigNumber>;

    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

    isPetrified(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hasInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execScript(
      script: BytesLike,
      input: BytesLike,
      blacklist: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executorType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInitializationBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPetrified(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
