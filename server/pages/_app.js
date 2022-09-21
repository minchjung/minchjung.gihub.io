"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ container)
});

// EXTERNAL MODULE: ./src/common/constant/index.ts
var constant = __webpack_require__(3946);
;// CONCATENATED MODULE: ./src/common/third-party/channelTalk/ChannelTalkService.ts

class ChannelTalkService {
    constructor(pluginKey){
        this.pluginKey = pluginKey;
    }
    getSdk() {
        if (false) {}
        const channelIOSdk = window.ChannelIO;
        if (!channelIOSdk) {
            return new Promise((resolve)=>{
                setTimeout(()=>resolve(this.getSdk())
                , 500);
            });
        }
        return Promise.resolve(channelIOSdk);
    }
    initialize() {
        this.boot();
    }
    identify(memberId, profile) {
        if (memberId) {
            this.memberId = memberId;
            this.profile = profile;
        }
        this.boot();
    }
    boot() {
        const bootOption = {
            pluginKey: this.pluginKey
        };
        // Pass user data for production env & when memberId exists
        // NOTE: memberId 에 절대 null 또는 String(null) 을 넣지 마세요,
        // 로그인 하지 않은 사용자끼리 모든 상담이 다 보이게 됩니다!
        if (constant/* RUNNING_ENV */.C === 'production' && this.memberId) {
            bootOption['memberId'] = this.memberId;
            bootOption['profile'] = this.profile;
        }
        // Cypress 가 로드 된 경우; E2E 테스트의 경우 팝업을 사용하지 않는다.
        if (window.Cypress) {
            console.log('Channel IO popup will be hidden when running by Cypress.');
            bootOption['hidePopup'] = true;
        }
        this.getSdk().then((channelIo)=>{
            channelIo('boot', bootOption);
        });
    }
    hideLauncher() {
        this.getSdk().then((channelIo)=>channelIo('hideChannelButton')
        );
    }
    showLauncher() {
        this.getSdk().then((channelIo)=>channelIo('showChannelButton')
        );
    }
}

;// CONCATENATED MODULE: external "typescript-memoize"
const external_typescript_memoize_namespaceObject = require("typescript-memoize");
;// CONCATENATED MODULE: ./container.ts
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ("value" in desc || desc.initializer) {
        desc.writable = true;
    }
    desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
var _class, _dec;


let Container = ((_class = class Container {
    get channelTalkService() {
        return new ChannelTalkService('a1092da8-4093-4b3d-a90e-097f72edb7c9');
    }
}) || _class, _dec = (0,external_typescript_memoize_namespaceObject.Memoize)(), _applyDecoratedDescriptor(_class.prototype, "channelTalkService", [
    _dec
], Object.getOwnPropertyDescriptor(_class.prototype, "channelTalkService"), _class.prototype), _class);
const container = new Container();


/***/ }),

/***/ 3965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9496);
/* harmony import */ var _reduxs_ProgramRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1623);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_3__]);
_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const commonPaths = [
    "/",
    "/login",
    "/auth"
];
function RootContainer({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    // const [program, setProgram] = useState("");
    const { fetching , contents  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.auth
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        dispatch(_reduxs_ProgramRedux__WEBPACK_IMPORTED_MODULE_4__/* ["default"].handleGetProgramListRequest */ .ZP.handleGetProgramListRequest("programList"));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const token = localStorage.getItem("access_token");
        if (token) {
            dispatch(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_3__/* ["default"].handleActionLoadingRequest */ .ZP.handleActionLoadingRequest("userInfo"));
        }
    }, [
        router.pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const token = localStorage.getItem("access_token");
        const isPathLogin = commonPaths.includes(router.pathname);
        if (!fetching["userInfo"] && token && contents.userInfo || contents.login) {
            if (!fetching["userInfo"] && token && contents.userInfo || contents.login) {
                if (isPathLogin) {
                    // TODO: Remove this block; which left for legacy support
                    if (localStorage.getItem("program")) {
                        const rawSecret = localStorage.getItem("secret");
                        const secret = rawSecret ? "?secret=" + rawSecret : "";
                        const url = `/program/${localStorage.getItem("id")}/product${secret}`;
                        router.push(url);
                        localStorage.removeItem("program");
                        localStorage.removeItem("id");
                    } else {
                        router.push("/");
                    }
                }
            }
        }
    }, [
        fetching,
        contents,
        router.pathname
    ]);
    return children;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _RootContainer__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _RootContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RootContainer__WEBPACK_IMPORTED_MODULE_0__]);
