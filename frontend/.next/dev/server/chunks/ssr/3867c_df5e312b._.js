module.exports = [
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].AppRouterContext; //# sourceMappingURL=app-router-context.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
} //# sourceMappingURL=promise-with-resolvers.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Static"] = 1] = "Static";
    RenderStage[RenderStage["Runtime"] = 2] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 3] = "Dynamic";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null){
        this.abortSignal = abortSignal;
        this.currentStage = 1;
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 2) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 3) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (this.currentStage >= stage) {
            return;
        }
        this.currentStage = stage;
        // Note that we might be going directly from Static to Dynamic,
        // so we need to resolve the runtime stage as well.
        if (stage >= 2) {
            this.runtimeStagePromise.resolve();
        }
        if (stage >= 3) {
            this.dynamicStagePromise.resolve();
        }
    }
    getStagePromise(stage) {
        switch(stage){
            case 2:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 3:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackSynchronousPlatformIOAccessInDev: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of the prerender stage
    if (requestStore.stagedRendering) {
        // TODO: error for sync IO in the runtime stage
        // (which is not currently covered by the validation render in `spawnDynamicValidationInDev`)
        requestStore.stagedRendering.advanceStage(_stagedrendering.RenderStage.Dynamic);
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
const useDynamicSearchParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicSearchParams : "TURBOPACK unreachable";
function useSearchParams() {
    useDynamicSearchParams?.('useSearchParams()');
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _readonlyurlsearchparams.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams?.('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams?.('useParams()');
    const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegment()');
    const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@vercel/analytics/dist/next/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return ("TURBOPACK compile-time value", "undefined") !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? "TURBOPACK unreachable" : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
    const src = undefined;
    const script = undefined;
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (props.beforeSend) {
            (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
        }
    }, [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inject({
            framework: props.framework || "react",
            basePath: props.basePath ?? getBasePath(),
            ...props.route !== void 0 && {
                disableAutoTrack: true
            },
            ...props
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (props.route && props.path) {
            pageview({
                route: props.route,
                path: props.path
            });
        }
    }, [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = ("TURBOPACK compile-time value", "undefined") == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>H(m, l)), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>c === "system" ? E() : c), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = o;
        if (!r) return;
        o === "system" && s && (r = E());
        let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g)=>{
            g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
        };
        if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
            let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
            P.style.colorScheme = D;
        }
        C == null || C();
    }, [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = typeof o == "function" ? o(c) : o;
        n(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = E(o);
        y(r), c === "system" && s && !e && S("system");
    }, [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = window.matchMedia(I);
        return o.addListener(A), A(o), ()=>o.removeListener(A);
    }, [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = (r)=>{
            r.key === m && (r.newValue ? n(r.newValue) : f(l));
        };
        return window.addEventListener("storage", o), ()=>window.removeEventListener("storage", o);
    }, [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        S(e != null ? e : c);
    }, [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            theme: c,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: c === "system" ? T : c,
            themes: s ? [
                ...a,
                "system"
            ] : a,
            systemTheme: s ? T : void 0
        }), [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: ("TURBOPACK compile-time truthy", 1) ? d : "TURBOPACK unreachable",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let s;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
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
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
exports.getLocalStorage = getLocalStorage; //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/window-metadata/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWindowMetadata = void 0;
const window_getters_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-ssr] (ecmascript)");
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    } catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) {
                                absoluteHref += href;
                            } else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        } else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        } else {
                            icons.push(href);
                        }
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for(let i = 0; i < metaTags.length; i++){
            const tag = metaTags[i];
            const attributes = [
                "itemprop",
                "property",
                "name"
            ].map((target)=>tag.getAttribute(target)).filter((attr)=>{
                if (attr) {
                    return args.includes(attr);
                }
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) {
                    return content;
                }
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) {
            name = doc.title;
        }
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name
    };
    return meta;
}
exports.getWindowMetadata = getWindowMetadata; //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/detect-browser/es/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BotInfo",
    ()=>BotInfo,
    "BrowserInfo",
    ()=>BrowserInfo,
    "NodeInfo",
    ()=>NodeInfo,
    "ReactNativeInfo",
    ()=>ReactNativeInfo,
    "SearchBotDeviceInfo",
    ()=>SearchBotDeviceInfo,
    "browserName",
    ()=>browserName,
    "detect",
    ()=>detect,
    "detectOS",
    ()=>detectOS,
    "getNodeVersion",
    ()=>getNodeVersion,
    "parseUserAgent",
    ()=>parseUserAgent
]);
var __spreadArrays = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
var BrowserInfo = function() {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}();
;
var NodeInfo = function() {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}();
;
var SearchBotDeviceInfo = function() {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}();
;
var BotInfo = function() {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}();
;
var ReactNativeInfo = function() {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}();
;
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    [
        'aol',
        /AOLShield\/([0-9\._]+)/
    ],
    [
        'edge',
        /Edge\/([0-9\._]+)/
    ],
    [
        'edge-ios',
        /EdgiOS\/([0-9\._]+)/
    ],
    [
        'yandexbrowser',
        /YaBrowser\/([0-9\._]+)/
    ],
    [
        'kakaotalk',
        /KAKAOTALK\s([0-9\.]+)/
    ],
    [
        'samsung',
        /SamsungBrowser\/([0-9\.]+)/
    ],
    [
        'silk',
        /\bSilk\/([0-9._-]+)\b/
    ],
    [
        'miui',
        /MiuiBrowser\/([0-9\.]+)$/
    ],
    [
        'beaker',
        /BeakerBrowser\/([0-9\.]+)/
    ],
    [
        'edge-chromium',
        /EdgA?\/([0-9\.]+)/
    ],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'chrome',
        /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'phantomjs',
        /PhantomJS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'crios',
        /CriOS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'firefox',
        /Firefox\/([0-9\.]+)(?:\s|$)/
    ],
    [
        'fxios',
        /FxiOS\/([0-9\.]+)/
    ],
    [
        'opera-mini',
        /Opera Mini.*Version\/([0-9\.]+)/
    ],
    [
        'opera',
        /Opera\/([0-9\.]+)(?:\s|$)/
    ],
    [
        'opera',
        /OPR\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'ie',
        /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    ],
    [
        'ie',
        /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    ],
    [
        'ie',
        /MSIE\s(7\.0)/
    ],
    [
        'bb10',
        /BB10;\sTouch.*Version\/([0-9\.]+)/
    ],
    [
        'android',
        /Android\s([0-9\.]+)/
    ],
    [
        'ios',
        /Version\/([0-9\._]+).*Mobile.*Safari.*/
    ],
    [
        'safari',
        /Version\/([0-9\._]+).*Safari/
    ],
    [
        'facebook',
        /FBAV\/([0-9\.]+)/
    ],
    [
        'instagram',
        /Instagram\s([0-9\.]+)/
    ],
    [
        'ios-webview',
        /AppleWebKit\/([0-9\.]+).*Mobile/
    ],
    [
        'ios-webview',
        /AppleWebKit\/([0-9\.]+).*Gecko\)$/
    ],
    [
        'searchbot',
        SEARCHBOX_UA_REGEX
    ]
];
var operatingSystemRules = [
    [
        'iOS',
        /iP(hone|od|ad)/
    ],
    [
        'Android OS',
        /Android/
    ],
    [
        'BlackBerry OS',
        /BlackBerry|BB10/
    ],
    [
        'Windows Mobile',
        /IEMobile/
    ],
    [
        'Amazon OS',
        /Kindle/
    ],
    [
        'Windows 3.11',
        /Win16/
    ],
    [
        'Windows 95',
        /(Windows 95)|(Win95)|(Windows_95)/
    ],
    [
        'Windows 98',
        /(Windows 98)|(Win98)/
    ],
    [
        'Windows 2000',
        /(Windows NT 5.0)|(Windows 2000)/
    ],
    [
        'Windows XP',
        /(Windows NT 5.1)|(Windows XP)/
    ],
    [
        'Windows Server 2003',
        /(Windows NT 5.2)/
    ],
    [
        'Windows Vista',
        /(Windows NT 6.0)/
    ],
    [
        'Windows 7',
        /(Windows NT 6.1)/
    ],
    [
        'Windows 8',
        /(Windows NT 6.2)/
    ],
    [
        'Windows 8.1',
        /(Windows NT 6.3)/
    ],
    [
        'Windows 10',
        /(Windows NT 10.0)/
    ],
    [
        'Windows ME',
        /Windows ME/
    ],
    [
        'Open BSD',
        /OpenBSD/
    ],
    [
        'Sun OS',
        /SunOS/
    ],
    [
        'Chrome OS',
        /CrOS/
    ],
    [
        'Linux',
        /(Linux)|(X11)/
    ],
    [
        'Mac OS',
        /(Mac_PowerPC)|(Macintosh)/
    ],
    [
        'QNX',
        /QNX/
    ],
    [
        'BeOS',
        /BeOS/
    ],
    [
        'OS/2',
        /OS\/2/
    ]
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return ua !== '' && userAgentRules.reduce(function(matched, _a) {
        var browser = _a[0], regex = _a[1];
        if (matched) {
            return matched;
        }
        var uaMatch = regex.exec(ua);
        return !!uaMatch && [
            browser,
            uaMatch
        ];
    }, false);
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
        }
    } else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for(var ii = 0, count = operatingSystemRules.length; ii < count; ii++){
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for(var ii = 0; ii < count; ii++){
        output.push('0');
    }
    return output;
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getClientMeta = exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = exports.isBrowser = exports.isNode = exports.isMobile = exports.isIOS = exports.isAndroid = exports.detectOS = exports.detectEnv = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const windowMetadata = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/window-metadata/dist/cjs/index.js [app-ssr] (ecmascript)"));
const windowGetters = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-ssr] (ecmascript)"));
const detect_browser_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/detect-browser/es/index.js [app-ssr] (ecmascript)");
function detectEnv(userAgent) {
    return (0, detect_browser_1.detect)(userAgent);
}
exports.detectEnv = detectEnv;
function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
exports.detectOS = detectOS;
function isAndroid() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}
exports.isAndroid = isAndroid;
function isIOS() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
exports.isIOS = isIOS;
function isMobile() {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}
exports.isMobile = isMobile;
function isNode() {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}
exports.isNode = isNode;
function isBrowser() {
    const result = !isNode() && !!(0, exports.getNavigator)();
    return result;
}
exports.isBrowser = isBrowser;
exports.getFromWindow = windowGetters.getFromWindow;
exports.getFromWindowOrThrow = windowGetters.getFromWindowOrThrow;
exports.getDocumentOrThrow = windowGetters.getDocumentOrThrow;
exports.getDocument = windowGetters.getDocument;
exports.getNavigatorOrThrow = windowGetters.getNavigatorOrThrow;
exports.getNavigator = windowGetters.getNavigator;
exports.getLocationOrThrow = windowGetters.getLocationOrThrow;
exports.getLocation = windowGetters.getLocation;
exports.getCryptoOrThrow = windowGetters.getCryptoOrThrow;
exports.getCrypto = windowGetters.getCrypto;
exports.getLocalStorageOrThrow = windowGetters.getLocalStorageOrThrow;
exports.getLocalStorage = windowGetters.getLocalStorage;
function getClientMeta() {
    return windowMetadata.getWindowMetadata();
}
exports.getClientMeta = getClientMeta; //# sourceMappingURL=browser.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeJsonParse",
    ()=>safeJsonParse,
    "safeJsonStringify",
    ()=>safeJsonStringify
]);
function safeJsonParse(value) {
    if (typeof value !== "string") {
        throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    }
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
}
function safeJsonStringify(value) {
    return typeof value === "string" ? value : JSON.stringify(value);
} //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/json.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.safeJsonStringify = exports.safeJsonParse = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const safeJson = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)"));
exports.safeJsonParse = safeJson.safeJsonParse;
exports.safeJsonStringify = safeJson.safeJsonStringify; //# sourceMappingURL=json.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/local.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeLocal = exports.getLocal = exports.setLocal = void 0;
const json_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/json.js [app-ssr] (ecmascript)");
const browser_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/browser.js [app-ssr] (ecmascript)");
function setLocal(key, data) {
    const raw = (0, json_1.safeJsonStringify)(data);
    const local = (0, browser_1.getLocalStorage)();
    if (local) {
        local.setItem(key, raw);
    }
}
exports.setLocal = setLocal;
function getLocal(key) {
    let data = null;
    let raw = null;
    const local = (0, browser_1.getLocalStorage)();
    if (local) {
        raw = local.getItem(key);
    }
    data = raw ? (0, json_1.safeJsonParse)(raw) : raw;
    return data;
}
exports.getLocal = getLocal;
function removeLocal(key) {
    const local = (0, browser_1.getLocalStorage)();
    if (local) {
        local.removeItem(key);
    }
}
exports.removeLocal = removeLocal; //# sourceMappingURL=local.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/mobile.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMobileLinkRegistry = exports.getMobileRegistryEntry = exports.saveMobileLinkInfo = exports.formatIOSMobile = exports.mobileLinkChoiceKey = void 0;
const local_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/local.js [app-ssr] (ecmascript)");
exports.mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
function formatIOSMobile(uri, entry) {
    const encodedUri = encodeURIComponent(uri);
    return entry.universalLink ? `${entry.universalLink}/wc?uri=${encodedUri}` : entry.deepLink ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}` : "";
}
exports.formatIOSMobile = formatIOSMobile;
function saveMobileLinkInfo(data) {
    const focusUri = data.href.split("?")[0];
    (0, local_1.setLocal)(exports.mobileLinkChoiceKey, Object.assign(Object.assign({}, data), {
        href: focusUri
    }));
}
exports.saveMobileLinkInfo = saveMobileLinkInfo;
function getMobileRegistryEntry(registry, name) {
    return registry.filter((entry)=>entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}
exports.getMobileRegistryEntry = getMobileRegistryEntry;
function getMobileLinkRegistry(registry, whitelist) {
    let links = registry;
    if (whitelist) {
        links = whitelist.map((name)=>getMobileRegistryEntry(registry, name)).filter(Boolean);
    }
    return links;
}
exports.getMobileLinkRegistry = getMobileLinkRegistry; //# sourceMappingURL=mobile.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/registry.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatMobileRegistry = exports.formatMobileRegistryEntry = exports.getDappRegistryUrl = exports.getWalletRegistryUrl = void 0;
const API_URL = "https://registry.walletconnect.com";
function getWalletRegistryUrl() {
    return API_URL + "/api/v2/wallets";
}
exports.getWalletRegistryUrl = getWalletRegistryUrl;
function getDappRegistryUrl() {
    return API_URL + "/api/v2/dapps";
}
exports.getDappRegistryUrl = getDappRegistryUrl;
function formatMobileRegistryEntry(entry, platform = "mobile") {
    var _a;
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: (_a = entry.image_url.sm) !== null && _a !== void 0 ? _a : "",
        universalLink: entry[platform].universal || "",
        deepLink: entry[platform].native || ""
    };
}
exports.formatMobileRegistryEntry = formatMobileRegistryEntry;
function formatMobileRegistry(registry, platform = "mobile") {
    return Object.values(registry).filter((entry)=>!!entry[platform].universal || !!entry[platform].native).map((entry)=>formatMobileRegistryEntry(entry, platform));
}
exports.formatMobileRegistry = formatMobileRegistry; //# sourceMappingURL=registry.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/browser.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/json.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/local.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/mobile.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/registry.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.infuraNetworks = exports.stateMethods = exports.signingMethods = exports.reservedEvents = void 0;
exports.reservedEvents = [
    "session_request",
    "session_update",
    "exchange_key",
    "connect",
    "disconnect",
    "display_uri",
    "modal_closed",
    "transport_open",
    "transport_close",
    "transport_error"
];
exports.signingMethods = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v1",
    "eth_signTypedData_v2",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign",
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode"
];
exports.stateMethods = [
    "eth_accounts",
    "eth_chainId",
    "net_version"
];
exports.infuraNetworks = {
    1: "mainnet",
    3: "ropsten",
    4: "rinkeby",
    5: "goerli",
    42: "kovan"
}; //# sourceMappingURL=constants.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(module1, exports) {
    'use strict';
    // Utils
    function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
    }
    // Could use `inherits` module, but don't want to move from single file
    // architecture yet.
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
    // BN
    function BN(number, base, endian) {
        if (BN.isBN(number)) {
            return number;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        // Reduction context
        this.red = null;
        if (number !== null) {
            if (base === 'le' || base === 'be') {
                endian = base;
                base = 10;
            }
            this._init(number || 0, base || 10, endian || 'be');
        }
    }
    if ("TURBOPACK compile-time truthy", 1) {
        module1.exports = BN;
    } else //TURBOPACK unreachable
    ;
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
        Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
    } catch (e) {}
    BN.isBN = function isBN(num) {
        if (num instanceof BN) {
            return true;
        }
        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
    };
    BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
    };
    BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') {
            return this._initNumber(number, base, endian);
        }
        if (typeof number === 'object') {
            return this._initArray(number, base, endian);
        }
        if (base === 'hex') {
            base = 16;
        }
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;
        if (number[0] === '-') {
            start++;
        }
        if (base === 16) {
            this._parseHex(number, start);
        } else {
            this._parseBase(number, base, start);
        }
        if (number[0] === '-') {
            this.negative = 1;
        }
        this.strip();
        if (endian !== 'le') return;
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
            this.negative = 1;
            number = -number;
        }
        if (number < 0x4000000) {
            this.words = [
                number & 0x3ffffff
            ];
            this.length = 1;
        } else if (number < 0x10000000000000) {
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff
            ];
            this.length = 2;
        } else {
            assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff,
                1
            ];
            this.length = 3;
        }
        if (endian !== 'le') return;
        // Reverse the bytes
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');
        if (number.length <= 0) {
            this.words = [
                0
            ];
            this.length = 1;
            return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++){
            this.words[i] = 0;
        }
        var j, w;
        var off = 0;
        if (endian === 'be') {
            for(i = number.length - 1, j = 0; i >= 0; i -= 3){
                w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
                this.words[j] |= w << off & 0x3ffffff;
                this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
                off += 24;
                if (off >= 26) {
                    off -= 26;
                    j++;
                }
            }
        } else if (endian === 'le') {
            for(i = 0, j = 0; i < number.length; i += 3){
                w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
                this.words[j] |= w << off & 0x3ffffff;
                this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
                off += 24;
                if (off >= 26) {
                    off -= 26;
                    j++;
                }
            }
        }
        return this.strip();
    };
    function parseHex(str, start, end) {
        var r = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r <<= 4;
            // 'a' - 'f'
            if (c >= 49 && c <= 54) {
                r |= c - 49 + 0xa;
            // 'A' - 'F'
            } else if (c >= 17 && c <= 22) {
                r |= c - 17 + 0xa;
            // '0' - '9'
            } else {
                r |= c & 0xf;
            }
        }
        return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++){
            this.words[i] = 0;
        }
        var j, w;
        // Scan 24-bit chunks and add them to the number
        var off = 0;
        for(i = number.length - 6, j = 0; i >= start; i -= 6){
            w = parseHex(number, i, i + 6);
            this.words[j] |= w << off & 0x3ffffff;
            // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
            this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        if (i + 6 !== start) {
            w = parseHex(number, start, i + 6);
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
        }
        this.strip();
    };
    function parseBase(str, start, end, mul) {
        var r = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            // 'a'
            if (c >= 49) {
                r += c - 49 + 0xa;
            // 'A'
            } else if (c >= 17) {
                r += c - 17 + 0xa;
            // '0' - '9'
            } else {
                r += c;
            }
        }
        return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [
            0
        ];
        this.length = 1;
        // Find length of limb in base
        for(var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base){
            limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for(var i = start; i < end; i += limbLen){
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 0x4000000) {
                this.words[0] += word;
            } else {
                this._iaddn(word);
            }
        }
        if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for(i = 0; i < mod; i++){
                pow *= base;
            }
            this.imuln(pow);
            if (this.words[0] + word < 0x4000000) {
                this.words[0] += word;
            } else {
                this._iaddn(word);
            }
        }
    };
    BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for(var i = 0; i < this.length; i++){
            dest.words[i] = this.words[i];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
    };
    BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
    };
    BN.prototype._expand = function _expand(size) {
        while(this.length < size){
            this.words[this.length++] = 0;
        }
        return this;
    };
    // Remove leading `0` from `this`
    BN.prototype.strip = function strip() {
        while(this.length > 1 && this.words[this.length - 1] === 0){
            this.length--;
        }
        return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) {
            this.negative = 0;
        }
        return this;
    };
    BN.prototype.inspect = function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    };
    /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */ var zeros = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000'
    ];
    var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === 'hex') {
            out = '';
            var off = 0;
            var carry = 0;
            for(var i = 0; i < this.length; i++){
                var w = this.words[i];
                var word = ((w << off | carry) & 0xffffff).toString(16);
                carry = w >>> 24 - off & 0xffffff;
                if (carry !== 0 || i !== this.length - 1) {
                    out = zeros[6 - word.length] + word + out;
                } else {
                    out = word + out;
                }
                off += 2;
                if (off >= 26) {
                    off -= 26;
                    i--;
                }
            }
            if (carry !== 0) {
                out = carry.toString(16) + out;
            }
            while(out.length % padding !== 0){
                out = '0' + out;
            }
            if (this.negative !== 0) {
                out = '-' + out;
            }
            return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
            // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
            var groupSize = groupSizes[base];
            // var groupBase = Math.pow(base, groupSize);
            var groupBase = groupBases[base];
            out = '';
            var c = this.clone();
            c.negative = 0;
            while(!c.isZero()){
                var r = c.modn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) {
                    out = zeros[groupSize - r.length] + r + out;
                } else {
                    out = r + out;
                }
            }
            if (this.isZero()) {
                out = '0' + out;
            }
            while(out.length % padding !== 0){
                out = '0' + out;
            }
            if (this.negative !== 0) {
                out = '-' + out;
            }
            return out;
        }
        assert(false, 'Base should be between 2 and 36');
    };
    BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
            ret += this.words[1] * 0x4000000;
        } else if (this.length === 3 && this.words[2] === 0x01) {
            // NOTE: at this stage it is known that the top bit is set
            ret += 0x10000000000000 + this.words[1] * 0x4000000;
        } else if (this.length > 2) {
            assert(false, 'Number can only safely store up to 53 bits');
        }
        return this.negative !== 0 ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
    };
    BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer !== 'undefined');
        return this.toArrayLike(Buffer, endian, length);
    };
    BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        this.strip();
        var littleEndian = endian === 'le';
        var res = new ArrayType(reqLength);
        var b, i;
        var q = this.clone();
        if (!littleEndian) {
            // Assume big-endian
            for(i = 0; i < reqLength - byteLength; i++){
                res[i] = 0;
            }
            for(i = 0; !q.isZero(); i++){
                b = q.andln(0xff);
                q.iushrn(8);
                res[reqLength - i - 1] = b;
            }
        } else {
            for(i = 0; !q.isZero(); i++){
                b = q.andln(0xff);
                q.iushrn(8);
                res[i] = b;
            }
            for(; i < reqLength; i++){
                res[i] = 0;
            }
        }
        return res;
    };
    if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w) {
            return 32 - Math.clz32(w);
        };
    } else {
        BN.prototype._countBits = function _countBits(w) {
            var t = w;
            var r = 0;
            if (t >= 0x1000) {
                r += 13;
                t >>>= 13;
            }
            if (t >= 0x40) {
                r += 7;
                t >>>= 7;
            }
            if (t >= 0x8) {
                r += 4;
                t >>>= 4;
            }
            if (t >= 0x02) {
                r += 2;
                t >>>= 2;
            }
            return r + t;
        };
    }
    BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;
        if ((t & 0x1fff) === 0) {
            r += 13;
            t >>>= 13;
        }
        if ((t & 0x7f) === 0) {
            r += 7;
            t >>>= 7;
        }
        if ((t & 0xf) === 0) {
            r += 4;
            t >>>= 4;
        }
        if ((t & 0x3) === 0) {
            r += 2;
            t >>>= 2;
        }
        if ((t & 0x1) === 0) {
            r++;
        }
        return r;
    };
    // Return number of used bits in a BN
    BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
        var w = new Array(num.bitLength());
        for(var bit = 0; bit < w.length; bit++){
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }
        return w;
    }
    // Number of trailing zero bits
    BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for(var i = 0; i < this.length; i++){
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
        }
        return r;
    };
    BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
            return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
            return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
    };
    // Return negative clone of `this`
    BN.prototype.neg = function neg() {
        return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
            this.negative ^= 1;
        }
        return this;
    };
    // Or `num` with `this` in-place
    BN.prototype.iuor = function iuor(num) {
        while(this.length < num.length){
            this.words[this.length++] = 0;
        }
        for(var i = 0; i < num.length; i++){
            this.words[i] = this.words[i] | num.words[i];
        }
        return this.strip();
    };
    BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
    };
    // Or `num` with `this`
    BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
    };
    // And `num` with `this` in-place
    BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;
        if (this.length > num.length) {
            b = num;
        } else {
            b = this;
        }
        for(var i = 0; i < b.length; i++){
            this.words[i] = this.words[i] & num.words[i];
        }
        this.length = b.length;
        return this.strip();
    };
    BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
    };
    // And `num` with `this`
    BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
    };
    // Xor `num` with `this` in-place
    BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        for(var i = 0; i < b.length; i++){
            this.words[i] = a.words[i] ^ b.words[i];
        }
        if (this !== a) {
            for(; i < a.length; i++){
                this.words[i] = a.words[i];
            }
        }
        this.length = a.length;
        return this.strip();
    };
    BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
    };
    // Xor `num` with `this`
    BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
    };
    // Not ``this`` with ``width`` bitwidth
    BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        // Extend the buffer with leading zeroes
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
            bytesNeeded--;
        }
        // Handle complete words
        for(var i = 0; i < bytesNeeded; i++){
            this.words[i] = ~this.words[i] & 0x3ffffff;
        }
        // Handle the residue
        if (bitsLeft > 0) {
            this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
        }
        // And remove leading zeroes
        return this.strip();
    };
    BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
    };
    // Set `bit` of `this`
    BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
            this.words[off] = this.words[off] | 1 << wbit;
        } else {
            this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this.strip();
    };
    // Add `num` to `this` in-place
    BN.prototype.iadd = function iadd(num) {
        var r;
        // negative + positive
        if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
        // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
        }
        // a.length > b.length
        var a, b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
        // Copy the rest of the words
        } else if (a !== this) {
            for(; i < a.length; i++){
                this.words[i] = a.words[i];
            }
        }
        return this;
    };
    // Add `num` to `this`
    BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
        } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
    };
    // Subtract `num` from `this` in-place
    BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
        // -this - num = -(this + num)
        } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
        }
        // At this point both numbers are positive
        var cmp = this.cmp(num);
        // Optimization - zeroify
        if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
        }
        // a > b
        var a, b;
        if (cmp > 0) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        // Copy rest of the words
        if (carry === 0 && i < a.length && a !== this) {
            for(; i < a.length; i++){
                this.words[i] = a.words[i];
            }
        }
        this.length = Math.max(this.length, i);
        if (a !== this) {
            this.negative = 1;
        }
        return this.strip();
    };
    // Subtract `num` from `this`
    BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        // Peel one iteration (compiler can't do it, because of code complexity)
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        var carry = r / 0x4000000 | 0;
        out.words[0] = lo;
        for(var k = 1; k < len; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = carry >>> 26;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j | 0;
                a = self.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += r / 0x4000000 | 0;
                rword = r & 0x3ffffff;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
        }
        if (carry !== 0) {
            out.words[k] = carry | 0;
        } else {
            out.length--;
        }
        return out.strip();
    }
    // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).
    var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 0x1fff;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 0x1fff;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 0x1fff;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 0x1fff;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 0x1fff;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 0x1fff;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 0x1fff;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 0x1fff;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 0x1fff;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 0x1fff;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 0x1fff;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 0x1fff;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 0x1fff;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 0x1fff;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 0x1fff;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 0x1fff;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 0x1fff;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 0x1fff;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 0x1fff;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 0x1fff;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */ lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 0x3ffffff;
        /* k = 1 */ lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 0x3ffffff;
        /* k = 2 */ lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 0x3ffffff;
        /* k = 3 */ lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 0x3ffffff;
        /* k = 4 */ lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 0x3ffffff;
        /* k = 5 */ lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 0x3ffffff;
        /* k = 6 */ lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 0x3ffffff;
        /* k = 7 */ lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 0x3ffffff;
        /* k = 8 */ lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 0x3ffffff;
        /* k = 9 */ lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 0x3ffffff;
        /* k = 10 */ lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 0x3ffffff;
        /* k = 11 */ lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 0x3ffffff;
        /* k = 12 */ lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 0x3ffffff;
        /* k = 13 */ lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 0x3ffffff;
        /* k = 14 */ lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 0x3ffffff;
        /* k = 15 */ lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 0x3ffffff;
        /* k = 16 */ lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 0x3ffffff;
        /* k = 17 */ lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 0x3ffffff;
        /* k = 18 */ lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 0x3ffffff;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
            o[19] = c;
            out.length++;
        }
        return out;
    };
    // Polyfill comb
    if (!Math.imul) {
        comb10MulTo = smallMulTo;
    }
    function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for(var k = 0; k < out.length - 1; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j;
                var a = self.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 0x3ffffff;
                ncarry = ncarry + (r / 0x4000000 | 0) | 0;
                lo = lo + rword | 0;
                rword = lo & 0x3ffffff;
                ncarry = ncarry + (lo >>> 26) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 0x3ffffff;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
        }
        if (carry !== 0) {
            out.words[k] = carry;
        } else {
            out.length--;
        }
        return out.strip();
    }
    function jumboMulTo(self, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
            res = comb10MulTo(this, num, out);
        } else if (len < 63) {
            res = smallMulTo(this, num, out);
        } else if (len < 1024) {
            res = bigMulTo(this, num, out);
        } else {
            res = jumboMulTo(this, num, out);
        }
        return res;
    };
    // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion
    function FFTM(x, y) {
        this.x = x;
        this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for(var i = 0; i < N; i++){
            t[i] = this.revBin(i, l, N);
        }
        return t;
    };
    // Returns binary-reversed representation of `x`
    FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;
        for(var i = 0; i < l; i++){
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
        }
        return rb;
    };
    // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for(var i = 0; i < N; i++){
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
        }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for(var s = 1; s < N; s <<= 1){
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for(var p = 0; p < N; p += l){
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for(var j = 0; j < s; j++){
                    var re = rtws[p + j];
                    var ie = itws[p + j];
                    var ro = rtws[p + j + s];
                    var io = itws[p + j + s];
                    var rx = rtwdf_ * ro - itwdf_ * io;
                    io = rtwdf_ * io + itwdf_ * ro;
                    ro = rx;
                    rtws[p + j] = re + ro;
                    itws[p + j] = ie + io;
                    rtws[p + j + s] = re - ro;
                    itws[p + j + s] = ie - io;
                    /* jshint maxdepth : false */ if (j !== l) {
                        rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                        itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                        rtwdf_ = rx;
                    }
                }
            }
        }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for(N = N / 2 | 0; N; N = N >>> 1){
            i++;
        }
        return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;
        for(var i = 0; i < N / 2; i++){
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
        }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for(var i = 0; i < N / 2; i++){
            var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 0x3ffffff;
            if (w < 0x4000000) {
                carry = 0;
            } else {
                carry = w / 0x4000000 | 0;
            }
        }
        return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for(var i = 0; i < len; i++){
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 0x1fff;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 0x1fff;
            carry = carry >>> 13;
        }
        // Pad with zeroes
        for(i = 2 * len; i < N; ++i){
            rws[i] = 0;
        }
        assert(carry === 0);
        assert((carry & ~0x1fff) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for(var i = 0; i < N; i++){
            ph[i] = 0;
        }
        return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for(var i = 0; i < N; i++){
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out.strip();
    };
    // Multiply `this` by `num`
    BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
    };
    // Multiply employing FFT
    BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
    };
    // In-place Multiplication
    BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        // Carry
        var carry = 0;
        for(var i = 0; i < this.length; i++){
            var w = (this.words[i] | 0) * num;
            var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
            carry >>= 26;
            carry += w / 0x4000000 | 0;
            // NOTE: lo is 27bit maximum
            carry += lo >>> 26;
            this.words[i] = lo & 0x3ffffff;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
    };
    // `this` * `this`
    BN.prototype.sqr = function sqr() {
        return this.mul(this);
    };
    // `this` * `this` in-place
    BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
    };
    // Math.pow(`this`, `num`)
    BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1);
        // Skip leading zeroes
        var res = this;
        for(var i = 0; i < w.length; i++, res = res.sqr()){
            if (w[i] !== 0) break;
        }
        if (++i < w.length) {
            for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
                if (w[i] === 0) continue;
                res = res.mul(q);
            }
        }
        return res;
    };
    // Shift-left in-place
    BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
            var carry = 0;
            for(i = 0; i < this.length; i++){
                var newCarry = this.words[i] & carryMask;
                var c = (this.words[i] | 0) - newCarry << r;
                this.words[i] = c | carry;
                carry = newCarry >>> 26 - r;
            }
            if (carry) {
                this.words[i] = carry;
                this.length++;
            }
        }
        if (s !== 0) {
            for(i = this.length - 1; i >= 0; i--){
                this.words[i + s] = this.words[i];
            }
            for(i = 0; i < s; i++){
                this.words[i] = 0;
            }
            this.length += s;
        }
        return this.strip();
    };
    BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
    };
    // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;
        if (hint) {
            h = (hint - hint % 26) / 26;
        } else {
            h = 0;
        }
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        // Extended mode, copy masked part
        if (maskedWords) {
            for(var i = 0; i < s; i++){
                maskedWords.words[i] = this.words[i];
            }
            maskedWords.length = s;
        }
        if (s === 0) {
        // No-op, we should not move anything at all
        } else if (this.length > s) {
            this.length -= s;
            for(i = 0; i < this.length; i++){
                this.words[i] = this.words[i + s];
            }
        } else {
            this.words[0] = 0;
            this.length = 1;
        }
        var carry = 0;
        for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
        }
        // Push carried bits as a mask
        if (maskedWords && carry !== 0) {
            maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
        }
        return this.strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
    };
    // Shift-left
    BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
    };
    // Shift-right
    BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
    };
    // Test if n bit is set
    BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) return false;
        // Check bit and return
        var w = this.words[s];
        return !!(w & q);
    };
    // Return only lowers bits of number (in-place)
    BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');
        if (this.length <= s) {
            return this;
        }
        if (r !== 0) {
            s++;
        }
        this.length = Math.min(s, this.length);
        if (r !== 0) {
            var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
            this.words[this.length - 1] &= mask;
        }
        return this.strip();
    };
    // Return only lowers bits of number
    BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
    };
    // Add plain number `num` to `this`
    BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.isubn(-num);
        // Possible sign change
        if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) < num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
        }
        // Add without checks
        return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        // Carry
        for(var i = 0; i < this.length && this.words[i] >= 0x4000000; i++){
            this.words[i] -= 0x4000000;
            if (i === this.length - 1) {
                this.words[i + 1] = 1;
            } else {
                this.words[i + 1]++;
            }
        }
        this.length = Math.max(this.length, i + 1);
        return this;
    };
    // Subtract plain number `num` from `this`
    BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
        } else {
            // Carry
            for(var i = 0; i < this.length && this.words[i] < 0; i++){
                this.words[i] += 0x4000000;
                this.words[i + 1] -= 1;
            }
        }
        return this.strip();
    };
    BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
    };
    BN.prototype.abs = function abs() {
        return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for(i = 0; i < num.length; i++){
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul;
            w -= right & 0x3ffffff;
            carry = (w >> 26) - (right / 0x4000000 | 0);
            this.words[i + shift] = w & 0x3ffffff;
        }
        for(; i < this.length - shift; i++){
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 0x3ffffff;
        }
        if (carry === 0) return this.strip();
        // Subtraction overflow
        assert(carry === -1);
        carry = 0;
        for(i = 0; i < this.length; i++){
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 0x3ffffff;
        }
        this.negative = 1;
        return this.strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        // Normalize
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
        }
        // Initialize quotient
        var m = a.length - b.length;
        var q;
        if (mode !== 'mod') {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for(var i = 0; i < q.length; i++){
                q.words[i] = 0;
            }
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
            a = diff;
            if (q) {
                q.words[m] = 1;
            }
        }
        for(var j = m - 1; j >= 0; j--){
            var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0);
            // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
            // (0x7ffffff)
            qj = Math.min(qj / bhi | 0, 0x3ffffff);
            a._ishlnsubmul(b, qj, j);
            while(a.negative !== 0){
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) {
                    a.negative ^= 1;
                }
            }
            if (q) {
                q.words[j] = qj;
            }
        }
        if (q) {
            q.strip();
        }
        a.strip();
        // Denormalize
        if (mode !== 'div' && shift !== 0) {
            a.iushrn(shift);
        }
        return {
            div: q || null,
            mod: a
        };
    };
    // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested
    BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) {
            return {
                div: new BN(0),
                mod: new BN(0)
            };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== 'mod') {
                div = res.div.neg();
            }
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) {
                    mod.iadd(num);
                }
            }
            return {
                div: div,
                mod: mod
            };
        }
        if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== 'mod') {
                div = res.div.neg();
            }
            return {
                div: div,
                mod: res.mod
            };
        }
        if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) {
                    mod.isub(num);
                }
            }
            return {
                div: res.div,
                mod: mod
            };
        }
        // Both numbers are positive at this point
        // Strip both numbers to approximate shift value
        if (num.length > this.length || this.cmp(num) < 0) {
            return {
                div: new BN(0),
                mod: this
            };
        }
        // Very short reduction
        if (num.length === 1) {
            if (mode === 'div') {
                return {
                    div: this.divn(num.words[0]),
                    mod: null
                };
            }
            if (mode === 'mod') {
                return {
                    div: null,
                    mod: new BN(this.modn(num.words[0]))
                };
            }
            return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modn(num.words[0]))
            };
        }
        return this._wordDiv(num, mode);
    };
    // Find `this` / `num`
    BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
    };
    // Find `this` % `num`
    BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
    };
    BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
    };
    // Find Round(`this` / `num`)
    BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        // Fast case - exact division
        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        // Round down
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        // Round up
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modn = function modn(num) {
        assert(num <= 0x3ffffff);
        var p = (1 << 26) % num;
        var acc = 0;
        for(var i = this.length - 1; i >= 0; i--){
            acc = (p * acc + (this.words[i] | 0)) % num;
        }
        return acc;
    };
    // In-place division by number
    BN.prototype.idivn = function idivn(num) {
        assert(num <= 0x3ffffff);
        var carry = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var w = (this.words[i] | 0) + carry * 0x4000000;
            this.words[i] = w / num | 0;
            carry = w % num;
        }
        return this.strip();
    };
    BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) {
            x = x.umod(p);
        } else {
            x = x.clone();
        }
        // A * x + B * y = x
        var A = new BN(1);
        var B = new BN(0);
        // C * x + D * y = y
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while(x.isEven() && y.isEven()){
            x.iushrn(1);
            y.iushrn(1);
            ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while(!x.isZero()){
            for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                x.iushrn(i);
                while(i-- > 0){
                    if (A.isOdd() || B.isOdd()) {
                        A.iadd(yp);
                        B.isub(xp);
                    }
                    A.iushrn(1);
                    B.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                y.iushrn(j);
                while(j-- > 0){
                    if (C.isOdd() || D.isOdd()) {
                        C.iadd(yp);
                        D.isub(xp);
                    }
                    C.iushrn(1);
                    D.iushrn(1);
                }
            }
            if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
            } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
            }
        }
        return {
            a: C,
            b: D,
            gcd: y.iushln(g)
        };
    };
    // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed
    BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) {
            a = a.umod(p);
        } else {
            a = a.clone();
        }
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
            for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                a.iushrn(i);
                while(i-- > 0){
                    if (x1.isOdd()) {
                        x1.iadd(delta);
                    }
                    x1.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                b.iushrn(j);
                while(j-- > 0){
                    if (x2.isOdd()) {
                        x2.iadd(delta);
                    }
                    x2.iushrn(1);
                }
            }
            if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
            } else {
                b.isub(a);
                x2.isub(x1);
            }
        }
        var res;
        if (a.cmpn(1) === 0) {
            res = x1;
        } else {
            res = x2;
        }
        if (res.cmpn(0) < 0) {
            res.iadd(p);
        }
        return res;
    };
    BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        // Remove common factor of two
        for(var shift = 0; a.isEven() && b.isEven(); shift++){
            a.iushrn(1);
            b.iushrn(1);
        }
        do {
            while(a.isEven()){
                a.iushrn(1);
            }
            while(b.isEven()){
                b.iushrn(1);
            }
            var r = a.cmp(b);
            if (r < 0) {
                // Swap `a` and `b` to make `a` always bigger than `b`
                var t = a;
                a = b;
                b = t;
            } else if (r === 0 || b.cmpn(1) === 0) {
                break;
            }
            a.isub(b);
        }while (true)
        return b.iushln(shift);
    };
    // Invert number in the field F(num)
    BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
    };
    // And first word and num
    BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
    };
    // Increment at the bit position in-line
    BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
        }
        // Add bit and propagate, if needed
        var carry = q;
        for(var i = s; carry !== 0 && i < this.length; i++){
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 0x3ffffff;
            this.words[i] = w;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this.strip();
        var res;
        if (this.length > 1) {
            res = 1;
        } else {
            if (negative) {
                num = -num;
            }
            assert(num <= 0x3ffffff, 'Number is too big');
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`
    BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Unsigned comparison
    BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b) continue;
            if (a < b) {
                res = -1;
            } else if (a > b) {
                res = 1;
            }
            break;
        }
        return res;
    };
    BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
    };
    //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //
    BN.red = function red(num) {
        return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');
        this.red._verify1(this);
        return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');
        this.red._verify1(this);
        return this.red.isqr(this);
    };
    // Square root over p
    BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');
        this.red._verify1(this);
        return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');
        this.red._verify1(this);
        return this.red.invm(this);
    };
    // Return negative clone of `this` % `red modulo`
    BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');
        this.red._verify1(this);
        return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');
        this.red._verify1(this);
        return this.red.pow(this, num);
    };
    // Prime numbers with efficient reduction
    var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    // Pseudo-Mersenne prime
    function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;
        do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
        }while (rlen > this.n)
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
        } else if (cmp > 0) {
            r.isub(this.p);
        } else {
            r.strip();
        }
        return r;
    };
    MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
    };
    function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 0x3fffff;
        var outLen = Math.min(input.length, 9);
        for(var i = 0; i < outLen; i++){
            output.words[i] = input.words[i];
        }
        output.length = outLen;
        if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
        }
        // Shift by 9 limbs
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for(i = 10; i < input.length; i++){
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) {
            input.length -= 10;
        } else {
            input.length -= 9;
        }
    };
    K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
        var lo = 0;
        for(var i = 0; i < num.length; i++){
            var w = num.words[i] | 0;
            lo += w * 0x3d1;
            num.words[i] = lo & 0x3ffffff;
            lo = w * 0x40 + (lo / 0x4000000 | 0);
        }
        // Fast length reduction
        if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) {
                num.length--;
            }
        }
        return num;
    };
    function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    inherits(P224, MPrime);
    function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    inherits(P192, MPrime);
    function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;
        for(var i = 0; i < num.length; i++){
            var hi = (num.words[i] | 0) * 0x13 + carry;
            var lo = hi & 0x3ffffff;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
        }
        if (carry !== 0) {
            num.words[num.length++] = carry;
        }
        return num;
    };
    // Exported mostly for testing purposes, use plain name instead
    BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;
        if (name === 'k256') {
            prime = new K256();
        } else if (name === 'p224') {
            prime = new P224();
        } else if (name === 'p192') {
            prime = new P192();
        } else if (name === 'p25519') {
            prime = new P25519();
        } else {
            throw new Error('Unknown prime ' + name);
        }
        primes[name] = prime;
        return prime;
    };
    //
    // Base reduction engine
    //
    function Red(m) {
        if (typeof m === 'string') {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
        } else {
            assert(m.gtn(1), 'modulus must be greater than 1');
            this.m = m;
            this.prime = null;
        }
    }
    Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
    };
    Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
    };
    Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
            return a.clone();
        }
        return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
        }
        return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
        }
        return res;
    };
    Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) {
            res.iadd(this.m);
        }
        return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) {
            res.iadd(this.m);
        }
        return res;
    };
    Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            var pow = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        var q = this.m.subn(1);
        var s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0){
            z.redIAdd(nOne);
        }
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while(t.cmp(one) !== 0){
            var tmp = t;
            for(var i = 0; tmp.cmp(one) !== 0; i++){
                tmp = tmp.redSqr();
            }
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    };
    Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else {
            return this.imod(inv);
        }
    };
    Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for(var i = 2; i < wnd.length; i++){
            wnd[i] = this.mul(wnd[i - 1], a);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
            start = 26;
        }
        for(i = num.length - 1; i >= 0; i--){
            var word = num.words[i];
            for(var j = start - 1; j >= 0; j--){
                var bit = word >> j & 1;
                if (res !== wnd[0]) {
                    res = this.sqr(res);
                }
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
    };
    //
    // Montgomery method engine
    //
    BN.mont = function mont(num) {
        return new Mont(num);
    };
    function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
            this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    };
    Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
        }
        return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
        }
        return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
    };
})(("TURBOPACK compile-time value", "object") === 'undefined' || module, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/is-typedarray/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = isTypedArray;
isTypedArray.strict = isStrictTypedArray;
isTypedArray.loose = isLooseTypedArray;
var toString = Object.prototype.toString;
var names = {
    '[object Int8Array]': true,
    '[object Int16Array]': true,
    '[object Int32Array]': true,
    '[object Uint8Array]': true,
    '[object Uint8ClampedArray]': true,
    '[object Uint16Array]': true,
    '[object Uint32Array]': true,
    '[object Float32Array]': true,
    '[object Float64Array]': true
};
function isTypedArray(arr) {
    return isStrictTypedArray(arr) || isLooseTypedArray(arr);
}
function isStrictTypedArray(arr) {
    return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
}
function isLooseTypedArray(arr) {
    return names[toString.call(arr)];
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/typedarray-to-buffer/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <https://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */ var isTypedArray = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/is-typedarray/index.js [app-ssr] (ecmascript)").strict;
module.exports = function typedarrayToBuffer(arr) {
    if (isTypedArray(arr)) {
        // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
        var buf = Buffer.from(arr.buffer);
        if (arr.byteLength !== arr.buffer.byteLength) {
            // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
            buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
        }
        return buf;
    } else {
        // Pass through all other types to `Buffer.from`
        return Buffer.from(arr);
    }
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/encoding/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHexPrefix",
    ()=>addHexPrefix,
    "arrayToBinary",
    ()=>arrayToBinary,
    "arrayToBuffer",
    ()=>arrayToBuffer,
    "arrayToHex",
    ()=>arrayToHex,
    "arrayToNumber",
    ()=>arrayToNumber,
    "arrayToUtf8",
    ()=>arrayToUtf8,
    "binaryToArray",
    ()=>binaryToArray,
    "binaryToBuffer",
    ()=>binaryToBuffer,
    "binaryToHex",
    ()=>binaryToHex,
    "binaryToNumber",
    ()=>binaryToNumber,
    "binaryToUtf8",
    ()=>binaryToUtf8,
    "bufferToArray",
    ()=>bufferToArray,
    "bufferToBinary",
    ()=>bufferToBinary,
    "bufferToHex",
    ()=>bufferToHex,
    "bufferToNumber",
    ()=>bufferToNumber,
    "bufferToUtf8",
    ()=>bufferToUtf8,
    "calcByteLength",
    ()=>calcByteLength,
    "concatArrays",
    ()=>concatArrays,
    "concatBuffers",
    ()=>concatBuffers,
    "getEncoding",
    ()=>getEncoding,
    "getType",
    ()=>getType,
    "hexToArray",
    ()=>hexToArray,
    "hexToBinary",
    ()=>hexToBinary,
    "hexToBuffer",
    ()=>hexToBuffer,
    "hexToNumber",
    ()=>hexToNumber,
    "hexToUtf8",
    ()=>hexToUtf8,
    "isArrayBuffer",
    ()=>isArrayBuffer,
    "isBinaryString",
    ()=>isBinaryString,
    "isBuffer",
    ()=>isBuffer,
    "isHexString",
    ()=>isHexString,
    "isTypedArray",
    ()=>isTypedArray,
    "numberToArray",
    ()=>numberToArray,
    "numberToBinary",
    ()=>numberToBinary,
    "numberToBuffer",
    ()=>numberToBuffer,
    "numberToHex",
    ()=>numberToHex,
    "numberToUtf8",
    ()=>numberToUtf8,
    "padLeft",
    ()=>padLeft,
    "padRight",
    ()=>padRight,
    "removeHexLeadingZeros",
    ()=>removeHexLeadingZeros,
    "removeHexPrefix",
    ()=>removeHexPrefix,
    "sanitizeBytes",
    ()=>sanitizeBytes,
    "sanitizeHex",
    ()=>sanitizeHex,
    "splitBytes",
    ()=>splitBytes,
    "swapBytes",
    ()=>swapBytes,
    "swapHex",
    ()=>swapHex,
    "trimLeft",
    ()=>trimLeft,
    "trimRight",
    ()=>trimRight,
    "utf8ToArray",
    ()=>utf8ToArray,
    "utf8ToBinary",
    ()=>utf8ToBinary,
    "utf8ToBuffer",
    ()=>utf8ToBuffer,
    "utf8ToHex",
    ()=>utf8ToHex,
    "utf8ToNumber",
    ()=>utf8ToNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$is$2d$typedarray$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/is-typedarray/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$typedarray$2d$to$2d$buffer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/typedarray-to-buffer/index.js [app-ssr] (ecmascript)");
;
;
const ENC_HEX = "hex";
const ENC_UTF8 = "utf8";
const ENC_BIN = "binary";
const TYPE_BUFFER = "buffer";
const TYPE_ARRAY = "array";
const TYPE_TYPED_ARRAY = "typed-array";
const TYPE_ARRAY_BUFFER = "array-buffer";
const STRING_ZERO = "0";
function bufferToArray(buf) {
    return new Uint8Array(buf);
}
function bufferToHex(buf, prefixed = false) {
    const hex = buf.toString(ENC_HEX);
    return prefixed ? addHexPrefix(hex) : hex;
}
function bufferToUtf8(buf) {
    return buf.toString(ENC_UTF8);
}
function bufferToNumber(buf) {
    return buf.readUIntBE(0, buf.length);
}
function bufferToBinary(buf) {
    return arrayToBinary(bufferToArray(buf));
}
function arrayToBuffer(arr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$typedarray$2d$to$2d$buffer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(arr);
}
function arrayToHex(arr, prefixed = false) {
    return bufferToHex(arrayToBuffer(arr), prefixed);
}
function arrayToUtf8(arr) {
    return bufferToUtf8(arrayToBuffer(arr));
}
function arrayToNumber(arr) {
    return bufferToNumber(arrayToBuffer(arr));
}
function arrayToBinary(arr) {
    return Array.from(arr).map(numberToBinary).join("");
}
function hexToBuffer(hex) {
    return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}
function hexToArray(hex) {
    return bufferToArray(hexToBuffer(hex));
}
function hexToUtf8(hex) {
    return bufferToUtf8(hexToBuffer(hex));
}
function hexToNumber(hex) {
    return arrayToNumber(hexToArray(hex));
}
function hexToBinary(hex) {
    return arrayToBinary(hexToArray(hex));
}
function utf8ToBuffer(utf8) {
    return Buffer.from(utf8, ENC_UTF8);
}
function utf8ToArray(utf8) {
    return bufferToArray(utf8ToBuffer(utf8));
}
function utf8ToHex(utf8, prefixed = false) {
    return bufferToHex(utf8ToBuffer(utf8), prefixed);
}
function utf8ToNumber(utf8) {
    const num = parseInt(utf8, 10);
    assert(isDefined(num), "Number can only safely store up to 53 bits");
    return num;
}
function utf8ToBinary(utf8) {
    return arrayToBinary(utf8ToArray(utf8));
}
function numberToBuffer(num) {
    return binaryToBuffer(numberToBinary(num));
}
function numberToArray(num) {
    return binaryToArray(numberToBinary(num));
}
function numberToHex(num, prefixed) {
    return binaryToHex(numberToBinary(num), prefixed);
}
function numberToUtf8(num) {
    return `${num}`;
}
function numberToBinary(num) {
    const bin = (num >>> 0).toString(2);
    return sanitizeBytes(bin);
}
function binaryToBuffer(bin) {
    return arrayToBuffer(binaryToArray(bin));
}
function binaryToArray(bin) {
    return new Uint8Array(splitBytes(bin).map((x)=>parseInt(x, 2)));
}
function binaryToHex(bin, prefixed) {
    return arrayToHex(binaryToArray(bin), prefixed);
}
function binaryToUtf8(bin) {
    return arrayToUtf8(binaryToArray(bin));
}
function binaryToNumber(bin) {
    return arrayToNumber(binaryToArray(bin));
}
function isBinaryString(str) {
    if (typeof str !== "string" || !new RegExp(/^[01]+$/).test(str)) {
        return false;
    }
    if (str.length % 8 !== 0) {
        return false;
    }
    return true;
}
function isHexString(str, length) {
    if (typeof str !== "string" || !str.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && str.length !== 2 + 2 * length) {
        return false;
    }
    return true;
}
function isBuffer(val) {
    return Buffer.isBuffer(val);
}
function isTypedArray(val) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$is$2d$typedarray$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].strict(val) && !isBuffer(val);
}
function isArrayBuffer(val) {
    return !isTypedArray(val) && !isBuffer(val) && typeof val.byteLength !== "undefined";
}
function getType(val) {
    if (isBuffer(val)) {
        return TYPE_BUFFER;
    } else if (isTypedArray(val)) {
        return TYPE_TYPED_ARRAY;
    } else if (isArrayBuffer(val)) {
        return TYPE_ARRAY_BUFFER;
    } else if (Array.isArray(val)) {
        return TYPE_ARRAY;
    } else {
        return typeof val;
    }
}
function getEncoding(str) {
    if (isBinaryString(str)) {
        return ENC_BIN;
    }
    if (isHexString(str)) {
        return ENC_HEX;
    }
    return ENC_UTF8;
}
function concatBuffers(...args) {
    const result = Buffer.concat(args);
    return result;
}
function concatArrays(...args) {
    let result = [];
    args.forEach((arg)=>result = result.concat(Array.from(arg)));
    return new Uint8Array([
        ...result
    ]);
}
function trimLeft(data, length) {
    const diff = data.length - length;
    if (diff > 0) {
        data = data.slice(diff);
    }
    return data;
}
function trimRight(data, length) {
    return data.slice(0, length);
}
function calcByteLength(length, byteSize = 8) {
    const remainder = length % byteSize;
    return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
}
function splitBytes(str, byteSize = 8) {
    const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, "gi"));
    return Array.from(bytes || []);
}
function swapBytes(str) {
    return splitBytes(str).map(reverseString).join("");
}
function swapHex(str) {
    return binaryToHex(swapBytes(hexToBinary(str)));
}
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
    return padLeft(str, calcByteLength(str.length, byteSize), padding);
}
function padLeft(str, length, padding = STRING_ZERO) {
    return padString(str, length, true, padding);
}
function padRight(str, length, padding = STRING_ZERO) {
    return padString(str, length, false, padding);
}
function removeHexPrefix(hex) {
    return hex.replace(/^0x/, "");
}
function addHexPrefix(hex) {
    return hex.startsWith("0x") ? hex : `0x${hex}`;
}
function sanitizeHex(hex) {
    hex = removeHexPrefix(hex);
    hex = sanitizeBytes(hex, 2);
    if (hex) {
        hex = addHexPrefix(hex);
    }
    return hex;
}
function removeHexLeadingZeros(hex) {
    const prefixed = hex.startsWith("0x");
    hex = removeHexPrefix(hex);
    hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
    return prefixed ? addHexPrefix(hex) : hex;
}
function isUndefined(value) {
    return typeof value === "undefined";
}
function isDefined(value) {
    return !isUndefined(value);
}
function assert(assertion, errorMessage) {
    if (!assertion) {
        throw new Error(errorMessage);
    }
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function padString(str, length, left, padding = STRING_ZERO) {
    const diff = length - str.length;
    let result = str;
    if (diff > 0) {
        const pad = padding.repeat(diff);
        result = left ? pad + str : str + pad;
    }
    return result;
} //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/encoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertNumberToHex = exports.convertNumberToUtf8 = exports.convertNumberToArrayBuffer = exports.convertNumberToBuffer = exports.convertHexToNumber = exports.convertHexToUtf8 = exports.convertHexToArrayBuffer = exports.convertHexToBuffer = exports.convertUtf8ToNumber = exports.convertUtf8ToHex = exports.convertUtf8ToBuffer = exports.convertUtf8ToArrayBuffer = exports.concatBuffers = exports.convertBufferToNumber = exports.convertBufferToHex = exports.convertBufferToUtf8 = exports.convertBufferToArrayBuffer = exports.concatArrayBuffers = exports.convertArrayBufferToNumber = exports.convertArrayBufferToHex = exports.convertArrayBufferToUtf8 = exports.convertArrayBufferToBuffer = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const bn_js_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript)"));
const encoding = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/encoding/dist/esm/index.js [app-ssr] (ecmascript)"));
function convertArrayBufferToBuffer(arrBuf) {
    return encoding.arrayToBuffer(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToBuffer = convertArrayBufferToBuffer;
function convertArrayBufferToUtf8(arrBuf) {
    return encoding.arrayToUtf8(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToUtf8 = convertArrayBufferToUtf8;
function convertArrayBufferToHex(arrBuf, noPrefix) {
    return encoding.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
exports.convertArrayBufferToHex = convertArrayBufferToHex;
function convertArrayBufferToNumber(arrBuf) {
    return encoding.arrayToNumber(new Uint8Array(arrBuf));
}
exports.convertArrayBufferToNumber = convertArrayBufferToNumber;
function concatArrayBuffers(...args) {
    return encoding.hexToArray(args.map((b)=>encoding.arrayToHex(new Uint8Array(b))).join("")).buffer;
}
exports.concatArrayBuffers = concatArrayBuffers;
function convertBufferToArrayBuffer(buf) {
    return encoding.bufferToArray(buf).buffer;
}
exports.convertBufferToArrayBuffer = convertBufferToArrayBuffer;
function convertBufferToUtf8(buf) {
    return encoding.bufferToUtf8(buf);
}
exports.convertBufferToUtf8 = convertBufferToUtf8;
function convertBufferToHex(buf, noPrefix) {
    return encoding.bufferToHex(buf, !noPrefix);
}
exports.convertBufferToHex = convertBufferToHex;
function convertBufferToNumber(buf) {
    return encoding.bufferToNumber(buf);
}
exports.convertBufferToNumber = convertBufferToNumber;
function concatBuffers(...args) {
    return encoding.concatBuffers(...args);
}
exports.concatBuffers = concatBuffers;
function convertUtf8ToArrayBuffer(utf8) {
    return encoding.utf8ToArray(utf8).buffer;
}
exports.convertUtf8ToArrayBuffer = convertUtf8ToArrayBuffer;
function convertUtf8ToBuffer(utf8) {
    return encoding.utf8ToBuffer(utf8);
}
exports.convertUtf8ToBuffer = convertUtf8ToBuffer;
function convertUtf8ToHex(utf8, noPrefix) {
    return encoding.utf8ToHex(utf8, !noPrefix);
}
exports.convertUtf8ToHex = convertUtf8ToHex;
function convertUtf8ToNumber(utf8) {
    return new bn_js_1.default(utf8, 10).toNumber();
}
exports.convertUtf8ToNumber = convertUtf8ToNumber;
function convertHexToBuffer(hex) {
    return encoding.hexToBuffer(hex);
}
exports.convertHexToBuffer = convertHexToBuffer;
function convertHexToArrayBuffer(hex) {
    return encoding.hexToArray(hex).buffer;
}
exports.convertHexToArrayBuffer = convertHexToArrayBuffer;
function convertHexToUtf8(hex) {
    return encoding.hexToUtf8(hex);
}
exports.convertHexToUtf8 = convertHexToUtf8;
function convertHexToNumber(hex) {
    return new bn_js_1.default(encoding.removeHexPrefix(hex), "hex").toNumber();
}
exports.convertHexToNumber = convertHexToNumber;
function convertNumberToBuffer(num) {
    return encoding.numberToBuffer(num);
}
exports.convertNumberToBuffer = convertNumberToBuffer;
function convertNumberToArrayBuffer(num) {
    return encoding.numberToArray(num).buffer;
}
exports.convertNumberToArrayBuffer = convertNumberToArrayBuffer;
function convertNumberToUtf8(num) {
    return new bn_js_1.default(num).toString();
}
exports.convertNumberToUtf8 = convertNumberToUtf8;
function convertNumberToHex(num, noPrefix) {
    const hex = encoding.removeHexPrefix(encoding.sanitizeHex(new bn_js_1.default(num).toString(16)));
    return noPrefix ? hex : encoding.addHexPrefix(hex);
}
exports.convertNumberToHex = convertNumberToHex; //# sourceMappingURL=encoding.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/js-sha3/src/sha3.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ /*jslint bitwise: true */ (function() {
    'use strict';
    var INPUT_ERROR = 'input is invalid type';
    var FINALIZE_ERROR = 'finalize already called';
    var WINDOW = ("TURBOPACK compile-time value", "undefined") === 'object';
    var root = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
    if (root.JS_SHA3_NO_WINDOW) {
        WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === 'object';
    var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) {
        root = /*TURBOPACK member replacement*/ __turbopack_context__.g;
    } else if (WEB_WORKER) {
        root = self;
    }
    var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && ("TURBOPACK compile-time value", "object") === 'object' && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var SHAKE_PADDING = [
        31,
        7936,
        2031616,
        520093696
    ];
    var CSHAKE_PADDING = [
        4,
        1024,
        262144,
        67108864
    ];
    var KECCAK_PADDING = [
        1,
        256,
        65536,
        16777216
    ];
    var PADDING = [
        6,
        1536,
        393216,
        100663296
    ];
    var SHIFT = [
        0,
        8,
        16,
        24
    ];
    var RC = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
    ];
    var BITS = [
        224,
        256,
        384,
        512
    ];
    var SHAKE_BITS = [
        128,
        256
    ];
    var OUTPUT_TYPES = [
        'hex',
        'buffer',
        'arrayBuffer',
        'array',
        'digest'
    ];
    var CSHAKE_BYTEPAD = {
        '128': 168,
        '256': 136
    };
    if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
    }
    if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
            return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
    }
    var createOutputMethod = function(bits, padding, outputType) {
        return function(message) {
            return new Keccak(bits, padding, bits).update(message)[outputType]();
        };
    };
    var createShakeOutputMethod = function(bits, padding, outputType) {
        return function(message, outputBits) {
            return new Keccak(bits, padding, outputBits).update(message)[outputType]();
        };
    };
    var createCshakeOutputMethod = function(bits, padding, outputType) {
        return function(message, outputBits, n, s) {
            return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
        };
    };
    var createKmacOutputMethod = function(bits, padding, outputType) {
        return function(key, message, outputBits, s) {
            return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
        };
    };
    var createOutputMethods = function(method, createMethod, bits, padding) {
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createMethod(bits, padding, type);
        }
        return method;
    };
    var createMethod = function(bits, padding) {
        var method = createOutputMethod(bits, padding, 'hex');
        method.create = function() {
            return new Keccak(bits, padding, bits);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        return createOutputMethods(method, createOutputMethod, bits, padding);
    };
    var createShakeMethod = function(bits, padding) {
        var method = createShakeOutputMethod(bits, padding, 'hex');
        method.create = function(outputBits) {
            return new Keccak(bits, padding, outputBits);
        };
        method.update = function(message, outputBits) {
            return method.create(outputBits).update(message);
        };
        return createOutputMethods(method, createShakeOutputMethod, bits, padding);
    };
    var createCshakeMethod = function(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createCshakeOutputMethod(bits, padding, 'hex');
        method.create = function(outputBits, n, s) {
            if (!n && !s) {
                return methods['shake' + bits].create(outputBits);
            } else {
                return new Keccak(bits, padding, outputBits).bytepad([
                    n,
                    s
                ], w);
            }
        };
        method.update = function(message, outputBits, n, s) {
            return method.create(outputBits, n, s).update(message);
        };
        return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
    };
    var createKmacMethod = function(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createKmacOutputMethod(bits, padding, 'hex');
        method.create = function(key, outputBits, s) {
            return new Kmac(bits, padding, outputBits).bytepad([
                'KMAC',
                s
            ], w).bytepad([
                key
            ], w);
        };
        method.update = function(key, message, outputBits, s) {
            return method.create(key, outputBits, s).update(message);
        };
        return createOutputMethods(method, createKmacOutputMethod, bits, padding);
    };
    var algorithms = [
        {
            name: 'keccak',
            padding: KECCAK_PADDING,
            bits: BITS,
            createMethod: createMethod
        },
        {
            name: 'sha3',
            padding: PADDING,
            bits: BITS,
            createMethod: createMethod
        },
        {
            name: 'shake',
            padding: SHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createShakeMethod
        },
        {
            name: 'cshake',
            padding: CSHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createCshakeMethod
        },
        {
            name: 'kmac',
            padding: CSHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createKmacMethod
        }
    ];
    var methods = {}, methodNames = [];
    for(var i = 0; i < algorithms.length; ++i){
        var algorithm = algorithms[i];
        var bits = algorithm.bits;
        for(var j = 0; j < bits.length; ++j){
            var methodName = algorithm.name + '_' + bits[j];
            methodNames.push(methodName);
            methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
            if (algorithm.name !== 'sha3') {
                var newMethodName = algorithm.name + bits[j];
                methodNames.push(newMethodName);
                methods[newMethodName] = methods[methodName];
            }
        }
    }
    function Keccak(bits, padding, outputBits) {
        this.blocks = [];
        this.s = [];
        this.padding = padding;
        this.outputBits = outputBits;
        this.reset = true;
        this.finalized = false;
        this.block = 0;
        this.start = 0;
        this.blockCount = 1600 - (bits << 1) >> 5;
        this.byteCount = this.blockCount << 2;
        this.outputBlocks = outputBits >> 5;
        this.extraBytes = (outputBits & 31) >> 3;
        for(var i = 0; i < 50; ++i){
            this.s[i] = 0;
        }
    }
    Keccak.prototype.update = function(message) {
        if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
        }
        var notString, type = typeof message;
        if (type !== 'string') {
            if (type === 'object') {
                if (message === null) {
                    throw new Error(INPUT_ERROR);
                } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                    message = new Uint8Array(message);
                } else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                        throw new Error(INPUT_ERROR);
                    }
                }
            } else {
                throw new Error(INPUT_ERROR);
            }
            notString = true;
        }
        var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i, code;
        while(index < length){
            if (this.reset) {
                this.reset = false;
                blocks[0] = this.block;
                for(i = 1; i < blockCount + 1; ++i){
                    blocks[i] = 0;
                }
            }
            if (notString) {
                for(i = this.start; index < length && i < byteCount; ++index){
                    blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
                }
            } else {
                for(i = this.start; index < length && i < byteCount; ++index){
                    code = message.charCodeAt(index);
                    if (code < 0x80) {
                        blocks[i >> 2] |= code << SHIFT[i++ & 3];
                    } else if (code < 0x800) {
                        blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                    } else if (code < 0xd800 || code >= 0xe000) {
                        blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                    } else {
                        code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                        blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                    }
                }
            }
            this.lastByteIndex = i;
            if (i >= byteCount) {
                this.start = i - byteCount;
                this.block = blocks[blockCount];
                for(i = 0; i < blockCount; ++i){
                    s[i] ^= blocks[i];
                }
                f(s);
                this.reset = true;
            } else {
                this.start = i;
            }
        }
        return this;
    };
    Keccak.prototype.encode = function(x, right) {
        var o = x & 255, n = 1;
        var bytes = [
            o
        ];
        x = x >> 8;
        o = x & 255;
        while(o > 0){
            bytes.unshift(o);
            x = x >> 8;
            o = x & 255;
            ++n;
        }
        if (right) {
            bytes.push(n);
        } else {
            bytes.unshift(n);
        }
        this.update(bytes);
        return bytes.length;
    };
    Keccak.prototype.encodeString = function(str) {
        var notString, type = typeof str;
        if (type !== 'string') {
            if (type === 'object') {
                if (str === null) {
                    throw new Error(INPUT_ERROR);
                } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
                    str = new Uint8Array(str);
                } else if (!Array.isArray(str)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                        throw new Error(INPUT_ERROR);
                    }
                }
            } else {
                throw new Error(INPUT_ERROR);
            }
            notString = true;
        }
        var bytes = 0, length = str.length;
        if (notString) {
            bytes = length;
        } else {
            for(var i = 0; i < str.length; ++i){
                var code = str.charCodeAt(i);
                if (code < 0x80) {
                    bytes += 1;
                } else if (code < 0x800) {
                    bytes += 2;
                } else if (code < 0xd800 || code >= 0xe000) {
                    bytes += 3;
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | str.charCodeAt(++i) & 0x3ff);
                    bytes += 4;
                }
            }
        }
        bytes += this.encode(bytes * 8);
        this.update(str);
        return bytes;
    };
    Keccak.prototype.bytepad = function(strs, w) {
        var bytes = this.encode(w);
        for(var i = 0; i < strs.length; ++i){
            bytes += this.encodeString(strs[i]);
        }
        var paddingBytes = w - bytes % w;
        var zeros = [];
        zeros.length = paddingBytes;
        this.update(zeros);
        return this;
    };
    Keccak.prototype.finalize = function() {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
        blocks[i >> 2] |= this.padding[i & 3];
        if (this.lastByteIndex === this.byteCount) {
            blocks[0] = blocks[blockCount];
            for(i = 1; i < blockCount + 1; ++i){
                blocks[i] = 0;
            }
        }
        blocks[blockCount - 1] |= 0x80000000;
        for(i = 0; i < blockCount; ++i){
            s[i] ^= blocks[i];
        }
        f(s);
    };
    Keccak.prototype.toString = Keccak.prototype.hex = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var hex = '', block;
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                block = s[i];
                hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F] + HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F] + HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F] + HEX_CHARS[block >> 28 & 0x0F] + HEX_CHARS[block >> 24 & 0x0F];
            }
            if (j % blockCount === 0) {
                f(s);
                i = 0;
            }
        }
        if (extraBytes) {
            block = s[i];
            hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F];
            if (extraBytes > 1) {
                hex += HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F];
            }
            if (extraBytes > 2) {
                hex += HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F];
            }
        }
        return hex;
    };
    Keccak.prototype.arrayBuffer = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var bytes = this.outputBits >> 3;
        var buffer;
        if (extraBytes) {
            buffer = new ArrayBuffer(outputBlocks + 1 << 2);
        } else {
            buffer = new ArrayBuffer(bytes);
        }
        var array = new Uint32Array(buffer);
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                array[j] = s[i];
            }
            if (j % blockCount === 0) {
                f(s);
            }
        }
        if (extraBytes) {
            array[i] = s[i];
            buffer = buffer.slice(0, bytes);
        }
        return buffer;
    };
    Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
    Keccak.prototype.digest = Keccak.prototype.array = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var array = [], offset, block;
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                offset = j << 2;
                block = s[i];
                array[offset] = block & 0xFF;
                array[offset + 1] = block >> 8 & 0xFF;
                array[offset + 2] = block >> 16 & 0xFF;
                array[offset + 3] = block >> 24 & 0xFF;
            }
            if (j % blockCount === 0) {
                f(s);
            }
        }
        if (extraBytes) {
            offset = j << 2;
            block = s[i];
            array[offset] = block & 0xFF;
            if (extraBytes > 1) {
                array[offset + 1] = block >> 8 & 0xFF;
            }
            if (extraBytes > 2) {
                array[offset + 2] = block >> 16 & 0xFF;
            }
        }
        return array;
    };
    function Kmac(bits, padding, outputBits) {
        Keccak.call(this, bits, padding, outputBits);
    }
    Kmac.prototype = new Keccak();
    Kmac.prototype.finalize = function() {
        this.encode(this.outputBits, true);
        return Keccak.prototype.finalize.call(this);
    };
    var f = function(s) {
        var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
        for(n = 0; n < 48; n += 2){
            c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
            c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
            c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
            c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
            c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
            c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
            c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
            c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
            c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
            c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
            h = c8 ^ (c2 << 1 | c3 >>> 31);
            l = c9 ^ (c3 << 1 | c2 >>> 31);
            s[0] ^= h;
            s[1] ^= l;
            s[10] ^= h;
            s[11] ^= l;
            s[20] ^= h;
            s[21] ^= l;
            s[30] ^= h;
            s[31] ^= l;
            s[40] ^= h;
            s[41] ^= l;
            h = c0 ^ (c4 << 1 | c5 >>> 31);
            l = c1 ^ (c5 << 1 | c4 >>> 31);
            s[2] ^= h;
            s[3] ^= l;
            s[12] ^= h;
            s[13] ^= l;
            s[22] ^= h;
            s[23] ^= l;
            s[32] ^= h;
            s[33] ^= l;
            s[42] ^= h;
            s[43] ^= l;
            h = c2 ^ (c6 << 1 | c7 >>> 31);
            l = c3 ^ (c7 << 1 | c6 >>> 31);
            s[4] ^= h;
            s[5] ^= l;
            s[14] ^= h;
            s[15] ^= l;
            s[24] ^= h;
            s[25] ^= l;
            s[34] ^= h;
            s[35] ^= l;
            s[44] ^= h;
            s[45] ^= l;
            h = c4 ^ (c8 << 1 | c9 >>> 31);
            l = c5 ^ (c9 << 1 | c8 >>> 31);
            s[6] ^= h;
            s[7] ^= l;
            s[16] ^= h;
            s[17] ^= l;
            s[26] ^= h;
            s[27] ^= l;
            s[36] ^= h;
            s[37] ^= l;
            s[46] ^= h;
            s[47] ^= l;
            h = c6 ^ (c0 << 1 | c1 >>> 31);
            l = c7 ^ (c1 << 1 | c0 >>> 31);
            s[8] ^= h;
            s[9] ^= l;
            s[18] ^= h;
            s[19] ^= l;
            s[28] ^= h;
            s[29] ^= l;
            s[38] ^= h;
            s[39] ^= l;
            s[48] ^= h;
            s[49] ^= l;
            b0 = s[0];
            b1 = s[1];
            b32 = s[11] << 4 | s[10] >>> 28;
            b33 = s[10] << 4 | s[11] >>> 28;
            b14 = s[20] << 3 | s[21] >>> 29;
            b15 = s[21] << 3 | s[20] >>> 29;
            b46 = s[31] << 9 | s[30] >>> 23;
            b47 = s[30] << 9 | s[31] >>> 23;
            b28 = s[40] << 18 | s[41] >>> 14;
            b29 = s[41] << 18 | s[40] >>> 14;
            b20 = s[2] << 1 | s[3] >>> 31;
            b21 = s[3] << 1 | s[2] >>> 31;
            b2 = s[13] << 12 | s[12] >>> 20;
            b3 = s[12] << 12 | s[13] >>> 20;
            b34 = s[22] << 10 | s[23] >>> 22;
            b35 = s[23] << 10 | s[22] >>> 22;
            b16 = s[33] << 13 | s[32] >>> 19;
            b17 = s[32] << 13 | s[33] >>> 19;
            b48 = s[42] << 2 | s[43] >>> 30;
            b49 = s[43] << 2 | s[42] >>> 30;
            b40 = s[5] << 30 | s[4] >>> 2;
            b41 = s[4] << 30 | s[5] >>> 2;
            b22 = s[14] << 6 | s[15] >>> 26;
            b23 = s[15] << 6 | s[14] >>> 26;
            b4 = s[25] << 11 | s[24] >>> 21;
            b5 = s[24] << 11 | s[25] >>> 21;
            b36 = s[34] << 15 | s[35] >>> 17;
            b37 = s[35] << 15 | s[34] >>> 17;
            b18 = s[45] << 29 | s[44] >>> 3;
            b19 = s[44] << 29 | s[45] >>> 3;
            b10 = s[6] << 28 | s[7] >>> 4;
            b11 = s[7] << 28 | s[6] >>> 4;
            b42 = s[17] << 23 | s[16] >>> 9;
            b43 = s[16] << 23 | s[17] >>> 9;
            b24 = s[26] << 25 | s[27] >>> 7;
            b25 = s[27] << 25 | s[26] >>> 7;
            b6 = s[36] << 21 | s[37] >>> 11;
            b7 = s[37] << 21 | s[36] >>> 11;
            b38 = s[47] << 24 | s[46] >>> 8;
            b39 = s[46] << 24 | s[47] >>> 8;
            b30 = s[8] << 27 | s[9] >>> 5;
            b31 = s[9] << 27 | s[8] >>> 5;
            b12 = s[18] << 20 | s[19] >>> 12;
            b13 = s[19] << 20 | s[18] >>> 12;
            b44 = s[29] << 7 | s[28] >>> 25;
            b45 = s[28] << 7 | s[29] >>> 25;
            b26 = s[38] << 8 | s[39] >>> 24;
            b27 = s[39] << 8 | s[38] >>> 24;
            b8 = s[48] << 14 | s[49] >>> 18;
            b9 = s[49] << 14 | s[48] >>> 18;
            s[0] = b0 ^ ~b2 & b4;
            s[1] = b1 ^ ~b3 & b5;
            s[10] = b10 ^ ~b12 & b14;
            s[11] = b11 ^ ~b13 & b15;
            s[20] = b20 ^ ~b22 & b24;
            s[21] = b21 ^ ~b23 & b25;
            s[30] = b30 ^ ~b32 & b34;
            s[31] = b31 ^ ~b33 & b35;
            s[40] = b40 ^ ~b42 & b44;
            s[41] = b41 ^ ~b43 & b45;
            s[2] = b2 ^ ~b4 & b6;
            s[3] = b3 ^ ~b5 & b7;
            s[12] = b12 ^ ~b14 & b16;
            s[13] = b13 ^ ~b15 & b17;
            s[22] = b22 ^ ~b24 & b26;
            s[23] = b23 ^ ~b25 & b27;
            s[32] = b32 ^ ~b34 & b36;
            s[33] = b33 ^ ~b35 & b37;
            s[42] = b42 ^ ~b44 & b46;
            s[43] = b43 ^ ~b45 & b47;
            s[4] = b4 ^ ~b6 & b8;
            s[5] = b5 ^ ~b7 & b9;
            s[14] = b14 ^ ~b16 & b18;
            s[15] = b15 ^ ~b17 & b19;
            s[24] = b24 ^ ~b26 & b28;
            s[25] = b25 ^ ~b27 & b29;
            s[34] = b34 ^ ~b36 & b38;
            s[35] = b35 ^ ~b37 & b39;
            s[44] = b44 ^ ~b46 & b48;
            s[45] = b45 ^ ~b47 & b49;
            s[6] = b6 ^ ~b8 & b0;
            s[7] = b7 ^ ~b9 & b1;
            s[16] = b16 ^ ~b18 & b10;
            s[17] = b17 ^ ~b19 & b11;
            s[26] = b26 ^ ~b28 & b20;
            s[27] = b27 ^ ~b29 & b21;
            s[36] = b36 ^ ~b38 & b30;
            s[37] = b37 ^ ~b39 & b31;
            s[46] = b46 ^ ~b48 & b40;
            s[47] = b47 ^ ~b49 & b41;
            s[8] = b8 ^ ~b0 & b2;
            s[9] = b9 ^ ~b1 & b3;
            s[18] = b18 ^ ~b10 & b12;
            s[19] = b19 ^ ~b11 & b13;
            s[28] = b28 ^ ~b20 & b22;
            s[29] = b29 ^ ~b21 & b23;
            s[38] = b38 ^ ~b30 & b32;
            s[39] = b39 ^ ~b31 & b33;
            s[48] = b48 ^ ~b40 & b42;
            s[49] = b49 ^ ~b41 & b43;
            s[0] ^= RC[n];
            s[1] ^= RC[n + 1];
        }
    };
    if (COMMON_JS) {
        module.exports = methods;
    } else {
        for(i = 0; i < methodNames.length; ++i){
            root[methodNames[i]] = methods[methodNames[i]];
        }
        if (AMD) {
            ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
                return methods;
            }(__turbopack_context__.r, exports, module));
        }
    }
})();
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ERROR",
    ()=>DEFAULT_ERROR,
    "INTERNAL_ERROR",
    ()=>INTERNAL_ERROR,
    "INVALID_PARAMS",
    ()=>INVALID_PARAMS,
    "INVALID_REQUEST",
    ()=>INVALID_REQUEST,
    "METHOD_NOT_FOUND",
    ()=>METHOD_NOT_FOUND,
    "PARSE_ERROR",
    ()=>PARSE_ERROR,
    "RESERVED_ERROR_CODES",
    ()=>RESERVED_ERROR_CODES,
    "SERVER_ERROR",
    ()=>SERVER_ERROR,
    "SERVER_ERROR_CODE_RANGE",
    ()=>SERVER_ERROR_CODE_RANGE,
    "STANDARD_ERROR_MAP",
    ()=>STANDARD_ERROR_MAP
]);
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [
    -32700,
    -32600,
    -32601,
    -32602,
    -32603
];
const SERVER_ERROR_CODE_RANGE = [
    -32000,
    -32099
];
const STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: {
        code: -32700,
        message: "Parse error"
    },
    [INVALID_REQUEST]: {
        code: -32600,
        message: "Invalid Request"
    },
    [METHOD_NOT_FOUND]: {
        code: -32601,
        message: "Method not found"
    },
    [INVALID_PARAMS]: {
        code: -32602,
        message: "Invalid params"
    },
    [INTERNAL_ERROR]: {
        code: -32603,
        message: "Internal error"
    },
    [SERVER_ERROR]: {
        code: -32000,
        message: "Server error"
    }
};
const DEFAULT_ERROR = SERVER_ERROR; //# sourceMappingURL=constants.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getError",
    ()=>getError,
    "getErrorByCode",
    ()=>getErrorByCode,
    "isReservedErrorCode",
    ()=>isReservedErrorCode,
    "isServerErrorCode",
    ()=>isServerErrorCode,
    "isValidErrorCode",
    ()=>isValidErrorCode,
    "parseConnectionError",
    ()=>parseConnectionError,
    "validateJsonRpcError",
    ()=>validateJsonRpcError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js [app-ssr] (ecmascript)");
