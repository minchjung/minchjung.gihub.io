"use strict";
(() => {
var exports = {};
exports.id = 119;
exports.ids = [119];
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

/***/ 5610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_vod_page_VodPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7260);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_vod_page_VodPage__WEBPACK_IMPORTED_MODULE_0__]);
src_vod_page_VodPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_vod_page_VodPage__WEBPACK_IMPORTED_MODULE_0__/* .VodPage */ .K);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useVod)
/* harmony export */ });
/* harmony import */ var src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);
/* harmony import */ var src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__]);
src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useVod = (id)=>{
    const { vod_url , mutate  } = (0,src_common_hook_useSWRHook__WEBPACK_IMPORTED_MODULE_0__/* .useSWRHook */ .L)({
        endpoint: src_common_constant_api__WEBPACK_IMPORTED_MODULE_1__/* .GET_VOD_URL */ ._P + `/${id}/url`,
        dataName: 'vod_url',
        withToken: true
    });
    return {
        vod_url,
        mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* reexport */ usePushRouterLogin)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/common/hook/usePushRouter/usePushRouter.ts

const usePushRouter = ()=>{
    const router = (0,router_.useRouter)();
    return (path)=>router.push(path)
    ;
};

;// CONCATENATED MODULE: ./src/common/hook/usePushRouter/index.ts


;// CONCATENATED MODULE: ./src/common/hook/usePushRouterLogin/usePushRouterLogin.ts

const usePushRouterLogin = ()=>{
    const pushRouter = usePushRouter();
    return ()=>{
        const currentPath = encodeURI(window.location.pathname);
        pushRouter(`/login?next=${currentPath}`);
    };
};

;// CONCATENATED MODULE: ./src/common/hook/usePushRouterLogin/index.ts



/***/ }),

/***/ 4999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Player_Player)
});

// UNUSED EXPORTS: Player

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "video.js"
const external_video_js_namespaceObject = require("video.js");
var external_video_js_default = /*#__PURE__*/__webpack_require__.n(external_video_js_namespaceObject);
;// CONCATENATED MODULE: ./src/vod/component/Player/Player.tsx




const Player = (props)=>{
    const videoRef = (0,external_react_.useRef)(null);
    const playerRef = (0,external_react_.useRef)(null);
    const { options , onReady  } = props;
    (0,external_react_.useEffect)(()=>{
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;
            const player = playerRef.current = external_video_js_default()(videoElement, options, ()=>{
                player.log('player is ready');
                onReady && onReady(player);
            });
        }
    }, [
        options,
        videoRef
    ]);
    (0,external_react_.useEffect)(()=>{
        const player = playerRef.current;
        return ()=>{
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [
        playerRef
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        "data-vjs-player": true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
            ref: videoRef,
            className: "video-js vjs-theme-forest vjs-big-play-centered"
        })
    });
};
/* harmony default export */ const Player_Player = (Player);
const Component = external_styled_components_default().div.withConfig({
    componentId: "sc-c65f2c48-0"
})`
  video {
    width: 100%;
    height: auto;
  }
`;


/***/ }),

/***/ 6117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ VodInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




function VodInfo({ vodInfo  }) {
    const type = vodInfo.title.split(']')[0].slice(1);
    const title = vodInfo.title.split(']')[1];
    const startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(vodInfo === null || vodInfo === void 0 ? void 0 : vodInfo.start_date).format('YYYY.MM.DD');
    const endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(vodInfo === null || vodInfo === void 0 ? void 0 : vodInfo.start_date).add('days', vodInfo.period).format('YYYY.MM.DD');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VodInfoContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgramType, {
                children: type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: title || (vodInfo === null || vodInfo === void 0 ? void 0 : vodInfo.title)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Discription, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "수강기한"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    startDate,
                                    " ~ ",
                                    endDate
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "시간"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    Math.floor((vodInfo === null || vodInfo === void 0 ? void 0 : vodInfo.duration) / 60),
                                    "분"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "리더"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: vodInfo === null || vodInfo === void 0 ? void 0 : vodInfo.leaders.join(', ')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const VodInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7c2537c9-0"
})`
  width: 400px;
  padding: 30px;

  @media all and (max-width: 960px) {
    width: 100%;
  }
`;
const ProgramType = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h3.withConfig({
    componentId: "sc-7c2537c9-1"
})`
  margin-bottom: 14px;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1.withConfig({
    componentId: "sc-7c2537c9-2"
})`
  font-size: 24px;
`;
const Discription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7c2537c9-3"
})`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 135px;
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;

  p {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 14px;
    }
  }
