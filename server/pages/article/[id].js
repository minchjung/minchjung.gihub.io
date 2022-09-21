(() => {
var exports = {};
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 1654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _constants_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1049);
/* harmony import */ var src_blog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1888);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_blog_page__WEBPACK_IMPORTED_MODULE_1__]);
src_blog_page__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_blog_page__WEBPACK_IMPORTED_MODULE_1__/* .ArticleDetailPage */ ._);
const getStaticPaths = async ()=>{
    const url = `${_constants_Api__WEBPACK_IMPORTED_MODULE_0__/* .GET_ARTICLE_LIST */ .zY}`;
    const response = await fetch(url, {
        method: "GET"
    });
    const { articles  } = await response.json();
    // Not generate when build time
    const paths = [];
    // We'll pre-render only above paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async ({ params  })=>{
    const url = `${_constants_Api__WEBPACK_IMPORTED_MODULE_0__/* .GET_ARTICLE_DETAIL */ .ay}/${params.id}`;
    const whenErrorReturn = {
        redirect: {
            permanent: false,
            destination: "/article"
        }
    };
    try {
        const response = await fetch(url, {
            method: "GET"
        });
        const article = await response.json();
        if (response.status === 500) {
            throw new Error();
        }
        return {
            props: {
                article
            },
            revalidate: 10
        };
    } catch  {
        return whenErrorReturn;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1234:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ArticleDetailThumbnail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_api_useArticleDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useArticleDetail__WEBPACK_IMPORTED_MODULE_3__]);
_common_api_useArticleDetail__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ArticleDetailThumbnail = ()=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const articleId = Number(query.id);
    const { article  } = (0,_common_api_useArticleDetail__WEBPACK_IMPORTED_MODULE_3__/* .useArticleDetail */ .a)(articleId);
    const creatAt = new Date(article === null || article === void 0 ? void 0 : article.created_at).toLocaleDateString();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ArticleInfo, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    children: article === null || article === void 0 ? void 0 : article.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(WrittenBy, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SupplierName, {
                            children: [
                                "by ",
                                article === null || article === void 0 ? void 0 : article.suppliers.name
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticleDate, {
                            children: creatAt
                        })
                    ]
                })
            ]
        })
    });
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fd6dceba-0"
})`
  width: 100%;
  margin-bottom: 20px;
  height: 276px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
  background-color: #fcfcfc;

  @media all and (max-width: 560px) {
    padding: 0 18px;
  }
`;
const ArticleInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fd6dceba-1"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 560px;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({
    componentId: "sc-fd6dceba-2"
})`
  padding-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
  line-height: 130%;
  color: #1a1a1a;
  text-align: center;

  @media all and (max-width: 960px) {
    word-break: break-word;
    font-size: 20px;
  }
`;
const WrittenBy = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fd6dceba-3"
})`
  display: flex;
  font-size: 16px;

  div {
    line-height: 17px;
    padding: 0 10px;
  }

  @media all and (max-width: 500px) {
    font-size: 12px;
  }
`;
const SupplierName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fd6dceba-4"
})`
  color: #009922;
`;
const ArticleDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fd6dceba-5"
})`
  color: #666666;
  border-left: 1px solid #999999;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_0__]);
_ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ ArticleContents)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./containers/program/components/wysiwygeditor/WysiwygEditor.tsx
var WysiwygEditor = __webpack_require__(7760);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/blog/component/ArticleEditor/useArticleEditor.tsx



const useArticleEditor = (content)=>{
    const editor = (0,external_react_.useMemo)(()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(WysiwygEditor/* WysiwygEditor */.R, {
            introduction_editor: content !== null && content !== void 0 ? content : ""
        });
    }, [
        content
    ]);
    return {
        editor
    };
};

// EXTERNAL MODULE: ./node_modules/@toast-ui/chart/dist/toastui-chart.css
var toastui_chart = __webpack_require__(7811);
;// CONCATENATED MODULE: ./src/blog/component/ArticleEditor/useHTMLContent.tsx









const useHTMLContent = (content)=>{
    const htmlContent = (0,external_react_.useMemo)(()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pro_edit",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "toastui-editor-contents",
                dangerouslySetInnerHTML: {
                    __html: content !== null && content !== void 0 ? content : ""
                }
            })
        });
    }, [
        content
    ]);
    return {
        htmlContent
    };
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/blog/component/ArticleEditor/ArticleEditor.tsx





const ArticleContents = ({ article  })=>{
    var ref;
    const { editor  } = useArticleEditor((article === null || article === void 0 ? void 0 : article.content_editor) ? article === null || article === void 0 ? void 0 : article.content_editor : article === null || article === void 0 ? void 0 : article.content);
    const { htmlContent  } = useHTMLContent(article === null || article === void 0 ? void 0 : article.content);
    const isMarkdown = (text)=>{
        // Check markdown title or bold
        const regex = /(#{2,}\b|\*{2}.+\*{2})/gm;
        return regex.test(text);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ContentsLayout, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EditorWrapper, {
            children: [
                !isMarkdown(article.content) ? htmlContent : editor,
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(KeywordWrapper, {
                    children: [
                        " ",
                        (ref = article.keywords) === null || ref === void 0 ? void 0 : ref.map((keyword, i)=>{
                            console.log(keyword);
                            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                label: keyword
                            }, i);
                        }),
                        " "
                    ]
                })
            ]
        })
    });
};
const ContentsLayout = external_styled_components_default().div.withConfig({
    componentId: "sc-d14c78ae-0"
})`
  display: inline-block;
  height: 100%;
  width: 100%;
