import { d as assertSize$3, p as padRight$2, B as BaseError$2, f as fromBytes$4, t as toNumber$1, h as toBigInt$3, i as getChainContractAddress, j as getAction, r as readContract, k as toHex$2, l as packetToBytes, m as assertRequest, n as numberToHex, o as formatTransactionRequest, q as parseAccount, s as extract$1, u as getCallError, v as BaseError$3, w as getAbiItem, A as AbiEventNotFoundError, x as formatAbiItem$1, y as toEventSelector, z as keccak256$1, C as toBytes$1, D as encodeAbiParameters, b as encodeFunctionData, E as estimateGas, F as getContractError$1, G as hexToNumber$1, H as AbiEventSignatureEmptyTopicsError, I as AbiEventSignatureNotFoundError, J as DecodeLogTopicsMismatch, K as decodeAbiParameters, L as AbiDecodingDataSizeTooSmallError, P as PositionOutOfBoundsError$1, M as DecodeLogDataMismatch, N as size$3, O as isAddressEqual, Q as formatLog, R as AbiEncodingLengthMismatchError, S as concatHex, T as isAddress, U as InvalidAddressError$1, V as pad$2, W as stringToHex, X as boolToHex, Y as integerRegex$2, Z as bytesRegex$2, _ as BytesSizeMismatchError$1, $ as arrayRegex$1, a0 as UnsupportedPackedAbiType, a1 as recoverAuthorizationAddress, a2 as getAddress, a3 as LruMap$1, a4 as keccak_256$1, a5 as size$4, a6 as fromNumber$1, a7 as concat$1, a8 as padLeft$1, a9 as fromBoolean, aa as IntegerOutOfRangeError$1, ab as fromString$2, ac as slice$3, ad as stringify$1, ae as from$a, af as hexToBytes, ag as TransactionNotFoundError, ah as formatTransaction, ai as TransactionReceiptNotFoundError, aj as formatTransactionReceipt, ak as toRpc, al as concat$2, am as serializeStateOverride, an as formatBlock, ao as decodeFunctionResult, ap as AbiDecodingZeroDataError, aq as RawContractError, ar as getNodeError, as as UnknownNodeError, at as validate$5, au as hexToBigInt, av as deploylessCallViaBytecodeBytecode, aw as call, ax as isHex, ay as bytesToHex$1, az as recoverAddress, aA as multicall3Abi, aB as multicall3Bytecode, aC as erc1271Abi, aD as erc6492SignatureValidatorAbi, aE as encodeDeployData, aF as CallExecutionError, aG as hexToBool, aH as ContractFunctionExecutionError, aI as erc6492SignatureValidatorByteCode, aJ as stringify$2, aK as observe, aL as poll, aM as withResolvers, aN as WaitForTransactionReceiptTimeoutError, aO as withRetry, aP as getBlock, aQ as BlockNotFoundError, aR as InvalidInputRpcError, aS as sendRawTransaction, aT as prepareTransactionRequest, aU as multicall, aV as getTransactionCount, aW as estimateMaxPriorityFeePerGas, aX as getGasPrice, aY as estimateFeesPerGas, aZ as getEnsText, a_ as getEnsName, a$ as getEnsAvatar, b0 as getEnsAddress, b1 as getChainId, b2 as getBalance, b3 as createClient, b4 as bytesToHex$2, b5 as isBytes$2, b6 as hexToBytes$1, b7 as abytes, b8 as concatBytes, b9 as anumber, ba as ahash, bb as randomBytes, bc as parseAbi, bd as prettyPrint, be as formatGwei, bf as decodeErrorResult, bg as ContractFunctionZeroDataError, bh as ContractFunctionRevertedError, bi as AccountNotFoundError, bj as prepareAuthorization, bk as sha256$2, bl as sha256$3, bm as sha384, bn as sha512, bo as clsx, bp as EventEmitter, bq as defineChain, br as http, bs as slice$4, bt as waitForCallsStatus, bu as stringToBytes, bv as trim$1, bw as decodeFunctionData, bx as hexToString, by as erc20Abi, a as getDefaultExportFromCjs } from "./index-CmVjgkl9.js";
import { s as secp256k1, h as hmac } from "./secp256k1-DSVKMZWB.js";
import { h as hashMessage, a as hashTypedData } from "./hashTypedData-oqvVd-SC.js";
function assertSize$2(bytes2, size_) {
  if (size$2(bytes2) > size_)
    throw new SizeOverflowError$2({
      givenSize: size$2(bytes2),
      maxSize: size_
    });
}
const charCodeMap$1 = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16$1(char) {
  if (char >= charCodeMap$1.zero && char <= charCodeMap$1.nine)
    return char - charCodeMap$1.zero;
  if (char >= charCodeMap$1.A && char <= charCodeMap$1.F)
    return char - (charCodeMap$1.A - 10);
  if (char >= charCodeMap$1.a && char <= charCodeMap$1.f)
    return char - (charCodeMap$1.a - 10);
  return void 0;
}
function pad$1(bytes2, options = {}) {
  const { dir, size: size2 = 32 } = options;
  if (size2 === 0)
    return bytes2;
  if (bytes2.length > size2)
    throw new SizeExceedsPaddingSizeError$1({
      size: bytes2.length,
      targetSize: size2,
      type: "Bytes"
    });
  const paddedBytes = new Uint8Array(size2);
  for (let i2 = 0; i2 < size2; i2++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i2 : size2 - i2 - 1] = bytes2[padEnd ? i2 : bytes2.length - i2 - 1];
  }
  return paddedBytes;
}
function trim(value, options = {}) {
  const { dir = "left" } = options;
  let data = value;
  let sliceLength = 0;
  for (let i2 = 0; i2 < data.length - 1; i2++) {
    if (data[dir === "left" ? i2 : data.length - i2 - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  return data;
}
const decoder$1 = /* @__PURE__ */ new TextDecoder();
const encoder$1 = /* @__PURE__ */ new TextEncoder();
function from$9(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex$5(value);
  return fromArray$1(value);
}
function fromArray$1(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex$5(value, options = {}) {
  const { size: size2 } = options;
  let hex = value;
  if (size2) {
    assertSize$3(value, size2);
    hex = padRight$2(value, size2);
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes2 = new Uint8Array(length);
  for (let index = 0, j2 = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16$1(hexString.charCodeAt(j2++));
    const nibbleRight = charCodeToBase16$1(hexString.charCodeAt(j2++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError$2(`Invalid byte sequence ("${hexString[j2 - 2]}${hexString[j2 - 1]}" in "${hexString}").`);
    }
    bytes2[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes2;
}
function fromString$1(value, options = {}) {
  const { size: size2 } = options;
  const bytes2 = encoder$1.encode(value);
  if (typeof size2 === "number") {
    assertSize$2(bytes2, size2);
    return padRight$1(bytes2, size2);
  }
  return bytes2;
}
function padRight$1(value, size2) {
  return pad$1(value, { dir: "right", size: size2 });
}
function size$2(value) {
  return value.length;
}
function slice$2(value, start, end, options = {}) {
  const { strict } = options;
  const value_ = value.slice(start, end);
  return value_;
}
function toBigInt$2(bytes2, options = {}) {
  const { size: size2 } = options;
  if (typeof size2 !== "undefined")
    assertSize$2(bytes2, size2);
  const hex = fromBytes$4(bytes2, options);
  return toBigInt$3(hex, options);
}
function toBoolean(bytes2, options = {}) {
  const { size: size2 } = options;
  let bytes_ = bytes2;
  if (typeof size2 !== "undefined") {
    assertSize$2(bytes_, size2);
    bytes_ = trimLeft(bytes_);
  }
  if (bytes_.length > 1 || bytes_[0] > 1)
    throw new InvalidBytesBooleanError(bytes_);
  return Boolean(bytes_[0]);
}
function toNumber(bytes2, options = {}) {
  const { size: size2 } = options;
  if (typeof size2 !== "undefined")
    assertSize$2(bytes2, size2);
  const hex = fromBytes$4(bytes2, options);
  return toNumber$1(hex, options);
}
function toString(bytes2, options = {}) {
  const { size: size2 } = options;
  let bytes_ = bytes2;
  if (typeof size2 !== "undefined") {
    assertSize$2(bytes_, size2);
    bytes_ = trimRight(bytes_);
  }
  return decoder$1.decode(bytes_);
}
function trimLeft(value) {
  return trim(value, { dir: "left" });
}
function trimRight(value) {
  return trim(value, { dir: "right" });
}
class InvalidBytesBooleanError extends BaseError$2 {
  constructor(bytes2) {
    super(`Bytes value \`${bytes2}\` is not a valid boolean.`, {
      metaMessages: [
        "The bytes array must contain a single byte of either a `0` or `1` value."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesBooleanError"
    });
  }
}
let SizeOverflowError$2 = class SizeOverflowError extends BaseError$2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
};
let SizeExceedsPaddingSizeError$1 = class SizeExceedsPaddingSizeError extends BaseError$2 {
  constructor({ size: size2, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size2}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};
async function getEnsResolver(client, parameters) {
  const { blockNumber, blockTag, name } = parameters;
  const { chain } = client;
  const universalResolverAddress = (() => {
    if (parameters.universalResolverAddress)
      return parameters.universalResolverAddress;
    if (!chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return getChainContractAddress({
      blockNumber,
      chain,
      contract: "ensUniversalResolver"
    });
  })();
  const tlds = chain == null ? void 0 : chain.ensTlds;
  if (tlds && !tlds.some((tld) => name.endsWith(tld)))
    throw new Error(`${name} is not a valid ENS TLD (${tlds == null ? void 0 : tlds.join(", ")}) for chain "${chain.name}" (id: ${chain.id}).`);
  const [resolverAddress] = await getAction(client, readContract, "readContract")({
    address: universalResolverAddress,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [
          { type: "address" },
          { type: "bytes32" },
          { type: "uint256" }
        ],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [toHex$2(packetToBytes(name))],
    blockNumber,
    blockTag
  });
  return resolverAddress;
}
async function createAccessList(client, args) {
  var _a, _b, _c;
  const { account: account_ = client.account, blockNumber, blockTag = "latest", blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
  const account2 = account_ ? parseAccount(account_) : void 0;
  try {
    assertRequest(args);
    const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const chainFormat = (_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionRequest) == null ? void 0 : _c.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract$1(rest, { format: chainFormat }),
      from: account2 == null ? void 0 : account2.address,
      blobs,
      data,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      to,
      value
    }, "createAccessList");
    const response = await client.request({
      method: "eth_createAccessList",
      params: [request, block]
    });
    return {
      accessList: response.accessList,
      gasUsed: BigInt(response.gasUsed)
    };
  } catch (err) {
    throw getCallError(err, {
      ...args,
      account: account2,
      chain: client.chain
    });
  }
}
function createFilterRequestScope(client, { method }) {
  var _a, _b;
  const requestMap = {};
  if (client.transport.type === "fallback")
    (_b = (_a = client.transport).onResponse) == null ? void 0 : _b.call(_a, ({ method: method_, response: id, status, transport }) => {
      if (status === "success" && method === method_)
        requestMap[id] = transport.request;
    });
  return (id) => requestMap[id] || client.request;
}
async function createBlockFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newBlockFilter"
  });
  const id = await client.request({
    method: "eth_newBlockFilter"
  });
  return { id, request: getRequest(id), type: "block" };
}
class FilterTypeNotSupportedError extends BaseError$3 {
  constructor(type) {
    super(`Filter type "${type}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
}
const docsPath$1 = "/docs/contract/encodeEventTopics";
function encodeEventTopics(parameters) {
  var _a;
  const { abi: abi2, eventName, args } = parameters;
  let abiItem = abi2[0];
  if (eventName) {
    const item = getAbiItem({ abi: abi2, name: eventName });
    if (!item)
      throw new AbiEventNotFoundError(eventName, { docsPath: docsPath$1 });
    abiItem = item;
  }
  if (abiItem.type !== "event")
    throw new AbiEventNotFoundError(void 0, { docsPath: docsPath$1 });
  const definition = formatAbiItem$1(abiItem);
  const signature = toEventSelector(definition);
  let topics = [];
  if (args && "inputs" in abiItem) {
    const indexedInputs = (_a = abiItem.inputs) == null ? void 0 : _a.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? (indexedInputs == null ? void 0 : indexedInputs.map((x2) => args[x2.name])) ?? [] : [];
    if (args_.length > 0) {
      topics = (indexedInputs == null ? void 0 : indexedInputs.map((param, i2) => {
        if (Array.isArray(args_[i2]))
          return args_[i2].map((_2, j2) => encodeArg({ param, value: args_[i2][j2] }));
        return typeof args_[i2] !== "undefined" && args_[i2] !== null ? encodeArg({ param, value: args_[i2] }) : null;
      })) ?? [];
    }
  }
  return [signature, ...topics];
}
function encodeArg({ param, value }) {
  if (param.type === "string" || param.type === "bytes")
    return keccak256$1(toBytes$1(value));
  if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    throw new FilterTypeNotSupportedError(param.type);
  return encodeAbiParameters([param], [value]);
}
async function createContractEventFilter(client, parameters) {
  const { address, abi: abi2, args, eventName, fromBlock, strict, toBlock } = parameters;
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  const topics = eventName ? encodeEventTopics({
    abi: abi2,
    args,
    eventName
  }) : void 0;
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        topics
      }
    ]
  });
  return {
    abi: abi2,
    args,
    eventName,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    type: "event"
  };
}
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
  const events = events_ ?? (event ? [event] : void 0);
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  let topics = [];
  if (events) {
    const encoded = events.flatMap((event2) => encodeEventTopics({
      abi: [event2],
      eventName: event2.name,
      args
    }));
    topics = [encoded];
    if (event)
      topics = topics[0];
  }
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        ...topics.length ? { topics } : {}
      }
    ]
  });
  return {
    abi: events,
    args,
    eventName: event ? event.name : void 0,
    fromBlock,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    toBlock,
    type: "event"
  };
}
async function createPendingTransactionFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newPendingTransactionFilter"
  });
  const id = await client.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id, request: getRequest(id), type: "transaction" };
}
async function estimateContractGas(client, parameters) {
  const { abi: abi2, address, args, functionName, dataSuffix, ...request } = parameters;
  const data = encodeFunctionData({
    abi: abi2,
    args,
    functionName
  });
  try {
    const gas = await getAction(client, estimateGas, "estimateGas")({
      data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...request
    });
    return gas;
  } catch (error) {
    const account2 = request.account ? parseAccount(request.account) : void 0;
    throw getContractError$1(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/estimateContractGas",
      functionName,
      sender: account2 == null ? void 0 : account2.address
    });
  }
}
async function getBlobBaseFee(client) {
  const baseFee = await client.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(baseFee);
}
const promiseCache = /* @__PURE__ */ new Map();
const responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey2) {
  const buildCache = (cacheKey3, cache) => ({
    clear: () => cache.delete(cacheKey3),
    get: () => cache.get(cacheKey3),
    set: (data) => cache.set(cacheKey3, data)
  });
  const promise = buildCache(cacheKey2, promiseCache);
  const response = buildCache(cacheKey2, responseCache);
  return {
    clear: () => {
      promise.clear();
      response.clear();
    },
    promise,
    response
  };
}
async function withCache(fn, { cacheKey: cacheKey2, cacheTime = Number.POSITIVE_INFINITY }) {
  const cache = getCache(cacheKey2);
  const response = cache.response.get();
  if (response && cacheTime > 0) {
    const age = Date.now() - response.created.getTime();
    if (age < cacheTime)
      return response.data;
  }
  let promise = cache.promise.get();
  if (!promise) {
    promise = fn();
    cache.promise.set(promise);
  }
  try {
    const data = await promise;
    cache.response.set({ created: /* @__PURE__ */ new Date(), data });
    return data;
  } finally {
    cache.promise.clear();
  }
}
const cacheKey = (id) => `blockNumber.${id}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
  const blockNumberHex = await withCache(() => client.request({
    method: "eth_blockNumber"
  }), { cacheKey: cacheKey(client.uid), cacheTime });
  return BigInt(blockNumberHex);
}
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let count;
  if (blockHash) {
    count = await client.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [blockHash]
    }, { dedupe: true });
  } else {
    count = await client.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [blockNumberHex || blockTag]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  return hexToNumber$1(count);
}
async function getCode(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const hex = await client.request({
    method: "eth_getCode",
    params: [address, blockNumberHex || blockTag]
  }, { dedupe: Boolean(blockNumberHex) });
  if (hex === "0x")
    return void 0;
  return hex;
}
const docsPath = "/docs/contract/decodeEventLog";
function decodeEventLog(parameters) {
  const { abi: abi2, data, strict: strict_, topics } = parameters;
  const strict = strict_ ?? true;
  const [signature, ...argTopics] = topics;
  if (!signature)
    throw new AbiEventSignatureEmptyTopicsError({ docsPath });
  const abiItem = abi2.find((x2) => x2.type === "event" && signature === toEventSelector(formatAbiItem$1(x2)));
  if (!(abiItem && "name" in abiItem) || abiItem.type !== "event")
    throw new AbiEventSignatureNotFoundError(signature, { docsPath });
  const { name, inputs } = abiItem;
  const isUnnamed = inputs == null ? void 0 : inputs.some((x2) => !("name" in x2 && x2.name));
  const args = isUnnamed ? [] : {};
  const indexedInputs = inputs.map((x2, i2) => [x2, i2]).filter(([x2]) => "indexed" in x2 && x2.indexed);
  for (let i2 = 0; i2 < indexedInputs.length; i2++) {
    const [param, argIndex] = indexedInputs[i2];
    const topic = argTopics[i2];
    if (!topic)
      throw new DecodeLogTopicsMismatch({
        abiItem,
        param
      });
    args[isUnnamed ? argIndex : param.name || argIndex] = decodeTopic({
      param,
      value: topic
    });
  }
  const nonIndexedInputs = inputs.filter((x2) => !("indexed" in x2 && x2.indexed));
  if (nonIndexedInputs.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = decodeAbiParameters(nonIndexedInputs, data);
        if (decodedData) {
          if (isUnnamed)
            for (let i2 = 0; i2 < inputs.length; i2++)
              args[i2] = args[i2] ?? decodedData.shift();
          else
            for (let i2 = 0; i2 < nonIndexedInputs.length; i2++)
              args[nonIndexedInputs[i2].name] = decodedData[i2];
        }
      } catch (err) {
        if (strict) {
          if (err instanceof AbiDecodingDataSizeTooSmallError || err instanceof PositionOutOfBoundsError$1)
            throw new DecodeLogDataMismatch({
              abiItem,
              data,
              params: nonIndexedInputs,
              size: size$3(data)
            });
          throw err;
        }
      }
    } else if (strict) {
      throw new DecodeLogDataMismatch({
        abiItem,
        data: "0x",
        params: nonIndexedInputs,
        size: 0
      });
    }
  }
  return {
    eventName: name,
    args: Object.values(args).length > 0 ? args : void 0
  };
}
function decodeTopic({ param, value }) {
  if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    return value;
  const decodedArg = decodeAbiParameters([param], value) || [];
  return decodedArg[0];
}
function parseEventLogs(parameters) {
  const { abi: abi2, args, logs, strict = true } = parameters;
  const eventName = (() => {
    if (!parameters.eventName)
      return void 0;
    if (Array.isArray(parameters.eventName))
      return parameters.eventName;
    return [parameters.eventName];
  })();
  return logs.map((log) => {
    var _a;
    try {
      const abiItem = abi2.find((abiItem2) => abiItem2.type === "event" && log.topics[0] === toEventSelector(abiItem2));
      if (!abiItem)
        return null;
      const event = decodeEventLog({
        ...log,
        abi: [abiItem],
        strict
      });
      if (eventName && !eventName.includes(event.eventName))
        return null;
      if (!includesArgs({
        args: event.args,
        inputs: abiItem.inputs,
        matchArgs: args
      }))
        return null;
      return { ...event, ...log };
    } catch (err) {
      let eventName2;
      let isUnnamed;
      if (err instanceof AbiEventSignatureNotFoundError)
        return null;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if (strict)
          return null;
        eventName2 = err.abiItem.name;
        isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x2) => !("name" in x2 && x2.name));
      }
      return { ...log, args: isUnnamed ? [] : {}, eventName: eventName2 };
    }
  }).filter(Boolean);
}
function includesArgs(parameters) {
  const { args, inputs, matchArgs } = parameters;
  if (!matchArgs)
    return true;
  if (!args)
    return false;
  function isEqual(input, value, arg) {
    try {
      if (input.type === "address")
        return isAddressEqual(value, arg);
      if (input.type === "string" || input.type === "bytes")
        return keccak256$1(toBytes$1(value)) === arg;
      return value === arg;
    } catch {
      return false;
    }
  }
  if (Array.isArray(args) && Array.isArray(matchArgs)) {
    return matchArgs.every((value, index) => {
      if (value === null || value === void 0)
        return true;
      const input = inputs[index];
      if (!input)
        return false;
      const value_ = Array.isArray(value) ? value : [value];
      return value_.some((value2) => isEqual(input, value2, args[index]));
    });
  }
  if (typeof args === "object" && !Array.isArray(args) && typeof matchArgs === "object" && !Array.isArray(matchArgs))
    return Object.entries(matchArgs).every(([key, value]) => {
      if (value === null || value === void 0)
        return true;
      const input = inputs.find((input2) => input2.name === key);
      if (!input)
        return false;
      const value_ = Array.isArray(value) ? value : [value];
      return value_.some((value2) => isEqual(input, value2, args[key]));
    });
  return false;
}
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
  const strict = strict_ ?? false;
  const events = events_ ?? (event ? [event] : void 0);
  let topics = [];
  if (events) {
    const encoded = events.flatMap((event2) => encodeEventTopics({
      abi: [event2],
      eventName: event2.name,
      args: events_ ? void 0 : args
    }));
    topics = [encoded];
    if (event)
      topics = topics[0];
  }
  let logs;
  if (blockHash) {
    logs = await client.request({
      method: "eth_getLogs",
      params: [{ address, topics, blockHash }]
    });
  } else {
    logs = await client.request({
      method: "eth_getLogs",
      params: [
        {
          address,
          topics,
          fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
          toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock
        }
      ]
    });
  }
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!events)
    return formattedLogs;
  return parseEventLogs({
    abi: events,
    args,
    logs: formattedLogs,
    strict
  });
}
async function getContractEvents(client, parameters) {
  const { abi: abi2, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
  const event = eventName ? getAbiItem({ abi: abi2, name: eventName }) : void 0;
  const events = !event ? abi2.filter((x2) => x2.type === "event") : void 0;
  return getAction(client, getLogs, "getLogs")({
    address,
    args,
    blockHash,
    event,
    events,
    fromBlock,
    toBlock,
    strict
  });
}
class Eip712DomainNotFoundError extends BaseError$3 {
  constructor({ address }) {
    super(`No EIP-712 domain found on contract "${address}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${address}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
}
async function getEip712Domain(client, parameters) {
  const { address, factory, factoryData } = parameters;
  try {
    const [fields, name, version2, chainId, verifyingContract, salt, extensions] = await getAction(client, readContract, "readContract")({
      abi: abi$3,
      address,
      functionName: "eip712Domain",
      factory,
      factoryData
    });
    return {
      domain: {
        name,
        version: version2,
        chainId: Number(chainId),
        verifyingContract,
        salt
      },
      extensions,
      fields
    };
  } catch (e2) {
    const error = e2;
    if (error.name === "ContractFunctionExecutionError" && error.cause.name === "ContractFunctionZeroDataError") {
      throw new Eip712DomainNotFoundError({ address });
    }
    throw error;
  }
}
const abi$3 = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
];
function formatFeeHistory(feeHistory) {
  var _a;
  return {
    baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
    gasUsedRatio: feeHistory.gasUsedRatio,
    oldestBlock: BigInt(feeHistory.oldestBlock),
    reward: (_a = feeHistory.reward) == null ? void 0 : _a.map((reward) => reward.map((value) => BigInt(value)))
  };
}
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
  const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
  const feeHistory = await client.request({
    method: "eth_feeHistory",
    params: [
      numberToHex(blockCount),
      blockNumberHex || blockTag,
      rewardPercentiles
    ]
  }, { dedupe: Boolean(blockNumberHex) });
  return formatFeeHistory(feeHistory);
}
async function getFilterChanges(_client, { filter }) {
  const strict = "strict" in filter && filter.strict;
  const logs = await filter.request({
    method: "eth_getFilterChanges",
    params: [filter.id]
  });
  if (typeof logs[0] === "string")
    return logs;
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!("abi" in filter) || !filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}
async function getFilterLogs(_client, { filter }) {
  const strict = filter.strict ?? false;
  const logs = await filter.request({
    method: "eth_getFilterLogs",
    params: [filter.id]
  });
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}
function encodePacked$1(types2, values) {
  if (types2.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: types2.length,
      givenLength: values.length
    });
  const data = [];
  for (let i2 = 0; i2 < types2.length; i2++) {
    const type = types2[i2];
    const value = values[i2];
    data.push(encode$3(type, value));
  }
  return concatHex(data);
}
function encode$3(type, value, isArray2 = false) {
  if (type === "address") {
    const address = value;
    if (!isAddress(address))
      throw new InvalidAddressError$1({ address });
    return pad$2(address.toLowerCase(), {
      size: isArray2 ? 32 : null
    });
  }
  if (type === "string")
    return stringToHex(value);
  if (type === "bytes")
    return value;
  if (type === "bool")
    return pad$2(boolToHex(value), { size: isArray2 ? 32 : 1 });
  const intMatch = type.match(integerRegex$2);
  if (intMatch) {
    const [_type, baseType, bits = "256"] = intMatch;
    const size2 = Number.parseInt(bits, 10) / 8;
    return numberToHex(value, {
      size: isArray2 ? 32 : size2,
      signed: baseType === "int"
    });
  }
  const bytesMatch = type.match(bytesRegex$2);
  if (bytesMatch) {
    const [_type, size2] = bytesMatch;
    if (Number.parseInt(size2, 10) !== (value.length - 2) / 2)
      throw new BytesSizeMismatchError$1({
        expectedSize: Number.parseInt(size2, 10),
        givenSize: (value.length - 2) / 2
      });
    return pad$2(value, { dir: "right", size: isArray2 ? 32 : null });
  }
  const arrayMatch = type.match(arrayRegex$1);
  if (arrayMatch && Array.isArray(value)) {
    const [_type, childType] = arrayMatch;
    const data = [];
    for (let i2 = 0; i2 < value.length; i2++) {
      data.push(encode$3(childType, value[i2], true));
    }
    if (data.length === 0)
      return "0x";
    return concatHex(data);
  }
  throw new UnsupportedPackedAbiType(type);
}
async function verifyAuthorization({ address, authorization, signature }) {
  return isAddressEqual(getAddress(address), await recoverAuthorizationAddress({
    authorization,
    signature
  }));
}
function createNonceManager(parameters) {
  const { source } = parameters;
  const deltaMap = /* @__PURE__ */ new Map();
  const nonceMap = new LruMap$1(8192);
  const promiseMap = /* @__PURE__ */ new Map();
  const getKey = ({ address, chainId }) => `${address}.${chainId}`;
  return {
    async consume({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      const promise = this.get({ address, chainId, client });
      this.increment({ address, chainId });
      const nonce = await promise;
      await source.set({ address, chainId }, nonce);
      nonceMap.set(key, nonce);
      return nonce;
    },
    async increment({ address, chainId }) {
      const key = getKey({ address, chainId });
      const delta = deltaMap.get(key) ?? 0;
      deltaMap.set(key, delta + 1);
    },
    async get({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      let promise = promiseMap.get(key);
      if (!promise) {
        promise = (async () => {
          try {
            const nonce = await source.get({ address, chainId, client });
            const previousNonce = nonceMap.get(key) ?? 0;
            if (previousNonce > 0 && nonce <= previousNonce)
              return previousNonce + 1;
            nonceMap.delete(key);
            return nonce;
          } finally {
            this.reset({ address, chainId });
          }
        })();
        promiseMap.set(key, promise);
      }
      const delta = deltaMap.get(key) ?? 0;
      return delta + await promise;
    },
    reset({ address, chainId }) {
      const key = getKey({ address, chainId });
      deltaMap.delete(key);
      promiseMap.delete(key);
    }
  };
}
const erc6492MagicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492";
const version$1 = "1.1.1";
let BaseError$1 = class BaseError extends Error {
  constructor(shortMessage, args = {}) {
    var _a;
    const details = args.cause instanceof BaseError ? args.cause.details : ((_a = args.cause) == null ? void 0 : _a.message) ? args.cause.message : args.details;
    const docsPath2 = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
    const message = [
      shortMessage || "An error occurred.",
      "",
      ...args.metaMessages ? [...args.metaMessages, ""] : [],
      ...docsPath2 ? [`Docs: https://abitype.dev${docsPath2}`] : [],
      ...details ? [`Details: ${details}`] : [],
      `Version: abitype@${version$1}`
    ].join("\n");
    super(message);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "metaMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiTypeError"
    });
    if (args.cause)
      this.cause = args.cause;
    this.details = details;
    this.docsPath = docsPath2;
    this.metaMessages = args.metaMessages;
    this.shortMessage = shortMessage;
  }
};
function execTyped(regex, string) {
  const match = regex.exec(string);
  return match == null ? void 0 : match.groups;
}
const bytesRegex$1 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex$1 = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/;
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
  let type = abiParameter.type;
  if (tupleRegex.test(abiParameter.type) && "components" in abiParameter) {
    type = "(";
    const length = abiParameter.components.length;
    for (let i2 = 0; i2 < length; i2++) {
      const component = abiParameter.components[i2];
      type += formatAbiParameter(component);
      if (i2 < length - 1)
        type += ", ";
    }
    const result = execTyped(tupleRegex, abiParameter.type);
    type += `)${(result == null ? void 0 : result.array) ?? ""}`;
    return formatAbiParameter({
      ...abiParameter,
      type
    });
  }
  if ("indexed" in abiParameter && abiParameter.indexed)
    type = `${type} indexed`;
  if (abiParameter.name)
    return `${type} ${abiParameter.name}`;
  return type;
}
function formatAbiParameters(abiParameters) {
  let params = "";
  const length = abiParameters.length;
  for (let i2 = 0; i2 < length; i2++) {
    const abiParameter = abiParameters[i2];
    params += formatAbiParameter(abiParameter);
    if (i2 !== length - 1)
      params += ", ";
  }
  return params;
}
function formatAbiItem(abiItem) {
  var _a;
  if (abiItem.type === "function")
    return `function ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== "nonpayable" ? ` ${abiItem.stateMutability}` : ""}${((_a = abiItem.outputs) == null ? void 0 : _a.length) ? ` returns (${formatAbiParameters(abiItem.outputs)})` : ""}`;
  if (abiItem.type === "event")
    return `event ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
  if (abiItem.type === "error")
    return `error ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
  if (abiItem.type === "constructor")
    return `constructor(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability === "payable" ? " payable" : ""}`;
  if (abiItem.type === "fallback")
    return `fallback() external${abiItem.stateMutability === "payable" ? " payable" : ""}`;
  return "receive() external payable";
}
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
  return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
  return execTyped(errorSignatureRegex, signature);
}
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
  return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
  return execTyped(eventSignatureRegex, signature);
}
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
  return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
  return execTyped(functionSignatureRegex, signature);
}
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
  return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
  return execTyped(structSignatureRegex, signature);
}
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
  return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
  return execTyped(constructorSignatureRegex, signature);
}
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
  return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
  return execTyped(fallbackSignatureRegex, signature);
}
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
  return receiveSignatureRegex.test(signature);
}
const modifiers = /* @__PURE__ */ new Set([
  "memory",
  "indexed",
  "storage",
  "calldata"
]);
const eventModifiers = /* @__PURE__ */ new Set(["indexed"]);
const functionModifiers = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
class InvalidAbiItemError extends BaseError$1 {
  constructor({ signature }) {
    super("Failed to parse ABI item.", {
      details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
      docsPath: "/api/human#parseabiitem-1"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidAbiItemError"
    });
  }
}
class UnknownTypeError extends BaseError$1 {
  constructor({ type }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "UnknownTypeError"
    });
  }
}
class UnknownSolidityTypeError extends BaseError$1 {
  constructor({ type }) {
    super("Unknown type.", {
      metaMessages: [`Type "${type}" is not a valid ABI type.`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "UnknownSolidityTypeError"
    });
  }
}
class InvalidAbiParametersError extends BaseError$1 {
  constructor({ params }) {
    super("Failed to parse ABI parameters.", {
      details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
      docsPath: "/api/human#parseabiparameters-1"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidAbiParametersError"
    });
  }
}
class InvalidParameterError extends BaseError$1 {
  constructor({ param }) {
    super("Invalid ABI parameter.", {
      details: param
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidParameterError"
    });
  }
}
class SolidityProtectedKeywordError extends BaseError$1 {
  constructor({ param, name }) {
    super("Invalid ABI parameter.", {
      details: param,
      metaMessages: [
        `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SolidityProtectedKeywordError"
    });
  }
}
class InvalidModifierError extends BaseError$1 {
  constructor({ param, type, modifier }) {
    super("Invalid ABI parameter.", {
      details: param,
      metaMessages: [
        `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ""}.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidModifierError"
    });
  }
}
class InvalidFunctionModifierError extends BaseError$1 {
  constructor({ param, type, modifier }) {
    super("Invalid ABI parameter.", {
      details: param,
      metaMessages: [
        `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ""}.`,
        `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidFunctionModifierError"
    });
  }
}
class InvalidAbiTypeParameterError extends BaseError$1 {
  constructor({ abiParameter }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(abiParameter, null, 2),
      metaMessages: ["ABI parameter type is invalid."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidAbiTypeParameterError"
    });
  }
}
class InvalidSignatureError extends BaseError$1 {
  constructor({ signature, type }) {
    super(`Invalid ${type} signature.`, {
      details: signature
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidSignatureError"
    });
  }
}
class UnknownSignatureError extends BaseError$1 {
  constructor({ signature }) {
    super("Unknown signature.", {
      details: signature
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "UnknownSignatureError"
    });
  }
}
class InvalidStructSignatureError extends BaseError$1 {
  constructor({ signature }) {
    super("Invalid struct signature.", {
      details: signature,
      metaMessages: ["No properties exist."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidStructSignatureError"
    });
  }
}
class CircularReferenceError extends BaseError$1 {
  constructor({ type }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${type}" is a circular reference.`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "CircularReferenceError"
    });
  }
}
class InvalidParenthesisError extends BaseError$1 {
  constructor({ current, depth }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${current.trim()}" has too many ${depth > 0 ? "opening" : "closing"} parentheses.`
      ],
      details: `Depth "${depth}"`
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidParenthesisError"
    });
  }
}
function getParameterCacheKey(param, type, structs) {
  let structKey = "";
  if (structs)
    for (const struct of Object.entries(structs)) {
      if (!struct)
        continue;
      let propertyKey = "";
      for (const property of struct[1]) {
        propertyKey += `[${property.type}${property.name ? `:${property.name}` : ""}]`;
      }
      structKey += `(${struct[0]}{${propertyKey}})`;
    }
  if (type)
    return `${type}:${param}${structKey}`;
  return param;
}
const parameterCache = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: true }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: true }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: true }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: true }
  ]
]);
function parseSignature$1(signature, structs = {}) {
  if (isFunctionSignature(signature))
    return parseFunctionSignature(signature, structs);
  if (isEventSignature(signature))
    return parseEventSignature(signature, structs);
  if (isErrorSignature(signature))
    return parseErrorSignature(signature, structs);
  if (isConstructorSignature(signature))
    return parseConstructorSignature(signature, structs);
  if (isFallbackSignature(signature))
    return parseFallbackSignature(signature);
  if (isReceiveSignature(signature))
    return {
      type: "receive",
      stateMutability: "payable"
    };
  throw new UnknownSignatureError({ signature });
}
function parseFunctionSignature(signature, structs = {}) {
  const match = execFunctionSignature(signature);
  if (!match)
    throw new InvalidSignatureError({ signature, type: "function" });
  const inputParams = splitParameters(match.parameters);
  const inputs = [];
  const inputLength = inputParams.length;
  for (let i2 = 0; i2 < inputLength; i2++) {
    inputs.push(parseAbiParameter(inputParams[i2], {
      modifiers: functionModifiers,
      structs,
      type: "function"
    }));
  }
  const outputs = [];
  if (match.returns) {
    const outputParams = splitParameters(match.returns);
    const outputLength = outputParams.length;
    for (let i2 = 0; i2 < outputLength; i2++) {
      outputs.push(parseAbiParameter(outputParams[i2], {
        modifiers: functionModifiers,
        structs,
        type: "function"
      }));
    }
  }
  return {
    name: match.name,
    type: "function",
    stateMutability: match.stateMutability ?? "nonpayable",
    inputs,
    outputs
  };
}
function parseEventSignature(signature, structs = {}) {
  const match = execEventSignature(signature);
  if (!match)
    throw new InvalidSignatureError({ signature, type: "event" });
  const params = splitParameters(match.parameters);
  const abiParameters = [];
  const length = params.length;
  for (let i2 = 0; i2 < length; i2++)
    abiParameters.push(parseAbiParameter(params[i2], {
      modifiers: eventModifiers,
      structs,
      type: "event"
    }));
  return { name: match.name, type: "event", inputs: abiParameters };
}
function parseErrorSignature(signature, structs = {}) {
  const match = execErrorSignature(signature);
  if (!match)
    throw new InvalidSignatureError({ signature, type: "error" });
  const params = splitParameters(match.parameters);
  const abiParameters = [];
  const length = params.length;
  for (let i2 = 0; i2 < length; i2++)
    abiParameters.push(parseAbiParameter(params[i2], { structs, type: "error" }));
  return { name: match.name, type: "error", inputs: abiParameters };
}
function parseConstructorSignature(signature, structs = {}) {
  const match = execConstructorSignature(signature);
  if (!match)
    throw new InvalidSignatureError({ signature, type: "constructor" });
  const params = splitParameters(match.parameters);
  const abiParameters = [];
  const length = params.length;
  for (let i2 = 0; i2 < length; i2++)
    abiParameters.push(parseAbiParameter(params[i2], { structs, type: "constructor" }));
  return {
    type: "constructor",
    stateMutability: match.stateMutability ?? "nonpayable",
    inputs: abiParameters
  };
}
function parseFallbackSignature(signature) {
  const match = execFallbackSignature(signature);
  if (!match)
    throw new InvalidSignatureError({ signature, type: "fallback" });
  return {
    type: "fallback",
    stateMutability: match.stateMutability ?? "nonpayable"
  };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
  var _a, _b;
  const parameterCacheKey = getParameterCacheKey(param, options == null ? void 0 : options.type, options == null ? void 0 : options.structs);
  if (parameterCache.has(parameterCacheKey))
    return parameterCache.get(parameterCacheKey);
  const isTuple = isTupleRegex.test(param);
  const match = execTyped(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
  if (!match)
    throw new InvalidParameterError({ param });
  if (match.name && isSolidityKeyword(match.name))
    throw new SolidityProtectedKeywordError({ param, name: match.name });
  const name = match.name ? { name: match.name } : {};
  const indexed = match.modifier === "indexed" ? { indexed: true } : {};
  const structs = (options == null ? void 0 : options.structs) ?? {};
  let type;
  let components = {};
  if (isTuple) {
    type = "tuple";
    const params = splitParameters(match.type);
    const components_ = [];
    const length = params.length;
    for (let i2 = 0; i2 < length; i2++) {
      components_.push(parseAbiParameter(params[i2], { structs }));
    }
    components = { components: components_ };
  } else if (match.type in structs) {
    type = "tuple";
    components = { components: structs[match.type] };
  } else if (dynamicIntegerRegex.test(match.type)) {
    type = `${match.type}256`;
  } else if (match.type === "address payable") {
    type = "address";
  } else {
    type = match.type;
    if (!((options == null ? void 0 : options.type) === "struct") && !isSolidityType(type))
      throw new UnknownSolidityTypeError({ type });
  }
  if (match.modifier) {
    if (!((_b = (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.has) == null ? void 0 : _b.call(_a, match.modifier)))
      throw new InvalidModifierError({
        param,
        type: options == null ? void 0 : options.type,
        modifier: match.modifier
      });
    if (functionModifiers.has(match.modifier) && !isValidDataLocation(type, !!match.array))
      throw new InvalidFunctionModifierError({
        param,
        type: options == null ? void 0 : options.type,
        modifier: match.modifier
      });
  }
  const abiParameter = {
    type: `${type}${match.array ?? ""}`,
    ...name,
    ...indexed,
    ...components
  };
  parameterCache.set(parameterCacheKey, abiParameter);
  return abiParameter;
}
function splitParameters(params, result = [], current = "", depth = 0) {
  const length = params.trim().length;
  for (let i2 = 0; i2 < length; i2++) {
    const char = params[i2];
    const tail = params.slice(i2 + 1);
    switch (char) {
      case ",":
        return depth === 0 ? splitParameters(tail, [...result, current.trim()]) : splitParameters(tail, result, `${current}${char}`, depth);
      case "(":
        return splitParameters(tail, result, `${current}${char}`, depth + 1);
      case ")":
        return splitParameters(tail, result, `${current}${char}`, depth - 1);
      default:
        return splitParameters(tail, result, `${current}${char}`, depth);
    }
  }
  if (current === "")
    return result;
  if (depth !== 0)
    throw new InvalidParenthesisError({ current, depth });
  result.push(current.trim());
  return result;
}
function isSolidityType(type) {
  return type === "address" || type === "bool" || type === "function" || type === "string" || bytesRegex$1.test(type) || integerRegex$1.test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
  return name === "address" || name === "bool" || name === "function" || name === "string" || name === "tuple" || bytesRegex$1.test(name) || integerRegex$1.test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray2) {
  return isArray2 || type === "bytes" || type === "string" || type === "tuple";
}
function parseStructs(signatures) {
  const shallowStructs = {};
  const signaturesLength = signatures.length;
  for (let i2 = 0; i2 < signaturesLength; i2++) {
    const signature = signatures[i2];
    if (!isStructSignature(signature))
      continue;
    const match = execStructSignature(signature);
    if (!match)
      throw new InvalidSignatureError({ signature, type: "struct" });
    const properties = match.properties.split(";");
    const components = [];
    const propertiesLength = properties.length;
    for (let k2 = 0; k2 < propertiesLength; k2++) {
      const property = properties[k2];
      const trimmed = property.trim();
      if (!trimmed)
        continue;
      const abiParameter = parseAbiParameter(trimmed, {
        type: "struct"
      });
      components.push(abiParameter);
    }
    if (!components.length)
      throw new InvalidStructSignatureError({ signature });
    shallowStructs[match.name] = components;
  }
  const resolvedStructs = {};
  const entries = Object.entries(shallowStructs);
  const entriesLength = entries.length;
  for (let i2 = 0; i2 < entriesLength; i2++) {
    const [name, parameters] = entries[i2];
    resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
  }
  return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = /* @__PURE__ */ new Set()) {
  const components = [];
  const length = abiParameters.length;
  for (let i2 = 0; i2 < length; i2++) {
    const abiParameter = abiParameters[i2];
    const isTuple = isTupleRegex.test(abiParameter.type);
    if (isTuple)
      components.push(abiParameter);
    else {
      const match = execTyped(typeWithoutTupleRegex, abiParameter.type);
      if (!(match == null ? void 0 : match.type))
        throw new InvalidAbiTypeParameterError({ abiParameter });
      const { array, type } = match;
      if (type in structs) {
        if (ancestors.has(type))
          throw new CircularReferenceError({ type });
        components.push({
          ...abiParameter,
          type: `tuple${array ?? ""}`,
          components: resolveStructs(structs[type] ?? [], structs, /* @__PURE__ */ new Set([...ancestors, type]))
        });
      } else {
        if (isSolidityType(type))
          components.push(abiParameter);
        else
          throw new UnknownTypeError({ type });
      }
    }
  }
  return components;
}
function parseAbiItem(signature) {
  let abiItem;
  if (typeof signature === "string")
    abiItem = parseSignature$1(signature);
  else {
    const structs = parseStructs(signature);
    const length = signature.length;
    for (let i2 = 0; i2 < length; i2++) {
      const signature_ = signature[i2];
      if (isStructSignature(signature_))
        continue;
      abiItem = parseSignature$1(signature_, structs);
      break;
    }
  }
  if (!abiItem)
    throw new InvalidAbiItemError({ signature });
  return abiItem;
}
function parseAbiParameters(params) {
  const abiParameters = [];
  if (typeof params === "string") {
    const parameters = splitParameters(params);
    const length = parameters.length;
    for (let i2 = 0; i2 < length; i2++) {
      abiParameters.push(parseAbiParameter(parameters[i2], { modifiers }));
    }
  } else {
    const structs = parseStructs(params);
    const length = params.length;
    for (let i2 = 0; i2 < length; i2++) {
      const signature = params[i2];
      if (isStructSignature(signature))
        continue;
      const parameters = splitParameters(signature);
      const length2 = parameters.length;
      for (let k2 = 0; k2 < length2; k2++) {
        abiParameters.push(parseAbiParameter(parameters[k2], { modifiers, structs }));
      }
    }
  }
  if (abiParameters.length === 0)
    throw new InvalidAbiParametersError({ params });
  return abiParameters;
}
class LruMap extends Map {
  constructor(size2) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size2;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
}
const caches = {
  checksum: /* @__PURE__ */ new LruMap(8192)
};
const checksum$1 = caches.checksum;
function keccak256(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes2 = keccak_256$1(from$9(value));
  if (as === "Bytes")
    return bytes2;
  return fromBytes$4(bytes2);
}
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert$8(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError({
      address: value,
      cause: new InvalidInputError()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum(value) !== value)
      throw new InvalidAddressError({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
function checksum(address) {
  if (checksum$1.has(address))
    return checksum$1.get(address);
  assert$8(address, { strict: false });
  const hexAddress = address.substring(2).toLowerCase();
  const hash2 = keccak256(fromString$1(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i2 = 0; i2 < 40; i2 += 2) {
    if (hash2[i2 >> 1] >> 4 >= 8 && characters[i2]) {
      characters[i2] = characters[i2].toUpperCase();
    }
    if ((hash2[i2 >> 1] & 15) >= 8 && characters[i2 + 1]) {
      characters[i2 + 1] = characters[i2 + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum$1.set(address, result);
  return result;
}
function validate$4(address, options = {}) {
  const { strict = true } = options ?? {};
  try {
    assert$8(address, { strict });
    return true;
  } catch {
    return false;
  }
}
class InvalidAddressError extends BaseError$2 {
  constructor({ address, cause }) {
    super(`Address "${address}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
}
class InvalidInputError extends BaseError$2 {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
}
class InvalidChecksumError extends BaseError$2 {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
}
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const maxUint256$1 = 2n ** 256n - 1n;
function decodeParameter(cursor, param, options) {
  const { checksumAddress, staticPosition } = options;
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return decodeArray(cursor, { ...param, type }, { checksumAddress, length, staticPosition });
  }
  if (param.type === "tuple")
    return decodeTuple(cursor, param, {
      checksumAddress,
      staticPosition
    });
  if (param.type === "address")
    return decodeAddress(cursor, { checksum: checksumAddress });
  if (param.type === "bool")
    return decodeBool(cursor);
  if (param.type.startsWith("bytes"))
    return decodeBytes(cursor, param, { staticPosition });
  if (param.type.startsWith("uint") || param.type.startsWith("int"))
    return decodeNumber(cursor, param);
  if (param.type === "string")
    return decodeString(cursor, { staticPosition });
  throw new InvalidTypeError(param.type);
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor, options = {}) {
  const { checksum: checksum$12 = false } = options;
  const value = cursor.readBytes(32);
  const wrap2 = (address) => checksum$12 ? checksum(address) : address;
  return [wrap2(fromBytes$4(slice$2(value, -20))), 32];
}
function decodeArray(cursor, param, options) {
  const { checksumAddress, length, staticPosition } = options;
  if (!length) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const startOfData = start + sizeOfLength;
    cursor.setPosition(start);
    const length2 = toNumber(cursor.readBytes(sizeOfLength));
    const dynamicChild = hasDynamicChild(param);
    let consumed2 = 0;
    const value2 = [];
    for (let i2 = 0; i2 < length2; ++i2) {
      cursor.setPosition(startOfData + (dynamicChild ? i2 * 32 : consumed2));
      const [data, consumed_] = decodeParameter(cursor, param, {
        checksumAddress,
        staticPosition: startOfData
      });
      consumed2 += consumed_;
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  if (hasDynamicChild(param)) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const value2 = [];
    for (let i2 = 0; i2 < length; ++i2) {
      cursor.setPosition(start + i2 * 32);
      const [data] = decodeParameter(cursor, param, {
        checksumAddress,
        staticPosition: start
      });
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  let consumed = 0;
  const value = [];
  for (let i2 = 0; i2 < length; ++i2) {
    const [data, consumed_] = decodeParameter(cursor, param, {
      checksumAddress,
      staticPosition: staticPosition + consumed
    });
    consumed += consumed_;
    value.push(data);
  }
  return [value, consumed];
}
function decodeBool(cursor) {
  return [toBoolean(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
  const [_2, size2] = param.type.split("bytes");
  if (!size2) {
    const offset = toNumber(cursor.readBytes(32));
    cursor.setPosition(staticPosition + offset);
    const length = toNumber(cursor.readBytes(32));
    if (length === 0) {
      cursor.setPosition(staticPosition + 32);
      return ["0x", 32];
    }
    const data = cursor.readBytes(length);
    cursor.setPosition(staticPosition + 32);
    return [fromBytes$4(data), 32];
  }
  const value = fromBytes$4(cursor.readBytes(Number.parseInt(size2, 10), 32));
  return [value, 32];
}
function decodeNumber(cursor, param) {
  const signed = param.type.startsWith("int");
  const size2 = Number.parseInt(param.type.split("int")[1] || "256", 10);
  const value = cursor.readBytes(32);
  return [
    size2 > 48 ? toBigInt$2(value, { signed }) : toNumber(value, { signed }),
    32
  ];
}
function decodeTuple(cursor, param, options) {
  const { checksumAddress, staticPosition } = options;
  const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
  const value = hasUnnamedChild ? [] : {};
  let consumed = 0;
  if (hasDynamicChild(param)) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    for (let i2 = 0; i2 < param.components.length; ++i2) {
      const component = param.components[i2];
      cursor.setPosition(start + consumed);
      const [data, consumed_] = decodeParameter(cursor, component, {
        checksumAddress,
        staticPosition: start
      });
      consumed += consumed_;
      value[hasUnnamedChild ? i2 : component == null ? void 0 : component.name] = data;
    }
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
  }
  for (let i2 = 0; i2 < param.components.length; ++i2) {
    const component = param.components[i2];
    const [data, consumed_] = decodeParameter(cursor, component, {
      checksumAddress,
      staticPosition
    });
    value[hasUnnamedChild ? i2 : component == null ? void 0 : component.name] = data;
    consumed += consumed_;
  }
  return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
  const offset = toNumber(cursor.readBytes(32));
  const start = staticPosition + offset;
  cursor.setPosition(start);
  const length = toNumber(cursor.readBytes(32));
  if (length === 0) {
    cursor.setPosition(staticPosition + 32);
    return ["", 32];
  }
  const data = cursor.readBytes(length, 32);
  const value = toString(trimLeft(data));
  cursor.setPosition(staticPosition + 32);
  return [value, 32];
}
function prepareParameters({ checksumAddress, parameters, values }) {
  const preparedParameters = [];
  for (let i2 = 0; i2 < parameters.length; i2++) {
    preparedParameters.push(prepareParameter({
      checksumAddress,
      parameter: parameters[i2],
      value: values[i2]
    }));
  }
  return preparedParameters;
}
function prepareParameter({ checksumAddress = false, parameter: parameter_, value }) {
  const parameter = parameter_;
  const arrayComponents = getArrayComponents(parameter.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, {
      checksumAddress,
      length,
      parameter: {
        ...parameter,
        type
      }
    });
  }
  if (parameter.type === "tuple") {
    return encodeTuple(value, {
      checksumAddress,
      parameter
    });
  }
  if (parameter.type === "address") {
    return encodeAddress(value, {
      checksum: checksumAddress
    });
  }
  if (parameter.type === "bool") {
    return encodeBoolean(value);
  }
  if (parameter.type.startsWith("uint") || parameter.type.startsWith("int")) {
    const signed = parameter.type.startsWith("int");
    const [, , size2 = "256"] = integerRegex.exec(parameter.type) ?? [];
    return encodeNumber(value, {
      signed,
      size: Number(size2)
    });
  }
  if (parameter.type.startsWith("bytes")) {
    return encodeBytes(value, { type: parameter.type });
  }
  if (parameter.type === "string") {
    return encodeString(value);
  }
  throw new InvalidTypeError(parameter.type);
}
function encode$2(preparedParameters) {
  let staticSize = 0;
  for (let i2 = 0; i2 < preparedParameters.length; i2++) {
    const { dynamic, encoded } = preparedParameters[i2];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size$4(encoded);
  }
  const staticParameters = [];
  const dynamicParameters = [];
  let dynamicSize = 0;
  for (let i2 = 0; i2 < preparedParameters.length; i2++) {
    const { dynamic, encoded } = preparedParameters[i2];
    if (dynamic) {
      staticParameters.push(fromNumber$1(staticSize + dynamicSize, { size: 32 }));
      dynamicParameters.push(encoded);
      dynamicSize += size$4(encoded);
    } else {
      staticParameters.push(encoded);
    }
  }
  return concat$1(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
  const { checksum: checksum2 = false } = options;
  assert$8(value, { strict: checksum2 });
  return {
    dynamic: false,
    encoded: padLeft$1(value.toLowerCase())
  };
}
function encodeArray(value, options) {
  const { checksumAddress, length, parameter } = options;
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new ArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${parameter.type}[${length}]`
    });
  let dynamicChild = false;
  const preparedParameters = [];
  for (let i2 = 0; i2 < value.length; i2++) {
    const preparedParam = prepareParameter({
      checksumAddress,
      parameter,
      value: value[i2]
    });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParameters.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encode$2(preparedParameters);
    if (dynamic) {
      const length2 = fromNumber$1(preparedParameters.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParameters.length > 0 ? concat$1(length2, data) : length2
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concat$1(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { type }) {
  const [, parametersize] = type.split("bytes");
  const bytesSize = size$4(value);
  if (!parametersize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padRight$2(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
    return {
      dynamic: true,
      encoded: concat$1(padLeft$1(fromNumber$1(bytesSize, { size: 32 })), value_)
    };
  }
  if (bytesSize !== Number.parseInt(parametersize, 10))
    throw new BytesSizeMismatchError({
      expectedSize: Number.parseInt(parametersize, 10),
      value
    });
  return { dynamic: false, encoded: padRight$2(value) };
}
function encodeBoolean(value) {
  if (typeof value !== "boolean")
    throw new BaseError$2(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padLeft$1(fromBoolean(value)) };
}
function encodeNumber(value, { signed, size: size2 }) {
  if (typeof size2 === "number") {
    const max = 2n ** (BigInt(size2) - (signed ? 1n : 0n)) - 1n;
    const min = signed ? -max - 1n : 0n;
    if (value > max || value < min)
      throw new IntegerOutOfRangeError$1({
        max: max.toString(),
        min: min.toString(),
        signed,
        size: size2 / 8,
        value: value.toString()
      });
  }
  return {
    dynamic: false,
    encoded: fromNumber$1(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = fromString$2(value);
  const partsLength = Math.ceil(size$4(hexValue) / 32);
  const parts = [];
  for (let i2 = 0; i2 < partsLength; i2++) {
    parts.push(padRight$2(slice$3(hexValue, i2 * 32, (i2 + 1) * 32)));
  }
  return {
    dynamic: true,
    encoded: concat$1(padRight$2(fromNumber$1(size$4(hexValue), { size: 32 })), ...parts)
  };
}
function encodeTuple(value, options) {
  const { checksumAddress, parameter } = options;
  let dynamic = false;
  const preparedParameters = [];
  for (let i2 = 0; i2 < parameter.components.length; i2++) {
    const param_ = parameter.components[i2];
    const index = Array.isArray(value) ? i2 : param_.name;
    const preparedParam = prepareParameter({
      checksumAddress,
      parameter: param_,
      value: value[index]
    });
    preparedParameters.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encode$2(preparedParameters) : concat$1(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
function hasDynamicChild(param) {
  var _a;
  const { type } = param;
  if (type === "string")
    return true;
  if (type === "bytes")
    return true;
  if (type.endsWith("[]"))
    return true;
  if (type === "tuple")
    return (_a = param.components) == null ? void 0 : _a.some(hasDynamicChild);
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents && hasDynamicChild({
    ...param,
    type: arrayComponents[1]
  }))
    return true;
  return false;
}
const staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RecursiveReadLimitExceededError({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  getReadCount(position) {
    return this.positionReadCount.get(position || this.position) || 0;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length - 1);
    return this.bytes.subarray(position, position + length);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes2) {
    this.assertPosition(this.position + bytes2.length - 1);
    this.bytes.set(bytes2, this.position);
    this.position += bytes2.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & 255);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length, size2) {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectBytes(length);
    this.position += size2 ?? length;
    return value;
  },
  readUint8() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(position) {
    const oldPosition = this.position;
    this.assertPosition(position);
    this.position = position;
    return () => this.position = oldPosition;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const count = this.getReadCount();
    this.positionReadCount.set(this.position, count + 1);
    if (count > 0)
      this.recursiveReadCount++;
  }
};
function create(bytes2, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes2;
  cursor.dataView = new DataView(bytes2.buffer, bytes2.byteOffset, bytes2.byteLength);
  cursor.positionReadCount = /* @__PURE__ */ new Map();
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
class NegativeOffsetError extends BaseError$2 {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.NegativeOffsetError"
    });
  }
}
class PositionOutOfBoundsError extends BaseError$2 {
  constructor({ length, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
}
class RecursiveReadLimitExceededError extends BaseError$2 {
  constructor({ count, limit }) {
    super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
}
function decode(parameters, data, options = {}) {
  const { as = "Array", checksumAddress = false } = options;
  const bytes2 = typeof data === "string" ? fromHex$5(data) : data;
  const cursor = create(bytes2);
  if (size$2(bytes2) === 0 && parameters.length > 0)
    throw new ZeroDataError();
  if (size$2(bytes2) && size$2(bytes2) < 32)
    throw new DataSizeTooSmallError({
      data: typeof data === "string" ? data : fromBytes$4(data),
      parameters,
      size: size$2(bytes2)
    });
  let consumed = 0;
  const values = as === "Array" ? [] : {};
  for (let i2 = 0; i2 < parameters.length; ++i2) {
    const param = parameters[i2];
    cursor.setPosition(consumed);
    const [data2, consumed_] = decodeParameter(cursor, param, {
      checksumAddress,
      staticPosition: 0
    });
    consumed += consumed_;
    if (as === "Array")
      values.push(data2);
    else
      values[param.name ?? i2] = data2;
  }
  return values;
}
function encode$1(parameters, values, options) {
  const { checksumAddress = false } = {};
  if (parameters.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: parameters.length,
      givenLength: values.length
    });
  const preparedParameters = prepareParameters({
    checksumAddress,
    parameters,
    values
  });
  const data = encode$2(preparedParameters);
  if (data.length === 0)
    return "0x";
  return data;
}
function encodePacked(types2, values) {
  if (types2.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: types2.length,
      givenLength: values.length
    });
  const data = [];
  for (let i2 = 0; i2 < types2.length; i2++) {
    const type = types2[i2];
    const value = values[i2];
    data.push(encodePacked.encode(type, value));
  }
  return concat$1(...data);
}
(function(encodePacked2) {
  function encode2(type, value, isArray2 = false) {
    if (type === "address") {
      const address = value;
      assert$8(address);
      return padLeft$1(address.toLowerCase(), isArray2 ? 32 : 0);
    }
    if (type === "string")
      return fromString$2(value);
    if (type === "bytes")
      return value;
    if (type === "bool")
      return padLeft$1(fromBoolean(value), isArray2 ? 32 : 1);
    const intMatch = type.match(integerRegex);
    if (intMatch) {
      const [_type, baseType, bits = "256"] = intMatch;
      const size2 = Number.parseInt(bits, 10) / 8;
      return fromNumber$1(value, {
        size: isArray2 ? 32 : size2,
        signed: baseType === "int"
      });
    }
    const bytesMatch = type.match(bytesRegex);
    if (bytesMatch) {
      const [_type, size2] = bytesMatch;
      if (Number.parseInt(size2, 10) !== (value.length - 2) / 2)
        throw new BytesSizeMismatchError({
          expectedSize: Number.parseInt(size2, 10),
          value
        });
      return padRight$2(value, isArray2 ? 32 : 0);
    }
    const arrayMatch = type.match(arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
      const [_type, childType] = arrayMatch;
      const data = [];
      for (let i2 = 0; i2 < value.length; i2++) {
        data.push(encode2(childType, value[i2], true));
      }
      if (data.length === 0)
        return "0x";
      return concat$1(...data);
    }
    throw new InvalidTypeError(type);
  }
  encodePacked2.encode = encode2;
})(encodePacked || (encodePacked = {}));
function from$8(parameters) {
  if (Array.isArray(parameters) && typeof parameters[0] === "string")
    return parseAbiParameters(parameters);
  if (typeof parameters === "string")
    return parseAbiParameters(parameters);
  return parameters;
}
class DataSizeTooSmallError extends BaseError$2 {
  constructor({ data, parameters, size: size2 }) {
    super(`Data size of ${size2} bytes is too small for given parameters.`, {
      metaMessages: [
        `Params: (${formatAbiParameters(parameters)})`,
        `Data:   ${data} (${size2} bytes)`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.DataSizeTooSmallError"
    });
  }
}
class ZeroDataError extends BaseError$2 {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.');
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ZeroDataError"
    });
  }
}
class ArrayLengthMismatchError extends BaseError$2 {
  constructor({ expectedLength, givenLength, type }) {
    super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ArrayLengthMismatchError"
    });
  }
}
class BytesSizeMismatchError extends BaseError$2 {
  constructor({ expectedSize, value }) {
    super(`Size of bytes "${value}" (bytes${size$4(value)}) does not match expected size (bytes${expectedSize}).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
}
class LengthMismatchError extends BaseError$2 {
  constructor({ expectedLength, givenLength }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${expectedLength}`,
      `Given length (values): ${givenLength}`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.LengthMismatchError"
    });
  }
}
class InvalidArrayError extends BaseError$2 {
  constructor(value) {
    super(`Value \`${value}\` is not a valid array.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidArrayError"
    });
  }
}
class InvalidTypeError extends BaseError$2 {
  constructor(type) {
    super(`Type \`${type}\` is not a valid ABI Type.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidTypeError"
    });
  }
}
function assert$7(signature, options = {}) {
  const { recovered } = options;
  if (typeof signature.r === "undefined")
    throw new MissingPropertiesError$1({ signature });
  if (typeof signature.s === "undefined")
    throw new MissingPropertiesError$1({ signature });
  if (recovered && typeof signature.yParity === "undefined")
    throw new MissingPropertiesError$1({ signature });
  if (signature.r < 0n || signature.r > maxUint256$1)
    throw new InvalidRError$1({ value: signature.r });
  if (signature.s < 0n || signature.s > maxUint256$1)
    throw new InvalidSError$1({ value: signature.s });
  if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
    throw new InvalidYParityError$1({ value: signature.yParity });
}
function fromBytes$3(signature) {
  return fromHex$4(fromBytes$4(signature));
}
function fromHex$4(signature) {
  if (signature.length !== 130 && signature.length !== 132)
    throw new InvalidSerializedSizeError$2({ signature });
  const r2 = BigInt(slice$3(signature, 0, 32));
  const s2 = BigInt(slice$3(signature, 32, 64));
  const yParity = (() => {
    const yParity2 = Number(`0x${signature.slice(130)}`);
    if (Number.isNaN(yParity2))
      return void 0;
    try {
      return vToYParity$1(yParity2);
    } catch {
      throw new InvalidYParityError$1({ value: yParity2 });
    }
  })();
  if (typeof yParity === "undefined")
    return {
      r: r2,
      s: s2
    };
  return {
    r: r2,
    s: s2,
    yParity
  };
}
function extract(value) {
  if (typeof value.r === "undefined")
    return void 0;
  if (typeof value.s === "undefined")
    return void 0;
  return from$7(value);
}
function from$7(signature) {
  const signature_ = (() => {
    if (typeof signature === "string")
      return fromHex$4(signature);
    if (signature instanceof Uint8Array)
      return fromBytes$3(signature);
    if (typeof signature.r === "string")
      return fromRpc$1(signature);
    if (signature.v)
      return fromLegacy(signature);
    return {
      r: signature.r,
      s: signature.s,
      ...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
    };
  })();
  assert$7(signature_);
  return signature_;
}
function fromLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    yParity: vToYParity$1(signature.v)
  };
}
function fromRpc$1(signature) {
  const yParity = (() => {
    const v2 = signature.v ? Number(signature.v) : void 0;
    let yParity2 = signature.yParity ? Number(signature.yParity) : void 0;
    if (typeof v2 === "number" && typeof yParity2 !== "number")
      yParity2 = vToYParity$1(v2);
    if (typeof yParity2 !== "number")
      throw new InvalidYParityError$1({ value: signature.yParity });
    return yParity2;
  })();
  return {
    r: BigInt(signature.r),
    s: BigInt(signature.s),
    yParity
  };
}
function vToYParity$1(v2) {
  if (v2 === 0 || v2 === 27)
    return 0;
  if (v2 === 1 || v2 === 28)
    return 1;
  if (v2 >= 35)
    return v2 % 2 === 0 ? 1 : 0;
  throw new InvalidVError$1({ value: v2 });
}
let InvalidSerializedSizeError$2 = class InvalidSerializedSizeError extends BaseError$2 {
  constructor({ signature }) {
    super(`Value \`${signature}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${size$4(from$a(signature))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
};
let MissingPropertiesError$1 = class MissingPropertiesError extends BaseError$2 {
  constructor({ signature }) {
    super(`Signature \`${stringify$1(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.MissingPropertiesError"
    });
  }
};
let InvalidRError$1 = class InvalidRError extends BaseError$2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidRError"
    });
  }
};
let InvalidSError$1 = class InvalidSError extends BaseError$2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSError"
    });
  }
};
let InvalidYParityError$1 = class InvalidYParityError extends BaseError$2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidYParityError"
    });
  }
};
let InvalidVError$1 = class InvalidVError extends BaseError$2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidVError"
    });
  }
};
function from$6(authorization, options = {}) {
  if (typeof authorization.chainId === "string")
    return fromRpc(authorization);
  return { ...authorization, ...options.signature };
}
function fromRpc(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return {
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  };
}
const magicBytes$1 = "0x8010801080108010801080108010801080108010801080108010801080108010";
const suffixParameters = from$8("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");
function assert$6(value) {
  if (typeof value === "string") {
    if (slice$3(value, -32) !== magicBytes$1)
      throw new InvalidWrappedSignatureError$1(value);
  } else
    assert$7(value.authorization);
}
function unwrap(wrapped) {
  assert$6(wrapped);
  const suffixLength = toNumber$1(slice$3(wrapped, -64, -32));
  const suffix = slice$3(wrapped, -suffixLength - 64, -64);
  const signature = slice$3(wrapped, 0, -suffixLength - 64);
  const [auth, to, data] = decode(suffixParameters, suffix);
  const authorization = from$6({
    address: auth.delegation,
    chainId: Number(auth.chainId),
    nonce: auth.nonce,
    yParity: auth.yParity,
    r: auth.r,
    s: auth.s
  });
  return {
    authorization,
    signature,
    ...data && data !== "0x" ? { data, to } : {}
  };
}
function validate$3(value) {
  try {
    assert$6(value);
    return true;
  } catch {
    return false;
  }
}
let InvalidWrappedSignatureError$1 = class InvalidWrappedSignatureError extends BaseError$2 {
  constructor(wrapped) {
    super(`Value \`${wrapped}\` is an invalid ERC-8010 wrapped signature.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SignatureErc8010.InvalidWrappedSignatureError"
    });
  }
};
function serializeErc6492Signature(parameters) {
  const { address, data, signature, to = "hex" } = parameters;
  const signature_ = concatHex([
    encodeAbiParameters([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [address, data, signature]),
    erc6492MagicBytes
  ]);
  if (to === "hex")
    return signature_;
  return hexToBytes(signature_);
}
function formatStorageProof(storageProof) {
  return storageProof.map((proof) => ({
    ...proof,
    value: BigInt(proof.value)
  }));
}
function formatProof(proof) {
  return {
    ...proof,
    balance: proof.balance ? BigInt(proof.balance) : void 0,
    nonce: proof.nonce ? hexToNumber$1(proof.nonce) : void 0,
    storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
  };
}
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
  const blockTag = blockTag_ ?? "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const proof = await client.request({
    method: "eth_getProof",
    params: [address, storageKeys, blockNumberHex || blockTag]
  });
  return formatProof(proof);
}
async function getStorageAt(client, { address, blockNumber, blockTag = "latest", slot }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const data = await client.request({
    method: "eth_getStorageAt",
    params: [address, slot, blockNumberHex || blockTag]
  });
  return data;
}
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash: hash2, index }) {
  var _a, _b, _c;
  const blockTag = blockTag_ || "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let transaction = null;
  if (hash2) {
    transaction = await client.request({
      method: "eth_getTransactionByHash",
      params: [hash2]
    }, { dedupe: true });
  } else if (blockHash) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [blockHash, numberToHex(index)]
    }, { dedupe: true });
  } else {
    transaction = await client.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [blockNumberHex || blockTag, numberToHex(index)]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  if (!transaction)
    throw new TransactionNotFoundError({
      blockHash,
      blockNumber,
      blockTag,
      hash: hash2,
      index
    });
  const format = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transaction) == null ? void 0 : _c.format) || formatTransaction;
  return format(transaction, "getTransaction");
}
async function getTransactionConfirmations(client, { hash: hash2, transactionReceipt }) {
  const [blockNumber, transaction] = await Promise.all([
    getAction(client, getBlockNumber, "getBlockNumber")({}),
    hash2 ? getAction(client, getTransaction, "getTransaction")({ hash: hash2 }) : void 0
  ]);
  const transactionBlockNumber = (transactionReceipt == null ? void 0 : transactionReceipt.blockNumber) || (transaction == null ? void 0 : transaction.blockNumber);
  if (!transactionBlockNumber)
    return 0n;
  return blockNumber - transactionBlockNumber + 1n;
}
async function getTransactionReceipt(client, { hash: hash2 }) {
  var _a, _b, _c;
  const receipt = await client.request({
    method: "eth_getTransactionReceipt",
    params: [hash2]
  }, { dedupe: true });
  if (!receipt)
    throw new TransactionReceiptNotFoundError({ hash: hash2 });
  const format = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionReceipt) == null ? void 0 : _c.format) || formatTransactionReceipt;
  return format(receipt, "getTransactionReceipt");
}
async function simulateBlocks(client, parameters) {
  const { blockNumber, blockTag = client.experimental_blockTag ?? "latest", blocks, returnFullTransactions, traceTransfers, validation } = parameters;
  try {
    const blockStateCalls = [];
    for (const block2 of blocks) {
      const blockOverrides = block2.blockOverrides ? toRpc(block2.blockOverrides) : void 0;
      const calls = block2.calls.map((call_) => {
        const call2 = call_;
        const account2 = call2.account ? parseAccount(call2.account) : void 0;
        const data = call2.abi ? encodeFunctionData(call2) : call2.data;
        const request = {
          ...call2,
          data: call2.dataSuffix ? concat$2([data || "0x", call2.dataSuffix]) : data,
          from: call2.from ?? (account2 == null ? void 0 : account2.address)
        };
        assertRequest(request);
        return formatTransactionRequest(request);
      });
      const stateOverrides = block2.stateOverrides ? serializeStateOverride(block2.stateOverrides) : void 0;
      blockStateCalls.push({
        blockOverrides,
        calls,
        stateOverrides
      });
    }
    const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const result = await client.request({
      method: "eth_simulateV1",
      params: [
        { blockStateCalls, returnFullTransactions, traceTransfers, validation },
        block
      ]
    });
    return result.map((block2, i2) => ({
      ...formatBlock(block2),
      calls: block2.calls.map((call2, j2) => {
        var _a, _b;
        const { abi: abi2, args, functionName, to } = blocks[i2].calls[j2];
        const data = ((_a = call2.error) == null ? void 0 : _a.data) ?? call2.returnData;
        const gasUsed = BigInt(call2.gasUsed);
        const logs = (_b = call2.logs) == null ? void 0 : _b.map((log) => formatLog(log));
        const status = call2.status === "0x1" ? "success" : "failure";
        const result2 = abi2 && status === "success" && data !== "0x" ? decodeFunctionResult({
          abi: abi2,
          data,
          functionName
        }) : null;
        const error = (() => {
          var _a2;
          if (status === "success")
            return void 0;
          let error2;
          if (((_a2 = call2.error) == null ? void 0 : _a2.data) === "0x")
            error2 = new AbiDecodingZeroDataError();
          else if (call2.error)
            error2 = new RawContractError(call2.error);
          if (!error2)
            return void 0;
          return getContractError$1(error2, {
            abi: abi2 ?? [],
            address: to ?? "0x",
            args,
            functionName: functionName ?? "<unknown>"
          });
        })();
        return {
          data,
          gasUsed,
          logs,
          status,
          ...status === "success" ? {
            result: result2
          } : {
            error
          }
        };
      })
    }));
  } catch (e2) {
    const cause = e2;
    const error = getNodeError(cause, {});
    if (error instanceof UnknownNodeError)
      throw cause;
    throw error;
  }
}
function normalizeSignature(signature) {
  let active = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i2 = 0; i2 < signature.length; i2++) {
    const char = signature[i2];
    if (["(", ")", ","].includes(char))
      active = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", "error", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i2 - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError$2("Unable to normalize signature.");
  return result;
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return validate$4(arg, { strict: false });
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index) => {
          return isArgOfType(Object.values(arg)[index], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x2) => isArgOfType(x2, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types2 = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types2.includes("address") && types2.includes("bytes20"))
        return true;
      if (types2.includes("address") && types2.includes("string"))
        return validate$4(args[parameterIndex], {
          strict: false
        });
      if (types2.includes("address") && types2.includes("bytes"))
        return validate$4(args[parameterIndex], {
          strict: false
        });
      return false;
    })();
    if (ambiguous)
      return types2;
  }
  return;
}
function from$5(abiItem, options = {}) {
  const { prepare = true } = options;
  const item = (() => {
    if (Array.isArray(abiItem))
      return parseAbiItem(abiItem);
    if (typeof abiItem === "string")
      return parseAbiItem(abiItem);
    return abiItem;
  })();
  return {
    ...item,
    ...prepare ? { hash: getSignatureHash(item) } : {}
  };
}
function fromAbi$2(abi2, name, options) {
  const { args = [], prepare = true } = options ?? {};
  const isSelector = validate$5(name, { strict: false });
  const abiItems = abi2.filter((abiItem2) => {
    if (isSelector) {
      if (abiItem2.type === "function" || abiItem2.type === "error")
        return getSelector$1(abiItem2) === slice$3(name, 0, 4);
      if (abiItem2.type === "event")
        return getSignatureHash(abiItem2) === name;
      return false;
    }
    return "name" in abiItem2 && abiItem2.name === name;
  });
  if (abiItems.length === 0)
    throw new NotFoundError({ name });
  if (abiItems.length === 1)
    return {
      ...abiItems[0],
      ...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
    };
  let matchedAbiItem;
  for (const abiItem2 of abiItems) {
    if (!("inputs" in abiItem2))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem2.inputs || abiItem2.inputs.length === 0)
        return {
          ...abiItem2,
          ...prepare ? { hash: getSignatureHash(abiItem2) } : {}
        };
      continue;
    }
    if (!abiItem2.inputs)
      continue;
    if (abiItem2.inputs.length === 0)
      continue;
    if (abiItem2.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index) => {
      const abiParameter = "inputs" in abiItem2 && abiItem2.inputs[index];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem2.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AmbiguityError({
            abiItem: abiItem2,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem2;
    }
  }
  const abiItem = (() => {
    if (matchedAbiItem)
      return matchedAbiItem;
    const [abiItem2, ...overloads] = abiItems;
    return { ...abiItem2, overloads };
  })();
  if (!abiItem)
    throw new NotFoundError({ name });
  return {
    ...abiItem,
    ...prepare ? { hash: getSignatureHash(abiItem) } : {}
  };
}
function getSelector$1(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name] = parameters;
      return fromAbi$2(abi2, name);
    }
    return parameters[0];
  })();
  return slice$3(getSignatureHash(abiItem), 0, 4);
}
function getSignature(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name] = parameters;
      return fromAbi$2(abi2, name);
    }
    return parameters[0];
  })();
  const signature = (() => {
    if (typeof abiItem === "string")
      return abiItem;
    return formatAbiItem(abiItem);
  })();
  return normalizeSignature(signature);
}
function getSignatureHash(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name] = parameters;
      return fromAbi$2(abi2, name);
    }
    return parameters[0];
  })();
  if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash)
    return abiItem.hash;
  return keccak256(fromString$2(getSignature(abiItem)));
}
class AmbiguityError extends BaseError$2 {
  constructor(x2, y2) {
    super("Found ambiguous types in overloaded ABI Items.", {
      metaMessages: [
        // TODO: abitype to add support for signature-formatted ABI items.
        `\`${x2.type}\` in \`${normalizeSignature(formatAbiItem(x2.abiItem))}\`, and`,
        `\`${y2.type}\` in \`${normalizeSignature(formatAbiItem(y2.abiItem))}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.AmbiguityError"
    });
  }
}
class NotFoundError extends BaseError$2 {
  constructor({ name, data, type = "item" }) {
    const selector = (() => {
      if (name)
        return ` with name "${name}"`;
      if (data)
        return ` with data "${data}"`;
      return "";
    })();
    super(`ABI ${type}${selector} not found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.NotFoundError"
    });
  }
}
function encode(...parameters) {
  var _a;
  const [abiConstructor, options] = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, options2] = parameters;
      return [fromAbi$1(abi2), options2];
    }
    return parameters;
  })();
  const { bytecode, args } = options;
  return concat$1(bytecode, ((_a = abiConstructor.inputs) == null ? void 0 : _a.length) && (args == null ? void 0 : args.length) ? encode$1(abiConstructor.inputs, args) : "0x");
}
function from$4(abiConstructor) {
  return from$5(abiConstructor);
}
function fromAbi$1(abi2) {
  const item = abi2.find((item2) => item2.type === "constructor");
  if (!item)
    throw new NotFoundError({ name: "constructor" });
  return item;
}
function encodeData(...parameters) {
  const [abiFunction, args = []] = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name, args3] = parameters;
      return [fromAbi(abi2, name, { args: args3 }), args3];
    }
    const [abiFunction2, args2] = parameters;
    return [abiFunction2, args2];
  })();
  const { overloads } = abiFunction;
  const item = overloads ? fromAbi([abiFunction, ...overloads], abiFunction.name, {
    args
  }) : abiFunction;
  const selector = getSelector(item);
  const data = args.length > 0 ? encode$1(item.inputs, args) : void 0;
  return data ? concat$1(selector, data) : selector;
}
function from$3(abiFunction, options = {}) {
  return from$5(abiFunction, options);
}
function fromAbi(abi2, name, options) {
  const item = fromAbi$2(abi2, name, options);
  if (item.type !== "function")
    throw new NotFoundError({ name, type: "function" });
  return item;
}
function getSelector(abiItem) {
  return getSelector$1(abiItem);
}
const ethAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const zeroAddress = "0x0000000000000000000000000000000000000000";
const getBalanceCode = "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
async function simulateCalls(client, parameters) {
  const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
  const account2 = parameters.account ? parseAccount(parameters.account) : void 0;
  if (traceAssetChanges && !account2)
    throw new BaseError$3("`account` is required when `traceAssetChanges` is true");
  const getBalanceData = account2 ? encode(from$4("constructor(bytes, bytes)"), {
    bytecode: deploylessCallViaBytecodeBytecode,
    args: [
      getBalanceCode,
      encodeData(from$3("function getBalance(address)"), [account2.address])
    ]
  }) : void 0;
  const assetAddresses = traceAssetChanges ? await Promise.all(parameters.calls.map(async (call2) => {
    if (!call2.data && !call2.abi)
      return;
    const { accessList } = await createAccessList(client, {
      account: account2.address,
      ...call2,
      data: call2.abi ? encodeFunctionData(call2) : call2.data
    });
    return accessList.map(({ address, storageKeys }) => storageKeys.length > 0 ? address : null);
  })).then((x2) => x2.flat().filter(Boolean)) : [];
  const blocks = await simulateBlocks(client, {
    blockNumber,
    blockTag,
    blocks: [
      ...traceAssetChanges ? [
        // ETH pre balances
        {
          calls: [{ data: getBalanceData }],
          stateOverrides
        },
        // Asset pre balances
        {
          calls: assetAddresses.map((address, i2) => ({
            abi: [
              from$3("function balanceOf(address) returns (uint256)")
            ],
            functionName: "balanceOf",
            args: [account2.address],
            to: address,
            from: zeroAddress,
            nonce: i2
          })),
          stateOverrides: [
            {
              address: zeroAddress,
              nonce: 0
            }
          ]
        }
      ] : [],
      {
        calls: [...calls, {}].map((call2) => ({
          ...call2,
          from: account2 == null ? void 0 : account2.address
        })),
        stateOverrides
      },
      ...traceAssetChanges ? [
        // ETH post balances
        {
          calls: [{ data: getBalanceData }]
        },
        // Asset post balances
        {
          calls: assetAddresses.map((address, i2) => ({
            abi: [
              from$3("function balanceOf(address) returns (uint256)")
            ],
            functionName: "balanceOf",
            args: [account2.address],
            to: address,
            from: zeroAddress,
            nonce: i2
          })),
          stateOverrides: [
            {
              address: zeroAddress,
              nonce: 0
            }
          ]
        },
        // Decimals
        {
          calls: assetAddresses.map((address, i2) => ({
            to: address,
            abi: [
              from$3("function decimals() returns (uint256)")
            ],
            functionName: "decimals",
            from: zeroAddress,
            nonce: i2
          })),
          stateOverrides: [
            {
              address: zeroAddress,
              nonce: 0
            }
          ]
        },
        // Token URI
        {
          calls: assetAddresses.map((address, i2) => ({
            to: address,
            abi: [
              from$3("function tokenURI(uint256) returns (string)")
            ],
            functionName: "tokenURI",
            args: [0n],
            from: zeroAddress,
            nonce: i2
          })),
          stateOverrides: [
            {
              address: zeroAddress,
              nonce: 0
            }
          ]
        },
        // Symbols
        {
          calls: assetAddresses.map((address, i2) => ({
            to: address,
            abi: [from$3("function symbol() returns (string)")],
            functionName: "symbol",
            from: zeroAddress,
            nonce: i2
          })),
          stateOverrides: [
            {
              address: zeroAddress,
              nonce: 0
            }
          ]
        }
      ] : []
    ],
    traceTransfers,
    validation
  });
  const block_results = traceAssetChanges ? blocks[2] : blocks[0];
  const [block_ethPre, block_assetsPre, , block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols] = traceAssetChanges ? blocks : [];
  const { calls: block_calls, ...block } = block_results;
  const results = block_calls.slice(0, -1) ?? [];
  const ethPre = (block_ethPre == null ? void 0 : block_ethPre.calls) ?? [];
  const assetsPre = (block_assetsPre == null ? void 0 : block_assetsPre.calls) ?? [];
  const balancesPre = [...ethPre, ...assetsPre].map((call2) => call2.status === "success" ? hexToBigInt(call2.data) : null);
  const ethPost = (block_ethPost == null ? void 0 : block_ethPost.calls) ?? [];
  const assetsPost = (block_assetsPost == null ? void 0 : block_assetsPost.calls) ?? [];
  const balancesPost = [...ethPost, ...assetsPost].map((call2) => call2.status === "success" ? hexToBigInt(call2.data) : null);
  const decimals = ((block_decimals == null ? void 0 : block_decimals.calls) ?? []).map((x2) => x2.status === "success" ? x2.result : null);
  const symbols = ((block_symbols == null ? void 0 : block_symbols.calls) ?? []).map((x2) => x2.status === "success" ? x2.result : null);
  const tokenURI = ((block_tokenURI == null ? void 0 : block_tokenURI.calls) ?? []).map((x2) => x2.status === "success" ? x2.result : null);
  const changes = [];
  for (const [i2, balancePost] of balancesPost.entries()) {
    const balancePre = balancesPre[i2];
    if (typeof balancePost !== "bigint")
      continue;
    if (typeof balancePre !== "bigint")
      continue;
    const decimals_ = decimals[i2 - 1];
    const symbol_ = symbols[i2 - 1];
    const tokenURI_ = tokenURI[i2 - 1];
    const token = (() => {
      if (i2 === 0)
        return {
          address: ethAddress,
          decimals: 18,
          symbol: "ETH"
        };
      return {
        address: assetAddresses[i2 - 1],
        decimals: tokenURI_ || decimals_ ? Number(decimals_ ?? 1) : void 0,
        symbol: symbol_ ?? void 0
      };
    })();
    if (changes.some((change) => change.token.address === token.address))
      continue;
    changes.push({
      token,
      value: {
        pre: balancePre,
        post: balancePost,
        diff: balancePost - balancePre
      }
    });
  }
  return {
    assetChanges: changes,
    block,
    results
  };
}
async function simulateContract(client, parameters) {
  const { abi: abi2, address, args, dataSuffix, functionName, ...callRequest } = parameters;
  const account2 = callRequest.account ? parseAccount(callRequest.account) : client.account;
  const calldata = encodeFunctionData({ abi: abi2, args, functionName });
  try {
    const { data } = await getAction(client, call, "call")({
      batch: false,
      data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...callRequest,
      account: account2
    });
    const result = decodeFunctionResult({
      abi: abi2,
      args,
      functionName,
      data: data || "0x"
    });
    const minimizedAbi = abi2.filter((abiItem) => "name" in abiItem && abiItem.name === parameters.functionName);
    return {
      result,
      request: {
        abi: minimizedAbi,
        address,
        args,
        dataSuffix,
        functionName,
        ...callRequest,
        account: account2
      }
    };
  } catch (error) {
    throw getContractError$1(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/simulateContract",
      functionName,
      sender: account2 == null ? void 0 : account2.address
    });
  }
}
async function uninstallFilter(_client, { filter }) {
  return filter.request({
    method: "eth_uninstallFilter",
    params: [filter.id]
  });
}
const magicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492";
function assert$5(wrapped) {
  if (slice$3(wrapped, -32) !== magicBytes)
    throw new InvalidWrappedSignatureError2(wrapped);
}
function wrap(value) {
  const { data, signature, to } = value;
  return concat$1(encode$1(from$8("address, bytes, bytes"), [
    to,
    data,
    signature
  ]), magicBytes);
}
function validate$2(wrapped) {
  try {
    assert$5(wrapped);
    return true;
  } catch {
    return false;
  }
}
class InvalidWrappedSignatureError2 extends BaseError$2 {
  constructor(wrapped) {
    super(`Value \`${wrapped}\` is an invalid ERC-6492 wrapped signature.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SignatureErc6492.InvalidWrappedSignatureError"
    });
  }
}
function serializeSignature({ r: r2, s: s2, to = "hex", v: v2, yParity }) {
  const yParity_ = (() => {
    if (yParity === 0 || yParity === 1)
      return yParity;
    if (v2 && (v2 === 27n || v2 === 28n || v2 >= 35n))
      return v2 % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })();
  const signature = `0x${new secp256k1.Signature(hexToBigInt(r2), hexToBigInt(s2)).toCompactHex()}${yParity_ === 0 ? "1b" : "1c"}`;
  if (to === "hex")
    return signature;
  return hexToBytes(signature);
}
async function verifyHash(client, parameters) {
  var _a, _b, _c, _d, _e, _f;
  const { address, hash: hash2, erc6492VerifierAddress: verifierAddress = parameters.universalSignatureVerifierAddress ?? ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.contracts) == null ? void 0 : _b.erc6492Verifier) == null ? void 0 : _c.address), multicallAddress = parameters.multicallAddress ?? ((_f = (_e = (_d = client.chain) == null ? void 0 : _d.contracts) == null ? void 0 : _e.multicall3) == null ? void 0 : _f.address) } = parameters;
  const signature = (() => {
    const signature2 = parameters.signature;
    if (isHex(signature2))
      return signature2;
    if (typeof signature2 === "object" && "r" in signature2 && "s" in signature2)
      return serializeSignature(signature2);
    return bytesToHex$1(signature2);
  })();
  try {
    if (validate$3(signature))
      return await verifyErc8010(client, {
        ...parameters,
        multicallAddress,
        signature
      });
    return await verifyErc6492(client, {
      ...parameters,
      verifierAddress,
      signature
    });
  } catch (error) {
    try {
      const verified = isAddressEqual(getAddress(address), await recoverAddress({ hash: hash2, signature }));
      if (verified)
        return true;
    } catch {
    }
    if (error instanceof VerificationError) {
      return false;
    }
    throw error;
  }
}
async function verifyErc8010(client, parameters) {
  var _a;
  const { address, blockNumber, blockTag, hash: hash2, multicallAddress } = parameters;
  const { authorization: authorization_ox, data: initData, signature, to } = unwrap(parameters.signature);
  const code = await getCode(client, {
    address,
    blockNumber,
    blockTag
  });
  if (code === concatHex(["0xef0100", authorization_ox.address]))
    return await verifyErc1271(client, {
      address,
      blockNumber,
      blockTag,
      hash: hash2,
      signature
    });
  const authorization = {
    address: authorization_ox.address,
    chainId: Number(authorization_ox.chainId),
    nonce: Number(authorization_ox.nonce),
    r: numberToHex(authorization_ox.r, { size: 32 }),
    s: numberToHex(authorization_ox.s, { size: 32 }),
    yParity: authorization_ox.yParity
  };
  const valid = await verifyAuthorization({
    address,
    authorization
  });
  if (!valid)
    throw new VerificationError();
  const results = await getAction(client, readContract, "readContract")({
    ...multicallAddress ? { address: multicallAddress } : { code: multicall3Bytecode },
    authorizationList: [authorization],
    abi: multicall3Abi,
    blockNumber,
    blockTag: "pending",
    functionName: "aggregate3",
    args: [
      [
        ...initData ? [
          {
            allowFailure: true,
            target: to ?? address,
            callData: initData
          }
        ] : [],
        {
          allowFailure: true,
          target: address,
          callData: encodeFunctionData({
            abi: erc1271Abi,
            functionName: "isValidSignature",
            args: [hash2, signature]
          })
        }
      ]
    ]
  });
  const data = (_a = results[results.length - 1]) == null ? void 0 : _a.returnData;
  if (data == null ? void 0 : data.startsWith("0x1626ba7e"))
    return true;
  throw new VerificationError();
}
async function verifyErc6492(client, parameters) {
  const { address, factory, factoryData, hash: hash2, signature, verifierAddress, ...rest } = parameters;
  const wrappedSignature = await (async () => {
    if (!factory && !factoryData)
      return signature;
    if (validate$2(signature))
      return signature;
    return wrap({
      data: factoryData,
      signature,
      to: factory
    });
  })();
  const args = verifierAddress ? {
    to: verifierAddress,
    data: encodeFunctionData({
      abi: erc6492SignatureValidatorAbi,
      functionName: "isValidSig",
      args: [address, hash2, wrappedSignature]
    }),
    ...rest
  } : {
    data: encodeDeployData({
      abi: erc6492SignatureValidatorAbi,
      args: [address, hash2, wrappedSignature],
      bytecode: erc6492SignatureValidatorByteCode
    }),
    ...rest
  };
  const { data } = await getAction(client, call, "call")(args).catch((error) => {
    if (error instanceof CallExecutionError)
      throw new VerificationError();
    throw error;
  });
  if (hexToBool(data ?? "0x0"))
    return true;
  throw new VerificationError();
}
async function verifyErc1271(client, parameters) {
  const { address, blockNumber, blockTag, hash: hash2, signature } = parameters;
  const result = await getAction(client, readContract, "readContract")({
    address,
    abi: erc1271Abi,
    args: [hash2, signature],
    blockNumber,
    blockTag,
    functionName: "isValidSignature"
  }).catch((error) => {
    if (error instanceof ContractFunctionExecutionError)
      throw new VerificationError();
    throw error;
  });
  if (result.startsWith("0x1626ba7e"))
    return true;
  throw new VerificationError();
}
class VerificationError extends Error {
}
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
  const hash2 = hashMessage(message);
  return verifyHash(client, {
    address,
    factory,
    factoryData,
    hash: hash2,
    signature,
    ...callRequest
  });
}
async function verifyTypedData(client, parameters) {
  const { address, factory, factoryData, signature, message, primaryType, types: types2, domain, ...callRequest } = parameters;
  const hash2 = hashTypedData({ message, primaryType, types: types2, domain });
  return verifyHash(client, {
    address,
    factory,
    factoryData,
    hash: hash2,
    signature,
    ...callRequest
  });
}
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  let prevBlockNumber;
  const pollBlockNumber = () => {
    const observerId = stringify$2([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed,
      pollingInterval
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => poll(async () => {
      var _a;
      try {
        const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
        if (prevBlockNumber !== void 0) {
          if (blockNumber === prevBlockNumber)
            return;
          if (blockNumber - prevBlockNumber > 1 && emitMissed) {
            for (let i2 = prevBlockNumber + 1n; i2 < blockNumber; i2++) {
              emit.onBlockNumber(i2, prevBlockNumber);
              prevBlockNumber = i2;
            }
          }
        }
        if (prevBlockNumber === void 0 || blockNumber > prevBlockNumber) {
          emit.onBlockNumber(blockNumber, prevBlockNumber);
          prevBlockNumber = blockNumber;
        }
      } catch (err) {
        (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlockNumber = () => {
    const observerId = stringify$2([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => {
      let active = true;
      let unsubscribe = () => active = false;
      (async () => {
        try {
          const transport = (() => {
            if (client.transport.type === "fallback") {
              const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
              if (!transport2)
                return client.transport;
              return transport2.value;
            }
            return client.transport;
          })();
          const { unsubscribe: unsubscribe_ } = await transport.subscribe({
            params: ["newHeads"],
            onData(data) {
              var _a;
              if (!active)
                return;
              const blockNumber = hexToBigInt((_a = data.result) == null ? void 0 : _a.number);
              emit.onBlockNumber(blockNumber, prevBlockNumber);
              prevBlockNumber = blockNumber;
            },
            onError(error) {
              var _a;
              (_a = emit.onError) == null ? void 0 : _a.call(emit, error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError == null ? void 0 : onError(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}
async function waitForTransactionReceipt(client, parameters) {
  const {
    checkReplacement = true,
    confirmations = 1,
    hash: hash2,
    onReplaced,
    retryCount = 6,
    retryDelay = ({ count }) => ~~(1 << count) * 200,
    // exponential backoff
    timeout = 18e4
  } = parameters;
  const observerId = stringify$2(["waitForTransactionReceipt", client.uid, hash2]);
  const pollingInterval = (() => {
    var _a;
    if (parameters.pollingInterval)
      return parameters.pollingInterval;
    if ((_a = client.chain) == null ? void 0 : _a.experimental_preconfirmationTime)
      return client.chain.experimental_preconfirmationTime;
    return client.pollingInterval;
  })();
  let transaction;
  let replacedTransaction;
  let receipt;
  let retrying = false;
  let _unobserve;
  let _unwatch;
  const { promise, resolve, reject } = withResolvers();
  const timer = timeout ? setTimeout(() => {
    _unwatch == null ? void 0 : _unwatch();
    _unobserve == null ? void 0 : _unobserve();
    reject(new WaitForTransactionReceiptTimeoutError({ hash: hash2 }));
  }, timeout) : void 0;
  _unobserve = observe(observerId, { onReplaced, resolve, reject }, async (emit) => {
    receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: hash2 }).catch(() => void 0);
    if (receipt && confirmations <= 1) {
      clearTimeout(timer);
      emit.resolve(receipt);
      _unobserve == null ? void 0 : _unobserve();
      return;
    }
    _unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
      emitMissed: true,
      emitOnBegin: true,
      poll: true,
      pollingInterval,
      async onBlockNumber(blockNumber_) {
        const done = (fn) => {
          clearTimeout(timer);
          _unwatch == null ? void 0 : _unwatch();
          fn();
          _unobserve == null ? void 0 : _unobserve();
        };
        let blockNumber = blockNumber_;
        if (retrying)
          return;
        try {
          if (receipt) {
            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
              return;
            done(() => emit.resolve(receipt));
            return;
          }
          if (checkReplacement && !transaction) {
            retrying = true;
            await withRetry(async () => {
              transaction = await getAction(client, getTransaction, "getTransaction")({ hash: hash2 });
              if (transaction.blockNumber)
                blockNumber = transaction.blockNumber;
            }, {
              delay: retryDelay,
              retryCount
            });
            retrying = false;
          }
          receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: hash2 });
          if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
            return;
          done(() => emit.resolve(receipt));
        } catch (err) {
          if (err instanceof TransactionNotFoundError || err instanceof TransactionReceiptNotFoundError) {
            if (!transaction) {
              retrying = false;
              return;
            }
            try {
              replacedTransaction = transaction;
              retrying = true;
              const block = await withRetry(() => getAction(client, getBlock, "getBlock")({
                blockNumber,
                includeTransactions: true
              }), {
                delay: retryDelay,
                retryCount,
                shouldRetry: ({ error }) => error instanceof BlockNotFoundError
              });
              retrying = false;
              const replacementTransaction = block.transactions.find(({ from: from2, nonce }) => from2 === replacedTransaction.from && nonce === replacedTransaction.nonce);
              if (!replacementTransaction)
                return;
              receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({
                hash: replacementTransaction.hash
              });
              if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                return;
              let reason = "replaced";
              if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value && replacementTransaction.input === replacedTransaction.input) {
                reason = "repriced";
              } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                reason = "cancelled";
              }
              done(() => {
                var _a;
                (_a = emit.onReplaced) == null ? void 0 : _a.call(emit, {
                  reason,
                  replacedTransaction,
                  transaction: replacementTransaction,
                  transactionReceipt: receipt
                });
                emit.resolve(receipt);
              });
            } catch (err_) {
              done(() => emit.reject(err_));
            }
          } else {
            done(() => emit.reject(err));
          }
        }
      }
    });
  });
  return promise;
}
function watchBlocks(client, { blockTag = client.experimental_blockTag ?? "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  const includeTransactions = includeTransactions_ ?? false;
  let prevBlock;
  const pollBlocks = () => {
    const observerId = stringify$2([
      "watchBlocks",
      client.uid,
      blockTag,
      emitMissed,
      emitOnBegin,
      includeTransactions,
      pollingInterval
    ]);
    return observe(observerId, { onBlock, onError }, (emit) => poll(async () => {
      var _a;
      try {
        const block = await getAction(client, getBlock, "getBlock")({
          blockTag,
          includeTransactions
        });
        if (block.number !== null && (prevBlock == null ? void 0 : prevBlock.number) != null) {
          if (block.number === prevBlock.number)
            return;
          if (block.number - prevBlock.number > 1 && emitMissed) {
            for (let i2 = (prevBlock == null ? void 0 : prevBlock.number) + 1n; i2 < block.number; i2++) {
              const block2 = await getAction(client, getBlock, "getBlock")({
                blockNumber: i2,
                includeTransactions
              });
              emit.onBlock(block2, prevBlock);
              prevBlock = block2;
            }
          }
        }
        if (
          // If no previous block exists, emit.
          (prevBlock == null ? void 0 : prevBlock.number) == null || // If the block tag is "pending" with no block number, emit.
          blockTag === "pending" && (block == null ? void 0 : block.number) == null || // If the next block number is greater than the previous block number, emit.
          // We don't want to emit blocks in the past.
          block.number !== null && block.number > prevBlock.number
        ) {
          emit.onBlock(block, prevBlock);
          prevBlock = block;
        }
      } catch (err) {
        (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlocks = () => {
    let active = true;
    let emitFetched = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        if (emitOnBegin) {
          getAction(client, getBlock, "getBlock")({
            blockTag,
            includeTransactions
          }).then((block) => {
            if (!active)
              return;
            if (!emitFetched)
              return;
            onBlock(block, void 0);
            emitFetched = false;
          }).catch(onError);
        }
        const transport = (() => {
          if (client.transport.type === "fallback") {
            const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
            if (!transport2)
              return client.transport;
            return transport2.value;
          }
          return client.transport;
        })();
        const { unsubscribe: unsubscribe_ } = await transport.subscribe({
          params: ["newHeads"],
          async onData(data) {
            var _a;
            if (!active)
              return;
            const block = await getAction(client, getBlock, "getBlock")({
              blockNumber: (_a = data.result) == null ? void 0 : _a.number,
              includeTransactions
            }).catch(() => {
            });
            if (!active)
              return;
            onBlock(block, prevBlock);
            emitFetched = false;
            prevBlock = block;
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollBlocks() : subscribeBlocks();
}
function watchContractEvent(client, parameters) {
  const { abi: abi2, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (typeof fromBlock === "bigint")
      return true;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  const pollContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = stringify$2([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict,
      fromBlock
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      if (fromBlock !== void 0)
        previousBlockNumber = fromBlock - 1n;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        var _a;
        if (!initialized) {
          try {
            filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
              abi: abi2,
              address,
              args,
              eventName,
              strict,
              fromBlock
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber < blockNumber) {
              logs = await getAction(client, getContractEvents, "getContractEvents")({
                abi: abi2,
                address,
                args,
                eventName,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber,
                strict
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = stringify$2([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict
    ]);
    let active = true;
    let unsubscribe = () => active = false;
    return observe(observerId, { onLogs, onError }, (emit) => {
      (async () => {
        try {
          const transport = (() => {
            if (client.transport.type === "fallback") {
              const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
              if (!transport2)
                return client.transport;
              return transport2.value;
            }
            return client.transport;
          })();
          const topics = eventName ? encodeEventTopics({
            abi: abi2,
            eventName,
            args
          }) : [];
          const { unsubscribe: unsubscribe_ } = await transport.subscribe({
            params: ["logs", { address, topics }],
            onData(data) {
              var _a;
              if (!active)
                return;
              const log = data.result;
              try {
                const { eventName: eventName2, args: args2 } = decodeEventLog({
                  abi: abi2,
                  data: log.data,
                  topics: log.topics,
                  strict: strict_
                });
                const formatted = formatLog(log, {
                  args: args2,
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              } catch (err) {
                let eventName2;
                let isUnnamed;
                if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                  if (strict_)
                    return;
                  eventName2 = err.abiItem.name;
                  isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x2) => !("name" in x2 && x2.name));
                }
                const formatted = formatLog(log, {
                  args: isUnnamed ? [] : {},
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              }
            },
            onError(error) {
              var _a;
              (_a = emit.onError) == null ? void 0 : _a.call(emit, error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError == null ? void 0 : onError(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollContractEvent() : subscribeContractEvent();
}
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (typeof fromBlock === "bigint")
      return true;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  const strict = strict_ ?? false;
  const pollEvent = () => {
    const observerId = stringify$2([
      "watchEvent",
      address,
      args,
      batch,
      client.uid,
      event,
      pollingInterval,
      fromBlock
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      if (fromBlock !== void 0)
        previousBlockNumber = fromBlock - 1n;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        var _a;
        if (!initialized) {
          try {
            filter = await getAction(client, createEventFilter, "createEventFilter")({
              address,
              args,
              event,
              events,
              strict,
              fromBlock
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getLogs, "getLogs")({
                address,
                args,
                event,
                events,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const transport = (() => {
          if (client.transport.type === "fallback") {
            const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
            if (!transport2)
              return client.transport;
            return transport2.value;
          }
          return client.transport;
        })();
        const events_ = events ?? (event ? [event] : void 0);
        let topics = [];
        if (events_) {
          const encoded = events_.flatMap((event2) => encodeEventTopics({
            abi: [event2],
            eventName: event2.name,
            args
          }));
          topics = [encoded];
          if (event)
            topics = topics[0];
        }
        const { unsubscribe: unsubscribe_ } = await transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            var _a;
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName, args: args2 } = decodeEventLog({
                abi: events_ ?? [],
                data: log.data,
                topics: log.topics,
                strict
              });
              const formatted = formatLog(log, { args: args2, eventName });
              onLogs([formatted]);
            } catch (err) {
              let eventName;
              let isUnnamed;
              if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName = err.abiItem.name;
                isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x2) => !("name" in x2 && x2.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollEvent() : subscribeEvent();
}
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket" && client.transport.type !== "ipc";
  const pollPendingTransactions = () => {
    const observerId = stringify$2([
      "watchPendingTransactions",
      client.uid,
      batch,
      pollingInterval
    ]);
    return observe(observerId, { onTransactions, onError }, (emit) => {
      let filter;
      const unwatch = poll(async () => {
        var _a;
        try {
          if (!filter) {
            try {
              filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
              return;
            } catch (err) {
              unwatch();
              throw err;
            }
          }
          const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          if (hashes.length === 0)
            return;
          if (batch)
            emit.onTransactions(hashes);
          else
            for (const hash2 of hashes)
              emit.onTransactions([hash2]);
        } catch (err) {
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribePendingTransactions = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(data) {
            if (!active)
              return;
            const transaction = data.result;
            onTransactions([transaction]);
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}
function parseSiweMessage(message) {
  var _a, _b, _c;
  const { scheme, statement, ...prefix } = ((_a = message.match(prefixRegex)) == null ? void 0 : _a.groups) ?? {};
  const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = ((_b = message.match(suffixRegex)) == null ? void 0 : _b.groups) ?? {};
  const resources = (_c = message.split("Resources:")[1]) == null ? void 0 : _c.split("\n- ").slice(1);
  return {
    ...prefix,
    ...suffix,
    ...chainId ? { chainId: Number(chainId) } : {},
    ...expirationTime ? { expirationTime: new Date(expirationTime) } : {},
    ...issuedAt ? { issuedAt: new Date(issuedAt) } : {},
    ...notBefore ? { notBefore: new Date(notBefore) } : {},
    ...requestId ? { requestId } : {},
    ...resources ? { resources } : {},
    ...scheme ? { scheme } : {},
    ...statement ? { statement } : {}
  };
}
const prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
const suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function validateSiweMessage(parameters) {
  const { address, domain, message, nonce, scheme, time = /* @__PURE__ */ new Date() } = parameters;
  if (domain && message.domain !== domain)
    return false;
  if (nonce && message.nonce !== nonce)
    return false;
  if (scheme && message.scheme !== scheme)
    return false;
  if (message.expirationTime && time >= message.expirationTime)
    return false;
  if (message.notBefore && time < message.notBefore)
    return false;
  try {
    if (!message.address)
      return false;
    if (!isAddress(message.address, { strict: false }))
      return false;
    if (address && !isAddressEqual(message.address, address))
      return false;
  } catch {
    return false;
  }
  return true;
}
async function verifySiweMessage(client, parameters) {
  const { address, domain, message, nonce, scheme, signature, time = /* @__PURE__ */ new Date(), ...callRequest } = parameters;
  const parsed = parseSiweMessage(message);
  if (!parsed.address)
    return false;
  const isValid = validateSiweMessage({
    address,
    domain,
    message: parsed,
    nonce,
    scheme,
    time
  });
  if (!isValid)
    return false;
  const hash2 = hashMessage(message);
  return verifyHash(client, {
    address: parsed.address,
    hash: hash2,
    signature,
    ...callRequest
  });
}
function publicActions(client) {
  return {
    call: (args) => call(client, args),
    createAccessList: (args) => createAccessList(client, args),
    createBlockFilter: () => createBlockFilter(client),
    createContractEventFilter: (args) => createContractEventFilter(client, args),
    createEventFilter: (args) => createEventFilter(client, args),
    createPendingTransactionFilter: () => createPendingTransactionFilter(client),
    estimateContractGas: (args) => estimateContractGas(client, args),
    estimateGas: (args) => estimateGas(client, args),
    getBalance: (args) => getBalance(client, args),
    getBlobBaseFee: () => getBlobBaseFee(client),
    getBlock: (args) => getBlock(client, args),
    getBlockNumber: (args) => getBlockNumber(client, args),
    getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
    getBytecode: (args) => getCode(client, args),
    getChainId: () => getChainId(client),
    getCode: (args) => getCode(client, args),
    getContractEvents: (args) => getContractEvents(client, args),
    getEip712Domain: (args) => getEip712Domain(client, args),
    getEnsAddress: (args) => getEnsAddress(client, args),
    getEnsAvatar: (args) => getEnsAvatar(client, args),
    getEnsName: (args) => getEnsName(client, args),
    getEnsResolver: (args) => getEnsResolver(client, args),
    getEnsText: (args) => getEnsText(client, args),
    getFeeHistory: (args) => getFeeHistory(client, args),
    estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
    getFilterChanges: (args) => getFilterChanges(client, args),
    getFilterLogs: (args) => getFilterLogs(client, args),
    getGasPrice: () => getGasPrice(client),
    getLogs: (args) => getLogs(client, args),
    getProof: (args) => getProof(client, args),
    estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
    getStorageAt: (args) => getStorageAt(client, args),
    getTransaction: (args) => getTransaction(client, args),
    getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
    getTransactionCount: (args) => getTransactionCount(client, args),
    getTransactionReceipt: (args) => getTransactionReceipt(client, args),
    multicall: (args) => multicall(client, args),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    readContract: (args) => readContract(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    simulate: (args) => simulateBlocks(client, args),
    simulateBlocks: (args) => simulateBlocks(client, args),
    simulateCalls: (args) => simulateCalls(client, args),
    simulateContract: (args) => simulateContract(client, args),
    verifyHash: (args) => verifyHash(client, args),
    verifyMessage: (args) => verifyMessage(client, args),
    verifySiweMessage: (args) => verifySiweMessage(client, args),
    verifyTypedData: (args) => verifyTypedData(client, args),
    uninstallFilter: (args) => uninstallFilter(client, args),
    waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
    watchBlocks: (args) => watchBlocks(client, args),
    watchBlockNumber: (args) => watchBlockNumber(client, args),
    watchContractEvent: (args) => watchContractEvent(client, args),
    watchEvent: (args) => watchEvent(client, args),
    watchPendingTransactions: (args) => watchPendingTransactions(client, args)
  };
}
function createPublicClient(parameters) {
  const { key = "public", name = "Public Client" } = parameters;
  const client = createClient({
    ...parameters,
    key,
    name,
    type: "publicClient"
  });
  return client.extend(publicActions);
}
function parseSignature(signatureHex) {
  const { r: r2, s: s2 } = secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
  const yParityOrV = Number(`0x${signatureHex.slice(130)}`);
  const [v2, yParity] = (() => {
    if (yParityOrV === 0 || yParityOrV === 1)
      return [void 0, yParityOrV];
    if (yParityOrV === 27)
      return [BigInt(yParityOrV), 0];
    if (yParityOrV === 28)
      return [BigInt(yParityOrV), 1];
    throw new Error("Invalid yParityOrV value");
  })();
  if (typeof v2 !== "undefined")
    return {
      r: numberToHex(r2, { size: 32 }),
      s: numberToHex(s2, { size: 32 }),
      v: v2,
      yParity
    };
  return {
    r: numberToHex(r2, { size: 32 }),
    s: numberToHex(s2, { size: 32 }),
    yParity
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$4 = /* @__PURE__ */ BigInt(0);
const _1n$4 = /* @__PURE__ */ BigInt(1);
function _abool2(value, title = "") {
  if (typeof value !== "boolean") {
    const prefix = title && `"${title}"`;
    throw new Error(prefix + "expected boolean, got type=" + typeof value);
  }
  return value;
}
function _abytes2(value, length, title = "") {
  const bytes2 = isBytes$2(value);
  const len = value == null ? void 0 : value.length;
  const needsLen = length !== void 0;
  if (!bytes2 || needsLen && len !== length) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : "";
    const got = bytes2 ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
  }
  return value;
}
function numberToHexUnpadded(num) {
  const hex = num.toString(16);
  return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return hex === "" ? _0n$4 : BigInt("0x" + hex);
}
function bytesToNumberBE(bytes2) {
  return hexToNumber(bytesToHex$2(bytes2));
}
function bytesToNumberLE(bytes2) {
  abytes(bytes2);
  return hexToNumber(bytesToHex$2(Uint8Array.from(bytes2).reverse()));
}
function numberToBytesBE(n2, len) {
  return hexToBytes$1(n2.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n2, len) {
  return numberToBytesBE(n2, len).reverse();
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes$1(hex);
    } catch (e2) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e2);
    }
  } else if (isBytes$2(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(title + " must be hex string or Uint8Array");
  }
  res.length;
  return res;
}
const isPosBig = (n2) => typeof n2 === "bigint" && _0n$4 <= n2;
function inRange(n2, min, max) {
  return isPosBig(n2) && isPosBig(min) && isPosBig(max) && min <= n2 && n2 < max;
}
function aInRange(title, n2, min, max) {
  if (!inRange(n2, min, max))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n2);
}
function bitLen(n2) {
  let len;
  for (len = 0; n2 > _0n$4; n2 >>= _1n$4, len += 1)
    ;
  return len;
}
const bitMask = (n2) => (_1n$4 << BigInt(n2)) - _1n$4;
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  const u8n = (len) => new Uint8Array(len);
  const u8of = (byte) => Uint8Array.of(byte);
  let v2 = u8n(hashLen);
  let k2 = u8n(hashLen);
  let i2 = 0;
  const reset = () => {
    v2.fill(1);
    k2.fill(0);
    i2 = 0;
  };
  const h2 = (...b2) => hmacFn(k2, v2, ...b2);
  const reseed = (seed = u8n(0)) => {
    k2 = h2(u8of(0), seed);
    v2 = h2();
    if (seed.length === 0)
      return;
    k2 = h2(u8of(1), seed);
    v2 = h2();
  };
  const gen2 = () => {
    if (i2++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v2 = h2();
      const sl = v2.slice();
      out.push(sl);
      len += v2.length;
    }
    return concatBytes(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen2())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
function _validateObject(object, fields, optFields = {}) {
  if (!object || typeof object !== "object")
    throw new Error("expected valid options object");
  function checkField(fieldName, expectedType, isOpt) {
    const val = object[fieldName];
    if (isOpt && val === void 0)
      return;
    const current = typeof val;
    if (current !== expectedType || val === null)
      throw new Error(`param "${fieldName}" is invalid: expected ${expectedType}, got ${current}`);
  }
  Object.entries(fields).forEach(([k2, v2]) => checkField(k2, v2, false));
  Object.entries(optFields).forEach(([k2, v2]) => checkField(k2, v2, true));
}
function memoized(fn) {
  const map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    const val = map.get(arg);
    if (val !== void 0)
      return val;
    const computed = fn(arg, ...args);
    map.set(arg, computed);
    return computed;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$3 = BigInt(0), _1n$3 = BigInt(1), _2n$2 = /* @__PURE__ */ BigInt(2), _3n$1 = /* @__PURE__ */ BigInt(3);
const _4n$1 = /* @__PURE__ */ BigInt(4), _5n = /* @__PURE__ */ BigInt(5), _7n$1 = /* @__PURE__ */ BigInt(7);
const _8n = /* @__PURE__ */ BigInt(8), _9n = /* @__PURE__ */ BigInt(9), _16n = /* @__PURE__ */ BigInt(16);
function mod(a2, b2) {
  const result = a2 % b2;
  return result >= _0n$3 ? result : b2 + result;
}
function invert(number2, modulo) {
  if (number2 === _0n$3)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n$3)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a2 = mod(number2, modulo);
  let b2 = modulo;
  let x2 = _0n$3, u2 = _1n$3;
  while (a2 !== _0n$3) {
    const q2 = b2 / a2;
    const r2 = b2 % a2;
    const m2 = x2 - u2 * q2;
    b2 = a2, a2 = r2, x2 = u2, u2 = m2;
  }
  const gcd = b2;
  if (gcd !== _1n$3)
    throw new Error("invert: does not exist");
  return mod(x2, modulo);
}
function assertIsSquare(Fp, root, n2) {
  if (!Fp.eql(Fp.sqr(root), n2))
    throw new Error("Cannot find square root");
}
function sqrt3mod4(Fp, n2) {
  const p1div4 = (Fp.ORDER + _1n$3) / _4n$1;
  const root = Fp.pow(n2, p1div4);
  assertIsSquare(Fp, root, n2);
  return root;
}
function sqrt5mod8(Fp, n2) {
  const p5div8 = (Fp.ORDER - _5n) / _8n;
  const n22 = Fp.mul(n2, _2n$2);
  const v2 = Fp.pow(n22, p5div8);
  const nv = Fp.mul(n2, v2);
  const i2 = Fp.mul(Fp.mul(nv, _2n$2), v2);
  const root = Fp.mul(nv, Fp.sub(i2, Fp.ONE));
  assertIsSquare(Fp, root, n2);
  return root;
}
function sqrt9mod16(P2) {
  const Fp_ = Field(P2);
  const tn = tonelliShanks(P2);
  const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
  const c2 = tn(Fp_, c1);
  const c3 = tn(Fp_, Fp_.neg(c1));
  const c4 = (P2 + _7n$1) / _16n;
  return (Fp, n2) => {
    let tv1 = Fp.pow(n2, c4);
    let tv2 = Fp.mul(tv1, c1);
    const tv3 = Fp.mul(tv1, c2);
    const tv4 = Fp.mul(tv1, c3);
    const e1 = Fp.eql(Fp.sqr(tv2), n2);
    const e2 = Fp.eql(Fp.sqr(tv3), n2);
    tv1 = Fp.cmov(tv1, tv2, e1);
    tv2 = Fp.cmov(tv4, tv3, e2);
    const e3 = Fp.eql(Fp.sqr(tv2), n2);
    const root = Fp.cmov(tv1, tv2, e3);
    assertIsSquare(Fp, root, n2);
    return root;
  };
}
function tonelliShanks(P2) {
  if (P2 < _3n$1)
    throw new Error("sqrt is not defined for small field");
  let Q = P2 - _1n$3;
  let S2 = 0;
  while (Q % _2n$2 === _0n$3) {
    Q /= _2n$2;
    S2++;
  }
  let Z = _2n$2;
  const _Fp = Field(P2);
  while (FpLegendre(_Fp, Z) === 1) {
    if (Z++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S2 === 1)
    return sqrt3mod4;
  let cc = _Fp.pow(Z, Q);
  const Q1div2 = (Q + _1n$3) / _2n$2;
  return function tonelliSlow(Fp, n2) {
    if (Fp.is0(n2))
      return n2;
    if (FpLegendre(Fp, n2) !== 1)
      throw new Error("Cannot find square root");
    let M2 = S2;
    let c2 = Fp.mul(Fp.ONE, cc);
    let t2 = Fp.pow(n2, Q);
    let R = Fp.pow(n2, Q1div2);
    while (!Fp.eql(t2, Fp.ONE)) {
      if (Fp.is0(t2))
        return Fp.ZERO;
      let i2 = 1;
      let t_tmp = Fp.sqr(t2);
      while (!Fp.eql(t_tmp, Fp.ONE)) {
        i2++;
        t_tmp = Fp.sqr(t_tmp);
        if (i2 === M2)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n$3 << BigInt(M2 - i2 - 1);
      const b2 = Fp.pow(c2, exponent);
      M2 = i2;
      c2 = Fp.sqr(b2);
      t2 = Fp.mul(t2, c2);
      R = Fp.mul(R, b2);
    }
    return R;
  };
}
function FpSqrt(P2) {
  if (P2 % _4n$1 === _3n$1)
    return sqrt3mod4;
  if (P2 % _8n === _5n)
    return sqrt5mod8;
  if (P2 % _16n === _9n)
    return sqrt9mod16(P2);
  return tonelliShanks(P2);
}
const FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "number",
    BITS: "number"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  _validateObject(field, opts);
  return field;
}
function FpPow(Fp, num, power) {
  if (power < _0n$3)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n$3)
    return Fp.ONE;
  if (power === _1n$3)
    return num;
  let p2 = Fp.ONE;
  let d2 = num;
  while (power > _0n$3) {
    if (power & _1n$3)
      p2 = Fp.mul(p2, d2);
    d2 = Fp.sqr(d2);
    power >>= _1n$3;
  }
  return p2;
}
function FpInvertBatch(Fp, nums, passZero = false) {
  const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num, i2) => {
    if (Fp.is0(num))
      return acc;
    inverted[i2] = acc;
    return Fp.mul(acc, num);
  }, Fp.ONE);
  const invertedAcc = Fp.inv(multipliedAcc);
  nums.reduceRight((acc, num, i2) => {
    if (Fp.is0(num))
      return acc;
    inverted[i2] = Fp.mul(acc, inverted[i2]);
    return Fp.mul(acc, num);
  }, invertedAcc);
  return inverted;
}
function FpLegendre(Fp, n2) {
  const p1mod2 = (Fp.ORDER - _1n$3) / _2n$2;
  const powered = Fp.pow(n2, p1mod2);
  const yes = Fp.eql(powered, Fp.ONE);
  const zero = Fp.eql(powered, Fp.ZERO);
  const no = Fp.eql(powered, Fp.neg(Fp.ONE));
  if (!yes && !zero && !no)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function nLength(n2, nBitLength) {
  if (nBitLength !== void 0)
    anumber(nBitLength);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n2.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLenOrOpts, isLE = false, opts = {}) {
  if (ORDER <= _0n$3)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  let _nbitLength = void 0;
  let _sqrt = void 0;
  let modFromBytes = false;
  let allowedLengths = void 0;
  if (typeof bitLenOrOpts === "object" && bitLenOrOpts != null) {
    if (opts.sqrt || isLE)
      throw new Error("cannot specify opts in two arguments");
    const _opts = bitLenOrOpts;
    if (_opts.BITS)
      _nbitLength = _opts.BITS;
    if (_opts.sqrt)
      _sqrt = _opts.sqrt;
    if (typeof _opts.isLE === "boolean")
      isLE = _opts.isLE;
    if (typeof _opts.modFromBytes === "boolean")
      modFromBytes = _opts.modFromBytes;
    allowedLengths = _opts.allowedLengths;
  } else {
    if (typeof bitLenOrOpts === "number")
      _nbitLength = bitLenOrOpts;
    if (opts.sqrt)
      _sqrt = opts.sqrt;
  }
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, _nbitLength);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f2 = Object.freeze({
    ORDER,
    isLE,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n$3,
    ONE: _1n$3,
    allowedLengths,
    create: (num) => mod(num, ORDER),
    isValid: (num) => {
      if (typeof num !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num);
      return _0n$3 <= num && num < ORDER;
    },
    is0: (num) => num === _0n$3,
    // is valid and invertible
    isValidNot0: (num) => !f2.is0(num) && f2.isValid(num),
    isOdd: (num) => (num & _1n$3) === _1n$3,
    neg: (num) => mod(-num, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num) => mod(num * num, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num, power) => FpPow(f2, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: _sqrt || ((n2) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f2, n2);
    }),
    toBytes: (num) => isLE ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes2, skipValidation = true) => {
      if (allowedLengths) {
        if (!allowedLengths.includes(bytes2.length) || bytes2.length > BYTES) {
          throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes2.length);
        }
        const padded = new Uint8Array(BYTES);
        padded.set(bytes2, isLE ? 0 : padded.length - bytes2.length);
        bytes2 = padded;
      }
      if (bytes2.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes2.length);
      let scalar = isLE ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
      if (modFromBytes)
        scalar = mod(scalar, ORDER);
      if (!skipValidation) {
        if (!f2.isValid(scalar))
          throw new Error("invalid field element: outside of range 0..ORDER");
      }
      return scalar;
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (lst) => FpInvertBatch(f2, lst),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a2, b2, c2) => c2 ? b2 : a2
  });
  return Object.freeze(f2);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num = isLE ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num, fieldOrder - _1n$3) + _1n$3;
  return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$2 = BigInt(0);
const _1n$2 = BigInt(1);
function negateCt(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
function normalizeZ(c2, points) {
  const invertedZs = FpInvertBatch(c2.Fp, points.map((p2) => p2.Z));
  return points.map((p2, i2) => c2.fromAffine(p2.toAffine(invertedZs[i2])));
}
function validateW(W, bits) {
  if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts(W, scalarBits) {
  validateW(W, scalarBits);
  const windows = Math.ceil(scalarBits / W) + 1;
  const windowSize = 2 ** (W - 1);
  const maxNumber = 2 ** W;
  const mask = bitMask(W);
  const shiftBy = BigInt(W);
  return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n2, window2, wOpts) {
  const { windowSize, mask, maxNumber, shiftBy } = wOpts;
  let wbits = Number(n2 & mask);
  let nextN = n2 >> shiftBy;
  if (wbits > windowSize) {
    wbits -= maxNumber;
    nextN += _1n$2;
  }
  const offsetStart = window2 * windowSize;
  const offset = offsetStart + Math.abs(wbits) - 1;
  const isZero = wbits === 0;
  const isNeg = wbits < 0;
  const isNegF = window2 % 2 !== 0;
  const offsetF = offsetStart;
  return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
function validateMSMPoints(points, c2) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p2, i2) => {
    if (!(p2 instanceof c2))
      throw new Error("invalid point at index " + i2);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s2, i2) => {
    if (!field.isValid(s2))
      throw new Error("invalid scalar at index " + i2);
  });
}
const pointPrecomputes = /* @__PURE__ */ new WeakMap();
const pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getW(P2) {
  return pointWindowSizes.get(P2) || 1;
}
function assert0(n2) {
  if (n2 !== _0n$2)
    throw new Error("invalid wNAF");
}
class wNAF {
  // Parametrized with a given Point class (not individual point)
  constructor(Point, bits) {
    this.BASE = Point.BASE;
    this.ZERO = Point.ZERO;
    this.Fn = Point.Fn;
    this.bits = bits;
  }
  // non-const time multiplication ladder
  _unsafeLadder(elm, n2, p2 = this.ZERO) {
    let d2 = elm;
    while (n2 > _0n$2) {
      if (n2 & _1n$2)
        p2 = p2.add(d2);
      d2 = d2.double();
      n2 >>= _1n$2;
    }
    return p2;
  }
  /**
   * Creates a wNAF precomputation window. Used for caching.
   * Default window size is set by `utils.precompute()` and is equal to 8.
   * Number of precomputed points depends on the curve size:
   * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
   * - 𝑊 is the window size
   * - 𝑛 is the bitlength of the curve order.
   * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
   * @param point Point instance
   * @param W window size
   * @returns precomputed point tables flattened to a single array
   */
  precomputeWindow(point, W) {
    const { windows, windowSize } = calcWOpts(W, this.bits);
    const points = [];
    let p2 = point;
    let base = p2;
    for (let window2 = 0; window2 < windows; window2++) {
      base = p2;
      points.push(base);
      for (let i2 = 1; i2 < windowSize; i2++) {
        base = base.add(p2);
        points.push(base);
      }
      p2 = base.double();
    }
    return points;
  }
  /**
   * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
   * More compact implementation:
   * https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
   * @returns real and fake (for const-time) points
   */
  wNAF(W, precomputes, n2) {
    if (!this.Fn.isValid(n2))
      throw new Error("invalid scalar");
    let p2 = this.ZERO;
    let f2 = this.BASE;
    const wo = calcWOpts(W, this.bits);
    for (let window2 = 0; window2 < wo.windows; window2++) {
      const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n2, window2, wo);
      n2 = nextN;
      if (isZero) {
        f2 = f2.add(negateCt(isNegF, precomputes[offsetF]));
      } else {
        p2 = p2.add(negateCt(isNeg, precomputes[offset]));
      }
    }
    assert0(n2);
    return { p: p2, f: f2 };
  }
  /**
   * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
   * @param acc accumulator point to add result of multiplication
   * @returns point
   */
  wNAFUnsafe(W, precomputes, n2, acc = this.ZERO) {
    const wo = calcWOpts(W, this.bits);
    for (let window2 = 0; window2 < wo.windows; window2++) {
      if (n2 === _0n$2)
        break;
      const { nextN, offset, isZero, isNeg } = calcOffsets(n2, window2, wo);
      n2 = nextN;
      if (isZero) {
        continue;
      } else {
        const item = precomputes[offset];
        acc = acc.add(isNeg ? item.negate() : item);
      }
    }
    assert0(n2);
    return acc;
  }
  getPrecomputes(W, point, transform) {
    let comp = pointPrecomputes.get(point);
    if (!comp) {
      comp = this.precomputeWindow(point, W);
      if (W !== 1) {
        if (typeof transform === "function")
          comp = transform(comp);
        pointPrecomputes.set(point, comp);
      }
    }
    return comp;
  }
  cached(point, scalar, transform) {
    const W = getW(point);
    return this.wNAF(W, this.getPrecomputes(W, point, transform), scalar);
  }
  unsafe(point, scalar, transform, prev) {
    const W = getW(point);
    if (W === 1)
      return this._unsafeLadder(point, scalar, prev);
    return this.wNAFUnsafe(W, this.getPrecomputes(W, point, transform), scalar, prev);
  }
  // We calculate precomputes for elliptic curve point multiplication
  // using windowed method. This specifies window size and
  // stores precomputed values. Usually only base point would be precomputed.
  createCache(P2, W) {
    validateW(W, this.bits);
    pointWindowSizes.set(P2, W);
    pointPrecomputes.delete(P2);
  }
  hasCache(elm) {
    return getW(elm) !== 1;
  }
}
function mulEndoUnsafe(Point, point, k1, k2) {
  let acc = point;
  let p1 = Point.ZERO;
  let p2 = Point.ZERO;
  while (k1 > _0n$2 || k2 > _0n$2) {
    if (k1 & _1n$2)
      p1 = p1.add(acc);
    if (k2 & _1n$2)
      p2 = p2.add(acc);
    acc = acc.double();
    k1 >>= _1n$2;
    k2 >>= _1n$2;
  }
  return { p1, p2 };
}
function pippenger(c2, fieldN, points, scalars) {
  validateMSMPoints(points, c2);
  validateMSMScalars(scalars, fieldN);
  const plength = points.length;
  const slength = scalars.length;
  if (plength !== slength)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c2.ZERO;
  const wbits = bitLen(BigInt(plength));
  let windowSize = 1;
  if (wbits > 12)
    windowSize = wbits - 3;
  else if (wbits > 4)
    windowSize = wbits - 2;
  else if (wbits > 0)
    windowSize = 2;
  const MASK = bitMask(windowSize);
  const buckets = new Array(Number(MASK) + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i2 = lastBits; i2 >= 0; i2 -= windowSize) {
    buckets.fill(zero);
    for (let j2 = 0; j2 < slength; j2++) {
      const scalar = scalars[j2];
      const wbits2 = Number(scalar >> BigInt(i2) & MASK);
      buckets[wbits2] = buckets[wbits2].add(points[j2]);
    }
    let resI = zero;
    for (let j2 = buckets.length - 1, sumI = zero; j2 > 0; j2--) {
      sumI = sumI.add(buckets[j2]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i2 !== 0)
      for (let j2 = 0; j2 < windowSize; j2++)
        sum = sum.double();
  }
  return sum;
}
function createField(order, field, isLE) {
  if (field) {
    if (field.ORDER !== order)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    validateField(field);
    return field;
  } else {
    return Field(order, { isLE });
  }
}
function _createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
  if (FpFnLE === void 0)
    FpFnLE = type === "edwards";
  if (!CURVE || typeof CURVE !== "object")
    throw new Error(`expected valid ${type} CURVE object`);
  for (const p2 of ["p", "n", "h"]) {
    const val = CURVE[p2];
    if (!(typeof val === "bigint" && val > _0n$2))
      throw new Error(`CURVE.${p2} must be positive bigint`);
  }
  const Fp = createField(CURVE.p, curveOpts.Fp, FpFnLE);
  const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
  const _b = "b";
  const params = ["Gx", "Gy", "a", _b];
  for (const p2 of params) {
    if (!Fp.isValid(CURVE[p2]))
      throw new Error(`CURVE.${p2} must be valid field element of CURVE.Fp`);
  }
  CURVE = Object.freeze(Object.assign({}, CURVE));
  return { CURVE, Fp, Fn };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const divNearest = (num, den) => (num + (num >= 0 ? den : -den) / _2n$1) / den;
function _splitEndoScalar(k2, basis, n2) {
  const [[a1, b1], [a2, b2]] = basis;
  const c1 = divNearest(b2 * k2, n2);
  const c2 = divNearest(-b1 * k2, n2);
  let k1 = k2 - c1 * a1 - c2 * a2;
  let k22 = -c1 * b1 - c2 * b2;
  const k1neg = k1 < _0n$1;
  const k2neg = k22 < _0n$1;
  if (k1neg)
    k1 = -k1;
  if (k2neg)
    k22 = -k22;
  const MAX_NUM = bitMask(Math.ceil(bitLen(n2) / 2)) + _1n$1;
  if (k1 < _0n$1 || k1 >= MAX_NUM || k22 < _0n$1 || k22 >= MAX_NUM) {
    throw new Error("splitScalar (endomorphism): failed, k=" + k2);
  }
  return { k1neg, k1, k2neg, k2: k22 };
}
function validateSigFormat(format) {
  if (!["compact", "recovered", "der"].includes(format))
    throw new Error('Signature format must be "compact", "recovered", or "der"');
  return format;
}
function validateSigOpts(opts, def) {
  const optsn = {};
  for (let optName of Object.keys(def)) {
    optsn[optName] = opts[optName] === void 0 ? def[optName] : opts[optName];
  }
  _abool2(optsn.lowS, "lowS");
  _abool2(optsn.prehash, "prehash");
  if (optsn.format !== void 0)
    validateSigFormat(optsn.format);
  return optsn;
}
class DERErr extends Error {
  constructor(m2 = "") {
    super(m2);
  }
}
const DER = {
  // asn.1 DER encoding utils
  Err: DERErr,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (tag, data) => {
      const { Err: E } = DER;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length & 1)
        throw new E("tlv.encode: unpadded data");
      const dataLen = data.length / 2;
      const len = numberToHexUnpadded(dataLen);
      if (len.length / 2 & 128)
        throw new E("tlv.encode: long form length too big");
      const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
      const t2 = numberToHexUnpadded(tag);
      return t2 + lenLen + len + data;
    },
    // v - value, l - left bytes (unparsed)
    decode(tag, data) {
      const { Err: E } = DER;
      let pos = 0;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length < 2 || data[pos++] !== tag)
        throw new E("tlv.decode: wrong tlv");
      const first = data[pos++];
      const isLong = !!(first & 128);
      let length = 0;
      if (!isLong)
        length = first;
      else {
        const lenLen = first & 127;
        if (!lenLen)
          throw new E("tlv.decode(long): indefinite length not supported");
        if (lenLen > 4)
          throw new E("tlv.decode(long): byte length is too big");
        const lengthBytes = data.subarray(pos, pos + lenLen);
        if (lengthBytes.length !== lenLen)
          throw new E("tlv.decode: length bytes not complete");
        if (lengthBytes[0] === 0)
          throw new E("tlv.decode(long): zero leftmost byte");
        for (const b2 of lengthBytes)
          length = length << 8 | b2;
        pos += lenLen;
        if (length < 128)
          throw new E("tlv.decode(long): not minimal encoding");
      }
      const v2 = data.subarray(pos, pos + length);
      if (v2.length !== length)
        throw new E("tlv.decode: wrong value length");
      return { v: v2, l: data.subarray(pos + length) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(num) {
      const { Err: E } = DER;
      if (num < _0n$1)
        throw new E("integer: negative integers are not allowed");
      let hex = numberToHexUnpadded(num);
      if (Number.parseInt(hex[0], 16) & 8)
        hex = "00" + hex;
      if (hex.length & 1)
        throw new E("unexpected DER parsing assertion: unpadded hex");
      return hex;
    },
    decode(data) {
      const { Err: E } = DER;
      if (data[0] & 128)
        throw new E("invalid signature integer: negative");
      if (data[0] === 0 && !(data[1] & 128))
        throw new E("invalid signature integer: unnecessary leading zero");
      return bytesToNumberBE(data);
    }
  },
  toSig(hex) {
    const { Err: E, _int: int, _tlv: tlv } = DER;
    const data = ensureBytes("signature", hex);
    const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
    if (seqLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
    const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
    if (sLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    return { r: int.decode(rBytes), s: int.decode(sBytes) };
  },
  hexFromSig(sig) {
    const { _tlv: tlv, _int: int } = DER;
    const rs = tlv.encode(2, int.encode(sig.r));
    const ss = tlv.encode(2, int.encode(sig.s));
    const seq = rs + ss;
    return tlv.encode(48, seq);
  }
};
const _0n$1 = BigInt(0), _1n$1 = BigInt(1), _2n$1 = BigInt(2), _3n = BigInt(3), _4n = BigInt(4);
function _normFnElement(Fn, key) {
  const { BYTES: expected } = Fn;
  let num;
  if (typeof key === "bigint") {
    num = key;
  } else {
    let bytes2 = ensureBytes("private key", key);
    try {
      num = Fn.fromBytes(bytes2);
    } catch (error) {
      throw new Error(`invalid private key: expected ui8a of size ${expected}, got ${typeof key}`);
    }
  }
  if (!Fn.isValidNot0(num))
    throw new Error("invalid private key: out of range [1..N-1]");
  return num;
}
function weierstrassN(params, extraOpts = {}) {
  const validated = _createCurveFields("weierstrass", params, extraOpts);
  const { Fp, Fn } = validated;
  let CURVE = validated.CURVE;
  const { h: cofactor, n: CURVE_ORDER } = CURVE;
  _validateObject(extraOpts, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    wrapPrivateKey: "boolean"
  });
  const { endo } = extraOpts;
  if (endo) {
    if (!Fp.is0(CURVE.a) || typeof endo.beta !== "bigint" || !Array.isArray(endo.basises)) {
      throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    }
  }
  const lengths = getWLengths(Fp, Fn);
  function assertCompressionIsSupported() {
    if (!Fp.isOdd)
      throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function pointToBytes(_c, point, isCompressed) {
    const { x: x2, y: y2 } = point.toAffine();
    const bx = Fp.toBytes(x2);
    _abool2(isCompressed, "isCompressed");
    if (isCompressed) {
      assertCompressionIsSupported();
      const hasEvenY = !Fp.isOdd(y2);
      return concatBytes(pprefix(hasEvenY), bx);
    } else {
      return concatBytes(Uint8Array.of(4), bx, Fp.toBytes(y2));
    }
  }
  function pointFromBytes(bytes2) {
    _abytes2(bytes2, void 0, "Point");
    const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
    const length = bytes2.length;
    const head = bytes2[0];
    const tail = bytes2.subarray(1);
    if (length === comp && (head === 2 || head === 3)) {
      const x2 = Fp.fromBytes(tail);
      if (!Fp.isValid(x2))
        throw new Error("bad point: is not on curve, wrong x");
      const y2 = weierstrassEquation(x2);
      let y3;
      try {
        y3 = Fp.sqrt(y2);
      } catch (sqrtError) {
        const err = sqrtError instanceof Error ? ": " + sqrtError.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + err);
      }
      assertCompressionIsSupported();
      const isYOdd = Fp.isOdd(y3);
      const isHeadOdd = (head & 1) === 1;
      if (isHeadOdd !== isYOdd)
        y3 = Fp.neg(y3);
      return { x: x2, y: y3 };
    } else if (length === uncomp && head === 4) {
      const L2 = Fp.BYTES;
      const x2 = Fp.fromBytes(tail.subarray(0, L2));
      const y2 = Fp.fromBytes(tail.subarray(L2, L2 * 2));
      if (!isValidXY(x2, y2))
        throw new Error("bad point: is not on curve");
      return { x: x2, y: y2 };
    } else {
      throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
    }
  }
  const encodePoint = extraOpts.toBytes || pointToBytes;
  const decodePoint = extraOpts.fromBytes || pointFromBytes;
  function weierstrassEquation(x2) {
    const x22 = Fp.sqr(x2);
    const x3 = Fp.mul(x22, x2);
    return Fp.add(Fp.add(x3, Fp.mul(x2, CURVE.a)), CURVE.b);
  }
  function isValidXY(x2, y2) {
    const left = Fp.sqr(y2);
    const right = weierstrassEquation(x2);
    return Fp.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n), _4n);
  const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
  if (Fp.is0(Fp.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function acoord(title, n2, banZero = false) {
    if (!Fp.isValid(n2) || banZero && Fp.is0(n2))
      throw new Error(`bad point coordinate ${title}`);
    return n2;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point))
      throw new Error("ProjectivePoint expected");
  }
  function splitEndoScalarN(k2) {
    if (!endo || !endo.basises)
      throw new Error("no endo");
    return _splitEndoScalar(k2, endo.basises, Fn.ORDER);
  }
  const toAffineMemo = memoized((p2, iz) => {
    const { X, Y, Z } = p2;
    if (Fp.eql(Z, Fp.ONE))
      return { x: X, y: Y };
    const is0 = p2.is0();
    if (iz == null)
      iz = is0 ? Fp.ONE : Fp.inv(Z);
    const x2 = Fp.mul(X, iz);
    const y2 = Fp.mul(Y, iz);
    const zz = Fp.mul(Z, iz);
    if (is0)
      return { x: Fp.ZERO, y: Fp.ZERO };
    if (!Fp.eql(zz, Fp.ONE))
      throw new Error("invZ was invalid");
    return { x: x2, y: y2 };
  });
  const assertValidMemo = memoized((p2) => {
    if (p2.is0()) {
      if (extraOpts.allowInfinityPoint && !Fp.is0(p2.Y))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: x2, y: y2 } = p2.toAffine();
    if (!Fp.isValid(x2) || !Fp.isValid(y2))
      throw new Error("bad point: x or y not field elements");
    if (!isValidXY(x2, y2))
      throw new Error("bad point: equation left != right");
    if (!p2.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  function finishEndo(endoBeta, k1p, k2p, k1neg, k2neg) {
    k2p = new Point(Fp.mul(k2p.X, endoBeta), k2p.Y, k2p.Z);
    k1p = negateCt(k1neg, k1p);
    k2p = negateCt(k2neg, k2p);
    return k1p.add(k2p);
  }
  class Point {
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    constructor(X, Y, Z) {
      this.X = acoord("x", X);
      this.Y = acoord("y", Y, true);
      this.Z = acoord("z", Z);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    static fromAffine(p2) {
      const { x: x2, y: y2 } = p2 || {};
      if (!p2 || !Fp.isValid(x2) || !Fp.isValid(y2))
        throw new Error("invalid affine point");
      if (p2 instanceof Point)
        throw new Error("projective point not allowed");
      if (Fp.is0(x2) && Fp.is0(y2))
        return Point.ZERO;
      return new Point(x2, y2, Fp.ONE);
    }
    static fromBytes(bytes2) {
      const P2 = Point.fromAffine(decodePoint(_abytes2(bytes2, void 0, "point")));
      P2.assertValidity();
      return P2;
    }
    static fromHex(hex) {
      return Point.fromBytes(ensureBytes("pointHex", hex));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     *
     * @param windowSize
     * @param isLazy true will defer table computation until the first multiplication
     * @returns
     */
    precompute(windowSize = 8, isLazy = true) {
      wnaf.createCache(this, windowSize);
      if (!isLazy)
        this.multiply(_3n);
      return this;
    }
    // TODO: return `this`
    /** A point on curve is valid if it conforms to equation. */
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y: y2 } = this.toAffine();
      if (!Fp.isOdd)
        throw new Error("Field doesn't support isOdd");
      return !Fp.isOdd(y2);
    }
    /** Compare one point to another. */
    equals(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
      const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
      return U1 && U2;
    }
    /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
    negate() {
      return new Point(this.X, Fp.neg(this.Y), this.Z);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: a2, b: b2 } = CURVE;
      const b3 = Fp.mul(b2, _3n);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      let t0 = Fp.mul(X1, X1);
      let t1 = Fp.mul(Y1, Y1);
      let t2 = Fp.mul(Z1, Z1);
      let t3 = Fp.mul(X1, Y1);
      t3 = Fp.add(t3, t3);
      Z3 = Fp.mul(X1, Z1);
      Z3 = Fp.add(Z3, Z3);
      X3 = Fp.mul(a2, Z3);
      Y3 = Fp.mul(b3, t2);
      Y3 = Fp.add(X3, Y3);
      X3 = Fp.sub(t1, Y3);
      Y3 = Fp.add(t1, Y3);
      Y3 = Fp.mul(X3, Y3);
      X3 = Fp.mul(t3, X3);
      Z3 = Fp.mul(b3, Z3);
      t2 = Fp.mul(a2, t2);
      t3 = Fp.sub(t0, t2);
      t3 = Fp.mul(a2, t3);
      t3 = Fp.add(t3, Z3);
      Z3 = Fp.add(t0, t0);
      t0 = Fp.add(Z3, t0);
      t0 = Fp.add(t0, t2);
      t0 = Fp.mul(t0, t3);
      Y3 = Fp.add(Y3, t0);
      t2 = Fp.mul(Y1, Z1);
      t2 = Fp.add(t2, t2);
      t0 = Fp.mul(t2, t3);
      X3 = Fp.sub(X3, t0);
      Z3 = Fp.mul(t2, t1);
      Z3 = Fp.add(Z3, Z3);
      Z3 = Fp.add(Z3, Z3);
      return new Point(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      const a2 = CURVE.a;
      const b3 = Fp.mul(CURVE.b, _3n);
      let t0 = Fp.mul(X1, X2);
      let t1 = Fp.mul(Y1, Y2);
      let t2 = Fp.mul(Z1, Z2);
      let t3 = Fp.add(X1, Y1);
      let t4 = Fp.add(X2, Y2);
      t3 = Fp.mul(t3, t4);
      t4 = Fp.add(t0, t1);
      t3 = Fp.sub(t3, t4);
      t4 = Fp.add(X1, Z1);
      let t5 = Fp.add(X2, Z2);
      t4 = Fp.mul(t4, t5);
      t5 = Fp.add(t0, t2);
      t4 = Fp.sub(t4, t5);
      t5 = Fp.add(Y1, Z1);
      X3 = Fp.add(Y2, Z2);
      t5 = Fp.mul(t5, X3);
      X3 = Fp.add(t1, t2);
      t5 = Fp.sub(t5, X3);
      Z3 = Fp.mul(a2, t4);
      X3 = Fp.mul(b3, t2);
      Z3 = Fp.add(X3, Z3);
      X3 = Fp.sub(t1, Z3);
      Z3 = Fp.add(t1, Z3);
      Y3 = Fp.mul(X3, Z3);
      t1 = Fp.add(t0, t0);
      t1 = Fp.add(t1, t0);
      t2 = Fp.mul(a2, t2);
      t4 = Fp.mul(b3, t4);
      t1 = Fp.add(t1, t2);
      t2 = Fp.sub(t0, t2);
      t2 = Fp.mul(a2, t2);
      t4 = Fp.add(t4, t2);
      t0 = Fp.mul(t1, t4);
      Y3 = Fp.add(Y3, t0);
      t0 = Fp.mul(t5, t4);
      X3 = Fp.mul(t3, X3);
      X3 = Fp.sub(X3, t0);
      t0 = Fp.mul(t3, t1);
      Z3 = Fp.mul(t5, Z3);
      Z3 = Fp.add(Z3, t0);
      return new Point(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo: endo2 } = extraOpts;
      if (!Fn.isValidNot0(scalar))
        throw new Error("invalid scalar: out of range");
      let point, fake;
      const mul = (n2) => wnaf.cached(this, n2, (p2) => normalizeZ(Point, p2));
      if (endo2) {
        const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(scalar);
        const { p: k1p, f: k1f } = mul(k1);
        const { p: k2p, f: k2f } = mul(k2);
        fake = k1f.add(k2f);
        point = finishEndo(endo2.beta, k1p, k2p, k1neg, k2neg);
      } else {
        const { p: p2, f: f2 } = mul(scalar);
        point = p2;
        fake = f2;
      }
      return normalizeZ(Point, [point, fake])[0];
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed secret key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc) {
      const { endo: endo2 } = extraOpts;
      const p2 = this;
      if (!Fn.isValid(sc))
        throw new Error("invalid scalar: out of range");
      if (sc === _0n$1 || p2.is0())
        return Point.ZERO;
      if (sc === _1n$1)
        return p2;
      if (wnaf.hasCache(this))
        return this.multiply(sc);
      if (endo2) {
        const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(sc);
        const { p1, p2: p22 } = mulEndoUnsafe(Point, p2, k1, k2);
        return finishEndo(endo2.beta, p1, p22, k1neg, k2neg);
      } else {
        return wnaf.unsafe(p2, sc);
      }
    }
    multiplyAndAddUnsafe(Q, a2, b2) {
      const sum = this.multiplyUnsafe(a2).add(Q.multiplyUnsafe(b2));
      return sum.is0() ? void 0 : sum;
    }
    /**
     * Converts Projective point to affine (x, y) coordinates.
     * @param invertedZ Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
     */
    toAffine(invertedZ) {
      return toAffineMemo(this, invertedZ);
    }
    /**
     * Checks whether Point is free of torsion elements (is in prime subgroup).
     * Always torsion-free for cofactor=1 curves.
     */
    isTorsionFree() {
      const { isTorsionFree } = extraOpts;
      if (cofactor === _1n$1)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point, this);
      return wnaf.unsafe(this, CURVE_ORDER).is0();
    }
    clearCofactor() {
      const { clearCofactor } = extraOpts;
      if (cofactor === _1n$1)
        return this;
      if (clearCofactor)
        return clearCofactor(Point, this);
      return this.multiplyUnsafe(cofactor);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(cofactor).is0();
    }
    toBytes(isCompressed = true) {
      _abool2(isCompressed, "isCompressed");
      this.assertValidity();
      return encodePoint(Point, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex$2(this.toBytes(isCompressed));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    // TODO: remove
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(isCompressed = true) {
      return this.toBytes(isCompressed);
    }
    _setWindowSize(windowSize) {
      this.precompute(windowSize);
    }
    static normalizeZ(points) {
      return normalizeZ(Point, points);
    }
    static msm(points, scalars) {
      return pippenger(Point, Fn, points, scalars);
    }
    static fromPrivateKey(privateKey) {
      return Point.BASE.multiply(_normFnElement(Fn, privateKey));
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
  Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
  Point.Fp = Fp;
  Point.Fn = Fn;
  const bits = Fn.BITS;
  const wnaf = new wNAF(Point, extraOpts.endo ? Math.ceil(bits / 2) : bits);
  Point.BASE.precompute(8);
  return Point;
}
function pprefix(hasEvenY) {
  return Uint8Array.of(hasEvenY ? 2 : 3);
}
function getWLengths(Fp, Fn) {
  return {
    secretKey: Fn.BYTES,
    publicKey: 1 + Fp.BYTES,
    publicKeyUncompressed: 1 + 2 * Fp.BYTES,
    publicKeyHasPrefix: true,
    signature: 2 * Fn.BYTES
  };
}
function ecdh(Point, ecdhOpts = {}) {
  const { Fn } = Point;
  const randomBytes_ = ecdhOpts.randomBytes || randomBytes;
  const lengths = Object.assign(getWLengths(Point.Fp, Fn), { seed: getMinHashLength(Fn.ORDER) });
  function isValidSecretKey(secretKey) {
    try {
      return !!_normFnElement(Fn, secretKey);
    } catch (error) {
      return false;
    }
  }
  function isValidPublicKey(publicKey, isCompressed) {
    const { publicKey: comp, publicKeyUncompressed } = lengths;
    try {
      const l2 = publicKey.length;
      if (isCompressed === true && l2 !== comp)
        return false;
      if (isCompressed === false && l2 !== publicKeyUncompressed)
        return false;
      return !!Point.fromBytes(publicKey);
    } catch (error) {
      return false;
    }
  }
  function randomSecretKey(seed = randomBytes_(lengths.seed)) {
    return mapHashToField(_abytes2(seed, lengths.seed, "seed"), Fn.ORDER);
  }
  function getPublicKey(secretKey, isCompressed = true) {
    return Point.BASE.multiply(_normFnElement(Fn, secretKey)).toBytes(isCompressed);
  }
  function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: getPublicKey(secretKey) };
  }
  function isProbPub(item) {
    if (typeof item === "bigint")
      return false;
    if (item instanceof Point)
      return true;
    const { secretKey, publicKey, publicKeyUncompressed } = lengths;
    if (Fn.allowedLengths || secretKey === publicKey)
      return void 0;
    const l2 = ensureBytes("key", item).length;
    return l2 === publicKey || l2 === publicKeyUncompressed;
  }
  function getSharedSecret(secretKeyA, publicKeyB, isCompressed = true) {
    if (isProbPub(secretKeyA) === true)
      throw new Error("first arg must be private key");
    if (isProbPub(publicKeyB) === false)
      throw new Error("second arg must be public key");
    const s2 = _normFnElement(Fn, secretKeyA);
    const b2 = Point.fromHex(publicKeyB);
    return b2.multiply(s2).toBytes(isCompressed);
  }
  const utils2 = {
    isValidSecretKey,
    isValidPublicKey,
    randomSecretKey,
    // TODO: remove
    isValidPrivateKey: isValidSecretKey,
    randomPrivateKey: randomSecretKey,
    normPrivateKeyToScalar: (key) => _normFnElement(Fn, key),
    precompute(windowSize = 8, point = Point.BASE) {
      return point.precompute(windowSize, false);
    }
  };
  return Object.freeze({ getPublicKey, getSharedSecret, keygen, Point, utils: utils2, lengths });
}
function ecdsa(Point, hash2, ecdsaOpts = {}) {
  ahash(hash2);
  _validateObject(ecdsaOpts, {}, {
    hmac: "function",
    lowS: "boolean",
    randomBytes: "function",
    bits2int: "function",
    bits2int_modN: "function"
  });
  const randomBytes$1 = ecdsaOpts.randomBytes || randomBytes;
  const hmac$1 = ecdsaOpts.hmac || ((key, ...msgs) => hmac(hash2, key, concatBytes(...msgs)));
  const { Fp, Fn } = Point;
  const { ORDER: CURVE_ORDER, BITS: fnBits } = Fn;
  const { keygen, getPublicKey, getSharedSecret, utils: utils2, lengths } = ecdh(Point, ecdsaOpts);
  const defaultSigOpts = {
    prehash: false,
    lowS: typeof ecdsaOpts.lowS === "boolean" ? ecdsaOpts.lowS : false,
    format: void 0,
    //'compact' as ECDSASigFormat,
    extraEntropy: false
  };
  const defaultSigOpts_format = "compact";
  function isBiggerThanHalfOrder(number2) {
    const HALF = CURVE_ORDER >> _1n$1;
    return number2 > HALF;
  }
  function validateRS(title, num) {
    if (!Fn.isValidNot0(num))
      throw new Error(`invalid signature ${title}: out of range 1..Point.Fn.ORDER`);
    return num;
  }
  function validateSigLength(bytes2, format) {
    validateSigFormat(format);
    const size2 = lengths.signature;
    const sizer = format === "compact" ? size2 : format === "recovered" ? size2 + 1 : void 0;
    return _abytes2(bytes2, sizer, `${format} signature`);
  }
  class Signature {
    constructor(r2, s2, recovery) {
      this.r = validateRS("r", r2);
      this.s = validateRS("s", s2);
      if (recovery != null)
        this.recovery = recovery;
      Object.freeze(this);
    }
    static fromBytes(bytes2, format = defaultSigOpts_format) {
      validateSigLength(bytes2, format);
      let recid;
      if (format === "der") {
        const { r: r3, s: s3 } = DER.toSig(_abytes2(bytes2));
        return new Signature(r3, s3);
      }
      if (format === "recovered") {
        recid = bytes2[0];
        format = "compact";
        bytes2 = bytes2.subarray(1);
      }
      const L2 = Fn.BYTES;
      const r2 = bytes2.subarray(0, L2);
      const s2 = bytes2.subarray(L2, L2 * 2);
      return new Signature(Fn.fromBytes(r2), Fn.fromBytes(s2), recid);
    }
    static fromHex(hex, format) {
      return this.fromBytes(hexToBytes$1(hex), format);
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(messageHash) {
      const FIELD_ORDER = Fp.ORDER;
      const { r: r2, s: s2, recovery: rec } = this;
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const hasCofactor = CURVE_ORDER * _2n$1 < FIELD_ORDER;
      if (hasCofactor && rec > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      const radj = rec === 2 || rec === 3 ? r2 + CURVE_ORDER : r2;
      if (!Fp.isValid(radj))
        throw new Error("recovery id 2 or 3 invalid");
      const x2 = Fp.toBytes(radj);
      const R = Point.fromBytes(concatBytes(pprefix((rec & 1) === 0), x2));
      const ir = Fn.inv(radj);
      const h2 = bits2int_modN(ensureBytes("msgHash", messageHash));
      const u1 = Fn.create(-h2 * ir);
      const u2 = Fn.create(s2 * ir);
      const Q = Point.BASE.multiplyUnsafe(u1).add(R.multiplyUnsafe(u2));
      if (Q.is0())
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    toBytes(format = defaultSigOpts_format) {
      validateSigFormat(format);
      if (format === "der")
        return hexToBytes$1(DER.hexFromSig(this));
      const r2 = Fn.toBytes(this.r);
      const s2 = Fn.toBytes(this.s);
      if (format === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return concatBytes(Uint8Array.of(this.recovery), r2, s2);
      }
      return concatBytes(r2, s2);
    }
    toHex(format) {
      return bytesToHex$2(this.toBytes(format));
    }
    // TODO: remove
    assertValidity() {
    }
    static fromCompact(hex) {
      return Signature.fromBytes(ensureBytes("sig", hex), "compact");
    }
    static fromDER(hex) {
      return Signature.fromBytes(ensureBytes("sig", hex), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, Fn.neg(this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return bytesToHex$2(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return bytesToHex$2(this.toBytes("compact"));
    }
  }
  const bits2int = ecdsaOpts.bits2int || function bits2int_def(bytes2) {
    if (bytes2.length > 8192)
      throw new Error("input is too large");
    const num = bytesToNumberBE(bytes2);
    const delta = bytes2.length * 8 - fnBits;
    return delta > 0 ? num >> BigInt(delta) : num;
  };
  const bits2int_modN = ecdsaOpts.bits2int_modN || function bits2int_modN_def(bytes2) {
    return Fn.create(bits2int(bytes2));
  };
  const ORDER_MASK = bitMask(fnBits);
  function int2octets(num) {
    aInRange("num < 2^" + fnBits, num, _0n$1, ORDER_MASK);
    return Fn.toBytes(num);
  }
  function validateMsgAndHash(message, prehash) {
    _abytes2(message, void 0, "message");
    return prehash ? _abytes2(hash2(message), void 0, "prehashed message") : message;
  }
  function prepSig(message, privateKey, opts) {
    if (["recovered", "canonical"].some((k2) => k2 in opts))
      throw new Error("sign() legacy options not supported");
    const { lowS, prehash, extraEntropy } = validateSigOpts(opts, defaultSigOpts);
    message = validateMsgAndHash(message, prehash);
    const h1int = bits2int_modN(message);
    const d2 = _normFnElement(Fn, privateKey);
    const seedArgs = [int2octets(d2), int2octets(h1int)];
    if (extraEntropy != null && extraEntropy !== false) {
      const e2 = extraEntropy === true ? randomBytes$1(lengths.secretKey) : extraEntropy;
      seedArgs.push(ensureBytes("extraEntropy", e2));
    }
    const seed = concatBytes(...seedArgs);
    const m2 = h1int;
    function k2sig(kBytes) {
      const k2 = bits2int(kBytes);
      if (!Fn.isValidNot0(k2))
        return;
      const ik = Fn.inv(k2);
      const q2 = Point.BASE.multiply(k2).toAffine();
      const r2 = Fn.create(q2.x);
      if (r2 === _0n$1)
        return;
      const s2 = Fn.create(ik * Fn.create(m2 + r2 * d2));
      if (s2 === _0n$1)
        return;
      let recovery = (q2.x === r2 ? 0 : 2) | Number(q2.y & _1n$1);
      let normS = s2;
      if (lowS && isBiggerThanHalfOrder(s2)) {
        normS = Fn.neg(s2);
        recovery ^= 1;
      }
      return new Signature(r2, normS, recovery);
    }
    return { seed, k2sig };
  }
  function sign2(message, secretKey, opts = {}) {
    message = ensureBytes("message", message);
    const { seed, k2sig } = prepSig(message, secretKey, opts);
    const drbg = createHmacDrbg(hash2.outputLen, Fn.BYTES, hmac$1);
    const sig = drbg(seed, k2sig);
    return sig;
  }
  function tryParsingSig(sg) {
    let sig = void 0;
    const isHex2 = typeof sg === "string" || isBytes$2(sg);
    const isObj = !isHex2 && sg !== null && typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex2 && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (isObj) {
      sig = new Signature(sg.r, sg.s);
    } else if (isHex2) {
      try {
        sig = Signature.fromBytes(ensureBytes("sig", sg), "der");
      } catch (derError) {
        if (!(derError instanceof DER.Err))
          throw derError;
      }
      if (!sig) {
        try {
          sig = Signature.fromBytes(ensureBytes("sig", sg), "compact");
        } catch (error) {
          return false;
        }
      }
    }
    if (!sig)
      return false;
    return sig;
  }
  function verify(signature, message, publicKey, opts = {}) {
    const { lowS, prehash, format } = validateSigOpts(opts, defaultSigOpts);
    publicKey = ensureBytes("publicKey", publicKey);
    message = validateMsgAndHash(ensureBytes("message", message), prehash);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    const sig = format === void 0 ? tryParsingSig(signature) : Signature.fromBytes(ensureBytes("sig", signature), format);
    if (sig === false)
      return false;
    try {
      const P2 = Point.fromBytes(publicKey);
      if (lowS && sig.hasHighS())
        return false;
      const { r: r2, s: s2 } = sig;
      const h2 = bits2int_modN(message);
      const is = Fn.inv(s2);
      const u1 = Fn.create(h2 * is);
      const u2 = Fn.create(r2 * is);
      const R = Point.BASE.multiplyUnsafe(u1).add(P2.multiplyUnsafe(u2));
      if (R.is0())
        return false;
      const v2 = Fn.create(R.x);
      return v2 === r2;
    } catch (e2) {
      return false;
    }
  }
  function recoverPublicKey(signature, message, opts = {}) {
    const { prehash } = validateSigOpts(opts, defaultSigOpts);
    message = validateMsgAndHash(message, prehash);
    return Signature.fromBytes(signature, "recovered").recoverPublicKey(message).toBytes();
  }
  return Object.freeze({
    keygen,
    getPublicKey,
    getSharedSecret,
    utils: utils2,
    lengths,
    Point,
    sign: sign2,
    verify,
    recoverPublicKey,
    Signature,
    hash: hash2
  });
}
function _weierstrass_legacy_opts_to_new(c2) {
  const CURVE = {
    a: c2.a,
    b: c2.b,
    p: c2.Fp.ORDER,
    n: c2.n,
    h: c2.h,
    Gx: c2.Gx,
    Gy: c2.Gy
  };
  const Fp = c2.Fp;
  let allowedLengths = c2.allowedPrivateKeyLengths ? Array.from(new Set(c2.allowedPrivateKeyLengths.map((l2) => Math.ceil(l2 / 2)))) : void 0;
  const Fn = Field(CURVE.n, {
    BITS: c2.nBitLength,
    allowedLengths,
    modFromBytes: c2.wrapPrivateKey
  });
  const curveOpts = {
    Fp,
    Fn,
    allowInfinityPoint: c2.allowInfinityPoint,
    endo: c2.endo,
    isTorsionFree: c2.isTorsionFree,
    clearCofactor: c2.clearCofactor,
    fromBytes: c2.fromBytes,
    toBytes: c2.toBytes
  };
  return { CURVE, curveOpts };
}
function _ecdsa_legacy_opts_to_new(c2) {
  const { CURVE, curveOpts } = _weierstrass_legacy_opts_to_new(c2);
  const ecdsaOpts = {
    hmac: c2.hmac,
    randomBytes: c2.randomBytes,
    lowS: c2.lowS,
    bits2int: c2.bits2int,
    bits2int_modN: c2.bits2int_modN
  };
  return { CURVE, curveOpts, hash: c2.hash, ecdsaOpts };
}
function _ecdsa_new_output_to_legacy(c2, _ecdsa) {
  const Point = _ecdsa.Point;
  return Object.assign({}, _ecdsa, {
    ProjectivePoint: Point,
    CURVE: Object.assign({}, c2, nLength(Point.Fn.ORDER, Point.Fn.BITS))
  });
}
function weierstrass(c2) {
  const { CURVE, curveOpts, hash: hash2, ecdsaOpts } = _ecdsa_legacy_opts_to_new(c2);
  const Point = weierstrassN(CURVE, curveOpts);
  const signs = ecdsa(Point, hash2, ecdsaOpts);
  return _ecdsa_new_output_to_legacy(c2, signs);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function createCurve(curveDef, defHash) {
  const create2 = (hash2) => weierstrass({ ...curveDef, hash: hash2 });
  return { ...create2(defHash), create: create2 };
}
function createJSONStorage(getStorage, options) {
  let storage2;
  try {
    storage2 = getStorage();
  } catch (e2) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0);
      };
      const str = (_a = storage2.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage2.setItem(
      name,
      JSON.stringify(newValue, void 0)
    ),
    removeItem: (name) => storage2.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e2) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e2);
      }
    };
  }
};
const persistImpl = (config2, baseOptions) => (set2, get2, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage2 = options.storage;
  if (!storage2) {
    return config2(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set2(...args);
      },
      get2,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get2() });
    return storage2.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config2(
    (...args) => {
      set2(...args);
      void setItem();
    },
    get2,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage2) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get2()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get2()) != null ? _a : configResult)) || void 0;
    return toThenable(storage2.getItem.bind(storage2))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            const migration = options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
            if (migration instanceof Promise) {
              return migration.then((result) => [true, result]);
            }
            return [true, migration];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get2()) != null ? _a2 : configResult
      );
      set2(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get2();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e2) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage2 = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage2 == null ? void 0 : storage2.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persist = persistImpl;
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore$1 = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var n, l$1, u$1, i$1, o$1, r$1, f$1, e$1, c$1, s$1, h$1 = {}, v$1 = [], p$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y$1 = Array.isArray;
function d$1(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function w$1(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (r2 in l2.defaultProps) void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return g(l2, f2, i2, o2, null);
}
function g(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u$1 : r2, __i: -1, __u: 0 };
  return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function b(n2) {
  return n2.children;
}
function k$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function x(n2, l2) {
  if (null == l2) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C$1(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !P.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(P);
}
function P() {
  var n2, u2, t2, o2, r2, e2, c2, s2;
  for (i$1.sort(f$1); n2 = i$1.shift(); ) n2.__d && (u2 = i$1.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d$1({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j$1(c2, o2, s2), o2.__e != e2 && C$1(o2)), i$1.length > u2 && i$1.sort(f$1));
  P.__r = 0;
}
function S(n2, l2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, w2, _2 = t2 && t2.__k || v$1, g2 = l2.length;
  for (u2.__d = e2, $(u2, l2, _2), e2 = u2.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u2.__k[a2]) && (p2 = -1 === y2.__i ? h$1 : _2[y2.__i] || h$1, y2.__i = a2, O(n2, y2, p2, i2, o2, r2, f2, e2, c2, s2), d2 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && N(p2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || p2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u2.__d = e2, u2.__e = w2;
}
function $(n2, l2, u2) {
  var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) null != (i2 = l2[t2]) && "boolean" != typeof i2 && "function" != typeof i2 ? (r2 = t2 + a2, (i2 = n2.__k[t2] = "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? g(null, i2, null, null, null) : y$1(i2) ? g(b, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? g(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2).__ = n2, i2.__b = n2.__b + 1, o2 = null, -1 !== (f2 = i2.__i = L(i2, u2, r2, s2)) && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 == r2 - 1 ? a2-- : f2 == r2 + 1 ? a2++ : (f2 > r2 ? a2-- : a2++, i2.__u |= 65536))) : i2 = n2.__k[t2] = null;
  if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), V(o2, o2));
}
function I(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = I(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = x(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function L(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u2;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f2 < l2.length; ) {
    if (r2 >= 0) {
      if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return r2;
      r2--;
    }
    if (f2 < l2.length) {
      if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return f2;
      f2++;
    }
  }
  return -1;
}
function T(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || p$1.test(l2) ? u2 : u2 + "px";
}
function A(n2, l2, u2, t2, i2) {
  var o2;
  n: if ("style" === l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T(n2.style, l2, u2[l2]);
  }
  else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = e$1, n2.addEventListener(l2, o2 ? s$1 : c$1, o2)) : n2.removeEventListener(l2, o2 ? s$1 : c$1, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = e$1++;
      else if (u2.t < t2.u) return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, h2, v2, p2, w2, _2, g2, m2, x2, C2, M2, P2, $2, I2, H, L2, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (m2 = u2.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? g2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(m2, M2) : (u2.__c = h2 = new k$1(m2, M2), h2.constructor = T2, h2.render = q), C2 && C2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d$1({}, h2.__s)), d$1(h2.__s, T2.getDerivedStateFromProps(m2, h2.__s))), p2 = h2.props, w2 = h2.state, h2.__v = u2, v2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m2 !== p2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m2, h2.__s, M2) || u2.__v === t2.__v)) {
        for (u2.__v !== t2.__v && (h2.props = m2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
        h2._sb = [], h2.__h.length && f2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, M2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(p2, w2, _2);
      });
    }
    if (h2.context = M2, h2.props = m2, h2.__P = n2, h2.__e = false, $2 = l$1.__r, I2 = 0, x2) {
      for (h2.state = h2.__s, h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H = 0; H < h2._sb.length; H++) h2.__h.push(h2._sb[H]);
      h2._sb = [];
    } else do {
      h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++I2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d$1(d$1({}, i2), h2.getChildContext())), x2 && !v2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(p2, w2)), S(n2, y$1(L2 = null != a2 && a2.type === b && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u2, t2, i2, o2, r2, f2, e2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && f2.push(h2), g2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != r2) {
      for (u2.__u |= c2 ? 160 : 32; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r2[r2.indexOf(e2)] = null, u2.__e = e2;
    } else u2.__e = t2.__e, u2.__k = t2.__k;
    l$1.__e(n3, u2, t2);
  }
  else null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = z$1(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l$1.diffed) && a2(u2);
}
function j$1(n2, u2, t2) {
  u2.__d = void 0;
  for (var i2 = 0; i2 < t2.length; i2++) N(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function z$1(u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, v2, p2, d2, _2, g2, m2, b2 = i2.props, k2 = t2.props, C2 = t2.type;
  if ("svg" === C2 ? r2 = "http://www.w3.org/2000/svg" : "math" === C2 ? r2 = "http://www.w3.org/1998/Math/MathML" : r2 || (r2 = "http://www.w3.org/1999/xhtml"), null != f2) {
    for (a2 = 0; a2 < f2.length; a2++) if ((_2 = f2[a2]) && "setAttribute" in _2 == !!C2 && (C2 ? _2.localName === C2 : 3 === _2.nodeType)) {
      u2 = _2, f2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null === C2) return document.createTextNode(k2);
    u2 = document.createElementNS(r2, C2, k2.is && k2), c2 && (l$1.__m && l$1.__m(t2, f2), c2 = false), f2 = null;
  }
  if (null === C2) b2 === k2 || c2 && u2.data === k2 || (u2.data = k2);
  else {
    if (f2 = f2 && n.call(u2.childNodes), b2 = i2.props || h$1, !c2 && null != f2) for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) b2[(_2 = u2.attributes[a2]).name] = _2.value;
    for (a2 in b2) if (_2 = b2[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) p2 = _2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      A(u2, a2, null, _2, r2);
    }
    for (a2 in k2) _2 = k2[a2], "children" == a2 ? d2 = _2 : "dangerouslySetInnerHTML" == a2 ? v2 = _2 : "value" == a2 ? g2 = _2 : "checked" == a2 ? m2 = _2 : c2 && "function" != typeof _2 || b2[a2] === _2 || A(u2, a2, _2, b2[a2], r2);
    if (v2) c2 || p2 && (v2.__html === p2.__html || v2.__html === u2.innerHTML) || (u2.innerHTML = v2.__html), t2.__k = [];
    else if (p2 && (u2.innerHTML = ""), S(u2, y$1(d2) ? d2 : [d2], t2, i2, o2, "foreignObject" === C2 ? "http://www.w3.org/1999/xhtml" : r2, f2, e2, f2 ? f2[0] : i2.__k && x(i2, 0), c2, s2), null != f2) for (a2 = f2.length; a2--; ) w$1(f2[a2]);
    c2 || (a2 = "value", "progress" === C2 && null == g2 ? u2.removeAttribute("value") : void 0 !== g2 && (g2 !== u2[a2] || "progress" === C2 && !g2 || "option" === C2 && g2 !== b2[a2]) && A(u2, a2, g2, b2[a2], r2), a2 = "checked", void 0 !== m2 && m2 !== u2[a2] && A(u2, a2, m2, b2[a2], r2));
  }
  return u2;
}
function N(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function V(n2, u2, t2) {
  var i2, o2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && V(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || w$1(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$1(u2, t2, i2) {
  var o2, r2, f2, e2;
  l$1.__ && l$1.__(u2, t2), r2 = (o2 = false) ? null : t2.__k, f2 = [], e2 = [], O(t2, u2 = t2.__k = _(b, null, [u2]), r2 || h$1, h$1, t2.namespaceURI, r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, r2 ? r2.__e : t2.firstChild, o2, e2), j$1(f2, u2, e2);
}
n = v$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$1 = 0, k$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d$1({}, this.state), "function" == typeof n2 && (n2 = n2(d$1({}, u2), this.props)), n2 && d$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, k$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, k$1.prototype.render = b, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, P.__r = 0, e$1 = 0, c$1 = F(false), s$1 = F(true);
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function d(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function h(n2) {
  return o = 1, p(D, n2);
}
function p(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [D(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n2, u2) {
  var i2 = d(t++, 3);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r.__H.__h.push(i2));
}
function j() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z), n2.__H.__h.forEach(B), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c.__e(t2, n2.__v);
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const entryPoint06Abi = [
  {
    inputs: [
      { name: "preOpGas", type: "uint256" },
      { name: "paid", type: "uint256" },
      { name: "validAfter", type: "uint48" },
      { name: "validUntil", type: "uint48" },
      { name: "targetSuccess", type: "bool" },
      { name: "targetResult", type: "bytes" }
    ],
    name: "ExecutionResult",
    type: "error"
  },
  {
    inputs: [
      { name: "opIndex", type: "uint256" },
      { name: "reason", type: "string" }
    ],
    name: "FailedOp",
    type: "error"
  },
  {
    inputs: [{ name: "sender", type: "address" }],
    name: "SenderAddressResult",
    type: "error"
  },
  {
    inputs: [{ name: "aggregator", type: "address" }],
    name: "SignatureValidationFailed",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          { name: "preOpGas", type: "uint256" },
          { name: "prefund", type: "uint256" },
          { name: "sigFailed", type: "bool" },
          { name: "validAfter", type: "uint48" },
          { name: "validUntil", type: "uint48" },
          { name: "paymasterContext", type: "bytes" }
        ],
        name: "returnInfo",
        type: "tuple"
      },
      {
        components: [
          { name: "stake", type: "uint256" },
          { name: "unstakeDelaySec", type: "uint256" }
        ],
        name: "senderInfo",
        type: "tuple"
      },
      {
        components: [
          { name: "stake", type: "uint256" },
          { name: "unstakeDelaySec", type: "uint256" }
        ],
        name: "factoryInfo",
        type: "tuple"
      },
      {
        components: [
          { name: "stake", type: "uint256" },
          { name: "unstakeDelaySec", type: "uint256" }
        ],
        name: "paymasterInfo",
        type: "tuple"
      }
    ],
    name: "ValidationResult",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          { name: "preOpGas", type: "uint256" },
          { name: "prefund", type: "uint256" },
          { name: "sigFailed", type: "bool" },
          { name: "validAfter", type: "uint48" },
          { name: "validUntil", type: "uint48" },
          { name: "paymasterContext", type: "bytes" }
        ],
        name: "returnInfo",
        type: "tuple"
      },
      {
        components: [
          { name: "stake", type: "uint256" },
          { name: "unstakeDelaySec", type: "uint256" }
        ],
        name: "senderInfo",
        type: "tuple"
      },
      {
        components: [
          { name: "stake", type: "uint256" },
          { name: "unstakeDelaySec", type: "uint256" }
        ],
        name: "factoryInfo",
        type: "tuple"
      },
      {
        components: [
          { name: "stake", type: "uint256" },
          { name: "unstakeDelaySec", type: "uint256" }
        ],
        name: "paymasterInfo",
        type: "tuple"
      },
      {
        components: [
          { name: "aggregator", type: "address" },
          {
            components: [
              { name: "stake", type: "uint256" },
              {
                name: "unstakeDelaySec",
                type: "uint256"
              }
            ],
            name: "stakeInfo",
            type: "tuple"
          }
        ],
        name: "aggregatorInfo",
        type: "tuple"
      }
    ],
    name: "ValidationResultWithAggregation",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "userOpHash",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        name: "factory",
        type: "address"
      },
      {
        indexed: false,
        name: "paymaster",
        type: "address"
      }
    ],
    name: "AccountDeployed",
    type: "event"
  },
  { anonymous: false, inputs: [], name: "BeforeExecution", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        name: "totalDeposit",
        type: "uint256"
      }
    ],
    name: "Deposited",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "aggregator",
        type: "address"
      }
    ],
    name: "SignatureAggregatorChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        name: "totalStaked",
        type: "uint256"
      },
      {
        indexed: false,
        name: "unstakeDelaySec",
        type: "uint256"
      }
    ],
    name: "StakeLocked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        name: "withdrawTime",
        type: "uint256"
      }
    ],
    name: "StakeUnlocked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        name: "withdrawAddress",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "StakeWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "userOpHash",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "paymaster",
        type: "address"
      },
      {
        indexed: false,
        name: "nonce",
        type: "uint256"
      },
      { indexed: false, name: "success", type: "bool" },
      {
        indexed: false,
        name: "actualGasCost",
        type: "uint256"
      },
      {
        indexed: false,
        name: "actualGasUsed",
        type: "uint256"
      }
    ],
    name: "UserOperationEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "userOpHash",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        name: "nonce",
        type: "uint256"
      },
      {
        indexed: false,
        name: "revertReason",
        type: "bytes"
      }
    ],
    name: "UserOperationRevertReason",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        name: "withdrawAddress",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdrawn",
    type: "event"
  },
  {
    inputs: [],
    name: "SIG_VALIDATION_FAILED",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "initCode", type: "bytes" },
      { name: "sender", type: "address" },
      { name: "paymasterAndData", type: "bytes" }
    ],
    name: "_validateSenderAndPaymaster",
    outputs: [],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "depositTo",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ name: "", type: "address" }],
    name: "deposits",
    outputs: [
      { name: "deposit", type: "uint112" },
      { name: "staked", type: "bool" },
      { name: "stake", type: "uint112" },
      { name: "unstakeDelaySec", type: "uint32" },
      { name: "withdrawTime", type: "uint48" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "getDepositInfo",
    outputs: [
      {
        components: [
          { name: "deposit", type: "uint112" },
          { name: "staked", type: "bool" },
          { name: "stake", type: "uint112" },
          { name: "unstakeDelaySec", type: "uint32" },
          { name: "withdrawTime", type: "uint48" }
        ],
        name: "info",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "sender", type: "address" },
      { name: "key", type: "uint192" }
    ],
    name: "getNonce",
    outputs: [{ name: "nonce", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "initCode", type: "bytes" }],
    name: "getSenderAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { name: "sender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "initCode", type: "bytes" },
          { name: "callData", type: "bytes" },
          { name: "callGasLimit", type: "uint256" },
          {
            name: "verificationGasLimit",
            type: "uint256"
          },
          {
            name: "preVerificationGas",
            type: "uint256"
          },
          { name: "maxFeePerGas", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          { name: "paymasterAndData", type: "bytes" },
          { name: "signature", type: "bytes" }
        ],
        name: "userOp",
        type: "tuple"
      }
    ],
    name: "getUserOpHash",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              {
                name: "callGasLimit",
                type: "uint256"
              },
              {
                name: "verificationGasLimit",
                type: "uint256"
              },
              {
                name: "preVerificationGas",
                type: "uint256"
              },
              {
                name: "maxFeePerGas",
                type: "uint256"
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256"
              },
              {
                name: "paymasterAndData",
                type: "bytes"
              },
              { name: "signature", type: "bytes" }
            ],
            name: "userOps",
            type: "tuple[]"
          },
          {
            name: "aggregator",
            type: "address"
          },
          { name: "signature", type: "bytes" }
        ],
        name: "opsPerAggregator",
        type: "tuple[]"
      },
      { name: "beneficiary", type: "address" }
    ],
    name: "handleAggregatedOps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { name: "sender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "initCode", type: "bytes" },
          { name: "callData", type: "bytes" },
          { name: "callGasLimit", type: "uint256" },
          {
            name: "verificationGasLimit",
            type: "uint256"
          },
          {
            name: "preVerificationGas",
            type: "uint256"
          },
          { name: "maxFeePerGas", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          { name: "paymasterAndData", type: "bytes" },
          { name: "signature", type: "bytes" }
        ],
        name: "ops",
        type: "tuple[]"
      },
      { name: "beneficiary", type: "address" }
    ],
    name: "handleOps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ name: "key", type: "uint192" }],
    name: "incrementNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { name: "callData", type: "bytes" },
      {
        components: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              {
                name: "callGasLimit",
                type: "uint256"
              },
              {
                name: "verificationGasLimit",
                type: "uint256"
              },
              {
                name: "preVerificationGas",
                type: "uint256"
              },
              { name: "paymaster", type: "address" },
              {
                name: "maxFeePerGas",
                type: "uint256"
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256"
              }
            ],
            name: "mUserOp",
            type: "tuple"
          },
          { name: "userOpHash", type: "bytes32" },
          { name: "prefund", type: "uint256" },
          { name: "contextOffset", type: "uint256" },
          { name: "preOpGas", type: "uint256" }
        ],
        name: "opInfo",
        type: "tuple"
      },
      { name: "context", type: "bytes" }
    ],
    name: "innerHandleOp",
    outputs: [{ name: "actualGasCost", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "uint192" }
    ],
    name: "nonceSequenceNumber",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { name: "sender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "initCode", type: "bytes" },
          { name: "callData", type: "bytes" },
          { name: "callGasLimit", type: "uint256" },
          {
            name: "verificationGasLimit",
            type: "uint256"
          },
          {
            name: "preVerificationGas",
            type: "uint256"
          },
          { name: "maxFeePerGas", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          { name: "paymasterAndData", type: "bytes" },
          { name: "signature", type: "bytes" }
        ],
        name: "op",
        type: "tuple"
      },
      { name: "target", type: "address" },
      { name: "targetCallData", type: "bytes" }
    ],
    name: "simulateHandleOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { name: "sender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "initCode", type: "bytes" },
          { name: "callData", type: "bytes" },
          { name: "callGasLimit", type: "uint256" },
          {
            name: "verificationGasLimit",
            type: "uint256"
          },
          {
            name: "preVerificationGas",
            type: "uint256"
          },
          { name: "maxFeePerGas", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          { name: "paymasterAndData", type: "bytes" },
          { name: "signature", type: "bytes" }
        ],
        name: "userOp",
        type: "tuple"
      }
    ],
    name: "simulateValidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "withdrawAddress",
        type: "address"
      }
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "withdrawAddress",
        type: "address"
      },
      { name: "withdrawAmount", type: "uint256" }
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];
function getInitCode(userOperation) {
  const { authorization, factory, factoryData } = userOperation;
  if (factory === "0x7702" || factory === "0x7702000000000000000000000000000000000000") {
    if (!authorization)
      return "0x7702000000000000000000000000000000000000";
    const delegation = authorization.address;
    return concat$2([delegation, factoryData ?? "0x"]);
  }
  if (!factory)
    return "0x";
  return concat$2([factory, factoryData ?? "0x"]);
}
function toPackedUserOperation(userOperation) {
  const { callGasLimit, callData, maxPriorityFeePerGas, maxFeePerGas, paymaster, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, sender, signature = "0x", verificationGasLimit } = userOperation;
  const accountGasLimits = concat$2([
    pad$2(numberToHex(verificationGasLimit || 0n), { size: 16 }),
    pad$2(numberToHex(callGasLimit || 0n), { size: 16 })
  ]);
  const initCode = getInitCode(userOperation);
  const gasFees = concat$2([
    pad$2(numberToHex(maxPriorityFeePerGas || 0n), { size: 16 }),
    pad$2(numberToHex(maxFeePerGas || 0n), { size: 16 })
  ]);
  const nonce = userOperation.nonce ?? 0n;
  const paymasterAndData = paymaster ? concat$2([
    paymaster,
    pad$2(numberToHex(paymasterVerificationGasLimit || 0n), {
      size: 16
    }),
    pad$2(numberToHex(paymasterPostOpGasLimit || 0n), {
      size: 16
    }),
    paymasterData || "0x"
  ]) : "0x";
  const preVerificationGas = userOperation.preVerificationGas ?? 0n;
  return {
    accountGasLimits,
    callData,
    initCode,
    gasFees,
    nonce,
    paymasterAndData,
    preVerificationGas,
    sender,
    signature
  };
}
const types = {
  PackedUserOperation: [
    { type: "address", name: "sender" },
    { type: "uint256", name: "nonce" },
    { type: "bytes", name: "initCode" },
    { type: "bytes", name: "callData" },
    { type: "bytes32", name: "accountGasLimits" },
    { type: "uint256", name: "preVerificationGas" },
    { type: "bytes32", name: "gasFees" },
    { type: "bytes", name: "paymasterAndData" }
  ]
};
function getUserOperationTypedData(parameters) {
  const { chainId, entryPointAddress, userOperation } = parameters;
  const packedUserOp = toPackedUserOperation(userOperation);
  return {
    types,
    primaryType: "PackedUserOperation",
    domain: {
      name: "ERC4337",
      version: "1",
      chainId,
      verifyingContract: entryPointAddress
    },
    message: packedUserOp
  };
}
function getUserOperationHash(parameters) {
  const { chainId, entryPointAddress, entryPointVersion } = parameters;
  const userOperation = parameters.userOperation;
  const { authorization, callData = "0x", callGasLimit, maxFeePerGas, maxPriorityFeePerGas, nonce, paymasterAndData = "0x", preVerificationGas, sender, verificationGasLimit } = userOperation;
  if (entryPointVersion === "0.8")
    return hashTypedData(getUserOperationTypedData({
      chainId,
      entryPointAddress,
      userOperation
    }));
  const packedUserOp = (() => {
    var _a, _b;
    if (entryPointVersion === "0.6") {
      const factory = (_a = userOperation.initCode) == null ? void 0 : _a.slice(0, 42);
      const factoryData = (_b = userOperation.initCode) == null ? void 0 : _b.slice(42);
      const initCode = getInitCode({
        authorization,
        factory,
        factoryData
      });
      return encodeAbiParameters([
        { type: "address" },
        { type: "uint256" },
        { type: "bytes32" },
        { type: "bytes32" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "bytes32" }
      ], [
        sender,
        nonce,
        keccak256$1(initCode),
        keccak256$1(callData),
        callGasLimit,
        verificationGasLimit,
        preVerificationGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        keccak256$1(paymasterAndData)
      ]);
    }
    if (entryPointVersion === "0.7") {
      const packedUserOp2 = toPackedUserOperation(userOperation);
      return encodeAbiParameters([
        { type: "address" },
        { type: "uint256" },
        { type: "bytes32" },
        { type: "bytes32" },
        { type: "bytes32" },
        { type: "uint256" },
        { type: "bytes32" },
        { type: "bytes32" }
      ], [
        packedUserOp2.sender,
        packedUserOp2.nonce,
        keccak256$1(packedUserOp2.initCode),
        keccak256$1(packedUserOp2.callData),
        packedUserOp2.accountGasLimits,
        packedUserOp2.preVerificationGas,
        packedUserOp2.gasFees,
        keccak256$1(packedUserOp2.paymasterAndData)
      ]);
    }
    throw new Error(`entryPointVersion "${entryPointVersion}" not supported.`);
  })();
  return keccak256$1(encodeAbiParameters([{ type: "bytes32" }, { type: "address" }, { type: "uint256" }], [keccak256$1(packedUserOp), entryPointAddress, BigInt(chainId)]));
}
async function toSmartAccount(implementation) {
  const { extend, nonceKeyManager = createNonceManager({
    source: {
      get() {
        return Date.now();
      },
      set() {
      }
    }
  }), ...rest } = implementation;
  let deployed = false;
  const address = await implementation.getAddress();
  return {
    ...extend,
    ...rest,
    address,
    async getFactoryArgs() {
      if ("isDeployed" in this && await this.isDeployed())
        return { factory: void 0, factoryData: void 0 };
      return implementation.getFactoryArgs();
    },
    async getNonce(parameters) {
      const key = (parameters == null ? void 0 : parameters.key) ?? BigInt(await nonceKeyManager.consume({
        address,
        chainId: implementation.client.chain.id,
        client: implementation.client
      }));
      if (implementation.getNonce)
        return await implementation.getNonce({ ...parameters, key });
      const nonce = await readContract(implementation.client, {
        abi: parseAbi([
          "function getNonce(address, uint192) pure returns (uint256)"
        ]),
        address: implementation.entryPoint.address,
        functionName: "getNonce",
        args: [address, key]
      });
      return nonce;
    },
    async isDeployed() {
      if (deployed)
        return true;
      const code = await getAction(implementation.client, getCode, "getCode")({
        address
      });
      deployed = Boolean(code);
      return deployed;
    },
    ...implementation.sign ? {
      async sign(parameters) {
        const [{ factory, factoryData }, signature] = await Promise.all([
          this.getFactoryArgs(),
          implementation.sign(parameters)
        ]);
        if (factory && factoryData)
          return serializeErc6492Signature({
            address: factory,
            data: factoryData,
            signature
          });
        return signature;
      }
    } : {},
    async signMessage(parameters) {
      const [{ factory, factoryData }, signature] = await Promise.all([
        this.getFactoryArgs(),
        implementation.signMessage(parameters)
      ]);
      if (factory && factoryData && factory !== "0x7702")
        return serializeErc6492Signature({
          address: factory,
          data: factoryData,
          signature
        });
      return signature;
    },
    async signTypedData(parameters) {
      const [{ factory, factoryData }, signature] = await Promise.all([
        this.getFactoryArgs(),
        implementation.signTypedData(parameters)
      ]);
      if (factory && factoryData && factory !== "0x7702")
        return serializeErc6492Signature({
          address: factory,
          data: factoryData,
          signature
        });
      return signature;
    },
    type: "smart"
  };
}
class AccountNotDeployedError extends BaseError$3 {
  constructor({ cause }) {
    super("Smart Account is not deployed.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
        "- An incorrect `sender` address is provided."
      ],
      name: "AccountNotDeployedError"
    });
  }
}
Object.defineProperty(AccountNotDeployedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa20/
});
class ExecutionRevertedError extends BaseError$3 {
  constructor({ cause, data, message } = {}) {
    var _a;
    const reason = (_a = message == null ? void 0 : message.replace("execution reverted: ", "")) == null ? void 0 : _a.replace("execution reverted", "");
    super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
      cause,
      name: "ExecutionRevertedError"
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
Object.defineProperty(ExecutionRevertedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32521
});
Object.defineProperty(ExecutionRevertedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /execution reverted/
});
class FailedToSendToBeneficiaryError extends BaseError$3 {
  constructor({ cause }) {
    super("Failed to send funds to beneficiary.", {
      cause,
      name: "FailedToSendToBeneficiaryError"
    });
  }
}
Object.defineProperty(FailedToSendToBeneficiaryError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa91/
});
class GasValuesOverflowError extends BaseError$3 {
  constructor({ cause }) {
    super("Gas value overflowed.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- one of the gas values exceeded 2**120 (uint120)"
      ].filter(Boolean),
      name: "GasValuesOverflowError"
    });
  }
}
Object.defineProperty(GasValuesOverflowError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa94/
});
class HandleOpsOutOfGasError extends BaseError$3 {
  constructor({ cause }) {
    super("The `handleOps` function was called by the Bundler with a gas limit too low.", {
      cause,
      name: "HandleOpsOutOfGasError"
    });
  }
}
Object.defineProperty(HandleOpsOutOfGasError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa95/
});
class InitCodeFailedError extends BaseError$3 {
  constructor({ cause, factory, factoryData, initCode }) {
    super("Failed to simulate deployment for Smart Account.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- Invalid `factory`/`factoryData` or `initCode` properties are present",
        "- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
        "- Smart Account deployment execution reverted with an error\n",
        factory && `factory: ${factory}`,
        factoryData && `factoryData: ${factoryData}`,
        initCode && `initCode: ${initCode}`
      ].filter(Boolean),
      name: "InitCodeFailedError"
    });
  }
}
Object.defineProperty(InitCodeFailedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa13/
});
class InitCodeMustCreateSenderError extends BaseError$3 {
  constructor({ cause, factory, factoryData, initCode }) {
    super("Smart Account initialization implementation did not create an account.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- `factory`/`factoryData` or `initCode` properties are invalid",
        "- Smart Account initialization implementation is incorrect\n",
        factory && `factory: ${factory}`,
        factoryData && `factoryData: ${factoryData}`,
        initCode && `initCode: ${initCode}`
      ].filter(Boolean),
      name: "InitCodeMustCreateSenderError"
    });
  }
}
Object.defineProperty(InitCodeMustCreateSenderError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa15/
});
class InitCodeMustReturnSenderError extends BaseError$3 {
  constructor({ cause, factory, factoryData, initCode, sender }) {
    super("Smart Account initialization implementation does not return the expected sender.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "Smart Account initialization implementation does not return a sender address\n",
        factory && `factory: ${factory}`,
        factoryData && `factoryData: ${factoryData}`,
        initCode && `initCode: ${initCode}`,
        sender && `sender: ${sender}`
      ].filter(Boolean),
      name: "InitCodeMustReturnSenderError"
    });
  }
}
Object.defineProperty(InitCodeMustReturnSenderError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa14/
});
class InsufficientPrefundError extends BaseError$3 {
  constructor({ cause }) {
    super("Smart Account does not have sufficient funds to execute the User Operation.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the Smart Account does not have sufficient funds to cover the required prefund, or",
        "- a Paymaster was not provided"
      ].filter(Boolean),
      name: "InsufficientPrefundError"
    });
  }
}
Object.defineProperty(InsufficientPrefundError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa21/
});
class InternalCallOnlyError extends BaseError$3 {
  constructor({ cause }) {
    super("Bundler attempted to call an invalid function on the EntryPoint.", {
      cause,
      name: "InternalCallOnlyError"
    });
  }
}
Object.defineProperty(InternalCallOnlyError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa92/
});
class InvalidAggregatorError extends BaseError$3 {
  constructor({ cause }) {
    super("Bundler used an invalid aggregator for handling aggregated User Operations.", {
      cause,
      name: "InvalidAggregatorError"
    });
  }
}
Object.defineProperty(InvalidAggregatorError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa96/
});
class InvalidAccountNonceError extends BaseError$3 {
  constructor({ cause, nonce }) {
    super("Invalid Smart Account nonce used for User Operation.", {
      cause,
      metaMessages: [nonce && `nonce: ${nonce}`].filter(Boolean),
      name: "InvalidAccountNonceError"
    });
  }
}
Object.defineProperty(InvalidAccountNonceError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa25/
});
class InvalidBeneficiaryError extends BaseError$3 {
  constructor({ cause }) {
    super("Bundler has not set a beneficiary address.", {
      cause,
      name: "InvalidBeneficiaryError"
    });
  }
}
Object.defineProperty(InvalidBeneficiaryError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa90/
});
class InvalidFieldsError extends BaseError$3 {
  constructor({ cause }) {
    super("Invalid fields set on User Operation.", {
      cause,
      name: "InvalidFieldsError"
    });
  }
}
Object.defineProperty(InvalidFieldsError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32602
});
class InvalidPaymasterAndDataError extends BaseError$3 {
  constructor({ cause, paymasterAndData }) {
    super("Paymaster properties provided are invalid.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the `paymasterAndData` property is of an incorrect length\n",
        paymasterAndData && `paymasterAndData: ${paymasterAndData}`
      ].filter(Boolean),
      name: "InvalidPaymasterAndDataError"
    });
  }
}
Object.defineProperty(InvalidPaymasterAndDataError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa93/
});
class PaymasterDepositTooLowError extends BaseError$3 {
  constructor({ cause }) {
    super("Paymaster deposit for the User Operation is too low.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the Paymaster has deposited less than the expected amount via the `deposit` function"
      ].filter(Boolean),
      name: "PaymasterDepositTooLowError"
    });
  }
}
Object.defineProperty(PaymasterDepositTooLowError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32508
});
Object.defineProperty(PaymasterDepositTooLowError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa31/
});
class PaymasterFunctionRevertedError extends BaseError$3 {
  constructor({ cause }) {
    super("The `validatePaymasterUserOp` function on the Paymaster reverted.", {
      cause,
      name: "PaymasterFunctionRevertedError"
    });
  }
}
Object.defineProperty(PaymasterFunctionRevertedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa33/
});
class PaymasterNotDeployedError extends BaseError$3 {
  constructor({ cause }) {
    super("The Paymaster contract has not been deployed.", {
      cause,
      name: "PaymasterNotDeployedError"
    });
  }
}
Object.defineProperty(PaymasterNotDeployedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa30/
});
class PaymasterRateLimitError extends BaseError$3 {
  constructor({ cause }) {
    super("UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.", {
      cause,
      name: "PaymasterRateLimitError"
    });
  }
}
Object.defineProperty(PaymasterRateLimitError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32504
});
class PaymasterStakeTooLowError extends BaseError$3 {
  constructor({ cause }) {
    super("UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.", {
      cause,
      name: "PaymasterStakeTooLowError"
    });
  }
}
Object.defineProperty(PaymasterStakeTooLowError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32505
});
class PaymasterPostOpFunctionRevertedError extends BaseError$3 {
  constructor({ cause }) {
    super("Paymaster `postOp` function reverted.", {
      cause,
      name: "PaymasterPostOpFunctionRevertedError"
    });
  }
}
Object.defineProperty(PaymasterPostOpFunctionRevertedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa50/
});
class SenderAlreadyConstructedError extends BaseError$3 {
  constructor({ cause, factory, factoryData, initCode }) {
    super("Smart Account has already been deployed.", {
      cause,
      metaMessages: [
        "Remove the following properties and try again:",
        factory && "`factory`",
        factoryData && "`factoryData`",
        initCode && "`initCode`"
      ].filter(Boolean),
      name: "SenderAlreadyConstructedError"
    });
  }
}
Object.defineProperty(SenderAlreadyConstructedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa10/
});
class SignatureCheckFailedError extends BaseError$3 {
  constructor({ cause }) {
    super("UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).", {
      cause,
      name: "SignatureCheckFailedError"
    });
  }
}
Object.defineProperty(SignatureCheckFailedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32507
});
class SmartAccountFunctionRevertedError extends BaseError$3 {
  constructor({ cause }) {
    super("The `validateUserOp` function on the Smart Account reverted.", {
      cause,
      name: "SmartAccountFunctionRevertedError"
    });
  }
}
Object.defineProperty(SmartAccountFunctionRevertedError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa23/
});
class UnsupportedSignatureAggregatorError extends BaseError$3 {
  constructor({ cause }) {
    super("UserOperation rejected because account specified unsupported signature aggregator.", {
      cause,
      name: "UnsupportedSignatureAggregatorError"
    });
  }
}
Object.defineProperty(UnsupportedSignatureAggregatorError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32506
});
class UserOperationExpiredError extends BaseError$3 {
  constructor({ cause }) {
    super("User Operation expired.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied"
      ].filter(Boolean),
      name: "UserOperationExpiredError"
    });
  }
}
Object.defineProperty(UserOperationExpiredError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa22/
});
class UserOperationPaymasterExpiredError extends BaseError$3 {
  constructor({ cause }) {
    super("Paymaster for User Operation expired.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied"
      ].filter(Boolean),
      name: "UserOperationPaymasterExpiredError"
    });
  }
}
Object.defineProperty(UserOperationPaymasterExpiredError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa32/
});
class UserOperationSignatureError extends BaseError$3 {
  constructor({ cause }) {
    super("Signature provided for the User Operation is invalid.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account"
      ].filter(Boolean),
      name: "UserOperationSignatureError"
    });
  }
}
Object.defineProperty(UserOperationSignatureError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa24/
});
class UserOperationPaymasterSignatureError extends BaseError$3 {
  constructor({ cause }) {
    super("Signature provided for the User Operation is invalid.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster"
      ].filter(Boolean),
      name: "UserOperationPaymasterSignatureError"
    });
  }
}
Object.defineProperty(UserOperationPaymasterSignatureError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa34/
});
class UserOperationRejectedByEntryPointError extends BaseError$3 {
  constructor({ cause }) {
    super("User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.", {
      cause,
      name: "UserOperationRejectedByEntryPointError"
    });
  }
}
Object.defineProperty(UserOperationRejectedByEntryPointError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32500
});
class UserOperationRejectedByPaymasterError extends BaseError$3 {
  constructor({ cause }) {
    super("User Operation rejected by Paymaster's `validatePaymasterUserOp`.", {
      cause,
      name: "UserOperationRejectedByPaymasterError"
    });
  }
}
Object.defineProperty(UserOperationRejectedByPaymasterError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32501
});
class UserOperationRejectedByOpCodeError extends BaseError$3 {
  constructor({ cause }) {
    super("User Operation rejected with op code validation error.", {
      cause,
      name: "UserOperationRejectedByOpCodeError"
    });
  }
}
Object.defineProperty(UserOperationRejectedByOpCodeError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32502
});
class UserOperationOutOfTimeRangeError extends BaseError$3 {
  constructor({ cause }) {
    super("UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).", {
      cause,
      name: "UserOperationOutOfTimeRangeError"
    });
  }
}
Object.defineProperty(UserOperationOutOfTimeRangeError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32503
});
class UnknownBundlerError extends BaseError$3 {
  constructor({ cause }) {
    super(`An error occurred while executing user operation: ${cause == null ? void 0 : cause.shortMessage}`, {
      cause,
      name: "UnknownBundlerError"
    });
  }
}
class VerificationGasLimitExceededError extends BaseError$3 {
  constructor({ cause }) {
    super("User Operation verification gas limit exceeded.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the gas used for verification exceeded the `verificationGasLimit`"
      ].filter(Boolean),
      name: "VerificationGasLimitExceededError"
    });
  }
}
Object.defineProperty(VerificationGasLimitExceededError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa40/
});
class VerificationGasLimitTooLowError extends BaseError$3 {
  constructor({ cause }) {
    super("User Operation verification gas limit is too low.", {
      cause,
      metaMessages: [
        "This could arise when:",
        "- the `verificationGasLimit` is too low to verify the User Operation"
      ].filter(Boolean),
      name: "VerificationGasLimitTooLowError"
    });
  }
}
Object.defineProperty(VerificationGasLimitTooLowError, "message", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: /aa41/
});
class UserOperationExecutionError extends BaseError$3 {
  constructor(cause, { callData, callGasLimit, docsPath: docsPath2, factory, factoryData, initCode, maxFeePerGas, maxPriorityFeePerGas, nonce, paymaster, paymasterAndData, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, preVerificationGas, sender, signature, verificationGasLimit }) {
    const prettyArgs = prettyPrint({
      callData,
      callGasLimit,
      factory,
      factoryData,
      initCode,
      maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
      maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
      nonce,
      paymaster,
      paymasterAndData,
      paymasterData,
      paymasterPostOpGasLimit,
      paymasterVerificationGasLimit,
      preVerificationGas,
      sender,
      signature,
      verificationGasLimit
    });
    super(cause.shortMessage, {
      cause,
      docsPath: docsPath2,
      metaMessages: [
        ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
        "Request Arguments:",
        prettyArgs
      ].filter(Boolean),
      name: "UserOperationExecutionError"
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cause = cause;
  }
}
class UserOperationReceiptNotFoundError extends BaseError$3 {
  constructor({ hash: hash2 }) {
    super(`User Operation receipt with hash "${hash2}" could not be found. The User Operation may not have been processed yet.`, { name: "UserOperationReceiptNotFoundError" });
  }
}
class UserOperationNotFoundError extends BaseError$3 {
  constructor({ hash: hash2 }) {
    super(`User Operation with hash "${hash2}" could not be found.`, {
      name: "UserOperationNotFoundError"
    });
  }
}
class WaitForUserOperationReceiptTimeoutError extends BaseError$3 {
  constructor({ hash: hash2 }) {
    super(`Timed out while waiting for User Operation with hash "${hash2}" to be confirmed.`, { name: "WaitForUserOperationReceiptTimeoutError" });
  }
}
const bundlerErrors = [
  ExecutionRevertedError,
  InvalidFieldsError,
  PaymasterDepositTooLowError,
  PaymasterRateLimitError,
  PaymasterStakeTooLowError,
  SignatureCheckFailedError,
  UnsupportedSignatureAggregatorError,
  UserOperationOutOfTimeRangeError,
  UserOperationRejectedByEntryPointError,
  UserOperationRejectedByPaymasterError,
  UserOperationRejectedByOpCodeError
];
function getBundlerError(err, args) {
  const message = (err.details || "").toLowerCase();
  if (AccountNotDeployedError.message.test(message))
    return new AccountNotDeployedError({
      cause: err
    });
  if (FailedToSendToBeneficiaryError.message.test(message))
    return new FailedToSendToBeneficiaryError({
      cause: err
    });
  if (GasValuesOverflowError.message.test(message))
    return new GasValuesOverflowError({
      cause: err
    });
  if (HandleOpsOutOfGasError.message.test(message))
    return new HandleOpsOutOfGasError({
      cause: err
    });
  if (InitCodeFailedError.message.test(message))
    return new InitCodeFailedError({
      cause: err,
      factory: args.factory,
      factoryData: args.factoryData,
      initCode: args.initCode
    });
  if (InitCodeMustCreateSenderError.message.test(message))
    return new InitCodeMustCreateSenderError({
      cause: err,
      factory: args.factory,
      factoryData: args.factoryData,
      initCode: args.initCode
    });
  if (InitCodeMustReturnSenderError.message.test(message))
    return new InitCodeMustReturnSenderError({
      cause: err,
      factory: args.factory,
      factoryData: args.factoryData,
      initCode: args.initCode,
      sender: args.sender
    });
  if (InsufficientPrefundError.message.test(message))
    return new InsufficientPrefundError({
      cause: err
    });
  if (InternalCallOnlyError.message.test(message))
    return new InternalCallOnlyError({
      cause: err
    });
  if (InvalidAccountNonceError.message.test(message))
    return new InvalidAccountNonceError({
      cause: err,
      nonce: args.nonce
    });
  if (InvalidAggregatorError.message.test(message))
    return new InvalidAggregatorError({
      cause: err
    });
  if (InvalidBeneficiaryError.message.test(message))
    return new InvalidBeneficiaryError({
      cause: err
    });
  if (InvalidPaymasterAndDataError.message.test(message))
    return new InvalidPaymasterAndDataError({
      cause: err
    });
  if (PaymasterDepositTooLowError.message.test(message))
    return new PaymasterDepositTooLowError({
      cause: err
    });
  if (PaymasterFunctionRevertedError.message.test(message))
    return new PaymasterFunctionRevertedError({
      cause: err
    });
  if (PaymasterNotDeployedError.message.test(message))
    return new PaymasterNotDeployedError({
      cause: err
    });
  if (PaymasterPostOpFunctionRevertedError.message.test(message))
    return new PaymasterPostOpFunctionRevertedError({
      cause: err
    });
  if (SmartAccountFunctionRevertedError.message.test(message))
    return new SmartAccountFunctionRevertedError({
      cause: err
    });
  if (SenderAlreadyConstructedError.message.test(message))
    return new SenderAlreadyConstructedError({
      cause: err,
      factory: args.factory,
      factoryData: args.factoryData,
      initCode: args.initCode
    });
  if (UserOperationExpiredError.message.test(message))
    return new UserOperationExpiredError({
      cause: err
    });
  if (UserOperationPaymasterExpiredError.message.test(message))
    return new UserOperationPaymasterExpiredError({
      cause: err
    });
  if (UserOperationPaymasterSignatureError.message.test(message))
    return new UserOperationPaymasterSignatureError({
      cause: err
    });
  if (UserOperationSignatureError.message.test(message))
    return new UserOperationSignatureError({
      cause: err
    });
  if (VerificationGasLimitExceededError.message.test(message))
    return new VerificationGasLimitExceededError({
      cause: err
    });
  if (VerificationGasLimitTooLowError.message.test(message))
    return new VerificationGasLimitTooLowError({
      cause: err
    });
  const error = err.walk((e2) => bundlerErrors.some((error2) => error2.code === e2.code));
  if (error) {
    if (error.code === ExecutionRevertedError.code)
      return new ExecutionRevertedError({
        cause: err,
        data: error.data,
        message: error.details
      });
    if (error.code === InvalidFieldsError.code)
      return new InvalidFieldsError({
        cause: err
      });
    if (error.code === PaymasterDepositTooLowError.code)
      return new PaymasterDepositTooLowError({
        cause: err
      });
    if (error.code === PaymasterRateLimitError.code)
      return new PaymasterRateLimitError({
        cause: err
      });
    if (error.code === PaymasterStakeTooLowError.code)
      return new PaymasterStakeTooLowError({
        cause: err
      });
    if (error.code === SignatureCheckFailedError.code)
      return new SignatureCheckFailedError({
        cause: err
      });
    if (error.code === UnsupportedSignatureAggregatorError.code)
      return new UnsupportedSignatureAggregatorError({
        cause: err
      });
    if (error.code === UserOperationOutOfTimeRangeError.code)
      return new UserOperationOutOfTimeRangeError({
        cause: err
      });
    if (error.code === UserOperationRejectedByEntryPointError.code)
      return new UserOperationRejectedByEntryPointError({
        cause: err
      });
    if (error.code === UserOperationRejectedByPaymasterError.code)
      return new UserOperationRejectedByPaymasterError({
        cause: err
      });
    if (error.code === UserOperationRejectedByOpCodeError.code)
      return new UserOperationRejectedByOpCodeError({
        cause: err
      });
  }
  return new UnknownBundlerError({
    cause: err
  });
}
function getUserOperationError(err, { calls, docsPath: docsPath2, ...args }) {
  const cause = (() => {
    const cause2 = getBundlerError(err, args);
    if (calls && cause2 instanceof ExecutionRevertedError) {
      const revertData = getRevertData(cause2);
      const contractCalls = calls == null ? void 0 : calls.filter((call2) => call2.abi);
      if (revertData && contractCalls.length > 0)
        return getContractError({ calls: contractCalls, revertData });
    }
    return cause2;
  })();
  return new UserOperationExecutionError(cause, {
    docsPath: docsPath2,
    ...args
  });
}
function getRevertData(error) {
  let revertData;
  error.walk((e2) => {
    var _a, _b, _c, _d;
    const error2 = e2;
    if (typeof error2.data === "string" || typeof ((_a = error2.data) == null ? void 0 : _a.revertData) === "string" || !(error2 instanceof BaseError$3) && typeof error2.message === "string") {
      const match = (_d = (_c = ((_b = error2.data) == null ? void 0 : _b.revertData) || error2.data || error2.message).match) == null ? void 0 : _d.call(_c, /(0x[A-Za-z0-9]*)/);
      if (match) {
        revertData = match[1];
        return true;
      }
    }
    return false;
  });
  return revertData;
}
function getContractError(parameters) {
  const { calls, revertData } = parameters;
  const { abi: abi2, functionName, args, to } = (() => {
    const contractCalls = calls == null ? void 0 : calls.filter((call2) => Boolean(call2.abi));
    if (contractCalls.length === 1)
      return contractCalls[0];
    const compatContractCalls = contractCalls.filter((call2) => {
      try {
        return Boolean(decodeErrorResult({
          abi: call2.abi,
          data: revertData
        }));
      } catch {
        return false;
      }
    });
    if (compatContractCalls.length === 1)
      return compatContractCalls[0];
    return {
      abi: [],
      functionName: contractCalls.reduce((acc, call2) => `${acc ? `${acc} | ` : ""}${call2.functionName}`, ""),
      args: void 0,
      to: void 0
    };
  })();
  const cause = (() => {
    if (revertData === "0x")
      return new ContractFunctionZeroDataError({ functionName });
    return new ContractFunctionRevertedError({
      abi: abi2,
      data: revertData,
      functionName
    });
  })();
  return new ContractFunctionExecutionError(cause, {
    abi: abi2,
    args,
    contractAddress: to,
    functionName
  });
}
function formatUserOperationGas(parameters) {
  const gas = {};
  if (parameters.callGasLimit)
    gas.callGasLimit = BigInt(parameters.callGasLimit);
  if (parameters.preVerificationGas)
    gas.preVerificationGas = BigInt(parameters.preVerificationGas);
  if (parameters.verificationGasLimit)
    gas.verificationGasLimit = BigInt(parameters.verificationGasLimit);
  if (parameters.paymasterPostOpGasLimit)
    gas.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
  if (parameters.paymasterVerificationGasLimit)
    gas.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
  return gas;
}
function formatUserOperationRequest(request) {
  const rpcRequest = {};
  if (typeof request.callData !== "undefined")
    rpcRequest.callData = request.callData;
  if (typeof request.callGasLimit !== "undefined")
    rpcRequest.callGasLimit = numberToHex(request.callGasLimit);
  if (typeof request.factory !== "undefined")
    rpcRequest.factory = request.factory;
  if (typeof request.factoryData !== "undefined")
    rpcRequest.factoryData = request.factoryData;
  if (typeof request.initCode !== "undefined")
    rpcRequest.initCode = request.initCode;
  if (typeof request.maxFeePerGas !== "undefined")
    rpcRequest.maxFeePerGas = numberToHex(request.maxFeePerGas);
  if (typeof request.maxPriorityFeePerGas !== "undefined")
    rpcRequest.maxPriorityFeePerGas = numberToHex(request.maxPriorityFeePerGas);
  if (typeof request.nonce !== "undefined")
    rpcRequest.nonce = numberToHex(request.nonce);
  if (typeof request.paymaster !== "undefined")
    rpcRequest.paymaster = request.paymaster;
  if (typeof request.paymasterAndData !== "undefined")
    rpcRequest.paymasterAndData = request.paymasterAndData || "0x";
  if (typeof request.paymasterData !== "undefined")
    rpcRequest.paymasterData = request.paymasterData;
  if (typeof request.paymasterPostOpGasLimit !== "undefined")
    rpcRequest.paymasterPostOpGasLimit = numberToHex(request.paymasterPostOpGasLimit);
  if (typeof request.paymasterVerificationGasLimit !== "undefined")
    rpcRequest.paymasterVerificationGasLimit = numberToHex(request.paymasterVerificationGasLimit);
  if (typeof request.preVerificationGas !== "undefined")
    rpcRequest.preVerificationGas = numberToHex(request.preVerificationGas);
  if (typeof request.sender !== "undefined")
    rpcRequest.sender = request.sender;
  if (typeof request.signature !== "undefined")
    rpcRequest.signature = request.signature;
  if (typeof request.verificationGasLimit !== "undefined")
    rpcRequest.verificationGasLimit = numberToHex(request.verificationGasLimit);
  if (typeof request.authorization !== "undefined")
    rpcRequest.eip7702Auth = formatAuthorization(request.authorization);
  return rpcRequest;
}
function formatAuthorization(authorization) {
  return {
    address: authorization.address,
    chainId: numberToHex(authorization.chainId),
    nonce: numberToHex(authorization.nonce),
    r: authorization.r ? numberToHex(BigInt(authorization.r), { size: 32 }) : pad$2("0x", { size: 32 }),
    s: authorization.s ? numberToHex(BigInt(authorization.s), { size: 32 }) : pad$2("0x", { size: 32 }),
    yParity: authorization.yParity ? numberToHex(authorization.yParity, { size: 1 }) : pad$2("0x", { size: 32 })
  };
}
async function getPaymasterData(client, parameters) {
  const { chainId, entryPointAddress, context, ...userOperation } = parameters;
  const request = formatUserOperationRequest(userOperation);
  const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
    method: "pm_getPaymasterData",
    params: [
      {
        ...request,
        callGasLimit: request.callGasLimit ?? "0x0",
        verificationGasLimit: request.verificationGasLimit ?? "0x0",
        preVerificationGas: request.preVerificationGas ?? "0x0"
      },
      entryPointAddress,
      numberToHex(chainId),
      context
    ]
  });
  return {
    ...rest,
    ...paymasterPostOpGasLimit && {
      paymasterPostOpGasLimit: hexToBigInt(paymasterPostOpGasLimit)
    },
    ...paymasterVerificationGasLimit && {
      paymasterVerificationGasLimit: hexToBigInt(paymasterVerificationGasLimit)
    }
  };
}
async function getPaymasterStubData(client, parameters) {
  const { chainId, entryPointAddress, context, ...userOperation } = parameters;
  const request = formatUserOperationRequest(userOperation);
  const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
    method: "pm_getPaymasterStubData",
    params: [
      {
        ...request,
        callGasLimit: request.callGasLimit ?? "0x0",
        verificationGasLimit: request.verificationGasLimit ?? "0x0",
        preVerificationGas: request.preVerificationGas ?? "0x0"
      },
      entryPointAddress,
      numberToHex(chainId),
      context
    ]
  });
  return {
    ...rest,
    ...paymasterPostOpGasLimit && {
      paymasterPostOpGasLimit: hexToBigInt(paymasterPostOpGasLimit)
    },
    ...paymasterVerificationGasLimit && {
      paymasterVerificationGasLimit: hexToBigInt(paymasterVerificationGasLimit)
    }
  };
}
const defaultParameters = [
  "factory",
  "fees",
  "gas",
  "paymaster",
  "nonce",
  "signature",
  "authorization"
];
async function prepareUserOperation(client, parameters_) {
  var _a;
  const parameters = parameters_;
  const { account: account_ = client.account, parameters: properties = defaultParameters, stateOverride } = parameters;
  if (!account_)
    throw new AccountNotFoundError();
  const account2 = parseAccount(account_);
  const bundlerClient = client;
  const paymaster = parameters.paymaster ?? (bundlerClient == null ? void 0 : bundlerClient.paymaster);
  const paymasterAddress = typeof paymaster === "string" ? paymaster : void 0;
  const { getPaymasterStubData: getPaymasterStubData$1, getPaymasterData: getPaymasterData$1 } = (() => {
    if (paymaster === true)
      return {
        getPaymasterStubData: (parameters2) => getAction(bundlerClient, getPaymasterStubData, "getPaymasterStubData")(parameters2),
        getPaymasterData: (parameters2) => getAction(bundlerClient, getPaymasterData, "getPaymasterData")(parameters2)
      };
    if (typeof paymaster === "object") {
      const { getPaymasterStubData: getPaymasterStubData2, getPaymasterData: getPaymasterData2 } = paymaster;
      return {
        getPaymasterStubData: getPaymasterData2 && getPaymasterStubData2 ? getPaymasterStubData2 : getPaymasterData2,
        getPaymasterData: getPaymasterData2 && getPaymasterStubData2 ? getPaymasterData2 : void 0
      };
    }
    return {
      getPaymasterStubData: void 0,
      getPaymasterData: void 0
    };
  })();
  const paymasterContext = parameters.paymasterContext ? parameters.paymasterContext : bundlerClient == null ? void 0 : bundlerClient.paymasterContext;
  let request = {
    ...parameters,
    paymaster: paymasterAddress,
    sender: account2.address
  };
  const [callData, factory, fees, nonce, authorization] = await Promise.all([
    (async () => {
      if (parameters.calls)
        return account2.encodeCalls(parameters.calls.map((call_) => {
          const call2 = call_;
          if (call2.abi)
            return {
              data: encodeFunctionData(call2),
              to: call2.to,
              value: call2.value
            };
          return call2;
        }));
      return parameters.callData;
    })(),
    (async () => {
      if (!properties.includes("factory"))
        return void 0;
      if (parameters.initCode)
        return { initCode: parameters.initCode };
      if (parameters.factory && parameters.factoryData) {
        return {
          factory: parameters.factory,
          factoryData: parameters.factoryData
        };
      }
      const { factory: factory2, factoryData } = await account2.getFactoryArgs();
      if (account2.entryPoint.version === "0.6")
        return {
          initCode: factory2 && factoryData ? concat$2([factory2, factoryData]) : void 0
        };
      return {
        factory: factory2,
        factoryData
      };
    })(),
    (async () => {
      var _a2;
      if (!properties.includes("fees"))
        return void 0;
      if (typeof parameters.maxFeePerGas === "bigint" && typeof parameters.maxPriorityFeePerGas === "bigint")
        return request;
      if ((_a2 = bundlerClient == null ? void 0 : bundlerClient.userOperation) == null ? void 0 : _a2.estimateFeesPerGas) {
        const fees2 = await bundlerClient.userOperation.estimateFeesPerGas({
          account: account2,
          bundlerClient,
          userOperation: request
        });
        return {
          ...request,
          ...fees2
        };
      }
      try {
        const client_ = bundlerClient.client ?? client;
        const fees2 = await getAction(client_, estimateFeesPerGas, "estimateFeesPerGas")({
          chain: client_.chain,
          type: "eip1559"
        });
        return {
          maxFeePerGas: typeof parameters.maxFeePerGas === "bigint" ? parameters.maxFeePerGas : BigInt(
            // Bundlers unfortunately have strict rules on fee prechecks – we will need to set a generous buffer.
            2n * fees2.maxFeePerGas
          ),
          maxPriorityFeePerGas: typeof parameters.maxPriorityFeePerGas === "bigint" ? parameters.maxPriorityFeePerGas : BigInt(
            // Bundlers unfortunately have strict rules on fee prechecks – we will need to set a generous buffer.
            2n * fees2.maxPriorityFeePerGas
          )
        };
      } catch {
        return void 0;
      }
    })(),
    (async () => {
      if (!properties.includes("nonce"))
        return void 0;
      if (typeof parameters.nonce === "bigint")
        return parameters.nonce;
      return account2.getNonce();
    })(),
    (async () => {
      if (!properties.includes("authorization"))
        return void 0;
      if (typeof parameters.authorization === "object")
        return parameters.authorization;
      if (account2.authorization && !await account2.isDeployed()) {
        const authorization2 = await prepareAuthorization(account2.client, account2.authorization);
        return {
          ...authorization2,
          r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
          s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          yParity: 1
        };
      }
      return void 0;
    })()
  ]);
  if (typeof callData !== "undefined")
    request.callData = callData;
  if (typeof factory !== "undefined")
    request = { ...request, ...factory };
  if (typeof fees !== "undefined")
    request = { ...request, ...fees };
  if (typeof nonce !== "undefined")
    request.nonce = nonce;
  if (typeof authorization !== "undefined")
    request.authorization = authorization;
  if (properties.includes("signature")) {
    if (typeof parameters.signature !== "undefined")
      request.signature = parameters.signature;
    else
      request.signature = await account2.getStubSignature(request);
  }
  if (account2.entryPoint.version === "0.6" && !request.initCode)
    request.initCode = "0x";
  let chainId;
  async function getChainId$1() {
    if (chainId)
      return chainId;
    if (client.chain)
      return client.chain.id;
    const chainId_ = await getAction(client, getChainId, "getChainId")({});
    chainId = chainId_;
    return chainId;
  }
  let isPaymasterPopulated = false;
  if (properties.includes("paymaster") && getPaymasterStubData$1 && !paymasterAddress && !parameters.paymasterAndData) {
    const { isFinal = false, sponsor: _2, ...paymasterArgs } = await getPaymasterStubData$1({
      chainId: await getChainId$1(),
      entryPointAddress: account2.entryPoint.address,
      context: paymasterContext,
      ...request
    });
    isPaymasterPopulated = isFinal;
    request = {
      ...request,
      ...paymasterArgs
    };
  }
  if (account2.entryPoint.version === "0.6" && !request.paymasterAndData)
    request.paymasterAndData = "0x";
  if (properties.includes("gas")) {
    if ((_a = account2.userOperation) == null ? void 0 : _a.estimateGas) {
      const gas = await account2.userOperation.estimateGas(request);
      request = {
        ...request,
        ...gas
      };
    }
    if (typeof request.callGasLimit === "undefined" || typeof request.preVerificationGas === "undefined" || typeof request.verificationGasLimit === "undefined" || request.paymaster && typeof request.paymasterPostOpGasLimit === "undefined" || request.paymaster && typeof request.paymasterVerificationGasLimit === "undefined") {
      const gas = await getAction(bundlerClient, estimateUserOperationGas, "estimateUserOperationGas")({
        account: account2,
        // Some Bundlers fail if nullish gas values are provided for gas estimation :') –
        // so we will need to set a default zeroish value.
        callGasLimit: 0n,
        preVerificationGas: 0n,
        verificationGasLimit: 0n,
        stateOverride,
        ...request.paymaster ? {
          paymasterPostOpGasLimit: 0n,
          paymasterVerificationGasLimit: 0n
        } : {},
        ...request
      });
      request = {
        ...request,
        callGasLimit: request.callGasLimit ?? gas.callGasLimit,
        preVerificationGas: request.preVerificationGas ?? gas.preVerificationGas,
        verificationGasLimit: request.verificationGasLimit ?? gas.verificationGasLimit,
        paymasterPostOpGasLimit: request.paymasterPostOpGasLimit ?? gas.paymasterPostOpGasLimit,
        paymasterVerificationGasLimit: request.paymasterVerificationGasLimit ?? gas.paymasterVerificationGasLimit
      };
    }
  }
  if (properties.includes("paymaster") && getPaymasterData$1 && !paymasterAddress && !parameters.paymasterAndData && !isPaymasterPopulated) {
    const paymaster2 = await getPaymasterData$1({
      chainId: await getChainId$1(),
      entryPointAddress: account2.entryPoint.address,
      context: paymasterContext,
      ...request
    });
    request = {
      ...request,
      ...paymaster2
    };
  }
  delete request.calls;
  delete request.parameters;
  delete request.paymasterContext;
  if (typeof request.paymaster !== "string")
    delete request.paymaster;
  return request;
}
async function estimateUserOperationGas(client, parameters) {
  var _a;
  const { account: account_ = client.account, entryPointAddress, stateOverride } = parameters;
  if (!account_ && !parameters.sender)
    throw new AccountNotFoundError();
  const account2 = account_ ? parseAccount(account_) : void 0;
  const rpcStateOverride = serializeStateOverride(stateOverride);
  const request = account2 ? await getAction(client, prepareUserOperation, "prepareUserOperation")({
    ...parameters,
    parameters: [
      "authorization",
      "factory",
      "nonce",
      "paymaster",
      "signature"
    ]
  }) : parameters;
  try {
    const params = [
      formatUserOperationRequest(request),
      entryPointAddress ?? ((_a = account2 == null ? void 0 : account2.entryPoint) == null ? void 0 : _a.address)
    ];
    const result = await client.request({
      method: "eth_estimateUserOperationGas",
      params: rpcStateOverride ? [...params, rpcStateOverride] : [...params]
    });
    return formatUserOperationGas(result);
  } catch (error) {
    const calls = parameters.calls;
    throw getUserOperationError(error, {
      ...request,
      ...calls ? { calls } : {}
    });
  }
}
function getSupportedEntryPoints(client) {
  return client.request({ method: "eth_supportedEntryPoints" });
}
function formatUserOperation(parameters) {
  const userOperation = { ...parameters };
  if (parameters.callGasLimit)
    userOperation.callGasLimit = BigInt(parameters.callGasLimit);
  if (parameters.maxFeePerGas)
    userOperation.maxFeePerGas = BigInt(parameters.maxFeePerGas);
  if (parameters.maxPriorityFeePerGas)
    userOperation.maxPriorityFeePerGas = BigInt(parameters.maxPriorityFeePerGas);
  if (parameters.nonce)
    userOperation.nonce = BigInt(parameters.nonce);
  if (parameters.paymasterPostOpGasLimit)
    userOperation.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
  if (parameters.paymasterVerificationGasLimit)
    userOperation.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
  if (parameters.preVerificationGas)
    userOperation.preVerificationGas = BigInt(parameters.preVerificationGas);
  if (parameters.verificationGasLimit)
    userOperation.verificationGasLimit = BigInt(parameters.verificationGasLimit);
  return userOperation;
}
async function getUserOperation(client, { hash: hash2 }) {
  const result = await client.request({
    method: "eth_getUserOperationByHash",
    params: [hash2]
  }, { dedupe: true });
  if (!result)
    throw new UserOperationNotFoundError({ hash: hash2 });
  const { blockHash, blockNumber, entryPoint, transactionHash, userOperation } = result;
  return {
    blockHash,
    blockNumber: BigInt(blockNumber),
    entryPoint,
    transactionHash,
    userOperation: formatUserOperation(userOperation)
  };
}
function formatUserOperationReceipt(parameters) {
  const receipt = { ...parameters };
  if (parameters.actualGasCost)
    receipt.actualGasCost = BigInt(parameters.actualGasCost);
  if (parameters.actualGasUsed)
    receipt.actualGasUsed = BigInt(parameters.actualGasUsed);
  if (parameters.logs)
    receipt.logs = parameters.logs.map((log) => formatLog(log));
  if (parameters.receipt)
    receipt.receipt = formatTransactionReceipt(receipt.receipt);
  return receipt;
}
async function getUserOperationReceipt(client, { hash: hash2 }) {
  const receipt = await client.request({
    method: "eth_getUserOperationReceipt",
    params: [hash2]
  }, { dedupe: true });
  if (!receipt)
    throw new UserOperationReceiptNotFoundError({ hash: hash2 });
  return formatUserOperationReceipt(receipt);
}
async function sendUserOperation(client, parameters) {
  var _a, _b;
  const { account: account_ = client.account, entryPointAddress } = parameters;
  if (!account_ && !parameters.sender)
    throw new AccountNotFoundError();
  const account2 = account_ ? parseAccount(account_) : void 0;
  const request = account2 ? await getAction(client, prepareUserOperation, "prepareUserOperation")(parameters) : parameters;
  const signature = parameters.signature || await ((_a = account2 == null ? void 0 : account2.signUserOperation) == null ? void 0 : _a.call(account2, request));
  const rpcParameters = formatUserOperationRequest({
    ...request,
    signature
  });
  try {
    return await client.request({
      method: "eth_sendUserOperation",
      params: [
        rpcParameters,
        entryPointAddress ?? ((_b = account2 == null ? void 0 : account2.entryPoint) == null ? void 0 : _b.address)
      ]
    }, { retryCount: 0 });
  } catch (error) {
    const calls = parameters.calls;
    throw getUserOperationError(error, {
      ...request,
      ...calls ? { calls } : {},
      signature
    });
  }
}
function waitForUserOperationReceipt(client, parameters) {
  const { hash: hash2, pollingInterval = client.pollingInterval, retryCount, timeout = 12e4 } = parameters;
  let count = 0;
  const observerId = stringify$2([
    "waitForUserOperationReceipt",
    client.uid,
    hash2
  ]);
  return new Promise((resolve, reject) => {
    const unobserve = observe(observerId, { resolve, reject }, (emit) => {
      const done = (fn) => {
        unpoll();
        fn();
        unobserve();
      };
      const unpoll = poll(async () => {
        if (retryCount && count >= retryCount)
          done(() => emit.reject(new WaitForUserOperationReceiptTimeoutError({ hash: hash2 })));
        try {
          const receipt = await getAction(client, getUserOperationReceipt, "getUserOperationReceipt")({ hash: hash2 });
          done(() => emit.resolve(receipt));
        } catch (err) {
          const error = err;
          if (error.name !== "UserOperationReceiptNotFoundError")
            done(() => emit.reject(error));
        }
        count++;
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      if (timeout)
        setTimeout(() => done(() => emit.reject(new WaitForUserOperationReceiptTimeoutError({ hash: hash2 }))), timeout);
      return unpoll;
    });
  });
}
function bundlerActions(client) {
  return {
    estimateUserOperationGas: (parameters) => estimateUserOperationGas(client, parameters),
    getChainId: () => getChainId(client),
    getSupportedEntryPoints: () => getSupportedEntryPoints(client),
    getUserOperation: (parameters) => getUserOperation(client, parameters),
    getUserOperationReceipt: (parameters) => getUserOperationReceipt(client, parameters),
    prepareUserOperation: (parameters) => prepareUserOperation(client, parameters),
    sendUserOperation: (parameters) => sendUserOperation(client, parameters),
    waitForUserOperationReceipt: (parameters) => waitForUserOperationReceipt(client, parameters)
  };
}
function createBundlerClient(parameters) {
  const { client: client_, key = "bundler", name = "Bundler Client", paymaster, paymasterContext, transport, userOperation } = parameters;
  const client = Object.assign(createClient({
    ...parameters,
    chain: parameters.chain ?? (client_ == null ? void 0 : client_.chain),
    key,
    name,
    transport,
    type: "bundlerClient"
  }), { client: client_, paymaster, paymasterContext, userOperation });
  return client.extend(bundlerActions);
}
const entryPoint06Address = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const version = "0.1.1";
function getVersion() {
  return version;
}
class BaseError2 extends Error {
  constructor(shortMessage, options = {}) {
    const details = (() => {
      var _a;
      if (options.cause instanceof BaseError2) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if ((_a = options.cause) == null ? void 0 : _a.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath2 = (() => {
      if (options.cause instanceof BaseError2)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = "https://oxlib.sh";
    const docs = `${docsBaseUrl}${docsPath2 ?? ""}`;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath2 ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath2 ? `See: ${docs}` : void 0
      ] : []
    ].filter((x2) => typeof x2 === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: `ox@${getVersion()}`
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsPath = docsPath2;
    this.shortMessage = shortMessage;
  }
  walk(fn) {
    return walk(this, fn);
  }
}
function walk(err, fn) {
  if (fn == null ? void 0 : fn(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn);
  return fn ? null : err;
}
const bigIntSuffix = "#__bigint";
function stringify(value, replacer, space) {
  return JSON.stringify(value, (key, value2) => {
    if (typeof value2 === "bigint")
      return value2.toString() + bigIntSuffix;
    return value2;
  }, space);
}
function assertSize$1(bytes2, size_) {
  if (size(bytes2) > size_)
    throw new SizeOverflowError3({
      givenSize: size(bytes2),
      maxSize: size_
    });
}
function assertStartOffset$1(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError2({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset$1(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError2({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
const charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function assertSize(hex, size_) {
  if (size$1(hex) > size_)
    throw new SizeOverflowError$1({
      givenSize: size$1(hex),
      maxSize: size_
    });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size$1(value) - 1)
    throw new SliceOffsetOutOfBoundsError$1({
      offset: start,
      position: "start",
      size: size$1(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size$1(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError$1({
      offset: end,
      position: "end",
      size: size$1(value)
    });
  }
}
function pad(hex_, options = {}) {
  const { dir, size: size2 = 32 } = options;
  if (size2 === 0)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError2({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "Hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
const encoder = /* @__PURE__ */ new TextEncoder();
const hexes$1 = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i2) => i2.toString(16).padStart(2, "0"));
function assert$4(value, options = {}) {
  const { strict = false } = options;
  if (!value)
    throw new InvalidHexTypeError(value);
  if (typeof value !== "string")
    throw new InvalidHexTypeError(value);
  if (strict) {
    if (!/^0x[0-9a-fA-F]*$/.test(value))
      throw new InvalidHexValueError(value);
  }
  if (!value.startsWith("0x"))
    throw new InvalidHexValueError(value);
}
function concat(...values) {
  return `0x${values.reduce((acc, x2) => acc + x2.replace("0x", ""), "")}`;
}
function from$2(value) {
  if (value instanceof Uint8Array)
    return fromBytes$2(value);
  if (Array.isArray(value))
    return fromBytes$2(new Uint8Array(value));
  return value;
}
function fromBytes$2(value, options = {}) {
  let string = "";
  for (let i2 = 0; i2 < value.length; i2++)
    string += hexes$1[value[i2]];
  const hex = `0x${string}`;
  if (typeof options.size === "number") {
    assertSize(hex, options.size);
    return padRight(hex, options.size);
  }
  return hex;
}
function fromNumber(value, options = {}) {
  const { signed, size: size2 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size2) {
    if (signed)
      maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size2) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value_) : value_).toString(16);
  const hex = `0x${stringValue}`;
  if (size2)
    return padLeft(hex, size2);
  return hex;
}
function fromString(value, options = {}) {
  return fromBytes$2(encoder.encode(value), options);
}
function padLeft(value, size2) {
  return pad(value, { dir: "left", size: size2 });
}
function padRight(value, size2) {
  return pad(value, { dir: "right", size: size2 });
}
function slice$1(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset(value, start);
  const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
  if (strict)
    assertEndOffset(value_, start, end);
  return value_;
}
function size$1(value) {
  return Math.ceil((value.length - 2) / 2);
}
function toBigInt$1(hex, options = {}) {
  const { signed } = options;
  if (options.size)
    assertSize(hex, options.size);
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size2 = (hex.length - 2) / 2;
  const max_unsigned = (1n << BigInt(size2) * 8n) - 1n;
  const max_signed = max_unsigned >> 1n;
  if (value <= max_signed)
    return value;
  return value - max_unsigned - 1n;
}
function validate$1(value, options = {}) {
  const { strict = false } = options;
  try {
    assert$4(value, { strict });
    return true;
  } catch {
    return false;
  }
}
class IntegerOutOfRangeError extends BaseError2 {
  constructor({ max, min, signed, size: size2, value }) {
    super(`Number \`${value}\` is not in safe${size2 ? ` ${size2 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
}
class InvalidHexTypeError extends BaseError2 {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
      metaMessages: ['Hex types must be represented as `"0x${string}"`.']
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexTypeError"
    });
  }
}
class InvalidHexValueError extends BaseError2 {
  constructor(value) {
    super(`Value \`${value}\` is an invalid hex value.`, {
      metaMessages: [
        'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexValueError"
    });
  }
}
let SizeOverflowError$1 = class SizeOverflowError2 extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeOverflowError"
    });
  }
};
let SliceOffsetOutOfBoundsError$1 = class SliceOffsetOutOfBoundsError extends BaseError2 {
  constructor({ offset, position, size: size2 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size2}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SliceOffsetOutOfBoundsError"
    });
  }
};
class SizeExceedsPaddingSizeError2 extends BaseError2 {
  constructor({ size: size2, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size2}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
}
function assert$3(value) {
  if (value instanceof Uint8Array)
    return;
  if (!value)
    throw new InvalidBytesTypeError(value);
  if (typeof value !== "object")
    throw new InvalidBytesTypeError(value);
  if (!("BYTES_PER_ELEMENT" in value))
    throw new InvalidBytesTypeError(value);
  if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array")
    throw new InvalidBytesTypeError(value);
}
function from$1(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex$3(value);
  return fromArray(value);
}
function fromArray(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex$3(value, options = {}) {
  const { size: size2 } = options;
  let hex = value;
  if (size2) {
    assertSize(value, size2);
    hex = padRight(value, size2);
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes2 = new Uint8Array(length);
  for (let index = 0, j2 = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j2++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j2++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError2(`Invalid byte sequence ("${hexString[j2 - 2]}${hexString[j2 - 1]}" in "${hexString}").`);
    }
    bytes2[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes2;
}
function size(value) {
  return value.length;
}
function slice(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset$1(value, start);
  const value_ = value.slice(start, end);
  if (strict)
    assertEndOffset$1(value_, start, end);
  return value_;
}
function toBigInt(bytes2, options = {}) {
  const { size: size2 } = options;
  if (typeof size2 !== "undefined")
    assertSize$1(bytes2, size2);
  const hex = fromBytes$2(bytes2, options);
  return toBigInt$1(hex, options);
}
function validate(value) {
  try {
    assert$3(value);
    return true;
  } catch {
    return false;
  }
}
class InvalidBytesTypeError extends BaseError2 {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
      metaMessages: ["Bytes values must be of type `Bytes`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesTypeError"
    });
  }
}
class SizeOverflowError3 extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
}
class SliceOffsetOutOfBoundsError2 extends BaseError2 {
  constructor({ offset, position, size: size2 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size2}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SliceOffsetOutOfBoundsError"
    });
  }
}
function sha256$1(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes2 = sha256$2(from$1(value));
  if (as === "Bytes")
    return bytes2;
  return fromBytes$2(bytes2);
}
function assert$2(publicKey, options = {}) {
  const { compressed } = options;
  const { prefix, x: x2, y: y2 } = publicKey;
  if (compressed === false || typeof x2 === "bigint" && typeof y2 === "bigint") {
    if (prefix !== 4)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidUncompressedPrefixError()
      });
    return;
  }
  if (compressed === true || typeof x2 === "bigint" && typeof y2 === "undefined") {
    if (prefix !== 3 && prefix !== 2)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidCompressedPrefixError()
      });
    return;
  }
  throw new InvalidError({ publicKey });
}
function from(value) {
  const publicKey = (() => {
    if (validate$1(value))
      return fromHex$2(value);
    if (validate(value))
      return fromBytes$1(value);
    const { prefix, x: x2, y: y2 } = value;
    if (typeof x2 === "bigint" && typeof y2 === "bigint")
      return { prefix: prefix ?? 4, x: x2, y: y2 };
    return { prefix, x: x2 };
  })();
  assert$2(publicKey);
  return publicKey;
}
function fromBytes$1(publicKey) {
  return fromHex$2(fromBytes$2(publicKey));
}
function fromHex$2(publicKey) {
  if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68)
    throw new InvalidSerializedSizeError$1({ publicKey });
  if (publicKey.length === 130) {
    const x3 = BigInt(slice$1(publicKey, 0, 32));
    const y2 = BigInt(slice$1(publicKey, 32, 64));
    return {
      prefix: 4,
      x: x3,
      y: y2
    };
  }
  if (publicKey.length === 132) {
    const prefix2 = Number(slice$1(publicKey, 0, 1));
    const x3 = BigInt(slice$1(publicKey, 1, 33));
    const y2 = BigInt(slice$1(publicKey, 33, 65));
    return {
      prefix: prefix2,
      x: x3,
      y: y2
    };
  }
  const prefix = Number(slice$1(publicKey, 0, 1));
  const x2 = BigInt(slice$1(publicKey, 1, 33));
  return {
    prefix,
    x: x2
  };
}
function toHex$1(publicKey, options = {}) {
  assert$2(publicKey);
  const { prefix, x: x2, y: y2 } = publicKey;
  const { includePrefix = true } = options;
  const publicKey_ = concat(
    includePrefix ? fromNumber(prefix, { size: 1 }) : "0x",
    fromNumber(x2, { size: 32 }),
    // If the public key is not compressed, add the y coordinate.
    typeof y2 === "bigint" ? fromNumber(y2, { size: 32 }) : "0x"
  );
  return publicKey_;
}
class InvalidError extends BaseError2 {
  constructor({ publicKey }) {
    super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, {
      metaMessages: [
        "Public key must contain:",
        "- an `x` and `prefix` value (compressed)",
        "- an `x`, `y`, and `prefix` value (uncompressed)"
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidError"
    });
  }
}
class InvalidPrefixError extends BaseError2 {
  constructor({ prefix, cause }) {
    super(`Prefix "${prefix}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidPrefixError"
    });
  }
}
class InvalidCompressedPrefixError extends BaseError2 {
  constructor() {
    super("Prefix must be 2 or 3 for compressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidCompressedPrefixError"
    });
  }
}
class InvalidUncompressedPrefixError extends BaseError2 {
  constructor() {
    super("Prefix must be 4 for uncompressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidUncompressedPrefixError"
    });
  }
}
let InvalidSerializedSizeError$1 = class InvalidSerializedSizeError2 extends BaseError2 {
  constructor({ publicKey }) {
    super(`Value \`${publicKey}\` is an invalid public key size.`, {
      metaMessages: [
        "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
        `Received ${size$1(from$2(publicKey))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidSerializedSizeError"
    });
  }
};
const maxUint256 = 2n ** 256n - 1n;
function assert$1(signature, options = {}) {
  const { recovered } = options;
  if (typeof signature.r === "undefined")
    throw new MissingPropertiesError2({ signature });
  if (typeof signature.s === "undefined")
    throw new MissingPropertiesError2({ signature });
  if (recovered && typeof signature.yParity === "undefined")
    throw new MissingPropertiesError2({ signature });
  if (signature.r < 0n || signature.r > maxUint256)
    throw new InvalidRError2({ value: signature.r });
  if (signature.s < 0n || signature.s > maxUint256)
    throw new InvalidSError2({ value: signature.s });
  if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
    throw new InvalidYParityError2({ value: signature.yParity });
}
function fromHex$1(signature) {
  if (signature.length !== 130 && signature.length !== 132)
    throw new InvalidSerializedSizeError3({ signature });
  const r2 = BigInt(slice$1(signature, 0, 32));
  const s2 = BigInt(slice$1(signature, 32, 64));
  const yParity = (() => {
    const yParity2 = Number(`0x${signature.slice(130)}`);
    if (Number.isNaN(yParity2))
      return void 0;
    try {
      return vToYParity(yParity2);
    } catch {
      throw new InvalidYParityError2({ value: yParity2 });
    }
  })();
  if (typeof yParity === "undefined")
    return {
      r: r2,
      s: s2
    };
  return {
    r: r2,
    s: s2,
    yParity
  };
}
function toHex(signature) {
  assert$1(signature);
  const r2 = signature.r;
  const s2 = signature.s;
  const signature_ = concat(
    fromNumber(r2, { size: 32 }),
    fromNumber(s2, { size: 32 }),
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === "number" ? fromNumber(yParityToV(signature.yParity), { size: 1 }) : "0x"
  );
  return signature_;
}
function vToYParity(v2) {
  if (v2 === 0 || v2 === 27)
    return 0;
  if (v2 === 1 || v2 === 28)
    return 1;
  if (v2 >= 35)
    return v2 % 2 === 0 ? 1 : 0;
  throw new InvalidVError2({ value: v2 });
}
function yParityToV(yParity) {
  if (yParity === 0)
    return 27;
  if (yParity === 1)
    return 28;
  throw new InvalidYParityError2({ value: yParity });
}
class InvalidSerializedSizeError3 extends BaseError2 {
  constructor({ signature }) {
    super(`Value \`${signature}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${size$1(from$2(signature))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
}
class MissingPropertiesError2 extends BaseError2 {
  constructor({ signature }) {
    super(`Signature \`${stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.MissingPropertiesError"
    });
  }
}
class InvalidRError2 extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidRError"
    });
  }
}
class InvalidSError2 extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSError"
    });
  }
}
class InvalidYParityError2 extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidYParityError"
    });
  }
}
class InvalidVError2 extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidVError"
    });
  }
}
const decoder = /* @__PURE__ */ new TextDecoder();
const integerToCharacter = /* @__PURE__ */ Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a2, i2) => [i2, a2.charCodeAt(0)]));
({
  ...Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a2, i2) => [a2.charCodeAt(0), i2]))
});
function fromBytes(value, options = {}) {
  const { pad: pad2 = true, url = false } = options;
  const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
  for (let i2 = 0, j2 = 0; j2 < value.length; i2 += 4, j2 += 3) {
    const y2 = (value[j2] << 16) + (value[j2 + 1] << 8) + (value[j2 + 2] | 0);
    encoded[i2] = integerToCharacter[y2 >> 18];
    encoded[i2 + 1] = integerToCharacter[y2 >> 12 & 63];
    encoded[i2 + 2] = integerToCharacter[y2 >> 6 & 63];
    encoded[i2 + 3] = integerToCharacter[y2 & 63];
  }
  const k2 = value.length % 3;
  const end = Math.floor(value.length / 3) * 4 + (k2 && k2 + 1);
  let base64 = decoder.decode(new Uint8Array(encoded.buffer, 0, end));
  if (pad2 && k2 === 1)
    base64 += "==";
  if (pad2 && k2 === 2)
    base64 += "=";
  if (url)
    base64 = base64.replaceAll("+", "-").replaceAll("/", "_");
  return base64;
}
function fromHex(value, options = {}) {
  return fromBytes(fromHex$3(value), options);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const p256_CURVE = {
  p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
  n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
  h: BigInt(1),
  a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
  b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
  Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
  Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
};
const p384_CURVE = {
  p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
  n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
  h: BigInt(1),
  a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
  b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
  Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
  Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
};
const p521_CURVE = {
  p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
  n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
  h: BigInt(1),
  a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
  b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
  Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
  Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
};
const Fp256 = Field(p256_CURVE.p);
const Fp384 = Field(p384_CURVE.p);
const Fp521 = Field(p521_CURVE.p);
const p256$1 = createCurve({ ...p256_CURVE, Fp: Fp256, lowS: false }, sha256$3);
createCurve({ ...p384_CURVE, Fp: Fp384, lowS: false }, sha384);
createCurve({ ...p521_CURVE, Fp: Fp521, lowS: false, allowedPrivateKeyLengths: [130, 131, 132] }, sha512);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const p256 = p256$1;
Uint8Array.from([
  105,
  171,
  180,
  181,
  160,
  222,
  75,
  198,
  42,
  42,
  32,
  31,
  141,
  37,
  186,
  233
]);
function getAuthenticatorData(options = {}) {
  const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
  const rpIdHash = sha256$1(fromString(rpId));
  const flag_bytes = fromNumber(flag, { size: 1 });
  const signCount_bytes = fromNumber(signCount, { size: 4 });
  return concat(rpIdHash, flag_bytes, signCount_bytes);
}
function getClientDataJSON(options) {
  const { challenge, crossOrigin = false, extraClientData, origin = window.location.origin } = options;
  return JSON.stringify({
    type: "webauthn.get",
    challenge: fromHex(challenge, { url: true, pad: false }),
    origin,
    crossOrigin,
    ...extraClientData
  });
}
function getSignPayload(options) {
  const { challenge, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = "required" } = options;
  const authenticatorData = getAuthenticatorData({
    flag,
    rpId,
    signCount
  });
  const clientDataJSON = getClientDataJSON({
    challenge,
    crossOrigin,
    extraClientData,
    origin
  });
  const clientDataJSONHash = sha256$1(fromString(clientDataJSON));
  const challengeIndex = clientDataJSON.indexOf('"challenge"');
  const typeIndex = clientDataJSON.indexOf('"type"');
  const metadata = {
    authenticatorData,
    clientDataJSON,
    challengeIndex,
    typeIndex,
    userVerificationRequired: userVerification === "required"
  };
  const payload = concat(authenticatorData, clientDataJSONHash);
  return { metadata, payload };
}
async function createKeyPair(options = {}) {
  const { extractable = false } = options;
  const keypair = await globalThis.crypto.subtle.generateKey({
    name: "ECDSA",
    namedCurve: "P-256"
  }, extractable, ["sign", "verify"]);
  const publicKey_raw = await globalThis.crypto.subtle.exportKey("raw", keypair.publicKey);
  const publicKey = from(new Uint8Array(publicKey_raw));
  return {
    privateKey: keypair.privateKey,
    publicKey
  };
}
async function sign$1(options) {
  const { payload, privateKey } = options;
  const signature = await globalThis.crypto.subtle.sign({
    name: "ECDSA",
    hash: "SHA-256"
  }, privateKey, from$1(payload));
  const signature_bytes = fromArray(new Uint8Array(signature));
  const r2 = toBigInt(slice(signature_bytes, 0, 32));
  let s2 = toBigInt(slice(signature_bytes, 32, 64));
  if (s2 > p256.CURVE.n / 2n)
    s2 = p256.CURVE.n - s2;
  return { r: r2, s: s2 };
}
const VERSION = "4.3.6";
const NAME = "@coinbase/wallet-sdk";
const createChainSlice = () => {
  return {
    chains: []
  };
};
const createKeysSlice = () => {
  return {
    keys: {}
  };
};
const createAccountSlice = () => {
  return {
    account: {}
  };
};
const createSubAccountSlice = () => {
  return {
    subAccount: void 0
  };
};
const createSubAccountConfigSlice = () => {
  return {
    subAccountConfig: {}
  };
};
const createSpendPermissionsSlice = () => {
  return {
    spendPermissions: []
  };
};
const createConfigSlice = () => {
  return {
    config: {
      version: VERSION
    }
  };
};
const sdkstore = createStore$1(persist((...args) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, createChainSlice(...args)), createKeysSlice(...args)), createAccountSlice(...args)), createSubAccountSlice(...args)), createSpendPermissionsSlice(...args)), createConfigSlice(...args)), createSubAccountConfigSlice(...args)), {
  name: "cbwsdk.store",
  storage: createJSONStorage(() => localStorage),
  partialize: (state) => {
    return {
      chains: state.chains,
      keys: state.keys,
      account: state.account,
      subAccount: state.subAccount,
      spendPermissions: state.spendPermissions,
      config: state.config
    };
  }
}));
const subAccountsConfig = {
  get: () => sdkstore.getState().subAccountConfig,
  set: (subAccountConfig) => {
    sdkstore.setState((state) => ({
      subAccountConfig: Object.assign(Object.assign({}, state.subAccountConfig), subAccountConfig)
    }));
  },
  clear: () => {
    sdkstore.setState({
      subAccountConfig: {}
    });
  }
};
const subAccounts = {
  get: () => sdkstore.getState().subAccount,
  set: (subAccount) => {
    sdkstore.setState((state) => ({
      subAccount: state.subAccount ? Object.assign(Object.assign({}, state.subAccount), subAccount) : Object.assign({ address: subAccount.address }, subAccount)
    }));
  },
  clear: () => {
    sdkstore.setState({
      subAccount: void 0
    });
  }
};
const spendPermissions = {
  get: () => sdkstore.getState().spendPermissions,
  set: (spendPermissions2) => {
    sdkstore.setState({ spendPermissions: spendPermissions2 });
  },
  clear: () => {
    sdkstore.setState({
      spendPermissions: []
    });
  }
};
const account = {
  get: () => sdkstore.getState().account,
  set: (account2) => {
    sdkstore.setState((state) => ({
      account: Object.assign(Object.assign({}, state.account), account2)
    }));
  },
  clear: () => {
    sdkstore.setState({
      account: {}
    });
  }
};
const chains = {
  get: () => sdkstore.getState().chains,
  set: (chains2) => {
    sdkstore.setState({ chains: chains2 });
  },
  clear: () => {
    sdkstore.setState({
      chains: []
    });
  }
};
const keys = {
  get: (key) => sdkstore.getState().keys[key],
  set: (key, value) => {
    sdkstore.setState((state) => ({ keys: Object.assign(Object.assign({}, state.keys), { [key]: value }) }));
  },
  clear: () => {
    sdkstore.setState({
      keys: {}
    });
  }
};
const config = {
  get: () => sdkstore.getState().config,
  set: (config2) => {
    sdkstore.setState((state) => ({ config: Object.assign(Object.assign({}, state.config), config2) }));
  }
};
const actions = {
  subAccounts,
  subAccountsConfig,
  spendPermissions,
  account,
  chains,
  keys,
  config
};
const store = Object.assign(Object.assign({}, sdkstore), actions);
const TELEMETRY_SCRIPT_CONTENT = `!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClientAnalytics=t():e.ClientAnalytics=t()}(this,(function(){return(()=>{var e={792:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},562:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(i>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}},e.exports=n},335:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},762:(e,t,n)=>{var r,i,a,o,s;r=n(562),i=n(792).utf8,a=n(335),o=n(792).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):i.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,v=s._gg,g=s._hh,b=s._ii;for(m=0;m<n.length;m+=16){var h=u,w=l,y=d,T=p;u=f(u,l,d,p,n[m+0],7,-680876936),p=f(p,u,l,d,n[m+1],12,-389564586),d=f(d,p,u,l,n[m+2],17,606105819),l=f(l,d,p,u,n[m+3],22,-1044525330),u=f(u,l,d,p,n[m+4],7,-176418897),p=f(p,u,l,d,n[m+5],12,1200080426),d=f(d,p,u,l,n[m+6],17,-1473231341),l=f(l,d,p,u,n[m+7],22,-45705983),u=f(u,l,d,p,n[m+8],7,1770035416),p=f(p,u,l,d,n[m+9],12,-1958414417),d=f(d,p,u,l,n[m+10],17,-42063),l=f(l,d,p,u,n[m+11],22,-1990404162),u=f(u,l,d,p,n[m+12],7,1804603682),p=f(p,u,l,d,n[m+13],12,-40341101),d=f(d,p,u,l,n[m+14],17,-1502002290),u=v(u,l=f(l,d,p,u,n[m+15],22,1236535329),d,p,n[m+1],5,-165796510),p=v(p,u,l,d,n[m+6],9,-1069501632),d=v(d,p,u,l,n[m+11],14,643717713),l=v(l,d,p,u,n[m+0],20,-373897302),u=v(u,l,d,p,n[m+5],5,-701558691),p=v(p,u,l,d,n[m+10],9,38016083),d=v(d,p,u,l,n[m+15],14,-660478335),l=v(l,d,p,u,n[m+4],20,-405537848),u=v(u,l,d,p,n[m+9],5,568446438),p=v(p,u,l,d,n[m+14],9,-1019803690),d=v(d,p,u,l,n[m+3],14,-187363961),l=v(l,d,p,u,n[m+8],20,1163531501),u=v(u,l,d,p,n[m+13],5,-1444681467),p=v(p,u,l,d,n[m+2],9,-51403784),d=v(d,p,u,l,n[m+7],14,1735328473),u=g(u,l=v(l,d,p,u,n[m+12],20,-1926607734),d,p,n[m+5],4,-378558),p=g(p,u,l,d,n[m+8],11,-2022574463),d=g(d,p,u,l,n[m+11],16,1839030562),l=g(l,d,p,u,n[m+14],23,-35309556),u=g(u,l,d,p,n[m+1],4,-1530992060),p=g(p,u,l,d,n[m+4],11,1272893353),d=g(d,p,u,l,n[m+7],16,-155497632),l=g(l,d,p,u,n[m+10],23,-1094730640),u=g(u,l,d,p,n[m+13],4,681279174),p=g(p,u,l,d,n[m+0],11,-358537222),d=g(d,p,u,l,n[m+3],16,-722521979),l=g(l,d,p,u,n[m+6],23,76029189),u=g(u,l,d,p,n[m+9],4,-640364487),p=g(p,u,l,d,n[m+12],11,-421815835),d=g(d,p,u,l,n[m+15],16,530742520),u=b(u,l=g(l,d,p,u,n[m+2],23,-995338651),d,p,n[m+0],6,-198630844),p=b(p,u,l,d,n[m+7],10,1126891415),d=b(d,p,u,l,n[m+14],15,-1416354905),l=b(l,d,p,u,n[m+5],21,-57434055),u=b(u,l,d,p,n[m+12],6,1700485571),p=b(p,u,l,d,n[m+3],10,-1894986606),d=b(d,p,u,l,n[m+10],15,-1051523),l=b(l,d,p,u,n[m+1],21,-2054922799),u=b(u,l,d,p,n[m+8],6,1873313359),p=b(p,u,l,d,n[m+15],10,-30611744),d=b(d,p,u,l,n[m+6],15,-1560198380),l=b(l,d,p,u,n[m+13],21,1309151649),u=b(u,l,d,p,n[m+4],6,-145523070),p=b(p,u,l,d,n[m+11],10,-1120210379),d=b(d,p,u,l,n[m+2],15,718787259),l=b(l,d,p,u,n[m+9],21,-343485551),u=u+h>>>0,l=l+w>>>0,d=d+y>>>0,p=p+T>>>0}return r.endian([u,l,d,p])})._ff=function(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,r,i,a,o){var s=e+(t^n^r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},2:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Perfume:()=>ze,incrementUjNavigation:()=>Le,markStep:()=>Re,markStepOnce:()=>qe});var r,i,a={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{},enableNavigationTracking:!0},o=window,s=o.console,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},p="mark.",m=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},f="4g",v=!1,g={},b={value:0},h={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},w={value:0},y={value:0},T={},k={isHidden:!1,didChange:!1},_=function(){k.isHidden=!1,document.hidden&&(k.isHidden=document.hidden,k.didChange=!0)},S=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){s.warn("Perfume.js:",e)}return null},E=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},x=function(e,t){switch(e){case"slow-2g":case"2g":case"3g":return!0;default:return E()||t}},O=function(e){return parseFloat(e.toFixed(4))},j=function(e){return"number"!=typeof e?null:O(e/Math.pow(1024,2))},N=function(e,t,n,r,i){var s,u=function(){a.analyticsTracker&&(k.isHidden&&!["CLS","INP"].includes(e)||a.analyticsTracker({attribution:r,metricName:e,data:t,navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:E(),isLowEndExperience:x(f,v)}:{},rating:n,navigationType:i}))};["CLS","INP"].includes(e)?u():(s=u,"requestIdleCallback"in o?o.requestIdleCallback(s,{timeout:3e3}):s())},I=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<b.value)){var t=e.duration-50;t>0&&(w.value+=t,y.value+=t)}}))};!function(e){e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable"}(r||(r={}));var P,M,B,C,D,A=((i={})[r.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},i[r.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},i[r.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},i[r.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},i[r.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4},i),L={RT:[100,200],TBT:[200,600],NTBT:[200,600]},U=function(e,t){return L[e]?t<=L[e][0]?"good":t<=L[e][1]?"needsImprovement":"poor":null},R=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=O(t[e]))})),N(e,t,null,n||{})},q=function(e){var t=e.attribution,n=e.name,r=e.rating,i=e.value,o=e.navigationType;"FCP"===n&&(b.value=i),["FCP","LCP"].includes(n)&&!T[0]&&(T[0]=S("longtask",I)),"FID"===n&&setTimeout((function(){k.didChange||(q({attribution:t,name:"TBT",rating:U("TBT",w.value),value:w.value,navigationType:o}),R("dataConsumption",h.value))}),1e4);var s=O(i);s<=a.maxTime&&s>=0&&N(n,s,r,t,o)},F=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},z=function(e){if("loading"===document.readyState)return"loading";var t=F();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},K=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},$=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:K(r)+(r.className&&r.className.length?"."+r.className.replace(/\\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},Q=-1,W=function(){return Q},H=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Q=t.timeStamp,e(t))}),!0)},V=function(){var e=F();return e&&e.activationStart||0},J=function(e,t){var n=F(),r="navigate";return W()>=0?r="back-forward-cache":n&&(r=document.prerendering||V()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},X=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Z=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},te=-1,ne=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},re=function(e){"hidden"===document.visibilityState&&te>-1&&(te="visibilitychange"===e.type?e.timeStamp:0,ae())},ie=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},ae=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},oe=function(){return te<0&&(te=ne(),ie(),H((function(){setTimeout((function(){te=ne(),ie()}),0)}))),{get firstHiddenTime(){return te}}},se=function(e,t){t=t||{},ee((function(){var n,r=[1800,3e3],i=oe(),a=J("FCP"),o=X("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-V(),0),a.entries.push(e),n(!0)))}))}));o&&(n=Z(e,a,r,t.reportAllChanges),H((function(i){a=J("FCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,n(!0)}))})))}))},ce={passive:!0,capture:!0},ue=new Date,le=function(e,t){P||(P=t,M=e,B=new Date,me(removeEventListener),de())},de=function(){if(M>=0&&M<B-ue){var e={entryType:"first-input",name:P.type,target:P.target,cancelable:P.cancelable,startTime:P.timeStamp,processingStart:P.timeStamp+M};C.forEach((function(t){t(e)})),C=[]}},pe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){le(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ce),removeEventListener("pointercancel",r,ce)};addEventListener("pointerup",n,ce),addEventListener("pointercancel",r,ce)}(t,e):le(t,e)}},me=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,pe,ce)}))},fe=0,ve=1/0,ge=0,be=function(e){e.forEach((function(e){e.interactionId&&(ve=Math.min(ve,e.interactionId),ge=Math.max(ge,e.interactionId),fe=ge?(ge-ve)/7+1:0)}))},he=function(){return D?fe:performance.interactionCount||0},we=0,ye=function(){return he()-we},Te=[],ke={},_e=function(e){var t=Te[Te.length-1],n=ke[e.interactionId];if(n||Te.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ke[r.id]=r,Te.push(r)}Te.sort((function(e,t){return t.latency-e.latency})),Te.splice(10).forEach((function(e){delete ke[e.id]}))}},Se={},Ee=function e(t){document.prerendering?ee((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},xe=function(e,t){t=t||{};var n=[800,1800],r=J("TTFB"),i=Z(e,r,n,t.reportAllChanges);Ee((function(){var a=F();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;r.value=Math.max(o-V(),0),r.entries=[a],i(!0),H((function(){r=J("TTFB",0),(i=Z(e,r,n,t.reportAllChanges))(!0)}))}}))},Oe=function(e){e.forEach((function(e){e.identifier&&q({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},je=function(e){e.forEach((function(e){if(a.isResourceTiming&&R("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;h.value[e.initiatorType]+=t,h.value.total+=t}}))},Ne=function(){!function(e,t){xe((function(e){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),function(e){e.value>0&&q(e)}(e)}),t)}(0,a.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},ee((function(){var e,n=[.1,.25],r=J("CLS"),i=-1,a=0,o=[],s=function(e){i>-1&&function(e){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:$(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:z(t.startTime)})}}var r;e.attribution={}}(e),function(e){q(e)}(e)}(e)},c=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],i=o[o.length-1];a&&t.startTime-i.startTime<1e3&&t.startTime-n.startTime<5e3?(a+=t.value,o.push(t)):(a=t.value,o=[t]),a>r.value&&(r.value=a,r.entries=o,e())}}))},u=X("layout-shift",c);u&&(e=Z(s,r,n,t.reportAllChanges),se((function(t){i=t.value,r.value<0&&(r.value=0,e())})),G((function(){c(u.takeRecords()),e(!0)})),H((function(){a=0,i=-1,r=J("CLS",0),e=Z(s,r,n,t.reportAllChanges),Y((function(){return e()}))})))}))}(0,t)}(0,a.reportOptions.cls),function(e,t){se((function(e){!function(e){if(e.entries.length){var t=F(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:z(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:z(W())}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[100,300],i=oe(),a=J("FID"),o=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=X("first-input",s);n=Z(e,a,r,t.reportAllChanges),c&&G((function(){s(c.takeRecords()),c.disconnect()}),!0),c&&H((function(){var i;a=J("FID"),n=Z(e,a,r,t.reportAllChanges),C=[],M=-1,P=null,me(addEventListener),i=o,C.push(i),de()}))}))}((function(e){!function(e){var t=e.entries[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fid),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[2500,4e3],i=oe(),a=J("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-V(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},s=X("largest-contentful-paint",o);if(s){n=Z(e,a,r,t.reportAllChanges);var c=function(){Se[a.id]||(o(s.takeRecords()),s.disconnect(),Se[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),G(c,!0),H((function(i){a=J("LCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,Se[a.id]=!0,n(!0)}))}))}}))}((function(e){!function(e){if(e.entries.length){var t=F();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),o=Math.max(a,i?(i.requestStart||i.startTime)-n:0),s=Math.max(o,i?i.responseEnd-n:0),c=Math.max(s,r?r.startTime-n:0),u={element:$(r.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:s-o,elementRenderDelay:c-s,navigationEntry:t,lcpEntry:r};return r.url&&(u.url=r.url),i&&(u.lcpResourceEntry=i),void(e.attribution=u)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.lcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n=[200,500];"interactionCount"in performance||D||(D=X("event",be,{type:"event",buffered:!0,durationThreshold:0}));var r,i=J("INP"),a=function(e){e.forEach((function(e){e.interactionId&&_e(e),"first-input"===e.entryType&&!Te.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&_e(e)}));var t,n=(t=Math.min(Te.length-1,Math.floor(ye()/50)),Te[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=X("event",a,{durationThreshold:t.durationThreshold||40});r=Z(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),G((function(){a(o.takeRecords()),i.value<0&&ye()>0&&(i.value=0,i.entries=[]),r(!0)})),H((function(){Te=[],we=he(),i=J("INP"),r=Z(e,i,n,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}((function(e){return q(e)}),a.reportOptions.inp),a.isResourceTiming&&S("resource",je),a.isElementTiming&&S("element",Oe)},Ie=function(e){var t="usageDetails"in e?e.usageDetails:{};R("storageEstimate",{quota:j(e.quota),usage:j(e.usage),caches:j(t.caches),indexedDB:j(t.indexedDB),serviceWorker:j(t.serviceWorkerRegistrations)})},Pe={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},Me=function(e){delete Pe.active[e]},Be=function(){return Pe.navigationSteps},Ce=function(e){var t;return null!==(t=Be()[e])&&void 0!==t?t:{}},De=function(e,t,n){var r="step."+e,i=u.getEntriesByName(p+t).length>0;if(u.getEntriesByName(p+n).length>0&&a.steps){var o=A[a.steps[e].threshold],s=o.maxOutlierThreshold,c=o.vitalsThresholds;if(i){var l=u.measure(r,p+t,p+n),d=l.duration;if(d<=s){var m=function(e,t){return e<=t[0]?"good":e<=t[1]?"needsImprovement":"poor"}(d,c);d>=0&&(N("userJourneyStep",d,m,{stepName:e},void 0),u.measure("step.".concat(e,"_vitals_").concat(m),{start:l.startTime+l.duration,end:l.startTime+l.duration,detail:{type:"stepVital",duration:d}}))}}}},Ae=function(){var e=Be(),t=Pe.startMarkToStepsMap,n=Object.keys(e).length;if(0===n)return{};var r={},i=n-1,a=Ce(i);if(Object.keys(a).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))})),n>1){var o=Ce(i-1);Object.keys(o).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))}))}return r},Le=function(){var e,t=Object.keys(Pe.navigationSteps).length;Pe.navigationSteps[t]={};var n=Ae();null===(e=a.onMarkStep)||void 0===e||e.call(a,"",Object.keys(n))},Ue=function(e){var t,n,r,i,o,s,c;if(Pe.finalMarkToStepsMap[e]){!function(e){var t=Pe.navigationSteps,n=Pe.finalMarkToStepsMap,r=Object.keys(t).length;if(0!==r){var i=r-1,a=Ce(i);if(a&&n[e]){var o=n[e];o&&Object.keys(o).forEach((function(e){if(a[e]){var n=Ce(i)||{};n[e]=!1,t[i]=n}if(r>1){var o=i-1,s=Ce(o);s[e]&&(s[e]=!1,t[o]=s)}}))}}}(e);var u=Pe.finalMarkToStepsMap[e];Object.keys(u).forEach((function(t){var n=u[t];n.forEach(Me),Promise.all(n.map((function(n){return function(e,t,n,r){return new(n||(n=Promise))((function(e,t){function i(e){try{o(r.next(e))}catch(e){t(e)}}function a(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}o((r=r.apply(undefined,[])).next())}))}(0,0,void 0,(function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(r){switch(r.label){case 0:return[4,De(n,t,e)];case 1:return r.sent(),[2]}}))}))}))).catch((function(){}))}))}else r=e,i=Pe.navigationSteps,o=Object.keys(i).length,(c=Ce(s=(o>0?o:1)-1)||[])[r]=!0,i[s]=c,function(e){var t,n=null!==(t=Pe.startMarkToStepsMap[e])&&void 0!==t?t:[];Object.keys(n).forEach((function(e){Pe.active[e]||(Pe.active[e]=!0)}))}(e);if(a.enableNavigationTracking){var l=Ae();null===(t=a.onMarkStep)||void 0===t||t.call(a,e,Object.keys(l))}else null===(n=a.onMarkStep)||void 0===n||n.call(a,e,Object.keys(Pe.active))},Re=function(e){u.mark(p+e),Ue(e)},qe=function(e){0===u.getEntriesByName(p+e).length&&(u.mark(p+e),Ue(e))},Fe=0,ze=function(){function e(e){if(void 0===e&&(e={}),this.v="9.0.0-rc.3",a.analyticsTracker=e.analyticsTracker,a.isResourceTiming=!!e.resourceTiming,a.isElementTiming=!!e.elementTiming,a.maxTime=e.maxMeasureTime||a.maxTime,a.reportOptions=e.reportOptions||a.reportOptions,a.steps=e.steps,a.onMarkStep=e.onMarkStep,a.enableNavigationTracking=e.enableNavigationTracking,m()){"PerformanceObserver"in o&&Ne(),void 0!==document.hidden&&document.addEventListener("visibilitychange",_);var t=function(){if(!m())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectTime:e.redirectEnd-e.redirectStart}}();R("navigationTiming",t),t.redirectTime&&q({attribution:{},name:"RT",rating:U("RT",t.redirectTime),value:t.redirectTime}),R("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(f=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(Ie),a.steps&&a.steps&&(Pe.startMarkToStepsMap={},Pe.finalMarkToStepsMap={},Pe.active={},Pe.navigationSteps={},Object.entries(a.steps).forEach((function(e){var t,n,r=e[0],i=e[1].marks,a=i[0],o=i[1],s=null!==(n=Pe.startMarkToStepsMap[a])&&void 0!==n?n:{};if(s[r]=!0,Pe.startMarkToStepsMap[a]=s,Pe.finalMarkToStepsMap[o]){var c=Pe.finalMarkToStepsMap[o][a]||[];c.push(r),Pe.finalMarkToStepsMap[o][a]=c}else Pe.finalMarkToStepsMap[o]=((t={})[a]=[r],t)})))}}return e.prototype.start=function(e){m()&&!g[e]&&(g[e]=!0,u.mark("mark_".concat(e,"_start")))},e.prototype.end=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n=!0),m()&&g[e]){u.mark("mark_".concat(e,"_end")),delete g[e];var r=function(e){u.measure(e,"mark_".concat(e,"_start"),"mark_".concat(e,"_end"));var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e);n&&R(e,O(r),t)}},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete g[e],u.clearMarks&&(u.clearMarks("mark_".concat(e,"_start")),u.clearMarks("mark_".concat(e,"_end")))},e.prototype.markNTBT=function(){var e=this;this.start("ntbt"),y.value=0,clearTimeout(Fe),Fe=setTimeout((function(){e.end("ntbt",{},!1),q({attribution:{},name:"NTBT",rating:U("NTBT",y.value),value:y.value}),y.value=0}),2e3)},e}()},426:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,i={};function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function o(){}function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var c=s.prototype=new o;c.constructor=s,r(c,a.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var u={current:null};t.useCallback=function(e,t){return u.current.useCallback(e,t)},t.useEffect=function(e,t){return u.current.useEffect(e,t)},t.useRef=function(e){return u.current.useRef(e)}},784:(e,t,n)=>{"use strict";e.exports=n(426)},353:function(e,t,n){var r;!function(i,a){"use strict";var o="function",s="undefined",c="object",u="string",l="major",d="model",p="name",m="type",f="vendor",v="version",g="architecture",b="console",h="mobile",w="tablet",y="smarttv",T="wearable",k="embedded",_="Amazon",S="Apple",E="ASUS",x="BlackBerry",O="Browser",j="Chrome",N="Firefox",I="Google",P="Huawei",M="LG",B="Microsoft",C="Motorola",D="Opera",A="Samsung",L="Sharp",U="Sony",R="Xiaomi",q="Zebra",F="Facebook",z="Chromium OS",K="Mac OS",$=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},Q=function(e,t){return typeof e===u&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===u)return e=e.replace(/^\\s\\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var n,r,i,s,u,l,d=0;d<t.length&&!u;){var p=t[d],m=t[d+1];for(n=r=0;n<p.length&&!u&&p[n];)if(u=p[n++].exec(e))for(i=0;i<m.length;i++)l=u[++r],typeof(s=m[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):a:this[s[0]]=l?s[1].call(this,l,s[2]):a:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):a):this[s]=l||a;d+=2}},J=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(Q(t[n][r],e))return"?"===n?a:n}else if(Q(t[n],e))return"?"===n?a:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[v,[p,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[v,[p,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[p,v],[/opios[\\/ ]+([\\w\\.]+)/i],[v,[p,D+" Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[v,[p,D]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\\/([-\\w\\.]+)/i,/(heytap|ovi)browser\\/([\\d\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[p,v],[/(?:\\buc? ?browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[v,[p,"UC"+O]],[/microm.+\\bqbcore\\/([\\w\\.]+)/i,/\\bqbcore\\/([\\w\\.]+).+microm/i],[v,[p,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[v,[p,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[v,[p,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[v,[p,"IE"]],[/ya(?:search)?browser\\/([\\w\\.]+)/i],[v,[p,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],v],[/\\bfocus\\/([\\w\\.]+)/i],[v,[p,N+" Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[v,[p,D+" Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[v,[p,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[v,[p,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[v,[p,D+" Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[v,[p,"MIUI "+O]],[/fxios\\/([-\\w\\.]+)/i],[v,[p,N]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 "+O],v],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[p,/_/g," "],v],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[p,v],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i,/\\[(linkedin)app\\]/i],[p],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[p,F],v],[/(kakao(?:talk|story))[\\/ ]([\\w\\.]+)/i,/(naver)\\(.*?(\\d+\\.[\\w\\.]+).*\\)/i,/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[p,v],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[v,[p,"GSA"]],[/musical_ly(?:.+app_?version\\/|_)([\\w\\.]+)/i],[v,[p,"TikTok"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[v,[p,j+" Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[p,j+" WebView"],v],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[v,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[p,v],[/version\\/([\\w\\.\\,]+) .*mobile\\/\\w+ (safari)/i],[v,[p,"Mobile Safari"]],[/version\\/([\\w(\\.|\\,)]+) .*(mobile ?safari|safari)/i],[v,p],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[p,[v,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[p,v],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[p,"Netscape"],v],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[v,[p,N+" Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i,/panasonic;(viera)/i],[p,v],[/(cobalt)\\/([\\w\\.]+)/i],[p,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\\)]/i],[[g,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[g,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[g,/ower/,"",W]],[/(sun4\\w)[;\\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[g,W]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[ptx]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[f,A],[m,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|sc[g-]?[\\d]+a?|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[d,[f,A],[m,h]],[/(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)/i],[d,[f,S],[m,h]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[d,[f,S],[m,w]],[/(macintosh);/i],[d,[f,S]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[d,[f,L],[m,h]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[d,[f,P],[m,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}e?-[atu]?[ln][\\dx][012359c][adn]?)\\b(?!.+d\\/s)/i],[d,[f,P],[m,h]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,h]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007|a101op)\\b/i],[d,[f,"OPPO"],[m,h]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[d,[f,"Vivo"],[m,h]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[d,[f,"Realme"],[m,h]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[d,[f,C],[m,h]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[d,[f,C],[m,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[f,M],[m,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[d,[f,M],[m,h]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[d,[f,"Lenovo"],[m,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[d,/_/g," "],[f,"Nokia"],[m,h]],[/(pixel c)\\b/i],[d,[f,I],[m,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[d,[f,I],[m,h]],[/droid.+ (a?\\d[0-2]{2}so|[c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[d,[f,U],[m,h]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[d,"Xperia Tablet"],[f,U],[m,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[d,[f,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[d,[f,_],[m,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[d,/(.+)/g,"Fire Phone $1"],[f,_],[m,h]],[/(playbook);[-\\w\\),; ]+(rim)/i],[d,f,[m,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[d,[f,x],[m,h]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[d,[f,E],[m,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[d,[f,E],[m,h]],[/(nexus 9)/i],[d,[f,"HTC"],[m,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\\.))|sony(?!-bra))[-_ ]?([-\\w]*)/i],[f,[d,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[d,[f,"Acer"],[m,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[d,[f,"Meizu"],[m,h]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[f,d,[m,h]],[/(kobo)\\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[f,d,[m,w]],[/(surface duo)/i],[d,[f,B],[m,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[d,[f,"Fairphone"],[m,h]],[/(u304aa)/i],[d,[f,"AT&T"],[m,h]],[/\\bsie-(\\w*)/i],[d,[f,"Siemens"],[m,h]],[/\\b(rct\\w+) b/i],[d,[f,"RCA"],[m,w]],[/\\b(venue[\\d ]{2,7}) b/i],[d,[f,"Dell"],[m,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[d,[f,"Verizon"],[m,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[d,[f,"Barnes & Noble"],[m,w]],[/\\b(tm\\d{3}\\w+) b/i],[d,[f,"NuVision"],[m,w]],[/\\b(k88) b/i],[d,[f,"ZTE"],[m,w]],[/\\b(nx\\d{3}j) b/i],[d,[f,"ZTE"],[m,h]],[/\\b(gen\\d{3}) b.+49h/i],[d,[f,"Swiss"],[m,h]],[/\\b(zur\\d{3}) b/i],[d,[f,"Swiss"],[m,w]],[/\\b((zeki)?tb.*\\b) b/i],[d,[f,"Zeki"],[m,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[f,"Dragon Touch"],d,[m,w]],[/\\b(ns-?\\w{0,9}) b/i],[d,[f,"Insignia"],[m,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[d,[f,"NextBook"],[m,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],d,[m,h]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[f,"LvTel"],d,[m,h]],[/\\b(ph-1) /i],[d,[f,"Essential"],[m,h]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[d,[f,"Envizen"],[m,w]],[/\\b(trio[-\\w\\. ]+) b/i],[d,[f,"MachSpeed"],[m,w]],[/\\btu_(1491) b/i],[d,[f,"Rotor"],[m,w]],[/(shield[\\w ]+) b/i],[d,[f,"Nvidia"],[m,w]],[/(sprint) (\\w+)/i],[f,d,[m,h]],[/(kin\\.[onetw]{3})/i],[[d,/\\./g," "],[f,B],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[d,[f,q],[m,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[d,[f,q],[m,h]],[/smart-tv.+(samsung)/i],[f,[m,y]],[/hbbtv.+maple;(\\d+)/i],[[d,/^/,"SmartTV"],[f,A],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[f,M],[m,y]],[/(apple) ?tv/i],[f,[d,S+" TV"],[m,y]],[/crkey/i],[[d,j+"cast"],[f,I],[m,y]],[/droid.+aft(\\w)( bui|\\))/i],[d,[f,_],[m,y]],[/\\(dtv[\\);].+(aquos)/i,/(aquos-tv[\\w ]+)\\)/i],[d,[f,L],[m,y]],[/(bravia[\\w ]+)( bui|\\))/i],[d,[f,U],[m,y]],[/(mitv-\\w{5}) bui/i],[d,[f,R],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[f,d,[m,y]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w\\+ ]*; *([\\w\\d][^;]*);([^;]*)/i],[[f,H],[d,H],[m,y]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,d,[m,b]],[/droid.+; (shield) bui/i],[d,[f,"Nvidia"],[m,b]],[/(playstation [345portablevi]+)/i],[d,[f,U],[m,b]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[d,[f,B],[m,b]],[/((pebble))app/i],[f,d,[m,T]],[/(watch)(?: ?os[,\\/]|\\d,\\d\\/)[\\d\\.]+/i],[d,[f,S],[m,T]],[/droid.+; (glass) \\d/i],[d,[f,I],[m,T]],[/droid.+; (wt63?0{2,3})\\)/i],[d,[f,q],[m,T]],[/(quest( 2| pro)?)/i],[d,[f,F],[m,T]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[f,[m,k]],[/(aeobc)\\b/i],[d,[f,_],[m,k]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[d,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[d,[m,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[m,w]],[/(phone|mobile(?:[;\\/]| [ \\w\\/\\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\\w\\. ]{0,9});.+buil/i],[d,[f,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[v,[p,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[v,[p,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i,/\\b(libweb)/i],[p,v],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[v,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,v],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[p,[v,J,X]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[p,"Windows"],[v,J,X]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/ios;fbsv\\/([\\d\\.]+)/i,/cfnetwork\\/.+darwin/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[p,K],[v,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86|harmonyos)/i],[v,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[p,v],[/\\(bb(10);/i],[v,[p,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[v,[p,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[v,[p,N+" OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[v,[p,"webOS"]],[/watch(?: ?os[,\\/]|\\d,\\d\\/)([\\d\\.]+)/i],[v,[p,"watchOS"]],[/crkey\\/([\\d\\.]+)/i],[v,[p,j+"cast"]],[/(cros) [\\w]+(?:\\)| ([\\w\\.]+)\\b)/i],[[p,z],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\\/(\\d+\\.[\\w\\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[p,v],[/(sunos) ?([\\w\\.\\d]*)/i],[[p,"Solaris"],v],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\\w\\.]*)/i],[p,v]]},Z=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof Z))return new Z(e,t).getResult();var n=typeof i!==s&&i.navigator?i.navigator:a,r=e||(n&&n.userAgent?n.userAgent:""),b=n&&n.userAgentData?n.userAgentData:a,y=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(G,t):G,T=n&&n.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=a,t[v]=a,V.call(t,r,y.browser),t[l]=typeof(e=t[v])===u?e.replace(/[^\\d\\.]/g,"").split(".")[0]:a,T&&n&&n.brave&&typeof n.brave.isBrave==o&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,V.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[f]=a,e[d]=a,e[m]=a,V.call(e,r,y.device),T&&!e[m]&&b&&b.mobile&&(e[m]=h),T&&"Macintosh"==e[d]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[d]="iPad",e[m]=w),e},this.getEngine=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.os),T&&!e[p]&&b&&"Unknown"!=b.platform&&(e[p]=b.platform.replace(/chrome os/i,z).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>350?H(e,350):e,this},this.setUA(r),this};Z.VERSION="1.0.35",Z.BROWSER=$([p,v,l]),Z.CPU=$([g]),Z.DEVICE=$([d,f,m,b,h,y,w,T,k]),Z.ENGINE=Z.OS=$([p,v]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):n.amdO?(r=function(){return Z}.call(t,n,t,e))===a||(e.exports=r):typeof i!==s&&(i.UAParser=Z);var Y=typeof i!==s&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var ee=new Z;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var n in t)Y.ua[n]=t[n]}}}("object"==typeof window?window:this)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionType:()=>f,AmplitudePlatformName:()=>g,AnalyticsEventImportance:()=>l,AnalyticsQueries:()=>e,AuthStatus:()=>b,ComponentType:()=>m,IThresholdTier:()=>Jt,MetricType:()=>d,PlatformName:()=>v,SessionActions:()=>h,SessionAutomatedEvents:()=>w,SessionRank:()=>y,SubjectType:()=>p,UserTypeCommerce:()=>c,UserTypeInsto:()=>i,UserTypeRetail:()=>t,UserTypeRetailBusinessBanking:()=>s,UserTypeRetailEmployeeInternal:()=>a,UserTypeRetailEmployeePersonal:()=>o,UserTypeWallet:()=>u,automatedEvents:()=>xn,automatedMappingConfig:()=>In,clearMarkEntry:()=>Vn,clearPerformanceMarkEntries:()=>Xn,config:()=>A,createEventConfig:()=>On,createNewSpan:()=>Ln,createNewTrace:()=>Un,device:()=>W,endPerfMark:()=>Jn,exposeExperiment:()=>wn,flushQueue:()=>or,generateUUID:()=>V,getAnalyticsHeaders:()=>sr,getReferrerData:()=>le,getTracingHeaders:()=>An,getTracingId:()=>Dn,getUrlHostname:()=>pe,getUrlParams:()=>me,getUrlPathname:()=>fe,getUserContext:()=>ar,identify:()=>Tn,identifyFlow:()=>xe,identity:()=>H,identityFlow:()=>Se,incrementUjNavigation:()=>an,init:()=>yn,initNextJsTrackPageview:()=>_n,initTrackPageview:()=>kn,isEventKeyFormatValid:()=>we,isSessionEnded:()=>pt,location:()=>re,logEvent:()=>$t,logMetric:()=>Ht,logPageView:()=>on,logTrace:()=>Rn,markNTBT:()=>tn,markStep:()=>nn,markStepOnce:()=>rn,onVisibilityChange:()=>ln,optIn:()=>En,optOut:()=>Sn,perfMark:()=>Wn,persistentData:()=>oe,postMessage:()=>K,recordSessionDuration:()=>pn,removeFromIdentifyFlow:()=>Ee,savePersistentData:()=>st,sendScheduledEvents:()=>Bt,setBreadcrumbs:()=>ie,setConfig:()=>U,setLocation:()=>ae,setPagePath:()=>ve,setPageview:()=>Kt,setPersistentData:()=>se,setSessionStart:()=>dt,setTime:()=>Ue,startPerfMark:()=>Hn,timeStone:()=>Le,useEventLogger:()=>Yn,useLogEventOnMount:()=>tr,usePerformanceMarks:()=>rr});let e=function(e){return e.fbclid="fbclid",e.gclid="gclid",e.msclkid="msclkid",e.ptclid="ptclid",e.ttclid="ttclid",e.utm_source="utm_source",e.utm_medium="utm_medium",e.utm_campaign="utm_campaign",e.utm_term="utm_term",e.utm_content="utm_content",e}({});const t=0,i=1,a=2,o=3,s=4,c=5,u=6;let l=function(e){return e.low="low",e.high="high",e}({}),d=function(e){return e.count="count",e.rate="rate",e.gauge="gauge",e.distribution="distribution",e.histogram="histogram",e}({}),p=function(e){return e.commerce_merchant="commerce_merchant",e.device="device",e.edp_fingerprint_id="edp_fingerprint_id",e.nft_user="nft_user",e.user="user",e.wallet_user="wallet_user",e.uuid="user_uuid",e}({}),m=function(e){return e.unknown="unknown",e.banner="banner",e.button="button",e.card="card",e.chart="chart",e.content_script="content_script",e.dropdown="dropdown",e.link="link",e.page="page",e.modal="modal",e.table="table",e.search_bar="search_bar",e.service_worker="service_worker",e.text="text",e.text_input="text_input",e.tray="tray",e.checkbox="checkbox",e.icon="icon",e}({}),f=function(e){return e.unknown="unknown",e.blur="blur",e.click="click",e.change="change",e.dismiss="dismiss",e.focus="focus",e.hover="hover",e.select="select",e.measurement="measurement",e.move="move",e.process="process",e.render="render",e.scroll="scroll",e.view="view",e.search="search",e.keyPress="keyPress",e}({}),v=function(e){return e.unknown="unknown",e.web="web",e.android="android",e.ios="ios",e.mobile_web="mobile_web",e.tablet_web="tablet_web",e.server="server",e.windows="windows",e.macos="macos",e.extension="extension",e}({}),g=function(e){return e.web="Web",e.ios="iOS",e.android="Android",e}({}),b=function(e){return e[e.notLoggedIn=0]="notLoggedIn",e[e.loggedIn=1]="loggedIn",e}({}),h=function(e){return e.ac="ac",e.af="af",e.ah="ah",e.al="al",e.am="am",e.ar="ar",e.as="as",e}({}),w=function(e){return e.pv="pv",e}({}),y=function(e){return e.xs="xs",e.s="s",e.m="m",e.l="l",e.xl="xl",e.xxl="xxl",e}({});const T="https://analytics-service-dev.cbhq.net",k=3e5,_=5e3,S="analytics-db",E="experiment-exposure-db",x="Analytics SDK:",O=Object.values(e),j="pageview",N="session_duration",I={navigationTiming:{eventName:"perf_navigation_timing"},redirectTime:{eventName:"perf_redirect_time"},RT:{eventName:"perf_redirect_time"},TTFB:{eventName:"perf_time_to_first_byte"},networkInformation:{eventName:"perf_network_information"},storageEstimate:{eventName:"perf_storage_estimate"},FCP:{eventName:"perf_first_contentful_paint"},FID:{eventName:"perf_first_input_delay"},LCP:{eventName:"perf_largest_contentful_paint"},CLS:{eventName:"perf_cumulative_layout_shift"},TBT:{eventName:"perf_total_blocking_time"},NTBT:{eventName:"perf_navigation_total_blocking_time"},INP:{eventName:"perf_interact_to_next_paint"},ET:{eventName:"perf_element_timing"},userJourneyStep:{eventName:"perf_user_journey_step"}},P="1",M="web";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const C=/^(https?:\\/\\/)/;function D(e){return{eventsEndpoint:e+"/amp",metricsEndPoint:e+"/metrics",exposureEndpoint:e+"/track-exposures",tracesEndpoint:e+"/traces"}}const A=B({authCookie:"logged_in",amplitudeApiKey:"",batchEventsPeriod:_,batchEventsThreshold:30,batchMetricsPeriod:_,batchMetricsThreshold:30,batchTracesPeriod:_,batchTracesThreshold:30,headers:{},interactionManager:null,isAlwaysAuthed:!1,isProd:!1,isInternalApplication:!1,onError:(e,t)=>{console.error(x,e,t)},platform:v.unknown,projectName:"",ricTimeoutScheduleEvent:1e3,ricTimeoutSetDevice:500,showDebugLogging:!1,trackUserId:!1,version:null,apiEndpoint:T},D(T),{steps:{}}),L=[].reduce(((e,t)=>n=>e(t(n))),(e=>{if(!e.isProd)return e.isInternalApplication?(e.apiEndpoint="https://analytics-service-internal-dev.cbhq.net",B({},e,D(e.apiEndpoint))):e;const t=(e=>e.apiEndpoint?C.test(e.apiEndpoint)?e.apiEndpoint:\`https://\${e.apiEndpoint}\`:e.isInternalApplication?"https://analytics-service-internal.cbhq.net":"https://as.coinbase.com")(e);return B({},e,{apiEndpoint:t},D(t))})),U=e=>{const{batchEventsThreshold:t,batchMetricsThreshold:n,batchTracesThreshold:r}=e,i=[t,n,r];for(const e of i)if((e||0)>30){console.warn("You are setting the threshhold for the batch limit to be greater than 30. This may cause request overload.");break}Object.assign(A,L(e))},R=[v.web,v.mobile_web,v.tablet_web];function q(){return"android"===A.platform}function F(){return"ios"===A.platform}function z(){return R.includes(A.platform)}function K(e){if(z()&&navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.controller)try{navigator.serviceWorker.controller.postMessage(e)}catch(e){e instanceof Error&&A.onError(e)}}var $=n(353),Q=n.n($);const W={amplitudeOSName:null,amplitudeOSVersion:null,amplitudeDeviceModel:null,amplitudePlatform:null,browserName:null,browserMajor:null,osName:null,userAgent:null,width:null,height:null},H={countryCode:null,deviceId:null,device_os:null,isOptOut:!1,languageCode:null,locale:null,jwt:null,session_lcc_id:null,userAgent:null,userId:null},V=e=>e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,V),J=()=>A.isAlwaysAuthed||!!H.userId,X=()=>{const e={};return H.countryCode&&(e.country_code=H.countryCode),e},G=()=>{const{platform:e}=A;if(e===v.web)switch(!0){case window.matchMedia("(max-width: 560px)").matches:return v.mobile_web;case window.matchMedia("(max-width: 1024px, min-width: 561px)").matches:return v.tablet_web}return e},Z=()=>{var e,t,n,r,i;z()?("requestIdleCallback"in window?window.requestIdleCallback(ne,{timeout:A.ricTimeoutSetDevice}):ne(),W.amplitudePlatform=g.web,W.userAgent=(null==(e=window)||null==(e=e.navigator)?void 0:e.userAgent)||null,ee({height:null!=(t=null==(n=window)?void 0:n.innerHeight)?t:null,width:null!=(r=null==(i=window)?void 0:i.innerWidth)?r:null})):F()?(W.amplitudePlatform=g.ios,W.userAgent=H.userAgent,W.userAgent&&ne()):q()&&(W.userAgent=H.userAgent,W.amplitudePlatform=g.android,W.userAgent&&ne())},Y=e=>{Object.assign(H,e),z()&&K({identity:{isAuthed:!!H.userId,locale:H.locale||null}})},ee=e=>{W.height=e.height,W.width=e.width},te=()=>{U({platform:G()}),z()&&K({config:{platform:A.platform}})},ne=()=>{var e;performance.mark&&performance.mark("ua_parser_start");const t=new(Q())(null!=(e=W.userAgent)?e:"").getResult();W.browserName=t.browser.name||null,W.browserMajor=t.browser.major||null,W.osName=t.os.name||null,W.amplitudeOSName=W.browserName,W.amplitudeOSVersion=W.browserMajor,W.amplitudeDeviceModel=W.osName,K({device:{browserName:W.browserName,osName:W.osName}}),performance.mark&&(performance.mark("ua_parser_end"),performance.measure("ua_parser","ua_parser_start","ua_parser_end"))},re={breadcrumbs:[],initialUAAData:{},pageKey:"",pageKeyRegex:{},pagePath:"",prevPageKey:"",prevPagePath:""};function ie(e){Object.assign(re,{breadcrumbs:e})}function ae(e){Object.assign(re,e)}const oe={eventId:0,sequenceNumber:0,sessionId:0,lastEventTime:0,sessionStart:0,sessionUUID:null,userId:null,ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0};function se(e){Object.assign(oe,e)}function ce(){var e,t;return null!=(e=null==(t=document)?void 0:t.referrer)?e:""}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const le=()=>{const e=ce();if(!e)return{};const t=new URL(e);return t.hostname===pe()?{}:{referrer:e,referring_domain:t.hostname}},de=()=>{const e=new URLSearchParams(me()),t={};return O.forEach((n=>{e.has(n)&&(t[n]=(e.get(n)||"").toLowerCase())})),t},pe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.hostname)||""},me=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.search)||""},fe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.pathname)||""},ve=()=>{const e=A.overrideWindowLocation?re.pagePath:fe()+me();e&&e!==re.pagePath&&(e!==re.pagePath&&ge(),re.pagePath=e,re.pageKeyRegex&&Object.keys(re.pageKeyRegex).some((e=>{if(re.pageKeyRegex[e].test(re.pagePath))return re.pageKey=e,!0})))},ge=()=>{if(z()){const e=ce();if(!re.prevPagePath&&e){const t=new URL(e);if(t.hostname===pe())return void(re.prevPagePath=t.pathname)}}re.prevPagePath=re.pagePath,re.prevPageKey=re.pageKey},be=e=>{z()&&Object.assign(e,z()?(Object.keys(re.initialUAAData).length>0||(new URLSearchParams(me()),re.initialUAAData=ue({},(()=>{const e={};return O.forEach((t=>{oe[t]&&(e[t]=oe[t])})),e})(),de(),le())),re.initialUAAData):re.initialUAAData)},he=/^[a-zd]+(_[a-zd]+)*$/;function we(e){return he.test(e)}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}const Te=["action","component_type","component_name","context","logging_id"],ke=["num_non_hardware_accounts","ujs"],_e="ujs_",Se={};function Ee(e){e.forEach((e=>{ke.includes(e)&&delete Se[e]}))}function xe(e){var t;const n=Object.entries(e).reduce(((e,t)=>{const[n,r]=t;return!Te.includes(n)&&ke.includes(n)?we(n)?ye({},e,{[n]:r}):(A.onError(new Error("IdentityFlow property names must have snake case format"),{[n]:r}),e):e}),{});null!=(t=n.ujs)&&t.length&&(n.ujs=n.ujs.map((e=>\`\${_e}\${e}\`))),Object.assign(Se,n)}function Oe(){return A.platform!==v.unknown||(A.onError(new Error("SDK platform not initialized")),!1)}const je={eventsQueue:[],eventsScheduled:!1,metricsQueue:[],metricsScheduled:!1,tracesQueue:[],tracesScheduled:!1};function Ne(e){Object.assign(je,e)}const Ie={ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0},Pe={ac:20,af:5,ah:1,al:1,am:0,ar:10,as:20},Me={pv:25},Be={xs:0,s:1,m:1,l:2,xl:2,xxl:2},Ce=e=>e<15?y.xs:e<60?y.s:e<240?y.m:e<960?y.l:e<3840?y.xl:y.xxl,De=e=>{Object.assign(Ie,e)};function Ae(){return(new Date).getTime()}const Le={timeStart:Ae(),timeOnPagePath:0,timeOnPageKey:0,prevTimeOnPagePath:0,prevTimeOnPageKey:0,sessionDuration:0,sessionEnd:0,sessionStart:0,prevSessionDuration:0};function Ue(e){Object.assign(Le,e)}const Re=(e,t)=>t.some((t=>e instanceof t));let qe,Fe;const ze=new WeakMap,Ke=new WeakMap,$e=new WeakMap,Qe=new WeakMap,We=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Xe(this),e),Je(ze.get(this))}:function(...e){return Je(t.apply(Xe(this),e))}:function(e,...n){const r=t.call(Xe(this),e,...n);return $e.set(r,e.sort?e.sort():[e]),Je(r)}:(e instanceof IDBTransaction&&function(e){if(Ke.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}(e),Re(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,He):e);var t}function Je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Je(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ze.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=Ve(e);return t!==e&&(Qe.set(e,t),We.set(t,e)),t}const Xe=e=>We.get(e),Ge=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],Ye=new Map;function et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Ye.set(t,a),a}var tt;tt=He,He={...tt,get:(e,t,n)=>et(e,t)||tt.get(e,t,n),has:(e,t)=>!!et(e,t)||tt.has(e,t)};const nt={isReady:!1,idbKeyval:null};function rt(e){Object.assign(nt,e)}const it={},at=async e=>{if(!nt.idbKeyval)return Promise.resolve(null);try{return await nt.idbKeyval.get(e)}catch(e){return A.onError(new Error("IndexedDB:Get:InternalError")),Promise.resolve(null)}},ot=async(e,t)=>{if(nt.idbKeyval)try{await nt.idbKeyval.set(e,t)}catch(e){A.onError(new Error("IndexedDB:Set:InternalError"))}},st=()=>{"server"!==A.platform&&(se({sessionStart:Le.sessionStart,ac:Ie.ac,af:Ie.af,ah:Ie.ah,al:Ie.al,am:Ie.am,ar:Ie.ar,as:Ie.as,pv:Ie.pv}),H.userId&&se({userId:H.userId}),ot(S,oe))},ct="rgb(5,177,105)",ut=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=\`%c \${x}\`,a=\`color:\${ct};font-size:11px;\`,o=\`Importance: \${r}\`;console.group(i,a,t,o),n.forEach((e=>{e.event_type?console.log(e.event_type,e):console.log(e)})),console.groupEnd()},lt=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=\`color:\${ct};font-size:11px;\`,a=\`%c \${x}\`,o=\`Importance: \${r}\`;console.log(a,i,t,n,o)},dt=()=>{const e=Ae();oe.sessionId&&oe.lastEventTime&&oe.sessionUUID&&!pt(e)||(oe.sessionId=e,oe.sessionUUID=V(),Ue({sessionStart:e}),lt({metricName:"Started new session:",data:{persistentData:oe,timeStone:Le}})),oe.lastEventTime=e},pt=e=>e-oe.lastEventTime>18e5;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const ft=e=>{var t;(e=>{switch(e.action){case f.click:Ie.ac+=1;break;case f.focus:Ie.af+=1;break;case f.hover:Ie.ah+=1;break;case f.move:Ie.am+=1;break;case f.scroll:Ie.al+=1;break;case f.search:Ie.ar+=1;break;case f.select:Ie.as+=1}})(t=e),t.event_type!==j?t.event_type===N&&((e=>{if(!e.session_rank)return;const t=e.session_rank;Object.values(h).forEach((e=>{Ie.sqs+=Ie[e]*Pe[e]})),Object.values(w).forEach((e=>{Ie.sqs+=Ie[e]*Me[e]})),Ie.sqs*=Be[t]})(t),Object.assign(t,Ie),De({ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0})):Ie.pv+=1;const n=e.event_type;delete e.event_type;const r=e.deviceId?e.deviceId:null,i=e.timestamp;return delete e.timestamp,se({eventId:oe.eventId+1}),se({sequenceNumber:oe.sequenceNumber+1}),dt(),st(),{device_id:H.deviceId||r||null,user_id:H.userId,timestamp:i,event_id:oe.eventId,session_id:oe.sessionId||-1,event_type:n,version_name:A.version||null,platform:W.amplitudePlatform,os_name:W.amplitudeOSName,os_version:W.amplitudeOSVersion,device_model:W.amplitudeDeviceModel,language:H.languageCode,event_properties:mt({},e,{session_uuid:oe.sessionUUID,height:W.height,width:W.width}),user_properties:X(),uuid:V(),library:{name:"@cbhq/client-analytics",version:"10.6.0"},sequence_number:oe.sequenceNumber,user_agent:W.userAgent||H.userAgent}},vt=e=>e.map((e=>ft(e)));function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}const bt=e=>e.map((e=>(e=>{const t=e.tags||{},n=gt({authed:J()?"true":"false",platform:A.platform},t,{project_name:A.projectName,version_name:A.version||null});return{metric_name:e.metricName,page_path:e.pagePath||null,value:e.value,tags:n,type:e.metricType}})(e))),ht=e=>0!==je.metricsQueue.length&&(je.metricsQueue.length>=A.batchMetricsThreshold||(je.metricsScheduled||(je.metricsScheduled=!0,setTimeout((()=>{je.metricsScheduled=!1,e(bt(je.metricsQueue)),je.metricsQueue=[]}),A.batchMetricsPeriod)),!1)),wt=e=>0!==je.tracesQueue.length&&(je.tracesQueue.length>=A.batchTracesThreshold||(je.tracesScheduled||(je.tracesScheduled=!0,setTimeout((()=>{je.tracesScheduled=!1,e(je.tracesQueue),je.tracesQueue=[]}),A.batchTracesPeriod)),!1)),yt=e=>{var t;z()&&null!=(t=window)&&t.requestIdleCallback?window.requestIdleCallback(e,{timeout:A.ricTimeoutScheduleEvent}):(q()||F())&&A.interactionManager?A.interactionManager.runAfterInteractions(e):e()};function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}const kt="application/x-www-form-urlencoded; charset=UTF-8",_t=e=>{const{data:t,importance:n,isJSON:r,onError:i,url:a}=e,o=r?"application/json":kt,s=n||l.low,c=r?JSON.stringify(t):new URLSearchParams(t).toString();function u(){const e=new XMLHttpRequest;e.open("POST",a,!0),Object.keys(A.headers||{}).forEach((t=>{e.setRequestHeader(t,A.headers[t])})),e.setRequestHeader("Content-Type",kt),H.jwt&&e.setRequestHeader("authorization",\`Bearer \${H.jwt}\`),e.send(c)}if(!z()||r||!("sendBeacon"in navigator)||s!==l.low||A.headers&&0!==Object.keys(A.headers).length)if(z()&&!r)u();else{const e=Tt({},A.headers,{"Content-Type":o});H.jwt&&(e.Authorization=\`Bearer \${H.jwt}\`),fetch(a,{method:"POST",mode:"no-cors",headers:e,body:c}).catch((e=>{i(e,{context:"AnalyticsSDKApiError"})}))}else{const e=new Blob([c],{type:kt});try{navigator.sendBeacon.bind(navigator)(a,e)||u()}catch(e){console.error(e),u()}}};var St=n(762),Et=n.n(St);const xt=(e,t,n)=>{const r=e||"";return Et()("2"+r+t+n)};function Ot(){return Ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ot.apply(this,arguments)}class jt extends Error{constructor(e){super(e),this.name="CircularJsonReference",this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class Nt extends jt{constructor(...e){super(...e),this.name="DomReferenceInAnalyticsEvent"}}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}const Pt=(e,t=l.low)=>{var n;e&&je.eventsQueue.push(e),nt.isReady&&(!A.trackUserId||H.userId?(t===l.high||(n=Mt,0!==je.eventsQueue.length&&(je.eventsQueue.length>=A.batchEventsThreshold||(je.eventsScheduled||(je.eventsScheduled=!0,setTimeout((()=>{je.eventsScheduled=!1,n(vt(je.eventsQueue)),je.eventsQueue=[]}),A.batchEventsPeriod)),0))))&&Bt():je.eventsQueue.length>10&&(A.trackUserId=!1,A.onError(new Error("userId not set in Logged-in"))))},Mt=(e,t=l.low)=>{if(H.isOptOut||0===e.length)return;let n;try{n=JSON.stringify(e)}catch(t){const r=e.map((e=>e.event_type)).join(", "),[i,a]=(e=>{try{const n=[];for(const r of e){const e=Ot({},r);r.event_properties&&(e.event_properties=Ot({},e.event_properties,{currentTarget:null,target:null,relatedTarget:null,_dispatchInstances:null,_targetInst:null,view:(t=r.event_properties.view,["string","number","boolean"].includes(typeof t)?r.event_properties.view:null)})),n.push(e)}return[!0,JSON.stringify(n)]}catch(e){return[!1,""]}var t})(e);if(!i)return void A.onError(new jt(t instanceof Error?t.message:"unknown"),{listEventType:r});n=a,A.onError(new Nt("Found DOM element reference"),{listEventType:r,stringifiedEventData:n})}const r=Ae().toString(),i=It({},{e:n,v:"2",upload_time:r},{client:A.amplitudeApiKey,checksum:xt(A.amplitudeApiKey,n,r)});_t({url:A.eventsEndpoint,data:i,importance:t,onError:A.onError}),ut({metricName:"Batch Events",data:e,importance:t})},Bt=()=>{Mt(vt(je.eventsQueue)),Ne({eventsQueue:[]})};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ct.apply(this,arguments)}const Dt=Object.values(f),At=Object.values(m),Lt=e=>Dt.includes(e)?e:f.unknown,Ut=e=>At.includes(e)?e:m.unknown,Rt=(e,t,n)=>{const r={auth:J()?b.loggedIn:b.notLoggedIn,action:Lt(e),component_type:Ut(t),logging_id:n,platform:A.platform,project_name:A.projectName};return"number"==typeof H.userTypeEnum&&(r.user_type_enum=H.userTypeEnum),r},qt=e=>{const t=Ae();if(!e)return A.onError(new Error("missing logData")),Ct({},Rt(f.unknown,m.unknown),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});const n=Ct({},e,Rt(e.action,e.componentType,e.loggingId),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});return delete n.componentType,delete n.loggingId,n},Ft={blacklistRegex:[],isEnabled:!1};function zt(){return{page_key:re.pageKey,page_path:re.pagePath,prev_page_key:re.prevPageKey,prev_page_path:re.prevPagePath}}function Kt(e){Object.assign(Ft,e)}function $t(e,t,n=l.low){if(H.isOptOut)return;if(!Oe())return;const r=qt(t);!function(e){Ft.isEnabled&&(ve(),Object.assign(e,zt()))}(r),be(r),function(e){Object.keys(Se).length>0&&Object.assign(e,Se)}(r),r.has_double_fired=!1,r.event_type=e,n===l.high?Pt(r,n):yt((()=>{Pt(r)}))}function Qt(e,t=!1){t?_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Metrics",data:e})}function Wt(){return Wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wt.apply(this,arguments)}function Ht(e){if(!Oe())return;v.server!==A.platform&&!e.pagePath&&re.pagePath&&(e.pagePath=re.pagePath);const t=Object.keys(Se).length?Wt({},e.tags,Se):e.tags;t&&Object.assign(e,{tags:t}),je.metricsQueue.push(e),ht(Qt)&&(Qt(bt(je.metricsQueue)),je.metricsQueue=[])}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(this,arguments)}let Jt=function(e){return e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable",e}({});function Xt(e){return e.toLowerCase()}let Gt={};const Zt=(e,t)=>{null!=A&&A.onMarkStep&&A.onMarkStep(e,t),xe({ujs:t})};let Yt;const en={Perfume:()=>{},markStep:e=>{},markStepOnce:e=>{},incrementUjNavigation:()=>{}},tn=()=>{z()&&Yt&&Yt.markNTBT&&Yt.markNTBT()},nn=e=>{z()&&Yt&&en.markStep&&en.markStep(e)},rn=e=>{z()&&Yt&&en.markStepOnce&&en.markStepOnce(e)},an=()=>{z()&&Yt&&en.incrementUjNavigation&&en.incrementUjNavigation()};function on(e={callMarkNTBT:!0}){"unknown"!==A.platform&&(Ft.blacklistRegex.some((e=>e.test(fe())))||($t(j,{action:f.render,componentType:m.page}),e.callMarkNTBT&&tn()))}let sn=!1,cn=!1;const un=e=>{sn=!e.persisted},ln=(e,t="hidden",n=!1)=>{cn||(addEventListener("pagehide",un),addEventListener("beforeunload",(()=>{})),cn=!0),addEventListener("visibilitychange",(({timeStamp:n})=>{document.visibilityState===t&&e({timeStamp:n,isUnloading:sn})}),{capture:!0,once:n})},dn=36e3;function pn(){const e=pt(Ae());if(e&&(O.forEach((e=>{oe[e]&&delete oe[e]})),st()),!oe.lastEventTime||!Le.sessionStart||!e)return;const t=Math.round((oe.lastEventTime-Le.sessionStart)/1e3);if(t<1||t>dn)return;const n=Ce(t);$t(N,{action:f.measurement,componentType:m.page,session_duration:t,session_end:oe.lastEventTime,session_start:Le.sessionStart,session_rank:n})}function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)}const fn=[],vn=[],gn=()=>{const e=fn.shift();e&&e()},bn=()=>{const e=vn.shift();e&&e()};let hn={};function wn(e){const t=function(e){return{test_name:e.testName,group_name:e.group,subject_id:e.subjectId,exposed_at:Ae(),subject_type:e.subjectType,platform:A.platform}}(e);hn[e.testName]=hn[e.testName]||0,hn[e.testName]+k>Ae()?lt({metricName:\`Event: exposeExperiment \${e.testName} not sent\`,data:t}):(hn[e.testName]=Ae(),ot(E,hn),lt({metricName:\`Event: exposeExperiment \${e.testName} sent\`,data:t}),_t({url:A.exposureEndpoint,data:[t],onError:(t,n)=>{hn[e.testName]=0,ot(E,hn),A.onError(t,n)},isJSON:!0,importance:l.high}))}const yn=e=>{var t,r,i;U(e),z()&&(H.languageCode=(null==(t=navigator)?void 0:t.languages[0])||(null==(r=navigator)?void 0:r.language)||""),te(),(()=>{var e;if(z()&&null!=(e=window)&&e.indexedDB){const e=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}});rt({idbKeyval:{get:async t=>(await e).get("keyval",t),set:async(t,n)=>(await e).put("keyval",n,t),delete:async t=>(await e).delete("keyval",t),keys:async()=>(await e).getAllKeys("keyval")}})}else rt({idbKeyval:{get:async e=>new Promise((t=>{t(it[e])})),set:async(e,t)=>new Promise((n=>{it[e]=t,n(e)})),delete:async e=>new Promise((()=>{delete it[e]})),keys:async()=>new Promise((e=>{e(Object.keys(it))}))}})})(),lt({metricName:"Initialized Analytics:",data:{deviceId:H.deviceId}}),fn.push((()=>{Pt()})),(async()=>{const e=await at(S);rt({isReady:!0}),gn(),e&&(bn(),se({eventId:e.eventId||oe.eventId,sequenceNumber:e.sequenceNumber||oe.sequenceNumber,sessionId:e.sessionId||oe.sessionId,lastEventTime:e.lastEventTime||oe.lastEventTime,sessionUUID:e.sessionUUID||oe.sessionUUID}),function(e){se(mn({},function(e){const t={};return O.forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e),de()))}(e),Ue({sessionStart:e.sessionStart||oe.sessionStart}),De({ac:e.ac||Ie.ac,af:e.af||Ie.af,ah:e.ah||Ie.ah,al:e.al||Ie.al,am:e.am||Ie.am,ar:e.ar||Ie.ar,as:e.as||Ie.as,pv:e.pv||Ie.pv}),A.trackUserId&&Y({userId:e.userId||H.userId}),pn(),lt({metricName:"Initialized Analytics IndexedDB:",data:e}))})(),async function(){at(E).then((e=>{hn=null!=e?e:{}})).catch((e=>{e instanceof Error&&A.onError(e)}))}(),Z(),z()&&(ln((()=>{se({lastEventTime:Ae()}),st(),Bt()}),"hidden"),ln((()=>{pn()}),"visible")),z()&&(i=()=>{var e,t,n,r;te(),ee({width:null!=(e=null==(t=window)?void 0:t.innerWidth)?e:null,height:null!=(n=null==(r=window)?void 0:r.innerHeight)?n:null})},addEventListener("resize",(()=>{requestAnimationFrame((()=>{i()}))}))),(()=>{if(z())try{const e=n(2);en.markStep=e.markStep,en.markStepOnce=e.markStepOnce,en.incrementUjNavigation=e.incrementUjNavigation,Yt=new e.Perfume({analyticsTracker:e=>{const{data:t,attribution:n,metricName:r,navigatorInformation:i,rating:a}=e,o=I[r],s=(null==n?void 0:n.category)||null;if(!o&&!s)return;const c=(null==i?void 0:i.deviceMemory)||0,u=(null==i?void 0:i.hardwareConcurrency)||0,l=(null==i?void 0:i.isLowEndDevice)||!1,p=(null==i?void 0:i.isLowEndExperience)||!1,v=(null==i?void 0:i.serviceWorkerStatus)||"unsupported",g=Vt({deviceMemory:c,hardwareConcurrency:u,isLowEndDevice:l,isLowEndExperience:p,serviceWorkerStatus:v},Gt),b={is_low_end_device:l,is_low_end_experience:p,page_key:re.pageKey||"",save_data:t.saveData||!1,service_worker:v,is_perf_metric:!0};if("navigationTiming"===r)t&&"number"==typeof t.redirectTime&&Ht({metricName:I.redirectTime.eventName,metricType:d.histogram,tags:b,value:t.redirectTime||0});else if("TTFB"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),Ht({metricName:I.TTFB.eventName,metricType:d.histogram,tags:Vt({},b),value:t}),a&&Ht({metricName:\`perf_web_vitals_ttfb_\${a}\`,metricType:d.count,tags:b,value:1});else if("networkInformation"===r)null!=t&&t.effectiveType&&(Gt=t,$t(o.eventName,{action:f.measurement,componentType:m.page,networkInformationDownlink:t.downlink,networkInformationEffectiveType:t.effectiveType,networkInformationRtt:t.rtt,networkInformationSaveData:t.saveData,navigatorDeviceMemory:c,navigatorHardwareConcurrency:u}));else if("storageEstimate"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page},t,g)),Ht({metricName:"perf_storage_estimate_caches",metricType:d.histogram,tags:b,value:t.caches}),Ht({metricName:"perf_storage_estimate_indexed_db",metricType:d.histogram,tags:b,value:t.indexedDB});else if("CLS"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,score:100*t||null,vitalsScore:a||null},g)),a&&Ht({metricName:\`perf_web_vitals_cls_\${a}\`,metricType:d.count,tags:b,value:1});else if("FID"===r){const e=(null==n?void 0:n.performanceEntry)||null,r=parseInt((null==e?void 0:e.processingStart)||"");$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,processingStart:null!=e&&e.processingStart?r:null,startTime:null!=e&&e.startTime?parseInt(e.startTime):null,vitalsScore:a||null},g)),a&&Ht({metricName:\`perf_web_vitals_fidVitals_\${a}\`,metricType:d.count,tags:b,value:1})}else"userJourneyStep"===r?($t("perf_user_journey_step",Vt({action:f.measurement,componentType:m.page,duration:t||null,rating:null!=a?a:null,step_name:(null==n?void 0:n.stepName)||""},g)),Ht({metricName:\`user_journey_step.\${A.projectName}.\${A.platform}.\${(null==n?void 0:n.stepName)||""}_vitals_\${a}\`,metricType:d.count,tags:b,value:1}),Ht({metricName:\`user_journey_step.\${A.projectName}.\${A.platform}.\${(null==n?void 0:n.stepName)||""}\`,metricType:d.distribution,tags:b,value:t||null})):I[r]&&t&&($t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),a&&(Ht({metricName:\`perf_web_vitals_\${Xt(r)}_\${a}\`,metricType:d.count,tags:b,value:1}),"LCP"===r&&Ht({metricName:\`perf_web_vitals_\${Xt(r)}\`,metricType:d.distribution,tags:b,value:t})))},maxMeasureTime:3e4,steps:A.steps,onMarkStep:Zt})}catch(e){e instanceof Error&&A.onError(e)}})()},Tn=e=>{Y(e),e.userAgent&&Z(),lt({metricName:"Identify:",data:{countryCode:H.countryCode,deviceId:H.deviceId,userId:H.userId}})},kn=({blacklistRegex:e,pageKeyRegex:t,browserHistory:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.listen((()=>{on()}))},_n=({blacklistRegex:e,pageKeyRegex:t,nextJsRouter:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.events.on("routeChangeComplete",(()=>{on()}))},Sn=()=>{Y({isOptOut:!0}),ot(S,{})},En=()=>{Y({isOptOut:!1})},xn={Button:{label:"cb_button",uuid:"e921a074-40e6-4371-8700-134d5cd633e6",componentType:m.button}};function On(e,t,n){return{componentName:e,actions:t,data:n}}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Nn(e,t,n){const{componentName:r,data:i}=n;$t(e.label,jn({componentType:e.componentType,action:t,loggingId:e.uuid,component_name:r},i))}const In={actionMapping:{onPress:f.click,onHover:f.hover},handlers:{Button:{[f.click]:e=>Nn(xn.Button,f.click,e),[f.hover]:e=>Nn(xn.Button,f.hover,e)}}};function Pn(e,t=!1){t?_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Traces",data:e})}function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}const Bn=1e6;function Cn(e){return e*Bn}function Dn(e=function(){var e;return null==(e=window)?void 0:e.crypto}()){const t=new Uint32Array(2);return null==e||e.getRandomValues(t),((BigInt(t[0])<<BigInt(32))+BigInt(t[1])).toString()}function An(e,t){return{"x-datadog-origin":"rum","x-datadog-parent-id":t,"x-datadog-sampling-priority":"1","x-datadog-trace-id":e}}function Ln(e){var t;const{name:n,traceId:r,spanId:i,start:a,duration:o,resource:s,meta:c}=e;return{duration:o?Cn(o):0,name:n,resource:s,service:A.projectName,span_id:null!=i?i:Dn(),start:a?Cn(a):0,trace_id:null!=r?r:Dn(),parent_id:P,type:M,meta:Mn({platform:A.platform},re.pageKey?{page_key:re.pageKey}:{},null!=(t=Se.ujs)&&t.length?{last_ujs:Se.ujs[Se.ujs.length-1]}:{},null!=c?c:{})}}function Un(e){return[Ln(e)]}function Rn(e,t){Oe()&&function(e){return e.length>0}(e)&&(t&&function(e,t){e.forEach((e=>function(e,t){const n=Mn({},e.meta,t.meta),r={start:t.start?Cn(t.start):e.start,duration:t.duration?Cn(t.duration):e.duration};Object.assign(e,t,Mn({meta:n},r))}(e,t)))}(e,t),je.tracesQueue.push(e),wt(Pn)&&(Pn(je.tracesQueue),je.tracesQueue=[]))}function qn(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function Fn(){return Fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fn.apply(this,arguments)}function zn(){return void 0!==typeof window&&"performance"in window&&"mark"in performance&&"getEntriesByName"in performance}function Kn(e,t){return\`perf_\${e}\${null!=t&&t.label?\`_\${t.label}\`:""}\`}function $n(e,t,n){return\`\${Kn(e,n)}__\${t}\`}let Qn={};function Wn(e,t,n){if(!zn())return;const r=$n(e,t,n);if(performance.mark(r),"end"===t){const t=Kn(e,n);!function(e,t,n){try{performance.measure(e,t,n)}catch(e){A.onError(e)}}(t,$n(e,"start",n),r);const i=performance.getEntriesByName(t).pop();i&&Ht(Fn({metricName:e,metricType:d.distribution,value:i.duration},null!=n&&n.tags?{tags:n.tags}:{}))}}function Hn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]||(Wn(e,"start",t),Qn[n]=!0)}function Vn(e,t){const n=$n(e,"start",t),r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(Qn,[n].map(qn));Qn=r}function Jn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]&&(Wn(e,"end",t),Vn(e,t))}function Xn(){zn()&&(performance.clearMarks(),Qn={})}var Gn=n(784);function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}function Yn(e,t,n=l.low){const r=(0,Gn.useRef)(t);return(0,Gn.useEffect)((()=>{r.current=t}),[t]),(0,Gn.useCallback)((t=>{$t(e,Zn({},r.current,t),n)}),[e,n])}function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t,n=l.low){(0,Gn.useEffect)((()=>{const r=er({},t,{action:f.render});$t(e,r,n)}),[])}function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=function(e,t){return{markStartPerf:(0,Gn.useCallback)((()=>Hn(e,t)),[e,t]),markEndPerf:(0,Gn.useCallback)((n=>Jn(e,nr({},t,n))),[e,t])}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function ar(){return Object.entries(ir({},Se,zt(),{sessionUUID:oe.sessionUUID,userId:oe.userId})).reduce(((e,t)=>{return null!=(n=t[1])&&""!==n?ir({},e,{[t[0]]:t[1]}):e;var n}),{})}async function or(){return new Promise((e=>{Mt(vt(je.eventsQueue)),Qt(bt(je.metricsQueue),!0),Pn(je.tracesQueue,!0),Ne({eventsQueue:[],metricsQueue:[],tracesQueue:[]}),e()}))}function sr(){return{"X-CB-Device-ID":H.deviceId||"unknown","X-CB-Is-Logged-In":H.userId?"true":"false","X-CB-Pagekey":re.pageKey||"unknown","X-CB-UJS":(e=Se.ujs,void 0===e||0===e.length?"":e.join(",")),"X-CB-Platform":A.platform||"unknown","X-CB-Project-Name":A.projectName||"unknown","X-CB-Session-UUID":oe.sessionUUID||"unknown","X-CB-Version-Name":A.version?String(A.version):"unknown"};var e}})(),r})()}));`;
const loadTelemetryScript = () => {
  return new Promise((resolve, reject) => {
    if (window.ClientAnalytics) {
      return resolve();
    }
    try {
      const script = document.createElement("script");
      script.textContent = TELEMETRY_SCRIPT_CONTENT;
      script.type = "text/javascript";
      document.head.appendChild(script);
      initCCA();
      document.head.removeChild(script);
      resolve();
    } catch (_a) {
      console.error("Failed to execute inlined telemetry script");
      reject();
    }
  });
};
const initCCA = () => {
  var _a, _b, _c;
  if (typeof window !== "undefined") {
    const deviceId = (_c = (_a = store.config.get().deviceId) !== null && _a !== void 0 ? _a : (_b = window.crypto) === null || _b === void 0 ? void 0 : _b.randomUUID()) !== null && _c !== void 0 ? _c : "";
    if (window.ClientAnalytics) {
      const { init, identify, PlatformName } = window.ClientAnalytics;
      init({
        isProd: true,
        amplitudeApiKey: "c66737ad47ec354ced777935b0af822e",
        platform: PlatformName.web,
        projectName: "base_account_sdk",
        showDebugLogging: false,
        version: "1.0.0",
        apiEndpoint: "https://cca-lite.coinbase.com"
      });
      identify({ deviceId });
      store.config.set({ deviceId });
    }
  }
};
const standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
};
const errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  "4001": {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  "4100": {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  "4200": {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  "4900": {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  "4901": {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  },
  "4902": {
    standard: "EIP-3085",
    message: "Unrecognized chain ID."
  }
};
const FALLBACK_MESSAGE = "Unspecified error message.";
const JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
  if (code && Number.isInteger(code)) {
    const codeString = code.toString();
    if (hasKey(errorValues, codeString)) {
      return errorValues[codeString].message;
    }
    if (isJsonRpcServerError(code)) {
      return JSON_RPC_SERVER_ERROR_MESSAGE;
    }
  }
  return fallbackMessage;
}
function isValidCode(code) {
  if (!Number.isInteger(code)) {
    return false;
  }
  const codeString = code.toString();
  if (errorValues[codeString]) {
    return true;
  }
  if (isJsonRpcServerError(code)) {
    return true;
  }
  return false;
}
function serialize(error, { shouldIncludeStack = false } = {}) {
  const serialized = {};
  if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
    const _error = error;
    serialized.code = _error.code;
    if (_error.message && typeof _error.message === "string") {
      serialized.message = _error.message;
      if (hasKey(_error, "data")) {
        serialized.data = _error.data;
      }
    } else {
      serialized.message = getMessageFromCode(serialized.code);
      serialized.data = { originalError: assignOriginalError(error) };
    }
  } else {
    serialized.code = standardErrorCodes.rpc.internal;
    serialized.message = hasStringProperty(error, "message") ? error.message : FALLBACK_MESSAGE;
    serialized.data = { originalError: assignOriginalError(error) };
  }
  if (shouldIncludeStack) {
    serialized.stack = hasStringProperty(error, "stack") ? error.stack : void 0;
  }
  return serialized;
}
function isJsonRpcServerError(code) {
  return code >= -32099 && code <= -32e3;
}
function assignOriginalError(error) {
  if (error && typeof error === "object" && !Array.isArray(error)) {
    return Object.assign({}, error);
  }
  return error;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasStringProperty(obj, prop) {
  return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
}
const standardErrors = {
  rpc: {
    parse: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.parse, arg),
    invalidRequest: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidRequest, arg),
    invalidParams: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidParams, arg),
    methodNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotFound, arg),
    internal: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.internal, arg),
    server: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      }
      const { code } = opts;
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      }
      return getEthJsonRpcError(code, opts);
    },
    invalidInput: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidInput, arg),
    resourceNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceNotFound, arg),
    resourceUnavailable: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceUnavailable, arg),
    transactionRejected: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.transactionRejected, arg),
    methodNotSupported: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotSupported, arg),
    limitExceeded: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.limitExceeded, arg)
  },
  provider: {
    userRejectedRequest: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.userRejectedRequest, arg);
    },
    unauthorized: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unauthorized, arg);
    },
    unsupportedMethod: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unsupportedMethod, arg);
    },
    disconnected: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.disconnected, arg);
    },
    chainDisconnected: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.chainDisconnected, arg);
    },
    unsupportedChain: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unsupportedChain, arg);
    },
    custom: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      }
      const { code, message, data } = opts;
      if (!message || typeof message !== "string") {
        throw new Error('"message" must be a nonempty string');
      }
      return new EthereumProviderError(code, message, data);
    }
  }
};
function getEthJsonRpcError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumRpcError(code, message || getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumProviderError(code, message || getMessageFromCode(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === "string") {
      return [arg];
    }
    if (typeof arg === "object" && !Array.isArray(arg)) {
      const { message, data } = arg;
      if (message && typeof message !== "string") {
        throw new Error("Must specify string message.");
      }
      return [message || void 0, data];
    }
  }
  return [];
}
class EthereumRpcError extends Error {
  constructor(code, message, data) {
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string.');
    }
    super(message);
    this.code = code;
    if (data !== void 0) {
      this.data = data;
    }
  }
}
class EthereumProviderError extends EthereumRpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(code, message, data) {
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(code, message, data);
  }
}
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1e3 && code <= 4999;
}
function isActionableHttpRequestError(errorObject) {
  return typeof errorObject === "object" && errorObject !== null && "code" in errorObject && "data" in errorObject && errorObject.code === -32090 && typeof errorObject.data === "object" && errorObject.data !== null && "type" in errorObject.data && errorObject.data.type === "INSUFFICIENT_FUNDS";
}
function isViemError(error) {
  return typeof error === "object" && error !== null && "details" in error;
}
function viemHttpErrorToProviderError(error) {
  try {
    const details = JSON.parse(error.details);
    return new EthereumRpcError(details.code, details.message, details.data);
  } catch (_2) {
    return null;
  }
}
function OpaqueType() {
  return (value) => value;
}
const HexString = OpaqueType();
const BigIntString = OpaqueType();
function IntNumber(num) {
  return Math.floor(num);
}
const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
function randomBytesHex(length) {
  return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
function uint8ArrayToHex(value) {
  return [...value].map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
function hexStringToUint8Array(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16)));
}
function hexStringFromBuffer(buf, includePrefix = false) {
  const hex = buf.toString("hex");
  return HexString(includePrefix ? `0x${hex}` : hex);
}
function encodeToHexString(str) {
  return hexStringFromBuffer(ensureBuffer(str), true);
}
function bigIntStringFromBigInt(bi) {
  return BigIntString(bi.toString(10));
}
function hexStringFromNumber(num) {
  return HexString(`0x${BigInt(num).toString(16)}`);
}
function has0xPrefix(str) {
  return str.startsWith("0x") || str.startsWith("0X");
}
function strip0x(hex) {
  if (has0xPrefix(hex)) {
    return hex.slice(2);
  }
  return hex;
}
function prepend0x(hex) {
  if (has0xPrefix(hex)) {
    return `0x${hex.slice(2)}`;
  }
  return `0x${hex}`;
}
function isHexString$1(hex) {
  if (typeof hex !== "string") {
    return false;
  }
  const s2 = strip0x(hex).toLowerCase();
  return HEXADECIMAL_STRING_REGEX.test(s2);
}
function ensureHexString(hex, includePrefix = false) {
  if (typeof hex === "string") {
    const s2 = strip0x(hex).toLowerCase();
    if (HEXADECIMAL_STRING_REGEX.test(s2)) {
      return HexString(includePrefix ? `0x${s2}` : s2);
    }
  }
  throw standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
function ensureEvenLengthHexString(hex, includePrefix = false) {
  let h2 = ensureHexString(hex, false);
  if (h2.length % 2 === 1) {
    h2 = HexString(`0${h2}`);
  }
  return includePrefix ? HexString(`0x${h2}`) : h2;
}
function ensureAddressString(str) {
  if (typeof str === "string") {
    const s2 = strip0x(str).toLowerCase();
    if (isHexString$1(s2) && s2.length === 40) {
      return prepend0x(s2);
    }
  }
  throw standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
function ensureBuffer(str) {
  if (Buffer.isBuffer(str)) {
    return str;
  }
  if (typeof str === "string") {
    if (isHexString$1(str)) {
      const s2 = ensureEvenLengthHexString(str, false);
      return Buffer.from(s2, "hex");
    }
    return Buffer.from(str, "utf8");
  }
  throw standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
function ensureIntNumber(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return IntNumber(num);
  }
  if (typeof num === "string") {
    if (INT_STRING_REGEX.test(num)) {
      return IntNumber(Number(num));
    }
    if (isHexString$1(num)) {
      return IntNumber(Number(BigInt(ensureEvenLengthHexString(num, true))));
    }
  }
  throw standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
function ensureBigInt(val) {
  if (val !== null && (typeof val === "bigint" || isBigNumber(val))) {
    return BigInt(val.toString(10));
  }
  if (typeof val === "number") {
    return BigInt(ensureIntNumber(val));
  }
  if (typeof val === "string") {
    if (INT_STRING_REGEX.test(val)) {
      return BigInt(val);
    }
    if (isHexString$1(val)) {
      return BigInt(ensureEvenLengthHexString(val, true));
    }
  }
  throw standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
function ensureParsedJSONObject(val) {
  if (typeof val === "string") {
    return JSON.parse(val);
  }
  if (typeof val === "object") {
    return val;
  }
  throw standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
function isBigNumber(val) {
  if (val == null || typeof val.constructor !== "function") {
    return false;
  }
  const { constructor: constructor_ } = val;
  return typeof constructor_.config === "function" && typeof constructor_.EUCLID === "number";
}
const COOP_ERROR_MESSAGE = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`;
const createCoopChecker = () => {
  let crossOriginOpenerPolicy;
  return {
    getCrossOriginOpenerPolicy: () => {
      if (crossOriginOpenerPolicy === void 0) {
        return "undefined";
      }
      return crossOriginOpenerPolicy;
    },
    checkCrossOriginOpenerPolicy: async () => {
      if (typeof window === "undefined") {
        crossOriginOpenerPolicy = "non-browser-env";
        return;
      }
      try {
        const url = `${window.location.origin}${window.location.pathname}`;
        const response = await fetch(url, {
          method: "HEAD"
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = response.headers.get("Cross-Origin-Opener-Policy");
        crossOriginOpenerPolicy = result !== null && result !== void 0 ? result : "null";
        if (crossOriginOpenerPolicy === "same-origin") {
          console.error(COOP_ERROR_MESSAGE);
        }
      } catch (error) {
        console.error("Error checking Cross-Origin-Opener-Policy:", error.message);
        crossOriginOpenerPolicy = "error";
      }
    }
  };
};
const { checkCrossOriginOpenerPolicy, getCrossOriginOpenerPolicy } = createCoopChecker();
async function fetchRPCRequest(request, rpcUrl) {
  const requestBody = Object.assign(Object.assign({}, request), { jsonrpc: "2.0", id: crypto.randomUUID() });
  const res = await window.fetch(rpcUrl, {
    method: "POST",
    body: JSON.stringify(requestBody),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-Cbw-Sdk-Version": VERSION,
      "X-Cbw-Sdk-Platform": NAME
    }
  });
  const { result, error } = await res.json();
  if (error)
    throw error;
  return result;
}
function getCoinbaseInjectedLegacyProvider() {
  const window2 = globalThis;
  return window2.coinbaseWalletExtension;
}
function getInjectedEthereum() {
  var _a, _b;
  try {
    const window2 = globalThis;
    return (_a = window2.ethereum) !== null && _a !== void 0 ? _a : (_b = window2.top) === null || _b === void 0 ? void 0 : _b.ethereum;
  } catch (_c) {
    return void 0;
  }
}
function getCoinbaseInjectedProvider({ metadata, preference }) {
  var _a, _b;
  const { appName, appLogoUrl, appChainIds } = metadata;
  if (preference.options !== "smartWalletOnly") {
    const extension = getCoinbaseInjectedLegacyProvider();
    if (extension) {
      (_a = extension.setAppInfo) === null || _a === void 0 ? void 0 : _a.call(extension, appName, appLogoUrl, appChainIds, preference);
      return extension;
    }
  }
  const ethereum = getInjectedEthereum();
  if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
    (_b = ethereum.setAppInfo) === null || _b === void 0 ? void 0 : _b.call(ethereum, appName, appLogoUrl, appChainIds, preference);
    return ethereum;
  }
  return void 0;
}
function checkErrorForInvalidRequestArgs(args) {
  if (!args || typeof args !== "object" || Array.isArray(args)) {
    throw standardErrors.rpc.invalidParams({
      message: "Expected a single, non-array, object argument.",
      data: args
    });
  }
  const { method, params } = args;
  if (typeof method !== "string" || method.length === 0) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: args
    });
  }
  if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: args
    });
  }
  switch (method) {
    case "eth_sign":
    case "eth_signTypedData_v2":
    case "eth_subscribe":
    case "eth_unsubscribe":
      throw standardErrors.provider.unsupportedMethod();
  }
}
function validatePreferences(preference) {
  if (!preference) {
    return;
  }
  if (!["all", "smartWalletOnly", "eoaOnly"].includes(preference.options)) {
    throw new Error(`Invalid options: ${preference.options}`);
  }
  if (preference.attribution) {
    if (preference.attribution.auto !== void 0 && preference.attribution.dataSuffix !== void 0) {
      throw new Error(`Attribution cannot contain both auto and dataSuffix properties`);
    }
  }
  if (preference.telemetry) {
    if (typeof preference.telemetry !== "boolean") {
      throw new Error(`Telemetry must be a boolean`);
    }
  }
}
function validateSubAccount(toAccount) {
  if (typeof toAccount !== "function") {
    throw new Error(`toAccount is not a function`);
  }
}
const CB_KEYS_URL = "https://keys.coinbase.com/connect";
const CB_WALLET_RPC_URL = "https://rpc.wallet.coinbase.com";
const WALLETLINK_URL = "https://www.walletlink.org";
const CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink";
var ComponentType;
(function(ComponentType2) {
  ComponentType2["unknown"] = "unknown";
  ComponentType2["banner"] = "banner";
  ComponentType2["button"] = "button";
  ComponentType2["card"] = "card";
  ComponentType2["chart"] = "chart";
  ComponentType2["content_script"] = "content_script";
  ComponentType2["dropdown"] = "dropdown";
  ComponentType2["link"] = "link";
  ComponentType2["page"] = "page";
  ComponentType2["modal"] = "modal";
  ComponentType2["table"] = "table";
  ComponentType2["search_bar"] = "search_bar";
  ComponentType2["service_worker"] = "service_worker";
  ComponentType2["text"] = "text";
  ComponentType2["text_input"] = "text_input";
  ComponentType2["tray"] = "tray";
  ComponentType2["checkbox"] = "checkbox";
  ComponentType2["icon"] = "icon";
})(ComponentType || (ComponentType = {}));
var ActionType;
(function(ActionType2) {
  ActionType2["unknown"] = "unknown";
  ActionType2["blur"] = "blur";
  ActionType2["click"] = "click";
  ActionType2["change"] = "change";
  ActionType2["dismiss"] = "dismiss";
  ActionType2["focus"] = "focus";
  ActionType2["hover"] = "hover";
  ActionType2["select"] = "select";
  ActionType2["measurement"] = "measurement";
  ActionType2["move"] = "move";
  ActionType2["process"] = "process";
  ActionType2["render"] = "render";
  ActionType2["scroll"] = "scroll";
  ActionType2["view"] = "view";
  ActionType2["search"] = "search";
  ActionType2["keyPress"] = "keyPress";
  ActionType2["error"] = "error";
})(ActionType || (ActionType = {}));
var AnalyticsEventImportance;
(function(AnalyticsEventImportance2) {
  AnalyticsEventImportance2["low"] = "low";
  AnalyticsEventImportance2["high"] = "high";
})(AnalyticsEventImportance || (AnalyticsEventImportance = {}));
function logEvent(name, event, importance) {
  var _a, _b, _c, _d;
  if (window.ClientAnalytics) {
    (_a = window.ClientAnalytics) === null || _a === void 0 ? void 0 : _a.logEvent(name, Object.assign(Object.assign({}, event), { sdkVersion: VERSION, appName: (_c = (_b = store.config.get().metadata) === null || _b === void 0 ? void 0 : _b.appName) !== null && _c !== void 0 ? _c : "", appOrigin: window.location.origin, appPreferredSigner: (_d = store.config.get().preference) === null || _d === void 0 ? void 0 : _d.options }), importance);
  }
}
const logPopupSetupStarted = () => {
  logEvent("communicator.popup_setup.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown
  }, AnalyticsEventImportance.high);
};
const logPopupSetupCompleted = () => {
  logEvent("communicator.popup_setup.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown
  }, AnalyticsEventImportance.high);
};
const logPopupUnloadReceived = () => {
  logEvent("communicator.popup_unload.received", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown
  }, AnalyticsEventImportance.high);
};
const logSnackbarShown = ({ snackbarContext }) => {
  logEvent(`snackbar.${snackbarContext}.shown`, {
    action: ActionType.render,
    componentType: ComponentType.modal,
    snackbarContext
  }, AnalyticsEventImportance.high);
};
const logSnackbarActionClicked = ({ snackbarContext, snackbarAction }) => {
  logEvent(`snackbar.${snackbarContext}.action_clicked`, {
    action: ActionType.click,
    componentType: ComponentType.button,
    snackbarContext,
    snackbarAction
  }, AnalyticsEventImportance.high);
};
const css$2 = /* @__PURE__ */ (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();
function injectCssReset() {
  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.appendChild(document.createTextNode(css$2));
  document.documentElement.appendChild(styleEl);
}
function isInIFrame() {
  try {
    return window.frameElement !== null;
  } catch (_2) {
    return false;
  }
}
function getLocation() {
  try {
    if (isInIFrame() && window.top) {
      return window.top.location;
    }
    return window.location;
  } catch (_2) {
    return window.location;
  }
}
function isMobileWeb() {
  var _a;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
}
function isDarkMode() {
  var _a, _b;
  return (_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches) !== null && _b !== void 0 ? _b : false;
}
const css$1 = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();
const cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
class Snackbar {
  constructor() {
    this.items = /* @__PURE__ */ new Map();
    this.nextItemKey = 0;
    this.root = null;
    this.darkMode = isDarkMode();
  }
  attach(el) {
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-snackbar-root";
    el.appendChild(this.root);
    this.render();
  }
  presentItem(itemProps) {
    const key = this.nextItemKey++;
    this.items.set(key, itemProps);
    this.render();
    return () => {
      this.items.delete(key);
      this.render();
    };
  }
  clear() {
    this.items.clear();
    this.render();
  }
  render() {
    if (!this.root) {
      return;
    }
    B$1(_(
      "div",
      null,
      _(SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => _(SnackbarInstance, Object.assign({}, itemProps, { key }))))
    ), this.root);
  }
}
const SnackbarContainer = (props) => _(
  "div",
  { class: clsx("-cbwsdk-snackbar-container") },
  _("style", null, css$1),
  _("div", { class: "-cbwsdk-snackbar" }, props.children)
);
const SnackbarInstance = ({ autoExpand, message, menuItems }) => {
  const [hidden, setHidden] = h(true);
  const [expanded, setExpanded] = h(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
  y(() => {
    const timers = [
      window.setTimeout(() => {
        setHidden(false);
      }, 1),
      window.setTimeout(() => {
        setExpanded(true);
      }, 1e4)
    ];
    return () => {
      timers.forEach(window.clearTimeout);
    };
  });
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return _(
    "div",
    { class: clsx("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
    _(
      "div",
      { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
      _("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
      " ",
      _("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
      _(
        "div",
        { class: "-gear-container" },
        !expanded && _(
          "svg",
          { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          _("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
        ),
        _("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
      )
    ),
    menuItems && menuItems.length > 0 && _("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i2) => _(
      "div",
      { class: clsx("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i2 },
      _(
        "svg",
        { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        _("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
      ),
      _("span", { class: clsx("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
    )))
  );
};
const RETRY_SVG_PATH = "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
class WalletLinkRelayUI {
  constructor() {
    this.attached = false;
    this.snackbar = new Snackbar();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    const el = document.documentElement;
    const container = document.createElement("div");
    container.className = "-cbwsdk-css-reset";
    el.appendChild(container);
    this.snackbar.attach(container);
    this.attached = true;
    injectCssReset();
  }
  showConnecting(options) {
    let snackbarProps;
    if (options.isUnlinkedErrorState) {
      snackbarProps = {
        autoExpand: true,
        message: "Connection lost",
        menuItems: [
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    } else {
      snackbarProps = {
        message: "Confirm on phone",
        menuItems: [
          {
            isRed: true,
            info: "Cancel transaction",
            svgWidth: "11",
            svgHeight: "11",
            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
            defaultFillRule: "inherit",
            defaultClipRule: "inherit",
            onClick: options.onCancel
          },
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: RETRY_SVG_PATH,
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    }
    return this.snackbar.presentItem(snackbarProps);
  }
}
const POPUP_WIDTH = 420;
const POPUP_HEIGHT = 700;
const RETRY_BUTTON = {
  isRed: false,
  info: "Retry",
  svgWidth: "10",
  svgHeight: "11",
  path: RETRY_SVG_PATH,
  defaultFillRule: "evenodd",
  defaultClipRule: "evenodd"
};
const POPUP_BLOCKED_MESSAGE = "Popup was blocked. Try again.";
let snackbar = null;
function openPopup(url) {
  const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
  const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
  appendAppInfoQueryParams(url);
  function tryOpenPopup() {
    const popupId = `wallet_${crypto.randomUUID()}`;
    const popup2 = window.open(url, popupId, `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
    popup2 === null || popup2 === void 0 ? void 0 : popup2.focus();
    if (!popup2) {
      return null;
    }
    return popup2;
  }
  let popup = tryOpenPopup();
  if (!popup) {
    const sb = initSnackbar();
    return new Promise((resolve, reject) => {
      logSnackbarShown({ snackbarContext: "popup_blocked" });
      sb.presentItem({
        autoExpand: true,
        message: POPUP_BLOCKED_MESSAGE,
        menuItems: [
          Object.assign(Object.assign({}, RETRY_BUTTON), { onClick: () => {
            logSnackbarActionClicked({
              snackbarContext: "popup_blocked",
              snackbarAction: "confirm"
            });
            popup = tryOpenPopup();
            if (popup) {
              resolve(popup);
            } else {
              reject(standardErrors.rpc.internal("Popup window was blocked"));
            }
            sb.clear();
          } })
        ]
      });
    });
  }
  return Promise.resolve(popup);
}
function closePopup(popup) {
  if (popup && !popup.closed) {
    popup.close();
  }
}
function appendAppInfoQueryParams(url) {
  const params = {
    sdkName: NAME,
    sdkVersion: VERSION,
    origin: window.location.origin,
    coop: getCrossOriginOpenerPolicy()
  };
  for (const [key, value] of Object.entries(params)) {
    if (!url.searchParams.has(key)) {
      url.searchParams.append(key, value.toString());
    }
  }
}
function initSnackbar() {
  if (!snackbar) {
    const root = document.createElement("div");
    root.className = "-cbwsdk-css-reset";
    document.body.appendChild(root);
    snackbar = new Snackbar();
    snackbar.attach(root);
  }
  return snackbar;
}
class Communicator {
  constructor({ url = CB_KEYS_URL, metadata, preference }) {
    this.popup = null;
    this.listeners = /* @__PURE__ */ new Map();
    this.postMessage = async (message) => {
      const popup = await this.waitForPopupLoaded();
      popup.postMessage(message, this.url.origin);
    };
    this.postRequestAndWaitForResponse = async (request) => {
      const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
      this.postMessage(request);
      return await responsePromise;
    };
    this.onMessage = async (predicate) => {
      return new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.origin !== this.url.origin)
            return;
          const message = event.data;
          if (predicate(message)) {
            resolve(message);
            window.removeEventListener("message", listener);
            this.listeners.delete(listener);
          }
        };
        window.addEventListener("message", listener);
        this.listeners.set(listener, { reject });
      });
    };
    this.disconnect = () => {
      closePopup(this.popup);
      this.popup = null;
      this.listeners.forEach(({ reject }, listener) => {
        reject(standardErrors.provider.userRejectedRequest("Request rejected"));
        window.removeEventListener("message", listener);
      });
      this.listeners.clear();
    };
    this.waitForPopupLoaded = async () => {
      if (this.popup && !this.popup.closed) {
        this.popup.focus();
        return this.popup;
      }
      logPopupSetupStarted();
      this.popup = await openPopup(this.url);
      this.onMessage(({ event }) => event === "PopupUnload").then(() => {
        this.disconnect();
        logPopupUnloadReceived();
      }).catch(() => {
      });
      return this.onMessage(({ event }) => event === "PopupLoaded").then((message) => {
        this.postMessage({
          requestId: message.id,
          data: {
            version: VERSION,
            metadata: this.metadata,
            preference: this.preference,
            location: window.location.toString()
          }
        });
      }).then(() => {
        if (!this.popup)
          throw standardErrors.rpc.internal();
        logPopupSetupCompleted();
        return this.popup;
      });
    };
    this.url = new URL(url);
    this.metadata = metadata;
    this.preference = preference;
  }
}
function isErrorResponse(response) {
  return response.errorMessage !== void 0;
}
function serializeError(error) {
  const serialized = serialize(getErrorObject(error), {
    shouldIncludeStack: true
  });
  const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  docUrl.searchParams.set("version", VERSION);
  docUrl.searchParams.set("code", serialized.code.toString());
  docUrl.searchParams.set("message", serialized.message);
  return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
}
function getErrorObject(error) {
  var _a;
  if (typeof error === "string") {
    return {
      message: error,
      code: standardErrorCodes.rpc.internal
    };
  }
  if (isErrorResponse(error)) {
    const message = error.errorMessage;
    const code = (_a = error.errorCode) !== null && _a !== void 0 ? _a : message.match(/(denied|rejected)/i) ? standardErrorCodes.provider.userRejectedRequest : void 0;
    return Object.assign(Object.assign({}, error), {
      message,
      code,
      data: { method: error.method }
    });
  }
  return error;
}
class ProviderEventEmitter extends EventEmitter {
}
class ScopedLocalStorage {
  constructor(scope, module) {
    this.scope = scope;
    this.module = module;
  }
  storeObject(key, item) {
    this.setItem(key, JSON.stringify(item));
  }
  loadObject(key) {
    const item = this.getItem(key);
    return item ? JSON.parse(item) : void 0;
  }
  setItem(key, value) {
    localStorage.setItem(this.scopedKey(key), value);
  }
  getItem(key) {
    return localStorage.getItem(this.scopedKey(key));
  }
  removeItem(key) {
    localStorage.removeItem(this.scopedKey(key));
  }
  clear() {
    const prefix = this.scopedKey("");
    const keysToRemove = [];
    for (let i2 = 0; i2 < localStorage.length; i2++) {
      const key = localStorage.key(i2);
      if (typeof key === "string" && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }
  scopedKey(key) {
    return `-${this.scope}${this.module ? `:${this.module}` : ""}:${key}`;
  }
  static clearAll() {
    new ScopedLocalStorage("CBWSDK").clear();
    new ScopedLocalStorage("walletlink").clear();
  }
}
const logSignerLoadedFromStorage = ({ signerType }) => {
  logEvent("provider.signer.loaded_from_storage", {
    action: ActionType.measurement,
    componentType: ComponentType.unknown,
    signerType
  }, AnalyticsEventImportance.low);
};
const logRequestStarted$2 = ({ method, correlationId }) => {
  logEvent("provider.request.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId
  }, AnalyticsEventImportance.high);
};
const logRequestError$2 = ({ method, correlationId, signerType, errorMessage }) => {
  logEvent("provider.request.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    signerType,
    correlationId,
    errorMessage
  }, AnalyticsEventImportance.high);
};
const logRequestResponded = ({ method, signerType, correlationId }) => {
  logEvent("provider.request.responded", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    signerType,
    correlationId
  }, AnalyticsEventImportance.high);
};
const logEnableFunctionCalled = () => {
  logEvent("provider.enable_function.called", {
    action: ActionType.measurement,
    componentType: ComponentType.unknown
  }, AnalyticsEventImportance.high);
};
const logSignerSelectionRequested = () => {
  logEvent("signer.selection.requested", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown
  }, AnalyticsEventImportance.high);
};
const logSignerSelectionResponded = (signerType) => {
  logEvent("signer.selection.responded", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    signerType
  }, AnalyticsEventImportance.high);
};
const correlationIdsStore = createStore$1(() => ({
  correlationIds: /* @__PURE__ */ new Map()
}));
const correlationIds = {
  get: (key) => {
    const correlationId = correlationIdsStore.getState().correlationIds.get(key);
    return correlationId;
  },
  set: (key, correlationId) => {
    correlationIdsStore.setState((state) => {
      const newMap = new Map(state.correlationIds);
      newMap.set(key, correlationId);
      return { correlationIds: newMap };
    });
  },
  delete: (key) => {
    correlationIdsStore.setState((state) => {
      const newMap = new Map(state.correlationIds);
      newMap.delete(key);
      return { correlationIds: newMap };
    });
  },
  clear: () => {
    correlationIdsStore.setState({
      correlationIds: /* @__PURE__ */ new Map()
    });
  }
};
const logHandshakeStarted$1 = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_signer.handshake.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logHandshakeError$1 = ({ method, correlationId, errorMessage }) => {
  var _a;
  logEvent("scw_signer.handshake.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    errorMessage,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logHandshakeCompleted$1 = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_signer.handshake.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logRequestStarted$1 = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_signer.request.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logRequestError$1 = ({ method, correlationId, errorMessage }) => {
  var _a;
  logEvent("scw_signer.request.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    errorMessage,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logRequestCompleted$1 = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_signer.request.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logSubAccountRequestStarted = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_sub_account.request.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logSubAccountRequestCompleted = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_sub_account.request.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logSubAccountRequestError = ({ method, correlationId, errorMessage }) => {
  var _a;
  logEvent("scw_sub_account.request.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    errorMessage,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logAddOwnerStarted = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_sub_account.add_owner.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logAddOwnerCompleted = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_sub_account.add_owner.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logAddOwnerError = ({ method, correlationId, errorMessage }) => {
  var _a;
  logEvent("scw_sub_account.add_owner.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    errorMessage,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingStarted = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_sub_account.insufficient_balance.error_handling.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingCompleted = ({ method, correlationId }) => {
  var _a;
  logEvent("scw_sub_account.insufficient_balance.error_handling.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const logInsufficientBalanceErrorHandlingError = ({ method, correlationId, errorMessage }) => {
  var _a;
  logEvent("scw_sub_account.insufficient_balance.error_handling.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    errorMessage,
    enableAutoSubAccounts: (_a = store.subAccountsConfig.get()) === null || _a === void 0 ? void 0 : _a.enableAutoSubAccounts
  }, AnalyticsEventImportance.high);
};
const parseErrorMessageFromAny = (errorOrAny) => {
  return "message" in errorOrAny && typeof errorOrAny.message === "string" ? errorOrAny.message : "";
};
const ChainClients = createStore$1(() => ({}));
function createClients(chains2) {
  chains2.forEach((c2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!c2.rpcUrl) {
      return;
    }
    const viemchain = defineChain({
      id: c2.id,
      rpcUrls: {
        default: {
          http: [c2.rpcUrl]
        }
      },
      name: (_b = (_a = c2.nativeCurrency) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "",
      nativeCurrency: {
        name: (_d = (_c = c2.nativeCurrency) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : "",
        symbol: (_f = (_e = c2.nativeCurrency) === null || _e === void 0 ? void 0 : _e.symbol) !== null && _f !== void 0 ? _f : "",
        decimals: (_h = (_g = c2.nativeCurrency) === null || _g === void 0 ? void 0 : _g.decimal) !== null && _h !== void 0 ? _h : 18
      }
    });
    const client = createPublicClient({
      chain: viemchain,
      transport: http(c2.rpcUrl)
    });
    const bundlerClient = createBundlerClient({
      client,
      transport: http(c2.rpcUrl)
    });
    ChainClients.setState({
      [c2.id]: {
        client,
        bundlerClient
      }
    });
  });
}
function getClient(chainId) {
  var _a;
  return (_a = ChainClients.getState()[chainId]) === null || _a === void 0 ? void 0 : _a.client;
}
function assertPresence(value, error, message) {
  if (value === null || value === void 0) {
    throw error !== null && error !== void 0 ? error : standardErrors.rpc.invalidParams({
      message: "value must be present",
      data: value
    });
  }
}
function assertArrayPresence(value, message) {
  if (!Array.isArray(value)) {
    throw standardErrors.rpc.invalidParams({
      message: message !== null && message !== void 0 ? message : "value must be an array",
      data: value
    });
  }
}
function assertSubAccount(info) {
  if (typeof info !== "object" || info === null) {
    throw standardErrors.rpc.internal("sub account info is not an object");
  }
  if (!("address" in info)) {
    throw standardErrors.rpc.internal("sub account is invalid");
  }
  if ("address" in info && typeof info.address === "string" && !isAddress(info.address)) {
    throw standardErrors.rpc.internal("sub account address is invalid");
  }
  if ("factory" in info && typeof info.factory === "string" && !isAddress(info.factory)) {
    throw standardErrors.rpc.internal("sub account factory address is invalid");
  }
  if ("factoryData" in info && typeof info.factoryData === "string" && !isHex(info.factoryData)) {
    throw standardErrors.rpc.internal("sub account factory data is invalid");
  }
}
async function generateKeyPair$1() {
  return crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, true, ["deriveKey"]);
}
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
  return crypto.subtle.deriveKey({
    name: "ECDH",
    public: peerPublicKey
  }, ownPrivateKey, {
    name: "AES-GCM",
    length: 256
  }, false, ["encrypt", "decrypt"]);
}
async function encrypt(sharedSecret, plainText) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipherText = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, new TextEncoder().encode(plainText));
  return { iv, cipherText };
}
async function decrypt(sharedSecret, { iv, cipherText }) {
  const plainText = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, cipherText);
  return new TextDecoder().decode(plainText);
}
function getFormat(keyType) {
  switch (keyType) {
    case "public":
      return "spki";
    case "private":
      return "pkcs8";
  }
}
async function exportKeyToHexString(type, key) {
  const format = getFormat(type);
  const exported = await crypto.subtle.exportKey(format, key);
  return uint8ArrayToHex(new Uint8Array(exported));
}
async function importKeyFromHexString(type, hexString) {
  const format = getFormat(type);
  const arrayBuffer = hexStringToUint8Array(hexString).buffer;
  return await crypto.subtle.importKey(format, new Uint8Array(arrayBuffer), {
    name: "ECDH",
    namedCurve: "P-256"
  }, true, type === "private" ? ["deriveKey"] : []);
}
async function encryptContent(content, sharedSecret) {
  const serialized = JSON.stringify(content, (_2, value) => {
    if (!(value instanceof Error))
      return value;
    const error = value;
    return Object.assign(Object.assign({}, error.code ? { code: error.code } : {}), { message: error.message });
  });
  return encrypt(sharedSecret, serialized);
}
async function decryptContent(encryptedData, sharedSecret) {
  return JSON.parse(await decrypt(sharedSecret, encryptedData));
}
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get$1(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store2) => promisifyRequest(store2.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store2) => {
    store2.put(value, key);
    return promisifyRequest(store2.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store2) => {
    store2.delete(key);
    return promisifyRequest(store2.transaction);
  });
}
function createStorage(scope, name) {
  const store2 = typeof indexedDB !== "undefined" ? createStore(scope, name) : void 0;
  return {
    getItem: async (key) => {
      const value = await get$1(key, store2);
      if (!value) {
        return null;
      }
      return value;
    },
    removeItem: async (key) => {
      return del(key, store2);
    },
    setItem: async (key, value) => {
      return set(key, value, store2);
    }
  };
}
const STORAGE_SCOPE = "cbwsdk";
const STORAGE_NAME = "keys";
const ACTIVE_ID_KEY = "activeId";
const storage$1 = createStorage(STORAGE_SCOPE, STORAGE_NAME);
async function generateKeyPair() {
  const keypair = await createKeyPair({ extractable: false });
  const publicKey = slice$1(toHex$1(keypair.publicKey), 1);
  await storage$1.setItem(publicKey, keypair);
  await storage$1.setItem(ACTIVE_ID_KEY, publicKey);
  return keypair;
}
async function getKeypair() {
  const id = await storage$1.getItem(ACTIVE_ID_KEY);
  if (!id) {
    return null;
  }
  const keypair = await storage$1.getItem(id);
  if (!keypair) {
    return null;
  }
  return keypair;
}
async function getOrCreateKeypair() {
  const keypair = await getKeypair();
  if (!keypair) {
    const kp = await generateKeyPair();
    const pubKey = slice$1(toHex$1(kp.publicKey), 1);
    await storage$1.setItem(pubKey, kp);
    await storage$1.setItem(ACTIVE_ID_KEY, pubKey);
    return kp;
  }
  return keypair;
}
async function getAccount() {
  const keypair = await getOrCreateKeypair();
  const publicKey = slice$1(toHex$1(keypair.publicKey), 1);
  const sign2 = async (payload) => {
    const { payload: message, metadata } = getSignPayload({
      challenge: payload,
      origin: "https://keys.coinbase.com",
      userVerification: "preferred"
    });
    const signature = await sign$1({
      payload: message,
      privateKey: keypair.privateKey
    });
    return {
      signature: toHex(signature),
      raw: {},
      // type changed in viem
      webauthn: metadata
    };
  };
  return {
    id: publicKey,
    publicKey,
    async sign({ hash: hash2 }) {
      return sign2(hash2);
    },
    async signMessage({ message }) {
      return sign2(hashMessage(message));
    },
    async signTypedData(parameters) {
      return sign2(hashTypedData(parameters));
    },
    type: "webAuthn"
  };
}
async function getCryptoKeyAccount() {
  const account2 = await getAccount();
  return {
    account: account2
  };
}
const OWN_PRIVATE_KEY = {
  storageKey: "ownPrivateKey",
  keyType: "private"
};
const OWN_PUBLIC_KEY = {
  storageKey: "ownPublicKey",
  keyType: "public"
};
const PEER_PUBLIC_KEY = {
  storageKey: "peerPublicKey",
  keyType: "public"
};
class SCWKeyManager {
  constructor() {
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
  }
  async getOwnPublicKey() {
    await this.loadKeysIfNeeded();
    return this.ownPublicKey;
  }
  // returns null if the shared secret is not yet derived
  async getSharedSecret() {
    await this.loadKeysIfNeeded();
    return this.sharedSecret;
  }
  async setPeerPublicKey(key) {
    this.sharedSecret = null;
    this.peerPublicKey = key;
    await this.storeKey(PEER_PUBLIC_KEY, key);
    await this.loadKeysIfNeeded();
  }
  async clear() {
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
    store.keys.clear();
  }
  async generateKeyPair() {
    const newKeyPair = await generateKeyPair$1();
    this.ownPrivateKey = newKeyPair.privateKey;
    this.ownPublicKey = newKeyPair.publicKey;
    await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
    await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
  }
  async loadKeysIfNeeded() {
    if (this.ownPrivateKey === null) {
      this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
    }
    if (this.ownPublicKey === null) {
      this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
    }
    if (this.ownPrivateKey === null || this.ownPublicKey === null) {
      await this.generateKeyPair();
    }
    if (this.peerPublicKey === null) {
      this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
    }
    if (this.sharedSecret === null) {
      if (this.ownPrivateKey === null || this.peerPublicKey === null)
        return;
      this.sharedSecret = await deriveSharedSecret(this.ownPrivateKey, this.peerPublicKey);
    }
  }
  // storage methods
  async loadKey(item) {
    const key = store.keys.get(item.storageKey);
    if (!key)
      return null;
    return importKeyFromHexString(item.keyType, key);
  }
  async storeKey(item, key) {
    const hexString = await exportKeyToHexString(item.keyType, key);
    store.keys.set(item.storageKey, hexString);
  }
}
function get(obj, path) {
  if (typeof obj !== "object" || obj === null)
    return void 0;
  return path.split(/[.[\]]+/).filter(Boolean).reduce((value, key) => {
    if (typeof value === "object" && value !== null) {
      return value[key];
    }
    return void 0;
  }, obj);
}
const factoryAddress = "0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a";
const spendPermissionManagerAddress = "0xf85210B21cC50302F477BA56686d2019dC9b67Ad";
const abi$2 = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ name: "owner", type: "bytes" }],
    name: "AlreadyOwner",
    type: "error"
  },
  { inputs: [], name: "Initialized", type: "error" },
  {
    inputs: [{ name: "owner", type: "bytes" }],
    name: "InvalidEthereumAddressOwner",
    type: "error"
  },
  {
    inputs: [{ name: "key", type: "uint256" }],
    name: "InvalidNonceKey",
    type: "error"
  },
  {
    inputs: [{ name: "owner", type: "bytes" }],
    name: "InvalidOwnerBytesLength",
    type: "error"
  },
  { inputs: [], name: "LastOwner", type: "error" },
  {
    inputs: [{ name: "index", type: "uint256" }],
    name: "NoOwnerAtIndex",
    type: "error"
  },
  {
    inputs: [{ name: "ownersRemaining", type: "uint256" }],
    name: "NotLastOwner",
    type: "error"
  },
  {
    inputs: [{ name: "selector", type: "bytes4" }],
    name: "SelectorNotAllowed",
    type: "error"
  },
  { inputs: [], name: "Unauthorized", type: "error" },
  { inputs: [], name: "UnauthorizedCallContext", type: "error" },
  { inputs: [], name: "UpgradeFailed", type: "error" },
  {
    inputs: [
      { name: "index", type: "uint256" },
      { name: "expectedOwner", type: "bytes" },
      { name: "actualOwner", type: "bytes" }
    ],
    name: "WrongOwnerAtIndex",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "index",
        type: "uint256"
      },
      { indexed: false, name: "owner", type: "bytes" }
    ],
    name: "AddOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "index",
        type: "uint256"
      },
      { indexed: false, name: "owner", type: "bytes" }
    ],
    name: "RemoveOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "REPLAYABLE_NONCE_KEY",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "owner", type: "address" }],
    name: "addOwnerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { name: "x", type: "bytes32" },
      { name: "y", type: "bytes32" }
    ],
    name: "addOwnerPublicKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ name: "functionSelector", type: "bytes4" }],
    name: "canSkipChainIdValidation",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "target", type: "address" },
      { name: "value", type: "uint256" },
      { name: "data", type: "bytes" }
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { name: "target", type: "address" },
          { name: "value", type: "uint256" },
          { name: "data", type: "bytes" }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ name: "calls", type: "bytes[]" }],
    name: "executeWithoutChainIdValidation",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { name: "sender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "initCode", type: "bytes" },
          { name: "callData", type: "bytes" },
          { name: "callGasLimit", type: "uint256" },
          {
            name: "verificationGasLimit",
            type: "uint256"
          },
          {
            name: "preVerificationGas",
            type: "uint256"
          },
          { name: "maxFeePerGas", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          { name: "paymasterAndData", type: "bytes" },
          { name: "signature", type: "bytes" }
        ],
        name: "userOp",
        type: "tuple"
      }
    ],
    name: "getUserOpHashWithoutChainId",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ name: "$", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "owners", type: "bytes[]" }],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "isOwnerAddress",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "account", type: "bytes" }],
    name: "isOwnerBytes",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "x", type: "bytes32" },
      { name: "y", type: "bytes32" }
    ],
    name: "isOwnerPublicKey",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "hash", type: "bytes32" },
      { name: "signature", type: "bytes" }
    ],
    name: "isValidSignature",
    outputs: [{ name: "result", type: "bytes4" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nextOwnerIndex",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "index", type: "uint256" }],
    name: "ownerAtIndex",
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ownerCount",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "index", type: "uint256" },
      { name: "owner", type: "bytes" }
    ],
    name: "removeLastOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { name: "index", type: "uint256" },
      { name: "owner", type: "bytes" }
    ],
    name: "removeOwnerAtIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "removedOwnersCount",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "hash", type: "bytes32" }],
    name: "replaySafeHash",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "newImplementation", type: "address" },
      { name: "data", type: "bytes" }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { name: "sender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "initCode", type: "bytes" },
          { name: "callData", type: "bytes" },
          { name: "callGasLimit", type: "uint256" },
          {
            name: "verificationGasLimit",
            type: "uint256"
          },
          {
            name: "preVerificationGas",
            type: "uint256"
          },
          { name: "maxFeePerGas", type: "uint256" },
          {
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          { name: "paymasterAndData", type: "bytes" },
          { name: "signature", type: "bytes" }
        ],
        name: "userOp",
        type: "tuple"
      },
      { name: "userOpHash", type: "bytes32" },
      { name: "missingAccountFunds", type: "uint256" }
    ],
    name: "validateUserOp",
    outputs: [{ name: "validationData", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];
const factoryAbi = [
  {
    inputs: [{ name: "implementation_", type: "address" }],
    stateMutability: "payable",
    type: "constructor"
  },
  { inputs: [], name: "OwnerRequired", type: "error" },
  {
    inputs: [
      { name: "owners", type: "bytes[]" },
      { name: "nonce", type: "uint256" }
    ],
    name: "createAccount",
    outputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { name: "owners", type: "bytes[]" },
      { name: "nonce", type: "uint256" }
    ],
    name: "getAddress",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "initCodeHash",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  }
];
function getSenderFromRequest(request) {
  var _a;
  if (!Array.isArray(request.params)) {
    return null;
  }
  switch (request.method) {
    case "personal_sign":
      return request.params[1];
    case "eth_signTypedData_v4":
      return request.params[0];
    case "eth_signTransaction":
    case "eth_sendTransaction":
    case "wallet_sendCalls":
      return (_a = request.params[0]) === null || _a === void 0 ? void 0 : _a.from;
    default:
      return null;
  }
}
function addSenderToRequest(request, sender) {
  if (!Array.isArray(request.params)) {
    throw standardErrors.rpc.invalidParams();
  }
  const params = [...request.params];
  switch (request.method) {
    case "eth_signTransaction":
    case "eth_sendTransaction":
    case "wallet_sendCalls":
      params[0].from = sender;
      break;
    case "eth_signTypedData_v4":
      params[0] = sender;
      break;
    case "personal_sign":
      params[1] = sender;
      break;
  }
  return Object.assign(Object.assign({}, request), { params });
}
function assertParamsChainId(params) {
  var _a;
  if (!params || !Array.isArray(params) || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId)) {
    throw standardErrors.rpc.invalidParams();
  }
  if (typeof params[0].chainId !== "string" && typeof params[0].chainId !== "number") {
    throw standardErrors.rpc.invalidParams();
  }
}
function assertGetCapabilitiesParams(params) {
  if (!params || !Array.isArray(params) || params.length !== 1 && params.length !== 2) {
    throw standardErrors.rpc.invalidParams();
  }
  if (typeof params[0] !== "string" || !isAddress(params[0])) {
    throw standardErrors.rpc.invalidParams();
  }
  if (params.length === 2) {
    if (!Array.isArray(params[1])) {
      throw standardErrors.rpc.invalidParams();
    }
    for (const param of params[1]) {
      if (typeof param !== "string" || !param.startsWith("0x")) {
        throw standardErrors.rpc.invalidParams();
      }
    }
  }
}
function injectRequestCapabilities(request, capabilities) {
  const modifiedRequest = Object.assign({}, request);
  if (capabilities && request.method.startsWith("wallet_")) {
    let requestCapabilities = get(modifiedRequest, "params.0.capabilities");
    if (typeof requestCapabilities === "undefined") {
      requestCapabilities = {};
    }
    if (typeof requestCapabilities !== "object") {
      throw standardErrors.rpc.invalidParams();
    }
    requestCapabilities = Object.assign(Object.assign({}, capabilities), requestCapabilities);
    if (modifiedRequest.params && Array.isArray(modifiedRequest.params)) {
      modifiedRequest.params[0] = Object.assign(Object.assign({}, modifiedRequest.params[0]), { capabilities: requestCapabilities });
    }
  }
  return modifiedRequest;
}
async function initSubAccountConfig() {
  var _a;
  const config2 = (_a = store.subAccountsConfig.get()) !== null && _a !== void 0 ? _a : {};
  const capabilities = {};
  if (config2.enableAutoSubAccounts) {
    const { account: owner } = config2.toOwnerAccount ? await config2.toOwnerAccount() : await getCryptoKeyAccount();
    if (!owner) {
      throw standardErrors.provider.unauthorized("No owner account found");
    }
    capabilities.addSubAccount = {
      account: {
        type: "create",
        keys: [
          {
            type: owner.address ? "address" : "webauthn-p256",
            publicKey: owner.address || owner.publicKey
          }
        ]
      }
    };
  }
  store.subAccountsConfig.set({
    capabilities
  });
}
function assertFetchPermissionsRequest(request) {
  if (request.method === "coinbase_fetchPermissions" && request.params === void 0) {
    return;
  }
  if (request.method === "coinbase_fetchPermissions" && Array.isArray(request.params) && request.params.length === 1 && typeof request.params[0] === "object") {
    if (typeof request.params[0].account !== "string" || !request.params[0].chainId.startsWith("0x")) {
      throw standardErrors.rpc.invalidParams("FetchPermissions - Invalid params: params[0].account must be a hex string");
    }
    if (typeof request.params[0].chainId !== "string" || !request.params[0].chainId.startsWith("0x")) {
      throw standardErrors.rpc.invalidParams("FetchPermissions - Invalid params: params[0].chainId must be a hex string");
    }
    if (typeof request.params[0].spender !== "string" || !request.params[0].spender.startsWith("0x")) {
      throw standardErrors.rpc.invalidParams("FetchPermissions - Invalid params: params[0].spender must be a hex string");
    }
    return;
  }
  throw standardErrors.rpc.invalidParams();
}
function fillMissingParamsForFetchPermissions(request) {
  var _a, _b, _c;
  if (request.params !== void 0) {
    return request;
  }
  const accountFromStore = (_a = store.getState().account.accounts) === null || _a === void 0 ? void 0 : _a[0];
  const chainId = (_b = store.getState().account.chain) === null || _b === void 0 ? void 0 : _b.id;
  const subAccountFromStore = (_c = store.getState().subAccount) === null || _c === void 0 ? void 0 : _c.address;
  if (!accountFromStore || !subAccountFromStore || !chainId) {
    throw standardErrors.rpc.invalidParams("FetchPermissions - one or more of account, sub account, or chain id is missing, connect to sub account via wallet_connect first");
  }
  return {
    method: "coinbase_fetchPermissions",
    params: [
      {
        account: accountFromStore,
        chainId: numberToHex(chainId),
        spender: subAccountFromStore
      }
    ]
  };
}
function createSpendPermissionMessage({ spendPermission, chainId }) {
  return {
    domain: {
      name: "Spend Permission Manager",
      version: "1",
      chainId,
      verifyingContract: spendPermissionManagerAddress
    },
    types: {
      SpendPermission: [
        { name: "account", type: "address" },
        { name: "spender", type: "address" },
        { name: "token", type: "address" },
        { name: "allowance", type: "uint160" },
        { name: "period", type: "uint48" },
        { name: "start", type: "uint48" },
        { name: "end", type: "uint48" },
        { name: "salt", type: "uint256" },
        { name: "extraData", type: "bytes" }
      ]
    },
    primaryType: "SpendPermission",
    message: {
      account: spendPermission.account,
      spender: spendPermission.spender,
      token: spendPermission.token,
      allowance: spendPermission.allowance,
      period: spendPermission.period,
      start: spendPermission.start,
      end: spendPermission.end,
      salt: spendPermission.salt,
      extraData: spendPermission.extraData
    }
  };
}
function createSpendPermissionBatchMessage({ spendPermissionBatch, chainId }) {
  return {
    domain: {
      name: "Spend Permission Manager",
      version: "1",
      chainId,
      verifyingContract: spendPermissionManagerAddress
    },
    types: {
      SpendPermissionBatch: [
        { name: "account", type: "address" },
        { name: "period", type: "uint48" },
        { name: "start", type: "uint48" },
        { name: "end", type: "uint48" },
        { name: "permissions", type: "PermissionDetails[]" }
      ],
      PermissionDetails: [
        { name: "spender", type: "address" },
        { name: "token", type: "address" },
        { name: "allowance", type: "uint160" },
        { name: "salt", type: "uint256" },
        { name: "extraData", type: "bytes" }
      ]
    },
    primaryType: "SpendPermissionBatch",
    message: {
      account: spendPermissionBatch.account,
      period: spendPermissionBatch.period,
      start: spendPermissionBatch.start,
      end: spendPermissionBatch.end,
      permissions: spendPermissionBatch.permissions.map((p2) => ({
        spender: p2.spender,
        token: p2.token,
        allowance: p2.allowance,
        salt: p2.salt,
        extraData: p2.extraData
      }))
    }
  };
}
async function waitForCallsTransactionHash({ client, id }) {
  var _a;
  const result = await waitForCallsStatus(client, {
    id
  });
  if (result.status === "success") {
    return (_a = result.receipts) === null || _a === void 0 ? void 0 : _a[0].transactionHash;
  }
  throw standardErrors.rpc.internal("failed to send transaction");
}
function createWalletSendCallsRequest({ calls, from: from2, chainId, capabilities }) {
  const paymasterUrls = config.get().paymasterUrls;
  let request = {
    method: "wallet_sendCalls",
    params: [
      {
        version: "1.0",
        calls,
        chainId: numberToHex(chainId),
        from: from2,
        atomicRequired: true,
        capabilities
      }
    ]
  };
  if (paymasterUrls === null || paymasterUrls === void 0 ? void 0 : paymasterUrls[chainId]) {
    request = injectRequestCapabilities(request, {
      paymasterService: { url: paymasterUrls === null || paymasterUrls === void 0 ? void 0 : paymasterUrls[chainId] }
    });
  }
  return request;
}
async function presentSubAccountFundingDialog() {
  const snackbar2 = initSnackbar();
  const userChoice = await new Promise((resolve) => {
    logSnackbarShown({ snackbarContext: "sub_account_insufficient_balance" });
    snackbar2.presentItem({
      autoExpand: true,
      message: "Insufficient spend permission. Choose how to proceed:",
      menuItems: [
        {
          isRed: false,
          info: "Create new Spend Permission",
          svgWidth: "10",
          svgHeight: "11",
          path: "",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: () => {
            logSnackbarActionClicked({
              snackbarContext: "sub_account_insufficient_balance",
              snackbarAction: "create_permission"
            });
            snackbar2.clear();
            resolve("update_permission");
          }
        },
        {
          isRed: false,
          info: "Continue in Popup",
          svgWidth: "10",
          svgHeight: "11",
          path: "",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: () => {
            logSnackbarActionClicked({
              snackbarContext: "sub_account_insufficient_balance",
              snackbarAction: "continue_in_popup"
            });
            snackbar2.clear();
            resolve("continue_popup");
          }
        },
        {
          isRed: true,
          info: "Cancel",
          svgWidth: "10",
          svgHeight: "11",
          path: "",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: () => {
            logSnackbarActionClicked({
              snackbarContext: "sub_account_insufficient_balance",
              snackbarAction: "cancel"
            });
            snackbar2.clear();
            resolve("cancel");
          }
        }
      ]
    });
  });
  return userChoice;
}
function parseFundingOptions({ errorData, sourceAddress }) {
  var _a;
  const spendPermissionRequests = [];
  for (const [token, { amount, sources }] of Object.entries((_a = errorData === null || errorData === void 0 ? void 0 : errorData.required) !== null && _a !== void 0 ? _a : {})) {
    const sourcesWithSufficientBalance = sources.filter((source) => {
      return hexToBigInt(source.balance) >= hexToBigInt(amount) && source.address.toLowerCase() === (sourceAddress === null || sourceAddress === void 0 ? void 0 : sourceAddress.toLowerCase());
    });
    if (sourcesWithSufficientBalance.length === 0) {
      throw new Error("Source address has insufficient balance for a token");
    }
    spendPermissionRequests.push({
      token,
      requiredAmount: hexToBigInt(amount)
    });
  }
  return spendPermissionRequests;
}
function isSendCallsParams(params) {
  return typeof params === "object" && params !== null && "calls" in params;
}
function isEthSendTransactionParams(params) {
  return Array.isArray(params) && params.length === 1 && typeof params[0] === "object" && params[0] !== null && "to" in params[0];
}
function compute16ByteHash(input) {
  return slice$4(keccak256$1(toHex$2(input)), 0, 16);
}
function makeDataSuffix({ attribution, dappOrigin }) {
  if (!attribution) {
    return;
  }
  if ("auto" in attribution && attribution.auto && dappOrigin) {
    return compute16ByteHash(dappOrigin);
  }
  if ("dataSuffix" in attribution) {
    return attribution.dataSuffix;
  }
  return;
}
function requestHasCapability(request, capabilityName) {
  var _a;
  if (!Array.isArray(request === null || request === void 0 ? void 0 : request.params))
    return false;
  const capabilities = (_a = request.params[0]) === null || _a === void 0 ? void 0 : _a.capabilities;
  if (!capabilities || typeof capabilities !== "object")
    return false;
  return capabilityName in capabilities;
}
function prependWithoutDuplicates(array, item) {
  const filtered = array.filter((i2) => i2 !== item);
  return [item, ...filtered];
}
function appendWithoutDuplicates(array, item) {
  const filtered = array.filter((i2) => i2 !== item);
  return [...filtered, item];
}
async function getCachedWalletConnectResponse() {
  const spendPermissions2 = store.spendPermissions.get();
  const subAccount = store.subAccounts.get();
  const accounts = store.account.get().accounts;
  if (!accounts) {
    return null;
  }
  const walletConnectAccounts = accounts === null || accounts === void 0 ? void 0 : accounts.map((account2) => ({
    address: account2,
    capabilities: {
      subAccounts: subAccount ? [subAccount] : void 0,
      spendPermissions: spendPermissions2.length > 0 ? { permissions: spendPermissions2 } : void 0
    }
  }));
  return {
    accounts: walletConnectAccounts
  };
}
function base64ToBase64Url(base64) {
  return base64.replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function arrayBufferToBase64Url(buffer) {
  const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return base64ToBase64Url(base64String);
}
function convertCredentialToJSON({ webauthn, signature, id }) {
  const signatureRaw = fromHex$1(signature);
  return {
    id,
    rawId: arrayBufferToBase64Url(stringToBytes(id)),
    response: {
      authenticatorData: arrayBufferToBase64Url(hexToBytes(webauthn.authenticatorData)),
      clientDataJSON: arrayBufferToBase64Url(stringToBytes(webauthn.clientDataJSON)),
      signature: arrayBufferToBase64Url(asn1EncodeSignature(signatureRaw.r, signatureRaw.s))
    },
    type: JSON.parse(webauthn.clientDataJSON).type
  };
}
function asn1EncodeSignature(r2, s2) {
  const rBytes = hexToBytes(trim$1(numberToHex(r2)));
  const sBytes = hexToBytes(trim$1(numberToHex(s2)));
  const rLength = rBytes.length;
  const sLength = sBytes.length;
  const totalLength = rLength + sLength + 4;
  const signature = new Uint8Array(totalLength + 2);
  signature[0] = 48;
  signature[1] = totalLength;
  signature[2] = 2;
  signature[3] = rLength;
  signature.set(rBytes, 4);
  signature[rLength + 4] = 2;
  signature[rLength + 5] = sLength;
  signature.set(sBytes, rLength + 6);
  return signature;
}
var __rest$1 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
    t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
};
async function createSmartAccount(parameters) {
  const { owner, ownerIndex, address, client, factoryData } = parameters;
  const entryPoint = {
    abi: entryPoint06Abi,
    address: entryPoint06Address,
    version: "0.6"
  };
  const factory = {
    abi: factoryAbi,
    address: factoryAddress
  };
  return toSmartAccount({
    client,
    entryPoint,
    extend: { abi: abi$2, factory },
    async decodeCalls(data) {
      const result = decodeFunctionData({
        abi: abi$2,
        data
      });
      if (result.functionName === "execute")
        return [{ to: result.args[0], value: result.args[1], data: result.args[2] }];
      if (result.functionName === "executeBatch")
        return result.args[0].map((arg) => ({
          to: arg.target,
          value: arg.value,
          data: arg.data
        }));
      throw new BaseError$3(`unable to decode calls for "${result.functionName}"`);
    },
    async encodeCalls(calls) {
      var _a, _b;
      if (calls.length === 1) {
        return encodeFunctionData({
          abi: abi$2,
          functionName: "execute",
          args: [calls[0].to, (_a = calls[0].value) !== null && _a !== void 0 ? _a : BigInt(0), (_b = calls[0].data) !== null && _b !== void 0 ? _b : "0x"]
        });
      }
      return encodeFunctionData({
        abi: abi$2,
        functionName: "executeBatch",
        args: [
          calls.map((call2) => {
            var _a2, _b2;
            return {
              data: (_a2 = call2.data) !== null && _a2 !== void 0 ? _a2 : "0x",
              target: call2.to,
              value: (_b2 = call2.value) !== null && _b2 !== void 0 ? _b2 : BigInt(0)
            };
          })
        ]
      });
    },
    async getAddress() {
      return address;
    },
    async getFactoryArgs() {
      if (factoryData)
        return { factory: factory.address, factoryData };
      return { factory: factory.address, factoryData };
    },
    async getStubSignature() {
      if (owner.type === "webAuthn")
        return "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000";
      return wrapSignature({
        ownerIndex,
        signature: "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c"
      });
    },
    async sign(parameters2) {
      const address2 = await this.getAddress();
      const hash2 = toReplaySafeHash({
        address: address2,
        chainId: client.chain.id,
        hash: parameters2.hash
      });
      const signature = await sign({ hash: hash2, owner });
      return wrapSignature({
        ownerIndex,
        signature
      });
    },
    async signMessage(parameters2) {
      const { message } = parameters2;
      const address2 = await this.getAddress();
      const hash2 = toReplaySafeHash({
        address: address2,
        chainId: client.chain.id,
        hash: hashMessage(message)
      });
      const signature = await sign({ hash: hash2, owner });
      return wrapSignature({
        ownerIndex,
        signature
      });
    },
    async signTypedData(parameters2) {
      const { domain, types: types2, primaryType, message } = parameters2;
      const address2 = await this.getAddress();
      const hash2 = toReplaySafeHash({
        address: address2,
        chainId: client.chain.id,
        hash: hashTypedData({
          domain,
          message,
          primaryType,
          types: types2
        })
      });
      const signature = await sign({ hash: hash2, owner });
      return wrapSignature({
        ownerIndex,
        signature
      });
    },
    async signUserOperation(parameters2) {
      const { chainId = client.chain.id } = parameters2, userOperation = __rest$1(parameters2, ["chainId"]);
      const address2 = await this.getAddress();
      const hash2 = getUserOperationHash({
        chainId,
        entryPointAddress: entryPoint.address,
        entryPointVersion: entryPoint.version,
        userOperation: Object.assign(Object.assign({}, userOperation), { sender: address2 })
      });
      const signature = await sign({ hash: hash2, owner });
      return wrapSignature({
        ownerIndex,
        signature
      });
    },
    userOperation: {
      async estimateGas(userOperation) {
        var _a;
        if (owner.type !== "webAuthn")
          return;
        return {
          verificationGasLimit: BigInt(Math.max(Number((_a = userOperation.verificationGasLimit) !== null && _a !== void 0 ? _a : BigInt(0)), 8e5))
        };
      }
    }
  });
}
async function sign({ hash: hash2, owner }) {
  if (owner.type === "webAuthn") {
    const { signature, webauthn } = await owner.sign({
      hash: hash2
    });
    return toWebAuthnSignature({ signature, webauthn });
  }
  if (owner.sign)
    return owner.sign({ hash: hash2 });
  throw new BaseError$3("`owner` does not support raw sign.");
}
function toReplaySafeHash({ address, chainId, hash: hash2 }) {
  return hashTypedData({
    domain: {
      chainId,
      name: "Coinbase Smart Wallet",
      verifyingContract: address,
      version: "1"
    },
    types: {
      CoinbaseSmartWalletMessage: [
        {
          name: "hash",
          type: "bytes32"
        }
      ]
    },
    primaryType: "CoinbaseSmartWalletMessage",
    message: {
      hash: hash2
    }
  });
}
function toWebAuthnSignature({ webauthn, signature }) {
  const { r: r2, s: s2 } = fromHex$1(signature);
  return encodeAbiParameters([
    {
      components: [
        {
          name: "authenticatorData",
          type: "bytes"
        },
        { name: "clientDataJSON", type: "bytes" },
        { name: "challengeIndex", type: "uint256" },
        { name: "typeIndex", type: "uint256" },
        {
          name: "r",
          type: "uint256"
        },
        {
          name: "s",
          type: "uint256"
        }
      ],
      type: "tuple"
    }
  ], [
    {
      authenticatorData: webauthn.authenticatorData,
      clientDataJSON: stringToHex(webauthn.clientDataJSON),
      challengeIndex: BigInt(webauthn.challengeIndex),
      typeIndex: BigInt(webauthn.typeIndex),
      r: r2,
      s: s2
    }
  ]);
}
function wrapSignature(parameters) {
  const { ownerIndex = 0 } = parameters;
  const signatureData = (() => {
    if (size$3(parameters.signature) !== 65)
      return parameters.signature;
    const signature = parseSignature(parameters.signature);
    return encodePacked$1(["bytes32", "bytes32", "uint8"], [signature.r, signature.s, signature.yParity === 0 ? 27 : 28]);
  })();
  return encodeAbiParameters([
    {
      components: [
        {
          name: "ownerIndex",
          type: "uint8"
        },
        {
          name: "signatureData",
          type: "bytes"
        }
      ],
      type: "tuple"
    }
  ], [
    {
      ownerIndex,
      signatureData
    }
  ]);
}
async function createSubAccountSigner({ address, client, factory, factoryData, owner, ownerIndex, parentAddress, attribution }) {
  var _a;
  const subAccount = {
    address,
    factory,
    factoryData
  };
  const chainId = (_a = client.chain) === null || _a === void 0 ? void 0 : _a.id;
  if (!chainId) {
    throw standardErrors.rpc.internal("chainId not found");
  }
  const account2 = await createSmartAccount({
    owner,
    ownerIndex: ownerIndex !== null && ownerIndex !== void 0 ? ownerIndex : 1,
    address,
    client,
    factoryData
  });
  const request = async (args) => {
    var _a2, _b, _c, _d, _e, _f;
    try {
      switch (args.method) {
        case "wallet_addSubAccount":
          return subAccount;
        case "eth_accounts":
          return [subAccount.address];
        case "eth_coinbase":
          return subAccount.address;
        case "net_version":
          return chainId.toString();
        case "eth_chainId":
          return numberToHex(chainId);
        case "eth_sendTransaction": {
          assertArrayPresence(args.params);
          const rawParams = args.params[0];
          assertPresence(rawParams.to, standardErrors.rpc.invalidParams("to is required"));
          const params = {
            to: rawParams.to,
            data: ensureHexString((_a2 = rawParams.data) !== null && _a2 !== void 0 ? _a2 : "0x", true),
            value: ensureHexString((_b = rawParams.value) !== null && _b !== void 0 ? _b : "0x", true),
            from: (_c = rawParams.from) !== null && _c !== void 0 ? _c : subAccount.address
          };
          const sendCallsRequest = createWalletSendCallsRequest({
            calls: [params],
            chainId,
            from: params.from
          });
          const response = await request(sendCallsRequest);
          return waitForCallsTransactionHash({
            client,
            id: response
          });
        }
        case "wallet_sendCalls": {
          assertArrayPresence(args.params);
          const chainId2 = get(args.params[0], "chainId");
          if (!chainId2) {
            throw standardErrors.rpc.invalidParams("chainId is required");
          }
          if (!isHex(chainId2)) {
            throw standardErrors.rpc.invalidParams("chainId must be a hex encoded integer");
          }
          if (!args.params[0]) {
            throw standardErrors.rpc.invalidParams("params are required");
          }
          if (!("calls" in args.params[0])) {
            throw standardErrors.rpc.invalidParams("calls are required");
          }
          let prepareCallsRequest = {
            method: "wallet_prepareCalls",
            params: [
              {
                version: "1.0",
                calls: args.params[0].calls,
                chainId: chainId2,
                from: subAccount.address,
                capabilities: "capabilities" in args.params[0] ? args.params[0].capabilities : {}
              }
            ]
          };
          if (parentAddress) {
            prepareCallsRequest = injectRequestCapabilities(prepareCallsRequest, {
              funding: [
                {
                  type: "spendPermission",
                  data: {
                    autoApply: true,
                    sources: [parentAddress],
                    preference: "PREFER_DIRECT_BALANCE"
                  }
                }
              ]
            });
          }
          let prepareCallsResponse = await request(prepareCallsRequest);
          const signResponse = await ((_e = (_d = owner).sign) === null || _e === void 0 ? void 0 : _e.call(_d, {
            // Hash returned from wallet_prepareCalls is double hex encoded
            hash: hexToString(prepareCallsResponse.signatureRequest.hash)
          }));
          let signatureData;
          if (!signResponse) {
            throw standardErrors.rpc.internal("signature not found");
          }
          if (isHex(signResponse)) {
            signatureData = {
              type: "secp256k1",
              data: {
                address: owner.address,
                signature: signResponse
              }
            };
          } else {
            signatureData = {
              type: "webauthn",
              data: {
                signature: JSON.stringify(convertCredentialToJSON(Object.assign({ id: (_f = owner.id) !== null && _f !== void 0 ? _f : "1" }, signResponse))),
                publicKey: owner.publicKey
              }
            };
          }
          const sendPreparedCallsResponse = await request({
            method: "wallet_sendPreparedCalls",
            params: [
              {
                version: "1.0",
                type: prepareCallsResponse.type,
                data: prepareCallsResponse.userOp,
                chainId: prepareCallsResponse.chainId,
                signature: signatureData
              }
            ]
          });
          return sendPreparedCallsResponse[0];
        }
        case "wallet_sendPreparedCalls": {
          assertArrayPresence(args.params);
          const chainId2 = get(args.params[0], "chainId");
          if (!chainId2) {
            throw standardErrors.rpc.invalidParams("chainId is required");
          }
          if (!isHex(chainId2)) {
            throw standardErrors.rpc.invalidParams("chainId must be a hex encoded integer");
          }
          const sendPreparedCallsResponse = await client.request({
            method: "wallet_sendPreparedCalls",
            params: args.params
          });
          return sendPreparedCallsResponse;
        }
        case "wallet_prepareCalls": {
          assertArrayPresence(args.params);
          const chainId2 = get(args.params[0], "chainId");
          if (!chainId2) {
            throw standardErrors.rpc.invalidParams("chainId is required");
          }
          if (!isHex(chainId2)) {
            throw standardErrors.rpc.invalidParams("chainId must be a hex encoded integer");
          }
          if (!args.params[0]) {
            throw standardErrors.rpc.invalidParams("params are required");
          }
          if (!get(args.params[0], "calls")) {
            throw standardErrors.rpc.invalidParams("calls are required");
          }
          const prepareCallsParams = args.params[0];
          if (attribution && prepareCallsParams.capabilities && !("attribution" in prepareCallsParams.capabilities)) {
            prepareCallsParams.capabilities.attribution = attribution;
          }
          const prepareCallsResponse = await client.request({
            method: "wallet_prepareCalls",
            params: [Object.assign(Object.assign({}, args.params[0]), { chainId: chainId2 })]
          });
          return prepareCallsResponse;
        }
        case "personal_sign": {
          assertArrayPresence(args.params);
          if (!isHex(args.params[0])) {
            throw standardErrors.rpc.invalidParams("message must be a hex encoded string");
          }
          const message = hexToString(args.params[0]);
          return account2.signMessage({ message });
        }
        case "eth_signTypedData_v4": {
          assertArrayPresence(args.params);
          const typedData = typeof args.params[1] === "string" ? JSON.parse(args.params[1]) : args.params[1];
          return account2.signTypedData(typedData);
        }
        case "eth_signTypedData_v1":
        case "eth_signTypedData_v3":
        case "wallet_addEthereumChain":
        case "wallet_switchEthereumChain":
        default:
          throw standardErrors.rpc.methodNotSupported();
      }
    } catch (error) {
      if (isViemError(error)) {
        const newError = viemHttpErrorToProviderError(error);
        if (newError) {
          throw newError;
        }
      }
      throw error;
    }
  };
  return { request };
}
async function findOwnerIndex({ address, client, publicKey, factory, factoryData }) {
  const code = await getCode(client, {
    address
  });
  if (!code && factory && factoryData) {
    if (getAddress(factory) !== getAddress(factoryAddress)) {
      throw standardErrors.rpc.internal("unknown factory address");
    }
    const initData = decodeFunctionData({
      abi: factoryAbi,
      data: factoryData
    });
    if (initData.functionName !== "createAccount") {
      throw standardErrors.rpc.internal("unknown factory function");
    }
    const [owners] = initData.args;
    return owners.findIndex((owner) => {
      return owner.toLowerCase() === formatPublicKey(publicKey).toLowerCase();
    });
  }
  const ownerCount = await readContract(client, {
    address,
    abi: abi$2,
    functionName: "ownerCount"
  });
  for (let i2 = Number(ownerCount) - 1; i2 >= 0; i2--) {
    const owner = await readContract(client, {
      address,
      abi: abi$2,
      functionName: "ownerAtIndex",
      args: [BigInt(i2)]
    });
    const formatted = formatPublicKey(publicKey);
    if (owner.toLowerCase() === formatted.toLowerCase()) {
      return i2;
    }
  }
  return -1;
}
function formatPublicKey(publicKey) {
  if (isAddress(publicKey)) {
    return pad$2(publicKey);
  }
  return publicKey;
}
async function presentAddOwnerDialog() {
  const snackbar2 = initSnackbar();
  return new Promise((resolve) => {
    logSnackbarShown({ snackbarContext: "sub_account_add_owner" });
    snackbar2.presentItem({
      autoExpand: true,
      message: "App requires a signer update",
      menuItems: [
        {
          isRed: false,
          info: "Confirm",
          svgWidth: "10",
          svgHeight: "11",
          path: "",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: () => {
            logSnackbarActionClicked({
              snackbarContext: "sub_account_add_owner",
              snackbarAction: "confirm"
            });
            snackbar2.clear();
            resolve("authenticate");
          }
        },
        {
          isRed: true,
          info: "Cancel",
          svgWidth: "10",
          svgHeight: "11",
          path: "",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: () => {
            logSnackbarActionClicked({
              snackbarContext: "sub_account_add_owner",
              snackbarAction: "cancel"
            });
            snackbar2.clear();
            resolve("cancel");
          }
        }
      ]
    });
  });
}
async function handleAddSubAccountOwner({ ownerAccount, globalAccountRequest }) {
  var _a, _b;
  const account2 = store.account.get();
  const subAccount = store.subAccounts.get();
  const globalAccount = (_a = account2.accounts) === null || _a === void 0 ? void 0 : _a.find((account3) => account3.toLowerCase() !== (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address.toLowerCase()));
  assertPresence(globalAccount, standardErrors.provider.unauthorized("no global account"));
  assertPresence((_b = account2.chain) === null || _b === void 0 ? void 0 : _b.id, standardErrors.provider.unauthorized("no chain id"));
  assertPresence(subAccount === null || subAccount === void 0 ? void 0 : subAccount.address, standardErrors.provider.unauthorized("no sub account"));
  const calls = [];
  if (ownerAccount.type === "local" && ownerAccount.address) {
    calls.push({
      to: subAccount.address,
      data: encodeFunctionData({
        abi: abi$2,
        functionName: "addOwnerAddress",
        args: [ownerAccount.address]
      }),
      value: toHex$2(0)
    });
  }
  if (ownerAccount.publicKey) {
    const [x2, y2] = decodeAbiParameters([{ type: "bytes32" }, { type: "bytes32" }], ownerAccount.publicKey);
    calls.push({
      to: subAccount.address,
      data: encodeFunctionData({
        abi: abi$2,
        functionName: "addOwnerPublicKey",
        args: [x2, y2]
      }),
      value: toHex$2(0)
    });
  }
  const request = {
    method: "wallet_sendCalls",
    params: [
      {
        version: "1",
        calls,
        chainId: numberToHex(84532),
        from: globalAccount
      }
    ]
  };
  const selection = await presentAddOwnerDialog();
  if (selection === "cancel") {
    throw standardErrors.provider.unauthorized("user cancelled");
  }
  const callsId = await globalAccountRequest(request);
  const client = getClient(account2.chain.id);
  assertPresence(client, standardErrors.rpc.internal(`client not found for chainId ${account2.chain.id}`));
  const callsResult = await waitForCallsStatus(client, {
    id: callsId
  });
  if (callsResult.status !== "success") {
    throw standardErrors.rpc.internal("add owner call failed");
  }
  const ownerIndex = await findOwnerIndex({
    address: subAccount.address,
    publicKey: ownerAccount.type === "local" && ownerAccount.address ? ownerAccount.address : ownerAccount.publicKey,
    client
  });
  if (ownerIndex === -1) {
    throw standardErrors.rpc.internal("failed to find owner index");
  }
  return ownerIndex;
}
async function handleInsufficientBalanceError({ errorData, globalAccountAddress, subAccountAddress, client, request, subAccountRequest, globalAccountRequest }) {
  var _a;
  const chainId = (_a = client.chain) === null || _a === void 0 ? void 0 : _a.id;
  assertPresence(chainId, standardErrors.rpc.internal(`invalid chainId`));
  const spendPermissionRequests = parseFundingOptions({
    errorData,
    sourceAddress: globalAccountAddress
  });
  const userChoice = await presentSubAccountFundingDialog();
  if (userChoice === "cancel") {
    throw new Error("User cancelled funding");
  }
  let signatureRequest;
  const defaultPeriod = 60 * 60 * 24;
  const defaultMultiplier = 3;
  if (userChoice === "update_permission") {
    if (spendPermissionRequests.length === 1) {
      const spendPermission = spendPermissionRequests[0];
      const message = createSpendPermissionMessage({
        spendPermission: {
          token: spendPermission.token,
          allowance: numberToHex(spendPermission.requiredAmount * BigInt(defaultMultiplier)),
          period: defaultPeriod,
          account: globalAccountAddress,
          spender: subAccountAddress,
          start: 0,
          end: 281474976710655,
          salt: numberToHex(BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))),
          extraData: "0x"
        },
        chainId
      });
      signatureRequest = {
        method: "eth_signTypedData_v4",
        params: [globalAccountAddress, message]
      };
    } else {
      const message = createSpendPermissionBatchMessage({
        spendPermissionBatch: {
          account: globalAccountAddress,
          period: defaultPeriod,
          start: 0,
          end: 281474976710655,
          permissions: spendPermissionRequests.map((spendPermission) => ({
            token: spendPermission.token,
            allowance: numberToHex(spendPermission.requiredAmount * BigInt(defaultMultiplier)),
            period: defaultPeriod,
            account: globalAccountAddress,
            spender: subAccountAddress,
            salt: "0x0",
            extraData: "0x"
          }))
        },
        chainId
      });
      signatureRequest = {
        method: "eth_signTypedData_v4",
        params: [globalAccountAddress, message]
      };
    }
    try {
      await globalAccountRequest(signatureRequest);
    } catch (error) {
      console.error(error);
      throw new Error("User denied spend permission request");
    }
    return subAccountRequest(request);
  }
  const transferCalls = spendPermissionRequests.map((spendPermission) => {
    const isNative = spendPermission.token.toLowerCase() === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase();
    if (isNative) {
      return {
        to: subAccountAddress,
        value: numberToHex(spendPermission.requiredAmount),
        data: "0x"
      };
    }
    return {
      to: spendPermission.token,
      value: "0x0",
      data: encodeFunctionData({
        abi: erc20Abi,
        functionName: "transfer",
        args: [subAccountAddress, spendPermission.requiredAmount]
      })
    };
  });
  let originalSendCallsParams;
  if (request.method === "wallet_sendCalls" && isSendCallsParams(request.params)) {
    originalSendCallsParams = request.params[0];
  } else if (request.method === "eth_sendTransaction" && isEthSendTransactionParams(request.params)) {
    const sendCallsRequest = createWalletSendCallsRequest({
      calls: [request.params[0]],
      chainId,
      from: request.params[0].from
    });
    originalSendCallsParams = sendCallsRequest.params[0];
  } else {
    throw new Error("Could not get original call");
  }
  const subAccountCallData = encodeFunctionData({
    abi: abi$2,
    functionName: "executeBatch",
    args: [
      originalSendCallsParams.calls.map((call2) => {
        var _a2, _b;
        return {
          target: call2.to,
          value: hexToBigInt((_a2 = call2.value) !== null && _a2 !== void 0 ? _a2 : "0x0"),
          data: (_b = call2.data) !== null && _b !== void 0 ? _b : "0x"
        };
      })
    ]
  });
  const calls = [
    ...transferCalls,
    { data: subAccountCallData, to: subAccountAddress, value: "0x0" }
  ];
  const result = await globalAccountRequest({
    method: "wallet_sendCalls",
    params: [Object.assign(Object.assign({}, originalSendCallsParams), { calls, from: globalAccountAddress })]
  });
  if (request.method === "eth_sendTransaction") {
    return waitForCallsTransactionHash({
      client,
      id: result
    });
  }
  return result;
}
class SCWSigner {
  constructor(params) {
    var _a, _b, _c, _d;
    this.communicator = params.communicator;
    this.callback = params.callback;
    this.keyManager = new SCWKeyManager();
    const { account: account2, chains: chains2 } = store.getState();
    this.accounts = (_a = account2.accounts) !== null && _a !== void 0 ? _a : [];
    this.chain = (_b = account2.chain) !== null && _b !== void 0 ? _b : {
      id: (_d = (_c = params.metadata.appChainIds) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : 1
    };
    if (chains2) {
      createClients(chains2);
    }
  }
  async handshake(args) {
    var _a, _b, _c;
    const correlationId = correlationIds.get(args);
    logHandshakeStarted$1({ method: args.method, correlationId });
    try {
      await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
      const handshakeMessage = await this.createRequestMessage({
        handshake: {
          method: args.method,
          params: (_c = args.params) !== null && _c !== void 0 ? _c : []
        }
      }, correlationId);
      const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
      if ("failure" in response.content) {
        throw response.content.failure;
      }
      const peerPublicKey = await importKeyFromHexString("public", response.sender);
      await this.keyManager.setPeerPublicKey(peerPublicKey);
      const decrypted = await this.decryptResponseMessage(response);
      this.handleResponse(args, decrypted);
      logHandshakeCompleted$1({ method: args.method, correlationId });
    } catch (error) {
      logHandshakeError$1({
        method: args.method,
        correlationId,
        errorMessage: parseErrorMessageFromAny(error)
      });
      throw error;
    }
  }
  async request(request) {
    const correlationId = correlationIds.get(request);
    logRequestStarted$1({ method: request.method, correlationId });
    try {
      const result = await this._request(request);
      logRequestCompleted$1({ method: request.method, correlationId });
      return result;
    } catch (error) {
      logRequestError$1({
        method: request.method,
        correlationId,
        errorMessage: parseErrorMessageFromAny(error)
      });
      throw error;
    }
  }
  async _request(request) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if (this.accounts.length === 0) {
      switch (request.method) {
        case "eth_requestAccounts": {
          await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
          await initSubAccountConfig();
          await this.request({
            method: "wallet_connect",
            params: [
              {
                version: "1",
                capabilities: Object.assign({}, (_d = (_c = store.subAccountsConfig.get()) === null || _c === void 0 ? void 0 : _c.capabilities) !== null && _d !== void 0 ? _d : {})
              }
            ]
          });
          return this.accounts;
        }
        case "wallet_switchEthereumChain": {
          assertParamsChainId(request.params);
          this.chain.id = Number(request.params[0].chainId);
          return;
        }
        case "wallet_connect": {
          await ((_f = (_e = this.communicator).waitForPopupLoaded) === null || _f === void 0 ? void 0 : _f.call(_e));
          await initSubAccountConfig();
          let capabilitiesToInject = {};
          if (requestHasCapability(request, "addSubAccount")) {
            capabilitiesToInject = (_h = (_g = store.subAccountsConfig.get()) === null || _g === void 0 ? void 0 : _g.capabilities) !== null && _h !== void 0 ? _h : {};
          }
          const modifiedRequest = injectRequestCapabilities(request, capabilitiesToInject);
          return this.sendRequestToPopup(modifiedRequest);
        }
        case "wallet_sendCalls":
        case "wallet_sign": {
          return this.sendRequestToPopup(request);
        }
        default:
          throw standardErrors.provider.unauthorized();
      }
    }
    if (this.shouldRequestUseSubAccountSigner(request)) {
      const correlationId = correlationIds.get(request);
      logSubAccountRequestStarted({ method: request.method, correlationId });
      try {
        const result = await this.sendRequestToSubAccountSigner(request);
        logSubAccountRequestCompleted({ method: request.method, correlationId });
        return result;
      } catch (error) {
        logSubAccountRequestError({
          method: request.method,
          correlationId,
          errorMessage: parseErrorMessageFromAny(error)
        });
        throw error;
      }
    }
    switch (request.method) {
      case "eth_requestAccounts":
      case "eth_accounts": {
        const subAccount = store.subAccounts.get();
        const subAccountsConfig2 = store.subAccountsConfig.get();
        if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) {
          this.accounts = (subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
        }
        (_j = this.callback) === null || _j === void 0 ? void 0 : _j.call(this, "connect", { chainId: numberToHex(this.chain.id) });
        return this.accounts;
      }
      case "eth_coinbase":
        return this.accounts[0];
      case "net_version":
        return this.chain.id;
      case "eth_chainId":
        return numberToHex(this.chain.id);
      case "wallet_getCapabilities":
        return this.handleGetCapabilitiesRequest(request);
      case "wallet_switchEthereumChain":
        return this.handleSwitchChainRequest(request);
      case "eth_ecRecover":
      case "personal_sign":
      case "wallet_sign":
      case "personal_ecRecover":
      case "eth_signTransaction":
      case "eth_sendTransaction":
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
      case "wallet_addEthereumChain":
      case "wallet_watchAsset":
      case "wallet_sendCalls":
      case "wallet_showCallsStatus":
      case "wallet_grantPermissions":
        return this.sendRequestToPopup(request);
      case "wallet_connect": {
        const cachedResponse = await getCachedWalletConnectResponse();
        if (cachedResponse) {
          return cachedResponse;
        }
        await ((_l = (_k = this.communicator).waitForPopupLoaded) === null || _l === void 0 ? void 0 : _l.call(_k));
        await initSubAccountConfig();
        const subAccountsConfig2 = store.subAccountsConfig.get();
        const modifiedRequest = injectRequestCapabilities(request, (_m = subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.capabilities) !== null && _m !== void 0 ? _m : {});
        (_o = this.callback) === null || _o === void 0 ? void 0 : _o.call(this, "connect", { chainId: numberToHex(this.chain.id) });
        return this.sendRequestToPopup(modifiedRequest);
      }
      case "wallet_getSubAccounts": {
        const subAccount = store.subAccounts.get();
        if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) {
          return {
            subAccounts: [subAccount]
          };
        }
        if (!this.chain.rpcUrl) {
          throw standardErrors.rpc.internal("No RPC URL set for chain");
        }
        const response = await fetchRPCRequest(request, this.chain.rpcUrl);
        assertArrayPresence(response.subAccounts, "subAccounts");
        if (response.subAccounts.length > 0) {
          assertSubAccount(response.subAccounts[0]);
          const subAccount2 = response.subAccounts[0];
          store.subAccounts.set({
            address: subAccount2.address,
            factory: subAccount2.factory,
            factoryData: subAccount2.factoryData
          });
        }
        return response;
      }
      case "wallet_addSubAccount":
        return this.addSubAccount(request);
      case "coinbase_fetchPermissions": {
        assertFetchPermissionsRequest(request);
        const completeRequest = fillMissingParamsForFetchPermissions(request);
        const permissions = await fetchRPCRequest(completeRequest, CB_WALLET_RPC_URL);
        const requestedChainId = hexToNumber$1((_p = completeRequest.params) === null || _p === void 0 ? void 0 : _p[0].chainId);
        store.spendPermissions.set(permissions.permissions.map((permission) => Object.assign(Object.assign({}, permission), { chainId: requestedChainId })));
        return permissions;
      }
      default:
        if (!this.chain.rpcUrl) {
          throw standardErrors.rpc.internal("No RPC URL set for chain");
        }
        return fetchRPCRequest(request, this.chain.rpcUrl);
    }
  }
  async sendRequestToPopup(request) {
    var _a, _b;
    await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
    const response = await this.sendEncryptedRequest(request);
    const decrypted = await this.decryptResponseMessage(response);
    return this.handleResponse(request, decrypted);
  }
  async handleResponse(request, decrypted) {
    var _a, _b, _c, _d, _e;
    const result = decrypted.result;
    if ("error" in result)
      throw result.error;
    switch (request.method) {
      case "eth_requestAccounts": {
        const accounts = result.value;
        this.accounts = accounts;
        store.account.set({
          accounts,
          chain: this.chain
        });
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "accountsChanged", accounts);
        break;
      }
      case "wallet_connect": {
        const response = result.value;
        const accounts = response.accounts.map((account3) => account3.address);
        this.accounts = accounts;
        store.account.set({
          accounts
        });
        const account2 = response.accounts.at(0);
        const capabilities = account2 === null || account2 === void 0 ? void 0 : account2.capabilities;
        if (capabilities === null || capabilities === void 0 ? void 0 : capabilities.subAccounts) {
          const capabilityResponse = capabilities === null || capabilities === void 0 ? void 0 : capabilities.subAccounts;
          assertArrayPresence(capabilityResponse, "subAccounts");
          assertSubAccount(capabilityResponse[0]);
          store.subAccounts.set({
            address: capabilityResponse[0].address,
            factory: capabilityResponse[0].factory,
            factoryData: capabilityResponse[0].factoryData
          });
        }
        let accounts_ = [this.accounts[0]];
        const subAccount = store.subAccounts.get();
        const subAccountsConfig2 = store.subAccountsConfig.get();
        if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) {
          this.accounts = (subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
        }
        const spendPermissions2 = (_c = (_b = response === null || response === void 0 ? void 0 : response.accounts) === null || _b === void 0 ? void 0 : _b[0].capabilities) === null || _c === void 0 ? void 0 : _c.spendPermissions;
        if (spendPermissions2 && "permissions" in spendPermissions2) {
          store.spendPermissions.set(spendPermissions2 === null || spendPermissions2 === void 0 ? void 0 : spendPermissions2.permissions);
        }
        (_d = this.callback) === null || _d === void 0 ? void 0 : _d.call(this, "accountsChanged", accounts_);
        break;
      }
      case "wallet_addSubAccount": {
        assertSubAccount(result.value);
        const subAccount = result.value;
        store.subAccounts.set(subAccount);
        const subAccountsConfig2 = store.subAccountsConfig.get();
        this.accounts = (subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
        (_e = this.callback) === null || _e === void 0 ? void 0 : _e.call(this, "accountsChanged", this.accounts);
        break;
      }
    }
    return result.value;
  }
  async cleanup() {
    var _a, _b;
    const metadata = store.config.get().metadata;
    await this.keyManager.clear();
    store.account.clear();
    store.subAccounts.clear();
    store.spendPermissions.clear();
    store.chains.clear();
    this.accounts = [];
    this.chain = {
      id: (_b = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1
    };
  }
  /**
   * @returns `null` if the request was successful.
   * https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
   */
  async handleSwitchChainRequest(request) {
    assertParamsChainId(request.params);
    const chainId = ensureIntNumber(request.params[0].chainId);
    const localResult = this.updateChain(chainId);
    if (localResult)
      return null;
    const popupResult = await this.sendRequestToPopup(request);
    if (popupResult === null) {
      this.updateChain(chainId);
    }
    return popupResult;
  }
  async handleGetCapabilitiesRequest(request) {
    assertGetCapabilitiesParams(request.params);
    const requestedAccount = request.params[0];
    const filterChainIds = request.params[1];
    if (!this.accounts.some((account2) => isAddressEqual(account2, requestedAccount))) {
      throw standardErrors.provider.unauthorized("no active account found when getting capabilities");
    }
    const capabilities = store.getState().account.capabilities;
    if (!capabilities) {
      return {};
    }
    if (!filterChainIds || filterChainIds.length === 0) {
      return capabilities;
    }
    const filterChainNumbers = new Set(filterChainIds.map((chainId) => hexToNumber$1(chainId)));
    const filteredCapabilities = Object.fromEntries(Object.entries(capabilities).filter(([capabilityKey]) => {
      try {
        const capabilityChainNumber = hexToNumber$1(capabilityKey);
        return filterChainNumbers.has(capabilityChainNumber);
      } catch (_a) {
        return false;
      }
    }));
    return filteredCapabilities;
  }
  async sendEncryptedRequest(request) {
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw standardErrors.provider.unauthorized("No shared secret found when encrypting request");
    }
    const encrypted = await encryptContent({
      action: request,
      chainId: this.chain.id
    }, sharedSecret);
    const correlationId = correlationIds.get(request);
    const message = await this.createRequestMessage({ encrypted }, correlationId);
    return this.communicator.postRequestAndWaitForResponse(message);
  }
  async createRequestMessage(content, correlationId) {
    const publicKey = await exportKeyToHexString("public", await this.keyManager.getOwnPublicKey());
    return {
      id: crypto.randomUUID(),
      correlationId,
      sender: publicKey,
      content,
      timestamp: /* @__PURE__ */ new Date()
    };
  }
  async decryptResponseMessage(message) {
    var _a, _b, _c;
    const content = message.content;
    if ("failure" in content) {
      throw content.failure;
    }
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw standardErrors.provider.unauthorized("Invalid session: no shared secret found when decrypting response");
    }
    const response = await decryptContent(content.encrypted, sharedSecret);
    const availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
    if (availableChains) {
      const nativeCurrencies = (_b = response.data) === null || _b === void 0 ? void 0 : _b.nativeCurrencies;
      const chains2 = Object.entries(availableChains).map(([id, rpcUrl]) => {
        const nativeCurrency = nativeCurrencies === null || nativeCurrencies === void 0 ? void 0 : nativeCurrencies[Number(id)];
        return Object.assign({ id: Number(id), rpcUrl }, nativeCurrency ? { nativeCurrency } : {});
      });
      store.chains.set(chains2);
      this.updateChain(this.chain.id, chains2);
      createClients(chains2);
    }
    const walletCapabilities = (_c = response.data) === null || _c === void 0 ? void 0 : _c.capabilities;
    if (walletCapabilities) {
      store.account.set({
        capabilities: walletCapabilities
      });
    }
    return response;
  }
  updateChain(chainId, newAvailableChains) {
    var _a;
    const state = store.getState();
    const chains2 = newAvailableChains !== null && newAvailableChains !== void 0 ? newAvailableChains : state.chains;
    const chain = chains2 === null || chains2 === void 0 ? void 0 : chains2.find((chain2) => chain2.id === chainId);
    if (!chain)
      return false;
    if (chain !== this.chain) {
      this.chain = chain;
      store.account.set({
        chain
      });
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "chainChanged", hexStringFromNumber(chain.id));
    }
    return true;
  }
  async addSubAccount(request) {
    var _a, _b, _c, _d;
    const state = store.getState();
    const subAccount = state.subAccount;
    const subAccountsConfig2 = store.subAccountsConfig.get();
    if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) {
      this.accounts = (subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.enableAutoSubAccounts) ? prependWithoutDuplicates(this.accounts, subAccount.address) : appendWithoutDuplicates(this.accounts, subAccount.address);
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "accountsChanged", this.accounts);
      return subAccount;
    }
    await ((_c = (_b = this.communicator).waitForPopupLoaded) === null || _c === void 0 ? void 0 : _c.call(_b));
    if (Array.isArray(request.params) && request.params.length > 0 && request.params[0].account && request.params[0].account.type === "create") {
      let keys2;
      if (request.params[0].account.keys && request.params[0].account.keys.length > 0) {
        keys2 = request.params[0].account.keys;
      } else {
        const config2 = (_d = store.subAccountsConfig.get()) !== null && _d !== void 0 ? _d : {};
        const { account: ownerAccount } = config2.toOwnerAccount ? await config2.toOwnerAccount() : await getCryptoKeyAccount();
        if (!ownerAccount) {
          throw standardErrors.provider.unauthorized("could not get subaccount owner account when adding sub account");
        }
        keys2 = [
          {
            type: ownerAccount.address ? "address" : "webauthn-p256",
            publicKey: ownerAccount.address || ownerAccount.publicKey
          }
        ];
      }
      request.params[0].account.keys = keys2;
    }
    const response = await this.sendRequestToPopup(request);
    assertSubAccount(response);
    return response;
  }
  shouldRequestUseSubAccountSigner(request) {
    const sender = getSenderFromRequest(request);
    const subAccount = store.subAccounts.get();
    if (sender) {
      return sender.toLowerCase() === (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address.toLowerCase());
    }
    return false;
  }
  async sendRequestToSubAccountSigner(request) {
    var _a;
    const subAccount = store.subAccounts.get();
    const subAccountsConfig2 = store.subAccountsConfig.get();
    const config2 = store.config.get();
    assertPresence(subAccount === null || subAccount === void 0 ? void 0 : subAccount.address, standardErrors.provider.unauthorized("no active sub account when sending request to sub account signer"));
    const ownerAccount = (subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.toOwnerAccount) ? await subAccountsConfig2.toOwnerAccount() : await getCryptoKeyAccount();
    assertPresence(ownerAccount === null || ownerAccount === void 0 ? void 0 : ownerAccount.account, standardErrors.provider.unauthorized("no active sub account owner when sending request to sub account signer"));
    const sender = getSenderFromRequest(request);
    if (sender === void 0) {
      request = addSenderToRequest(request, subAccount.address);
    }
    const client = getClient(this.chain.id);
    assertPresence(client, standardErrors.rpc.internal(`client not found for chainId ${this.chain.id} when sending request to sub account signer`));
    const globalAccountAddress = this.accounts.find((account2) => account2.toLowerCase() !== subAccount.address.toLowerCase());
    assertPresence(globalAccountAddress, standardErrors.provider.unauthorized("no global account found when sending request to sub account signer"));
    const dataSuffix = makeDataSuffix({
      attribution: (_a = config2.preference) === null || _a === void 0 ? void 0 : _a.attribution,
      dappOrigin: window.location.origin
    });
    const publicKey = ownerAccount.account.type === "local" ? ownerAccount.account.address : ownerAccount.account.publicKey;
    let ownerIndex = await findOwnerIndex({
      address: subAccount.address,
      factory: subAccount.factory,
      factoryData: subAccount.factoryData,
      publicKey,
      client
    });
    if (ownerIndex === -1) {
      const correlationId = correlationIds.get(request);
      logAddOwnerStarted({ method: request.method, correlationId });
      try {
        ownerIndex = await handleAddSubAccountOwner({
          ownerAccount: ownerAccount.account,
          globalAccountRequest: this.sendRequestToPopup.bind(this)
        });
        logAddOwnerCompleted({ method: request.method, correlationId });
      } catch (error) {
        logAddOwnerError({
          method: request.method,
          correlationId,
          errorMessage: parseErrorMessageFromAny(error)
        });
        return standardErrors.provider.unauthorized("failed to add sub account owner when sending request to sub account signer");
      }
    }
    const { request: subAccountRequest } = await createSubAccountSigner({
      address: subAccount.address,
      owner: ownerAccount.account,
      client,
      factory: subAccount.factory,
      factoryData: subAccount.factoryData,
      parentAddress: globalAccountAddress,
      attribution: dataSuffix ? { suffix: dataSuffix } : void 0,
      ownerIndex
    });
    try {
      const result = await subAccountRequest(request);
      return result;
    } catch (error) {
      let errorObject;
      if (isViemError(error)) {
        errorObject = JSON.parse(error.details);
      } else if (isActionableHttpRequestError(error)) {
        errorObject = error;
      } else {
        throw error;
      }
      if (!(isActionableHttpRequestError(errorObject) && errorObject.data)) {
        throw error;
      }
      if (!errorObject.data) {
        throw error;
      }
      const correlationId = correlationIds.get(request);
      logInsufficientBalanceErrorHandlingStarted({ method: request.method, correlationId });
      try {
        const result = await handleInsufficientBalanceError({
          errorData: errorObject.data,
          globalAccountAddress,
          subAccountAddress: subAccount.address,
          client,
          request,
          subAccountRequest,
          globalAccountRequest: this.request.bind(this)
        });
        logInsufficientBalanceErrorHandlingCompleted({ method: request.method, correlationId });
        return result;
      } catch (handlingError) {
        console.error(handlingError);
        logInsufficientBalanceErrorHandlingError({
          method: request.method,
          correlationId,
          errorMessage: parseErrorMessageFromAny(handlingError)
        });
        throw error;
      }
    }
  }
}
const logHandshakeStarted = ({ method, correlationId }) => {
  logEvent("walletlink_signer.handshake.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId
  }, AnalyticsEventImportance.high);
};
const logHandshakeError = ({ method, correlationId, errorMessage }) => {
  logEvent("walletlink_signer.handshake.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    errorMessage
  }, AnalyticsEventImportance.high);
};
const logHandshakeCompleted = ({ method, correlationId }) => {
  logEvent("walletlink_signer.handshake.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId
  }, AnalyticsEventImportance.high);
};
const logRequestStarted = ({ method, correlationId }) => {
  logEvent("walletlink_signer.request.started", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId
  }, AnalyticsEventImportance.high);
};
const logRequestError = ({ method, correlationId, errorMessage }) => {
  logEvent("walletlink_signer.request.error", {
    action: ActionType.error,
    componentType: ComponentType.unknown,
    method,
    correlationId,
    errorMessage
  }, AnalyticsEventImportance.high);
};
const logRequestCompleted = ({ method, correlationId }) => {
  logEvent("walletlink_signer.request.completed", {
    action: ActionType.unknown,
    componentType: ComponentType.unknown,
    method,
    correlationId
  }, AnalyticsEventImportance.high);
};
const logWalletLinkConnectionConnectionFailed = () => {
  logEvent("walletlink_signer.walletlink_connection.connection_failed", {
    action: ActionType.measurement,
    componentType: ComponentType.unknown
  }, AnalyticsEventImportance.high);
};
const logWalletLinkConnectionFetchUnseenEventsFailed = () => {
  logEvent("walletlink_signer.walletlink_connection.fetch_unseen_events_failed", {
    action: ActionType.measurement,
    componentType: ComponentType.unknown
  }, AnalyticsEventImportance.high);
};
var sha3 = {};
var _assert = {};
Object.defineProperty(_assert, "__esModule", { value: true });
_assert.output = _assert.exists = _assert.hash = _assert.bytes = _assert.bool = _assert.number = _assert.isBytes = void 0;
function number(n2) {
  if (!Number.isSafeInteger(n2) || n2 < 0)
    throw new Error(`positive integer expected, not ${n2}`);
}
_assert.number = number;
function bool(b2) {
  if (typeof b2 !== "boolean")
    throw new Error(`boolean expected, not ${b2}`);
}
_assert.bool = bool;
function isBytes$1(a2) {
  return a2 instanceof Uint8Array || a2 != null && typeof a2 === "object" && a2.constructor.name === "Uint8Array";
}
_assert.isBytes = isBytes$1;
function bytes$1(b2, ...lengths) {
  if (!isBytes$1(b2))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b2.length}`);
}
_assert.bytes = bytes$1;
function hash(h2) {
  if (typeof h2 !== "function" || typeof h2.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(h2.outputLen);
  number(h2.blockLen);
}
_assert.hash = hash;
function exists$1(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
_assert.exists = exists$1;
function output$1(out, instance) {
  bytes$1(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
_assert.output = output$1;
const assert = { number, bool, bytes: bytes$1, hash, exists: exists$1, output: output$1 };
_assert.default = assert;
var _u64 = {};
Object.defineProperty(_u64, "__esModule", { value: true });
_u64.add5L = _u64.add5H = _u64.add4H = _u64.add4L = _u64.add3H = _u64.add3L = _u64.add = _u64.rotlBL = _u64.rotlBH = _u64.rotlSL = _u64.rotlSH = _u64.rotr32L = _u64.rotr32H = _u64.rotrBL = _u64.rotrBH = _u64.rotrSL = _u64.rotrSH = _u64.shrSL = _u64.shrSH = _u64.toBig = _u64.split = _u64.fromBig = void 0;
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n2, le = false) {
  if (le)
    return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
  return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
}
_u64.fromBig = fromBig;
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i2 = 0; i2 < lst.length; i2++) {
    const { h: h2, l: l2 } = fromBig(lst[i2], le);
    [Ah[i2], Al[i2]] = [h2, l2];
  }
  return [Ah, Al];
}
_u64.split = split;
const toBig = (h2, l2) => BigInt(h2 >>> 0) << _32n | BigInt(l2 >>> 0);
_u64.toBig = toBig;
const shrSH = (h2, _l, s2) => h2 >>> s2;
_u64.shrSH = shrSH;
const shrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
_u64.shrSL = shrSL;
const rotrSH = (h2, l2, s2) => h2 >>> s2 | l2 << 32 - s2;
_u64.rotrSH = rotrSH;
const rotrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
_u64.rotrSL = rotrSL;
const rotrBH = (h2, l2, s2) => h2 << 64 - s2 | l2 >>> s2 - 32;
_u64.rotrBH = rotrBH;
const rotrBL = (h2, l2, s2) => h2 >>> s2 - 32 | l2 << 64 - s2;
_u64.rotrBL = rotrBL;
const rotr32H = (_h, l2) => l2;
_u64.rotr32H = rotr32H;
const rotr32L = (h2, _l) => h2;
_u64.rotr32L = rotr32L;
const rotlSH = (h2, l2, s2) => h2 << s2 | l2 >>> 32 - s2;
_u64.rotlSH = rotlSH;
const rotlSL = (h2, l2, s2) => l2 << s2 | h2 >>> 32 - s2;
_u64.rotlSL = rotlSL;
const rotlBH = (h2, l2, s2) => l2 << s2 - 32 | h2 >>> 64 - s2;
_u64.rotlBH = rotlBH;
const rotlBL = (h2, l2, s2) => h2 << s2 - 32 | l2 >>> 64 - s2;
_u64.rotlBL = rotlBL;
function add(Ah, Al, Bh, Bl) {
  const l2 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
}
_u64.add = add;
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
_u64.add3L = add3L;
const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
_u64.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
_u64.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
_u64.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
_u64.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
_u64.add5H = add5H;
const u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
_u64.default = u64;
var utils = {};
var crypto$1 = {};
Object.defineProperty(crypto$1, "__esModule", { value: true });
crypto$1.crypto = void 0;
crypto$1.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(exports) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.byteSwap32 = exports.byteSwapIfBE = exports.byteSwap = exports.isLE = exports.rotl = exports.rotr = exports.createView = exports.u32 = exports.u8 = exports.isBytes = void 0;
  const crypto_1 = crypto$1;
  const _assert_js_12 = _assert;
  function isBytes2(a2) {
    return a2 instanceof Uint8Array || a2 != null && typeof a2 === "object" && a2.constructor.name === "Uint8Array";
  }
  exports.isBytes = isBytes2;
  const u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  exports.u8 = u8;
  const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  exports.u32 = u32;
  const createView2 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  exports.createView = createView2;
  const rotr2 = (word, shift) => word << 32 - shift | word >>> shift;
  exports.rotr = rotr2;
  const rotl = (word, shift) => word << shift | word >>> 32 - shift >>> 0;
  exports.rotl = rotl;
  exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const byteSwap = (word) => word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
  exports.byteSwap = byteSwap;
  exports.byteSwapIfBE = exports.isLE ? (n2) => n2 : (n2) => (0, exports.byteSwap)(n2);
  function byteSwap32(arr) {
    for (let i2 = 0; i2 < arr.length; i2++) {
      arr[i2] = (0, exports.byteSwap)(arr[i2]);
    }
  }
  exports.byteSwap32 = byteSwap32;
  const hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
  function bytesToHex2(bytes2) {
    (0, _assert_js_12.bytes)(bytes2);
    let hex = "";
    for (let i2 = 0; i2 < bytes2.length; i2++) {
      hex += hexes2[bytes2[i2]];
    }
    return hex;
  }
  exports.bytesToHex = bytesToHex2;
  const asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
      return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
      return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
      return char - (asciis._a - 10);
    return;
  }
  function hexToBytes2(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi));
      const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  exports.hexToBytes = hexToBytes2;
  const nextTick = async () => {
  };
  exports.nextTick = nextTick;
  async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i2 = 0; i2 < iters; i2++) {
      cb(i2);
      const diff = Date.now() - ts;
      if (diff >= 0 && diff < tick)
        continue;
      await (0, exports.nextTick)();
      ts += diff;
    }
  }
  exports.asyncLoop = asyncLoop;
  function utf8ToBytes2(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  exports.utf8ToBytes = utf8ToBytes2;
  function toBytes2(data) {
    if (typeof data === "string")
      data = utf8ToBytes2(data);
    (0, _assert_js_12.bytes)(data);
    return data;
  }
  exports.toBytes = toBytes2;
  function concatBytes2(...arrays) {
    let sum = 0;
    for (let i2 = 0; i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      (0, _assert_js_12.bytes)(a2);
      sum += a2.length;
    }
    const res = new Uint8Array(sum);
    for (let i2 = 0, pad2 = 0; i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      res.set(a2, pad2);
      pad2 += a2.length;
    }
    return res;
  }
  exports.concatBytes = concatBytes2;
  class Hash2 {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  exports.Hash = Hash2;
  const toStr = {}.toString;
  function checkOpts(defaults, opts) {
    if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
  }
  exports.checkOpts = checkOpts;
  function wrapConstructor2(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  exports.wrapConstructor = wrapConstructor2;
  function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes2(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
  function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes2(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
  function randomBytes2(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
      return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }
  exports.randomBytes = randomBytes2;
})(utils);
Object.defineProperty(sha3, "__esModule", { value: true });
sha3.shake256 = sha3.shake128 = sha3.keccak_512 = sha3.keccak_384 = sha3.keccak_256 = sha3.keccak_224 = sha3.sha3_512 = sha3.sha3_384 = sha3.sha3_256 = sha3.sha3_224 = sha3.Keccak = sha3.keccakP = void 0;
const _assert_js_1 = _assert;
const _u64_js_1 = _u64;
const utils_js_1 = utils;
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(113);
for (let round = 0, R = _1n, x2 = 1, y2 = 0; round < 24; round++) {
  [x2, y2] = [y2, (2 * x2 + 3 * y2) % 5];
  SHA3_PI.push(2 * (5 * y2 + x2));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t2 = _0n;
  for (let j2 = 0; j2 < 7; j2++) {
    R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n)
      t2 ^= _1n << (_1n << /* @__PURE__ */ BigInt(j2)) - _1n;
  }
  _SHA3_IOTA.push(t2);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, _u64_js_1.split)(_SHA3_IOTA, true);
const rotlH = (h2, l2, s2) => s2 > 32 ? (0, _u64_js_1.rotlBH)(h2, l2, s2) : (0, _u64_js_1.rotlSH)(h2, l2, s2);
const rotlL = (h2, l2, s2) => s2 > 32 ? (0, _u64_js_1.rotlBL)(h2, l2, s2) : (0, _u64_js_1.rotlSL)(h2, l2, s2);
function keccakP(s2, rounds = 24) {
  const B2 = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x2 = 0; x2 < 10; x2++)
      B2[x2] = s2[x2] ^ s2[x2 + 10] ^ s2[x2 + 20] ^ s2[x2 + 30] ^ s2[x2 + 40];
    for (let x2 = 0; x2 < 10; x2 += 2) {
      const idx1 = (x2 + 8) % 10;
      const idx0 = (x2 + 2) % 10;
      const B0 = B2[idx0];
      const B1 = B2[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B2[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B2[idx1 + 1];
      for (let y2 = 0; y2 < 50; y2 += 10) {
        s2[x2 + y2] ^= Th;
        s2[x2 + y2 + 1] ^= Tl;
      }
    }
    let curH = s2[2];
    let curL = s2[3];
    for (let t2 = 0; t2 < 24; t2++) {
      const shift = SHA3_ROTL[t2];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t2];
      curH = s2[PI];
      curL = s2[PI + 1];
      s2[PI] = Th;
      s2[PI + 1] = Tl;
    }
    for (let y2 = 0; y2 < 50; y2 += 10) {
      for (let x2 = 0; x2 < 10; x2++)
        B2[x2] = s2[y2 + x2];
      for (let x2 = 0; x2 < 10; x2++)
        s2[y2 + x2] ^= ~B2[(x2 + 2) % 10] & B2[(x2 + 4) % 10];
    }
    s2[0] ^= SHA3_IOTA_H[round];
    s2[1] ^= SHA3_IOTA_L[round];
  }
  B2.fill(0);
}
sha3.keccakP = keccakP;
class Keccak extends utils_js_1.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    (0, _assert_js_1.number)(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = (0, utils_js_1.u32)(this.state);
  }
  keccak() {
    if (!utils_js_1.isLE)
      (0, utils_js_1.byteSwap32)(this.state32);
    keccakP(this.state32, this.rounds);
    if (!utils_js_1.isLE)
      (0, utils_js_1.byteSwap32)(this.state32);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    (0, _assert_js_1.exists)(this);
    const { blockLen, state } = this;
    data = (0, utils_js_1.toBytes)(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i2 = 0; i2 < take; i2++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    (0, _assert_js_1.exists)(this, false);
    (0, _assert_js_1.bytes)(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes2) {
    (0, _assert_js_1.number)(bytes2);
    return this.xofInto(new Uint8Array(bytes2));
  }
  digestInto(out) {
    (0, _assert_js_1.output)(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
}
sha3.Keccak = Keccak;
const gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
sha3.sha3_224 = gen(6, 144, 224 / 8);
sha3.sha3_256 = gen(6, 136, 256 / 8);
sha3.sha3_384 = gen(6, 104, 384 / 8);
sha3.sha3_512 = gen(6, 72, 512 / 8);
sha3.keccak_224 = gen(1, 144, 224 / 8);
sha3.keccak_256 = gen(1, 136, 256 / 8);
sha3.keccak_384 = gen(1, 104, 384 / 8);
sha3.keccak_512 = gen(1, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
sha3.shake128 = genShake(31, 168, 128 / 8);
sha3.shake256 = genShake(31, 136, 256 / 8);
const { keccak_256 } = sha3;
function zeros(bytes2) {
  return Buffer.allocUnsafe(bytes2).fill(0);
}
function intToHex(i2) {
  const hex = i2.toString(16);
  return `0x${hex}`;
}
function intToBuffer(i2) {
  const hex = intToHex(i2);
  return new Buffer(padToEven(hex.slice(2)), "hex");
}
function bitLengthFromBigInt(num) {
  return num.toString(2).length;
}
function bufferBEFromBigInt(num, length) {
  let hex = num.toString(16);
  if (hex.length % 2 !== 0) hex = "0" + hex;
  const byteArray = hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
  while (byteArray.length < length) {
    byteArray.unshift(0);
  }
  return Buffer.from(byteArray);
}
function twosFromBigInt(value, width) {
  const isNegative = value < 0n;
  let result;
  if (isNegative) {
    const mask = (1n << BigInt(width)) - 1n;
    result = (~value & mask) + 1n;
  } else {
    result = value;
  }
  result &= (1n << BigInt(width)) - 1n;
  return result;
}
function setLength(msg, length, right) {
  const buf = zeros(length);
  msg = toBuffer(msg);
  if (right) {
    if (msg.length < length) {
      msg.copy(buf);
      return buf;
    }
    return msg.slice(0, length);
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length);
      return buf;
    }
    return msg.slice(-length);
  }
}
function setLengthRight(msg, length) {
  return setLength(msg, length, true);
}
function toBuffer(v2) {
  if (!Buffer.isBuffer(v2)) {
    if (Array.isArray(v2)) {
      v2 = Buffer.from(v2);
    } else if (typeof v2 === "string") {
      if (isHexString(v2)) {
        v2 = Buffer.from(padToEven(stripHexPrefix(v2)), "hex");
      } else {
        v2 = Buffer.from(v2);
      }
    } else if (typeof v2 === "number") {
      v2 = intToBuffer(v2);
    } else if (v2 === null || v2 === void 0) {
      v2 = Buffer.allocUnsafe(0);
    } else if (typeof v2 === "bigint") {
      v2 = bufferBEFromBigInt(v2);
    } else if (v2.toArray) {
      v2 = Buffer.from(v2.toArray());
    } else {
      throw new Error("invalid type");
    }
  }
  return v2;
}
function bufferToHex(buf) {
  buf = toBuffer(buf);
  return "0x" + buf.toString("hex");
}
function keccak(a2, bits) {
  a2 = toBuffer(a2);
  if (!bits) bits = 256;
  if (bits !== 256) {
    throw new Error("unsupported");
  }
  return Buffer.from(keccak_256(new Uint8Array(a2)));
}
function padToEven(str) {
  return str.length % 2 ? "0" + str : str;
}
function isHexString(str) {
  return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
}
function stripHexPrefix(str) {
  if (typeof str === "string" && str.startsWith("0x")) {
    return str.slice(2);
  }
  return str;
}
var util$2 = {
  zeros,
  setLength,
  setLengthRight,
  isHexString,
  stripHexPrefix,
  toBuffer,
  bufferToHex,
  keccak,
  bitLengthFromBigInt,
  bufferBEFromBigInt,
  twosFromBigInt
};
const util$1 = util$2;
function elementaryName(name) {
  if (name.startsWith("int[")) {
    return "int256" + name.slice(3);
  } else if (name === "int") {
    return "int256";
  } else if (name.startsWith("uint[")) {
    return "uint256" + name.slice(4);
  } else if (name === "uint") {
    return "uint256";
  } else if (name.startsWith("fixed[")) {
    return "fixed128x128" + name.slice(5);
  } else if (name === "fixed") {
    return "fixed128x128";
  } else if (name.startsWith("ufixed[")) {
    return "ufixed128x128" + name.slice(6);
  } else if (name === "ufixed") {
    return "ufixed128x128";
  }
  return name;
}
function parseTypeN(type) {
  return Number.parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
}
function parseTypeNxM(type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
  return [Number.parseInt(tmp[1], 10), Number.parseInt(tmp[2], 10)];
}
function parseTypeArray(type) {
  var tmp = type.match(/(.*)\[(.*?)\]$/);
  if (tmp) {
    return tmp[2] === "" ? "dynamic" : Number.parseInt(tmp[2], 10);
  }
  return null;
}
function parseNumber(arg) {
  var type = typeof arg;
  if (type === "string" || type === "number") {
    return BigInt(arg);
  } else if (type === "bigint") {
    return arg;
  } else {
    throw new Error("Argument is not a number");
  }
}
function encodeSingle(type, arg) {
  var size2, num, ret, i2;
  if (type === "address") {
    return encodeSingle("uint160", parseNumber(arg));
  } else if (type === "bool") {
    return encodeSingle("uint8", arg ? 1 : 0);
  } else if (type === "string") {
    return encodeSingle("bytes", new Buffer(arg, "utf8"));
  } else if (isArray(type)) {
    if (typeof arg.length === "undefined") {
      throw new Error("Not an array?");
    }
    size2 = parseTypeArray(type);
    if (size2 !== "dynamic" && size2 !== 0 && arg.length > size2) {
      throw new Error("Elements exceed array size: " + size2);
    }
    ret = [];
    type = type.slice(0, type.lastIndexOf("["));
    if (typeof arg === "string") {
      arg = JSON.parse(arg);
    }
    for (i2 in arg) {
      ret.push(encodeSingle(type, arg[i2]));
    }
    if (size2 === "dynamic") {
      var length = encodeSingle("uint256", arg.length);
      ret.unshift(length);
    }
    return Buffer.concat(ret);
  } else if (type === "bytes") {
    arg = new Buffer(arg);
    ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
    if (arg.length % 32 !== 0) {
      ret = Buffer.concat([ret, util$1.zeros(32 - arg.length % 32)]);
    }
    return ret;
  } else if (type.startsWith("bytes")) {
    size2 = parseTypeN(type);
    if (size2 < 1 || size2 > 32) {
      throw new Error("Invalid bytes<N> width: " + size2);
    }
    return util$1.setLengthRight(arg, 32);
  } else if (type.startsWith("uint")) {
    size2 = parseTypeN(type);
    if (size2 % 8 || size2 < 8 || size2 > 256) {
      throw new Error("Invalid uint<N> width: " + size2);
    }
    num = parseNumber(arg);
    const bitLength = util$1.bitLengthFromBigInt(num);
    if (bitLength > size2) {
      throw new Error("Supplied uint exceeds width: " + size2 + " vs " + bitLength);
    }
    if (num < 0) {
      throw new Error("Supplied uint is negative");
    }
    return util$1.bufferBEFromBigInt(num, 32);
  } else if (type.startsWith("int")) {
    size2 = parseTypeN(type);
    if (size2 % 8 || size2 < 8 || size2 > 256) {
      throw new Error("Invalid int<N> width: " + size2);
    }
    num = parseNumber(arg);
    const bitLength = util$1.bitLengthFromBigInt(num);
    if (bitLength > size2) {
      throw new Error("Supplied int exceeds width: " + size2 + " vs " + bitLength);
    }
    const twos = util$1.twosFromBigInt(num, 256);
    return util$1.bufferBEFromBigInt(twos, 32);
  } else if (type.startsWith("ufixed")) {
    size2 = parseTypeNxM(type);
    num = parseNumber(arg);
    if (num < 0) {
      throw new Error("Supplied ufixed is negative");
    }
    return encodeSingle("uint256", num * BigInt(2) ** BigInt(size2[1]));
  } else if (type.startsWith("fixed")) {
    size2 = parseTypeNxM(type);
    return encodeSingle("int256", parseNumber(arg) * BigInt(2) ** BigInt(size2[1]));
  }
  throw new Error("Unsupported or invalid type: " + type);
}
function isDynamic(type) {
  return type === "string" || type === "bytes" || parseTypeArray(type) === "dynamic";
}
function isArray(type) {
  return type.lastIndexOf("]") === type.length - 1;
}
function rawEncode(types2, values) {
  var output2 = [];
  var data = [];
  var headLength = 32 * types2.length;
  for (var i2 in types2) {
    var type = elementaryName(types2[i2]);
    var value = values[i2];
    var cur = encodeSingle(type, value);
    if (isDynamic(type)) {
      output2.push(encodeSingle("uint256", headLength));
      data.push(cur);
      headLength += cur.length;
    } else {
      output2.push(cur);
    }
  }
  return Buffer.concat(output2.concat(data));
}
function solidityPack(types2, values) {
  if (types2.length !== values.length) {
    throw new Error("Number of types are not matching the values");
  }
  var size2, num;
  var ret = [];
  for (var i2 = 0; i2 < types2.length; i2++) {
    var type = elementaryName(types2[i2]);
    var value = values[i2];
    if (type === "bytes") {
      ret.push(value);
    } else if (type === "string") {
      ret.push(new Buffer(value, "utf8"));
    } else if (type === "bool") {
      ret.push(new Buffer(value ? "01" : "00", "hex"));
    } else if (type === "address") {
      ret.push(util$1.setLength(value, 20));
    } else if (type.startsWith("bytes")) {
      size2 = parseTypeN(type);
      if (size2 < 1 || size2 > 32) {
        throw new Error("Invalid bytes<N> width: " + size2);
      }
      ret.push(util$1.setLengthRight(value, size2));
    } else if (type.startsWith("uint")) {
      size2 = parseTypeN(type);
      if (size2 % 8 || size2 < 8 || size2 > 256) {
        throw new Error("Invalid uint<N> width: " + size2);
      }
      num = parseNumber(value);
      const bitLength = util$1.bitLengthFromBigInt(num);
      if (bitLength > size2) {
        throw new Error("Supplied uint exceeds width: " + size2 + " vs " + bitLength);
      }
      ret.push(util$1.bufferBEFromBigInt(num, size2 / 8));
    } else if (type.startsWith("int")) {
      size2 = parseTypeN(type);
      if (size2 % 8 || size2 < 8 || size2 > 256) {
        throw new Error("Invalid int<N> width: " + size2);
      }
      num = parseNumber(value);
      const bitLength = util$1.bitLengthFromBigInt(num);
      if (bitLength > size2) {
        throw new Error("Supplied int exceeds width: " + size2 + " vs " + bitLength);
      }
      const twos = util$1.twosFromBigInt(num, size2);
      ret.push(util$1.bufferBEFromBigInt(twos, size2 / 8));
    } else {
      throw new Error("Unsupported or invalid type: " + type);
    }
  }
  return Buffer.concat(ret);
}
function soliditySHA3(types2, values) {
  return util$1.keccak(solidityPack(types2, values));
}
var abi$1 = {
  rawEncode,
  solidityPack,
  soliditySHA3
};
const util = util$2;
const abi = abi$1;
const TYPED_MESSAGE_SCHEMA = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
};
const TypedDataUtils = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(primaryType, data, types2, useV4 = true) {
    const encodedTypes = ["bytes32"];
    const encodedValues = [this.hashType(primaryType, types2)];
    if (useV4) {
      const encodeField = (name, type, value) => {
        if (types2[type] !== void 0) {
          return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util.keccak(this.encodeData(type, value, types2, useV4))];
        }
        if (value === void 0)
          throw new Error(`missing value for field ${name} of type ${type}`);
        if (type === "bytes") {
          return ["bytes32", util.keccak(value)];
        }
        if (type === "string") {
          if (typeof value === "string") {
            value = Buffer.from(value, "utf8");
          }
          return ["bytes32", util.keccak(value)];
        }
        if (type.lastIndexOf("]") === type.length - 1) {
          const parsedType = type.slice(0, type.lastIndexOf("["));
          const typeValuePairs = value.map((item) => encodeField(name, parsedType, item));
          return ["bytes32", util.keccak(abi.rawEncode(
            typeValuePairs.map(([type2]) => type2),
            typeValuePairs.map(([, value2]) => value2)
          ))];
        }
        return [type, value];
      };
      for (const field of types2[primaryType]) {
        const [type, value] = encodeField(field.name, field.type, data[field.name]);
        encodedTypes.push(type);
        encodedValues.push(value);
      }
    } else {
      for (const field of types2[primaryType]) {
        let value = data[field.name];
        if (value !== void 0) {
          if (field.type === "bytes") {
            encodedTypes.push("bytes32");
            value = util.keccak(value);
            encodedValues.push(value);
          } else if (field.type === "string") {
            encodedTypes.push("bytes32");
            if (typeof value === "string") {
              value = Buffer.from(value, "utf8");
            }
            value = util.keccak(value);
            encodedValues.push(value);
          } else if (types2[field.type] !== void 0) {
            encodedTypes.push("bytes32");
            value = util.keccak(this.encodeData(field.type, value, types2, useV4));
            encodedValues.push(value);
          } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
            throw new Error("Arrays currently unimplemented in encodeData");
          } else {
            encodedTypes.push(field.type);
            encodedValues.push(value);
          }
        }
      }
    }
    return abi.rawEncode(encodedTypes, encodedValues);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(primaryType, types2) {
    let result = "";
    let deps = this.findTypeDependencies(primaryType, types2).filter((dep) => dep !== primaryType);
    deps = [primaryType].concat(deps.sort());
    for (const type of deps) {
      const children = types2[type];
      if (!children) {
        throw new Error("No type definition specified: " + type);
      }
      result += type + "(" + types2[type].map(({ name, type: type2 }) => type2 + " " + name).join(",") + ")";
    }
    return result;
  },
  /**
   * Finds all types within a type definition object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(primaryType, types2, results = []) {
    primaryType = primaryType.match(/^\w*/)[0];
    if (results.includes(primaryType) || types2[primaryType] === void 0) {
      return results;
    }
    results.push(primaryType);
    for (const field of types2[primaryType]) {
      for (const dep of this.findTypeDependencies(field.type, types2, results)) {
        !results.includes(dep) && results.push(dep);
      }
    }
    return results;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(primaryType, data, types2, useV4 = true) {
    return util.keccak(this.encodeData(primaryType, data, types2, useV4));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(primaryType, types2) {
    return util.keccak(this.encodeType(primaryType, types2));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(data) {
    const sanitizedData = {};
    for (const key in TYPED_MESSAGE_SCHEMA.properties) {
      data[key] && (sanitizedData[key] = data[key]);
    }
    if (sanitizedData.types) {
      sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
    }
    return sanitizedData;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(typedData, useV4 = true) {
    const sanitizedData = this.sanitizeData(typedData);
    const parts = [Buffer.from("1901", "hex")];
    parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
    if (sanitizedData.primaryType !== "EIP712Domain") {
      parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
    }
    return util.keccak(Buffer.concat(parts));
  }
};
var ethEip712Util = {
  TYPED_MESSAGE_SCHEMA,
  TypedDataUtils,
  hashForSignTypedDataLegacy: function(msgParams) {
    return typedSignatureHashLegacy(msgParams.data);
  },
  hashForSignTypedData_v3: function(msgParams) {
    return TypedDataUtils.hash(msgParams.data, false);
  },
  hashForSignTypedData_v4: function(msgParams) {
    return TypedDataUtils.hash(msgParams.data);
  }
};
function typedSignatureHashLegacy(typedData) {
  const error = new Error("Expect argument to be non-empty array");
  if (typeof typedData !== "object" || !typedData.length) throw error;
  const data = typedData.map(function(e2) {
    return e2.type === "bytes" ? util.toBuffer(e2.value) : e2.value;
  });
  const types2 = typedData.map(function(e2) {
    return e2.type;
  });
  const schema = typedData.map(function(e2) {
    if (!e2.name) throw error;
    return e2.type + " " + e2.name;
  });
  return abi.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      abi.soliditySHA3(new Array(typedData.length).fill("string"), schema),
      abi.soliditySHA3(types2, data)
    ]
  );
}
const eip712 = /* @__PURE__ */ getDefaultExportFromCjs(ethEip712Util);
const WALLET_USER_NAME_KEY = "walletUsername";
const LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
const APP_VERSION_KEY = "AppVersion";
class WalletLinkCipher {
  // @param secret hex representation of 32-byte secret
  constructor(secret) {
    this.secret = secret;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  async encrypt(plainText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw new Error(`secret must be 256 bits`);
    const ivBytes = crypto.getRandomValues(new Uint8Array(12));
    const secretKey = await crypto.subtle.importKey("raw", hexStringToUint8Array(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
    const enc = new TextEncoder();
    const encryptedResult = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: ivBytes
    }, secretKey, enc.encode(plainText));
    const tagLength = 16;
    const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
    const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
    const authTagBytes = new Uint8Array(authTag);
    const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
    const concatenated = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
    return uint8ArrayToHex(concatenated);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(cipherText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw new Error(`secret must be 256 bits`);
    return new Promise((resolve, reject) => {
      void (async () => {
        const secretKey = await crypto.subtle.importKey("raw", hexStringToUint8Array(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
        const encrypted = hexStringToUint8Array(cipherText);
        const ivBytes = encrypted.slice(0, 12);
        const authTagBytes = encrypted.slice(12, 28);
        const encryptedPlaintextBytes = encrypted.slice(28);
        const concatenatedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
        const algo = {
          name: "AES-GCM",
          iv: new Uint8Array(ivBytes)
        };
        try {
          const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concatenatedBytes);
          const decoder2 = new TextDecoder();
          resolve(decoder2.decode(decrypted));
        } catch (err) {
          reject(err);
        }
      })();
    });
  }
}
class WalletLinkHTTP {
  constructor(linkAPIUrl, sessionId, sessionKey) {
    this.linkAPIUrl = linkAPIUrl;
    this.sessionId = sessionId;
    const credentials = `${sessionId}:${sessionKey}`;
    this.auth = `Basic ${btoa(credentials)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(events) {
    return Promise.all(events.map((e2) => fetch(`${this.linkAPIUrl}/events/${e2.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((error) => console.error("Unable to mark events as seen:", error));
  }
  async fetchUnseenEvents() {
    var _a;
    const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (response.ok) {
      const { events, error } = await response.json();
      if (error) {
        throw new Error(`Check unseen events failed: ${error}`);
      }
      const responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter((e2) => e2.event === "Web3Response").map((e2) => ({
        type: "Event",
        sessionId: this.sessionId,
        eventId: e2.id,
        event: e2.event,
        data: e2.data
      }))) !== null && _a !== void 0 ? _a : [];
      this.markUnseenEventsAsSeen(responseEvents);
      return responseEvents;
    }
    throw new Error(`Check unseen events failed: ${response.status}`);
  }
}
var ConnectionState;
(function(ConnectionState2) {
  ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
  ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
  ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState || (ConnectionState = {}));
class WalletLinkWebSocket {
  setConnectionStateListener(listener) {
    this.connectionStateListener = listener;
  }
  setIncomingDataListener(listener) {
    this.incomingDataListener = listener;
  }
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(url, WebSocketClass = WebSocket) {
    this.WebSocketClass = WebSocketClass;
    this.webSocket = null;
    this.isDisconnecting = false;
    this.url = url.replace(/^http/, "ws");
    this.instanceId = WalletLinkWebSocket.instanceCounter++;
    WalletLinkWebSocket.activeInstances.add(this.instanceId);
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket) {
      throw new Error("webSocket object is not null");
    }
    if (this.isDisconnecting) {
      throw new Error("WebSocket is disconnecting, cannot reconnect on same instance");
    }
    return new Promise((resolve, reject) => {
      var _a;
      let webSocket;
      try {
        this.webSocket = webSocket = new this.WebSocketClass(this.url);
      } catch (err) {
        reject(err);
        return;
      }
      (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTING);
      webSocket.onclose = (evt) => {
        var _a2;
        this.clearWebSocket();
        if (webSocket.readyState !== WebSocket.OPEN) {
          reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
        }
        (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.DISCONNECTED);
      };
      webSocket.onopen = (_2) => {
        var _a2;
        resolve();
        (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.CONNECTED);
        if (WalletLinkWebSocket.pendingData.length > 0) {
          const pending = [...WalletLinkWebSocket.pendingData];
          pending.forEach((data) => this.sendData(data));
          WalletLinkWebSocket.pendingData = [];
        }
      };
      webSocket.onmessage = (evt) => {
        var _a2, _b;
        if (evt.data === "h") {
          (_a2 = this.incomingDataListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
            type: "Heartbeat"
          });
        } else {
          try {
            const message = JSON.parse(evt.data);
            (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
          } catch (_c) {
          }
        }
      };
    });
  }
  /**
   * Disconnect from server
   */
  disconnect() {
    var _a;
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.isDisconnecting = true;
    this.clearWebSocket();
    (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
    this.connectionStateListener = void 0;
    this.incomingDataListener = void 0;
    try {
      webSocket.close();
    } catch (_b) {
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(data) {
    const { webSocket } = this;
    if (!webSocket) {
      WalletLinkWebSocket.pendingData.push(data);
      if (!this.isDisconnecting) {
        this.connect();
      }
      return;
    }
    if (webSocket.readyState !== WebSocket.OPEN) {
      WalletLinkWebSocket.pendingData.push(data);
      return;
    }
    webSocket.send(data);
  }
  clearWebSocket() {
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.webSocket = null;
    webSocket.onclose = null;
    webSocket.onerror = null;
    webSocket.onmessage = null;
    webSocket.onopen = null;
  }
  /**
   * remove ws from active instances
   */
  cleanup() {
    WalletLinkWebSocket.activeInstances.delete(this.instanceId);
  }
}
WalletLinkWebSocket.instanceCounter = 0;
WalletLinkWebSocket.activeInstances = /* @__PURE__ */ new Set();
WalletLinkWebSocket.pendingData = [];
const HEARTBEAT_INTERVAL = 1e4;
const REQUEST_TIMEOUT = 6e4;
class WalletLinkConnection {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session, linkAPIUrl, listener }) {
    this.destroyed = false;
    this.lastHeartbeatResponse = 0;
    this.nextReqId = IntNumber(1);
    this.reconnectAttempts = 0;
    this.isReconnecting = false;
    this._connected = false;
    this._linked = false;
    this.requestResolutions = /* @__PURE__ */ new Map();
    this.handleSessionMetadataUpdated = (metadata) => {
      if (!metadata)
        return;
      const handlers = /* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          // ChainId and JsonRpcUrl are always updated together
          (v2) => metadata.JsonRpcUrl && this.handleChainUpdated(v2, metadata.JsonRpcUrl)
        ]
      ]);
      handlers.forEach((handler, key) => {
        const value = metadata[key];
        if (value === void 0)
          return;
        handler(value);
      });
    };
    this.handleDestroyed = (__destroyed) => {
      var _a;
      if (__destroyed !== "1")
        return;
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
    };
    this.handleAccountUpdated = async (encryptedEthereumAddress) => {
      var _a;
      try {
        const address = await this.cipher.decrypt(encryptedEthereumAddress);
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
      } catch (_b) {
      }
    };
    this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
      var _a;
      try {
        const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
      } catch (_b) {
      }
    };
    this.handleWalletUsernameUpdated = async (walletUsername) => {
      this.handleMetadataUpdated(WALLET_USER_NAME_KEY, walletUsername);
    };
    this.handleAppVersionUpdated = async (appVersion) => {
      this.handleMetadataUpdated(APP_VERSION_KEY, appVersion);
    };
    this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
      var _a;
      try {
        const chainId = await this.cipher.decrypt(encryptedChainId);
        const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
      } catch (_b) {
      }
    };
    this.session = session;
    this.cipher = new WalletLinkCipher(session.secret);
    this.listener = listener;
    this.linkAPIUrl = linkAPIUrl;
    this.WebSocketClass = WebSocket;
    const ws = this.createWebSocket();
    this.ws = ws;
    this.http = new WalletLinkHTTP(linkAPIUrl, session.id, session.key);
    this.setupVisibilityChangeHandler();
  }
  createWebSocket() {
    const ws = new WalletLinkWebSocket(`${this.linkAPIUrl}/rpc`, this.WebSocketClass);
    this.activeWsInstance = ws;
    ws.setConnectionStateListener(async (state) => {
      if (ws !== this.activeWsInstance) {
        return;
      }
      let connected = false;
      switch (state) {
        case ConnectionState.DISCONNECTED:
          if (this.heartbeatIntervalId) {
            clearInterval(this.heartbeatIntervalId);
            this.heartbeatIntervalId = void 0;
          }
          this.lastHeartbeatResponse = 0;
          connected = false;
          if (!this.destroyed) {
            const reconnect = async () => {
              if (this.isReconnecting) {
                return;
              }
              this.isReconnecting = true;
              const delay = this.reconnectAttempts === 0 ? 0 : 3e3;
              await new Promise((resolve) => setTimeout(resolve, delay));
              if (!this.destroyed && ws === this.activeWsInstance) {
                this.reconnectAttempts++;
                if ("cleanup" in this.ws && typeof this.ws.cleanup === "function") {
                  this.ws.cleanup();
                }
                this.ws = this.createWebSocket();
                this.ws.connect().catch(() => {
                  logWalletLinkConnectionConnectionFailed();
                }).finally(() => {
                  this.isReconnecting = false;
                });
              } else {
                this.isReconnecting = false;
              }
            };
            reconnect();
          }
          break;
        case ConnectionState.CONNECTED:
          this.reconnectAttempts = 0;
          try {
            connected = await this.handleConnected();
            this.fetchUnseenEventsAPI().catch(() => {
            });
          } catch (_error) {
            break;
          }
          this.connected = connected;
          this.updateLastHeartbeat();
          if (this.heartbeatIntervalId) {
            clearInterval(this.heartbeatIntervalId);
          }
          this.heartbeatIntervalId = window.setInterval(() => {
            this.heartbeat();
          }, HEARTBEAT_INTERVAL);
          setTimeout(() => {
            this.heartbeat();
          }, 100);
          break;
        case ConnectionState.CONNECTING:
          break;
      }
      if (state !== ConnectionState.CONNECTED) {
        this.connected = connected;
      }
    });
    ws.setIncomingDataListener((m2) => {
      var _a;
      switch (m2.type) {
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        case "IsLinkedOK":
        case "Linked": {
          const linked = m2.type === "IsLinkedOK" ? m2.linked : void 0;
          this.linked = linked || m2.onlineGuests > 0;
          break;
        }
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          this.handleSessionMetadataUpdated(m2.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(m2);
          break;
        }
      }
      if (m2.id !== void 0) {
        (_a = this.requestResolutions.get(m2.id)) === null || _a === void 0 ? void 0 : _a(m2);
      }
    });
    return ws;
  }
  setupVisibilityChangeHandler() {
    this.visibilityChangeHandler = () => {
      if (!document.hidden && !this.destroyed) {
        if (!this.connected) {
          this.reconnectWithFreshWebSocket();
        } else {
          this.heartbeat();
        }
      }
    };
    this.focusHandler = () => {
      if (!this.destroyed && !this.connected) {
        this.reconnectWithFreshWebSocket();
      }
    };
    document.addEventListener("visibilitychange", this.visibilityChangeHandler);
    window.addEventListener("focus", this.focusHandler);
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) {
        if (this.focusHandler) {
          this.focusHandler();
        }
      }
    });
  }
  reconnectWithFreshWebSocket() {
    if (this.destroyed)
      return;
    const oldWs = this.ws;
    this.activeWsInstance = void 0;
    oldWs.disconnect();
    if ("cleanup" in oldWs && typeof oldWs.cleanup === "function") {
      oldWs.cleanup();
    }
    this.ws = this.createWebSocket();
    this.ws.connect().catch(() => {
      logWalletLinkConnectionConnectionFailed();
    });
  }
  /**
   * Make a connection to the server
   */
  connect() {
    if (this.destroyed) {
      throw new Error("instance is destroyed");
    }
    this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  async destroy() {
    if (this.destroyed)
      return;
    await this.makeRequest({
      type: "SetSessionConfig",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { __destroyed: "1" }
    }, { timeout: 1e3 });
    this.destroyed = true;
    this.activeWsInstance = void 0;
    if (this.heartbeatIntervalId) {
      clearInterval(this.heartbeatIntervalId);
      this.heartbeatIntervalId = void 0;
    }
    if (this.visibilityChangeHandler) {
      document.removeEventListener("visibilitychange", this.visibilityChangeHandler);
    }
    if (this.focusHandler) {
      window.removeEventListener("focus", this.focusHandler);
    }
    this.ws.disconnect();
    if ("cleanup" in this.ws && typeof this.ws.cleanup === "function") {
      this.ws.cleanup();
    }
    this.listener = void 0;
  }
  get connected() {
    return this._connected;
  }
  set connected(connected) {
    this._connected = connected;
  }
  get linked() {
    return this._linked;
  }
  set linked(linked) {
    var _a, _b;
    this._linked = linked;
    if (linked)
      (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
  }
  setOnceLinked(callback) {
    return new Promise((resolve) => {
      if (this.linked) {
        callback().then(resolve);
      } else {
        this.onceLinked = () => {
          callback().then(resolve);
          this.onceLinked = void 0;
        };
      }
    });
  }
  async handleIncomingEvent(m2) {
    var _a;
    if (m2.type !== "Event" || m2.event !== "Web3Response") {
      return;
    }
    try {
      const decryptedData = await this.cipher.decrypt(m2.data);
      const message = JSON.parse(decryptedData);
      if (message.type !== "WEB3_RESPONSE")
        return;
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(message.id, message.response);
    } catch (_error) {
    }
  }
  async checkUnseenEvents() {
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (e2) {
      console.error("Unable to check for unseen events", e2);
    }
  }
  async fetchUnseenEventsAPI() {
    try {
      const responseEvents = await this.http.fetchUnseenEvents();
      responseEvents.forEach((e2) => {
        this.handleIncomingEvent(e2);
      });
    } catch (_error) {
      logWalletLinkConnectionFetchUnseenEventsFailed();
    }
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param unencryptedData unencrypted event data
   * @param callWebhook whether the webhook should be invoked
   * @returns a Promise that emits event ID when successful
   */
  async publishEvent(event, unencryptedData, callWebhook = false) {
    const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, location: location.href, relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk" })));
    const message = {
      type: "PublishEvent",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      event,
      data,
      callWebhook
    };
    return this.setOnceLinked(async () => {
      const res = await this.makeRequest(message);
      if (res.type === "Fail") {
        throw new Error(res.error || "failed to publish event");
      }
      return res.eventId;
    });
  }
  sendData(message) {
    this.ws.sendData(JSON.stringify(message));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
      this.ws.disconnect();
      return;
    }
    if (!this.connected) {
      return;
    }
    try {
      this.ws.sendData("h");
    } catch (_error) {
    }
  }
  async makeRequest(message, options = { timeout: REQUEST_TIMEOUT }) {
    const reqId = message.id;
    this.sendData(message);
    let timeoutId;
    return Promise.race([
      new Promise((_2, reject) => {
        timeoutId = window.setTimeout(() => {
          reject(new Error(`request ${reqId} timed out`));
        }, options.timeout);
      }),
      new Promise((resolve) => {
        this.requestResolutions.set(reqId, (m2) => {
          clearTimeout(timeoutId);
          resolve(m2);
          this.requestResolutions.delete(reqId);
        });
      })
    ]);
  }
  async handleConnected() {
    const res = await this.makeRequest({
      type: "HostSession",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    });
    if (res.type === "Fail") {
      return false;
    }
    this.sendData({
      type: "IsLinked",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id
    });
    this.sendData({
      type: "GetSessionConfig",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id
    });
    return true;
  }
}
class RelayEventManager {
  constructor() {
    this._nextRequestId = 0;
    this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const id = this._nextRequestId;
    const idStr = prepend0x(id.toString(16));
    const callback = this.callbacks.get(idStr);
    if (callback) {
      this.callbacks.delete(idStr);
    }
    return id;
  }
}
function isBytes(a2) {
  return a2 instanceof Uint8Array || a2 != null && typeof a2 === "object" && a2.constructor.name === "Uint8Array";
}
function bytes(b2, ...lengths) {
  if (!isBytes(b2))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b2.length}`);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const rotr = (word, shift) => word << 32 - shift | word >>> shift;
new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
function bytesToHex(bytes$12) {
  bytes(bytes$12);
  let hex = "";
  for (let i2 = 0; i2 < bytes$12.length; i2++) {
    hex += hexes[bytes$12[i2]];
  }
  return hex;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  bytes(data);
  return data;
}
class Hash {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function setBigUint64(view, byteOffset, value, isLE) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h2 = isLE ? 4 : 0;
  const l2 = isLE ? 0 : 4;
  view.setUint32(byteOffset + h2, wh, isLE);
  view.setUint32(byteOffset + l2, wl, isLE);
}
const Chi = (a2, b2, c2) => a2 & b2 ^ ~a2 & c2;
const Maj = (a2, b2, c2) => a2 & b2 ^ a2 & c2 ^ b2 & c2;
class HashMD extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    exists(this);
    output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i2 = pos; i2 < blockLen; i2++)
      buffer[i2] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i2 = 0; i2 < outLen; i2++)
      oview.setUint32(4 * i2, state[i2], isLE);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
}
const SHA256_K = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
const SHA256_IV = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends HashMD {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A: A2, B: B2, C: C2, D: D2, E, F: F2, G, H } = this;
    return [A2, B2, C2, D2, E, F2, G, H];
  }
  // prettier-ignore
  set(A2, B2, C2, D2, E, F2, G, H) {
    this.A = A2 | 0;
    this.B = B2 | 0;
    this.C = C2 | 0;
    this.D = D2 | 0;
    this.E = E | 0;
    this.F = F2 | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i2 = 0; i2 < 16; i2++, offset += 4)
      SHA256_W[i2] = view.getUint32(offset, false);
    for (let i2 = 16; i2 < 64; i2++) {
      const W15 = SHA256_W[i2 - 15];
      const W2 = SHA256_W[i2 - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i2] = s1 + SHA256_W[i2 - 7] + s0 + SHA256_W[i2 - 16] | 0;
    }
    let { A: A2, B: B2, C: C2, D: D2, E, F: F2, G, H } = this;
    for (let i2 = 0; i2 < 64; i2++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F2, G) + SHA256_K[i2] + SHA256_W[i2] | 0;
      const sigma0 = rotr(A2, 2) ^ rotr(A2, 13) ^ rotr(A2, 22);
      const T2 = sigma0 + Maj(A2, B2, C2) | 0;
      H = G;
      G = F2;
      F2 = E;
      E = D2 + T1 | 0;
      D2 = C2;
      C2 = B2;
      B2 = A2;
      A2 = T1 + T2 | 0;
    }
    A2 = A2 + this.A | 0;
    B2 = B2 + this.B | 0;
    C2 = C2 + this.C | 0;
    D2 = D2 + this.D | 0;
    E = E + this.E | 0;
    F2 = F2 + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A2, B2, C2, D2, E, F2, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
}
const sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());
const STORAGE_KEY_SESSION_ID = "session:id";
const STORAGE_KEY_SESSION_SECRET = "session:secret";
const STORAGE_KEY_SESSION_LINKED = "session:linked";
class WalletLinkSession {
  constructor(storage2, id, secret, linked = false) {
    this.storage = storage2;
    this.id = id;
    this.secret = secret;
    this.key = bytesToHex(sha256(`${id}, ${secret} WalletLink`));
    this._linked = !!linked;
  }
  static create(storage2) {
    const id = randomBytesHex(16);
    const secret = randomBytesHex(32);
    return new WalletLinkSession(storage2, id, secret).save();
  }
  static load(storage2) {
    const id = storage2.getItem(STORAGE_KEY_SESSION_ID);
    const linked = storage2.getItem(STORAGE_KEY_SESSION_LINKED);
    const secret = storage2.getItem(STORAGE_KEY_SESSION_SECRET);
    if (id && secret) {
      return new WalletLinkSession(storage2, id, secret, linked === "1");
    }
    return null;
  }
  get linked() {
    return this._linked;
  }
  set linked(val) {
    this._linked = val;
    this.persistLinked();
  }
  save() {
    this.storage.setItem(STORAGE_KEY_SESSION_ID, this.id);
    this.storage.setItem(STORAGE_KEY_SESSION_SECRET, this.secret);
    this.persistLinked();
    return this;
  }
  persistLinked() {
    this.storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
  }
}
const css = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();
class RedirectDialog {
  constructor() {
    this.root = null;
    this.darkMode = isDarkMode();
  }
  attach() {
    const el = document.documentElement;
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-css-reset";
    el.appendChild(this.root);
    injectCssReset();
  }
  present(props) {
    this.render(props);
  }
  clear() {
    this.render(null);
  }
  render(props) {
    if (!this.root)
      return;
    B$1(null, this.root);
    if (!props)
      return;
    B$1(_(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
      this.clear();
    }, darkMode: this.darkMode })), this.root);
  }
}
const RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
  const theme = darkMode ? "dark" : "light";
  return _(
    SnackbarContainer,
    { darkMode },
    _(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      _("style", null, css),
      _("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
      _(
        "div",
        { class: clsx("-cbwsdk-redirect-dialog-box", theme) },
        _("p", null, title),
        _("button", { onClick: onButtonClick }, buttonText)
      )
    )
  );
};
class WLMobileRelayUI {
  constructor() {
    this.attached = false;
    this.redirectDialog = new RedirectDialog();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    this.redirectDialog.attach();
    this.attached = true;
  }
  redirectToCoinbaseWallet(walletLinkUrl) {
    const url = new URL(CBW_MOBILE_DEEPLINK_URL);
    url.searchParams.append("redirect_url", getLocation().href);
    if (walletLinkUrl) {
      url.searchParams.append("wl_url", walletLinkUrl);
    }
    const anchorTag = document.createElement("a");
    anchorTag.target = "cbw-opener";
    anchorTag.href = url.href;
    anchorTag.rel = "noreferrer noopener";
    anchorTag.click();
  }
  openCoinbaseWalletDeeplink(walletLinkUrl) {
    this.redirectToCoinbaseWallet(walletLinkUrl);
    setTimeout(() => {
      this.redirectDialog.present({
        title: "Redirecting to Coinbase Wallet...",
        buttonText: "Open",
        onButtonClick: () => {
          this.redirectToCoinbaseWallet(walletLinkUrl);
        }
      });
    }, 99);
  }
  showConnecting(_options) {
    return () => {
      this.redirectDialog.clear();
    };
  }
}
class WalletLinkRelay {
  constructor(options) {
    this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" };
    this.isMobileWeb = isMobileWeb();
    this.linkedUpdated = (linked) => {
      this.isLinked = linked;
      const cachedAddresses = this.storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
      if (linked) {
        this._session.linked = linked;
      }
      this.isUnlinkedErrorState = false;
      if (cachedAddresses) {
        const addresses = cachedAddresses.split(" ");
        const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
        if (addresses[0] !== "" && !linked && this._session.linked && !wasConnectedViaStandalone) {
          this.isUnlinkedErrorState = true;
        }
      }
    };
    this.metadataUpdated = (key, value) => {
      this.storage.setItem(key, value);
    };
    this.chainUpdated = (chainId, jsonRpcUrl) => {
      if (this.chainCallbackParams.chainId === chainId && this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
        return;
      }
      this.chainCallbackParams = {
        chainId,
        jsonRpcUrl
      };
      if (this.chainCallback) {
        this.chainCallback(jsonRpcUrl, Number.parseInt(chainId, 10));
      }
    };
    this.accountUpdated = (selectedAddress) => {
      if (this.accountsCallback) {
        this.accountsCallback([selectedAddress]);
      }
      if (WalletLinkRelay.accountRequestCallbackIds.size > 0) {
        Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id) => {
          this.invokeCallback(id, {
            method: "requestEthereumAccounts",
            result: [selectedAddress]
          });
        });
        WalletLinkRelay.accountRequestCallbackIds.clear();
      }
    };
    this.resetAndReload = this.resetAndReload.bind(this);
    this.linkAPIUrl = options.linkAPIUrl;
    this.storage = options.storage;
    this.metadata = options.metadata;
    this.accountsCallback = options.accountsCallback;
    this.chainCallback = options.chainCallback;
    const { session, ui, connection } = this.subscribe();
    this._session = session;
    this.connection = connection;
    this.relayEventManager = new RelayEventManager();
    this.ui = ui;
    this.ui.attach();
  }
  subscribe() {
    const session = WalletLinkSession.load(this.storage) || WalletLinkSession.create(this.storage);
    const { linkAPIUrl } = this;
    const connection = new WalletLinkConnection({
      session,
      linkAPIUrl,
      listener: this
    });
    const ui = this.isMobileWeb ? new WLMobileRelayUI() : new WalletLinkRelayUI();
    connection.connect();
    return { session, ui, connection };
  }
  resetAndReload() {
    this.connection.destroy().then(() => {
      const storedSession = WalletLinkSession.load(this.storage);
      if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
        ScopedLocalStorage.clearAll();
      }
      document.location.reload();
    }).catch((_2) => {
    });
  }
  signEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: bigIntStringFromBigInt(params.weiValue),
        data: hexStringFromBuffer(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxPriorityFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: false
      }
    });
  }
  signAndSubmitEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: bigIntStringFromBigInt(params.weiValue),
        data: hexStringFromBuffer(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxFeePerGas: params.maxFeePerGas ? bigIntStringFromBigInt(params.maxFeePerGas) : null,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas ? bigIntStringFromBigInt(params.maxPriorityFeePerGas) : null,
        gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: true
      }
    });
  }
  submitEthereumTransaction(signedTransaction, chainId) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: hexStringFromBuffer(signedTransaction, true),
        chainId
      }
    });
  }
  getWalletLinkSession() {
    return this._session;
  }
  sendRequest(request) {
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    return new Promise((resolve, reject) => {
      {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload
        });
      }
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  publishWeb3RequestEvent(id, request) {
    const message = { type: "WEB3_REQUEST", id, request };
    this.publishEvent("Web3Request", message, true).then((_2) => {
    }).catch((err) => {
      this.handleWeb3ResponseMessage(message.id, {
        method: request.method,
        errorMessage: err.message
      });
    });
    if (this.isMobileWeb) {
      this.openCoinbaseWalletDeeplink(request.method);
    }
  }
  // copied from MobileRelay
  openCoinbaseWalletDeeplink(method) {
    if (!(this.ui instanceof WLMobileRelayUI))
      return;
    switch (method) {
      case "requestEthereumAccounts":
      case "switchEthereumChain":
        return;
      default:
        window.addEventListener("blur", () => {
          window.addEventListener("focus", () => {
            this.connection.checkUnseenEvents();
          }, { once: true });
        }, { once: true });
        this.ui.openCoinbaseWalletDeeplink();
        break;
    }
  }
  publishWeb3RequestCanceledEvent(id) {
    const message = {
      type: "WEB3_REQUEST_CANCELED",
      id
    };
    this.publishEvent("Web3RequestCanceled", message, false).then();
  }
  publishEvent(event, message, callWebhook) {
    return this.connection.publishEvent(event, message, callWebhook);
  }
  handleWeb3ResponseMessage(id, response) {
    if (response.method === "requestEthereumAccounts") {
      WalletLinkRelay.accountRequestCallbackIds.forEach((id2) => this.invokeCallback(id2, response));
      WalletLinkRelay.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(id, response);
  }
  handleErrorResponse(id, method, error) {
    var _a;
    const errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Unspecified error message.";
    this.handleWeb3ResponseMessage(id, {
      method,
      errorMessage
    });
  }
  invokeCallback(id, response) {
    const callback = this.relayEventManager.callbacks.get(id);
    if (callback) {
      callback(response);
      this.relayEventManager.callbacks.delete(id);
    }
  }
  requestEthereumAccounts() {
    const { appName, appLogoUrl } = this.metadata;
    const request = {
      method: "requestEthereumAccounts",
      params: {
        appName,
        appLogoUrl
      }
    };
    const id = randomBytesHex(8);
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      WalletLinkRelay.accountRequestCallbackIds.add(id);
      this.publishWeb3RequestEvent(id, request);
    });
  }
  watchAsset(type, address, symbol, decimals, image, chainId) {
    const request = {
      method: "watchAsset",
      params: {
        type,
        options: {
          address,
          symbol,
          decimals,
          image
        },
        chainId
      }
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
    const request = {
      method: "addEthereumChain",
      params: {
        chainId,
        rpcUrls,
        blockExplorerUrls,
        chainName,
        iconUrls,
        nativeCurrency
      }
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  switchEthereumChain(chainId, address) {
    const request = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId }, { address })
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response) && response.errorCode) {
          return reject(standardErrors.provider.custom({
            code: response.errorCode,
            message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
          }));
        }
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
}
WalletLinkRelay.accountRequestCallbackIds = /* @__PURE__ */ new Set();
const DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
const DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
class WalletLinkSigner {
  constructor(options) {
    this._relay = null;
    this._addresses = [];
    this.metadata = options.metadata;
    this._storage = new ScopedLocalStorage("walletlink", WALLETLINK_URL);
    this.callback = options.callback || null;
    const cachedAddresses = this._storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
    if (cachedAddresses) {
      const addresses = cachedAddresses.split(" ");
      if (addresses[0] !== "") {
        this._addresses = addresses.map((address) => ensureAddressString(address));
      }
    }
    this.initializeRelay();
  }
  getSession() {
    const relay = this.initializeRelay();
    const { id, secret } = relay.getWalletLinkSession();
    return { id, secret };
  }
  async handshake(args) {
    const method = "eth_requestAccounts";
    const correlationId = correlationIds.get(args);
    logHandshakeStarted({
      method,
      correlationId
    });
    try {
      await this._eth_requestAccounts();
      logHandshakeCompleted({
        method,
        correlationId
      });
    } catch (error) {
      logHandshakeError({
        method,
        correlationId,
        errorMessage: parseErrorMessageFromAny(error)
      });
      throw error;
    }
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get jsonRpcUrl() {
    var _a;
    return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : void 0;
  }
  set jsonRpcUrl(value) {
    this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
  }
  updateProviderInfo(jsonRpcUrl, chainId) {
    var _a;
    this.jsonRpcUrl = jsonRpcUrl;
    const originalChainId = this.getChainId();
    this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
    const chainChanged = ensureIntNumber(chainId) !== originalChainId;
    if (chainChanged) {
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "chainChanged", hexStringFromNumber(chainId));
    }
  }
  async watchAsset(params) {
    const request = Array.isArray(params) ? params[0] : params;
    if (!request.type) {
      throw standardErrors.rpc.invalidParams("Type is required");
    }
    if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
      throw standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
    }
    if (!(request === null || request === void 0 ? void 0 : request.options)) {
      throw standardErrors.rpc.invalidParams("Options are required");
    }
    if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
      throw standardErrors.rpc.invalidParams("Address is required");
    }
    const chainId = this.getChainId();
    const { address, symbol, image, decimals } = request.options;
    const relay = this.initializeRelay();
    const result = await relay.watchAsset(request.type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
    if (isErrorResponse(result))
      return false;
    return !!result.result;
  }
  async addEthereumChain(params) {
    var _a, _b;
    const request = params[0];
    if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      throw standardErrors.rpc.invalidParams("please pass in at least 1 rpcUrl");
    }
    if (!request.chainName || request.chainName.trim() === "") {
      throw standardErrors.rpc.invalidParams("chainName is a required field");
    }
    if (!request.nativeCurrency) {
      throw standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    }
    const chainIdNumber = Number.parseInt(request.chainId, 16);
    if (chainIdNumber === this.getChainId()) {
      return false;
    }
    const relay = this.initializeRelay();
    const { rpcUrls = [], blockExplorerUrls = [], chainName, iconUrls = [], nativeCurrency } = request;
    const res = await relay.addEthereumChain(chainIdNumber.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
    if (isErrorResponse(res))
      return false;
    if (((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true) {
      this.updateProviderInfo(rpcUrls[0], chainIdNumber);
      return null;
    }
    throw standardErrors.rpc.internal("unable to add ethereum chain");
  }
  async switchEthereumChain(params) {
    const request = params[0];
    const chainId = Number.parseInt(request.chainId, 16);
    const relay = this.initializeRelay();
    const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0);
    if (isErrorResponse(res))
      throw res;
    const switchResponse = res.result;
    if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
      this.updateProviderInfo(switchResponse.rpcUrl, chainId);
    }
    return null;
  }
  async cleanup() {
    this.callback = null;
    if (this._relay) {
      this._relay.resetAndReload();
    }
    this._storage.clear();
  }
  _setAddresses(addresses, _2) {
    var _a;
    if (!Array.isArray(addresses)) {
      throw new Error("addresses is not an array");
    }
    const newAddresses = addresses.map((address) => ensureAddressString(address));
    if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
      return;
    }
    this._addresses = newAddresses;
    (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "accountsChanged", newAddresses);
    this._storage.setItem(LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
  }
  async request(request) {
    const correlationId = correlationIds.get(request);
    logRequestStarted({ method: request.method, correlationId });
    try {
      const result = await this._request(request);
      logRequestCompleted({ method: request.method, correlationId });
      return result;
    } catch (error) {
      logRequestError({
        method: request.method,
        correlationId,
        errorMessage: parseErrorMessageFromAny(error)
      });
      throw error;
    }
  }
  async _request(request) {
    const params = request.params || [];
    switch (request.method) {
      case "eth_accounts":
        return [...this._addresses];
      case "eth_coinbase":
        return this.selectedAddress || null;
      case "net_version":
        return this.getChainId().toString(10);
      case "eth_chainId":
        return hexStringFromNumber(this.getChainId());
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_ecRecover":
      case "personal_ecRecover":
        return this.ecRecover(request);
      case "personal_sign":
        return this.personalSign(request);
      case "eth_signTransaction":
        return this._eth_signTransaction(params);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(params);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(params);
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this.signTypedData(request);
      case "wallet_addEthereumChain":
        return this.addEthereumChain(params);
      case "wallet_switchEthereumChain":
        return this.switchEthereumChain(params);
      case "wallet_watchAsset":
        return this.watchAsset(params);
      default:
        if (!this.jsonRpcUrl)
          throw standardErrors.rpc.internal("No RPC URL set for chain");
        return fetchRPCRequest(request, this.jsonRpcUrl);
    }
  }
  _ensureKnownAddress(addressString) {
    const addressStr = ensureAddressString(addressString);
    const lowercaseAddresses = this._addresses.map((address) => ensureAddressString(address));
    if (!lowercaseAddresses.includes(addressStr)) {
      throw new Error("Unknown Ethereum address");
    }
  }
  _prepareTransactionParams(tx) {
    const fromAddress = tx.from ? ensureAddressString(tx.from) : this.selectedAddress;
    if (!fromAddress) {
      throw new Error("Ethereum address is unavailable");
    }
    this._ensureKnownAddress(fromAddress);
    const toAddress = tx.to ? ensureAddressString(tx.to) : null;
    const weiValue = tx.value != null ? ensureBigInt(tx.value) : BigInt(0);
    const data = tx.data ? ensureBuffer(tx.data) : Buffer.alloc(0);
    const nonce = tx.nonce != null ? ensureIntNumber(tx.nonce) : null;
    const gasPriceInWei = tx.gasPrice != null ? ensureBigInt(tx.gasPrice) : null;
    const maxFeePerGas = tx.maxFeePerGas != null ? ensureBigInt(tx.maxFeePerGas) : null;
    const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? ensureBigInt(tx.maxPriorityFeePerGas) : null;
    const gasLimit = tx.gas != null ? ensureBigInt(tx.gas) : null;
    const chainId = tx.chainId ? ensureIntNumber(tx.chainId) : this.getChainId();
    return {
      fromAddress,
      toAddress,
      weiValue,
      data,
      nonce,
      gasPriceInWei,
      maxFeePerGas,
      maxPriorityFeePerGas,
      gasLimit,
      chainId
    };
  }
  async ecRecover(request) {
    const { method, params } = request;
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: encodeToHexString(params[0]),
        signature: encodeToHexString(params[1]),
        addPrefix: method === "personal_ecRecover"
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  getChainId() {
    var _a;
    return Number.parseInt((_a = this._storage.getItem(DEFAULT_CHAIN_ID_KEY)) !== null && _a !== void 0 ? _a : "1", 10);
  }
  async _eth_requestAccounts() {
    var _a, _b;
    if (this._addresses.length > 0) {
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, "connect", { chainId: hexStringFromNumber(this.getChainId()) });
      return this._addresses;
    }
    const relay = this.initializeRelay();
    const res = await relay.requestEthereumAccounts();
    if (isErrorResponse(res))
      throw res;
    if (!res.result) {
      throw new Error("accounts received is empty");
    }
    this._setAddresses(res.result);
    (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, "connect", { chainId: hexStringFromNumber(this.getChainId()) });
    return this._addresses;
  }
  async personalSign({ params }) {
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const address = params[1];
    const rawData = params[0];
    this._ensureKnownAddress(address);
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "signEthereumMessage",
      params: {
        address: ensureAddressString(address),
        message: encodeToHexString(rawData),
        addPrefix: true,
        typedDataJson: null
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_signTransaction(params) {
    const tx = this._prepareTransactionParams(params[0] || {});
    const relay = this.initializeRelay();
    const res = await relay.signEthereumTransaction(tx);
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_sendRawTransaction(params) {
    const signedTransaction = ensureBuffer(params[0]);
    const relay = this.initializeRelay();
    const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId());
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_sendTransaction(params) {
    const tx = this._prepareTransactionParams(params[0] || {});
    const relay = this.initializeRelay();
    const res = await relay.signAndSubmitEthereumTransaction(tx);
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async signTypedData(request) {
    const { method, params } = request;
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const encode2 = (input) => {
      const hashFuncMap = {
        eth_signTypedData_v1: eip712.hashForSignTypedDataLegacy,
        eth_signTypedData_v3: eip712.hashForSignTypedData_v3,
        eth_signTypedData_v4: eip712.hashForSignTypedData_v4,
        eth_signTypedData: eip712.hashForSignTypedData_v4
      };
      return hexStringFromBuffer(hashFuncMap[method]({
        data: ensureParsedJSONObject(input)
      }), true);
    };
    const address = params[method === "eth_signTypedData_v1" ? 1 : 0];
    const rawData = params[method === "eth_signTypedData_v1" ? 0 : 1];
    this._ensureKnownAddress(address);
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "signEthereumMessage",
      params: {
        address: ensureAddressString(address),
        message: encode2(rawData),
        typedDataJson: JSON.stringify(rawData, null, 2),
        addPrefix: false
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  initializeRelay() {
    if (!this._relay) {
      this._relay = new WalletLinkRelay({
        linkAPIUrl: WALLETLINK_URL,
        storage: this._storage,
        metadata: this.metadata,
        accountsCallback: this._setAddresses.bind(this),
        chainCallback: this.updateProviderInfo.bind(this)
      });
    }
    return this._relay;
  }
}
const SIGNER_TYPE_KEY = "SignerType";
const storage = new ScopedLocalStorage("CBWSDK", "SignerConfigurator");
function loadSignerType() {
  return storage.getItem(SIGNER_TYPE_KEY);
}
function storeSignerType(signerType) {
  storage.setItem(SIGNER_TYPE_KEY, signerType);
}
function signerToSignerType(signer) {
  if (!signer) {
    return void 0;
  }
  return signer instanceof SCWSigner ? "scw" : "walletlink";
}
async function fetchSignerType(params) {
  const { communicator, metadata, handshakeRequest, callback } = params;
  listenForWalletLinkSessionRequest(communicator, metadata, callback, handshakeRequest).catch(() => {
  });
  const request = {
    id: crypto.randomUUID(),
    event: "selectSignerType",
    data: Object.assign(Object.assign({}, params.preference), { handshakeRequest })
  };
  const { data } = await communicator.postRequestAndWaitForResponse(request);
  return data;
}
function createSigner(params) {
  const { signerType, metadata, communicator, callback } = params;
  switch (signerType) {
    case "scw": {
      return new SCWSigner({
        metadata,
        callback,
        communicator
      });
    }
    case "walletlink": {
      return new WalletLinkSigner({
        metadata,
        callback
      });
    }
  }
}
async function listenForWalletLinkSessionRequest(communicator, metadata, callback, handshakeRequest) {
  await communicator.onMessage(({ event }) => event === "WalletLinkSessionRequest");
  const walletlink = new WalletLinkSigner({
    metadata,
    callback
  });
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { session: walletlink.getSession() }
  });
  await walletlink.handshake(handshakeRequest);
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { connected: true }
  });
}
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
    t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
};
class CoinbaseWalletProvider extends ProviderEventEmitter {
  constructor(_a) {
    var { metadata } = _a, _b = _a.preference, { keysUrl } = _b, preference = __rest(_b, ["keysUrl"]);
    super();
    this.signer = null;
    this.isCoinbaseWallet = true;
    this.metadata = metadata;
    this.preference = preference;
    this.communicator = new Communicator({
      url: keysUrl,
      metadata,
      preference
    });
    const signerType = loadSignerType();
    if (signerType) {
      this.signer = this.initSigner(signerType);
      logSignerLoadedFromStorage({ signerType });
    }
  }
  async request(args) {
    const correlationId = crypto.randomUUID();
    correlationIds.set(args, correlationId);
    logRequestStarted$2({ method: args.method, correlationId });
    try {
      const result = await this._request(args);
      logRequestResponded({
        method: args.method,
        signerType: signerToSignerType(this.signer),
        correlationId
      });
      return result;
    } catch (error) {
      logRequestError$2({
        method: args.method,
        correlationId,
        signerType: signerToSignerType(this.signer),
        errorMessage: error instanceof Error ? error.message : ""
      });
      throw error;
    } finally {
      correlationIds.delete(args);
    }
  }
  async _request(args) {
    try {
      checkErrorForInvalidRequestArgs(args);
      if (!this.signer) {
        switch (args.method) {
          case "eth_requestAccounts": {
            let signerType;
            const subAccountsConfig2 = store.subAccountsConfig.get();
            if (subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.enableAutoSubAccounts) {
              signerType = "scw";
            } else {
              signerType = await this.requestSignerSelection(args);
            }
            const signer = this.initSigner(signerType);
            if (signerType === "scw" && (subAccountsConfig2 === null || subAccountsConfig2 === void 0 ? void 0 : subAccountsConfig2.enableAutoSubAccounts)) {
              await signer.handshake({ method: "handshake" });
              await signer.request(args);
            } else {
              await signer.handshake(args);
            }
            this.signer = signer;
            storeSignerType(signerType);
            break;
          }
          case "wallet_connect": {
            const signer = this.initSigner("scw");
            await signer.handshake({ method: "handshake" });
            const result2 = await signer.request(args);
            this.signer = signer;
            return result2;
          }
          case "wallet_sendCalls":
          case "wallet_sign": {
            const ephemeralSigner = this.initSigner("scw");
            await ephemeralSigner.handshake({ method: "handshake" });
            const result2 = await ephemeralSigner.request(args);
            await ephemeralSigner.cleanup();
            return result2;
          }
          case "wallet_getCallsStatus": {
            const result2 = await fetchRPCRequest(args, CB_WALLET_RPC_URL);
            return result2;
          }
          case "net_version": {
            const result2 = 1;
            return result2;
          }
          case "eth_chainId": {
            const result2 = hexStringFromNumber(1);
            return result2;
          }
          default: {
            throw standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
          }
        }
      }
      const result = await this.signer.request(args);
      return result;
    } catch (error) {
      const { code } = error;
      if (code === standardErrorCodes.provider.unauthorized)
        this.disconnect();
      return Promise.reject(serializeError(error));
    }
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    console.warn(`.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.`);
    logEnableFunctionCalled();
    return await this.request({
      method: "eth_requestAccounts"
    });
  }
  async disconnect() {
    var _a;
    await ((_a = this.signer) === null || _a === void 0 ? void 0 : _a.cleanup());
    this.signer = null;
    ScopedLocalStorage.clearAll();
    correlationIds.clear();
    this.emit("disconnect", standardErrors.provider.disconnected("User initiated disconnection"));
  }
  async requestSignerSelection(handshakeRequest) {
    logSignerSelectionRequested();
    const signerType = await fetchSignerType({
      communicator: this.communicator,
      preference: this.preference,
      metadata: this.metadata,
      handshakeRequest,
      callback: this.emit.bind(this)
    });
    logSignerSelectionResponded(signerType);
    return signerType;
  }
  initSigner(signerType) {
    return createSigner({
      signerType,
      metadata: this.metadata,
      communicator: this.communicator,
      callback: this.emit.bind(this)
    });
  }
}
function createCoinbaseWalletProvider(options) {
  var _a;
  const params = {
    metadata: options.metadata,
    preference: options.preference
  };
  return (_a = getCoinbaseInjectedProvider(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider(params);
}
const DEFAULT_PREFERENCE = {
  options: "all"
};
function createCoinbaseWalletSDK(params) {
  var _a, _b, _c, _d;
  const options = {
    metadata: {
      appName: params.appName || "Dapp",
      appLogoUrl: params.appLogoUrl || "",
      appChainIds: params.appChainIds || []
    },
    preference: Object.assign(DEFAULT_PREFERENCE, (_a = params.preference) !== null && _a !== void 0 ? _a : {}),
    paymasterUrls: params.paymasterUrls
  };
  if ((_b = params.subAccounts) === null || _b === void 0 ? void 0 : _b.toOwnerAccount) {
    validateSubAccount(params.subAccounts.toOwnerAccount);
  }
  store.subAccountsConfig.set({
    toOwnerAccount: (_c = params.subAccounts) === null || _c === void 0 ? void 0 : _c.toOwnerAccount,
    // @ts-expect-error - enableSubAccounts is not officially supported yet
    enableAutoSubAccounts: (_d = params.subAccounts) === null || _d === void 0 ? void 0 : _d.enableAutoSubAccounts
  });
  store.config.set(options);
  void store.persist.rehydrate();
  void checkCrossOriginOpenerPolicy();
  if (options.preference.telemetry !== false) {
    void loadTelemetryScript();
  }
  validatePreferences(options.preference);
  let provider = null;
  const sdk = {
    getProvider() {
      if (!provider) {
        provider = createCoinbaseWalletProvider(options);
      }
      provider.sdk = sdk;
      return provider;
    },
    subAccount: {
      async create(account2) {
        var _a2, _b2;
        const state = store.getState();
        assertPresence((_a2 = state.subAccount) === null || _a2 === void 0 ? void 0 : _a2.address, new Error("subaccount already exists"));
        return await ((_b2 = sdk.getProvider()) === null || _b2 === void 0 ? void 0 : _b2.request({
          method: "wallet_addSubAccount",
          params: [
            {
              version: "1",
              account: account2
            }
          ]
        }));
      },
      async get() {
        var _a2, _b2;
        const subAccount = store.subAccounts.get();
        if (subAccount === null || subAccount === void 0 ? void 0 : subAccount.address) {
          return subAccount;
        }
        const response = await ((_a2 = sdk.getProvider()) === null || _a2 === void 0 ? void 0 : _a2.request({
          method: "wallet_connect",
          params: [
            {
              version: "1",
              capabilities: {}
            }
          ]
        }));
        const subAccounts2 = (_b2 = response.accounts[0].capabilities) === null || _b2 === void 0 ? void 0 : _b2.subAccounts;
        if (!Array.isArray(subAccounts2)) {
          return null;
        }
        return subAccounts2[0];
      },
      async addOwner({ address, publicKey, chainId }) {
        var _a2, _b2;
        const subAccount = store.subAccounts.get();
        const account2 = store.account.get();
        assertPresence(account2, new Error("account does not exist"));
        assertPresence(subAccount === null || subAccount === void 0 ? void 0 : subAccount.address, new Error("subaccount does not exist"));
        const calls = [];
        if (publicKey) {
          const [x2, y2] = decodeAbiParameters([{ type: "bytes32" }, { type: "bytes32" }], publicKey);
          calls.push({
            to: subAccount.address,
            data: encodeFunctionData({
              abi: abi$2,
              functionName: "addOwnerPublicKey",
              args: [x2, y2]
            }),
            value: toHex$2(0)
          });
        }
        if (address) {
          calls.push({
            to: subAccount.address,
            data: encodeFunctionData({
              abi: abi$2,
              functionName: "addOwnerAddress",
              args: [address]
            }),
            value: toHex$2(0)
          });
        }
        return await ((_a2 = sdk.getProvider()) === null || _a2 === void 0 ? void 0 : _a2.request({
          method: "wallet_sendCalls",
          params: [
            {
              calls,
              chainId: toHex$2(chainId),
              from: (_b2 = account2.accounts) === null || _b2 === void 0 ? void 0 : _b2[0],
              version: "1"
            }
          ]
        }));
      },
      setToOwnerAccount(toSubAccountOwner) {
        validateSubAccount(toSubAccountOwner);
        store.subAccountsConfig.set({
          toOwnerAccount: toSubAccountOwner
        });
      }
    }
  };
  return sdk;
}
export {
  createCoinbaseWalletSDK,
  getCryptoKeyAccount
};
