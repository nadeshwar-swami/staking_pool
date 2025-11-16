(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeToggle() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            className: "h-9 w-9",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        className: "h-9 w-9 hover:bg-muted transition-colors",
        children: [
            theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-5 w-5 transition-transform hover:rotate-12"
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "h-5 w-5 transition-transform hover:-rotate-12"
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "uGU5l7ciDSfqFDe6wS7vfMb29jQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletButton",
    ()=>WalletButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WalletButton() {
    _s();
    const { isConnected, walletAddress, connect, disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: connect,
            className: "bg-primary hover:bg-primary/90",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                    className: "w-4 h-4 mr-2"
                }, void 0, false, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                "Connect Wallet"
            ]
        }, void 0, true, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    const displayAddress = walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connected";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    className: "border-primary/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        displayAddress
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                    onClick: disconnect,
                    className: "text-red-500 focus:text-red-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        "Disconnect"
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(WalletButton, "EbI8PReCbclpEdUmWbOc6e0optM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = WalletButton;
var _c;
__turbopack_context__.k.register(_c, "WalletButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const isHomepage = pathname === "/";
    const isFaqPage = pathname === "/faq";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hover:opacity-80 transition-opacity font-bold text-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary text-left",
                            children: "NaanFi"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    isHomepage || isFaqPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/NaanFi",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Docs"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/faq",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "FAQ"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://algorand.co/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Algorand"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/stake",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Stake"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/claim",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Claim"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/marketplace",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            isHomepage || isFaqPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/stake",
                                    children: "Stake & earn"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletButton"], {}, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Navbar, "IY/zSYIUBI6qU7L6Y+ureTHYFvg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-6xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "NaanFi"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                children: [
                                    "© 2025 NaanFi. All rights reserved.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 12,
                                        columnNumber: 50
                                    }, this),
                                    "MIT, Algorand, and other relevant licenses."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold mb-4",
                                children: "Navigate"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/stake",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Stake"
                                        }, void 0, false, {
                                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/claim",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Claim"
                                        }, void 0, false, {
                                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/marketplace",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Marketplace"
                                        }, void 0, false, {
                                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold mb-4",
                                children: "Follow Us"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://linkedin.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-muted-foreground hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://github.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-muted-foreground hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://twitter.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-muted-foreground hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Twitter"
                                            }, void 0, false, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/radio-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function RadioGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid gap-3', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/radio-group.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RadioGroup;
function RadioGroupItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/radio-group.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/radio-group.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/radio-group.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = RadioGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "RadioGroup");
__turbopack_context__.k.register(_c1, "RadioGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/app_state.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"app_id":749683109,"asset_id":749682930});}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current', {
    variants: {
        variant: {
            default: 'bg-card text-card-foreground',
            destructive: 'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakingForm",
    ()=>StakingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/radio-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/wallet-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/algosdk/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/algosdk/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$app_state$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/staking_pool/app_state.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/alert.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function StakingForm() {
    _s();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lockPeriod, setLockPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("30");
    const [connectFailed, setConnectFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isConnected, connect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const apy = {
        "30": 8,
        "60": 10,
        "90": 12
    };
    const estimatedReward = amount ? (parseFloat(amount) * apy[lockPeriod] / 100).toFixed(2) : "0";
    const { signTransactions, walletAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const ALGOD_SERVER = "https://testnet-api.algonode.cloud";
    const ALGOD_TOKEN = "";
    const algodClient = new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Algodv2(ALGOD_TOKEN, ALGOD_SERVER, "");
    const uint8ArrayToBase64 = (u8)=>{
        let binary = "";
        for(let i = 0; i < u8.length; i++)binary += String.fromCharCode(u8[i]);
        return btoa(binary);
    };
    const base64ToUint8Array = (b64)=>{
        const binary = atob(b64);
        const len = binary.length;
        const u8 = new Uint8Array(len);
        for(let i = 0; i < len; i++)u8[i] = binary.charCodeAt(i);
        return u8;
    };
    async function waitForConfirmation(txId, timeout = 10) {
        const start = Date.now();
        while(true){
            try {
                const info = await algodClient.pendingTransactionInformation(txId).do();
                if (info && info['confirmed-round'] && info['confirmed-round'] > 0) return info;
            } catch (e) {
            // ignore and retry
            }
            if ((Date.now() - start) / 1000 > timeout) throw new Error('Timed out waiting for confirmation');
            await new Promise((r)=>setTimeout(r, 1000));
        }
    }
    const handleStake = async ()=>{
        if (!isConnected) {
            const addr = await connect();
            if (!addr) {
                setConnectFailed(true);
                return;
            }
            setConnectFailed(false);
        }
        // At this point the wallet is connected. Perform staking flow on TestNet.
        if (!amount || parseFloat(amount) < 1) {
            alert('Enter a valid amount (>= 1 ALGO)');
            return;
        }
        if (!signTransactions) {
            alert('Wallet cannot sign transactions. Ensure Pera is connected.');
            return;
        }
        try {
            // Dynamically load app_id and asset_id from app_state.json
            const appId = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$app_state$2e$json__$28$json$29$__["default"].app_id;
            // If you need asset_id, use: const assetId = appState.asset_id
            let sender = walletAddress;
            console.log('[STAKE] walletAddress from context:', walletAddress);
            if (!sender) {
                // try to reconnect/get address from wallet
                const addr = await connect();
                console.log('[STAKE] connect() returned:', addr);
                if (!addr) {
                    setConnectFailed(true);
                    throw new Error('Wallet address not available');
                }
                sender = addr;
            }
            console.log('[STAKE] using sender:', sender);
            const microAlgos = Math.floor(parseFloat(amount) * 1e6);
            console.log('[STAKE] microAlgos:', microAlgos);
            let payTxn = undefined;
            let runtimeSdk = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
            // Diagnostics: inspect algosdk exported keys and helper availability
            try {
                console.log('[STAKE] algosdk keys:', Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__));
                console.log('[STAKE] algosdk helpers:', {
                    makePaymentTxnWithSuggestedParams: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makePaymentTxnWithSuggestedParams,
                    makePaymentTxnWithSuggestedParamsFromObject: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makePaymentTxnWithSuggestedParamsFromObject,
                    TransactionCtor: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Transaction || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.transaction?.Transaction
                });
            } catch (diagErr) {
                console.warn('[STAKE] failed to enumerate algosdk keys', diagErr);
            }
            const rawParams = await algodClient.getTransactionParams().do();
            console.log('[STAKE] suggestedParams (raw):', rawParams);
            // Sanitize params: convert BigInt values to numbers and ensure both key variants exist
            const sanitized = {};
            for (const k of Object.keys(rawParams)){
                const v = rawParams[k];
                if (typeof v === 'bigint') sanitized[k] = Number(v);
                else sanitized[k] = v;
            }
            // Also ensure both firstValid/lastValid and firstRound/lastRound are present as numbers
            if (sanitized.firstValid !== undefined) {
                sanitized.firstRound = Number(sanitized.firstValid);
            }
            if (sanitized.lastValid !== undefined) {
                sanitized.lastRound = Number(sanitized.lastValid);
            }
            if (sanitized.firstRound !== undefined) sanitized.firstRound = Number(sanitized.firstRound);
            if (sanitized.lastRound !== undefined) sanitized.lastRound = Number(sanitized.lastRound);
            if (sanitized.fee !== undefined) sanitized.fee = Number(sanitized.fee);
            const params = sanitized;
            console.log('[STAKE] suggestedParams (sanitized):', params);
            // payment to app escrow
            const rawAppAddr = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getApplicationAddress(appId);
            const appAddr = typeof rawAppAddr === 'string' ? rawAppAddr : rawAppAddr.toString();
            console.log('[STAKE] rawAppAddr:', rawAppAddr);
            console.log('[STAKE] appAddr (string):', appAddr);
            console.log('[STAKE] from (sender):', sender);
            console.log('[STAKE] to (appAddr):', appAddr);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidAddress(sender)) {
                console.error('[STAKE] Invalid sender address:', sender);
                throw new Error('Invalid sender address: ' + sender);
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidAddress(appAddr)) {
                console.error('[STAKE] Invalid app address:', appAddr);
                throw new Error('Invalid app address: ' + appAddr);
            }
            let suggestedParamsForTxn = undefined;
            try {
                // extra diagnostics
                const decodedFrom = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decodeAddress(sender);
                const decodedTo = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.decodeAddress(appAddr);
                console.log('[STAKE] decodedFrom.publicKey.length:', decodedFrom.publicKey.length);
                console.log('[STAKE] decodedTo.publicKey.length:', decodedTo.publicKey.length);
                console.log('[STAKE] params keys and types:', Object.fromEntries(Object.keys(params).map((k)=>[
                        k,
                        typeof params[k]
                    ])));
                // Build a minimal suggestedParams object with the expected keys
                const toBase64 = (x)=>{
                    if (!x) return x;
                    if (typeof x === 'string') return x;
                    if (x instanceof Uint8Array) {
                        let binary = '';
                        for(let i = 0; i < x.length; i++)binary += String.fromCharCode(x[i]);
                        return btoa(binary);
                    }
                    // handle plain object with numeric keys
                    if (typeof x === 'object') {
                        const keys = Object.keys(x).map(Number).sort((a, b)=>a - b);
                        if (keys.length) {
                            const arr = new Uint8Array(keys.length);
                            for(let i = 0; i < keys.length; i++)arr[i] = x[i];
                            let binary = '';
                            for(let i = 0; i < arr.length; i++)binary += String.fromCharCode(arr[i]);
                            return btoa(binary);
                        }
                    }
                    return x;
                };
                // Ensure genesisHash is a Uint8Array (algosdk expects bytes)
                const fromBase64ToUint8 = (b64)=>{
                    if (!b64) return b64;
                    if (b64 instanceof Uint8Array) return b64;
                    if (typeof b64 === 'string') {
                        const bin = atob(b64);
                        const u8 = new Uint8Array(bin.length);
                        for(let i = 0; i < bin.length; i++)u8[i] = bin.charCodeAt(i);
                        return u8;
                    }
                    // object with numeric keys
                    if (typeof b64 === 'object') {
                        const keys = Object.keys(b64).map(Number).sort((a, b)=>a - b);
                        const arr = new Uint8Array(keys.length);
                        for(let i = 0; i < keys.length; i++)arr[i] = b64[i];
                        return arr;
                    }
                    return b64;
                };
                const genesisHashBytes = fromBase64ToUint8(params.genesisHash);
                suggestedParamsForTxn = {
                    flatFee: Boolean(params.flatFee),
                    fee: Number(params.fee || 0),
                    firstRound: Number(params.firstRound || params.firstValid),
                    lastRound: Number(params.lastRound || params.lastValid),
                    firstValid: Number(params.firstValid || params.firstRound),
                    lastValid: Number(params.lastValid || params.lastRound),
                    genesisID: params.genesisID,
                    // use base64 string for genesisHash to satisfy various algosdk builds
                    genesisHash: toBase64(genesisHashBytes)
                };
                console.log('[STAKE] suggestedParamsForTxn:', JSON.stringify(suggestedParamsForTxn));
                payTxn = null;
                try {
                    // Track the runtime SDK instance so encoding uses the same build
                    let runtimeSdk = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
                    // Dynamic import adapter: load the actual runtime export shape
                    const sdkModule = await __turbopack_context__.A("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/algosdk/dist/esm/index.js [app-client] (ecmascript, async loader)");
                    const sdk = sdkModule?.default ?? sdkModule;
                    runtimeSdk = sdk;
                    console.log('[STAKE] dynamic sdk keys:', Object.keys(sdk || {}));
                    // Try helper-from-object with base64 genesisHash first
                    try {
                        payTxn = sdk.makePaymentTxnWithSuggestedParamsFromObject({
                            from: sender,
                            to: appAddr,
                            amount: microAlgos,
                            suggestedParams: suggestedParamsForTxn
                        });
                        console.log('[STAKE] payTxn (sdk helper fromObject with base64):', payTxn);
                    } catch (err1) {
                        console.warn('[STAKE] helper-from-object with base64 failed', err1);
                        // Try with genesisHash as bytes
                        try {
                            const ghBytes = base64ToUint8Array(suggestedParamsForTxn.genesisHash);
                            const suggestedParamsBytes = {
                                ...suggestedParamsForTxn,
                                genesisHash: ghBytes
                            };
                            payTxn = sdk.makePaymentTxnWithSuggestedParamsFromObject({
                                from: sender,
                                to: appAddr,
                                amount: microAlgos,
                                suggestedParams: suggestedParamsBytes
                            });
                            console.log('[STAKE] payTxn (sdk helper fromObject with bytes):', payTxn);
                        } catch (err2) {
                            console.warn('[STAKE] helper-from-object with bytes failed', err2);
                            // Fall back to manual Transaction constructor
                            try {
                                const TxConstructor = sdk.Transaction || sdk.transaction?.Transaction;
                                if (!TxConstructor) throw new Error('Transaction constructor not found on sdk');
                                const txObj = {
                                    type: 'pay',
                                    sender: sender,
                                    suggestedParams: {
                                        flatFee: Boolean(suggestedParamsForTxn.flatFee),
                                        fee: Number(suggestedParamsForTxn.fee || 0),
                                        minFee: 0,
                                        firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                                        lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                                        genesisID: suggestedParamsForTxn.genesisID,
                                        genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
                                    },
                                    paymentParams: {
                                        receiver: appAddr,
                                        amount: microAlgos
                                    }
                                };
                                try {
                                    console.log('[STAKE] TxConstructor type:', typeof TxConstructor);
                                    try {
                                        console.log('[STAKE] TxConstructor keys:', Object.keys(TxConstructor));
                                    } catch (kErr) {
                                    // ignore
                                    }
                                    // If the constructor exposes a from_obj_for_encoding helper, try it
                                    if (typeof TxConstructor.from_obj_for_encoding === 'function') {
                                        try {
                                            const enc = TxConstructor.from_obj_for_encoding(txObj);
                                            console.log('[STAKE] from_obj_for_encoding returned:', enc);
                                            payTxn = new TxConstructor(enc);
                                            console.log('[STAKE] payTxn (manual ctor via from_obj_for_encoding):', payTxn);
                                        } catch (fErr) {
                                            console.warn('[STAKE] from_obj_for_encoding path failed', fErr);
                                            throw fErr;
                                        }
                                    } else {
                                        // Try direct construction with string addresses
                                        try {
                                            console.log('[STAKE] attempting new TxConstructor(txObj) with txObj:', txObj);
                                            payTxn = new TxConstructor(txObj);
                                            console.log('[STAKE] payTxn (manual ctor with string addresses):', payTxn);
                                        } catch (txErr1) {
                                            console.warn('[STAKE] manual with string addresses failed, trying byte addresses', txErr1);
                                            const txObjBytes = {
                                                type: 'pay',
                                                sender: decodedFrom,
                                                suggestedParams: {
                                                    flatFee: Boolean(suggestedParamsForTxn.flatFee),
                                                    fee: Number(suggestedParamsForTxn.fee || 0),
                                                    minFee: 0,
                                                    firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                                                    lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                                                    genesisID: suggestedParamsForTxn.genesisID,
                                                    genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
                                                },
                                                paymentParams: {
                                                    receiver: decodedTo,
                                                    amount: microAlgos
                                                }
                                            };
                                            console.log('[STAKE] attempting new TxConstructor(txObjBytes) with txObjBytes:', txObjBytes);
                                            payTxn = new TxConstructor(txObjBytes);
                                            console.log('[STAKE] payTxn (manual ctor with byte addresses):', payTxn);
                                        }
                                    }
                                    // If we reached here without payTxn, try low-level encoding to produce unsigned bytes
                                    if (!payTxn) {
                                        try {
                                            console.log('[STAKE] attempting low-level encodeUnsignedTransaction fallback');
                                            let unsignedBytes;
                                            // Try top-level helper
                                            if (typeof runtimeSdk.encodeUnsignedTransaction === 'function') {
                                                unsignedBytes = runtimeSdk.encodeUnsignedTransaction(txObj);
                                            } else if (runtimeSdk.encoding && typeof runtimeSdk.encoding.encodeUnsignedTransaction === 'function') {
                                                unsignedBytes = runtimeSdk.encoding.encodeUnsignedTransaction(txObj);
                                            } else if (TxConstructor && typeof TxConstructor.from_obj_for_encoding === 'function') {
                                                const encObj = TxConstructor.from_obj_for_encoding(txObj);
                                                if (encObj && typeof runtimeSdk.encodeUnsignedTransaction === 'function') unsignedBytes = runtimeSdk.encodeUnsignedTransaction(encObj);
                                            }
                                            if (unsignedBytes) {
                                                const unsignedB64single = uint8ArrayToBase64(unsignedBytes);
                                                console.log('[STAKE] low-level unsignedB64 produced');
                                                // Pass directly to signing helper (single txn group will be handled later)
                                                const signedLow = await signTransactions([
                                                    [
                                                        unsignedB64single
                                                    ]
                                                ]);
                                                console.log('[STAKE] signedLow result:', signedLow);
                                                // normalize and send
                                                let blobs = [];
                                                if (Array.isArray(signedLow)) {
                                                    if (typeof signedLow[0] === 'string') blobs = signedLow.map(base64ToUint8Array);
                                                } else if (signedLow && signedLow.signedTransactions) {
                                                    blobs = signedLow.signedTransactions.map(base64ToUint8Array);
                                                }
                                                if (blobs.length) {
                                                    const sendResult = await algodClient.sendRawTransaction(blobs).do();
                                                    console.log('[STAKE] sendResult (low-level):', sendResult);
                                                    const txId = sendResult.txId || sendResult.txid || sendResult.txID;
                                                    const confirmed = await waitForConfirmation(txId, 30);
                                                    console.log('[STAKE] confirmed (low-level):', confirmed);
                                                    alert(`Stake transaction confirmed via low-level path (txid: ${txId})`);
                                                    return;
                                                }
                                            }
                                        } catch (lowErr) {
                                            console.warn('[STAKE] low-level encoding fallback failed', lowErr);
                                        }
                                    }
                                } catch (errTry) {
                                    console.error('[STAKE] all manual constructor attempts failed', errTry);
                                    throw errTry;
                                }
                            } catch (finalErr) {
                                console.error('[STAKE] final manual Transaction constructor failed', finalErr);
                                // As a last resort, try loading the browser UMD build of algosdk from CDN
                                try {
                                    const sdkFromCdn = await new Promise((resolve, reject)=>{
                                        if (window.algosdk) return resolve(window.algosdk);
                                        const s = document.createElement('script');
                                        // prefer local vendored UMD build to avoid CDN/tracking issues
                                        const localPath = '/libs/algosdk.min.js';
                                        s.src = localPath;
                                        s.onload = ()=>{
                                            if (window.algosdk) return resolve(window.algosdk);
                                            // if local file loaded but didn't populate, fall back to CDN
                                            const cdn = 'https://cdn.jsdelivr.net/npm/algosdk/dist/browser/algosdk.min.js';
                                            const s2 = document.createElement('script');
                                            s2.src = cdn;
                                            s2.onload = ()=>window.algosdk ? resolve(window.algosdk) : reject(new Error('Loaded scripts but algosdk not available'));
                                            s2.onerror = ()=>reject(new Error('Failed to load algosdk from CDN'));
                                            document.head.appendChild(s2);
                                        };
                                        s.onerror = ()=>{
                                            // try CDN if local missing or blocked
                                            const cdn = 'https://cdn.jsdelivr.net/npm/algosdk/dist/browser/algosdk.min.js';
                                            const s2 = document.createElement('script');
                                            s2.src = cdn;
                                            s2.onload = ()=>window.algosdk ? resolve(window.algosdk) : reject(new Error('Loaded CDN but algosdk not available'));
                                            s2.onerror = ()=>reject(new Error('Failed to load algosdk from CDN and local'));
                                            document.head.appendChild(s2);
                                        };
                                        document.head.appendChild(s);
                                    });
                                    console.log('[STAKE] loaded algosdk from CDN keys:', Object.keys(sdkFromCdn || {}));
                                    runtimeSdk = sdkFromCdn;
                                    // Try helper-from-object on CDN sdk
                                    try {
                                        payTxn = sdkFromCdn.makePaymentTxnWithSuggestedParamsFromObject({
                                            from: sender,
                                            to: appAddr,
                                            amount: microAlgos,
                                            suggestedParams: suggestedParamsForTxn
                                        });
                                        console.log('[STAKE] payTxn (cdn helper fromObject):', payTxn);
                                    } catch (cdnErr) {
                                        console.warn('[STAKE] cdn helper-from-object failed', cdnErr);
                                        // try manual constructor on CDN sdk
                                        const TxConstructorCdn = sdkFromCdn.Transaction || sdkFromCdn.transaction?.Transaction;
                                        if (!TxConstructorCdn) throw new Error('Transaction constructor not found on CDN sdk');
                                        const txObjCdn = {
                                            type: 'pay',
                                            sender: sender,
                                            suggestedParams: {
                                                flatFee: Boolean(suggestedParamsForTxn.flatFee),
                                                fee: Number(suggestedParamsForTxn.fee || 0),
                                                minFee: 0,
                                                firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                                                lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                                                genesisID: suggestedParamsForTxn.genesisID,
                                                genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
                                            },
                                            paymentParams: {
                                                receiver: appAddr,
                                                amount: microAlgos
                                            }
                                        };
                                        payTxn = new TxConstructorCdn(txObjCdn);
                                        console.log('[STAKE] payTxn (cdn manual ctor):', payTxn);
                                    }
                                } catch (cdnFinalErr) {
                                    console.error('[STAKE] CDN fallback failed', cdnFinalErr);
                                    throw finalErr;
                                }
                            }
                        }
                    }
                } catch (err) {
                    console.error('[STAKE] failed building payTxn', {
                        sender,
                        appAddr,
                        microAlgos,
                        paramsSummary: Object.fromEntries(Object.keys(params).map((k)=>[
                                k,
                                String(params[k])
                            ]))
                    }, err);
                    throw err;
                }
            } catch (err) {
                console.error('[STAKE] failed building payTxn', {
                    sender,
                    appAddr,
                    microAlgos,
                    paramsSummary: Object.fromEntries(Object.keys(params).map((k)=>[
                            k,
                            String(params[k])
                        ]))
                }, err);
                throw err;
            }
            // app call with "stake"
            const appArg = new TextEncoder().encode('stake');
            let appTxn = null;
            try {
                console.log('[STAKE] building appTxn with helper; sender, suggestedParamsForTxn:', sender, suggestedParamsForTxn);
                appTxn = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeApplicationNoOpTxnFromObject({
                    from: sender,
                    suggestedParams: suggestedParamsForTxn,
                    appIndex: appId,
                    appArgs: [
                        appArg
                    ]
                });
                console.log('[STAKE] appTxn (helper):', appTxn);
            } catch (appErr) {
                console.warn('[STAKE] helper makeApplicationNoOpTxnFromObject failed, falling back to manual TxConstructor', appErr);
                try {
                    const TxConstructorGlobal = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Transaction || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.transaction?.Transaction;
                    if (!TxConstructorGlobal) throw new Error('Transaction constructor not found on algosdk');
                    const appTxObj = {
                        type: 'appl',
                        sender: sender,
                        suggestedParams: {
                            flatFee: Boolean(suggestedParamsForTxn.flatFee),
                            fee: Number(suggestedParamsForTxn.fee || 0),
                            minFee: 0,
                            firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                            lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                            genesisID: suggestedParamsForTxn.genesisID,
                            genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
                        },
                        appCallParams: {
                            appIndex: appId,
                            onComplete: 0,
                            appArgs: [
                                appArg
                            ]
                        }
                    };
                    console.log('[STAKE] attempting new TxConstructor(appTxObj) with appTxObj:', appTxObj);
                    appTxn = new TxConstructorGlobal(appTxObj);
                    console.log('[STAKE] appTxn (manual ctor):', appTxn);
                } catch (finalAppErr) {
                    console.error('[STAKE] failed to build appTxn via manual constructor', finalAppErr);
                    throw finalAppErr;
                }
            }
            // assign group id
            if (!payTxn) {
                throw new Error('Payment transaction was not constructed');
            }
            const txns = [
                payTxn,
                appTxn
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.assignGroupID(txns);
            console.log('[STAKE] txns after group assignment:', txns);
            // Try canonical encoder utility (fallback). If it fails, fall back to runtime encoder.
            let unsignedB64 = [];
            let usedFallback = false;
            try {
                const { encodeTxnsCanonical } = await __turbopack_context__.A("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/algorandEncode.ts [app-client] (ecmascript, async loader)");
                const encoded = encodeTxnsCanonical(txns, suggestedParamsForTxn, appId, appArg);
                if (encoded && encoded.length) {
                    // sanity-check encoded lengths. Very small encodings indicate our canonical serializer produced an empty map
                    const sizes = encoded.map((u)=>u ? u.length : 0);
                    console.log('[STAKE] canonical encoded sizes:', sizes);
                    const minSize = Math.min(...sizes);
                    if (minSize > 8) {
                        unsignedB64 = encoded.map((u)=>uint8ArrayToBase64(u));
                        console.log('[STAKE] unsignedB64 (canonical encoder):', unsignedB64);
                        usedFallback = true;
                    } else {
                        console.warn('[STAKE] canonical encoder produced suspiciously small encodings, ignoring and using runtime encoder', sizes);
                    }
                }
            } catch (errEnc) {
                console.warn('[STAKE] canonical encoder failed, falling back to runtime encode', errEnc);
            }
            if (!usedFallback) {
                const encodeFn = runtimeSdk && typeof runtimeSdk.encodeUnsignedTransaction === 'function' ? runtimeSdk.encodeUnsignedTransaction.bind(runtimeSdk) : __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.encodeUnsignedTransaction?.bind(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__);
                if (!encodeFn) throw new Error('No encode function available on algosdk runtime');
                unsignedB64 = txns.map((t)=>uint8ArrayToBase64(encodeFn(t)));
                console.log('[STAKE] unsignedB64 (runtime encode):', unsignedB64);
            }
            // Pera usually expects an array (or nested groups). Try passing a single group.
            const signed = await signTransactions([
                unsignedB64
            ]);
            console.log('[STAKE] signed result:', signed);
            if (!signed) throw new Error('Signing failed or was cancelled');
            // Normalize signed result to array of Uint8Array
            let signedBlobs = [];
            // Handle several possible shapes from Pera
            if (Array.isArray(signed)) {
                // several possible shapes: array of base64 strings, array of Uint8Array, array of objects with .blob, or nested groups
                try {
                    if (signed.length && typeof signed[0] === 'string') {
                        signedBlobs = signed.map((s)=>base64ToUint8Array(String(s)));
                    } else if (signed.length && signed[0] instanceof Uint8Array) {
                        signedBlobs = signed;
                    } else if (signed.length && signed[0] && signed[0].blob) {
                        signedBlobs = signed.map((s)=>base64ToUint8Array(s.blob));
                    } else {
                        // try to flatten nested groups
                        const flat = [];
                        for (const g of signed){
                            if (Array.isArray(g)) {
                                for (const s of g){
                                    if (typeof s === 'string') flat.push(s);
                                    else if (s && s.blob) flat.push(s.blob);
                                }
                            }
                        }
                        if (flat.length) signedBlobs = flat.map((s)=>base64ToUint8Array(s));
                    }
                } catch (e) {
                // fall through to other handlers
                }
            } else if (signed && signed.signedTransactions) {
                const arr = signed.signedTransactions;
                signedBlobs = arr.map((s)=>base64ToUint8Array(s));
            }
            console.log('[STAKE] signedBlobs:', signedBlobs);
            if (!signedBlobs.length) throw new Error('No signed transactions returned');
            // submit raw signed txns
            const sendResult = await algodClient.sendRawTransaction(signedBlobs).do();
            console.log('[STAKE] sendResult:', sendResult);
            const txId = sendResult.txid || sendResult.txId || sendResult.txID;
            if (!txId) throw new Error('No txid from send');
            const confirmed = await waitForConfirmation(txId, 30);
            console.log('[STAKE] confirmed:', confirmed);
            const confirmedRound = confirmed['confirmed-round'] ?? confirmed.confirmedRound;
            alert(`Stake transaction confirmed in round ${confirmedRound} (txid: ${txId})`);
        } catch (e) {
            console.error('Stake failed', e);
            alert(`Stake failed: ${e?.message || String(e)}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-8 bg-card/50 backdrop-blur-sm border border-primary/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "space-y-8",
            children: [
                !isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    className: "border border-yellow-500/20 bg-yellow-500/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-4 w-4 text-yellow-600"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            className: "ml-2 text-yellow-600",
                            children: "Please connect your wallet to stake"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 615,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 613,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "amount",
                            className: "text-base font-semibold",
                            children: "ALGO Amount"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "amount",
                                    type: "number",
                                    placeholder: "Enter amount to stake",
                                    value: amount,
                                    onChange: (e)=>setAmount(e.target.value),
                                    disabled: !isConnected,
                                    className: "pr-12 h-12 text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 627,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium",
                                    children: "ALGO"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 636,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Minimum stake: 1 ALGO"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 622,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-base font-semibold",
                            children: "Lock Period"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 645,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                            value: lockPeriod,
                            onValueChange: (v)=>setLockPeriod(v),
                            disabled: !isConnected,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    {
                                        value: "30",
                                        label: "30 Days",
                                        apr: "8%"
                                    },
                                    {
                                        value: "60",
                                        label: "60 Days",
                                        apr: "10%"
                                    },
                                    {
                                        value: "90",
                                        label: "90 Days",
                                        apr: "12%"
                                    }
                                ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center p-4 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                value: option.value,
                                                id: `period-${option.value}`
                                            }, void 0, false, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                                lineNumber: 657,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: `period-${option.value}`,
                                                className: "flex-1 ml-3 cursor-pointer flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: option.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-primary",
                                                        children: [
                                                            "Expected APR: ",
                                                            option.apr
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                                lineNumber: 658,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, option.value, true, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                        lineNumber: 653,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 646,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 644,
                    columnNumber: 9
                }, this),
                amount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-primary/5 border border-primary/20 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-1",
                            children: "Estimated Annual Rewards"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 674,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold text-primary",
                            children: [
                                estimatedReward,
                                " NAAN"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 675,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 673,
                    columnNumber: 11
                }, this),
                !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "lg",
                            className: "w-full bg-primary hover:bg-primary/90 text-lg font-semibold py-6 flex items-center justify-center",
                            onClick: async ()=>{
                                const addr = await connect();
                                if (!addr) setConnectFailed(true);
                                else setConnectFailed(false);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    className: "mr-2 h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this),
                                "Connect Wallet"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 682,
                            columnNumber: 13
                        }, this),
                        connectFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                            className: "mt-4 border border-yellow-500/20 bg-yellow-500/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "h-4 w-4 text-yellow-600"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 698,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                    className: "ml-2 text-yellow-600",
                                    children: [
                                        "Couldn't connect to Pera Wallet. Please install or enable Pera Wallet and allow this site to connect. Get the wallet at",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "underline",
                                            href: "https://perawallet.app",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "perawallet.app"
                                        }, void 0, false, {
                                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                            lineNumber: 701,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 699,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 697,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 681,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "lg",
                    className: "w-full bg-primary hover:bg-primary/90 text-lg font-semibold py-6",
                    onClick: handleStake,
                    disabled: !amount || parseFloat(amount) < 1,
                    children: "Stake ALGO"
                }, void 0, false, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 707,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground text-center",
                    children: "You will receive an NFT representing your staked position"
                }, void 0, false, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 718,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
            lineNumber: 611,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, this);
}
_s(StakingForm, "wlqlR9fLRiqaboqdK5JW4ztNaO4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$wallet$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = StakingForm;
var _c;
__turbopack_context__.k.register(_c, "StakingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakingStats",
    ()=>StakingStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
;
;
function StakingStats() {
    const stats = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            label: "Total Value Locked",
            value: "$10.5M"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            label: "Active Stakers",
            value: "10,234"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
            label: "Average Lock Period",
            value: "67 Days"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            stats.map((stat, idx)=>{
                const Icon = stat.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-6 bg-card/50 backdrop-blur-sm border border-primary/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-primary/10 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mb-1",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                }, idx, false, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-6 bg-secondary/5 border border-secondary/20 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold",
                        children: "How it Works"
                    }, void 0, false, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-muted-foreground space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-bold",
                                        children: "1."
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Connect your Algorand wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-bold",
                                        children: "2."
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Enter stake amount and lock period"
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-bold",
                                        children: "3."
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Receive NFT stake token"
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-bold",
                                        children: "4."
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Claim rewards after lock ends"
                                    }, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = StakingStats;
var _c;
__turbopack_context__.k.register(_c, "StakingStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StakePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$staking$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$staking$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-stats.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function StakePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex-1 py-20 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-5xl font-bold mb-4 text-balance",
                                    children: "Stake ALGO"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-muted-foreground",
                                    children: "Lock your tokens and earn rewards in Naan"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$staking$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakingForm"], {}, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$staking$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakingStats"], {}, void 0, false, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/app/stake/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = StakePage;
var _c;
__turbopack_context__.k.register(_c, "StakePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=staking_pool_49eb4251._.js.map