`;
const EditorWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-d14c78ae-1"
})`
  margin: auto;
  max-width: 700px;
  word-break: break-word;
`;
const KeywordWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-d14c78ae-2"
})`
  margin: 2em 0px;

  .MuiChip-root {
    margin-right: 0.5em;
  }
`;

;// CONCATENATED MODULE: ./src/blog/component/ArticleEditor/index.tsx



/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _Head__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5685);



/***/ }),

/***/ 5043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ ArticleDetailPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2747);
/* harmony import */ var _component_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3571);
/* harmony import */ var _component_ArticleEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8112);
/* harmony import */ var _component_ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1426);
/* harmony import */ var _common_component_GtagViewdEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7128);
/* harmony import */ var _common_component_AmplitudeViewdEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout__WEBPACK_IMPORTED_MODULE_2__, _component_ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_5__]);
([_containers_layout__WEBPACK_IMPORTED_MODULE_2__, _component_ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ArticleDetailPage = ({ article  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_GtagViewdEvent__WEBPACK_IMPORTED_MODULE_6__/* .GtagViewdEvent */ .F, {
                name: "new_view_article",
                value: {
                    articleId: article.id,
                    articleTitle: article.title
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_AmplitudeViewdEvent__WEBPACK_IMPORTED_MODULE_7__/* .AmplitudeViewdEvent */ .g, {
                event: "viewArticle",
                data: {
                    articleId: article.id,
                    articleTitle: article.title
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Head__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h, {
                        article: article
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticleWrap, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ArticleContentsWrap, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_ArticleDetailThumbnail__WEBPACK_IMPORTED_MODULE_5__/* .ArticleDetailThumbnail */ .q, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_ArticleEditor__WEBPACK_IMPORTED_MODULE_4__/* .ArticleEditor */ .$, {
                                    article: article
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
const ArticleWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-8b56e76-0"
})`
  display: flex;
  max-width: 1600px;
  margin: auto;
  padding-bottom: 40px;
`;
const ArticleContentsWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-8b56e76-1"
})`
  background-color: #fff;
  width: 100%;

  @media all and (max-width: 450px) {
    width: 100%;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1888:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _ArticleDetailPage__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _ArticleDetailPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5043);
