"use strict";
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 4448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_component_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2840);
/* harmony import */ var _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8765);
/* harmony import */ var _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_datadog_browser_rum__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_hook_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var _common_component_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1207);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_component_Navigation__WEBPACK_IMPORTED_MODULE_6__]);
_common_component_Navigation__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Layout({ children , hiddenFooter , FooterContainerClass ="" , ...rest }) {
    const { width: pageWidth , height: pageHeight  } = (0,_common_hook_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__/* .useWindowSize */ .i)();
    const contents = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth.contents
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = localStorage.getItem("access_token");
        if (token && contents.userInfo) {
            const user = contents.userInfo;
            if (_datadog_browser_rum__WEBPACK_IMPORTED_MODULE_4__.datadogRum) {
                _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_4__.datadogRum.setUser({
                    id: user.id,
                    name: user.full_name,
                    email: user.email,
                    registered_date: user.registered_date,
                    company: user.company,
                    newsletter_subscribed: user.info_subscribe,
                    marketing_consent: user.marketing_consent
                });
            }
        }
    }, [
        contents
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrap",
        style: {
            overflow: "inherit"
        },
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    minHeight: pageHeight - 274
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {}),
                    children
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_Footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const columnItemCountLimit = 6;
const splitArrayInHalf = (array)=>{
    const halfIndex = Math.ceil(array.length / 2);
    return [
        array.slice(0, halfIndex),
        array.slice(halfIndex)
    ];
};
function ProgramMenu({ programs , onItemClick  }) {
    if (!programs) return null;
    const isDoubledColumn = programs.length > columnItemCountLimit;
    const renderColumn = (_programs)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            children: _programs.map((_program)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemContainer, {
                    width: isDoubledColumn ? "300px" : "320px",
                    onClick: onItemClick,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                        href: `/program/${_program.id}`,
                        children: _program.name
                    })
                }, _program.id);
            })
        });
    };
    const renderDoubledColumn = (_programs)=>{
        const [firstColumnPrograms, secondColumnPrograms] = splitArrayInHalf(_programs);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                renderColumn(firstColumnPrograms),
                renderColumn(secondColumnPrograms)
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: isDoubledColumn ? renderDoubledColumn(programs) : renderColumn(programs)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgramMenu);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-173224c-0"
})`
  display: flex;
  position: absolute;
  top: 70px;
  right: -200px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-173224c-1"
})`
  z-index: 100;

  font: 14px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-173224c-2"
})`
  a {
    font-size: 14px;
    color: black;
    padding-bottom: 1.4em;
    display: block;
  }
  padding: 1em 2em;

  padding: 1.4em 1.3em 0 1.3em;
  text-align: left;
  border-left: 5px solid transparent;
  width: ${(props)=>props.width
};
  &:hover {
    border-left: 5px solid black;
  }
  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.1);
    margin: auto;
  }
`;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(next_link__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
    componentId: "sc-173224c-3"
})``;


/***/ }),

/***/ 2840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
;// CONCATENATED MODULE: ./src/common/component/Footer/Footer.tsx





