"use strict";
(() => {
var exports = {};
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 7019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_mypage_page_vod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_mypage_page_vod__WEBPACK_IMPORTED_MODULE_0__]);
src_mypage_page_vod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_mypage_page_vod__WEBPACK_IMPORTED_MODULE_0__/* .Vod */ .J);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* reexport safe */ _useUserVod__WEBPACK_IMPORTED_MODULE_0__.j)
/* harmony export */ });
/* harmony import */ var _useUserVod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5209);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUserVod__WEBPACK_IMPORTED_MODULE_0__]);
_useUserVod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useUserVod)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUserVod = ()=>{
    const { error , userVod , mutate  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: _common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_MEMBER_VOD */ .TN,
        dataName: "userVod",
        withToken: true
    });
    const isLoggedIn = !error && !!userVod;
    return {
        error,
        isLoggedIn,
        userVod,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ AttachmentVod)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DownloadLinkVod_DownloadLinkVod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9465);
/* harmony import */ var _common_api_useAttachment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useAttachment__WEBPACK_IMPORTED_MODULE_2__]);
_common_api_useAttachment__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AttachmentVod = ({ videoId  })=>{
    const { isValid , download  } = (0,_common_api_useAttachment__WEBPACK_IMPORTED_MODULE_2__/* .useDownloadAttachSWR */ .k)(videoId);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isValid ? download.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadLinkVod_DownloadLinkVod__WEBPACK_IMPORTED_MODULE_1__/* .DownloadLinkVod */ .G, {
                download: item
            }, index)
        ) : null
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ DownloadLinkVod)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/constant/api.ts
var api = __webpack_require__(304);
// EXTERNAL MODULE: ./utils/fetcher.ts + 1 modules
var fetcher = __webpack_require__(5022);
;// CONCATENATED MODULE: ./src/mypage/components/AttachmentVod/DownloadLinkVod/useDownloadLinkVod.ts


const useDownloadLinkVod = (downloadId, isLink, signedURL)=>{
    const onClick = async ()=>{
        if (!downloadId) return;
        const url = `${api/* GET_ATTACHMENT */.bt}/download/${downloadId}/url`;
        const result = await (0,fetcher/* fetchPut */.ZE)({
            url
        });
        if (isLink) window.open(signedURL);
        return !isResultValid(result) ? console.log(`Failed to record Downcount for attachment${downloadId}`) : null;
    };
    const isResultValid = (result)=>result && result.data && result.data.count
    ;
    return {
        downloadId,
        onClick
    };
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
;// CONCATENATED MODULE: ./src/mypage/components/AttachmentVod/DownloadLinkVod/DownloadLinkVod.tsx






const DownloadLinkVod = ({ download: { url , downloadId , fileTitle , isLink  }  })=>{
    const { onClick  } = useDownloadLinkVod(downloadId, isLink = !!isLink, url);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DownloadLink, {
        onClick: onClick,
        href: isLink ? "#" : url,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                "aria-label": "close",
                sx: {
                    position: "relative",
                    width: "28px",
                    height: "28px",
                    padding: "6px",
                    objectFit: "fill"
                },
                children: isLink ? /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/images/s_images/btn_link.svg",
                    alt: "link button icon",
                    layout: "fill"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/images/s_images/btn_download.svg",
                    alt: "download button icon",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DataTitle, {
                children: fileTitle
            })
        ]
    });
};
const DownloadLink = external_styled_components_default().a.withConfig({
    componentId: "sc-f0f9a8d7-0"
})`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const DataTitle = external_styled_components_default().div.withConfig({
    componentId: "sc-f0f9a8d7-1"
})`
  color: #1a1a1a;
  text-decoration-line: underline;
  padding: 0 0 3px 7px;
  font-size: 14px;
  @media ${style/* device.tablet */.Uh.tablet} {
    font-size: 1.82vw;
  }
  @media ${style/* device.mobile */.Uh.mobile} {
    font-size: 3.88vw;
  }
