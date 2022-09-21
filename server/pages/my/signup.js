"use strict";
(() => {
var exports = {};
exports.id = 391;
exports.ids = [391];
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

/***/ 2915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_my_page_Signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6693);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_my_page_Signup__WEBPACK_IMPORTED_MODULE_0__]);
src_my_page_Signup__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_my_page_Signup__WEBPACK_IMPORTED_MODULE_0__/* .Signup */ .A);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* reexport */ useMutateMarketingConsent)
});

// EXTERNAL MODULE: ./src/common/constant/api.ts
var api = __webpack_require__(304);
// EXTERNAL MODULE: ./utils/fetcher.ts + 1 modules
var fetcher = __webpack_require__(5022);
;// CONCATENATED MODULE: ./src/common/api/useMutateMarketingConsent/useMutateMarketingConsent.tsx


const useMutateMarketingConsent = ()=>(isAgree)=>(0,fetcher/* fetchPut */.ZE)({
            url: (0,api/* putUpdateMemberAgreement */.hw)(),
            data: {
                marketing_consent: isAgree
            },
            withToken: true
        })
;

;// CONCATENATED MODULE: ./src/common/api/useMutateMarketingConsent/index.ts



/***/ }),

/***/ 8980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ useMutateNewsletterSubscribe)
});

// EXTERNAL MODULE: ./src/common/constant/api.ts
var api = __webpack_require__(304);
// EXTERNAL MODULE: ./utils/fetcher.ts + 1 modules
var fetcher = __webpack_require__(5022);
;// CONCATENATED MODULE: ./src/common/api/useMutateNewsletterSubscribe/useMutateNewsletterSubscribe.tsx


const useMutateNewsletterSubscribe = ()=>(isSubscribe)=>(0,fetcher/* fetchPut */.ZE)({
            url: (0,api/* putUpdateMemberAgreement */.hw)(),
            data: {
                info_subscribe: isSubscribe
            },
            withToken: true
        })
;

;// CONCATENATED MODULE: ./src/common/api/useMutateNewsletterSubscribe/index.ts



/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ AgreementCheckBox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(8330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
;// CONCATENATED MODULE: ./src/my/components/AgreementCheckBox/AgreementCheckBox.tsx


const AgreementCheckBox = ({ keyName , inValid , onChange , defaultChecked , checked  })=>/*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
        name: keyName,
        checked: checked,
        defaultChecked: defaultChecked,
        color: "default",
        onChange: onChange,
        sx: {
            color: inValid && !checked ? "#ff6565" : "#d2d2d2",
            "&.Mui-checked": {
                color: "#232323"
            },
            padding: 0,
            "& .MuiSvgIcon-root": {
                fontSize: 26
            }
        }
    })
; // d2d2d2;

;// CONCATENATED MODULE: ./src/my/components/AgreementCheckBox/index.ts



/***/ }),

/***/ 9834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ AgreementItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/component/Spacing/index.ts + 1 modules
var Spacing = __webpack_require__(9461);
// EXTERNAL MODULE: ./src/my/components/AgreementCheckBox/index.ts + 1 modules
var AgreementCheckBox = __webpack_require__(1483);
;// CONCATENATED MODULE: ./src/my/components/AgreementItem/AgreementItem.tsx




const AgreementItem = ({ inValid , content , onChange , defaultChecked , onClickDetail , checked  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AgreementInnerItem, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AgreementCheckBox/* AgreementCheckBox */.i, {
                        inValid: inValid,
                        checked: checked,
                        onChange: onChange,
                        defaultChecked: defaultChecked
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                        width: 6
                    }),
                    content
                ]
            }),
            onClickDetail ? /*#__PURE__*/ jsx_runtime_.jsx(AgreementDetail, {
                onClick: onClickDetail,
                children: "내용보기"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
        ]
    });
};
const AgreementDetail = external_styled_components_default().div.withConfig({
    componentId: "sc-afd8f81c-0"
})`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-afd8f81c-1"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #4a4a4a;
`;
const AgreementInnerItem = external_styled_components_default().div.withConfig({
    componentId: "sc-afd8f81c-2"
})`
  display: flex;
  align-items: center;
`;

;// CONCATENATED MODULE: ./src/my/components/AgreementItem/index.ts



/***/ }),

