"use strict";
exports.id = 873;
exports.ids = [873];
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

/***/ 5235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ ArticleCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/blog/component/CardDetail/index.ts + 1 modules
var CardDetail = __webpack_require__(9374);
;// CONCATENATED MODULE: ./src/blog/component/ArticleCard/ArticleCard.tsx



const ArticleCard = ({ articles  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ArticleCardContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Categories, {
                children: articles === null || articles === void 0 ? void 0 : articles.map(({ id , thumbnail , title , supplier , articleTopics  })=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(CardContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardDetail/* CardDetail */.q, {
                            id: id,
                            articleThumbnail: thumbnail,
                            title: title,
                            supplier: supplier,
                            topics: articleTopics !== null && articleTopics !== void 0 ? articleTopics : []
                        }, id)
                    }, id);
                })
            })
        })
    });
};
const ArticleCardContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b0a2ff96-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
  @media all and (max-width: 770px) {
    padding: 0 5px;
    width: 100%;
  }
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-b0a2ff96-1"
})`
  width: 100%;
  margin-bottom: 10px;
`;
const Categories = external_styled_components_default().div.withConfig({
    componentId: "sc-b0a2ff96-2"
})`
  display: grid;
  grid-template-columns: repeat(3, 225px);
  grid-auto-rows: minmax(139px, auto);
  gap: 20px;

  @media all and (max-width: 770px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-b0a2ff96-3"
})`
  padding: 0;
  width: 225px;
  margin: 0 22px 10px 0;
`;
const CardContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b0a2ff96-4"
})`
  margin-bottom: 50px;
`;

;// CONCATENATED MODULE: ./src/blog/component/ArticleCard/index.ts



/***/ }),

/***/ 7858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ ArticleCategory)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/hook/useMobile/index.ts + 1 modules
var useMobile = __webpack_require__(4961);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowDropDown"
var ArrowDropDown_ = __webpack_require__(765);
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_);
;// CONCATENATED MODULE: ./src/blog/component/ArticleCategory/ArticleCategory.tsx





// TODO: Get rid of all this LEGACY (Me do nothing but copy-pasting)
const ArticleCategory = ({ onClick , categories , currentTopic  })=>{
    const isMobile = (0,useMobile/* useMobile */.X)();
    const { 0: dropdown , 1: setDropdown  } = (0,external_react_.useState)(isMobile);
    const onClickDropDown = ()=>{
        setDropdown((prev)=>!prev
        );
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleCategoryWrap, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CategoryTitleWrap, {
                onClick: onClickDropDown,
                children: [
                    isMobile && (currentTopic === null || currentTopic === void 0 ? void 0 : currentTopic.length) ? currentTopic.map(({ title  })=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: title
                        })
                    ) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "카테고리"
                    }),
                    isMobile && /*#__PURE__*/ jsx_runtime_.jsx(DropDownIconBox, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowDropDown_default()), {
                            sx: {
                                fontSize: 35
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Categories, {
                dropdown: dropdown,
                onClick: onClickDropDown,
                children: categories === null || categories === void 0 ? void 0 : categories.map(({ id , title  })=>{
                    /*#__PURE__*/ return jsx_runtime_.jsx(Category, {
                        selectedCategory: currentTopic === null || currentTopic === void 0 ? void 0 : currentTopic.map((topic)=>topic.id
                        ).includes(id),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            onClick: onClick,
                            "data-categoryid": id,
                            children: title
                        })
                    }, id);
                })
            })
        ]
    });
};
const ArticleCategoryWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-f571f4b9-0"
})`
  display: flex;
  flex-direction: column;
`;
const CategoryTitleWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-f571f4b9-1"
})`
  display: flex;
  width: 177px;
  background-color: #fafafa;
  h1 {
    padding: 10px 12px;
    font-size: 14px;
  }

  img {
    display: none;
  }

  @media all and (max-width: 770px) {
    width: 100%;
    padding: 5px 20px;
    margin: 20px 0;
    font-size: 14px;
    background-color: #fafafa;

    h1 {
      padding: 0;
      margin: 10px 8px 0 0;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        display: inline-block;
        width: 12px;
        height: 10px;
      }
    }
  }
