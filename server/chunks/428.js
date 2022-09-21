"use strict";
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 8948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* reexport */ Alertbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/common/component/AlertBar/AlertBar.tsx


const defaultStyle = {
    width: "350px",
    height: "50px",
    fontSize: "14px"
};
const Alertbar = ({ alert , onClose , styleOption , duration , anchorOption  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: alert.on && /*#__PURE__*/ jsx_runtime_.jsx(material_.Snackbar, {
            anchorOrigin: anchorOption !== null && anchorOption !== void 0 ? anchorOption : {
                vertical: "bottom",
                horizontal: "center"
            },
            open: alert.on,
            autoHideDuration: duration !== null && duration !== void 0 ? duration : 3500,
            onClose: onClose,
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Alert, {
                variant: "standard",
                sx: styleOption !== null && styleOption !== void 0 ? styleOption : defaultStyle,
                severity: alert.error ? "warning" : "success",
                onClose: onClose,
                children: alert.message
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/common/component/AlertBar/index.ts



/***/ }),

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useAlertbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useAlertbar = ()=>{
    const { 0: alert , 1: setAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        on: false,
        message: "",
        error: true
    });
    const onClose = ()=>{
        setAlert({
            on: false,
            message: "",
            error: true
        });
    };
    const setAlertAll = (newALert)=>{
        setAlert({
            ...newALert
        });
    };
    return {
        alert,
        setAlert,
        setAlertAll,
        onClose
    };
};


/***/ })

};
;