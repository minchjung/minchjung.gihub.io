"use strict";
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 1936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* reexport */ OutlinedButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/common/component/OutlinedButton/OutlinedButton.tsx


const staticStyle = {
    borderColor: "#CCCCCC",
    color: "#2b2b2b",
    "&:hover": {
        backgroundColor: "#EEEEEE",
        borderColor: "#CCCCCC"
    },
    margin: "3px"
};
const DisabledStyle = {
    cursor: "unset",
    borderColor: "#D7D7D7",
    color: "#C7C7C7",
    "&:hover": {
        borderColor: "#D7D7D7",
        backgroundColor: "#ffffff"
    }
};
const OutlinedButton = ({ children , onClick , startIcon , style , disabled , fullDisabled , btnName ,  })=>{
    const _fullDisabled = !(fullDisabled === undefined || fullDisabled === null);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        name: btnName,
        variant: "outlined",
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

;// CONCATENATED MODULE: ./src/common/component/OutlinedButton/index.tsx



/***/ })

};
;