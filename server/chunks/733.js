"use strict";
exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 9018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _useUserProgram__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _useUserProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUserProgram__WEBPACK_IMPORTED_MODULE_0__]);
_useUserProgram__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useUserProgram)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUserProgram = ()=>{
    const { error , userPrograms , mutate  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: _common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_MEMBER_PROGRAM */ .GT,
        dataName: "userPrograms",
        withToken: true
    });
    const isLoggedIn = !error && !!userPrograms;
    return {
        error,
        isLoggedIn,
        userPrograms,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Attachment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DownloadLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3755);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DownloadLink__WEBPACK_IMPORTED_MODULE_3__]);
_DownloadLink__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Attachment = ({ productId , attachments , duePassed  })=>{
    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: productId ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            children: attachments === null || attachments === void 0 ? void 0 : attachments.map((attachment)=>{
                const { fileTitle , id , materialType , week , urlLink , isLink  } = attachment;
                const noDisplay = materialType === "녹화본";
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: !noDisplay && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadLink__WEBPACK_IMPORTED_MODULE_3__/* .DownloadLink */ .W, {
                        productId: productId,
                        attachment_id: id,
                        filename: fileTitle,
                        material_type: materialType,
                        duration: `${week}`,
                        url: urlLink,
                        isLink: isLink,
                        duePassed: duePassed
                    })
                });
            })
        }) : null
    });
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-3d2d9360-0"
})``;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ DownloadLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4910);
/* harmony import */ var _useDownloadLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1019);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useDownloadLink__WEBPACK_IMPORTED_MODULE_4__]);
_useDownloadLink__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const DownloadLink = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_3__/* .bind */ .a)(_useDownloadLink__WEBPACK_IMPORTED_MODULE_4__/* .useDownloadLink */ .e, ({ filename , url , isLink , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        href: url,
        onClick: onClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgramMaterialDetail, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                    "aria-label": "close",
                    sx: {
                        position: "relative",
                        width: "28px",
                        height: "28px",
                        padding: "6px",
                        objectFit: "fill"
                    },
                    children: isLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        src: "/images/s_images/btn_link.svg",
                        alt: "link button icon",
                        layout: "fill"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        src: "/images/s_images/btn_download.svg",
                        alt: "download button icon",
                        layout: "fill"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataTitle, {
                    children: filename
                })
            ]
        })
    });
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-ee99109a-0"
})``;
const ProgramMaterialDetail = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-ee99109a-1"
})`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 5px;
`;
const DataTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-ee99109a-2"
})`
  color: #1a1a1a;
  text-decoration-line: underline;
  padding: 0 0 3px 7px;
  font-size: 14px;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_7__/* .device.tablet */ .Uh.tablet} {
    font-size: 1.82vw;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_7__/* .device.mobile */ .Uh.mobile} {
    font-size: 3.88vw;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3755:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _DownloadLink__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _DownloadLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DownloadLink__WEBPACK_IMPORTED_MODULE_0__]);
_DownloadLink__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useDownloadLink)
/* harmony export */ });
/* harmony import */ var _common_api_useAttachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8451);
/* harmony import */ var _useUpdateCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1048);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api_useAttachment__WEBPACK_IMPORTED_MODULE_0__]);
_common_api_useAttachment__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useDownloadLink = ({ productId , attachment_id , filename , duration , material_type , duePassed  })=>{
    const { attachments , isValid  } = (0,_common_api_useAttachment__WEBPACK_IMPORTED_MODULE_0__/* .useDownloadBySchedule */ .j)(productId, Number(duration));
    const getURL = ()=>{
        if (!isValid) return "";
        return attachments.reduce((signedUrl, element)=>Number(attachment_id) === Number(element.attachment_id) ? element.url : signedUrl
        , "");
    };
    const getIsLink = ()=>{
        if (!isValid) return false;
        return attachments.reduce((isLink, element)=>Number(attachment_id) === Number(element.attachment_id) ? element.isLink : isLink
        , false);
    };
    const onClick = ()=>{
        if (duePassed) return;
        (0,_useUpdateCount__WEBPACK_IMPORTED_MODULE_1__/* .useUpdateCount */ .O)(productId, attachment_id).then((result)=>{
            if (getIsLink()) return window.open(getURL());
            return result;
        });
    };
    return {
        productId,
        attachment_id,
        filename,
        duration,
        material_type,
        url: duePassed ? "#" : getIsLink() ? "#" : getURL(),
        isLink: getIsLink(),
        duePassed,
        onClick
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useUpdateCount)
/* harmony export */ });
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(304);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5022);


const useUpdateCount = async (productId, attachmentId)=>{
    const url = `${src_common_constant_api__WEBPACK_IMPORTED_MODULE_0__/* .GET_ATTACHMENT */ .bt}/download/product/schedule?productId=${productId}&attachmentId=${attachmentId}`;
    const attachmentDownload = await (0,_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__/* .fetchPut */ .ZE)({
        url
    });
    const isValid = !!(attachmentDownload === null || attachmentDownload === void 0 ? void 0 : attachmentDownload.id);
    return {
        isValid,
        attachmentDownload
    };
};


/***/ }),

/***/ 7196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _Attachment__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _Attachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Attachment__WEBPACK_IMPORTED_MODULE_0__]);
_Attachment__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ Curriculum)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9409);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4604);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8279);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StaticMaterial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7813);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2352);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4910);
/* harmony import */ var _useCurriculum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7415);
/* harmony import */ var _RegularDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2653);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RegularDetail__WEBPACK_IMPORTED_MODULE_12__]);
_RegularDetail__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Curriculum = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_10__/* .bind */ .a)(_useCurriculum__WEBPACK_IMPORTED_MODULE_11__/* .useCurriculum */ .E, ({ hasPassed , week , title , googleCalendar , replayUrl , zoomLiveUrl , productId , assignmentUrl , date , type , attachments , weekEnd , weekStart , isOpen , leftButton , rightButton , preSurvey , lastSurvey , slackUrl , current ,  })=>{
    const Accordion = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_5___default()), {
            defaultExpanded: isOpen,
            disableGutters: true,
            elevation: 0,
            square: true,
            ...props
        })
    )(({ theme  })=>({})
    );
    const AccordionSummary = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)((props)=>// <MuiAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#c4c4c4" }} />} {...props} />
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_6___default()), {
            expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                src: "/images/my/arrow.svg",
                width: 14,
                height: 8,
                layout: "fixed"
            }),
            ...props
        })
    )(({ theme  })=>({
            flexDirection: "row",
            minHeight: "24px",
            padding: "unset",
            "& .MuiAccordionSummary-expandIconWrapper": {
                height: "24px",
                alignItems: "center"
            },
            "& .MuiAccordionSummary-content": {
                alignItems: "center",
                margin: "unset",
                [`@media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.mobile */ .Uh.mobile}`]: {
                    display: "grid",
                    gap: "6px"
                }
            },
            [`@media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.mobile */ .Uh.mobile}`]: {
                alignItems: "flex-start"
            }
        })
    );
    const AccordionDetails = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_7___default()))(({ theme  })=>({
            padding: "unset",
            paddingLeft: "96px",
            [`@media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.mobile */ .Uh.mobile}`]: {
                padding: "unset"
            }
        })
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Accordion, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AccordionSummary, {
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Weeks, {
                        children: week
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AccordionDetails, {
                children: [
                    type === "기수제" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ScheduleSection, {
                        children: [
                            date,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GoogleCelenderImage, {
                                children: date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    src: "/images/myProgramDetail_page/calender.svg",
                                    alt: "google calender img",
                                    layout: "fill",
                                    objectFit: "cover",
                                    onClick: ()=>window.open(googleCalendar.render())
                                })
                            })
                        ]
                    }),
                    type !== "기수제" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StaticMaterial__WEBPACK_IMPORTED_MODULE_8__/* .StaticMaterial */ .U, {
                            assignmentUrl: assignmentUrl,
                            type: type,
                            preSurvey: preSurvey,
                            slackUrl: slackUrl,
                            lastSurvey: lastSurvey,
                            hasPassed: hasPassed
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RegularDetail__WEBPACK_IMPORTED_MODULE_12__/* .RegularDetail */ .T, {
                            productId: productId,
                            attachments: attachments,
                            replayUrl: replayUrl,
                            zoomLiveUrl: zoomLiveUrl,
                            assignmentUrl: assignmentUrl,
                            week: Number(week),
                            weekStart: weekStart,
                            weekEnd: weekEnd,
                            hasPassed: hasPassed,
                            current: current
                        })
                    })
                ]
            })
        ]
    });
});
const Weeks = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d1b7c49f-0"
})`
  width: fit-content;
  min-width: 95px;
  padding: 0 29px 0 13px;
  color: #8b95a1;
  font-size: 14px;
  font-weight: 700;
  text-align: center;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.tablet */ .Uh.tablet} {
    padding: 0 1.82vw 0 0.91vw;
    font-size: 1.82vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.mobile */ .Uh.mobile} {
    min-width: unset;
    padding: unset;
    font-size: 3.88vw;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d1b7c49f-1"
})`
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 500;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.tablet */ .Uh.tablet} {
    font-size: 2.08vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.mobile */ .Uh.mobile} {
    font-size: 4.44vw;
  }
`;
const ScheduleSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d1b7c49f-2"
})`
  color: #8b95a1;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-top: 9px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.tablet */ .Uh.tablet} {
    font-size: 1.82vw;
    padding-top: 1.17vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.mobile */ .Uh.mobile} {
    font-size: 3.88vw;
    padding-top: 3.33vw;
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d1b7c49f-3"
})`
  width: 100%;
  padding: 25px 0 4px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_9__/* .device.mobile */ .Uh.mobile} {
    padding: 15px 0 7px;
  }
