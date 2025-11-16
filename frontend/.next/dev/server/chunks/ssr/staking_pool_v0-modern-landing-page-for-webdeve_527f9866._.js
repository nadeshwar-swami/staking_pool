module.exports = [
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/algorandEncode.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "encodeTxnsCanonical",
    ()=>encodeTxnsCanonical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$encode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs [app-ssr] (ecmascript)");
;
const utf8 = (s)=>new TextEncoder().encode(s);
function sortKeys(entries) {
    entries.sort((a, b)=>{
        const ka = utf8(a[0]);
        const kb = utf8(b[0]);
        const n = Math.min(ka.length, kb.length);
        for(let i = 0; i < n; i++){
            if (ka[i] !== kb[i]) return ka[i] - kb[i];
        }
        return ka.length - kb.length;
    });
    return entries;
}
function toPlainMap(tx, suggestedParams, appId, appArg) {
    const snd = tx.sender ? tx.sender.publicKey ? tx.sender.publicKey : tx.sender : undefined;
    const rcv = tx.paymentParams?.receiver || tx.paymentParams?.rcv || tx.receiver;
    const amt = tx.paymentParams?.amount || tx.amount;
    const fee = suggestedParams?.fee ?? 0;
    const fv = suggestedParams?.firstValid ?? suggestedParams?.firstRound;
    const lv = suggestedParams?.lastValid ?? suggestedParams?.lastRound;
    const gen = suggestedParams?.genesisID || '';
    const gh = suggestedParams?.genesisHash ? typeof suggestedParams.genesisHash === 'string' ? function() {
        const b = atob(suggestedParams.genesisHash);
        const u = new Uint8Array(b.length);
        for(let i = 0; i < b.length; i++)u[i] = b.charCodeAt(i);
        return u;
    }() : suggestedParams.genesisHash : new Uint8Array();
    const common = {
        snd: snd,
        fee: BigInt(Number(fee || 0)),
        fv: BigInt(Number(fv || 0)),
        lv: BigInt(Number(lv || 0)),
        gen: gen,
        gh: gh
    };
    if (tx.type === 'pay' || tx.type === 'pay' || tx.paymentParams) {
        return {
            ...common,
            type: 'pay',
            amt: BigInt(Number(amt || 0)),
            rcv: rcv?.publicKey ?? rcv
        };
    }
    if (tx.type === 'appl' || tx.appCallParams) {
        return {
            ...common,
            type: 'appl',
            apid: BigInt(Number(appId || tx.appCallParams?.appIndex || 0)),
            apan: BigInt(Number(tx.appCallParams?.onComplete || 0)),
            apaa: appArg ? [
                appArg
            ] : tx.appCallParams?.appArgs || []
        };
    }
    return common;
}
function encodeTxnsCanonical(txns, suggestedParams, appId, appArg) {
    const plain = txns.map((t)=>toPlainMap(t, suggestedParams, appId, appArg));
    // For each plain map, create ordered entries and encode using msgpack
    const encoded = plain.map((p, idx)=>{
        try {
            const entries = sortKeys(Object.entries(p));
            const m = new Map();
            for (const [k, v] of entries){
                m.set(k, v);
            }
            const enc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$encode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(m);
            return enc;
        } catch (e) {
            return new Uint8Array();
        }
    });
    return encoded;
}
const __TURBOPACK__default__export__ = encodeTxnsCanonical;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Integer Utility
__turbopack_context__.s([
    "UINT32_MAX",
    ()=>UINT32_MAX,
    "getInt64",
    ()=>getInt64,
    "getUint64",
    ()=>getUint64,
    "setInt64",
    ()=>setInt64,
    "setUint64",
    ()=>setUint64
]);
var UINT32_MAX = 4294967295;
function setUint64(view, offset, value) {
    var high = value / 4294967296;
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
    var high = Math.floor(value / 4294967296);
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
    var high = view.getInt32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
function getUint64(view, offset) {
    var high = view.getUint32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
} //# sourceMappingURL=int.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEXT_DECODER_THRESHOLD",
    ()=>TEXT_DECODER_THRESHOLD,
    "TEXT_ENCODER_THRESHOLD",
    ()=>TEXT_ENCODER_THRESHOLD,
    "utf8Count",
    ()=>utf8Count,
    "utf8DecodeJs",
    ()=>utf8DecodeJs,
    "utf8DecodeTD",
    ()=>utf8DecodeTD,
    "utf8EncodeJs",
    ()=>utf8EncodeJs,
    "utf8EncodeTE",
    ()=>utf8EncodeTE
]);
/* eslint-disable @typescript-eslint/no-unnecessary-condition */ var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs [app-ssr] (ecmascript)");
var _a, _b, _c;
;
var TEXT_ENCODING_AVAILABLE = (typeof process === "undefined" || ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a["TEXT_ENCODING"]) !== "never") && typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined";
function utf8Count(str) {
    var strLength = str.length;
    var byteLength = 0;
    var pos = 0;
    while(pos < strLength){
        var value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            byteLength++;
            continue;
        } else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            byteLength += 2;
        } else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                byteLength += 3;
            } else {
                // 4-byte
                byteLength += 4;
            }
        }
    }
    return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
    var strLength = str.length;
    var offset = outputOffset;
    var pos = 0;
    while(pos < strLength){
        var value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        } else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            output[offset++] = value >> 6 & 0x1f | 0xc0;
        } else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                output[offset++] = value >> 12 & 0x0f | 0xe0;
                output[offset++] = value >> 6 & 0x3f | 0x80;
            } else {
                // 4-byte
                output[offset++] = value >> 18 & 0x07 | 0xf0;
                output[offset++] = value >> 12 & 0x3f | 0x80;
                output[offset++] = value >> 6 & 0x3f | 0x80;
            }
        }
        output[offset++] = value & 0x3f | 0x80;
    }
}
var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : undefined;
var TEXT_ENCODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT32_MAX"] : typeof process !== "undefined" && ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b["TEXT_ENCODING"]) !== "force" ? 200 : 0;
function utf8EncodeTEencode(str, output, outputOffset) {
    output.set(sharedTextEncoder.encode(str), outputOffset);
}
function utf8EncodeTEencodeInto(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
var utf8EncodeTE = (sharedTextEncoder === null || sharedTextEncoder === void 0 ? void 0 : sharedTextEncoder.encodeInto) ? utf8EncodeTEencodeInto : utf8EncodeTEencode;
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    var offset = inputOffset;
    var end = offset + byteLength;
    var units = [];
    var result = "";
    while(offset < end){
        var byte1 = bytes[offset++];
        if ((byte1 & 0x80) === 0) {
            // 1 byte
            units.push(byte1);
        } else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            var byte2 = bytes[offset++] & 0x3f;
            units.push((byte1 & 0x1f) << 6 | byte2);
        } else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            var byte2 = bytes[offset++] & 0x3f;
            var byte3 = bytes[offset++] & 0x3f;
            units.push((byte1 & 0x1f) << 12 | byte2 << 6 | byte3);
        } else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            var byte2 = bytes[offset++] & 0x3f;
            var byte3 = bytes[offset++] & 0x3f;
            var byte4 = bytes[offset++] & 0x3f;
            var unit = (byte1 & 0x07) << 0x12 | byte2 << 0x0c | byte3 << 0x06 | byte4;
            if (unit > 0xffff) {
                unit -= 0x10000;
                units.push(unit >>> 10 & 0x3ff | 0xd800);
                unit = 0xdc00 | unit & 0x3ff;
            }
            units.push(unit);
        } else {
            units.push(byte1);
        }
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode.apply(String, units);
            units.length = 0;
        }
    }
    if (units.length > 0) {
        result += String.fromCharCode.apply(String, units);
    }
    return result;
}
var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
var TEXT_DECODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT32_MAX"] : typeof process !== "undefined" && ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c["TEXT_DECODER"]) !== "force" ? 200 : 0;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
} //# sourceMappingURL=utf8.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/ExtData.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
 */ __turbopack_context__.s([
    "ExtData",
    ()=>ExtData
]);
var ExtData = function() {
    function ExtData(type, data) {
        this.type = type;
        this.data = data;
    }
    return ExtData;
}();
;
 //# sourceMappingURL=ExtData.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError
]);
var __extends = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var DecodeError = function(_super) {
    __extends(DecodeError, _super);
    function DecodeError(message) {
        var _this = _super.call(this, message) || this;
        // fix the prototype chain in a cross-platform way
        var proto = Object.create(DecodeError.prototype);
        Object.setPrototypeOf(_this, proto);
        Object.defineProperty(_this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError.name
        });
        return _this;
    }
    return DecodeError;
}(Error);
;
 //# sourceMappingURL=DecodeError.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/timestamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type
