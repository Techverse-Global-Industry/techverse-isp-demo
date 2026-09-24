module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/operations/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OperationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/demo-data.ts [app-rsc] (ecmascript)");
;
;
;
const installationQueue = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["installations"].slice(0, 5);
const supportQueue = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tickets"].slice(0, 6);
function StatusPill({ status }) {
    const tone = status === "NEW" || status === "NEW" || status === "OPEN" || status === "REVIEWING" ? "bg-sky-100 text-sky-800" : status === "SCHEDULED" || status === "ASSIGNED" || status === "ACKNOWLEDGED" || status === "IN PROGRESS" || status === "INVESTIGATING" ? "bg-amber-100 text-amber-800" : status === "COMPLETED" || status === "RESOLVED" || status === "CLOSED" ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${tone}`,
        children: status
    }, void 0, false, {
        fileName: "[project]/app/operations/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function OperationsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]",
                        children: "End-to-end ISP operations"
                    }, void 0, false, {
                        fileName: "[project]/app/operations/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900 md:text-4xl",
                        children: "Service command center for a faster, more visible internet experience."
                    }, void 0, false, {
                        fileName: "[project]/app/operations/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 max-w-3xl text-base leading-7 text-slate-600",
                        children: "TechVerse can move from customer request to installation, ticket resolution and network visibility in one workflow—giving frontline teams a single place to monitor service health, field readiness and SLA risk."
                    }, void 0, false, {
                        fileName: "[project]/app/operations/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/operations/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["operationsOverview"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/app/operations/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 kpi text-[#10202f]",
                                children: item.value
                            }, void 0, false, {
                                fileName: "[project]/app/operations/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/app/operations/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/operations/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 xl:grid-cols-[1.3fr_.7fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]",
                                                children: "Installation queue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/operations/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-2 text-2xl font-black",
                                                children: "Pending field work"
                                            }, void 0, false, {
                                                fileName: "[project]/app/operations/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/operations/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/operations/installations",
                                        className: "text-sm font-bold text-[#0b7a75]",
                                        children: "View all"
                                    }, void 0, false, {
                                        fileName: "[project]/app/operations/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/operations/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full text-left text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "text-slate-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-bold",
                                                        children: "Request ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-bold",
                                                        children: "Customer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-bold",
                                                        children: "Area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-bold",
                                                        children: "Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-bold",
                                                        children: "Requested"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-bold",
                                                        children: "Priority"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-bold",
                                                        children: "Technician"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 font-bold",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/operations/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: installationQueue.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-t border-slate-200 align-top",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4 font-bold text-slate-800",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/operations/installations/${item.id}`,
                                                                children: item.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/operations/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4",
                                                            children: item.customer
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4",
                                                            children: item.area
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4",
                                                            children: item.plan
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4",
                                                            children: item.requestedDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-full bg-amber-50 px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-amber-800",
                                                                children: item.priority
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/operations/page.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4",
                                                            children: item.technician
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                                status: item.status.toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/operations/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/app/operations/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operations/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/operations/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/operations/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]",
                                                    children: "SLA monitoring"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operations/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-2 text-2xl font-black",
                                                    children: "Performance pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/operations/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operations/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/operations/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 space-y-4",
                                        children: [
                                            [
                                                "Open Tickets",
                                                "37"
                                            ],
                                            [
                                                "SLA Healthy",
                                                "82%"
                                            ],
                                            [
                                                "SLA At Risk",
                                                "5"
                                            ],
                                            [
                                                "SLA Breached",
                                                "3"
                                            ]
                                        ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-600",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-lg font-black text-slate-900",
                                                        children: value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/app/operations/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/operations/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/operations/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a75]",
                                        children: "Support queue"
                                    }, void 0, false, {
                                        fileName: "[project]/app/operations/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-3",
                                        children: supportQueue.map((ticket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-slate-200 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-black text-slate-900",
                                                                        children: ticket.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/operations/page.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: ticket.customer
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/operations/page.tsx",
                                                                        lineNumber: 169,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/operations/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                                status: ticket.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/operations/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-center justify-between text-xs text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: ticket.issue
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/operations/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: ticket.slaRemaining
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/operations/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/operations/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, ticket.id, true, {
                                                fileName: "[project]/app/operations/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/operations/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/operations/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/operations/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/operations/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/operations/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/operations/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/operations/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/demo-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customers",
    ()=>customers,
    "dashboardStats",
    ()=>dashboardStats,
    "getCustomerById",
    ()=>getCustomerById,
    "getInstallationById",
    ()=>getInstallationById,
    "getTechnicianById",
    ()=>getTechnicianById,
    "getTicketById",
    ()=>getTicketById,
    "installations",
    ()=>installations,
    "networkIncidents",
    ()=>networkIncidents,
    "operationsOverview",
    ()=>operationsOverview,
    "serviceAreas",
    ()=>serviceAreas,
    "technicians",
    ()=>technicians,
    "tickets",
    ()=>tickets
]);
const serviceAreas = [
    {
        name: "Cotonou",
        zones: [
            "Togoudo",
            "Gbegame",
            "Mairie"
        ]
    },
    {
        name: "Abomey-Calavi",
        zones: [
            "Godomey",
            "Zobè",
            "Ouèdo"
        ]
    },
    {
        name: "Porto-Novo",
        zones: [
            "Adjara",
            "Kpasse",
            "Akpakpa"
        ]
    },
    {
        name: "Sèmè-Kpodji",
        zones: [
            "Yèrèbou",
            "Aholou",
            "Ayi-Guinnou"
        ]
    },
    {
        name: "Adjarra",
        zones: [
            "Sokou",
            "Djonou",
            "Bohicon"
        ]
    },
    {
        name: "Akpro-Missérété",
        zones: [
            "Toffo",
            "Aglan",
            "Hounkponou"
        ]
    },
    {
        name: "Dangbo",
        zones: [
            "Aledjo",
            "Aina",
            "Sika"
        ]
    }
];
const dashboardStats = {
    activeCustomers: 2847,
    openTickets: 37,
    pendingInstallations: 18,
    installationsToday: 12,
    activeTechnicians: 24,
    networkIncidents: 2,
    slaAtRisk: 5,
    resolvedToday: 31
};
const customers = [
    {
        id: "CUST-001",
        name: "ABC Trading Ltd",
        company: "ABC Trading Ltd",
        phone: "+229 66 04 12 32",
        email: "ops@abctrading.bj",
        address: "Rue de l'Industrie 42",
        area: "Cotonou",
        plan: "Business 50 Mbps",
        status: "Active",
        openTickets: 2,
        installations: 1
    },
    {
        id: "CUST-002",
        name: "Amina Mensah",
        company: "Independent Consultant",
        phone: "+229 66 34 88 14",
        email: "amina@nomail.bj",
        address: "Avenue de l'Indépendance 18",
        area: "Abomey-Calavi",
        plan: "Home Plus 20 Mbps",
        status: "Active",
        openTickets: 0,
        installations: 1
    },
    {
        id: "CUST-003",
        name: "Mariam Sossou",
        company: "Mariam Sossou Studio",
        phone: "+229 61 19 71 22",
        email: "hello@mariamsossou.bj",
        address: "Zone Industrielle 7",
        area: "Cotonou",
        plan: "Business 50 Mbps",
        status: "Active",
        openTickets: 1,
        installations: 1
    },
    {
        id: "CUST-004",
        name: "Koffi Agbodji",
        company: "Agbodji Logistics",
        phone: "+229 69 25 11 90",
        email: "ops@agbodjilogistics.bj",
        address: "Route de Porto-Novo 5",
        area: "Porto-Novo",
        plan: "Business Max 100 Mbps",
        status: "Active",
        openTickets: 1,
        installations: 2
    },
    {
        id: "CUST-005",
        name: "Nadia Bello",
        company: "Nadia Bello & Co.",
        phone: "+229 60 02 45 81",
        email: "support@nadia-bello.bj",
        address: "Kpasse Sud 9",
        area: "Porto-Novo",
        plan: "Home Plus 20 Mbps",
        status: "Active",
        openTickets: 0,
        installations: 1
    },
    {
        id: "CUST-006",
        name: "Tosin Ogundipe",
        company: "Tosin Farms",
        phone: "+229 63 84 91 08",
        email: "farm@tosin-farms.bj",
        address: "Adjarra Road 31",
        area: "Adjarra",
        plan: "Business 50 Mbps",
        status: "Pending",
        openTickets: 1,
        installations: 1
    },
    {
        id: "CUST-007",
        name: "Lucien Dossou",
        company: "Dossou Properties",
        phone: "+229 64 71 92 66",
        email: "lucien@dossouproperties.bj",
        address: "Rue des Cocotiers 14",
        area: "Akpro-Missérété",
        plan: "Business 50 Mbps",
        status: "Active",
        openTickets: 1,
        installations: 2
    },
    {
        id: "CUST-008",
        name: "Sarah Tchibozo",
        company: "CityHub Studio",
        phone: "+229 60 77 35 52",
        email: "hello@cityhubstudio.bj",
        address: "Avenue 5 88",
        area: "Cotonou",
        plan: "Home Plus 20 Mbps",
        status: "Active",
        openTickets: 0,
        installations: 1
    },
    {
        id: "CUST-009",
        name: "Yvette Houngbo",
        company: "YH Healthcare",
        phone: "+229 65 22 10 94",
        email: "info@yhhealthcare.bj",
        address: "Voie de l'Hôpital 22",
        area: "Sèmè-Kpodji",
        plan: "Business Max 100 Mbps",
        status: "Active",
        openTickets: 2,
        installations: 1
    },
    {
        id: "CUST-010",
        name: "Samuël Fandohan",
        company: "Fandohan Transport",
        phone: "+229 62 18 44 76",
        email: "dispatch@fandohantransport.bj",
        address: "Route de Port 59",
        area: "Dangbo",
        plan: "Business 50 Mbps",
        status: "Active",
        openTickets: 0,
        installations: 1
    },
    {
        id: "CUST-011",
        name: "Grace Alassani",
        company: "Grace Studio",
        phone: "+229 61 42 58 29",
        email: "grace@gracestudio.bj",
        address: "Godomey Côte 8",
        area: "Abomey-Calavi",
        plan: "Home Plus 20 Mbps",
        status: "Active",
        openTickets: 1,
        installations: 2
    },
    {
        id: "CUST-012",
        name: "Basile Ahode",
        company: "Ahode Retail",
        phone: "+229 68 11 60 34",
        email: "admin@ahoderetail.bj",
        address: "Avenue de la Marina 101",
        area: "Cotonou",
        plan: "Business 50 Mbps",
        status: "Active",
        openTickets: 0,
        installations: 1
    },
    {
        id: "CUST-013",
        name: "Clément Biaou",
        company: "Biaou Security",
        phone: "+229 67 01 77 58",
        email: "contact@biaousecurity.bj",
        address: "Mairie de Sèmè 17",
        area: "Sèmè-Kpodji",
        plan: "Business 50 Mbps",
        status: "Active",
        openTickets: 1,
        installations: 1
    },
    {
        id: "CUST-014",
        name: "Rose Yessoufou",
        company: "Rose Academy",
        phone: "+229 62 44 66 99",
        email: "info@roseacademy.bj",
        address: "Akpro-Missérété 13",
        area: "Akpro-Missérété",
        plan: "Home Plus 20 Mbps",
        status: "Active",
        openTickets: 0,
        installations: 1
    },
    {
        id: "CUST-015",
        name: "Hugues Fagbohoun",
        company: "Fagbohoun Electronics",
        phone: "+229 65 98 56 74",
        email: "sales@fagbohoun.bj",
        address: "Zone Aéroport 3",
        area: "Cotonou",
        plan: "Business Max 100 Mbps",
        status: "Active",
        openTickets: 2,
        installations: 2
    }
];
const technicians = [
    {
        id: "TECH-001",
        name: "Jean K.",
        region: "Abomey-Calavi",
        status: "On Job",
        openJobs: 2,
        todaysJobs: 5,
        completionRate: "94%",
        avgResolution: "1h 18m"
    },
    {
        id: "TECH-002",
        name: "Fatou D.",
        region: "Cotonou",
        status: "Available",
        openJobs: 1,
        todaysJobs: 3,
        completionRate: "96%",
        avgResolution: "1h 09m"
    },
    {
        id: "TECH-003",
        name: "Moussa A.",
        region: "Porto-Novo",
        status: "On Job",
        openJobs: 3,
        todaysJobs: 4,
        completionRate: "91%",
        avgResolution: "1h 46m"
    },
    {
        id: "TECH-004",
        name: "Aude S.",
        region: "Sèmè-Kpodji",
        status: "Available",
        openJobs: 1,
        todaysJobs: 2,
        completionRate: "92%",
        avgResolution: "1h 24m"
    },
    {
        id: "TECH-005",
        name: "Léon H.",
        region: "Adjarra",
        status: "Offline",
        openJobs: 0,
        todaysJobs: 0,
        completionRate: "88%",
        avgResolution: "2h 05m"
    },
    {
        id: "TECH-006",
        name: "Ruth C.",
        region: "Cotonou",
        status: "On Leave",
        openJobs: 0,
        todaysJobs: 0,
        completionRate: "93%",
        avgResolution: "1h 31m"
    },
    {
        id: "TECH-007",
        name: "Patrick O.",
        region: "Akpro-Missérété",
        status: "On Job",
        openJobs: 2,
        todaysJobs: 6,
        completionRate: "89%",
        avgResolution: "1h 52m"
    },
    {
        id: "TECH-008",
        name: "Nina T.",
        region: "Dangbo",
        status: "Available",
        openJobs: 1,
        todaysJobs: 2,
        completionRate: "95%",
        avgResolution: "1h 12m"
    }
];
const installations = [
    {
        id: "INS-2026-00428",
        customer: "Amina Mensah",
        phone: "+229 66 34 88 14",
        email: "amina@nomail.bj",
        business: "Independent Consultant",
        address: "Avenue de l'Indépendance 18",
        area: "Abomey-Calavi",
        plan: "Business 50 Mbps",
        requestedDate: "22 September 2026",
        priority: "High",
        status: "New",
        technician: "Unassigned",
        team: "Fiber Deployment A",
        installationType: "Standard installation",
        specialRequirements: "Needs installation before Friday.",
        notes: [
            "Customer confirmed access to the premises.",
            "Fiber route may require an additional 15m cable."
        ],
        activity: [
            {
                time: "09:12",
                label: "Installation request received"
            },
            {
                time: "09:34",
                label: "Reviewed by Operations"
            },
            {
                time: "10:04",
                label: "Assigned to Jean K."
            },
            {
                time: "10:21",
                label: "Customer notified"
            }
        ],
        stage: "Request received"
    },
    {
        id: "INS-2026-00419",
        customer: "Koffi Agbodji",
        phone: "+229 69 25 11 90",
        email: "ops@agbodjilogistics.bj",
        business: "Agbodji Logistics",
        address: "Route de Porto-Novo 5",
        area: "Porto-Novo",
        plan: "Business Max 100 Mbps",
        requestedDate: "19 September 2026",
        priority: "High",
        status: "Scheduled",
        technician: "Moussa A.",
        team: "Business Line Team",
        installationType: "Business installation",
        specialRequirements: "Warehouse needs 2x routers for redundancy.",
        notes: [
            "Site intake approved.",
            "Access gate requires early arrival."
        ],
        activity: [
            {
                time: "08:05",
                label: "Request reviewed"
            },
            {
                time: "08:44",
                label: "Technician assigned"
            },
            {
                time: "09:18",
                label: "Visit scheduled"
            },
            {
                time: "09:52",
                label: "Customer confirmed access window"
            }
        ],
        stage: "Visit scheduled"
    },
    {
        id: "INS-2026-00412",
        customer: "Mariam Sossou",
        phone: "+229 61 19 71 22",
        email: "hello@mariamsossou.bj",
        business: "Mariam Sossou Studio",
        address: "Zone Industrielle 7",
        area: "Cotonou",
        plan: "Business 50 Mbps",
        requestedDate: "17 September 2026",
        priority: "Medium",
        status: "In Progress",
        technician: "Fatou D.",
        team: "Fiber Deployment B",
        installationType: "Office installation",
        specialRequirements: "Two workstations require direct LAN patching.",
        notes: [
            "Installation began at 07:45.",
            "Client requested a second drop near the office cabinet."
        ],
        activity: [
            {
                time: "07:40",
                label: "Request received"
            },
            {
                time: "07:55",
                label: "Reviewed by Operations"
            },
            {
                time: "08:20",
                label: "Technician assigned"
            },
            {
                time: "08:34",
                label: "Installation in progress"
            }
        ],
        stage: "Installation in progress"
    },
    {
        id: "INS-2026-00403",
        customer: "Sarah Tchibozo",
        phone: "+229 60 77 35 52",
        email: "hello@cityhubstudio.bj",
        business: "CityHub Studio",
        address: "Avenue 5 88",
        area: "Cotonou",
        plan: "Home Plus 20 Mbps",
        requestedDate: "14 September 2026",
        priority: "Medium",
        status: "Completed",
        technician: "Jean K.",
        team: "Fiber Deployment A",
        installationType: "Standard installation",
        specialRequirements: "Need Wi-Fi setup and email guidance.",
        notes: [
            "Customer satisfied with final signal strength.",
            "Router configuration completed."
        ],
        activity: [
            {
                time: "09:15",
                label: "Request reviewed"
            },
            {
                time: "09:47",
                label: "Assigned technician"
            },
            {
                time: "10:11",
                label: "Service completed"
            },
            {
                time: "10:26",
                label: "Customer activated"
            }
        ],
        stage: "Customer activated"
    },
    {
        id: "INS-2026-00391",
        customer: "Nadia Bello",
        phone: "+229 60 02 45 81",
        email: "support@nadia-bello.bj",
        business: "Nadia Bello & Co.",
        address: "Kpasse Sud 9",
        area: "Porto-Novo",
        plan: "Home Plus 20 Mbps",
        requestedDate: "11 September 2026",
        priority: "Low",
        status: "Reviewing",
        technician: "Unassigned",
        team: "Residential Team",
        installationType: "Residential installation",
        specialRequirements: "Customer requests evening slot.",
        notes: [
            "Waiting on building entrance confirmation."
        ],
        activity: [
            {
                time: "09:00",
                label: "Request received"
            },
            {
                time: "09:30",
                label: "Reviewed by Operations"
            },
            {
                time: "10:00",
                label: "Awaiting field validation"
            }
        ],
        stage: "Request reviewed"
    },
    {
        id: "INS-2026-00374",
        customer: "Lucien Dossou",
        phone: "+229 64 71 92 66",
        email: "lucien@dossouproperties.bj",
        business: "Dossou Properties",
        address: "Rue des Cocotiers 14",
        area: "Akpro-Missérété",
        plan: "Business 50 Mbps",
        requestedDate: "08 September 2026",
        priority: "High",
        status: "Assigned",
        technician: "Patrick O.",
        team: "Business Line Team",
        installationType: "Multi-location installation",
        specialRequirements: "Need 3 AP points in office and manager apartment.",
        notes: [
            "Multiple drop points confirmed.",
            "Customer requested a quote on premium Wi-Fi mesh."
        ],
        activity: [
            {
                time: "08:12",
                label: "Request received"
            },
            {
                time: "09:01",
                label: "Reviewed by Operations"
            },
            {
                time: "09:39",
                label: "Technician assigned"
            }
        ],
        stage: "Technician assigned"
    },
    {
        id: "INS-2026-00362",
        customer: "Rose Yessoufou",
        phone: "+229 62 44 66 99",
        email: "info@roseacademy.bj",
        business: "Rose Academy",
        address: "Akpro-Missérété 13",
        area: "Akpro-Missérété",
        plan: "Home Plus 20 Mbps",
        requestedDate: "06 September 2026",
        priority: "Low",
        status: "Cancelled",
        technician: "Unassigned",
        team: "Residential Team",
        installationType: "Residential installation",
        specialRequirements: "Customer moved premises.",
        notes: [
            "Request cancelled after relocation.",
            "Customer advised to re-submit with new address."
        ],
        activity: [
            {
                time: "10:12",
                label: "Request received"
            },
            {
                time: "10:41",
                label: "Reviewed by Operations"
            },
            {
                time: "11:26",
                label: "Cancelled by user"
            }
        ],
        stage: "Request received"
    },
    {
        id: "INS-2026-00348",
        customer: "Yvette Houngbo",
        phone: "+229 65 22 10 94",
        email: "info@yhhealthcare.bj",
        business: "YH Healthcare",
        address: "Voie de l'Hôpital 22",
        area: "Sèmè-Kpodji",
        plan: "Business Max 100 Mbps",
        requestedDate: "03 September 2026",
        priority: "Critical",
        status: "In Progress",
        technician: "Aude S.",
        team: "Critical Install Team",
        installationType: "Clinic networking",
        specialRequirements: "Need same-day activation for patient records access.",
        notes: [
            "Network room confirmed",
            "UPS power availability verified."
        ],
        activity: [
            {
                time: "06:50",
                label: "Request received"
            },
            {
                time: "07:00",
                label: "Priority escalated"
            },
            {
                time: "07:30",
                label: "Technician assigned"
            },
            {
                time: "08:10",
                label: "Installation in progress"
            }
        ],
        stage: "Installation in progress"
    },
    {
        id: "INS-2026-00326",
        customer: "Grace Alassani",
        phone: "+229 61 42 58 29",
        email: "grace@gracestudio.bj",
        business: "Grace Studio",
        address: "Godomey Côte 8",
        area: "Abomey-Calavi",
        plan: "Home Plus 20 Mbps",
        requestedDate: "31 August 2026",
        priority: "Medium",
        status: "Scheduled",
        technician: "Jean K.",
        team: "Residential Team",
        installationType: "Residential installation",
        specialRequirements: "Need house wiring inspection.",
        notes: [
            "Customer confirmed access after 5pm.",
            "Existing conduit may need extension."
        ],
        activity: [
            {
                time: "09:00",
                label: "Request received"
            },
            {
                time: "09:18",
                label: "Fibre route reviewed"
            },
            {
                time: "09:50",
                label: "Technician assigned"
            },
            {
                time: "10:20",
                label: "Visit scheduled"
            }
        ],
        stage: "Visit scheduled"
    },
    {
        id: "INS-2026-00318",
        customer: "Hugues Fagbohoun",
        phone: "+229 65 98 56 74",
        email: "sales@fagbohoun.bj",
        business: "Fagbohoun Electronics",
        address: "Zone Aéroport 3",
        area: "Cotonou",
        plan: "Business Max 100 Mbps",
        requestedDate: "27 August 2026",
        priority: "High",
        status: "New",
        technician: "Unassigned",
        team: "Enterprise Network Team",
        installationType: "Enterprise installation",
        specialRequirements: "Need after-hours access and survey approval.",
        notes: [
            "Site survey requested.",
            "Customer requested a staged activation."
        ],
        activity: [
            {
                time: "08:20",
                label: "Request received"
            },
            {
                time: "08:52",
                label: "Operations review pending"
            }
        ],
        stage: "Request received"
    }
];
const tickets = [
    {
        id: "TCK-2026-01842",
        customer: "ABC Trading Ltd",
        issue: "Internet unavailable",
        area: "Cotonou",
        priority: "HIGH",
        assignedTo: "Support Agent A",
        created: "09:14",
        slaRemaining: "01:32 remaining",
        status: "INVESTIGATING",
        age: "18 min",
        slaState: "At Risk",
        summary: "Multiple users report a total outage after a cabinet issue."
    },
    {
        id: "TCK-2026-01835",
        customer: "Grace Alassani",
        issue: "Poor Wi-Fi signal",
        area: "Abomey-Calavi",
        priority: "MEDIUM",
        assignedTo: "Support Agent C",
        created: "08:41",
        slaRemaining: "03:04 remaining",
        status: "ACKNOWLEDGED",
        age: "31 min",
        slaState: "Healthy",
        summary: "Intermittent connectivity near the back of the property."
    },
    {
        id: "TCK-2026-01829",
        customer: "Yvette Houngbo",
        issue: "VPN latency",
        area: "Sèmè-Kpodji",
        priority: "CRITICAL",
        assignedTo: "Support Agent B",
        created: "07:52",
        slaRemaining: "00:18 remaining",
        status: "ESCALATED",
        age: "42 min",
        slaState: "Breached",
        summary: "Healthcare service impacted by unstable tunnel latency."
    },
    {
        id: "TCK-2026-01816",
        customer: "Koffi Agbodji",
        issue: "Bandwidth drops",
        area: "Porto-Novo",
        priority: "HIGH",
        assignedTo: "Support Agent D",
        created: "08:02",
        slaRemaining: "02:08 remaining",
        status: "WAITING FOR CUSTOMER",
        age: "28 min",
        slaState: "At Risk",
        summary: "Router logs show intermittent packet loss during peak hours."
    },
    {
        id: "TCK-2026-01801",
        customer: "Mariam Sossou",
        issue: "Router reboot loop",
        area: "Cotonou",
        priority: "MEDIUM",
        assignedTo: "Support Agent E",
        created: "06:56",
        slaRemaining: "04:21 remaining",
        status: "INVESTIGATING",
        age: "1h 12m",
        slaState: "Healthy",
        summary: "Equipment replaced but customer still reports automatic reboots."
    },
    {
        id: "TCK-2026-01794",
        customer: "Lucien Dossou",
        issue: "No internet after office move",
        area: "Akpro-Missérété",
        priority: "HIGH",
        assignedTo: "Support Agent A",
        created: "08:18",
        slaRemaining: "01:49 remaining",
        status: "OPEN",
        age: "22 min",
        slaState: "At Risk",
        summary: "New site was moved but service profile still pending provisioning."
    },
    {
        id: "TCK-2026-01786",
        customer: "Sarah Tchibozo",
        issue: "Billing mismatch",
        area: "Cotonou",
        priority: "LOW",
        assignedTo: "Support Agent F",
        created: "07:42",
        slaRemaining: "05:11 remaining",
        status: "RESOLVED",
        age: "2h 10m",
        slaState: "Healthy",
        summary: "Invoice discrepancy corrected after plan review."
    },
    {
        id: "TCK-2026-01779",
        customer: "Nadia Bello",
        issue: "Streaming quality poor",
        area: "Porto-Novo",
        priority: "LOW",
        assignedTo: "Support Agent G",
        created: "09:03",
        slaRemaining: "03:49 remaining",
        status: "ACKNOWLEDGED",
        age: "16 min",
        slaState: "Healthy",
        summary: "Customer reports video buffering during evening peak."
    },
    {
        id: "TCK-2026-01762",
        customer: "Samuël Fandohan",
        issue: "Connectivity dropouts",
        area: "Dangbo",
        priority: "MEDIUM",
        assignedTo: "Support Agent C",
        created: "07:10",
        slaRemaining: "03:22 remaining",
        status: "INVESTIGATING",
        age: "51 min",
        slaState: "Healthy",
        summary: "Signal drops between the router and field node during storms."
    },
    {
        id: "TCK-2026-01753",
        customer: "Clément Biaou",
        issue: "VoIP service unstable",
        area: "Sèmè-Kpodji",
        priority: "HIGH",
        assignedTo: "Support Agent D",
        created: "06:15",
        slaRemaining: "00:52 remaining",
        status: "ESCALATED",
        age: "1h 44m",
        slaState: "Breached",
        summary: "Calls failing and packet jitter exceeds acceptable threshold."
    },
    {
        id: "TCK-2026-01744",
        customer: "Basile Ahode",
        issue: "Slow upload speeds",
        area: "Cotonou",
        priority: "MEDIUM",
        assignedTo: "Support Agent H",
        created: "08:55",
        slaRemaining: "04:09 remaining",
        status: "INVESTIGATING",
        age: "19 min",
        slaState: "Healthy",
        summary: "Customer reports upload underperforming business critical services."
    },
    {
        id: "TCK-2026-01738",
        customer: "Tosin Ogundipe",
        issue: "No service in farm office",
        area: "Adjarra",
        priority: "HIGH",
        assignedTo: "Support Agent A",
        created: "07:49",
        slaRemaining: "02:14 remaining",
        status: "WAITING FOR CUSTOMER",
        age: "36 min",
        slaState: "At Risk",
        summary: "Physical line orientation needs verification before field dispatch."
    },
    {
        id: "TCK-2026-01730",
        customer: "Hugues Fagbohoun",
        issue: "Router configuration",
        area: "Cotonou",
        priority: "LOW",
        assignedTo: "Support Agent B",
        created: "08:28",
        slaRemaining: "05:30 remaining",
        status: "RESOLVED",
        age: "1h 03m",
        slaState: "Healthy",
        summary: "Customer guidance completed and service restored to expected levels."
    },
    {
        id: "TCK-2026-01721",
        customer: "Rose Yessoufou",
        issue: "Service disruption after move",
        area: "Akpro-Missérété",
        priority: "MEDIUM",
        assignedTo: "Support Agent F",
        created: "09:07",
        slaRemaining: "04:16 remaining",
        status: "ACKNOWLEDGED",
        age: "14 min",
        slaState: "Healthy",
        summary: "Provider-side provisioning needs one more validation step."
    },
    {
        id: "TCK-2026-01710",
        customer: "Yvette Houngbo",
        issue: "Main clinic network unstable",
        area: "Sèmè-Kpodji",
        priority: "CRITICAL",
        assignedTo: "Support Agent E",
        created: "05:16",
        slaRemaining: "00:05 remaining",
        status: "ESCALATED",
        age: "2h 42m",
        slaState: "Breached",
        summary: "Network event affecting multiple services at a healthcare site."
    }
];
const networkIncidents = [
    {
        id: "INC-2026-0041",
        area: "Porto-Novo",
        issue: "Potential access network interruption",
        started: "10:12",
        impact: "Approximately 38 customers",
        status: "Investigating",
        assigned: "Network Team A",
        summary: "Maintenance crew has been dispatched to validate the access ring."
    },
    {
        id: "INC-2026-0037",
        area: "Cotonou",
        issue: "Backhaul congestion",
        started: "08:11",
        impact: "Approximately 12 customers",
        status: "Monitoring",
        assigned: "Network Team B",
        summary: "Traffic is stable but still above the normal evening baseline."
    },
    {
        id: "INC-2026-0034",
        area: "Dangbo",
        issue: "Weather-related signal fluctuation",
        started: "06:44",
        impact: "Approximately 9 customers",
        status: "Resolved",
        assigned: "Network Team C",
        summary: "Field checks confirmed atmospheric interference and service normalized."
    }
];
const operationsOverview = [
    {
        label: "Active Customers",
        value: "2,847"
    },
    {
        label: "Open Support Tickets",
        value: "37"
    },
    {
        label: "Pending Installations",
        value: "18"
    },
    {
        label: "Installations Today",
        value: "12"
    },
    {
        label: "Active Technicians",
        value: "24"
    },
    {
        label: "Network Incidents",
        value: "2"
    },
    {
        label: "SLA At Risk",
        value: "5"
    },
    {
        label: "Resolved Today",
        value: "31"
    }
];
function getInstallationById(id) {
    return installations.find((installation)=>installation.id === id);
}
function getTicketById(id) {
    return tickets.find((ticket)=>ticket.id === id);
}
function getCustomerById(id) {
    return customers.find((customer)=>customer.id === id);
}
function getTechnicianById(id) {
    return technicians.find((technician)=>technician.id === id);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a0g--b._.js.map