`;
const GoogleCelenderImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d1b7c49f-4"
})`
  position: relative;
  margin: 2px 9px 0;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* reexport safe */ _Curriculum__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _Curriculum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4869);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Curriculum__WEBPACK_IMPORTED_MODULE_0__]);
_Curriculum__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ useCurriculum)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "datebook"
var external_datebook_ = __webpack_require__(5747);
;// CONCATENATED MODULE: ./src/my/components/ProgramInfo/useGoogleCalender.ts

const useGoogleCalender = (title1, description1, start1, end1, updated_at)=>{
    let startDate = start1;
    let endDate = end1;
    let updatedAt = updated_at.split('.').join('-'); // vod 일 경우 30일 더한 값으로 전달
    function Config(title, description, start, end) {
        this.title = title;
        this.description = description;
        this.start = new Date(start);
        this.end = new Date(end);
    }
    const programDate = new Config(title1, description1, startDate, endDate);
    const vodEndDate = new Config(title1, description1, updatedAt, updatedAt);
    const config = {
        title: title1,
        description: description1,
        start: new Date(startDate),
        end: new Date(endDate)
    };
    const googleCalendar = new external_datebook_.GoogleCalendar(programDate);
    const vodGoogleCalender = new external_datebook_.GoogleCalendar(vodEndDate);
    return {
        googleCalendar,
        vodGoogleCalender
    };
};

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./src/mypage/components/Curriculum/useCurriculum.ts



