"use strict";
exports.id = 901;
exports.ids = [901];
exports.modules = {

/***/ 2901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sk": () => (/* binding */ isServer),
/* harmony export */   "A0": () => (/* binding */ getSchedulesConvertStr),
/* harmony export */   "Nh": () => (/* binding */ convertCurrency)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_min_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5575);
/* harmony import */ var moment_min_locales__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_min_locales__WEBPACK_IMPORTED_MODULE_1__);


// Set moment locale
moment__WEBPACK_IMPORTED_MODULE_0___default().locale("ko");
const isServer = "undefined" === "undefined";
const getSchedulesConvertStr = (schedules)=>{
    let str = "";
    if (Array.isArray(schedules)) {
        const values = schedules.map((item)=>{
            return (item === null || item === void 0 ? void 0 : item.start_date) ? moment__WEBPACK_IMPORTED_MODULE_0___default()(item.start_date).format("MM.DD(ddd)") : null;
        });
        str = values.filter((i)=>i !== null
        ).join(", ");
    }
    return str;
};
const convertCurrency = (value, isDecimal)=>{
    const int = value.toString().split(".")[0];
    const decimal = value.toString().split(".")[1] || null;
    let newValue = "";
    const arrayValues = int.toString().split("");
    arrayValues.forEach((i, index)=>{
        newValue += arrayValues[arrayValues.length - (index + 1)];
        if ((index + 1) % 3 === 0 && index < arrayValues.length - 1) {
            newValue += ",";
        }
    });
    newValue = newValue.split("").reverse().join("");
    newValue = decimal && !isDecimal ? newValue + "." + decimal : newValue;
    return newValue;
};


/***/ })

};
;