`;


/***/ }),

/***/ 8918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* reexport safe */ _AttachmentVod__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _AttachmentVod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AttachmentVod__WEBPACK_IMPORTED_MODULE_0__]);
_AttachmentVod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ MyVod)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4910);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2352);
/* harmony import */ var _useMyVod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2413);
/* harmony import */ var _Vod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Vod__WEBPACK_IMPORTED_MODULE_8__]);
_Vod__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









moment__WEBPACK_IMPORTED_MODULE_5___default().locale("ko");
const MyVod = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_4__/* .bind */ .a)(_useMyVod__WEBPACK_IMPORTED_MODULE_7__/* .useMyVod */ .a, ({ programInfo , image , leaders , title , productType , productId , hasPassed , attachments , videoId  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyVodContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TitleSection, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MainImage, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            src: image,
                            alt: "program image",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        className: "textSection",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgramInfo, {
                        className: "textSection",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoList, {
                                children: programInfo().map((info, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Info, {
                                        children: info
                                    }, idx)
                                )
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Leaders, {
                                children: [
                                    "프로페셔널 리더:",
                                    leaders.map((leader)=>" " + leader.name
                                    )
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailSection, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vod__WEBPACK_IMPORTED_MODULE_8__/* .Vod */ .J, {
                    type: productType,
                    productId: productId,
                    hasPassed: hasPassed,
                    attachments: attachments,
                    videoId: videoId
                })
            })
        ]
    });
});
const MyVodContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-0"
})`
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`;
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-1"
})`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 51px 51px 0 51px;
  grid-template-areas:
    "image title"
    "image info";

  .textSection {
    margin: auto 29px;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    padding: 21px 0 0 21px;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    grid-template-areas:
      "image title"
      "info info";
    padding: 5.83vw 0 0 5.83vw;
    z-index: 22;
    background-color: #fff;

    .textSection {
      margin: auto 0;
    }
  }
`;
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-2"
})`
  grid-area: image;
  position: relative;
  width: 200px;
  height: 150px;
  border-radius: 4px;
  overflow: hidden;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    width: 22.22vw;
    height: 16.67vw;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h2.withConfig({
    componentId: "sc-eb411cec-3"
})`
  grid-area: title;
  padding-top: 28px;
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  word-break: break-word;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    padding-top: 0;
    font-size: 2.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.5em;
    max-height: max-content;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    padding: 0 19px 0 14px;
    margin: auto 0;
    font-size: 4.44vw;
  }
`;
const ProgramInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-4"
})`
  padding-bottom: 27px;
  grid-area: info;
  color: #8b95a1;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    padding-bottom: 19px;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    padding: 4.72vw 0 0 0;
  }
`;
const InfoList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-5"
})`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  flex-wrap: wrap;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    font-size: 2.08vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    display: grid;
    grid-auto-flow: row;
    font-size: 3.89vw;
  }
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-6"
})`
  &:nth-child(1) {
    &:before {
      content: "";
    }
  }

  &:before {
    content: "| ";
  }

  padding-right: 6px;
  width: fit-content;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    &:nth-child(2),
    :nth-child(3) {
      &:before {
        content: "";
      }
    }
  }
`;
const Leaders = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-7"
})`
  font-size: 16px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    font-size: 2.08vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    font-size: 3.89vw;
  }
`;
const DetailSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb411cec-8"
})`
  width: 100%;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport safe */ _MyVod__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _MyVod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MyVod__WEBPACK_IMPORTED_MODULE_0__]);
_MyVod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMyVod)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

moment__WEBPACK_IMPORTED_MODULE_0___default().locale("ko");
const useMyVod = ({ data  })=>{
    const { hasPassed , startDate , endDate , playingTime , period , productId , title , productType , image , leaders , attachments , video_id ,  } = data;
    const dateFormatting = (start, end)=>{
        if (!start || !end) return "";
        const vodPeriod = moment__WEBPACK_IMPORTED_MODULE_0___default()(start).format("YYYY.MM.DD") + "~" + moment__WEBPACK_IMPORTED_MODULE_0___default()(end).format("YYYY.MM.DD");
        return vodPeriod;
    };
    let date = dateFormatting(startDate, endDate);
    const programInfo = ()=>{
        const programInfos = [
            "온라인"
        ];
        if (date) programInfos.push(date);
        if (period && playingTime) programInfos.push(`${period}일 무제한 시청 | ${playingTime}분`);
        return programInfos;
    };
    return {
        programInfo,
        image,
        leaders,
        title,
        productType,
        productId,
        hasPassed,
        attachments,
        videoId: video_id
    };
};


/***/ }),