;
function isServerErrorCode(code) {
    return code <= __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVER_ERROR_CODE_RANGE"][0] && code >= __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVER_ERROR_CODE_RANGE"][1];
}
function isReservedErrorCode(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESERVED_ERROR_CODES"].includes(code);
}
function isValidErrorCode(code) {
    return typeof code === "number";
}
function getError(type) {
    if (!Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STANDARD_ERROR_MAP"]).includes(type)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STANDARD_ERROR_MAP"][__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_ERROR"]];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STANDARD_ERROR_MAP"][type];
}
function getErrorByCode(code) {
    const match = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STANDARD_ERROR_MAP"]).find((e)=>e.code === code);
    if (!match) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STANDARD_ERROR_MAP"][__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_ERROR"]];
    }
    return match;
}
function validateJsonRpcError(response) {
    if (typeof response.error.code === "undefined") {
        return {
            valid: false,
            error: "Missing code for JSON-RPC error"
        };
    }
    if (typeof response.error.message === "undefined") {
        return {
            valid: false,
            error: "Missing message for JSON-RPC error"
        };
    }
    if (!isValidErrorCode(response.error.code)) {
        return {
            valid: false,
            error: `Invalid error code type for JSON-RPC: ${response.error.code}`
        };
    }
    if (isReservedErrorCode(response.error.code)) {
        const error = getErrorByCode(response.error.code);
        if (error.message !== __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STANDARD_ERROR_MAP"][__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_ERROR"]].message && response.error.message === error.message) {
            return {
                valid: false,
                error: `Invalid error code message for JSON-RPC: ${response.error.code}`
            };
        }
    }
    return {
        valid: true
    };
}
function parseConnectionError(e, url, type) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e;
} //# sourceMappingURL=error.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ __turbopack_context__.s([
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__spread",
    ()=>__spread,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/crypto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (/*TURBOPACK member replacement*/ __turbopack_context__.g === null || /*TURBOPACK member replacement*/ __turbopack_context__.g === void 0 ? void 0 : /*TURBOPACK member replacement*/ __turbopack_context__.g.crypto) || (/*TURBOPACK member replacement*/ __turbopack_context__.g === null || /*TURBOPACK member replacement*/ __turbopack_context__.g === void 0 ? void 0 : /*TURBOPACK member replacement*/ __turbopack_context__.g.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable; //# sourceMappingURL=crypto.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/env.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
}
exports.isReactNative = isReactNative;
function isNode() {
    return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser; //# sourceMappingURL=env.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/crypto.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/env.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeJs",
    ()=>isNodeJs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/index.js [app-ssr] (ecmascript)");
;
const isNodeJs = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"];
;
 //# sourceMappingURL=env.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage,
    "formatJsonRpcError",
    ()=>formatJsonRpcError,
    "formatJsonRpcRequest",
    ()=>formatJsonRpcRequest,
    "formatJsonRpcResult",
    ()=>formatJsonRpcResult,
    "getBigIntRpcId",
    ()=>getBigIntRpcId,
    "payloadId",
    ()=>payloadId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js [app-ssr] (ecmascript)");
;
;
function payloadId(entropy = 3) {
    const date = Date.now() * Math.pow(10, entropy);
    const extra = Math.floor(Math.random() * Math.pow(10, entropy));
    return date + extra;
}
function getBigIntRpcId(entropy = 6) {
    return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
    return {
        id: id || payloadId(),
        jsonrpc: "2.0",
        method,
        params
    };
}
function formatJsonRpcResult(id, result) {
    return {
        id,
        jsonrpc: "2.0",
        result
    };
}
function formatJsonRpcError(id, error, data) {
    return {
        id,
        jsonrpc: "2.0",
        error: formatErrorMessage(error, data)
    };
}
function formatErrorMessage(error, data) {
    if (typeof error === "undefined") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getError"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_ERROR"]);
    }
    if (typeof error === "string") {
        error = Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getError"])(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVER_ERROR"])), {
            message: error
        });
    }
    if (typeof data !== "undefined") {
        error.data = data;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReservedErrorCode"])(error.code)) {
        error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorByCode"])(error.code);
    }
    return error;
} //# sourceMappingURL=format.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidDefaultRoute",
    ()=>isValidDefaultRoute,
    "isValidLeadingWildcardRoute",
    ()=>isValidLeadingWildcardRoute,
    "isValidRoute",
    ()=>isValidRoute,
    "isValidTrailingWildcardRoute",
    ()=>isValidTrailingWildcardRoute,
    "isValidWildcardRoute",
    ()=>isValidWildcardRoute
]);
function isValidRoute(route) {
    if (route.includes("*")) {
        return isValidWildcardRoute(route);
    }
    if (/\W/g.test(route)) {
        return false;
    }
    return true;
}
function isValidDefaultRoute(route) {
    return route === "*";
}
function isValidWildcardRoute(route) {
    if (isValidDefaultRoute(route)) {
        return true;
    }
    if (!route.includes("*")) {
        return false;
    }
    if (route.split("*").length !== 2) {
        return false;
    }
    if (route.split("*").filter((x)=>x.trim() === "").length !== 1) {
        return false;
    }
    return true;
}
function isValidLeadingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
} //# sourceMappingURL=routing.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-types/dist/index.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IBaseJsonRpcProvider",
    ()=>n,
    "IEvents",
    ()=>e,
    "IJsonRpcConnection",
    ()=>o,
    "IJsonRpcProvider",
    ()=>r
]);
class e {
}
class o extends e {
    constructor(c){
        super();
    }
}
class n extends e {
    constructor(){
        super();
    }
}
class r extends n {
    constructor(c){
        super();
    }
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-types/dist/index.es.js [app-ssr] (ecmascript)"); //# sourceMappingURL=types.js.map
;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHttpUrl",
    ()=>isHttpUrl,
    "isLocalhostUrl",
    ()=>isLocalhostUrl,
    "isWsUrl",
    ()=>isWsUrl
]);
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
    const matches = url.match(new RegExp(/^\w+:/, "gi"));
    if (!matches || !matches.length) return;
    return matches[0];
}
function matchRegexProtocol(url, regex) {
    const protocol = getUrlProtocol(url);
    if (typeof protocol === "undefined") return false;
    return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
    return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
    return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(url);
} //# sourceMappingURL=url.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJsonRpcError",
    ()=>isJsonRpcError,
    "isJsonRpcPayload",
    ()=>isJsonRpcPayload,
    "isJsonRpcRequest",
    ()=>isJsonRpcRequest,
    "isJsonRpcResponse",
    ()=>isJsonRpcResponse,
    "isJsonRpcResult",
    ()=>isJsonRpcResult,
    "isJsonRpcValidationInvalid",
    ()=>isJsonRpcValidationInvalid
]);
function isJsonRpcPayload(payload) {
    return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
    return "result" in payload;
}
function isJsonRpcError(payload) {
    return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
} //# sourceMappingURL=validators.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$routing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeJs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNodeJs"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/index.js [app-ssr] (ecmascript)");
__turbopack_context__.j(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$environment$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IBaseJsonRpcProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IBaseJsonRpcProvider"],
    "IEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"],
    "IJsonRpcConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcConnection"],
    "IJsonRpcProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcProvider"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-types/dist/index.es.js [app-ssr] (ecmascript)");
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ERROR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_ERROR"],
    "IBaseJsonRpcProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IBaseJsonRpcProvider"],
    "IEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"],
    "IJsonRpcConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcConnection"],
    "IJsonRpcProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcProvider"],
    "INTERNAL_ERROR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_ERROR"],
    "INVALID_PARAMS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID_PARAMS"],
    "INVALID_REQUEST",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID_REQUEST"],
    "METHOD_NOT_FOUND",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["METHOD_NOT_FOUND"],
    "PARSE_ERROR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PARSE_ERROR"],
    "RESERVED_ERROR_CODES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESERVED_ERROR_CODES"],
    "SERVER_ERROR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVER_ERROR"],
    "SERVER_ERROR_CODE_RANGE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVER_ERROR_CODE_RANGE"],
    "STANDARD_ERROR_MAP",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STANDARD_ERROR_MAP"],
    "formatErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"],
    "formatJsonRpcError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcError"],
    "formatJsonRpcRequest",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"],
    "formatJsonRpcResult",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"],
    "getBigIntRpcId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"],
    "getError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getError"],
    "getErrorByCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorByCode"],
    "isHttpUrl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHttpUrl"],
    "isJsonRpcError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"],
    "isJsonRpcPayload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcPayload"],
    "isJsonRpcRequest",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"],
    "isJsonRpcResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"],
    "isJsonRpcResult",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResult"],
    "isJsonRpcValidationInvalid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcValidationInvalid"],
    "isLocalhostUrl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLocalhostUrl"],
    "isNodeJs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNodeJs"],
    "isReservedErrorCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReservedErrorCode"],
    "isServerErrorCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServerErrorCode"],
    "isValidDefaultRoute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$routing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidDefaultRoute"],
    "isValidErrorCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidErrorCode"],
    "isValidLeadingWildcardRoute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$routing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLeadingWildcardRoute"],
    "isValidRoute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$routing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidRoute"],
    "isValidTrailingWildcardRoute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$routing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTrailingWildcardRoute"],
    "isValidWildcardRoute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$routing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidWildcardRoute"],
    "isWsUrl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWsUrl"],
    "parseConnectionError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseConnectionError"],
    "payloadId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["payloadId"],
    "validateJsonRpcError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateJsonRpcError"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$routing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-ssr] (ecmascript)");