const useCurriculum = ({ curriculumData , type , zoomLiveUrl , productId , preSurvey , lastSurvey , notionUrl , nextProgramStart , isPreSurveyOpen , isLastSurveyOpen , isLastWeek , slackUrl , hasPassed  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    let { week , assignmentUrl , replayUrl , title , weekEnd , weekStart , attachments  } = curriculumData;
    const urlId = location.hash.split("#")[1];
    const curriculumID = productId + "_" + week;
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)(0);
    const { 0: leftButton , 1: setLeftButton  } = (0,external_react_.useState)({
        visibility: false,
        url: null,
        text: "사전 설문 작성"
    });
    const { 0: rightButton , 1: setRightButton  } = (0,external_react_.useState)({
        url: null,
        text: "라이브 강의 참가",
        guideText: ""
    });
    const { googleCalendar  } = useGoogleCalender(title, zoomLiveUrl, weekStart, weekEnd, "");
    const beforeStart = (startDate)=>external_moment_default()(startDate).subtract(10, "minute")
    ;
    const oneWeeksLater = (weeks)=>external_moment_default()(weekStart).add({
            weeks
        }, "week")
    ;
    const isAfterStart = external_moment_default()().isAfter(beforeStart(weekStart));
    const isFinised = external_moment_default()().isAfter(weekEnd);
    const isNextProgramStart = external_moment_default()().isAfter(beforeStart(nextProgramStart));
    const isAfterOneWeek = external_moment_default()().isAfter(oneWeeksLater(1));
    (0,external_react_.useEffect)(()=>{
        if (!isAfterStart) {
            setLeftButton({
                visibility: false,
                url: null,
                text: "사전 설문 작성"
            });
            setRightButton({
                url: null,
                text: "라이브 강의 참가",
                guideText: "라이브 강의는 시작 10분 전부터 참가 가능해요"
            });
        }
        if (isAfterStart) {
            setLeftButton({
                visibility: true,
                url: replayUrl,
                text: "강의 다시보기"
            });
            setRightButton({
                url: zoomLiveUrl,
                text: "라이브 강의 참가",
                guideText: ""
            });
        }
        if (isFinised) {
            setRightButton({
                url: assignmentUrl,
                text: "과제 제출",
                guideText: "녹화본은 라이브 종료 후 24시간 후 제공합니다"
            });
        }
        if (isAfterOneWeek) {
            setRightButton({
                url: null,
                text: "과제 제출",
                guideText: ""
            });
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (hasPassed) return setIsOpen(false);
        if (curriculumID === urlId) {
            // 과업 url 을 통해서 접속 시 해당 주차를 열어준다
            setIsOpen(true);
            location.replace(`#${urlId}`);
            return;
        }
        if (isPreSurveyOpen) return setIsOpen(true);
        if (isLastSurveyOpen) return setIsOpen(true);
        if (isLastWeek && isAfterOneWeek) return setIsOpen(false);
        if (isAfterStart && !isNextProgramStart) {
            setCurrent(week ? Number(week) : 0);
            return setIsOpen(true);
        }
        setIsOpen(false);
    }, [
        curriculumData
    ]);
    if (type === "사전준비") {
        week = "사전준비";
        title = "원활한 강의 수강을 위한 준비";
    }
    if (type === "마무리") {
        week = "마무리";
        title = "수강 완료를 위한 마무리";
    }
    const dateFormatting = (start, end)=>{
        if (!start || !end) return "";
        const programStart = external_moment_default()(start).format("YYYY.MM.DD");
        const ProgramTime = external_moment_default()(start).format("a h:mm") + "~" + external_moment_default()(end).format("a h:mm");
        return programStart + "(" + external_moment_default()(start).format("ddd") + ") " + ProgramTime;
    };
    const date = dateFormatting(weekStart, weekEnd);
    return {
        week,
        title,
        googleCalendar,
        replayUrl,
        zoomLiveUrl,
        productId,
        assignmentUrl: assignmentUrl !== null && assignmentUrl !== void 0 ? assignmentUrl : notionUrl,
        date,
        type,
        attachments,
        weekEnd,
        weekStart,
        isOpen,
        leftButton,
        rightButton,
        slackUrl,
        preSurvey,
        lastSurvey,
        hasPassed,
        current
    };
};


/***/ }),

/***/ 6497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ MyClass)
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
/* harmony import */ var _useMyClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6436);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMyClass__WEBPACK_IMPORTED_MODULE_7__]);
_useMyClass__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








moment__WEBPACK_IMPORTED_MODULE_5___default().locale("ko");
const MyClass = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_4__/* .bind */ .a)(_useMyClass__WEBPACK_IMPORTED_MODULE_7__/* .useMyClass */ .n, ({ programInfo , programDetail , image , leaders , title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyClassContainer, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgramInfoDesktop, {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgramInfoMobile, {
                className: "textSection",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoList, {
                        children: programInfo().map((info)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Info, {
                                children: info
                            })
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailSection, {
                children: programDetail()
            })
        ]
    });
});
const MyClassContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b40cc14d-0"
})`
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`;
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b40cc14d-1"
})`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 51px 51px 0 51px;
  grid-template-areas:
    "image title"
    "image info";

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    padding: 21px 0 0 21px;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    grid-template-areas:
      "image title"
      "info info";
    padding: 5.83vw 0 4.72vw 5.83vw;
    z-index: 22;
    background-color: #fff;
  }
`;
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b40cc14d-2"
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
    componentId: "sc-b40cc14d-3"
})`
  grid-area: title;
  padding: 0 19px 18px 29px;
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  word-break: break-word;
  margin-top: auto;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    padding: 0 19px 2.34vw 29px;
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
const ProgramInfoDesktop = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b40cc14d-4"
})`
  padding: 0 19px 0 29px;
  margin-bottom: auto;
  grid-area: info;
  color: #8b95a1;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    display: none;
  }
`;
const ProgramInfoMobile = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b40cc14d-5"
})`
  display: none;
  color: #8b95a1;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    display: none;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    display: block;
    padding-left: 5.83vw;
  }
