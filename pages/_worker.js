var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@stablelib/int/lib/int.js
var require_int = __commonJS({
  "node_modules/@stablelib/int/lib/int.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function imulShim(a, b) {
      var ah = a >>> 16 & 65535, al = a & 65535;
      var bh = b >>> 16 & 65535, bl = b & 65535;
      return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
    }
    exports.mul = Math.imul || imulShim;
    function add(a, b) {
      return a + b | 0;
    }
    exports.add = add;
    function sub(a, b) {
      return a - b | 0;
    }
    exports.sub = sub;
    function rotl(x, n) {
      return x << n | x >>> 32 - n;
    }
    exports.rotl = rotl;
    function rotr(x, n) {
      return x << 32 - n | x >>> n;
    }
    exports.rotr = rotr;
    function isIntegerShim(n) {
      return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
    }
    exports.isInteger = Number.isInteger || isIntegerShim;
    exports.MAX_SAFE_INTEGER = 9007199254740991;
    exports.isSafeInteger = function(n) {
      return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);
    };
  }
});

// node_modules/@stablelib/binary/lib/binary.js
var require_binary = __commonJS({
  "node_modules/@stablelib/binary/lib/binary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var int_1 = require_int();
    function readInt16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
    }
    exports.readInt16BE = readInt16BE;
    function readUint16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
    }
    exports.readUint16BE = readUint16BE;
    function readInt16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
    }
    exports.readInt16LE = readInt16LE;
    function readUint16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 1] << 8 | array[offset]) >>> 0;
    }
    exports.readUint16LE = readUint16LE;
    function writeUint16BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 8;
      out[offset + 1] = value >>> 0;
      return out;
    }
    exports.writeUint16BE = writeUint16BE;
    exports.writeInt16BE = writeUint16BE;
    function writeUint16LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      return out;
    }
    exports.writeUint16LE = writeUint16LE;
    exports.writeInt16LE = writeUint16LE;
    function readInt32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
    }
    exports.readInt32BE = readInt32BE;
    function readUint32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
    }
    exports.readUint32BE = readUint32BE;
    function readInt32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
    }
    exports.readInt32LE = readInt32LE;
    function readUint32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
    }
    exports.readUint32LE = readUint32LE;
    function writeUint32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 24;
      out[offset + 1] = value >>> 16;
      out[offset + 2] = value >>> 8;
      out[offset + 3] = value >>> 0;
      return out;
    }
    exports.writeUint32BE = writeUint32BE;
    exports.writeInt32BE = writeUint32BE;
    function writeUint32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      out[offset + 2] = value >>> 16;
      out[offset + 3] = value >>> 24;
      return out;
    }
    exports.writeUint32LE = writeUint32LE;
    exports.writeInt32LE = writeUint32LE;
    function readInt64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var hi = readInt32BE(array, offset);
      var lo = readInt32BE(array, offset + 4);
      return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
    }
    exports.readInt64BE = readInt64BE;
    function readUint64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var hi = readUint32BE(array, offset);
      var lo = readUint32BE(array, offset + 4);
      return hi * 4294967296 + lo;
    }
    exports.readUint64BE = readUint64BE;
    function readInt64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var lo = readInt32LE(array, offset);
      var hi = readInt32LE(array, offset + 4);
      return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
    }
    exports.readInt64LE = readInt64LE;
    function readUint64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var lo = readUint32LE(array, offset);
      var hi = readUint32LE(array, offset + 4);
      return hi * 4294967296 + lo;
    }
    exports.readUint64LE = readUint64LE;
    function writeUint64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      writeUint32BE(value / 4294967296 >>> 0, out, offset);
      writeUint32BE(value >>> 0, out, offset + 4);
      return out;
    }
    exports.writeUint64BE = writeUint64BE;
    exports.writeInt64BE = writeUint64BE;
    function writeUint64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      writeUint32LE(value >>> 0, out, offset);
      writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
      return out;
    }
    exports.writeUint64LE = writeUint64LE;
    exports.writeInt64LE = writeUint64LE;
    function readUintBE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
      }
      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
      }
      var result = 0;
      var mul = 1;
      for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        result += array[i] * mul;
        mul *= 256;
      }
      return result;
    }
    exports.readUintBE = readUintBE;
    function readUintLE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
      }
      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
      }
      var result = 0;
      var mul = 1;
      for (var i = offset; i < offset + bitLength / 8; i++) {
        result += array[i] * mul;
        mul *= 256;
      }
      return result;
    }
    exports.readUintLE = readUintLE;
    function writeUintBE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
      }
      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
      }
      var div = 1;
      for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        out[i] = value / div & 255;
        div *= 256;
      }
      return out;
    }
    exports.writeUintBE = writeUintBE;
    function writeUintLE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
      }
      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
      }
      var div = 1;
      for (var i = offset; i < offset + bitLength / 8; i++) {
        out[i] = value / div & 255;
        div *= 256;
      }
      return out;
    }
    exports.writeUintLE = writeUintLE;
    function readFloat32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset);
    }
    exports.readFloat32BE = readFloat32BE;
    function readFloat32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset, true);
    }
    exports.readFloat32LE = readFloat32LE;
    function readFloat64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset);
    }
    exports.readFloat64BE = readFloat64BE;
    function readFloat64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset, true);
    }
    exports.readFloat64LE = readFloat64LE;
    function writeFloat32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value);
      return out;
    }
    exports.writeFloat32BE = writeFloat32BE;
    function writeFloat32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value, true);
      return out;
    }
    exports.writeFloat32LE = writeFloat32LE;
    function writeFloat64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value);
      return out;
    }
    exports.writeFloat64BE = writeFloat64BE;
    function writeFloat64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }
      if (offset === void 0) {
        offset = 0;
      }
      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value, true);
      return out;
    }
    exports.writeFloat64LE = writeFloat64LE;
  }
});

// node_modules/@stablelib/wipe/lib/wipe.js
var require_wipe = __commonJS({
  "node_modules/@stablelib/wipe/lib/wipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function wipe(array) {
      for (var i = 0; i < array.length; i++) {
        array[i] = 0;
      }
      return array;
    }
    exports.wipe = wipe;
  }
});