__turbopack_context__.j(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/misc.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRpcUrl = exports.getInfuraRpcUrl = exports.logDeprecationWarning = exports.uuid = exports.payloadId = exports.removeHexLeadingZeros = exports.removeHexPrefix = exports.addHexPrefix = exports.sanitizeHex = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const encoding = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/encoding/dist/esm/index.js [app-ssr] (ecmascript)"));
const jsonRpcUtils = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript)"));
const constants_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/constants.js [app-ssr] (ecmascript)");
function sanitizeHex(hex) {
    return encoding.sanitizeHex(hex);
}
exports.sanitizeHex = sanitizeHex;
function addHexPrefix(hex) {
    return encoding.addHexPrefix(hex);
}
exports.addHexPrefix = addHexPrefix;
function removeHexPrefix(hex) {
    return encoding.removeHexPrefix(hex);
}
exports.removeHexPrefix = removeHexPrefix;
function removeHexLeadingZeros(hex) {
    return encoding.removeHexLeadingZeros(encoding.addHexPrefix(hex));
}
exports.removeHexLeadingZeros = removeHexLeadingZeros;
exports.payloadId = jsonRpcUtils.payloadId;
function uuid() {
    const result = ((a, b)=>{
        for(b = a = ""; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-"){}
        return b;
    })();
    return result;
}
exports.uuid = uuid;
function logDeprecationWarning() {
    console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
exports.logDeprecationWarning = logDeprecationWarning;
function getInfuraRpcUrl(chainId, infuraId) {
    let rpcUrl;
    const network = constants_1.infuraNetworks[chainId];
    if (network) {
        rpcUrl = `https://${network}.infura.io/v3/${infuraId}`;
    }
    return rpcUrl;
}
exports.getInfuraRpcUrl = getInfuraRpcUrl;
function getRpcUrl(chainId, rpc) {
    let rpcUrl;
    const infuraUrl = getInfuraRpcUrl(chainId, rpc.infuraId);
    if (rpc.custom && rpc.custom[chainId]) {
        rpcUrl = rpc.custom[chainId];
    } else if (infuraUrl) {
        rpcUrl = infuraUrl;
    }
    return rpcUrl;
}
exports.getRpcUrl = getRpcUrl; //# sourceMappingURL=misc.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/validators.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSilentPayload = exports.isReservedEvent = exports.isInternalEvent = exports.isJsonRpcResponseError = exports.isJsonRpcResponseSuccess = exports.isJsonRpcRequest = exports.isJsonRpcSubscription = exports.isHexString = exports.getEncoding = exports.getType = exports.isArrayBuffer = exports.isTypedArray = exports.isBuffer = exports.isEmptyArray = exports.isEmptyString = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const encoding = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/encoding/dist/esm/index.js [app-ssr] (ecmascript)"));
const constants_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/constants.js [app-ssr] (ecmascript)");
function isEmptyString(value) {
    return value === "" || typeof value === "string" && value.trim() === "";
}
exports.isEmptyString = isEmptyString;
function isEmptyArray(array) {
    return !(array && array.length);
}
exports.isEmptyArray = isEmptyArray;
function isBuffer(val) {
    return encoding.isBuffer(val);
}
exports.isBuffer = isBuffer;
function isTypedArray(val) {
    return encoding.isTypedArray(val);
}
exports.isTypedArray = isTypedArray;
function isArrayBuffer(val) {
    return encoding.isArrayBuffer(val);
}
exports.isArrayBuffer = isArrayBuffer;
function getType(val) {
    return encoding.getType(val);
}
exports.getType = getType;
function getEncoding(val) {
    return encoding.getEncoding(val);
}
exports.getEncoding = getEncoding;
function isHexString(value, length) {
    return encoding.isHexString(value, length);
}
exports.isHexString = isHexString;
function isJsonRpcSubscription(object) {
    return typeof object.params === "object";
}
exports.isJsonRpcSubscription = isJsonRpcSubscription;
function isJsonRpcRequest(object) {
    return typeof object.method !== "undefined";
}
exports.isJsonRpcRequest = isJsonRpcRequest;
function isJsonRpcResponseSuccess(object) {
    return typeof object.result !== "undefined";
}
exports.isJsonRpcResponseSuccess = isJsonRpcResponseSuccess;
function isJsonRpcResponseError(object) {
    return typeof object.error !== "undefined";
}
exports.isJsonRpcResponseError = isJsonRpcResponseError;
function isInternalEvent(object) {
    return typeof object.event !== "undefined";
}
exports.isInternalEvent = isInternalEvent;
function isReservedEvent(event) {
    return constants_1.reservedEvents.includes(event) || event.startsWith("wc_");
}
exports.isReservedEvent = isReservedEvent;
function isSilentPayload(request) {
    if (request.method.startsWith("wc_")) {
        return true;
    }
    if (constants_1.signingMethods.includes(request.method)) {
        return false;
    }
    return true;
}
exports.isSilentPayload = isSilentPayload; //# sourceMappingURL=validators.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/ethereum.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransactionData = exports.parsePersonalSign = exports.isValidAddress = exports.toChecksumAddress = void 0;
const js_sha3_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/js-sha3/src/sha3.js [app-ssr] (ecmascript)");
const encoding_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/encoding/dist/esm/index.js [app-ssr] (ecmascript)");
const encoding_2 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/encoding.js [app-ssr] (ecmascript)");
const misc_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/misc.js [app-ssr] (ecmascript)");
const validators_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/validators.js [app-ssr] (ecmascript)");
function toChecksumAddress(address) {
    address = (0, encoding_1.removeHexPrefix)(address.toLowerCase());
    const hash = (0, encoding_1.removeHexPrefix)((0, js_sha3_1.keccak_256)((0, encoding_2.convertUtf8ToBuffer)(address)));
    let checksum = "";
    for(let i = 0; i < address.length; i++){
        if (parseInt(hash[i], 16) > 7) {
            checksum += address[i].toUpperCase();
        } else {
            checksum += address[i];
        }
    }
    return (0, encoding_1.addHexPrefix)(checksum);
}
exports.toChecksumAddress = toChecksumAddress;
const isValidAddress = (address)=>{
    if (!address) {
        return false;
    } else if (address.toLowerCase().substring(0, 2) !== "0x") {
        return false;
    } else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        return true;
    } else {
        return address === toChecksumAddress(address);
    }
};
exports.isValidAddress = isValidAddress;
function parsePersonalSign(params) {
    if (!(0, validators_1.isEmptyArray)(params) && !(0, validators_1.isHexString)(params[0])) {
        params[0] = (0, encoding_2.convertUtf8ToHex)(params[0]);
    }
    return params;
}
exports.parsePersonalSign = parsePersonalSign;
function parseTransactionData(txData) {
    if (typeof txData.type !== "undefined" && txData.type !== "0") return txData;
    if (typeof txData.from === "undefined" || !(0, exports.isValidAddress)(txData.from)) {
        throw new Error(`Transaction object must include a valid 'from' value.`);
    }
    function parseHexValues(value) {
        let result = value;
        if (typeof value === "number" || typeof value === "string" && !(0, validators_1.isEmptyString)(value)) {
            if (!(0, validators_1.isHexString)(value)) {
                result = (0, encoding_2.convertNumberToHex)(value);
            } else if (typeof value === "string") {
                result = (0, misc_1.sanitizeHex)(value);
            }
        }
        if (typeof result === "string") {
            result = (0, misc_1.removeHexLeadingZeros)(result);
        }
        return result;
    }
    const txDataRPC = {
        from: (0, misc_1.sanitizeHex)(txData.from),
        to: typeof txData.to === "undefined" ? undefined : (0, misc_1.sanitizeHex)(txData.to),
        gasPrice: typeof txData.gasPrice === "undefined" ? "" : parseHexValues(txData.gasPrice),
        gas: typeof txData.gas === "undefined" ? typeof txData.gasLimit === "undefined" ? "" : parseHexValues(txData.gasLimit) : parseHexValues(txData.gas),
        value: typeof txData.value === "undefined" ? "" : parseHexValues(txData.value),
        nonce: typeof txData.nonce === "undefined" ? "" : parseHexValues(txData.nonce),
        data: typeof txData.data === "undefined" ? "" : (0, misc_1.sanitizeHex)(txData.data) || "0x"
    };
    const prunable = [
        "gasPrice",
        "gas",
        "value",
        "nonce"
    ];
    Object.keys(txDataRPC).forEach((key)=>{
        if ((typeof txDataRPC[key] === "undefined" || typeof txDataRPC[key] === "string" && !txDataRPC[key].trim().length) && prunable.includes(key)) {
            delete txDataRPC[key];
        }
    });
    return txDataRPC;
}
exports.parseTransactionData = parseTransactionData; //# sourceMappingURL=ethereum.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/payload.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatRpcError = exports.promisify = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
function promisify(originalFn, thisArg) {
    const promisifiedFunction = (...callArgs)=>tslib_1.__awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve, reject)=>{
                const callback = (err, data)=>{
                    if (err === null || typeof err === "undefined") {
                        reject(err);
                    }
                    resolve(data);
                };
                originalFn.apply(thisArg, [
                    ...callArgs,
                    callback
                ]);
            });
        });
    return promisifiedFunction;
}
exports.promisify = promisify;
function formatRpcError(error) {
    const message = error.message || "Failed or Rejected Request";
    let code = -32000;
    if (error && !error.code) {
        switch(message){
            case "Parse error":
                code = -32700;
                break;
            case "Invalid request":
                code = -32600;
                break;
            case "Method not found":
                code = -32601;
                break;
            case "Invalid params":
                code = -32602;
                break;
            case "Internal error":
                code = -32603;
                break;
            default:
                code = -32000;
                break;
        }
    }
    const result = {
        code,
        message
    };
    if (error.data) {
        result.data = error.data;
    }
    return result;
}
exports.formatRpcError = formatRpcError; //# sourceMappingURL=payload.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/strict-uri-encode/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (str)=>encodeURIComponent(str).replace(/[!'()*]/g, (x)=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`);
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/decode-uri-component/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(components, split) {
    try {
        // Try to decode the entire string first
        return [
            decodeURIComponent(components.join(''))
        ];
    } catch (err) {
    // Do nothing
    }
    if (components.length === 1) {
        return components;
    }
    split = split || 1;
    // Split the array in 2 parts
    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
    try {
        return decodeURIComponent(input);
    } catch (err) {
        var tokens = input.match(singleMatcher) || [];
        for(var i = 1; i < tokens.length; i++){
            input = decodeComponents(tokens, i).join('');
            tokens = input.match(singleMatcher) || [];
        }
        return input;
    }
}
function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
        '%FE%FF': '\uFFFD\uFFFD',
        '%FF%FE': '\uFFFD\uFFFD'
    };
    var match = multiMatcher.exec(input);
    while(match){
        try {
            // Decode as big chunks as possible
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) {
                replaceMap[match[0]] = result;
            }
        }
        match = multiMatcher.exec(input);
    }
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap['%C2'] = '\uFFFD';
    var entries = Object.keys(replaceMap);
    for(var i = 0; i < entries.length; i++){
        // Replace all decoded components
        var key = entries[i];
        input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
    }
    return input;
}
module.exports = function(encodedURI) {
    if (typeof encodedURI !== 'string') {
        throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
    }
    try {
        encodedURI = encodedURI.replace(/\+/g, ' ');
        // Try the built in decoder first
        return decodeURIComponent(encodedURI);
    } catch (err) {
        // Fallback to a more advanced decoder
        return customDecodeURIComponent(encodedURI);
    }
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/split-on-first/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (string, separator)=>{
    if (!(typeof string === 'string' && typeof separator === 'string')) {
        throw new TypeError('Expected the arguments to be of type `string`');
    }
    if (separator === '') {
        return [
            string
        ];
    }
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) {
        return [
            string
        ];
    }
    return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
    ];
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/query-string/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const strictUriEncode = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/strict-uri-encode/index.js [app-ssr] (ecmascript)");
const decodeComponent = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/decode-uri-component/index.js [app-ssr] (ecmascript)");
const splitOnFirst = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/split-on-first/index.js [app-ssr] (ecmascript)");
const isNullOrUndefined = (value)=>value === null || value === undefined;
function encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case 'index':
            return (key)=>(result, value)=>{
                    const index = result.length;
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                        return result;
                    }
                    if (value === null) {
                        return [
                            ...result,
                            [
                                encode(key, options),
                                '[',
                                index,
                                ']'
                            ].join('')
                        ];
                    }
                    return [
                        ...result,
                        [
                            encode(key, options),
                            '[',
                            encode(index, options),
                            ']=',
                            encode(value, options)
                        ].join('')
                    ];
                };
        case 'bracket':
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                        return result;
                    }
                    if (value === null) {
                        return [
                            ...result,
                            [
                                encode(key, options),
                                '[]'
                            ].join('')
                        ];
                    }
                    return [
                        ...result,
                        [
                            encode(key, options),
                            '[]=',
                            encode(value, options)
                        ].join('')
                    ];
                };
        case 'comma':
        case 'separator':
            return (key)=>(result, value)=>{
                    if (value === null || value === undefined || value.length === 0) {
                        return result;
                    }
                    if (result.length === 0) {
                        return [
                            [
                                encode(key, options),
                                '=',
                                encode(value, options)
                            ].join('')
                        ];
                    }
                    return [
                        [
                            result,
                            encode(value, options)
                        ].join(options.arrayFormatSeparator)
                    ];
                };
        default:
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                        return result;
                    }
                    if (value === null) {
                        return [
                            ...result,
                            encode(key, options)
                        ];
                    }
                    return [
                        ...result,
                        [
                            encode(key, options),
                            '=',
                            encode(value, options)
                        ].join('')
                    ];
                };
    }
}
function parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case 'index':
            return (key, value, accumulator)=>{
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, '');
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = {};
                }
                accumulator[key][result[1]] = value;
            };
        case 'bracket':
            return (key, value, accumulator)=>{
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, '');
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case 'comma':
        case 'separator':
            return (key, value, accumulator)=>{
                const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
                const newValue = isArray ? value.split(options.arrayFormatSeparator).map((item)=>decode(item, options)) : value === null ? value : decode(value, options);
                accumulator[key] = newValue;
            };
        default:
            return (key, value, accumulator)=>{
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function validateArrayFormatSeparator(value) {
    if (typeof value !== 'string' || value.length !== 1) {
        throw new TypeError('arrayFormatSeparator must be single character string');
    }
}
function encode(value, options) {
    if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }
    return value;
}
function decode(value, options) {
    if (options.decode) {
        return decodeComponent(value);
    }
    return value;
}
function keysSorter(input) {
    if (Array.isArray(input)) {
        return input.sort();
    }
    if (typeof input === 'object') {
        return keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)).map((key)=>input[key]);
    }
    return input;
}
function removeHash(input) {
    const hashStart = input.indexOf('#');
    if (hashStart !== -1) {
        input = input.slice(0, hashStart);
    }
    return input;
}
function getHash(url) {
    let hash = '';
    const hashStart = url.indexOf('#');
    if (hashStart !== -1) {
        hash = url.slice(hashStart);
    }
    return hash;
}
function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf('?');
    if (queryStart === -1) {
        return '';
    }
    return input.slice(queryStart + 1);
}
function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
        value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
        value = value.toLowerCase() === 'true';
    }
    return value;
}
function parse(input, options) {
    options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: false,
        parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    // Create an object with no prototype
    const ret = Object.create(null);
    if (typeof input !== 'string') {
        return ret;
    }
    input = input.trim().replace(/^[?#&]/, '');
    if (!input) {
        return ret;
    }
    for (const param of input.split('&')){
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            'comma',
            'separator'
        ].includes(options.arrayFormat) ? value : decode(value, options);
        formatter(decode(key, options), value, ret);
    }
    for (const key of Object.keys(ret)){
        const value = ret[key];
        if (typeof value === 'object' && value !== null) {
            for (const k of Object.keys(value)){
                value[k] = parseValue(value[k], options);
            }
        } else {
            ret[key] = parseValue(value, options);
        }
    }
    if (options.sort === false) {
        return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key)=>{
        const value = ret[key];
        if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
            // Sort object keys, not values
            result[key] = keysSorter(value);
        } else {
            result[key] = value;
        }
        return result;
    }, Object.create(null));
}
exports.extract = extract;
exports.parse = parse;
exports.stringify = (object, options)=>{
    if (!object) {
        return '';
    }
    options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ','
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)){
        if (!shouldFilter(key)) {
            objectCopy[key] = object[key];
        }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
        keys.sort(options.sort);
    }
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) {
            return '';
        }
        if (value === null) {
            return encode(key, options);
        }
        if (Array.isArray(value)) {
            return value.reduce(formatter(key), []).join('&');
        }
        return encode(key, options) + '=' + encode(value, options);
    }).filter((x)=>x.length > 0).join('&');
};
exports.parseUrl = (input, options)=>{
    options = Object.assign({
        decode: true
    }, options);
    const [url, hash] = splitOnFirst(input, '#');
    return Object.assign({
        url: url.split('?')[0] || '',
        query: parse(extract(input), options)
    }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: decode(hash, options)
    } : {});
};
exports.stringifyUrl = (input, options)=>{
    options = Object.assign({
        encode: true,
        strict: true
    }, options);
    const url = removeHash(input.url).split('?')[0] || '';
    const queryFromUrl = exports.extract(input.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, {
        sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, input.query);
    let queryString = exports.stringify(query, options);
    if (queryString) {
        queryString = `?${queryString}`;
    }
    let hash = getHash(input.url);
    if (input.fragmentIdentifier) {
        hash = `#${encode(input.fragmentIdentifier, options)}`;
    }
    return `${url}${queryString}${hash}`;
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatQueryString = exports.parseQueryString = exports.appendToQueryString = exports.getQueryString = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const queryStringUtils = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/query-string/index.js [app-ssr] (ecmascript)"));
function getQueryString(url) {
    const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : undefined;
    const queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
    return queryString;
}
exports.getQueryString = getQueryString;
function appendToQueryString(queryString, newQueryParams) {
    let queryParams = parseQueryString(queryString);
    queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
    queryString = formatQueryString(queryParams);
    return queryString;
}
exports.appendToQueryString = appendToQueryString;
function parseQueryString(queryString) {
    return queryStringUtils.parse(queryString);
}
exports.parseQueryString = parseQueryString;
function formatQueryString(queryParams) {
    return queryStringUtils.stringify(queryParams);
}
exports.formatQueryString = formatQueryString; //# sourceMappingURL=url.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/session.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseWalletConnectUri = exports.isWalletConnectSession = void 0;
const url_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/url.js [app-ssr] (ecmascript)");
function isWalletConnectSession(object) {
    return typeof object.bridge !== "undefined";
}
exports.isWalletConnectSession = isWalletConnectSession;
function parseWalletConnectUri(str) {
    const pathStart = str.indexOf(":");
    const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : undefined;
    const protocol = str.substring(0, pathStart);
    const path = str.substring(pathStart + 1, pathEnd);
    function parseRequiredParams(path) {
        const separator = "@";
        const values = path.split(separator);
        const requiredParams = {
            handshakeTopic: values[0],
            version: parseInt(values[1], 10)
        };
        return requiredParams;
    }
    const requiredParams = parseRequiredParams(path);
    const queryString = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
    function parseQueryParams(queryString) {
        const result = (0, url_1.parseQueryString)(queryString);
        const parameters = {
            key: result.key || "",
            bridge: result.bridge || ""
        };
        return parameters;
    }
    const queryParams = parseQueryParams(queryString);
    const result = Object.assign(Object.assign({
        protocol
    }, requiredParams), queryParams);
    return result;
}
exports.parseWalletConnectUri = parseWalletConnectUri; //# sourceMappingURL=session.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/browser-utils/dist/cjs/index.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/constants.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/encoding.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/ethereum.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/misc.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/payload.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/session.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/url.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/validators.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/socket-transport/dist/cjs/network.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class NetworkMonitor {
    constructor(){
        this._eventEmitters = [];
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    on(event, callback) {
        this._eventEmitters.push({
            event,
            callback
        });
    }
    trigger(event) {
        let eventEmitters = [];
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter)=>eventEmitter.event === event);
        }
        eventEmitters.forEach((eventEmitter)=>{
            eventEmitter.callback();
        });
    }
}
exports.default = NetworkMonitor; //# sourceMappingURL=network.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    BINARY_TYPES: [
        'nodebuffer',
        'arraybuffer',
        'fragments'
    ],
    GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
    kStatusCode: Symbol('status-code'),
    kWebSocket: Symbol('websocket'),
    EMPTY_BUFFER: Buffer.alloc(0),
    NOOP: ()=>{}
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { EMPTY_BUFFER } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */ function concat(list, totalLength) {
    if (list.length === 0) return EMPTY_BUFFER;
    if (list.length === 1) return list[0];
    const target = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for(let i = 0; i < list.length; i++){
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
    }
    if (offset < totalLength) return target.slice(0, offset);
    return target;
}
/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ function _mask(source, mask, output, offset, length) {
    for(let i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
}
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ function _unmask(buffer, mask) {
    // Required until https://github.com/nodejs/node/issues/9006 is resolved.
    const length = buffer.length;
    for(let i = 0; i < length; i++){
        buffer[i] ^= mask[i & 3];
    }
}
/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */ function toArrayBuffer(buf) {
    if (buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}
/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */ function toBuffer(data) {
    toBuffer.readOnly = true;
    if (Buffer.isBuffer(data)) return data;
    let buf;
    if (data instanceof ArrayBuffer) {
        buf = Buffer.from(data);
    } else if (ArrayBuffer.isView(data)) {
        buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
    }
    return buf;
}
try {
    const bufferUtil = (()=>{
        const e = new Error("Cannot find module 'bufferutil'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    const bu = bufferUtil.BufferUtil || bufferUtil;
    module.exports = {
        concat,
        mask (source, mask, output, offset, length) {
            if (length < 48) _mask(source, mask, output, offset, length);
            else bu.mask(source, mask, output, offset, length);
        },
        toArrayBuffer,
        toBuffer,
        unmask (buffer, mask) {
            if (buffer.length < 32) _unmask(buffer, mask);
            else bu.unmask(buffer, mask);
        }
    };
} catch (e) /* istanbul ignore next */ {
    module.exports = {
        concat,
        mask: _mask,
        toArrayBuffer,
        toBuffer,
        unmask: _unmask
    };
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/limiter.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const kDone = Symbol('kDone');
const kRun = Symbol('kRun');
/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */ class Limiter {
    /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */ constructor(concurrency){
        this[kDone] = ()=>{
            this.pending--;
            this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
    }
    /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */ add(job) {
        this.jobs.push(job);
        this[kRun]();
    }
    /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */ [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
            const job = this.jobs.shift();
            this.pending++;
            job(this[kDone]);
        }
    }
}
module.exports = Limiter;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
const bufferUtil = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const Limiter = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/limiter.js [app-ssr] (ecmascript)");
const { kStatusCode, NOOP } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const TRAILER = Buffer.from([
    0x00,
    0x00,
    0xff,
    0xff
]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError = Symbol('error');
//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;
/**
 * permessage-deflate implementation.
 */ class PerMessageDeflate {
    /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */ constructor(options, isServer, maxPayload){
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
            const concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
            zlibLimiter = new Limiter(concurrency);
        }
    }
    /**
   * @type {String}
   */ static get extensionName() {
        return 'permessage-deflate';
    }
    /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */ offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
            params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
            params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
            params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
            params.client_max_window_bits = true;
        }
        return params;
    }
    /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */ accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
    }
    /**
   * Releases all resources used by the extension.
   *
   * @public
   */ cleanup() {
        if (this._inflate) {
            this._inflate.close();
            this._inflate = null;
        }
        if (this._deflate) {
            const callback = this._deflate[kCallback];
            this._deflate.close();
            this._deflate = null;
            if (callback) {
                callback(new Error('The deflate stream was closed while data was being processed'));
            }
        }
    }
    /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params)=>{
            if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === 'number' && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
                return false;
            }
            return true;
        });
        if (!accepted) {
            throw new Error('None of the extension offers can be accepted');
        }
        if (opts.serverNoContextTakeover) {
            accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
            accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === 'number') {
            accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === 'number') {
            accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
            delete accepted.client_max_window_bits;
        }
        return accepted;
    }
    /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
            throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
            if (typeof this._options.clientMaxWindowBits === 'number') {
                params.client_max_window_bits = this._options.clientMaxWindowBits;
            }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === 'number' && params.client_max_window_bits > this._options.clientMaxWindowBits) {
            throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        }
        return params;
    }
    /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */ normalizeParams(configurations) {
        configurations.forEach((params)=>{
            Object.keys(params).forEach((key)=>{
                let value = params[key];
                if (value.length > 1) {
                    throw new Error(`Parameter "${key}" must have only a single value`);
                }
                value = value[0];
                if (key === 'client_max_window_bits') {
                    if (value !== true) {
                        const num = +value;
                        if (!Number.isInteger(num) || num < 8 || num > 15) {
                            throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                        }
                        value = num;
                    } else if (!this._isServer) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else if (key === 'server_max_window_bits') {
                    const num = +value;
                    if (!Number.isInteger(num) || num < 8 || num > 15) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                    value = num;
                } else if (key === 'client_no_context_takeover' || key === 'server_no_context_takeover') {
                    if (value !== true) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else {
                    throw new Error(`Unknown parameter "${key}"`);
                }
                params[key] = value;
            });
        });
        return configurations;
    }
    /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ decompress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._decompress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Compress data. Concurrency limited.
   *
   * @param {Buffer} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ compress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._compress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _decompress(data, fin, callback) {
        const endpoint = this._isServer ? 'client' : 'server';
        if (!this._inflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._inflate = zlib.createInflateRaw({
                ...this._options.zlibInflateOptions,
                windowBits
            });
            this._inflate[kPerMessageDeflate] = this;
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            this._inflate.on('error', inflateOnError);
            this._inflate.on('data', inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(()=>{
            const err = this._inflate[kError];
            if (err) {
                this._inflate.close();
                this._inflate = null;
                callback(err);
                return;
            }
            const data = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
            if (this._inflate._readableState.endEmitted) {
                this._inflate.close();
                this._inflate = null;
            } else {
                this._inflate[kTotalLength] = 0;
                this._inflate[kBuffers] = [];
                if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                    this._inflate.reset();
                }
            }
            callback(null, data);
        });
    }
    /**
   * Compress data.
   *
   * @param {Buffer} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _compress(data, fin, callback) {
        const endpoint = this._isServer ? 'server' : 'client';
        if (!this._deflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._deflate = zlib.createDeflateRaw({
                ...this._options.zlibDeflateOptions,
                windowBits
            });
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            //
            // An `'error'` event is emitted, only on Node.js < 10.0.0, if the
            // `zlib.DeflateRaw` instance is closed while data is being processed.
            // This can happen if `PerMessageDeflate#cleanup()` is called at the wrong
            // time due to an abnormal WebSocket closure.
            //
            this._deflate.on('error', NOOP);
            this._deflate.on('data', deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, ()=>{
            if (!this._deflate) {
                //
                // The deflate stream was closed while data was being processed.
                //
                return;
            }
            let data = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
            if (fin) data = data.slice(0, data.length - 4);
            //
            // Ensure that the callback will not be called again in
            // `PerMessageDeflate#cleanup()`.
            //
            this._deflate[kCallback] = null;
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                this._deflate.reset();
            }
            callback(null, data);
        });
    }
}
module.exports = PerMessageDeflate;
/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
}
/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
    }
    this[kError] = new RangeError('Max payload size exceeded');
    this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
    this[kError][kStatusCode] = 1009;
    this.removeListener('data', inflateOnData);
    this.reset();
}
/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */ function inflateOnError(err) {
    //
    // There is no need to call `Zlib#close()` as the handle is automatically
    // closed when an error is emitted.
    //
    this[kPerMessageDeflate]._inflate = null;
    err[kStatusCode] = 1007;
    this[kCallback](err);
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/validation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */ function isValidStatusCode(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
}
/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while(i < len){
        if ((buf[i] & 0x80) === 0) {
            // 0xxxxxxx
            i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
            // 110xxxxx 10xxxxxx
            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // Overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
            // 1110xxxx 10xxxxxx 10xxxxxx
            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // Surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
            // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
try {
    let isValidUTF8 = (()=>{
        const e = new Error("Cannot find module 'utf-8-validate'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    /* istanbul ignore if */ if (typeof isValidUTF8 === 'object') {
        isValidUTF8 = isValidUTF8.Validation.isValidUTF8; // utf-8-validate@<3.0.0
    }
    module.exports = {
        isValidStatusCode,
        isValidUTF8 (buf) {
            return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
        }
    };
} catch (e) /* istanbul ignore next */ {
    module.exports = {
        isValidStatusCode,
        isValidUTF8: _isValidUTF8
    };
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/receiver.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)");
const { BINARY_TYPES, EMPTY_BUFFER, kStatusCode, kWebSocket } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const { concat, toArrayBuffer, unmask } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const { isValidStatusCode, isValidUTF8 } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/validation.js [app-ssr] (ecmascript)");
const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;
/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */ class Receiver extends Writable {
    /**
   * Creates a Receiver instance.
   *
   * @param {String} [binaryType=nodebuffer] The type for binary data
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Boolean} [isServer=false] Specifies whether to operate in client or
   *     server mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */ constructor(binaryType, extensions, isServer, maxPayload){
        super();
        this._binaryType = binaryType || BINARY_TYPES[0];
        this[kWebSocket] = undefined;
        this._extensions = extensions || {};
        this._isServer = !!isServer;
        this._maxPayload = maxPayload | 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = undefined;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._state = GET_INFO;
        this._loop = false;
    }
    /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */ _write(chunk, encoding, cb) {
        if (this._opcode === 0x08 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
    }
    /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */ consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
            const buf = this._buffers[0];
            this._buffers[0] = buf.slice(n);
            return buf.slice(0, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
            const buf = this._buffers[0];
            const offset = dst.length - n;
            if (n >= buf.length) {
                dst.set(this._buffers.shift(), offset);
            } else {
                dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
                this._buffers[0] = buf.slice(n);
            }
            n -= buf.length;
        }while (n > 0)
        return dst;
    }
    /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */ startLoop(cb) {
        let err;
        this._loop = true;
        do {
            switch(this._state){
                case GET_INFO:
                    err = this.getInfo();
                    break;
                case GET_PAYLOAD_LENGTH_16:
                    err = this.getPayloadLength16();
                    break;
                case GET_PAYLOAD_LENGTH_64:
                    err = this.getPayloadLength64();
                    break;
                case GET_MASK:
                    this.getMask();
                    break;
                case GET_DATA:
                    err = this.getData(cb);
                    break;
                default:
                    // `INFLATING`
                    this._loop = false;
                    return;
            }
        }while (this._loop)
        cb(err);
    }
    /**
   * Reads the first two bytes of a frame.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ getInfo() {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 0x30) !== 0x00) {
            this._loop = false;
            return error(RangeError, 'RSV2 and RSV3 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_2_3');
        }
        const compressed = (buf[0] & 0x40) === 0x40;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
            this._loop = false;
            return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
        }
        this._fin = (buf[0] & 0x80) === 0x80;
        this._opcode = buf[0] & 0x0f;
        this._payloadLength = buf[1] & 0x7f;
        if (this._opcode === 0x00) {
            if (compressed) {
                this._loop = false;
                return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
            }
            if (!this._fragmented) {
                this._loop = false;
                return error(RangeError, 'invalid opcode 0', true, 1002, 'WS_ERR_INVALID_OPCODE');
            }
            this._opcode = this._fragmented;
        } else if (this._opcode === 0x01 || this._opcode === 0x02) {
            if (this._fragmented) {
                this._loop = false;
                return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
            }
            this._compressed = compressed;
        } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
            if (!this._fin) {
                this._loop = false;
                return error(RangeError, 'FIN must be set', true, 1002, 'WS_ERR_EXPECTED_FIN');
            }
            if (compressed) {
                this._loop = false;
                return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
            }
            if (this._payloadLength > 0x7d) {
                this._loop = false;
                return error(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
            }
        } else {
            this._loop = false;
            return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 0x80) === 0x80;
        if (this._isServer) {
            if (!this._masked) {
                this._loop = false;
                return error(RangeError, 'MASK must be set', true, 1002, 'WS_ERR_EXPECTED_MASK');
            }
        } else if (this._masked) {
            this._loop = false;
            return error(RangeError, 'MASK must be clear', true, 1002, 'WS_ERR_UNEXPECTED_MASK');
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else return this.haveLength();
    }
    /**
   * Gets extended payload length (7+16).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ getPayloadLength16() {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        return this.haveLength();
    }
    /**
   * Gets extended payload length (7+64).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ getPayloadLength64() {
        if (this._bufferedBytes < 8) {
            this._loop = false;
            return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        //
        // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
        // if payload length is greater than this number.
        //
        if (num > Math.pow(2, 53 - 32) - 1) {
            this._loop = false;
            return error(RangeError, 'Unsupported WebSocket frame: payload length > 2^53 - 1', false, 1009, 'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH');
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        return this.haveLength();
    }
    /**
   * Payload length has been read.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ haveLength() {
        if (this._payloadLength && this._opcode < 0x08) {
            this._totalPayloadLength += this._payloadLength;
            if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
                this._loop = false;
                return error(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
            }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
    }
    /**
   * Reads mask bytes.
   *
   * @private
   */ getMask() {
        if (this._bufferedBytes < 4) {
            this._loop = false;
            return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
    }
    /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */ getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) {
                this._loop = false;
                return;
            }
            data = this.consume(this._payloadLength);
            if (this._masked) unmask(data, this._mask);
        }
        if (this._opcode > 0x07) return this.controlMessage(data);
        if (this._compressed) {
            this._state = INFLATING;
            this.decompress(data, cb);
            return;
        }
        if (data.length) {
            //
            // This message is not compressed so its lenght is the sum of the payload
            // length of all fragments.
            //
            this._messageLength = this._totalPayloadLength;
            this._fragments.push(data);
        }
        return this.dataMessage();
    }
    /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */ decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf)=>{
            if (err) return cb(err);
            if (buf.length) {
                this._messageLength += buf.length;
                if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
                    return cb(error(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'));
                }
                this._fragments.push(buf);
            }
            const er = this.dataMessage();
            if (er) return cb(er);
            this.startLoop(cb);
        });
    }
    /**
   * Handles a data message.
   *
   * @return {(Error|undefined)} A possible error
   * @private
   */ dataMessage() {
        if (this._fin) {
            const messageLength = this._messageLength;
            const fragments = this._fragments;
            this._totalPayloadLength = 0;
            this._messageLength = 0;
            this._fragmented = 0;
            this._fragments = [];
            if (this._opcode === 2) {
                let data;
                if (this._binaryType === 'nodebuffer') {
                    data = concat(fragments, messageLength);
                } else if (this._binaryType === 'arraybuffer') {
                    data = toArrayBuffer(concat(fragments, messageLength));
                } else {
                    data = fragments;
                }
                this.emit('message', data);
            } else {
                const buf = concat(fragments, messageLength);
                if (!isValidUTF8(buf)) {
                    this._loop = false;
                    return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                }
                this.emit('message', buf.toString());
            }
        }
        this._state = GET_INFO;
    }
    /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */ controlMessage(data) {
        if (this._opcode === 0x08) {
            this._loop = false;
            if (data.length === 0) {
                this.emit('conclude', 1005, '');
                this.end();
            } else if (data.length === 1) {
                return error(RangeError, 'invalid payload length 1', true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
            } else {
                const code = data.readUInt16BE(0);
                if (!isValidStatusCode(code)) {
                    return error(RangeError, `invalid status code ${code}`, true, 1002, 'WS_ERR_INVALID_CLOSE_CODE');
                }
                const buf = data.slice(2);
                if (!isValidUTF8(buf)) {
                    return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                }
                this.emit('conclude', code, buf.toString());
                this.end();
            }
        } else if (this._opcode === 0x09) {
            this.emit('ping', data);
        } else {
            this.emit('pong', data);
        }
        this._state = GET_INFO;
    }
}
module.exports = Receiver;
/**
 * Builds an error object.
 *
 * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
 * @param {String} message The error message
 * @param {Boolean} prefix Specifies whether or not to add a default prefix to
 *     `message`
 * @param {Number} statusCode The status code
 * @param {String} errorCode The exposed error code
 * @return {(Error|RangeError)} The error
 * @private
 */ function error(ErrorCtor, message, prefix, statusCode, errorCode) {
    const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
    Error.captureStackTrace(err, error);
    err.code = errorCode;
    err[kStatusCode] = statusCode;
    return err;
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/sender.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */ const net = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
const tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const { randomFillSync } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)");
const { EMPTY_BUFFER } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const { isValidStatusCode } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/validation.js [app-ssr] (ecmascript)");
const { mask: applyMask, toBuffer } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const mask = Buffer.alloc(4);
/**
 * HyBi Sender implementation.
 */ class Sender {
    /**
   * Creates a Sender instance.
   *
   * @param {(net.Socket|tls.Socket)} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   */ constructor(socket, extensions){
        this._extensions = extensions || {};
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
    }
    /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {Buffer} data The data to frame
   * @param {Object} options Options object
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {Buffer[]} The framed data as a list of `Buffer` instances
   * @public
   */ static frame(data, options) {
        const merge = options.mask && options.readOnly;
        let offset = options.mask ? 6 : 2;
        let payloadLength = data.length;
        if (data.length >= 65536) {
            offset += 8;
            payloadLength = 127;
        } else if (data.length > 125) {
            offset += 2;
            payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? data.length + offset : offset);
        target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
        if (options.rsv1) target[0] |= 0x40;
        target[1] = payloadLength;
        if (payloadLength === 126) {
            target.writeUInt16BE(data.length, 2);
        } else if (payloadLength === 127) {
            target.writeUInt32BE(0, 2);
            target.writeUInt32BE(data.length, 6);
        }
        if (!options.mask) return [
            target,
            data
        ];
        randomFillSync(mask, 0, 4);
        target[1] |= 0x80;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (merge) {
            applyMask(data, mask, target, offset, data.length);
            return [
                target
            ];
        }
        applyMask(data, mask, data, 0, data.length);
        return [
            target,
            data
        ];
    }
    /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {String} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */ close(code, data, mask, cb) {
        let buf;
        if (code === undefined) {
            buf = EMPTY_BUFFER;
        } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
            throw new TypeError('First argument must be a valid error code number');
        } else if (data === undefined || data === '') {
            buf = Buffer.allocUnsafe(2);
            buf.writeUInt16BE(code, 0);
        } else {
            const length = Buffer.byteLength(data);
            if (length > 123) {
                throw new RangeError('The message must not be greater than 123 bytes');
            }
            buf = Buffer.allocUnsafe(2 + length);
            buf.writeUInt16BE(code, 0);
            buf.write(data, 2);
        }
        if (this._deflating) {
            this.enqueue([
                this.doClose,
                buf,
                mask,
                cb
            ]);
        } else {
            this.doClose(buf, mask, cb);
        }
    }
    /**
   * Frames and sends a close message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @private
   */ doClose(data, mask, cb) {
        this.sendFrame(Sender.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 0x08,
            mask,
            readOnly: false
        }), cb);
    }
    /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ ping(data, mask, cb) {
        const buf = toBuffer(data);
        if (buf.length > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        if (this._deflating) {
            this.enqueue([
                this.doPing,
                buf,
                mask,
                toBuffer.readOnly,
                cb
            ]);
        } else {
            this.doPing(buf, mask, toBuffer.readOnly, cb);
        }
    }
    /**
   * Frames and sends a ping message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
   * @param {Function} [cb] Callback
   * @private
   */ doPing(data, mask, readOnly, cb) {
        this.sendFrame(Sender.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 0x09,
            mask,
            readOnly
        }), cb);
    }
    /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ pong(data, mask, cb) {
        const buf = toBuffer(data);
        if (buf.length > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        if (this._deflating) {
            this.enqueue([
                this.doPong,
                buf,
                mask,
                toBuffer.readOnly,
                cb
            ]);
        } else {
            this.doPong(buf, mask, toBuffer.readOnly, cb);
        }
    }
    /**
   * Frames and sends a pong message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
   * @param {Function} [cb] Callback
   * @private
   */ doPong(data, mask, readOnly, cb) {
        this.sendFrame(Sender.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 0x0a,
            mask,
            readOnly
        }), cb);
    }
    /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */ send(data, options, cb) {
        const buf = toBuffer(data);
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        if (this._firstFragment) {
            this._firstFragment = false;
            if (rsv1 && perMessageDeflate) {
                rsv1 = buf.length >= perMessageDeflate._threshold;
            }
            this._compress = rsv1;
        } else {
            rsv1 = false;
            opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        if (perMessageDeflate) {
            const opts = {
                fin: options.fin,
                rsv1,
                opcode,
                mask: options.mask,
                readOnly: toBuffer.readOnly
            };
            if (this._deflating) {
                this.enqueue([
                    this.dispatch,
                    buf,
                    this._compress,
                    opts,
                    cb
                ]);
            } else {
                this.dispatch(buf, this._compress, opts, cb);
            }
        } else {
            this.sendFrame(Sender.frame(buf, {
                fin: options.fin,
                rsv1: false,
                opcode,
                mask: options.mask,
                readOnly: toBuffer.readOnly
            }), cb);
        }
    }
    /**
   * Dispatches a data message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */ dispatch(data, compress, options, cb) {
        if (!compress) {
            this.sendFrame(Sender.frame(data, options), cb);
            return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += data.length;
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf)=>{
            if (this._socket.destroyed) {
                const err = new Error('The socket was closed while data was being compressed');
                if (typeof cb === 'function') cb(err);
                for(let i = 0; i < this._queue.length; i++){
                    const callback = this._queue[i][4];
                    if (typeof callback === 'function') callback(err);
                }
                return;
            }
            this._bufferedBytes -= data.length;
            this._deflating = false;
            options.readOnly = false;
            this.sendFrame(Sender.frame(buf, options), cb);
            this.dequeue();
        });
    }
    /**
   * Executes queued send operations.
   *
   * @private
   */ dequeue() {
        while(!this._deflating && this._queue.length){
            const params = this._queue.shift();
            this._bufferedBytes -= params[1].length;
            Reflect.apply(params[0], this, params.slice(1));
        }
    }
    /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */ enqueue(params) {
        this._bufferedBytes += params[1].length;
        this._queue.push(params);
    }
    /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */ sendFrame(list, cb) {
        if (list.length === 2) {
            this._socket.cork();
            this._socket.write(list[0]);
            this._socket.write(list[1], cb);
            this._socket.uncork();
        } else {
            this._socket.write(list[0], cb);
        }
    }
}
module.exports = Sender;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/event-target.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Class representing an event.
 *
 * @private
 */ class Event {
    /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @param {Object} target A reference to the target to which the event was
   *     dispatched
   */ constructor(type, target){
        this.target = target;
        this.type = type;
    }
}
/**
 * Class representing a message event.
 *
 * @extends Event
 * @private
 */ class MessageEvent extends Event {
    /**
   * Create a new `MessageEvent`.
   *
   * @param {(String|Buffer|ArrayBuffer|Buffer[])} data The received data
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */ constructor(data, target){
        super('message', target);
        this.data = data;
    }
}
/**
 * Class representing a close event.
 *
 * @extends Event
 * @private
 */ class CloseEvent extends Event {
    /**
   * Create a new `CloseEvent`.
   *
   * @param {Number} code The status code explaining why the connection is being
   *     closed
   * @param {String} reason A human-readable string explaining why the
   *     connection is closing
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */ constructor(code, reason, target){
        super('close', target);
        this.wasClean = target._closeFrameReceived && target._closeFrameSent;
        this.reason = reason;
        this.code = code;
    }
}
/**
 * Class representing an open event.
 *
 * @extends Event
 * @private
 */ class OpenEvent extends Event {
    /**
   * Create a new `OpenEvent`.
   *
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */ constructor(target){
        super('open', target);
    }
}
/**
 * Class representing an error event.
 *
 * @extends Event
 * @private
 */ class ErrorEvent extends Event {
    /**
   * Create a new `ErrorEvent`.
   *
   * @param {Object} error The error that generated this event
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */ constructor(error, target){
        super('error', target);
        this.message = error.message;
        this.error = error;
    }
}
/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */ const EventTarget = {
    /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {Function} listener The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean`` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */ addEventListener (type, listener, options) {
        if (typeof listener !== 'function') return;
        function onMessage(data) {
            listener.call(this, new MessageEvent(data, this));
        }
        function onClose(code, message) {
            listener.call(this, new CloseEvent(code, message, this));
        }
        function onError(error) {
            listener.call(this, new ErrorEvent(error, this));
        }
        function onOpen() {
            listener.call(this, new OpenEvent(this));
        }
        const method = options && options.once ? 'once' : 'on';
        if (type === 'message') {
            onMessage._listener = listener;
            this[method](type, onMessage);
        } else if (type === 'close') {
            onClose._listener = listener;
            this[method](type, onClose);
        } else if (type === 'error') {
            onError._listener = listener;
            this[method](type, onError);
        } else if (type === 'open') {
            onOpen._listener = listener;
            this[method](type, onOpen);
        } else {
            this[method](type, listener);
        }
    },
    /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {Function} listener The listener to remove
   * @public
   */ removeEventListener (type, listener) {
        const listeners = this.listeners(type);
        for(let i = 0; i < listeners.length; i++){
            if (listeners[i] === listener || listeners[i]._listener === listener) {
                this.removeListener(type, listeners[i]);
            }
        }
    }
};
module.exports = EventTarget;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/extension.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars = [
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
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0 // 112 - 127
];
/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */ function push(dest, name, elem) {
    if (dest[name] === undefined) dest[name] = [
        elem
    ];
    else dest[name].push(elem);
}
/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */ function parse(header) {
    const offers = Object.create(null);
    if (header === undefined || header === '') return offers;
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let end = -1;
    let i = 0;
    for(; i < header.length; i++){
        const code = header.charCodeAt(i);
        if (extensionName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (code === 0x20 /* ' ' */  || code === 0x09 /* '\t' */ ) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b /* ';' */  || code === 0x2c /* ',' */ ) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                const name = header.slice(start, end);
                if (code === 0x2c) {
                    push(offers, name, params);
                    params = Object.create(null);
                } else {
                    extensionName = name;
                }
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else if (paramName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (code === 0x20 || code === 0x09) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                push(params, header.slice(start, end), true);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                start = end = -1;
            } else if (code === 0x3d /* '=' */  && start !== -1 && end === -1) {
                paramName = header.slice(start, i);
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else {
            //
            // The value of a quoted-string after unescaping must conform to the
            // token ABNF, so only token characters are valid.
            // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
            //
            if (isEscaping) {
                if (tokenChars[code] !== 1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (start === -1) start = i;
                else if (!mustUnescape) mustUnescape = true;
                isEscaping = false;
            } else if (inQuotes) {
                if (tokenChars[code] === 1) {
                    if (start === -1) start = i;
                } else if (code === 0x22 /* '"' */  && start !== -1) {
                    inQuotes = false;
                    end = i;
                } else if (code === 0x5c /* '\' */ ) {
                    isEscaping = true;
                } else {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
            } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
                inQuotes = true;
            } else if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
                if (end === -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                let value = header.slice(start, end);
                if (mustUnescape) {
                    value = value.replace(/\\/g, '');
                    mustUnescape = false;
                }
                push(params, paramName, value);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                paramName = undefined;
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        }
    }
    if (start === -1 || inQuotes) {
        throw new SyntaxError('Unexpected end of input');
    }
    if (end === -1) end = i;
    const token = header.slice(start, end);
    if (extensionName === undefined) {
        push(offers, token, params);
    } else {
        if (paramName === undefined) {
            push(params, token, true);
        } else if (mustUnescape) {
            push(params, paramName, token.replace(/\\/g, ''));
        } else {
            push(params, paramName, token);
        }
        push(offers, extensionName, params);
    }
    return offers;
}
/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */ function format(extensions) {
    return Object.keys(extensions).map((extension)=>{
        let configurations = extensions[extension];
        if (!Array.isArray(configurations)) configurations = [
            configurations
        ];
        return configurations.map((params)=>{
            return [
                extension
            ].concat(Object.keys(params).map((k)=>{
                let values = params[k];
                if (!Array.isArray(values)) values = [
                    values
                ];
                return values.map((v)=>v === true ? k : `${k}=${v}`).join('; ');
            })).join('; ');
        }).join(', ');
    }).join(', ');
}
module.exports = {
    format,
    parse
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/websocket.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const net = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
const tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const { randomBytes, createHash } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const { URL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)");
const Receiver = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/receiver.js [app-ssr] (ecmascript)");
const Sender = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/sender.js [app-ssr] (ecmascript)");
const { BINARY_TYPES, EMPTY_BUFFER, GUID, kStatusCode, kWebSocket, NOOP } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const { addEventListener, removeEventListener } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/event-target.js [app-ssr] (ecmascript)");
const { format, parse } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/extension.js [app-ssr] (ecmascript)");
const { toBuffer } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const readyStates = [
    'CONNECTING',
    'OPEN',
    'CLOSING',
    'CLOSED'
];
const protocolVersions = [
    8,
    13
];
const closeTimeout = 30 * 1000;
/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */ class WebSocket extends EventEmitter {
    /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */ constructor(address, protocols, options){
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = '';
        this._closeTimer = null;
        this._extensions = {};
        this._protocol = '';
        this._readyState = WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
            this._bufferedAmount = 0;
            this._isServer = false;
            this._redirects = 0;
            if (Array.isArray(protocols)) {
                protocols = protocols.join(', ');
            } else if (typeof protocols === 'object' && protocols !== null) {
                options = protocols;
                protocols = undefined;
            }
            initAsClient(this, address, protocols, options);
        } else {
            this._isServer = true;
        }
    }
    /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */ get binaryType() {
        return this._binaryType;
    }
    set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        //
        // Allow to change `binaryType` on the fly.
        //
        if (this._receiver) this._receiver._binaryType = type;
    }
    /**
   * @type {Number}
   */ get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    /**
   * @type {String}
   */ get extensions() {
        return Object.keys(this._extensions).join();
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onclose() {
        return undefined;
    }
    /* istanbul ignore next */ set onclose(listener) {}
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onerror() {
        return undefined;
    }
    /* istanbul ignore next */ set onerror(listener) {}
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onopen() {
        return undefined;
    }
    /* istanbul ignore next */ set onopen(listener) {}
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onmessage() {
        return undefined;
    }
    /* istanbul ignore next */ set onmessage(listener) {}
    /**
   * @type {String}
   */ get protocol() {
        return this._protocol;
    }
    /**
   * @type {Number}
   */ get readyState() {
        return this._readyState;
    }
    /**
   * @type {String}
   */ get url() {
        return this._url;
    }
    /**
   * Set up the socket and the internal resources.
   *
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Number} [maxPayload=0] The maximum allowed message size
   * @private
   */ setSocket(socket, head, maxPayload) {
        const receiver = new Receiver(this.binaryType, this._extensions, this._isServer, maxPayload);
        this._sender = new Sender(socket, this._extensions);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on('conclude', receiverOnConclude);
        receiver.on('drain', receiverOnDrain);
        receiver.on('error', receiverOnError);
        receiver.on('message', receiverOnMessage);
        receiver.on('ping', receiverOnPing);
        receiver.on('pong', receiverOnPong);
        socket.setTimeout(0);
        socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on('close', socketOnClose);
        socket.on('data', socketOnData);
        socket.on('end', socketOnEnd);
        socket.on('error', socketOnError);
        this._readyState = WebSocket.OPEN;
        this.emit('open');
    }
    /**
   * Emit the `'close'` event.
   *
   * @private
   */ emitClose() {
        if (!this._socket) {
            this._readyState = WebSocket.CLOSED;
            this.emit('close', this._closeCode, this._closeMessage);
            return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
            this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = WebSocket.CLOSED;
        this.emit('close', this._closeCode, this._closeMessage);
    }
    /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {String} [data] A string explaining why the connection is closing
   * @public
   */ close(code, data) {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            return abortHandshake(this, this._req, msg);
        }
        if (this.readyState === WebSocket.CLOSING) {
            if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
                this._socket.end();
            }
            return;
        }
        this._readyState = WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err)=>{
            //
            // This error is handled by the `'error'` listener on the socket. We only
            // want to know if the close frame has been sent here.
            //
            if (err) return;
            this._closeFrameSent = true;
            if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
                this._socket.end();
            }
        });
        //
        // Specify a timeout for the closing handshake to complete.
        //
        this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
    }
    /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */ ping(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */ pong(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */ send(data, options, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        const opts = {
            binary: typeof data !== 'string',
            mask: !this._isServer,
            compress: true,
            fin: true,
            ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
            opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    /**
   * Forcibly close the connection.
   *
   * @public
   */ terminate() {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            return abortHandshake(this, this._req, msg);
        }
        if (this._socket) {
            this._readyState = WebSocket.CLOSING;
            this._socket.destroy();
        }
    }
}
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
[
    'binaryType',
    'bufferedAmount',
    'extensions',
    'protocol',
    'readyState',
    'url'
].forEach((property)=>{
    Object.defineProperty(WebSocket.prototype, property, {
        enumerable: true
    });
});
//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
[
    'open',
    'error',
    'close',
    'message'
].forEach((method)=>{
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
        enumerable: true,
        get () {
            const listeners = this.listeners(method);
            for(let i = 0; i < listeners.length; i++){
                if (listeners[i]._listener) return listeners[i]._listener;
            }
            return undefined;
        },
        set (listener) {
            const listeners = this.listeners(method);
            for(let i = 0; i < listeners.length; i++){
                //
                // Remove only the listeners added via `addEventListener`.
                //
                if (listeners[i]._listener) this.removeListener(method, listeners[i]);
            }
            this.addEventListener(method, listener);
        }
    });
});
WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;
module.exports = WebSocket;
/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {String} [protocols] The subprotocols
 * @param {Object} [options] Connection options
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @private
 */ function initAsClient(websocket, address, protocols, options) {
    const opts = {
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        createConnection: undefined,
        socketPath: undefined,
        hostname: undefined,
        protocol: undefined,
        timeout: undefined,
        method: undefined,
        host: undefined,
        path: undefined,
        port: undefined
    };
    if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} ` + `(supported versions: ${protocolVersions.join(', ')})`);
    }
    let parsedUrl;
    if (address instanceof URL) {
        parsedUrl = address;
        websocket._url = address.href;
    } else {
        parsedUrl = new URL(address);
        websocket._url = address;
    }
    const isUnixSocket = parsedUrl.protocol === 'ws+unix:';
    if (!parsedUrl.host && (!isUnixSocket || !parsedUrl.pathname)) {
        throw new Error(`Invalid URL: ${websocket.url}`);
    }
    const isSecure = parsedUrl.protocol === 'wss:' || parsedUrl.protocol === 'https:';
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString('base64');
    const get = isSecure ? https.get : http.get;
    let perMessageDeflate;
    opts.createConnection = isSecure ? tlsConnect : netConnect;
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith('[') ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
        'Sec-WebSocket-Version': opts.protocolVersion,
        'Sec-WebSocket-Key': key,
        Connection: 'Upgrade',
        Upgrade: 'websocket',
        ...opts.headers
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(opts.perMessageDeflate !== true ? opts.perMessageDeflate : {}, false, opts.maxPayload);
        opts.headers['Sec-WebSocket-Extensions'] = format({
            [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
    }
    if (protocols) {
        opts.headers['Sec-WebSocket-Protocol'] = protocols;
    }
    if (opts.origin) {
        if (opts.protocolVersion < 13) {
            opts.headers['Sec-WebSocket-Origin'] = opts.origin;
        } else {
            opts.headers.Origin = opts.origin;
        }
    }
    if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isUnixSocket) {
        const parts = opts.path.split(':');
        opts.socketPath = parts[0];
        opts.path = parts[1];
    }
    let req = websocket._req = get(opts);
    if (opts.timeout) {
        req.on('timeout', ()=>{
            abortHandshake(websocket, req, 'Opening handshake has timed out');
        });
    }
    req.on('error', (err)=>{
        if (req === null || req.aborted) return;
        req = websocket._req = null;
        websocket._readyState = WebSocket.CLOSING;
        websocket.emit('error', err);
        websocket.emitClose();
    });
    req.on('response', (res)=>{
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
            if (++websocket._redirects > opts.maxRedirects) {
                abortHandshake(websocket, req, 'Maximum redirects exceeded');
                return;
            }
            req.abort();
            const addr = new URL(location, address);
            initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit('unexpected-response', req, res)) {
            abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
        }
    });
    req.on('upgrade', (res, socket, head)=>{
        websocket.emit('upgrade', res);
        //
        // The user may have closed the connection from a listener of the `upgrade`
        // event.
        //
        if (websocket.readyState !== WebSocket.CONNECTING) return;
        req = websocket._req = null;
        const digest = createHash('sha1').update(key + GUID).digest('base64');
        if (res.headers['sec-websocket-accept'] !== digest) {
            abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
            return;
        }
        const serverProt = res.headers['sec-websocket-protocol'];
        const protList = (protocols || '').split(/, */);
        let protError;
        if (!protocols && serverProt) {
            protError = 'Server sent a subprotocol but none was requested';
        } else if (protocols && !serverProt) {
            protError = 'Server sent no subprotocol';
        } else if (serverProt && !protList.includes(serverProt)) {
            protError = 'Server sent an invalid subprotocol';
        }
        if (protError) {
            abortHandshake(websocket, socket, protError);
            return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers['sec-websocket-extensions'];
        if (secWebSocketExtensions !== undefined) {
            if (!perMessageDeflate) {
                const message = 'Server sent a Sec-WebSocket-Extensions header but no extension ' + 'was requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            let extensions;
            try {
                extensions = parse(secWebSocketExtensions);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message);
                return;
            }
            const extensionNames = Object.keys(extensions);
            if (extensionNames.length) {
                if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
                    const message = 'Server indicated an extension that was not requested';
                    abortHandshake(websocket, socket, message);
                    return;
                }
                try {
                    perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
                } catch (err) {
                    const message = 'Invalid Sec-WebSocket-Extensions header';
                    abortHandshake(websocket, socket, message);
                    return;
                }
                websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
        }
        websocket.setSocket(socket, head, opts.maxPayload);
    });
}
/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */ function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
}
/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */ function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== '') {
        options.servername = net.isIP(options.host) ? '' : options.host;
    }
    return tls.connect(options);
}
/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */ function abortHandshake(websocket, stream, message) {
    websocket._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
            //
            // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
            // called after the request completed. See
            // https://github.com/websockets/ws/issues/1869.
            //
            stream.socket.destroy();
        }
        stream.once('abort', websocket.emitClose.bind(websocket));
        websocket.emit('error', err);
    } else {
        stream.destroy(err);
        stream.once('error', websocket.emit.bind(websocket, 'error'));
        stream.once('close', websocket.emitClose.bind(websocket));
    }
}
/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */ function sendAfterClose(websocket, data, cb) {
    if (data) {
        const length = toBuffer(data).length;
        //
        // The `_bufferedAmount` property is used only when the peer is a client and
        // the opening handshake fails. Under these circumstances, in fact, the
        // `setSocket()` method is not called, so the `_socket` and `_sender`
        // properties are set to `null`.
        //
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
    }
    if (cb) {
        const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} ` + `(${readyStates[websocket.readyState]})`);
        cb(err);
    }
}
/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {String} reason The reason for closing
 * @private
 */ function receiverOnConclude(code, reason) {
    const websocket = this[kWebSocket];
    websocket._socket.removeListener('data', socketOnData);
    websocket._socket.resume();
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (code === 1005) websocket.close();
    else websocket.close(code, reason);
}
/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */ function receiverOnDrain() {
    this[kWebSocket]._socket.resume();
}
/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */ function receiverOnError(err) {
    const websocket = this[kWebSocket];
    websocket._socket.removeListener('data', socketOnData);
    websocket._socket.resume();
    websocket.close(err[kStatusCode]);
    websocket.emit('error', err);
}
/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */ function receiverOnFinish() {
    this[kWebSocket].emitClose();
}
/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {(String|Buffer|ArrayBuffer|Buffer[])} data The message
 * @private
 */ function receiverOnMessage(data) {
    this[kWebSocket].emit('message', data);
}
/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */ function receiverOnPing(data) {
    const websocket = this[kWebSocket];
    websocket.pong(data, !websocket._isServer, NOOP);
    websocket.emit('ping', data);
}
/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */ function receiverOnPong(data) {
    this[kWebSocket].emit('pong', data);
}
/**
 * The listener of the `net.Socket` `'close'` event.
 *
 * @private
 */ function socketOnClose() {
    const websocket = this[kWebSocket];
    this.removeListener('close', socketOnClose);
    this.removeListener('end', socketOnEnd);
    websocket._readyState = WebSocket.CLOSING;
    //
    // The close frame might not have been received or the `'end'` event emitted,
    // for example, if the socket was destroyed due to an error. Ensure that the
    // `receiver` stream is closed after writing any remaining buffered data to
    // it. If the readable side of the socket is in flowing mode then there is no
    // buffered data as everything has been already written and `readable.read()`
    // will return `null`. If instead, the socket is paused, any possible buffered
    // data will be read as a single chunk and emitted synchronously in a single
    // `'data'` event.
    //
    websocket._socket.read();
    websocket._receiver.end();
    this.removeListener('data', socketOnData);
    this[kWebSocket] = undefined;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
    } else {
        websocket._receiver.on('error', receiverOnFinish);
        websocket._receiver.on('finish', receiverOnFinish);
    }
}
/**
 * The listener of the `net.Socket` `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
    }
}
/**
 * The listener of the `net.Socket` `'end'` event.
 *
 * @private
 */ function socketOnEnd() {
    const websocket = this[kWebSocket];
    websocket._readyState = WebSocket.CLOSING;
    websocket._receiver.end();
    this.end();
}
/**
 * The listener of the `net.Socket` `'error'` event.
 *
 * @private
 */ function socketOnError() {
    const websocket = this[kWebSocket];
    this.removeListener('error', socketOnError);
    this.on('error', NOOP);
    if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
    }
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Duplex } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
/**
 * Emits the `'close'` event on a stream.
 *
 * @param {Duplex} stream The stream.
 * @private
 */ function emitClose(stream) {
    stream.emit('close');
}
/**
 * The listener of the `'end'` event.
 *
 * @private
 */ function duplexOnEnd() {
    if (!this.destroyed && this._writableState.finished) {
        this.destroy();
    }
}
/**
 * The listener of the `'error'` event.
 *
 * @param {Error} err The error
 * @private
 */ function duplexOnError(err) {
    this.removeListener('error', duplexOnError);
    this.destroy();
    if (this.listenerCount('error') === 0) {
        // Do not suppress the throwing behavior.
        this.emit('error', err);
    }
}
/**
 * Wraps a `WebSocket` in a duplex stream.
 *
 * @param {WebSocket} ws The `WebSocket` to wrap
 * @param {Object} [options] The options for the `Duplex` constructor
 * @return {Duplex} The duplex stream
 * @public
 */ function createWebSocketStream(ws, options) {
    let resumeOnReceiverDrain = true;
    let terminateOnDestroy = true;
    function receiverOnDrain() {
        if (resumeOnReceiverDrain) ws._socket.resume();
    }
    if (ws.readyState === ws.CONNECTING) {
        ws.once('open', function open() {
            ws._receiver.removeAllListeners('drain');
            ws._receiver.on('drain', receiverOnDrain);
        });
    } else {
        ws._receiver.removeAllListeners('drain');
        ws._receiver.on('drain', receiverOnDrain);
    }
    const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
    });
    ws.on('message', function message(msg) {
        if (!duplex.push(msg)) {
            resumeOnReceiverDrain = false;
            ws._socket.pause();
        }
    });
    ws.once('error', function error(err) {
        if (duplex.destroyed) return;
        // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
        //
        // - If the `'error'` event is emitted before the `'open'` event, then
        //   `ws.terminate()` is a noop as no socket is assigned.
        // - Otherwise, the error is re-emitted by the listener of the `'error'`
        //   event of the `Receiver` object. The listener already closes the
        //   connection by calling `ws.close()`. This allows a close frame to be
        //   sent to the other peer. If `ws.terminate()` is called right after this,
        //   then the close frame might not be sent.
        terminateOnDestroy = false;
        duplex.destroy(err);
    });
    ws.once('close', function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
    });
    duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
            callback(err);
            process.nextTick(emitClose, duplex);
            return;
        }
        let called = false;
        ws.once('error', function error(err) {
            called = true;
            callback(err);
        });
        ws.once('close', function close() {
            if (!called) callback(err);
            process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
    };
    duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
            ws.once('open', function open() {
                duplex._final(callback);
            });
            return;
        }
        // If the value of the `_socket` property is `null` it means that `ws` is a
        // client websocket and the handshake failed. In fact, when this happens, a
        // socket is never assigned to the websocket. Wait for the `'error'` event
        // that will be emitted by the websocket.
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
            callback();
            if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
            ws._socket.once('finish', function finish() {
                // `duplex` is not destroyed here because the `'end'` event will be
                // emitted on `duplex` after this `'finish'` event. The EOF signaling
                // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
                callback();
            });
            ws.close();
        }
    };
    duplex._read = function() {
        if (ws.readyState === ws.OPEN && !resumeOnReceiverDrain) {
            resumeOnReceiverDrain = true;
            if (!ws._receiver._writableState.needDrain) ws._socket.resume();
        }
    };
    duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
            ws.once('open', function open() {
                duplex._write(chunk, encoding, callback);
            });
            return;
        }
        ws.send(chunk, callback);
    };
    duplex.on('end', duplexOnEnd);
    duplex.on('error', duplexOnError);
    return duplex;
}
module.exports = createWebSocketStream;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/websocket-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls|https$" }] */ const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const net = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
const tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const { createHash } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)");
const WebSocket = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/websocket.js [app-ssr] (ecmascript)");
const { format, parse } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/extension.js [app-ssr] (ecmascript)");
const { GUID, kWebSocket } = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const keyRegex = /^[+/0-9A-Za-z]{22}==$/;
const RUNNING = 0;
const CLOSING = 1;
const CLOSED = 2;
/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */ class WebSocketServer extends EventEmitter {
    /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [callback] A listener for the `listening` event
   */ constructor(options, callback){
        super();
        options = {
            maxPayload: 100 * 1024 * 1024,
            perMessageDeflate: false,
            handleProtocols: null,
            clientTracking: true,
            verifyClient: null,
            noServer: false,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
            throw new TypeError('One and only one of the "port", "server", or "noServer" options ' + 'must be specified');
        }
        if (options.port != null) {
            this._server = http.createServer((req, res)=>{
                const body = http.STATUS_CODES[426];
                res.writeHead(426, {
                    'Content-Length': body.length,
                    'Content-Type': 'text/plain'
                });
                res.end(body);
            });
            this._server.listen(options.port, options.host, options.backlog, callback);
        } else if (options.server) {
            this._server = options.server;
        }
        if (this._server) {
            const emitConnection = this.emit.bind(this, 'connection');
            this._removeListeners = addListeners(this._server, {
                listening: this.emit.bind(this, 'listening'),
                error: this.emit.bind(this, 'error'),
                upgrade: (req, socket, head)=>{
                    this.handleUpgrade(req, socket, head, emitConnection);
                }
            });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) this.clients = new Set();
        this.options = options;
        this._state = RUNNING;
    }
    /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */ address() {
        if (this.options.noServer) {
            throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
    }
    /**
   * Close the server.
   *
   * @param {Function} [cb] Callback
   * @public
   */ close(cb) {
        if (cb) this.once('close', cb);
        if (this._state === CLOSED) {
            process.nextTick(emitClose, this);
            return;
        }
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        //
        // Terminate all associated clients.
        //
        if (this.clients) {
            for (const client of this.clients)client.terminate();
        }
        const server = this._server;
        if (server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
            //
            // Close the http server if it was internally created.
            //
            if (this.options.port != null) {
                server.close(emitClose.bind(undefined, this));
                return;
            }
        }
        process.nextTick(emitClose, this);
    }
    /**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */ shouldHandle(req) {
        if (this.options.path) {
            const index = req.url.indexOf('?');
            const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
            if (pathname !== this.options.path) return false;
        }
        return true;
    }
    /**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */ handleUpgrade(req, socket, head, cb) {
        socket.on('error', socketOnError);
        const key = req.headers['sec-websocket-key'] !== undefined ? req.headers['sec-websocket-key'].trim() : false;
        const version = +req.headers['sec-websocket-version'];
        const extensions = {};
        if (req.method !== 'GET' || req.headers.upgrade.toLowerCase() !== 'websocket' || !key || !keyRegex.test(key) || version !== 8 && version !== 13 || !this.shouldHandle(req)) {
            return abortHandshake(socket, 400);
        }
        if (this.options.perMessageDeflate) {
            const perMessageDeflate = new PerMessageDeflate(this.options.perMessageDeflate, true, this.options.maxPayload);
            try {
                const offers = parse(req.headers['sec-websocket-extensions']);
                if (offers[PerMessageDeflate.extensionName]) {
                    perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
                    extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
                }
            } catch (err) {
                return abortHandshake(socket, 400);
            }
        }
        //
        // Optionally call external client verification handler.
        //
        if (this.options.verifyClient) {
            const info = {
                origin: req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
                secure: !!(req.socket.authorized || req.socket.encrypted),
                req
            };
            if (this.options.verifyClient.length === 2) {
                this.options.verifyClient(info, (verified, code, message, headers)=>{
                    if (!verified) {
                        return abortHandshake(socket, code || 401, message, headers);
                    }
                    this.completeUpgrade(key, extensions, req, socket, head, cb);
                });
                return;
            }
            if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(key, extensions, req, socket, head, cb);
    }
    /**
   * Upgrade the connection to WebSocket.
   *
   * @param {String} key The value of the `Sec-WebSocket-Key` header
   * @param {Object} extensions The accepted extensions
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @throws {Error} If called more than once with the same socket
   * @private
   */ completeUpgrade(key, extensions, req, socket, head, cb) {
        //
        // Destroy the socket if the client has already sent a FIN packet.
        //
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
            throw new Error('server.handleUpgrade() was called more than once with the same ' + 'socket, possibly due to a misconfiguration');
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash('sha1').update(key + GUID).digest('base64');
        const headers = [
            'HTTP/1.1 101 Switching Protocols',
            'Upgrade: websocket',
            'Connection: Upgrade',
            `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new WebSocket(null);
        let protocol = req.headers['sec-websocket-protocol'];
        if (protocol) {
            protocol = protocol.split(',').map(trim);
            //
            // Optionally call external protocol selection handler.
            //
            if (this.options.handleProtocols) {
                protocol = this.options.handleProtocols(protocol, req);
            } else {
                protocol = protocol[0];
            }
            if (protocol) {
                headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
                ws._protocol = protocol;
            }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
            const params = extensions[PerMessageDeflate.extensionName].params;
            const value = format({
                [PerMessageDeflate.extensionName]: [
                    params
                ]
            });
            headers.push(`Sec-WebSocket-Extensions: ${value}`);
            ws._extensions = extensions;
        }
        //
        // Allow external modification/inspection of handshake headers.
        //
        this.emit('headers', headers, req);
        socket.write(headers.concat('\r\n').join('\r\n'));
        socket.removeListener('error', socketOnError);
        ws.setSocket(socket, head, this.options.maxPayload);
        if (this.clients) {
            this.clients.add(ws);
            ws.on('close', ()=>this.clients.delete(ws));
        }
        cb(ws, req);
    }
}
module.exports = WebSocketServer;
/**
 * Add event listeners on an `EventEmitter` using a map of <event, listener>
 * pairs.
 *
 * @param {EventEmitter} server The event emitter
 * @param {Object.<String, Function>} map The listeners to add
 * @return {Function} A function that will remove the added listeners when
 *     called
 * @private
 */ function addListeners(server, map) {
    for (const event of Object.keys(map))server.on(event, map[event]);
    return function removeListeners() {
        for (const event of Object.keys(map)){
            server.removeListener(event, map[event]);
        }
    };
}
/**
 * Emit a `'close'` event on an `EventEmitter`.
 *
 * @param {EventEmitter} server The event emitter
 * @private
 */ function emitClose(server) {
    server._state = CLOSED;
    server.emit('close');
}
/**
 * Handle premature socket errors.
 *
 * @private
 */ function socketOnError() {
    this.destroy();
}
/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @param {Object} [headers] Additional HTTP response headers
 * @private
 */ function abortHandshake(socket, code, message, headers) {
    if (socket.writable) {
        message = message || http.STATUS_CODES[code];
        headers = {
            Connection: 'close',
            'Content-Type': 'text/html',
            'Content-Length': Buffer.byteLength(message),
            ...headers
        };
        socket.write(`HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` + Object.keys(headers).map((h)=>`${h}: ${headers[h]}`).join('\r\n') + '\r\n\r\n' + message);
    }
    socket.removeListener('error', socketOnError);
    socket.destroy();
}
/**
 * Remove whitespace characters from both ends of a string.
 *
 * @param {String} str The string
 * @return {String} A new string representing `str` stripped of whitespace
 *     characters from both its beginning and end
 * @private
 */ function trim(str) {
    return str.trim();
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WebSocket = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/websocket.js [app-ssr] (ecmascript)");
WebSocket.createWebSocketStream = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/stream.js [app-ssr] (ecmascript)");
WebSocket.Server = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/websocket-server.js [app-ssr] (ecmascript)");
WebSocket.Receiver = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/receiver.js [app-ssr] (ecmascript)");
WebSocket.Sender = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/lib/sender.js [app-ssr] (ecmascript)");
module.exports = WebSocket;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/socket-transport/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/index.js [app-ssr] (ecmascript)");
const network_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/socket-transport/dist/cjs/network.js [app-ssr] (ecmascript)"));
const WS = typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket !== "undefined" ? /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket : __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/ws/index.js [app-ssr] (ecmascript)");
class SocketTransport {
    constructor(opts){
        this.opts = opts;
        this._queue = [];
        this._events = [];
        this._subscriptions = [];
        this._protocol = opts.protocol;
        this._version = opts.version;
        this._url = "";
        this._netMonitor = null;
        this._socket = null;
        this._nextSocket = null;
        this._subscriptions = opts.subscriptions || [];
        this._netMonitor = opts.netMonitor || new network_1.default();
        if (!opts.url || typeof opts.url !== "string") {
            throw new Error("Missing or invalid WebSocket url");
        }
        this._url = opts.url;
        this._netMonitor.on("online", ()=>this._socketCreate());
    }
    set readyState(value) {}
    get readyState() {
        return this._socket ? this._socket.readyState : -1;
    }
    set connecting(value) {}
    get connecting() {
        return this.readyState === 0;
    }
    set connected(value) {}
    get connected() {
        return this.readyState === 1;
    }
    set closing(value) {}
    get closing() {
        return this.readyState === 2;
    }
    set closed(value) {}
    get closed() {
        return this.readyState === 3;
    }
    open() {
        this._socketCreate();
    }
    close() {
        this._socketClose();
    }
    send(message, topic, silent) {
        if (!topic || typeof topic !== "string") {
            throw new Error("Missing or invalid topic field");
        }
        this._socketSend({
            topic: topic,
            type: "pub",
            payload: message,
            silent: !!silent
        });
    }
    subscribe(topic) {
        this._socketSend({
            topic: topic,
            type: "sub",
            payload: "",
            silent: true
        });
    }
    on(event, callback) {
        this._events.push({
            event,
            callback
        });
    }
    _socketCreate() {
        if (this._nextSocket) {
            return;
        }
        const url = getWebSocketUrl(this._url, this._protocol, this._version);
        this._nextSocket = new WS(url);
        if (!this._nextSocket) {
            throw new Error("Failed to create socket");
        }
        this._nextSocket.onmessage = (event)=>this._socketReceive(event);
        this._nextSocket.onopen = ()=>this._socketOpen();
        this._nextSocket.onerror = (event)=>this._socketError(event);
        this._nextSocket.onclose = ()=>{
            setTimeout(()=>{
                this._nextSocket = null;
                this._socketCreate();
            }, 1000);
        };
    }
    _socketOpen() {
        this._socketClose();
        this._socket = this._nextSocket;
        this._nextSocket = null;
        this._queueSubscriptions();
        this._pushQueue();
    }
    _socketClose() {
        if (this._socket) {
            this._socket.onclose = ()=>{};
            this._socket.close();
        }
    }
    _socketSend(socketMessage) {
        const message = JSON.stringify(socketMessage);
        if (this._socket && this._socket.readyState === 1) {
            this._socket.send(message);
        } else {
            this._setToQueue(socketMessage);
            this._socketCreate();
        }
    }
    _socketReceive(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            let socketMessage;
            try {
                socketMessage = JSON.parse(event.data);
            } catch (error) {
                return;
            }
            this._socketSend({
                topic: socketMessage.topic,
                type: "ack",
                payload: "",
                silent: true
            });
            if (this._socket && this._socket.readyState === 1) {
                const events = this._events.filter((event)=>event.event === "message");
                if (events && events.length) {
                    events.forEach((event)=>event.callback(socketMessage));
                }
            }
        });
    }
    _socketError(e) {
        const events = this._events.filter((event)=>event.event === "error");
        if (events && events.length) {
            events.forEach((event)=>event.callback(e));
        }
    }
    _queueSubscriptions() {
        const subscriptions = this._subscriptions;
        subscriptions.forEach((topic)=>this._queue.push({
                topic: topic,
                type: "sub",
                payload: "",
                silent: true
            }));
        this._subscriptions = this.opts.subscriptions || [];
    }
    _setToQueue(socketMessage) {
        this._queue.push(socketMessage);
    }
    _pushQueue() {
        const queue = this._queue;
        queue.forEach((socketMessage)=>this._socketSend(socketMessage));
        this._queue = [];
    }
}
function getWebSocketUrl(_url, protocol, version) {
    var _a, _b;
    const url = _url.startsWith("https") ? _url.replace("https", "wss") : _url.startsWith("http") ? _url.replace("http", "ws") : _url;
    const splitUrl = url.split("?");
    const params = (0, utils_1.isBrowser)() ? {
        protocol,
        version,
        env: "browser",
        host: ((_a = (0, utils_1.getLocation)()) === null || _a === void 0 ? void 0 : _a.host) || ""
    } : {
        protocol,
        version,
        env: ((_b = (0, utils_1.detectEnv)()) === null || _b === void 0 ? void 0 : _b.name) || ""
    };
    const queryString = (0, utils_1.appendToQueryString)((0, utils_1.getQueryString)(splitUrl[1] || ""), params);
    return splitUrl[0] + "?" + queryString;
}
exports.default = SocketTransport; //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ERROR_QRCODE_MODAL_USER_CLOSED = exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = exports.ERROR_INVALID_URI = exports.ERROR_INVALID_RESPONSE = exports.ERROR_MISSING_REQUIRED = exports.ERROR_MISSING_ID = exports.ERROR_MISSING_METHOD = exports.ERROR_MISSING_ERROR = exports.ERROR_MISSING_RESULT = exports.ERROR_MISSING_JSON_RPC = exports.ERROR_SESSION_REJECTED = exports.ERROR_SESSION_DISCONNECTED = exports.ERROR_SESSION_CONNECTED = void 0;
exports.ERROR_SESSION_CONNECTED = "Session currently connected";
exports.ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
exports.ERROR_SESSION_REJECTED = "Session Rejected";
exports.ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
exports.ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
exports.ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
exports.ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
exports.ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
exports.ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
exports.ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
exports.ERROR_INVALID_URI = "URI format is invalid";
exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
exports.ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal"; //# sourceMappingURL=errors.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/events.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/index.js [app-ssr] (ecmascript)");
class EventManager {
    constructor(){
        this._eventEmitters = [];
    }
    subscribe(eventEmitter) {
        this._eventEmitters.push(eventEmitter);
    }
    unsubscribe(event) {
        this._eventEmitters = this._eventEmitters.filter((x)=>x.event !== event);
    }
    trigger(payload) {
        let eventEmitters = [];
        let event;
        if ((0, utils_1.isJsonRpcRequest)(payload)) {
            event = payload.method;
        } else if ((0, utils_1.isJsonRpcResponseSuccess)(payload) || (0, utils_1.isJsonRpcResponseError)(payload)) {
            event = `response:${payload.id}`;
        } else if ((0, utils_1.isInternalEvent)(payload)) {
            event = payload.event;
        } else {
            event = "";
        }
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter)=>eventEmitter.event === event);
        }
        if ((!eventEmitters || !eventEmitters.length) && !(0, utils_1.isReservedEvent)(event) && !(0, utils_1.isInternalEvent)(event)) {
            eventEmitters = this._eventEmitters.filter((eventEmitter)=>eventEmitter.event === "call_request");
        }
        eventEmitters.forEach((eventEmitter)=>{
            if ((0, utils_1.isJsonRpcResponseError)(payload)) {
                const error = new Error(payload.error.message);
                eventEmitter.callback(error, null);
            } else {
                eventEmitter.callback(null, payload);
            }
        });
    }
}
exports.default = EventManager; //# sourceMappingURL=events.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/storage.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/index.js [app-ssr] (ecmascript)");
class SessionStorage {
    constructor(storageId = "walletconnect"){
        this.storageId = storageId;
    }
    getSession() {
        let session = null;
        const json = (0, utils_1.getLocal)(this.storageId);
        if (json && (0, utils_1.isWalletConnectSession)(json)) {
            session = json;
        }
        return session;
    }
    setSession(session) {
        (0, utils_1.setLocal)(this.storageId, session);
        return session;
    }
    removeSession() {
        (0, utils_1.removeLocal)(this.storageId);
    }
}
exports.default = SessionStorage; //# sourceMappingURL=storage.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBridgeUrl = exports.shouldSelectRandomly = exports.selectRandomBridgeUrl = exports.randomBridgeIndex = exports.extractRootDomain = exports.extractHostname = void 0;
const domain = "walletconnect.org";
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const bridges = alphanumerical.split("").map((char)=>`https://${char}.bridge.walletconnect.org`);
function extractHostname(url) {
    let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];
    return hostname;
}
exports.extractHostname = extractHostname;
function extractRootDomain(url) {
    return extractHostname(url).split(".").slice(-2).join(".");
}
exports.extractRootDomain = extractRootDomain;
function randomBridgeIndex() {
    return Math.floor(Math.random() * bridges.length);
}
exports.randomBridgeIndex = randomBridgeIndex;
function selectRandomBridgeUrl() {
    return bridges[randomBridgeIndex()];
}
exports.selectRandomBridgeUrl = selectRandomBridgeUrl;
function shouldSelectRandomly(url) {
    return extractRootDomain(url) === domain;
}
exports.shouldSelectRandomly = shouldSelectRandomly;
function getBridgeUrl(url) {
    if (shouldSelectRandomly(url)) {
        return selectRandomBridgeUrl();
    }
    return url;
}
exports.getBridgeUrl = getBridgeUrl; //# sourceMappingURL=url.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/index.js [app-ssr] (ecmascript)");
const socket_transport_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/socket-transport/dist/cjs/index.js [app-ssr] (ecmascript)"));
const errors_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/errors.js [app-ssr] (ecmascript)");
const events_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/events.js [app-ssr] (ecmascript)"));
const storage_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/storage.js [app-ssr] (ecmascript)"));
const url_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/url.js [app-ssr] (ecmascript)");
class Connector {
    constructor(opts){
        this.protocol = "wc";
        this.version = 1;
        this._bridge = "";
        this._key = null;
        this._clientId = "";
        this._clientMeta = null;
        this._peerId = "";
        this._peerMeta = null;
        this._handshakeId = 0;
        this._handshakeTopic = "";
        this._connected = false;
        this._accounts = [];
        this._chainId = 0;
        this._networkId = 0;
        this._rpcUrl = "";
        this._eventManager = new events_1.default();
        this._clientMeta = (0, utils_1.getClientMeta)() || opts.connectorOpts.clientMeta || null;
        this._cryptoLib = opts.cryptoLib;
        this._sessionStorage = opts.sessionStorage || new storage_1.default(opts.connectorOpts.storageId);
        this._qrcodeModal = opts.connectorOpts.qrcodeModal;
        this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
        this._signingMethods = [
            ...utils_1.signingMethods,
            ...opts.connectorOpts.signingMethods || []
        ];
        if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
            throw new Error(errors_1.ERROR_MISSING_REQUIRED);
        }
        if (opts.connectorOpts.bridge) {
            this.bridge = (0, url_1.getBridgeUrl)(opts.connectorOpts.bridge);
        }
        if (opts.connectorOpts.uri) {
            this.uri = opts.connectorOpts.uri;
        }
        const session = opts.connectorOpts.session || this._getStorageSession();
        if (session) {
            this.session = session;
        }
        if (this.handshakeId) {
            this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
        }
        this._transport = opts.transport || new socket_transport_1.default({
            protocol: this.protocol,
            version: this.version,
            url: this.bridge,
            subscriptions: [
                this.clientId
            ]
        });
        this._subscribeToInternalEvents();
        this._initTransport();
        if (opts.connectorOpts.uri) {
            this._subscribeToSessionRequest();
        }
        if (opts.pushServerOpts) {
            this._registerPushServer(opts.pushServerOpts);
        }
    }
    set bridge(value) {
        if (!value) {
            return;
        }
        this._bridge = value;
    }
    get bridge() {
        return this._bridge;
    }
    set key(value) {
        if (!value) {
            return;
        }
        const key = (0, utils_1.convertHexToArrayBuffer)(value);
        this._key = key;
    }
    get key() {
        if (this._key) {
            const key = (0, utils_1.convertArrayBufferToHex)(this._key, true);
            return key;
        }
        return "";
    }
    set clientId(value) {
        if (!value) {
            return;
        }
        this._clientId = value;
    }
    get clientId() {
        let clientId = this._clientId;
        if (!clientId) {
            clientId = this._clientId = (0, utils_1.uuid)();
        }
        return this._clientId;
    }
    set peerId(value) {
        if (!value) {
            return;
        }
        this._peerId = value;
    }
    get peerId() {
        return this._peerId;
    }
    set clientMeta(value) {}
    get clientMeta() {
        let clientMeta = this._clientMeta;
        if (!clientMeta) {
            clientMeta = this._clientMeta = (0, utils_1.getClientMeta)();
        }
        return clientMeta;
    }
    set peerMeta(value) {
        this._peerMeta = value;
    }
    get peerMeta() {
        const peerMeta = this._peerMeta;
        return peerMeta;
    }
    set handshakeTopic(value) {
        if (!value) {
            return;
        }
        this._handshakeTopic = value;
    }
    get handshakeTopic() {
        return this._handshakeTopic;
    }
    set handshakeId(value) {
        if (!value) {
            return;
        }
        this._handshakeId = value;
    }
    get handshakeId() {
        return this._handshakeId;
    }
    get uri() {
        const _uri = this._formatUri();
        return _uri;
    }
    set uri(value) {
        if (!value) {
            return;
        }
        const { handshakeTopic, bridge, key } = this._parseUri(value);
        this.handshakeTopic = handshakeTopic;
        this.bridge = bridge;
        this.key = key;
    }
    set chainId(value) {
        this._chainId = value;
    }
    get chainId() {
        const chainId = this._chainId;
        return chainId;
    }
    set networkId(value) {
        this._networkId = value;
    }
    get networkId() {
        const networkId = this._networkId;
        return networkId;
    }
    set accounts(value) {
        this._accounts = value;
    }
    get accounts() {
        const accounts = this._accounts;
        return accounts;
    }
    set rpcUrl(value) {
        this._rpcUrl = value;
    }
    get rpcUrl() {
        const rpcUrl = this._rpcUrl;
        return rpcUrl;
    }
    set connected(value) {}
    get connected() {
        return this._connected;
    }
    set pending(value) {}
    get pending() {
        return !!this._handshakeTopic;
    }
    get session() {
        return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic
        };
    }
    set session(value) {
        if (!value) {
            return;
        }
        this._connected = value.connected;
        this.accounts = value.accounts;
        this.chainId = value.chainId;
        this.bridge = value.bridge;
        this.key = value.key;
        this.clientId = value.clientId;
        this.clientMeta = value.clientMeta;
        this.peerId = value.peerId;
        this.peerMeta = value.peerMeta;
        this.handshakeId = value.handshakeId;
        this.handshakeTopic = value.handshakeTopic;
    }
    on(event, callback) {
        const eventEmitter = {
            event,
            callback
        };
        this._eventManager.subscribe(eventEmitter);
    }
    off(event) {
        this._eventManager.unsubscribe(event);
    }
    createInstantRequest(instantRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            this._key = yield this._generateKey();
            const request = this._formatRequest({
                method: "wc_instantRequest",
                params: [
                    {
                        peerId: this.clientId,
                        peerMeta: this.clientMeta,
                        request: this._formatRequest(instantRequest)
                    }
                ]
            });
            this.handshakeId = request.id;
            this.handshakeTopic = (0, utils_1.uuid)();
            this._eventManager.trigger({
                event: "display_uri",
                params: [
                    this.uri
                ]
            });
            this.on("modal_closed", ()=>{
                throw new Error(errors_1.ERROR_QRCODE_MODAL_USER_CLOSED);
            });
            const endInstantRequest = ()=>{
                this.killSession();
            };
            try {
                const result = yield this._sendCallRequest(request);
                if (result) {
                    endInstantRequest();
                }
                return result;
            } catch (error) {
                endInstantRequest();
                throw error;
            }
        });
    }
    connect(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._qrcodeModal) {
                throw new Error(errors_1.ERROR_QRCODE_MODAL_NOT_PROVIDED);
            }
            if (this.connected) {
                return {
                    chainId: this.chainId,
                    accounts: this.accounts
                };
            }
            yield this.createSession(opts);
            return new Promise((resolve, reject)=>tslib_1.__awaiter(this, void 0, void 0, function*() {
                    this.on("modal_closed", ()=>reject(new Error(errors_1.ERROR_QRCODE_MODAL_USER_CLOSED)));
                    this.on("connect", (error, payload)=>{
                        if (error) {
                            return reject(error);
                        }
                        resolve(payload.params[0]);
                    });
                }));
        });
    }
    createSession(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (this._connected) {
                throw new Error(errors_1.ERROR_SESSION_CONNECTED);
            }
            if (this.pending) {
                return;
            }
            this._key = yield this._generateKey();
            const request = this._formatRequest({
                method: "wc_sessionRequest",
                params: [
                    {
                        peerId: this.clientId,
                        peerMeta: this.clientMeta,
                        chainId: opts && opts.chainId ? opts.chainId : null
                    }
                ]
            });
            this.handshakeId = request.id;
            this.handshakeTopic = (0, utils_1.uuid)();
            this._sendSessionRequest(request, "Session update rejected", {
                topic: this.handshakeTopic
            });
            this._eventManager.trigger({
                event: "display_uri",
                params: [
                    this.uri
                ]
            });
        });
    }
    approveSession(sessionStatus) {
        if (this._connected) {
            throw new Error(errors_1.ERROR_SESSION_CONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
            peerId: this.clientId,
            peerMeta: this.clientMeta
        };
        const response = {
            id: this.handshakeId,
            jsonrpc: "2.0",
            result: sessionParams
        };
        this._sendResponse(response);
        this._connected = true;
        this._setStorageSession();
        this._eventManager.trigger({
            event: "connect",
            params: [
                {
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    chainId: this.chainId,
                    accounts: this.accounts
                }
            ]
        });
    }
    rejectSession(sessionError) {
        if (this._connected) {
            throw new Error(errors_1.ERROR_SESSION_CONNECTED);
        }
        const message = sessionError && sessionError.message ? sessionError.message : errors_1.ERROR_SESSION_REJECTED;
        const response = this._formatResponse({
            id: this.handshakeId,
            error: {
                message
            }
        });
        this._sendResponse(response);
        this._connected = false;
        this._eventManager.trigger({
            event: "disconnect",
            params: [
                {
                    message
                }
            ]
        });
        this._removeStorageSession();
    }
    updateSession(sessionStatus) {
        if (!this._connected) {
            throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl
        };
        const request = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [
                sessionParams
            ]
        });
        this._sendSessionRequest(request, "Session update rejected");
        this._eventManager.trigger({
            event: "session_update",
            params: [
                {
                    chainId: this.chainId,
                    accounts: this.accounts
                }
            ]
        });
        this._manageStorageSession();
    }
    killSession(sessionError) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            const message = sessionError ? sessionError.message : "Session Disconnected";
            const sessionParams = {
                approved: false,
                chainId: null,
                networkId: null,
                accounts: null
            };
            const request = this._formatRequest({
                method: "wc_sessionUpdate",
                params: [
                    sessionParams
                ]
            });
            yield this._sendRequest(request);
            this._handleSessionDisconnect(message);
        });
    }
    sendTransaction(tx) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const parsedTx = (0, utils_1.parseTransactionData)(tx);
            const request = this._formatRequest({
                method: "eth_sendTransaction",
                params: [
                    parsedTx
                ]
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signTransaction(tx) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const parsedTx = (0, utils_1.parseTransactionData)(tx);
            const request = this._formatRequest({
                method: "eth_signTransaction",
                params: [
                    parsedTx
                ]
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signMessage(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const request = this._formatRequest({
                method: "eth_sign",
                params
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signPersonalMessage(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            params = (0, utils_1.parsePersonalSign)(params);
            const request = this._formatRequest({
                method: "personal_sign",
                params
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    signTypedData(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            const request = this._formatRequest({
                method: "eth_signTypedData",
                params
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    updateChain(chainParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._connected) {
                throw new Error("Session currently disconnected");
            }
            const request = this._formatRequest({
                method: "wallet_updateChain",
                params: [
                    chainParams
                ]
            });
            const result = yield this._sendCallRequest(request);
            return result;
        });
    }
    unsafeSend(request, options) {
        this._sendRequest(request, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [
                {
                    request,
                    options
                }
            ]
        });
        return new Promise((resolve, reject)=>{
            this._subscribeToResponse(request.id, (error, payload)=>{
                if (error) {
                    reject(error);
                    return;
                }
                if (!payload) {
                    throw new Error(errors_1.ERROR_MISSING_JSON_RPC);
                }
                resolve(payload);
            });
        });
    }
    sendCustomRequest(request, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (!this._connected) {
                throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }
            switch(request.method){
                case "eth_accounts":
                    return this.accounts;
                case "eth_chainId":
                    return (0, utils_1.convertNumberToHex)(this.chainId);
                case "eth_sendTransaction":
                case "eth_signTransaction":
                    if (request.params) {
                        request.params[0] = (0, utils_1.parseTransactionData)(request.params[0]);
                    }
                    break;
                case "personal_sign":
                    if (request.params) {
                        request.params = (0, utils_1.parsePersonalSign)(request.params);
                    }
                    break;
                default:
                    break;
            }
            const formattedRequest = this._formatRequest(request);
            const result = yield this._sendCallRequest(formattedRequest, options);
            return result;
        });
    }
    approveRequest(response) {
        if ((0, utils_1.isJsonRpcResponseSuccess)(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        } else {
            throw new Error(errors_1.ERROR_MISSING_RESULT);
        }
    }
    rejectRequest(response) {
        if ((0, utils_1.isJsonRpcResponseError)(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        } else {
            throw new Error(errors_1.ERROR_MISSING_ERROR);
        }
    }
    transportClose() {
        this._transport.close();
    }
    _sendRequest(request, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            const callRequest = this._formatRequest(request);
            const encryptionPayload = yield this._encrypt(callRequest);
            const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
            const payload = JSON.stringify(encryptionPayload);
            const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined" ? !options.forcePushNotification : (0, utils_1.isSilentPayload)(callRequest);
            this._transport.send(payload, topic, silent);
        });
    }
    _sendResponse(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            const encryptionPayload = yield this._encrypt(response);
            const topic = this.peerId;
            const payload = JSON.stringify(encryptionPayload);
            const silent = true;
            this._transport.send(payload, topic, silent);
        });
    }
    _sendSessionRequest(request, errorMsg, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            this._sendRequest(request, options);
            this._subscribeToSessionResponse(request.id, errorMsg);
        });
    }
    _sendCallRequest(request, options) {
        this._sendRequest(request, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [
                {
                    request,
                    options
                }
            ]
        });
        return this._subscribeToCallResponse(request.id);
    }
    _formatRequest(request) {
        if (typeof request.method === "undefined") {
            throw new Error(errors_1.ERROR_MISSING_METHOD);
        }
        const formattedRequest = {
            id: typeof request.id === "undefined" ? (0, utils_1.payloadId)() : request.id,
            jsonrpc: "2.0",
            method: request.method,
            params: typeof request.params === "undefined" ? [] : request.params
        };
        return formattedRequest;
    }
    _formatResponse(response) {
        if (typeof response.id === "undefined") {
            throw new Error(errors_1.ERROR_MISSING_ID);
        }
        const baseResponse = {
            id: response.id,
            jsonrpc: "2.0"
        };
        if ((0, utils_1.isJsonRpcResponseError)(response)) {
            const error = (0, utils_1.formatRpcError)(response.error);
            const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), {
                error
            });
            return errorResponse;
        } else if ((0, utils_1.isJsonRpcResponseSuccess)(response)) {
            const successResponse = Object.assign(Object.assign({}, baseResponse), response);
            return successResponse;
        }
        throw new Error(errors_1.ERROR_INVALID_RESPONSE);
    }
    _handleSessionDisconnect(errorMsg) {
        const message = errorMsg || "Session Disconnected";
        if (!this._connected) {
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
            (0, utils_1.removeLocal)(utils_1.mobileLinkChoiceKey);
        }
        if (this._connected) {
            this._connected = false;
        }
        if (this._handshakeId) {
            this._handshakeId = 0;
        }
        if (this._handshakeTopic) {
            this._handshakeTopic = "";
        }
        if (this._peerId) {
            this._peerId = "";
        }
        this._eventManager.trigger({
            event: "disconnect",
            params: [
                {
                    message
                }
            ]
        });
        this._removeStorageSession();
        this.transportClose();
    }
    _handleSessionResponse(errorMsg, sessionParams) {
        if (sessionParams) {
            if (sessionParams.approved) {
                if (!this._connected) {
                    this._connected = true;
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    if (sessionParams.peerId && !this.peerId) {
                        this.peerId = sessionParams.peerId;
                    }
                    if (sessionParams.peerMeta && !this.peerMeta) {
                        this.peerMeta = sessionParams.peerMeta;
                    }
                    this._eventManager.trigger({
                        event: "connect",
                        params: [
                            {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }
                        ]
                    });
                } else {
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    this._eventManager.trigger({
                        event: "session_update",
                        params: [
                            {
                                chainId: this.chainId,
                                accounts: this.accounts
                            }
                        ]
                    });
                }
                this._manageStorageSession();
            } else {
                this._handleSessionDisconnect(errorMsg);
            }
        } else {
            this._handleSessionDisconnect(errorMsg);
        }
    }
    _handleIncomingMessages(socketMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            const activeTopics = [
                this.clientId,
                this.handshakeTopic
            ];
            if (!activeTopics.includes(socketMessage.topic)) {
                return;
            }
            let encryptionPayload;
            try {
                encryptionPayload = JSON.parse(socketMessage.payload);
            } catch (error) {
                return;
            }
            const payload = yield this._decrypt(encryptionPayload);
            if (payload) {
                this._eventManager.trigger(payload);
            }
        });
    }
    _subscribeToSessionRequest() {
        this._transport.subscribe(this.handshakeTopic);
    }
    _subscribeToResponse(id, callback) {
        this.on(`response:${id}`, callback);
    }
    _subscribeToSessionResponse(id, errorMsg) {
        this._subscribeToResponse(id, (error, payload)=>{
            if (error) {
                this._handleSessionResponse(error.message);
                return;
            }
            if ((0, utils_1.isJsonRpcResponseSuccess)(payload)) {
                this._handleSessionResponse(errorMsg, payload.result);
            } else if (payload.error && payload.error.message) {
                this._handleSessionResponse(payload.error.message);
            } else {
                this._handleSessionResponse(errorMsg);
            }
        });
    }
    _subscribeToCallResponse(id) {
        return new Promise((resolve, reject)=>{
            this._subscribeToResponse(id, (error, payload)=>{
                if (error) {
                    reject(error);
                    return;
                }
                if ((0, utils_1.isJsonRpcResponseSuccess)(payload)) {
                    resolve(payload.result);
                } else if (payload.error && payload.error.message) {
                    reject(payload.error);
                } else {
                    reject(new Error(errors_1.ERROR_INVALID_RESPONSE));
                }
            });
        });
    }
    _subscribeToInternalEvents() {
        this.on("display_uri", ()=>{
            if (this._qrcodeModal) {
                this._qrcodeModal.open(this.uri, ()=>{
                    this._eventManager.trigger({
                        event: "modal_closed",
                        params: []
                    });
                }, this._qrcodeModalOptions);
            }
        });
        this.on("connect", ()=>{
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
        });
        this.on("call_request_sent", (error, payload)=>{
            const { request } = payload.params[0];
            if ((0, utils_1.isMobile)() && this._signingMethods.includes(request.method)) {
                const mobileLinkUrl = (0, utils_1.getLocal)(utils_1.mobileLinkChoiceKey);
                if (mobileLinkUrl) {
                    window.location.href = mobileLinkUrl.href;
                }
            }
        });
        this.on("wc_sessionRequest", (error, payload)=>{
            if (error) {
                this._eventManager.trigger({
                    event: "error",
                    params: [
                        {
                            code: "SESSION_REQUEST_ERROR",
                            message: error.toString()
                        }
                    ]
                });
            }
            this.handshakeId = payload.id;
            this.peerId = payload.params[0].peerId;
            this.peerMeta = payload.params[0].peerMeta;
            const internalPayload = Object.assign(Object.assign({}, payload), {
                method: "session_request"
            });
            this._eventManager.trigger(internalPayload);
        });
        this.on("wc_sessionUpdate", (error, payload)=>{
            if (error) {
                this._handleSessionResponse(error.message);
            }
            this._handleSessionResponse("Session disconnected", payload.params[0]);
        });
    }
    _initTransport() {
        this._transport.on("message", (socketMessage)=>this._handleIncomingMessages(socketMessage));
        this._transport.on("open", ()=>this._eventManager.trigger({
                event: "transport_open",
                params: []
            }));
        this._transport.on("close", ()=>this._eventManager.trigger({
                event: "transport_close",
                params: []
            }));
        this._transport.on("error", ()=>this._eventManager.trigger({
                event: "transport_error",
                params: [
                    "Websocket connection failed"
                ]
            }));
        this._transport.open();
    }
    _formatUri() {
        const protocol = this.protocol;
        const handshakeTopic = this.handshakeTopic;
        const version = this.version;
        const bridge = encodeURIComponent(this.bridge);
        const key = this.key;
        const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
        return uri;
    }
    _parseUri(uri) {
        const result = (0, utils_1.parseWalletConnectUri)(uri);
        if (result.protocol === this.protocol) {
            if (!result.handshakeTopic) {
                throw Error("Invalid or missing handshakeTopic parameter value");
            }
            const handshakeTopic = result.handshakeTopic;
            if (!result.bridge) {
                throw Error("Invalid or missing bridge url parameter value");
            }
            const bridge = decodeURIComponent(result.bridge);
            if (!result.key) {
                throw Error("Invalid or missing key parameter value");
            }
            const key = result.key;
            return {
                handshakeTopic,
                bridge,
                key
            };
        } else {
            throw new Error(errors_1.ERROR_INVALID_URI);
        }
    }
    _generateKey() {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            if (this._cryptoLib) {
                const result = yield this._cryptoLib.generateKey();
                return result;
            }
            return null;
        });
    }
    _encrypt(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            const key = this._key;
            if (this._cryptoLib && key) {
                const result = yield this._cryptoLib.encrypt(data, key);
                return result;
            }
            return null;
        });
    }
    _decrypt(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function*() {
            const key = this._key;
            if (this._cryptoLib && key) {
                const result = yield this._cryptoLib.decrypt(payload, key);
                return result;
            }
            return null;
        });
    }
    _getStorageSession() {
        let result = null;
        if (this._sessionStorage) {
            result = this._sessionStorage.getSession();
        }
        return result;
    }
    _setStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.setSession(this.session);
        }
    }
    _removeStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.removeSession();
        }
    }
    _manageStorageSession() {
        if (this._connected) {
            this._setStorageSession();
        } else {
            this._removeStorageSession();
        }
    }
    _registerPushServer(pushServerOpts) {
        if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
            throw Error("Invalid or missing pushServerOpts.url parameter value");
        }
        if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
            throw Error("Invalid or missing pushServerOpts.type parameter value");
        }
        if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
            throw Error("Invalid or missing pushServerOpts.token parameter value");
        }
        const pushSubscription = {
            bridge: this.bridge,
            topic: this.clientId,
            type: pushServerOpts.type,
            token: pushServerOpts.token,
            peerName: "",
            language: pushServerOpts.language || ""
        };
        this.on("connect", (error, payload)=>tslib_1.__awaiter(this, void 0, void 0, function*() {
                if (error) {
                    throw error;
                }
                if (pushServerOpts.peerMeta) {
                    const peerName = payload.params[0].peerMeta.name;
                    pushSubscription.peerName = peerName;
                }
                try {
                    const response = yield fetch(`${pushServerOpts.url}/new`, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(pushSubscription)
                    });
                    const json = yield response.json();
                    if (!json.success) {
                        throw Error("Failed to register in Push Server");
                    }
                } catch (error) {
                    throw Error("Failed to register in Push Server");
                }
            }));
    }
}
exports.default = Connector; //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ __turbopack_context__.s([
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__spread",
    ()=>__spread,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@noble/hashes/cryptoNode.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