`;
const InfoList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b40cc14d-6"
})`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  flex-wrap: wrap;
  padding-bottom: 6px;
  padding-bottom: 6px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    font-size: 2.08vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    grid-auto-flow: row;
    font-size: 3.89vw;
    padding-bottom: 4px;
    line-height: 24px;
  }
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b40cc14d-7"
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
    componentId: "sc-b40cc14d-8"
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
    componentId: "sc-b40cc14d-9"
})`
  width: 100%;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _MyClass__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _MyClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6497);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MyClass__WEBPACK_IMPORTED_MODULE_0__]);
_MyClass__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6436:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useMyClass)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9844);
/* harmony import */ var _Regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2295);
/* harmony import */ var _Seminar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Regular__WEBPACK_IMPORTED_MODULE_3__, _Seminar__WEBPACK_IMPORTED_MODULE_4__]);
([_Regular__WEBPACK_IMPORTED_MODULE_3__, _Seminar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





moment__WEBPACK_IMPORTED_MODULE_1___default().locale("ko");
const useMyClass = ({ data  })=>{
    const { hasPassed , curriculums , endDate , image , lastSurvey , preSurvey , productId , productType , notionUrl , slackUrl , startDate , title , leaders , zoomLiveUrl , online , lastSurveyDone , isPreSurveyOpen , isLastSurveyOpen , attachments , replayUrl ,  } = data;
    const dateFormatting = (start, end)=>{
        if (!start || !end) return "";
        const programStart = moment__WEBPACK_IMPORTED_MODULE_1___default()(start).format("YYYY.MM.DD");
        const programEnd = moment__WEBPACK_IMPORTED_MODULE_1___default()(end).format("YYYY.MM.DD");
        const ProgramTime = moment__WEBPACK_IMPORTED_MODULE_1___default()(start).format("a h:mm") + "~" + moment__WEBPACK_IMPORTED_MODULE_1___default()(end).format("h:mm");
        if (start !== end) return programStart + "~" + programEnd + " | " + ProgramTime;
        return programStart;
    };
    const preSurveyUrl = preSurvey === "https://www.grownbetter.com/my" ? "" : preSurvey;
    let date = dateFormatting(startDate, endDate);
    const programInfo = ()=>{
        const programInfos = [];
        programInfos.push(online ? "온라인" : "오프라인");
        if (date && productType !== "사전예약") programInfos.push(date);
        if (curriculums) programInfos.push(`총 ${curriculums.length}회`);
        return programInfos;
    };
    const nextProgram = (idx)=>{
        let nextProgramStart = "";
        if (idx !== curriculums.length - 1) {
            var ref;
            nextProgramStart = (ref = curriculums[idx + 1]) === null || ref === void 0 ? void 0 : ref.weekStart;
        }
        return nextProgramStart;
    };
    const programDetail = ()=>{
        if (productType === "사전예약") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Reservation__WEBPACK_IMPORTED_MODULE_2__/* .Reservation */ .f, {});
        if (productType === "세미나") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Seminar__WEBPACK_IMPORTED_MODULE_4__/* .Seminar */ .v, {
                attachments: attachments,
                preSurvey: preSurvey,
                zoomLiveUrl: zoomLiveUrl,
                productId: productId,
                startDate: startDate,
                hasPassed: hasPassed,
                endDate: endDate,
                replayUrl: replayUrl
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Regular__WEBPACK_IMPORTED_MODULE_3__/* .Regular */ .F, {
            curriculums: curriculums,
            type: productType,
            productId: productId,
            isPreSurveyOpen: isPreSurveyOpen,
            preSurvey: preSurveyUrl,
            notionUrl: notionUrl,
            nextProgram: nextProgram,
            zoomLiveUrl: zoomLiveUrl,
            lastSurvey: lastSurvey,
            isLastSurveyOpen: isLastSurveyOpen,
            slackUrl: slackUrl,
            hasPassed: hasPassed
        });
    };
    return {
        programInfo,
        programDetail,
        image,
        leaders,
        title
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2585:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Regular)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2352);
/* harmony import */ var _ProgramDetialContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1240);
/* harmony import */ var _Curriculum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Curriculum__WEBPACK_IMPORTED_MODULE_4__]);
_Curriculum__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Regular = ({ curriculums , type , productId , isPreSurveyOpen , preSurvey , notionUrl , nextProgram , zoomLiveUrl , lastSurvey , isLastSurveyOpen , slackUrl , hasPassed ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ProgramDetialContainer__WEBPACK_IMPORTED_MODULE_3__/* .ProgramDetialContainer */ .W, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                type: type,
                id: productId + "_pre",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Curriculum__WEBPACK_IMPORTED_MODULE_4__/* .Curriculum */ .N, {
                    curriculumData: {},
                    isPreSurveyOpen: isPreSurveyOpen,
                    type: "사전준비",
                    preSurvey: preSurvey,
                    productId: productId,
                    notionUrl: notionUrl,
                    slackUrl: slackUrl,
                    hasPassed: hasPassed
                })
            }),
            curriculums === null || curriculums === void 0 ? void 0 : curriculums.map((curriculum, index)=>{
                const curriculumId = productId + "_" + curriculum.week;
                const isLastWeek = curriculums.length - 1 === index;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                    type: type,
                    id: curriculumId,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Curriculum__WEBPACK_IMPORTED_MODULE_4__/* .Curriculum */ .N, {
                        nextProgramStart: nextProgram(index),
                        curriculumData: curriculum,
                        type: type,
                        zoomLiveUrl: zoomLiveUrl,
                        productId: productId,
                        hasPassed: hasPassed,
                        isLastWeek: isLastWeek
                    }, index)
                }, curriculumId);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                type: type,
                id: productId + "_final",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Curriculum__WEBPACK_IMPORTED_MODULE_4__/* .Curriculum */ .N, {
                    curriculumData: {},
                    type: "마무리",
                    lastSurvey: lastSurvey,
                    productId: productId,
                    hasPassed: hasPassed,
                    isLastSurveyOpen: isLastSurveyOpen
                })
            })
        ]
    });
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-9676a951-0"
})`
  width: 100%;
  padding: ${({ type  })=>type !== "기수제" ? "31px 0" : "26px 0"
};
  border-top: 1px solid #e7e7e7;
  scroll-margin-top: 105px;

  &:first-child {
    border-top: 0;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_2__/* .device.mobile */ .Uh.mobile} {
    padding: 20px 0;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2295:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport safe */ _Regular__WEBPACK_IMPORTED_MODULE_0__.F)