/***/ 5120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ OptionalAgreementBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_component_Spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9461);
/* harmony import */ var _AgreementItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9834);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4910);
/* harmony import */ var _common_api_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4934);
/* harmony import */ var _common_api_useMutateMarketingConsent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9288);
/* harmony import */ var _common_api_useMutateNewsletterSubscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useUser__WEBPACK_IMPORTED_MODULE_5__]);
_common_api_useUser__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const useOptionalAgreementBox = ()=>{
    const { user , mutate: refresh  } = (0,_common_api_useUser__WEBPACK_IMPORTED_MODULE_5__/* .useUser */ .a)();
    const mutateMarketingConsent = (0,_common_api_useMutateMarketingConsent__WEBPACK_IMPORTED_MODULE_6__/* .useMutateMarketingConsent */ .y)();
    const mutateNewsletterSubscribe = (0,_common_api_useMutateNewsletterSubscribe__WEBPACK_IMPORTED_MODULE_7__/* .useMutateNewsletterSubscribe */ .r)();
    const onClickMarketing = async ({ target: { checked  }  })=>{
        await mutateMarketingConsent(checked);
        refresh();
    };
    const onClickNewsletter = async ({ target: { checked  }  })=>{
        await mutateNewsletterSubscribe(checked);
        refresh();
    };
    return {
        newsletter: user === null || user === void 0 ? void 0 : user.info_subscribe,
        marketing: user === null || user === void 0 ? void 0 : user.marketing_consent,
        onClickMarketing,
        onClickNewsletter
    };
};
const OptionalAgreementBox = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_4__/* .bind */ .a)(useOptionalAgreementBox, ({ newsletter , marketing , onClickMarketing , onClickNewsletter  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Agreements, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AgreementItem__WEBPACK_IMPORTED_MODULE_3__/* .AgreementItem */ .s, {
                    checked: newsletter,
                    onChange: onClickNewsletter,
                    content: "(선택) 뉴스레터 메일 수신"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_2__/* .Spacing */ .K, {
                    height: 3
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AgreementItem__WEBPACK_IMPORTED_MODULE_3__/* .AgreementItem */ .s, {
                    checked: marketing,
                    onChange: onClickMarketing,
                    content: "(선택) 이벤트와 혜택 정보 수신 동의"
                })
            ]
        })
    })
);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e32d87a2-0"
})`
  border: 1px solid #e7e7e7;
  width: 100%;
`;
const Agreements = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e32d87a2-1"
})`
  padding: 20px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport safe */ _OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_0__.F)
/* harmony export */ });
/* harmony import */ var _OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_0__]);
_OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* reexport */ SignupAgreementBox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/component/Spacing/index.ts + 1 modules
var Spacing = __webpack_require__(9461);
// EXTERNAL MODULE: ./src/my/components/AgreementCheckBox/index.ts + 1 modules
var AgreementCheckBox = __webpack_require__(1483);
// EXTERNAL MODULE: ./src/my/components/AgreementItem/index.ts + 1 modules
var AgreementItem = __webpack_require__(9834);
// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/my/components/SignupAgreementBox/useSignupAgreementBox.ts

const termsDocument = "https://jaram.notion.site/7613ed99191e4c13a44f08a8d10d39da";
const personalInformationDocument = "https://jaram.notion.site/7776b65825e0405ab2ea346fd6597c70";
const useSignupAgreementBox = ({ marketing , newsletter , required , onChangeMarketing , onChangeNewsletter , setRequiredAgreementFullfilled  })=>{
    const { 0: termsChecked , 1: setTermsChecked  } = (0,external_react_.useState)(false);
    const { 0: personalInformationChecked , 1: setPersonalInformationChecked  } = (0,external_react_.useState)(false);
    const { 0: newsletterChecked , 1: setNewsletterChecked  } = (0,external_react_.useState)(newsletter);
    const { 0: marketingChecked , 1: setMarketingChecked  } = (0,external_react_.useState)(marketing);
    if (termsChecked && personalInformationChecked) setRequiredAgreementFullfilled === null || setRequiredAgreementFullfilled === void 0 ? void 0 : setRequiredAgreementFullfilled(true);
    else setRequiredAgreementFullfilled === null || setRequiredAgreementFullfilled === void 0 ? void 0 : setRequiredAgreementFullfilled(false);
    const onChangeAgreeAll = async ({ target: { checked  }  })=>{
        setTermsChecked(checked);
        setPersonalInformationChecked(checked);
        setNewsletterChecked(checked);
        setMarketingChecked(checked);
    };
    const toggle = (prev)=>!prev
    ;
    const toggleTermsChecked = ()=>setTermsChecked(toggle)
    ;
    const togglePersonalInformationChecked = ()=>setPersonalInformationChecked(toggle)
    ;
    const toggleNewsletterChecked = ()=>{
        setNewsletterChecked(toggle);
        onChangeNewsletter();
    };
    const toggleMarketingChecked = ()=>{
        setMarketingChecked(toggle);
        onChangeMarketing();
    };
    const onClickDetail = ()=>window.open(termsDocument)
    ;
    const onClickPersonalInformationDetail = ()=>window.open(personalInformationDocument)
    ;
    return {
        required,
        termsChecked,
        personalInformationChecked,
        newsletterChecked,
        marketingChecked,
        onChangeAgreeAll,
        toggleTermsChecked,
        togglePersonalInformationChecked,
        toggleNewsletterChecked,
        toggleMarketingChecked,
        onClickDetail,
        onClickPersonalInformationDetail
    };
};

;// CONCATENATED MODULE: ./src/my/components/SignupAgreementBox/SignupAgreementBox.tsx







const SignupAgreementBox = (0,bind/* bind */.a)(useSignupAgreementBox, ({ required , termsChecked , personalInformationChecked , newsletterChecked , marketingChecked , onChangeAgreeAll , toggleTermsChecked , togglePersonalInformationChecked , toggleNewsletterChecked , toggleMarketingChecked , onClickDetail , onClickPersonalInformationDetail ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AgreeAllSection, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AgreementCheckBox/* AgreementCheckBox */.i, {
                        onChange: onChangeAgreeAll
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                        width: 7
                    }),
                    "전체 동의"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Agreements, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AgreementItem/* AgreementItem */.s, {
                        inValid: required,
                        checked: termsChecked,
                        onChange: toggleTermsChecked,
                        content: "(필수) 이용약관",
                        onClickDetail: onClickDetail
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                        height: 3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AgreementItem/* AgreementItem */.s, {
                        inValid: required,
                        checked: personalInformationChecked,
                        onChange: togglePersonalInformationChecked,
                        content: "(필수) 개인정보 수집 및 이용",
                        onClickDetail: onClickPersonalInformationDetail
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                        height: 3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AgreementItem/* AgreementItem */.s, {
                        checked: newsletterChecked,
                        onChange: toggleNewsletterChecked,
                        content: "(선택) 뉴스레터 메일 수신"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                        height: 3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AgreementItem/* AgreementItem */.s, {
                        checked: marketingChecked,
                        onChange: toggleMarketingChecked,
                        content: "(선택) 이벤트와 혜택 정보 수신 동의"
                    })
                ]
            })
        ]
    })
);
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-77c7f2d0-0"
})`
  border: 1px solid #e7e7e7;
  width: 100%;
