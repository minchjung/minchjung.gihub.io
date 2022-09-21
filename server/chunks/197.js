"use strict";
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 4865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2352);
/* harmony import */ var _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_5__]);
_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SideBar = ({ children  })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { logout  } = (0,_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SideBarContiner, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageMenu, {
            children: PAGES.map((page)=>{
                const isSelected = pathname === page.link || pathname === page.seconderyLink;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: page.link,
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectPage, {
                        pageName: page.name,
                        isSelected: isSelected,
                        value: page.name,
                        onClick: ({ currentTarget  })=>{
                            currentTarget.value === "로그아웃" ? logout() : null;
                        },
                        children: page.name
                    })
                }, page.name);
            })
        })
    });
};
const PAGES = [
    {
        name: "프로필",
        link: "/my/profile"
    },
    {
        name: "내 강의실",
        link: "/my/classroom",
        seconderyLink: "/my"
    },
    {
        name: "내 VOD",
        link: "/my/vod"
    },
    {
        name: "구매 내역",
        link: "/my/purchase"
    },
    {
        name: "로그아웃",
        link: "/"
    }, 
];
const SideBarContiner = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af5dbe42-0"
})`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  min-width: 100px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    font-size: 15px;
    line-height: 15px;
    padding: 0 20px;
    border-bottom: 1px solid #e7e7e7;
  }
`;
const PageMenu = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-af5dbe42-1"
})`
  display: grid;
  gap: 10px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    grid-auto-flow: column;
    gap: 24px;
    width: fit-content;
  }
`;
const SelectPage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
    componentId: "sc-af5dbe42-2"
})`
  display: flex;
  color: ${({ isSelected  })=>isSelected ? "#009922" : "#1a1a1a"
};
  padding: 12px 0;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    display: ${({ pageName  })=>pageName === "로그아웃" ? "none" : "flex"
};
    padding: 15px 0;
    border-bottom: 1px solid ${({ isSelected  })=>isSelected ? "#009922" : "#e7e7e700"
};
    margin-bottom: -1px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _SideBar__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SideBar__WEBPACK_IMPORTED_MODULE_0__]);
_SideBar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ MyPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4448);
/* harmony import */ var src_mypage_components_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1495);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, src_mypage_components_SideBar__WEBPACK_IMPORTED_MODULE_3__]);
([_containers_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, src_mypage_components_SideBar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const MyPage = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        "data-test": "my-page",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyPageContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_mypage_components_SideBar__WEBPACK_IMPORTED_MODULE_3__/* .SideBar */ .K, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyPageDetail, {
                    children: children
                })
            ]
        })
    });
};
const MyPageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1b05e920-0"
})`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin: 60px auto;
  max-width: 1217px;
  height: auto;
  min-height: 100%;
  padding: 0 20px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    display: block;
    margin-top: 0;
    padding: 0;
  }
`;
const MyPageDetail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1b05e920-1"
})`
  max-width: 900px;
  width: 100vw;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    max-width: unset;
    width: 100%;
    padding: 0 20px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;