// We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
// Falls back to Node.js built-in crypto for Node.js <=v14
// See utils.ts for details.
// @ts-ignore
const nc = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
exports.crypto = nc && typeof nc === 'object' && 'webcrypto' in nc ? nc.webcrypto : nc && typeof nc === 'object' && 'randomBytes' in nc ? nc : undefined; //# sourceMappingURL=cryptoNode.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@noble/hashes/_assert.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Assertion helpers
 * @module
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.anumber = anumber;
exports.abytes = abytes;
exports.ahash = ahash;
exports.aexists = aexists;
exports.aoutput = aoutput;
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
// copied from utils
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function abytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
} //# sourceMappingURL=_assert.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@noble/hashes/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.byteSwap = exports.isLE = exports.rotl = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
exports.isBytes = isBytes;
exports.byteSwap32 = byteSwap32;
exports.bytesToHex = bytesToHex;
exports.hexToBytes = hexToBytes;
exports.asyncLoop = asyncLoop;
exports.utf8ToBytes = utf8ToBytes;
exports.toBytes = toBytes;
exports.concatBytes = concatBytes;
exports.checkOpts = checkOpts;
exports.wrapConstructor = wrapConstructor;
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
exports.randomBytes = randomBytes;
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
const crypto_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@noble/hashes/cryptoNode.js [app-ssr] (ecmascript)");
const _assert_js_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@noble/hashes/_assert.js [app-ssr] (ecmascript)");
// export { isBytes } from './_assert.js';
// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
/** The rotate right (circular right shift) operation for uint32 */ const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
/** The rotate left (circular left shift) operation for uint32 */ const rotl = (word, shift)=>word << shift | word >>> 32 - shift >>> 0;
exports.rotl = rotl;
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */ exports.isLE = (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
// The byte swap operation for uint32
const byteSwap = (word)=>word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
exports.byteSwap = byteSwap;
/** Conditionally byte swap if on a big-endian platform */ exports.byteSwapIfBE = exports.isLE ? (n)=>n : (n)=>(0, exports.byteSwap)(n);
/** In place byte swap for Uint32Array */ function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = (0, exports.byteSwap)(arr[i]);
    }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    (0, _assert_js_1.abytes)(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
/**
 * Convert JS string to byte array.
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('utf8ToBytes expected string, got ' + typeof str);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    (0, _assert_js_1.abytes)(data);
    return data;
}
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        (0, _assert_js_1.abytes)(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') {
        return crypto_1.crypto.randomBytes(bytesLength);
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/randombytes/dist/cjs/node/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = void 0;
const utils_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@noble/hashes/utils.js [app-ssr] (ecmascript)");
function randomBytes(length) {
    return (0, utils_1.randomBytes)(length);
}
exports.randomBytes = randomBytes; //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/length.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LENGTH_1024 = exports.LENGTH_512 = exports.LENGTH_256 = exports.LENGTH_128 = exports.LENGTH_64 = exports.LENGTH_32 = exports.LENGTH_16 = exports.LENGTH_1 = exports.LENGTH_0 = void 0;
exports.LENGTH_0 = 0;
exports.LENGTH_1 = 1;
exports.LENGTH_16 = 16;
exports.LENGTH_32 = 32;
exports.LENGTH_64 = 64;
exports.LENGTH_128 = 128;
exports.LENGTH_256 = 256;
exports.LENGTH_512 = 512;
exports.LENGTH_1024 = 1024; //# sourceMappingURL=length.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/default.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MAC_LENGTH = exports.IV_LENGTH = exports.KEY_LENGTH = exports.PREFIX_LENGTH = exports.RIPEMD160_NODE_ALGO = exports.SHA512_NODE_ALGO = exports.SHA256_NODE_ALGO = exports.HMAC_NODE_ALGO = exports.AES_NODE_ALGO = exports.SHA512_BROWSER_ALGO = exports.SHA256_BROWSER_ALGO = exports.HMAC_BROWSER = exports.HMAC_BROWSER_ALGO = exports.AES_BROWSER_ALGO = exports.HMAC_LENGTH = exports.AES_LENGTH = void 0;
const length_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/length.js [app-ssr] (ecmascript)");
exports.AES_LENGTH = length_1.LENGTH_256;
exports.HMAC_LENGTH = length_1.LENGTH_256;
exports.AES_BROWSER_ALGO = "AES-CBC";
exports.HMAC_BROWSER_ALGO = `SHA-${exports.AES_LENGTH}`;
exports.HMAC_BROWSER = "HMAC";
exports.SHA256_BROWSER_ALGO = "SHA-256";
exports.SHA512_BROWSER_ALGO = "SHA-512";
exports.AES_NODE_ALGO = `aes-${exports.AES_LENGTH}-cbc`;
exports.HMAC_NODE_ALGO = `sha${exports.HMAC_LENGTH}`;
exports.SHA256_NODE_ALGO = "sha256";
exports.SHA512_NODE_ALGO = "sha512";
exports.RIPEMD160_NODE_ALGO = "ripemd160";
exports.PREFIX_LENGTH = length_1.LENGTH_1;
exports.KEY_LENGTH = length_1.LENGTH_32;
exports.IV_LENGTH = length_1.LENGTH_16;
exports.MAC_LENGTH = length_1.LENGTH_32; //# sourceMappingURL=default.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/encoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UTF8_ENC = exports.HEX_ENC = void 0;
exports.HEX_ENC = "hex";
exports.UTF8_ENC = "utf8"; //# sourceMappingURL=encoding.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ERROR_BAD_MAC = void 0;
exports.ERROR_BAD_MAC = "Bad MAC"; //# sourceMappingURL=error.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/operations.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VERIFY_OP = exports.SIGN_OP = exports.DECRYPT_OP = exports.ENCRYPT_OP = void 0;
exports.ENCRYPT_OP = "encrypt";
exports.DECRYPT_OP = "decrypt";
exports.SIGN_OP = "sign";
exports.VERIFY_OP = "verify"; //# sourceMappingURL=operations.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/default.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/encoding.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/error.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/length.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/operations.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/lib/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nodeRipemd160 = exports.nodeSha512 = exports.nodeSha256 = exports.nodeHmacSha512Sign = exports.nodeHmacSha256Sign = exports.nodeAesDecrypt = exports.nodeAesEncrypt = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
const crypto_1 = tslib_1.__importDefault(__turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)"));
const encoding_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/encoding/dist/esm/index.js [app-ssr] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/index.js [app-ssr] (ecmascript)");
function nodeAesEncrypt(iv, key, data) {
    const cipher = crypto_1.default.createCipheriv(constants_1.AES_NODE_ALGO, Buffer.from(key), Buffer.from(iv));
    return (0, encoding_1.bufferToArray)((0, encoding_1.concatBuffers)(cipher.update(Buffer.from(data)), cipher.final()));
}
exports.nodeAesEncrypt = nodeAesEncrypt;
function nodeAesDecrypt(iv, key, data) {
    const decipher = crypto_1.default.createDecipheriv(constants_1.AES_NODE_ALGO, Buffer.from(key), Buffer.from(iv));
    return (0, encoding_1.bufferToArray)((0, encoding_1.concatBuffers)(decipher.update(Buffer.from(data)), decipher.final()));
}
exports.nodeAesDecrypt = nodeAesDecrypt;
function nodeHmacSha256Sign(key, data) {
    const buf = crypto_1.default.createHmac(constants_1.HMAC_NODE_ALGO, Buffer.from(key)).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeHmacSha256Sign = nodeHmacSha256Sign;
function nodeHmacSha512Sign(key, data) {
    const buf = crypto_1.default.createHmac(constants_1.SHA512_NODE_ALGO, Buffer.from(key)).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeHmacSha512Sign = nodeHmacSha512Sign;
function nodeSha256(data) {
    const buf = crypto_1.default.createHash(constants_1.SHA256_NODE_ALGO).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeSha256 = nodeSha256;
function nodeSha512(data) {
    const buf = crypto_1.default.createHash(constants_1.SHA512_NODE_ALGO).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeSha512 = nodeSha512;
function nodeRipemd160(data) {
    const buf = crypto_1.default.createHash(constants_1.RIPEMD160_NODE_ALGO).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeRipemd160 = nodeRipemd160; //# sourceMappingURL=node.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/aes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aesCbcDecrypt = exports.aesCbcEncrypt = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
const node_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/lib/node.js [app-ssr] (ecmascript)");
function aesCbcEncrypt(iv, key, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const result = (0, node_1.nodeAesEncrypt)(iv, key, data);
        return result;
    });
}
exports.aesCbcEncrypt = aesCbcEncrypt;
function aesCbcDecrypt(iv, key, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const result = (0, node_1.nodeAesDecrypt)(iv, key, data);
        return result;
    });
}
exports.aesCbcDecrypt = aesCbcDecrypt; //# sourceMappingURL=aes.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/env.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/environment/dist/cjs/index.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=env.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/pkcs7.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pkcs7 = void 0;
const PADDING = [
    [
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16
    ],
    [
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15
    ],
    [
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14
    ],
    [
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13
    ],
    [
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12
    ],
    [
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11
    ],
    [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10
    ],
    [
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9
    ],
    [
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8
    ],
    [
        7,
        7,
        7,
        7,
        7,
        7,
        7
    ],
    [
        6,
        6,
        6,
        6,
        6,
        6
    ],
    [
        5,
        5,
        5,
        5,
        5
    ],
    [
        4,
        4,
        4,
        4
    ],
    [
        3,
        3,
        3
    ],
    [
        2,
        2
    ],
    [
        1
    ]
];
exports.pkcs7 = {
    pad (plaintext) {
        const padding = PADDING[plaintext.byteLength % 16 || 0];
        const result = new Uint8Array(plaintext.byteLength + padding.length);
        result.set(plaintext);
        result.set(padding, plaintext.byteLength);
        return result;
    },
    unpad (padded) {
        return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
    }
}; //# sourceMappingURL=pkcs7.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/validators.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isConstantTime = exports.assert = void 0;
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}
exports.assert = assert;
function isConstantTime(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let res = 0;
    for(let i = 0; i < arr1.length; i++){
        res |= arr1[i] ^ arr2[i];
    }
    return res === 0;
}
exports.isConstantTime = isConstantTime; //# sourceMappingURL=validators.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/env.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/pkcs7.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/types.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/validators.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/hmac.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmacSha512Verify = exports.hmacSha512Sign = exports.hmacSha256Verify = exports.hmacSha256Sign = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
const helpers_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/index.js [app-ssr] (ecmascript)");
const node_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/lib/node.js [app-ssr] (ecmascript)");
function hmacSha256Sign(key, msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const result = (0, node_1.nodeHmacSha256Sign)(key, msg);
        return result;
    });
}
exports.hmacSha256Sign = hmacSha256Sign;
function hmacSha256Verify(key, msg, sig) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const expectedSig = (0, node_1.nodeHmacSha256Sign)(key, msg);
        const result = (0, helpers_1.isConstantTime)(expectedSig, sig);
        return result;
    });
}
exports.hmacSha256Verify = hmacSha256Verify;
function hmacSha512Sign(key, msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const result = (0, node_1.nodeHmacSha512Sign)(key, msg);
        return result;
    });
}
exports.hmacSha512Sign = hmacSha512Sign;
function hmacSha512Verify(key, msg, sig) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const expectedSig = (0, node_1.nodeHmacSha512Sign)(key, msg);
        const result = (0, helpers_1.isConstantTime)(expectedSig, sig);
        return result;
    });
}
exports.hmacSha512Verify = hmacSha512Verify; //# sourceMappingURL=hmac.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/sha2.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = exports.sha512 = exports.sha256 = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
const node_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/lib/node.js [app-ssr] (ecmascript)");
function sha256(msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const result = (0, node_1.nodeSha256)(msg);
        return result;
    });
}
exports.sha256 = sha256;
function sha512(msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const result = (0, node_1.nodeSha512)(msg);
        return result;
    });
}
exports.sha512 = sha512;
function ripemd160(msg) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const result = (0, node_1.nodeRipemd160)(msg);
        return result;
    });
}
exports.ripemd160 = ripemd160; //# sourceMappingURL=sha2.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/randombytes/dist/cjs/node/index.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/aes.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/hmac.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/sha2.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/helpers/index.js [app-ssr] (ecmascript)"), exports);
tslib_1.__exportStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/constants/index.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/iso-crypto/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decrypt = exports.encrypt = exports.verifyHmac = exports.generateKey = void 0;
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const crypto = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/crypto/dist/cjs/node/index.js [app-ssr] (ecmascript)"));
const encoding = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/encoding/dist/esm/index.js [app-ssr] (ecmascript)"));
const utils_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/utils/dist/cjs/index.js [app-ssr] (ecmascript)");
function generateKey(length) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const _length = (length || 256) / 8;
        const bytes = crypto.randomBytes(_length);
        const result = (0, utils_1.convertBufferToArrayBuffer)(encoding.arrayToBuffer(bytes));
        return result;
    });
}
exports.generateKey = generateKey;
function verifyHmac(payload, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const cipherText = encoding.hexToArray(payload.data);
        const iv = encoding.hexToArray(payload.iv);
        const hmac = encoding.hexToArray(payload.hmac);
        const hmacHex = encoding.arrayToHex(hmac, false);
        const unsigned = encoding.concatArrays(cipherText, iv);
        const chmac = yield crypto.hmacSha256Sign(key, unsigned);
        const chmacHex = encoding.arrayToHex(chmac, false);
        if (encoding.removeHexPrefix(hmacHex) === encoding.removeHexPrefix(chmacHex)) {
            return true;
        }
        return false;
    });
}
exports.verifyHmac = verifyHmac;
function encrypt(data, key, providedIv) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const _key = encoding.bufferToArray((0, utils_1.convertArrayBufferToBuffer)(key));
        const ivArrayBuffer = providedIv || (yield generateKey(128));
        const iv = encoding.bufferToArray((0, utils_1.convertArrayBufferToBuffer)(ivArrayBuffer));
        const ivHex = encoding.arrayToHex(iv, false);
        const contentString = JSON.stringify(data);
        const content = encoding.utf8ToArray(contentString);
        const cipherText = yield crypto.aesCbcEncrypt(iv, _key, content);
        const cipherTextHex = encoding.arrayToHex(cipherText, false);
        const unsigned = encoding.concatArrays(cipherText, iv);
        const hmac = yield crypto.hmacSha256Sign(_key, unsigned);
        const hmacHex = encoding.arrayToHex(hmac, false);
        return {
            data: cipherTextHex,
            hmac: hmacHex,
            iv: ivHex
        };
    });
}
exports.encrypt = encrypt;
function decrypt(payload, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function*() {
        const _key = encoding.bufferToArray((0, utils_1.convertArrayBufferToBuffer)(key));
        if (!_key) {
            throw new Error("Missing key: required for decryption");
        }
        const verified = yield verifyHmac(payload, _key);
        if (!verified) {
            return null;
        }
        const cipherText = encoding.hexToArray(payload.data);
        const iv = encoding.hexToArray(payload.iv);
        const buffer = yield crypto.aesCbcDecrypt(iv, _key, cipherText);
        const utf8 = encoding.arrayToUtf8(buffer);
        let data;
        try {
            data = JSON.parse(utf8);
        } catch (error) {
            return null;
        }
        return data;
    });
}
exports.decrypt = decrypt; //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/client/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const core_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/core/dist/cjs/index.js [app-ssr] (ecmascript)"));
const cryptoLib = tslib_1.__importStar(__turbopack_context__.r("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/iso-crypto/dist/cjs/index.js [app-ssr] (ecmascript)"));
class WalletConnect extends core_1.default {
    constructor(connectorOpts, pushServerOpts){
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts
        });
    }
}
exports.default = WalletConnect; //# sourceMappingURL=index.js.map
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// NOTE: this list must be up-to-date with browsers listed in
// test/acceptance/useragentstrings.yml
__turbopack_context__.s([
    "BROWSER_ALIASES_MAP",
    ()=>BROWSER_ALIASES_MAP,
    "BROWSER_MAP",
    ()=>BROWSER_MAP,
    "ENGINE_MAP",
    ()=>ENGINE_MAP,
    "OS_MAP",
    ()=>OS_MAP,
    "PLATFORMS_MAP",
    ()=>PLATFORMS_MAP
]);
const BROWSER_ALIASES_MAP = {
    'Amazon Silk': 'amazon_silk',
    'Android Browser': 'android',
    Bada: 'bada',
    BlackBerry: 'blackberry',
    Chrome: 'chrome',
    Chromium: 'chromium',
    Electron: 'electron',
    Epiphany: 'epiphany',
    Firefox: 'firefox',
    Focus: 'focus',
    Generic: 'generic',
    'Google Search': 'google_search',
    Googlebot: 'googlebot',
    'Internet Explorer': 'ie',
    'K-Meleon': 'k_meleon',
    Maxthon: 'maxthon',
    'Microsoft Edge': 'edge',
    'MZ Browser': 'mz',
    'NAVER Whale Browser': 'naver',
    Opera: 'opera',
    'Opera Coast': 'opera_coast',
    PhantomJS: 'phantomjs',
    Puffin: 'puffin',
    QupZilla: 'qupzilla',
    QQ: 'qq',
    QQLite: 'qqlite',
    Safari: 'safari',
    Sailfish: 'sailfish',
    'Samsung Internet for Android': 'samsung_internet',
    SeaMonkey: 'seamonkey',
    Sleipnir: 'sleipnir',
    Swing: 'swing',
    Tizen: 'tizen',
    'UC Browser': 'uc',
    Vivaldi: 'vivaldi',
    'WebOS Browser': 'webos',
    WeChat: 'wechat',
    'Yandex Browser': 'yandex',
    Roku: 'roku'
};
const BROWSER_MAP = {
    amazon_silk: 'Amazon Silk',
    android: 'Android Browser',
    bada: 'Bada',
    blackberry: 'BlackBerry',
    chrome: 'Chrome',
    chromium: 'Chromium',
    electron: 'Electron',
    epiphany: 'Epiphany',
    firefox: 'Firefox',
    focus: 'Focus',
    generic: 'Generic',
    googlebot: 'Googlebot',
    google_search: 'Google Search',
    ie: 'Internet Explorer',
    k_meleon: 'K-Meleon',
    maxthon: 'Maxthon',
    edge: 'Microsoft Edge',
    mz: 'MZ Browser',
    naver: 'NAVER Whale Browser',
    opera: 'Opera',
    opera_coast: 'Opera Coast',
    phantomjs: 'PhantomJS',
    puffin: 'Puffin',
    qupzilla: 'QupZilla',
    qq: 'QQ Browser',
    qqlite: 'QQ Browser Lite',
    safari: 'Safari',
    sailfish: 'Sailfish',
    samsung_internet: 'Samsung Internet for Android',
    seamonkey: 'SeaMonkey',
    sleipnir: 'Sleipnir',
    swing: 'Swing',
    tizen: 'Tizen',
    uc: 'UC Browser',
    vivaldi: 'Vivaldi',
    webos: 'WebOS Browser',
    wechat: 'WeChat',
    yandex: 'Yandex Browser'
};
const PLATFORMS_MAP = {
    tablet: 'tablet',
    mobile: 'mobile',
    desktop: 'desktop',
    tv: 'tv'
};
const OS_MAP = {
    WindowsPhone: 'Windows Phone',
    Windows: 'Windows',
    MacOS: 'macOS',
    iOS: 'iOS',
    Android: 'Android',
    WebOS: 'WebOS',
    BlackBerry: 'BlackBerry',
    Bada: 'Bada',
    Tizen: 'Tizen',
    Linux: 'Linux',
    ChromeOS: 'Chrome OS',
    PlayStation4: 'PlayStation 4',
    Roku: 'Roku'
};
const ENGINE_MAP = {
    EdgeHTML: 'EdgeHTML',
    Blink: 'Blink',
    Trident: 'Trident',
    Presto: 'Presto',
    Gecko: 'Gecko',
    WebKit: 'WebKit'
};
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Utils
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/constants.js [app-ssr] (ecmascript)");
;
class Utils {
    /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */ static getFirstMatch(regexp, ua) {
        const match = ua.match(regexp);
        return match && match.length > 0 && match[1] || '';
    }
    /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */ static getSecondMatch(regexp, ua) {
        const match = ua.match(regexp);
        return match && match.length > 1 && match[2] || '';
    }
    /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */ static matchAndReturnConst(regexp, ua, _const) {
        if (regexp.test(ua)) {
            return _const;
        }
        return void 0;
    }
    static getWindowsVersionName(version) {
        switch(version){
            case 'NT':
                return 'NT';
            case 'XP':
                return 'XP';
            case 'NT 5.0':
                return '2000';
            case 'NT 5.1':
                return 'XP';
            case 'NT 5.2':
                return '2003';
            case 'NT 6.0':
                return 'Vista';
            case 'NT 6.1':
                return '7';
            case 'NT 6.2':
                return '8';
            case 'NT 6.3':
                return '8.1';
            case 'NT 10.0':
                return '10';
            default:
                return undefined;
        }
    }
    /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */ static getMacOSVersionName(version) {
        const v = version.split('.').splice(0, 2).map((s)=>parseInt(s, 10) || 0);
        v.push(0);
        if (v[0] !== 10) return undefined;
        switch(v[1]){
            case 5:
                return 'Leopard';
            case 6:
                return 'Snow Leopard';
            case 7:
                return 'Lion';
            case 8:
                return 'Mountain Lion';
            case 9:
                return 'Mavericks';
            case 10:
                return 'Yosemite';
            case 11:
                return 'El Capitan';
            case 12:
                return 'Sierra';
            case 13:
                return 'High Sierra';
            case 14:
                return 'Mojave';
            case 15:
                return 'Catalina';
            default:
                return undefined;
        }
    }
    /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */ static getAndroidVersionName(version) {
        const v = version.split('.').splice(0, 2).map((s)=>parseInt(s, 10) || 0);
        v.push(0);
        if (v[0] === 1 && v[1] < 5) return undefined;
        if (v[0] === 1 && v[1] < 6) return 'Cupcake';
        if (v[0] === 1 && v[1] >= 6) return 'Donut';
        if (v[0] === 2 && v[1] < 2) return 'Eclair';
        if (v[0] === 2 && v[1] === 2) return 'Froyo';
        if (v[0] === 2 && v[1] > 2) return 'Gingerbread';
        if (v[0] === 3) return 'Honeycomb';
        if (v[0] === 4 && v[1] < 1) return 'Ice Cream Sandwich';
        if (v[0] === 4 && v[1] < 4) return 'Jelly Bean';
        if (v[0] === 4 && v[1] >= 4) return 'KitKat';
        if (v[0] === 5) return 'Lollipop';
        if (v[0] === 6) return 'Marshmallow';
        if (v[0] === 7) return 'Nougat';
        if (v[0] === 8) return 'Oreo';
        if (v[0] === 9) return 'Pie';
        return undefined;
    }
    /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */ static getVersionPrecision(version) {
        return version.split('.').length;
    }
    /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */ /* eslint consistent-return: 1 */ static compareVersions(versionA, versionB, isLoose = false) {
        // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
        const versionAPrecision = Utils.getVersionPrecision(versionA);
        const versionBPrecision = Utils.getVersionPrecision(versionB);
        let precision = Math.max(versionAPrecision, versionBPrecision);
        let lastPrecision = 0;
        const chunks = Utils.map([
            versionA,
            versionB
        ], (version)=>{
            const delta = precision - Utils.getVersionPrecision(version);
            // 2) "9" -> "9.0" (for precision = 2)
            const _version = version + new Array(delta + 1).join('.0');
            // 3) "9.0" -> ["000000000"", "000000009"]
            return Utils.map(_version.split('.'), (chunk)=>new Array(20 - chunk.length).join('0') + chunk).reverse();
        });
        // adjust precision for loose comparison
        if (isLoose) {
            lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
        }
        // iterate in reverse order by reversed chunks array
        precision -= 1;
        while(precision >= lastPrecision){
            // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
            if (chunks[0][precision] > chunks[1][precision]) {
                return 1;
            }
            if (chunks[0][precision] === chunks[1][precision]) {
                if (precision === lastPrecision) {
                    // all version chunks are same
                    return 0;
                }
                precision -= 1;
            } else if (chunks[0][precision] < chunks[1][precision]) {
                return -1;
            }
        }
        return undefined;
    }
    /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */ static map(arr, iterator) {
        const result = [];
        let i;
        if (Array.prototype.map) {
            return Array.prototype.map.call(arr, iterator);
        }
        for(i = 0; i < arr.length; i += 1){
            result.push(iterator(arr[i]));
        }
        return result;
    }
    /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */ static find(arr, predicate) {
        let i;
        let l;
        if (Array.prototype.find) {
            return Array.prototype.find.call(arr, predicate);
        }
        for(i = 0, l = arr.length; i < l; i += 1){
            const value = arr[i];
            if (predicate(value, i)) {
                return value;
            }
        }
        return undefined;
    }
    /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */ static assign(obj, ...assigners) {
        const result = obj;
        let i;
        let l;
        if ("TURBOPACK compile-time truthy", 1) {
            return Object.assign(obj, ...assigners);
        }
        //TURBOPACK unreachable
        ;
    }
    /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */ static getBrowserAlias(browserName) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BROWSER_ALIASES_MAP"][browserName];
    }
    /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */ static getBrowserTypeByAlias(browserAlias) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BROWSER_MAP"][browserAlias] || '';
    }
}
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-browsers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Browsers' descriptors
 *
 * The idea of descriptors is simple. You should know about them two simple things:
 * 1. Every descriptor has a method or property called `test` and a `describe` method.
 * 2. Order of descriptors is important.
 *
 * More details:
 * 1. Method or property `test` serves as a way to detect whether the UA string
 * matches some certain browser or not. The `describe` method helps to make a result
 * object with params that show some browser-specific things: name, version, etc.
 * 2. Order of descriptors is important because a Parser goes through them one by one
 * in course. For example, if you insert Chrome's descriptor as the first one,
 * more then a half of browsers will be described as Chrome, because they will pass
 * the Chrome descriptor's test.
 *
 * Descriptor's `test` could be a property with an array of RegExps, where every RegExp
 * will be applied to a UA string to test it whether it matches or not.
 * If a descriptor has two or more regexps in the `test` array it tests them one by one
 * with a logical sum operation. Parser stops if it has found any RegExp that matches the UA.
 *
 * Or `test` could be a method. In that case it gets a Parser instance and should
 * return true/false to get the Parser know if this browser descriptor matches the UA or not.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/utils.js [app-ssr] (ecmascript)");