`;
const AgreeAllSection = external_styled_components_default().div.withConfig({
    componentId: "sc-77c7f2d0-1"
})`
  padding: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  border-bottom: 1px solid #e7e7e7;
  font-weight: 600;
`;
const Agreements = external_styled_components_default().div.withConfig({
    componentId: "sc-77c7f2d0-2"
})`
  padding: 20px;
`;

;// CONCATENATED MODULE: ./src/my/components/SignupAgreementBox/index.ts



/***/ }),

/***/ 4504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserSignupForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_component_Spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9461);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4910);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useUserSignupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7662);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_component_Select_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4940);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SignupAgreementBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8312);
/* harmony import */ var _OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2618);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUserSignupForm__WEBPACK_IMPORTED_MODULE_4__, _OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_9__]);
([_useUserSignupForm__WEBPACK_IMPORTED_MODULE_4__, _OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const UserSignupForm = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_2__/* .bind */ .a)(_useUserSignupForm__WEBPACK_IMPORTED_MODULE_4__/* .useUserSignupForm */ .$, ({ register , submit , level , company , onSelectChange , onCompanyChange , companyList , jobField , totalCareer , companyType , signup , jobFieldOptions , levelOptions , totalCarrerOptions , companyTypeOptions , onBlur , onChangeMarketing , onChangeNewsletter , errors , success , marketingChecked , newsletterChecked , isFulfilled , isValidEmail , isValidOptionalEmail , lastRequiredCheck , setRequiredAgreementFullfilled ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_1__/* .Spacing */ .K, {
                height: 38
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: signup ? "회원 가입" : "프로필"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTitle, {
                children: "프로그램 참가를 위해 정확한 프로필을 입력해 주세요."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledForm, {
                isSignup: signup,
                onSubmit: submit,
                onBlur: onBlur,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldTitle, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default()), {
                                sx: {
                                    fontSize: "18px",
                                    paddingTop: "1px"
                                }
                            }),
                            "프로그램 참가 안내를 위한 기본 항목입니다."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "이름"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                                inValid: !!errors.name,
                                ...register("name", {
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                children: errors.name && "필수 입력 항목입니다."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                className: "Phone",
                                children: "핸드폰 번호"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Phone, {
                                ...register("phone"),
                                disabled: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "이메일"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                                inValid: !!errors.email,
                                ...register("email", {
                                    required: true,
                                    validate: isValidEmail
                                })
                            }),
                            errors.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                        children: errors.email.type === "required" ? "필수 입력 항목입니다." : "잘못된 이메일 형식 입니다."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {
                                active: true,
                                children: "참가 안내를 받기 위한 이메일을 입력해 주세요."
                            })
                        ]
                    }),
                    !signup && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                        children: "(선택) 슬랙 이메일"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                                        ...register("slackEmail", {
                                            validate: isValidOptionalEmail
                                        }),
                                        placeholder: "미입력시 위 이메일로 안내 드립니다."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                        children: errors.slackEmail && "잘못된 이메일 형식 입니다."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                        children: "(선택) 노션 이메일"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                                        ...register("notionEmail", {
                                            validate: isValidOptionalEmail
                                        }),
                                        placeholder: "미입력시 위 이메일로 안내 드립니다."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                        children: errors.notionEmail && "잘못된 이메일 형식 입니다."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_1__/* .Spacing */ .K, {
                        height: 30
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {
                        className: "middle"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldTitle, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default()), {
                                sx: {
                                    fontSize: "18px",
                                    paddingTop: "1px"
                                }
                            }),
                            "맞춤형 피드백과 혜택 제공을 위한 항목입니다."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PromotionText, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default()), {
                                sx: {
                                    fontSize: "18px",
                                    paddingTop: "1px"
                                }
                            }),
                            "소속, 직무, 연차를 입력하면 VOD 세미나 프리티켓을 드려요!"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "포지션"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                                inValid: !!errors.jobTitle,
                                ...register("jobTitle", {
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                children: errors.jobTitle && "필수 입력 항목입니다."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {
                                active: true,
                                children: "예) 퍼포머스 마케터, 콘텐츠 에디터, 브랜딩 리드, CTO"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "분야"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_10__/* .SelectContainer */ .e, {
                                keyName: "jobField",
                                inValid: !!errors.jobField,
                                register: register,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Select_Select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P, {
                                    keyName: "jobField",
                                    inValid: !!errors.jobField,
                                    value: jobField,
                                    options: jobFieldOptions,
                                    onChange: (e)=>onSelectChange(e, "jobField")
                                    ,
                                    style: SelectStyle
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "직급"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_10__/* .SelectContainer */ .e, {
                                keyName: "level",
                                inValid: !!errors.level,
                                register: register,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Select_Select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P, {
                                    keyName: "level",
                                    inValid: !!errors.level,
                                    value: level,
                                    options: levelOptions,
                                    onChange: (e)=>onSelectChange(e, "level")
                                    ,
                                    style: SelectStyle
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "총 경력"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_10__/* .SelectContainer */ .e, {
                                keyName: "totalCareer",
                                inValid: !!errors.totalCareer,
                                register: register,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Select_Select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P, {
                                    keyName: "totalCareer",
                                    inValid: !!errors.totalCareer,
                                    value: totalCareer,
                                    options: totalCarrerOptions,
                                    onChange: (e)=>onSelectChange(e, "totalCareer")
                                    ,
                                    style: SelectStyle
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "회사 유형"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_10__/* .SelectContainer */ .e, {
                                keyName: "companyType",
                                inValid: !!errors.companyType,
                                register: register,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Select_Select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P, {
                                    keyName: "companyType",
                                    inValid: !!errors.companyType,
                                    value: companyType,
                                    options: companyTypeOptions,
                                    onChange: (e)=>onSelectChange(e, "companyType")
                                    ,
                                    style: SelectStyle
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldName, {
                                children: "회사명"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Autocomplete, {
                                freeSolo: true,
                                options: companyList !== null && companyList !== void 0 ? companyList : [],
                                disableClearable: true,
                                renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                        name: "company",
                                        ...params,
                                        sx: {
                                            ".MuiOutlinedInput-root": {
                                                height: "44px",
                                                padding: "0",
                                                paddingLeft: "10px",
                                                border: `${errors.company ? "1px solid red" : "1px solid #DDE0E2"}`
                                            }
                                        }
                                    })
                                ,
                                onInputChange: onCompanyChange,
                                value: company,
                                sx: {
                                    height: "44px",
                                    borderRadius: "5px",
                                    fontSize: "14px",
                                    "& fieldset": {
                                        border: "none"
                                    },
                                    width: "100%"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_10__/* .SelectContainer */ .e, {
                                keyName: "company",
                                inValid: !!(errors.company && !company),
                                register: register
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptySpace, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {
                                active: true,
                                children: "현재 재직 중이 아니라면 직전 회사명을 입력하세요."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_1__/* .Spacing */ .K, {
                        height: 15
                    }),
                    signup ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SignupAgreementBox__WEBPACK_IMPORTED_MODULE_8__/* .SignupAgreementBox */ .M, {
                        required: lastRequiredCheck,
                        marketing: marketingChecked,
                        newsletter: newsletterChecked,
                        onChangeMarketing: onChangeMarketing,
                        onChangeNewsletter: onChangeNewsletter,
                        setRequiredAgreementFullfilled: setRequiredAgreementFullfilled
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OptionalAgreementBox__WEBPACK_IMPORTED_MODULE_9__/* .OptionalAgreementBox */ .F, {
                        marketing: marketingChecked,
                        newsletter: newsletterChecked,
                        onChangeMarketing: onChangeMarketing,
                        onChangeNewsletter: onChangeNewsletter
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_1__/* .Spacing */ .K, {
                        height: 30
                    }),
                    isFulfilled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubmitButton, {
                        type: "submit",
                        children: signup ? "회원 가입" : "저장"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            signup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubmitButton, {
                                children: "회원 가입"
                            }),
                            !signup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DisabledButton, {
                                children: "저장"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_1__/* .Spacing */ .K, {
                        height: 18
                    })
                ]
            }),
            success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessMessage, {
                children: signup ? "회원 가입이 완료되었습니다" : "프로필이 저장되었습니다"
            }),
            !success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultMessage, {
                success: success,
                children: "프로필/가입이 완료되었습니다"
            })
        ]
    });
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-0"
})`
  padding: 38px 63px 50px 63px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px) {
    padding: 3px 22px 50px 22px;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1.withConfig({
    componentId: "sc-2cbb12de-1"
})`
  margin-bottom: 32px;
  font-size: 30px;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    margin-bottom: 22px;
    font-size: 26px;
    font-weight: 400;
  }
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1.withConfig({
    componentId: "sc-2cbb12de-2"
})`
  margin-bottom: 49px;
  font-size: 16px;
  font-weight: 400;
  color: #1a1a1a;

  @media screen and (max-width: 960px) {
    margin-bottom: 40px;
    font-size: 13px;
    font-weight: 400;
  }
`;
const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
    componentId: "sc-2cbb12de-3"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
  width: ${({ isSignup  })=>isSignup ? "420px" : "440px"
};

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const FieldTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1.withConfig({
    componentId: "sc-2cbb12de-4"
})`
  color: #63b843;
  font-size: 13px;
  font-weight: 600;
  width: 100%;
  margin-top: 22px;

  @media screen and (max-width: 960px) {
    margin: 27px 0 2px;
  }
`;
const FieldRow = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-5"
})`
  display: grid;
  grid-template-columns: 1.8fr 4fr;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    margin-top: 22px;
  }
