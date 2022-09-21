"use strict";
(() => {
var exports = {};
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 5925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Popup)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@material-ui/core/Button"
const Button_namespaceObject = require("@material-ui/core/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Dialog"
const Dialog_namespaceObject = require("@material-ui/core/Dialog");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__(929);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__(6856);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__(5233);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
;// CONCATENATED MODULE: ./components/Popup/Popup.tsx







function Popup({ open , title , message , txtCancel , txtSubmit , handleAccept , handleClose , onClose  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "dialog-title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: title || ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "closebtn",
                        onClick: onClose ? onClose : handleClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/s_images/bt_nav_close_bk.png",
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                    id: "alert-dialog-description",
                    children: message || ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                classes: {
                    root: "dialog-btn-warpper"
                },
                style: {
                    justifyContent: txtCancel ? "space-between" : "center"
                },
                children: [
                    txtCancel && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        classes: {
                            root: "btncancel"
                        },
                        disableRipple: true,
                        onClick: handleClose,
                        children: txtCancel
                    }),
                    txtSubmit && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        classes: {
                            root: "btncomplete",
                            label: "completelabel"
                        },
                        disableRipple: true,
                        onClick: handleAccept,
                        children: txtSubmit
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Popup/index.tsx



/***/ }),

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

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fY": () => (/* binding */ PRODUCT_TYPE)
/* harmony export */ });
/* unused harmony exports classify, SELLING_STATUS */
const classify = {
    list: 'product-list'
};
const SELLING_STATUS = {
    SUCCESS: '결제완료',
    CANCELLINGPAYMENT: '결제 취소 중',
    PENDING: '결제대기',
    CANCEL: '주문취소'
};
const PRODUCT_TYPE = {
    ADVANCE_RESERVATION: '사전예약',
    MAIN: '기수제',
    SEMINAR: '세미나',
    VOD: 'VOD'
};


/***/ }),

/***/ 2991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3592);
/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_iamport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_StringUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2901);
/* harmony import */ var _reduxs_ProgramRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1623);
/* harmony import */ var _reduxs_ProductRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(936);
/* harmony import */ var _constants_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3805);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2747);
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5925);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants_Product__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5712);
/* harmony import */ var _src_common_hook_useQueryString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2756);
/* harmony import */ var _hooks_common_useReservedPrice__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3077);
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3946);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_component_Spacing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9461);
/* harmony import */ var emoji_regex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(893);
/* harmony import */ var emoji_regex__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(emoji_regex__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_hook_usePushRouterLogin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2034);
/* harmony import */ var _common_component_AmplitudeViewdEvent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1773);
/* harmony import */ var _common_hook_useAmplitude__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8755);
/* harmony import */ var _common_component_AmplitudeClickedEvent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6145);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout__WEBPACK_IMPORTED_MODULE_10__]);
_containers_layout__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
























