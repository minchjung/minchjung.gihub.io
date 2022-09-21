"use strict";
exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 3805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MR": () => (/* binding */ SUCCESS),
/* harmony export */   "yt": () => (/* binding */ NO_ACCESS_URL),
/* harmony export */   "xl": () => (/* binding */ INIT_KAKAO_SDK),
/* harmony export */   "dC": () => (/* binding */ Payment_SDK),
/* harmony export */   "vl": () => (/* binding */ facebookPixelId),
/* harmony export */   "cv": () => (/* binding */ GTMID)
/* harmony export */ });
/* unused harmony export googleAnalyticsId */
/* harmony import */ var _utils_StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2901);
/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* eslint-disable comma-dangle */ 

const SUCCESS = 200;
const NO_ACCESS_URL = 403;
const REDIRECT_URI_BY_RUNNING_ENV = {
    local: 'http://localhost:8080',
    local_dev_api: 'http://localhost:8080',
    development: 'https://dev.grownbetter.com',
    test: 'https://test.grownbetter.com',
    stage: 'https://stage.grownbetter.com',
    production: 'https://www.grownbetter.com'
};
const redirectURI = _utils_StringUtils__WEBPACK_IMPORTED_MODULE_0__/* .isServer */ .sk ? REDIRECT_URI_BY_RUNNING_ENV[_Domain__WEBPACK_IMPORTED_MODULE_1__/* .RUNNING_ENV */ .C] : window.location.origin;
const INIT_KAKAO_SDK = {
    url: 'https://kauth.kakao.com/oauth/authorize',
    client_id: 'bf01fcb1a510bfce2e60c83af9a67816',
    redirect_uri: redirectURI,
    response_type: 'code',
    logout_uri: 'https://kauth.kakao.com/oauth/logout'
};
const Payment_SDK = {
    pg: 'MOI8807941',
    name: '결제 정보',
    buyer_postcode: '01181',
    tier_code: '1q2w3e4r+!',
    imp_apikey: '1q2w3e4r+!',
    redirect_url: redirectURI
};
const facebookPixelId = '212202534197009';
const googleAnalyticsId = 'G-DG8R9B33GM';
const GTMID = 'GTM-TBD66W6';


/***/ })

};
;