// node_modules/@stablelib/blake2b/lib/blake2b.js
var require_blake2b = __commonJS({
  "node_modules/@stablelib/blake2b/lib/blake2b.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.BLOCK_SIZE = 128;
    exports.DIGEST_LENGTH = 64;
    exports.KEY_LENGTH = 64;
    exports.PERSONALIZATION_LENGTH = 16;
    exports.SALT_LENGTH = 16;
    exports.MAX_LEAF_SIZE = Math.pow(2, 32) - 1;
    exports.MAX_FANOUT = 255;
    exports.MAX_MAX_DEPTH = 255;
    var IV = new Uint32Array([
      // low bits // high bits
      4089235720,
      1779033703,
      2227873595,
      3144134277,
      4271175723,
      1013904242,
      1595750129,
      2773480762,
      2917565137,
      1359893119,
      725511199,
      2600822924,
      4215389547,
      528734635,
      327033209,
      1541459225
    ]);
    var SIGMA = [
      [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      [28, 20, 8, 16, 18, 30, 26, 12, 2, 24, 0, 4, 22, 14, 10, 6],
      [22, 16, 24, 0, 10, 4, 30, 26, 20, 28, 6, 12, 14, 2, 18, 8],
      [14, 18, 6, 2, 26, 24, 22, 28, 4, 12, 10, 20, 8, 0, 30, 16],
      [18, 0, 10, 14, 4, 8, 20, 30, 28, 2, 22, 24, 12, 16, 6, 26],
      [4, 24, 12, 20, 0, 22, 16, 6, 8, 26, 14, 10, 30, 28, 2, 18],
      [24, 10, 2, 30, 28, 26, 8, 20, 0, 14, 12, 6, 18, 4, 16, 22],
      [26, 22, 14, 28, 24, 2, 6, 18, 10, 0, 30, 8, 16, 12, 4, 20],
      [12, 30, 28, 18, 22, 6, 0, 16, 24, 4, 26, 14, 2, 8, 20, 10],
      [20, 4, 16, 8, 14, 12, 2, 10, 30, 22, 18, 28, 6, 24, 26, 0],
      [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      [28, 20, 8, 16, 18, 30, 26, 12, 2, 24, 0, 4, 22, 14, 10, 6]
    ];
    var BLAKE2b = (
      /** @class */
      function() {
        function BLAKE2b2(digestLength, config) {
          if (digestLength === void 0) {
            digestLength = 64;
          }
          this.digestLength = digestLength;
          this.blockSize = exports.BLOCK_SIZE;
          this._state = new Int32Array(IV);
          this._buffer = new Uint8Array(exports.BLOCK_SIZE);
          this._bufferLength = 0;
          this._ctr = new Uint32Array(4);
          this._flag = new Uint32Array(4);
          this._lastNode = false;
          this._finished = false;
          this._vtmp = new Uint32Array(32);
          this._mtmp = new Uint32Array(32);
          if (digestLength < 1 || digestLength > exports.DIGEST_LENGTH) {
            throw new Error("blake2b: wrong digest length");
          }
          if (config) {
            this.validateConfig(config);
          }
          var keyLength = 0;
          if (config && config.key) {
            keyLength = config.key.length;
          }
          var fanout = 1;
          var maxDepth = 1;
          if (config && config.tree) {
            fanout = config.tree.fanout;
            maxDepth = config.tree.maxDepth;
          }
          this._state[0] ^= digestLength | keyLength << 8 | fanout << 16 | maxDepth << 24;
          if (config && config.tree) {
            this._state[1] ^= config.tree.leafSize;
            this._state[2] ^= config.tree.nodeOffsetLowBits;
            this._state[3] ^= config.tree.nodeOffsetHighBits;
            this._state[4] ^= config.tree.nodeDepth | config.tree.innerDigestLength << 8;
            this._lastNode = config.tree.lastNode;
          }
          if (config && config.salt) {
            this._state[8] ^= binary_1.readUint32LE(config.salt, 0);
            this._state[9] ^= binary_1.readUint32LE(config.salt, 4);
            this._state[10] ^= binary_1.readUint32LE(config.salt, 8);
            this._state[11] ^= binary_1.readUint32LE(config.salt, 12);
          }
          if (config && config.personalization) {
            this._state[12] ^= binary_1.readUint32LE(config.personalization, 0);
            this._state[13] ^= binary_1.readUint32LE(config.personalization, 4);
            this._state[14] ^= binary_1.readUint32LE(config.personalization, 8);
            this._state[15] ^= binary_1.readUint32LE(config.personalization, 12);
          }
          this._initialState = new Uint32Array(this._state);
          if (config && config.key && keyLength > 0) {
            this._paddedKey = new Uint8Array(exports.BLOCK_SIZE);
            this._paddedKey.set(config.key);
            this._buffer.set(this._paddedKey);
            this._bufferLength = exports.BLOCK_SIZE;
          }
        }
        BLAKE2b2.prototype.reset = function() {
          this._state.set(this._initialState);
          if (this._paddedKey) {
            this._buffer.set(this._paddedKey);
            this._bufferLength = exports.BLOCK_SIZE;
          } else {
            this._bufferLength = 0;
          }
          wipe_1.wipe(this._ctr);
          wipe_1.wipe(this._flag);
          this._finished = false;
          return this;
        };
        BLAKE2b2.prototype.validateConfig = function(config) {
          if (config.key && config.key.length > exports.KEY_LENGTH) {
            throw new Error("blake2b: wrong key length");
          }
          if (config.salt && config.salt.length !== exports.SALT_LENGTH) {
            throw new Error("blake2b: wrong salt length");
          }
          if (config.personalization && config.personalization.length !== exports.PERSONALIZATION_LENGTH) {
            throw new Error("blake2b: wrong personalization length");
          }
          if (config.tree) {
            if (config.tree.fanout < 0 || config.tree.fanout > exports.MAX_FANOUT) {
              throw new Error("blake2b: wrong tree fanout");
            }
            if (config.tree.maxDepth < 0 || config.tree.maxDepth > exports.MAX_MAX_DEPTH) {
              throw new Error("blake2b: wrong tree depth");
            }
            if (config.tree.leafSize < 0 || config.tree.leafSize > exports.MAX_LEAF_SIZE) {
              throw new Error("blake2b: wrong leaf size");
            }
            if (config.tree.innerDigestLength < 0 || config.tree.innerDigestLength > exports.DIGEST_LENGTH) {
              throw new Error("blake2b: wrong tree inner digest length");
            }
          }
        };
        BLAKE2b2.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("blake2b: can't update because hash was finished.");
          }
          var left = exports.BLOCK_SIZE - this._bufferLength;
          var dataPos = 0;
          if (dataLength === 0) {
            return this;
          }
          if (dataLength > left) {
            for (var i = 0; i < left; i++) {
              this._buffer[this._bufferLength + i] = data[dataPos + i];
            }
            this._processBlock(exports.BLOCK_SIZE);
            dataPos += left;
            dataLength -= left;
            this._bufferLength = 0;
          }
          while (dataLength > exports.BLOCK_SIZE) {
            for (var i = 0; i < exports.BLOCK_SIZE; i++) {
              this._buffer[i] = data[dataPos + i];
            }
            this._processBlock(exports.BLOCK_SIZE);
            dataPos += exports.BLOCK_SIZE;
            dataLength -= exports.BLOCK_SIZE;
            this._bufferLength = 0;
          }
          for (var i = 0; i < dataLength; i++) {
            this._buffer[this._bufferLength + i] = data[dataPos + i];
          }
          this._bufferLength += dataLength;
          return this;
        };
        BLAKE2b2.prototype.finish = function(out) {
          if (!this._finished) {
            for (var i = this._bufferLength; i < exports.BLOCK_SIZE; i++) {
              this._buffer[i] = 0;
            }
            this._flag[0] = 4294967295;
            this._flag[1] = 4294967295;
            if (this._lastNode) {
              this._flag[2] = 4294967295;
              this._flag[3] = 4294967295;
            }
            this._processBlock(this._bufferLength);
            this._finished = true;
          }
          var tmp = this._buffer.subarray(0, 64);
          for (var i = 0; i < 16; i++) {
            binary_1.writeUint32LE(this._state[i], tmp, i * 4);
          }
          out.set(tmp.subarray(0, out.length));
          return this;
        };
        BLAKE2b2.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        BLAKE2b2.prototype.clean = function() {
          wipe_1.wipe(this._vtmp);
          wipe_1.wipe(this._mtmp);
          wipe_1.wipe(this._state);
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._initialState);
          if (this._paddedKey) {
            wipe_1.wipe(this._paddedKey);
          }
          this._bufferLength = 0;
          wipe_1.wipe(this._ctr);
          wipe_1.wipe(this._flag);
          this._lastNode = false;
          this._finished = false;
        };
        BLAKE2b2.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("blake2b: cannot save finished state");
          }
          return {
            state: new Uint32Array(this._state),
            buffer: new Uint8Array(this._buffer),
            bufferLength: this._bufferLength,
            ctr: new Uint32Array(this._ctr),
            flag: new Uint32Array(this._flag),
            lastNode: this._lastNode,
            paddedKey: this._paddedKey ? new Uint8Array(this._paddedKey) : void 0,
            initialState: new Uint32Array(this._initialState)
          };
        };
        BLAKE2b2.prototype.restoreState = function(savedState) {
          this._state.set(savedState.state);
          this._buffer.set(savedState.buffer);
          this._bufferLength = savedState.bufferLength;
          this._ctr.set(savedState.ctr);
          this._flag.set(savedState.flag);
          this._lastNode = savedState.lastNode;
          if (this._paddedKey) {
            wipe_1.wipe(this._paddedKey);
          }
          this._paddedKey = savedState.paddedKey ? new Uint8Array(savedState.paddedKey) : void 0;
          this._initialState.set(savedState.initialState);
          return this;
        };
        BLAKE2b2.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.state);
          wipe_1.wipe(savedState.buffer);
          wipe_1.wipe(savedState.initialState);
          if (savedState.paddedKey) {
            wipe_1.wipe(savedState.paddedKey);
          }
          savedState.bufferLength = 0;
          wipe_1.wipe(savedState.ctr);
          wipe_1.wipe(savedState.flag);
          savedState.lastNode = false;
        };
        BLAKE2b2.prototype._G = function(v, al, bl, cl, dl, ah, bh, ch, dh, ml0, mh0, ml1, mh1) {
          var vla = v[al], vha = v[ah], vlb = v[bl], vhb = v[bh], vlc = v[cl], vhc = v[ch], vld = v[dl], vhd = v[dh];
          var w = vla & 65535, x = vla >>> 16, y = vha & 65535, z = vha >>> 16;
          w += vlb & 65535;
          x += vlb >>> 16;
          y += vhb & 65535;
          z += vhb >>> 16;
          x += w >>> 16;
          y += x >>> 16;
          z += y >>> 16;
          vha = y & 65535 | z << 16;
          vla = w & 65535 | x << 16;
          w = vla & 65535;
          x = vla >>> 16;
          y = vha & 65535;
          z = vha >>> 16;
          w += ml0 & 65535;
          x += ml0 >>> 16;
          y += mh0 & 65535;
          z += mh0 >>> 16;
          x += w >>> 16;
          y += x >>> 16;
          z += y >>> 16;
          vha = y & 65535 | z << 16;
          vla = w & 65535 | x << 16;
          vld ^= vla;
          vhd ^= vha;
          w = vhd;
          vhd = vld;
          vld = w;
          w = vlc & 65535;
          x = vlc >>> 16;
          y = vhc & 65535;
          z = vhc >>> 16;
          w += vld & 65535;
          x += vld >>> 16;
          y += vhd & 65535;
          z += vhd >>> 16;
          x += w >>> 16;
          y += x >>> 16;
          z += y >>> 16;
          vhc = y & 65535 | z << 16;
          vlc = w & 65535 | x << 16;
          vlb ^= vlc;
          vhb ^= vhc;
          w = vlb << 8 | vhb >>> 24;
          vlb = vhb << 8 | vlb >>> 24;
          vhb = w;
          w = vla & 65535;
          x = vla >>> 16;
          y = vha & 65535;
          z = vha >>> 16;
          w += vlb & 65535;
          x += vlb >>> 16;
          y += vhb & 65535;
          z += vhb >>> 16;
          x += w >>> 16;
          y += x >>> 16;
          z += y >>> 16;
          vha = y & 65535 | z << 16;
          vla = w & 65535 | x << 16;
          w = vla & 65535;
          x = vla >>> 16;
          y = vha & 65535;
          z = vha >>> 16;
          w += ml1 & 65535;
          x += ml1 >>> 16;
          y += mh1 & 65535;
          z += mh1 >>> 16;
          x += w >>> 16;
          y += x >>> 16;
          z += y >>> 16;
          vha = y & 65535 | z << 16;
          vla = w & 65535 | x << 16;
          vld ^= vla;
          vhd ^= vha;
          w = vld << 16 | vhd >>> 16;
          vld = vhd << 16 | vld >>> 16;
          vhd = w;
          w = vlc & 65535;
          x = vlc >>> 16;
          y = vhc & 65535;
          z = vhc >>> 16;
          w += vld & 65535;
          x += vld >>> 16;
          y += vhd & 65535;
          z += vhd >>> 16;
          x += w >>> 16;
          y += x >>> 16;
          z += y >>> 16;
          vhc = y & 65535 | z << 16;
          vlc = w & 65535 | x << 16;
          vlb ^= vlc;
          vhb ^= vhc;
          w = vhb << 1 | vlb >>> 31;
          vlb = vlb << 1 | vhb >>> 31;
          vhb = w;
          v[al] = vla;
          v[ah] = vha;
          v[bl] = vlb;
          v[bh] = vhb;
          v[cl] = vlc;
          v[ch] = vhc;
          v[dl] = vld;
          v[dh] = vhd;
        };
        BLAKE2b2.prototype._incrementCounter = function(n) {
          for (var i = 0; i < 3; i++) {
            var a = this._ctr[i] + n;
            this._ctr[i] = a >>> 0;
            if (this._ctr[i] === a) {
              return;
            }
            n = 1;
          }
        };
        BLAKE2b2.prototype._processBlock = function(length) {
          this._incrementCounter(length);
          var v = this._vtmp;
          v.set(this._state);
          v.set(IV, 16);
          v[12 * 2 + 0] ^= this._ctr[0];
          v[12 * 2 + 1] ^= this._ctr[1];
          v[13 * 2 + 0] ^= this._ctr[2];
          v[13 * 2 + 1] ^= this._ctr[3];
          v[14 * 2 + 0] ^= this._flag[0];
          v[14 * 2 + 1] ^= this._flag[1];
          v[15 * 2 + 0] ^= this._flag[2];
          v[15 * 2 + 1] ^= this._flag[3];
          var m = this._mtmp;
          for (var i = 0; i < 32; i++) {
            m[i] = binary_1.readUint32LE(this._buffer, i * 4);
          }
          for (var r = 0; r < 12; r++) {
            this._G(v, 0, 8, 16, 24, 1, 9, 17, 25, m[SIGMA[r][0]], m[SIGMA[r][0] + 1], m[SIGMA[r][1]], m[SIGMA[r][1] + 1]);
            this._G(v, 2, 10, 18, 26, 3, 11, 19, 27, m[SIGMA[r][2]], m[SIGMA[r][2] + 1], m[SIGMA[r][3]], m[SIGMA[r][3] + 1]);
            this._G(v, 4, 12, 20, 28, 5, 13, 21, 29, m[SIGMA[r][4]], m[SIGMA[r][4] + 1], m[SIGMA[r][5]], m[SIGMA[r][5] + 1]);
            this._G(v, 6, 14, 22, 30, 7, 15, 23, 31, m[SIGMA[r][6]], m[SIGMA[r][6] + 1], m[SIGMA[r][7]], m[SIGMA[r][7] + 1]);
            this._G(v, 0, 10, 20, 30, 1, 11, 21, 31, m[SIGMA[r][8]], m[SIGMA[r][8] + 1], m[SIGMA[r][9]], m[SIGMA[r][9] + 1]);
            this._G(v, 2, 12, 22, 24, 3, 13, 23, 25, m[SIGMA[r][10]], m[SIGMA[r][10] + 1], m[SIGMA[r][11]], m[SIGMA[r][11] + 1]);
            this._G(v, 4, 14, 16, 26, 5, 15, 17, 27, m[SIGMA[r][12]], m[SIGMA[r][12] + 1], m[SIGMA[r][13]], m[SIGMA[r][13] + 1]);
            this._G(v, 6, 8, 18, 28, 7, 9, 19, 29, m[SIGMA[r][14]], m[SIGMA[r][14] + 1], m[SIGMA[r][15]], m[SIGMA[r][15] + 1]);
          }
          for (var i = 0; i < 16; i++) {
            this._state[i] ^= v[i] ^ v[i + 16];
          }
        };
        return BLAKE2b2;
      }()
    );
    exports.BLAKE2b = BLAKE2b;
    function hash4(data, digestLength, config) {
      if (digestLength === void 0) {
        digestLength = exports.DIGEST_LENGTH;
      }
      var h = new BLAKE2b(digestLength, config);
      h.update(data);
      var digest = h.digest();
      h.clean();
      return digest;
    }
    exports.hash = hash4;
  }
});

// node_modules/@stablelib/chacha/lib/chacha.js
var require_chacha = __commonJS({
  "node_modules/@stablelib/chacha/lib/chacha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    var ROUNDS = 20;
    function core(out, input, key) {
      var j0 = 1634760805;
      var j1 = 857760878;
      var j2 = 2036477234;
      var j3 = 1797285236;
      var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
      var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
      var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
      var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
      var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
      var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
      var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
      var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
      var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
      var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
      var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
      var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
      var x0 = j0;
      var x1 = j1;
      var x2 = j2;
      var x3 = j3;
      var x4 = j4;
      var x5 = j5;
      var x6 = j6;
      var x7 = j7;
      var x8 = j8;
      var x9 = j9;
      var x10 = j10;
      var x11 = j11;
      var x12 = j12;
      var x13 = j13;
      var x14 = j14;
      var x15 = j15;
      for (var i = 0; i < ROUNDS; i += 2) {
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 32 - 12 | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 32 - 12 | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 32 - 12 | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 32 - 7 | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 32 - 7 | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 32 - 7 | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 32 - 12 | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 32 - 12 | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 32 - 12 | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 32 - 7 | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 32 - 7 | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 32 - 7 | x5 << 7;
      }
      binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
      binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
      binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
      binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
      binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
      binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
      binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
      binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
      binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
      binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
      binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
      binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
      binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
      binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
      binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
      binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
    }
    function streamXOR3(key, nonce, src, dst, nonceInplaceCounterLength) {
      if (nonceInplaceCounterLength === void 0) {
        nonceInplaceCounterLength = 0;
      }
      if (key.length !== 32) {
        throw new Error("ChaCha: key size must be 32 bytes");
      }
      if (dst.length < src.length) {
        throw new Error("ChaCha: destination is shorter than source");
      }
      var nc;
      var counterLength;
      if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) {
          throw new Error("ChaCha nonce must be 8 or 12 bytes");
        }
        nc = new Uint8Array(16);
        counterLength = nc.length - nonce.length;
        nc.set(nonce, counterLength);
      } else {
        if (nonce.length !== 16) {
          throw new Error("ChaCha nonce with counter must be 16 bytes");
        }
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
      }
      var block = new Uint8Array(64);
      for (var i = 0; i < src.length; i += 64) {
        core(block, nc, key);
        for (var j = i; j < i + 64 && j < src.length; j++) {
          dst[j] = src[j] ^ block[j - i];
        }
        incrementCounter(nc, 0, counterLength);
      }
      wipe_1.wipe(block);
      if (nonceInplaceCounterLength === 0) {
        wipe_1.wipe(nc);
      }
      return dst;
    }
    exports.streamXOR = streamXOR3;
    function stream(key, nonce, dst, nonceInplaceCounterLength) {
      if (nonceInplaceCounterLength === void 0) {
        nonceInplaceCounterLength = 0;
      }
      wipe_1.wipe(dst);
      return streamXOR3(key, nonce, dst, dst, nonceInplaceCounterLength);
    }
    exports.stream = stream;
    function incrementCounter(counter, pos, len) {
      var carry = 1;
      while (len--) {
        carry = carry + (counter[pos] & 255) | 0;
        counter[pos] = carry & 255;
        carry >>>= 8;
        pos++;
      }
      if (carry > 0) {
        throw new Error("ChaCha: counter overflow");
      }
    }
  }
});