__turbopack_context__.s([
    "EXT_TIMESTAMP",
    ()=>EXT_TIMESTAMP,
    "decodeTimestampExtension",
    ()=>decodeTimestampExtension,
    "decodeTimestampToTimeSpec",
    ()=>decodeTimestampToTimeSpec,
    "encodeDateToTimeSpec",
    ()=>encodeDateToTimeSpec,
    "encodeTimeSpecToTimestamp",
    ()=>encodeTimeSpecToTimestamp,
    "encodeTimestampExtension",
    ()=>encodeTimestampExtension,
    "timestampExtension",
    ()=>timestampExtension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$DecodeError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs [app-ssr] (ecmascript)");
;
;
var EXT_TIMESTAMP = -1;
var TIMESTAMP32_MAX_SEC = 0x100000000 - 1; // 32-bit unsigned int
var TIMESTAMP64_MAX_SEC = 0x400000000 - 1; // 34-bit unsigned int
function encodeTimeSpecToTimestamp(_a) {
    var sec = _a.sec, nsec = _a.nsec;
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        // Here sec >= 0 && nsec >= 0
        if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            var rv = new Uint8Array(4);
            var view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
        } else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            var secHigh = sec / 0x100000000;
            var secLow = sec & 0xffffffff;
            var rv = new Uint8Array(8);
            var view = new DataView(rv.buffer);
            // nsec30 | secHigh2
            view.setUint32(0, nsec << 2 | secHigh & 0x3);
            // secLow32
            view.setUint32(4, secLow);
            return rv;
        }
    } else {
        // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
        var rv = new Uint8Array(12);
        var view = new DataView(rv.buffer);
        view.setUint32(0, nsec);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInt64"])(view, 4, sec);
        return rv;
    }
}
function encodeDateToTimeSpec(date) {
    var msec = date.getTime();
    var sec = Math.floor(msec / 1e3);
    var nsec = (msec - sec * 1e3) * 1e6;
    // Normalizes { sec, nsec } to ensure nsec is unsigned.
    var nsecInSec = Math.floor(nsec / 1e9);
    return {
        sec: sec + nsecInSec,
        nsec: nsec - nsecInSec * 1e9
    };
}
function encodeTimestampExtension(object) {
    if (object instanceof Date) {
        var timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
    } else {
        return null;
    }
}
function decodeTimestampToTimeSpec(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // data may be 32, 64, or 96 bits
    switch(data.byteLength){
        case 4:
            {
                // timestamp 32 = { sec32 }
                var sec = view.getUint32(0);
                var nsec = 0;
                return {
                    sec: sec,
                    nsec: nsec
                };
            }
        case 8:
            {
                // timestamp 64 = { nsec30, sec34 }
                var nsec30AndSecHigh2 = view.getUint32(0);
                var secLow32 = view.getUint32(4);
                var sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
                var nsec = nsec30AndSecHigh2 >>> 2;
                return {
                    sec: sec,
                    nsec: nsec
                };
            }
        case 12:
            {
                // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
                var sec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInt64"])(view, 4);
                var nsec = view.getUint32(0);
                return {
                    sec: sec,
                    nsec: nsec
                };
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$DecodeError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecodeError"]("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(data.length));
    }
}
function decodeTimestampExtension(data) {
    var timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
var timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension
}; //# sourceMappingURL=timestamp.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ExtensionCodec to handle MessagePack extensions
__turbopack_context__.s([
    "ExtensionCodec",
    ()=>ExtensionCodec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$ExtData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/ExtData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$timestamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/timestamp.mjs [app-ssr] (ecmascript)");
;
;
var ExtensionCodec = function() {
    function ExtensionCodec() {
        // built-in extensions
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        // custom extensions
        this.encoders = [];
        this.decoders = [];
        this.register(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$timestamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timestampExtension"]);
    }
    ExtensionCodec.prototype.register = function(_a) {
        var type = _a.type, encode = _a.encode, decode = _a.decode;
        if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
        } else {
            // built-in extensions
            var index = 1 + type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
        }
    };
    ExtensionCodec.prototype.tryToEncode = function(object, context) {
        // built-in extensions
        for(var i = 0; i < this.builtInEncoders.length; i++){
            var encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = -1 - i;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$ExtData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtData"](type, data);
                }
            }
        }
        // custom extensions
        for(var i = 0; i < this.encoders.length; i++){
            var encodeExt = this.encoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = i;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$ExtData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtData"](type, data);
                }
            }
        }
        if (object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$ExtData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtData"]) {
            // to keep ExtData as is
            return object;
        }
        return null;
    };
    ExtensionCodec.prototype.decode = function(data, type, context) {
        var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) {
            return decodeExt(data, type, context);
        } else {
            // decode() does not fail, returns ExtData instead.
            return new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$ExtData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtData"](type, data);
        }
    };
    ExtensionCodec.defaultCodec = new ExtensionCodec();
    return ExtensionCodec;
}();
;
 //# sourceMappingURL=ExtensionCodec.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/typedArrays.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDataView",
    ()=>createDataView,
    "ensureUint8Array",
    ()=>ensureUint8Array
]);
function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
        return buffer;
    } else if (ArrayBuffer.isView(buffer)) {
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    } else if (buffer instanceof ArrayBuffer) {
        return new Uint8Array(buffer);
    } else {
        // ArrayLike<number>
        return Uint8Array.from(buffer);
    }
}
function createDataView(buffer) {
    if (buffer instanceof ArrayBuffer) {
        return new DataView(buffer);
    }
    var bufferView = ensureUint8Array(buffer);
    return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
} //# sourceMappingURL=typedArrays.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/Encoder.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_INITIAL_BUFFER_SIZE",
    ()=>DEFAULT_INITIAL_BUFFER_SIZE,
    "DEFAULT_MAX_DEPTH",
    ()=>DEFAULT_MAX_DEPTH,
    "Encoder",
    ()=>Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$utf8$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$ExtensionCodec$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$typedArrays$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/utils/typedArrays.mjs [app-ssr] (ecmascript)");