_RootContainer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reportWebVitals": () => (/* binding */ reportWebVitals),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reduxs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8396);
/* harmony import */ var _constants_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3805);
/* harmony import */ var _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8765);
/* harmony import */ var _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_datadog_browser_rum__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _containers_root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9796);
/* harmony import */ var src_common_context_CSMessengerProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(358);
/* harmony import */ var container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4050);
/* harmony import */ var src_common_context_LoginEventProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8963);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_context_AmplitudeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2276);
/* harmony import */ var _common_utill_etc_logMetric__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7267);
/* harmony import */ var relay_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3098);
/* harmony import */ var relay_hooks__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(relay_hooks__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _common_relay_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1204);
/* harmony import */ var _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxs_index__WEBPACK_IMPORTED_MODULE_5__, _containers_root__WEBPACK_IMPORTED_MODULE_8__, src_common_context_CSMessengerProvider__WEBPACK_IMPORTED_MODULE_9__, _common_utill_etc_logMetric__WEBPACK_IMPORTED_MODULE_14__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_17__]);
([_reduxs_index__WEBPACK_IMPORTED_MODULE_5__, _containers_root__WEBPACK_IMPORTED_MODULE_8__, src_common_context_CSMessengerProvider__WEBPACK_IMPORTED_MODULE_9__, _common_utill_etc_logMetric__WEBPACK_IMPORTED_MODULE_14__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






































const reportWebVitals = _common_utill_etc_logMetric__WEBPACK_IMPORTED_MODULE_14__/* .logMetric */ .H;
function Header() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "그로우앤베터 - 실전 중심 온라인 교육 서비스"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: "https://www.grownbetter.com"
            }, "canonical"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "manifest",
                href: "/site.webmanifest"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                httpEquiv: "Content-Security-Policy",
                content: "upgrade-insecure-requests"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }, "type"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: "그로우앤베터"
            }, "title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: "https://www.grownbetter.com/"
            }, "url"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                property: "og:description",
                content: "서비스를 좀 키워본 사람들에게 직접 배우는 실전 중심 스타트업 MBA - CX, 경영전략, 마케팅, PO, 신사업, 데이터분석"
            }, "description"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: "https://grownbetter-bi.s3.ap-northeast-2.amazonaws.com/1200800_BG1.png"
            }, "image")
        ]
    });
}
const privatePath = (/* unused pure expression or super */ null && ([
    "/program/[id]/product",
    "/my"
]));
const muiBreakPointTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.createTheme)({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1024,
            xl: 1536
        }
    }
});
function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const environment = (0,_common_relay_environment__WEBPACK_IMPORTED_MODULE_16__/* .useEnvironment */ .O)(pageProps.initialRecords);
    // FB pixel script
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9578, 23)).then((x)=>x.default
        ).then((ReactPixel)=>{
            ReactPixel.init(_constants_App__WEBPACK_IMPORTED_MODULE_6__/* .facebookPixelId */ .vl);
            ReactPixel.pageView();
            router.events.on("routeChangeComplete", ()=>{
                ReactPixel.pageView();
            });
        });
    }, [
        router.events
    ]);
    // GTM, Datadog RUM scripts
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        react_gtm_module__WEBPACK_IMPORTED_MODULE_4___default().initialize({
            gtmId: _constants_App__WEBPACK_IMPORTED_MODULE_6__/* .GTMID */ .cv
        });
        _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_7__.datadogRum.init({
            applicationId: "cfc3a97c-ee6d-4264-b335-1081282070c2",
            clientToken: "pub0ab99e2b03ef39808a57460d98ff472e",
            site: "datadoghq.com",
            service: "grownbetter",
            env: "production",
            // Specify a version number to identify the deployed version of your application in Datadog
            // version: '1.0.0',
            sampleRate: 100,
            premiumSampleRate: 100,
            trackInteractions: true,
            defaultPrivacyLevel: "mask-user-input"
        });
        _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_7__.datadogRum.startSessionReplayRecording();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(relay_hooks__WEBPACK_IMPORTED_MODULE_15__.RelayEnvironmentProvider, {
        environment: environment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_17__/* .AuthenticationProvider */ .i, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.ThemeProvider, {
                theme: muiBreakPointTheme,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_root__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_common_context_LoginEventProvider__WEBPACK_IMPORTED_MODULE_11__/* .LoginEventProvider */ .u, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_context_AmplitudeProvider__WEBPACK_IMPORTED_MODULE_13__/* .AmplitudeProvider */ .B, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_common_context_CSMessengerProvider__WEBPACK_IMPORTED_MODULE_9__/* .CSMessengerProvider */ .p, {
                            Service: container__WEBPACK_IMPORTED_MODULE_10__/* .container.channelTalkService */ .n.channelTalkService,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
        pageProps
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_reduxs_index__WEBPACK_IMPORTED_MODULE_5__/* .wrapper.withRedux */ .Y.withRedux(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QM": () => (/* binding */ MemberTypes),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "I6": () => (/* binding */ reducer)
/* harmony export */ });
/* unused harmony exports INITIAL_STATE, handleGetMemberDetailRequest, handleGetMemberDetailSuccess, handleGetMemberDetailFailure, handleUpdateMemberRequest, handleUpdateMemberSuccess, handleUpdateMemberFailure, handleUpdatePaymentStatusRequest, handleUpdatePaymentStatusSuccess, handleUpdatePaymentStatusFailure */
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7664);
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reduxsauce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8466);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_1__);


