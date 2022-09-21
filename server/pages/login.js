"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ RUNNING_ENV),
/* harmony export */   "Q": () => (/* binding */ API_ENDPOINT)
/* harmony export */ });
const RUNNING_ENV = "production" || 0;
const API_ENDPOINT_BY_RUNNING_ENV = {
    local: "http://localhost:8090/api",
    local_dev_api: "https://dev-api.grownbetter.com/api",
    development: "https://dev-api.grownbetter.com/api",
    test: "https://test-api.grownbetter.com/api",
    stage: "https://stage-api.grownbetter.com/api",
    production: "https://api.grownbetter.com/api"
};
const API_ENDPOINT = API_ENDPOINT_BY_RUNNING_ENV[RUNNING_ENV];


/***/ }),

/***/ 2248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_account_page_LoginPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_account_page_LoginPage__WEBPACK_IMPORTED_MODULE_0__]);
src_account_page_LoginPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_account_page_LoginPage__WEBPACK_IMPORTED_MODULE_0__/* .LoginPage */ .X);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* reexport */ KakaoLoginButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./constants/App.tsx
var App = __webpack_require__(3805);
;// CONCATENATED MODULE: ./src/account/component/KakaoLoginButton/useKakaoLoginButton.ts

function useKakaoLoginButton() {
    const loginUrl = `${App/* INIT_KAKAO_SDK.url */.xl.url}?client_id=${App/* INIT_KAKAO_SDK.client_id */.xl.client_id}&redirect_uri=${App/* INIT_KAKAO_SDK.redirect_uri */.xl.redirect_uri}&response_type=${App/* INIT_KAKAO_SDK.response_type */.xl.response_type}`;
    return {
        loginUrl
    };
}

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/common/component/Spacing/index.ts + 1 modules
var Spacing = __webpack_require__(9461);
// EXTERNAL MODULE: ./src/common/component/AmplitudeClickedEvent/index.ts + 1 modules
var AmplitudeClickedEvent = __webpack_require__(6145);
;// CONCATENATED MODULE: ./src/account/component/KakaoLoginButton/KakaoLoginButton.tsx








const KakaoLoginButton = ()=>{
    const { loginUrl  } = useKakaoLoginButton();
    return /*#__PURE__*/ jsx_runtime_.jsx(AmplitudeClickedEvent/* AmplitudeClickedEvent */.P, {
        event: 'clickLogin',
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: loginUrl,
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(KakaoButton, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(KakaoLogoContainer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/images/s_images/icon_kakao.png",
                                layout: "fixed",
                                width: 32,
                                height: 30,
                                alt: "kakao login icon"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                            width: 4
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LoginTitle, {
                            children: "카카오 아이디로 로그인"
                        })
                    ]
                })
            })
        })
    });
};
const KakaoLogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-431364db-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const KakaoButton = external_styled_components_default().div.withConfig({
    componentId: "sc-431364db-1"
})`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  height: 50px;
  background-color: #f9e000;
`;
const LoginTitle = external_styled_components_default().p.withConfig({
    componentId: "sc-431364db-2"
})`
  font-size: 14px;
  line-height: 45px;
  text-align: center;
`;

;// CONCATENATED MODULE: ./src/account/component/KakaoLoginButton/index.ts



/***/ }),

/***/ 4658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ KakaoLogoutButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./constants/App.tsx
var App = __webpack_require__(3805);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/account/component/KakoLogoutButton/useKakaoLogoutButton.ts



const logoutUrl = `${App/* INIT_KAKAO_SDK.logout_uri */.xl.logout_uri}?client_id=${App/* INIT_KAKAO_SDK.client_id */.xl.client_id}&logout_redirect_uri=${App/* INIT_KAKAO_SDK.redirect_uri */.xl.redirect_uri}/login&state=456`;
const useKakaoLogoutButton = ()=>{
    const { 0: logoutState , 1: setLogoutState  } = (0,external_react_.useState)(false);
    const { replace  } = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const logout = localStorage.getItem("logout_state");
        setLogoutState(!!logout);
    }, [
        logoutState
    ]);
    const onClick = ()=>{
        if (logoutState) return;
        localStorage.setItem("logout_state", "true");
        replace(logoutUrl);
    };
    return {
        logoutState,
        onClick
    };
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/account/component/KakoLogoutButton/KakaoLogoutButton.tsx