`;
const Categories = external_styled_components_default().div.withConfig({
    componentId: "sc-f571f4b9-2"
})`
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  cursor: pointer;

  @media all and (max-width: 770px) {
    display: ${({ dropdown  })=>dropdown ? "flex" : "none"
};
    height: 150px;
    margin-bottom: 35px;
    overflow: scroll;
  }
`;
const Category = external_styled_components_default().div.withConfig({
    componentId: "sc-f571f4b9-3"
})`
  font-weight: ${({ selectedCategory  })=>selectedCategory ? "700" : "400"
};
  line-height: 28px;
`;
const DropDownIconBox = external_styled_components_default().div.withConfig({
    componentId: "sc-f571f4b9-4"
})`
  flex: 1;
`;

;// CONCATENATED MODULE: ./src/blog/component/ArticleCategory/index.ts



/***/ }),

/***/ 4798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ ArticleList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ArticleCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7858);
/* harmony import */ var _NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3328);
/* harmony import */ var _common_component_AlertBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8948);
/* harmony import */ var _useArticleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7639);
/* harmony import */ var _common_constant_Blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8445);
/* harmony import */ var _CardCondition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(721);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__, _useArticleList__WEBPACK_IMPORTED_MODULE_5__, _CardCondition__WEBPACK_IMPORTED_MODULE_7__]);
([_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__, _useArticleList__WEBPACK_IMPORTED_MODULE_5__, _CardCondition__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// TODO: Get rid of all this LEGACY (Me do someworks to add the logics but nothing with component strucutre at all )
// If anyone ever feels that it worked out well,
// please go ahead to revert, refactor or do something, please
const ArticleList = ({ articleList  })=>{
    const { current , currentTopic , articleCategory , alert , isMobile , onClose , eventDeligator  } = (0,_useArticleList__WEBPACK_IMPORTED_MODULE_5__/* .useArticleList */ .g)({
        articleList
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ArticleContainer, {
        "data-test": "article-list-page",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ArticleWrap, {
                children: [
                    isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__/* .NewsLetter */ .M, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ArticleCategory__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCategory */ .F, {
                        onClick: eventDeligator,
                        categories: articleCategory !== null && articleCategory !== void 0 ? articleCategory : [],
                        currentTopic: currentTopic !== null && currentTopic !== void 0 ? currentTopic : _common_constant_Blog__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOPIC */ .H
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardCondition__WEBPACK_IMPORTED_MODULE_7__/* .CardCondition */ .q, {
                        articles: current !== null && current !== void 0 ? current : [],
                        currentTopic: currentTopic !== null && currentTopic !== void 0 ? currentTopic : _common_constant_Blog__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOPIC */ .H
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_AlertBar__WEBPACK_IMPORTED_MODULE_4__/* .Alertbar */ .C, {
                onClose: onClose,
                alert: alert
            })
        ]
    });
};
const ArticleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-32c71b67-0"
})`
  display: flex;
  flex-direction: column;
  width: 972px;
  margin: auto;
  @media all and (max-width: 770px) {
    width: auto;
    min-width: 270px;
    margin-left: 20px;
    margin: 0 20px;
  }
`;
const ArticleWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-32c71b67-1"
})`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 972px;
  margin: auto;

  @media all and (max-width: 770px) {
    width: 100%;
    flex-direction: column;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useArticleList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_hook_useMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4961);