;
const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;
const browsersList = [
    /* Googlebot */ {
        test: [
            /googlebot/i
        ],
        describe (ua) {
            const browser = {
                name: 'Googlebot'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    /* Opera < 13.0 */ {
        test: [
            /opera/i
        ],
        describe (ua) {
            const browser = {
                name: 'Opera'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    /* Opera > 13.0 */ {
        test: [
            /opr\/|opios/i
        ],
        describe (ua) {
            const browser = {
                name: 'Opera'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /SamsungBrowser/i
        ],
        describe (ua) {
            const browser = {
                name: 'Samsung Internet for Android'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /Whale/i
        ],
        describe (ua) {
            const browser = {
                name: 'NAVER Whale Browser'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /MZBrowser/i
        ],
        describe (ua) {
            const browser = {
                name: 'MZ Browser'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /focus/i
        ],
        describe (ua) {
            const browser = {
                name: 'Focus'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /swing/i
        ],
        describe (ua) {
            const browser = {
                name: 'Swing'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /coast/i
        ],
        describe (ua) {
            const browser = {
                name: 'Opera Coast'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /opt\/\d+(?:.?_?\d+)+/i
        ],
        describe (ua) {
            const browser = {
                name: 'Opera Touch'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /yabrowser/i
        ],
        describe (ua) {
            const browser = {
                name: 'Yandex Browser'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /ucbrowser/i
        ],
        describe (ua) {
            const browser = {
                name: 'UC Browser'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /Maxthon|mxios/i
        ],
        describe (ua) {
            const browser = {
                name: 'Maxthon'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /epiphany/i
        ],
        describe (ua) {
            const browser = {
                name: 'Epiphany'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /puffin/i
        ],
        describe (ua) {
            const browser = {
                name: 'Puffin'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /sleipnir/i
        ],
        describe (ua) {
            const browser = {
                name: 'Sleipnir'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /k-meleon/i
        ],
        describe (ua) {
            const browser = {
                name: 'K-Meleon'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /micromessenger/i
        ],
        describe (ua) {
            const browser = {
                name: 'WeChat'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /qqbrowser/i
        ],
        describe (ua) {
            const browser = {
                name: /qqbrowserlite/i.test(ua) ? 'QQ Browser Lite' : 'QQ Browser'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /msie|trident/i
        ],
        describe (ua) {
            const browser = {
                name: 'Internet Explorer'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /\sedg\//i
        ],
        describe (ua) {
            const browser = {
                name: 'Microsoft Edge'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /edg([ea]|ios)/i
        ],
        describe (ua) {
            const browser = {
                name: 'Microsoft Edge'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /vivaldi/i
        ],
        describe (ua) {
            const browser = {
                name: 'Vivaldi'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /seamonkey/i
        ],
        describe (ua) {
            const browser = {
                name: 'SeaMonkey'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /sailfish/i
        ],
        describe (ua) {
            const browser = {
                name: 'Sailfish'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /silk/i
        ],
        describe (ua) {
            const browser = {
                name: 'Amazon Silk'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /phantom/i
        ],
        describe (ua) {
            const browser = {
                name: 'PhantomJS'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /slimerjs/i
        ],
        describe (ua) {
            const browser = {
                name: 'SlimerJS'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /blackberry|\bbb\d+/i,
            /rim\stablet/i
        ],
        describe (ua) {
            const browser = {
                name: 'BlackBerry'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /(web|hpw)[o0]s/i
        ],
        describe (ua) {
            const browser = {
                name: 'WebOS Browser'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /bada/i
        ],
        describe (ua) {
            const browser = {
                name: 'Bada'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /tizen/i
        ],
        describe (ua) {
            const browser = {
                name: 'Tizen'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /qupzilla/i
        ],
        describe (ua) {
            const browser = {
                name: 'QupZilla'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /firefox|iceweasel|fxios/i
        ],
        describe (ua) {
            const browser = {
                name: 'Firefox'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /electron/i
        ],
        describe (ua) {
            const browser = {
                name: 'Electron'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /MiuiBrowser/i
        ],
        describe (ua) {
            const browser = {
                name: 'Miui'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /chromium/i
        ],
        describe (ua) {
            const browser = {
                name: 'Chromium'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /chrome|crios|crmo/i
        ],
        describe (ua) {
            const browser = {
                name: 'Chrome'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    {
        test: [
            /GSA/i
        ],
        describe (ua) {
            const browser = {
                name: 'Google Search'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    /* Android Browser */ {
        test (parser) {
            const notLikeAndroid = !parser.test(/like android/i);
            const butAndroid = parser.test(/android/i);
            return notLikeAndroid && butAndroid;
        },
        describe (ua) {
            const browser = {
                name: 'Android Browser'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    /* PlayStation 4 */ {
        test: [
            /playstation 4/i
        ],
        describe (ua) {
            const browser = {
                name: 'PlayStation 4'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    /* Safari */ {
        test: [
            /safari|applewebkit/i
        ],
        describe (ua) {
            const browser = {
                name: 'Safari'
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(commonVersionIdentifier, ua);
            if (version) {
                browser.version = version;
            }
            return browser;
        }
    },
    /* Something else */ {
        test: [
            /.*/i
        ],
        describe (ua) {
            /* Here we try to make sure that there are explicit details about the device
       * in order to decide what regexp exactly we want to apply
       * (as there is a specific decision based on that conclusion)
       */ const regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
            const regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
            const hasDeviceSpec = ua.search('\\(') !== -1;
            const regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(regexp, ua),
                version: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getSecondMatch(regexp, ua)
            };
        }
    }
];
const __TURBOPACK__default__export__ = browsersList;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-os.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/constants.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = [
    /* Roku */ {
        test: [
            /Roku\/DVP/
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].Roku,
                version
            };
        }
    },
    /* Windows Phone */ {
        test: [
            /windows phone/i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].WindowsPhone,
                version
            };
        }
    },
    /* Windows */ {
        test: [
            /windows /i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua);
            const versionName = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getWindowsVersionName(version);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].Windows,
                version,
                versionName
            };
        }
    },
    /* Firefox on iPad */ {
        test: [
            /Macintosh(.*?) FxiOS(.*?)\//
        ],
        describe (ua) {
            const result = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].iOS
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
            if (version) {
                result.version = version;
            }
            return result;
        }
    },
    /* macOS */ {
        test: [
            /macintosh/i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, '.');
            const versionName = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMacOSVersionName(version);
            const os = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].MacOS,
                version
            };
            if (versionName) {
                os.versionName = versionName;
            }
            return os;
        }
    },
    /* iOS */ {
        test: [
            /(ipod|iphone|ipad)/i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, '.');
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].iOS,
                version
            };
        }
    },
    /* Android */ {
        test (parser) {
            const notLikeAndroid = !parser.test(/like android/i);
            const butAndroid = parser.test(/android/i);
            return notLikeAndroid && butAndroid;
        },
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua);
            const versionName = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getAndroidVersionName(version);
            const os = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].Android,
                version
            };
            if (versionName) {
                os.versionName = versionName;
            }
            return os;
        }
    },
    /* WebOS */ {
        test: [
            /(web|hpw)[o0]s/i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua);
            const os = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].WebOS
            };
            if (version && version.length) {
                os.version = version;
            }
            return os;
        }
    },
    /* BlackBerry */ {
        test: [
            /blackberry|\bbb\d+/i,
            /rim\stablet/i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua) || __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/\bbb(\d+)/i, ua);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].BlackBerry,
                version
            };
        }
    },
    /* Bada */ {
        test: [
            /bada/i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].Bada,
                version
            };
        }
    },
    /* Tizen */ {
        test: [
            /tizen/i
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].Tizen,
                version
            };
        }
    },
    /* Linux */ {
        test: [
            /linux/i
        ],
        describe () {
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].Linux
            };
        }
    },
    /* Chrome OS */ {
        test: [
            /CrOS/
        ],
        describe () {
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].ChromeOS
            };
        }
    },
    /* Playstation 4 */ {
        test: [
            /PlayStation 4/
        ],
        describe (ua) {
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"].PlayStation4,
                version
            };
        }
    }
];
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-platforms.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/constants.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = [
    /* Googlebot */ {
        test: [
            /googlebot/i
        ],
        describe () {
            return {
                type: 'bot',
                vendor: 'Google'
            };
        }
    },
    /* Huawei */ {
        test: [
            /huawei/i
        ],
        describe (ua) {
            const model = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(can-l01)/i, ua) && 'Nova';
            const platform = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile,
                vendor: 'Huawei'
            };
            if (model) {
                platform.model = model;
            }
            return platform;
        }
    },
    /* Nexus Tablet */ {
        test: [
            /nexus\s*(?:7|8|9|10).*/i
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tablet,
                vendor: 'Nexus'
            };
        }
    },
    /* iPad */ {
        test: [
            /ipad/i
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tablet,
                vendor: 'Apple',
                model: 'iPad'
            };
        }
    },
    /* Firefox on iPad */ {
        test: [
            /Macintosh(.*?) FxiOS(.*?)\//
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tablet,
                vendor: 'Apple',
                model: 'iPad'
            };
        }
    },
    /* Amazon Kindle Fire */ {
        test: [
            /kftt build/i
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tablet,
                vendor: 'Amazon',
                model: 'Kindle Fire HD 7'
            };
        }
    },
    /* Another Amazon Tablet with Silk */ {
        test: [
            /silk/i
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tablet,
                vendor: 'Amazon'
            };
        }
    },
    /* Tablet */ {
        test: [
            /tablet(?! pc)/i
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tablet
            };
        }
    },
    /* iPod/iPhone */ {
        test (parser) {
            const iDevice = parser.test(/ipod|iphone/i);
            const likeIDevice = parser.test(/like (ipod|iphone)/i);
            return iDevice && !likeIDevice;
        },
        describe (ua) {
            const model = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/(ipod|iphone)/i, ua);
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile,
                vendor: 'Apple',
                model
            };
        }
    },
    /* Nexus Mobile */ {
        test: [
            /nexus\s*[0-6].*/i,
            /galaxy nexus/i
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile,
                vendor: 'Nexus'
            };
        }
    },
    /* Mobile */ {
        test: [
            /[^-]mobi/i
        ],
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile
            };
        }
    },
    /* BlackBerry */ {
        test (parser) {
            return parser.getBrowserName(true) === 'blackberry';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile,
                vendor: 'BlackBerry'
            };
        }
    },
    /* Bada */ {
        test (parser) {
            return parser.getBrowserName(true) === 'bada';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile
            };
        }
    },
    /* Windows Phone */ {
        test (parser) {
            return parser.getBrowserName() === 'windows phone';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile,
                vendor: 'Microsoft'
            };
        }
    },
    /* Android Tablet */ {
        test (parser) {
            const osMajorVersion = Number(String(parser.getOSVersion()).split('.')[0]);
            return parser.getOSName(true) === 'android' && osMajorVersion >= 3;
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tablet
            };
        }
    },
    /* Android Mobile */ {
        test (parser) {
            return parser.getOSName(true) === 'android';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].mobile
            };
        }
    },
    /* desktop */ {
        test (parser) {
            return parser.getOSName(true) === 'macos';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].desktop,
                vendor: 'Apple'
            };
        }
    },
    /* Windows */ {
        test (parser) {
            return parser.getOSName(true) === 'windows';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].desktop
            };
        }
    },
    /* Linux */ {
        test (parser) {
            return parser.getOSName(true) === 'linux';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].desktop
            };
        }
    },
    /* PlayStation 4 */ {
        test (parser) {
            return parser.getOSName(true) === 'playstation 4';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tv
            };
        }
    },
    /* Roku */ {
        test (parser) {
            return parser.getOSName(true) === 'roku';
        },
        describe () {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"].tv
            };
        }
    }
];
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-engines.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/constants.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = [
    /* EdgeHTML */ {
        test (parser) {
            return parser.getBrowserName(true) === 'microsoft edge';
        },
        describe (ua) {
            const isBlinkBased = /\sedg\//i.test(ua);
            // return blink if it's blink-based one
            if (isBlinkBased) {
                return {
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"].Blink
                };
            }
            // otherwise match the version and return EdgeHTML
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"].EdgeHTML,
                version
            };
        }
    },
    /* Trident */ {
        test: [
            /trident/i
        ],
        describe (ua) {
            const engine = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"].Trident
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                engine.version = version;
            }
            return engine;
        }
    },
    /* Presto */ {
        test (parser) {
            return parser.test(/presto/i);
        },
        describe (ua) {
            const engine = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"].Presto
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                engine.version = version;
            }
            return engine;
        }
    },
    /* Gecko */ {
        test (parser) {
            const isGecko = parser.test(/gecko/i);
            const likeGecko = parser.test(/like gecko/i);
            return isGecko && !likeGecko;
        },
        describe (ua) {
            const engine = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"].Gecko
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                engine.version = version;
            }
            return engine;
        }
    },
    /* Blink */ {
        test: [
            /(apple)?webkit\/537\.36/i
        ],
        describe () {
            return {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"].Blink
            };
        }
    },
    /* WebKit */ {
        test: [
            /(apple)?webkit/i
        ],
        describe (ua) {
            const engine = {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"].WebKit
            };
            const version = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);
            if (version) {
                engine.version = version;
            }
            return engine;
        }
    }
];
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$browsers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-browsers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$os$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-os.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$platforms$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-platforms.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$engines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser-engines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * The main class that arranges the whole parsing process.
 */ class Parser {
    /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */ constructor(UA, skipParsing = false){
        if (UA === void 0 || UA === null || UA === '') {
            throw new Error("UserAgent parameter can't be empty");
        }
        this._ua = UA;
        /**
     * @typedef ParsedResult
     * @property {Object} browser
     * @property {String|undefined} [browser.name]
     * Browser name, like `"Chrome"` or `"Internet Explorer"`
     * @property {String|undefined} [browser.version] Browser version as a String `"12.01.45334.10"`
     * @property {Object} os
     * @property {String|undefined} [os.name] OS name, like `"Windows"` or `"macOS"`
     * @property {String|undefined} [os.version] OS version, like `"NT 5.1"` or `"10.11.1"`
     * @property {String|undefined} [os.versionName] OS name, like `"XP"` or `"High Sierra"`
     * @property {Object} platform
     * @property {String|undefined} [platform.type]
     * platform type, can be either `"desktop"`, `"tablet"` or `"mobile"`
     * @property {String|undefined} [platform.vendor] Vendor of the device,
     * like `"Apple"` or `"Samsung"`
     * @property {String|undefined} [platform.model] Device model,
     * like `"iPhone"` or `"Kindle Fire HD 7"`
     * @property {Object} engine
     * @property {String|undefined} [engine.name]
     * Can be any of this: `WebKit`, `Blink`, `Gecko`, `Trident`, `Presto`, `EdgeHTML`
     * @property {String|undefined} [engine.version] String version of the engine
     */ this.parsedResult = {};
        if (skipParsing !== true) {
            this.parse();
        }
    }
    /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */ getUA() {
        return this._ua;
    }
    /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */ test(regex) {
        return regex.test(this._ua);
    }
    /**
   * Get parsed browser object
   * @return {Object}
   */ parseBrowser() {
        this.parsedResult.browser = {};
        const browserDescriptor = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$browsers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (_browser)=>{
            if (typeof _browser.test === 'function') {
                return _browser.test(this);
            }
            if (_browser.test instanceof Array) {
                return _browser.test.some((condition)=>this.test(condition));
            }
            throw new Error("Browser's test function is not valid");
        });
        if (browserDescriptor) {
            this.parsedResult.browser = browserDescriptor.describe(this.getUA());
        }
        return this.parsedResult.browser;
    }
    /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */ getBrowser() {
        if (this.parsedResult.browser) {
            return this.parsedResult.browser;
        }
        return this.parseBrowser();
    }
    /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */ getBrowserName(toLowerCase) {
        if (toLowerCase) {
            return String(this.getBrowser().name).toLowerCase() || '';
        }
        return this.getBrowser().name || '';
    }
    /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */ getBrowserVersion() {
        return this.getBrowser().version;
    }
    /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */ getOS() {
        if (this.parsedResult.os) {
            return this.parsedResult.os;
        }
        return this.parseOS();
    }
    /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */ parseOS() {
        this.parsedResult.os = {};
        const os = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$os$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (_os)=>{
            if (typeof _os.test === 'function') {
                return _os.test(this);
            }
            if (_os.test instanceof Array) {
                return _os.test.some((condition)=>this.test(condition));
            }
            throw new Error("Browser's test function is not valid");
        });
        if (os) {
            this.parsedResult.os = os.describe(this.getUA());
        }
        return this.parsedResult.os;
    }
    /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */ getOSName(toLowerCase) {
        const { name } = this.getOS();
        if (toLowerCase) {
            return String(name).toLowerCase() || '';
        }
        return name || '';
    }
    /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */ getOSVersion() {
        return this.getOS().version;
    }
    /**
   * Get parsed platform
   * @return {{}}
   */ getPlatform() {
        if (this.parsedResult.platform) {
            return this.parsedResult.platform;
        }
        return this.parsePlatform();
    }
    /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */ getPlatformType(toLowerCase = false) {
        const { type } = this.getPlatform();
        if (toLowerCase) {
            return String(type).toLowerCase() || '';
        }
        return type || '';
    }
    /**
   * Get parsed platform
   * @return {{}}
   */ parsePlatform() {
        this.parsedResult.platform = {};
        const platform = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$platforms$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (_platform)=>{
            if (typeof _platform.test === 'function') {
                return _platform.test(this);
            }
            if (_platform.test instanceof Array) {
                return _platform.test.some((condition)=>this.test(condition));
            }
            throw new Error("Browser's test function is not valid");
        });
        if (platform) {
            this.parsedResult.platform = platform.describe(this.getUA());
        }
        return this.parsedResult.platform;
    }
    /**
   * Get parsed engine
   * @return {{}}
   */ getEngine() {
        if (this.parsedResult.engine) {
            return this.parsedResult.engine;
        }
        return this.parseEngine();
    }
    /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */ getEngineName(toLowerCase) {
        if (toLowerCase) {
            return String(this.getEngine().name).toLowerCase() || '';
        }
        return this.getEngine().name || '';
    }
    /**
   * Get parsed platform
   * @return {{}}
   */ parseEngine() {
        this.parsedResult.engine = {};
        const engine = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2d$engines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (_engine)=>{
            if (typeof _engine.test === 'function') {
                return _engine.test(this);
            }
            if (_engine.test instanceof Array) {
                return _engine.test.some((condition)=>this.test(condition));
            }
            throw new Error("Browser's test function is not valid");
        });
        if (engine) {
            this.parsedResult.engine = engine.describe(this.getUA());
        }
        return this.parsedResult.engine;
    }
    /**
   * Parse full information about the browser
   * @returns {Parser}
   */ parse() {
        this.parseBrowser();
        this.parseOS();
        this.parsePlatform();
        this.parseEngine();
        return this;
    }
    /**
   * Get parsed result
   * @return {ParsedResult}
   */ getResult() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].assign({}, this.parsedResult);
    }
    /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */ satisfies(checkTree) {
        const platformsAndOSes = {};
        let platformsAndOSCounter = 0;
        const browsers = {};
        let browsersCounter = 0;
        const allDefinitions = Object.keys(checkTree);
        allDefinitions.forEach((key)=>{
            const currentDefinition = checkTree[key];
            if (typeof currentDefinition === 'string') {
                browsers[key] = currentDefinition;
                browsersCounter += 1;
            } else if (typeof currentDefinition === 'object') {
                platformsAndOSes[key] = currentDefinition;
                platformsAndOSCounter += 1;
            }
        });
        if (platformsAndOSCounter > 0) {
            const platformsAndOSNames = Object.keys(platformsAndOSes);
            const OSMatchingDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find(platformsAndOSNames, (name)=>this.isOS(name));
            if (OSMatchingDefinition) {
                const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);
                if (osResult !== void 0) {
                    return osResult;
                }
            }
            const platformMatchingDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find(platformsAndOSNames, (name)=>this.isPlatform(name));
            if (platformMatchingDefinition) {
                const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);
                if (platformResult !== void 0) {
                    return platformResult;
                }
            }
        }
        if (browsersCounter > 0) {
            const browserNames = Object.keys(browsers);
            const matchingDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find(browserNames, (name)=>this.isBrowser(name, true));
            if (matchingDefinition !== void 0) {
                return this.compareVersion(browsers[matchingDefinition]);
            }
        }
        return undefined;
    }
    /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */ isBrowser(browserName, includingAlias = false) {
        const defaultBrowserName = this.getBrowserName().toLowerCase();
        let browserNameLower = browserName.toLowerCase();
        const alias = __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getBrowserTypeByAlias(browserNameLower);
        if (includingAlias && alias) {
            browserNameLower = alias.toLowerCase();
        }
        return browserNameLower === defaultBrowserName;
    }
    compareVersion(version) {
        let expectedResults = [
            0
        ];
        let comparableVersion = version;
        let isLoose = false;
        const currentBrowserVersion = this.getBrowserVersion();
        if (typeof currentBrowserVersion !== 'string') {
            return void 0;
        }
        if (version[0] === '>' || version[0] === '<') {
            comparableVersion = version.substr(1);
            if (version[1] === '=') {
                isLoose = true;
                comparableVersion = version.substr(2);
            } else {
                expectedResults = [];
            }
            if (version[0] === '>') {
                expectedResults.push(1);
            } else {
                expectedResults.push(-1);
            }
        } else if (version[0] === '=') {
            comparableVersion = version.substr(1);
        } else if (version[0] === '~') {
            isLoose = true;
            comparableVersion = version.substr(1);
        }
        return expectedResults.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compareVersions(currentBrowserVersion, comparableVersion, isLoose)) > -1;
    }
    isOS(osName) {
        return this.getOSName(true) === String(osName).toLowerCase();
    }
    isPlatform(platformType) {
        return this.getPlatformType(true) === String(platformType).toLowerCase();
    }
    isEngine(engineName) {
        return this.getEngineName(true) === String(engineName).toLowerCase();
    }
    /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */ is(anything, includingAlias = false) {
        return this.isBrowser(anything, includingAlias) || this.isOS(anything) || this.isPlatform(anything);
    }
    /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */ some(anythings = []) {
        return anythings.some((anything)=>this.is(anything));
    }
}
const __TURBOPACK__default__export__ = Parser;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/bowser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/constants.js [app-ssr] (ecmascript)");
;
;
/**
 * Bowser class.
 * Keep it simple as much as it can be.
 * It's supposed to work with collections of {@link Parser} instances
 * rather then solve one-instance problems.
 * All the one-instance stuff is located in Parser class.
 *
 * @class
 * @classdesc Bowser is a static object, that provides an API to the Parsers
 * @hideconstructor
 */ class Bowser {
    /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */ static getParser(UA, skipParsing = false) {
        if (typeof UA !== 'string') {
            throw new Error('UserAgent should be a string');
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](UA, skipParsing);
    }
    /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */ static parse(UA) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](UA).getResult();
    }
    static get BROWSER_MAP() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BROWSER_MAP"];
    }
    static get ENGINE_MAP() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE_MAP"];
    }
    static get OS_MAP() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS_MAP"];
    }
    static get PLATFORMS_MAP() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATFORMS_MAP"];
    }
}
const __TURBOPACK__default__export__ = Bowser;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index-87e811df.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "P",
    ()=>ct,
    "a",
    ()=>Wt,
    "b",
    ()=>Lt,
    "c",
    ()=>Ot,
    "d",
    ()=>Ut,
    "e",
    ()=>Bt,
    "f",
    ()=>dt,
    "g",
    ()=>ut,
    "h",
    ()=>ht,
    "i",
    ()=>Mt,
    "j",
    ()=>ft,
    "k",
    ()=>jt,
    "l",
    ()=>yt,
    "r",
    ()=>vt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$client$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/client/dist/cjs/index.js [app-ssr] (ecmascript)");
