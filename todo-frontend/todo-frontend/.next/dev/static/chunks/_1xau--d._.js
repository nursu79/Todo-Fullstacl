(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/todo/TodoCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function TodoCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "5a424db4a62705358e1f75f99db6b376175ec9c52e5d04dcd304b8631c54dec4") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5a424db4a62705358e1f75f99db6b376175ec9c52e5d04dcd304b8631c54dec4";
    }
    const { todo, onEdit, onToggleComplete, onDelete, onArchive, onUnarchive, isUpdating: t1 } = t0;
    const isUpdating = t1 === undefined ? false : t1;
    const isCompleted = todo.status === "completed";
    const isArchived = todo.archived;
    const t2 = `group rounded-2xl border bg-white p-5 transition sm:p-6 ${isArchived ? "border-stone-200 opacity-75" : "border-stone-200 hover:border-stone-300 hover:shadow-sm"}`;
    let t3;
    if ($[1] !== onToggleComplete || $[2] !== todo) {
        t3 = ({
            "TodoCard[<button>.onClick]": ()=>onToggleComplete(todo)
        })["TodoCard[<button>.onClick]"];
        $[1] = onToggleComplete;
        $[2] = todo;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = isCompleted ? "Mark todo as pending" : "Mark todo as completed";
    const t5 = `mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs transition ${isCompleted ? "border-emerald-500 bg-emerald-500 text-white" : "border-stone-300 hover:border-stone-500"} disabled:cursor-not-allowed disabled:opacity-50`;
    const t6 = isUpdating ? "\u2026" : isCompleted ? "\u2713" : "";
    let t7;
    if ($[4] !== isUpdating || $[5] !== t3 || $[6] !== t4 || $[7] !== t5 || $[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t3,
            disabled: isUpdating,
            "aria-label": t4,
            className: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[4] = isUpdating;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = `break-words text-lg font-semibold ${isCompleted ? "text-stone-400 line-through" : "text-stone-900"}`;
    let t9;
    if ($[10] !== t8 || $[11] !== todo.title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t8,
            children: todo.title
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[10] = t8;
        $[11] = todo.title;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== isCompleted || $[14] !== todo.description) {
        t10 = todo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `mt-1 break-words text-sm leading-6 ${isCompleted ? "text-stone-400" : "text-stone-500"}`,
            children: todo.description
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 75,
            columnNumber: 31
        }, this);
        $[13] = isCompleted;
        $[14] = todo.description;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-0 gap-4",
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t7;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    const t13 = `self-start rounded-full px-3 py-1 text-xs font-medium ${isArchived ? "bg-stone-100 text-stone-500" : isCompleted ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`;
    const t14 = isArchived ? "Archived" : isCompleted ? "Completed" : "Pending";
    let t15;
    if ($[22] !== t13 || $[23] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t14;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t12 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between",
            children: [
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== isArchived || $[29] !== isCompleted || $[30] !== isUpdating || $[31] !== onToggleComplete || $[32] !== todo) {
        t17 = !isArchived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "TodoCard[<button>.onClick]": ()=>onToggleComplete(todo)
            }["TodoCard[<button>.onClick]"],
            disabled: isUpdating,
            className: "rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50",
            children: isUpdating ? "Updating..." : isCompleted ? "Mark Pending" : "Complete"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 122,
            columnNumber: 26
        }, this);
        $[28] = isArchived;
        $[29] = isCompleted;
        $[30] = isUpdating;
        $[31] = onToggleComplete;
        $[32] = todo;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== onEdit || $[35] !== todo.id) {
        t18 = ({
            "TodoCard[<button>.onClick]": ()=>onEdit(todo.id)
        })["TodoCard[<button>.onClick]"];
        $[34] = onEdit;
        $[35] = todo.id;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== isUpdating || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t18,
            disabled: isUpdating,
            className: "rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50",
            children: "Edit"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[37] = isUpdating;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== isArchived || $[41] !== isUpdating || $[42] !== onArchive || $[43] !== onUnarchive || $[44] !== todo.id) {
        t20 = isArchived ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "TodoCard[<button>.onClick]": ()=>onUnarchive(todo.id)
            }["TodoCard[<button>.onClick]"],
            disabled: isUpdating,
            className: "rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50",
            children: isUpdating ? "Updating..." : "Unarchive"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 156,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "TodoCard[<button>.onClick]": ()=>onArchive(todo.id)
            }["TodoCard[<button>.onClick]"],
            disabled: isUpdating,
            className: "rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50",
            children: isUpdating ? "Updating..." : "Archive"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 158,
            columnNumber: 281
        }, this);
        $[40] = isArchived;
        $[41] = isUpdating;
        $[42] = onArchive;
        $[43] = onUnarchive;
        $[44] = todo.id;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== onDelete || $[47] !== todo.id) {
        t21 = ({
            "TodoCard[<button>.onClick]": ()=>onDelete(todo.id)
        })["TodoCard[<button>.onClick]"];
        $[46] = onDelete;
        $[47] = todo.id;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    const t22 = isUpdating ? "Updating..." : "Delete";
    let t23;
    if ($[49] !== isUpdating || $[50] !== t21 || $[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t21,
            disabled: isUpdating,
            className: "rounded-lg px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50",
            children: t22
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[49] = isUpdating;
        $[50] = t21;
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== t17 || $[54] !== t19 || $[55] !== t20 || $[56] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-4",
            children: [
                t17,
                t19,
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[53] = t17;
        $[54] = t19;
        $[55] = t20;
        $[56] = t23;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] !== t16 || $[59] !== t2 || $[60] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: t2,
            children: [
                t16,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoCard.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[58] = t16;
        $[59] = t2;
        $[60] = t24;
        $[61] = t25;
    } else {
        t25 = $[61];
    }
    return t25;
}
_c = TodoCard;
var _c;
__turbopack_context__.k.register(_c, "TodoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/todo/TodoFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// app/components/todo/TodoFilters.tsx
"use client";
;
;
const filters = [
    {
        value: "all",
        label: "All"
    },
    {
        value: "pending",
        label: "Pending"
    },
    {
        value: "completed",
        label: "Completed"
    },
    {
        value: "archived",
        label: "Archived"
    }
];
function TodoFilters(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "e3aee979ec85f21d9b25b354f00ebab0e66cd861cfe81a02f15f94afbc289fbb") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e3aee979ec85f21d9b25b354f00ebab0e66cd861cfe81a02f15f94afbc289fbb";
    }
    const { activeFilter, onChange } = t0;
    let t1;
    if ($[1] !== activeFilter || $[2] !== onChange) {
        t1 = filters.map({
            "TodoFilters[filters.map()]": (filter)=>{
                const isActive = activeFilter === filter.value;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "TodoFilters[filters.map() > <button>.onClick]": ()=>onChange(filter.value)
                    }["TodoFilters[filters.map() > <button>.onClick]"],
                    className: `relative px-4 py-3 text-sm font-medium transition ${isActive ? "text-stone-900" : "text-stone-400 hover:text-stone-700"}`,
                    children: [
                        filter.label,
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-stone-900"
                        }, void 0, false, {
                            fileName: "[project]/components/todo/TodoFilters.tsx",
                            lineNumber: 46,
                            columnNumber: 223
                        }, this)
                    ]
                }, filter.value, true, {
                    fileName: "[project]/components/todo/TodoFilters.tsx",
                    lineNumber: 44,
                    columnNumber: 16
                }, this);
            }
        }["TodoFilters[filters.map()]"]);
        $[1] = activeFilter;
        $[2] = onChange;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Todo filters",
            className: "mb-8 flex flex-wrap items-center gap-1 border-b border-stone-200",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoFilters.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = TodoFilters;
