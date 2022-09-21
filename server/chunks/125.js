"use strict";
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 9126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _useCompanyList__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _useCompanyList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4507);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useCompanyList__WEBPACK_IMPORTED_MODULE_0__]);
_useCompanyList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useCompanyList)
/* harmony export */ });
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(304);
/* harmony import */ var _common_hook_useLazyRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_hook_useLazyRequest__WEBPACK_IMPORTED_MODULE_1__]);
_common_hook_useLazyRequest__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCompanyList = ()=>{
    const [executeQuery, { companyList  }] = (0,_common_hook_useLazyRequest__WEBPACK_IMPORTED_MODULE_1__/* .useLazyRequest */ .n)({
        dataName: 'companyList',
        withToken: true
    });
    const getCompanyList = (searchKey)=>executeQuery(`${src_common_constant_api__WEBPACK_IMPORTED_MODULE_0__/* .GET_COMPANY_LIST */ .Ze}?search_key=${searchKey}`)
    ;
    const convertedCompanyList = companyList === null || companyList === void 0 ? void 0 : companyList.map((company)=>company.name
    );
    return {
        getCompanyList,
        companyList: convertedCompanyList
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _useMemberOption__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _useMemberOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMemberOption__WEBPACK_IMPORTED_MODULE_0__]);
_useMemberOption__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useMemberOption)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useMemberOption = ()=>{
    const { memberOptions  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_MEMBER_INFO */ .JA,
        dataName: 'memberOptions',
        withToken: true
    });
    return {
        memberOptions
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Select = ({ keyName , inValid , options , onChange , value: value1 , style  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
        sx: {
            width: "100%",
            ...style,
            border: `${inValid ? "1px solid red" : "1px solid #DDE0E2"}`
        },
        onChange: onChange,
        displayEmpty: true,
        value: value1,
        inputProps: {
            sx: {
                padding: "20px"
            }
        },
        MenuProps: {
            elevation: 0,
            PaperProps: {
                sx: {
                    borderRadius: "5px"
                }
            },
            sx: {
                "&& .Mui-selected": {
                    backgroundColor: "#F7F8F8"
                }
            }
        },
        renderValue: (value)=>value ? value : "답변을 선택해주세요."
        ,
        children: options === null || options === void 0 ? void 0 : options.map(({ value , label  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                value: value,
                sx: {
                    paddingY: "14px"
                },
                disableRipple: true,
                children: label
            }, value)
        )
    });
};


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

/***/ 684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useConvertPhoneNumber)
/* harmony export */ });
const useConvertPhoneNumber = ()=>(phoneNumber)=>(phoneNumber + '').replace('+82 ', '0')
;


/***/ }),

/***/ 5392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* reexport safe */ _useLazyRequest__WEBPACK_IMPORTED_MODULE_0__.n)
/* harmony export */ });
/* harmony import */ var _useLazyRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2875);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useLazyRequest__WEBPACK_IMPORTED_MODULE_0__]);
_useLazyRequest__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useLazyRequest)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _utill_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useLazyRequest = ({ dataName , withToken , body  })=>{
    const { data , error , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])([
        JSON.stringify(body)
    ], ()=>null
    );
    const loading = !data && !error;
    const executeQuery = (endpoint)=>{
        (0,_utill_fetcher__WEBPACK_IMPORTED_MODULE_1__/* .fetchSWR */ .VO)({
            url: endpoint,
            withToken,
            body
        }).then((result)=>{
            mutate(result, false);
        });
    };
    return [
        executeQuery,
        {
            loading,
            error,
            [dataName]: data,
            mutate
        }
    ];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useValidEmail)
/* harmony export */ });
const useValidEmail = (email, option = false)=>{
    const isValid = emailValidator(email);
    return !option ? isValid : email === "" ? true : isValid;
};
const emailValidator = (email)=>/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
;


/***/ })

};
;