const KakaoLogoutButton = ()=>{
    const { logoutState , onClick  } = useKakaoLogoutButton();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !logoutState && /*#__PURE__*/ jsx_runtime_.jsx(KakaoLogoContainer, {
            onClick: onClick,
            children: /*#__PURE__*/ jsx_runtime_.jsx(LogoutTitle, {
                children: " 다른 카카오 계정으로 로그인 "
            })
        })
    });
};
const KakaoLogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-422d6d75-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoutTitle = external_styled_components_default().p.withConfig({
    componentId: "sc-422d6d75-1"
})`
  color: gray;
  margin-bottom: 30px;
  line-height: 30px;
  font-size: 14px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.4);
  cursor: pointer;
`;

;// CONCATENATED MODULE: ./src/account/component/KakoLogoutButton/index.ts



/***/ }),

/***/ 169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2747);
/* harmony import */ var _common_hook_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var _component_KakaoLoginButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4112);
/* harmony import */ var _component_KakoLogoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4658);
/* harmony import */ var _common_component_Spacing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9461);
/* harmony import */ var _common_hook_useQueryString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout__WEBPACK_IMPORTED_MODULE_4__]);
_containers_layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const LoginPage = ()=>{
    const { width  } = (0,_common_hook_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__/* .useWindowSize */ .i)();
    const shouldTransparentHeader = width > 1024;
    const { next  } = (0,_common_hook_useQueryString__WEBPACK_IMPORTED_MODULE_9__/* .useQueryString */ .N)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Save next page for redirecrt after successful login
        if (next) {
            localStorage.setItem("next", next);
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        isTransparent: shouldTransparentHeader,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginSection, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(KakaoLoginContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginCaption, {
                                children: [
                                    "우리는",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "개인과 회사의",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                        children: [
                                            "놀라운 성장을",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "실현합니다."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_8__/* .Spacing */ .K, {
                                height: 20
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_KakaoLoginButton__WEBPACK_IMPORTED_MODULE_6__/* .KakaoLoginButton */ .C, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_8__/* .Spacing */ .K, {
                                height: 20
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_KakoLogoutButton__WEBPACK_IMPORTED_MODULE_7__/* .KakaoLogoutButton */ .I, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginBackgroundImageContainer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            src: "/images/p_images/bg_login.png",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center",
                            alt: "login background image"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_8__/* .Spacing */ .K, {
                height: -120
            })
        ]
    });
};
const LoginSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
    componentId: "sc-472c752b-0"
})`
  min-height: 850px;
  width: 100%;
  display: flex;
  @media all and (max-width: 1025px) {
    flex-direction: column;
  }
`;
const KakaoLoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-472c752b-1"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media all and (max-width: 1025px) {
    width: 100%;
  }
`;
const LoginBackgroundImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-472c752b-2"
})`
  position: relative;
  width: 50%;
  min-height: 100vh;
  width: 50%;
  @media all and (max-width: 1025px) {
    width: 100%;
  }
`;
const LoginCaption = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-472c752b-3"
})`
  width: fit-content;
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  font-size: 33px;
  line-height: 43px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* reexport safe */ _LoginPage__WEBPACK_IMPORTED_MODULE_0__.X)
/* harmony export */ });
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginPage__WEBPACK_IMPORTED_MODULE_0__]);
_LoginPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.Cv),
/* harmony export */   "Q": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.QP)
/* harmony export */ });
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7738);



/***/ }),

/***/ 8765:
/***/ ((module) => {

module.exports = require("@datadog/browser-rum");

/***/ }),

/***/ 1658:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 6174:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 6080:
/***/ ((module) => {

module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 1352:
/***/ ((module) => {

module.exports = require("amplitude-js");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 5575:
/***/ ((module) => {

module.exports = require("moment/min/locales");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7935:
/***/ ((module) => {

module.exports = require("react-gtm-module");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7664:
/***/ ((module) => {

module.exports = require("reduxsauce");

/***/ }),

/***/ 8466:
/***/ ((module) => {

module.exports = require("seamless-immutable");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,485,738,448,901,805,460], () => (__webpack_exec__(2248)));
module.exports = __webpack_exports__;

})();