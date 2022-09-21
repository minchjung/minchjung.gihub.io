"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 9815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _useSWRHook__WEBPACK_IMPORTED_MODULE_0__.L)
/* harmony export */ });
/* harmony import */ var _useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useSWRHook)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var src_common_utill_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useSWRHook = ({ endpoint , dataName , withToken , body , option  })=>{
    const { data , error , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: endpoint,
        withToken,
        body
    }, src_common_utill_fetcher__WEBPACK_IMPORTED_MODULE_1__/* .fetchSWR */ .VO, option);
    const loading = !data && !error;
    return {
        loading,
        error,
        [dataName]: data,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DR": () => (/* reexport */ fetchMutation),
  "VO": () => (/* reexport */ fetchSWR)
});

// UNUSED EXPORTS: fetchGet

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/common/utill/error/error.ts
class GrownbetterNetworkError extends Error {
    constructor(msg){
        super(msg);
        this.name = 'GrownbetterNetworkError';
    }
}

;// CONCATENATED MODULE: ./src/common/utill/error/index.ts


;// CONCATENATED MODULE: ./src/common/utill/fetcher/fetcher.ts


const ACCESS_TOKEN_KEY = 'access_token';
const fetcher = async ({ method , url , body , withToken  })=>{
    var ref;
    const requestInit = {
        method,
        url,
        data: (ref = JSON.stringify(body)) !== null && ref !== void 0 ? ref : null,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const getToken = ()=>{
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (!token) {
            throw Error(`can't find "${ACCESS_TOKEN_KEY}" in localStorage`);
        }
        return token;
    };
    if (withToken) {
        const token = getToken();
        requestInit.headers.Authorization = `Bearer ${token}`;
    }
    try {
        const res = await external_axios_default().request(requestInit);
        return res.hasOwnProperty('data') ? res.data : res;
    } catch (error) {
        return Promise.reject(new GrownbetterNetworkError(`--- Fetch failed in grownbetter-admin ---
        ${error !== null && error !== void 0 ? error : `no error context provided`}`));
    }
};
const fetchGet = async ({ url , withToken =true  })=>await fetcher({
        method: 'GET',
        url,
        withToken
    })
;
const fetchMutation = async ({ method , url , body , withToken =true  })=>await fetcher({
        method,
        url,
        body,
        withToken
    })
;
const fetchSWR = async ({ url , withToken , body =null  })=>await fetcher({
        method: 'GET',
        url,
        withToken,
        body
    })
;

;// CONCATENATED MODULE: ./src/common/utill/fetcher/index.ts



/***/ })

};
;