var _c;
__turbopack_context__.k.register(_c, "TodoFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/todo/TodoForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/todos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/components/todo/TodoForm.tsx
"use client";
;
;
function TodoForm({ onCreated, onUpdated, editingTodo }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isEditing = Boolean(editingTodo);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TodoForm.useEffect": ()=>{
            if (editingTodo) {
                setTitle(editingTodo.title);
                setDescription(editingTodo.description);
            } else {
                setTitle("");
                setDescription("");
            }
            setError("");
        }
    }["TodoForm.useEffect"], [
        editingTodo
    ]);
    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);
        try {
            if (editingTodo) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTodo"])(editingTodo.id, {
                    title,
                    description
                });
                await onUpdated();
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTodo"])({
                    title,
                    description
                });
                await onCreated();
                setTitle("");
                setDescription("");
            }
        } catch  {
            setError(isEditing ? "Failed to update todo. Please try again." : "Failed to create todo. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "title",
                        className: "mb-2 block text-sm font-medium text-stone-700",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/components/todo/TodoForm.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "title",
                        type: "text",
                        required: true,
                        value: title,
                        onChange: (event_0)=>setTitle(event_0.target.value),
                        placeholder: "e.g. Finish RL assignment",
                        className: "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-2 focus:ring-stone-200"
                    }, void 0, false, {
                        fileName: "[project]/components/todo/TodoForm.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/todo/TodoForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "description",
                        className: "mb-2 block text-sm font-medium text-stone-700",
                        children: [
                            "Description",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 font-normal text-stone-400",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/components/todo/TodoForm.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/todo/TodoForm.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "description",
                        value: description,
                        onChange: (event_1)=>setDescription(event_1.target.value),
                        placeholder: "Add a little more context...",
                        rows: 4,
                        className: "w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-2 focus:ring-stone-200"
                    }, void 0, false, {
                        fileName: "[project]/components/todo/TodoForm.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/todo/TodoForm.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/todo/TodoForm.tsx",
                lineNumber: 78,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                children: isSubmitting ? isEditing ? "Updating..." : "Creating..." : isEditing ? "Update Todo" : "Create Todo"
            }, void 0, false, {
                fileName: "[project]/components/todo/TodoForm.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/todo/TodoForm.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(TodoForm, "4/L8npdhRKMVhzw16Tj/fw1o+q4=");
_c = TodoForm;
var _c;
__turbopack_context__.k.register(_c, "TodoForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/todo/TodoHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/components/todo/TodoHero.tsx
"use client";
;
;
const messages = [
    "One small thing at a time.",
    "What will you finish today?",
    "Progress starts with one task.",
    "Clear your mind. Keep track.",
    "Make space for what matters."
];
function TodoHero(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "8f0b8ca03897bc063cdce2c2cf9a8e067959205cc5c10afb292c74f803161d6c") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f0b8ca03897bc063cdce2c2cf9a8e067959205cc5c10afb292c74f803161d6c";
    }
    const { onAddTodo } = t0;
    const [messageIndex, setMessageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "TodoHero[useEffect()]": ()=>{
                const interval = setInterval({
                    "TodoHero[useEffect() > setInterval()]": ()=>{
                        setMessageIndex(_TodoHeroUseEffectSetIntervalSetMessageIndex);
                    }
                }["TodoHero[useEffect() > setInterval()]"], 3500);
                return ()=>clearInterval(interval);
            }
        })["TodoHero[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-stone-400",
            children: "Todo Workspace"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoHero.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl",
            children: "My Todos"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoHero.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    const t5 = messages[messageIndex];
    let t6;
    if ($[5] !== messageIndex || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 h-7",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base text-stone-500 transition-opacity duration-500 sm:text-lg",
                children: t5
            }, messageIndex, false, {
                fileName: "[project]/components/todo/TodoHero.tsx",
                lineNumber: 58,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoHero.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[5] = messageIndex;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== onAddTodo) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onAddTodo,
            className: "mt-8 rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2",
            children: "+ Add Todo"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoHero.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[8] = onAddTodo;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t6 || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mb-12 text-center",
            children: [
                t3,
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoHero.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    return t8;
}
_s(TodoHero, "pQxPLBHqPp7jggV+6yas1n6qJTo=");
_c = TodoHero;
function _TodoHeroUseEffectSetIntervalSetMessageIndex(current) {
    return (current + 1) % messages.length;
}
var _c;
__turbopack_context__.k.register(_c, "TodoHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/todo/TodoList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/todo/TodoCard.tsx [app-client] (ecmascript)");
;
;
;
function TodoList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "aaa0762560720e29b6baa668b6e7b99009a33b261af25a4661f513e099ff232e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aaa0762560720e29b6baa668b6e7b99009a33b261af25a4661f513e099ff232e";
    }
    const { todos, onEdit, onToggleComplete, onDelete, onArchive, onUnarchive } = t0;
    let t1;
    if ($[1] !== onArchive || $[2] !== onDelete || $[3] !== onEdit || $[4] !== onToggleComplete || $[5] !== onUnarchive || $[6] !== todos) {
        let t2;
        if ($[8] !== onArchive || $[9] !== onDelete || $[10] !== onEdit || $[11] !== onToggleComplete || $[12] !== onUnarchive) {
            t2 = ({
                "TodoList[todos.map()]": (todo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        todo: todo,
                        onEdit: onEdit,
                        onToggleComplete: onToggleComplete,
                        onDelete: onDelete,
                        onArchive: onArchive,
                        onUnarchive: onUnarchive
                    }, todo.id, false, {
                        fileName: "[project]/components/todo/TodoList.tsx",
                        lineNumber: 35,
                        columnNumber: 42
                    }, this)
            })["TodoList[todos.map()]"];
            $[8] = onArchive;
            $[9] = onDelete;
            $[10] = onEdit;
            $[11] = onToggleComplete;
            $[12] = onUnarchive;
            $[13] = t2;
        } else {
            t2 = $[13];
        }
        t1 = todos.map(t2);
        $[1] = onArchive;
        $[2] = onDelete;
        $[3] = onEdit;
        $[4] = onToggleComplete;
        $[5] = onUnarchive;
        $[6] = todos;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[14] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoList.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[14] = t1;
        $[15] = t2;
    } else {
        t2 = $[15];
    }
    return t2;
}
_c = TodoList;
var _c;
__turbopack_context__.k.register(_c, "TodoList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/todo/TodoModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// app/components/todo/TodoModal.tsx
"use client";
;
;
function TodoModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "a6b858951d1910eb4afd8285e4b88ebbb2f6f0544d81f71dfcc90126c02055f6") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6b858951d1910eb4afd8285e4b88ebbb2f6f0544d81f71dfcc90126c02055f6";
    }
    const { title, children, onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold uppercase tracking-[0.16em] text-stone-400",
            children: "Todo"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoModal.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-1 text-2xl font-semibold tracking-tight text-stone-900",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/todo/TodoModal.tsx",
                    lineNumber: 34,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoModal.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[2] = title;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            "aria-label": "Close",
            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-stone-400 transition hover:bg-stone-100 hover:text-stone-800",
            children: "×"
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoModal.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = onClose;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-start justify-between gap-4",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoModal.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== children || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            className: "max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl sm:p-8",
            onMouseDown: _TodoModalDivOnMouseDown,
            children: [
                t4,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/todo/TodoModal.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== onClose || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 px-4 py-8 backdrop-blur-sm",
            onMouseDown: onClose,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/todo/TodoModal.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[12] = onClose;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = TodoModal;
function _TodoModalDivOnMouseDown(event) {
    return event.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "TodoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/todo/TodoPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/todos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/todo/TodoForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/todo/TodoHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/todo/TodoList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/todo/TodoModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/todo/TodoFilters.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/components/todo/TodoPage.tsx
"use client";
;
;
;
;
;
;
;
const PAGE_LIMIT = 5;
function TodoPage({ initialTodos }) {
    _s();
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTodos);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hasNextPage, setHasNextPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTodos.length === PAGE_LIMIT);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTodoId, setEditingTodoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Keeps a todo locked while its mutation is running.
    const [updatingTodoIds, setUpdatingTodoIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    function getTodoOptions(filter, page) {
        if (filter === "pending") {
            return {
                status: "pending",
                page,
                limit: PAGE_LIMIT
            };
        }
        if (filter === "completed") {
            return {
                status: "completed",
                page,
                limit: PAGE_LIMIT
            };
        }
        if (filter === "archived") {
            return {
                archived: true,
                page,
                limit: PAGE_LIMIT
            };
        }
        return {
            page,
            limit: PAGE_LIMIT
        };
    }
    async function loadTodos(filter_0, page_0, options) {
        const showLoading = options?.showLoading ?? true;
        if (showLoading) {
            setIsLoading(true);
        }
        try {
            const updatedTodos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTodos"])(getTodoOptions(filter_0, page_0));
            setTodos(updatedTodos);
            setHasNextPage(updatedTodos.length === PAGE_LIMIT);
        } finally{
            if (showLoading) {
                setIsLoading(false);
            }
        }
    }
    async function refreshTodos() {
        // Important:
        // Do NOT show the loading screen during normal mutations.
        // The existing list stays visible while fresh data is fetched.
        await loadTodos(activeFilter, currentPage, {
            showLoading: false
        });
    }
    async function handleFilterChange(filter_1) {
        setActiveFilter(filter_1);
        setCurrentPage(1);
        await loadTodos(filter_1, 1, {
            showLoading: true
        });
    }
    async function handlePreviousPage() {
        if (currentPage <= 1 || isLoading) {
            return;
        }
        const nextPage = currentPage - 1;
        setCurrentPage(nextPage);
        await loadTodos(activeFilter, nextPage, {
            showLoading: true
        });
    }
    async function handleNextPage() {
        if (!hasNextPage || isLoading) {
            return;
        }
        const nextPage_0 = currentPage + 1;
        setCurrentPage(nextPage_0);
        await loadTodos(activeFilter, nextPage_0, {
            showLoading: true
        });
    }
    function handleEdit(todoId) {
        setEditingTodoId(todoId);
    }
    function handleOpenCreate() {
        setIsCreateModalOpen(true);
    }
    function handleCloseCreate() {
        setIsCreateModalOpen(false);
    }
    function handleCloseEdit() {
        setEditingTodoId(null);
    }
    async function handleCreated() {
        setCurrentPage(1);
        await loadTodos(activeFilter, 1, {
            showLoading: false
        });
        setIsCreateModalOpen(false);
    }
    async function handleUpdated() {
        await refreshTodos();
        setEditingTodoId(null);
    }
    async function handleToggleComplete(todo) {
        // Prevent rapid consecutive mutations on the same todo.
        if (updatingTodoIds.has(todo.id)) {
            return;
        }
        setUpdatingTodoIds((current)=>{
            const next = new Set(current);
            next.add(todo.id);
            return next;
        });
        try {
            const newStatus = todo.status === "completed" ? "pending" : "completed";
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTodo"])(todo.id, {
                status: newStatus
            });
            await refreshTodos();
        } catch (error) {
            console.error("Failed to toggle todo status:", error);
        } finally{
            setUpdatingTodoIds((current)=>{
                const next = new Set(current);
                next.delete(todo.id);
                return next;
            });
        }
    }
    async function handleDelete(todoId_0) {
        if (updatingTodoIds.has(todoId_0)) {
            return;
        }
        setUpdatingTodoIds((current_0)=>{
            const next_0 = new Set(current_0);
            next_0.add(todoId_0);
            return next_0;
        });
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTodo"])(todoId_0);
            await refreshTodos();
        } catch (error_0) {
            console.error("Failed to delete todo:", error_0);
        } finally{
            setUpdatingTodoIds((current)=>{
                const next = new Set(current);
                next.delete(todoId_0);
                return next;
            });
        }
    }
    async function handleArchive(todoId_1) {
        if (updatingTodoIds.has(todoId_1)) {
            return;
        }
        setUpdatingTodoIds((current_1)=>{
            const next_1 = new Set(current_1);
            next_1.add(todoId_1);
            return next_1;
        });
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["archiveTodo"])(todoId_1);
            await refreshTodos();
        } catch (error_1) {
            console.error("Failed to archive todo:", error_1);
        } finally{
            setUpdatingTodoIds((current)=>{
                const next = new Set(current);
                next.delete(todoId_1);
                return next;
            });
        }
    }
    async function handleUnarchive(todoId_2) {
        if (updatingTodoIds.has(todoId_2)) {
            return;
        }
        setUpdatingTodoIds((current_2)=>{
            const next_2 = new Set(current_2);
            next_2.add(todoId_2);
            return next_2;
        });
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unarchiveTodo"])(todoId_2);
            await refreshTodos();
        } catch (error_2) {
            console.error("Failed to unarchive todo:", error_2);
        } finally{
            setUpdatingTodoIds((current)=>{
                const next = new Set(current);
                next.delete(todoId_2);
                return next;
            });
        }
    }
    const editingTodo = todos.find((todo_0)=>todo_0.id === editingTodoId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onAddTodo: handleOpenCreate
            }, void 0, false, {
                fileName: "[project]/components/todo/TodoPage.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.18em] text-stone-400",
                                        children: "Your collection"
                                    }, void 0, false, {
                                        fileName: "[project]/components/todo/TodoPage.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1 text-2xl font-semibold tracking-tight text-stone-900",
                                        children: "Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/todo/TodoPage.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/todo/TodoPage.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-stone-400",
                                children: [
                                    todos.length,
                                    " on this page"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/todo/TodoPage.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/todo/TodoPage.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        activeFilter: activeFilter,
                        onChange: handleFilterChange
                    }, void 0, false, {
                        fileName: "[project]/components/todo/TodoPage.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-stone-200 bg-white px-6 py-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-stone-400",
                            children: "Loading your todos..."
                        }, void 0, false, {
                            fileName: "[project]/components/todo/TodoPage.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/todo/TodoPage.tsx",
                        lineNumber: 247,
                        columnNumber: 22
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                todos: todos,
                                onEdit: handleEdit,
                                onToggleComplete: handleToggleComplete,
                                onDelete: handleDelete,
                                onArchive: handleArchive,
                                onUnarchive: handleUnarchive
                            }, void 0, false, {
                                fileName: "[project]/components/todo/TodoPage.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this),
                            todos.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-medium text-stone-700",
                                        children: "Nothing here yet."
                                    }, void 0, false, {
                                        fileName: "[project]/components/todo/TodoPage.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-stone-400",
                                        children: activeFilter === "archived" ? "Your archived todos will appear here." : "Add a todo to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/components/todo/TodoPage.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/todo/TodoPage.tsx",
                                lineNumber: 254,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/todo/TodoPage.tsx",
                        lineNumber: 251,
                        columnNumber: 20
                    }, this),
                    (currentPage > 1 || hasNextPage) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handlePreviousPage,
                                disabled: currentPage === 1 || isLoading,
                                className: "rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40",
                                children: "← Previous"
                            }, void 0, false, {
                                fileName: "[project]/components/todo/TodoPage.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-16 text-center text-sm font-medium text-stone-500",
                                children: [
                                    "Page ",
                                    currentPage
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/todo/TodoPage.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleNextPage,
                                disabled: !hasNextPage || isLoading,
                                className: "rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40",
                                children: "Next →"
                            }, void 0, false, {
                                fileName: "[project]/components/todo/TodoPage.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/todo/TodoPage.tsx",
                        lineNumber: 265,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/todo/TodoPage.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            isCreateModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Create something new",
                onClose: handleCloseCreate,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onCreated: handleCreated,
                    onUpdated: handleUpdated
                }, void 0, false, {
                    fileName: "[project]/components/todo/TodoPage.tsx",
                    lineNumber: 281,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/todo/TodoPage.tsx",
                lineNumber: 280,
                columnNumber: 29
            }, this),
            editingTodo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Edit your todo",
                onClose: handleCloseEdit,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$todo$2f$TodoForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    editingTodo: editingTodo,
                    onCreated: handleCreated,
                    onUpdated: handleUpdated
                }, void 0, false, {
                    fileName: "[project]/components/todo/TodoPage.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/todo/TodoPage.tsx",
                lineNumber: 284,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/todo/TodoPage.tsx",
        lineNumber: 225,
        columnNumber: 10
    }, this);
}
_s(TodoPage, "qCS1BPYuLdM3qkJnyi44P+PyjTI=");
_c = TodoPage;
var _c;
__turbopack_context__.k.register(_c, "TodoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/todos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/api/todos.ts
__turbopack_context__.s([
    "archiveTodo",
    ()=>archiveTodo,
    "createTodo",
    ()=>createTodo,
    "deleteTodo",
    ()=>deleteTodo,
    "getTodos",
    ()=>getTodos,
    "unarchiveTodo",
    ()=>unarchiveTodo,
    "updateTodo",
    ()=>updateTodo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") ?? "http://localhost:5000/api/v1";
async function getTodos(options = {}) {
    const params = new URLSearchParams();
    if (options.status) {
        params.set("status", options.status);
    }
    if (options.archived !== undefined) {
        params.set("archived", String(options.archived));
    }
    if (options.page !== undefined) {
        params.set("page", String(options.page));
    }
    if (options.limit !== undefined) {
        params.set("limit", String(options.limit));
    }
    const queryString = params.toString();
    const response = await fetch(`${API_URL}/todos${queryString ? `?${queryString}` : ""}`);
    if (!response.ok) {
        throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    return data.data.results;
}
async function createTodo(todo) {
    const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });
    if (!response.ok) {
        throw new Error("Failed to create todo");
    }
    const data = await response.json();
    return data.data.todo;
}
async function updateTodo(id, updates) {
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    });
    if (!response.ok) {
        throw new Error("Failed to update todo");
    }
    const data = await response.json();
    return data.data.todo;
}
async function deleteTodo(id) {
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error("Failed to delete todo");
    }
}
async function archiveTodo(id) {
    const response = await fetch(`${API_URL}/todos/${id}/archive`, {
        method: "PATCH"
    });
    if (!response.ok) {
        throw new Error("Failed to archive todo");
    }
}
async function unarchiveTodo(id) {
    const response = await fetch(`${API_URL}/todos/${id}/unarchive`, {
        method: "PATCH"
    });
    if (!response.ok) {
        throw new Error("Failed to unarchive todo");
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_1xau--d._.js.map