`;
const Construction = styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul.withConfig({
    componentId: "sc-7c2537c9-4"
})``;


/***/ }),

/***/ 675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ VodPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2747);
/* harmony import */ var video_js_dist_lang_ko_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(272);
/* harmony import */ var videojs_hotkeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1460);
/* harmony import */ var videojs_hotkeys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videojs_hotkeys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_Player_Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4999);
/* harmony import */ var src_common_api_useVod_useVod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6575);
/* harmony import */ var _component_VodInfo_VodInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6117);
/* harmony import */ var _useVideoPlaying__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6325);
/* harmony import */ var _common_hook_usePushRouterLogin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2034);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_layout__WEBPACK_IMPORTED_MODULE_4__, src_common_api_useVod_useVod__WEBPACK_IMPORTED_MODULE_8__]);
([_containers_layout__WEBPACK_IMPORTED_MODULE_4__, src_common_api_useVod_useVod__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const VodPage = ()=>{
    const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const videoId = router.query.id;
    const { vod_url  } = (0,src_common_api_useVod_useVod__WEBPACK_IMPORTED_MODULE_8__/* .useVod */ .V)(videoId);
    const { 0: mount , 1: setMount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pushRouterLogin = (0,_common_hook_usePushRouterLogin__WEBPACK_IMPORTED_MODULE_11__/* .usePushRouterLogin */ .V)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = localStorage.getItem("access_token");
        if (!token) {
            return pushRouterLogin();
        }
        setMount(false);
        if (vod_url) {
            setMount(true);
        }
    }, [
        vod_url
    ]);
    const videoJsOptions = {
        language: "ko",
        languages: {
            ko: video_js_dist_lang_ko_json__WEBPACK_IMPORTED_MODULE_5__
        },
        controls: true,
        responsive: true,
        fluid: true,
        aspectRatio: "16:9",
        poster: `${vod_url === null || vod_url === void 0 ? void 0 : vod_url.poster_url}`,
        preload: "none",
        sources: [
            {
                src: `${vod_url === null || vod_url === void 0 ? void 0 : vod_url.url}`,
                type: `${vod_url === null || vod_url === void 0 ? void 0 : vod_url.type}`,
                withCredentials: false
            }, 
        ],
        playbackRates: [
            0.5,
            1,
            1.5,
            2
        ],
        userActions: {
            click: false
        }
    };
    const handlePlayerReady = (player1)=>{
        playerRef.current = player1;
        let playingInterval;
        // Add text tracks for subtitles, captions tracks
        if (vod_url === null || vod_url === void 0 ? void 0 : vod_url.tracks) {
            for (const track of vod_url === null || vod_url === void 0 ? void 0 : vod_url.tracks){
                if (track["kind"] == "subtitles" || track["kind"] == "captions") {
                    track["src"] = track["url"];
                    player1.addRemoteTextTrack(track, track["default"]);
                }
            }
        }
        // Set position when trying to play if playhead exists
        player1.one("canplaythrough", ()=>{
            if (vod_url === null || vod_url === void 0 ? void 0 : vod_url.playhead) {
                setTimeout(()=>{
                    player1.currentTime(vod_url === null || vod_url === void 0 ? void 0 : vod_url.playhead);
                }, 100);
            }
        });
        // Post current time every 5 second
        player1.on("play", ()=>{
            playingInterval = setInterval(function() {
                (0,_useVideoPlaying__WEBPACK_IMPORTED_MODULE_10__/* .useVideoPlaying */ .E)(videoId, player1, vod_url.purchase_id);
            }, 5000);
        });
        // Clear intervals on pause
        player1.on("pause", ()=>{
            clearInterval(playingInterval);
        });
        // Add kotkeys
        player1.hotkeys({
            volumeStep: 0.05,
            enableVolumeScroll: false,
            // Add speed up (> or shift + .) / down (< or shift + ,) keys
            customKeys: {
                playbackUpKey: {
                    key: function(e) {
                        return e.shiftKey && e.which === 190;
                    },
                    handler: function(player) {
                        if (player.tech_ && player.tech_.featuresPlaybackRate) {
                            const i = player.options_.playbackRates.indexOf(player.playbackRate());
                            if (i < player.options_.playbackRates.length - 1) {
                                player.playbackRate(player.options_.playbackRates[i + 1]);
                            }
                        }
                    }
                },
                playbackDownKey: {
                    key: function(e) {
                        return e.shiftKey && e.which === 188;
                    },
                    handler: function(player) {
                        if (player.tech_ && player.tech_.featuresPlaybackRate) {
                            const i = player.options_.playbackRates.indexOf(player.playbackRate());
                            if (i > 0) {
                                player.playbackRate(player.options_.playbackRates[i - 1]);
                            }
                        }
                    }
                }
            }
        });
        player1.on("waiting", ()=>{
            player1.log("player is waiting");
        });
        player1.on("dispose", ()=>{
            player1.log("player will dispose");
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VodContainer, {
            className: "vod-page",
            children: mount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Player_Player__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            options: videoJsOptions,
                            onReady: handlePlayerReady
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_VodInfo_VodInfo__WEBPACK_IMPORTED_MODULE_9__/* .VodInfo */ .H, {
                        vodInfo: vod_url
                    })
                ]
            })
        })
    });
};
const VodContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ec3c1ca2-0"
})`
  display: flex;

  @media all and (max-width: 960px) {
    flex-direction: column;
  }
`;
const PlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ec3c1ca2-1"
})`
  width: 100%;
  height: auto;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _VodPage__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _VodPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_VodPage__WEBPACK_IMPORTED_MODULE_0__]);
_VodPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useVideoPlaying)
/* harmony export */ });
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(304);
/* harmony import */ var _common_utill_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5882);


// Send video playing data for sessions, playhead
const useVideoPlaying = async (videoId, player, purchaseId)=>{
    const body = {
        time: player.currentTime(),
        rate: player.playbackRate(),
        purchaseId
    };
    await (0,_common_utill_fetcher__WEBPACK_IMPORTED_MODULE_1__/* .fetchMutation */ .DR)({
        method: 'POST',
        url: _common_constant_api__WEBPACK_IMPORTED_MODULE_0__/* .GET_VOD_URL */ ._P + `/${videoId}/playing`,
        body,
        withToken: true
    });
};


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

/***/ 1460:
/***/ ((module) => {

module.exports = require("videojs-hotkeys");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,272,485,738,448,815,304], () => (__webpack_exec__(5610)));
module.exports = __webpack_exports__;

})();