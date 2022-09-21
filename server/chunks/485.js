"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 1146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ tagSignUp)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_1__);


const today = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date());
const tagSignUp = (id)=>{
    react_gtm_module__WEBPACK_IMPORTED_MODULE_1___default().dataLayer({
        dataLayer: {
            event: "signup_complete",
            method: "kakaotalk",
            user_id: `${id}`,
            signup_date: today.format("YYYY-MM-DD"),
            signup_month: today.format("YYYY-MM"),
            signup_week: today.format("YYYY-WW")
        }
    });
};


/***/ }),

/***/ 9496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gp": () => (/* binding */ AuthTypes),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "I6": () => (/* binding */ reducer)
/* harmony export */ });
/* unused harmony exports INITIAL_STATE, handleActionLogOut, handleActionLoadingRequest, handleActionLoadingSuccess, handleActionLoadingFailure, getLoginKakaoRequest, getLoginKakaoSuccess, getLoginKakaoFailure, handleDeleteMemberRequest, handleDeleteMemberSuccess, handleDeleteMemberFailure */
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7664);
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reduxsauce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8466);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9688);
/* harmony import */ var lib_dataTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1146);
/* harmony import */ var amplitude_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1352);
/* harmony import */ var amplitude_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(amplitude_js__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__]);
utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* ------------- START: Initial State ------------- */ const INITIAL_STATE = seamless_immutable__WEBPACK_IMPORTED_MODULE_1___default()({
    fetching: {},
    contents: {},
    errors: {}
});
/* ------------- END: Initial State ------------- */ /* ------------- START: Types and Action Creators ------------- */ const { Types , Creators  } = (0,reduxsauce__WEBPACK_IMPORTED_MODULE_0__.createActions)({
    handleActionLogOut: [
        "classify"
    ],
    handleActionLoadingRequest: [
        "classify"
    ],
    handleActionLoadingSuccess: [
        "classify",
        "payload"
    ],
    handleActionLoadingFailure: [
        "classify",
        "error"
    ],
    getLoginKakaoRequest: [
        "classify",
        "params"
    ],
    getLoginKakaoSuccess: [
        "classify",
        "payload"
    ],
    getLoginKakaoFailure: [
        "classify",
        "error"
    ],
    handleDeleteMemberRequest: [
        "classify",
        "handleSuccess"
    ],
    handleDeleteMemberSuccess: [
        "classify",
        "payload"
    ],
    handleDeleteMemberFailure: [
        "classify",
        "error"
    ]
});
const AuthTypes = Types;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creators);
/* ------------- END: Types and Action Creators ------------- */ /* ------------- START: handleLogOut ------------- */ const handleActionLogOut = (state, { classify  })=>{
    (0,utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__/* .removeCookie */ .nJ)("access_token");
    localStorage.removeItem("access_token");
    return state.merge({
        ...state,
        contents: {
            ...state.contents,
            [classify]: null,
            ["login"]: false,
            ["userInfo"]: null
        }
    });
};
/* ------------- START: handleActionLoading ------------- */ const handleActionLoadingRequest = (state, { classify  })=>{
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
const handleActionLoadingSuccess = (state, { classify , payload  })=>{
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
const handleActionLoadingFailure = (state, { classify , error  })=>{
    localStorage.removeItem("access_token");
    (0,utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__/* .removeCookie */ .nJ)("access_token");
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
/* ------------- END: handleActionLoading ------------- */ /* ------------- START: getLoginKakao ------------- */ const getLoginKakaoRequest = (state, { classify  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true
        },
        contents: {
            ...state.contents,
            [classify]: null
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const getLoginKakaoSuccess = (state, { classify , payload  })=>{
    (0,utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__/* .setCookie */ .d8)("access_token", payload.access_token);
    localStorage.removeItem("logout_state");
    localStorage.setItem("access_token", payload.access_token);
    // New member; first signup or signin
    if (payload.isNewMember) {
        (0,lib_dataTags__WEBPACK_IMPORTED_MODULE_3__/* .tagSignUp */ .s)(payload.id);
        amplitude_js__WEBPACK_IMPORTED_MODULE_4___default().getInstance().logEvent("signup");
        // Rediect to update profile page for new users
        localStorage.setItem("next", "/my/signup");
    }
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: true
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const getLoginKakaoFailure = (state, { classify , error  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: false
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: getLoginKakao ------------- */ /* ------------- START: handleDeleteMember ------------- */ const handleDeleteMemberRequest = (state, { classify  })=>{
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
const handleDeleteMemberSuccess = (state, { classify , payload  })=>{
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
const handleDeleteMemberFailure = (state, { classify , error  })=>{
    localStorage.removeItem("access_token");
    (0,utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__/* .removeCookie */ .nJ)("access_token");
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
/* ------------- END: handleDeleteMember ------------- */ /* ------------- START: Hookup Reducers To Types ------------- */ const reducer = (0,reduxsauce__WEBPACK_IMPORTED_MODULE_0__.createReducer)(INITIAL_STATE, {
    [Types.HANDLE_ACTION_LOG_OUT]: handleActionLogOut,
    [Types.HANDLE_ACTION_LOADING_REQUEST]: handleActionLoadingRequest,
    [Types.HANDLE_ACTION_LOADING_SUCCESS]: handleActionLoadingSuccess,
    [Types.HANDLE_ACTION_LOADING_FAILURE]: handleActionLoadingFailure,
    [Types.GET_LOGIN_KAKAO_REQUEST]: getLoginKakaoRequest,
    [Types.GET_LOGIN_KAKAO_SUCCESS]: getLoginKakaoSuccess,
    [Types.GET_LOGIN_KAKAO_FAILURE]: getLoginKakaoFailure,
    [Types.HANDLE_DELETE_MEMBER_REQUEST]: handleDeleteMemberRequest,
    [Types.HANDLE_DELETE_MEMBER_SUCCESS]: handleDeleteMemberSuccess,
    [Types.HANDLE_DELETE_MEMBER_FAILURE]: handleDeleteMemberFailure
}); /* ------------- END: Hookup Reducers To Types ------------- */ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ AuthenticationProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__]);
_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isLoggedIn: false,
    isLoading: true,
    logout: ()=>{}
});
const AuthenticationProvider = ({ children  })=>{
    const { userInfo  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth.contents
    );
    const { pathname , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: isLoggedIn , 1: setIsLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // 1. if token found but userInfo not then request userInfo with that token
        //  (Use the redux to keep on the consistent math)
        const token = localStorage.getItem("access_token");
        if (token && !userInfo) {
            dispatch(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__/* ["default"].handleActionLoadingRequest */ .ZP.handleActionLoadingRequest("userInfo"));
        }
        processLogin(token);
    // Verify whole this when path change, and loss of userInfo
    // (or change of the userInfo like undefined -> some values..)
    }, [
        pathname,
        userInfo
    ]);
    // 2. Set Login false when token not found (logout())
    // 3. If token found, then wait till to get the userInfo
    const processLogin = (token)=>{
        if (token) setIsLoading(!userInfo);
        else setIsLoading(false);
        setIsLoggedIn(!!token);
        // If logged in; has token check next value set from localStorage
        if (token) {
            const next = localStorage.getItem("next");
            // If next not starts with /login redirect to that page
            if (next && !next.startsWith("/login")) {
                localStorage.removeItem("next");
                push(next);
            }
        }
    };
    // 4. Logout with dispatch to keep on the same track
    const processLogout = ()=>{
        dispatch(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__/* ["default"].handleActionLogOut */ .ZP.handleActionLogOut("logout"));
        setIsLoggedIn(false);
        setIsLoading(false);
        localStorage.removeItem("access_token");
        push("/");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            isLoggedIn,
            isLoading,
            logout: processLogout
        },
        children: children
    });
};
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)
;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "nJ": () => (/* binding */ removeCookie)
/* harmony export */ });
/* unused harmony exports getCookie, checkServerSideCookie */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const cookieExpireDays = 60;
const setCookie = (key, value)=>{
    if (false) {}
};
const removeCookie = (key)=>{
    if (false) {}
};
const getCookie = (key, req)=>{
    return  false ? 0 : getCookieFromServer(key, req);
};
const getCookieFromBrowser = (key)=>{
    return cookie.get(key);
};
const getCookieFromServer = (key, req)=>{
    if (!req.headers.cookie) {
        return undefined;
    }
    const rawCookie = req.headers.cookie.split(";").find((c)=>c.trim().startsWith(`${key}=`)
    );
    if (!rawCookie) {
        return undefined;
    }
    return rawCookie.split("=")[1];
};
const checkServerSideCookie = (ctx)=>{
    if (ctx.isServer) {
        if (ctx.req.headers.cookie) {
            const token = getCookie("token", ctx.req);
        // ctx.store.dispatch(reauthenticate(token, user));
        }
    } else {
        const token = ctx.store.getState().authentication.token;
        if (token && (ctx.pathname !== "/" || ctx.pathname !== "/main")) {
            setTimeout(()=>{
                Router.push("/");
            }, 0);
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;