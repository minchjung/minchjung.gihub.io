"use strict";
exports.id = 655;
exports.ids = [655];
exports.modules = {

/***/ 8451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _useDownloadAttach__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "j": () => (/* reexport safe */ _useDownloadBySchedule__WEBPACK_IMPORTED_MODULE_1__.j)
/* harmony export */ });
/* harmony import */ var _useDownloadAttach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6506);
/* harmony import */ var _useDownloadBySchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useDownloadAttach__WEBPACK_IMPORTED_MODULE_0__, _useDownloadBySchedule__WEBPACK_IMPORTED_MODULE_1__]);
([_useDownloadAttach__WEBPACK_IMPORTED_MODULE_0__, _useDownloadBySchedule__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useDownloadAttachSWR)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useDownloadAttachSWR = (videoId)=>{
    const { error , download , mutate  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: `${src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_ATTACHMENT */ .bt}/download/video/${videoId}`,
        dataName: "download",
        withToken: true
    });
    const isValid = !!(download && (download === null || download === void 0 ? void 0 : download.length));
    return {
        error,
        isValid,
        download,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useDownloadBySchedule)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useDownloadBySchedule = (productId, duration)=>{
    const { error , attachments , mutate  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: `${src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_ATTACHMENT */ .bt}/download/product?productId=${productId}&duration=${duration}`,
        dataName: 'attachments',
        withToken: true
    });
    const isValid = !!(attachments && (attachments === null || attachments === void 0 ? void 0 : attachments.length));
    return {
        error,
        isValid,
        attachments,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ ColorButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/common/component/ColorButton/ColorButton.tsx


const staticStyle = {
    backgroundColor: "#00BB22",
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "#7ae57e"
    },
    margin: "3px"
};
const DisabledStyle = {
    cursor: "unset",
    backgroundColor: "#E7E7E7",
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "#E7E7E7"
    }
};
const ColorButton = ({ children , onClick , startIcon , style , disabled , fullDisabled , btnName  })=>{
    const _fullDisabled = !(fullDisabled === undefined || fullDisabled === null);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        name: btnName,
        disableElevation: true,
        variant: "contained",
        onClick: onClick,
        color: "primary",
        sx: {
            ...staticStyle,
            ...style,
            ...disabled ? DisabledStyle : {}
        },
        startIcon: startIcon,
        disabled: _fullDisabled,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/common/component/ColorButton/index.tsx



/***/ }),

/***/ 1240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ ProgramDetialContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
;// CONCATENATED MODULE: ./src/mypage/components/ProgramDetialContainer/ProgramDetialContainer.tsx



const ProgramDetialContainer = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(DetialContainer, {
        children: children
    });
};
const DetialContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-4702d39d-0"
})`
  width: 100%;
  padding: 0 51px;
  margin-top: 50px;
  border-top: 1px solid #e7e7e7;

  @media ${style/* device.tablet */.Uh.tablet} {
    padding: 0 20px;
    margin-top: 30px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin-top: 19px;
  }
`;

;// CONCATENATED MODULE: ./src/mypage/components/ProgramDetialContainer/index.ts



/***/ })

};
;