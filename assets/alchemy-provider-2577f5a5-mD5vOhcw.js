import { c2 as shallowCopy, c3 as accessListify, bM as BigNumber, c4 as isHexString, bK as Logger, c5 as getAddress, c6 as hexDataSlice, c7 as AddressZero, c8 as getContractAddress, c9 as hexValue, ca as hexDataLength, cb as hexZeroPad, cc as parse, cd as Provider, bL as defineReadOnly, ce as getStatic, cf as poll, bS as getNetwork, cg as fetchJson, ch as resolveProperties, ci as hexlify, cj as hexConcat, ck as namehash, cl as toUtf8String, cm as arrayify, cn as dnsEncode, co as concat, cp as bech32, cq as HashZero, cr as Base58, cs as encode, ct as toUtf8Bytes, cu as ForkEvent, cv as sha256, cw as deepCopy, cx as checkProperties, cy as Signer, cz as TypedDataEncoder, bO as EthersNetwork, bY as DEFAULT_ALCHEMY_API_KEY, bR as CustomNetworks, cA as DEFAULT_NETWORK, cB as Network, cC as getAlchemyHttpUrl, cD as getAlchemyWsUrl, bN as VERSION, cE as IS_BROWSER, bP as __awaiter$1$1, cF as logWarn, cG as deepCopy$1 } from "./index-CXPYpAen.js";
const version = "providers/5.8.0";
const logger$2 = new Logger(version);
class Formatter {
  constructor() {
    this.formats = this.getDefaultFormats();
  }
  getDefaultFormats() {
    const formats = {};
    const address = this.address.bind(this);
    const bigNumber = this.bigNumber.bind(this);
    const blockTag = this.blockTag.bind(this);
    const data = this.data.bind(this);
    const hash = this.hash.bind(this);
    const hex = this.hex.bind(this);
    const number = this.number.bind(this);
    const type = this.type.bind(this);
    const strictData = (v) => {
      return this.data(v, true);
    };
    formats.transaction = {
      hash,
      type,
      accessList: Formatter.allowNull(this.accessList.bind(this), null),
      blockHash: Formatter.allowNull(hash, null),
      blockNumber: Formatter.allowNull(number, null),
      transactionIndex: Formatter.allowNull(number, null),
      confirmations: Formatter.allowNull(number, null),
      from: address,
      // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas)
      // must be set
      gasPrice: Formatter.allowNull(bigNumber),
      maxPriorityFeePerGas: Formatter.allowNull(bigNumber),
      maxFeePerGas: Formatter.allowNull(bigNumber),
      gasLimit: bigNumber,
      to: Formatter.allowNull(address, null),
      value: bigNumber,
      nonce: number,
      data,
      r: Formatter.allowNull(this.uint256),
      s: Formatter.allowNull(this.uint256),
      v: Formatter.allowNull(number),
      creates: Formatter.allowNull(address, null),
      raw: Formatter.allowNull(data)
    };
    formats.transactionRequest = {
      from: Formatter.allowNull(address),
      nonce: Formatter.allowNull(number),
      gasLimit: Formatter.allowNull(bigNumber),
      gasPrice: Formatter.allowNull(bigNumber),
      maxPriorityFeePerGas: Formatter.allowNull(bigNumber),
      maxFeePerGas: Formatter.allowNull(bigNumber),
      to: Formatter.allowNull(address),
      value: Formatter.allowNull(bigNumber),
      data: Formatter.allowNull(strictData),
      type: Formatter.allowNull(number),
      accessList: Formatter.allowNull(this.accessList.bind(this), null)
    };
    formats.receiptLog = {
      transactionIndex: number,
      blockNumber: number,
      transactionHash: hash,
      address,
      topics: Formatter.arrayOf(hash),
      data,
      logIndex: number,
      blockHash: hash
    };
    formats.receipt = {
      to: Formatter.allowNull(this.address, null),
      from: Formatter.allowNull(this.address, null),
      contractAddress: Formatter.allowNull(address, null),
      transactionIndex: number,
      // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
      root: Formatter.allowNull(hex),
      gasUsed: bigNumber,
      logsBloom: Formatter.allowNull(data),
      blockHash: hash,
      transactionHash: hash,
      logs: Formatter.arrayOf(this.receiptLog.bind(this)),
      blockNumber: number,
      confirmations: Formatter.allowNull(number, null),
      cumulativeGasUsed: bigNumber,
      effectiveGasPrice: Formatter.allowNull(bigNumber),
      status: Formatter.allowNull(number),
      type
    };
    formats.block = {
      hash: Formatter.allowNull(hash),
      parentHash: hash,
      number,
      timestamp: number,
      nonce: Formatter.allowNull(hex),
      difficulty: this.difficulty.bind(this),
      gasLimit: bigNumber,
      gasUsed: bigNumber,
      miner: Formatter.allowNull(address),
      extraData: data,
      transactions: Formatter.allowNull(Formatter.arrayOf(hash)),
      baseFeePerGas: Formatter.allowNull(bigNumber)
    };
    formats.blockWithTransactions = shallowCopy(formats.block);
    formats.blockWithTransactions.transactions = Formatter.allowNull(Formatter.arrayOf(this.transactionResponse.bind(this)));
    formats.filter = {
      fromBlock: Formatter.allowNull(blockTag, void 0),
      toBlock: Formatter.allowNull(blockTag, void 0),
      blockHash: Formatter.allowNull(hash, void 0),
      address: Formatter.allowNull(address, void 0),
      topics: Formatter.allowNull(this.topics.bind(this), void 0)
    };
    formats.filterLog = {
      blockNumber: Formatter.allowNull(number),
      blockHash: Formatter.allowNull(hash),
      transactionIndex: number,
      removed: Formatter.allowNull(this.boolean.bind(this)),
      address,
      data: Formatter.allowFalsish(data, "0x"),
      topics: Formatter.arrayOf(hash),
      transactionHash: hash,
      logIndex: number
    };
    return formats;
  }
  accessList(accessList) {
    return accessListify(accessList || []);
  }
  // Requires a BigNumberish that is within the IEEE754 safe integer range; returns a number
  // Strict! Used on input.
  number(number) {
    if (number === "0x") {
      return 0;
    }
    return BigNumber.from(number).toNumber();
  }
  type(number) {
    if (number === "0x" || number == null) {
      return 0;
    }
    return BigNumber.from(number).toNumber();
  }
  // Strict! Used on input.
  bigNumber(value) {
    return BigNumber.from(value);
  }
  // Requires a boolean, "true" or  "false"; returns a boolean
  boolean(value) {
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "string") {
      value = value.toLowerCase();
      if (value === "true") {
        return true;
      }
      if (value === "false") {
        return false;
      }
    }
    throw new Error("invalid boolean - " + value);
  }
  hex(value, strict) {
    if (typeof value === "string") {
      if (!strict && value.substring(0, 2) !== "0x") {
        value = "0x" + value;
      }
      if (isHexString(value)) {
        return value.toLowerCase();
      }
    }
    return logger$2.throwArgumentError("invalid hash", "value", value);
  }
  data(value, strict) {
    const result = this.hex(value, strict);
    if (result.length % 2 !== 0) {
      throw new Error("invalid data; odd-length - " + value);
    }
    return result;
  }
  // Requires an address
  // Strict! Used on input.
  address(value) {
    return getAddress(value);
  }
  callAddress(value) {
    if (!isHexString(value, 32)) {
      return null;
    }
    const address = getAddress(hexDataSlice(value, 12));
    return address === AddressZero ? null : address;
  }
  contractAddress(value) {
    return getContractAddress(value);
  }
  // Strict! Used on input.
  blockTag(blockTag) {
    if (blockTag == null) {
      return "latest";
    }
    if (blockTag === "earliest") {
      return "0x0";
    }
    switch (blockTag) {
      case "earliest":
        return "0x0";
      case "latest":
      case "pending":
      case "safe":
      case "finalized":
        return blockTag;
    }
    if (typeof blockTag === "number" || isHexString(blockTag)) {
      return hexValue(blockTag);
    }
    throw new Error("invalid blockTag");
  }
  // Requires a hash, optionally requires 0x prefix; returns prefixed lowercase hash.
  hash(value, strict) {
    const result = this.hex(value, strict);
    if (hexDataLength(result) !== 32) {
      return logger$2.throwArgumentError("invalid hash", "value", value);
    }
    return result;
  }
  // Returns the difficulty as a number, or if too large (i.e. PoA network) null
  difficulty(value) {
    if (value == null) {
      return null;
    }
    const v = BigNumber.from(value);
    try {
      return v.toNumber();
    } catch (error) {
    }
    return null;
  }
  uint256(value) {
    if (!isHexString(value)) {
      throw new Error("invalid uint256");
    }
    return hexZeroPad(value, 32);
  }
  _block(value, format) {
    if (value.author != null && value.miner == null) {
      value.miner = value.author;
    }
    const difficulty = value._difficulty != null ? value._difficulty : value.difficulty;
    const result = Formatter.check(format, value);
    result._difficulty = difficulty == null ? null : BigNumber.from(difficulty);
    return result;
  }
  block(value) {
    return this._block(value, this.formats.block);
  }
  blockWithTransactions(value) {
    return this._block(value, this.formats.blockWithTransactions);
  }
  // Strict! Used on input.
  transactionRequest(value) {
    return Formatter.check(this.formats.transactionRequest, value);
  }
  transactionResponse(transaction) {
    if (transaction.gas != null && transaction.gasLimit == null) {
      transaction.gasLimit = transaction.gas;
    }
    if (transaction.to && BigNumber.from(transaction.to).isZero()) {
      transaction.to = "0x0000000000000000000000000000000000000000";
    }
    if (transaction.input != null && transaction.data == null) {
      transaction.data = transaction.input;
    }
    if (transaction.to == null && transaction.creates == null) {
      transaction.creates = this.contractAddress(transaction);
    }
    if ((transaction.type === 1 || transaction.type === 2) && transaction.accessList == null) {
      transaction.accessList = [];
    }
    const result = Formatter.check(this.formats.transaction, transaction);
    if (transaction.chainId != null) {
      let chainId = transaction.chainId;
      if (isHexString(chainId)) {
        chainId = BigNumber.from(chainId).toNumber();
      }
      result.chainId = chainId;
    } else {
      let chainId = transaction.networkId;
      if (chainId == null && result.v == null) {
        chainId = transaction.chainId;
      }
      if (isHexString(chainId)) {
        chainId = BigNumber.from(chainId).toNumber();
      }
      if (typeof chainId !== "number" && result.v != null) {
        chainId = (result.v - 35) / 2;
        if (chainId < 0) {
          chainId = 0;
        }
        chainId = parseInt(chainId);
      }
      if (typeof chainId !== "number") {
        chainId = 0;
      }
      result.chainId = chainId;
    }
    if (result.blockHash && result.blockHash.replace(/0/g, "") === "x") {
      result.blockHash = null;
    }
    return result;
  }
  transaction(value) {
    return parse(value);
  }
  receiptLog(value) {
    return Formatter.check(this.formats.receiptLog, value);
  }
  receipt(value) {
    const result = Formatter.check(this.formats.receipt, value);
    if (result.root != null) {
      if (result.root.length <= 4) {
        const value2 = BigNumber.from(result.root).toNumber();
        if (value2 === 0 || value2 === 1) {
          if (result.status != null && result.status !== value2) {
            logger$2.throwArgumentError("alt-root-status/status mismatch", "value", { root: result.root, status: result.status });
          }
          result.status = value2;
          delete result.root;
        } else {
          logger$2.throwArgumentError("invalid alt-root-status", "value.root", result.root);
        }
      } else if (result.root.length !== 66) {
        logger$2.throwArgumentError("invalid root hash", "value.root", result.root);
      }
    }
    if (result.status != null) {
      result.byzantium = true;
    }
    return result;
  }
  topics(value) {
    if (Array.isArray(value)) {
      return value.map((v) => this.topics(v));
    } else if (value != null) {
      return this.hash(value, true);
    }
    return null;
  }
  filter(value) {
    return Formatter.check(this.formats.filter, value);
  }
  filterLog(value) {
    return Formatter.check(this.formats.filterLog, value);
  }
  static check(format, object) {
    const result = {};
    for (const key in format) {
      try {
        const value = format[key](object[key]);
        if (value !== void 0) {
          result[key] = value;
        }
      } catch (error) {
        error.checkKey = key;
        error.checkValue = object[key];
        throw error;
      }
    }
    return result;
  }
  // if value is null-ish, nullValue is returned
  static allowNull(format, nullValue) {
    return function(value) {
      if (value == null) {
        return nullValue;
      }
      return format(value);
    };
  }
  // If value is false-ish, replaceValue is returned
  static allowFalsish(format, replaceValue) {
    return function(value) {
      if (!value) {
        return replaceValue;
      }
      return format(value);
    };
  }
  // Requires an Array satisfying check
  static arrayOf(format) {
    return function(array) {
      if (!Array.isArray(array)) {
        throw new Error("not an array");
      }
      const result = [];
      array.forEach(function(value) {
        result.push(format(value));
      });
      return result;
    };
  }
}
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const logger$1 = new Logger(version);
const MAX_CCIP_REDIRECTS = 10;
function checkTopic(topic) {
  if (topic == null) {
    return "null";
  }
  if (hexDataLength(topic) !== 32) {
    logger$1.throwArgumentError("invalid topic", "topic", topic);
  }
  return topic.toLowerCase();
}
function serializeTopics(topics) {
  topics = topics.slice();
  while (topics.length > 0 && topics[topics.length - 1] == null) {
    topics.pop();
  }
  return topics.map((topic) => {
    if (Array.isArray(topic)) {
      const unique = {};
      topic.forEach((topic2) => {
        unique[checkTopic(topic2)] = true;
      });
      const sorted = Object.keys(unique);
      sorted.sort();
      return sorted.join("|");
    } else {
      return checkTopic(topic);
    }
  }).join("&");
}
function deserializeTopics(data) {
  if (data === "") {
    return [];
  }
  return data.split(/&/g).map((topic) => {
    if (topic === "") {
      return [];
    }
    const comps = topic.split("|").map((topic2) => {
      return topic2 === "null" ? null : topic2;
    });
    return comps.length === 1 ? comps[0] : comps;
  });
}
function getEventTag(eventName) {
  if (typeof eventName === "string") {
    eventName = eventName.toLowerCase();
    if (hexDataLength(eventName) === 32) {
      return "tx:" + eventName;
    }
    if (eventName.indexOf(":") === -1) {
      return eventName;
    }
  } else if (Array.isArray(eventName)) {
    return "filter:*:" + serializeTopics(eventName);
  } else if (ForkEvent.isForkEvent(eventName)) {
    logger$1.warn("not implemented");
    throw new Error("not implemented");
  } else if (eventName && typeof eventName === "object") {
    return "filter:" + (eventName.address || "*") + ":" + serializeTopics(eventName.topics || []);
  }
  throw new Error("invalid event - " + eventName);
}
function getTime() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function stall(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
const PollableEvents = ["block", "network", "pending", "poll"];
class Event {
  constructor(tag, listener, once) {
    defineReadOnly(this, "tag", tag);
    defineReadOnly(this, "listener", listener);
    defineReadOnly(this, "once", once);
    this._lastBlockNumber = -2;
    this._inflight = false;
  }
  get event() {
    switch (this.type) {
      case "tx":
        return this.hash;
      case "filter":
        return this.filter;
    }
    return this.tag;
  }
  get type() {
    return this.tag.split(":")[0];
  }
  get hash() {
    const comps = this.tag.split(":");
    if (comps[0] !== "tx") {
      return null;
    }
    return comps[1];
  }
  get filter() {
    const comps = this.tag.split(":");
    if (comps[0] !== "filter") {
      return null;
    }
    const address = comps[1];
    const topics = deserializeTopics(comps[2]);
    const filter = {};
    if (topics.length > 0) {
      filter.topics = topics;
    }
    if (address && address !== "*") {
      filter.address = address;
    }
    return filter;
  }
  pollable() {
    return this.tag.indexOf(":") >= 0 || PollableEvents.indexOf(this.tag) >= 0;
  }
}
const coinInfos = {
  "0": { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
  "2": { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
  "3": { symbol: "doge", p2pkh: 30, p2sh: 22 },
  "60": { symbol: "eth", ilk: "eth" },
  "61": { symbol: "etc", ilk: "eth" },
  "700": { symbol: "xdai", ilk: "eth" }
};
function bytes32ify(value) {
  return hexZeroPad(BigNumber.from(value).toHexString(), 32);
}
function base58Encode(data) {
  return Base58.encode(concat([data, hexDataSlice(sha256(sha256(data)), 0, 4)]));
}
const matcherIpfs = new RegExp("^(ipfs)://(.*)$", "i");
const matchers = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  matcherIpfs,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
function _parseString(result, start) {
  try {
    return toUtf8String(_parseBytes(result, start));
  } catch (error) {
  }
  return null;
}
function _parseBytes(result, start) {
  if (result === "0x") {
    return null;
  }
  const offset = BigNumber.from(hexDataSlice(result, start, start + 32)).toNumber();
  const length = BigNumber.from(hexDataSlice(result, offset, offset + 32)).toNumber();
  return hexDataSlice(result, offset + 32, offset + 32 + length);
}
function getIpfsLink(link) {
  if (link.match(/^ipfs:\/\/ipfs\//i)) {
    link = link.substring(12);
  } else if (link.match(/^ipfs:\/\//i)) {
    link = link.substring(7);
  } else {
    logger$1.throwArgumentError("unsupported IPFS format", "link", link);
  }
  return `https://gateway.ipfs.io/ipfs/${link}`;
}
function numPad(value) {
  const result = arrayify(value);
  if (result.length > 32) {
    throw new Error("internal; should not happen");
  }
  const padded = new Uint8Array(32);
  padded.set(result, 32 - result.length);
  return padded;
}
function bytesPad(value) {
  if (value.length % 32 === 0) {
    return value;
  }
  const result = new Uint8Array(Math.ceil(value.length / 32) * 32);
  result.set(value);
  return result;
}
function encodeBytes(datas) {
  const result = [];
  let byteCount = 0;
  for (let i = 0; i < datas.length; i++) {
    result.push(null);
    byteCount += 32;
  }
  for (let i = 0; i < datas.length; i++) {
    const data = arrayify(datas[i]);
    result[i] = numPad(byteCount);
    result.push(numPad(data.length));
    result.push(bytesPad(data));
    byteCount += 32 + Math.ceil(data.length / 32) * 32;
  }
  return hexConcat(result);
}
class Resolver {
  // The resolvedAddress is only for creating a ReverseLookup resolver
  constructor(provider, address, name, resolvedAddress) {
    defineReadOnly(this, "provider", provider);
    defineReadOnly(this, "name", name);
    defineReadOnly(this, "address", provider.formatter.address(address));
    defineReadOnly(this, "_resolvedAddress", resolvedAddress);
  }
  supportsWildcard() {
    if (!this._supportsEip2544) {
      this._supportsEip2544 = this.provider.call({
        to: this.address,
        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
      }).then((result) => {
        return BigNumber.from(result).eq(1);
      }).catch((error) => {
        if (error.code === Logger.errors.CALL_EXCEPTION) {
          return false;
        }
        this._supportsEip2544 = null;
        throw error;
      });
    }
    return this._supportsEip2544;
  }
  _fetch(selector, parameters) {
    return __awaiter$1(this, void 0, void 0, function* () {
      const tx = {
        to: this.address,
        ccipReadEnabled: true,
        data: hexConcat([selector, namehash(this.name), parameters || "0x"])
      };
      let parseBytes = false;
      if (yield this.supportsWildcard()) {
        parseBytes = true;
        tx.data = hexConcat(["0x9061b923", encodeBytes([dnsEncode(this.name), tx.data])]);
      }
      try {
        let result = yield this.provider.call(tx);
        if (arrayify(result).length % 32 === 4) {
          logger$1.throwError("resolver threw error", Logger.errors.CALL_EXCEPTION, {
            transaction: tx,
            data: result
          });
        }
        if (parseBytes) {
          result = _parseBytes(result, 0);
        }
        return result;
      } catch (error) {
        if (error.code === Logger.errors.CALL_EXCEPTION) {
          return null;
        }
        throw error;
      }
    });
  }
  _fetchBytes(selector, parameters) {
    return __awaiter$1(this, void 0, void 0, function* () {
      const result = yield this._fetch(selector, parameters);
      if (result != null) {
        return _parseBytes(result, 0);
      }
      return null;
    });
  }
  _getAddress(coinType, hexBytes) {
    const coinInfo = coinInfos[String(coinType)];
    if (coinInfo == null) {
      logger$1.throwError(`unsupported coin type: ${coinType}`, Logger.errors.UNSUPPORTED_OPERATION, {
        operation: `getAddress(${coinType})`
      });
    }
    if (coinInfo.ilk === "eth") {
      return this.provider.formatter.address(hexBytes);
    }
    const bytes = arrayify(hexBytes);
    if (coinInfo.p2pkh != null) {
      const p2pkh = hexBytes.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
      if (p2pkh) {
        const length = parseInt(p2pkh[1], 16);
        if (p2pkh[2].length === length * 2 && length >= 1 && length <= 75) {
          return base58Encode(concat([[coinInfo.p2pkh], "0x" + p2pkh[2]]));
        }
      }
    }
    if (coinInfo.p2sh != null) {
      const p2sh = hexBytes.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
      if (p2sh) {
        const length = parseInt(p2sh[1], 16);
        if (p2sh[2].length === length * 2 && length >= 1 && length <= 75) {
          return base58Encode(concat([[coinInfo.p2sh], "0x" + p2sh[2]]));
        }
      }
    }
    if (coinInfo.prefix != null) {
      const length = bytes[1];
      let version2 = bytes[0];
      if (version2 === 0) {
        if (length !== 20 && length !== 32) {
          version2 = -1;
        }
      } else {
        version2 = -1;
      }
      if (version2 >= 0 && bytes.length === 2 + length && length >= 1 && length <= 75) {
        const words = bech32.toWords(bytes.slice(2));
        words.unshift(version2);
        return bech32.encode(coinInfo.prefix, words);
      }
    }
    return null;
  }
  getAddress(coinType) {
    return __awaiter$1(this, void 0, void 0, function* () {
      if (coinType == null) {
        coinType = 60;
      }
      if (coinType === 60) {
        try {
          const result = yield this._fetch("0x3b3b57de");
          if (result === "0x" || result === HashZero) {
            return null;
          }
          return this.provider.formatter.callAddress(result);
        } catch (error) {
          if (error.code === Logger.errors.CALL_EXCEPTION) {
            return null;
          }
          throw error;
        }
      }
      const hexBytes = yield this._fetchBytes("0xf1cb7e06", bytes32ify(coinType));
      if (hexBytes == null || hexBytes === "0x") {
        return null;
      }
      const address = this._getAddress(coinType, hexBytes);
      if (address == null) {
        logger$1.throwError(`invalid or unsupported coin data`, Logger.errors.UNSUPPORTED_OPERATION, {
          operation: `getAddress(${coinType})`,
          coinType,
          data: hexBytes
        });
      }
      return address;
    });
  }
  getAvatar() {
    return __awaiter$1(this, void 0, void 0, function* () {
      const linkage = [{ type: "name", content: this.name }];
      try {
        const avatar = yield this.getText("avatar");
        if (avatar == null) {
          return null;
        }
        for (let i = 0; i < matchers.length; i++) {
          const match = avatar.match(matchers[i]);
          if (match == null) {
            continue;
          }
          const scheme = match[1].toLowerCase();
          switch (scheme) {
            case "https":
              linkage.push({ type: "url", content: avatar });
              return { linkage, url: avatar };
            case "data":
              linkage.push({ type: "data", content: avatar });
              return { linkage, url: avatar };
            case "ipfs":
              linkage.push({ type: "ipfs", content: avatar });
              return { linkage, url: getIpfsLink(avatar) };
            case "erc721":
            case "erc1155": {
              const selector = scheme === "erc721" ? "0xc87b56dd" : "0x0e89341c";
              linkage.push({ type: scheme, content: avatar });
              const owner = this._resolvedAddress || (yield this.getAddress());
              const comps = (match[2] || "").split("/");
              if (comps.length !== 2) {
                return null;
              }
              const addr = yield this.provider.formatter.address(comps[0]);
              const tokenId = hexZeroPad(BigNumber.from(comps[1]).toHexString(), 32);
              if (scheme === "erc721") {
                const tokenOwner = this.provider.formatter.callAddress(yield this.provider.call({
                  to: addr,
                  data: hexConcat(["0x6352211e", tokenId])
                }));
                if (owner !== tokenOwner) {
                  return null;
                }
                linkage.push({ type: "owner", content: tokenOwner });
              } else if (scheme === "erc1155") {
                const balance = BigNumber.from(yield this.provider.call({
                  to: addr,
                  data: hexConcat(["0x00fdd58e", hexZeroPad(owner, 32), tokenId])
                }));
                if (balance.isZero()) {
                  return null;
                }
                linkage.push({ type: "balance", content: balance.toString() });
              }
              const tx = {
                to: this.provider.formatter.address(comps[0]),
                data: hexConcat([selector, tokenId])
              };
              let metadataUrl = _parseString(yield this.provider.call(tx), 0);
              if (metadataUrl == null) {
                return null;
              }
              linkage.push({ type: "metadata-url-base", content: metadataUrl });
              if (scheme === "erc1155") {
                metadataUrl = metadataUrl.replace("{id}", tokenId.substring(2));
                linkage.push({ type: "metadata-url-expanded", content: metadataUrl });
              }
              if (metadataUrl.match(/^ipfs:/i)) {
                metadataUrl = getIpfsLink(metadataUrl);
              }
              linkage.push({ type: "metadata-url", content: metadataUrl });
              const metadata = yield fetchJson(metadataUrl);
              if (!metadata) {
                return null;
              }
              linkage.push({ type: "metadata", content: JSON.stringify(metadata) });
              let imageUrl = metadata.image;
              if (typeof imageUrl !== "string") {
                return null;
              }
              if (imageUrl.match(/^(https:\/\/|data:)/i)) {
              } else {
                const ipfs = imageUrl.match(matcherIpfs);
                if (ipfs == null) {
                  return null;
                }
                linkage.push({ type: "url-ipfs", content: imageUrl });
                imageUrl = getIpfsLink(imageUrl);
              }
              linkage.push({ type: "url", content: imageUrl });
              return { linkage, url: imageUrl };
            }
          }
        }
      } catch (error) {
      }
      return null;
    });
  }
  getContentHash() {
    return __awaiter$1(this, void 0, void 0, function* () {
      const hexBytes = yield this._fetchBytes("0xbc1c58d1");
      if (hexBytes == null || hexBytes === "0x") {
        return null;
      }
      const ipfs = hexBytes.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (ipfs) {
        const length = parseInt(ipfs[3], 16);
        if (ipfs[4].length === length * 2) {
          return "ipfs://" + Base58.encode("0x" + ipfs[1]);
        }
      }
      const ipns = hexBytes.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (ipns) {
        const length = parseInt(ipns[3], 16);
        if (ipns[4].length === length * 2) {
          return "ipns://" + Base58.encode("0x" + ipns[1]);
        }
      }
      const swarm = hexBytes.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (swarm) {
        if (swarm[1].length === 32 * 2) {
          return "bzz://" + swarm[1];
        }
      }
      const skynet = hexBytes.match(/^0x90b2c605([0-9a-f]*)$/);
      if (skynet) {
        if (skynet[1].length === 34 * 2) {
          const urlSafe = { "=": "", "+": "-", "/": "_" };
          const hash = encode("0x" + skynet[1]).replace(/[=+\/]/g, (a) => urlSafe[a]);
          return "sia://" + hash;
        }
      }
      return logger$1.throwError(`invalid or unsupported content hash data`, Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "getContentHash()",
        data: hexBytes
      });
    });
  }
  getText(key) {
    return __awaiter$1(this, void 0, void 0, function* () {
      let keyBytes = toUtf8Bytes(key);
      keyBytes = concat([bytes32ify(64), bytes32ify(keyBytes.length), keyBytes]);
      if (keyBytes.length % 32 !== 0) {
        keyBytes = concat([keyBytes, hexZeroPad("0x", 32 - key.length % 32)]);
      }
      const hexBytes = yield this._fetchBytes("0x59d1d43c", hexlify(keyBytes));
      if (hexBytes == null || hexBytes === "0x") {
        return null;
      }
      return toUtf8String(hexBytes);
    });
  }
}
let defaultFormatter = null;
let nextPollId = 1;
class BaseProvider extends Provider {
  /**
   *  ready
   *
   *  A Promise<Network> that resolves only once the provider is ready.
   *
   *  Sub-classes that call the super with a network without a chainId
   *  MUST set this. Standard named networks have a known chainId.
   *
   */
  constructor(network) {
    super();
    this._events = [];
    this._emitted = { block: -2 };
    this.disableCcipRead = false;
    this.formatter = new.target.getFormatter();
    defineReadOnly(this, "anyNetwork", network === "any");
    if (this.anyNetwork) {
      network = this.detectNetwork();
    }
    if (network instanceof Promise) {
      this._networkPromise = network;
      network.catch((error) => {
      });
      this._ready().catch((error) => {
      });
    } else {
      const knownNetwork = getStatic(new.target, "getNetwork")(network);
      if (knownNetwork) {
        defineReadOnly(this, "_network", knownNetwork);
        this.emit("network", knownNetwork, null);
      } else {
        logger$1.throwArgumentError("invalid network", "network", network);
      }
    }
    this._maxInternalBlockNumber = -1024;
    this._lastBlockNumber = -2;
    this._maxFilterBlockRange = 10;
    this._pollingInterval = 4e3;
    this._fastQueryDate = 0;
  }
  _ready() {
    return __awaiter$1(this, void 0, void 0, function* () {
      if (this._network == null) {
        let network = null;
        if (this._networkPromise) {
          try {
            network = yield this._networkPromise;
          } catch (error) {
          }
        }
        if (network == null) {
          network = yield this.detectNetwork();
        }
        if (!network) {
          logger$1.throwError("no network detected", Logger.errors.UNKNOWN_ERROR, {});
        }
        if (this._network == null) {
          if (this.anyNetwork) {
            this._network = network;
          } else {
            defineReadOnly(this, "_network", network);
          }
          this.emit("network", network, null);
        }
      }
      return this._network;
    });
  }
  // This will always return the most recently established network.
  // For "any", this can change (a "network" event is emitted before
  // any change is reflected); otherwise this cannot change
  get ready() {
    return poll(() => {
      return this._ready().then((network) => {
        return network;
      }, (error) => {
        if (error.code === Logger.errors.NETWORK_ERROR && error.event === "noNetwork") {
          return void 0;
        }
        throw error;
      });
    });
  }
  // @TODO: Remove this and just create a singleton formatter
  static getFormatter() {
    if (defaultFormatter == null) {
      defaultFormatter = new Formatter();
    }
    return defaultFormatter;
  }
  // @TODO: Remove this and just use getNetwork
  static getNetwork(network) {
    return getNetwork(network == null ? "homestead" : network);
  }
  ccipReadFetch(tx, calldata, urls) {
    return __awaiter$1(this, void 0, void 0, function* () {
      if (this.disableCcipRead || urls.length === 0) {
        return null;
      }
      const sender = tx.to.toLowerCase();
      const data = calldata.toLowerCase();
      const errorMessages = [];
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const href = url.replace("{sender}", sender).replace("{data}", data);
        const json = url.indexOf("{data}") >= 0 ? null : JSON.stringify({ data, sender });
        const result = yield fetchJson({ url: href, errorPassThrough: true }, json, (value, response) => {
          value.status = response.statusCode;
          return value;
        });
        if (result.data) {
          return result.data;
        }
        const errorMessage = result.message || "unknown error";
        if (result.status >= 400 && result.status < 500) {
          return logger$1.throwError(`response not found during CCIP fetch: ${errorMessage}`, Logger.errors.SERVER_ERROR, { url, errorMessage });
        }
        errorMessages.push(errorMessage);
      }
      return logger$1.throwError(`error encountered during CCIP fetch: ${errorMessages.map((m) => JSON.stringify(m)).join(", ")}`, Logger.errors.SERVER_ERROR, {
        urls,
        errorMessages
      });
    });
  }
  // Fetches the blockNumber, but will reuse any result that is less
  // than maxAge old or has been requested since the last request
  _getInternalBlockNumber(maxAge) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this._ready();
      if (maxAge > 0) {
        while (this._internalBlockNumber) {
          const internalBlockNumber = this._internalBlockNumber;
          try {
            const result = yield internalBlockNumber;
            if (getTime() - result.respTime <= maxAge) {
              return result.blockNumber;
            }
            break;
          } catch (error) {
            if (this._internalBlockNumber === internalBlockNumber) {
              break;
            }
          }
        }
      }
      const reqTime = getTime();
      const checkInternalBlockNumber = resolveProperties({
        blockNumber: this.perform("getBlockNumber", {}),
        networkError: this.getNetwork().then((network) => null, (error) => error)
      }).then(({ blockNumber, networkError }) => {
        if (networkError) {
          if (this._internalBlockNumber === checkInternalBlockNumber) {
            this._internalBlockNumber = null;
          }
          throw networkError;
        }
        const respTime = getTime();
        blockNumber = BigNumber.from(blockNumber).toNumber();
        if (blockNumber < this._maxInternalBlockNumber) {
          blockNumber = this._maxInternalBlockNumber;
        }
        this._maxInternalBlockNumber = blockNumber;
        this._setFastBlockNumber(blockNumber);
        return { blockNumber, reqTime, respTime };
      });
      this._internalBlockNumber = checkInternalBlockNumber;
      checkInternalBlockNumber.catch((error) => {
        if (this._internalBlockNumber === checkInternalBlockNumber) {
          this._internalBlockNumber = null;
        }
      });
      return (yield checkInternalBlockNumber).blockNumber;
    });
  }
  poll() {
    return __awaiter$1(this, void 0, void 0, function* () {
      const pollId = nextPollId++;
      const runners = [];
      let blockNumber = null;
      try {
        blockNumber = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
      } catch (error) {
        this.emit("error", error);
        return;
      }
      this._setFastBlockNumber(blockNumber);
      this.emit("poll", pollId, blockNumber);
      if (blockNumber === this._lastBlockNumber) {
        this.emit("didPoll", pollId);
        return;
      }
      if (this._emitted.block === -2) {
        this._emitted.block = blockNumber - 1;
      }
      if (Math.abs(this._emitted.block - blockNumber) > 1e3) {
        logger$1.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${blockNumber})`);
        this.emit("error", logger$1.makeError("network block skew detected", Logger.errors.NETWORK_ERROR, {
          blockNumber,
          event: "blockSkew",
          previousBlockNumber: this._emitted.block
        }));
        this.emit("block", blockNumber);
      } else {
        for (let i = this._emitted.block + 1; i <= blockNumber; i++) {
          this.emit("block", i);
        }
      }
      if (this._emitted.block !== blockNumber) {
        this._emitted.block = blockNumber;
        Object.keys(this._emitted).forEach((key) => {
          if (key === "block") {
            return;
          }
          const eventBlockNumber = this._emitted[key];
          if (eventBlockNumber === "pending") {
            return;
          }
          if (blockNumber - eventBlockNumber > 12) {
            delete this._emitted[key];
          }
        });
      }
      if (this._lastBlockNumber === -2) {
        this._lastBlockNumber = blockNumber - 1;
      }
      this._events.forEach((event) => {
        switch (event.type) {
          case "tx": {
            const hash = event.hash;
            let runner = this.getTransactionReceipt(hash).then((receipt) => {
              if (!receipt || receipt.blockNumber == null) {
                return null;
              }
              this._emitted["t:" + hash] = receipt.blockNumber;
              this.emit(hash, receipt);
              return null;
            }).catch((error) => {
              this.emit("error", error);
            });
            runners.push(runner);
            break;
          }
          case "filter": {
            if (!event._inflight) {
              event._inflight = true;
              if (event._lastBlockNumber === -2) {
                event._lastBlockNumber = blockNumber - 1;
              }
              const filter = event.filter;
              filter.fromBlock = event._lastBlockNumber + 1;
              filter.toBlock = blockNumber;
              const minFromBlock = filter.toBlock - this._maxFilterBlockRange;
              if (minFromBlock > filter.fromBlock) {
                filter.fromBlock = minFromBlock;
              }
              if (filter.fromBlock < 0) {
                filter.fromBlock = 0;
              }
              const runner = this.getLogs(filter).then((logs) => {
                event._inflight = false;
                if (logs.length === 0) {
                  return;
                }
                logs.forEach((log) => {
                  if (log.blockNumber > event._lastBlockNumber) {
                    event._lastBlockNumber = log.blockNumber;
                  }
                  this._emitted["b:" + log.blockHash] = log.blockNumber;
                  this._emitted["t:" + log.transactionHash] = log.blockNumber;
                  this.emit(filter, log);
                });
              }).catch((error) => {
                this.emit("error", error);
                event._inflight = false;
              });
              runners.push(runner);
            }
            break;
          }
        }
      });
      this._lastBlockNumber = blockNumber;
      Promise.all(runners).then(() => {
        this.emit("didPoll", pollId);
      }).catch((error) => {
        this.emit("error", error);
      });
      return;
    });
  }
  // Deprecated; do not use this
  resetEventsBlock(blockNumber) {
    this._lastBlockNumber = blockNumber - 1;
    if (this.polling) {
      this.poll();
    }
  }
  get network() {
    return this._network;
  }
  // This method should query the network if the underlying network
  // can change, such as when connected to a JSON-RPC backend
  detectNetwork() {
    return __awaiter$1(this, void 0, void 0, function* () {
      return logger$1.throwError("provider does not support network detection", Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "provider.detectNetwork"
      });
    });
  }
  getNetwork() {
    return __awaiter$1(this, void 0, void 0, function* () {
      const network = yield this._ready();
      const currentNetwork = yield this.detectNetwork();
      if (network.chainId !== currentNetwork.chainId) {
        if (this.anyNetwork) {
          this._network = currentNetwork;
          this._lastBlockNumber = -2;
          this._fastBlockNumber = null;
          this._fastBlockNumberPromise = null;
          this._fastQueryDate = 0;
          this._emitted.block = -2;
          this._maxInternalBlockNumber = -1024;
          this._internalBlockNumber = null;
          this.emit("network", currentNetwork, network);
          yield stall(0);
          return this._network;
        }
        const error = logger$1.makeError("underlying network changed", Logger.errors.NETWORK_ERROR, {
          event: "changed",
          network,
          detectedNetwork: currentNetwork
        });
        this.emit("error", error);
        throw error;
      }
      return network;
    });
  }
  get blockNumber() {
    this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((blockNumber) => {
      this._setFastBlockNumber(blockNumber);
    }, (error) => {
    });
    return this._fastBlockNumber != null ? this._fastBlockNumber : -1;
  }
  get polling() {
    return this._poller != null;
  }
  set polling(value) {
    if (value && !this._poller) {
      this._poller = setInterval(() => {
        this.poll();
      }, this.pollingInterval);
      if (!this._bootstrapPoll) {
        this._bootstrapPoll = setTimeout(() => {
          this.poll();
          this._bootstrapPoll = setTimeout(() => {
            if (!this._poller) {
              this.poll();
            }
            this._bootstrapPoll = null;
          }, this.pollingInterval);
        }, 0);
      }
    } else if (!value && this._poller) {
      clearInterval(this._poller);
      this._poller = null;
    }
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(value) {
    if (typeof value !== "number" || value <= 0 || parseInt(String(value)) != value) {
      throw new Error("invalid polling interval");
    }
    this._pollingInterval = value;
    if (this._poller) {
      clearInterval(this._poller);
      this._poller = setInterval(() => {
        this.poll();
      }, this._pollingInterval);
    }
  }
  _getFastBlockNumber() {
    const now = getTime();
    if (now - this._fastQueryDate > 2 * this._pollingInterval) {
      this._fastQueryDate = now;
      this._fastBlockNumberPromise = this.getBlockNumber().then((blockNumber) => {
        if (this._fastBlockNumber == null || blockNumber > this._fastBlockNumber) {
          this._fastBlockNumber = blockNumber;
        }
        return this._fastBlockNumber;
      });
    }
    return this._fastBlockNumberPromise;
  }
  _setFastBlockNumber(blockNumber) {
    if (this._fastBlockNumber != null && blockNumber < this._fastBlockNumber) {
      return;
    }
    this._fastQueryDate = getTime();
    if (this._fastBlockNumber == null || blockNumber > this._fastBlockNumber) {
      this._fastBlockNumber = blockNumber;
      this._fastBlockNumberPromise = Promise.resolve(blockNumber);
    }
  }
  waitForTransaction(transactionHash, confirmations, timeout) {
    return __awaiter$1(this, void 0, void 0, function* () {
      return this._waitForTransaction(transactionHash, confirmations == null ? 1 : confirmations, timeout || 0, null);
    });
  }
  _waitForTransaction(transactionHash, confirmations, timeout, replaceable) {
    return __awaiter$1(this, void 0, void 0, function* () {
      const receipt = yield this.getTransactionReceipt(transactionHash);
      if ((receipt ? receipt.confirmations : 0) >= confirmations) {
        return receipt;
      }
      return new Promise((resolve, reject) => {
        const cancelFuncs = [];
        let done = false;
        const alreadyDone = function() {
          if (done) {
            return true;
          }
          done = true;
          cancelFuncs.forEach((func) => {
            func();
          });
          return false;
        };
        const minedHandler = (receipt2) => {
          if (receipt2.confirmations < confirmations) {
            return;
          }
          if (alreadyDone()) {
            return;
          }
          resolve(receipt2);
        };
        this.on(transactionHash, minedHandler);
        cancelFuncs.push(() => {
          this.removeListener(transactionHash, minedHandler);
        });
        if (replaceable) {
          let lastBlockNumber = replaceable.startBlock;
          let scannedBlock = null;
          const replaceHandler = (blockNumber) => __awaiter$1(this, void 0, void 0, function* () {
            if (done) {
              return;
            }
            yield stall(1e3);
            this.getTransactionCount(replaceable.from).then((nonce) => __awaiter$1(this, void 0, void 0, function* () {
              if (done) {
                return;
              }
              if (nonce <= replaceable.nonce) {
                lastBlockNumber = blockNumber;
              } else {
                {
                  const mined = yield this.getTransaction(transactionHash);
                  if (mined && mined.blockNumber != null) {
                    return;
                  }
                }
                if (scannedBlock == null) {
                  scannedBlock = lastBlockNumber - 3;
                  if (scannedBlock < replaceable.startBlock) {
                    scannedBlock = replaceable.startBlock;
                  }
                }
                while (scannedBlock <= blockNumber) {
                  if (done) {
                    return;
                  }
                  const block = yield this.getBlockWithTransactions(scannedBlock);
                  for (let ti = 0; ti < block.transactions.length; ti++) {
                    const tx = block.transactions[ti];
                    if (tx.hash === transactionHash) {
                      return;
                    }
                    if (tx.from === replaceable.from && tx.nonce === replaceable.nonce) {
                      if (done) {
                        return;
                      }
                      const receipt2 = yield this.waitForTransaction(tx.hash, confirmations);
                      if (alreadyDone()) {
                        return;
                      }
                      let reason = "replaced";
                      if (tx.data === replaceable.data && tx.to === replaceable.to && tx.value.eq(replaceable.value)) {
                        reason = "repriced";
                      } else if (tx.data === "0x" && tx.from === tx.to && tx.value.isZero()) {
                        reason = "cancelled";
                      }
                      reject(logger$1.makeError("transaction was replaced", Logger.errors.TRANSACTION_REPLACED, {
                        cancelled: reason === "replaced" || reason === "cancelled",
                        reason,
                        replacement: this._wrapTransaction(tx),
                        hash: transactionHash,
                        receipt: receipt2
                      }));
                      return;
                    }
                  }
                  scannedBlock++;
                }
              }
              if (done) {
                return;
              }
              this.once("block", replaceHandler);
            }), (error) => {
              if (done) {
                return;
              }
              this.once("block", replaceHandler);
            });
          });
          if (done) {
            return;
          }
          this.once("block", replaceHandler);
          cancelFuncs.push(() => {
            this.removeListener("block", replaceHandler);
          });
        }
        if (typeof timeout === "number" && timeout > 0) {
          const timer2 = setTimeout(() => {
            if (alreadyDone()) {
              return;
            }
            reject(logger$1.makeError("timeout exceeded", Logger.errors.TIMEOUT, { timeout }));
          }, timeout);
          if (timer2.unref) {
            timer2.unref();
          }
          cancelFuncs.push(() => {
            clearTimeout(timer2);
          });
        }
      });
    });
  }
  getBlockNumber() {
    return __awaiter$1(this, void 0, void 0, function* () {
      return this._getInternalBlockNumber(0);
    });
  }
  getGasPrice() {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const result = yield this.perform("getGasPrice", {});
      try {
        return BigNumber.from(result);
      } catch (error) {
        return logger$1.throwError("bad result from backend", Logger.errors.SERVER_ERROR, {
          method: "getGasPrice",
          result,
          error
        });
      }
    });
  }
  getBalance(addressOrName, blockTag) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const params = yield resolveProperties({
        address: this._getAddress(addressOrName),
        blockTag: this._getBlockTag(blockTag)
      });
      const result = yield this.perform("getBalance", params);
      try {
        return BigNumber.from(result);
      } catch (error) {
        return logger$1.throwError("bad result from backend", Logger.errors.SERVER_ERROR, {
          method: "getBalance",
          params,
          result,
          error
        });
      }
    });
  }
  getTransactionCount(addressOrName, blockTag) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const params = yield resolveProperties({
        address: this._getAddress(addressOrName),
        blockTag: this._getBlockTag(blockTag)
      });
      const result = yield this.perform("getTransactionCount", params);
      try {
        return BigNumber.from(result).toNumber();
      } catch (error) {
        return logger$1.throwError("bad result from backend", Logger.errors.SERVER_ERROR, {
          method: "getTransactionCount",
          params,
          result,
          error
        });
      }
    });
  }
  getCode(addressOrName, blockTag) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const params = yield resolveProperties({
        address: this._getAddress(addressOrName),
        blockTag: this._getBlockTag(blockTag)
      });
      const result = yield this.perform("getCode", params);
      try {
        return hexlify(result);
      } catch (error) {
        return logger$1.throwError("bad result from backend", Logger.errors.SERVER_ERROR, {
          method: "getCode",
          params,
          result,
          error
        });
      }
    });
  }
  getStorageAt(addressOrName, position, blockTag) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const params = yield resolveProperties({
        address: this._getAddress(addressOrName),
        blockTag: this._getBlockTag(blockTag),
        position: Promise.resolve(position).then((p) => hexValue(p))
      });
      const result = yield this.perform("getStorageAt", params);
      try {
        return hexlify(result);
      } catch (error) {
        return logger$1.throwError("bad result from backend", Logger.errors.SERVER_ERROR, {
          method: "getStorageAt",
          params,
          result,
          error
        });
      }
    });
  }
  // This should be called by any subclass wrapping a TransactionResponse
  _wrapTransaction(tx, hash, startBlock) {
    if (hash != null && hexDataLength(hash) !== 32) {
      throw new Error("invalid response - sendTransaction");
    }
    const result = tx;
    if (hash != null && tx.hash !== hash) {
      logger$1.throwError("Transaction hash mismatch from Provider.sendTransaction.", Logger.errors.UNKNOWN_ERROR, { expectedHash: tx.hash, returnedHash: hash });
    }
    result.wait = (confirms, timeout) => __awaiter$1(this, void 0, void 0, function* () {
      if (confirms == null) {
        confirms = 1;
      }
      if (timeout == null) {
        timeout = 0;
      }
      let replacement = void 0;
      if (confirms !== 0 && startBlock != null) {
        replacement = {
          data: tx.data,
          from: tx.from,
          nonce: tx.nonce,
          to: tx.to,
          value: tx.value,
          startBlock
        };
      }
      const receipt = yield this._waitForTransaction(tx.hash, confirms, timeout, replacement);
      if (receipt == null && confirms === 0) {
        return null;
      }
      this._emitted["t:" + tx.hash] = receipt.blockNumber;
      if (receipt.status === 0) {
        logger$1.throwError("transaction failed", Logger.errors.CALL_EXCEPTION, {
          transactionHash: tx.hash,
          transaction: tx,
          receipt
        });
      }
      return receipt;
    });
    return result;
  }
  sendTransaction(signedTransaction) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const hexTx = yield Promise.resolve(signedTransaction).then((t) => hexlify(t));
      const tx = this.formatter.transaction(signedTransaction);
      if (tx.confirmations == null) {
        tx.confirmations = 0;
      }
      const blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
      try {
        const hash = yield this.perform("sendTransaction", { signedTransaction: hexTx });
        return this._wrapTransaction(tx, hash, blockNumber);
      } catch (error) {
        error.transaction = tx;
        error.transactionHash = tx.hash;
        throw error;
      }
    });
  }
  _getTransactionRequest(transaction) {
    return __awaiter$1(this, void 0, void 0, function* () {
      const values = yield transaction;
      const tx = {};
      ["from", "to"].forEach((key) => {
        if (values[key] == null) {
          return;
        }
        tx[key] = Promise.resolve(values[key]).then((v) => v ? this._getAddress(v) : null);
      });
      ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((key) => {
        if (values[key] == null) {
          return;
        }
        tx[key] = Promise.resolve(values[key]).then((v) => v ? BigNumber.from(v) : null);
      });
      ["type"].forEach((key) => {
        if (values[key] == null) {
          return;
        }
        tx[key] = Promise.resolve(values[key]).then((v) => v != null ? v : null);
      });
      if (values.accessList) {
        tx.accessList = this.formatter.accessList(values.accessList);
      }
      ["data"].forEach((key) => {
        if (values[key] == null) {
          return;
        }
        tx[key] = Promise.resolve(values[key]).then((v) => v ? hexlify(v) : null);
      });
      return this.formatter.transactionRequest(yield resolveProperties(tx));
    });
  }
  _getFilter(filter) {
    return __awaiter$1(this, void 0, void 0, function* () {
      filter = yield filter;
      const result = {};
      if (filter.address != null) {
        result.address = this._getAddress(filter.address);
      }
      ["blockHash", "topics"].forEach((key) => {
        if (filter[key] == null) {
          return;
        }
        result[key] = filter[key];
      });
      ["fromBlock", "toBlock"].forEach((key) => {
        if (filter[key] == null) {
          return;
        }
        result[key] = this._getBlockTag(filter[key]);
      });
      return this.formatter.filter(yield resolveProperties(result));
    });
  }
  _call(transaction, blockTag, attempt) {
    return __awaiter$1(this, void 0, void 0, function* () {
      if (attempt >= MAX_CCIP_REDIRECTS) {
        logger$1.throwError("CCIP read exceeded maximum redirections", Logger.errors.SERVER_ERROR, {
          redirects: attempt,
          transaction
        });
      }
      const txSender = transaction.to;
      const result = yield this.perform("call", { transaction, blockTag });
      if (attempt >= 0 && blockTag === "latest" && txSender != null && result.substring(0, 10) === "0x556f1830" && hexDataLength(result) % 32 === 4) {
        try {
          const data = hexDataSlice(result, 4);
          const sender = hexDataSlice(data, 0, 32);
          if (!BigNumber.from(sender).eq(txSender)) {
            logger$1.throwError("CCIP Read sender did not match", Logger.errors.CALL_EXCEPTION, {
              name: "OffchainLookup",
              signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
              transaction,
              data: result
            });
          }
          const urls = [];
          const urlsOffset = BigNumber.from(hexDataSlice(data, 32, 64)).toNumber();
          const urlsLength = BigNumber.from(hexDataSlice(data, urlsOffset, urlsOffset + 32)).toNumber();
          const urlsData = hexDataSlice(data, urlsOffset + 32);
          for (let u = 0; u < urlsLength; u++) {
            const url = _parseString(urlsData, u * 32);
            if (url == null) {
              logger$1.throwError("CCIP Read contained corrupt URL string", Logger.errors.CALL_EXCEPTION, {
                name: "OffchainLookup",
                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                transaction,
                data: result
              });
            }
            urls.push(url);
          }
          const calldata = _parseBytes(data, 64);
          if (!BigNumber.from(hexDataSlice(data, 100, 128)).isZero()) {
            logger$1.throwError("CCIP Read callback selector included junk", Logger.errors.CALL_EXCEPTION, {
              name: "OffchainLookup",
              signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
              transaction,
              data: result
            });
          }
          const callbackSelector = hexDataSlice(data, 96, 100);
          const extraData = _parseBytes(data, 128);
          const ccipResult = yield this.ccipReadFetch(transaction, calldata, urls);
          if (ccipResult == null) {
            logger$1.throwError("CCIP Read disabled or provided no URLs", Logger.errors.CALL_EXCEPTION, {
              name: "OffchainLookup",
              signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
              transaction,
              data: result
            });
          }
          const tx = {
            to: txSender,
            data: hexConcat([callbackSelector, encodeBytes([ccipResult, extraData])])
          };
          return this._call(tx, blockTag, attempt + 1);
        } catch (error) {
          if (error.code === Logger.errors.SERVER_ERROR) {
            throw error;
          }
        }
      }
      try {
        return hexlify(result);
      } catch (error) {
        return logger$1.throwError("bad result from backend", Logger.errors.SERVER_ERROR, {
          method: "call",
          params: { transaction, blockTag },
          result,
          error
        });
      }
    });
  }
  call(transaction, blockTag) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const resolved = yield resolveProperties({
        transaction: this._getTransactionRequest(transaction),
        blockTag: this._getBlockTag(blockTag),
        ccipReadEnabled: Promise.resolve(transaction.ccipReadEnabled)
      });
      return this._call(resolved.transaction, resolved.blockTag, resolved.ccipReadEnabled ? 0 : -1);
    });
  }
  estimateGas(transaction) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const params = yield resolveProperties({
        transaction: this._getTransactionRequest(transaction)
      });
      const result = yield this.perform("estimateGas", params);
      try {
        return BigNumber.from(result);
      } catch (error) {
        return logger$1.throwError("bad result from backend", Logger.errors.SERVER_ERROR, {
          method: "estimateGas",
          params,
          result,
          error
        });
      }
    });
  }
  _getAddress(addressOrName) {
    return __awaiter$1(this, void 0, void 0, function* () {
      addressOrName = yield addressOrName;
      if (typeof addressOrName !== "string") {
        logger$1.throwArgumentError("invalid address or ENS name", "name", addressOrName);
      }
      const address = yield this.resolveName(addressOrName);
      if (address == null) {
        logger$1.throwError("ENS name not configured", Logger.errors.UNSUPPORTED_OPERATION, {
          operation: `resolveName(${JSON.stringify(addressOrName)})`
        });
      }
      return address;
    });
  }
  _getBlock(blockHashOrBlockTag, includeTransactions) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      blockHashOrBlockTag = yield blockHashOrBlockTag;
      let blockNumber = -128;
      const params = {
        includeTransactions: !!includeTransactions
      };
      if (isHexString(blockHashOrBlockTag, 32)) {
        params.blockHash = blockHashOrBlockTag;
      } else {
        try {
          params.blockTag = yield this._getBlockTag(blockHashOrBlockTag);
          if (isHexString(params.blockTag)) {
            blockNumber = parseInt(params.blockTag.substring(2), 16);
          }
        } catch (error) {
          logger$1.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", blockHashOrBlockTag);
        }
      }
      return poll(() => __awaiter$1(this, void 0, void 0, function* () {
        const block = yield this.perform("getBlock", params);
        if (block == null) {
          if (params.blockHash != null) {
            if (this._emitted["b:" + params.blockHash] == null) {
              return null;
            }
          }
          if (params.blockTag != null) {
            if (blockNumber > this._emitted.block) {
              return null;
            }
          }
          return void 0;
        }
        if (includeTransactions) {
          let blockNumber2 = null;
          for (let i = 0; i < block.transactions.length; i++) {
            const tx = block.transactions[i];
            if (tx.blockNumber == null) {
              tx.confirmations = 0;
            } else if (tx.confirmations == null) {
              if (blockNumber2 == null) {
                blockNumber2 = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
              }
              let confirmations = blockNumber2 - tx.blockNumber + 1;
              if (confirmations <= 0) {
                confirmations = 1;
              }
              tx.confirmations = confirmations;
            }
          }
          const blockWithTxs = this.formatter.blockWithTransactions(block);
          blockWithTxs.transactions = blockWithTxs.transactions.map((tx) => this._wrapTransaction(tx));
          return blockWithTxs;
        }
        return this.formatter.block(block);
      }), { oncePoll: this });
    });
  }
  getBlock(blockHashOrBlockTag) {
    return this._getBlock(blockHashOrBlockTag, false);
  }
  getBlockWithTransactions(blockHashOrBlockTag) {
    return this._getBlock(blockHashOrBlockTag, true);
  }
  getTransaction(transactionHash) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      transactionHash = yield transactionHash;
      const params = { transactionHash: this.formatter.hash(transactionHash, true) };
      return poll(() => __awaiter$1(this, void 0, void 0, function* () {
        const result = yield this.perform("getTransaction", params);
        if (result == null) {
          if (this._emitted["t:" + transactionHash] == null) {
            return null;
          }
          return void 0;
        }
        const tx = this.formatter.transactionResponse(result);
        if (tx.blockNumber == null) {
          tx.confirmations = 0;
        } else if (tx.confirmations == null) {
          const blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
          let confirmations = blockNumber - tx.blockNumber + 1;
          if (confirmations <= 0) {
            confirmations = 1;
          }
          tx.confirmations = confirmations;
        }
        return this._wrapTransaction(tx);
      }), { oncePoll: this });
    });
  }
  getTransactionReceipt(transactionHash) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      transactionHash = yield transactionHash;
      const params = { transactionHash: this.formatter.hash(transactionHash, true) };
      return poll(() => __awaiter$1(this, void 0, void 0, function* () {
        const result = yield this.perform("getTransactionReceipt", params);
        if (result == null) {
          if (this._emitted["t:" + transactionHash] == null) {
            return null;
          }
          return void 0;
        }
        if (result.blockHash == null) {
          return void 0;
        }
        const receipt = this.formatter.receipt(result);
        if (receipt.blockNumber == null) {
          receipt.confirmations = 0;
        } else if (receipt.confirmations == null) {
          const blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
          let confirmations = blockNumber - receipt.blockNumber + 1;
          if (confirmations <= 0) {
            confirmations = 1;
          }
          receipt.confirmations = confirmations;
        }
        return receipt;
      }), { oncePoll: this });
    });
  }
  getLogs(filter) {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const params = yield resolveProperties({ filter: this._getFilter(filter) });
      const logs = yield this.perform("getLogs", params);
      logs.forEach((log) => {
        if (log.removed == null) {
          log.removed = false;
        }
      });
      return Formatter.arrayOf(this.formatter.filterLog.bind(this.formatter))(logs);
    });
  }
  getEtherPrice() {
    return __awaiter$1(this, void 0, void 0, function* () {
      yield this.getNetwork();
      return this.perform("getEtherPrice", {});
    });
  }
  _getBlockTag(blockTag) {
    return __awaiter$1(this, void 0, void 0, function* () {
      blockTag = yield blockTag;
      if (typeof blockTag === "number" && blockTag < 0) {
        if (blockTag % 1) {
          logger$1.throwArgumentError("invalid BlockTag", "blockTag", blockTag);
        }
        let blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
        blockNumber += blockTag;
        if (blockNumber < 0) {
          blockNumber = 0;
        }
        return this.formatter.blockTag(blockNumber);
      }
      return this.formatter.blockTag(blockTag);
    });
  }
  getResolver(name) {
    return __awaiter$1(this, void 0, void 0, function* () {
      let currentName = name;
      while (true) {
        if (currentName === "" || currentName === ".") {
          return null;
        }
        if (name !== "eth" && currentName === "eth") {
          return null;
        }
        const addr = yield this._getResolver(currentName, "getResolver");
        if (addr != null) {
          const resolver = new Resolver(this, addr, name);
          if (currentName !== name && !(yield resolver.supportsWildcard())) {
            return null;
          }
          return resolver;
        }
        currentName = currentName.split(".").slice(1).join(".");
      }
    });
  }
  _getResolver(name, operation) {
    return __awaiter$1(this, void 0, void 0, function* () {
      if (operation == null) {
        operation = "ENS";
      }
      const network = yield this.getNetwork();
      if (!network.ensAddress) {
        logger$1.throwError("network does not support ENS", Logger.errors.UNSUPPORTED_OPERATION, { operation, network: network.name });
      }
      try {
        const addrData = yield this.call({
          to: network.ensAddress,
          data: "0x0178b8bf" + namehash(name).substring(2)
        });
        return this.formatter.callAddress(addrData);
      } catch (error) {
      }
      return null;
    });
  }
  resolveName(name) {
    return __awaiter$1(this, void 0, void 0, function* () {
      name = yield name;
      try {
        return Promise.resolve(this.formatter.address(name));
      } catch (error) {
        if (isHexString(name)) {
          throw error;
        }
      }
      if (typeof name !== "string") {
        logger$1.throwArgumentError("invalid ENS name", "name", name);
      }
      const resolver = yield this.getResolver(name);
      if (!resolver) {
        return null;
      }
      return yield resolver.getAddress();
    });
  }
  lookupAddress(address) {
    return __awaiter$1(this, void 0, void 0, function* () {
      address = yield address;
      address = this.formatter.address(address);
      const node = address.substring(2).toLowerCase() + ".addr.reverse";
      const resolverAddr = yield this._getResolver(node, "lookupAddress");
      if (resolverAddr == null) {
        return null;
      }
      const name = _parseString(yield this.call({
        to: resolverAddr,
        data: "0x691f3431" + namehash(node).substring(2)
      }), 0);
      const addr = yield this.resolveName(name);
      if (addr != address) {
        return null;
      }
      return name;
    });
  }
  getAvatar(nameOrAddress) {
    return __awaiter$1(this, void 0, void 0, function* () {
      let resolver = null;
      if (isHexString(nameOrAddress)) {
        const address = this.formatter.address(nameOrAddress);
        const node = address.substring(2).toLowerCase() + ".addr.reverse";
        const resolverAddress = yield this._getResolver(node, "getAvatar");
        if (!resolverAddress) {
          return null;
        }
        resolver = new Resolver(this, resolverAddress, node);
        try {
          const avatar2 = yield resolver.getAvatar();
          if (avatar2) {
            return avatar2.url;
          }
        } catch (error) {
          if (error.code !== Logger.errors.CALL_EXCEPTION) {
            throw error;
          }
        }
        try {
          const name = _parseString(yield this.call({
            to: resolverAddress,
            data: "0x691f3431" + namehash(node).substring(2)
          }), 0);
          resolver = yield this.getResolver(name);
        } catch (error) {
          if (error.code !== Logger.errors.CALL_EXCEPTION) {
            throw error;
          }
          return null;
        }
      } else {
        resolver = yield this.getResolver(nameOrAddress);
        if (!resolver) {
          return null;
        }
      }
      const avatar = yield resolver.getAvatar();
      if (avatar == null) {
        return null;
      }
      return avatar.url;
    });
  }
  perform(method, params) {
    return logger$1.throwError(method + " not implemented", Logger.errors.NOT_IMPLEMENTED, { operation: method });
  }
  _startEvent(event) {
    this.polling = this._events.filter((e) => e.pollable()).length > 0;
  }
  _stopEvent(event) {
    this.polling = this._events.filter((e) => e.pollable()).length > 0;
  }
  _addEventListener(eventName, listener, once) {
    const event = new Event(getEventTag(eventName), listener, once);
    this._events.push(event);
    this._startEvent(event);
    return this;
  }
  on(eventName, listener) {
    return this._addEventListener(eventName, listener, false);
  }
  once(eventName, listener) {
    return this._addEventListener(eventName, listener, true);
  }
  emit(eventName, ...args) {
    let result = false;
    let stopped = [];
    let eventTag = getEventTag(eventName);
    this._events = this._events.filter((event) => {
      if (event.tag !== eventTag) {
        return true;
      }
      setTimeout(() => {
        event.listener.apply(this, args);
      }, 0);
      result = true;
      if (event.once) {
        stopped.push(event);
        return false;
      }
      return true;
    });
    stopped.forEach((event) => {
      this._stopEvent(event);
    });
    return result;
  }
  listenerCount(eventName) {
    if (!eventName) {
      return this._events.length;
    }
    let eventTag = getEventTag(eventName);
    return this._events.filter((event) => {
      return event.tag === eventTag;
    }).length;
  }
  listeners(eventName) {
    if (eventName == null) {
      return this._events.map((event) => event.listener);
    }
    let eventTag = getEventTag(eventName);
    return this._events.filter((event) => event.tag === eventTag).map((event) => event.listener);
  }
  off(eventName, listener) {
    if (listener == null) {
      return this.removeAllListeners(eventName);
    }
    const stopped = [];
    let found = false;
    let eventTag = getEventTag(eventName);
    this._events = this._events.filter((event) => {
      if (event.tag !== eventTag || event.listener != listener) {
        return true;
      }
      if (found) {
        return true;
      }
      found = true;
      stopped.push(event);
      return false;
    });
    stopped.forEach((event) => {
      this._stopEvent(event);
    });
    return this;
  }
  removeAllListeners(eventName) {
    let stopped = [];
    if (eventName == null) {
      stopped = this._events;
      this._events = [];
    } else {
      const eventTag = getEventTag(eventName);
      this._events = this._events.filter((event) => {
        if (event.tag !== eventTag) {
          return true;
        }
        stopped.push(event);
        return false;
      });
    }
    stopped.forEach((event) => {
      this._stopEvent(event);
    });
    return this;
  }
}
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const logger = new Logger(version);
const errorGas = ["call", "estimateGas"];
function spelunk(value, requireData) {
  if (value == null) {
    return null;
  }
  if (typeof value.message === "string" && value.message.match("reverted")) {
    const data = isHexString(value.data) ? value.data : null;
    if (!requireData || data) {
      return { message: value.message, data };
    }
  }
  if (typeof value === "object") {
    for (const key in value) {
      const result = spelunk(value[key], requireData);
      if (result) {
        return result;
      }
    }
    return null;
  }
  if (typeof value === "string") {
    try {
      return spelunk(JSON.parse(value), requireData);
    } catch (error) {
    }
  }
  return null;
}
function checkError(method, error, params) {
  const transaction = params.transaction || params.signedTransaction;
  if (method === "call") {
    const result = spelunk(error, true);
    if (result) {
      return result.data;
    }
    logger.throwError("missing revert data in call exception; Transaction reverted without a reason string", Logger.errors.CALL_EXCEPTION, {
      data: "0x",
      transaction,
      error
    });
  }
  if (method === "estimateGas") {
    let result = spelunk(error.body, false);
    if (result == null) {
      result = spelunk(error, false);
    }
    if (result) {
      logger.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
        reason: result.message,
        method,
        transaction,
        error
      });
    }
  }
  let message = error.message;
  if (error.code === Logger.errors.SERVER_ERROR && error.error && typeof error.error.message === "string") {
    message = error.error.message;
  } else if (typeof error.body === "string") {
    message = error.body;
  } else if (typeof error.responseText === "string") {
    message = error.responseText;
  }
  message = (message || "").toLowerCase();
  if (message.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i)) {
    logger.throwError("insufficient funds for intrinsic transaction cost", Logger.errors.INSUFFICIENT_FUNDS, {
      error,
      method,
      transaction
    });
  }
  if (message.match(/nonce (is )?too low/i)) {
    logger.throwError("nonce has already been used", Logger.errors.NONCE_EXPIRED, {
      error,
      method,
      transaction
    });
  }
  if (message.match(/replacement transaction underpriced|transaction gas price.*too low/i)) {
    logger.throwError("replacement fee too low", Logger.errors.REPLACEMENT_UNDERPRICED, {
      error,
      method,
      transaction
    });
  }
  if (message.match(/only replay-protected/i)) {
    logger.throwError("legacy pre-eip-155 transactions not supported", Logger.errors.UNSUPPORTED_OPERATION, {
      error,
      method,
      transaction
    });
  }
  if (errorGas.indexOf(method) >= 0 && message.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/)) {
    logger.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
      error,
      method,
      transaction
    });
  }
  throw error;
}
function timer(timeout) {
  return new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });
}
function getResult$1(payload) {
  if (payload.error) {
    const error = new Error(payload.error.message);
    error.code = payload.error.code;
    error.data = payload.error.data;
    throw error;
  }
  return payload.result;
}
function getLowerCase(value) {
  if (value) {
    return value.toLowerCase();
  }
  return value;
}
const _constructorGuard = {};
class JsonRpcSigner extends Signer {
  constructor(constructorGuard, provider, addressOrIndex) {
    super();
    if (constructorGuard !== _constructorGuard) {
      throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
    }
    defineReadOnly(this, "provider", provider);
    if (addressOrIndex == null) {
      addressOrIndex = 0;
    }
    if (typeof addressOrIndex === "string") {
      defineReadOnly(this, "_address", this.provider.formatter.address(addressOrIndex));
      defineReadOnly(this, "_index", null);
    } else if (typeof addressOrIndex === "number") {
      defineReadOnly(this, "_index", addressOrIndex);
      defineReadOnly(this, "_address", null);
    } else {
      logger.throwArgumentError("invalid address or index", "addressOrIndex", addressOrIndex);
    }
  }
  connect(provider) {
    return logger.throwError("cannot alter JSON-RPC Signer connection", Logger.errors.UNSUPPORTED_OPERATION, {
      operation: "connect"
    });
  }
  connectUnchecked() {
    return new UncheckedJsonRpcSigner(_constructorGuard, this.provider, this._address || this._index);
  }
  getAddress() {
    if (this._address) {
      return Promise.resolve(this._address);
    }
    return this.provider.send("eth_accounts", []).then((accounts) => {
      if (accounts.length <= this._index) {
        logger.throwError("unknown account #" + this._index, Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "getAddress"
        });
      }
      return this.provider.formatter.address(accounts[this._index]);
    });
  }
  sendUncheckedTransaction(transaction) {
    transaction = shallowCopy(transaction);
    const fromAddress = this.getAddress().then((address) => {
      if (address) {
        address = address.toLowerCase();
      }
      return address;
    });
    if (transaction.gasLimit == null) {
      const estimate = shallowCopy(transaction);
      estimate.from = fromAddress;
      transaction.gasLimit = this.provider.estimateGas(estimate);
    }
    if (transaction.to != null) {
      transaction.to = Promise.resolve(transaction.to).then((to) => __awaiter(this, void 0, void 0, function* () {
        if (to == null) {
          return null;
        }
        const address = yield this.provider.resolveName(to);
        if (address == null) {
          logger.throwArgumentError("provided ENS name resolves to null", "tx.to", to);
        }
        return address;
      }));
    }
    return resolveProperties({
      tx: resolveProperties(transaction),
      sender: fromAddress
    }).then(({ tx, sender }) => {
      if (tx.from != null) {
        if (tx.from.toLowerCase() !== sender) {
          logger.throwArgumentError("from address mismatch", "transaction", transaction);
        }
      } else {
        tx.from = sender;
      }
      const hexTx = this.provider.constructor.hexlifyTransaction(tx, { from: true });
      return this.provider.send("eth_sendTransaction", [hexTx]).then((hash) => {
        return hash;
      }, (error) => {
        if (typeof error.message === "string" && error.message.match(/user denied/i)) {
          logger.throwError("user rejected transaction", Logger.errors.ACTION_REJECTED, {
            action: "sendTransaction",
            transaction: tx
          });
        }
        return checkError("sendTransaction", error, hexTx);
      });
    });
  }
  signTransaction(transaction) {
    return logger.throwError("signing transactions is unsupported", Logger.errors.UNSUPPORTED_OPERATION, {
      operation: "signTransaction"
    });
  }
  sendTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      const blockNumber = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval);
      const hash = yield this.sendUncheckedTransaction(transaction);
      try {
        return yield poll(() => __awaiter(this, void 0, void 0, function* () {
          const tx = yield this.provider.getTransaction(hash);
          if (tx === null) {
            return void 0;
          }
          return this.provider._wrapTransaction(tx, hash, blockNumber);
        }), { oncePoll: this.provider });
      } catch (error) {
        error.transactionHash = hash;
        throw error;
      }
    });
  }
  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      const data = typeof message === "string" ? toUtf8Bytes(message) : message;
      const address = yield this.getAddress();
      try {
        return yield this.provider.send("personal_sign", [hexlify(data), address.toLowerCase()]);
      } catch (error) {
        if (typeof error.message === "string" && error.message.match(/user denied/i)) {
          logger.throwError("user rejected signing", Logger.errors.ACTION_REJECTED, {
            action: "signMessage",
            from: address,
            messageData: message
          });
        }
        throw error;
      }
    });
  }
  _legacySignMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      const data = typeof message === "string" ? toUtf8Bytes(message) : message;
      const address = yield this.getAddress();
      try {
        return yield this.provider.send("eth_sign", [address.toLowerCase(), hexlify(data)]);
      } catch (error) {
        if (typeof error.message === "string" && error.message.match(/user denied/i)) {
          logger.throwError("user rejected signing", Logger.errors.ACTION_REJECTED, {
            action: "_legacySignMessage",
            from: address,
            messageData: message
          });
        }
        throw error;
      }
    });
  }
  _signTypedData(domain, types, value) {
    return __awaiter(this, void 0, void 0, function* () {
      const populated = yield TypedDataEncoder.resolveNames(domain, types, value, (name) => {
        return this.provider.resolveName(name);
      });
      const address = yield this.getAddress();
      try {
        return yield this.provider.send("eth_signTypedData_v4", [
          address.toLowerCase(),
          JSON.stringify(TypedDataEncoder.getPayload(populated.domain, types, populated.value))
        ]);
      } catch (error) {
        if (typeof error.message === "string" && error.message.match(/user denied/i)) {
          logger.throwError("user rejected signing", Logger.errors.ACTION_REJECTED, {
            action: "_signTypedData",
            from: address,
            messageData: { domain: populated.domain, types, value: populated.value }
          });
        }
        throw error;
      }
    });
  }
  unlock(password) {
    return __awaiter(this, void 0, void 0, function* () {
      const provider = this.provider;
      const address = yield this.getAddress();
      return provider.send("personal_unlockAccount", [address.toLowerCase(), password, null]);
    });
  }
}
class UncheckedJsonRpcSigner extends JsonRpcSigner {
  sendTransaction(transaction) {
    return this.sendUncheckedTransaction(transaction).then((hash) => {
      return {
        hash,
        nonce: null,
        gasLimit: null,
        gasPrice: null,
        data: null,
        value: null,
        chainId: null,
        confirmations: 0,
        from: null,
        wait: (confirmations) => {
          return this.provider.waitForTransaction(hash, confirmations);
        }
      };
    });
  }
}
const allowedTransactionKeys = {
  chainId: true,
  data: true,
  gasLimit: true,
  gasPrice: true,
  nonce: true,
  to: true,
  value: true,
  type: true,
  accessList: true,
  maxFeePerGas: true,
  maxPriorityFeePerGas: true
};
class JsonRpcProvider extends BaseProvider {
  constructor(url, network) {
    let networkOrReady = network;
    if (networkOrReady == null) {
      networkOrReady = new Promise((resolve, reject) => {
        setTimeout(() => {
          this.detectNetwork().then((network2) => {
            resolve(network2);
          }, (error) => {
            reject(error);
          });
        }, 0);
      });
    }
    super(networkOrReady);
    if (!url) {
      url = getStatic(this.constructor, "defaultUrl")();
    }
    if (typeof url === "string") {
      defineReadOnly(this, "connection", Object.freeze({
        url
      }));
    } else {
      defineReadOnly(this, "connection", Object.freeze(shallowCopy(url)));
    }
    this._nextId = 42;
  }
  get _cache() {
    if (this._eventLoopCache == null) {
      this._eventLoopCache = {};
    }
    return this._eventLoopCache;
  }
  static defaultUrl() {
    return "http://localhost:8545";
  }
  detectNetwork() {
    if (!this._cache["detectNetwork"]) {
      this._cache["detectNetwork"] = this._uncachedDetectNetwork();
      setTimeout(() => {
        this._cache["detectNetwork"] = null;
      }, 0);
    }
    return this._cache["detectNetwork"];
  }
  _uncachedDetectNetwork() {
    return __awaiter(this, void 0, void 0, function* () {
      yield timer(0);
      let chainId = null;
      try {
        chainId = yield this.send("eth_chainId", []);
      } catch (error) {
        try {
          chainId = yield this.send("net_version", []);
        } catch (error2) {
        }
      }
      if (chainId != null) {
        const getNetwork2 = getStatic(this.constructor, "getNetwork");
        try {
          return getNetwork2(BigNumber.from(chainId).toNumber());
        } catch (error) {
          return logger.throwError("could not detect network", Logger.errors.NETWORK_ERROR, {
            chainId,
            event: "invalidNetwork",
            serverError: error
          });
        }
      }
      return logger.throwError("could not detect network", Logger.errors.NETWORK_ERROR, {
        event: "noNetwork"
      });
    });
  }
  getSigner(addressOrIndex) {
    return new JsonRpcSigner(_constructorGuard, this, addressOrIndex);
  }
  getUncheckedSigner(addressOrIndex) {
    return this.getSigner(addressOrIndex).connectUnchecked();
  }
  listAccounts() {
    return this.send("eth_accounts", []).then((accounts) => {
      return accounts.map((a) => this.formatter.address(a));
    });
  }
  send(method, params) {
    const request = {
      method,
      params,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    this.emit("debug", {
      action: "request",
      request: deepCopy(request),
      provider: this
    });
    const cache = ["eth_chainId", "eth_blockNumber"].indexOf(method) >= 0;
    if (cache && this._cache[method]) {
      return this._cache[method];
    }
    const result = fetchJson(this.connection, JSON.stringify(request), getResult$1).then((result2) => {
      this.emit("debug", {
        action: "response",
        request,
        response: result2,
        provider: this
      });
      return result2;
    }, (error) => {
      this.emit("debug", {
        action: "response",
        error,
        request,
        provider: this
      });
      throw error;
    });
    if (cache) {
      this._cache[method] = result;
      setTimeout(() => {
        this._cache[method] = null;
      }, 0);
    }
    return result;
  }
  prepareRequest(method, params) {
    switch (method) {
      case "getBlockNumber":
        return ["eth_blockNumber", []];
      case "getGasPrice":
        return ["eth_gasPrice", []];
      case "getBalance":
        return ["eth_getBalance", [getLowerCase(params.address), params.blockTag]];
      case "getTransactionCount":
        return ["eth_getTransactionCount", [getLowerCase(params.address), params.blockTag]];
      case "getCode":
        return ["eth_getCode", [getLowerCase(params.address), params.blockTag]];
      case "getStorageAt":
        return ["eth_getStorageAt", [getLowerCase(params.address), hexZeroPad(params.position, 32), params.blockTag]];
      case "sendTransaction":
        return ["eth_sendRawTransaction", [params.signedTransaction]];
      case "getBlock":
        if (params.blockTag) {
          return ["eth_getBlockByNumber", [params.blockTag, !!params.includeTransactions]];
        } else if (params.blockHash) {
          return ["eth_getBlockByHash", [params.blockHash, !!params.includeTransactions]];
        }
        return null;
      case "getTransaction":
        return ["eth_getTransactionByHash", [params.transactionHash]];
      case "getTransactionReceipt":
        return ["eth_getTransactionReceipt", [params.transactionHash]];
      case "call": {
        const hexlifyTransaction = getStatic(this.constructor, "hexlifyTransaction");
        return ["eth_call", [hexlifyTransaction(params.transaction, { from: true }), params.blockTag]];
      }
      case "estimateGas": {
        const hexlifyTransaction = getStatic(this.constructor, "hexlifyTransaction");
        return ["eth_estimateGas", [hexlifyTransaction(params.transaction, { from: true })]];
      }
      case "getLogs":
        if (params.filter && params.filter.address != null) {
          params.filter.address = getLowerCase(params.filter.address);
        }
        return ["eth_getLogs", [params.filter]];
    }
    return null;
  }
  perform(method, params) {
    return __awaiter(this, void 0, void 0, function* () {
      if (method === "call" || method === "estimateGas") {
        const tx = params.transaction;
        if (tx && tx.type != null && BigNumber.from(tx.type).isZero()) {
          if (tx.maxFeePerGas == null && tx.maxPriorityFeePerGas == null) {
            const feeData = yield this.getFeeData();
            if (feeData.maxFeePerGas == null && feeData.maxPriorityFeePerGas == null) {
              params = shallowCopy(params);
              params.transaction = shallowCopy(tx);
              delete params.transaction.type;
            }
          }
        }
      }
      const args = this.prepareRequest(method, params);
      if (args == null) {
        logger.throwError(method + " not implemented", Logger.errors.NOT_IMPLEMENTED, { operation: method });
      }
      try {
        return yield this.send(args[0], args[1]);
      } catch (error) {
        return checkError(method, error, params);
      }
    });
  }
  _startEvent(event) {
    if (event.tag === "pending") {
      this._startPending();
    }
    super._startEvent(event);
  }
  _startPending() {
    if (this._pendingFilter != null) {
      return;
    }
    const self = this;
    const pendingFilter = this.send("eth_newPendingTransactionFilter", []);
    this._pendingFilter = pendingFilter;
    pendingFilter.then(function(filterId) {
      function poll2() {
        self.send("eth_getFilterChanges", [filterId]).then(function(hashes) {
          if (self._pendingFilter != pendingFilter) {
            return null;
          }
          let seq = Promise.resolve();
          hashes.forEach(function(hash) {
            self._emitted["t:" + hash.toLowerCase()] = "pending";
            seq = seq.then(function() {
              return self.getTransaction(hash).then(function(tx) {
                self.emit("pending", tx);
                return null;
              });
            });
          });
          return seq.then(function() {
            return timer(1e3);
          });
        }).then(function() {
          if (self._pendingFilter != pendingFilter) {
            self.send("eth_uninstallFilter", [filterId]);
            return;
          }
          setTimeout(function() {
            poll2();
          }, 0);
          return null;
        }).catch((error) => {
        });
      }
      poll2();
      return filterId;
    }).catch((error) => {
    });
  }
  _stopEvent(event) {
    if (event.tag === "pending" && this.listenerCount("pending") === 0) {
      this._pendingFilter = null;
    }
    super._stopEvent(event);
  }
  // Convert an ethers.js transaction into a JSON-RPC transaction
  //  - gasLimit => gas
  //  - All values hexlified
  //  - All numeric values zero-striped
  //  - All addresses are lowercased
  // NOTE: This allows a TransactionRequest, but all values should be resolved
  //       before this is called
  // @TODO: This will likely be removed in future versions and prepareRequest
  //        will be the preferred method for this.
  static hexlifyTransaction(transaction, allowExtra) {
    const allowed = shallowCopy(allowedTransactionKeys);
    if (allowExtra) {
      for (const key in allowExtra) {
        if (allowExtra[key]) {
          allowed[key] = true;
        }
      }
    }
    checkProperties(transaction, allowed);
    const result = {};
    ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(key) {
      if (transaction[key] == null) {
        return;
      }
      const value = hexValue(BigNumber.from(transaction[key]));
      if (key === "gasLimit") {
        key = "gas";
      }
      result[key] = value;
    });
    ["from", "to", "data"].forEach(function(key) {
      if (transaction[key] == null) {
        return;
      }
      result[key] = hexlify(transaction[key]);
    });
    if (transaction.accessList) {
      result["accessList"] = accessListify(transaction.accessList);
    }
    return result;
  }
}
const DEFAULT_MAX_REQUEST_BATCH_SIZE = 100;
const DEFAULT_REQUEST_BATCH_DELAY_MS = 10;
class RequestBatcher {
  constructor(sendBatchFn, maxBatchSize = DEFAULT_MAX_REQUEST_BATCH_SIZE) {
    this.sendBatchFn = sendBatchFn;
    this.maxBatchSize = maxBatchSize;
    this.pendingBatch = [];
  }
  /**
   * Enqueues the provided request. The batch is immediately sent if the maximum
   * batch size is reached. Otherwise, the request is enqueued onto a batch that
   * is sent after 10ms.
   *
   * Returns a promise that resolves with the result of the request.
   */
  enqueueRequest(request) {
    return __awaiter$1$1(this, void 0, void 0, function* () {
      const inflightRequest = {
        request,
        resolve: void 0,
        reject: void 0
      };
      const promise = new Promise((resolve, reject) => {
        inflightRequest.resolve = resolve;
        inflightRequest.reject = reject;
      });
      this.pendingBatch.push(inflightRequest);
      if (this.pendingBatch.length === this.maxBatchSize) {
        void this.sendBatchRequest();
      } else if (!this.pendingBatchTimer) {
        this.pendingBatchTimer = setTimeout(() => this.sendBatchRequest(), DEFAULT_REQUEST_BATCH_DELAY_MS);
      }
      return promise;
    });
  }
  /**
   * Sends the currently queued batches and resets the batch and timer. Processes
   * the batched response results back to the original promises.
   */
  sendBatchRequest() {
    return __awaiter$1$1(this, void 0, void 0, function* () {
      const batch = this.pendingBatch;
      this.pendingBatch = [];
      if (this.pendingBatchTimer) {
        clearTimeout(this.pendingBatchTimer);
        this.pendingBatchTimer = void 0;
      }
      const request = batch.map((inflight) => inflight.request);
      return this.sendBatchFn(request).then((result) => {
        batch.forEach((inflightRequest, index) => {
          const payload = result[index];
          if (payload.error) {
            const error = new Error(payload.error.message);
            error.code = payload.error.code;
            error.data = payload.error.data;
            inflightRequest.reject(error);
          } else {
            inflightRequest.resolve(payload.result);
          }
        });
      }, (error) => {
        batch.forEach((inflightRequest) => {
          inflightRequest.reject(error);
        });
      });
    });
  }
}
class AlchemyProvider extends JsonRpcProvider {
  /** @internal */
  constructor(config) {
    const apiKey = AlchemyProvider.getApiKey(config.apiKey);
    const alchemyNetwork = AlchemyProvider.getAlchemyNetwork(config.network);
    let connection = AlchemyProvider.getAlchemyConnectionInfo(alchemyNetwork, apiKey, "http");
    if (config.url !== void 0) {
      connection.url = config.url;
    }
    connection.throttleLimit = config.maxRetries;
    if (config.connectionInfoOverrides) {
      connection = Object.assign(Object.assign({}, connection), config.connectionInfoOverrides);
    }
    const ethersNetwork = EthersNetwork[alchemyNetwork];
    if (!ethersNetwork) {
      throw new Error(`Unsupported network: ${alchemyNetwork}`);
    }
    super(connection, ethersNetwork);
    this.apiKey = config.apiKey;
    this.maxRetries = config.maxRetries;
    this.batchRequests = config.batchRequests;
    const batcherConnection = Object.assign(Object.assign({}, this.connection), { headers: Object.assign(Object.assign({}, this.connection.headers), { "Alchemy-Ethers-Sdk-Method": "batchSend" }) });
    const sendBatchFn = (requests) => {
      return fetchJson(batcherConnection, JSON.stringify(requests));
    };
    this.batcher = new RequestBatcher(sendBatchFn);
    this.modifyFormatter();
  }
  /**
   * Overrides the `UrlJsonRpcProvider.getApiKey` method as implemented by
   * ethers.js. Returns the API key for an Alchemy provider.
   *
   * @internal
   * @override
   */
  static getApiKey(apiKey) {
    if (apiKey == null) {
      return DEFAULT_ALCHEMY_API_KEY;
    }
    if (apiKey && typeof apiKey !== "string") {
      throw new Error(`Invalid apiKey '${apiKey}' provided. apiKey must be a string.`);
    }
    return apiKey;
  }
  /**
   * Overrides the `BaseProvider.getNetwork` method as implemented by ethers.js.
   *
   * This override allows the SDK to set the provider's network to values not
   * yet supported by ethers.js.
   *
   * @internal
   * @override
   */
  static getNetwork(network) {
    if (typeof network === "string" && network in CustomNetworks) {
      return CustomNetworks[network];
    }
    return getNetwork(network);
  }
  /**
   * Converts the `Networkish` input to the network enum used by Alchemy.
   *
   * @internal
   */
  static getAlchemyNetwork(network) {
    if (network === void 0) {
      return DEFAULT_NETWORK;
    }
    if (typeof network === "number") {
      throw new Error(`Invalid network '${network}' provided. Network must be a string.`);
    }
    const isValidNetwork = Object.values(Network).includes(network);
    if (!isValidNetwork) {
      throw new Error(`Invalid network '${network}' provided. Network must be one of: ${Object.values(Network).join(", ")}.`);
    }
    return network;
  }
  /**
   * Returns a {@link ConnectionInfo} object compatible with ethers that contains
   * the correct URLs for Alchemy.
   *
   * @internal
   */
  static getAlchemyConnectionInfo(network, apiKey, type) {
    const url = type === "http" ? getAlchemyHttpUrl(network, apiKey) : getAlchemyWsUrl(network, apiKey);
    return {
      headers: IS_BROWSER ? {
        "Alchemy-Ethers-Sdk-Version": VERSION
      } : {
        "Alchemy-Ethers-Sdk-Version": VERSION,
        "Accept-Encoding": "gzip"
      },
      allowGzip: true,
      url
    };
  }
  /**
   * Overrides the method in ethers.js's `StaticJsonRpcProvider` class. This
   * method is called when calling methods on the parent class `BaseProvider`.
   *
   * @override
   */
  detectNetwork() {
    const _super = Object.create(null, {
      detectNetwork: { get: () => super.detectNetwork }
    });
    return __awaiter$1$1(this, void 0, void 0, function* () {
      let network = this.network;
      if (network == null) {
        network = yield _super.detectNetwork.call(this);
        if (!network) {
          throw new Error("No network detected");
        }
      }
      return network;
    });
  }
  _startPending() {
    logWarn("WARNING: Alchemy Provider does not support pending filters");
  }
  /**
   * Overrides the ether's `isCommunityResource()` method. Returns true if the
   * current api key is the default key.
   *
   * @override
   */
  isCommunityResource() {
    return this.apiKey === DEFAULT_ALCHEMY_API_KEY;
  }
  /**
   * Overrides the base {@link JsonRpcProvider.send} method to implement custom
   * logic for sending requests to Alchemy.
   *
   * @param method The method name to use for the request.
   * @param params The parameters to use for the request.
   * @override
   * @public
   */
  // TODO: Add headers for `perform()` override.
  send(method, params) {
    return this._send(method, params, "send");
  }
  /**
   * DO NOT MODIFY.
   *
   * Original code copied over from ether.js's `JsonRpcProvider.send()`.
   *
   * This method is copied over directly in order to implement custom headers
   *
   * @internal
   */
  _send(method, params, methodName) {
    const request = {
      method,
      params,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    const connection = Object.assign({}, this.connection);
    connection.headers["Alchemy-Ethers-Sdk-Method"] = methodName;
    if (this.batchRequests) {
      return this.batcher.enqueueRequest(request);
    }
    this.emit("debug", {
      action: "request",
      request: deepCopy$1(request),
      provider: this
    });
    const cache = ["eth_chainId", "eth_blockNumber"].indexOf(method) >= 0;
    if (cache && this._cache[method] != null) {
      return this._cache[method];
    }
    const result = fetchJson(this.connection, JSON.stringify(request), getResult).then((result2) => {
      this.emit("debug", {
        action: "response",
        request,
        response: result2,
        provider: this
      });
      return result2;
    }, (error) => {
      this.emit("debug", {
        action: "response",
        error,
        request,
        provider: this
      });
      throw error;
    });
    if (cache) {
      this._cache[method] = result;
      setTimeout(() => {
        this._cache[method] = null;
      }, 0);
    }
    return result;
  }
  /**
   * Overrides the base `Formatter` class inherited from ethers to support
   * returning custom fields in Ethers response types.
   *
   * For context, ethers has a `Formatter` class that is used to format the
   * response from a JSON-RPC request. Any fields that are not defined in the
   * `Formatter` class are removed from the returned response. By modifying the
   * `Formatter` class in this method, we can add support for fields that are
   * not defined in ethers.
   */
  modifyFormatter() {
    this.formatter.formats["receiptLog"]["removed"] = (val) => {
      if (typeof val === "boolean") {
        return val;
      }
      return void 0;
    };
  }
}
function getResult(payload) {
  if (payload.error) {
    const error = new Error(payload.error.message);
    error.code = payload.error.code;
    error.data = payload.error.data;
    throw error;
  }
  return payload.result;
}
const alchemyProvider2577f5a5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlchemyProvider
}, Symbol.toStringTag, { value: "Module" }));
export {
  AlchemyProvider as A,
  JsonRpcProvider as J,
  alchemyProvider2577f5a5 as a,
  version as v
};