/* harmony import */ var _common_component_AlertBar_useAlertBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1645);
/* harmony import */ var _common_constant_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8445);
/* harmony import */ var _common_api_useArticleCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2955);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useArticleCategory__WEBPACK_IMPORTED_MODULE_4__]);
_common_api_useArticleCategory__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useArticleList = ({ articleList  })=>{
    //TODO: Server gives Topic & Front give that name as cartegory
    const { articleCategory  } = (0,_common_api_useArticleCategory__WEBPACK_IMPORTED_MODULE_4__/* .useArticleCategory */ .r)();
    const { alert , setAlertAll , onClose  } = (0,_common_component_AlertBar_useAlertBar__WEBPACK_IMPORTED_MODULE_2__/* .useAlertbar */ .o)();
    const { 0: totalArticles , 1: setTotalArticles  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: currentTopic , 1: setCurrentTopic  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const isMobile = (0,_common_hook_useMobile__WEBPACK_IMPORTED_MODULE_1__/* .useMobile */ .X)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentTopic) {
            setCurrentTopic(_common_constant_Blog__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_TOPIC */ .H);
        }
    }, [
        currentTopic
    ]);
    const selectTopicHandler = ({ id , title  })=>{
        if (id === 0) return _common_constant_Blog__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_TOPIC */ .H;
        if (!(currentTopic === null || currentTopic === void 0 ? void 0 : currentTopic.length)) return [
            {
                id,
                title
            }
        ];
        const topics = currentTopic.filter((topic)=>topic.id !== 0
        );
        const prev = topics.find((topic)=>topic.id === id
        );
        const filtered = topics.filter((topic)=>topic.id !== id
        );
        if (currentTopic && (currentTopic === null || currentTopic === void 0 ? void 0 : currentTopic.length) >= 3) {
            return prev ? filtered : topics;
        }
        return prev ? filtered : [
            ...topics,
            {
                id,
                title
            }
        ];
    };
    const eventDeligator = (e)=>{
        var ref;
        const target = e.target;
        if (target && ((ref = target.dataset) === null || ref === void 0 ? void 0 : ref.categoryid) && target.innerText) {
            const id = Number(target.dataset.categoryid);
            const newTopics = selectTopicHandler({
                id,
                title: target.innerText
            });
            setCurrentTopic(newTopics);
        }
    };
    const initArticles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            if (articleList === null || articleList === void 0 ? void 0 : articleList.length) {
                const newArticles = articleList.map((article)=>{
                    const { topics  } = article;
                    const _topics = topics === null || topics === void 0 ? void 0 : topics.map(({ title , topic_article  })=>{
                        return {
                            title,
                            topicId: topic_article === null || topic_article === void 0 ? void 0 : topic_article.topicId
                        };
                    });
                    return {
                        ...article,
                        articleTopics: _topics
                    };
                });
                setTotalArticles(newArticles);
            }
        }, [
            articleList === null || articleList === void 0 ? void 0 : articleList.length
        ]);
    }, [
        articleList
    ]);
    const getCurrentArticles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((topics)=>{
        const newTopics = topics.map((topic)=>topic.id
        );
        if (!totalArticles || newTopics.includes(0)) return totalArticles;
        const currentArticles = totalArticles.filter((article)=>{
            if (!(article === null || article === void 0 ? void 0 : article.articleTopics)) return false;
            const { articleTopics  } = article;
            const filteredTopic = articleTopics.filter(({ topicId  })=>newTopics.includes(topicId)
            );
            return filteredTopic.length === newTopics.length;
        });
        return currentArticles;
    }, [
        totalArticles
    ]);
    initArticles();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const articles = getCurrentArticles(currentTopic !== null && currentTopic !== void 0 ? currentTopic : _common_constant_Blog__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_TOPIC */ .H);
        console.log(currentTopic);
        if (articles && !articles.length && currentTopic) {
            setAlertAll({
                on: true,
                message: "해당하는 글이 존재 하지 않습니다",
                error: false
            });
        } else if (currentTopic && currentTopic.length >= 3) {
            setAlertAll({
                on: true,
                message: "카테고리는 3개 이하로 선택해 주세요",
                error: false
            });
        }
        setCurrent(articles);
    }, [
        currentTopic,
        totalArticles
    ]);
    return {
        current,
        currentTopic,
        articleCategory,
        alert,
        isMobile,
        onClose,
        eventDeligator
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ ArticleThumbnail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/blog/component/Head/Head.tsx
var Head = __webpack_require__(5685);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/blog/component/ArticleThumbnail/useArticleThumbnail.ts

// TODO: Get rid of all this LEGACY (Me do nothing but copy-pasting)
const useArticleThumbnail = ({ articleList  })=>{
    const { push  } = (0,router_.useRouter)();
    const firstArticle = (articleList === null || articleList === void 0 ? void 0 : articleList.length) ? articleList[0] : null;
    const onClick = ()=>{
        var ref;
        push(`/article/${(ref = firstArticle === null || firstArticle === void 0 ? void 0 : firstArticle.id) !== null && ref !== void 0 ? ref : 0}`);
    };
    return {
        articleList,
        firstArticle,
        onClick
    };
};

;// CONCATENATED MODULE: ./src/blog/component/ArticleThumbnail/ArticleThumbnail.tsx




const ArticleThumbnail = ({ articleList  })=>{
    const { firstArticle , onClick  } = useArticleThumbnail({
        articleList
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head/* Header */.h, {
                article: firstArticle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Thumbnail, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: firstArticle === null || firstArticle === void 0 ? void 0 : firstArticle.thumbnail,
                            alt: "article thumbnail image",
                            className: "thumbnailImage"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleInfo, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "이번 주 새로운 아티클"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: firstArticle === null || firstArticle === void 0 ? void 0 : firstArticle.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(WrittenBy, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "by ",
                                        firstArticle === null || firstArticle === void 0 ? void 0 : firstArticle.supplier.name
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-a052aae8-0"
})`
  margin: 40px 0;
  height: 285px;
  min-width: 972px;
  background-color: #1b1c1d;
  padding-bottom: 40px;
  background-clip: content-box;

  @media all and (max-width: 770px) {
    width: 100%;
    height: 100%;
    max-height: 285px;
    min-width: 0;
  }

  @media all and (max-width: 400px) {
    margin: 0;
  }
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-a052aae8-1"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 972px;
  width: 100%;
  margin: auto;
  cursor: pointer;

  @media all and (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    grid-auto-flow: row dense;
    gap: 18px;
    max-height: 327px;
  }
`;
const Thumbnail = external_styled_components_default().div.withConfig({
    componentId: "sc-a052aae8-2"
})`
  width: 100%;
  max-width: 425px;
  height: 250px;
  z-index: 99;
  margin: 33px 20px 0 40px;

  @media all and (max-width: 500px) {
    grid-row-start: 2;
    height: 150px;
    width: 69%;
    margin: 0 20px 0 28px;
  }

  .thumbnailImage {
    object-fit: cover;
    height: 254px;
    overflow: hidden;
    width: 100%;

    @media all and (max-width: 500px) {
      height: 148px;
    }
  }
`;
const ArticleInfo = external_styled_components_default().div.withConfig({
    componentId: "sc-a052aae8-3"
})`
  margin: 30px 40px;
  z-index: 98;
  color: white;

  @media all and (max-width: 500px) {
    margin: 21px 0 0 28px;
    grid-row-start: 1;
    width: 69%;
  }

  p {
    font-size: 14px;
    height: 25px;

    @media all and (max-width: 500px) {
      font-size: 10px;
    }
  }
`;
const Title = external_styled_components_default().div.withConfig({
    componentId: "sc-a052aae8-4"
})`
  font-size: 24px;
  font-weight: 700;

  @media all and (max-width: 770px) {
    font-size: 20px;
  }
`;
const WrittenBy = external_styled_components_default().div.withConfig({
    componentId: "sc-a052aae8-5"
})`
  margin: 10px 0;
  font-size: 14px;

  span {
    margin-right: 20px;
  }

  @media all and (max-width: 500px) {
    display: none;
  }
`;

;// CONCATENATED MODULE: ./src/blog/component/ArticleThumbnail/index.tsx



/***/ }),

/***/ 2709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CardCondition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_hook_useMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4961);
/* harmony import */ var _NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3328);
/* harmony import */ var _ArticleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5235);
/* harmony import */ var _LatestArticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6391);
/* harmony import */ var _common_constant_Blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__]);
_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// TODO: Get rid of all this LEGACY (Me do somthing but not with component structure)
const CardCondition = ({ articles , currentTopic  })=>{
    const topics = (currentTopic === null || currentTopic === void 0 ? void 0 : currentTopic.length) ? currentTopic : _common_constant_Blog__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TOPIC */ .H;
    const isMobile = (0,_common_hook_useMobile__WEBPACK_IMPORTED_MODULE_2__/* .useMobile */ .X)();
    const latest = articles.slice(0, 2);
    const others = isMobile ? articles : articles.slice(2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopicTitles, {
                children: topics.map(({ title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: title
                    })
                )
            }),
            !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_3__/* .NewsLetter */ .M, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LatestArticles__WEBPACK_IMPORTED_MODULE_5__/* .LatestArticles */ .d, {
                        articles: latest
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ArticleCard__WEBPACK_IMPORTED_MODULE_4__/* .ArticleCard */ .T, {
                articles: others
            })
        ]
    });
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f6d0ad02-0"
})`
  margin-left: 30px;
  max-width: 770px;
  width: 100%;

  @media all and (max-width: 960px) {
    margin-left: 0;
  }
`;
const TopicTitles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f6d0ad02-1"
})`
  display: flex;
  margin-left: 20px;
  h1 {
    padding: 10px 0;
    margin-right: 10px;
  }

  @media all and (max-width: 770px) {
    display: none;
  }
`;
const NewsletterButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
    componentId: "sc-f6d0ad02-2"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 222px;
  height: 52px;
  background-color: #000;
  font-size: 12px;
  color: #fff;

  .newslatterImage {
    background: url(/images/article/rightArrowGreen.png) no-repeat;
    width: 12px;
    height: 10px;

    @media all and (max-width: 960px) {
      background: url(/images/article/rightArrowGreen.png) no-repeat;
    }
  }

  @media all and (max-width: 960px) {
    width: 100%;
    max-width: 222px;
  }

  @media all and (max-width: 770px) {
    background-color: #000;
    width: 100%;
    max-width: 770px;
    margin: 5px 0;
    font-size: 14px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _CardCondition__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _CardCondition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CardCondition__WEBPACK_IMPORTED_MODULE_0__]);