/* harmony import */ var _ArticleListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ArticleDetailPage__WEBPACK_IMPORTED_MODULE_0__, _ArticleListPage__WEBPACK_IMPORTED_MODULE_1__]);
([_ArticleDetailPage__WEBPACK_IMPORTED_MODULE_0__, _ArticleListPage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _useArticleDetail__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _useArticleDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6282);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useArticleDetail__WEBPACK_IMPORTED_MODULE_0__]);
_useArticleDetail__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useArticleDetail)
/* harmony export */ });
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(304);
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_1__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useArticleDetail = (id)=>{
    const { article , loading  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_1__/* .useSWRHook */ .L)({
        endpoint: (0,src_common_constant_api__WEBPACK_IMPORTED_MODULE_0__/* .GET_ARTICLE_DETAIL */ .ay)(id),
        dataName: "article",
        withToken: false
    });
    return {
        article,
        loading
    };
}; // TODO: Get rid of all this LEGACY (Me do nothing but copy-pasting)

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ GtagViewdEvent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-gtm-module"
var external_react_gtm_module_ = __webpack_require__(7935);
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_);
// EXTERNAL MODULE: ./src/common/hook/useDev/index.ts + 1 modules
var useDev = __webpack_require__(572);
;// CONCATENATED MODULE: ./src/common/utill/etc/camelToSnakeCase.ts
const camelToSnakeCase = (string)=>string.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`
    )
;

;// CONCATENATED MODULE: ./src/common/utill/etc/convertKeysToSnakeCase.ts

const convertKeysToSnakeCase = (object)=>{
    return Object.fromEntries(Object.entries(object).map(([key, value])=>[
            camelToSnakeCase(key),
            value
        ]
    ));
};

;// CONCATENATED MODULE: ./src/common/hook/useDataLayerPush/useDataLayerPush.ts



const useDataLayerPush = ()=>{
    const dev = (0,useDev/* useDev */.b)();
    const dataLayerPush = (dataLayer)=>{
        external_react_gtm_module_default().dataLayer({
            dataLayer: convertKeysToSnakeCase(dataLayer)
        });
        if (dev) {
            console.log(`pushed into dataLayer`, dataLayer);
        }
    };
    return {
        dataLayerPush
    };
};

;// CONCATENATED MODULE: ./src/common/hook/useDataLayerPush/index.ts


;// CONCATENATED MODULE: ./src/common/component/GtagViewdEvent/useGtagViewdEvent.ts


const useGtagViewdEvent = ({ name , value  })=>{
    const { dataLayerPush  } = useDataLayerPush();
    (0,external_react_.useEffect)(()=>{
        dataLayerPush({
            event: name,
            ...value
        });
    }, []);
};

;// CONCATENATED MODULE: ./src/common/component/GtagViewdEvent/GtagViewdEvent.tsx




const GtagViewdEvent = (0,bind/* bind */.a)(useGtagViewdEvent, ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {})
);

;// CONCATENATED MODULE: ./src/common/component/GtagViewdEvent/index.ts



/***/ }),

/***/ 8755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ useAmplitude)
});

// EXTERNAL MODULE: external "amplitude-js"
var external_amplitude_js_ = __webpack_require__(1352);
var external_amplitude_js_default = /*#__PURE__*/__webpack_require__.n(external_amplitude_js_);
// EXTERNAL MODULE: ./src/common/hook/useDev/index.ts + 1 modules
var useDev = __webpack_require__(572);
;// CONCATENATED MODULE: ./src/common/hook/useAmplitude/useAmplitude.ts


const useAmplitude = ()=>{
    const dev = (0,useDev/* useDev */.b)();
    const logEvent = (event, data)=>{
        if (dev) return;
        external_amplitude_js_default().getInstance().logEvent(event, data);
    };
    return {
        logEvent
    };
};

;// CONCATENATED MODULE: ./src/common/hook/useAmplitude/index.ts



/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ useDev)
});

// EXTERNAL MODULE: ./src/common/constant/index.ts
var constant = __webpack_require__(3946);
;// CONCATENATED MODULE: ./src/common/hook/useDev/useDev.ts

const useDev = ()=>constant/* RUNNING_ENV */.C !== 'production'
;

;// CONCATENATED MODULE: ./src/common/hook/useDev/index.ts



/***/ }),

/***/ 7811:
/***/ (() => {



/***/ }),

/***/ 8765:
/***/ ((module) => {

"use strict";
module.exports = require("@datadog/browser-rum");

/***/ }),

/***/ 765:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowDropDown");

/***/ }),

/***/ 1658:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 4173:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 6174:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 6080:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 1352:
/***/ ((module) => {

"use strict";
module.exports = require("amplitude-js");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7935:
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7664:
/***/ ((module) => {

"use strict";
module.exports = require("reduxsauce");

/***/ }),

/***/ 8466:
/***/ ((module) => {

"use strict";
module.exports = require("seamless-immutable");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,152,485,738,448,815,304,49,934,428,873,963], () => (__webpack_exec__(1654)));
module.exports = __webpack_exports__;

})();