/* ------------- START: Initial State ------------- */ const INITIAL_STATE = seamless_immutable__WEBPACK_IMPORTED_MODULE_1___default()({
    fetching: {},
    contents: {},
    errors: {}
});
/* ------------- END: Initial State ------------- */ /* ------------- START: Types and Action Creators ------------- */ const { Types , Creators  } = (0,reduxsauce__WEBPACK_IMPORTED_MODULE_0__.createActions)({
    handleGetMemberDetailRequest: [
        "classify"
    ],
    handleGetMemberDetailSuccess: [
        "classify",
        "payload"
    ],
    handleGetMemberDetailFailure: [
        "classify",
        "error"
    ],
    handleUpdateMemberRequest: [
        "classify",
        "params",
        "handleSuccess"
    ],
    handleUpdateMemberSuccess: [
        "classify",
        "payload"
    ],
    handleUpdateMemberFailure: [
        "classify",
        "error"
    ],
    handleUpdatePaymentStatusRequest: [
        "classify",
        "params",
        "handleSuccess"
    ],
    handleUpdatePaymentStatusSuccess: [
        "classify",
        "payload"
    ],
    handleUpdatePaymentStatusFailure: [
        "classify",
        "error"
    ]
});
const MemberTypes = Types;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creators);
/* ------------- END: Types and Action Creators ------------- */ /* ------------- START: handleGetMember ------------- */ const handleGetMemberDetailRequest = (state, { classify  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true
        },
        contents: {
            ...state.contents,
            [classify]: null,
            login: true
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleGetMemberDetailSuccess = (state, { classify , payload  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: payload,
            login: true
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleGetMemberDetailFailure = (state, { classify , error  })=>{
    localStorage.removeItem("access_token");
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: null,
            login: false
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: handleGetMember ------------- */ /* ------------- START: handleUpdateMember ------------- */ const handleUpdateMemberRequest = (state, { classify , params  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true,
            params
        },
        contents: {
            ...state.contents,
            [classify]: null,
            login: true
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleUpdateMemberSuccess = (state, { classify , payload  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: payload,
            login: true
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleUpdateMemberFailure = (state, { classify , error  })=>{
    localStorage.removeItem("access_token");
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: null,
            login: false
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: handleUpdateMember ------------- */ /* ------------- START: handleUpdateMember ------------- */ const handleUpdatePaymentStatusRequest = (state, { classify , params  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true,
            params
        },
        contents: {
            ...state.contents,
            [classify]: null,
            login: true
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleUpdatePaymentStatusSuccess = (state, { classify , payload  })=>{
    // 결제 취소 중
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: payload,
            login: true
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleUpdatePaymentStatusFailure = (state, { classify , error  })=>{
    localStorage.removeItem("access_token");
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: null,
            login: false
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: handleUpdateMember ------------- */ /* ------------- START: Hookup Reducers To Types ------------- */ const reducer = (0,reduxsauce__WEBPACK_IMPORTED_MODULE_0__.createReducer)(INITIAL_STATE, {
    [Types.HANDLE_GET_MEMBER_DETAIL_REQUEST]: handleGetMemberDetailRequest,
    [Types.HANDLE_GET_MEMBER_DETAIL_SUCCESS]: handleGetMemberDetailSuccess,
    [Types.HANDLE_GET_MEMBER_DETAIL_FAILURE]: handleGetMemberDetailFailure,
    [Types.HANDLE_UPDATE_MEMBER_REQUEST]: handleUpdateMemberRequest,
    [Types.HANDLE_UPDATE_MEMBER_SUCCESS]: handleUpdateMemberSuccess,
    [Types.HANDLE_UPDATE_MEMBER_FAILURE]: handleUpdateMemberFailure,
    [Types.HANDLE_UPDATE_PAYMENT_STATUS_REQUEST]: handleUpdatePaymentStatusRequest,
    [Types.HANDLE_UPDATE_PAYMENT_STATUS_SUCCESS]: handleUpdatePaymentStatusSuccess,
    [Types.HANDLE_UPDATE_PAYMENT_STATUS_FAILURE]: handleUpdatePaymentStatusFailure
}); /* ------------- END: Hookup Reducers To Types ------------- */ 


/***/ }),

/***/ 8396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sagas_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1465);
/* harmony import */ var _AuthRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9496);
/* harmony import */ var _MemberRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6860);
/* harmony import */ var _ProductRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(936);
/* harmony import */ var _ProgramRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1623);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sagas_index__WEBPACK_IMPORTED_MODULE_3__, _AuthRedux__WEBPACK_IMPORTED_MODULE_4__]);
([_sagas_index__WEBPACK_IMPORTED_MODULE_3__, _AuthRedux__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    auth: _AuthRedux__WEBPACK_IMPORTED_MODULE_4__/* .reducer */ .I6,
    member: _MemberRedux__WEBPACK_IMPORTED_MODULE_5__/* .reducer */ .I6,
    program: _ProgramRedux__WEBPACK_IMPORTED_MODULE_7__/* .reducer */ .I6,
    product: _ProductRedux__WEBPACK_IMPORTED_MODULE_6__/* .reducer */ .I6
});
const composeEnhancers =  false || redux__WEBPACK_IMPORTED_MODULE_0__.compose;
const makeStore = ()=>{
    // 1: Create the middleware
    const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
    const enhancer = composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware));
    // 2: Add an extra parameter for applying middleware:
    const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, enhancer);
    // 3: Run your sagas on server
    sagaMiddleware.run(_sagas_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    // 4: now return the store:
    return store;
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {
    debug: "production" === 'development'
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "al": () => (/* binding */ getLoginKakao),
/* harmony export */   "T7": () => (/* binding */ handleActionLoading),
/* harmony export */   "Ot": () => (/* binding */ handleDeleteMember)
/* harmony export */ });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3673);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9496);
/* harmony import */ var _services_AuthAPIs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(325);
/* harmony import */ var _constants_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3805);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__]);
_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function* getLoginKakao({ classify , params  }) {
    try {
        const response = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_services_AuthAPIs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getLoginKakao */ .Z.getLoginKakao, params);
        if (response && response.status === _constants_App__WEBPACK_IMPORTED_MODULE_3__/* .SUCCESS */ .MR) {
            yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLoginKakaoSuccess */ .ZP.getLoginKakaoSuccess(classify, response.data));
        } else {
            yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLoginKakaoFailure */ .ZP.getLoginKakaoFailure(classify, response.data));
        }
    } catch (error) {
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLoginKakaoFailure */ .ZP.getLoginKakaoFailure(classify, error));
    }
}
function* handleActionLoading({ classify  }) {
    try {
        const response = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_services_AuthAPIs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].handleActionLoading */ .Z.handleActionLoading);
        if (response && response.status === _constants_App__WEBPACK_IMPORTED_MODULE_3__/* .SUCCESS */ .MR) {
            yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].handleActionLoadingSuccess */ .ZP.handleActionLoadingSuccess(classify, response.data));
        } else {
            yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].handleActionLoadingFailure */ .ZP.handleActionLoadingFailure(classify, response.data));
        }
    } catch (error) {
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].handleActionLoadingFailure */ .ZP.handleActionLoadingFailure(classify, error));
    }
}
function* handleDeleteMember({ classify , handleSuccess  }) {
    try {
        const response = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_services_AuthAPIs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].handleDeleteKakao */ .Z.handleDeleteKakao);
        if (response && response.status === _constants_App__WEBPACK_IMPORTED_MODULE_3__/* .SUCCESS */ .MR) {
            yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].handleDeleteMemberSuccess */ .ZP.handleDeleteMemberSuccess(classify, response.data));
            handleSuccess();
        } else {
            yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].handleDeleteMemberFailure */ .ZP.handleDeleteMemberFailure(classify, response.data));
        }
    } catch (error) {
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* ["default"].handleDeleteMemberFailure */ .ZP.handleDeleteMemberFailure(classify, error));
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ authWatcher)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9496);
/* harmony import */ var _AuthSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8788);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__, _AuthSaga__WEBPACK_IMPORTED_MODULE_2__]);
([_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__, _AuthSaga__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Auth
function* authWatcher() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* .AuthTypes.GET_LOGIN_KAKAO_REQUEST */ .Gp.GET_LOGIN_KAKAO_REQUEST, _AuthSaga__WEBPACK_IMPORTED_MODULE_2__/* .getLoginKakao */ .al);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* .AuthTypes.HANDLE_ACTION_LOADING_REQUEST */ .Gp.HANDLE_ACTION_LOADING_REQUEST, _AuthSaga__WEBPACK_IMPORTED_MODULE_2__/* .handleActionLoading */ .T7);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_1__/* .AuthTypes.HANDLE_DELETE_MEMBER_REQUEST */ .Gp.HANDLE_DELETE_MEMBER_REQUEST, _AuthSaga__WEBPACK_IMPORTED_MODULE_2__/* .handleDeleteMember */ .Ot);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5758);
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5674);
/* harmony import */ var _member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1481);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth__WEBPACK_IMPORTED_MODULE_1__]);
_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function* rootSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,_auth__WEBPACK_IMPORTED_MODULE_1__/* .authWatcher */ .A)(),
        (0,_program__WEBPACK_IMPORTED_MODULE_2__/* .programWatcher */ .p)(),
        (0,_member__WEBPACK_IMPORTED_MODULE_3__/* .memberWatcher */ .Q)(),
        (0,_product__WEBPACK_IMPORTED_MODULE_4__/* .productWatcher */ .S)()
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ memberWatcher)
});

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./reduxs/MemberRedux.tsx
var MemberRedux = __webpack_require__(6860);
// EXTERNAL MODULE: external "@redux-saga/core/effects"
var core_effects_ = __webpack_require__(3673);
// EXTERNAL MODULE: ./utils/ApiUtils.ts
var ApiUtils = __webpack_require__(7797);
// EXTERNAL MODULE: ./constants/Api.tsx
var Api = __webpack_require__(1049);
;// CONCATENATED MODULE: ./services/MemberAPI.tsx