/***/ 2598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Vod)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_component_ColorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4462);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2352);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4910);
/* harmony import */ var _useVod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5999);
/* harmony import */ var _ProgramDetialContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1240);
/* harmony import */ var _AttachmentVod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AttachmentVod__WEBPACK_IMPORTED_MODULE_8__]);
_AttachmentVod__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Vod = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_5__/* .bind */ .a)(_useVod__WEBPACK_IMPORTED_MODULE_6__/* .useVod */ .V, ({ type , hasAttachment , hasPassed , videoId , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProgramDetialContainer__WEBPACK_IMPORTED_MODULE_7__/* .ProgramDetialContainer */ .W, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            type: type,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgramMaterialContainer, {
                type: type,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AttachmentWrapper, {
                        hasAttachment: hasAttachment,
                        children: hasAttachment && !hasPassed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AttachmentVod__WEBPACK_IMPORTED_MODULE_8__/* .AttachmentVod */ .r, {
                            videoId: videoId
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_ColorButton__WEBPACK_IMPORTED_MODULE_3__/* .ColorButton */ .E, {
                        onClick: onClick,
                        style: {
                            ..._common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .ColorButtonStyle */ .x_,
                            [`@media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.mobile */ .Uh.mobile}`]: {
                                width: "77.78vw"
                            }
                        },
                        disabled: hasPassed,
                        children: "VOD 시청"
                    })
                ]
            })
        })
    });
});
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb4cb7fd-0"
})`
  width: 100%;
  padding: 31px 0;
  border-top: 1px solid #e7e7e7;
  scroll-margin-top: 105px;

  &:first-child {
    border-top: 0;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.mobile */ .Uh.mobile} {
    padding: 20px 0;
  }
`;
const ProgramMaterialContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb4cb7fd-1"
})`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 100%;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    grid-auto-flow: column;
    row-gap: 4.56vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.mobile */ .Uh.mobile} {
    grid-auto-flow: row;
  }
`;
const AttachmentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-eb4cb7fd-2"
})`
  display: grid;
  row-gap: 6px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    visibility: ${({ hasAttachment  })=>hasAttachment ? "visible" : "hidden"
};
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.mobile */ .Uh.mobile} {
    display: ${({ hasAttachment  })=>hasAttachment ? "grid" : "none"
};
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* reexport safe */ _Vod__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _Vod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2598);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Vod__WEBPACK_IMPORTED_MODULE_0__]);
_Vod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useVod)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const useVod = ({ type , hasPassed , videoId , productId , attachments  })=>{
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const onClick = ()=>{
        if (hasPassed) {
            alert("VOD 시청 기간이 만료되었습니다.");
            return;
        }
        push(`/videos/${videoId}`);
    };
    return {
        type,
        hasPassed,
        videoId,
        productId,
        attachments,
        hasAttachment: !!(attachments === null || attachments === void 0 ? void 0 : attachments.length),
        onClick
    };
};


/***/ }),

/***/ 3117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Vod)
/* harmony export */ });
/* unused harmony export useVod */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2352);
/* harmony import */ var _common_api_useUserVod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7667);
/* harmony import */ var _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4485);
/* harmony import */ var _MyPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1197);
/* harmony import */ var src_mypage_components_MyVod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useUserVod__WEBPACK_IMPORTED_MODULE_5__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_6__, _MyPage__WEBPACK_IMPORTED_MODULE_7__, src_mypage_components_MyVod__WEBPACK_IMPORTED_MODULE_8__]);
([_common_api_useUserVod__WEBPACK_IMPORTED_MODULE_5__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_6__, _MyPage__WEBPACK_IMPORTED_MODULE_7__, src_mypage_components_MyVod__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useVod = ()=>{
    var ref, ref1;
    const { userVod  } = (0,_common_api_useUserVod__WEBPACK_IMPORTED_MODULE_5__/* .useUserVod */ .j)();
    const { 0: selectedTab , 1: setSelectedTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("current");
    const { isLoggedIn , isLoading  } = (0,_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isCurrent = !!(!(userVod === null || userVod === void 0 ? void 0 : (ref = userVod.past) === null || ref === void 0 ? void 0 : ref.length) || (userVod === null || userVod === void 0 ? void 0 : (ref1 = userVod.current) === null || ref1 === void 0 ? void 0 : ref1.length));
    // When component mount, the only condition to tap on the past is below,
    // TODO: 나중에 훅으로 만들면 좋겠음
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isLoggedIn && !isLoading) {
            // Pass current url as next param
            router.push(`/login?next=${encodeURIComponent(router.asPath)}`);
        }
    }, [
        isLoggedIn,
        isLoading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userVod) {
            setSelectedTab(isCurrent ? "current" : "past");
        }
    }, [
        userVod
    ]);
    return {
        userVod,
        selectedTab,
        setSelectedTab
    };
};
const Vod = ()=>{
    var ref;
    const { userVod , selectedTab , setSelectedTab  } = useVod();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyPage__WEBPACK_IMPORTED_MODULE_7__/* .MyPage */ .c, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyClassRoom, {
            "data-test": "my-vods",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    children: "내 VOD"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Division, {
                    children: TAP_DATA.map((division)=>{
                        const divisionName = division === "current" ? "수강 중" : "수강 완료";
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tap, {
                            onClick: ()=>setSelectedTab(division)
                            ,
                            selected: division === selectedTab,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TapText, {
                                    selected: division === selectedTab,
                                    children: divisionName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Count, {
                                    color: division,
                                    children: userVod && userVod[division].length
                                })
                            ]
                        }, division);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyVodList, {
                    children: userVod && userVod[selectedTab].length ? (ref = userVod[selectedTab]) === null || ref === void 0 ? void 0 : ref.map((vod, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_mypage_components_MyVod__WEBPACK_IMPORTED_MODULE_8__/* .MyVod */ .x, {
                            data: vod
                        }, `${vod.productId}_${index}`)
                    ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptyPage, {
                        children: "VOD가 없습니다."
                    })
                })
            ]
        })
    });
};
const TAP_DATA = [
    "current",
    "past"
];
const MyClassRoom = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7b2f50d1-0"
})`
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    margin: 0;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7b2f50d1-1"
})`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    display: none;
  }
`;
const Division = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7b2f50d1-2"
})`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 39px;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    margin-top: 0;
    border-bottom: unset;
  }
`;
const Tap = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
    componentId: "sc-7b2f50d1-3"
})`
  display: flex;
  margin-right: 26px;
  border-bottom: ${({ selected  })=>selected ? "3px solid #1a1a1a" : "unset"
};
  padding: 0 2px;
  margin-bottom: -1.5px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    padding: 15px 0;
    border-bottom: unset;
  }
`;
const TapText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7b2f50d1-4"
})`
  width: fit-content;
  padding: 0 4px 12px 0;
  font-size: 16px;
  color: ${({ selected  })=>selected ? "#1a1a1a" : "#777777"
};

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    font-size: 15px;
    padding: 0 4px 0 0;
  }
`;
const Count = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7b2f50d1-5"
})`
  width: fit-content;
  padding-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #009922;
  color: ${({ color  })=>color === "current" ? "#009922" : "#777777"
};

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    font-size: 15px;
    padding: 0;
  }
`;
const MyVodList = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7b2f50d1-6"
})`
  margin-top: 30px;
  display: grid;
  gap: 30px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.tablet */ .Uh.tablet} {
    margin-top: 0;
  }
`;
const EmptyPage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7b2f50d1-7"
})`
  margin: 200px auto;
  width: fit-content;
  font-size: 22px;
  font-weight: 500;
  color: #8b95a1;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_4__/* .device.mobile */ .Uh.mobile} {
    margin: 100px auto;
    font-size: 18px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* reexport safe */ _Vod__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _Vod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Vod__WEBPACK_IMPORTED_MODULE_0__]);
_Vod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8765:
/***/ ((module) => {

module.exports = require("@datadog/browser-rum");

/***/ }),

/***/ 1658:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 6174:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 6080:
/***/ ((module) => {

module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 1352:
/***/ ((module) => {

module.exports = require("amplitude-js");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7935:
/***/ ((module) => {

module.exports = require("react-gtm-module");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7664:
/***/ ((module) => {

module.exports = require("reduxsauce");

/***/ }),

/***/ 8466:
/***/ ((module) => {

module.exports = require("seamless-immutable");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,485,738,448,815,304,197,22,655], () => (__webpack_exec__(7019)));
module.exports = __webpack_exports__;

})();