// node_modules/@stablelib/xchacha20/lib/xchacha20.js
var require_xchacha20 = __commonJS({
  "node_modules/@stablelib/xchacha20/lib/xchacha20.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    var chacha_1 = require_chacha();
    var ROUNDS = 20;
    function streamXOR3(key, nonce, src, dst) {
      if (nonce.length !== 24) {
        throw new Error("XChaCha20 nonce must be 24 bytes");
      }
      var subkey = hchacha(key, nonce.subarray(0, 16), new Uint8Array(32));
      var modifiedNonce = new Uint8Array(12);
      modifiedNonce.set(nonce.subarray(16), 4);
      var result = chacha_1.streamXOR(subkey, modifiedNonce, src, dst);
      wipe_1.wipe(subkey);
      return result;
    }
    exports.streamXOR = streamXOR3;
    function stream(key, nonce, dst) {
      wipe_1.wipe(dst);
      return streamXOR3(key, nonce, dst, dst);
    }
    exports.stream = stream;
    function hchacha(key, src, dst) {
      var j0 = 1634760805;
      var j1 = 857760878;
      var j2 = 2036477234;
      var j3 = 1797285236;
      var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
      var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
      var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
      var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
      var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
      var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
      var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
      var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
      var j12 = src[3] << 24 | src[2] << 16 | src[1] << 8 | src[0];
      var j13 = src[7] << 24 | src[6] << 16 | src[5] << 8 | src[4];
      var j14 = src[11] << 24 | src[10] << 16 | src[9] << 8 | src[8];
      var j15 = src[15] << 24 | src[14] << 16 | src[13] << 8 | src[12];
      var x0 = j0;
      var x1 = j1;
      var x2 = j2;
      var x3 = j3;
      var x4 = j4;
      var x5 = j5;
      var x6 = j6;
      var x7 = j7;
      var x8 = j8;
      var x9 = j9;
      var x10 = j10;
      var x11 = j11;
      var x12 = j12;
      var x13 = j13;
      var x14 = j14;
      var x15 = j15;
      for (var i = 0; i < ROUNDS; i += 2) {
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 32 - 12 | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 32 - 12 | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 32 - 12 | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 32 - 7 | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 32 - 7 | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 32 - 7 | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 32 - 16 | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 32 - 12 | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 16 | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 32 - 12 | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 32 - 16 | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 12 | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 32 - 16 | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 32 - 12 | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 32 - 8 | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 32 - 7 | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 32 - 8 | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 32 - 7 | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 32 - 8 | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 32 - 7 | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 32 - 8 | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 32 - 7 | x5 << 7;
      }
      binary_1.writeUint32LE(x0, dst, 0);
      binary_1.writeUint32LE(x1, dst, 4);
      binary_1.writeUint32LE(x2, dst, 8);
      binary_1.writeUint32LE(x3, dst, 12);
      binary_1.writeUint32LE(x12, dst, 16);
      binary_1.writeUint32LE(x13, dst, 20);
      binary_1.writeUint32LE(x14, dst, 24);
      binary_1.writeUint32LE(x15, dst, 28);
      return dst;
    }
    exports.hchacha = hchacha;
  }
});

// node_modules/@stablelib/random/lib/source/browser.js
var require_browser = __commonJS({
  "node_modules/@stablelib/random/lib/source/browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserRandomSource = void 0;
    var QUOTA = 65536;
    var BrowserRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
          this._crypto = browserCrypto;
          this.isAvailable = true;
          this.isInstantiated = true;
        }
      }
      randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Browser random byte generator is not available.");
        }
        const out = new Uint8Array(length);
        for (let i = 0; i < out.length; i += QUOTA) {
          this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
        }
        return out;
      }
    };
    exports.BrowserRandomSource = BrowserRandomSource;
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// node_modules/@stablelib/random/lib/source/node.js
var require_node = __commonJS({
  "node_modules/@stablelib/random/lib/source/node.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeRandomSource = void 0;
    var wipe_1 = require_wipe();
    var NodeRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        if (typeof __require !== "undefined") {
          const nodeCrypto = require_crypto();
          if (nodeCrypto && nodeCrypto.randomBytes) {
            this._crypto = nodeCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
          }
        }
      }
      randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Node.js random byte generator is not available.");
        }
        let buffer = this._crypto.randomBytes(length);
        if (buffer.length !== length) {
          throw new Error("NodeRandomSource: got fewer bytes than requested");
        }
        const out = new Uint8Array(length);
        for (let i = 0; i < out.length; i++) {
          out[i] = buffer[i];
        }
        (0, wipe_1.wipe)(buffer);
        return out;
      }
    };
    exports.NodeRandomSource = NodeRandomSource;
  }
});

// node_modules/@stablelib/random/lib/source/system.js
var require_system = __commonJS({
  "node_modules/@stablelib/random/lib/source/system.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SystemRandomSource = void 0;
    var browser_1 = require_browser();
    var node_1 = require_node();
    var SystemRandomSource = class {
      constructor() {
        this.isAvailable = false;
        this.name = "";
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Browser";
          return;
        }
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Node";
          return;
        }
      }
      randomBytes(length) {
        if (!this.isAvailable) {
          throw new Error("System random byte generator is not available.");
        }
        return this._source.randomBytes(length);
      }
    };
    exports.SystemRandomSource = SystemRandomSource;
  }
});

// node_modules/@stablelib/random/lib/random.js
var require_random = __commonJS({
  "node_modules/@stablelib/random/lib/random.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
    var system_1 = require_system();
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.defaultRandomSource = new system_1.SystemRandomSource();
    function randomBytes(length, prng = exports.defaultRandomSource) {
      return prng.randomBytes(length);
    }
    exports.randomBytes = randomBytes;
    function randomUint32(prng = exports.defaultRandomSource) {
      const buf = randomBytes(4, prng);
      const result = (0, binary_1.readUint32LE)(buf);
      (0, wipe_1.wipe)(buf);
      return result;
    }
    exports.randomUint32 = randomUint32;
    var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
      if (charset.length < 2) {
        throw new Error("randomString charset is too short");
      }
      if (charset.length > 256) {
        throw new Error("randomString charset is too long");
      }
      let out = "";
      const charsLen = charset.length;
      const maxByte = 256 - 256 % charsLen;
      while (length > 0) {
        const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
        for (let i = 0; i < buf.length && length > 0; i++) {
          const randomByte = buf[i];
          if (randomByte < maxByte) {
            out += charset.charAt(randomByte % charsLen);
            length--;
          }
        }
        (0, wipe_1.wipe)(buf);
      }
      return out;
    }
    exports.randomString = randomString;
    function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
      const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
      return randomString(length, charset, prng);
    }
    exports.randomStringForEntropy = randomStringForEntropy;
  }
});

// node_modules/@stablelib/sha512/lib/sha512.js
var require_sha512 = __commonJS({
  "node_modules/@stablelib/sha512/lib/sha512.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 64;
    exports.BLOCK_SIZE = 128;
    var SHA512 = (
      /** @class */
      function() {
        function SHA5122() {
          this.digestLength = exports.DIGEST_LENGTH;
          this.blockSize = exports.BLOCK_SIZE;
          this._stateHi = new Int32Array(8);
          this._stateLo = new Int32Array(8);
          this._tempHi = new Int32Array(16);
          this._tempLo = new Int32Array(16);
          this._buffer = new Uint8Array(256);
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          this.reset();
        }
        SHA5122.prototype._initState = function() {
          this._stateHi[0] = 1779033703;
          this._stateHi[1] = 3144134277;
          this._stateHi[2] = 1013904242;
          this._stateHi[3] = 2773480762;
          this._stateHi[4] = 1359893119;
          this._stateHi[5] = 2600822924;
          this._stateHi[6] = 528734635;
          this._stateHi[7] = 1541459225;
          this._stateLo[0] = 4089235720;
          this._stateLo[1] = 2227873595;
          this._stateLo[2] = 4271175723;
          this._stateLo[3] = 1595750129;
          this._stateLo[4] = 2917565137;
          this._stateLo[5] = 725511199;
          this._stateLo[6] = 4215389547;
          this._stateLo[7] = 327033209;
        };
        SHA5122.prototype.reset = function() {
          this._initState();
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._tempHi);
          wipe_1.wipe(this._tempLo);
          this.reset();
        };
        SHA5122.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
              this._buffer[this._bufferLength++] = data[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          return this;
        };
        SHA5122.prototype.finish = function(out) {
          if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 536870912 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 128 < 112 ? 128 : 256;
            this._buffer[left] = 128;
            for (var i = left + 1; i < padLength - 8; i++) {
              this._buffer[i] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
          }
          for (var i = 0; i < this.digestLength / 8; i++) {
            binary_1.writeUint32BE(this._stateHi[i], out, i * 8);
            binary_1.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
          }
          return this;
        };
        SHA5122.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        SHA5122.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
          }
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        };
        SHA5122.prototype.restoreState = function(savedState) {
          this._stateHi.set(savedState.stateHi);
          this._stateLo.set(savedState.stateLo);
          this._bufferLength = savedState.bufferLength;
          if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
          }
          this._bytesHashed = savedState.bytesHashed;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.stateHi);
          wipe_1.wipe(savedState.stateLo);
          if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
          }
          savedState.bufferLength = 0;
          savedState.bytesHashed = 0;
        };
        return SHA5122;
      }()
    );
    exports.SHA512 = SHA512;
    var K = new Int32Array([
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ]);
    function hashBlocks(wh, wl, hh, hl, m, pos, len) {
      var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
      var h, l;
      var th, tl;
      var a, b, c, d;
      while (len >= 128) {
        for (var i = 0; i < 16; i++) {
          var j = 8 * i + pos;
          wh[i] = binary_1.readUint32BE(m, j);
          wl[i] = binary_1.readUint32BE(m, j + 4);
        }
        for (var i = 0; i < 80; i++) {
          var bh0 = ah0;
          var bh1 = ah1;
          var bh2 = ah2;
          var bh3 = ah3;
          var bh4 = ah4;
          var bh5 = ah5;
          var bh6 = ah6;
          var bh7 = ah7;
          var bl0 = al0;
          var bl1 = al1;
          var bl2 = al2;
          var bl3 = al3;
          var bl4 = al4;
          var bl5 = al5;
          var bl6 = al6;
          var bl7 = al7;
          h = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
          l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          h = ah4 & ah5 ^ ~ah4 & ah6;
          l = al4 & al5 ^ ~al4 & al6;
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          h = K[i * 2];
          l = K[i * 2 + 1];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          h = wh[i % 16];
          l = wl[i % 16];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          th = c & 65535 | d << 16;
          tl = a & 65535 | b << 16;
          h = th;
          l = tl;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
          l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
          l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          bh7 = c & 65535 | d << 16;
          bl7 = a & 65535 | b << 16;
          h = bh3;
          l = bl3;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = th;
          l = tl;
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          bh3 = c & 65535 | d << 16;
          bl3 = a & 65535 | b << 16;
          ah1 = bh0;
          ah2 = bh1;
          ah3 = bh2;
          ah4 = bh3;
          ah5 = bh4;
          ah6 = bh5;
          ah7 = bh6;
          ah0 = bh7;
          al1 = bl0;
          al2 = bl1;
          al3 = bl2;
          al4 = bl3;
          al5 = bl4;
          al6 = bl5;
          al7 = bl6;
          al0 = bl7;
          if (i % 16 === 15) {
            for (var j = 0; j < 16; j++) {
              h = wh[j];
              l = wl[j];
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d = h >>> 16;
              h = wh[(j + 9) % 16];
              l = wl[(j + 9) % 16];
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              th = wh[(j + 1) % 16];
              tl = wl[(j + 1) % 16];
              h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
              l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              th = wh[(j + 14) % 16];
              tl = wl[(j + 14) % 16];
              h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
              l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              wh[j] = c & 65535 | d << 16;
              wl[j] = a & 65535 | b << 16;
            }
          }
        }
        h = ah0;
        l = al0;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[0];
        l = hl[0];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[0] = ah0 = c & 65535 | d << 16;
        hl[0] = al0 = a & 65535 | b << 16;
        h = ah1;
        l = al1;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[1];
        l = hl[1];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[1] = ah1 = c & 65535 | d << 16;
        hl[1] = al1 = a & 65535 | b << 16;
        h = ah2;
        l = al2;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[2];
        l = hl[2];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[2] = ah2 = c & 65535 | d << 16;
        hl[2] = al2 = a & 65535 | b << 16;
        h = ah3;
        l = al3;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[3];
        l = hl[3];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[3] = ah3 = c & 65535 | d << 16;
        hl[3] = al3 = a & 65535 | b << 16;
        h = ah4;
        l = al4;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[4];
        l = hl[4];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[4] = ah4 = c & 65535 | d << 16;
        hl[4] = al4 = a & 65535 | b << 16;
        h = ah5;
        l = al5;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[5];
        l = hl[5];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[5] = ah5 = c & 65535 | d << 16;
        hl[5] = al5 = a & 65535 | b << 16;
        h = ah6;
        l = al6;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[6];
        l = hl[6];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[6] = ah6 = c & 65535 | d << 16;
        hl[6] = al6 = a & 65535 | b << 16;
        h = ah7;
        l = al7;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = hh[7];
        l = hl[7];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[7] = ah7 = c & 65535 | d << 16;
        hl[7] = al7 = a & 65535 | b << 16;
        pos += 128;
        len -= 128;
      }
      return pos;
    }
    function hash4(data) {
      var h = new SHA512();
      h.update(data);
      var digest = h.digest();
      h.clean();
      return digest;
    }
    exports.hash = hash4;
  }
});

