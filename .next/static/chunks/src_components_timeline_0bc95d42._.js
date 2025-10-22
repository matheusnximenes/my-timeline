(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/timeline/parts/baseline.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "baseline": "baseline-module-scss-module__e7t79a__baseline",
  "year": "baseline-module-scss-module__e7t79a__year",
  "year_text": "baseline-module-scss-module__e7t79a__year_text",
});
}),
"[project]/src/components/timeline/parts/baseline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/baseline.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
;
;
;
const Baseline = (param)=>{
    let { start, era, zoom, intermediaryYear = 50 } = param;
    const currentYear = new Date().getFullYear();
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIntermediaryYearsEC"])(currentYear, intermediaryYear);
    const yearsBC = era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIntermediaryYearsBC"])(start, intermediaryYear) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].baseline,
        children: [
            ...yearsBC,
            ...years
        ].map((y, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                style: {
                    marginRight: "".concat(intermediaryYear - 1 * zoom, "px")
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year_text,
                    children: y
                }, void 0, false, {
                    fileName: "[project]/src/components/timeline/parts/baseline.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, index, false, {
                fileName: "[project]/src/components/timeline/parts/baseline.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/timeline/parts/baseline.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Baseline;
const __TURBOPACK__default__export__ = Baseline;
var _c;
__turbopack_context__.k.register(_c, "Baseline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/timeline/timeline.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "wrapper": "timeline-module-scss-module__xP3TOq__wrapper",
});
}),
"[project]/src/components/timeline/parts/event.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "element": "event-module-scss-module__GTiA_W__element",
  "isLandmark": "event-module-scss-module__GTiA_W__isLandmark",
  "landmark": "event-module-scss-module__GTiA_W__landmark",
  "line": "event-module-scss-module__GTiA_W__line",
  "line_end": "event-module-scss-module__GTiA_W__line_end",
  "line_start": "event-module-scss-module__GTiA_W__line_start",
  "line_wrapper": "event-module-scss-module__GTiA_W__line_wrapper",
  "title": "event-module-scss-module__GTiA_W__title",
  "title_wrapper": "event-module-scss-module__GTiA_W__title_wrapper",
});
}),
"[project]/src/components/timeline/parts/event.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/event.module.scss [app-client] (css module)");
;
;
const Event = (param)=>{
    let { distance, width, event, activeEvents, handleActiveEvents } = param;
    var _event_custom, _event_custom1;
    const { isLandmark, title } = event;
    console.log("activeEvents", activeEvents);
    const isActive = activeEvents.find((e)=>event.id = e.id);
    var _event_custom_color, _event_custom_lineType;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isLandmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].landmark,
                style: {
                    marginLeft: "".concat(distance, "px")
                }
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/parts/event.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line_wrapper,
                    onClick: ()=>handleActiveEvents([
                            ...activeEvents,
                            event
                        ]),
                    style: {
                        marginLeft: "".concat(distance, "px"),
                        width: "".concat(width, "px")
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title_wrapper, " ").concat(isLandmark && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isLandmark),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: [
                                        title,
                                        " ",
                                        isActive && "- ${isActive}"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/timeline/parts/event.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        event.start.year,
                                        "/",
                                        event.start.era,
                                        " (",
                                        width,
                                        "y)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/timeline/parts/event.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/timeline/parts/event.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].element, " ").concat(isLandmark && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isLandmark),
                            style: {
                                borderColor: (_event_custom_color = (_event_custom = event.custom) === null || _event_custom === void 0 ? void 0 : _event_custom.color) !== null && _event_custom_color !== void 0 ? _event_custom_color : "",
                                borderStyle: (_event_custom_lineType = (_event_custom1 = event.custom) === null || _event_custom1 === void 0 ? void 0 : _event_custom1.lineType) !== null && _event_custom_lineType !== void 0 ? _event_custom_lineType : ""
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/timeline/parts/event.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/timeline/parts/event.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/parts/event.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = Event;
const __TURBOPACK__default__export__ = Event;
var _c;
__turbopack_context__.k.register(_c, "Event");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/timeline/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/baseline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$timeline$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/timeline/timeline.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/event.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/labels.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$StateProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/StateProvider.tsx [app-client] (ecmascript)");
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
const Timeline = ()=>{
    _s();
    const { activeLabels, activeEvents, setActiveEvents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$StateProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateProvider"])();
    const currentYear = new Date().getFullYear();
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHighestBCOrLowestEC"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"]);
    const zoom = 1;
    //TODO: Filtrar se nao estive inativo
    //TODO: Ativar Evento se clicado para mostrar na lateral
    //TODO: Melhorar Design
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$timeline$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"]// .filter((t) => t.labels?.all((v) => activeLabels.includes(v)))
                .sort((a, b)=>a.order - b.order).map((t)=>{
                    const width = t.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC ? (t.end ? t.end.year : currentYear) - t.start.year : t.start.year - (t.end ? t.end.year : currentYear);
                    const distance = t.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC && start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC ? start.year + t.start.year : start.year - t.start.year;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        event: t,
                        distance: distance * zoom,
                        width: width,
                        activeEvents: activeEvents,
                        handleActiveEvents: setActiveEvents
                    }, t.id, false, {
                        fileName: "[project]/src/components/timeline/index.tsx",
                        lineNumber: 40,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                start: start.year,
                era: start.era,
                zoom: zoom,
                intermediaryYear: 100
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/index.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/timeline/index.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/timeline/index.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Timeline, "LRKUPaRBkMHIzUv66VqpTr7h9GA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$StateProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateProvider"]
    ];
});
_c = Timeline;
const __TURBOPACK__default__export__ = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_timeline_0bc95d42._.js.map