;
;
;
;
var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
var Encoder = function() {
    function Encoder(extensionCodec, context, maxDepth, initialBufferSize, sortKeys, forceFloat32, ignoreUndefined, forceIntegerToFloat) {
        if (extensionCodec === void 0) {
            extensionCodec = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$ExtensionCodec$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtensionCodec"].defaultCodec;
        }
        if (context === void 0) {
            context = undefined;
        }
        if (maxDepth === void 0) {
            maxDepth = DEFAULT_MAX_DEPTH;
        }
        if (initialBufferSize === void 0) {
            initialBufferSize = DEFAULT_INITIAL_BUFFER_SIZE;
        }
        if (sortKeys === void 0) {
            sortKeys = false;
        }
        if (forceFloat32 === void 0) {
            forceFloat32 = false;
        }
        if (ignoreUndefined === void 0) {
            ignoreUndefined = false;
        }
        if (forceIntegerToFloat === void 0) {
            forceIntegerToFloat = false;
        }
        this.extensionCodec = extensionCodec;
        this.context = context;
        this.maxDepth = maxDepth;
        this.initialBufferSize = initialBufferSize;
        this.sortKeys = sortKeys;
        this.forceFloat32 = forceFloat32;
        this.ignoreUndefined = ignoreUndefined;
        this.forceIntegerToFloat = forceIntegerToFloat;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
    }
    Encoder.prototype.reinitializeState = function() {
        this.pos = 0;
    };
    /**
     * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
     *
     * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
     */ Encoder.prototype.encodeSharedRef = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.subarray(0, this.pos);
    };
    /**
     * @returns Encodes the object and returns a copy of the encoder's internal buffer.
     */ Encoder.prototype.encode = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.slice(0, this.pos);
    };
    Encoder.prototype.doEncode = function(object, depth) {
        if (depth > this.maxDepth) {
            throw new Error("Too deep objects in depth ".concat(depth));
        }
        if (object == null) {
            this.encodeNil();
        } else if (typeof object === "boolean") {
            this.encodeBoolean(object);
        } else if (typeof object === "number") {
            this.encodeNumber(object);
        } else if (typeof object === "string") {
            this.encodeString(object);
        } else {
            this.encodeObject(object, depth);
        }
    };
    Encoder.prototype.ensureBufferSizeToWrite = function(sizeToWrite) {
        var requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) {
            this.resizeBuffer(requiredSize * 2);
        }
    };
    Encoder.prototype.resizeBuffer = function(newSize) {
        var newBuffer = new ArrayBuffer(newSize);
        var newBytes = new Uint8Array(newBuffer);
        var newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
    };
    Encoder.prototype.encodeNil = function() {
        this.writeU8(0xc0);
    };
    Encoder.prototype.encodeBoolean = function(object) {
        if (object === false) {
            this.writeU8(0xc2);
        } else {
            this.writeU8(0xc3);
        }
    };
    Encoder.prototype.encodeNumber = function(object) {
        if (Number.isSafeInteger(object) && !this.forceIntegerToFloat) {
            if (object >= 0) {
                if (object < 0x80) {
                    // positive fixint
                    this.writeU8(object);
                } else if (object < 0x100) {
                    // uint 8
                    this.writeU8(0xcc);
                    this.writeU8(object);
                } else if (object < 0x10000) {
                    // uint 16
                    this.writeU8(0xcd);
                    this.writeU16(object);
                } else if (object < 0x100000000) {
                    // uint 32
                    this.writeU8(0xce);
                    this.writeU32(object);
                } else {
                    // uint 64
                    this.writeU8(0xcf);
                    this.writeU64(object);
                }
            } else {
                if (object >= -0x20) {
                    // negative fixint
                    this.writeU8(0xe0 | object + 0x20);
                } else if (object >= -0x80) {
                    // int 8
                    this.writeU8(0xd0);
                    this.writeI8(object);
                } else if (object >= -0x8000) {
                    // int 16
                    this.writeU8(0xd1);
                    this.writeI16(object);
                } else if (object >= -0x80000000) {
                    // int 32
                    this.writeU8(0xd2);
                    this.writeI32(object);
                } else {
                    // int 64
                    this.writeU8(0xd3);
                    this.writeI64(object);
                }
            }
        } else {
            // non-integer numbers
            if (this.forceFloat32) {
                // float 32
                this.writeU8(0xca);
                this.writeF32(object);
            } else {
                // float 64
                this.writeU8(0xcb);
                this.writeF64(object);
            }
        }
    };
    Encoder.prototype.writeStringHeader = function(byteLength) {
        if (byteLength < 32) {
            // fixstr
            this.writeU8(0xa0 + byteLength);
        } else if (byteLength < 0x100) {
            // str 8
            this.writeU8(0xd9);
            this.writeU8(byteLength);
        } else if (byteLength < 0x10000) {
            // str 16
            this.writeU8(0xda);
            this.writeU16(byteLength);
        } else if (byteLength < 0x100000000) {
            // str 32
            this.writeU8(0xdb);
            this.writeU32(byteLength);
        } else {
            throw new Error("Too long string: ".concat(byteLength, " bytes in UTF-8"));
        }
    };
    Encoder.prototype.encodeString = function(object) {
        var maxHeaderSize = 1 + 4;
        var strLength = object.length;
        if (strLength > __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$utf8$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_ENCODER_THRESHOLD"]) {
            var byteLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$utf8$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utf8Count"])(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$utf8$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utf8EncodeTE"])(object, this.bytes, this.pos);
            this.pos += byteLength;
        } else {
            var byteLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$utf8$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utf8Count"])(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$utf8$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utf8EncodeJs"])(object, this.bytes, this.pos);
            this.pos += byteLength;
        }
    };
    Encoder.prototype.encodeObject = function(object, depth) {
        // try to encode objects with custom codec first of non-primitives
        var ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) {
            this.encodeExtension(ext);
        } else if (Array.isArray(object)) {
            this.encodeArray(object, depth);
        } else if (ArrayBuffer.isView(object)) {
            this.encodeBinary(object);
        } else if (typeof object === "object") {
            this.encodeMap(object, depth);
        } else {
            // symbol, function and other special object come here unless extensionCodec handles them.
            throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(object)));
        }
    };
    Encoder.prototype.encodeBinary = function(object) {
        var size = object.byteLength;
        if (size < 0x100) {
            // bin 8
            this.writeU8(0xc4);
            this.writeU8(size);
        } else if (size < 0x10000) {
            // bin 16
            this.writeU8(0xc5);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // bin 32
            this.writeU8(0xc6);
            this.writeU32(size);
        } else {
            throw new Error("Too large binary: ".concat(size));
        }
        var bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$typedArrays$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureUint8Array"])(object);
        this.writeU8a(bytes);
    };
    Encoder.prototype.encodeArray = function(object, depth) {
        var size = object.length;
        if (size < 16) {
            // fixarray
            this.writeU8(0x90 + size);
        } else if (size < 0x10000) {
            // array 16
            this.writeU8(0xdc);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // array 32
            this.writeU8(0xdd);
            this.writeU32(size);
        } else {
            throw new Error("Too large array: ".concat(size));
        }
        for(var _i = 0, object_1 = object; _i < object_1.length; _i++){
            var item = object_1[_i];
            this.doEncode(item, depth + 1);
        }
    };
    Encoder.prototype.countWithoutUndefined = function(object, keys) {
        var count = 0;
        for(var _i = 0, keys_1 = keys; _i < keys_1.length; _i++){
            var key = keys_1[_i];
            if (object[key] !== undefined) {
                count++;
            }
        }
        return count;
    };
    Encoder.prototype.encodeMap = function(object, depth) {
        var keys = Object.keys(object);
        if (this.sortKeys) {
            keys.sort();
        }
        var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
        if (size < 16) {
            // fixmap
            this.writeU8(0x80 + size);
        } else if (size < 0x10000) {
            // map 16
            this.writeU8(0xde);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // map 32
            this.writeU8(0xdf);
            this.writeU32(size);
        } else {
            throw new Error("Too large map object: ".concat(size));
        }
        for(var _i = 0, keys_2 = keys; _i < keys_2.length; _i++){
            var key = keys_2[_i];
            var value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
                this.encodeString(key);
                this.doEncode(value, depth + 1);
            }
        }
    };
    Encoder.prototype.encodeExtension = function(ext) {
        var size = ext.data.length;
        if (size === 1) {
            // fixext 1
            this.writeU8(0xd4);
        } else if (size === 2) {
            // fixext 2
            this.writeU8(0xd5);
        } else if (size === 4) {
            // fixext 4
            this.writeU8(0xd6);
        } else if (size === 8) {
            // fixext 8
            this.writeU8(0xd7);
        } else if (size === 16) {
            // fixext 16
            this.writeU8(0xd8);
        } else if (size < 0x100) {
            // ext 8
            this.writeU8(0xc7);
            this.writeU8(size);
        } else if (size < 0x10000) {
            // ext 16
            this.writeU8(0xc8);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // ext 32
            this.writeU8(0xc9);
            this.writeU32(size);
        } else {
            throw new Error("Too large extension object: ".concat(size));
        }
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
    };
    Encoder.prototype.writeU8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
    };
    Encoder.prototype.writeU8a = function(values) {
        var size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
    };
    Encoder.prototype.writeI8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
    };
    Encoder.prototype.writeU16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
    };
    Encoder.prototype.writeI16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
    };
    Encoder.prototype.writeU32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeI32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeF32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeF64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
    };
    Encoder.prototype.writeU64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUint64"])(this.view, this.pos, value);
        this.pos += 8;
    };
    Encoder.prototype.writeI64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$utils$2f$int$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setInt64"])(this.view, this.pos, value);
        this.pos += 8;
    };
    return Encoder;
}();
;
 //# sourceMappingURL=Encoder.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encode",
    ()=>encode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@msgpack/msgpack/dist.es5+esm/Encoder.mjs [app-ssr] (ecmascript)");
;
var defaultEncodeOptions = {};
function encode(value, options) {
    if (options === void 0) {
        options = defaultEncodeOptions;
    }
    var encoder = new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$msgpack$2f$msgpack$2f$dist$2e$es5$2b$esm$2f$Encoder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Encoder"](options.extensionCodec, options.context, options.maxDepth, options.initialBufferSize, options.sortKeys, options.forceFloat32, options.ignoreUndefined, options.forceIntegerToFloat);
    return encoder.encodeSharedRef(value);
} //# sourceMappingURL=encode.mjs.map
}),
];

//# sourceMappingURL=staking_pool_v0-modern-landing-page-for-webdeve_527f9866._.js.map