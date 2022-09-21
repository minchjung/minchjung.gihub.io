"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 7760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ WysiwygEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);




const Editor = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../containers/program/components/wysiwygeditor/WysiwygEditor.tsx -> " + "./TuiEditorWrapper"
        ]
    },
    ssr: false
});
function WysiwygEditor({ introduction_editor  }) {
    const { 0: introduction , 1: setIntroduction  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(introduction_editor);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        introduction_editor && setIntroduction(introduction_editor);
    }, [
        introduction_editor
    ]);
    const EditView = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
            initialValue: introduction
        });
    }, [
        introduction
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "pro_edit",
        id: "pro_edit_id",
        children: EditView
    });
}


/***/ }),

/***/ 1773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ AmplitudeViewdEvent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/common/hook/useAmplitude/index.ts + 1 modules
var useAmplitude = __webpack_require__(8755);
// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/component/AmplitudeViewdEvent/AmplitudeViewdEvent.tsx





const useAmplitudeViewdEvent = ({ event , data  })=>{
    const { logEvent  } = (0,useAmplitude/* useAmplitude */.i)();
    const { asPath  } = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        logEvent(event, data);
    }, [
        asPath
    ]);
};
const AmplitudeViewdEvent = (0,bind/* bind */.a)(useAmplitudeViewdEvent, ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {})
);

;// CONCATENATED MODULE: ./src/common/component/AmplitudeViewdEvent/index.ts



/***/ })

};
;