"use strict";
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V7": () => (/* binding */ ProductTypes),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "I6": () => (/* binding */ reducer)
/* harmony export */ });
/* unused harmony exports INITIAL_STATE, getMemberProductListRequest, getMemberProductListSuccess, getMemberProductListFailure, postResponsePaymentRequest, postResponsePaymentSuccess, postResponsePaymentFailure */
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
    getMemberProductListRequest: [
        "classify",
        "params"
    ],
    getMemberProductListSuccess: [
        "classify",
        "payload"
    ],
    getMemberProductListFailure: [
        "classify",
        "error"
    ],
    postResponsePaymentRequest: [
        "classify",
        "params"
    ],
    postResponsePaymentSuccess: [
        "classify",
        "payload"
    ],
    postResponsePaymentFailure: [
        "classify",
        "error"
    ]
});
const ProductTypes = Types;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creators);
/* ------------- END: Types and Action Creators ------------- */ /* ------------- START: handleGetMember ------------- */ const getMemberProductListRequest = (state, { classify , params  })=>{
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
const getMemberProductListSuccess = (state, { classify , payload  })=>{
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
const getMemberProductListFailure = (state, { classify , error  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: null
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: handleGetMember ------------- */ /* ------------- START: handleGetMember ------------- */ const postResponsePaymentRequest = (state, { classify , params  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true,
            params
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
const postResponsePaymentSuccess = (state, { classify , payload  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: payload
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const postResponsePaymentFailure = (state, { classify , error  })=>{
    localStorage.removeItem("access_token");
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: null
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: handleGetMember ------------- */ /* ------------- START: Hookup Reducers To Types ------------- */ const reducer = (0,reduxsauce__WEBPACK_IMPORTED_MODULE_0__.createReducer)(INITIAL_STATE, {
    [Types.GET_MEMBER_PRODUCT_LIST_REQUEST]: getMemberProductListRequest,
    [Types.GET_MEMBER_PRODUCT_LIST_SUCCESS]: getMemberProductListSuccess,
    [Types.GET_MEMBER_PRODUCT_LIST_FAILURE]: getMemberProductListFailure,
    [Types.POST_RESPONSE_PAYMENT_REQUEST]: postResponsePaymentRequest,
    [Types.POST_RESPONSE_PAYMENT_SUCCESS]: postResponsePaymentSuccess,
    [Types.POST_RESPONSE_PAYMENT_FAILURE]: postResponsePaymentFailure
}); /* ------------- END: Hookup Reducers To Types ------------- */ 


/***/ }),

/***/ 1623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fT": () => (/* binding */ ProgramTypes),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "I6": () => (/* binding */ reducer)
/* harmony export */ });
/* unused harmony exports INITIAL_STATE, handleResetProgramList, handleGetProgramListRequest, handleGetProgramListSuccess, handleGetProgramListFailure, handleGetProgramDetailRequest, handleGetProgramDetailSuccess, handleGetProgramDetailFailure */
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
    handleResetProgramList: [
        'classify'
    ],
    handleGetProgramListRequest: [
        'classify',
        'params'
    ],
    handleGetProgramListSuccess: [
        'classify',
        'payload'
    ],
    handleGetProgramListFailure: [
        'classify',
        'error'
    ],
    handleGetProgramDetailRequest: [
        'classify',
        'params',
        'handleSuccess'
    ],
    handleGetProgramDetailSuccess: [
        'classify',
        'payload'
    ],
    handleGetProgramDetailFailure: [
        'classify',
        'error'
    ]
});
const ProgramTypes = Types;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creators);
/* ------------- END: Types and Action Creators ------------- */ /* ------------- START: handleGetProgramList ------------- */ const handleResetProgramList = (state, { classify  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true
        },
        contents: {
            ...state.contents,
            [classify]: []
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
/* ------------- START: handleGetProgramList ------------- */ const handleGetProgramListRequest = (state, { classify , params  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true,
            params
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
const handleGetProgramListSuccess = (state, { classify , payload  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: payload
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleGetProgramListFailure = (state, { classify , error  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: null
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: handleGetProgramList ------------- */ /* ------------- START: handleGetProgramList ------------- */ const handleGetProgramDetailRequest = (state, { classify , params  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: true,
            params
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
const handleGetProgramDetailSuccess = (state, { classify , payload  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: payload
        },
        errors: {
            ...state.errors,
            [classify]: null
        }
    });
};
const handleGetProgramDetailFailure = (state, { classify , error  })=>{
    return state.merge({
        fetching: {
            ...state.fetching,
            [classify]: false
        },
        contents: {
            ...state.contents,
            [classify]: null
        },
        errors: {
            ...state.errors,
            [classify]: error
        }
    });
};
/* ------------- END: handleGetProgramList ------------- */ /* ------------- START: Hookup Reducers To Types ------------- */ const reducer = (0,reduxsauce__WEBPACK_IMPORTED_MODULE_0__.createReducer)(INITIAL_STATE, {
    [Types.HANDLE_RESET_PROGRAM_LIST]: handleResetProgramList,
    [Types.HANDLE_GET_PROGRAM_LIST_REQUEST]: handleGetProgramListRequest,
    [Types.HANDLE_GET_PROGRAM_LIST_SUCCESS]: handleGetProgramListSuccess,
    [Types.HANDLE_GET_PROGRAM_LIST_FAILURE]: handleGetProgramListFailure,
    [Types.HANDLE_GET_PROGRAM_DETAIL_REQUEST]: handleGetProgramDetailRequest,
    [Types.HANDLE_GET_PROGRAM_DETAIL_SUCCESS]: handleGetProgramDetailSuccess,
    [Types.HANDLE_GET_PROGRAM_DETAIL_FAILURE]: handleGetProgramDetailFailure
}); /* ------------- END: Hookup Reducers To Types ------------- */ 


/***/ })

};
;