/* harmony default export */ const MemberAPI = (Object.freeze({
    getMemberDetail: async ()=>{
        return await (0,ApiUtils/* fetchWithToken */.H)(Api/* MEMBER_DETAIL */.jg, {
            method: 'GET'
        });
    },
    updateMemberDetail: async (params)=>{
        return await (0,ApiUtils/* fetchWithToken */.H)(Api/* MEMBER_DETAIL_UPDATE */.k9, {
            method: 'PUT',
            body: params
        });
    },
    handleUpdatePaymentStatus: async (params)=>{
        return await (0,ApiUtils/* fetchWithToken */.H)(Api/* UPDATE_PAYMENT_STATUS */.GJ, {
            method: 'PATCH',
            body: params
        });
    }
}));

// EXTERNAL MODULE: ./constants/App.tsx
var App = __webpack_require__(3805);
;// CONCATENATED MODULE: ./sagas/member/MemberSaga.tsx




function* handleGetMemberDetail({ classify  }) {
    try {
        const response = yield (0,core_effects_.call)(MemberAPI.getMemberDetail);
        if (response && response.status === App/* SUCCESS */.MR) {
            yield (0,core_effects_.put)(MemberRedux/* default.handleGetMemberDetailSuccess */.ZP.handleGetMemberDetailSuccess(classify, response.data));
        }
    } catch (error) {
        yield (0,core_effects_.put)(MemberRedux/* default.handleGetMemberDetailFailure */.ZP.handleGetMemberDetailFailure(classify, error));
    }
}
function* handleUpdateMember({ classify , params , handleSuccess  }) {
    try {
        const response = yield (0,core_effects_.call)(MemberAPI.updateMemberDetail, params);
        if (response && response.status === App/* SUCCESS */.MR) {
            yield (0,core_effects_.put)(MemberRedux/* default.handleUpdateMemberSuccess */.ZP.handleUpdateMemberSuccess(classify, response.data));
            handleSuccess();
        } else {
            yield (0,core_effects_.put)(MemberRedux/* default.handleUpdateMemberFailure */.ZP.handleUpdateMemberFailure(classify, response.data));
        }
    } catch (error) {
        yield (0,core_effects_.put)(MemberRedux/* default.handleUpdateMemberFailure */.ZP.handleUpdateMemberFailure(classify, error));
    }
}
function* handleUpdatePaymentStatus({ classify , params , handleSuccess  }) {
    try {
        const response = yield (0,core_effects_.call)(MemberAPI.handleUpdatePaymentStatus, params);
        if (response && response.status === App/* SUCCESS */.MR) {
            yield (0,core_effects_.put)(MemberRedux/* default.handleUpdatePaymentStatusSuccess */.ZP.handleUpdatePaymentStatusSuccess(classify, response.data));
            handleSuccess();
        } else {
            yield (0,core_effects_.put)(MemberRedux/* default.handleUpdatePaymentStatusFailure */.ZP.handleUpdatePaymentStatusFailure(classify, response.data));
        }
    } catch (error) {
        yield (0,core_effects_.put)(MemberRedux/* default.handleUpdatePaymentStatusFailure */.ZP.handleUpdatePaymentStatusFailure(classify, error));
    }
}