// TODO: logo image 사이즈 변경 필요
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RuleSection, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GnbLogo, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/images/logos/logo1.svg",
                            alt: "grownbetter logo",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RuleList, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Rule, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.notion.so/jaram/7613ed99191e4c13a44f08a8d10d39da",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(RuleText, {
                                        title: "이용약관",
                                        children: "이용약관"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Rule, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.notion.so/jaram/7776b65825e0405ab2ea346fd6597c70",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(RuleText, {
                                        title: "개인정보처리방침",
                                        children: "개인정보처리방침"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Rule, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.notion.so/jaram/22014347374749c283c6fbc8eececb18",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(RuleText, {
                                        title: "환불정책",
                                        children: "환불정책"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Rule, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.wanted.co.kr/company/23944",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(RuleText, {
                                        title: "채용공고",
                                        children: "채용공고"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoSection, {
                children: GNB_DATA.map((data)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Info, {
                        children: [
                            data,
                            " \xa0"
                        ]
                    }, data);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CopyrightSection, {
                children: "Copyright \xa9 더자람컴퍼니. All right reserved."
            })
        ]
    });
};
const GNB_DATA = [
    "(주)더자람컴퍼니",
    "대표 천세희",
    "개인정보관리책임자 : 천세희",
    "사업자등록번호 : 581-87-02148",
    "통신판매업신고 : 2021-서울강남-03446호",
    "서울시 강남구 역삼로 172 8B 더자람컴퍼니",
    "고객센터 : 02-2135-6992",
    "문의 : hello@jaram.one", 
];
const FooterContainer = external_styled_components_default().footer.withConfig({
    componentId: "sc-cdb15cbc-0"
})`
  padding: 76px 24px 74px 24px;
  max-width: ${style/* device.desktopContainerSize */.Uh.desktopContainerSize};
  margin: auto;
  height: 100%;
  border-top: 1px solid #e7e7e7;

  @media ${style/* device.tablet */.Uh.tablet} {
    padding: 50px 0 43px 2.99vw;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    padding: 50px 0 43px 5.56vw;
  }
`;
const RuleSection = external_styled_components_default().div.withConfig({
    componentId: "sc-cdb15cbc-1"
})`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;

  @media ${style/* device.tablet */.Uh.tablet} {
    grid-template-columns: 1fr;
  }
`;
const GnbLogo = external_styled_components_default().div.withConfig({
    componentId: "sc-cdb15cbc-2"
})`
  position: relative;
  width: 165px;
  height: 18px;
  margin-right: 50px;
`;
const RuleList = external_styled_components_default().ul.withConfig({
    componentId: "sc-cdb15cbc-3"
})`
  width: auto;
  display: inline-block;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin-top: 30px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin-top: 22px;
    display: grid;
  }
`;
const Rule = external_styled_components_default().li.withConfig({
    componentId: "sc-cdb15cbc-4"
})`
  float: left;

  @media ${style/* device.mobile */.Uh.mobile} {
    padding: 5px 0;
  }
`;
const RuleText = external_styled_components_default().a.withConfig({
    componentId: "sc-cdb15cbc-5"
})`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #616973;

  @media ${style/* device.mobile */.Uh.mobile} {
    margin-top: 10px;
    font-size: 13px;
  }
`;
const InfoSection = external_styled_components_default().div.withConfig({
    componentId: "sc-cdb15cbc-6"
})`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  width: 720px;

  @media ${style/* device.tablet */.Uh.tablet} {
    padding: 25px 0 22px;
    width: 395px;
    line-height: 28px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    width: 224px;
    margin-bottom: 5px;
  }
`;
const Info = external_styled_components_default().div.withConfig({
    componentId: "sc-cdb15cbc-7"
})`
  color: #8b95a1;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;

  &:before {
    content: "| ";
  }

  &:after {
    content: " ";
  }

  &:nth-child(1),
  :nth-child(6) {
    &:before {
      content: "";
    }
  }

  @media ${style/* device.tablet */.Uh.tablet} {
    &:nth-child(1),
    :nth-child(4),
    :nth-child(6),
    :nth-child(7) {
      &:before {
        content: "";
      }
    }

    &:nth-child(6) {
      width: 100%;
    }
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    font-size: 11px;

    &:before {
      content: "";
    }

    &:nth-child(3) {
      &:before {
        content: "| ";
      }
    }

    &:nth-child(1) {
      width: 100%;
    }
  }
`;
const CopyrightSection = external_styled_components_default().div.withConfig({
    componentId: "sc-cdb15cbc-8"
})`
  color: #616973;
  font-size: 13px;
  font-weight: 400;
`;

;// CONCATENATED MODULE: ./src/common/component/Footer/index.ts



/***/ }),

