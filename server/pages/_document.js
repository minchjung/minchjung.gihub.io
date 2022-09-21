"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./src/common/constant/index.ts
var constant = __webpack_require__(3946);
;// CONCATENATED MODULE: ./src/common/component/FeatureFlag/useFeatureFlag.ts

const useFeatureFlag = (availableOn)=>{
    const isAvailable = availableOn.includes(constant/* RUNNING_ENV */.C);
    return {
        isAvailable
    };
};

;// CONCATENATED MODULE: ./src/common/component/FeatureFlag/FeatureFlag.tsx


const developmentEnvironment = [
    'development',
    'local',
    'local_dev_api'
];
const FeatureFlag = ({ availableOn =developmentEnvironment , children  })=>{
    const { isAvailable  } = useFeatureFlag(availableOn);
    return isAvailable ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }) : null;
};

;// CONCATENATED MODULE: ./src/common/component/FeatureFlag/index.ts


;// CONCATENATED MODULE: ./pages/_document.tsx




class MyDocument extends next_document["default"] {
    static async getInitialProps(ctx) {
        const sheet = new external_styled_components_.ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ jsx_runtime_.jsx(App, {
                                ...props
                            }))
                    ,
                    enhanceComponent: (Component)=>Component
                })
            ;
            const initialProps = await next_document["default"].getInitialProps(ctx);
            return {
                ...initialProps,
                styles: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        initialProps.styles,
                        sheet.getStyleElement()
                    ]
                })
            };
        } finally{
            sheet.seal();
        }
    }
    beusableScript() {
        return {
            __html: `(function(w, d, a){
          w.__beusablerumclient__ = {
              load : function(src){
                  var b = d.createElement("script");
                  b.src = src; b.async=true; b.type = "text/javascript";
                  d.getElementsByTagName("head")[0].appendChild(b);
              }
          };w.__beusablerumclient__.load(a);
      })(window, document, "//rum.beusable.net/script/b211007e135533u708/b775b0771f");
      `
        };
    }
    disableReactDevtoolScript() {
        return {
            __html: `window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}`
        };
    }
    channerTalkScript() {
        return {
            __html: ` (function() {
        var w = window;
        if (w.ChannelIO) {
        return (window.console.log || function(){})('ChannelIO script included twice.');
        }
        var ch = function() {
        ch.c(arguments);
        };
        ch.q = [];
        ch.c = function(args) {
        ch.q.push(args);
        };
        w.ChannelIO = ch;
        function l() {
        if (w.ChannelIOInitialized) {
            return;
        }
        w.ChannelIOInitialized = true;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
        }
        if (document.readyState === 'complete') {
        l();
        } else if (window.attachEvent) {
        window.attachEvent('onload', l);
        } else {
        window.addEventListener('DOMContentLoaded', l, false);
        window.addEventListener('load', l, false);
        }
    })();
`
        };
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "ko",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "facebook-domain-verification",
                            content: "f87pai5dkrl75rk4c8hoz67egubpdl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "author",
                            content: "그로우앤베터"
                        }, "author")
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FeatureFlag, {
                    availableOn: [
                        "production"
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        dangerouslySetInnerHTML: this.disableReactDevtoolScript()
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    dangerouslySetInnerHTML: this.beusableScript()
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    dangerouslySetInnerHTML: this.channerTalkScript()
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (MyDocument);


/***/ }),

/***/ 3946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.Cv),
/* harmony export */   "Q": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.QP)
/* harmony export */ });
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7738);



/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,859,738], () => (__webpack_exec__(7540)));
module.exports = __webpack_exports__;

})();