/* harmony export */ });
/* harmony import */ var _Regular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2585);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Regular__WEBPACK_IMPORTED_MODULE_0__]);
_Regular__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ RegularDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _common_component_OutlinedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1936);
/* harmony import */ var _common_component_ColorButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4462);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2352);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4910);
/* harmony import */ var _useRegularDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4637);
/* harmony import */ var _Attachment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7196);
/* harmony import */ var _common_component_AlertBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8948);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Attachment__WEBPACK_IMPORTED_MODULE_9__]);
_Attachment__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const RegularDetail = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_7__/* .bind */ .a)(_useRegularDetail__WEBPACK_IMPORTED_MODULE_8__/* .useRegularDetail */ .p, ({ hasPassed , hasAttachment , productId , week , programDone , assignmentUrl , notStart , replayUrl , alert , guideText , attachments , onClick , onClose ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CurriculumMaterialContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AttachmentWrapper, {
                hasAttachment: !!hasAttachment,
                children: hasAttachment ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Attachment__WEBPACK_IMPORTED_MODULE_9__/* .Attachment */ .P, {
                    duePassed: false,
                    attachments: attachments,
                    productId: productId
                }) : null
            }),
            !hasPassed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ClassButton, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_OutlinedButton__WEBPACK_IMPORTED_MODULE_4__/* .OutlinedButton */ .U, {
                                btnName: "replayUrl",
                                onClick: onClick,
                                style: (0,_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .OutLinedButtonStyle */ .Is)(programDone),
                                disabled: !!!replayUrl,
                                children: "다시 보기 시청"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_ColorButton__WEBPACK_IMPORTED_MODULE_5__/* .ColorButton */ .E, {
                                btnName: programDone ? "assignmentUrl" : "zoomLiveUrl",
                                onClick: onClick,
                                style: _common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .ColorButtonStyle */ .x_,
                                disabled: !programDone ? notStart : !assignmentUrl,
                                children: programDone ? "과제 제출" : "라이브 시청하기"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonGuide, {
                                guideText: !!guideText,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        src: "/images/my/exclamation.svg",
                                        width: 18,
                                        height: 18
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GuideText, {
                                        children: guideText
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_AlertBar__WEBPACK_IMPORTED_MODULE_10__/* .Alertbar */ .C, {
                        alert: alert,
                        onClose: onClose
                    })
                ]
            })
        ]
    });
});
const CurriculumMaterialContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-447686fe-0"
})`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 100%;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    grid-auto-flow: row;
    row-gap: 3.91vw;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    grid-auto-flow: row;
  }
`;
const AttachmentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-447686fe-1"
})`
  display: grid;
  row-gap: 6px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    display: ${({ hasAttachment  })=>hasAttachment ? "grid" : "none"
};
  }
`;
const ClassButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-447686fe-2"
})`
  position: relative;
  display: flex;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    display: grid;
    grid-template-columns: minmax(0, 100vw);
    grid-auto-flow: column;
    gap: 6px;
    max-width: 300px;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    max-width: 100vw;
  }
`;
const ButtonGuide = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-447686fe-3"
})`
  position: absolute;
  display: ${({ guideText  })=>guideText ? "flex" : "none"
};
  align-items: center;
  bottom: -21px;
  right: 0;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    left: 0;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    font-size: 3.88vw;
  }
`;
const GuideText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-447686fe-4"
})`
  padding-left: 4px;
  font-size: 13px;
  color: #8b95a1;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _RegularDetail__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _RegularDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1153);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RegularDetail__WEBPACK_IMPORTED_MODULE_0__]);
_RegularDetail__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useRegularDetail)
/* harmony export */ });
/* harmony import */ var _common_component_AlertBar_useAlertBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1645);

const ALERT_MESSAGE = {
    replayUrl: "다시 보기 강의를 준비중입니다.",
    zoomLiveUrl: "라이브 강의를 준비중입니다. ",
    beforeLive: "라이브는 시작 10분 전부터 참가 가능해요",
    assignmentUrl: "과제를 준비중입니다."
};
const oneDayMilliSecs = 1 * 24 * 60 * 60 * 1000;
const oneMinutesMilliSecs = 1 * 60 * 1000;
const useRegularDetail = ({ weekStart , weekEnd , productId , attachments , week , hasPassed , replayUrl , zoomLiveUrl , assignmentUrl , current  })=>{
    const { alert , setAlertAll , onClose  } = (0,_common_component_AlertBar_useAlertBar__WEBPACK_IMPORTED_MODULE_0__/* .useAlertbar */ .o)();
    const tenMinuteBeforeStart = new Date(weekStart !== null && weekStart !== void 0 ? weekStart : "").getTime() - 10 * oneMinutesMilliSecs;
    const currentWeekEnd = new Date(weekEnd !== null && weekEnd !== void 0 ? weekEnd : "").getTime();
    const dayAfterWeekEnd = currentWeekEnd + oneDayMilliSecs;
    const url = {
        zoomLiveUrl,
        assignmentUrl,
        replayUrl
    };
    const isProgramStart = ()=>{
        const now = new Date().getTime();
        return now >= tenMinuteBeforeStart;
    };
    const isProgramEnd = ()=>{
        const now = new Date().getTime();
        return now > currentWeekEnd + oneMinutesMilliSecs;
    };
    const getValidKey = (e)=>{
        const target = e.target;
        return !!(target && (target === null || target === void 0 ? void 0 : target.name)) ? target.name : "";
    };
    const getGuidText = ()=>{
        const now = new Date().getTime();
        if (isProgramEnd() && now <= dayAfterWeekEnd && !replayUrl) {
            return "녹화본은 라이브 종료 후 24시간 후 제공합니다";
        }
        if (!isProgramStart()) {
            return "라이브 강의는 시작 10분 전부터 참가 가능해요";
        }
    };
    const onClick = (e)=>{
        const key = getValidKey(e);
        if (!key) return;
        if (key === "zoomLiveUrl" && !isProgramStart()) {
            return setAlertAll({
                ...alert,
                on: true,
                message: ALERT_MESSAGE.beforeLive
            });
        }
        if (url[key]) return window.open(url[key]);
        const message = ALERT_MESSAGE[key];
        setAlertAll({
            ...alert,
            on: true,
            message
        });
    };
    return {
        productId,
        week,
        hasPassed,
        attachments,
        hasAttachment: (attachments === null || attachments === void 0 ? void 0 : attachments.length) && week,
        programDone: isProgramEnd(),
        notStart: !isProgramStart(),
        zoomLiveUrl,
        assignmentUrl,
        replayUrl,
        guideText: getGuidText(),
        alert,
        onClick,
        onClose
    };
};


/***/ }),

/***/ 9844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ Reservation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/mypage/components/Reservation/Reservation.tsx




const Reservation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReservationContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Spacing, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Information, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        children: "사전 예약한 강의입니다."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        children: "정식 모집을 시작하면 알림을 보내드립니다."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        children: "사전 예약 시 10% 할인된 금액으로 결제할 수 있습니다."
                    })
                ]
            })
        ]
    });
};
const ReservationContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-112ce185-0"
})`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media ${style/* device.mobile */.Uh.mobile} {
    grid-template-columns: 1fr;
  }
`;
// 왼쪽 이미지 사이즈와 동일하게
const Spacing = external_styled_components_default().div.withConfig({
    componentId: "sc-112ce185-1"
})`
  width: 251px;

  @media ${style/* device.tablet */.Uh.tablet} {
    width: 221px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    display: none;
  }
`;
const Information = external_styled_components_default().ul.withConfig({
    componentId: "sc-112ce185-2"
})`
  padding: 21px 0 45px;
  margin: 0 29px;
  border-top: 1px solid #e7e7e7;

  @media ${style/* device.mobile */.Uh.mobile} {
    padding: 22px 19px 23px 21px;
    margin: 23px 0 0;
  }