_CardCondition__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ CardDetail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/blog/component/CardDetail/CardDetail.tsx



// TODO: Get rid of all this LEGACY (Me do nothing but copy-pastingc)
const CardDetail = ({ id , type , articleThumbnail , title: title1 , topics  })=>{
    const { push  } = (0,router_.useRouter)();
    const onClick = ()=>{
        push(`/article/${id}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardWrap, {
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CardImage, {
                typeProps: type || "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: articleThumbnail,
                    alt: "article card thumbnail"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                children: title1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TopicWrap, {
                children: topics.map(({ title , topicId  })=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(TopicTitle, {
                        children: title
                    }, topicId);
                })
            })
        ]
    });
};
const CardWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-b8e16de-0"
})`
  cursor: pointer;
  overflow: hidden;
  line-height: 21px;
  width: inherit;
`;
const CardImage = external_styled_components_default().div.withConfig({
    componentId: "sc-b8e16de-1"
})`
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    height: 144px;

    @media all and (max-width: 400px) {
      height: ${({ typeProps  })=>typeProps === "latest" ? "90px" : "144px"
};
    }
  }
`;
const CardTitle = external_styled_components_default().div.withConfig({
    componentId: "sc-b8e16de-2"
})`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
`;
const TopicWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-b8e16de-3"
})`
  display: flex;
`;
const TopicTitle = external_styled_components_default().div.withConfig({
    componentId: "sc-b8e16de-4"
})`
  margin: 2px 5px 0 0;
  border-radius: 2px;
  font-size: 12px;
`;

;// CONCATENATED MODULE: ./src/blog/component/CardDetail/index.ts



/***/ }),

/***/ 5685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ article  })=>{
    var ref;
    const imageUrl = article === null || article === void 0 ? void 0 : article.thumbnail;
    // Use article description if exist or use content after removing html and line breakes
    const description = (article === null || article === void 0 ? void 0 : article.description) || (article === null || article === void 0 ? void 0 : (ref = article.content) === null || ref === void 0 ? void 0 : ref.replace(/(<([^>]+)>)|\n/gi, '').substring(0, 100));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: article === null || article === void 0 ? void 0 : article.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: `https://www.grownbetter.com/article/${article === null || article === void 0 ? void 0 : article.id}`
            }, "canonical"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "article"
            }, "type"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: article === null || article === void 0 ? void 0 : article.title
            }, "title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `https://www.grownbetter.com/article/${article === null || article === void 0 ? void 0 : article.id}`
            }, "url"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                property: "og:description",
                content: description
            }, "description"),
            imageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: imageUrl
            }, "image")
        ]
    });
};


