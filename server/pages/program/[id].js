(() => {
var exports = {};
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 2459:
/***/ ((module) => {

// Exports
module.exports = {
	"arrowPre": "styles_arrowPre__0QQ9h",
	"arrowNext": "styles_arrowNext__OCALh"
};


/***/ }),

/***/ 9416:
/***/ ((module) => {

// Exports
module.exports = {
	"styleItemCarousel": "styles_styleItemCarousel__Vr8Se"
};


/***/ }),

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2747);
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9629);
/* harmony import */ var _components_boxselling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2591);
/* harmony import */ var _components_introprogram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8140);
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2137);
/* harmony import */ var _components_curriculums_Curriculums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3376);
/* harmony import */ var _components_leaders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9489);
/* harmony import */ var _faqs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9739);
/* harmony import */ var _components_wysiwygeditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3371);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _constants_App__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3805);
/* harmony import */ var _hooks_common_useReservedPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3077);
/* harmony import */ var _src_program_component_ReviewSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6395);
/* harmony import */ var _common_component_AmplitudeViewdEvent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout__WEBPACK_IMPORTED_MODULE_5__, _src_program_component_ReviewSection__WEBPACK_IMPORTED_MODULE_16__]);
([_containers_layout__WEBPACK_IMPORTED_MODULE_5__, _src_program_component_ReviewSection__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















function Header({ program  }) {
    const { program_product  } = program;
    const product = program_product ? program_product[0] : {};
    // Use program description if exist or use introduction  after removing html and line breakes
    const description = program.description || program.introduction.replace(/(<([^>]+)>)|\n/gi, "").substring(0, 100);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: program.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: `https://www.grownbetter.com/program/${program.id}`
            }, "canonical"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "product"
            }, "type"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: program.name
            }, "title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `https://www.grownbetter.com/program/${program.id}`
            }, "url"),
            program.program_images.map(function(image, i) {
                // Use all images from the program images
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: image.full_path
                }, i == 0 ? "image" : `image_${i}`);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                property: "og:description",
                content: description
            }, "description"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "product:price.amount",
                content: product.price
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "product:price.currency",
                content: "KRW"
            })
        ]
    });
}
function Program({ program  }) {
    var ref;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: dataSelling , 1: setDataSelling  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: mount , 1: setMount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: reservation , 1: setReservation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selling , 1: setSelling  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleGetProgramDetailSuccess(program);
        if (program.id && dataSelling) {
            const { id , name , program_product  } = program;
            const { price , list_price  } = program_product[0];
            react_gtm_module__WEBPACK_IMPORTED_MODULE_14___default().dataLayer({
                dataLayer: {
                    ecommerce: null
                }
            });
            react_gtm_module__WEBPACK_IMPORTED_MODULE_14___default().dataLayer({
                dataLayer: {
                    event: "detail",
                    ecommerce: {
                        detail: {
                            actionField: {
                                step: 1
                            },
                            products: [
                                {
                                    id: id,
                                    name: name,
                                    price: dataSelling.price
                                }, 
                            ]
                        }
                    },
                    goodsInfo: [
                        {
                            item_id: id,
                            item_name: name,
                            price: dataSelling.price,
                            full_price: dataSelling.list_price
                        }, 
                    ]
                }
            });
        }
    }, [
        program
    ]);
    const handleGetProgramDetailSuccess = (response)=>{
        setData(response);
        setReservation(router.query.reservation === "reservation" ? "reservation" : false);
        if (response.statusCode == _constants_App__WEBPACK_IMPORTED_MODULE_15__/* .NO_ACCESS_URL */ .yt) {
            router.push("/");
        }
        if (Array.isArray(response.program_product)) {
            let mySelling = response.program_product[0];
            const newPrice = (0,_hooks_common_useReservedPrice__WEBPACK_IMPORTED_MODULE_18__/* .useReservedPrice */ .x)(router, mySelling);
            response.program_product.map((item)=>{
                if (item.price < mySelling.price) {
                    mySelling = item;
                }
            });
            setSelling({
                ...mySelling,
                price: newPrice
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setDataSelling(selling);
    }, [
        selling
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMount(false);
        setTimeout(()=>{
            setMount(true);
        }, 300);
    // history.replaceState({}, '', location.pathname); // TODO: url 에서 reservation 또는 secret 삭제 필요 시 활성화
    }, [
        program === null || program === void 0 ? void 0 : program.introduction,
        selling
    ]);
    const Wysiwyg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wysiwygeditor__WEBPACK_IMPORTED_MODULE_13__/* .WysiwygEditor */ .R, {
            introduction_editor: (program === null || program === void 0 ? void 0 : program.introduction) || ""
        });
    }, [
        program === null || program === void 0 ? void 0 : program.introduction
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            dataSelling.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_AmplitudeViewdEvent__WEBPACK_IMPORTED_MODULE_17__/* .AmplitudeViewdEvent */ .g, {
                event: "viewProgram",
                data: {
                    programId: program.id,
                    programName: program.name,
                    productType: dataSelling.product_type
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                program: program
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contents_wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "main-visual",
                        className: "program_visual",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_carousel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            options: (program === null || program === void 0 ? void 0 : program.program_images) || []
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "all_contents",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_boxselling__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                id: ((ref = router.query) === null || ref === void 0 ? void 0 : ref.id) || "",
                                name: (program === null || program === void 0 ? void 0 : program.name) || "",
                                productType: dataSelling.product_type,
                                startDate: new Date(dataSelling.start_date),
                                dataSelling: dataSelling,
                                selling: program.is_hidden,
                                reservation: reservation,
                                invisible: dataSelling.price == 0,
                                sellingStatus: data.program_status
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.price) ? "program_layoutpc" : "program_layoutpc promo",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_introprogram__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        options: (program === null || program === void 0 ? void 0 : program.summary_description) || [],
                                        invisible: dataSelling.price == 0
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        options: (program === null || program === void 0 ? void 0 : program.program_product) || [],
                                        invisible: dataSelling.price == 0
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_program_component_ReviewSection__WEBPACK_IMPORTED_MODULE_16__/* .ReviewSection */ .g, {
                                        programClassification: program.classification
                                    }),
                                    mount ? Wysiwyg : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_curriculums_Curriculums__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        options: (program === null || program === void 0 ? void 0 : program.program_curiculum_registrations) || [],
                                        invisible: dataSelling.price == 0
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "pro_recommend",
                                        style: {
                                            display: (dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.price) ? "block" : "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "pro_h3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Recommend"
                                                    }),
                                                    "이런 분에게 추천 드려요"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    whiteSpace: "pre-line"
                                                },
                                                children: program === null || program === void 0 ? void 0 : program.referral
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_leaders__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        options: (program === null || program === void 0 ? void 0 : program.professional_leaders) || [],
                                        invisible: dataSelling.price == 0
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_faqs__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        options: (program === null || program === void 0 ? void 0 : program.program_faqs) || []
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Program);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ boxselling_BoxSelling)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./utils/StringUtils.ts
var StringUtils = __webpack_require__(2901);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/hook/useQueryString/index.ts + 1 modules
var useQueryString = __webpack_require__(2756);
// EXTERNAL MODULE: ./src/common/component/AmplitudeClickedEvent/index.ts + 1 modules
var AmplitudeClickedEvent = __webpack_require__(6145);
;// CONCATENATED MODULE: ./containers/program/components/boxselling/BoxSelling.tsx