`;
const FieldName = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
    componentId: "sc-2cbb12de-6"
})`
  font-size: 14px;

  @media screen and (max-width: 960px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default().input.withConfig({
    componentId: "sc-2cbb12de-7"
})`
  border: ${({ inValid  })=>inValid ? "1px solid red" : "1px solid #d7d7d7"
};
  border-radius: 3px;
  height: 42px;
  padding: 0 14px;
  font-size: 14px;
  color: black;
  &::placeholder {
    font-size: 13px;
    color: #8b95a1;
  }
`;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
    componentId: "sc-2cbb12de-8"
})`
  width: 280px;
  border-radius: 5px;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 36px;
  background: #00bc28;
  color: #fff;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const DisabledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
    componentId: "sc-2cbb12de-9"
})`
  width: 280px;
  border-radius: 5px;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 36px;
  background: #e7e7e7;
  color: #ffffff;

  &:disabled {
    background: #dddddd;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const PromotionText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-10"
})`
  font-size: 12px;
  color: #63b843;
  letter-spacing: -0.02em;
  font-weight: 600;
  display: none;
  align-items: center;
`;
const Phone = styled_components__WEBPACK_IMPORTED_MODULE_3___default().input.withConfig({
    componentId: "sc-2cbb12de-11"
})`
  padding: 0 14px;
  height: 42px;
  background-color: #f6f6f6;
  color: #cccccc;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  font-size: 14px;
`;
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-12"
})`
  font-size: 12px;
  font-size: ${({ last  })=>last ? "14px" : "12px"
};
  margin: 2px;
  color: #de1313;

  @media screen and (max-width: 960px) {
    font-size: 11px;
    margin: 1px 2px;
  }
`;
const Message = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-13"
})`
  font-size: 12px;
  color: ${({ active  })=>active ? "#8b95a1" : "#FFFFFF"
};
  margin: 2px;

  @media screen and (max-width: 960px) {
    font-size: 11px;
    margin: 1px 2px;
  }
`;
const EmptySpace = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
    componentId: "sc-2cbb12de-14"
})`
  font-weight: 600;
  font-size: 14px;
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-15"
})`
  width: 480px;
  align-self: center;
  border-bottom: 1px solid #000000;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  &.middle {
    border-bottom: 1px solid #e7e7e7;
  }