;// CONCATENATED MODULE: ./sagas/member/index.tsx



function* memberWatcher() {
    yield (0,effects_.takeLatest)(MemberRedux/* MemberTypes.HANDLE_GET_MEMBER_DETAIL_REQUEST */.QM.HANDLE_GET_MEMBER_DETAIL_REQUEST, handleGetMemberDetail);
    yield (0,effects_.takeLatest)(MemberRedux/* MemberTypes.HANDLE_UPDATE_MEMBER_REQUEST */.QM.HANDLE_UPDATE_MEMBER_REQUEST, handleUpdateMember);
    yield (0,effects_.takeLatest)(MemberRedux/* MemberTypes.HANDLE_UPDATE_PAYMENT_STATUS_REQUEST */.QM.HANDLE_UPDATE_PAYMENT_STATUS_REQUEST, handleUpdatePaymentStatus);
}


/***/ }),

/***/ 2767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ productWatcher)
});

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./reduxs/ProductRedux.tsx
var ProductRedux = __webpack_require__(936);
// EXTERNAL MODULE: external "@redux-saga/core/effects"
var core_effects_ = __webpack_require__(3673);
// EXTERNAL MODULE: ./utils/ApiUtils.ts
var ApiUtils = __webpack_require__(7797);
// EXTERNAL MODULE: ./constants/Api.tsx
var Api = __webpack_require__(1049);
;// CONCATENATED MODULE: ./services/ProductAPIs.tsx


