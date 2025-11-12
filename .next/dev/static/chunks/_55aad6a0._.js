(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/store/noteStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNoteStore",
    ()=>useNoteStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const initialDraft = {
    title: '',
    content: '',
    tag: 'Todo'
};
const useNoteStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        draft: initialDraft,
        setDraft: (note)=>set((state)=>({
                    draft: {
                        ...state.draft,
                        ...note
                    }
                })),
        clearDraft: ()=>set({
                draft: initialDraft
            })
    }), {
    name: 'note-draft-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NoteForm/NoteForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "NoteForm-module__XA_SlW__actions",
  "cancelButton": "NoteForm-module__XA_SlW__cancelButton",
  "error": "NoteForm-module__XA_SlW__error",
  "form": "NoteForm-module__XA_SlW__form",
  "formGroup": "NoteForm-module__XA_SlW__formGroup",
  "input": "NoteForm-module__XA_SlW__input",
  "select": "NoteForm-module__XA_SlW__select",
  "submitButton": "NoteForm-module__XA_SlW__submitButton",
  "textarea": "NoteForm-module__XA_SlW__textarea",
});
}),
"[project]/components/NoteForm/NoteForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$noteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/noteStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NoteForm/NoteForm.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const NoteForm = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "059c25f74dcebb538752eada1b6ca3caa0aa776b30447ecd7a6bff6eb1191689") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "059c25f74dcebb538752eada1b6ca3caa0aa776b30447ecd7a6bff6eb1191689";
    }
    const { action } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { draft, setDraft, clearDraft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$noteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoteStore"])();
    let t1;
    let t2;
    if ($[1] !== clearDraft) {
        t1 = ()=>()=>{
                if (formRef.current?.dataset.submitted === "true") {
                    clearDraft();
                }
            };
        t2 = [
            clearDraft
        ];
        $[1] = clearDraft;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== action) {
        t3 = async (formData)=>{
            if (formRef.current) {
                formRef.current.dataset.submitted = "true";
            }
            await action(formData);
        };
        $[4] = action;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleFormAction = t3;
    let t4;
    if ($[6] !== router) {
        t4 = ()=>{
            router.back();
        };
        $[6] = router;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleCancel = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "title",
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== setDraft) {
        t6 = (e)=>setDraft({
                title: e.target.value
            });
        $[9] = setDraft;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== draft.title || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "title",
                    type: "text",
                    name: "title",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                    defaultValue: draft.title,
                    onChange: t6,
                    required: true,
                    minLength: 3,
                    maxLength: 50
                }, void 0, false, {
                    fileName: "[project]/components/NoteForm/NoteForm.tsx",
                    lineNumber: 90,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = draft.title;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "content",
            children: "Content"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== setDraft) {
        t9 = (e_0)=>setDraft({
                content: e_0.target.value
            });
        $[15] = setDraft;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== draft.content || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "content",
                    name: "content",
                    rows: 8,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                    defaultValue: draft.content,
                    onChange: t9,
                    maxLength: 500
                }, void 0, false, {
                    fileName: "[project]/components/NoteForm/NoteForm.tsx",
                    lineNumber: 116,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = draft.content;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "tag",
            children: "Tag"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== setDraft) {
        t12 = (e_1)=>setDraft({
                tag: e_1.target.value
            });
        $[21] = setDraft;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Todo",
            children: "Todo"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Work",
            children: "Work"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Personal",
            children: "Personal"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Meeting",
            children: "Meeting"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Shopping",
            children: "Shopping"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t13;
        $[24] = t14;
        $[25] = t15;
        $[26] = t16;
        $[27] = t17;
    } else {
        t13 = $[23];
        t14 = $[24];
        t15 = $[25];
        t16 = $[26];
        t17 = $[27];
    }
    let t18;
    if ($[28] !== draft.tag || $[29] !== t12) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "tag",
                    name: "tag",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                    defaultValue: draft.tag,
                    onChange: t12,
                    children: [
                        t13,
                        t14,
                        t15,
                        t16,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/NoteForm/NoteForm.tsx",
                    lineNumber: 165,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = draft.tag;
        $[29] = t12;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== handleCancel) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
            onClick: handleCancel,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = handleCancel;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
            children: "Create note"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t19;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== handleFormAction || $[37] !== t10 || $[38] !== t18 || $[39] !== t21 || $[40] !== t7) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            ref: formRef,
            action: handleFormAction,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
            children: [
                t7,
                t10,
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = handleFormAction;
        $[37] = t10;
        $[38] = t18;
        $[39] = t21;
        $[40] = t7;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    return t22;
};
_s(NoteForm, "rCeEPvhXVmUk9fq+BpGdz+XOvSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$noteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoteStore"]
    ];
});
_c = NoteForm;
const __TURBOPACK__default__export__ = NoteForm;
var _c;
__turbopack_context__.k.register(_c, "NoteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getInitialState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
"[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combine",
    ()=>combine,
    "createJSONStorage",
    ()=>createJSONStorage,
    "devtools",
    ()=>devtools,
    "persist",
    ()=>persist,
    "redux",
    ()=>redux,
    "subscribeWithSelector",
    ()=>subscribeWithSelector
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/zustand/esm/middleware.mjs")}`;
    }
};
const reduxImpl = (reducer, initial)=>(set, _get, api)=>{
        api.dispatch = (action)=>{
            set((state)=>reducer(state, action), false, action);
            return action;
        };
        api.dispatchFromDevtools = true;
        return {
            dispatch: (...args)=>api.dispatch(...args),
            ...initial
        };
    };