(()=>{
    const e1 = new Error("Cannot find module 'algosdk'");
    e1.code = 'MODULE_NOT_FOUND';
    throw e1;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$bowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/bowser.js [app-ssr] (ecmascript)");
;
;
;
var r = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable", o = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = !1;
function l() {
    a = !0;
    for(var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e1 = 0; e1 < 64; ++e1)o[e1] = t[e1], i[t.charCodeAt(e1)] = e1;
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
}
function u(t, e1, n) {
    for(var r, i, s = [], a = e1; a < n; a += 3)r = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], s.push(o[(i = r) >> 18 & 63] + o[i >> 12 & 63] + o[i >> 6 & 63] + o[63 & i]);
    return s.join("");
}
function c(t) {
    var e1;
    a || l();
    for(var n = t.length, r = n % 3, i = "", s = [], c = 16383, h = 0, f = n - r; h < f; h += c)s.push(u(t, h, h + c > f ? f : h + c));
    return 1 === r ? (e1 = t[n - 1], i += o[e1 >> 2], i += o[e1 << 4 & 63], i += "==") : 2 === r && (e1 = (t[n - 2] << 8) + t[n - 1], i += o[e1 >> 10], i += o[e1 >> 4 & 63], i += o[e1 << 2 & 63], i += "="), s.push(i), s.join("");
}
function h(t, e1, n, r, o) {
    var i, s, a = 8 * o - r - 1, l = (1 << a) - 1, u = l >> 1, c = -7, h = n ? o - 1 : 0, f = n ? -1 : 1, d = t[e1 + h];
    for(h += f, i = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; i = 256 * i + t[e1 + h], h += f, c -= 8);
    for(s = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; s = 256 * s + t[e1 + h], h += f, c -= 8);
    if (0 === i) i = 1 - u;
    else {
        if (i === l) return s ? NaN : 1 / 0 * (d ? -1 : 1);
        s += Math.pow(2, r), i -= u;
    }
    return (d ? -1 : 1) * s * Math.pow(2, i - r);
}
function f(t, e1, n, r, o, i) {
    var s, a, l, u = 8 * i - o - 1, c = (1 << u) - 1, h = c >> 1, f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : i - 1, p = r ? 1 : -1, g = e1 < 0 || 0 === e1 && 1 / e1 < 0 ? 1 : 0;
    for(e1 = Math.abs(e1), isNaN(e1) || e1 === 1 / 0 ? (a = isNaN(e1) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e1) / Math.LN2), e1 * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (e1 += s + h >= 1 ? f / l : f * Math.pow(2, 1 - h)) * l >= 2 && (s++, l /= 2), s + h >= c ? (a = 0, s = c) : s + h >= 1 ? (a = (e1 * l - 1) * Math.pow(2, o), s += h) : (a = e1 * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + d] = 255 & a, d += p, a /= 256, o -= 8);
    for(s = s << o | a, u += o; u > 0; t[n + d] = 255 & s, d += p, s /= 256, u -= 8);
    t[n + d - p] |= 128 * g;
}
var d = {}.toString, p = Array.isArray || function(t) {
    return "[object Array]" == d.call(t);
};
function g() {
    return y.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function w(t, e1) {
    if (g() < e1) throw new RangeError("Invalid typed array length");
    return y.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e1)).__proto__ = y.prototype : (null === t && (t = new y(e1)), t.length = e1), t;
}
function y(t, e1, n) {
    if (!(y.TYPED_ARRAY_SUPPORT || this instanceof y)) return new y(t, e1, n);
    if ("number" == typeof t) {
        if ("string" == typeof e1) throw new Error("If encoding is specified then the first argument must be a string");
        return b(this, t);
    }
    return v(this, t, e1, n);
}
function v(t, e1, n, r) {
    if ("number" == typeof e1) throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && e1 instanceof ArrayBuffer ? function(t, e1, n, r) {
        if (e1.byteLength, n < 0 || e1.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (e1.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        e1 = void 0 === n && void 0 === r ? new Uint8Array(e1) : void 0 === r ? new Uint8Array(e1, n) : new Uint8Array(e1, n, r);
        y.TYPED_ARRAY_SUPPORT ? (t = e1).__proto__ = y.prototype : t = A(t, e1);
        return t;
    }(t, e1, n, r) : "string" == typeof e1 ? function(t, e1, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!y.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | _(e1, n);
        t = w(t, r);
        var o = t.write(e1, n);
        o !== r && (t = t.slice(0, o));
        return t;
    }(t, e1, n) : function(t, e1) {
        if (T(e1)) {
            var n = 0 | E(e1.length);
            return 0 === (t = w(t, n)).length || e1.copy(t, 0, 0, n), t;
        }
        if (e1) {
            if ("undefined" != typeof ArrayBuffer && e1.buffer instanceof ArrayBuffer || "length" in e1) return "number" != typeof e1.length || (r = e1.length) != r ? w(t, 0) : A(t, e1);
            if ("Buffer" === e1.type && p(e1.data)) return A(t, e1.data);
        }
        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(t, e1);
}
function m(t) {
    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
    if (t < 0) throw new RangeError('"size" argument must not be negative');
}
function b(t, e1) {
    if (m(e1), t = w(t, e1 < 0 ? 0 : 0 | E(e1)), !y.TYPED_ARRAY_SUPPORT) for(var n = 0; n < e1; ++n)t[n] = 0;
    return t;
}
function A(t, e1) {
    var n = e1.length < 0 ? 0 : 0 | E(e1.length);
    t = w(t, n);
    for(var r = 0; r < n; r += 1)t[r] = 255 & e1[r];
    return t;
}
function E(t) {
    if (t >= g()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + g().toString(16) + " bytes");
    return 0 | t;
}
function T(t) {
    return !(null == t || !t._isBuffer);
}
function _(t, e1) {
    if (T(t)) return t.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
    "string" != typeof t && (t = "" + t);
    var n = t.length;
    if (0 === n) return 0;
    for(var r = !1;;)switch(e1){
        case "ascii":
        case "latin1":
        case "binary":
            return n;
        case "utf8":
        case "utf-8":
        case void 0:
            return V(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * n;
        case "hex":
            return n >>> 1;
        case "base64":
            return Z(t).length;
        default:
            if (r) return V(t).length;
            e1 = ("" + e1).toLowerCase(), r = !0;
    }
}
function R(t, e1, n) {
    var r = !1;
    if ((void 0 === e1 || e1 < 0) && (e1 = 0), e1 > this.length) return "";
    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
    if ((n >>>= 0) <= (e1 >>>= 0)) return "";
    for(t || (t = "utf8");;)switch(t){
        case "hex":
            return k(this, e1, n);
        case "utf8":
        case "utf-8":
            return W(this, e1, n);
        case "ascii":
            return x(this, e1, n);
        case "latin1":
        case "binary":
            return Y(this, e1, n);
        case "base64":
            return B(this, e1, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return j(this, e1, n);
        default:
            if (r) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), r = !0;
    }
}
function S(t, e1, n) {
    var r = t[e1];
    t[e1] = t[n], t[n] = r;
}
function N(t, e1, n, r, o) {
    if (0 === t.length) return -1;
    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
        if (o) return -1;
        n = t.length - 1;
    } else if (n < 0) {
        if (!o) return -1;
        n = 0;
    }
    if ("string" == typeof e1 && (e1 = y.from(e1, r)), T(e1)) return 0 === e1.length ? -1 : C(t, e1, n, r, o);
    if ("number" == typeof e1) return e1 &= 255, y.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e1, n) : Uint8Array.prototype.lastIndexOf.call(t, e1, n) : C(t, [
        e1
    ], n, r, o);
    throw new TypeError("val must be string, number or Buffer");
}
function C(t, e1, n, r, o) {
    var i, s = 1, a = t.length, l = e1.length;
    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (t.length < 2 || e1.length < 2) return -1;
        s = 2, a /= 2, l /= 2, n /= 2;
    }
    function u(t, e1) {
        return 1 === s ? t[e1] : t.readUInt16BE(e1 * s);
    }
    if (o) {
        var c = -1;
        for(i = n; i < a; i++)if (u(t, i) === u(e1, -1 === c ? 0 : i - c)) {
            if (-1 === c && (c = i), i - c + 1 === l) return c * s;
        } else -1 !== c && (i -= i - c), c = -1;
    } else for(n + l > a && (n = a - l), i = n; i >= 0; i--){
        for(var h = !0, f = 0; f < l; f++)if (u(t, i + f) !== u(e1, f)) {
            h = !1;
            break;
        }
        if (h) return i;
    }
    return -1;
}
function I(t, e1, n, r) {
    n = Number(n) || 0;
    var o = t.length - n;
    r ? (r = Number(r)) > o && (r = o) : r = o;
    var i = e1.length;
    if (i % 2 != 0) throw new TypeError("Invalid hex string");
    r > i / 2 && (r = i / 2);
    for(var s = 0; s < r; ++s){
        var a = parseInt(e1.substr(2 * s, 2), 16);
        if (isNaN(a)) return s;
        t[n + s] = a;
    }
    return s;
}
function P(t, e1, n, r) {
    return Q(V(e1, t.length - n), t, n, r);
}
function O(t, e1, n, r) {
    return Q(function(t) {
        for(var e1 = [], n = 0; n < t.length; ++n)e1.push(255 & t.charCodeAt(n));
        return e1;
    }(e1), t, n, r);
}
function L(t, e1, n, r) {
    return O(t, e1, n, r);
}
function M(t, e1, n, r) {
    return Q(Z(e1), t, n, r);
}
function U(t, e1, n, r) {
    return Q(function(t, e1) {
        for(var n, r, o, i = [], s = 0; s < t.length && !((e1 -= 2) < 0); ++s)r = (n = t.charCodeAt(s)) >> 8, o = n % 256, i.push(o), i.push(r);
        return i;
    }(e1, t.length - n), t, n, r);
}
function B(t, e1, n) {
    return 0 === e1 && n === t.length ? c(t) : c(t.slice(e1, n));
}
function W(t, e1, n) {
    n = Math.min(t.length, n);
    for(var r = [], o = e1; o < n;){
        var i, s, a, l, u = t[o], c = null, h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (o + h <= n) switch(h){
            case 1:
                u < 128 && (c = u);
                break;
            case 2:
                128 == (192 & (i = t[o + 1])) && (l = (31 & u) << 6 | 63 & i) > 127 && (c = l);
                break;
            case 3:
                i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (l = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (c = l);
                break;
            case 4:
                i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (l = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l);
        }
        null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), o += h;
    }
    return function(t) {
        var e1 = t.length;
        if (e1 <= D) return String.fromCharCode.apply(String, t);
        var n = "", r = 0;
        for(; r < e1;)n += String.fromCharCode.apply(String, t.slice(r, r += D));
        return n;
    }(r);
}
y.TYPED_ARRAY_SUPPORT = void 0 === r.TYPED_ARRAY_SUPPORT || r.TYPED_ARRAY_SUPPORT, g(), y.poolSize = 8192, y._augment = function(t) {
    return t.__proto__ = y.prototype, t;
}, y.from = function(t, e1, n) {
    return v(null, t, e1, n);
}, y.TYPED_ARRAY_SUPPORT && (y.prototype.__proto__ = Uint8Array.prototype, y.__proto__ = Uint8Array), y.alloc = function(t, e1, n) {
    return function(t, e1, n, r) {
        return m(e1), e1 <= 0 ? w(t, e1) : void 0 !== n ? "string" == typeof r ? w(t, e1).fill(n, r) : w(t, e1).fill(n) : w(t, e1);
    }(null, t, e1, n);
}, y.allocUnsafe = function(t) {
    return b(null, t);
}, y.allocUnsafeSlow = function(t) {
    return b(null, t);
}, y.isBuffer = function(t) {
    return null != t && (!!t._isBuffer || tt(t) || function(t) {
        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && tt(t.slice(0, 0));
    }(t));
}, y.compare = function(t, e1) {
    if (!T(t) || !T(e1)) throw new TypeError("Arguments must be Buffers");
    if (t === e1) return 0;
    for(var n = t.length, r = e1.length, o = 0, i = Math.min(n, r); o < i; ++o)if (t[o] !== e1[o]) {
        n = t[o], r = e1[o];
        break;
    }
    return n < r ? -1 : r < n ? 1 : 0;
}, y.isEncoding = function(t) {
    switch(String(t).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1;
    }
}, y.concat = function(t, e1) {
    if (!p(t)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return y.alloc(0);
    var n;
    if (void 0 === e1) for(e1 = 0, n = 0; n < t.length; ++n)e1 += t[n].length;
    var r = y.allocUnsafe(e1), o = 0;
    for(n = 0; n < t.length; ++n){
        var i = t[n];
        if (!T(i)) throw new TypeError('"list" argument must be an Array of Buffers');
        i.copy(r, o), o += i.length;
    }
    return r;
}, y.byteLength = _, y.prototype._isBuffer = !0, y.prototype.swap16 = function() {
    var t = this.length;
    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var e1 = 0; e1 < t; e1 += 2)S(this, e1, e1 + 1);
    return this;
}, y.prototype.swap32 = function() {
    var t = this.length;
    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var e1 = 0; e1 < t; e1 += 4)S(this, e1, e1 + 3), S(this, e1 + 1, e1 + 2);
    return this;
}, y.prototype.swap64 = function() {
    var t = this.length;
    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var e1 = 0; e1 < t; e1 += 8)S(this, e1, e1 + 7), S(this, e1 + 1, e1 + 6), S(this, e1 + 2, e1 + 5), S(this, e1 + 3, e1 + 4);
    return this;
}, y.prototype.toString = function() {
    var t = 0 | this.length;
    return 0 === t ? "" : 0 === arguments.length ? W(this, 0, t) : R.apply(this, arguments);
}, y.prototype.equals = function(t) {
    if (!T(t)) throw new TypeError("Argument must be a Buffer");
    return this === t || 0 === y.compare(this, t);
}, y.prototype.inspect = function() {
    var t = "";
    return this.length > 0 && (t = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (t += " ... ")), "<Buffer " + t + ">";
}, y.prototype.compare = function(t, e1, n, r, o) {
    if (!T(t)) throw new TypeError("Argument must be a Buffer");
    if (void 0 === e1 && (e1 = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e1 < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
    if (r >= o && e1 >= n) return 0;
    if (r >= o) return -1;
    if (e1 >= n) return 1;
    if (this === t) return 0;
    for(var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e1 >>>= 0), a = Math.min(i, s), l = this.slice(r, o), u = t.slice(e1, n), c = 0; c < a; ++c)if (l[c] !== u[c]) {
        i = l[c], s = u[c];
        break;
    }
    return i < s ? -1 : s < i ? 1 : 0;
}, y.prototype.includes = function(t, e1, n) {
    return -1 !== this.indexOf(t, e1, n);
}, y.prototype.indexOf = function(t, e1, n) {
    return N(this, t, e1, n, !0);
}, y.prototype.lastIndexOf = function(t, e1, n) {
    return N(this, t, e1, n, !1);
}, y.prototype.write = function(t, e1, n, r) {
    if (void 0 === e1) r = "utf8", n = this.length, e1 = 0;
    else if (void 0 === n && "string" == typeof e1) r = e1, n = this.length, e1 = 0;
    else {
        if (!isFinite(e1)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e1 |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
    }
    var o = this.length - e1;
    if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e1 < 0) || e1 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");
    for(var i = !1;;)switch(r){
        case "hex":
            return I(this, t, e1, n);
        case "utf8":
        case "utf-8":
            return P(this, t, e1, n);
        case "ascii":
            return O(this, t, e1, n);
        case "latin1":
        case "binary":
            return L(this, t, e1, n);
        case "base64":
            return M(this, t, e1, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return U(this, t, e1, n);
        default:
            if (i) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), i = !0;
    }
}, y.prototype.toJSON = function() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
var D = 4096;
function x(t, e1, n) {
    var r = "";
    n = Math.min(t.length, n);
    for(var o = e1; o < n; ++o)r += String.fromCharCode(127 & t[o]);
    return r;
}
function Y(t, e1, n) {
    var r = "";
    n = Math.min(t.length, n);
    for(var o = e1; o < n; ++o)r += String.fromCharCode(t[o]);
    return r;
}
function k(t, e1, n) {
    var r = t.length;
    (!e1 || e1 < 0) && (e1 = 0), (!n || n < 0 || n > r) && (n = r);
    for(var o = "", i = e1; i < n; ++i)o += J(t[i]);
    return o;
}
function j(t, e1, n) {
    for(var r = t.slice(e1, n), o = "", i = 0; i < r.length; i += 2)o += String.fromCharCode(r[i] + 256 * r[i + 1]);
    return o;
}
function $(t, e1, n) {
    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
    if (t + e1 > n) throw new RangeError("Trying to access beyond buffer length");
}
function G(t, e1, n, r, o, i) {
    if (!T(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e1 > o || e1 < i) throw new RangeError('"value" argument is out of bounds');
    if (n + r > t.length) throw new RangeError("Index out of range");
}
function q(t, e1, n, r) {
    e1 < 0 && (e1 = 65535 + e1 + 1);
    for(var o = 0, i = Math.min(t.length - n, 2); o < i; ++o)t[n + o] = (e1 & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
}
function z(t, e1, n, r) {
    e1 < 0 && (e1 = 4294967295 + e1 + 1);
    for(var o = 0, i = Math.min(t.length - n, 4); o < i; ++o)t[n + o] = e1 >>> 8 * (r ? o : 3 - o) & 255;
}
function F(t, e1, n, r, o, i) {
    if (n + r > t.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
}
function H(t, e1, n, r, o) {
    return o || F(t, 0, n, 4), f(t, e1, n, r, 23, 4), n + 4;
}
function K(t, e1, n, r, o) {
    return o || F(t, 0, n, 8), f(t, e1, n, r, 52, 8), n + 8;
}
y.prototype.slice = function(t, e1) {
    var n, r = this.length;
    if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e1 = void 0 === e1 ? r : ~~e1) < 0 ? (e1 += r) < 0 && (e1 = 0) : e1 > r && (e1 = r), e1 < t && (e1 = t), y.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e1)).__proto__ = y.prototype;
    else {
        var o = e1 - t;
        n = new y(o, void 0);
        for(var i = 0; i < o; ++i)n[i] = this[i + t];
    }
    return n;
}, y.prototype.readUIntLE = function(t, e1, n) {
    t |= 0, e1 |= 0, n || $(t, e1, this.length);
    for(var r = this[t], o = 1, i = 0; ++i < e1 && (o *= 256);)r += this[t + i] * o;
    return r;
}, y.prototype.readUIntBE = function(t, e1, n) {
    t |= 0, e1 |= 0, n || $(t, e1, this.length);
    for(var r = this[t + --e1], o = 1; e1 > 0 && (o *= 256);)r += this[t + --e1] * o;
    return r;
}, y.prototype.readUInt8 = function(t, e1) {
    return e1 || $(t, 1, this.length), this[t];
}, y.prototype.readUInt16LE = function(t, e1) {
    return e1 || $(t, 2, this.length), this[t] | this[t + 1] << 8;
}, y.prototype.readUInt16BE = function(t, e1) {
    return e1 || $(t, 2, this.length), this[t] << 8 | this[t + 1];
}, y.prototype.readUInt32LE = function(t, e1) {
    return e1 || $(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, y.prototype.readUInt32BE = function(t, e1) {
    return e1 || $(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, y.prototype.readIntLE = function(t, e1, n) {
    t |= 0, e1 |= 0, n || $(t, e1, this.length);
    for(var r = this[t], o = 1, i = 0; ++i < e1 && (o *= 256);)r += this[t + i] * o;
    return r >= (o *= 128) && (r -= Math.pow(2, 8 * e1)), r;
}, y.prototype.readIntBE = function(t, e1, n) {
    t |= 0, e1 |= 0, n || $(t, e1, this.length);
    for(var r = e1, o = 1, i = this[t + --r]; r > 0 && (o *= 256);)i += this[t + --r] * o;
    return i >= (o *= 128) && (i -= Math.pow(2, 8 * e1)), i;
}, y.prototype.readInt8 = function(t, e1) {
    return e1 || $(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, y.prototype.readInt16LE = function(t, e1) {
    e1 || $(t, 2, this.length);
    var n = this[t] | this[t + 1] << 8;
    return 32768 & n ? 4294901760 | n : n;
}, y.prototype.readInt16BE = function(t, e1) {
    e1 || $(t, 2, this.length);
    var n = this[t + 1] | this[t] << 8;
    return 32768 & n ? 4294901760 | n : n;
}, y.prototype.readInt32LE = function(t, e1) {
    return e1 || $(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, y.prototype.readInt32BE = function(t, e1) {
    return e1 || $(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, y.prototype.readFloatLE = function(t, e1) {
    return e1 || $(t, 4, this.length), h(this, t, !0, 23, 4);
}, y.prototype.readFloatBE = function(t, e1) {
    return e1 || $(t, 4, this.length), h(this, t, !1, 23, 4);
}, y.prototype.readDoubleLE = function(t, e1) {
    return e1 || $(t, 8, this.length), h(this, t, !0, 52, 8);
}, y.prototype.readDoubleBE = function(t, e1) {
    return e1 || $(t, 8, this.length), h(this, t, !1, 52, 8);
}, y.prototype.writeUIntLE = function(t, e1, n, r) {
    (t = +t, e1 |= 0, n |= 0, r) || G(this, t, e1, n, Math.pow(2, 8 * n) - 1, 0);
    var o = 1, i = 0;
    for(this[e1] = 255 & t; ++i < n && (o *= 256);)this[e1 + i] = t / o & 255;
    return e1 + n;
}, y.prototype.writeUIntBE = function(t, e1, n, r) {
    (t = +t, e1 |= 0, n |= 0, r) || G(this, t, e1, n, Math.pow(2, 8 * n) - 1, 0);
    var o = n - 1, i = 1;
    for(this[e1 + o] = 255 & t; --o >= 0 && (i *= 256);)this[e1 + o] = t / i & 255;
    return e1 + n;
}, y.prototype.writeUInt8 = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 1, 255, 0), y.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e1] = 255 & t, e1 + 1;
}, y.prototype.writeUInt16LE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 2, 65535, 0), y.TYPED_ARRAY_SUPPORT ? (this[e1] = 255 & t, this[e1 + 1] = t >>> 8) : q(this, t, e1, !0), e1 + 2;
}, y.prototype.writeUInt16BE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 2, 65535, 0), y.TYPED_ARRAY_SUPPORT ? (this[e1] = t >>> 8, this[e1 + 1] = 255 & t) : q(this, t, e1, !1), e1 + 2;
}, y.prototype.writeUInt32LE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 4, 4294967295, 0), y.TYPED_ARRAY_SUPPORT ? (this[e1 + 3] = t >>> 24, this[e1 + 2] = t >>> 16, this[e1 + 1] = t >>> 8, this[e1] = 255 & t) : z(this, t, e1, !0), e1 + 4;
}, y.prototype.writeUInt32BE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 4, 4294967295, 0), y.TYPED_ARRAY_SUPPORT ? (this[e1] = t >>> 24, this[e1 + 1] = t >>> 16, this[e1 + 2] = t >>> 8, this[e1 + 3] = 255 & t) : z(this, t, e1, !1), e1 + 4;
}, y.prototype.writeIntLE = function(t, e1, n, r) {
    if (t = +t, e1 |= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        G(this, t, e1, n, o - 1, -o);
    }
    var i = 0, s = 1, a = 0;
    for(this[e1] = 255 & t; ++i < n && (s *= 256);)t < 0 && 0 === a && 0 !== this[e1 + i - 1] && (a = 1), this[e1 + i] = (t / s | 0) - a & 255;
    return e1 + n;
}, y.prototype.writeIntBE = function(t, e1, n, r) {
    if (t = +t, e1 |= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        G(this, t, e1, n, o - 1, -o);
    }
    var i = n - 1, s = 1, a = 0;
    for(this[e1 + i] = 255 & t; --i >= 0 && (s *= 256);)t < 0 && 0 === a && 0 !== this[e1 + i + 1] && (a = 1), this[e1 + i] = (t / s | 0) - a & 255;
    return e1 + n;
}, y.prototype.writeInt8 = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 1, 127, -128), y.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e1] = 255 & t, e1 + 1;
}, y.prototype.writeInt16LE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 2, 32767, -32768), y.TYPED_ARRAY_SUPPORT ? (this[e1] = 255 & t, this[e1 + 1] = t >>> 8) : q(this, t, e1, !0), e1 + 2;
}, y.prototype.writeInt16BE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 2, 32767, -32768), y.TYPED_ARRAY_SUPPORT ? (this[e1] = t >>> 8, this[e1 + 1] = 255 & t) : q(this, t, e1, !1), e1 + 2;
}, y.prototype.writeInt32LE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 4, 2147483647, -2147483648), y.TYPED_ARRAY_SUPPORT ? (this[e1] = 255 & t, this[e1 + 1] = t >>> 8, this[e1 + 2] = t >>> 16, this[e1 + 3] = t >>> 24) : z(this, t, e1, !0), e1 + 4;
}, y.prototype.writeInt32BE = function(t, e1, n) {
    return t = +t, e1 |= 0, n || G(this, t, e1, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), y.TYPED_ARRAY_SUPPORT ? (this[e1] = t >>> 24, this[e1 + 1] = t >>> 16, this[e1 + 2] = t >>> 8, this[e1 + 3] = 255 & t) : z(this, t, e1, !1), e1 + 4;
}, y.prototype.writeFloatLE = function(t, e1, n) {
    return H(this, t, e1, !0, n);
}, y.prototype.writeFloatBE = function(t, e1, n) {
    return H(this, t, e1, !1, n);
}, y.prototype.writeDoubleLE = function(t, e1, n) {
    return K(this, t, e1, !0, n);
}, y.prototype.writeDoubleBE = function(t, e1, n) {
    return K(this, t, e1, !1, n);
}, y.prototype.copy = function(t, e1, n, r) {
    if (n || (n = 0), r || 0 === r || (r = this.length), e1 >= t.length && (e1 = t.length), e1 || (e1 = 0), r > 0 && r < n && (r = n), r === n) return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e1 < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
    if (r < 0) throw new RangeError("sourceEnd out of bounds");
    r > this.length && (r = this.length), t.length - e1 < r - n && (r = t.length - e1 + n);
    var o, i = r - n;
    if (this === t && n < e1 && e1 < r) for(o = i - 1; o >= 0; --o)t[o + e1] = this[o + n];
    else if (i < 1e3 || !y.TYPED_ARRAY_SUPPORT) for(o = 0; o < i; ++o)t[o + e1] = this[o + n];
    else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e1);
    return i;
}, y.prototype.fill = function(t, e1, n, r) {
    if ("string" == typeof t) {
        if ("string" == typeof e1 ? (r = e1, e1 = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
            var o = t.charCodeAt(0);
            o < 256 && (t = o);
        }
        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !y.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
    } else "number" == typeof t && (t &= 255);
    if (e1 < 0 || this.length < e1 || this.length < n) throw new RangeError("Out of range index");
    if (n <= e1) return this;
    var i;
    if (e1 >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for(i = e1; i < n; ++i)this[i] = t;
    else {
        var s = T(t) ? t : V(new y(t, r).toString()), a = s.length;
        for(i = 0; i < n - e1; ++i)this[i + e1] = s[i % a];
    }
    return this;
};
var X = /[^+\/0-9A-Za-z-_]/g;
function J(t) {
    return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function V(t, e1) {
    var n;
    e1 = e1 || 1 / 0;
    for(var r = t.length, o = null, i = [], s = 0; s < r; ++s){
        if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
            if (!o) {
                if (n > 56319) {
                    (e1 -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                }
                if (s + 1 === r) {
                    (e1 -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                }
                o = n;
                continue;
            }
            if (n < 56320) {
                (e1 -= 3) > -1 && i.push(239, 191, 189), o = n;
                continue;
            }
            n = 65536 + (o - 55296 << 10 | n - 56320);
        } else o && (e1 -= 3) > -1 && i.push(239, 191, 189);
        if (o = null, n < 128) {
            if ((e1 -= 1) < 0) break;
            i.push(n);
        } else if (n < 2048) {
            if ((e1 -= 2) < 0) break;
            i.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
            if ((e1 -= 3) < 0) break;
            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e1 -= 4) < 0) break;
            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
    }
    return i;
}
function Z(t) {
    return function(t) {
        var e1, n, r, o, u, c;
        a || l();
        var h = t.length;
        if (h % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        u = "=" === t[h - 2] ? 2 : "=" === t[h - 1] ? 1 : 0, c = new s(3 * h / 4 - u), r = u > 0 ? h - 4 : h;
        var f = 0;
        for(e1 = 0, n = 0; e1 < r; e1 += 4, n += 3)o = i[t.charCodeAt(e1)] << 18 | i[t.charCodeAt(e1 + 1)] << 12 | i[t.charCodeAt(e1 + 2)] << 6 | i[t.charCodeAt(e1 + 3)], c[f++] = o >> 16 & 255, c[f++] = o >> 8 & 255, c[f++] = 255 & o;
        return 2 === u ? (o = i[t.charCodeAt(e1)] << 2 | i[t.charCodeAt(e1 + 1)] >> 4, c[f++] = 255 & o) : 1 === u && (o = i[t.charCodeAt(e1)] << 10 | i[t.charCodeAt(e1 + 1)] << 4 | i[t.charCodeAt(e1 + 2)] >> 2, c[f++] = o >> 8 & 255, c[f++] = 255 & o), c;
    }(function(t) {
        if ((t = (function(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        })(t).replace(X, "")).length < 2) return "";
        for(; t.length % 4 != 0;)t += "=";
        return t;
    }(t));
}
function Q(t, e1, n, r) {
    for(var o = 0; o < r && !(o + n >= e1.length || o >= t.length); ++o)e1[o + n] = t[o];
    return o;
}
function tt(t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
}
function et(t, e1, n, r) {
    return new (n || (n = Promise))(function(o, i) {
        function s(t) {
            try {
                l(r.next(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            try {
                l(r.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function l(t) {
            var e1;
            t.done ? o(t.value) : (e1 = t.value, e1 instanceof n ? e1 : new n(function(t) {
                t(e1);
            })).then(s, a);
        }
        l((r = r.apply(t, e1 || [])).next());
    });
}
"function" == typeof SuppressedError && SuppressedError;
class nt extends Error {
    constructor(t, e1, ...n){
        super(...n), Error.captureStackTrace && Error.captureStackTrace(this, nt), this.name = "PeraWalletConnectError", this.data = t, this.message = e1;
    }
}
const rt = new class {
    constructor(t){
        this.listener = void 0, this.channel = t.channel;
    }
    setupListener({ onReceiveMessage: t }) {
        this.close(), this.listener = (e1)=>{
            if ("object" == typeof e1.data) try {
                e1.data.channel === this.channel && t(e1);
            } catch (t) {
                console.error(t);
            }
        }, window.addEventListener("message", this.listener);
    }
    sendMessage({ message: t, targetWindow: e1, origin: n, timeout: r = 1e3 }) {
        setTimeout(()=>{
            const r = {
                channel: this.channel,
                message: t
            };
            e1.postMessage(r, {
                targetOrigin: n || "*"
            });
        }, r);
    }
    close() {
        this.listener && (window.removeEventListener("message", this.listener), this.listener = void 0);
    }
}({
    channel: "pera-web-wallet"
}), ot = 700, it = 50;
function st() {
    const t = document.querySelector('meta[name="name"]'), e1 = document.querySelector('meta[name="description"]');
    let { title: n } = document, r = "";
    return t instanceof HTMLMetaElement && (n = t.content), e1 instanceof HTMLMetaElement && (r = e1.content), {
        title: n,
        description: r,
        url: window.location.origin,
        favicon: at()[0]
    };
}
function at() {
    const t = document.getElementsByTagName("link"), e1 = [];
    for(let n = 0; n < t.length; n++){
        const r = t[n], o = r.getAttribute("rel");
        if (o && o.toLowerCase().indexOf("icon") > -1) {
            const t = r.getAttribute("href");
            if (t && -1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                let n = `${window.location.protocol}//${window.location.host}`;
                if (0 === t.indexOf("/")) n += t;
                else {
                    const e1 = window.location.pathname.split("/");
                    e1.pop();
                    n += `${e1.join("/")}/${t}`;
                }
                e1.push(n);
            } else if (0 === (null == t ? void 0 : t.indexOf("//"))) {
                const n = window.location.protocol + t;
                e1.push(n);
            } else t && e1.push(t);
        }
    }
    return e1;
}
function lt(t) {
    return new Promise((e1, n)=>{
        try {
            const r = window.open(t, "_blank");
            let o = 0;
            const i = setInterval(()=>{
                if (o += 1, o === it) return clearInterval(i), void n(new nt({
                    type: "MESSAGE_NOT_RECEIVED"
                }, "Couldn't open Pera Wallet, please try again."));
                r && (!0 === r.closed && (clearInterval(i), n(new nt({
                    type: "OPERATION_CANCELLED"
                }, "Operation cancelled by user"))), rt.sendMessage({
                    message: {
                        type: "TAB_OPEN"
                    },
                    origin: t,
                    targetWindow: r
                }));
            }, ot);
            rt.setupListener({
                onReceiveMessage: (t)=>{
                    "TAB_OPEN_RECEIVED" === t.data.message.type && (clearInterval(i), e1(r));
                }
            });
        } catch (t) {
            n(t);
        }
    });
}
const ut = "pera-wallet-connect-modal-wrapper", ct = "pera-wallet-redirect-modal-wrapper", ht = "pera-wallet-sign-txn-toast-wrapper", ft = "pera-wallet-sign-txn-modal-wrapper", dt = "pera-wallet-modal";
function pt(t) {
    const e1 = document.createElement("div");
    return e1.setAttribute("id", t), document.body.appendChild(e1), e1;
}
function gt() {
    pt(ct).innerHTML = "<pera-wallet-redirect-modal></pera-wallet-redirect-modal>";
}
function wt() {
    pt(ht).innerHTML = "<pera-wallet-sign-txn-toast></pera-wallet-sign-txn-toast>";
}
function yt() {
    vt(ht);
}
function vt(t) {
    const e1 = document.getElementById(t);
    e1 && e1.remove();
}
const mt = {
    WALLET: "PeraWallet.Wallet",
    WALLETCONNECT: "walletconnect"
};
function bt() {
    return "undefined" == typeof localStorage ? void 0 : localStorage;
}
function At(t, e1) {
    var n;
    null === (n = bt()) || void 0 === n || n.setItem(mt.WALLET, JSON.stringify({
        type: e1 || "pera-wallet",
        accounts: t,
        selectedAccount: t[0]
    }));
}
function Et() {
    var t;
    const e1 = null === (t = bt()) || void 0 === t ? void 0 : t.getItem(mt.WALLET);
    return e1 ? JSON.parse(e1) : null;
}
function Tt() {
    return new Promise((t, e1)=>{
        var n, r;
        try {
            null === (n = bt()) || void 0 === n || n.removeItem(mt.WALLETCONNECT), null === (r = bt()) || void 0 === r || r.removeItem(mt.WALLET), t(void 0);
        } catch (t) {
            e1(t);
        }
    });
}
function _t(t) {
    const e1 = t.slice();
    for(let t = e1.length - 1; t > 0; t--){
        const n = Math.floor(Math.random() * (t + 1));
        [e1[t], e1[n]] = [
            e1[n],
            e1[t]
        ];
    }
    return e1;
}
const Rt = "https://wc.perawallet.app/config.json";
function St() {
    return function(t, e1 = {}) {
        return fetch(t, e1).then((t)=>t.json()).then((t)=>t);
    }(Rt, {
        cache: "no-store"
    });
}
function Nt() {
    return et(this, void 0, void 0, function*() {
        let t = {
            bridgeURL: "",
            webWalletURL: "",
            isWebWalletAvailable: !1,
            shouldDisplayNewBadge: !1,
            shouldUseSound: !0,
            silent: !1,
            promoteMobile: !1
        };
        try {
            const e1 = yield St();
            void 0 !== e1.web_wallet && e1.web_wallet_url && (t.isWebWalletAvailable = e1.web_wallet), void 0 !== e1.display_new_badge && (t.shouldDisplayNewBadge = e1.display_new_badge), void 0 !== e1.use_sound && (t.shouldUseSound = e1.use_sound), void 0 !== e1.silent && (t.silent = e1.silent), void 0 !== e1.promote_mobile && (t.promoteMobile = e1.promote_mobile), t = Object.assign(Object.assign({}, t), {
                bridgeURL: _t(e1.servers || [])[0] || "",
                webWalletURL: e1.web_wallet_url || ""
            });
        } catch (t) {
            console.log(t);
        }
        return t;
    });
}
function Ct(t) {
    return Uint8Array.from(window.atob(t), (t)=>t.charCodeAt(0));
}
function It(t, e1) {
    return {
        id: Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3)),
        jsonrpc: "2.0",
        method: t,
        params: e1
    };
}
function Pt() {
    return "undefined" != typeof navigator;
}
function Ot() {
    return Pt() && /Android/i.test(navigator.userAgent);
}
function Lt() {
    return Pt() && /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
function Mt() {
    return Pt() && /iPhone|iPod|Android/i.test(navigator.userAgent);
}
function Ut() {
    if (!Pt()) return null;
    const { userAgent: t } = navigator;
    let e1;
    return e1 = t.match(/DuckDuckGo/i) ? "DuckDuckGo" : t.match(/OPX/i) ? "Opera GX" : navigator.brave ? "Brave" : __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$bowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getParser(navigator.userAgent).getBrowserName(), e1;
}
const Bt = "perawallet-wc://", Wt = "https://perawallet.app/download/";
function Dt(t) {
    return {
        ROOT: `https://${t}`,
        CONNECT: `https://${t}/connect`,
        TRANSACTION_SIGN: `https://${t}/transaction/sign`
    };
}
function xt({ method: t, signTxnRequestParams: e1, signer: n, chainId: r, webWalletURL: o, resolve: i, reject: s }) {
    const a = Dt(o);
    !function() {
        et(this, void 0, void 0, function*() {
            try {
                const o = yield lt(a.TRANSACTION_SIGN);
                if (o) {
                    let i;
                    "SIGN_TXN" === t ? i = {
                        type: "SIGN_TXN",
                        txn: e1
                    } : "SIGN_DATA" === t && n && r && (i = {
                        type: "SIGN_DATA",
                        data: e1,
                        signer: n,
                        chainId: r
                    }), i && rt.sendMessage({
                        message: i,
                        origin: a.TRANSACTION_SIGN,
                        targetWindow: o
                    });
                }
                const l = setInterval(()=>{
                    !0 === (null == o ? void 0 : o.closed) && (s(new nt({
                        type: `${t}_CANCELLED`
                    }, "Transaction signing is cancelled by user.")), clearInterval(l));
                }, 2e3);
                rt.setupListener({
                    onReceiveMessage: (e1)=>(function({ event: t, newPeraWalletTab: e1, method: n, resolve: r, reject: o }) {
                            switch(t.data.message.type){
                                case "SIGN_TXN_CALLBACK":
                                    null == e1 || e1.close(), r(t.data.message.signedTxns.map((t)=>Ct(t.signedTxn)));
                                    break;
                                case "SIGN_DATA_CALLBACK":
                                    null == e1 || e1.close(), r(t.data.message.signedData.map((t)=>Ct(t.signedData)));
                                    break;
                                case "SIGN_TXN_NETWORK_MISMATCH":
                                    o(new nt({
                                        type: `${n}_NETWORK_MISMATCH`,
                                        detail: t.data.message.error
                                    }, t.data.message.error || "Network mismatch"));
                                    break;
                                case "SIGN_TXN_CALLBACK_ERROR":
                                    null == e1 || e1.close(), o(new nt({
                                        type: `${n}_CANCELLED`
                                    }, t.data.message.error));
                                    break;
                                case "SESSION_DISCONNECTED":
                                    null == e1 || e1.close(), Tt(), o(new nt({
                                        type: "SESSION_DISCONNECTED",
                                        detail: t.data.message.error
                                    }, t.data.message.error));
                            }
                        })({
                            event: e1,
                            newPeraWalletTab: o,
                            method: t,
                            resolve: i,
                            reject: s
                        })
                });
            } catch (t) {
                s(t);
            }
        });
    }();
}
function Yt({ webWalletURL: t, chainId: e1, resolve: n, reject: r }) {
    const o = Dt(t);
    return function() {
        return et(this, void 0, void 0, function*() {
            try {
                const t = yield lt(o.CONNECT);
                t && rt.sendMessage({
                    message: {
                        type: "CONNECT",
                        data: Object.assign(Object.assign({}, st()), {
                            chainId: e1
                        })
                    },
                    origin: o.CONNECT,
                    targetWindow: t
                });
                const s = setInterval(()=>{
                    !0 === (null == t ? void 0 : t.closed) && (r(new nt({
                        type: "CONNECT_CANCELLED"
                    }, "Connect is cancelled by user")), clearInterval(s), i());
                }, 2e3);
                rt.setupListener({
                    onReceiveMessage: (e1)=>(function({ event: t, newPeraWalletTab: e1, resolve: n, reject: r }) {
                            if (n && "CONNECT_CALLBACK" === t.data.message.type) {
                                const r = t.data.message.data.addresses;
                                At(r, "pera-wallet-web"), n(r), vt(ut), null == e1 || e1.close();
                            } else "CONNECT_NETWORK_MISMATCH" === t.data.message.type && (r(new nt({
                                type: "CONNECT_NETWORK_MISMATCH",
                                detail: t.data.message.error
                            }, t.data.message.error || "Your wallet is connected to a different network to this dApp. Update your wallet to the correct network (MainNet or TestNet) to continue.")), vt(ut), null == e1 || e1.close());
                        })({
                            event: e1,
                            newPeraWalletTab: t,
                            resolve: n,
                            reject: r
                        })
                });
            } catch (t) {
                i(), r(t);
            }
        });
    };
    //TURBOPACK unreachable
    ;
    function i() {
        vt(ut);
    }
}
function kt({ isWebWalletAvailable: t, shouldDisplayNewBadge: e1, shouldUseSound: n, compactMode: r, promoteMobile: o, singleAccount: i, selectedAccount: s }) {
    return {
        open: (a = {
            isWebWalletAvailable: t,
            shouldDisplayNewBadge: e1,
            shouldUseSound: n,
            compactMode: r,
            promoteMobile: o,
            singleAccount: i,
            selectedAccount: s
        }, (t)=>{
            if (!document.getElementById(ut)) {
                const e1 = pt(ut), n = `${t}&algorand=true`, { isWebWalletAvailable: r, shouldDisplayNewBadge: o, shouldUseSound: i, compactMode: s, promoteMobile: l, singleAccount: u, selectedAccount: c } = a;
                e1.innerHTML = `<pera-wallet-connect-modal uri="${n}" is-web-wallet-avaliable="${r}" should-display-new-badge="${o}" should-use-sound="${i}" compact-mode="${s}" promote-mobile="${l}" single-account="${u}" selected-account="${c || ""}"></pera-wallet-connect-modal>`;
            }
        }),
        close: ()=>vt(ut)
    };
    //TURBOPACK unreachable
    ;
    var a;
}
class jt {
    constructor(t){
        this.bridge = (null == t ? void 0 : t.bridge) || "", this.connector = null, this.shouldShowSignTxnToast = void 0 === (null == t ? void 0 : t.shouldShowSignTxnToast) || t.shouldShowSignTxnToast, this.chainId = null == t ? void 0 : t.chainId, this.compactMode = (null == t ? void 0 : t.compactMode) || !1, this.singleAccount = (null == t ? void 0 : t.singleAccount) || !1;
    }
    get platform() {
        return function() {
            const t = Et();
            let e1 = null;
            return "pera-wallet" === (null == t ? void 0 : t.type) ? e1 = "mobile" : "pera-wallet-web" === (null == t ? void 0 : t.type) && (e1 = "web"), e1;
        }();
    }
    get isConnected() {
        var t;
        return "mobile" === this.platform ? !!this.connector : "web" === this.platform && !!(null === (t = Et()) || void 0 === t ? void 0 : t.accounts.length);
    }
    get isPeraDiscoverBrowser() {
        return this.checkIsPeraDiscoverBrowser();
    }
    connect(e1) {
        return new Promise((n, r)=>et(this, void 0, void 0, function*() {
                var o;
                try {
                    if (null === (o = this.connector) || void 0 === o ? void 0 : o.connected) try {
                        yield this.connector.killSession();
                    } catch (t) {}
                    const { isWebWalletAvailable: i, bridgeURL: s, webWalletURL: a, shouldDisplayNewBadge: l, shouldUseSound: u, promoteMobile: c } = yield Nt(), h = Yt({
                        resolve: n,
                        reject: r,
                        webWalletURL: a,
                        chainId: this.chainId,
                        isCompactMode: this.compactMode
                    });
                    i && (window.onWebWalletConnect = h), this.connector = new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$client$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                        bridge: this.bridge || s || "https://bridge.walletconnect.org",
                        qrcodeModal: kt({
                            isWebWalletAvailable: i,
                            shouldDisplayNewBadge: l,
                            shouldUseSound: u,
                            compactMode: this.compactMode,
                            promoteMobile: c,
                            singleAccount: this.singleAccount,
                            selectedAccount: null == e1 ? void 0 : e1.selectedAccount
                        })
                    }), yield this.connector.createSession({
                        chainId: this.chainId || 4160
                    }), function(t, e1) {
                        var n, r, o, i;
                        const s = document.getElementById(t), a = null === (r = null === (n = null == s ? void 0 : s.querySelector(t.replace("-wrapper", ""))) || void 0 === n ? void 0 : n.shadowRoot) || void 0 === r ? void 0 : r.querySelector(`.${dt}`), l = null === (i = null === (o = null == a ? void 0 : a.querySelector("pera-wallet-modal-header")) || void 0 === o ? void 0 : o.shadowRoot) || void 0 === i ? void 0 : i.getElementById("pera-wallet-modal-header-close-button");
                        null == l || l.addEventListener("click", ()=>{
                            e1(), vt(t);
                        });
                    }(ut, ()=>r(new nt({
                            type: "CONNECT_MODAL_CLOSED"
                        }, "Connect modal is closed by user"))), this.connector.on("connect", (t, e1)=>{
                        var o, i;
                        t && r(t), n((null === (o = this.connector) || void 0 === o ? void 0 : o.accounts) || []), At((null === (i = this.connector) || void 0 === i ? void 0 : i.accounts) || []);
                    });
                } catch (t) {
                    console.log(t), r(new nt({
                        type: "SESSION_CONNECT",
                        detail: t
                    }, t.message || "There was an error while connecting to Pera Wallet"));
                }
            }));
    }
    reconnectSession() {
        return new Promise((e1, n)=>et(this, void 0, void 0, function*() {
                var r, o;
                try {
                    const i = Et();
                    if (!i) return void e1([]);
                    if ("pera-wallet-web" === (null == i ? void 0 : i.type)) {
                        const { isWebWalletAvailable: t } = yield Nt();
                        t ? e1(i.accounts || []) : n(new nt({
                            type: "SESSION_RECONNECT",
                            detail: "Pera Web is not available"
                        }, "Pera Web is not available"));
                    }
                    this.connector && e1(this.connector.accounts || []), this.bridge = (null === (r = function() {
                        var t;
                        const e1 = null === (t = bt()) || void 0 === t ? void 0 : t.getItem(mt.WALLETCONNECT);
                        return e1 ? JSON.parse(e1) : null;
                    }()) || void 0 === r ? void 0 : r.bridge) || "", this.bridge && (this.connector = new __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$client$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                        bridge: this.bridge
                    }), e1((null === (o = this.connector) || void 0 === o ? void 0 : o.accounts) || [])), this.isConnected || e1([]);
                } catch (t) {
                    yield this.disconnect(), n(new nt({
                        type: "SESSION_RECONNECT",
                        detail: t
                    }, t.message || "There was an error while reconnecting to Pera Wallet"));
                }
            }));
    }
    disconnect() {
        var t;
        return et(this, void 0, void 0, function*() {
            let e1;
            this.isConnected && "mobile" === this.platform && (e1 = null === (t = this.connector) || void 0 === t ? void 0 : t.killSession(), null == e1 || e1.then(()=>{
                this.connector = null;
            })), yield Tt();
        });
    }
    signTransactionWithMobile(t) {
        return et(this, void 0, void 0, function*() {
            const e1 = It("algo_signTxn", [
                t
            ]);
            try {
                try {
                    const { silent: t } = yield Nt(), n = (yield this.connector.sendCustomRequest(e1, {
                        forcePushNotification: !t
                    })).filter(Boolean);
                    return "string" == typeof n[0] ? n.map(Ct) : n.map((t)=>Uint8Array.from(t));
                } catch (t) {
                    return yield Promise.reject(new nt({
                        type: "SIGN_TRANSACTIONS",
                        detail: t
                    }, t.message || "Failed to sign transaction"));
                }
            } finally{
                vt(ct), vt(ht);
            }
        });
    }
    signTransactionWithWeb(t, e1) {
        return new Promise((n, r)=>xt({
                signTxnRequestParams: t,
                webWalletURL: e1,
                method: "SIGN_TXN",
                resolve: n,
                reject: r
            }));
    }
    signDataWithMobile({ data: t, signer: e1, chainId: n }) {
        return et(this, void 0, void 0, function*() {
            const r = It("algo_signData", t.map((t)=>Object.assign(Object.assign({}, t), {
                    signer: e1,
                    chainId: n
                })));
            try {
                try {
                    const { silent: t } = yield Nt(), e1 = (yield this.connector.sendCustomRequest(r, {
                        forcePushNotification: !t
                    })).filter(Boolean);
                    return "string" == typeof e1[0] ? e1.map(Ct) : e1.map((t)=>Uint8Array.from(t));
                } catch (t) {
                    return yield Promise.reject(new nt({
                        type: "SIGN_TRANSACTIONS",
                        detail: t
                    }, t.message || "Failed to sign transaction"));
                }
            } finally{
                vt(ct), vt(ht);
            }
        });
    }
    signDataWithWeb({ data: t, signer: e1, chainId: n, webWalletURL: r }) {
        return new Promise((o, i)=>xt({
                method: "SIGN_DATA",
                signTxnRequestParams: t,
                signer: e1,
                chainId: n,
                webWalletURL: r,
                resolve: o,
                reject: i
            }));
    }
    checkIsPeraDiscoverBrowser() {
        return window.navigator.userAgent.includes("pera");
    }
    signTransaction(t, n) {
        return et(this, void 0, void 0, function*() {
            if ("mobile" === this.platform && (Mt() ? gt() : !Mt() && this.shouldShowSignTxnToast && wt(), !this.connector)) throw new Error("PeraWalletConnect was not initialized correctly.");
            const r = t.flatMap((t)=>t.map((t)=>(function(t, n) {
                        let r;
                        n && !(t.signers || []).includes(n) && (r = []);
                        const o = {
                            txn: (i = t.txn, Buffer.from(e.encodeUnsignedTransaction(i)).toString("base64"))
                        };
                        var i;
                        return Array.isArray(r) && (o.signers = r), t.authAddr && (o.authAddr = t.authAddr), t.message && (o.message = t.message), t.msig && (o.msig = t.msig), o;
                    })(t, n)));
            if ("web" === this.platform) {
                const { webWalletURL: t } = yield Nt();
                return this.signTransactionWithWeb(r, t);
            }
            return this.signTransactionWithMobile(r);
        });
    }
    signData(t, e1) {
        return et(this, void 0, void 0, function*() {
            const n = this.chainId || 4160;
            if ("mobile" === this.platform && (Mt() ? gt() : !Mt() && this.shouldShowSignTxnToast && wt(), !this.connector)) throw new Error("PeraWalletConnect was not initialized correctly.");
            if ("web" === this.platform) {
                const { webWalletURL: r } = yield Nt();
                return this.signDataWithWeb({
                    data: t,
                    signer: e1,
                    chainId: n,
                    webWalletURL: r
                });
            }
            const r = t.map((t)=>Object.assign(Object.assign({}, t), {
                    data: Buffer.from(t.data).toString("base64")
                }));
            return this.signDataWithMobile({
                data: r,
                signer: e1,
                chainId: n
            });
        });
    }
}
"undefined" != ("TURBOPACK compile-time value", "undefined") && (window.global = window, window.Buffer = window.Buffer || y, __turbopack_context__.A("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/App-428f5096.js [app-ssr] (ecmascript, async loader)"));
;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$perawallet$2f$connect$2f$dist$2f$index$2d$87e811df$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index-87e811df.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$walletconnect$2f$client$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@walletconnect/client/dist/cjs/index.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'algosdk'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f$bowser$2f$src$2f$bowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/bowser/src/bowser.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PeraWalletConnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$perawallet$2f$connect$2f$dist$2f$index$2d$87e811df$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"],
    "closePeraWalletSignTxnToast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$perawallet$2f$connect$2f$dist$2f$index$2d$87e811df$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$perawallet$2f$connect$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$staking_pool$2f$v0$2d$modern$2d$landing$2d$page$2d$for$2d$webdeve$2f$node_modules$2f40$perawallet$2f$connect$2f$dist$2f$index$2d$87e811df$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/staking_pool/v0-modern-landing-page-for-webdeve/node_modules/@perawallet/connect/dist/index-87e811df.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=3867c_df5e312b._.js.map