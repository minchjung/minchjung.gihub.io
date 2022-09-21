"use strict";
exports.id = 49;
exports.ids = [49];
exports.modules = {

/***/ 1049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ym": () => (/* binding */ LOGIN),
/* harmony export */   "a0": () => (/* binding */ FETCH_TOKEN),
/* harmony export */   "jg": () => (/* binding */ MEMBER_DETAIL),
/* harmony export */   "k9": () => (/* binding */ MEMBER_DETAIL_UPDATE),
/* harmony export */   "oO": () => (/* binding */ MEMBER_DELTE),
/* harmony export */   "GJ": () => (/* binding */ UPDATE_PAYMENT_STATUS),
/* harmony export */   "AN": () => (/* binding */ GET_PROGRAM_LIST),
/* harmony export */   "qg": () => (/* binding */ GET_PROGRAM_DETAIL),
/* harmony export */   "ki": () => (/* binding */ GET_MEMBER_PRODUCT_LIST),
/* harmony export */   "qq": () => (/* binding */ POST_RESPONSE_PAYMENT),
/* harmony export */   "zY": () => (/* binding */ GET_ARTICLE_LIST),
/* harmony export */   "ay": () => (/* binding */ GET_ARTICLE_DETAIL)
/* harmony export */ });
/* unused harmony exports UPDATE_STATUS_PAYMENT, MY_INSIGHT, MY_SPECIALTY, SUPPLIER_CHECK, GET_COACHING_DETAIL */
/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);

const LOGIN = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/kakao/login`;
// export const FETCH_TOKEN = `${API_ENDPOINT}/kakao/getInfo`;
// TODO: Saga userInfo를 확인하는 Endpoint를 user 이름과 이메일,폰, id 만을 주는 endpoint로  교체함
// Loing issue handling 임시처리
const FETCH_TOKEN = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member/auth`;
// members
const MEMBER_DETAIL = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/kakao/getInfo`;
const MEMBER_DETAIL_UPDATE = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/kakao/updateInfo`;
const MEMBER_DELTE = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/kakao/delete`;
const UPDATE_PAYMENT_STATUS = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/paymentTransaction/updateStatusPaymentProduct`;
// programs
const GET_PROGRAM_LIST = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/program/getAllProgramShort`;
const GET_PROGRAM_DETAIL = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/program/findDetailWithProgramId`;
// products
const GET_MEMBER_PRODUCT_LIST = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/paymentTransaction/findAllProductForDate`;
const POST_RESPONSE_PAYMENT = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/paymentTransaction/payments/complete`;
const UPDATE_STATUS_PAYMENT = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/paymentTransaction/updateStatusPaymentProduct`;
// my
const MY_INSIGHT = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/article/member?type=`;
const MY_SPECIALTY = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/program/findAll`;
const SUPPLIER_CHECK = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/member/supplierExist`;
// coaching
const GET_COACHING_DETAIL = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/coaching/coachingId`;
// article
const GET_ARTICLE_LIST = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/article/getAll`;
const GET_ARTICLE_DETAIL = `${_Domain__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/article`;


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


/***/ })

};
;