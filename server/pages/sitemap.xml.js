"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 6997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sitemap_xml),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "next-sitemap"
const external_next_sitemap_namespaceObject = require("next-sitemap");
// EXTERNAL MODULE: ./src/common/constant/index.ts
var constant = __webpack_require__(3946);
;// CONCATENATED MODULE: ./pages/sitemap.xml.tsx


const getServerSideProps = async (ctx)=>{
    const articleList = await fetch(`${constant/* API_ENDPOINT */.Q}/article/getAll?category=''`).then((res)=>res.json()
    ); // article 전체 목록
    const programList = await fetch(`${constant/* API_ENDPOINT */.Q}/program/getAllProgramShort`).then((res)=>res.json()
    ); // program 전체 목록
    const articles = articleList.articles;
    const lastmod = new Date().toISOString();
    // 정적 페이지
    const defaultFields = [
        {
            loc: `https://www.grownbetter.com/`,
            changefreq: "weekly",
            priority: 0.8,
            lastmod
        },
        {
            loc: `https://www.grownbetter.com/article`,
            changefreq: "daily",
            priority: 0.9,
            lastmod
        }, 
    ];
    // 동적 페이지
    const articleFields = articles.map((article)=>({
            loc: `https://www.grownbetter.com/article/${article.id}`,
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(article.updated_at).toISOString()
        })
    );
    const programFields = programList.map((program)=>({
            loc: `https://www.grownbetter.com/program/${program.id}`,
            changefreq: "weekly",
            priority: 1,
            lastmod: new Date(program.updated_at).toISOString()
        })
    );
    const fields = [
        ...defaultFields,
        ...articleFields,
        ...programFields
    ];
    // getServerSideSitemap('application/xml 응답헤더',  'xml 형식 데이터')
    return (0,external_next_sitemap_namespaceObject.getServerSideSitemap)(ctx, fields);
};
/* harmony default export */ const sitemap_xml = (()=>{
    return;
});


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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [738], () => (__webpack_exec__(6997)));
module.exports = __webpack_exports__;

})();