// node_modules/@stablelib/ed25519/lib/ed25519.js
var require_ed25519 = __commonJS({
  "node_modules/@stablelib/ed25519/lib/ed25519.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
    var random_1 = require_random();
    var sha512_1 = require_sha512();
    var wipe_1 = require_wipe();
    exports.SIGNATURE_LENGTH = 64;
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 64;
    exports.SEED_LENGTH = 32;
    function gf(init) {
      const r = new Float64Array(16);
      if (init) {
        for (let i = 0; i < init.length; i++) {
          r[i] = init[i];
        }
      }
      return r;
    }
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf();
    var gf1 = gf([1]);
    var D = gf([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]);
    var D2 = gf([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]);
    var X = gf([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]);
    var Y = gf([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]);
    var I = gf([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function set25519(r, a) {
      for (let i = 0; i < 16; i++) {
        r[i] = a[i] | 0;
      }
    }
    function car25519(o) {
      let c = 1;
      for (let i = 0; i < 16; i++) {
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
      }
      o[0] += c - 1 + 37 * (c - 1);
    }
    function sel25519(p, q, b) {
      const c = ~(b - 1);
      for (let i = 0; i < 16; i++) {
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
      }
    }
    function pack25519(o, n) {
      const m = gf();
      const t = gf();
      for (let i = 0; i < 16; i++) {
        t[i] = n[i];
      }
      car25519(t);
      car25519(t);
      car25519(t);
      for (let j = 0; j < 2; j++) {
        m[0] = t[0] - 65517;
        for (let i = 1; i < 15; i++) {
          m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
          m[i - 1] &= 65535;
        }
        m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
        const b = m[15] >> 16 & 1;
        m[14] &= 65535;
        sel25519(t, m, 1 - b);
      }
      for (let i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 255;
        o[2 * i + 1] = t[i] >> 8;
      }
    }
    function verify32(x, y) {
      let d = 0;
      for (let i = 0; i < 32; i++) {
        d |= x[i] ^ y[i];
      }
      return (1 & d - 1 >>> 8) - 1;
    }
    function neq25519(a, b) {
      const c = new Uint8Array(32);
      const d = new Uint8Array(32);
      pack25519(c, a);
      pack25519(d, b);
      return verify32(c, d);
    }
    function par25519(a) {
      const d = new Uint8Array(32);
      pack25519(d, a);
      return d[0] & 1;
    }
    function unpack25519(o, n) {
      for (let i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
      }
      o[15] &= 32767;
    }
    function add(o, a, b) {
      for (let i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
      }
    }
    function sub(o, a, b) {
      for (let i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
      }
    }
    function mul(o, a, b) {
      let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
      v = a[0];
      t0 += v * b0;
      t1 += v * b1;
      t2 += v * b2;
      t3 += v * b3;
      t4 += v * b4;
      t5 += v * b5;
      t6 += v * b6;
      t7 += v * b7;
      t8 += v * b8;
      t9 += v * b9;
      t10 += v * b10;
      t11 += v * b11;
      t12 += v * b12;
      t13 += v * b13;
      t14 += v * b14;
      t15 += v * b15;
      v = a[1];
      t1 += v * b0;
      t2 += v * b1;
      t3 += v * b2;
      t4 += v * b3;
      t5 += v * b4;
      t6 += v * b5;
      t7 += v * b6;
      t8 += v * b7;
      t9 += v * b8;
      t10 += v * b9;
      t11 += v * b10;
      t12 += v * b11;
      t13 += v * b12;
      t14 += v * b13;
      t15 += v * b14;
      t16 += v * b15;
      v = a[2];
      t2 += v * b0;
      t3 += v * b1;
      t4 += v * b2;
      t5 += v * b3;
      t6 += v * b4;
      t7 += v * b5;
      t8 += v * b6;
      t9 += v * b7;
      t10 += v * b8;
      t11 += v * b9;
      t12 += v * b10;
      t13 += v * b11;
      t14 += v * b12;
      t15 += v * b13;
      t16 += v * b14;
      t17 += v * b15;
      v = a[3];
      t3 += v * b0;
      t4 += v * b1;
      t5 += v * b2;
      t6 += v * b3;
      t7 += v * b4;
      t8 += v * b5;
      t9 += v * b6;
      t10 += v * b7;
      t11 += v * b8;
      t12 += v * b9;
      t13 += v * b10;
      t14 += v * b11;
      t15 += v * b12;
      t16 += v * b13;
      t17 += v * b14;
      t18 += v * b15;
      v = a[4];
      t4 += v * b0;
      t5 += v * b1;
      t6 += v * b2;
      t7 += v * b3;
      t8 += v * b4;
      t9 += v * b5;
      t10 += v * b6;
      t11 += v * b7;
      t12 += v * b8;
      t13 += v * b9;
      t14 += v * b10;
      t15 += v * b11;
      t16 += v * b12;
      t17 += v * b13;
      t18 += v * b14;
      t19 += v * b15;
      v = a[5];
      t5 += v * b0;
      t6 += v * b1;
      t7 += v * b2;
      t8 += v * b3;
      t9 += v * b4;
      t10 += v * b5;
      t11 += v * b6;
      t12 += v * b7;
      t13 += v * b8;
      t14 += v * b9;
      t15 += v * b10;
      t16 += v * b11;
      t17 += v * b12;
      t18 += v * b13;
      t19 += v * b14;
      t20 += v * b15;
      v = a[6];
      t6 += v * b0;
      t7 += v * b1;
      t8 += v * b2;
      t9 += v * b3;
      t10 += v * b4;
      t11 += v * b5;
      t12 += v * b6;
      t13 += v * b7;
      t14 += v * b8;
      t15 += v * b9;
      t16 += v * b10;
      t17 += v * b11;
      t18 += v * b12;
      t19 += v * b13;
      t20 += v * b14;
      t21 += v * b15;
      v = a[7];
      t7 += v * b0;
      t8 += v * b1;
      t9 += v * b2;
      t10 += v * b3;
      t11 += v * b4;
      t12 += v * b5;
      t13 += v * b6;
      t14 += v * b7;
      t15 += v * b8;
      t16 += v * b9;
      t17 += v * b10;
      t18 += v * b11;
      t19 += v * b12;
      t20 += v * b13;
      t21 += v * b14;
      t22 += v * b15;
      v = a[8];
      t8 += v * b0;
      t9 += v * b1;
      t10 += v * b2;
      t11 += v * b3;
      t12 += v * b4;
      t13 += v * b5;
      t14 += v * b6;
      t15 += v * b7;
      t16 += v * b8;
      t17 += v * b9;
      t18 += v * b10;
      t19 += v * b11;
      t20 += v * b12;
      t21 += v * b13;
      t22 += v * b14;
      t23 += v * b15;
      v = a[9];
      t9 += v * b0;
      t10 += v * b1;
      t11 += v * b2;
      t12 += v * b3;
      t13 += v * b4;
      t14 += v * b5;
      t15 += v * b6;
      t16 += v * b7;
      t17 += v * b8;
      t18 += v * b9;
      t19 += v * b10;
      t20 += v * b11;
      t21 += v * b12;
      t22 += v * b13;
      t23 += v * b14;
      t24 += v * b15;
      v = a[10];
      t10 += v * b0;
      t11 += v * b1;
      t12 += v * b2;
      t13 += v * b3;
      t14 += v * b4;
      t15 += v * b5;
      t16 += v * b6;
      t17 += v * b7;
      t18 += v * b8;
      t19 += v * b9;
      t20 += v * b10;
      t21 += v * b11;
      t22 += v * b12;
      t23 += v * b13;
      t24 += v * b14;
      t25 += v * b15;
      v = a[11];
      t11 += v * b0;
      t12 += v * b1;
      t13 += v * b2;
      t14 += v * b3;
      t15 += v * b4;
      t16 += v * b5;
      t17 += v * b6;
      t18 += v * b7;
      t19 += v * b8;
      t20 += v * b9;
      t21 += v * b10;
      t22 += v * b11;
      t23 += v * b12;
      t24 += v * b13;
      t25 += v * b14;
      t26 += v * b15;
      v = a[12];
      t12 += v * b0;
      t13 += v * b1;
      t14 += v * b2;
      t15 += v * b3;
      t16 += v * b4;
      t17 += v * b5;
      t18 += v * b6;
      t19 += v * b7;
      t20 += v * b8;
      t21 += v * b9;
      t22 += v * b10;
      t23 += v * b11;
      t24 += v * b12;
      t25 += v * b13;
      t26 += v * b14;
      t27 += v * b15;
      v = a[13];
      t13 += v * b0;
      t14 += v * b1;
      t15 += v * b2;
      t16 += v * b3;
      t17 += v * b4;
      t18 += v * b5;
      t19 += v * b6;
      t20 += v * b7;
      t21 += v * b8;
      t22 += v * b9;
      t23 += v * b10;
      t24 += v * b11;
      t25 += v * b12;
      t26 += v * b13;
      t27 += v * b14;
      t28 += v * b15;
      v = a[14];
      t14 += v * b0;
      t15 += v * b1;
      t16 += v * b2;
      t17 += v * b3;
      t18 += v * b4;
      t19 += v * b5;
      t20 += v * b6;
      t21 += v * b7;
      t22 += v * b8;
      t23 += v * b9;
      t24 += v * b10;
      t25 += v * b11;
      t26 += v * b12;
      t27 += v * b13;
      t28 += v * b14;
      t29 += v * b15;
      v = a[15];
      t15 += v * b0;
      t16 += v * b1;
      t17 += v * b2;
      t18 += v * b3;
      t19 += v * b4;
      t20 += v * b5;
      t21 += v * b6;
      t22 += v * b7;
      t23 += v * b8;
      t24 += v * b9;
      t25 += v * b10;
      t26 += v * b11;
      t27 += v * b12;
      t28 += v * b13;
      t29 += v * b14;
      t30 += v * b15;
      t0 += 38 * t16;
      t1 += 38 * t17;
      t2 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t22;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c = 1;
      v = t0 + c + 65535;
      c = Math.floor(v / 65536);
      t0 = v - c * 65536;
      v = t1 + c + 65535;
      c = Math.floor(v / 65536);
      t1 = v - c * 65536;
      v = t2 + c + 65535;
      c = Math.floor(v / 65536);
      t2 = v - c * 65536;
      v = t3 + c + 65535;
      c = Math.floor(v / 65536);
      t3 = v - c * 65536;
      v = t4 + c + 65535;
      c = Math.floor(v / 65536);
      t4 = v - c * 65536;
      v = t5 + c + 65535;
      c = Math.floor(v / 65536);
      t5 = v - c * 65536;
      v = t6 + c + 65535;
      c = Math.floor(v / 65536);
      t6 = v - c * 65536;
      v = t7 + c + 65535;
      c = Math.floor(v / 65536);
      t7 = v - c * 65536;
      v = t8 + c + 65535;
      c = Math.floor(v / 65536);
      t8 = v - c * 65536;
      v = t9 + c + 65535;
      c = Math.floor(v / 65536);
      t9 = v - c * 65536;
      v = t10 + c + 65535;
      c = Math.floor(v / 65536);
      t10 = v - c * 65536;
      v = t11 + c + 65535;
      c = Math.floor(v / 65536);
      t11 = v - c * 65536;
      v = t12 + c + 65535;
      c = Math.floor(v / 65536);
      t12 = v - c * 65536;
      v = t13 + c + 65535;
      c = Math.floor(v / 65536);
      t13 = v - c * 65536;
      v = t14 + c + 65535;
      c = Math.floor(v / 65536);
      t14 = v - c * 65536;
      v = t15 + c + 65535;
      c = Math.floor(v / 65536);
      t15 = v - c * 65536;
      t0 += c - 1 + 37 * (c - 1);
      c = 1;
      v = t0 + c + 65535;
      c = Math.floor(v / 65536);
      t0 = v - c * 65536;
      v = t1 + c + 65535;
      c = Math.floor(v / 65536);
      t1 = v - c * 65536;
      v = t2 + c + 65535;
      c = Math.floor(v / 65536);
      t2 = v - c * 65536;
      v = t3 + c + 65535;
      c = Math.floor(v / 65536);
      t3 = v - c * 65536;
      v = t4 + c + 65535;
      c = Math.floor(v / 65536);
      t4 = v - c * 65536;
      v = t5 + c + 65535;
      c = Math.floor(v / 65536);
      t5 = v - c * 65536;
      v = t6 + c + 65535;
      c = Math.floor(v / 65536);
      t6 = v - c * 65536;
      v = t7 + c + 65535;
      c = Math.floor(v / 65536);
      t7 = v - c * 65536;
      v = t8 + c + 65535;
      c = Math.floor(v / 65536);
      t8 = v - c * 65536;
      v = t9 + c + 65535;
      c = Math.floor(v / 65536);
      t9 = v - c * 65536;
      v = t10 + c + 65535;
      c = Math.floor(v / 65536);
      t10 = v - c * 65536;
      v = t11 + c + 65535;
      c = Math.floor(v / 65536);
      t11 = v - c * 65536;
      v = t12 + c + 65535;
      c = Math.floor(v / 65536);
      t12 = v - c * 65536;
      v = t13 + c + 65535;
      c = Math.floor(v / 65536);
      t13 = v - c * 65536;
      v = t14 + c + 65535;
      c = Math.floor(v / 65536);
      t14 = v - c * 65536;
      v = t15 + c + 65535;
      c = Math.floor(v / 65536);
      t15 = v - c * 65536;
      t0 += c - 1 + 37 * (c - 1);
      o[0] = t0;
      o[1] = t1;
      o[2] = t2;
      o[3] = t3;
      o[4] = t4;
      o[5] = t5;
      o[6] = t6;
      o[7] = t7;
      o[8] = t8;
      o[9] = t9;
      o[10] = t10;
      o[11] = t11;
      o[12] = t12;
      o[13] = t13;
      o[14] = t14;
      o[15] = t15;
    }
    function square(o, a) {
      mul(o, a, a);
    }
    function inv25519(o, i) {
      const c = gf();
      let a;
      for (a = 0; a < 16; a++) {
        c[a] = i[a];
      }
      for (a = 253; a >= 0; a--) {
        square(c, c);
        if (a !== 2 && a !== 4) {
          mul(c, c, i);
        }
      }
      for (a = 0; a < 16; a++) {
        o[a] = c[a];
      }
    }
    function pow2523(o, i) {
      const c = gf();
      let a;
      for (a = 0; a < 16; a++) {
        c[a] = i[a];
      }
      for (a = 250; a >= 0; a--) {
        square(c, c);
        if (a !== 1) {
          mul(c, c, i);
        }
      }
      for (a = 0; a < 16; a++) {
        o[a] = c[a];
      }
    }
    function edadd(p, q) {
      const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
      sub(a, p[1], p[0]);
      sub(t, q[1], q[0]);
      mul(a, a, t);
      add(b, p[0], p[1]);
      add(t, q[0], q[1]);
      mul(b, b, t);
      mul(c, p[3], q[3]);
      mul(c, c, D2);
      mul(d, p[2], q[2]);
      add(d, d, d);
      sub(e, b, a);
      sub(f, d, c);
      add(g, d, c);
      add(h, b, a);
      mul(p[0], e, f);
      mul(p[1], h, g);
      mul(p[2], g, f);
      mul(p[3], e, h);
    }
    function cswap(p, q, b) {
      for (let i = 0; i < 4; i++) {
        sel25519(p[i], q[i], b);
      }
    }
    function pack(r, p) {
      const tx = gf(), ty = gf(), zi = gf();
      inv25519(zi, p[2]);
      mul(tx, p[0], zi);
      mul(ty, p[1], zi);
      pack25519(r, ty);
      r[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p, q, s) {
      set25519(p[0], gf0);
      set25519(p[1], gf1);
      set25519(p[2], gf1);
      set25519(p[3], gf0);
      for (let i = 255; i >= 0; --i) {
        const b = s[i / 8 | 0] >> (i & 7) & 1;
        cswap(p, q, b);
        edadd(q, p);
        edadd(p, p);
        cswap(p, q, b);
      }
    }
    function scalarbase(p, s) {
      const q = [gf(), gf(), gf(), gf()];
      set25519(q[0], X);
      set25519(q[1], Y);
      set25519(q[2], gf1);
      mul(q[3], X, Y);
      scalarmult(p, q, s);
    }
    function generateKeyPairFromSeed(seed) {
      if (seed.length !== exports.SEED_LENGTH) {
        throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
      }
      const d = (0, sha512_1.hash)(seed);
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      const publicKey = new Uint8Array(32);
      const p = [gf(), gf(), gf(), gf()];
      scalarbase(p, d);
      pack(publicKey, p);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey, 32);
      return {
        publicKey,
        secretKey
      };
    }
    exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
    function generateKeyPair2(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed(seed);
      (0, wipe_1.wipe)(seed);
      return result;
    }
    exports.generateKeyPair = generateKeyPair2;
    function extractPublicKeyFromSecretKey(secretKey) {
      if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
      }
      return new Uint8Array(secretKey.subarray(32));
    }
    exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
    var L = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function modL(r, x) {
      let carry;
      let i;
      let j;
      let k;
      for (i = 63; i >= 32; --i) {
        carry = 0;
        for (j = i - 32, k = i - 12; j < k; ++j) {
          x[j] += carry - 16 * x[i] * L[j - (i - 32)];
          carry = Math.floor((x[j] + 128) / 256);
          x[j] -= carry * 256;
        }
        x[j] += carry;
        x[i] = 0;
      }
      carry = 0;
      for (j = 0; j < 32; j++) {
        x[j] += carry - (x[31] >> 4) * L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
      }
      for (j = 0; j < 32; j++) {
        x[j] -= carry * L[j];
      }
      for (i = 0; i < 32; i++) {
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
      }
    }
    function reduce(r) {
      const x = new Float64Array(64);
      for (let i = 0; i < 64; i++) {
        x[i] = r[i];
      }
      for (let i = 0; i < 64; i++) {
        r[i] = 0;
      }
      modL(r, x);
    }
    function sign2(secretKey, message) {
      const x = new Float64Array(64);
      const p = [gf(), gf(), gf(), gf()];
      const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      const signature = new Uint8Array(64);
      signature.set(d.subarray(32), 32);
      const hs = new sha512_1.SHA512();
      hs.update(signature.subarray(32));
      hs.update(message);
      const r = hs.digest();
      hs.clean();
      reduce(r);
      scalarbase(p, r);
      pack(signature, p);
      hs.reset();
      hs.update(signature.subarray(0, 32));
      hs.update(secretKey.subarray(32));
      hs.update(message);
      const h = hs.digest();
      reduce(h);
      for (let i = 0; i < 32; i++) {
        x[i] = r[i];
      }
      for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
          x[i + j] += h[i] * d[j];
        }
      }
      modL(signature.subarray(32), x);
      return signature;
    }
    exports.sign = sign2;
    function unpackneg(r, p) {
      const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
      set25519(r[2], gf1);
      unpack25519(r[1], p);
      square(num, r[1]);
      mul(den, num, D);
      sub(num, num, r[2]);
      add(den, r[2], den);
      square(den2, den);
      square(den4, den2);
      mul(den6, den4, den2);
      mul(t, den6, num);
      mul(t, t, den);
      pow2523(t, t);
      mul(t, t, num);
      mul(t, t, den);
      mul(t, t, den);
      mul(r[0], t, den);
      square(chk, r[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        mul(r[0], r[0], I);
      }
      square(chk, r[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        return -1;
      }
      if (par25519(r[0]) === p[31] >> 7) {
        sub(r[0], gf0, r[0]);
      }
      mul(r[3], r[0], r[1]);
      return 0;
    }
    function verify3(publicKey, message, signature) {
      const t = new Uint8Array(32);
      const p = [gf(), gf(), gf(), gf()];
      const q = [gf(), gf(), gf(), gf()];
      if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
      }
      if (unpackneg(q, publicKey)) {
        return false;
      }
      const hs = new sha512_1.SHA512();
      hs.update(signature.subarray(0, 32));
      hs.update(publicKey);
      hs.update(message);
      const h = hs.digest();
      reduce(h);
      scalarmult(p, q, h);
      scalarbase(q, signature.subarray(32));
      edadd(p, q);
      pack(t, p);
      if (verify32(signature, t)) {
        return false;
      }
      return true;
    }
    exports.verify = verify3;
    function convertPublicKeyToX25519(publicKey) {
      let q = [gf(), gf(), gf(), gf()];
      if (unpackneg(q, publicKey)) {
        throw new Error("Ed25519: invalid public key");
      }
      let a = gf();
      let b = gf();
      let y = q[1];
      add(a, gf1, y);
      sub(b, gf1, y);
      inv25519(b, b);
      mul(a, a, b);
      let z = new Uint8Array(32);
      pack25519(z, a);
      return z;
    }
    exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
    function convertSecretKeyToX25519(secretKey) {
      const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      const o = new Uint8Array(d.subarray(0, 32));
      (0, wipe_1.wipe)(d);
      return o;
    }
    exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
  }
});

