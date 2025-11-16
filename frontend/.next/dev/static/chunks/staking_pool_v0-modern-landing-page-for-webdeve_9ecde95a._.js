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
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = 'right', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500', side === 'right' && 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm', side === 'left' && 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:animate-in data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm', side === 'top' && 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:animate-in data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b', side === 'bottom' && 'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-1.5 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-auto flex flex-col gap-2 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/ui/sheet.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MobileMenu() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuItems = [
        {
            href: "#over-ons",
            label: "Over Ons"
        },
        {
            href: "#diensten",
            label: "Diensten"
        },
        {
            href: "#portfolio",
            label: "Portfolio"
        },
        {
            href: "#pakketten",
            label: "Pakketten"
        },
        {
            href: "#contact",
            label: "Contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "md:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Toggle menu"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                side: "right",
                className: "w-[280px] sm:w-[350px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: "Navigatie Menu"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                children: "Navigeer naar verschillende secties van de website"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-1 mt-8",
                        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setOpen(false),
                                className: "text-base font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg border-b border-border/50 last:border-b-0",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(MobileMenu, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$mobile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/mobile-menu.tsx [app-client] (ecmascript)");
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
    const isStakingPage = pathname.includes("stake") || pathname.includes("claim") || pathname.includes("marketplace");
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
                    isHomepage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#docs",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "Docs"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#faq",
                                className: "text-sm font-medium hover:text-primary transition-colors",
                                children: "FAQ"
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#algorand",
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
                            isHomepage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$mobile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenu"], {}, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/navbar.tsx",
                                lineNumber: 79,
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
    const algodClient = new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].Algodv2(ALGOD_TOKEN, ALGOD_SERVER, "");
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
            // Load app_id from app_state.json
            const appId = 749683109 // staking app id (update if needed)
            ;
            // If you want to use asset_id, load 749682930
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
            const params = await algodClient.getTransactionParams().do();
            console.log('[STAKE] suggestedParams:', params);
            // payment to app escrow
            const rawAppAddr = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].getApplicationAddress(appId);
            const appAddr = typeof rawAppAddr === 'string' ? rawAppAddr : rawAppAddr.toString();
            console.log('[STAKE] rawAppAddr:', rawAppAddr);
            console.log('[STAKE] appAddr (string):', appAddr);
            const payTxn = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].makePaymentTxnWithSuggestedParamsFromObject({
                from: sender,
                to: appAddr,
                amount: microAlgos,
                suggestedParams: params
            });
            console.log('[STAKE] payTxn:', payTxn);
            // app call with "stake"
            const appArg = new TextEncoder().encode('stake');
            const appTxn = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].makeApplicationNoOpTxnFromObject({
                from: sender,
                suggestedParams: params,
                appIndex: appId,
                appArgs: [
                    appArg
                ]
            });
            console.log('[STAKE] appTxn:', appTxn);
            // assign group id
            const txns = [
                payTxn,
                appTxn
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].assignGroupID(txns);
            console.log('[STAKE] txns after group assignment:', txns);
            // encode unsigned txns to base64 for Pera
            const unsignedB64 = txns.map((t)=>uint8ArrayToBase64(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$algosdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].encodeUnsignedTransaction(t)));
            console.log('[STAKE] unsignedB64:', unsignedB64);
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
                // maybe returned as array of base64 strings
                if (typeof signed[0] === 'string') {
                    signedBlobs = signed.map((s)=>base64ToUint8Array(s));
                } else if (signed[0] instanceof Uint8Array) {
                    signedBlobs = signed;
                } else if (signed[0] && signed[0].blob) {
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
            } else if (signed && signed.signedTransactions) {
                const arr = signed.signedTransactions;
                signedBlobs = arr.map((s)=>base64ToUint8Array(s));
            }
            console.log('[STAKE] signedBlobs:', signedBlobs);
            if (!signedBlobs.length) throw new Error('No signed transactions returned');
            // submit raw signed txns
            const sendResult = await algodClient.sendRawTransaction(signedBlobs).do();
            console.log('[STAKE] sendResult:', sendResult);
            const txId = sendResult.txId || sendResult.txid || sendResult.txID;
            if (!txId) throw new Error('No txid from send');
            const confirmed = await waitForConfirmation(txId, 30);
            console.log('[STAKE] confirmed:', confirmed);
            alert(`Stake transaction confirmed in round ${confirmed['confirmed-round']} (txid: ${txId})`);
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
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            className: "ml-2 text-yellow-600",
                            children: "Please connect your wallet to stake"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 197,
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
                            lineNumber: 207,
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
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium",
                                    children: "ALGO"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Minimum stake: 1 ALGO"
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 206,
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
                            lineNumber: 229,
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
                                                lineNumber: 241,
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
                                                        lineNumber: 246,
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
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, option.value, true, {
                                        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 228,
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
                            lineNumber: 258,
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
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 257,
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
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                "Connect Wallet"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this),
                        connectFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                            className: "mt-4 border border-yellow-500/20 bg-yellow-500/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "h-4 w-4 text-yellow-600"
                                }, void 0, false, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 282,
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
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                            lineNumber: 281,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 265,
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
                    lineNumber: 291,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground text-center",
                    children: "You will receive an NFT representing your staked position"
                }, void 0, false, {
                    fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/staking_pool/v0-modern-landing-page-for-webdeve/components/staking-form.tsx",
        lineNumber: 194,
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

//# sourceMappingURL=staking_pool_v0-modern-landing-page-for-webdeve_9ecde95a._.js.map