"use strict";
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 4934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _useUser__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "I": () => (/* reexport safe */ _useUpdateUser__WEBPACK_IMPORTED_MODULE_1__.I)
/* harmony export */ });
/* harmony import */ var _useUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3059);
/* harmony import */ var _useUpdateUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUser__WEBPACK_IMPORTED_MODULE_0__]);
_useUser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useUpdateUser)
/* harmony export */ });
/* harmony import */ var _utils_ApiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7797);
/* harmony import */ var _constants_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1049);


// TODO: Get rid of this LEGACY
// the mutate doesnt seem to do anything
// & fetchWithToken, API also LEGACY
const useUpdateUser = async ({ user , value , mutate  })=>{
    const adjustedData = {
        ...user,
        ...value
    };
    await (0,_utils_ApiUtils__WEBPACK_IMPORTED_MODULE_0__/* .fetchWithToken */ .H)(_constants_Api__WEBPACK_IMPORTED_MODULE_1__/* .MEMBER_DETAIL_UPDATE */ .k9, {
        method: "PUT",
        body: adjustedData
    });
    mutate();
};


/***/ }),

/***/ 3059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUser = ()=>{
    const { error , user , mutate  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_USER_INFO */ .CP,
        dataName: "user",
        withToken: true
    });
    const isLoggedIn = !error && !!user;
    return {
        error,
        isLoggedIn,
        user,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ fetchWithoutToken),
/* harmony export */   "H": () => (/* binding */ fetchWithToken)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function fetchWithoutToken(url, { method , body , header  }) {
    try {
        const headers = {
            ...header || {},
            'Content-Type': 'application/json'
        };
        return await axios__WEBPACK_IMPORTED_MODULE_0___default().request({
            method: method || 'GET',
            url,
            headers,
            timeout: 5000,
            data: JSON.stringify(body) || null
        });
    } catch (error) {
        return {
            error,
            status: (error === null || error === void 0 ? void 0 : error.status) || 401
        };
    }
}
async function fetchWithToken(url, { method , body , header , upload  }) {
    try {
        const token = localStorage.getItem('access_token');
        const headers = {
            ...header || {},
            'Content-Type': upload ? 'multipart/form-data' : 'application/json',
            Authorization: `Bearer ${token}`
        };
        if (upload) {
            const formData = new FormData();
            formData.append('imageFile', upload);
            formData.append('type', 'image/jpeg, image/jpg, image/png');
            return await axios__WEBPACK_IMPORTED_MODULE_0___default().request({
                method: method || 'GET',
                url,
                headers,
                timeout: 5000,
                data: formData
            });
        }
        return await axios__WEBPACK_IMPORTED_MODULE_0___default().request({
            method: method || 'GET',
            url,
            headers,
            timeout: 5000,
            data: upload ? JSON.stringify(body) || null : body
        });
    } catch (error) {
        return {
            error,
            status: (error === null || error === void 0 ? void 0 : error.status) || 401
        };
    }
}


/***/ })

};
;