/* harmony default export */ const ProductAPIs = (Object.freeze({
    getMemberProductList: async (params)=>{
        return await (0,ApiUtils/* fetchWithToken */.H)(`${Api/* GET_MEMBER_PRODUCT_LIST */.ki}?search_product=${params === null || params === void 0 ? void 0 : params.search_product}&page=${params === null || params === void 0 ? void 0 : params.page}&limit=${params === null || params === void 0 ? void 0 : params.limit}&status=${params === null || params === void 0 ? void 0 : params.status}`, {
            method: 'GET'
        });
    },
    postResponsePayment: async (params)=>{
        return await (0,ApiUtils/* fetchWithToken */.H)(Api/* POST_RESPONSE_PAYMENT */.qq, {
            method: 'POST',
            body: params
        });
    }
}));

// EXTERNAL MODULE: ./constants/App.tsx
var App = __webpack_require__(3805);
;// CONCATENATED MODULE: ./sagas/product/ProductSaga.tsx




function* getMemberProductList({ classify , params  }) {
    try {
        const response = yield (0,core_effects_.call)(ProductAPIs.getMemberProductList, params);
        if (response && response.status === App/* SUCCESS */.MR) {
            yield (0,core_effects_.put)(ProductRedux/* default.getMemberProductListSuccess */.ZP.getMemberProductListSuccess(classify, response.data));
        }
    } catch (error) {
        yield (0,core_effects_.put)(ProductRedux/* default.getMemberProductListFailure */.ZP.getMemberProductListFailure(classify, error));
    }
}
function* postResponsePayment({ classify , params  }) {
    try {
        const response = yield (0,core_effects_.call)(ProductAPIs.postResponsePayment, params);
        if (response && response.status === App/* SUCCESS */.MR) {
            var ref;
            localStorage.setItem('vbankId', (ref = response.data) === null || ref === void 0 ? void 0 : ref.vbank_num);
            yield (0,core_effects_.put)(ProductRedux/* default.postResponsePaymentSuccess */.ZP.postResponsePaymentSuccess(classify, response.data));
        }
    } catch (error) {
        yield (0,core_effects_.put)(ProductRedux/* default.postResponsePaymentFailure */.ZP.postResponsePaymentFailure(classify, error));
    }
}

;// CONCATENATED MODULE: ./sagas/product/index.tsx



function* productWatcher() {
    yield (0,effects_.takeLatest)(ProductRedux/* ProductTypes.GET_MEMBER_PRODUCT_LIST_REQUEST */.V7.GET_MEMBER_PRODUCT_LIST_REQUEST, getMemberProductList);
    yield (0,effects_.takeLatest)(ProductRedux/* ProductTypes.POST_RESPONSE_PAYMENT_REQUEST */.V7.POST_RESPONSE_PAYMENT_REQUEST, postResponsePayment);
}


/***/ }),

/***/ 5674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ programWatcher)
});

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./reduxs/ProgramRedux.tsx
var ProgramRedux = __webpack_require__(1623);
// EXTERNAL MODULE: external "@redux-saga/core/effects"
var core_effects_ = __webpack_require__(3673);
// EXTERNAL MODULE: ./utils/ApiUtils.ts
var ApiUtils = __webpack_require__(7797);
// EXTERNAL MODULE: ./constants/Api.tsx
var Api = __webpack_require__(1049);
;// CONCATENATED MODULE: ./services/ProgramAPIs.tsx


/* harmony default export */ const ProgramAPIs = (Object.freeze({
    handleGetProgramList: async (body)=>{
        return await (0,ApiUtils/* fetchWithToken */.H)(Api/* GET_PROGRAM_LIST */.AN, {
            method: 'GET',
            body
        });
    },
    handleGetProgramDetail: async (params)=>{
        const secret = params.secret ? '?secret=' + params.secret : '';
        const url = `${Api/* GET_PROGRAM_DETAIL */.qg}/${params.id}${secret}`;
        return await (0,ApiUtils/* fetchWithoutToken */.x)(url, {
            method: 'GET'
        });
    }
}));

// EXTERNAL MODULE: ./constants/App.tsx
var App = __webpack_require__(3805);
;// CONCATENATED MODULE: ./sagas/program/ProgramSaga.tsx




