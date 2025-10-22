(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/timeline/parts/labels.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "labels": "labels-module-scss-module__fEw14q__labels",
});
}),
"[project]/src/components/timeline/parts/labels.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/labels.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$StateProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/StateProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Labels = ()=>{
    _s();
    const labels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllLabels"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"]);
    const { activeLabels, toggleLabels } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$StateProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateProvider"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labels,
        children: labels.map((l, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>toggleLabels(l),
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalizeFirstLetter"])(l),
                        " -",
                        " ",
                        activeLabels.find((label)=>label === l) ? "active" : "inactive"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/timeline/parts/labels.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, index, false, {
                fileName: "[project]/src/components/timeline/parts/labels.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/timeline/parts/labels.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Labels, "oFgpam3pn6FC29I4E3SRkgSJLaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$StateProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateProvider"]
    ];
});
_c = Labels;
const __TURBOPACK__default__export__ = Labels;
var _c;
__turbopack_context__.k.register(_c, "Labels");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_timeline_parts_f88b5e7a._.js.map