/***/ 8526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2352);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_hook_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(189);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_layout_ProgramMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8163);
/* harmony import */ var _NavigationMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6062);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4910);
/* harmony import */ var _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavigationMenu__WEBPACK_IMPORTED_MODULE_10__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_12__]);
([_NavigationMenu__WEBPACK_IMPORTED_MODULE_10__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const useNavigation = ()=>{
    const { 0: menuOpen , 1: setMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { width  } = (0,_common_hook_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__/* .useWindowSize */ .i)();
    const { isLoggedIn , isLoading  } = (0,_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .a)();
    const { 0: programsOpen , 1: setProgramsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { programList  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.program.contents
    );
    const isDesktop = width > _common_constant_style__WEBPACK_IMPORTED_MODULE_2__/* .size.tablet */ .dp.tablet;
    const closeMenu = ()=>setMenuOpen(false)
    ;
    const openMenu = ()=>setMenuOpen(true)
    ;
    const toggleProgramsOpen = ()=>setProgramsOpen((prev)=>!prev
        )
    ;
    return {
        isLoading,
        isDesktop,
        toggleProgramsOpen,
        programsOpen,
        programList,
        isLoggedIn,
        openMenu,
        menuOpen,
        closeMenu
    };
};
const Navigation = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_11__/* .bind */ .a)(useNavigation, ({ isDesktop , toggleProgramsOpen , programsOpen , programList , isLoggedIn , openMenu , menuOpen , closeMenu  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogoWrap, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                src: "/images/main/logo_horizontal.svg",
                                layout: "fill",
                                alt: "grownbetter"
                            })
                        })
                    })
                }),
                isDesktop ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Contents, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item, {
                            className: "nav_program",
                            onMouseEnter: toggleProgramsOpen,
                            onMouseLeave: toggleProgramsOpen,
                            children: [
                                "프로그램",
                                programsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_layout_ProgramMenu__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    programs: programList
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "/article",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                children: "블로그"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "https://jaram.notion.site/External-2636e018cfe44fc58a93974811bae82b",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                children: "가이드"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divier, {}),
                        isLoggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Contents, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/my/classroom",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                        children: "내 강의실"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/my/profile",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyIcon, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            src: "/images/my/rounded_my-icon.svg",
                                            layout: "fill",
                                            alt: "my"
                                        })
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "/login",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                children: "로그인"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuWrap, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5___default()), {
                            onClick: openMenu
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationMenu__WEBPACK_IMPORTED_MODULE_10__/* .NavigationMenu */ .i, {
                            open: menuOpen,
                            close: closeMenu
                        })
                    ]
                })
            ]
        })
    });
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-63536c47-0"
})`
  display: flex;
  max-width: ${_common_constant_style__WEBPACK_IMPORTED_MODULE_2__/* .device.desktopContainerSize */ .Uh.desktopContainerSize};
  margin: auto;
  height: 71px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_2__/* .device.desktopContainer */ .Uh.desktopContainer} {
    padding: 0px 24px;
  }
  .nav_program {
    height: 71px;
    display: flex;
    align-items: center;
    position: relative;
  }
`;
const LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-63536c47-1"
})`
  height: 100%;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-63536c47-2"
})`
  position: relative;
  width: 186px;
  height: 100%;
  cursor: pointer;
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-63536c47-3"
})`
  margin-right: 24px;
  cursor: pointer;
  color: #1a1a1a;
`;
const Divier = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-63536c47-4"
})`
  border-right: 1px solid #d7d7d7;
  margin-right: 24px;
  display: inline;
  height: 16px;
`;
const Contents = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-63536c47-5"
})`
  display: flex;
  align-items: center;
`;
const MenuWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-63536c47-6"
})`
  margin: 10px 0 10px 10px;
  cursor: pointer;
`;
const MyIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-63536c47-7"
})`
  position: relative;
  width: 43px;
  height: 43px;
  cursor: pointer;
  img {
    border-radius: 50%;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8526);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navigation__WEBPACK_IMPORTED_MODULE_0__]);
_Navigation__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ NavigationMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6080);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1658);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6174);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4910);
/* harmony import */ var _common_hook_useTablet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5714);
/* harmony import */ var _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_23__]);
_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_23__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
























const useNavigationMenu = ({ open , close  })=>{
    const { 0: programsOpen , 1: setProgramsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_20__.useRouter)();
    const { logout , isLoggedIn  } = (0,_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_23__/* .useAuth */ .a)();
    const { programList  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_19__.useSelector)((state)=>state.program.contents
    );
    const isTablet = (0,_common_hook_useTablet__WEBPACK_IMPORTED_MODULE_22__/* .useTablet */ .F)();
    const onClickTopCTA = ()=>push(isLoggedIn ? "/my" : "/login")
    ;
    const togglePrograms = ()=>setProgramsOpen((prev)=>!prev
        )
    ;
    return {
        open,
        close,
        onClickTopCTA,
        togglePrograms,
        programsOpen,
        programList,
        isLoggedIn,
        logout,
        isTablet
    };
};
const NavigationMenu = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_21__/* .bind */ .a)(useNavigationMenu, ({ open , close , onClickTopCTA , togglePrograms , programsOpen , programList , isLoggedIn , logout , isTablet  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default()), {
        fullScreen: true,
        PaperProps: isTablet ? {
            sx: {
                position: "fixed",
                top: 0,
                right: 0,
                width: "360px"
            }
        } : undefined,
        open: open,
        onClose: close,
        TransitionComponent: Transition,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10___default()), {
                color: "inherit",
                sx: {
                    position: "relative",
                    boxShadow: "0"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_11___default()), {
                    sx: {
                        height: "61px"
                    },
                    children: [
                        isLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Box, {
                            position: "relative",
                            width: "40px",
                            height: "40px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrap, {
                                onClick: close,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/my/profile",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        src: "/images/my/rounded_my-icon.svg",
                                        layout: "fill",
                                        alt: "my"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Box, {
                            sx: {
                                ...isLoggedIn ? {
                                    ml: 1.5
                                } : {},
                                display: "flex",
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrap, {
                                    onClick: close,
                                    children: isLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/my",
                                        children: "내 강의실"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/login",
                                        children: "로그인"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_16___default()), {
                                    sx: {
                                        fontSize: "15px"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                            edge: "start",
                            color: "inherit",
                            onClick: close,
                            "aria-label": "close",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_13___default()), {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_List__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                        sx: {
                            padding: "14px 20px"
                        },
                        button: true,
                        onClick: togglePrograms,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
                                primary: "프로그램"
                            }),
                            programsOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_17___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_18___default()), {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Collapse, {
                        in: programsOpen,
                        timeout: "auto",
                        unmountOnExit: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_8___default()), {
                            component: "div",
                            disablePadding: true,
                            children: programList === null || programList === void 0 ? void 0 : programList.map(({ id , name  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrap, {
                                    onClick: close,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: `/program/${id}`,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            sx: {
                                                padding: "9px 20px",
                                                color: "#666666",
                                                span: {
                                                    fontSize: "14px"
                                                }
                                            },
                                            primary: name
                                        })
                                    })
                                }, id)
                            )
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                        sx: {
                            padding: "14px 20px"
                        },
                        button: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrap, {
                            onClick: close,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/article",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    primary: "블로그"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                        sx: {
                            padding: "14px 20px"
                        },
                        button: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrap, {
                            onClick: close,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "https://jaram.notion.site/External-2636e018cfe44fc58a93974811bae82b",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    primary: "가이드"
                                })
                            })
                        })
                    }),
                    isLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkWrap, {
                        onClick: close,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                            sx: {
                                padding: "14px 20px"
                            },
                            onClick: logout,
                            button: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
                                primary: "로그아웃"
                            })
                        })
                    })
                ]
            })
        ]
    });
});
const Transition = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Slide__WEBPACK_IMPORTED_MODULE_14___default()), {
        direction: "left",
        ref: ref,
        ...props
    });
});
const LinkWrap = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-9e780971-0"
})`
  cursor: pointer;
  a {
    color: #1a1a1a;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport safe */ _NavigationMenu__WEBPACK_IMPORTED_MODULE_0__.i)
/* harmony export */ });
/* harmony import */ var _NavigationMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavigationMenu__WEBPACK_IMPORTED_MODULE_0__]);
_NavigationMenu__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dp": () => (/* binding */ size),
/* harmony export */   "Uh": () => (/* binding */ device),
/* harmony export */   "Is": () => (/* binding */ OutLinedButtonStyle),
/* harmony export */   "x_": () => (/* binding */ ColorButtonStyle)
/* harmony export */ });
const size = {
    mobile: 560,
    tablet: 980,
    desktopContainer: 1176
};
const device = {
    mobile: `(max-width: ${size.mobile}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    desktopContainer: `(max-width: ${size.desktopContainer}px)`,
    desktopContainerSize: `${size.desktopContainer}px`
};
const CommonStyle = {
    width: "140px",
    height: "44px",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "6px 6px",
    [`@media ${device.mobile}`]: {
        minWidth: "38.06vw",
        width: "100%",
        margin: "unset"
    }
};
const OutLinedButtonStyle = (visibility)=>{
    const outLinedButtonStyle = {
        ...CommonStyle,
        color: "#00BB22",
        visibility: `${visibility ? "visible" : "hidden"}`,
        borderColor: "#00BB22",
        "&:hover": {
            backgroundColor: "#ffffff",
            borderColor: "#7ae57e",
            color: "#7ae57e"
        },
        [`@media ${device.tablet}`]: {
            display: `${visibility ? "inline-block" : "none"}`
        }
    };
    return outLinedButtonStyle;
};
const ColorButtonStyle = {
    ...CommonStyle,
    fontWeight: "500"
};


/***/ }),

/***/ 5714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ useTablet)
});

// EXTERNAL MODULE: ./src/common/hook/useWindowWidth/index.ts + 3 modules
var useWindowWidth = __webpack_require__(189);
;// CONCATENATED MODULE: ./src/common/hook/useTablet/useTablet.ts

function useTablet() {
    const { width  } = (0,useWindowWidth/* useWindowSize */.i)();
    return width <= 960 && width > 560;
}

;// CONCATENATED MODULE: ./src/common/hook/useTablet/index.ts



/***/ }),

/***/ 189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ useWindowSize)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/hook/useResizeEffect/useResizeEffect.ts

function useResizeEffect(callback) {
    return (0,external_react_.useEffect)(()=>{
        window.addEventListener('resize', callback);
        callback();
        return ()=>window.removeEventListener('resize', callback)
        ;
    }, [
        callback
    ]);
}

;// CONCATENATED MODULE: ./src/common/hook/useResizeEffect/index.ts


;// CONCATENATED MODULE: ./src/common/hook/useWindowWidth/useWindowWidth.ts


function useWindowSize(defaultValue) {
    const { 0: windowWidth , 1: setWindowWidth  } = (0,external_react_.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 0);
    const { 0: windowHeight , 1: setWindowHeight  } = (0,external_react_.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 0);
    useResizeEffect(()=>{
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    });
    return {
        width: windowWidth,
        height: windowHeight
    };
}

;// CONCATENATED MODULE: ./src/common/hook/useWindowWidth/index.ts



/***/ }),

/***/ 4910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ bind)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function bind(useHook, ViewComponent, options) {
    const { displayName  } = options !== null && options !== void 0 ? options : {};
    const MemoizedViewComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ViewComponent);
    const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MemoizedViewComponent, useHook(props))
    );
    Component.displayName = ViewComponent.displayName;
    if (displayName) {
        Component.displayName = displayName;
    }
    return Component;
}


/***/ })

};
;