`;
const Text = external_styled_components_default().li.withConfig({
    componentId: "sc-112ce185-3"
})`
  line-height: 25.6px;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  word-break: break-word;

  &:before {
    content: "·";
    font-size: 27px;
    padding-right: 4px;
  }

  @media ${style/* device.tablet */.Uh.tablet} {
    font-size: 2.08vw;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    font-size: 3.89vw;
  }
`;

;// CONCATENATED MODULE: ./src/mypage/components/Reservation/index.ts



/***/ }),

/***/ 2645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Seminar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _common_component_OutlinedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1936);
/* harmony import */ var _common_component_ColorButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4462);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2352);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4910);
/* harmony import */ var _useSeminar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8244);
/* harmony import */ var _ProgramDetialContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1240);
/* harmony import */ var _Attachment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7196);
/* harmony import */ var _common_component_AlertBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8948);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Attachment__WEBPACK_IMPORTED_MODULE_10__]);
_Attachment__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Seminar = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_7__/* .bind */ .a)(_useSeminar__WEBPACK_IMPORTED_MODULE_8__/* .useSeminar */ .z, ({ hasPassed , hasAttachment , preSurvey , productId , notStart , replayUrl , seminarDone , guideText , attachments , alert , onClickSurvey , onClick , onClose ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProgramDetialContainer__WEBPACK_IMPORTED_MODULE_9__/* .ProgramDetialContainer */ .W, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SeminarMaterialContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AttachmentWrapper, {
                        hasPassed: !!hasPassed,
                        children: hasAttachment ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Attachment__WEBPACK_IMPORTED_MODULE_10__/* .Attachment */ .P, {
                            duePassed: !!hasPassed,
                            attachments: attachments,
                            productId: productId
                        }) : null
                    }),
                    !hasPassed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ClassButton, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_OutlinedButton__WEBPACK_IMPORTED_MODULE_4__/* .OutlinedButton */ .U, {
                                btnName: "preSurvey",
                                onClick: onClickSurvey,
                                style: (0,_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .OutLinedButtonStyle */ .Is)(true),
                                disabled: !preSurvey,
                                children: "사전 설문 작성"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_ColorButton__WEBPACK_IMPORTED_MODULE_5__/* .ColorButton */ .E, {
                                btnName: seminarDone ? "replayUrl" : "zoomLiveUrl",
                                onClick: onClick,
                                style: _common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .ColorButtonStyle */ .x_,
                                disabled: !seminarDone ? notStart : !replayUrl,
                                children: seminarDone ? "강의 다시보기" : "라이브 시청하기"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonGuide, {
                                guideText: !!guideText,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        src: "/images/my/exclamation.svg",
                                        width: 18,
                                        height: 18
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GuideText, {
                                        children: guideText
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_component_AlertBar__WEBPACK_IMPORTED_MODULE_11__/* .Alertbar */ .C, {
                        alert: alert,
                        onClose: onClose
                    })
                ]
            })
        })
    });
});
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-75ad33a5-0"
})`
  width: 100%;
  padding: 26px 0;
  border-top: 1px solid #e7e7e7;
  scroll-margin-top: 105px;
  &:first-child {
    border-top: 0;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    padding: 20px 0;
  }
`;
const SeminarMaterialContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-75ad33a5-1"
})`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    row-gap: 3.91vw;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    flex-direction: column;
  }
`;
const AttachmentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-75ad33a5-2"
})`
  display: grid;
  row-gap: 6px;
  visibility: ${({ hasPassed  })=>!hasPassed ? "visible" : "hidden"
};
  height: ${({ hasPassed  })=>!hasPassed ? "100%" : "50px"
};
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    display: ${({ hasPassed  })=>!hasPassed ? "grid" : "none"
};
  }
`;
const ClassButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-75ad33a5-3"
})`
  position: relative;
  display: flex;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    display: grid;
    grid-template-columns: minmax(0, 100vw);
    grid-auto-flow: column;
    gap: 6px;
    max-width: 300px;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    max-width: 100vw;
  }
`;
const ButtonGuide = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-75ad33a5-4"
})`
  position: absolute;
  display: ${({ guideText  })=>guideText ? "flex" : "none"
};
  align-items: center;
  bottom: -21px;
  right: 0;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.tablet */ .Uh.tablet} {
    left: 0;
  }

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_6__/* .device.mobile */ .Uh.mobile} {
    font-size: 3.88vw;
  }
`;
const GuideText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-75ad33a5-5"
})`
  padding-left: 4px;
  font-size: 13px;
  color: #8b95a1;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* reexport safe */ _Seminar__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _Seminar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2645);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Seminar__WEBPACK_IMPORTED_MODULE_0__]);
_Seminar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useSeminar)
/* harmony export */ });
/* unused harmony export ALERT_MESSAGE */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_component_AlertBar_useAlertBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1645);