const changeGreenButtonUrl = (id, secret, reservation)=>{
    const secretQuery = secret ? "?secret=" + secret : "?reservation=" + reservation;
    return `/program/${id}/product${secretQuery}`;
};
function BoxSelling({ id , name , productType , startDate , dataSelling , selling , reservation , invisible , sellingStatus  }) {
    const { secret  } = (0,useQueryString/* useQueryString */.N)();
    const tenMinuteBeforeStart = new Date(startDate).getTime() - 10 * 60 * 1000;
    let ctaButtonText = sellingStatus === "사전예약" ? "사전예약 신청" : "프로그램 신청";
    if (productType == "세미나" && startDate && new Date().getTime() > tenMinuteBeforeStart) ctaButtonText = "판매 마감";
    if (sellingStatus == "판매중지") ctaButtonText = "판매 마감";
    if ((dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.member_people) == 0) ctaButtonText = "인원 마감";
    // TODO: Remvoe this: SBA products
    const isSBA = [
        "669",
        "672",
        "673",
        "674",
        "675",
        "676",
        "677"
    ].includes(id);
    const specialSBA = [
        "701",
        "710",
        "707",
        "716",
        "718",
        "719",
        "720",
        "721"
    ].includes(id);
    var _installment_price;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "program_layoutpc2",
        style: {
            display: invisible ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "pro_price",
            className: "pro_price",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: "pro_price_h3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "txt_icon",
                            children: [
                                "모집인원 ",
                                dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.member_people,
                                "명"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "txt_tit",
                            children: name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                            className: "pro_pricelist",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    className: "txt_pro_fixedprice",
                                    children: "정가"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                    className: "txt_pro_fixedprice_price",
                                    children: [
                                        (0,StringUtils/* convertCurrency */.Nh)((dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.list_price) || 0),
                                        "원"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    className: "txt_pro_price",
                                    children: isSBA ? "보증금" : "프로그램 판매가"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                    className: "txt_pro_price2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                specialSBA ? "100" : (dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.price) && dataSelling.list_price && 100 - Math.floor(dataSelling.price / dataSelling.list_price * 100),
                                                "%"
                                            ]
                                        }),
                                        specialSBA ? "무료" : `${(0,StringUtils/* convertCurrency */.Nh)((dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.price) || 0)}원`
                                    ]
                                })
                            ]
                        }),
                        dataSelling.installment_price && !isSBA && !specialSBA && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                            className: "pro_pricelist",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    className: "installment_price_title",
                                    children: "12개월 무이자 할부 시"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                    className: "installment_price",
                                    children: [
                                        "월 ",
                                        (0,StringUtils/* convertCurrency */.Nh)((_installment_price = dataSelling.installment_price) !== null && _installment_price !== void 0 ? _installment_price : 0),
                                        " 원"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "btn_program",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bt_wrap_green",
                        children: !selling ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AmplitudeClickedEvent/* AmplitudeClickedEvent */.P, {
                                    event: "clickProgramCTA",
                                    data: {
                                        programId: id,
                                        programName: name
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (dataSelling === null || dataSelling === void 0 ? void 0 : dataSelling.member_people) > 0 && sellingStatus !== "판매중지" ? "btn_box_green" : "btn_box_green disabled",
                                        style: {
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        onClick: ()=>{
                                            router_default().push(changeGreenButtonUrl(id, secret, reservation));
                                        },
                                        "data-test": "purchase-button",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "btn_program_apply",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: ctaButtonText
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "btn_under_wrapper",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "btn_box_gray",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "https://grownbetter.channel.io/",
                                            children: specialSBA ? "세미나 신청 문의" : isSBA ? "지원금 관련 문의" : "할인 혜택 문의"
                                        })
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "btn_box_green",
                            style: {
                                backgroundColor: "#393939"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(P, {
                                    children: "판매 중지"
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const boxselling_BoxSelling = (BoxSelling);
const P = external_styled_components_default().p.withConfig({
    componentId: "sc-c4e2a26c-0"
})`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

;// CONCATENATED MODULE: ./containers/program/components/boxselling/index.tsx



/***/ }),

/***/ 9629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ carousel_MyCarousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./containers/program/components/carousel/styles.module.scss
var styles_module = __webpack_require__(2459);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: ./containers/program/components/carousel/MyCarousel.tsx





function MyCarousel({ options =[]  }) {
    const { 0: windowSize , 1: setWindowSize  } = (0,external_react_.useState)({
        width: 0,
        height: 0
    });
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    const renderListCarousel = ()=>{
        return options.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    style: {
                        width: windowSize.width,
                        height: 759 * windowSize.width / 1577,
                        maxHeight: 600,
                        objectFit: 'cover'
                    },
                    src: item.full_path,
                    alt: item.file_name
                })
            }, item.id)
        );
    };
    const renderArrowPrev = (clickHandler, hasPrev)=>{
        const handleOnClick = ()=>{
            clickHandler();
        };
        if (!hasPrev) return null;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).arrowPre,
            onClick: handleOnClick
        });
    };
    const renderArrowNext = (clickHandler, hasNext)=>{
        const handleOnClick = ()=>{
            clickHandler();
        };
        if (!hasNext) return null;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).arrowNext,
            onClick: handleOnClick
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: options && options.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
            autoPlay: true,
            infiniteLoop: true,
            showStatus: false,
            showThumbs: false,
            showIndicators: true,
            interval: 5000,
            renderArrowPrev: renderArrowPrev,
            renderArrowNext: renderArrowNext,
            children: renderListCarousel()
        })
    });
}
/* harmony default export */ const carousel_MyCarousel = (MyCarousel);

;// CONCATENATED MODULE: ./containers/program/components/carousel/index.tsx



/***/ }),

/***/ 3376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Curriculums({ options , invisible  }) {
    const renderListSub = (contents)=>{
        return contents.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "curriculum-item",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: !item.content_background ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "icon_no",
                            children: item.content_title
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "icon_homework",
                            children: item.content_title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: item.content
                    })
                ]
            }, item.id)
        );
    };
    const renderList = ()=>{
        return options.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: item.title
                    }),
                    renderListSub(item.program_contents)
                ]
            }, item.id)
        );
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "pro_curriculum",
        style: {
            display: invisible ? 'none' : 'block'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "pro_h3",
                id: "curriculum",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Curriculum"
                    }),
                    "커리큘럼"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "pro_curriculumlist",
                    children: renderList()
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Curriculums);


/***/ }),

/***/ 8140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ introprogram_IntroProgram)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./containers/program/components/introprogram/IntroProgram.tsx


function IntroProgram({ options , invisible  }) {
    const renderProIntroList = ()=>{
        return [
            0,
            3,
            1,
            2
        ].map((ele)=>{
            let item = options[ele];
            return item ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: item.question
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                " ",
                                item.description,
                                " "
                            ]
                        }),
                        item.content
                    ]
                })
            }, item.order) : null;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "pro_intro",
        style: {
            display: invisible ? 'none' : 'block'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "pro_h3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Intro"
                    }),
                    "프로그램을 소개합니다."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "pro_introlist",
                    children: renderProIntroList()
                })
            })
        ]
    });
}
/* harmony default export */ const introprogram_IntroProgram = (IntroProgram);

;// CONCATENATED MODULE: ./containers/program/components/introprogram/index.tsx



/***/ }),

/***/ 9489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ leaders_Leaders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./containers/program/components/carouselmulti/styles.module.scss
var styles_module = __webpack_require__(9416);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
;// CONCATENATED MODULE: ./containers/program/components/carouselmulti/CarouselMulti.tsx






const responsive = {
    qaxLargeDesktop: {
        breakpoint: {
            min: 1845,
            max: 10000
        },
        items: 2.7
    },
    qxLargeDesktop: {
        breakpoint: {
            min: 1781,
            max: 1844
        },
        items: 2.7
    },
    xLargeDesktop: {
        breakpoint: {
            min: 1701,
            max: 1780
        },
        items: 2.7
    },
    largeDesktop: {
        breakpoint: {
            min: 1561,
            max: 1700
        },
        items: 2.7
    },
    xxDesktop: {
        breakpoint: {
            min: 1471,
            max: 1560
        },
        items: 2.7
    },
    xDesktop: {
        breakpoint: {
            min: 1431,
            max: 1470
        },
        items: 2.7
    },
    desktop: {
        breakpoint: {
            min: 1401,
            max: 1430
        },
        items: 2.6
    },
    mediumDesktop: {
        breakpoint: {
            min: 1281,
            max: 1400
        },
        items: 2.4
    },
    smallDesktop: {
        breakpoint: {
            min: 1081,
            max: 1280
        },
        items: 2.3
    },
    xxTablet: {
        breakpoint: {
            min: 1025,
            max: 1080
        },
        items: 2.1
    },
    xTablet: {
        breakpoint: {
            min: 986,
            max: 1024
        },
        items: 2.7
    },
    tablet: {
        breakpoint: {
            min: 946,
            max: 985
        },
        items: 2.5
    },
    xSmallTablet: {
        breakpoint: {
            min: 901,
            max: 945
        },
        items: 2.4
    },
    smallTablet: {
        breakpoint: {
            min: 801,
            max: 900
        },
        items: 2.25
    },
    xlargeMobile: {
        breakpoint: {
            min: 769,
            max: 800
        },
        items: 2.2
    },
    xxMediumMobile: {
        breakpoint: {
            min: 671,
            max: 768
        },
        items: 2
    },
    xMediumMobile: {
        breakpoint: {
            min: 666,
            max: 670
        },
        items: 1.8
    },
    mediumMobile: {
        breakpoint: {
            min: 621,
            max: 665
        },
        items: 1.7
    },
    mobile: {
        breakpoint: {
            min: 541,
            max: 620
        },
        items: 1.6
    },
    xxxxxSmall: {
        breakpoint: {
            min: 501,
            max: 540
        },
        items: 1.5
    },
    xxxxSmall: {
        breakpoint: {
            min: 491,
            max: 500
        },
        items: 1.45
    },
    xxxSmall: {
        breakpoint: {
            min: 481,
            max: 490
        },
        items: 1.4
    },
    xxSmall: {
        breakpoint: {
            min: 461,
            max: 480
        },
        items: 1.35
    },
    xSmall: {
        breakpoint: {
            min: 441,
            max: 460
        },
        items: 1.3
    },
    small: {
        breakpoint: {
            min: 426,
            max: 440
        },
        items: 1.25
    },
    xxxxTiny: {
        breakpoint: {
            min: 416,
            max: 425
        },
        items: 1.2
    },
    xxxTiny: {
        breakpoint: {
            min: 401,
            max: 415
        },
        items: 1.15
    },
    xxTiny: {
        breakpoint: {
            min: 376,
            max: 400
        },
        items: 1.1
    },
    xTiny: {
        breakpoint: {
            min: 281,
            max: 375
        },
        items: 1
    },
    tiny: {
        breakpoint: {
            min: 0,
            max: 280
        },
        items: 0.8
    }
};
function isInLeftEnd({ currentSlide  }) {
    return !(currentSlide > 0);
}
function isInRightEnd({ currentSlide , totalItems , slidesToShow  }) {
    return !(currentSlide + slidesToShow < totalItems);
}
function CarouselMulti({ carouselRef , renderSlideList  }) {
    const CustomLeftArrow = ({ onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "swiper-button-prev",
            onClick: ()=>onClick()
        })
    ;
    const CustomRightArrow = ({ onClick  })=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "swiper-button-next",
            onClick: ()=>onClick()
        });
    };
    const CustomButtonGroup = ({ next , previous , carouselState , ...props })=>{
        const { totalItems , currentSlide  } = carouselState;
        const isInLeftReached = isInLeftEnd(carouselState);
        const isInRightReached = isInRightEnd(carouselState);
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pro_leader_tit",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "carousel_title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Professional Leader"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "carousel_title",
                                children: "이런 분들과 함께해요"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: 50
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: [
                                            "swiper-button-prev",
                                            isInLeftReached && "swiper-button-inactive"
                                        ].join(" "),
                                        onClick: ()=>previous()
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: [
                                            "swiper-button-next",
                                            isInRightReached && "swiper-button-inactive"
                                        ].join(" "),
                                        onClick: ()=>next()
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(CarouselWrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
            ref: carouselRef,
            infinite: false,
            responsive: responsive,
            itemClass: (styles_module_default()).styleItemCarousel,
            removeArrowOnDeviceType: [
                "tablet",
                "mobile"
            ],
            arrows: false,
            renderButtonGroupOutside: true,
            customButtonGroup: /*#__PURE__*/ jsx_runtime_.jsx(CustomButtonGroup, {}),
            children: renderSlideList
        })
    });
}
/* harmony default export */ const carouselmulti_CarouselMulti = (CarouselMulti);
// Remove content for remove double arrows on carousel's "<", ">" buttons
const CarouselWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-f3046b52-0"
})`
  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: "";
  }
`;

;// CONCATENATED MODULE: ./containers/program/components/carouselmulti/index.tsx


;// CONCATENATED MODULE: ./containers/program/components/leaders/Leaders.tsx

/* eslint-disable @next/next/no-img-element */ 

function Leaders({ options , invisible  }) {
    const { 0: windowSize , 1: setWindowSize  } = (0,external_react_.useState)({
        width: 0,
        height: 0
    });
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    const carouselRef = (0,external_react_.useRef)({});
    const renderSlideList = ()=>{
        return options.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "leader_box",
                style: {
                    marginTop: 90,
                    width: '90%'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "leader_img",
                        style: {
                            width: '100%',
                            height: 233,
                            backgroundColor: '#e3e3e3'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            style: {
                                width: '100%',
                                height: 233,
                                objectFit: 'cover'
                            },
                            src: item.profile_picture,
                            alt: "avatar"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "leader_info",
                        style: {
                            width: '100%',
                            height: 175
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: item.full_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    style: {
                                        whiteSpace: 'pre-line'
                                    },
                                    children: item.biography
                                })
                            })
                        ]
                    })
                ]
            }, item.id)
        );
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "pro_leader",
        style: {
            display: invisible ? 'none' : 'block'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "swiper-container mySwiper swiper-container-initialized swiper-container-horizontal",
            children: /*#__PURE__*/ jsx_runtime_.jsx(carouselmulti_CarouselMulti, {
                carouselRef: carouselRef,
                renderSlideList: renderSlideList() || []
            })
        })
    });
}
/* harmony default export */ const leaders_Leaders = (Leaders);

;// CONCATENATED MODULE: ./containers/program/components/leaders/index.tsx



/***/ }),

/***/ 2137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ products_Products)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "moment/min/locales"
var locales_ = __webpack_require__(5575);
// EXTERNAL MODULE: ./utils/StringUtils.ts
var StringUtils = __webpack_require__(2901);
// EXTERNAL MODULE: ./constants/Product.tsx
var Product = __webpack_require__(5712);
;// CONCATENATED MODULE: ./containers/program/components/products/Products.tsx







// Set moment locale
external_moment_default().locale("ko");
function Products({ options , invisible  }) {
    const { 0: pageWidth , 1: setPageWidth  } = (0,external_react_.useState)(!StringUtils/* isServer */.sk ? window.innerWidth : 0);
    const { MAIN , VOD , SEMINAR  } = Product/* PRODUCT_TYPE */.fY;
    (0,external_react_.useEffect)(()=>{
        handleOnReSize();
        window.addEventListener("resize", handleOnReSize, true);
        return ()=>window.removeEventListener("resize", handleOnReSize, true)
        ;
    }, []);
    const handleOnReSize = ()=>{
        setPageWidth(window.innerWidth);
    };
    const getTitleStartDate = (item)=>{
        const { start_date , end_date  } = item.schedules[0];
        if (!start_date || !end_date) return null;
        const date = external_moment_default()(start_date).format("YYYY.MM.DD(ddd)");
        const hourStart = external_moment_default()(start_date).format("A hh:mm");
        const hourEnd = external_moment_default()(end_date).format("hh:mm");
        return `${date} ${hourStart} ~ ${hourEnd}`;
    };
    const renderList = ()=>{
        return options.map((item)=>{
            const { product_type , name , schedules  } = item;
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: name
                        }),
                        (product_type === MAIN || product_type === SEMINAR) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "시작일: "
                                }),
                                " ",
                                external_moment_default()(item === null || item === void 0 ? void 0 : item.start_date).format("YYYY.MM.DD(ddd)"),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScheduleTime, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "시간:"
                                        }),
                                        " ",
                                        external_moment_default()(schedules === null || schedules === void 0 ? void 0 : schedules[0].start_date).format("A h:mm"),
                                        " ~",
                                        " ",
                                        external_moment_default()(schedules === null || schedules === void 0 ? void 0 : schedules[0].end_date).format("h:mm")
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "전체 일정:"
                                        }),
                                        " ",
                                        (0,StringUtils/* getSchedulesConvertStr */.A0)(schedules)
                                    ]
                                })
                            ]
                        })
                    ]
                }, name)
            });
        });
    };
    const newOpenText = ()=>{
        const text = options.map((item)=>{
            if (item.product_type !== VOD) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: "pro_h3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Season"
                        }),
                        "신규 오픈한 기수"
                    ]
                });
            }
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "pro_h3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "New Open"
                    }),
                    "신규 오픈한 VOD"
                ]
            });
        });
        return text[0];
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "pro_seoson",
        style: {
            display: invisible ? "none" : "block"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "pro_h3",
                children: newOpenText()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "pro_seosonlist",
                    children: renderList()
                })
            })
        ]
    });
}
/* harmony default export */ const products_Products = (Products);
const ScheduleTime = external_styled_components_default().div.withConfig({
    componentId: "sc-1553ce69-0"
})`
  display: inline-block;
  margin-left: 2em;
  @media screen and (max-width: 554px) {
    display: block;
    margin-left: 0;
  }
`;

;// CONCATENATED MODULE: ./containers/program/components/products/index.tsx



/***/ }),

/***/ 3371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _WysiwygEditor__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _WysiwygEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7760);



/***/ }),

/***/ 9739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ faqs_Faqs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./containers/program/faqs/Faqs.tsx


function Faqs({ options  }) {
    const { 0: collapse , 1: setCollapse  } = (0,external_react_.useState)({
        id: null,
        isShow: false
    });
    const handleOnClickCollapse = (value)=>{
        if (collapse.id === value.id) {
            setCollapse({
                id: null,
                isShow: false
            });
        } else {
            setCollapse({
                id: value.id,
                isShow: true
            });
        }
    };
    const renderList = ()=>{
        return options.map((item)=>{
            const isShow = collapse.id === item.id && collapse.isShow;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "item",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: [
                            'accordionTitle',
                            isShow ? 'accordionTitleActive' : ''
                        ].join(' '),
                        onClick: ()=>handleOnClickCollapse(item)
                        ,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "faq-title",
                                children: [
                                    "Q. ",
                                    item.question
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: isShow ? '/images/s_images/btn_up.svg' : '/images/s_images/btn_down.svg',
                                className: "button-down"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: [
                            'text',
                            isShow ? 'show' : ''
                        ].join(' '),
                        children: item.answer
                    })
                ]
            }, item.id);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "pro_faq",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "sec-tit-1 pro_h3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "FAQ"
                    }),
                    "자세한 사항이 궁금해요"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "faq_list",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "accordion",
                    children: renderList()
                })
            })
        ]
    });
}
/* harmony default export */ const faqs_Faqs = (Faqs);

;// CONCATENATED MODULE: ./containers/program/faqs/index.tsx



/***/ }),

/***/ 3035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Program__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Program__WEBPACK_IMPORTED_MODULE_0__]);
_Program__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _constants_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1049);
/* harmony import */ var _containers_program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_program__WEBPACK_IMPORTED_MODULE_1__]);
_containers_program__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_containers_program__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
async function getServerSideProps({ params , query  }) {
    const secret = query.secret ? "?secret=" + query.secret : "";
    const url = `${_constants_Api__WEBPACK_IMPORTED_MODULE_0__/* .GET_PROGRAM_DETAIL */ .qg}/${params.id}${secret}`;
    const whenErrorReturn = {
        redirect: {
            permanent: false,
            destination: "/"
        }
    };
    try {
        const response = await fetch(url, {
            method: "GET"
        });
        const program = await response.json();
        if (response.status === 500) {
            throw new Error();
        }
        return {
            props: {
                program
            }
        };
    } catch  {
        return whenErrorReturn;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* reexport safe */ _useProductMaxSemester__WEBPACK_IMPORTED_MODULE_0__.e)
/* harmony export */ });
/* harmony import */ var _useProductMaxSemester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useProductMaxSemester__WEBPACK_IMPORTED_MODULE_0__]);
_useProductMaxSemester__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useProductMaxSemester)
/* harmony export */ });
/* harmony import */ var _hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useProductMaxSemester(classification) {
    const { maxSemester , mutate  } = (0,_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: (0,_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .getProductMaxSemester */ .M)(classification),
        dataName: 'maxSemester',
        withToken: false
    });
    return {
        maxSemester,
        mutate
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _useReviewStats__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _useReviewStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useReviewStats__WEBPACK_IMPORTED_MODULE_0__]);
_useReviewStats__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useReviewStats)
/* harmony export */ });
/* harmony import */ var _hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useReviewStats(classification) {
    const { averageScore , mutate  } = (0,_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: (0,_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .getReviewAverageScore */ .gg)(classification),
        dataName: 'averageScore',
        withToken: false
    });
    const average = averageScore && isNaN(averageScore) ? 0 : averageScore;
    return {
        average,
        mutate
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _useReviews__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _useReviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1355);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useReviews__WEBPACK_IMPORTED_MODULE_0__]);
_useReviews__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useReviews)
/* harmony export */ });
/* harmony import */ var _hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useReviews(classification) {
    const { reviews , mutate  } = (0,_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: (0,_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .getReviews */ ._r)(classification),
        dataName: 'reviews',
        withToken: false
    });
    return {
        reviews,
        mutate
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ Carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/component/Carousel/EmblaCarouselButtons.tsx


const PrevButton = ({ onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "embla__button embla__button--prev",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "embla__button__svg",
            viewBox: "137.718 -1.001 366.563 644",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
            })
        })
    })
;
const NextButton = ({ onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "embla__button embla__button--next",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "embla__button__svg",
            viewBox: "0 0 238.003 238.003",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
            })
        })
    })
;
const ArticlePrevButton = ({ onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "embla__button article_prev",
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            className: "embla__button__svg",
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    "clip-path": "url(#clip0_3630_424)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "22",
                        height: "22",
                        transform: "translate(22 22) rotate(180)",
                        fill: "#FAFAFA"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M12.8669 14.8948C12.6973 15.0417 12.4308 15.0338 12.2718 14.8771L9.11387 11.766C8.96204 11.6164 8.96204 11.3836 9.11387 11.234L12.2718 8.12294C12.4308 7.96621 12.6973 7.95828 12.8669 8.1052C13.0366 8.25213 13.0452 8.49821 12.8861 8.65486L9.99818 11.5L12.8861 14.3451C13.0452 14.5018 13.0366 14.7479 12.8669 14.8948Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "clip0_3630_424",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "22",
                            height: "22",
                            fill: "white",
                            transform: "translate(22 22) rotate(180)"
                        })
                    })
                })
            ]
        })
    })
;
const ArticleNextButton = ({ onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "embla__button article_next ",
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            className: "embla__button__svg",
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    "clip-path": "url(#clip0_3630_423)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "22",
                        height: "22",
                        fill: "#FAFAFA"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M9.13308 7.10518C9.30273 6.95828 9.56919 6.96623 9.72824 7.12292L12.8861 10.234C13.038 10.3836 13.038 10.6164 12.8861 10.766L9.72824 13.8771C9.56919 14.0338 9.30273 14.0417 9.13308 13.8948C8.96343 13.7479 8.95483 13.5018 9.11388 13.3451L12.0018 10.5L9.11388 7.65487C8.95483 7.49818 8.96343 7.25207 9.13308 7.10518Z",
                    fill: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "clip0_3630_423",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "22",
                            height: "22",
                            fill: "white"
                        })
                    })
                })
            ]
        })
    })
;
const ReservedPrevButton = ({ onClick , itemLength  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "embla__button reserved_prev",
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "33",
            height: "33",
            viewBox: "0 0 33 33",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    width: "33",
                    height: "33",
                    rx: "2",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M19.8004 21.8197C19.5459 22.0715 19.1462 22.0579 18.9076 21.7893L14.1708 16.456C13.9431 16.1995 13.9431 15.8005 14.1708 15.544L18.9076 10.2107C19.1462 9.94208 19.5459 9.92848 19.8004 10.1803C20.0549 10.4322 20.0677 10.8541 19.8292 11.1226L15.4973 16L19.8292 20.8774C20.0677 21.146 20.0549 21.5679 19.8004 21.8197Z",
                    fill: itemLength > 4 ? '#000' : '#CBCBCB'
                })
            ]
        })
    })
;
const ReservedNextButton = ({ onClick , itemLength  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "embla__button reserved_next",
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "33",
            height: "33",
            viewBox: "0 0 33 33",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    width: "33",
                    height: "33",
                    rx: "2",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M14.1996 10.1803C14.4541 9.92849 14.8538 9.9421 15.0924 10.2107L19.8292 15.544C20.0569 15.8005 20.0569 16.1995 19.8292 16.456L15.0924 21.7893C14.8538 22.0579 14.4541 22.0715 14.1996 21.8197C13.9451 21.5678 13.9323 21.1459 14.1708 20.8774L18.5027 16L14.1708 11.1226C13.9323 10.854 13.9451 10.4321 14.1996 10.1803Z",
                    fill: itemLength > 4 ? '#000' : '#CBCBCB'
                })
            ]
        })
    })
;

;// CONCATENATED MODULE: external "embla-carousel-react"
const external_embla_carousel_react_namespaceObject = require("embla-carousel-react");
var external_embla_carousel_react_default = /*#__PURE__*/__webpack_require__.n(external_embla_carousel_react_namespaceObject);
;// CONCATENATED MODULE: ./src/common/component/Carousel/Carousel.tsx




const Carousel = ({ children , ...props })=>{
    const { itemLength , article , loop =true , reserved  } = props;
    const [viewportRef, embla] = external_embla_carousel_react_default()({
        // skipSnaps: false,
        loop,
        align: 'start'
    });
    const { 0: prevBtnEnabled , 1: setPrevBtnEnabled  } = (0,external_react_.useState)(false);
    const { 0: nextBtnEnabled , 1: setNextBtnEnabled  } = (0,external_react_.useState)(false);
    const scrollPrev = (0,external_react_.useCallback)(()=>embla && embla.scrollPrev()
    , [
        embla
    ]);
    const scrollNext = (0,external_react_.useCallback)(()=>embla && embla.scrollNext()
    , [
        embla
    ]);
    const onSelect = (0,external_react_.useCallback)(()=>{
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [
        embla
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!embla) return;
        embla.on('select', onSelect);
        itemLength && onSelect();
    }, [
        embla,
        onSelect
    ]);
    const CarouselButton = ()=>{
        if (article) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    prevBtnEnabled && /*#__PURE__*/ jsx_runtime_.jsx(ArticlePrevButton, {
                        onClick: scrollPrev
                    }),
                    prevBtnEnabled && /*#__PURE__*/ jsx_runtime_.jsx(ArticleNextButton, {
                        onClick: scrollNext
                    })
                ]
            });
        }
        if (reserved) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    prevBtnEnabled && /*#__PURE__*/ jsx_runtime_.jsx(ReservedPrevButton, {
                        onClick: scrollPrev,
                        itemLength: itemLength
                    }),
                    nextBtnEnabled && /*#__PURE__*/ jsx_runtime_.jsx(ReservedNextButton, {
                        onClick: scrollNext,
                        itemLength: itemLength
                    })
                ]
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                prevBtnEnabled && /*#__PURE__*/ jsx_runtime_.jsx(PrevButton, {
                    onClick: scrollPrev
                }),
                nextBtnEnabled && /*#__PURE__*/ jsx_runtime_.jsx(NextButton, {
                    onClick: scrollNext
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "embla",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "embla__viewport",
                ref: viewportRef,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "embla__container",
                    children: children
                })
            }),
            CarouselButton()
        ]
    });
};

;// CONCATENATED MODULE: ./src/common/component/Carousel/index.ts



/***/ }),

/***/ 3940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/common/utill/css/toPx.ts
var toPx = __webpack_require__(9129);
;// CONCATENATED MODULE: ./src/common/component/Text/Text.tsx


const Text = ({ children , size , color , weight , lineHeight  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: 'inline-block',
            color,
            fontSize: (0,toPx/* toPx */.a)(size),
            lineHeight: (0,toPx/* toPx */.a)(lineHeight),
            fontWeight: weight
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./src/common/component/Text/index.ts



/***/ }),

/***/ 9129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ toPx)
/* harmony export */ });
function toPx(value) {
    if (!value) {
        return undefined;
    }
    return `${value}px`;
}


/***/ }),

/***/ 2200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ReviewContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4910);
/* harmony import */ var _useReviewContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3260);
/* harmony import */ var _common_component_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(312);
/* harmony import */ var _ReviewContentCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5368);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useReviewContent__WEBPACK_IMPORTED_MODULE_2__]);
_useReviewContent__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ReviewContent = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_1__/* .bind */ .a)(_useReviewContent__WEBPACK_IMPORTED_MODULE_2__/* .useReviewContent */ .o, ({ reviews  })=>reviews ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Carousel__WEBPACK_IMPORTED_MODULE_3__/* .Carousel */ .l, {
        itemLength: reviews.length,
        loop: false,
        children: reviews.map(({ id , content , photoUrl , duration , week , memberName , memberCompany , isBestReview  })=>{
            const weeks = week.includes('null') ? '' : week;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    flex: [
                        '0 0 100%',
                        '0 0 45%'
                    ],
                    pl: '37px !important'
                },
                className: "embla__slide",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewContentCard__WEBPACK_IMPORTED_MODULE_4__/* .ReviewContentCard */ .q, {
                    content: content,
                    photoUrl: photoUrl,
                    duration: duration,
                    week: weeks,
                    memberName: memberName,
                    memberCompany: memberCompany,
                    isBestReview: isBestReview
                })
            }, id);
        })
    }) : null
);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _ReviewContent__WEBPACK_IMPORTED_MODULE_0__.L)
/* harmony export */ });
/* harmony import */ var _ReviewContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2200);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ReviewContent__WEBPACK_IMPORTED_MODULE_0__]);
_ReviewContent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useReviewContent)
/* harmony export */ });
/* harmony import */ var _common_api_useReviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useReviews__WEBPACK_IMPORTED_MODULE_0__]);
_common_api_useReviews__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function useReviewContent({ programClassification  }) {
    const { reviews  } = (0,_common_api_useReviews__WEBPACK_IMPORTED_MODULE_0__/* .useReviews */ .D)(programClassification);
    return {
        reviews
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ ReviewContentCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/common/component/Text/index.ts + 1 modules
var Text = __webpack_require__(3940);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/common/component/Spacing/index.ts + 1 modules
var Spacing = __webpack_require__(9461);
// EXTERNAL MODULE: ./src/common/utill/css/toPx.ts
var toPx = __webpack_require__(9129);
;// CONCATENATED MODULE: ./src/common/component/Circle/Circle.tsx


const Circle = ({ children , size  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            position: 'relative',
            width: (0,toPx/* toPx */.a)(size),
            height: (0,toPx/* toPx */.a)(size),
            overflow: 'hidden',
            borderRadius: (0,toPx/* toPx */.a)(size / 2)
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./src/common/component/Circle/index.ts


;// CONCATENATED MODULE: ./src/program/component/ReviewContentCard/ReviewContentCard.tsx






const ReviewContentCard = ({ content , photoUrl , duration , week , memberCompany , memberName , isBestReview ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Circle, {
                        size: 30,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: photoUrl,
                            alt: "member profile",
                            layout: "fill"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                        width: 12
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: "row",
                                children: [
                                    isBestReview && /*#__PURE__*/ jsx_runtime_.jsx(Text/* Text */.x, {
                                        size: 12,
                                        lineHeight: 15,
                                        weight: 700,
                                        color: "#00BC28",
                                        children: "베스트 리뷰\xa0"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text/* Text */.x, {
                                        size: 12,
                                        lineHeight: 15,
                                        weight: 700,
                                        children: [
                                            memberName,
                                            " ",
                                            memberCompany
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: "row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text/* Text */.x, {
                                        size: 11,
                                        lineHeight: 16,
                                        color: "#ACACAC",
                                        weight: 700,
                                        children: [
                                            duration,
                                            "\xa0"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Text/* Text */.x, {
                                        size: 11,
                                        lineHeight: 16,
                                        color: "#ACACAC",
                                        children: week
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                height: 13
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text/* Text */.x, {
                size: 14,
                lineHeight: 21,
                children: content
            })
        ]
    })
;

;// CONCATENATED MODULE: ./src/program/component/ReviewContentCard/index.ts



/***/ }),

/***/ 2859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* reexport */ ReviewInfoCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
;// CONCATENATED MODULE: ./src/program/component/ReviewInfoCard/useReviewInfoCard.ts
function useReviewInfoCard({ label , content  }) {
    return {
        label,
        content
    };
}

;// CONCATENATED MODULE: ./src/common/component/Center/Center.tsx

const Center = ({ children , alignment  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: alignment === 'vertical' ? 'center' : undefined,
            alignItems: alignment === 'horizontal' ? 'center' : undefined
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./src/common/component/Center/index.ts


// EXTERNAL MODULE: ./src/common/utill/css/toPx.ts
var toPx = __webpack_require__(9129);
;// CONCATENATED MODULE: ./src/common/component/Paper/Paper.tsx


const Paper = ({ type , children , border , radius , backgroundColor , width , p , py , px , flex  })=>{
    const paddingOption = {
        padding: p,
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py
    };
    const boxOption = {
        display: 'flex',
        flex,
        width,
        borderRadius: (0,toPx/* toPx */.a)(radius)
    };
    if (type === 'border') return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            border,
            ...boxOption,
            ...paddingOption
        },
        children: children
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            backgroundColor,
            ...boxOption,
            ...paddingOption
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./src/common/component/Paper/index.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/component/Text/index.ts + 1 modules
var Text = __webpack_require__(3940);
// EXTERNAL MODULE: ./src/common/component/Spacing/index.ts + 1 modules
var Spacing = __webpack_require__(9461);
;// CONCATENATED MODULE: ./src/program/component/ReviewInfoCard/ReviewInfoCard.tsx








const ReviewInfoCard = (0,bind/* bind */.a)(useReviewInfoCard, ({ label , content  })=>/*#__PURE__*/ jsx_runtime_.jsx(Paper, {
        type: "background",
        backgroundColor: "#F8F6F6",
        flex: 1,
        radius: 10,
        py: 10,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Center, {
            alignment: "horizontal",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Text/* Text */.x, {
                    size: 10,
                    lineHeight: 14,
                    children: label
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Spacing/* Spacing */.K, {
                    height: 3
                }),
                content
            ]
        })
    })
);

;// CONCATENATED MODULE: ./src/program/component/ReviewInfoCard/index.ts



/***/ }),

/***/ 9346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ ReviewSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4910);
/* harmony import */ var _useReviewSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9451);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_component_Spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9461);
/* harmony import */ var _common_component_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3940);
/* harmony import */ var _ReviewInfoCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2859);
/* harmony import */ var _ReviewContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useReviewSection__WEBPACK_IMPORTED_MODULE_2__, _ReviewContent__WEBPACK_IMPORTED_MODULE_8__]);
([_useReviewSection__WEBPACK_IMPORTED_MODULE_2__, _ReviewContent__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ReviewSection = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_1__/* .bind */ .a)(_useReviewSection__WEBPACK_IMPORTED_MODULE_2__/* .useReviewSection */ .d, ({ average , totalReviewCount , programClassification , maxSemester , invisible  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        pr: "5%",
        pl: [
            '5%',
            '5%',
            '5%',
            0
        ],
        sx: {
            visibility: invisible ? 'hidden' : 'visible'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .x, {
                size: 24,
                weight: 700,
                lineHeight: invisible ? 1 : 29,
                children: "리뷰"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_5__/* .Spacing */ .K, {
                height: 18
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                direction: "row",
                height: invisible ? 0 : 62,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewInfoCard__WEBPACK_IMPORTED_MODULE_7__/* .ReviewInfoCard */ .K, {
                        label: "만족도",
                        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                            direction: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_component_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .x, {
                                    size: 18,
                                    lineHeight: 25,
                                    weight: 700,
                                    children: [
                                        average,
                                        " \xa0"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .x, {
                                    size: 18,
                                    lineHeight: 25,
                                    weight: 700,
                                    color: "#CBCBCB",
                                    children: "/ 5"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_5__/* .Spacing */ .K, {
                        width: 17
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewInfoCard__WEBPACK_IMPORTED_MODULE_7__/* .ReviewInfoCard */ .K, {
                        label: "리뷰 수",
                        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_component_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .x, {
                            size: 18,
                            lineHeight: 25,
                            weight: 700,
                            children: [
                                totalReviewCount,
                                "건"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_5__/* .Spacing */ .K, {
                        width: 17
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewInfoCard__WEBPACK_IMPORTED_MODULE_7__/* .ReviewInfoCard */ .K, {
                        label: "총 진행 기수",
                        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_component_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .x, {
                            size: 18,
                            lineHeight: 25,
                            weight: 700,
                            children: [
                                maxSemester,
                                "기"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Spacing__WEBPACK_IMPORTED_MODULE_5__/* .Spacing */ .K, {
                height: invisible ? 0 : 37
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewContent__WEBPACK_IMPORTED_MODULE_8__/* .ReviewContent */ .L, {
                programClassification: programClassification
            })
        ]
    })
);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* reexport safe */ _ReviewSection__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _ReviewSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ReviewSection__WEBPACK_IMPORTED_MODULE_0__]);
_ReviewSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useReviewSection)
/* harmony export */ });
/* harmony import */ var _common_api_useReviewStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);
/* harmony import */ var _common_api_useReviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6237);
/* harmony import */ var _common_api_useProductMaxSemester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useReviewStats__WEBPACK_IMPORTED_MODULE_0__, _common_api_useReviews__WEBPACK_IMPORTED_MODULE_1__, _common_api_useProductMaxSemester__WEBPACK_IMPORTED_MODULE_2__]);
([_common_api_useReviewStats__WEBPACK_IMPORTED_MODULE_0__, _common_api_useReviews__WEBPACK_IMPORTED_MODULE_1__, _common_api_useProductMaxSemester__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useReviewSection({ programClassification  }) {
    const { average  } = (0,_common_api_useReviewStats__WEBPACK_IMPORTED_MODULE_0__/* .useReviewStats */ .T)(programClassification);
    const { reviews  } = (0,_common_api_useReviews__WEBPACK_IMPORTED_MODULE_1__/* .useReviews */ .D)(programClassification);
    const totalReviewCount = reviews === null || reviews === void 0 ? void 0 : reviews.length;
    const { maxSemester  } = (0,_common_api_useProductMaxSemester__WEBPACK_IMPORTED_MODULE_2__/* .useProductMaxSemester */ .e)(programClassification);
    const invisible = totalReviewCount === 0 ? true : false;
    return {
        average,
        totalReviewCount,
        programClassification,
        maxSemester,
        invisible
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8765:
/***/ ((module) => {

"use strict";
module.exports = require("@datadog/browser-rum");

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

/***/ 5575:
/***/ ((module) => {

"use strict";
module.exports = require("moment/min/locales");

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

/***/ }),

/***/ 3477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,152,485,738,448,815,304,49,901,805,460,963], () => (__webpack_exec__(7507)));
module.exports = __webpack_exports__;

})();