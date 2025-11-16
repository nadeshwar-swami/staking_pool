(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-provider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletProvider",
    ()=>WalletProvider,
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const WalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WalletProvider({ children }) {
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [walletAddress, setWalletAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // pera wallet instance (lazy) stored in a ref so it persists across renders
    const peraWalletRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connect = async ()=>{
        try {
            // Dynamically import PeraWalletConnect so dev doesn't break if package isn't installed
            const mod = await __turbopack_context__.A("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index.js [app-client] (ecmascript, async loader)");
            const PeraWalletConnect = mod.default || mod.PeraWalletConnect || mod;
            if (!peraWalletRef.current) {
                peraWalletRef.current = new PeraWalletConnect();
            }
            // Attempt to reconnect to existing session first
            try {
                const recon = await peraWalletRef.current.reconnectSession();
                if (recon && recon.length) {
                    const addr = Array.isArray(recon) ? recon[0] : recon;
                    setWalletAddress(String(addr));
                    setIsConnected(true);
                    // subscribe disconnect
                    peraWalletRef.current.connector?.on("disconnect", ()=>disconnect());
                    return String(addr);
                }
            } catch (e) {
            // ignore reconnect error
            }
            const accounts = await peraWalletRef.current.connect();
            // pera may return an array of addresses or an object — handle both
            let address = null;
            if (Array.isArray(accounts) && accounts.length > 0) address = accounts[0];
            // some versions return { account: '...', address: '...' }
            if (!address && accounts) {
                address = accounts.account || accounts.address || accounts.accounts && accounts.accounts[0] || null;
            }
            if (address) {
                setWalletAddress(address);
                setIsConnected(true);
                peraWalletRef.current.connector?.on("disconnect", ()=>disconnect());
                return address;
            } else {
                throw new Error("No account returned from Pera");
            }
        } catch (error) {
            console.error("Pera Wallet integration failed or not installed:", error);
            // Do not fallback to a mock address. Let caller handle null return.
            return null;
        }
    };
    const disconnect = ()=>{
        try {
            // attempt to disconnect Pera session if available
            ;
            (async ()=>{
                try {
                    if (peraWalletRef.current) {
                        await peraWalletRef.current.disconnect();
                        peraWalletRef.current = null;
                    }
                } catch (e) {
                // ignore
                }
            })();
        } catch (e) {
        // ignore
        }
        setWalletAddress(null);
        setIsConnected(false);
    };
    const signTransactions = async (txnGroups)=>{
        try {
            if (!peraWalletRef.current) {
                const mod = await __turbopack_context__.A("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index.js [app-client] (ecmascript, async loader)");
                const PeraWalletConnect = mod.default || mod.PeraWalletConnect || mod;
                peraWalletRef.current = new PeraWalletConnect();
            }
            // Normalize txnGroups to arrays of Uint8Array (raw unsigned txn bytes), which Pera can sign directly.
            const normalize = (g)=>g.map((t)=>{
                    // base64 string -> bytes
                    if (typeof t === 'string') {
                        const bin = atob(t);
                        const u8 = new Uint8Array(bin.length);
                        for(let i = 0; i < bin.length; i++)u8[i] = bin.charCodeAt(i);
                        return u8;
                    }
                    // Uint8Array -> pass through
                    if (t instanceof Uint8Array) return t;
                    // object with txn base64
                    if (t && t.txn) {
                        const b64 = t.txn;
                        const bin = atob(b64);
                        const u8 = new Uint8Array(bin.length);
                        for(let i = 0; i < bin.length; i++)u8[i] = bin.charCodeAt(i);
                        return u8;
                    }
                    // fallback: coerce to string then to bytes
                    const str = String(t);
                    const bin = atob(str);
                    const u8 = new Uint8Array(bin.length);
                    for(let i = 0; i < bin.length; i++)u8[i] = bin.charCodeAt(i);
                    return u8;
                });
            const payload = txnGroups.map(normalize);
            try {
                const signed = await peraWalletRef.current.signTransaction(payload);
                return signed;
            } catch (firstErr) {
                console.warn('Pera signTransaction failed for raw payload, retrying with {txn: base64} objects', firstErr);
                // helper to convert uint8array -> base64
                const u8ToB64 = (u8)=>{
                    let binary = '';
                    for(let i = 0; i < u8.length; i++)binary += String.fromCharCode(u8[i]);
                    return btoa(binary);
                };
                const alt = payload.map((group)=>group.map((u)=>({
                            txn: u8ToB64(u)
                        })));
                try {
                    const signed2 = await peraWalletRef.current.signTransaction(alt);
                    return signed2;
                } catch (secondErr) {
                    console.error('Pera signTransaction retry with {txn: base64} also failed', secondErr);
                    throw secondErr;
                }
            }
        } catch (e) {
            console.error("Failed to sign transactions with Pera:", e);
            return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletContext.Provider, {
        value: {
            isConnected,
            walletAddress,
            connect,
            disconnect,
            signTransactions
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-context.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(WalletProvider, "f6WDxUuYh24MIQAS4OyxaIZI0nE=");
_c = WalletProvider;
function useWallet() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
_s1(useWallet, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WalletProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=staking_pool_v0-modern-landing-page-for-webdeve_components_89dba87b._.js.map