const ALERT_MESSAGE = {
    preSurvey: "사전 설문 조사를 준비중입니다.",
    slackUrl: "슬랙 초대를 준비중입니다.",
    replayUrl: "다시 보기 강의를 준비중입니다.",
    assignmentUrl: "사전 과제를 준비중입니다.",
    zoomLiveUrl: "라이브 강의를 준비중입니다. ",
    beforeLive: "라이브는 시작 10분 전부터 참가 가능해요",
    lastSurvey: "최종 만족도 조사를 준비중 입니다."
};
const oneDayMilliSecs = 1 * 24 * 60 * 60 * 1000;
const oneMinutesMilliSecs = 1 * 60 * 1000;
const useSeminar = ({ hasPassed , zoomLiveUrl , productId , attachments , preSurvey , startDate , endDate , replayUrl  })=>{
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const tenMinuteBeforeStart = new Date(startDate).getTime() - 10 * oneMinutesMilliSecs;
    const seminarEnd = new Date(endDate).getTime();
    const nextStartDate = new Date(endDate).setHours(24, 0, 0, 0);
    const dueReplayMilliSecs = new Date(nextStartDate).getTime() + oneDayMilliSecs * 7.5;
    const dueDateReplay = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(dueReplayMilliSecs)).format("YY.MM.DD a hh:mm");
    const { alert , setAlertAll , onClose  } = (0,_common_component_AlertBar_useAlertBar__WEBPACK_IMPORTED_MODULE_2__/* .useAlertbar */ .o)();
    const url = {
        replayUrl,
        preSurvey,
        zoomLiveUrl
    };
    const getValidKey = (e)=>{
        const target = e.target;
        return !!(target && (target === null || target === void 0 ? void 0 : target.name)) ? target.name : "";
    };
    const isSeminarEnd = ()=>{
        const now = new Date().getTime();
        return now > seminarEnd + oneMinutesMilliSecs;
    };
    const isSeminarStart = ()=>{
        const now = new Date().getTime();
        return now >= tenMinuteBeforeStart;
    };
    const onClick = (e)=>{
        const key = getValidKey(e);
        if (!key) return;
        if (key === "zoomLiveUrl" && !isSeminarStart()) {
            return setAlertAll({
                ...alert,
                on: true,
                message: ALERT_MESSAGE.beforeLive
            });
        }
        if (url[key]) return window.open(url[key]);
        const message = ALERT_MESSAGE[key];
        setAlertAll({
            ...alert,
            on: true,
            message
        });
    };
    const onClickSurvey = ()=>{
        if (!preSurvey) {
            setAlertAll({
                ...alert,
                on: true,
                message: ALERT_MESSAGE.preSurvey
            });
            return;
        }
        push(preSurvey);
    };
    const getGuidText = ()=>{
        const now = new Date().getTime();
        if (isSeminarEnd() && now <= seminarEnd + oneDayMilliSecs && !replayUrl) {
            return "녹화본은 라이브 종료 후 24시간 후 제공합니다";
        }
        if (!isSeminarStart()) {
            return "라이브 강의는 시작 10분 전부터 참가 가능해요";
        }
        if (isSeminarEnd() && now <= dueReplayMilliSecs && replayUrl) {
            return `다시보기 종료일: ${dueDateReplay}`;
        }
        return "";
    };
    const hasAttachment = !!(attachments === null || attachments === void 0 ? void 0 : attachments.length);
    return {
        hasPassed,
        productId,
        preSurvey,
        zoomLiveUrl,
        replayUrl,
        seminarDone: isSeminarEnd(),
        notStart: !isSeminarStart(),
        guideText: getGuidText(),
        hasAttachment,
        attachments: hasAttachment ? attachments : [],
        dueDateReplay,
        alert,
        onClick,
        onClickSurvey,
        onClose
    };
};


/***/ }),

/***/ 7813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* reexport */ StaticMaterial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/component/OutlinedButton/index.tsx + 1 modules
var OutlinedButton = __webpack_require__(1936);
// EXTERNAL MODULE: ./src/common/component/ColorButton/index.tsx + 1 modules
var ColorButton = __webpack_require__(4462);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__(547);
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);
// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
// EXTERNAL MODULE: ./src/common/component/AlertBar/useAlertBar.ts
var useAlertBar = __webpack_require__(1645);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/mypage/components/StaticMaterial/useStaticMaterial.ts


const ALERT_MESSAGE = {
    assignmentUrl: "사전 과제를 준비중입니다.",
    preSurvey: "사전 설문 조사를 준비중입니다.",
    slackUrl: "슬랙 초대를 준비중입니다.",
    lastSurvey: "최종 만족도 조사를 준비중 입니다."
};
const useStaticMaterial = ({ assignmentUrl , type , preSurvey , slackUrl , lastSurvey , hasPassed  })=>{
    const { push  } = (0,router_.useRouter)();
    const { alert , setAlertAll , onClose  } = (0,useAlertBar/* useAlertbar */.o)();
    const url = {
        assignmentUrl,
        slackUrl,
        lastSurvey
    };
    const getValidKey = (e)=>{
        const target = e.target;
        return !!(target && (target === null || target === void 0 ? void 0 : target.name)) ? target.name : "";
    };
    const onClickPreSurvey = ()=>{
        if (preSurvey) return push(preSurvey);
        const message = ALERT_MESSAGE.preSurvey;
        setAlertAll({
            ...alert,
            on: true,
            message
        });
    };
    const onClick = (e)=>{
        const key = getValidKey(e);
        if (!key) return;
        if (url[key]) return window.open(url[key]);
        const message = ALERT_MESSAGE[key];
        setAlertAll({
            ...alert,
            on: true,
            message
        });
    };
    return {
        hasPassed,
        assignmentUrl,
        type,
        isPre: type === "사전준비",
        preSurvey,
        slackUrl,
        lastSurvey,
        alert,
        onClick,
        onClose,
        onClickPreSurvey
    };
};

// EXTERNAL MODULE: ./src/common/component/AlertBar/index.ts + 1 modules
var AlertBar = __webpack_require__(8948);
;// CONCATENATED MODULE: ./src/mypage/components/StaticMaterial/StaticMaterial.tsx