/***/ }),

/***/ 6391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ LatestArticles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/blog/component/CardDetail/index.ts + 1 modules
var CardDetail = __webpack_require__(9374);
;// CONCATENATED MODULE: ./src/blog/component/LatestArticles/LatestArticles.tsx



// TODO: Get rid of all this LEGACY (Me do nothing but copy-pasting)
const LatestArticles = ({ articles  })=>{
    /*#__PURE__*/ return jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LatestArticleContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ArticleCards, {
                    children: articles === null || articles === void 0 ? void 0 : articles.map(({ id , thumbnail , title , supplier , articleTopics  })=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(CardDetail/* CardDetail */.q, {
                            id: id,
                            articleThumbnail: thumbnail,
                            title: title,
                            supplier: supplier,
                            type: "latest",
                            topics: articleTopics !== null && articleTopics !== void 0 ? articleTopics : []
                        }, id);
                    })
                })
            })
        })
    });
};
const LatestArticleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-4ad92e2b-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;

  @media all and (max-width: 770px) {
    display: block;
    position: absolute;
    top: -20px;
    width: 100%;
    padding: 0;
  }

  @media all and (max-width: 400px) {
    top: 18px;
  }
`;
const Titles = external_styled_components_default().div.withConfig({
    componentId: "sc-4ad92e2b-1"
})`
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 10px 0;
    display: block;
  }

  @media all and (max-width: 770px) {
    display: none;
  }