const redux = reduxImpl;
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name)=>{
    const api = trackedConnections.get(name);
    if (!api) return {};
    return Object.fromEntries(Object.entries(api.stores).map(([key, api2])=>[
            key,
            api2.getState()
        ]));
};
const extractConnectionInformation = (store, extensionConnector, options)=>{
    if (store === void 0) {
        return {
            type: "untracked",
            connection: extensionConnector.connect(options)
        };
    }
    const existingConnection = trackedConnections.get(options.name);
    if (existingConnection) {
        return {
            type: "tracked",
            store,
            ...existingConnection
        };
    }
    const newConnection = {
        connection: extensionConnector.connect(options),
        stores: {}
    };
    trackedConnections.set(options.name, newConnection);
    return {
        type: "tracked",
        store,
        ...newConnection
    };
};
const removeStoreFromTrackedConnections = (name, store)=>{
    if (store === void 0) return;
    const connectionInfo = trackedConnections.get(name);
    if (!connectionInfo) return;
    delete connectionInfo.stores[store];
    if (Object.keys(connectionInfo.stores).length === 0) {
        trackedConnections.delete(name);
    }
};
const findCallerName = (stack)=>{
    var _a, _b;
    if (!stack) return void 0;
    const traceLines = stack.split("\n");
    const apiSetStateLineIndex = traceLines.findIndex((traceLine)=>traceLine.includes("api.setState"));
    if (apiSetStateLineIndex < 0) return void 0;
    const callerLine = ((_a = traceLines[apiSetStateLineIndex + 1]) == null ? void 0 : _a.trim()) || "";
    return (_b = /.+ (.+) .+/.exec(callerLine)) == null ? void 0 : _b[1];
};
const devtoolsImpl = (fn, devtoolsOptions = {})=>(set, get, api)=>{
        const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
        let extensionConnector;
        try {
            extensionConnector = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (e) {}
        if (!extensionConnector) {
            return fn(set, get, api);
        }
        const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
        let isRecording = true;
        api.setState = (state, replace, nameOrAction)=>{
            const r = set(state, replace);
            if (!isRecording) return r;
            const action = nameOrAction === void 0 ? {
                type: anonymousActionType || findCallerName(new Error().stack) || "anonymous"
            } : typeof nameOrAction === "string" ? {
                type: nameOrAction
            } : nameOrAction;
            if (store === void 0) {
                connection == null ? void 0 : connection.send(action, get());
                return r;
            }
            connection == null ? void 0 : connection.send({
                ...action,
                type: `${store}/${action.type}`
            }, {
                ...getTrackedConnectionState(options.name),
                [store]: api.getState()
            });
            return r;
        };
        api.devtools = {
            cleanup: ()=>{
                if (connection && typeof connection.unsubscribe === "function") {
                    connection.unsubscribe();
                }
                removeStoreFromTrackedConnections(options.name, store);
            }
        };
        const setStateFromDevtools = (...a)=>{
            const originalIsRecording = isRecording;
            isRecording = false;
            set(...a);
            isRecording = originalIsRecording;
        };
        const initialState = fn(api.setState, get, api);
        if (connectionInformation.type === "untracked") {
            connection == null ? void 0 : connection.init(initialState);
        } else {
            connectionInformation.stores[connectionInformation.store] = api;
            connection == null ? void 0 : connection.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2])=>[
                    key,
                    key === connectionInformation.store ? initialState : store2.getState()
                ])));
        }
        if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
            let didWarnAboutReservedActionType = false;
            const originalDispatch = api.dispatch;
            api.dispatch = (...args)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && args[0].type === "__setState" && !didWarnAboutReservedActionType) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    didWarnAboutReservedActionType = true;
                }
                originalDispatch(...args);
            };
        }
        connection.subscribe((message)=>{
            var _a;
            switch(message.type){
                case "ACTION":
                    if (typeof message.payload !== "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return;
                    }
                    return parseJsonThen(message.payload, (action)=>{
                        if (action.type === "__setState") {
                            if (store === void 0) {
                                setStateFromDevtools(action.state);
                                return;
                            }
                            if (Object.keys(action.state).length !== 1) {
                                console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            }
                            const stateFromDevtools = action.state[store];
                            if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                                return;
                            }
                            if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                                setStateFromDevtools(stateFromDevtools);
                            }
                            return;
                        }
                        if (!api.dispatchFromDevtools) return;
                        if (typeof api.dispatch !== "function") return;
                        api.dispatch(action);
                    });
                case "DISPATCH":
                    switch(message.payload.type){
                        case "RESET":
                            setStateFromDevtools(initialState);
                            if (store === void 0) {
                                return connection == null ? void 0 : connection.init(api.getState());
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "COMMIT":
                            if (store === void 0) {
                                connection == null ? void 0 : connection.init(api.getState());
                                return;
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "ROLLBACK":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    connection == null ? void 0 : connection.init(api.getState());
                                    return;
                                }
                                setStateFromDevtools(state[store]);
                                connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    return;
                                }
                                if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                                    setStateFromDevtools(state[store]);
                                }
                            });
                        case "IMPORT_STATE":
                            {
                                const { nextLiftedState } = message.payload;
                                const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
                                if (!lastComputedState) return;
                                if (store === void 0) {
                                    setStateFromDevtools(lastComputedState);
                                } else {
                                    setStateFromDevtools(lastComputedState[store]);
                                }
                                connection == null ? void 0 : connection.send(null, // FIXME no-any
                                nextLiftedState);
                                return;
                            }
                        case "PAUSE_RECORDING":
                            return isRecording = !isRecording;
                    }
                    return;
            }
        });
        return initialState;
    };
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, fn)=>{
    let parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e);
    }
    if (parsed !== void 0) fn(parsed);
};
const subscribeWithSelectorImpl = (fn)=>(set, get, api)=>{
        const origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options)=>{
            let listener = selector;
            if (optListener) {
                const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
                let currentSlice = selector(api.getState());
                listener = (state)=>{
                    const nextSlice = selector(state);
                    if (!equalityFn(currentSlice, nextSlice)) {
                        const previousSlice = currentSlice;
                        optListener(currentSlice = nextSlice, previousSlice);
                    }
                };
                if (options == null ? void 0 : options.fireImmediately) {
                    optListener(currentSlice, currentSlice);
                }
            }
            return origSubscribe(listener);
        };
        const initialState = fn(set, get, api);
        return initialState;
    };
