"use strict";
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 2747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ AmplitudeClickedEvent)
});

// EXTERNAL MODULE: ./src/common/hook/useAmplitude/index.ts + 1 modules
var useAmplitude = __webpack_require__(8755);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/component/AmplitudeClickedEvent/AmplitudeClickedEvent.tsx


const AmplitudeClickedEvent = ({ event , data , children  })=>{
    const { logEvent  } = (0,useAmplitude/* useAmplitude */.i)();
    const handleClick = ()=>{
        var _props, ref;
        (ref = (_props = children.props).onClick) === null || ref === void 0 ? void 0 : ref.call(_props);
        logEvent(event, data);
    };
    return /*#__PURE__*/ external_react_default().cloneElement(children, {
        onClick: handleClick
    });
};

;// CONCATENATED MODULE: ./src/common/component/AmplitudeClickedEvent/index.ts



/***/ }),

/***/ 9461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* reexport */ Spacing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/common/component/Spacing/Spacing.tsx



const Spacing = ({ width , height , isMargin , unit ='px' , backgroundColor  })=>{
    const shouldUseMargin = isMargin || !!width && width < 0 || !!height && height < 0;
    return /*#__PURE__*/ jsx_runtime_.jsx(SpacingBox, {
        width: width,
        height: height,
        isMargin: shouldUseMargin,
        unit: unit,
        backgroundColor: backgroundColor
    });
};
const SpacingBox = external_styled_components_default().div.withConfig({
    componentId: "sc-e539a9c9-0"
})`
  ${({ width , isMargin , unit  })=>width && (isMargin ? `margin-right: ${width}${unit};` : `width: ${width}${unit};`)
}
  ${({ height , isMargin , unit  })=>height && (isMargin ? `margin-top: ${height}${unit};` : `height: ${height}${unit};`)
}
  ${({ backgroundColor  })=>backgroundColor ? `background-color: ${backgroundColor}` : `background-color: inherit`
}
`;

;// CONCATENATED MODULE: ./src/common/component/Spacing/index.ts



/***/ }),

/***/ 8755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ useAmplitude)
});

// EXTERNAL MODULE: external "amplitude-js"
var external_amplitude_js_ = __webpack_require__(1352);
var external_amplitude_js_default = /*#__PURE__*/__webpack_require__.n(external_amplitude_js_);
// EXTERNAL MODULE: ./src/common/hook/useDev/index.ts + 1 modules
var useDev = __webpack_require__(572);
;// CONCATENATED MODULE: ./src/common/hook/useAmplitude/useAmplitude.ts


const useAmplitude = ()=>{
    const dev = (0,useDev/* useDev */.b)();
    const logEvent = (event, data)=>{
        if (dev) return;
        external_amplitude_js_default().getInstance().logEvent(event, data);
    };
    return {
        logEvent
    };
};

;// CONCATENATED MODULE: ./src/common/hook/useAmplitude/index.ts



/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ useDev)
});

// EXTERNAL MODULE: ./src/common/constant/index.ts
var constant = __webpack_require__(3946);
;// CONCATENATED MODULE: ./src/common/hook/useDev/useDev.ts

const useDev = ()=>constant/* RUNNING_ENV */.C !== 'production'
;

;// CONCATENATED MODULE: ./src/common/hook/useDev/index.ts



/***/ }),

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ useQueryString)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(3477);
;// CONCATENATED MODULE: ./src/common/hook/useQueryString/useQueryString.ts


const useQueryString = ()=>{
    const { asPath  } = (0,router_.useRouter)();
    const rawQuery = asPath.split('?')[1];
    return external_querystring_.parse(rawQuery);
};

;// CONCATENATED MODULE: ./src/common/hook/useQueryString/index.ts



/***/ })

};
;