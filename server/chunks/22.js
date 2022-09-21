"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 5022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y2": () => (/* binding */ fetchDelete),
  "ZE": () => (/* binding */ fetchPut)
});

// UNUSED EXPORTS: fetchGet, fetchPost, fetchSWR

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./utils/error.ts
class GrownbetterNetworkError extends Error {
    constructor(msg){
        super(msg);
        this.name = 'GrownbetterNetworkError';
    }
}

;// CONCATENATED MODULE: ./utils/fetcher.ts


const ACCESS_TOKEN_KEY = "access_token";
const fetcher = async ({ method , url , data , withToken  })=>{
    var ref;
    const requestInit = {
        method,
        url,
        data: (ref = JSON.stringify(data)) !== null && ref !== void 0 ? ref : {},
        headers: {
            "Content-Type": "application/json"
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
        return res.hasOwnProperty("data") ? res.data : res;
    } catch (error) {
        return Promise.reject(new GrownbetterNetworkError(`--- Fetch failed in grownbetter-admin ---
        ${error !== null && error !== void 0 ? error : `no error context provided`}`));
    }
};
const fetchGet = async ({ url , withToken =true  })=>await fetcher({
        method: "GET",
        url,
        withToken
    })
;
const fetchPost = async ({ url , data , withToken =true  })=>await fetcher({
        method: "POST",
        url,
        data,
        withToken
    })
;
const fetchPut = async ({ url , data , withToken =true  })=>await fetcher({
        method: "PUT",
        url,
        data,
        withToken
    })
;
const fetchDelete = async ({ url , data , withToken =true  })=>await fetcher({
        method: "DELETE",
        url,
        data,
        withToken
    })
;
const fetchSWR = async ({ url , withToken  })=>await fetcher({
        method: "GET",
        url,
        withToken
    })
;


/***/ })

};
;