const subscribeWithSelector = subscribeWithSelectorImpl;
function combine(initialState, create) {
    return (...args)=>Object.assign({}, initialState, create(...args));
}
function createJSONStorage(getStorage, options) {
    let storage;
    try {
        storage = getStorage();
    } catch (e) {
        return;
    }
    const persistStorage = {
        getItem: (name)=>{
            var _a;
            const parse = (str2)=>{
                if (str2 === null) {
                    return null;
                }
                return JSON.parse(str2, options == null ? void 0 : options.reviver);
            };
            const str = (_a = storage.getItem(name)) != null ? _a : null;
            if (str instanceof Promise) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (name, newValue)=>storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
        removeItem: (name)=>storage.removeItem(name)
    };
    return persistStorage;
}
const toThenable = (fn)=>(input)=>{
        try {
            const result = fn(input);
            if (result instanceof Promise) {
                return result;
            }
            return {
                then (onFulfilled) {
                    return toThenable(onFulfilled)(result);
                },
                catch (_onRejected) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then (_onFulfilled) {
                    return this;
                },
                catch (onRejected) {
                    return toThenable(onRejected)(e);
                }
            };
        }
    };
const persistImpl = (config, baseOptions)=>(set, get, api)=>{
        let options = {
            storage: createJSONStorage(()=>localStorage),
            partialize: (state)=>state,
            version: 0,
            merge: (persistedState, currentState)=>({
                    ...currentState,
                    ...persistedState
                }),
            ...baseOptions
        };
        let hasHydrated = false;
        const hydrationListeners = /* @__PURE__ */ new Set();
        const finishHydrationListeners = /* @__PURE__ */ new Set();
        let storage = options.storage;
        if (!storage) {
            return config((...args)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
                set(...args);
            }, get, api);
        }
        const setItem = ()=>{
            const state = options.partialize({
                ...get()
            });
            return storage.setItem(options.name, {
                state,
                version: options.version
            });
        };
        const savedSetState = api.setState;
        api.setState = (state, replace)=>{
            savedSetState(state, replace);
            return setItem();
        };
        const configResult = config((...args)=>{
            set(...args);
            return setItem();
        }, get, api);
        api.getInitialState = ()=>configResult;
        let stateFromStorage;
        const hydrate = ()=>{
            var _a, _b;
            if (!storage) return;
            hasHydrated = false;
            hydrationListeners.forEach((cb)=>{
                var _a2;
                return cb((_a2 = get()) != null ? _a2 : configResult);
            });
            const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
            return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue)=>{
                if (deserializedStorageValue) {
                    if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                        if (options.migrate) {
                            const migration = options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
                            if (migration instanceof Promise) {
                                return migration.then((result)=>[
                                        true,
                                        result
                                    ]);
                            }
                            return [
                                true,
                                migration
                            ];
                        }
                        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
                    } else {
                        return [
                            false,
                            deserializedStorageValue.state
                        ];
                    }
                }
                return [
                    false,
                    void 0
                ];
            }).then((migrationResult)=>{
                var _a2;
                const [migrated, migratedState] = migrationResult;
                stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
                set(stateFromStorage, true);
                if (migrated) {
                    return setItem();
                }
            }).then(()=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
                stateFromStorage = get();
                hasHydrated = true;
                finishHydrationListeners.forEach((cb)=>cb(stateFromStorage));
            }).catch((e)=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
            });
        };
        api.persist = {
            setOptions: (newOptions)=>{
                options = {
                    ...options,
                    ...newOptions
                };
                if (newOptions.storage) {
                    storage = newOptions.storage;
                }
            },
            clearStorage: ()=>{
                storage == null ? void 0 : storage.removeItem(options.name);
            },
            getOptions: ()=>options,
            rehydrate: ()=>hydrate(),
            hasHydrated: ()=>hasHydrated,
            onHydrate: (cb)=>{
                hydrationListeners.add(cb);
                return ()=>{
                    hydrationListeners.delete(cb);
                };
            },
            onFinishHydration: (cb)=>{
                finishHydrationListeners.add(cb);
                return ()=>{
                    finishHydrationListeners.delete(cb);
                };
            }
        };
        if (!options.skipHydration) {
            hydrate();
        }
        return stateFromStorage || configResult;
    };
const persist = persistImpl;
;
}),
]);

//# sourceMappingURL=_55aad6a0._.js.map