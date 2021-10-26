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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface KernelProxyInterface extends ethers.utils.Interface {
  functions: {
    "proxyType()": FunctionFragment;
    "apps(bytes32,bytes32)": FunctionFragment;
    "isDepositable()": FunctionFragment;
    "implementation()": FunctionFragment;
    "recoveryVaultAppId()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "proxyType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "apps",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isDepositable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryVaultAppId",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "proxyType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "apps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isDepositable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryVaultAppId",
    data: BytesLike
  ): Result;

  events: {
    "ProxyDeposit(address,uint256)": EventFragment;
    "SetApp(bytes32,bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProxyDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetApp"): EventFragment;
}

export class KernelProxy extends BaseContract {
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

  interface: KernelProxyInterface;

  functions: {
    proxyType(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { proxyTypeId: BigNumber }>;

    apps(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isDepositable(overrides?: CallOverrides): Promise<[boolean]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    recoveryVaultAppId(overrides?: CallOverrides): Promise<[string]>;
  };

  proxyType(overrides?: CallOverrides): Promise<BigNumber>;

  apps(
    arg0: BytesLike,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  isDepositable(overrides?: CallOverrides): Promise<boolean>;

  implementation(overrides?: CallOverrides): Promise<string>;

  recoveryVaultAppId(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    proxyType(overrides?: CallOverrides): Promise<BigNumber>;

    apps(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isDepositable(overrides?: CallOverrides): Promise<boolean>;

    implementation(overrides?: CallOverrides): Promise<string>;

    recoveryVaultAppId(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ProxyDeposit(
      sender?: null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; value: BigNumber }
    >;

    SetApp(
      namespace?: BytesLike | null,
      appId?: BytesLike | null,
      app?: null
    ): TypedEventFilter<
      [string, string, string],
      { namespace: string; appId: string; app: string }
    >;
  };

  estimateGas: {
    proxyType(overrides?: CallOverrides): Promise<BigNumber>;

    apps(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isDepositable(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    recoveryVaultAppId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    proxyType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    apps(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isDepositable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoveryVaultAppId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