`;
const ArticleCards = external_styled_components_default().div.withConfig({
    componentId: "sc-4ad92e2b-2"
})`
  display: grid;
  grid-template-columns: repeat(3, 225px);
  grid-auto-rows: minmax(212px, auto);
  gap: 20px;

  @media all and (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-4ad92e2b-3"
})`
  width: 100%;
  margin-bottom: 40px;
`;

;// CONCATENATED MODULE: ./src/blog/component/LatestArticles/index.ts



/***/ }),

/***/ 3328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ NewsLetter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_api_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4934);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useUser__WEBPACK_IMPORTED_MODULE_2__]);
_common_api_useUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// TODO: Get rid of all this LEGACY (Me do nothing but copy-pasting)
const NewsLetter = ()=>{
    const { isLoggedIn , user , mutate  } = (0,_common_api_useUser__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .a)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleStibeeSubscribe = ()=>{
        if (!isLoggedIn) return push("https://bit.ly/2RS11PL");
        user.info_subscribe = true;
        (0,_common_api_useUser__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateUser */ .I)({
            user,
            value: "checked",
            mutate
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NewsletterWrap, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Titles, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "뉴스레터를 구독하세요"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NewsletterButton, {
                onClick: handleStibeeSubscribe,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "매주 인사이트를 받아보세요"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "newslatterImage"
                    })
                ]
            })
        ]
    });
};
const NewsletterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-7879b96b-0"
})`
  position: absolute;
  right: 22px;
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 250px;
  background-color: #fff;
  z-index: 9;

  @media all and (max-width: 960px) {
  }

  @media all and (max-width: 770px) {
    height: 100%;
    width: 100%;
    position: relative;
    right: 0;
    top: 14px;
    background-color: #fff0;
  }
`;
const Titles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-7879b96b-1"
})`
  display: flex;
  justify-content: space-between;

  h1 {
    padding: 10px 0;
  }

  @media all and (max-width: 770px) {
    display: none;
  }
`;
const NewsletterButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
    componentId: "sc-7879b96b-2"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 222px;
  height: 52px;
  background-color: #000;
  font-size: 12px;
  color: #fff;

  .newslatterImage {
    background: url(/images/article/rightArrowGreen.png) no-repeat;
    width: 12px;
    height: 10px;

    @media all and (max-width: 960px) {
      background: url(/images/article/rightArrowGreen.png) no-repeat;
    }
  }

  @media all and (max-width: 960px) {
    width: 100%;
    max-width: 222px;
    height: 45px;
  }

  @media all and (max-width: 770px) {
    background-color: #000;
    width: 100%;
    max-width: 770px;
    margin: 5px 0;
    font-size: 14px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ArticleListPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ArticleList_ArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4798);