function* handleGetProgramList({ classify , params  }) {
    try {
        const response = yield (0,core_effects_.call)(ProgramAPIs.handleGetProgramList, params);
        if (response && response.status === App/* SUCCESS */.MR) {
            yield (0,core_effects_.put)(ProgramRedux/* default.handleGetProgramListSuccess */.ZP.handleGetProgramListSuccess(classify, response.data));
        } else {
            yield (0,core_effects_.put)(ProgramRedux/* default.handleGetProgramListFailure */.ZP.handleGetProgramListFailure(classify, response.data));
        }
    } catch (error) {
        yield (0,core_effects_.put)(ProgramRedux/* default.handleGetProgramListFailure */.ZP.handleGetProgramListFailure(classify, error));
    }
}
function* handleGetProgramDetail({ classify , params , handleSuccess  }) {
    try {
        const response = yield (0,core_effects_.call)(ProgramAPIs.handleGetProgramDetail, params);
        if (response && response.status === App/* SUCCESS */.MR) {
            handleSuccess(response.data);
            yield (0,core_effects_.put)(ProgramRedux/* default.handleGetProgramDetailSuccess */.ZP.handleGetProgramDetailSuccess(classify, response.data));
        } else {
            yield (0,core_effects_.put)(ProgramRedux/* default.handleGetProgramDetailFailure */.ZP.handleGetProgramDetailFailure(classify, response.data));
        }
    } catch (error) {
        yield (0,core_effects_.put)(ProgramRedux/* default.handleGetProgramDetailFailure */.ZP.handleGetProgramDetailFailure(classify, error));
    }
}

;// CONCATENATED MODULE: ./sagas/program/index.tsx



// Auth
function* programWatcher() {
    yield (0,effects_.takeLatest)(ProgramRedux/* ProgramTypes.HANDLE_GET_PROGRAM_LIST_REQUEST */.fT.HANDLE_GET_PROGRAM_LIST_REQUEST, handleGetProgramList);
    yield (0,effects_.takeLatest)(ProgramRedux/* ProgramTypes.HANDLE_GET_PROGRAM_DETAIL_REQUEST */.fT.HANDLE_GET_PROGRAM_DETAIL_REQUEST, handleGetProgramDetail);
}


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_ApiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7797);
/* harmony import */ var _constants_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1049);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze({
    getLoginKakao: async (body)=>{
        return await (0,_utils_ApiUtils__WEBPACK_IMPORTED_MODULE_0__/* .fetchWithoutToken */ .x)(_constants_Api__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN */ .ym, {
            method: "POST",
            body
        });
    },
    handleActionLoading: async ()=>{
        return await (0,_utils_ApiUtils__WEBPACK_IMPORTED_MODULE_0__/* .fetchWithToken */ .H)(_constants_Api__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_TOKEN */ .a0, {
            method: "GET"
        });
    },
    handleDeleteKakao: async ()=>{
        return await (0,_utils_ApiUtils__WEBPACK_IMPORTED_MODULE_0__/* .fetchWithToken */ .H)(_constants_Api__WEBPACK_IMPORTED_MODULE_1__/* .MEMBER_DELTE */ .oO, {
            method: "DELETE"
        });
    }
}));


/***/ }),

/***/ 2276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ AmplitudeProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "amplitude-js"
var external_amplitude_js_ = __webpack_require__(1352);
var external_amplitude_js_default = /*#__PURE__*/__webpack_require__.n(external_amplitude_js_);
;// CONCATENATED MODULE: ./src/common/constant/third-party.ts
const AMPLITUDE_API_KEY = 'fa5b3cad6402185c18cf5111a5b35d00';

;// CONCATENATED MODULE: ./src/common/context/AmplitudeProvider.tsx





