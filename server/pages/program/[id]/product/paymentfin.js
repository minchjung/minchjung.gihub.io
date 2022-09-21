"use strict";
(() => {
var exports = {};
exports.id = 461;
exports.ids = [461];
exports.modules = {

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

/***/ 4118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_min_locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5575);
/* harmony import */ var moment_min_locales__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_min_locales__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5712);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout__WEBPACK_IMPORTED_MODULE_7__]);
_containers_layout__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// Set moment locale
moment__WEBPACK_IMPORTED_MODULE_4___default().locale("ko");
function PaymentFin() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { ADVANCE_RESERVATION , VOD  } = _constants_Product__WEBPACK_IMPORTED_MODULE_6__/* .PRODUCT_TYPE */ .fY;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const stringJson = localStorage.getItem("products");
        const paymentSuccess = localStorage.getItem("paymentSuccess");
        const dataPayment = localStorage.getItem("dataPayment");
        if (!paymentSuccess) {
            router.push("/my");
        }
        if (stringJson) {
            const products = JSON.parse(stringJson);
            setData(products);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            localStorage.removeItem("products");
        };
    }, [
        router.pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            localStorage.removeItem("paymentSuccess");
        };
    });
    const getTitleStartDate = (schedule)=>{
        if (!schedule.start_date || !schedule.end_date) return null;
        const date = moment__WEBPACK_IMPORTED_MODULE_4___default()(schedule.start_date).format("YYYY.MM.DD(ddd)");
        const hourStart = moment__WEBPACK_IMPORTED_MODULE_4___default()(schedule.start_date).format("A hh:mm");
        const hourEnd = moment__WEBPACK_IMPORTED_MODULE_4___default()(schedule.end_date).format("hh:mm");
        return `${date} ${hourStart} ~ ${hourEnd}`;
    };
    const renderSchedules = (options)=>{
        return options.map((schedule, index)=>{
            const weeks = options.length > 1 ? schedule.duration : "프로그램 오픈";
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "schedulelist_tit",
                        children: [
                            weeks,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: `D-${moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date(schedule.start_date)).diff(moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()), "days")}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "schedule_list_t",
                        children: getTitleStartDate(schedule)
                    })
                ]
            }, index.toString());
        });
    };
    const printScheduleAsProductType = (item)=>{
        var ref;
        const firstSchedule = ((ref = item.schedules[0]) === null || ref === void 0 ? void 0 : ref.duration) === "1주차" ? [
            item.schedules[0]
        ] : false;
        if (!firstSchedule) {
            return "프로그램 판매 일정이 정해지지 않았어요. 판매를 시작하면 사전예약 신청을 하신 분에게 가장 먼저 연락드립니다.";
        }
        if (item.product_type === ADVANCE_RESERVATION) {
            return renderSchedules(firstSchedule);
        }
        return renderSchedules(item.schedules);
    };
    const renderListProducts = ()=>{
        return data.map((item)=>{
            const openingText = item.product_type === ADVANCE_RESERVATION ? "오픈 준비 중" : "다음 일정이에요";
            if (item.product_type === VOD) return;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "schedule_box",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: openingText
                            }),
                            item.name
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "schedule_list",
                        children: printScheduleAsProductType(item)
                    })
                ]
            }, item.name);
        });
    };
    const printTextAsProductType = ()=>{
        return data.map((item)=>{
            if (item.product_type === VOD) {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " 결제가 완료되었습니다.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "마이 페이지에서 VOD로 프로그램을 바로 수강할 수 있어요."
                        })
                    ]
                });
            }
            if (item.product_type === ADVANCE_RESERVATION) {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " 사전예약 신청이 완료되었습니다.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "프로그램 수강 시작 전까지 프로그램 관련 새로운 소식을 가장 빠르게 알려드립니다"
                        })
                    ]
                });
            }
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    "결제가 완료되었습니다.",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " 지금 프로그램 수강을 준비해 볼까요?",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "마이 페이지에서 본명과 주 사용 이메일로 변경해 주시면 원활하게 프로그램 수강이 가능합니다."
                    })
                ]
            });
        });
    };
    const chengeLinkByProductType = ()=>{
        return data.map((item)=>{
            if (item.product_type === VOD) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/my",
                children: "프로그램 수강하기"
            });
            if (item.product_type === ADVANCE_RESERVATION) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/my/profile",
                children: "소식 받을 연락처 확인"
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/my/profile",
                children: "이름과 이메일 변경하기"
            });
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "contents_wrap2",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "payment_fin",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: printTextAsProductType()
                    }),
                    renderListProducts(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bt_wrap",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "btn_box_w",
                            children: chengeLinkByProductType()
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentFin);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _PaymentFin__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _PaymentFin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PaymentFin__WEBPACK_IMPORTED_MODULE_0__]);
_PaymentFin__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _containers_paymentfin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_paymentfin__WEBPACK_IMPORTED_MODULE_0__]);
_containers_paymentfin__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_containers_paymentfin__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,485,448], () => (__webpack_exec__(7473)));
module.exports = __webpack_exports__;

})();