`;
const SelectStyle = {
    height: "46px",
    border: "1px solid #d7d7d7;",
    fontSize: "14px",
    "& fieldset": {
        border: "none"
    }
};
const SuccessMessage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-16"
})`
  margin: 2px auto;
  font-size: 14px;
  font-weight: 600;
  color: #63b843;
  animation-duration: 0.8s;
  animation-name: fade-in;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
const DefaultMessage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2cbb12de-17"
})`
  margin: 2px auto;
  font-size: 14px;
  font-weight: 600;
  color: ${({ success  })=>success ? "#63b843" : "#fff"
};

  @keyframes fade-out {
    from {
      opacity: 1;
      transform: translateY(50%);
    }
    to {
      opacity: 0;
      transform: translateY(0%);
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* reexport */ SelectContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/my/components/UserSignupForm/component/SelectContainer.tsx


const SelectContainer = ({ keyName , inValid , register , children ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(EmptySpace, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledSelect, {
                name: keyName,
                inValid: inValid,
                ...register(keyName, {
                    required: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EmptySpace, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                "data-test": "errorMessage",
                children: inValid && "필수 입력 항목입니다."
            })
        ]
    });
};
const EmptySpace = external_styled_components_default().span.withConfig({
    componentId: "sc-1274adb3-0"
})`
  font-weight: 600;
  font-size: 14px;