const AmplitudeProvider = ()=>{
    const { userInfo  } = (0,external_react_redux_.useSelector)((state)=>state.auth.contents
    );
    const [userInitialized, setUserInitialized] = external_react_default().useState(false);
    (0,external_react_.useEffect)(()=>{
        external_amplitude_js_default().getInstance().init(AMPLITUDE_API_KEY, undefined, {
            includeGclid: true,
            includeUtm: true,
            includeReferrer: true,
            deviceIdFromUrlParam: true
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        const token = localStorage.getItem('access_token');
        if (token && userInfo && !userInitialized) {
            const { id , company , level , marketing_consent , info_subscribe , payments , email , phone , full_name , registered_date ,  } = userInfo;
            const user = {
                id,
                company,
                level,
                marketing_consent,
                info_subscribe,
                paid_products: payments === null || payments === void 0 ? void 0 : payments.map((payment)=>{
                    var ref;
                    return (ref = payment.pay_products) === null || ref === void 0 ? void 0 : ref.id;
                }),
                email,
                phone,
                full_name,
                registered_date
            };
            external_amplitude_js_default().getInstance().setUserProperties(user);
            setUserInitialized(true);
        }
    }, [
        userInfo,
        userInitialized
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {});
};


/***/ }),

/***/ 358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ CSMessengerProvider)
/* harmony export */ });
/* unused harmony export useCSMessenger */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_useUser__WEBPACK_IMPORTED_MODULE_2__]);
_api_useUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CSMessengerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const CSMessengerProvider = ({ children , Service  })=>{
    const { isLoggedIn , user  } = (0,_api_useUser__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .a)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isLoggedIn) {
            var ref;
            Service.identify(String(user.id), {
                name: user.full_name,
                mobileNumber: user.phone,
                email: user.email,
                paidProducts: (ref = user.payments) === null || ref === void 0 ? void 0 : ref.map(({ pay_products  })=>{
                    return `(${pay_products === null || pay_products === void 0 ? void 0 : pay_products.id})${pay_products === null || pay_products === void 0 ? void 0 : pay_products.name}`;
                })
            });
        } else {
            Service.identify();
        }
    }, [
        Service,
        isLoggedIn,
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CSMessengerContext.Provider, {
        value: Service,
        children: children
    });
};
const useCSMessenger = ()=>useContext(CSMessengerContext)
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ LoginEventProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




const LoginEventProvider = ()=>{
    const contents = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth.contents
    );
    const [loginInvoked, setLoginInvoked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = localStorage.getItem('access_token');
        if (token && contents.userInfo && !loginInvoked) {
            const { id , company , level , marketing_consent , info_subscribe , payments , email , phone , full_name  } = contents.userInfo;
            const pushData = (eventName, purchase_amount)=>({
                    event: eventName,
                    method: 'kakaotalk',
                    user_id: id,
                    purchase_count: purchase_amount ? payments.length : 0,
                    purchase_amount,
                    member_grade: '0',
                    company: company,
                    career_level: level,
                    mkt_agree: marketing_consent ? 'Y' : 'N',
                    sub_agree: info_subscribe ? 'Y' : 'N',
                    user_name: full_name,
                    user_email: email,
                    user_phone: phone
                })
            ;
            if (payments) {
                const amountSum = (()=>{
                    const amounts = payments.map((payment)=>Number(payment.pay_products.price)
                    );
                    const sum = amounts.reduce((s, c)=>s + c
                    , 0);
                    return sum;
                })();
                react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default().dataLayer({
                    dataLayer: pushData('login_complete', amountSum)
                });
                react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default().dataLayer({
                    dataLayer: pushData('login_landing', amountSum)
                });
            } else {
                react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default().dataLayer({
                    dataLayer: pushData('login_complete', 0)
                });
                react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default().dataLayer({
                    dataLayer: pushData('login_landing', 0)
                });
            }
            setLoginInvoked(true);
        }
    }, [
        contents,
        loginInvoked
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});
};


/***/ }),

/***/ 7267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ logMetric)
/* harmony export */ });
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7564);
/* harmony import */ var _common_constant_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chalk__WEBPACK_IMPORTED_MODULE_0__]);
chalk__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const colorByMetric = {
    LCP: 'bgGreen',
    FCP: 'bgBlue',
    TTFB: 'bgRed',
    CLS: 'bgYellow',
    FID: 'bgMagenta',
    'Next.js-hydration': 'bgCyan',
    'Next.js-render': 'bgRedBright',
    'Next.js-route-change-to-render': 'bgYellowBright'
};
function logMetric(metric) {
    if (!_common_constant_domain__WEBPACK_IMPORTED_MODULE_1__/* .__DEV__ */ .Ts) return;
    const { name , value , startTime  } = metric;
    console.log(chalk__WEBPACK_IMPORTED_MODULE_0__["default"][colorByMetric[name]].bold.black(name) + chalk__WEBPACK_IMPORTED_MODULE_0__["default"].reset(` | ${chalk__WEBPACK_IMPORTED_MODULE_0__["default"].bold(Math.floor(value))} startTime: ${Math.floor(startTime)} `));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8765:
/***/ ((module) => {

module.exports = require("@datadog/browser-rum");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ 1352:
/***/ ((module) => {

module.exports = require("amplitude-js");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 5575:
/***/ ((module) => {

module.exports = require("moment/min/locales");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9578:
/***/ ((module) => {

module.exports = require("react-facebook-pixel");

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

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 6537:
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 7664:
/***/ ((module) => {

module.exports = require("reduxsauce");

/***/ }),

/***/ 3098:
/***/ ((module) => {

module.exports = require("relay-hooks");

/***/ }),

/***/ 2825:
/***/ ((module) => {

module.exports = require("relay-runtime");

/***/ }),

/***/ 8466:
/***/ ((module) => {

module.exports = require("seamless-immutable");

/***/ }),

/***/ 7564:
/***/ ((module) => {

module.exports = import("chalk");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [485,738,815,304,49,934,901,805,204,702], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();