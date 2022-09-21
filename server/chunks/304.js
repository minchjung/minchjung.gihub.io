"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ GET_USER_INFO),
/* harmony export */   "JE": () => (/* binding */ GET_USER_AGREEMENT),
/* harmony export */   "hZ": () => (/* binding */ getUserScheduleUrl),
/* harmony export */   "JA": () => (/* binding */ GET_MEMBER_INFO),
/* harmony export */   "OG": () => (/* binding */ putUpdateMemberInfo),
/* harmony export */   "hw": () => (/* binding */ putUpdateMemberAgreement),
/* harmony export */   "$6": () => (/* binding */ DElETE_MEMBER),
/* harmony export */   "GT": () => (/* binding */ GET_MEMBER_PROGRAM),
/* harmony export */   "TN": () => (/* binding */ GET_MEMBER_VOD),
/* harmony export */   "uy": () => (/* binding */ GET_MEMBER_PAYMENT_LIST),
/* harmony export */   "we": () => (/* binding */ GET_ARTICLE_TOPIC_LIST),
/* harmony export */   "zY": () => (/* binding */ GET_ARTICLE_LIST),
/* harmony export */   "ay": () => (/* binding */ GET_ARTICLE_DETAIL),
/* harmony export */   "_r": () => (/* binding */ getReviews),
/* harmony export */   "gg": () => (/* binding */ getReviewAverageScore),
/* harmony export */   "M": () => (/* binding */ getProductMaxSemester),
/* harmony export */   "_P": () => (/* binding */ GET_VOD_URL),
/* harmony export */   "Ze": () => (/* binding */ GET_COMPANY_LIST),
/* harmony export */   "bt": () => (/* binding */ GET_ATTACHMENT)
/* harmony export */ });
/* unused harmony exports GET_USER_SCHEDULE, getBookMarkCount, DELETE_BOOKMARK, POST_CREATE_BOOKMARK, GET_DEMAND_RESEARCH_LIST, POST_VOTE_DEMAND_RESEARCH, GET_DISPLAY_ARTICLE, GET_MY_INSIGHT, GET_MY_SPECIALTY, GET_SUPPLIER_CHECK, getUpdateMyProfile, getPreSurveyByProgram, getTotalReviewByProgram, getWeeklyReviewByProgram, getSurvey, getSurveyResponse, SURVEY_RESPONSE */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3946);

// user
const GET_USER_INFO = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/kakao/getInfo`;
const GET_USER_AGREEMENT = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member/agreement`;
const GET_USER_SCHEDULE = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/user/schedules`;
const getUserScheduleUrl = (searchQuery)=>`${GET_USER_SCHEDULE}?searchQuery=${searchQuery}`
;
const getBookMarkCount = (id)=>`${API_ENDPOINT}/program/bookmark/count/${id}`
;
const DELETE_BOOKMARK = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/program/bookmark`;
const POST_CREATE_BOOKMARK = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/program/bookmark`;
// new user Info
const GET_MEMBER_INFO = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member/option`;
const putUpdateMemberInfo = (signup)=>`${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member?signup=${signup}`
;
const putUpdateMemberAgreement = ()=>`${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member/agreement`
;
const DElETE_MEMBER = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/kakao/delete`;
const GET_MEMBER_PROGRAM = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member/purchase/program`;
const GET_MEMBER_VOD = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member/purchase/program?vod`;
const GET_MEMBER_PAYMENT_LIST = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/member/purchase`;
// demand research
const GET_DEMAND_RESEARCH_LIST = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/demandResearch/displayList`;
// article
const GET_ARTICLE_TOPIC_LIST = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/topics?type=article`;
const GET_ARTICLE_LIST = (categoryId)=>`${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/article/getAll?topicId=${categoryId !== null && categoryId !== void 0 ? categoryId : null}`
;
const GET_ARTICLE_DETAIL = (id)=>`${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/article/${id}`
;
const POST_VOTE_DEMAND_RESEARCH = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/demandResearch/vote`;
const GET_DISPLAY_ARTICLE = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/article/display`;
// mypage
const GET_MY_INSIGHT = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/article/member?type=`;
const GET_MY_SPECIALTY = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/program/findAll`;
const GET_SUPPLIER_CHECK = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/member/supplierExist`;
const getUpdateMyProfile = (memberId)=>`${API_ENDPOINT}/member/${memberId}`
;
//programSurvey
const getPreSurveyByProgram = (programId, memberId, duration)=>`${API_ENDPOINT}/v2/program/${programId}/survey?type=PreSurvey&memberId=${memberId}&duration=${duration}`
;
const getTotalReviewByProgram = (programId, memberId, duration)=>`${API_ENDPOINT}/v2/program/${programId}/survey?type=TotalReview&memberId=${memberId}&duration=${duration}`
;
const getWeeklyReviewByProgram = (programId, memberId, duration)=>`${API_ENDPOINT}/v2/program/${programId}/survey?type=WeeklyReview&memberId=${memberId}&duration=${duration}`
;
const getSurvey = (surveyId)=>`${API_ENDPOINT}/programSurvey/survey/${surveyId}`
;
const getSurveyResponse = (questionId, memberId, duration)=>`${API_ENDPOINT}/v2/surveyQuestion/${questionId}/response?memberId=${memberId}&duration=${duration}`
;
const SURVEY_RESPONSE = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/programSurvey/response`;
const getReviews = (classification)=>`${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/reviews?classification=${classification}`
;
const getReviewAverageScore = (classification)=>`${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/reviews/stats?classification=${classification}`
;
const getProductMaxSemester = (classification)=>`${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/v2/products/${classification}/maxSemester`
;
// VOD
const GET_VOD_URL = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/videos`;
const GET_COMPANY_LIST = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/company/list`;
const GET_ATTACHMENT = `${___WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINT */ .Q}/attachment`;


/***/ }),

/***/ 3946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.Cv),
/* harmony export */   "Q": () => (/* reexport safe */ _domain__WEBPACK_IMPORTED_MODULE_0__.QP)
/* harmony export */ });
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7738);



/***/ })

};
;