/* harmony import */ var _component_ArticleThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9813);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2747);
/* harmony import */ var _common_api_useArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6604);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_ArticleList_ArticleList__WEBPACK_IMPORTED_MODULE_1__, _containers_layout__WEBPACK_IMPORTED_MODULE_3__, _common_api_useArticles__WEBPACK_IMPORTED_MODULE_4__]);
([_component_ArticleList_ArticleList__WEBPACK_IMPORTED_MODULE_1__, _containers_layout__WEBPACK_IMPORTED_MODULE_3__, _common_api_useArticles__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ArticleListPage = ()=>{
    const { articleList  } = (0,_common_api_useArticles__WEBPACK_IMPORTED_MODULE_4__/* .useArticles */ .l)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_ArticleThumbnail__WEBPACK_IMPORTED_MODULE_2__/* .ArticleThumbnail */ .F, {
                articleList: articleList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_ArticleList_ArticleList__WEBPACK_IMPORTED_MODULE_1__/* .ArticleList */ .w, {
                articleList: articleList
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* reexport safe */ _useArticleCategory__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _useArticleCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useArticleCategory__WEBPACK_IMPORTED_MODULE_0__]);
_useArticleCategory__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useArticleCategory)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
/* harmony import */ var _common_constant_Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useArticleCategory = ()=>{
    const { articleCategory , loading  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_ARTICLE_TOPIC_LIST */ .we,
        dataName: "articleCategory",
        withToken: false
    });
    const category = (articleCategory === null || articleCategory === void 0 ? void 0 : articleCategory.length) ? [
        ..._common_constant_Blog__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_TOPIC */ .H,
        ...articleCategory
    ] : _common_constant_Blog__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_TOPIC */ .H;
    return {
        articleCategory: category,
        loading
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _useArticles__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _useArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5424);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useArticles__WEBPACK_IMPORTED_MODULE_0__]);
_useArticles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useArticles)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useArticles = (categoryId)=>{
    const { articleList , loading  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: (0,src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_ARTICLE_LIST */ .zY)(categoryId),
        dataName: "articleList",
        withToken: false
    });
    return {
        articleList: articleList === null || articleList === void 0 ? void 0 : articleList.articles,
        loading
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ DEFAULT_TOPIC)
/* harmony export */ });
const DEFAULT_TOPIC = [
    {
        id: 0,
        title: "전체"
    }
];


/***/ }),

/***/ 4961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ useMobile)
});

// EXTERNAL MODULE: ./src/common/hook/useWindowWidth/index.ts + 3 modules
var useWindowWidth = __webpack_require__(189);
;// CONCATENATED MODULE: ./src/common/hook/useMobile/useMobile.ts

function useMobile() {
    const { width  } = (0,useWindowWidth/* useWindowSize */.i)();
    return width <= 960;
}

;// CONCATENATED MODULE: ./src/common/hook/useMobile/index.ts



/***/ })

};
;