// node_modules/hono/dist/utils/body.js
var parseBody = async (r) => {
  let body = {};
  const contentType = r.headers.get("Content-Type");
  if (contentType && (contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded"))) {
    const form = {};
    (await r.formData()).forEach((value, key) => {
      form[key] = value;
    });
    body = form;
  }
  return body;
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (path) => {
  const groups = [];
  for (let i = 0; ; ) {
    let replaced = false;
    path = path.replace(/\{[^}]+\}/g, (m) => {
      const mark = `@\\${i}`;
      groups[i] = [mark, m];
      i++;
      replaced = true;
      return mark;
    });
    if (!replaced) {
      break;
    }
  }
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].indexOf(mark) !== -1) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  const match = path.match(/^(.+|)(\/\:[^\/]+)\?$/);
  if (!match)
    return null;
  const base = match[1];
  const optional = base + match[2];
  return [base === "" ? "/" : base.replace(/\/$/, ""), optional];
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ?? (encoded = /[%+]/.test(url));
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      ;
      (results[name] ?? (results[name] = [])).push(value);
    } else {
      results[name] ?? (results[name] = value);
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/utils/cookie.js
var _parseCookiePairs = (cookie, name) => {
  const pairs = cookie.split(/;\s*/g);
  const cookiePairs = pairs.map((pairStr) => pairStr.split(/\s*=\s*([^\s]+)/));
  if (!name)
    return cookiePairs;
  return cookiePairs.filter((pair) => pair[0] === name);
};
var parse = (cookie, name) => {
  const parsedCookie = {};
  const unsingedCookies = _parseCookiePairs(cookie, name).filter((pair) => {
    if (pair[1].split(".").length === 2)
      return false;
    return true;
  });
  for (let [key, value] of unsingedCookies) {
    value = decodeURIComponent_(value);
    parsedCookie[key] = value;
  }
  return parsedCookie;
};
var _serialize = (name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
  }
  if (opt.domain) {
    cookie += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    cookie += "; Path=" + opt.path;
  }
  if (opt.expires) {
    cookie += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite}`;
  }
  return cookie;
};
var serialize = (name, value, opt = {}) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};

// node_modules/hono/dist/request.js
var HonoRequest = class {
  constructor(request, path = "/", paramData) {
    this.raw = request;
    this.path = path;
    this.paramData = paramData;
    this.vData = {};
  }
  param(key) {
    if (this.paramData) {
      if (key) {
        const param = this.paramData[key];
        return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
      } else {
        const decoded = {};
        for (const [key2, value] of Object.entries(this.paramData)) {
          if (value && typeof value === "string") {
            decoded[key2] = /\%/.test(value) ? decodeURIComponent_(value) : value;
          }
        }
        return decoded;
      }
    }
    return null;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name)
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  cookie(key) {
    const cookie = this.raw.headers.get("Cookie");
    if (!cookie)
      return;
    const obj = parse(cookie);
    if (key) {
      const value = obj[key];
      return value;
    } else {
      return obj;
    }
  }
  async parseBody() {
    return await parseBody(this.raw);
  }
  json() {
    return this.raw.json();
  }
  text() {
    return this.raw.text();
  }
  arrayBuffer() {
    return this.raw.arrayBuffer();
  }
  blob() {
    return this.raw.blob();
  }
  formData() {
    return this.raw.formData();
  }
  addValidatedData(target, data) {
    this.vData[target] = data;
  }
  valid(target) {
    if (target) {
      return this.vData[target];
    }
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get headers() {
    return this.raw.headers;
  }
  get body() {
    return this.raw.body;
  }
  get bodyUsed() {
    return this.raw.bodyUsed;
  }
  get integrity() {
    return this.raw.integrity;
  }
  get keepalive() {
    return this.raw.keepalive;
  }
  get referrer() {
    return this.raw.referrer;
  }
  get signal() {
    return this.raw.signal;
  }
};

// node_modules/hono/dist/types.js
var FetchEventLike = class {
};

// node_modules/hono/dist/context.js
var Context = class {
  constructor(req, options) {
    this.env = {};
    this.finalized = false;
    this.error = void 0;
    this._status = 200;
    this._h = void 0;
    this._pH = void 0;
    this._path = "/";
    this._init = true;
    this.notFoundHandler = () => new Response();
    this.header = (name, value, options2) => {
      if (value === void 0) {
        if (this._h) {
          this._h.delete(name);
        } else if (this._pH) {
          delete this._pH[name.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name);
        }
        return;
      }
      if (options2?.append) {
        if (!this._h) {
          this._init = false;
          this._h = new Headers(this._pH);
          this._pH = {};
        }
        this._h.append(name, value);
      } else {
        if (this._h) {
          this._h.set(name, value);
        } else {
          this._pH ?? (this._pH = {});
          this._pH[name.toLowerCase()] = value;
        }
      }
      if (this.finalized) {
        if (options2?.append) {
          this.res.headers.append(name, value);
        } else {
          this.res.headers.set(name, value);
        }
      }
    };
    this.status = (status) => {
      this._status = status;
    };
    this.set = (key, value) => {
      this._map || (this._map = {});
      this._map[key] = value;
    };
    this.get = (key) => {
      return this._map ? this._map[key] : void 0;
    };
    this.newResponse = (data, arg, headers) => {
      if (this._init && !headers && !arg && this._status === 200) {
        return new Response(data, {
          headers: this._pH
        });
      }
      if (arg && typeof arg !== "number") {
        const res = new Response(data, arg);
        const contentType = this._pH?.["content-type"];
        if (contentType) {
          res.headers.set("content-type", contentType);
        }
        return res;
      }
      const status = arg ?? this._status;
      this._pH ?? (this._pH = {});
      this._h ?? (this._h = new Headers());
      for (const [k, v] of Object.entries(this._pH)) {
        this._h.set(k, v);
      }
      if (this._res) {
        this._res.headers.forEach((v, k) => {
          this._h?.set(k, v);
        });
        for (const [k, v] of Object.entries(this._pH)) {
          this._h.set(k, v);
        }
      }
      headers ?? (headers = {});
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          this._h.set(k, v);
        } else {
          this._h.delete(k);
          for (const v2 of v) {
            this._h.append(k, v2);
          }
        }
      }
      return new Response(data, {
        status,
        headers: this._h
      });
    };
    this.body = (data, arg, headers) => {
      return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
    };
    this.text = (text, arg, headers) => {
      if (!this._pH) {
        if (this._init && !headers && !arg) {
          return new Response(text);
        }
        this._pH = {};
      }
      if (this._pH["content-type"]) {
        this._pH["content-type"] = "text/plain; charset=UTF-8";
      }
      return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
    };
    this.json = (object, arg, headers) => {
      const body = JSON.stringify(object);
      this._pH ?? (this._pH = {});
      this._pH["content-type"] = "application/json; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
    };
    this.jsonT = (object, arg, headers) => {
      return {
        response: typeof arg === "number" ? this.json(object, arg, headers) : this.json(object, arg),
        data: object,
        format: "json"
      };
    };
    this.html = (html, arg, headers) => {
      this._pH ?? (this._pH = {});
      this._pH["content-type"] = "text/html; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
    };
    this.redirect = (location, status = 302) => {
      this._h ?? (this._h = new Headers());
      this._h.set("Location", location);
      return this.newResponse(null, status);
    };
    this.cookie = (name, value, opt) => {
      const cookie = serialize(name, value, opt);
      this.header("set-cookie", cookie, { append: true });
    };
    this.notFound = () => {
      return this.notFoundHandler(this);
    };
    this.rawRequest = req;
    if (options) {
      this._exCtx = options.executionCtx;
      this._path = options.path ?? "/";
      this._params = options.params;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get req() {
    if (this._req) {
      return this._req;
    } else {
      this._req = new HonoRequest(this.rawRequest, this._path, this._params);
      this.rawRequest = void 0;
      this._params = void 0;
      return this._req;
    }
  }
  get event() {
    if (this._exCtx instanceof FetchEventLike) {
      return this._exCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this._exCtx) {
      return this._exCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this._init = false;
    return this._res || (this._res = new Response("404 Not Found", { status: 404 }));
  }
  set res(_res) {
    this._init = false;
    if (this._res && _res) {
      this._res.headers.delete("content-type");
      this._res.headers.forEach((v, k) => {
        _res.headers.set(k, v);
      });
    }
    this._res = _res;
    this.finalized = true;
  }
  get runtime() {
    const global = globalThis;
    if (global?.Deno !== void 0) {
      return "deno";
    }
    if (global?.Bun !== void 0) {
      return "bun";
    }
    if (typeof global?.WebSocketPair === "function") {
      return "workerd";
    }
    if (typeof global?.EdgeRuntime === "string") {
      return "edge-light";
    }
    if (global?.fastly !== void 0) {
      return "fastly";
    }
    if (global?.__lagon__ !== void 0) {
      return "lagon";
    }
    if (global?.process?.release?.name === "node") {
      return "node";
    }
    return "other";
  }
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  const middlewareLength = middleware.length;
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      let handler = middleware[i];
      index = i;
      if (i === middlewareLength && next)
        handler = next;
      let res;
      let isError = false;
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = onNotFound(context);
        }
      } else {
        try {
          res = handler(context, () => {
            const dispatchRes = dispatch(i + 1);
            return dispatchRes instanceof Promise ? dispatchRes : Promise.resolve(dispatchRes);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (!(res instanceof Promise)) {
        if (res !== void 0 && "response" in res) {
          res = res["response"];
        }
        if (res && (context.finalized === false || isError)) {
          context.res = res;
        }
        return context;
      } else {
        return res.then((res2) => {
          if (res2 !== void 0 && "response" in res2) {
            res2 = res2["response"];
          }
          if (res2 && context.finalized === false) {
            context.res = res2;
          }
          return context;
        }).catch(async (err) => {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            context.res = await onError(err, context);
            return context;
          }
          throw err;
        });
      }
    }
  };
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  constructor(status = 500, options) {
    super(options?.message);
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
function defineDynamicClass() {
  return class {
  };
}
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.trace(err);
  const message = "Internal Server Error";
  return c.text(message, 500);
};
var Hono = class extends defineDynamicClass() {
  constructor(init = {}) {
    super();
    this._basePath = "/";
    this.path = "/";
    this.routes = [];
    this.notFoundHandler = notFoundHandler;
    this.errorHandler = errorHandler;
    this.head = () => {
      console.warn("`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method.");
      return this;
    };
    this.handleEvent = (event) => {
      return this.dispatch(event.request, event, void 0, event.request.method);
    };
    this.fetch = (request, Env, executionCtx) => {
      return this.dispatch(request, executionCtx, Env, request.method);
    };
    this.request = (input, requestInit) => {
      if (input instanceof Request) {
        if (requestInit !== void 0) {
          input = new Request(input, requestInit);
        }
        return this.fetch(input);
      }
      input = input.toString();
      const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
      const req = new Request(path, requestInit);
      return this.fetch(req);
    };
    this.fire = () => {
      addEventListener("fetch", (event) => {
        event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
      });
    };
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.path = args1;
        } else {
          this.addRoute(method, this.path, args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method)
        return this;
      this.path = path;
      for (const m of [method].flat()) {
        handlers.map((handler) => {
          this.addRoute(m.toUpperCase(), this.path, handler);
        });
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.path = arg1;
      } else {
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.path, handler);
      });
      return this;
    };
    const strict = init.strict ?? true;
    delete init.strict;
    Object.assign(this, init);
    this.getPath = strict ? init.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  route(path, app2) {
    const subApp = this.basePath(path);
    if (!app2) {
      return subApp;
    }
    app2.routes.map((r) => {
      const handler = app2.errorHandler === errorHandler ? r.handler : async (c, next) => (await compose([r.handler], app2.errorHandler)(c, next)).res;
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError(handler) {
    this.errorHandler = handler;
    return this;
  }
  notFound(handler) {
    this.notFoundHandler = handler;
    return this;
  }
  showRoutes() {
    const length = 8;
    this.routes.map((route) => {
      console.log(
        `\x1B[32m${route.method}\x1B[0m ${" ".repeat(length - route.method.length)} ${route.path}`
      );
    });
  }
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(
        new Request(
          new URL((c.req.path.slice(pathPrefixLength) || "/") + queryStrings, c.req.url),
          c.req.raw
        ),
        ...optionsArray
      );
      if (res)
        return res;
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  get routerName() {
    this.matchRoute("GET", "/");
    return this.router.name;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    if (this._basePath) {
      path = mergePath(this._basePath, path);
    }
    this.router.add(method, path, handler);
    const r = { path, method, handler };
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path) || { handlers: [], params: {} };
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    const path = this.getPath(request);
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const { handlers, params } = this.matchRoute(method, path);
    const c = new Context(request, {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler,
      path,
      params
    });
    if (handlers.length === 1) {
      let res;
      try {
        res = handlers[0](c, async () => {
        });
        if (!res) {
          return this.notFoundHandler(c);
        }
      } catch (err) {
        return this.handleError(err, c);
      }
      if (res.constructor.name === "Response")
        return res;
      if ("response" in res) {
        res = res.response;
      }
      if (res.constructor.name === "Response")
        return res;
      return (async () => {
        let awaited;
        try {
          awaited = await res;
          if (awaited !== void 0 && "response" in awaited) {
            awaited = awaited["response"];
          }
          if (!awaited) {
            return this.notFoundHandler(c);
          }
        } catch (err) {
          return this.handleError(err, c);
        }
        return awaited;
      })();
    }
    const composed = compose(handlers, this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const tmp = composed(c);
        const context = tmp.constructor.name === "Promise" ? await tmp : tmp;
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  constructor() {
    this.children = {};
  }
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      const regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        if (paramMap.some((p) => p[0] === name)) {
          throw new Error("Duplicate param name");
        }
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  constructor() {
    this.context = { varIndex: 0 };
    this.root = new Node();
  }
  insert(path, index, pathErrorCheckOnly) {
    const paramMap = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramMap, this.context, pathErrorCheckOnly);
    return paramMap;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) => method.toUpperCase());
var emptyParam = {};
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ?? (wildcardRegExpCache[path] = new RegExp(
    path === "*" ? "" : `^${path.replace(/\/\*/, "(?:|/.*)")}$`
  ));
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = {};
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = {};
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = { handlers, params: emptyParam };
    } else {
      j++;
    }
    let paramMap;
    try {
      paramMap = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = paramMap.length === 0 ? [{ handlers, params: emptyParam }, null] : [handlers, paramMap];
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    const paramMap = handlerData[i][1];
    if (paramMap) {
      for (let j = 0, len2 = paramMap.length; j < len2; j++) {
        paramMap[j][1] = paramReplacementMap[paramMap[j][1]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  constructor() {
    this.name = "RegExpRouter";
    this.middleware = { [METHOD_NAME_ALL]: {} };
    this.routes = { [METHOD_NAME_ALL]: {} };
  }
  add(method, path, handler) {
    var _a;
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error("Can not add a route since the matcher is already built.");
    }
    if (methodNames.indexOf(method) === -1)
      methodNames.push(method);
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = {};
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          var _a2;
          (_a2 = middleware[m])[path] || (_a2[path] = findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
        });
      } else {
        (_a = middleware[method])[path] || (_a[path] = findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push(handler);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push(handler));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        var _a2;
        if (method === METHOD_NAME_ALL || method === m) {
          (_a2 = routes[m])[path2] || (_a2[path2] = [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ]);
          routes[m][path2].push(handler);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return null;
      }
      const index = match.indexOf("", 1);
      const [handlers, paramMap] = matcher[1][index];
      if (!paramMap) {
        return handlers;
      }
      const params = {};
      for (let i = 0, len = paramMap.length; i < len; i++) {
        params[paramMap[i][0]] = match[paramMap[i][1]];
      }
      return { handlers, params };
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = {};
    methodNames.forEach((method) => {
      matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute || (hasOwnRoute = true);
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  constructor(init) {
    this.name = "SmartRouter";
    this.routers = [];
    this.routes = [];
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error("Can not add a route since the matcher is already built.");
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res || null;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
function findParam(node, name) {
  for (let i = 0, len = node.patterns.length; i < len; i++) {
    if (typeof node.patterns[i] === "object" && node.patterns[i][1] === name) {
      return true;
    }
  }
  const nodes = Object.values(node.children);
  for (let i = 0, len = nodes.length; i < len; i++) {
    if (findParam(nodes[i], name)) {
      return true;
    }
  }
  return false;
}
var Node2 = class {
  constructor(method, handler, children) {
    this.order = 0;
    this.children = children || {};
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = {};
      m[method] = { handler, score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
    this.handlerSetCache = {};
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const parentPatterns = [];
    const errorMessage = (name) => {
      return `Duplicate param name, use another name instead of '${name}' - ${method} ${path} <--- '${name}'`;
    };
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        parentPatterns.push(...curNode.patterns);
        curNode = curNode.children[p];
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        if (typeof pattern === "object") {
          for (let j = 0, len2 = parentPatterns.length; j < len2; j++) {
            if (typeof parentPatterns[j] === "object" && parentPatterns[j][1] === pattern[1]) {
              throw new Error(errorMessage(pattern[1]));
            }
          }
          if (Object.values(curNode.children).some((n) => findParam(n, pattern[1]))) {
            throw new Error(errorMessage(pattern[1]));
          }
        }
        curNode.patterns.push(pattern);
        parentPatterns.push(...curNode.patterns);
      }
      parentPatterns.push(...curNode.patterns);
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = {};
    const handlerSet = { handler, name: this.name, score: this.order };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, wildcard) {
    var _a, _b;
    return (_a = node.handlerSetCache)[_b = `${method}:${wildcard ? "1" : "0"}`] || (_a[_b] = (() => {
      const handlerSets = [];
      for (let i = 0, len = node.methods.length; i < len; i++) {
        const m = node.methods[i];
        const handlerSet = m[method] || m[METHOD_NAME_ALL];
        if (handlerSet !== void 0) {
          handlerSets.push(handlerSet);
        }
      }
      return handlerSets;
    })());
  }
  search(method, path) {
    const handlerSets = [];
    const params = {};
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len2 = parts.length; i < len2; i++) {
      const part = parts[i];
      const isLast = i === len2 - 1;
      const tempNodes = [];
      let matched = false;
      for (let j = 0, len22 = curNodes.length; j < len22; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(...this.gHSets(nextNode.children["*"], method, true));
            }
            handlerSets.push(...this.gHSets(nextNode, method));
            matched = true;
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "")
            continue;
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            handlerSets.push(...this.gHSets(child, method));
            params[name] = restPathString;
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method));
                }
              } else {
                tempNodes.push(child);
              }
            }
            if (typeof name === "string" && !matched) {
              params[name] = part;
            } else {
              if (node.children[part]) {
                params[name] = part;
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const len = handlerSets.length;
    if (len === 0)
      return null;
    if (len === 1)
      return { handlers: [handlerSets[0].handler], params };
    const handlers = handlerSets.sort((a, b) => {
      return a.score - b.score;
    }).map((s) => {
      return s.handler;
    });
    return { handlers, params };
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  constructor() {
    this.name = "TrieRouter";
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(init = {}) {
    super(init);
    this.router = init.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// node_modules/uncrypto/dist/crypto.web.mjs
var webCrypto = globalThis.crypto;
var subtle = webCrypto.subtle;

// src/libs/otpManager/index.ts
var getNewOtpWithHash = async (phone, secretKey, ttl = 5 * 60 * 1e3) => {
  const encoder2 = new TextEncoder();
  const secretKeyData = encoder2.encode(secretKey);
  const otp = (Math.floor(Math.random() * 1e4) + 1e4).toString().substring(1);
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const key = await subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await subtle.sign("HMAC", key, encoder2.encode(data));
  const hash4 = btoa(String.fromCharCode(...new Uint8Array(mac)));
  const fullHash = `${hash4}.${expires}`;
  return { hash: fullHash, otp, exp: ttl };
};
var verifyOTP = async (phone, fullHash, otp, secretKey) => {
  const encoder2 = new TextEncoder();
  const secretKeyData = encoder2.encode(secretKey);
  let [hash4, expires] = fullHash.split(".");
  let now = Date.now();
  if (now > parseInt(expires))
    return false;
  const key = await subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
  let data = `${phone}.${otp}.${expires}`;
  const byteStringToUint8Array = (byteString) => {
    const ui = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; ++i) {
      ui[i] = byteString.charCodeAt(i);
    }
    return ui;
  };
  const receivedMac = byteStringToUint8Array(atob(hash4));
  const verified = await subtle.verify(
    "HMAC",
    key,
    receivedMac,
    encoder2.encode(data)
  );
  return verified;
};
var otpManager = {
  getNewOtpWithHash,
  verifyOTP
};

// src/api/features/otp/otp.controller.ts
var demoSecretTime = Date.now();
var demoSecret = "mysecret1234567890";
var create = async (context) => {
  const phone = context.req.query("phone");
  let secret = context.req.query("secret");
  if (!secret)
    secret = demoSecret;
  const { hash: hash4, otp, exp } = await otpManager.getNewOtpWithHash(
    phone,
    secret,
    5 * 60 * 1e3
  );
  return context.json({
    phone,
    hash: hash4,
    otp,
    exp
  });
};
var verify = async (context) => {
  const phone = context.req.query("phone");
  const otp = context.req.query("otp");
  const hash4 = context.req.query("hash");
  let secret = context.req.query("secret");
  if (!phone || !otp || !hash4) {
    throw new HTTPException(402, {
      message: "phone,otp,hash query not provided"
    });
  }
  if (!secret)
    secret = demoSecret;
  const isVarified = await otpManager.verifyOTP(phone, hash4, otp, secret);
  return context.json({
    phone,
    otp,
    isVarified
  });
};
var getSecret = async (context) => {
  return context.json({
    secret: demoSecret,
    demoSecretTime: new Date(demoSecretTime)
  });
};
var otpController = {
  create,
  verify,
  getSecret
};

// src/api/features/otp/otp.routes.ts
var Route = new Hono2();
Route.get("/create", otpController.create);
Route.get("/verify", otpController.verify);
Route.get("/secret", otpController.getSecret);
var otpRoute = Route;

// node_modules/paseto-ts/dist/lib/errors.js
var CODES = {
  PasetoNotSupported: "ERR_PASETO_NOT_SUPPORTED",
  PasetoDecryptionFailed: "ERR_PASETO_DECRYPTION_FAILED",
  PasetoInvalid: "ERR_PASETO_INVALID",
  PasetoVerificationFailed: "ERR_PASETO_VERIFICATION_FAILED",
  PasetoPayloadInvalid: "ERR_PASETO_PAYLOAD_INVALID",
  PasetoClaimInvalid: "ERR_PASETO_CLAIM_INVALID",
  PasetoPurposeInvalid: "ERR_PASETO_PURPOSE_INVALID",
  PasetoFormatInvalid: "ERR_PASETO_FORMAT_INVALID",
  PasetoKeyInvalid: "ERR_PASETO_KEY_INVALID",
  PasetoTokenInvalid: "ERR_PASETO_TOKEN_INVALID",
  PasetoFooterInvalid: "ERR_PASETO_FOOTER_INVALID",
  PasetoSignatureInvalid: "ERR_PASETO_SIGNATURE_INVALID"
};
var PasetoError = class extends Error {
  code;
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.code = CODES[this.constructor.name];
  }
};
var PasetoInvalid = class extends PasetoError {
};
var PasetoPayloadInvalid = class extends PasetoError {
};
var PasetoClaimInvalid = class extends PasetoError {
};
var PasetoPurposeInvalid = class extends PasetoError {
};
var PasetoFormatInvalid = class extends PasetoError {
};
var PasetoKeyInvalid = class extends PasetoError {
};
var PasetoTokenInvalid = class extends PasetoError {
};
var PasetoSignatureInvalid = class extends PasetoError {
};

// node_modules/paseto-ts/dist/lib/validate.js
function isObject(val) {
  return !!val && val.constructor == Object;
}
function constantTimeEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a[i] ^ b[i];
  }
  return result === 0;
}
function validateISODate(date) {
  if (typeof date !== "string")
    return false;
  return /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,6})?(([+-]\d{2}:\d{2})|Z)$/.test(date);
}
function validateFooterClaims(obj) {
  if (obj.hasOwnProperty("kid")) {
    const kid = obj.kid;
    if (typeof kid !== "string") {
      throw new PasetoClaimInvalid('Footer must have a valid "kid" claim (is not a string)');
    }
  }
  if (obj.hasOwnProperty("wpk")) {
    const wpk = obj.wpk;
    if (typeof wpk !== "string") {
      throw new PasetoClaimInvalid('Footer must have a valid "wpk" claim (is not a string)');
    }
  }
}
function validateToken(type, token) {
  if (typeof token === "string" && token.startsWith(TOKEN_MAGIC_STRINGS.v4[type]) || token instanceof Uint8Array && constantTimeEqual(token.subarray(0, TOKEN_MAGIC_BYTES.v4[type].length), TOKEN_MAGIC_BYTES.v4[type])) {
    return token;
  }
  throw new PasetoTokenInvalid(`Invalid token format: must start with "${TOKEN_MAGIC_STRINGS.v4[type]}"`);
}

// node_modules/paseto-ts/dist/lib/uint8array.js
var decoder = new TextDecoder();
var encoder = new TextEncoder();
function stringToUint8Array(str) {
  return encoder.encode(str);
}
function uint8ArrayToString(arr) {
  return decoder.decode(arr);
}
function concat(...arrays) {
  let totalLength = 0;
  for (const arr of arrays) {
    totalLength += arr.length;
  }
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}
function payloadToUint8Array(input) {
  if (input instanceof Uint8Array) {
    return input;
  }
  if (typeof input === "string") {
    try {
      JSON.parse(input);
      return stringToUint8Array(input);
    } catch (e) {
      throw new PasetoInvalid("Invalid payload. Payload must be a JSON string, object, or Uint8Array.");
    }
  } else if (isObject(input)) {
    return stringToUint8Array(JSON.stringify(input));
  }
  throw new PasetoInvalid("Invalid payload. Payload must be a JSON string, object, or Uint8Array.");
}

// node_modules/paseto-ts/dist/lib/magic.js
var KEY_MAGIC_STRINGS = {
  v4: {
    local: "k4.local.",
    secret: "k4.secret.",
    public: "k4.public."
  }
};
var TOKEN_MAGIC_STRINGS = {
  v4: {
    local: "v4.local.",
    public: "v4.public."
  }
};
var KEY_MAGIC_BYTES = {
  v4: {
    // k4.local.
    local: new Uint8Array([107, 52, 46, 108, 111, 99, 97, 108, 46]),
    // k4.secret.
    secret: new Uint8Array([107, 52, 46, 115, 101, 99, 114, 101, 116, 46]),
    // k4.public.
    public: new Uint8Array([107, 52, 46, 112, 117, 98, 108, 105, 99, 46])
  }
};
var TOKEN_MAGIC_BYTES = {
  v4: {
    // v4.local.
    local: new Uint8Array([118, 52, 46, 108, 111, 99, 97, 108, 46]),
    // v4.public.
    public: new Uint8Array([118, 52, 46, 112, 117, 98, 108, 105, 99, 46])
  }
};
var KEY_LENGTHS = {
  v4: {
    local: 32,
    secret: 64,
    public: 32
  }
};
var KEY_BYTES = stringToUint8Array("paseto-encryption-key");
var AUTH_BYTES = stringToUint8Array("paseto-auth-key-for-aead");
var MAX_DEPTH_DEFAULT = 32;
var MAX_KEYS_DEFAULT = 128;

// node_modules/paseto-ts/dist/lib/time.js
function parseTimeString(time) {
  const timeParts = time.split(" ");
  if (timeParts.length !== 2) {
    const timeUnit2 = timeParts[0].replace(/\d/g, "");
    const timeAmount2 = parseInt(timeParts[0].replace(/\D/g, ""), 10);
    timeParts[0] = timeAmount2.toString();
    timeParts[1] = timeUnit2;
  }
  const timeAmount = parseInt(timeParts[0], 10);
  const timeUnit = timeParts[1];
  let timeMilliseconds = 0;
  switch (timeUnit) {
    case "s":
    case "sec":
    case "secs":
    case "second":
    case "seconds":
      timeMilliseconds = timeAmount * 1e3;
      break;
    case "m":
    case "min":
    case "mins":
    case "minute":
    case "minutes":
      timeMilliseconds = timeAmount * 1e3 * 60;
      break;
    case "h":
    case "hr":
    case "hrs":
    case "hour":
    case "hours":
      timeMilliseconds = timeAmount * 1e3 * 60 * 60;
      break;
    case "d":
    case "day":
    case "days":
      timeMilliseconds = timeAmount * 1e3 * 60 * 60 * 24;
      break;
    case "w":
    case "wk":
    case "wks":
    case "week":
    case "weeks":
      timeMilliseconds = timeAmount * 1e3 * 60 * 60 * 24 * 7;
      break;
    case "mo":
    case "mos":
    case "month":
    case "months":
      timeMilliseconds = timeAmount * 1e3 * 60 * 60 * 24 * 30;
      break;
    case "y":
    case "yr":
    case "yrs":
    case "year":
    case "years":
      timeMilliseconds = timeAmount * 1e3 * 60 * 60 * 24 * 365;
      break;
    default:
      throw new TypeError("Invalid time string");
  }
  return new Date(Date.now() + timeMilliseconds);
}
function parseTime(time) {
  if (typeof time === "string") {
    const parsedDate = Date.parse(time);
    if (isNaN(parsedDate)) {
      try {
        return parseTimeString(time);
      } catch (e) {
        throw new TypeError("Invalid date string");
      }
    }
    return new Date(time);
  } else if (typeof time === "number" && !isNaN(time) && isFinite(time)) {
    return new Date(time);
  } else if (time instanceof Date) {
    return time;
  } else {
    throw new TypeError("Time must be a string, number, or Date");
  }
}

// node_modules/paseto-ts/dist/lib/json.js
var decoder2 = new TextDecoder();
function getJsonDepth(data) {
  let stripped = data.replace(/\\"/g, "").replace(/\s+/g, "");
  stripped = stripped.replace(/"[^"]+"([:,\}\]])/g, "$1");
  stripped = stripped.replace(/[^\[\{\}\]]/g, "");
  if (stripped.length === 0) {
    return 1;
  }
  let previous = "";
  let depth = 1;
  while (stripped.length > 0 && stripped !== previous) {
    previous = stripped;
    stripped = stripped.replace(/({}|\[\])/g, "");
    depth++;
  }
  if (stripped.length > 0) {
    throw new Error(`Invalid JSON string`);
  }
  return depth;
}
function countKeys(json) {
  return json.split(/[^\\]":/).length;
}
function assertJsonStringSize(json, { maxDepth = 10, maxKeys = 100 }) {
  if (typeof json !== "string") {
    throw new PasetoPayloadInvalid(`JSON string must be a string (got ${typeof json}))`);
  }
  if (maxDepth || maxKeys) {
    const depth = getJsonDepth(json);
    const keys = countKeys(json);
    if (maxDepth && maxDepth > 0 && depth > maxDepth) {
      throw new PasetoPayloadInvalid(`JSON string exceeds maximum depth of ${maxDepth}`);
    }
    if (maxKeys && maxKeys > 0 && keys > maxKeys) {
      throw new PasetoPayloadInvalid(`JSON string exceeds maximum number of keys of ${maxKeys}`);
    }
  }
  return true;
}
function returnPossibleJson(json) {
  if (!json) {
    return "";
  }
  if (json instanceof Uint8Array) {
    json = decoder2.decode(json);
  }
  try {
    return JSON.parse(json);
  } catch (e) {
    return json;
  }
}

// node_modules/paseto-ts/dist/lib/base64url.js
function base64UrlEncode(buffer) {
  if (!(buffer instanceof Uint8Array))
    throw new TypeError("Input must be a Uint8Array.");
  return btoa(String.fromCharCode(...buffer)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function base64UrlDecode(str) {
  const bytes = base64UrlDecodeString(str);
  const ua = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    ua[i] = bytes.charCodeAt(i);
  }
  return ua;
}
function base64UrlDecodeString(str) {
  if (typeof str !== "string")
    throw new TypeError("Input must be a string.");
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (str.length % 4) {
    case 0:
      break;
    case 2:
      str += "==";
      break;
    case 3:
      str += "=";
      break;
    default:
      throw new Error("Invalid base64url string.");
  }
  const bytes = atob(str);
  return bytes;
}

// node_modules/paseto-ts/dist/lib/parse.js
var import_blake2b = __toESM(require_blake2b(), 1);
function parseKeyData(purpose, key, { version = "v4" } = { version: "v4" }) {
  const magicString = KEY_MAGIC_STRINGS[version][purpose];
  const magicBytes = KEY_MAGIC_BYTES[version][purpose];
  if (!purpose || !key)
    throw new TypeError("Purpose and key are required.");
  if (typeof key !== "string" && key instanceof Uint8Array === false) {
    throw new PasetoKeyInvalid(`Invalid key data. Key data must be a string or Uint8Array and start with the UTF-8 string '${magicString}' for this purpose (${purpose}). Received: ${typeof key}.`);
  }
  if (purpose !== "local" && purpose !== "secret" && purpose !== "public") {
    throw new PasetoPurposeInvalid(`Invalid purpose. Must be one of 'local', 'secret' or 'public'. Received: ${purpose}`);
  }
  if (typeof key === "string") {
    if (key.startsWith(KEY_MAGIC_STRINGS[version][purpose]) === false) {
      throw new PasetoKeyInvalid(`Invalid key (string). Key must start with ${magicString} to ensure it is a valid key for the given purpose. Received: ${key}`);
    }
    key = base64UrlDecode(key.split(".")[2]);
  } else {
    if (!constantTimeEqual(key.subarray(0, 9), magicBytes)) {
      throw new PasetoKeyInvalid(`Invalid key. Key must start with the UTF-8 bytes ${magicBytes.toString()} to ensure it is a valid key for the given purpose.`);
    }
    key = key.subarray(9);
  }
  if (key.byteLength !== KEY_LENGTHS[version][purpose]) {
    throw new PasetoKeyInvalid(`Invalid key. Key must be ${KEY_LENGTHS[version][purpose]} bytes long.`);
  }
  return key;
}
function parsePublicToken(token) {
  if (token instanceof Uint8Array) {
    token = uint8ArrayToString(token);
  }
  const parts = token.split(".");
  if (parts.length > 4) {
    throw new PasetoTokenInvalid(`Invalid token format: must contain 3 or 4 parts (is ${parts.length})`);
  }
  const payload = base64UrlDecode(parts[2]);
  if (payload.length < 64) {
    throw new PasetoTokenInvalid(`Invalid token format: payload must be at least 64 bytes (is ${payload.length})`);
  }
  const footer = parts[3] ? base64UrlDecode(parts[3]) : new Uint8Array(0);
  const message = payload.subarray(0, -64);
  const signature = payload.subarray(-64);
  return {
    payload,
    message,
    signature,
    footer
  };
}
function parsePayload(payload, {
  addIat = true,
  // Add an iat claim if one is not provided
  addExp = true,
  // Add an exp claim if one is not provided:
  maxDepth = 32,
  // Maximum depth of the JSON object
  maxKeys = 128,
  // Maximum number of keys in the JSON object
  validate = true
  // Validate the payload
} = {
  addIat: true,
  addExp: true,
  maxDepth: 32,
  maxKeys: 128,
  validate: true
}) {
  let obj;
  if (!isObject(payload) && typeof payload !== "string" && !(payload instanceof Uint8Array)) {
    throw new PasetoPayloadInvalid("Payload must be valid JSON (is falsy)");
  }
  const possibleStringPayload = payload instanceof Uint8Array ? uint8ArrayToString(payload) : payload;
  if (typeof possibleStringPayload === "string") {
    if (possibleStringPayload.startsWith("[") || possibleStringPayload.startsWith("[")) {
      throw new PasetoPayloadInvalid("Payload must be valid JSON (is an array)");
    }
    try {
      assertJsonStringSize(possibleStringPayload, {
        maxDepth,
        maxKeys
      });
      obj = JSON.parse(possibleStringPayload);
    } catch (e) {
      throw new PasetoPayloadInvalid("Payload must be valid JSON");
    }
  } else if (isObject(payload)) {
    obj = JSON.parse(JSON.stringify(payload));
  }
  if (obj.hasOwnProperty("iss") && validate) {
    const iss = obj.iss;
    if (typeof iss !== "string") {
      throw new PasetoClaimInvalid('Payload must have a valid "iss" claim (is not a string)');
    }
  }
  if (obj.hasOwnProperty("sub") && validate) {
    const sub = obj.sub;
    if (typeof sub !== "string") {
      throw new PasetoClaimInvalid('Payload must have a valid "sub" claim (is not a string)');
    }
  }
  if (obj.hasOwnProperty("aud") && validate) {
    const aud = obj.aud;
    if (typeof aud !== "string") {
      throw new PasetoClaimInvalid('Payload must have a valid "aud" claim (is not a string)');
    }
  }
  const now = Date.now();
  if (obj.hasOwnProperty("iat") && validate) {
    const iat = obj.iat;
    if (!validateISODate(iat)) {
      throw new PasetoClaimInvalid('Payload must have a valid "iat" claim (is not an ISO date)');
    }
    const parsedDate = Date.parse(iat);
    if (parsedDate > now) {
      throw new PasetoClaimInvalid('Payload must have a valid "iat" claim (is in the future)');
    }
  } else if (addIat) {
    obj.iat = (/* @__PURE__ */ new Date()).toISOString();
  }
  if (obj.hasOwnProperty("exp") && validate) {
    let exp = obj.exp;
    try {
      exp = parseTime(exp);
    } catch (err) {
      throw new PasetoClaimInvalid('Payload must have a valid "exp" claim (is not an date or a valid relative time string (e.g. "1 hour"))');
    }
    if (obj.hasOwnProperty("iat") && exp <= Date.parse(obj.iat)) {
      throw new PasetoClaimInvalid('Payload must have a valid "exp" claim (is not greater than "iat")');
    }
    if (exp <= now) {
      throw new PasetoClaimInvalid('Payload must have a valid "exp" claim (has expired)');
    }
    if (!validateISODate(obj.exp)) {
      obj.exp = new Date(exp).toISOString();
    }
  } else if (addExp) {
    obj.exp = new Date(now + 36e5).toISOString();
  }
  if (obj.hasOwnProperty("nbf") && validate) {
    let nbf = obj.nbf;
    try {
      nbf = parseTime(nbf);
    } catch (err) {
      throw new PasetoClaimInvalid('Payload must have a valid "nbf" claim (is not an date or a valid relative time string (e.g. "1 hour"))');
    }
    if (obj.hasOwnProperty("iat") && nbf <= Date.parse(obj.iat)) {
      throw new PasetoClaimInvalid('Payload must have a valid "nbf" claim (is not greater than "iat")');
    }
    if (nbf > now) {
      throw new PasetoClaimInvalid('Payload must have a valid "nbf" claim (is in the future)');
    }
    if (!validateISODate(obj.nbf)) {
      obj.nbf = new Date(nbf).toISOString();
    }
  }
  if (obj.hasOwnProperty("jti") && validate) {
    const jti = obj.jti;
    if (typeof jti !== "string") {
      throw new PasetoClaimInvalid('Payload must have a valid "jti" claim (is not a string)');
    }
  }
  return obj;
}
function parseFooter(footer, { maxDepth = 32, maxKeys = 128, validate = true } = { maxDepth: 32, maxKeys: 128, validate: true }) {
  if (typeof footer === "string") {
    if (footer.startsWith("{") && footer.endsWith("}")) {
      assertJsonStringSize(footer, {
        maxDepth,
        maxKeys
      });
      const obj = JSON.parse(footer);
      if (validate)
        validateFooterClaims(obj);
    }
    return stringToUint8Array(footer);
  } else if (isObject(footer)) {
    if (validate)
      validateFooterClaims(footer);
    return stringToUint8Array(JSON.stringify(footer));
  } else if (footer instanceof Uint8Array) {
    const possibleObj = uint8ArrayToString(footer);
    if (possibleObj.startsWith("{") && possibleObj.endsWith("}") && validate) {
      assertJsonStringSize(possibleObj, {
        maxDepth,
        maxKeys
      });
      const obj = JSON.parse(possibleObj);
      validateFooterClaims(obj);
    }
    return footer;
  }
  throw new TypeError("Footer must be a string, Uint8Array, or object");
}
function parseAssertion(assertion) {
  if (typeof assertion === "string") {
    return stringToUint8Array(assertion);
  } else if (assertion instanceof Uint8Array) {
    return assertion;
  }
  throw new TypeError("Assertion must be a string or Uint8Array");
}

// node_modules/paseto-ts/dist/lib/pae.js
function LE64(n) {
  let arr = new Uint8Array(8);
  for (let i = 0; i < 8; ++i) {
    if (i === 7) {
      n &= 127;
    }
    arr[i] = n & 255;
    n = n >>> 8;
  }
  return arr;
}
function PAE(...pieces) {
  let count = pieces.length;
  let output = concat(LE64(count));
  for (let i = 0; i < count; i++) {
    if (!(pieces[i] instanceof Uint8Array)) {
      throw new TypeError("PAE expects Uint8Array arguments");
    }
    output = concat(output, LE64(pieces[i].length), pieces[i]);
  }
  return output;
}

// node_modules/paseto-ts/dist/v4/decrypt.js
var import_blake2b2 = __toESM(require_blake2b(), 1);
var import_xchacha20 = __toESM(require_xchacha20(), 1);

// node_modules/paseto-ts/dist/v4/encrypt.js
var import_blake2b3 = __toESM(require_blake2b(), 1);
var import_xchacha202 = __toESM(require_xchacha20(), 1);

// node_modules/paseto-ts/dist/v4/key.js
var import_ed25519 = __toESM(require_ed25519(), 1);
function generateKeys(purpose, opts = { format: "paserk" }) {
  let ret;
  const format = opts?.format ?? "paserk";
  const getRandomValues = opts?.getRandomValues ?? (crypto?.getRandomValues ? crypto.getRandomValues.bind(crypto) : void 0);
  if (!getRandomValues) {
    throw new Error("No compatible getRandomValues implementation detected in the global scope. Please pass a getRandomValues implementation to the options object (signature: getRandomValues<Uint8Array>(array: Uint8Array): Uint8Array)");
  }
  switch (purpose) {
    case "local":
      const random = getRandomValues(new Uint8Array(32));
      if (random === null) {
        throw new Error("getRandomValues returned an invalid length Uint8Array");
      }
      switch (format) {
        case "paserk":
          ret = `k4.local.${base64UrlEncode(random)}`;
          break;
        case "buffer":
          ret = concat(stringToUint8Array("k4.local."), random);
          break;
        default:
          throw new PasetoFormatInvalid(`Invalid format: ${format}`);
      }
      break;
    case "public":
      const keyPair = (0, import_ed25519.generateKeyPair)();
      switch (format) {
        case "paserk":
          ret = {
            secretKey: `k4.secret.${base64UrlEncode(keyPair.secretKey)}`,
            publicKey: `k4.public.${base64UrlEncode(keyPair.publicKey)}`
          };
          break;
        case "buffer":
          ret = {
            secretKey: concat(stringToUint8Array("k4.secret."), keyPair.secretKey),
            publicKey: concat(stringToUint8Array("k4.public."), keyPair.publicKey)
          };
          break;
        default:
          throw new PasetoFormatInvalid(`Invalid format: ${format}`);
      }
      break;
    default:
      throw new PasetoPurposeInvalid(`Invalid purpose: ${purpose}`);
  }
  return ret;
}

// node_modules/paseto-ts/dist/v4/sign.js
var import_ed255192 = __toESM(require_ed25519(), 1);
var EMPTY_BUFFER = new Uint8Array(0);
function sign(key, payload, {
  footer = new Uint8Array(0),
  assertion = new Uint8Array(0),
  addExp = true,
  // Add an exp claim if one is not provided: https://github.com/paseto-standard/paseto-spec/blob/master/docs/02-Implementation-Guide/05-API-UX.md#default-expiration-claims
  addIat = true,
  // Add an iat claim if one is not provided
  maxDepth = MAX_DEPTH_DEFAULT,
  // Maximum depth of nested objects
  maxKeys = MAX_KEYS_DEFAULT,
  // Maximum number of keys in an object
  validatePayload = true
  // Validate the payload
} = {
  footer: new Uint8Array(0),
  assertion: new Uint8Array(0),
  addExp: true,
  addIat: true,
  maxDepth: MAX_DEPTH_DEFAULT,
  maxKeys: MAX_KEYS_DEFAULT,
  validatePayload: true
}) {
  key = parseKeyData("secret", key);
  const payloadUint8 = payloadToUint8Array(parsePayload(payload, {
    addExp: !!addExp,
    addIat: !!addIat,
    maxDepth,
    maxKeys,
    validate: !!validatePayload
  }));
  const footerUint8 = parseFooter(footer, {
    maxDepth,
    maxKeys,
    validate: !!validatePayload
  });
  assertion = parseAssertion(assertion);
  const m2 = PAE(TOKEN_MAGIC_BYTES.v4.public, payloadUint8, footerUint8, assertion);
  const sig = (0, import_ed255192.sign)(key, m2);
  let result = "";
  if (footer.length === 0) {
    result = `${TOKEN_MAGIC_STRINGS.v4.public}${base64UrlEncode(concat(payloadUint8, sig))}`;
  } else {
    result = `${TOKEN_MAGIC_STRINGS.v4.public}${base64UrlEncode(concat(payloadUint8, sig))}.${base64UrlEncode(footerUint8)}`;
  }
  return result;
}

// node_modules/paseto-ts/dist/v4/verify.js
var import_ed255193 = __toESM(require_ed25519(), 1);
function verify2(key, token, { assertion = new Uint8Array(0), maxDepth = MAX_DEPTH_DEFAULT, maxKeys = MAX_KEYS_DEFAULT, validatePayload = true } = {
  assertion: new Uint8Array(0),
  maxDepth: MAX_DEPTH_DEFAULT,
  maxKeys: MAX_KEYS_DEFAULT,
  validatePayload: true
}) {
  validateToken("public", token);
  key = parseKeyData("public", key);
  const { message, signature, footer } = parsePublicToken(token);
  if (footer.length > 0) {
    parseFooter(footer, {
      maxDepth,
      maxKeys,
      validate: !!validatePayload
    });
  }
  assertion = parseAssertion(assertion);
  const m2 = PAE(TOKEN_MAGIC_BYTES.v4.public, message, footer, assertion);
  const valid = (0, import_ed255193.verify)(key, m2, signature);
  if (!valid) {
    throw new PasetoSignatureInvalid("Invalid token signature");
  }
  const s = uint8ArrayToString(message);
  return {
    payload: parsePayload(s, {
      addExp: false,
      addIat: false,
      maxDepth,
      maxKeys,
      validate: !!validatePayload
    }),
    footer: returnPossibleJson(footer)
  };
}

// src/api/features/paseto/paseto.controller.ts
var demoKeys = {
  secretKey: "k4.secret.Z-4-THnJAKpC-6JCPq2C6lEVezY0ApY-Z_ST-uLFYt9mzw_FcOanF0vzCrC_16Qgn5_EE51wedISj5UnSFW2ng",
  publicKey: "k4.public.Zs8PxXDmpxdL8wqwv9ekIJ-fxBOdcHnSEo-VJ0hVtp4"
};
var createToken = async (context) => {
  let payload = context.req.query("payload");
  const footer = context.req.query("footer");
  let secretkey = context.req.query("secretkey");
  if (!payload) {
    throw new HTTPException(402, {
      message: "payload query not provided"
    });
  }
  try {
    payload = JSON.parse(payload);
  } catch (error) {
    throw new HTTPException(402, {
      message: "payload is not a json"
    });
  }
  if (!secretkey)
    secretkey = demoKeys.secretKey;
  const token = await sign(secretkey, payload);
  return context.json({
    token
  });
};
var verifyToken = async (context) => {
  const token = context.req.query("token");
  let publicKey = context.req.query("publicKey");
  if (!token) {
    throw new HTTPException(402, {
      message: "token query not provided"
    });
  }
  if (!publicKey)
    publicKey = demoKeys.publicKey;
  try {
    const isVarified = await verify2(publicKey, token);
    return context.json({
      isVarified
    });
  } catch (error) {
    throw new HTTPException(402, {
      message: error
    });
  }
};
var keyGen = async (context) => {
  const keys = await generateKeys("public");
  return context.json({
    keys,
    generateTime: new Date(Date.now())
  });
};
var getDemoKeys = async (context) => {
  return context.json(demoKeys);
};
var pasetoController = {
  keyGen,
  getDemoKeys,
  createToken,
  verifyToken
};

// src/api/features/paseto/paseto.routes.ts
var Route2 = new Hono2();
Route2.get("/token", pasetoController.createToken);
Route2.get("/verify", pasetoController.verifyToken);
Route2.get("/keys", pasetoController.keyGen);
var pasetoRoute = Route2;

// src/index.ts
var app = new Hono2().basePath("/api");
app.get("/ping", (context) => {
  return context.json(context);
});
app.route("/otp", otpRoute);
app.route("/paseto", pasetoRoute);
var src_default = app;

// _worker.ts
var serveStatic = () => {
  return async (c, _next) => {
    const env = c.env;
    const res = await env.ASSETS.fetch(c.req.raw);
    if (res.status === 404) {
      return c.notFound();
    }
    return res;
  };
};
src_default.get("/favicon.ico", serveStatic());
src_default.get("/static/*", serveStatic());
var worker_default = src_default;
export {
  worker_default as default
};