let paymentServer = "";
switch(_common_constant__WEBPACK_IMPORTED_MODULE_15__/* .RUNNING_ENV */ .C){
    case "production":
        paymentServer = "prod_";
        break;
    case "development":
        paymentServer = "dev_";
        break;
    case "staging":
        paymentServer = "stage_";
        break;
    default:
        paymentServer = "local_";
        break;
}
const AMPMtoKorean = (time)=>time.replace("am", "오전").replace("pm", "오후")
;
let merchantUuid;
function Product() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { 0: isShow , 1: setIsShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isShowPopup , 1: setIsShowPopup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        products: [],
        product_type: ""
    });
    const { 0: selecteds , 1: setSelecteds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { userInfo  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth.contents
    );
    const msgSuccess = "프로그램에 참여해 주셔서 감사합니다. 결제가 완료되었습니다.";
    const { secret  } = (0,_src_common_hook_useQueryString__WEBPACK_IMPORTED_MODULE_14__/* .useQueryString */ .N)();
    const { logEvent  } = (0,_common_hook_useAmplitude__WEBPACK_IMPORTED_MODULE_21__/* .useAmplitude */ .i)();
    const pushRouterLogin = (0,_common_hook_usePushRouterLogin__WEBPACK_IMPORTED_MODULE_19__/* .usePushRouterLogin */ .V)();
    const [product] = selecteds;
    const logData = {
        programId: router.query.id,
        productId: product === null || product === void 0 ? void 0 : product.product_id,
        programName: data.name,
        productName: product === null || product === void 0 ? void 0 : product.name,
        productType: product === null || product === void 0 ? void 0 : product.product_type
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = localStorage.getItem("access_token");
        if (!token) {
            return pushRouterLogin();
        } else if (router.query.id) {
            var ref;
            // TODO: Remvoe this; SBA products would redirect to Google forms
            const id = (ref = router.query.id) === null || ref === void 0 ? void 0 : ref.toString();
            if ([
                "384"
            ].includes(id)) {
                router.push("https://forms.gle/bKS86fGLGHsGzEir9");
            } else if ([
                "669",
                "672"
            ].includes(id)) {
                router.push("https://forms.gle/iadPmEkmsNv6H3kb6");
            } else if ([
                "673",
                "674",
                "675"
            ].includes(id)) {
                router.push("https://forms.gle/y8pMAY8MfE7EPMCj8");
            } else if ([
                "676",
                "677"
            ].includes(id)) {
                router.push("https://forms.gle/sN1EdiqBvVC5FVGm8");
            } else if ([
                "701"
            ].includes(id)) {
                router.push("https://forms.gle/gqmMcHmnfRwiB5C29");
            } else if ([
                "710"
            ].includes(id)) {
                router.push("https://forms.gle/Bhhi8TZ824JSzEpV7");
            } else if ([
                "716"
            ].includes(id)) {
                router.push("https://forms.gle/HQdPKn1N6V8CRmhc8");
            } else if ([
                "718"
            ].includes(id)) {
                router.push("https://forms.gle/mfqgvGZgK4atSsmMA");
            } else if ([
                "719"
            ].includes(id)) {
                router.push("https://forms.gle/yNheNtswfMbcCoD89");
            } else if ([
                "720"
            ].includes(id)) {
                router.push("https://forms.gle/cSvgPGfBswrR65hM7");
            } else if ([
                "721"
            ].includes(id)) {
                router.push("https://forms.gle/SZTVrYifb7zicPBJ6");
            }
        }
    }, [
        router.query.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.query.id) {
            dispatch(_reduxs_ProgramRedux__WEBPACK_IMPORTED_MODULE_7__/* ["default"].handleGetProgramDetailRequest */ .ZP.handleGetProgramDetailRequest("programDetail", {
                id: router.query.id,
                secret
            }, handleGetProgramDetailSuccess));
        // secret 상품 결제 화면에서 query 값이 사라져도 상관 없는지 테스트 후 활성화
        // history.replaceState({}, '', location.pathname); // url 에서 reservation 삭제
        }
    }, [
        router.query.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof router.query.imp_success === "string") {
            const stringJson = localStorage.getItem("dataPayment");
            if (stringJson && selecteds.length === 0) {
                const dataPayment = JSON.parse(stringJson);
                setData(dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.data);
                setIsShow(dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.isShow);
                setMessage(dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.message);
                setIsShowPopup(dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.isShowPopup);
                setSelecteds(dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.selecteds);
                localStorage.removeItem("dataPayment");
                if (router.query.imp_success === "true") {
                    handleonIamportSuccess(router.query, dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.selecteds, dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.userInfo, dataPayment === null || dataPayment === void 0 ? void 0 : dataPayment.isShow);
                } else if (router.query.imp_success === "false") {
                    handleonIamportFailure(router.query);
                }
            }
            const secretUrl = router.query.secret ? "?secret=" + router.query.secret : "";
            router.push(`/program/${router.query.id}/product${secretUrl}`);
        }
    }, [
        router.query.imp_success
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("products", JSON.stringify(selecteds));
        if (selecteds.length > 0) {
            const { product_id , name , price , list_price  } = selecteds[0];
            react_gtm_module__WEBPACK_IMPORTED_MODULE_12___default().dataLayer({
                dataLayer: {
                    ecommerce: null
                }
            });
            react_gtm_module__WEBPACK_IMPORTED_MODULE_12___default().dataLayer({
                dataLayer: {
                    event: "checkout",
                    ecommerce: {
                        checkout: {
                            actionField: {
                                step: 2
                            },
                            products: [
                                {
                                    id: product_id,
                                    name: name,
                                    price: price,
                                    quantity: "1"
                                }, 
                            ]
                        }
                    },
                    goodsInfo: [
                        {
                            item_id: product_id,
                            item_name: name,
                            price: price,
                            full_price: list_price,
                            quantity: "1"
                        }, 
                    ]
                }
            });
        }
    }, [
        selecteds
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const stringJson = localStorage.getItem("products");
        if (stringJson && selecteds.length === 0) {
            const products = JSON.parse(stringJson);
            setSelecteds(products);
        }
    }, []);
    const handleGetProgramDetailSuccess = (response)=>{
        if (Array.isArray(response === null || response === void 0 ? void 0 : response.program_product)) {
            setData({
                name: response.name,
                products: response.program_product,
                product_type: response.products[0].product_type
            });
            let mySelling = response.program_product[0];
            const newPrice = (0,_hooks_common_useReservedPrice__WEBPACK_IMPORTED_MODULE_23__/* .useReservedPrice */ .x)(router, mySelling);
            response.program_product.map((item)=>{
                if (item.price < mySelling.price) {
                    mySelling = item;
                }
            });
            setSelecteds([
                {
                    ...mySelling,
                    price: newPrice
                }
            ]);
        }
    };
    const handleOnChangeMethodPayment = (value)=>{
        setIsShow(value);
    };
    const handleOnClickChecked = (checked, value)=>{
        setSelecteds([
            {
                ...value
            }
        ]);
    };
    const getProductName = (list = selecteds)=>{
        var ref;
        // Create product name using selecteds count
        const name = list.length > 1 ? `${list[0].name} 외 ${list.length}개` : (ref = list[0]) === null || ref === void 0 ? void 0 : ref.name;
        // Remove emojis (replace name when empty product name)
        const regex = emoji_regex__WEBPACK_IMPORTED_MODULE_18___default()();
        return (name || _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.name */ .dC.name).replace(regex, "");
    };
    const getTotalMoney = (list = selecteds)=>{
        const total = list.reduce((x, y)=>{
            return x + (y === null || y === void 0 ? void 0 : y.price) || 0;
        }, 0);
        return total;
    };
    const getTotalMoneyListPrice = (list = selecteds)=>{
        const total = list.reduce((x, y)=>{
            return x + (y === null || y === void 0 ? void 0 : y.list_price);
        }, 0);
        return total;
    };
    const getProductIds = (list = selecteds)=>{
        return list.map((i)=>i.product_id
        );
    };
    const getTitleStartDate = (item)=>{
        var ref;
        if (!((ref = item.schedules[0]) === null || ref === void 0 ? void 0 : ref.start_date) || !item.schedules[0].end_date) return null;
        const date = moment__WEBPACK_IMPORTED_MODULE_2___default()(item.schedules[0].start_date).format("YYYY.MM.DD(ddd)");
        const hourStart = AMPMtoKorean(moment__WEBPACK_IMPORTED_MODULE_2___default()(item.schedules[0].start_date).format("a hh:mm"));
        const hourEnd = moment__WEBPACK_IMPORTED_MODULE_2___default()(item.schedules[0].end_date).format("hh:mm");
        return `${date} ${hourStart} ~ ${hourEnd}`;
    };
    const handleonIamportSuccess = (response, list = selecteds, user = userInfo, isVbank = isShow)=>{
        const secretUrl = secret ? "?secret=" + secret : "";
        const myParams = {
            pg: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.pg */ .dC.pg,
            pay_method: isVbank ? "vbank" : "card",
            merchant_uid: merchantUuid,
            name: getProductName(list),
            amount: getTotalMoney(list),
            buyer_email: (user === null || user === void 0 ? void 0 : user.email) || "",
            buyer_name: (user === null || user === void 0 ? void 0 : user.full_name) || "",
            buyer_tel: (user === null || user === void 0 ? void 0 : user.phone) || "",
            buyer_addr: (user === null || user === void 0 ? void 0 : user.address) || "",
            buyer_postcode: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.buyer_postcode */ .dC.buyer_postcode,
            tier_code: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.tier_code */ .dC.tier_code,
            imp_apikey: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.imp_apikey */ .dC.imp_apikey,
            m_redirect_url: `${_constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.redirect_url */ .dC.redirect_url}/program/${router.query.id}/product${secretUrl}`
        };
        const params = {
            product_id: getProductIds(list),
            member_id: user.id,
            payment_method: isVbank ? 2 : 1,
            total_price: getTotalMoneyListPrice(list),
            amount: getTotalMoney(list),
            request_data: JSON.stringify(myParams),
            response_data: JSON.stringify(response),
            status: "success"
        };
        dispatch(_reduxs_ProductRedux__WEBPACK_IMPORTED_MODULE_8__/* ["default"].postResponsePaymentRequest */ .ZP.postResponsePaymentRequest("payment-response", params));
        localStorage.setItem("paymentSuccess", "true");
        const txInfo = {
            tx_id: response.merchant_uid,
            revenue: response.paid_amount,
            pay_method: response.pay_method === "card" ? "신용/체크카드" : "무통장입금"
        };
        const goodsInfo = [
            {
                item_id: router.query.id,
                item_name: data.name,
                price: response.paid_amount,
                quantity: 1,
                item_variant: list[0].name,
                product_id: list[0].product_id
            }, 
        ];
        const uaGoods = [
            {
                id: router.query.id,
                name: data.name,
                price: response.paid_amount,
                quantity: 1,
                variant: list[0].name
            }, 
        ];
        const push = {
            event: "purchase",
            ecommerce: {
                purchase: {
                    actionField: {
                        id: txInfo.tx_id,
                        revenue: txInfo.revenue
                    },
                    products: uaGoods
                }
            },
            txInfo: txInfo,
            goodsInfo: goodsInfo
        };
        react_gtm_module__WEBPACK_IMPORTED_MODULE_12___default().dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });
        react_gtm_module__WEBPACK_IMPORTED_MODULE_12___default().dataLayer({
            dataLayer: push
        });
        logEvent("purchase", logData);
        if (!isVbank) {
            setIsShowPopup(true);
            setMessage(msgSuccess);
        } else {
            router.push(`/program/${router.query.id}/product/${isVbank ? "paymentdeposit" : "paymentfin"}`);
        }
    };
    const handleonIamportFailure = (errors)=>{
        setIsShowPopup(true);
        setMessage(errors === null || errors === void 0 ? void 0 : errors.error_msg);
    };
    const RenderRequestPayment = (list = selecteds)=>{
        if (!userInfo) return null;
        merchantUuid = paymentServer + new Date().getTime();
        const secretUrl = secret ? "?secret=" + secret : "";
        const customData = {
            member_id: userInfo.id,
            product_ids: getProductIds(list)
        };
        const myParams = {
            pg: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.pg */ .dC.pg,
            pay_method: isShow ? "vbank" : "card",
            merchant_uid: merchantUuid,
            name: getProductName(list),
            amount: getTotalMoney(list),
            buyer_email: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.email) || "",
            buyer_name: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.full_name) || "",
            buyer_tel: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.phone) || "",
            buyer_addr: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.address) || "",
            buyer_postcode: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.buyer_postcode */ .dC.buyer_postcode,
            tier_code: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.tier_code */ .dC.tier_code,
            imp_apikey: _constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.imp_apikey */ .dC.imp_apikey,
            m_redirect_url: `${_constants_App__WEBPACK_IMPORTED_MODULE_9__/* .Payment_SDK.redirect_url */ .dC.redirect_url}/program/${router.query.id}/product${secretUrl}`,
            custom_data: customData
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_iamport__WEBPACK_IMPORTED_MODULE_5___default()), {
            identificationCode: "imp49748569",
            params: myParams,
            onFailed: handleonIamportFailure,
            onSuccess: handleonIamportSuccess,
            jqueryLoaded: false,
            render: (renderProps)=>{
                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_AmplitudeClickedEvent__WEBPACK_IMPORTED_MODULE_22__/* .AmplitudeClickedEvent */ .P, {
                    event: "clickPurchase",
                    data: logData,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: ()=>{
                            // TODO: Remvoe this; Chcek SBA products when click "결제하기"
                            if (router.query.id) {
                                var ref;
                                const id = (ref = router.query.id) === null || ref === void 0 ? void 0 : ref.toString();
                                if ([
                                    "384"
                                ].includes(id)) {
                                    window.location.href = "https://forms.gle/bKS86fGLGHsGzEir9";
                                    return false;
                                } else if ([
                                    "669",
                                    "672"
                                ].includes(id)) {
                                    window.location.href = "https://forms.gle/iadPmEkmsNv6H3kb6";
                                    return false;
                                } else if ([
                                    "673",
                                    "674",
                                    "675"
                                ].includes(id)) {
                                    window.location.href = "https://forms.gle/y8pMAY8MfE7EPMCj8";
                                    return false;
                                } else if ([
                                    "676",
                                    "677"
                                ].includes(id)) {
                                    window.location.href = "https://forms.gle/sN1EdiqBvVC5FVGm8";
                                    return false;
                                } else if ([
                                    "701"
                                ].includes(id)) {
                                    window.location.href = "https://forms.gle/gqmMcHmnfRwiB5C29";
                                    return false;
                                } else if ([
                                    "716"
                                ].includes(id)) {
                                    window.location.href = "https://forms.gle/HQdPKn1N6V8CRmhc8";
                                    return false;
                                } else if ([
                                    "718"
                                ].includes(id)) {
                                    window.location.href = "https://forms.gle/mfqgvGZgK4atSsmMA";
                                    return false;
                                }
                            }
                            localStorage.setItem("dataPayment", JSON.stringify({
                                selecteds,
                                userInfo,
                                isShow,
                                data,
                                message,
                                isShowPopup
                            }));
                            renderProps.onClick();
                        },
                        children: "결제하기"
                    })
                });
            }
        });
    };
    const renderListProduct = ()=>{
        const { MAIN , SEMINAR , VOD , ADVANCE_RESERVATION  } = _constants_Product__WEBPACK_IMPORTED_MODULE_13__/* .PRODUCT_TYPE */ .fY;
        return data.products.map((item, index)=>{
            const checked = selecteds.find((i)=>i.name === item.name
            );
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "box_program2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: item.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "txt_program_info",
                        children: [
                            (item.product_type === MAIN || item.product_type === SEMINAR) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "프로그램 시작 : ",
                                        getTitleStartDate(item)
                                    ]
                                })
                            }),
                            item.product_type === VOD && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "VOD 시청 시작일 기준, 30일 동안 무제한으로 시청 가능합니다"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "판매가 ",
                                            (0,_utils_StringUtils__WEBPACK_IMPORTED_MODULE_6__/* .convertCurrency */ .Nh)((item === null || item === void 0 ? void 0 : item.price) || 0),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "line_cancle",
                                                children: [
                                                    "(정가:",
                                                    (0,_utils_StringUtils__WEBPACK_IMPORTED_MODULE_6__/* .convertCurrency */ .Nh)((item === null || item === void 0 ? void 0 : item.list_price) || 0),
                                                    ")"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            item.product_type === ADVANCE_RESERVATION && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "프로그램 수강 시작 전까지 프로그램 관련 새로운 소식을 가장 빠르게 알려드립니다."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "custom_check_cir custom_check_cir_wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "check_cir1",
                                checked: !!checked,
                                readOnly: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                onClick: ()=>handleOnClickChecked(!!checked, item)
                                ,
                                htmlFor: "check_cir1"
                            })
                        ]
                    })
                ]
            }, index.toString());
        });
    };
    const getPercentage = (price, listPrice)=>{
        if (!price || !listPrice) return 0;
        return 100 - Math.floor(price / listPrice * 100);
    };
    var ref2, ref1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: [
            product && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_AmplitudeViewdEvent__WEBPACK_IMPORTED_MODULE_20__/* .AmplitudeViewdEvent */ .g, {
                event: "viewCheckout",
                data: logData
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contents_wrap2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "productlist clearfix",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "결제 정보"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title",
                                children: data.name
                            }),
                            renderListProduct()
                        ]
                    }),
                    product && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "payment clearfix",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PaymentInfoRow, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListPriceRow, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "정가"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListPrice, {
                                                        children: [
                                                            (ref2 = product.list_price.toLocaleString()) !== null && ref2 !== void 0 ? ref2 : 0,
                                                            "원"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_17__/* .Spacing */ .K, {
                                                height: 10
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PriceRow, {
                                                children: [
                                                    "할인가",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Price, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Percentage, {
                                                                children: [
                                                                    getPercentage(product.price, product.list_price),
                                                                    "%"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    (ref1 = product.price.toLocaleString()) !== null && ref1 !== void 0 ? ref1 : 0,
                                                                    "원"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                product.installment_price && !isShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "payment_info_row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PaymentInfoRow, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PriceRow, {
                                            children: [
                                                "12개월 무이자 할부 시",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InstallmentPrice, {
                                                    children: [
                                                        "월 ",
                                                        product.installment_price.toLocaleString(),
                                                        "원"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "payment_info_row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PaymentInfoRow, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PriceRow, {
                                            children: [
                                                "결제 방법",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "payment_info_row_child payment_info_row_child_group",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "payment_info_row_child payment_info_row_child_radio_group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "custom_radio_cir custom_radio_cir_wrap payment_info_radio",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "radio",
                                                                        id: "r1",
                                                                        name: "rr",
                                                                        checked: !isShow,
                                                                        onChange: ()=>handleOnChangeMethodPayment(false)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        htmlFor: "r1",
                                                                        "data-test": "credit-card-label",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "신용/체크카드"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "custom_radio_cir custom_radio_cir_wrap payment_info_radio",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "radio",
                                                                        id: "r2",
                                                                        name: "rr",
                                                                        checked: isShow,
                                                                        onChange: ()=>handleOnChangeMethodPayment(true)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        htmlFor: "r2",
                                                                        "data-test": "vwire-transfer-label",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "무통장입금"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                isShow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DepositAttention, {
                                    children: [
                                        "입금기한",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "highlight",
                                            children: [
                                                moment__WEBPACK_IMPORTED_MODULE_2___default()().add(4, "days").format("YYYY년 MM월 DD일"),
                                                " 23:00까지"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_17__/* .Spacing */ .K, {
                                            backgroundColor: "inherit",
                                            height: 10
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "입금완료 후 품절로 인해 자동 취소된 상품은 환불 처리해 드립니다.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "무통장입금 결제시 부분취소가 불가하며 전체취소 후 다시 주문하시기 바랍니다.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "은행 이체 수수료가 발생될 수 있습니다. 입금 시 수수료를 확인해 주세요."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "btn_pay",
                        "data-test": "pay-button",
                        children: RenderRequestPayment()
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Popup__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                open: isShowPopup,
                handleClose: ()=>{
                    setIsShowPopup(false);
                    if (message === msgSuccess) {
                        router.push(`/program/${router.query.id}/product/${isShow ? "paymentdeposit" : "paymentfin"}`);
                    }
                },
                handleAccept: ()=>{
                    setIsShowPopup(false);
                    if (message === msgSuccess) {
                        router.push(`/program/${router.query.id}/product/${isShow ? "paymentdeposit" : "paymentfin"}`);
                    }
                },
                txtSubmit: "확인",
                message: message
            })
        ]
    });
}
const PaymentInfoRow = styled_components__WEBPACK_IMPORTED_MODULE_16___default().div.withConfig({
    componentId: "sc-898e1be7-0"
})`
  padding: 20px 27px;
`;
const ListPriceRow = styled_components__WEBPACK_IMPORTED_MODULE_16___default().div.withConfig({
    componentId: "sc-898e1be7-1"
})`
  color: #bbbbbb;
  display: flex;
  justify-content: space-between;
`;
const PriceRow = styled_components__WEBPACK_IMPORTED_MODULE_16___default().div.withConfig({
    componentId: "sc-898e1be7-2"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListPrice = styled_components__WEBPACK_IMPORTED_MODULE_16___default().span.withConfig({
    componentId: "sc-898e1be7-3"
})`
  font-weight: 700;
  font-size: 16px;
  text-decoration-line: line-through;
  color: #bbbbbb;
`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_16___default().span.withConfig({
    componentId: "sc-898e1be7-4"
})`
  font-weight: 700;
  font-size: 16px;
`;
const Percentage = styled_components__WEBPACK_IMPORTED_MODULE_16___default().span.withConfig({
    componentId: "sc-898e1be7-5"
})`
  font-weight: 700;
  font-size: 14px;
  color: #3a951e;
  padding-right: 5px;
`;
const InstallmentPrice = styled_components__WEBPACK_IMPORTED_MODULE_16___default().span.withConfig({
    componentId: "sc-898e1be7-6"
})`
  font-weight: 700;
  font-size: 17px;
`;
const DepositAttention = styled_components__WEBPACK_IMPORTED_MODULE_16___default().div.withConfig({
    componentId: "sc-898e1be7-7"
})`
  max-width: 90%;
  padding: 3% 4%;
  margin: auto;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: #f7f7f7;
  .highlight {
    font-weight: 600;
    margin-left: 6px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product); /* 월 48,750원 */ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Product__WEBPACK_IMPORTED_MODULE_0__]);
_Product__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useReservedPrice)
/* harmony export */ });
const useReservedPrice = (router, product)=>{
    let newPrice = product.price;
    if (router.query.reservation === 'reservation' && !product.name.includes('얼리')) {
        newPrice = product.price * 0.9;
    }
    if (router.query.reservation === 'reservation' && product.name.includes('얼리')) {
        newPrice = product.price / 0.9 * 0.8;
    }
    return newPrice;
};


/***/ }),

/***/ 9070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _containers_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_product__WEBPACK_IMPORTED_MODULE_0__]);
_containers_product__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_containers_product__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ AmplitudeViewdEvent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/common/hook/useAmplitude/index.ts + 1 modules
var useAmplitude = __webpack_require__(8755);
// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/component/AmplitudeViewdEvent/AmplitudeViewdEvent.tsx





const useAmplitudeViewdEvent = ({ event , data  })=>{
    const { logEvent  } = (0,useAmplitude/* useAmplitude */.i)();
    const { asPath  } = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        logEvent(event, data);
    }, [
        asPath
    ]);
};
const AmplitudeViewdEvent = (0,bind/* bind */.a)(useAmplitudeViewdEvent, ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {})
);

;// CONCATENATED MODULE: ./src/common/component/AmplitudeViewdEvent/index.ts



/***/ }),

/***/ 3946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.Cv),
/* harmony export */   "Q": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.QP)
/* harmony export */ });
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7738);



/***/ }),

/***/ 2034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* reexport */ usePushRouterLogin)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/common/hook/usePushRouter/usePushRouter.ts

const usePushRouter = ()=>{
    const router = (0,router_.useRouter)();
    return (path)=>router.push(path)
    ;
};

;// CONCATENATED MODULE: ./src/common/hook/usePushRouter/index.ts


;// CONCATENATED MODULE: ./src/common/hook/usePushRouterLogin/usePushRouterLogin.ts

const usePushRouterLogin = ()=>{
    const pushRouter = usePushRouter();
    return ()=>{
        const currentPath = encodeURI(window.location.pathname);
        pushRouter(`/login?next=${currentPath}`);
    };
};

;// CONCATENATED MODULE: ./src/common/hook/usePushRouterLogin/index.ts



/***/ }),

/***/ 8765:
/***/ ((module) => {

module.exports = require("@datadog/browser-rum");

/***/ }),

/***/ 929:
/***/ ((module) => {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ 6856:
/***/ ((module) => {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ 5233:
/***/ ((module) => {

module.exports = require("@material-ui/core/DialogContentText");

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

/***/ 893:
/***/ ((module) => {

module.exports = require("emoji-regex");

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

/***/ 3592:
/***/ ((module) => {

module.exports = require("react-iamport");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,485,738,448,901,805,460,702], () => (__webpack_exec__(9070)));
module.exports = __webpack_exports__;

})();