const StaticMaterial = (0,bind/* bind */.a)(useStaticMaterial, ({ hasPassed , assignmentUrl , preSurvey , slackUrl , lastSurvey , isPre , alert , onClick , onClose , onClickPreSurvey  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StaticMaterialContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Survey, {
                type: !hasPassed && isPre,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PreSurvey, {
                    preSurvey: !!preSurvey,
                    onClick: onClickPreSurvey,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "사전 설문 작성"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowRight_default()), {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ClassButton, {
                children: isPre ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        !hasPassed && /*#__PURE__*/ jsx_runtime_.jsx(OutlinedButton/* OutlinedButton */.U, {
                            btnName: "assignmentUrl",
                            onClick: onClick,
                            style: (0,style/* OutLinedButtonStyle */.Is)(true),
                            disabled: !!!assignmentUrl,
                            children: "사전 과제 제출"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ColorButton/* ColorButton */.E, {
                            btnName: "slackUrl",
                            onClick: onClick,
                            style: style/* ColorButtonStyle */.x_,
                            disabled: !!!slackUrl,
                            children: "슬랙 커뮤니티 입장"
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(ColorButton/* ColorButton */.E, {
                    btnName: "lastSurvey",
                    onClick: onClick,
                    style: style/* ColorButtonStyle */.x_,
                    disabled: !!!lastSurvey,
                    children: "최종 만족도 조사"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AlertBar/* Alertbar */.C, {
                alert: alert,
                onClose: onClose
            })
        ]
    });
});
const StaticMaterialContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-66cf9e92-0"
})`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 100%;

  @media ${style/* device.tablet */.Uh.tablet} {
    grid-auto-flow: row;
    row-gap: 3.9vw;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    grid-auto-flow: row;
  }
`;
const Survey = external_styled_components_default().div.withConfig({
    componentId: "sc-66cf9e92-1"
})`
  display: grid;
  row-gap: 6px;
  visibility: ${({ type  })=>type ? "visible" : "hidden"
};

  @media ${style/* device.tablet */.Uh.tablet} {
    display: ${({ type  })=>type ? "grid" : "none"
};
  }
`;
const PreSurvey = external_styled_components_default().a.withConfig({
    componentId: "sc-66cf9e92-2"
})`
  display: flex;
  align-items: center;
  color: #1a1a1a;
  color: ${({ preSurvey  })=>preSurvey ? "#1a1a1a" : "#D7D7D7"
};
  cursor: pointer;
  font-size: 14px;

  p {
    padding-bottom: 4px;
    text-decoration-line: underline;
  }

  @media ${style/* device.tablet */.Uh.tablet} {
    font-size: 1.82vw;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    font-size: 3.88vw;
  }
`;
const ClassButton = external_styled_components_default().div.withConfig({
    componentId: "sc-66cf9e92-3"
})`
  @media ${style/* device.tablet */.Uh.tablet} {
    display: flex;
    gap: 6px;
  }
`;

;// CONCATENATED MODULE: ./src/mypage/components/StaticMaterial/index.ts



/***/ }),

/***/ 1260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ClassRoom)
/* harmony export */ });
/* unused harmony export useClassRoom */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_mypage_components_MyClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4646);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2352);
/* harmony import */ var _MyPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1197);
/* harmony import */ var _common_api_useUserProgram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9018);
/* harmony import */ var _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_mypage_components_MyClass__WEBPACK_IMPORTED_MODULE_4__, _MyPage__WEBPACK_IMPORTED_MODULE_6__, _common_api_useUserProgram__WEBPACK_IMPORTED_MODULE_7__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_8__]);
([src_mypage_components_MyClass__WEBPACK_IMPORTED_MODULE_4__, _MyPage__WEBPACK_IMPORTED_MODULE_6__, _common_api_useUserProgram__WEBPACK_IMPORTED_MODULE_7__, _common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useClassRoom = ()=>{
    var ref, ref1;
    const { isLoggedIn , isLoading  } = (0,_common_context_AuthenticationProvider__WEBPACK_IMPORTED_MODULE_8__/* .useAuth */ .a)();
    const { 0: selectedTap , 1: setSelectedTap  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("current");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { userPrograms  } = (0,_common_api_useUserProgram__WEBPACK_IMPORTED_MODULE_7__/* .useUserProgram */ .y)();
    const isCurrent = !!(!(userPrograms === null || userPrograms === void 0 ? void 0 : (ref = userPrograms.past) === null || ref === void 0 ? void 0 : ref.length) || (userPrograms === null || userPrograms === void 0 ? void 0 : (ref1 = userPrograms.current) === null || ref1 === void 0 ? void 0 : ref1.length));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userPrograms) {
            setSelectedTap(isCurrent ? "current" : "past");
        }
    }, [
        userPrograms
    ]);
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
    return {
        userPrograms,
        selectedTap,
        setSelectedTap
    };
};
const ClassRoom = ()=>{
    var ref;
    const { userPrograms , selectedTap , setSelectedTap  } = useClassRoom();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MyPage__WEBPACK_IMPORTED_MODULE_6__/* .MyPage */ .c, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyClassRoom, {
            "data-test": "my-programs",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    children: "내 강의실"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Division, {
                    children: TAP_DATA.map((division)=>{
                        const divisionName = division === "current" ? "수강 중" : "수강 완료";
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tap, {
                            onClick: ()=>setSelectedTap(division)
                            ,
                            selected: selectedTap === division,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TapText, {
                                    selected: selectedTap === division,
                                    children: divisionName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Count, {
                                    color: division,
                                    children: userPrograms && userPrograms[division].length
                                })
                            ]
                        }, division);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyProgramList, {
                    children: userPrograms && userPrograms[selectedTap].length ? (ref = userPrograms[selectedTap]) === null || ref === void 0 ? void 0 : ref.map((program, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_mypage_components_MyClass__WEBPACK_IMPORTED_MODULE_4__/* .MyClass */ .f, {
                            data: program
                        }, `${program.productId}_${index}`)
                    ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptyPage, {
                        children: "프로그램이 없습니다."
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
const MyClassRoom = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2a72450d-0"
})`
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.tablet */ .Uh.tablet} {
    margin: 0;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2a72450d-1"
})`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.tablet */ .Uh.tablet} {
    display: none;
  }
`;
const Division = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2a72450d-2"
})`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 39px;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.tablet */ .Uh.tablet} {
    margin-top: 0;
    border-bottom: unset;
  }
`;
const Tap = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
    componentId: "sc-2a72450d-3"
})`
  display: flex;
  margin-right: 26px;
  border-bottom: ${({ selected  })=>selected ? "3px solid #1a1a1a" : "unset"
};
  padding: 0 2px;
  margin-bottom: -1.5px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.tablet */ .Uh.tablet} {
    padding: 15px 0;
    border-bottom: unset;
  }
`;
const TapText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2a72450d-4"
})`
  width: fit-content;
  padding: 0 4px 12px 0;
  font-size: 16px;
  color: #1a1a1a;
  color: ${({ selected  })=>selected ? "#1a1a1a" : "#777777"
};

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.tablet */ .Uh.tablet} {
    font-size: 15px;
    padding: 0 4px 0 0;
  }
`;
const Count = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2a72450d-5"
})`
  width: fit-content;
  padding-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #009922;
  color: ${({ color  })=>color === "current" ? "#009922" : "#777777"
};

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.tablet */ .Uh.tablet} {
    font-size: 15px;
    padding: 0;
  }
`;
const MyProgramList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2a72450d-6"
})`
  margin-top: 30px;
  display: grid;
  gap: 30px;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.tablet */ .Uh.tablet} {
    margin-top: 0;
  }
`;
const EmptyPage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2a72450d-7"
})`
  margin: 200px auto;
  width: fit-content;
  font-size: 22px;
  font-weight: 500;
  color: #8b95a1;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_5__/* .device.mobile */ .Uh.mobile} {
    margin: 100px auto;
    font-size: 18px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _ClassRoom__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _ClassRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1260);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ClassRoom__WEBPACK_IMPORTED_MODULE_0__]);
_ClassRoom__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;