"use strict";
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 7738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cv": () => (/* binding */ RUNNING_ENV),
/* harmony export */   "Ts": () => (/* binding */ __DEV__),
/* harmony export */   "QP": () => (/* binding */ API_ENDPOINT),
/* harmony export */   "Z2": () => (/* binding */ GRAPHQL_ENDPOINT)
/* harmony export */ });
const API_ENDPOINT_BY_RUNNING_ENV = {
    local: "http://localhost:8090/api",
    local_dev_api: "https://dev-api.grownbetter.com/api",
    development: "https://dev-api.grownbetter.com/api",
    test: "https://test-api.grownbetter.com/api",
    stage: "https://stage-api.grownbetter.com/api",
    production: "https://api.grownbetter.com/api"
};
const GRAPHQL_ENDPOINT_BY_RUNNING_ENV = {
    local: "http://localhost:6001/graphql",
    local_dev_api: "https://dev-api.grownbetter.com/graphql",
    development: "https://dev-api.grownbetter.com/graphql",
    test: "https://test-api.grownbetter.com/graphql",
    stage: "https://stage-api.grownbetter.com/graphql",
    production: "https://api.grownbetter.com/graphql"
};
const RUNNING_ENV = "production" || 0;
const __DEV__ = RUNNING_ENV !== "production";
const API_ENDPOINT = API_ENDPOINT_BY_RUNNING_ENV[RUNNING_ENV];
const GRAPHQL_ENDPOINT = GRAPHQL_ENDPOINT_BY_RUNNING_ENV[RUNNING_ENV];


/***/ })

};
;