`;
const StyledSelect = external_styled_components_default().input.withConfig({
    componentId: "sc-1274adb3-1"
})`
  height: 1px;
  border: none;
  color: #fff;
`;
const ErrorMessage = external_styled_components_default().div.withConfig({
    componentId: "sc-1274adb3-2"
})`
  font-size: 12px;
  margin: 2px;
  color: #de1313;
  @media screen and (max-width: 960px) {
    margin: 1px 2px;
    font-size: 11px;
  }
`;

;// CONCATENATED MODULE: ./src/my/components/UserSignupForm/component/index.ts



/***/ }),

/***/ 6925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _UserSignupForm__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _UserSignupForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4504);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserSignupForm__WEBPACK_IMPORTED_MODULE_0__]);
_UserSignupForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useUserSignupForm)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _common_api_useCompanyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9126);
/* harmony import */ var _common_api_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4934);
/* harmony import */ var _common_api_useMemberOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4095);
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(304);
/* harmony import */ var _common_hook_useConvertPhoneNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(684);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5022);
/* harmony import */ var _common_hook_useValidEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9841);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _common_api_useCompanyList__WEBPACK_IMPORTED_MODULE_3__, _common_api_useUser__WEBPACK_IMPORTED_MODULE_4__, _common_api_useMemberOption__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _common_api_useCompanyList__WEBPACK_IMPORTED_MODULE_3__, _common_api_useUser__WEBPACK_IMPORTED_MODULE_4__, _common_api_useMemberOption__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










var ref;
const arrayToSelectProps = (array)=>{
    return (ref = array === null || array === void 0 ? void 0 : array.map((element)=>({
            value: element,
            label: element
        })
    )) !== null && ref !== void 0 ? ref : [];
};
const defaultInputs = {
    name: "",
    email: "",
    phone: "",
    slackEmail: "",
    notionEmail: "",
    company: "",
    jobTitle: "",
    jobField: "",
    level: "",
    totalCareer: "",
    companyType: "",
    marketingChecked: false,
    newsletterChecked: false
};
const useUserSignupForm = ()=>{
    const { 0: initialized , 1: setInitialized  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { memberOptions  } = (0,_common_api_useMemberOption__WEBPACK_IMPORTED_MODULE_5__/* .useMemberOption */ .y)();
    const { user , mutate: refreshUserInfo  } = (0,_common_api_useUser__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .a)();
    const { 0: success , 1: setSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { pathname , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const signup = pathname === "/my/signup";
    const { 0: requiredAgreementFullfilled , 1: setRequiredAgreementFullfilled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!signup);
    const { 0: lastRequiredCheck , 1: setLastRequiredCheck  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { register , reset , handleSubmit , watch , setValue , trigger , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: defaultInputs
    });
    const { getCompanyList , companyList  } = (0,_common_api_useCompanyList__WEBPACK_IMPORTED_MODULE_3__/* .useCompanyList */ .K)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = localStorage.getItem("access_token");
        if (!token && !user) {
            push("/");
        }
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user || initialized) return;
        reset({
            name: user.full_name,
            email: user.email,
            phone: convertPhoneNumber(user.phone),
            slackEmail: user.slack_email,
            notionEmail: user.notion_email,
            company: user.company,
            jobTitle: user.job_title,
            jobField: user.job_field,
            level: user.level,
            totalCareer: user.total_career,
            companyType: user.company_type,
            marketingChecked: user.marketing_consent,
            newsletterChecked: user.info_subscribe
        });
        setInitialized(true);
    }, [
        user
    ]);
    const convertPhoneNumber = (0,_common_hook_useConvertPhoneNumber__WEBPACK_IMPORTED_MODULE_8__/* .useConvertPhoneNumber */ .O)();
    const [name1, email1, slackEmail, notionEmail, company1, level1, jobTitle1, jobField1, totalCareer1, companyType1, marketingChecked1, newsletterChecked1, ] = watch([
        "name",
        "email",
        "slackEmail",
        "notionEmail",
        "company",
        "level",
        "jobTitle",
        "jobField",
        "totalCareer",
        "companyType",
        "marketingChecked",
        "newsletterChecked", 
    ]);
    const getTrimedString = (data)=>{
        return Object.keys(data).reduce((tot, key)=>{
            var ref1;
            return {
                ...tot,
                [key]: (ref1 = data[key]) === null || ref1 === void 0 ? void 0 : ref1.trim()
            };
        }, {});
    };
    const onSelectChange = ({ target: { value  }  }, fieldName)=>{
        setValue(fieldName, value === null || value === void 0 ? void 0 : value.trim());
    };
    const onChangeMarketing = ()=>{
        setValue("marketingChecked", !marketingChecked1);
    };
    const onChangeNewsletter = ()=>{
        setValue("newsletterChecked", !newsletterChecked1);
    };
    const onCompanyChange = (_, value)=>{
        value && getCompanyList(value);
        setValue("company", value === null || value === void 0 ? void 0 : value.trim());
    };
    const setDelay = ()=>{
        setSuccess(false);
        push("/my");
    };
    const submit = handleSubmit(({ email , level , company , name , jobTitle , jobField , companyType , totalCareer , marketingChecked , newsletterChecked ,  })=>{
        const data1 = {
            email,
            slack_email: slackEmail,
            notion_email: notionEmail,
            level,
            company: company,
            full_name: name,
            job_title: jobTitle,
            job_field: jobField,
            total_career: totalCareer,
            company_type: companyType
        };
        if (!isFulfilled) {
            trigger();
            setLastRequiredCheck(!requiredAgreementFullfilled);
            return;
        }
        (0,_utils_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .fetchPut */ .ZE)({
            url: (0,_common_constant_api__WEBPACK_IMPORTED_MODULE_6__/* .putUpdateMemberInfo */ .OG)(signup),
            data: {
                ...getTrimedString(data1),
                marketing_consent: marketingChecked,
                info_subscribe: newsletterChecked
            },
            withToken: true
        }).then((data)=>{
            refreshUserInfo();
            setSuccess(!!data);
            setTimeout(setDelay, 3500);
        });
    });
    const isValidEmail = (email)=>{
        const isValid = (0,_common_hook_useValidEmail__WEBPACK_IMPORTED_MODULE_9__/* .useValidEmail */ .c)(email);
        return isValid;
    };
    const isValidOptionalEmail = (email)=>{
        const isValid = (0,_common_hook_useValidEmail__WEBPACK_IMPORTED_MODULE_9__/* .useValidEmail */ .c)(email, true);
        return isValid;
    };
    const onClickSignout = ()=>{
        (0,_utils_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .fetchDelete */ .Y2)({
            url: _common_constant_api__WEBPACK_IMPORTED_MODULE_6__/* .DElETE_MEMBER */ .$6,
            withToken: true
        }).then(()=>{
            refreshUserInfo();
            alert("정상적으로 탈퇴 처리 되었습니다.");
            push("/");
        });
    };
    const onBlur = (e)=>{
        const target = e.target;
        if (target === null || target === void 0 ? void 0 : target.name) {
            trigger(target.name);
        }
    };
    const jobFieldOptions = arrayToSelectProps(memberOptions === null || memberOptions === void 0 ? void 0 : memberOptions.job_field);
    const levelOptions = arrayToSelectProps(memberOptions === null || memberOptions === void 0 ? void 0 : memberOptions.level);
    const totalCarrerOptions = arrayToSelectProps(memberOptions === null || memberOptions === void 0 ? void 0 : memberOptions.total_career);
    const companyTypeOptions = arrayToSelectProps(memberOptions === null || memberOptions === void 0 ? void 0 : memberOptions.company_type);
    const isFulfilled = !!(name1 && email1 && level1 && company1 && jobTitle1 && jobField1 && companyType1 && totalCareer1 && requiredAgreementFullfilled && isValidEmail(email1) && isValidOptionalEmail(slackEmail) && isValidOptionalEmail(notionEmail));
    return {
        register,
        submit,
        isFulfilled,
        name: name1,
        email: email1,
        level: level1,
        jobTitle: jobTitle1,
        company: company1,
        onSelectChange,
        onCompanyChange,
        companyList,
        jobField: jobField1,
        totalCareer: totalCareer1,
        companyType: companyType1,
        signup,
        arrayToSelectProps,
        requiredAgreementFullfilled,
        setRequiredAgreementFullfilled,
        jobFieldOptions,
        levelOptions,
        totalCarrerOptions,
        companyTypeOptions,
        marketingChecked: marketingChecked1,
        newsletterChecked: newsletterChecked1,
        onChangeMarketing,
        onChangeNewsletter,
        onBlur,
        lastRequiredCheck,
        errors,
        success,
        isValidEmail,
        isValidOptionalEmail
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2747);
/* harmony import */ var _components_UserSignupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout__WEBPACK_IMPORTED_MODULE_2__, _components_UserSignupForm__WEBPACK_IMPORTED_MODULE_3__]);
([_containers_layout__WEBPACK_IMPORTED_MODULE_2__, _components_UserSignupForm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Signup = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        "data-test": "signup-page",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UserSignupForm__WEBPACK_IMPORTED_MODULE_3__/* .UserSignupForm */ .S, {})
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _Signup__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Signup__WEBPACK_IMPORTED_MODULE_0__]);
_Signup__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8765:
/***/ ((module) => {

module.exports = require("@datadog/browser-rum");

/***/ }),

/***/ 1658:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

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

/***/ 8330:
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

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

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,485,738,448,815,304,49,22,934,125], () => (__webpack_exec__(2915)));
module.exports = __webpack_exports__;

})();