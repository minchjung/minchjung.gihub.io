(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2459],{56600:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/program/[id]",function(){return i(88606)}])},65712:function(e,n,i){"use strict";i.d(n,{fY:function(){return t}});var t={ADVANCE_RESERVATION:"\uc0ac\uc804\uc608\uc57d",MAIN:"\uae30\uc218\uc81c",SEMINAR:"\uc138\ubbf8\ub098",VOD:"VOD"}},62747:function(e,n,i){"use strict";i.d(n,{Z:function(){return t.Z}});var t=i(85216)},37760:function(e,n,i){"use strict";i.d(n,{R:function(){return o}});var t=i(85893),r=i(67294),s=(0,i(5152).default)((function(){return Promise.all([i.e(7904),i.e(5453),i.e(4342),i.e(1413),i.e(372),i.e(2008),i.e(6376)]).then(i.bind(i,96376))}),{loadableGenerated:{webpack:function(){return[96376]}},ssr:!1});function o(e){var n=e.introduction_editor,i=(0,r.useState)(n),o=i[0],a=i[1];(0,r.useEffect)((function(){n&&a(n)}),[n]);var l=(0,r.useMemo)((function(){return(0,t.jsx)(s,{initialValue:o})}),[o]);return(0,t.jsx)("section",{className:"pro_edit",id:"pro_edit_id",children:l})}},63077:function(e,n,i){"use strict";i.d(n,{x:function(){return t}});var t=function(e,n){var i=n.price;return"reservation"!==e.query.reservation||n.name.includes("\uc5bc\ub9ac")||(i=.9*n.price),"reservation"===e.query.reservation&&n.name.includes("\uc5bc\ub9ac")&&(i=n.price/.9*.8),i}},88606:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSP:function(){return ke},default:function(){return Ne}});var t=i(85893),r=i(67294),s=i(9008),o=i(11163),a=i(2497),l=i(62747),c=i(94792),d=i.n(c),u=i(10615);i(12755);var m=function(e){var n=e.options,i=void 0===n?[]:n,s=(0,r.useState)({width:0,height:0}),o=s[0],a=s[1];return(0,r.useEffect)((function(){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,t.jsx)("div",{children:i&&i.length>0&&(0,t.jsx)(u.lr,{autoPlay:!0,infiniteLoop:!0,showStatus:!1,showThumbs:!1,showIndicators:!0,interval:5e3,renderArrowPrev:function(e,n){return n?(0,t.jsx)("div",{className:d().arrowPre,onClick:function(){e()}}):null},renderArrowNext:function(e,n){return n?(0,t.jsx)("div",{className:d().arrowNext,onClick:function(){e()}}):null},children:i.map((function(e){return(0,t.jsx)("div",{children:(0,t.jsx)("img",{style:{width:o.width,height:759*o.width/1577,maxHeight:600,objectFit:"cover"},src:e.full_path,alt:e.file_name})},e.id)}))})})},p=i(41664),h=i(32901),x=i(8797),v=i(27797),f=i(66145);function j(){var e,n,i=(e=["\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 700;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return j=function(){return i},i}var g=function(e){var n=e.id,i=e.name,r=e.productType,s=e.startDate,a=e.dataSelling,l=e.selling,c=e.reservation,d=e.invisible,u=e.sellingStatus,m=(0,v.N)().secret,x=new Date(s).getTime()-6e5,j="\uc0ac\uc804\uc608\uc57d"===u?"\uc0ac\uc804\uc608\uc57d \uc2e0\uccad":"\ud504\ub85c\uadf8\ub7a8 \uc2e0\uccad";"\uc138\ubbf8\ub098"==r&&s&&(new Date).getTime()>x&&(j="\ud310\ub9e4 \ub9c8\uac10"),"\ud310\ub9e4\uc911\uc9c0"==u&&(j="\ud310\ub9e4 \ub9c8\uac10"),0==(null===a||void 0===a?void 0:a.member_people)&&(j="\uc778\uc6d0 \ub9c8\uac10");var g,w=["669","672","673","674","675","676","677"].includes(n),_=["701","710","707","716","718","719","720","721"].includes(n);return(0,t.jsx)("div",{className:"program_layoutpc2",style:{display:d?"none":"block"},children:(0,t.jsxs)("section",{id:"pro_price",className:"pro_price",children:[(0,t.jsxs)("h3",{className:"pro_price_h3",children:[(0,t.jsxs)("span",{className:"txt_icon",children:["\ubaa8\uc9d1\uc778\uc6d0 ",null===a||void 0===a?void 0:a.member_people,"\uba85"]}),(0,t.jsx)("span",{className:"txt_tit",children:i})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("dl",{className:"pro_pricelist",children:[(0,t.jsx)("dt",{className:"txt_pro_fixedprice",children:"\uc815\uac00"}),(0,t.jsxs)("dd",{className:"txt_pro_fixedprice_price",children:[(0,h.Nh)((null===a||void 0===a?void 0:a.list_price)||0),"\uc6d0"]}),(0,t.jsx)("dt",{className:"txt_pro_price",children:w?"\ubcf4\uc99d\uae08":"\ud504\ub85c\uadf8\ub7a8 \ud310\ub9e4\uac00"}),(0,t.jsxs)("dd",{className:"txt_pro_price2",children:[(0,t.jsxs)("span",{children:[_?"100":(null===a||void 0===a?void 0:a.price)&&a.list_price&&100-Math.floor(a.price/a.list_price*100),"%"]}),_?"\ubb34\ub8cc":"".concat((0,h.Nh)((null===a||void 0===a?void 0:a.price)||0),"\uc6d0")]})]}),a.installment_price&&!w&&!_&&(0,t.jsxs)("dl",{className:"pro_pricelist",children:[(0,t.jsx)("dt",{className:"installment_price_title",children:"12\uac1c\uc6d4 \ubb34\uc774\uc790 \ud560\ubd80 \uc2dc"}),(0,t.jsxs)("dd",{className:"installment_price",children:["\uc6d4 ",(0,h.Nh)(null!==(g=a.installment_price)&&void 0!==g?g:0)," \uc6d0"]})]})]}),(0,t.jsx)("div",{className:"btn_program",children:(0,t.jsx)("div",{className:"bt_wrap_green",children:l?(0,t.jsx)("div",{className:"btn_box_green",style:{backgroundColor:"#393939"},children:(0,t.jsx)("div",{children:(0,t.jsx)(b,{children:"\ud310\ub9e4 \uc911\uc9c0"})})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.P,{event:"clickProgramCTA",data:{programId:n,programName:i},children:(0,t.jsx)("div",{className:(null===a||void 0===a?void 0:a.member_people)>0&&"\ud310\ub9e4\uc911\uc9c0"!==u?"btn_box_green":"btn_box_green disabled",style:{alignItems:"center",justifyContent:"center"},onClick:function(){o.default.push(function(e,n,i){var t=n?"?secret="+n:"?reservation="+i;return"/program/".concat(e,"/product").concat(t)}(n,m,c))},"data-test":"purchase-button",children:(0,t.jsx)("div",{className:"btn_program_apply",children:(0,t.jsx)("div",{children:j})})})}),(0,t.jsx)("div",{className:"btn_under_wrapper",children:(0,t.jsx)("div",{className:"btn_box_gray",children:(0,t.jsx)(p.default,{href:"https://grownbetter.channel.io/",children:_?"\uc138\ubbf8\ub098 \uc2e0\uccad \ubb38\uc758":w?"\uc9c0\uc6d0\uae08 \uad00\ub828 \ubb38\uc758":"\ud560\uc778 \ud61c\ud0dd \ubb38\uc758"})})})]})})})]})})},b=x.ZP.p.withConfig({componentId:"sc-c4e2a26c-0"})(j());var w=function(e){var n=e.options,i=e.invisible;return(0,t.jsxs)("section",{className:"pro_intro",style:{display:i?"none":"block"},children:[(0,t.jsxs)("h3",{className:"pro_h3",children:[(0,t.jsx)("span",{children:"Intro"}),"\ud504\ub85c\uadf8\ub7a8\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."]}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"pro_introlist",children:[0,3,1,2].map((function(e){var i=n[e];return i?(0,t.jsx)("li",{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:i.question}),(0,t.jsxs)("span",{children:[" ",i.description," "]}),i.content]})},i.order):null}))})})]})},_=i(30381),y=i.n(_),k=(i(15461),i(65712));function N(){var e,n,i=(e=["\n  display: inline-block;\n  margin-left: 2em;\n  @media screen and (max-width: 554px) {\n    display: block;\n    margin-left: 0;\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return N=function(){return i},i}y().locale("ko");var C=function(e){var n=e.options,i=e.invisible,s=(0,r.useState)(h.sk?0:window.innerWidth),o=(s[0],s[1]),a=k.fY.MAIN,l=k.fY.VOD,c=k.fY.SEMINAR;(0,r.useEffect)((function(){return d(),window.addEventListener("resize",d,!0),function(){return window.removeEventListener("resize",d,!0)}}),[]);var d=function(){o(window.innerWidth)};return(0,t.jsxs)("section",{className:"pro_seoson",style:{display:i?"none":"block"},children:[(0,t.jsx)("h3",{className:"pro_h3",children:n.map((function(e){return e.product_type!==l?(0,t.jsxs)("h3",{className:"pro_h3",children:[(0,t.jsx)("span",{children:"Season"}),"\uc2e0\uaddc \uc624\ud508\ud55c \uae30\uc218"]}):(0,t.jsxs)("h3",{className:"pro_h3",children:[(0,t.jsx)("span",{children:"New Open"}),"\uc2e0\uaddc \uc624\ud508\ud55c VOD"]})}))[0]}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"pro_seosonlist",children:n.map((function(e){var n=e.product_type,i=e.name,r=e.schedules;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("h4",{children:i}),(n===a||n===c)&&(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"\uc2dc\uc791\uc77c: "})," ",y()(null===e||void 0===e?void 0:e.start_date).format("YYYY.MM.DD(ddd)"),(0,t.jsxs)(S,{children:[(0,t.jsx)("b",{children:"\uc2dc\uac04:"})," ",y()(null===r||void 0===r?void 0:r[0].start_date).format("A h:mm")," ~"," ",y()(null===r||void 0===r?void 0:r[0].end_date).format("h:mm")]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"\uc804\uccb4 \uc77c\uc815:"})," ",(0,h.A0)(r)]})]})]},i)})}))})})]})},S=x.ZP.div.withConfig({componentId:"sc-1553ce69-0"})(N());var O=function(e){var n=e.options,i=e.invisible;return(0,t.jsxs)("section",{className:"pro_curriculum",style:{display:i?"none":"block"},children:[(0,t.jsxs)("h3",{className:"pro_h3",id:"curriculum",children:[(0,t.jsx)("span",{children:"Curriculum"}),"\ucee4\ub9ac\ud058\ub7fc"]}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"pro_curriculumlist",children:n.map((function(e){return(0,t.jsxs)("li",{children:[(0,t.jsx)("h4",{children:e.title}),(n=e.program_contents,n.map((function(e,n){return(0,t.jsxs)("div",{className:"curriculum-item",children:[(0,t.jsx)("p",{children:e.content_background?(0,t.jsx)("span",{className:"icon_homework",children:e.content_title}):(0,t.jsx)("span",{className:"icon_no",children:e.content_title})}),(0,t.jsx)("p",{children:e.content})]},e.id)})))]},e.id);var n}))})})]})},L=i(95755),P=i.n(L),z=(i(48318),i(86529));function A(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function E(){var e,n,i=(e=['\n  .swiper-button-next:after,\n  .swiper-button-prev:after {\n    content: "";\n  }\n'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return E=function(){return i},i}var I={qaxLargeDesktop:{breakpoint:{min:1845,max:1e4},items:2.7},qxLargeDesktop:{breakpoint:{min:1781,max:1844},items:2.7},xLargeDesktop:{breakpoint:{min:1701,max:1780},items:2.7},largeDesktop:{breakpoint:{min:1561,max:1700},items:2.7},xxDesktop:{breakpoint:{min:1471,max:1560},items:2.7},xDesktop:{breakpoint:{min:1431,max:1470},items:2.7},desktop:{breakpoint:{min:1401,max:1430},items:2.6},mediumDesktop:{breakpoint:{min:1281,max:1400},items:2.4},smallDesktop:{breakpoint:{min:1081,max:1280},items:2.3},xxTablet:{breakpoint:{min:1025,max:1080},items:2.1},xTablet:{breakpoint:{min:986,max:1024},items:2.7},tablet:{breakpoint:{min:946,max:985},items:2.5},xSmallTablet:{breakpoint:{min:901,max:945},items:2.4},smallTablet:{breakpoint:{min:801,max:900},items:2.25},xlargeMobile:{breakpoint:{min:769,max:800},items:2.2},xxMediumMobile:{breakpoint:{min:671,max:768},items:2},xMediumMobile:{breakpoint:{min:666,max:670},items:1.8},mediumMobile:{breakpoint:{min:621,max:665},items:1.7},mobile:{breakpoint:{min:541,max:620},items:1.6},xxxxxSmall:{breakpoint:{min:501,max:540},items:1.5},xxxxSmall:{breakpoint:{min:491,max:500},items:1.45},xxxSmall:{breakpoint:{min:481,max:490},items:1.4},xxSmall:{breakpoint:{min:461,max:480},items:1.35},xSmall:{breakpoint:{min:441,max:460},items:1.3},small:{breakpoint:{min:426,max:440},items:1.25},xxxxTiny:{breakpoint:{min:416,max:425},items:1.2},xxxTiny:{breakpoint:{min:401,max:415},items:1.15},xxTiny:{breakpoint:{min:376,max:400},items:1.1},xTiny:{breakpoint:{min:281,max:375},items:1},tiny:{breakpoint:{min:0,max:280},items:.8}};var T=function(e){var n=e.carouselRef,i=e.renderSlideList,r=function(e){var n=e.next,i=e.previous,r=e.carouselState,s=(A(e,["next","previous","carouselState"]),r.totalItems,r.currentSlide,!(r.currentSlide>0)),o=function(e){var n=e.currentSlide,i=e.totalItems;return!(n+e.slidesToShow<i)}(r);return(0,t.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0},children:(0,t.jsxs)("div",{className:"pro_leader_tit",children:[(0,t.jsx)("h3",{className:"carousel_title",children:(0,t.jsx)("span",{children:"Professional Leader"})}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("h3",{className:"carousel_title",children:"\uc774\ub7f0 \ubd84\ub4e4\uacfc \ud568\uaed8\ud574\uc694"}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:50},children:[(0,t.jsx)("div",{className:["swiper-button-prev",s&&"swiper-button-inactive"].join(" "),onClick:function(){return i()}}),(0,t.jsx)("div",{className:["swiper-button-next",o&&"swiper-button-inactive"].join(" "),onClick:function(){return n()}})]})]})]})})};return(0,t.jsx)(M,{children:(0,t.jsx)(z.default,{ref:n,infinite:!1,responsive:I,itemClass:P().styleItemCarousel,removeArrowOnDeviceType:["tablet","mobile"],arrows:!1,renderButtonGroupOutside:!0,customButtonGroup:(0,t.jsx)(r,{}),children:i})})},M=x.ZP.div.withConfig({componentId:"sc-f3046b52-0"})(E());var D=function(e){var n=e.options,i=e.invisible,s=(0,r.useState)({width:0,height:0}),o=(s[0],s[1]);(0,r.useEffect)((function(){var e=function(){o({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var a=(0,r.useRef)({});return(0,t.jsx)("section",{className:"pro_leader",style:{display:i?"none":"block"},children:(0,t.jsx)("div",{className:"swiper-container mySwiper swiper-container-initialized swiper-container-horizontal",children:(0,t.jsx)(T,{carouselRef:a,renderSlideList:n.map((function(e,n){return(0,t.jsxs)("div",{className:"leader_box",style:{marginTop:90,width:"90%"},children:[(0,t.jsx)("div",{className:"leader_img",style:{width:"100%",height:233,backgroundColor:"#e3e3e3"},children:(0,t.jsx)("img",{style:{width:"100%",height:233,objectFit:"cover"},src:e.profile_picture,alt:"avatar"})}),(0,t.jsxs)("div",{className:"leader_info",style:{width:"100%",height:175},children:[(0,t.jsx)("p",{children:e.full_name}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{style:{whiteSpace:"pre-line"},children:e.biography})})]})]},e.id)}))||[]})})})};var B=function(e){var n=e.options,i=(0,r.useState)({id:null,isShow:!1}),s=i[0],o=i[1];return(0,t.jsxs)("section",{className:"pro_faq",children:[(0,t.jsxs)("h3",{className:"sec-tit-1 pro_h3",children:[(0,t.jsx)("span",{children:"FAQ"}),"\uc790\uc138\ud55c \uc0ac\ud56d\uc774 \uad81\uae08\ud574\uc694"]}),(0,t.jsx)("div",{className:"faq_list",children:(0,t.jsx)("ul",{className:"accordion",children:n.map((function(e){var n=s.id===e.id&&s.isShow;return(0,t.jsxs)("li",{className:"item",children:[(0,t.jsxs)("h2",{className:["accordionTitle",n?"accordionTitleActive":""].join(" "),onClick:function(){return n=e,void(s.id===n.id?o({id:null,isShow:!1}):o({id:n.id,isShow:!0}));var n},children:[(0,t.jsxs)("p",{className:"faq-title",children:["Q. ",e.question]}),(0,t.jsx)("img",{src:n?"/images/s_images/btn_up.svg":"/images/s_images/btn_down.svg",className:"button-down"})]}),(0,t.jsx)("div",{className:["text",n?"show":""].join(" "),children:e.answer})]},e.id)}))})})]})},R=i(37760),Z=i(1785),F=i.n(Z),H=i(63805),q=i(63077),K=i(24910),V=i(25342),Y=i(80304);function W(e){var n=(0,V.L)({endpoint:(0,Y._r)(e),dataName:"reviews",withToken:!1});return{reviews:n.reviews,mutate:n.mutate}}var Q=i(26447),U=i(99461);function G(e){if(e)return"".concat(e,"px")}var X=function(e){var n=e.children,i=e.size,r=e.color,s=e.weight,o=e.lineHeight;return(0,t.jsx)("div",{style:{display:"inline-block",color:r,fontSize:G(i),lineHeight:G(o),fontWeight:s},children:n})};var $=function(e){var n=e.children,i=e.alignment;return(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"vertical"===i?"center":void 0,alignItems:"horizontal"===i?"center":void 0},children:n})};function J(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function ee(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),t.forEach((function(n){J(e,n,i[n])}))}return e}var ne=function(e){var n=e.type,i=e.children,r=e.border,s=e.radius,o=e.backgroundColor,a=e.width,l=e.p,c=e.py,d=e.px,u={padding:l,paddingLeft:d,paddingRight:d,paddingTop:c,paddingBottom:c},m={display:"flex",flex:e.flex,width:a,borderRadius:G(s)};return"border"===n?(0,t.jsx)("div",{style:ee({border:r},m,u),children:i}):(0,t.jsx)("div",{style:ee({backgroundColor:o},m,u),children:i})},ie=(0,K.a)((function(e){return{label:e.label,content:e.content}}),(function(e){var n=e.label,i=e.content;return(0,t.jsx)(ne,{type:"background",backgroundColor:"#F8F6F6",flex:1,radius:10,py:10,children:(0,t.jsxs)($,{alignment:"horizontal",children:[(0,t.jsx)(X,{size:10,lineHeight:14,children:n}),(0,t.jsx)(U.K,{height:3}),i]})})}));var te=function(e){var n=e.onClick;return(0,t.jsx)("button",{className:"embla__button embla__button--prev",onClick:n,children:(0,t.jsx)("svg",{className:"embla__button__svg",viewBox:"137.718 -1.001 366.563 644",children:(0,t.jsx)("path",{d:"M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"})})})},re=function(e){var n=e.onClick;return(0,t.jsx)("button",{className:"embla__button embla__button--next",onClick:n,children:(0,t.jsx)("svg",{className:"embla__button__svg",viewBox:"0 0 238.003 238.003",children:(0,t.jsx)("path",{d:"M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"})})})},se=function(e){var n=e.onClick;return(0,t.jsx)("button",{className:"embla__button article_prev",onClick:n,children:(0,t.jsxs)("svg",{className:"embla__button__svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("g",{"clip-path":"url(#clip0_3630_424)",children:(0,t.jsx)("rect",{width:"22",height:"22",transform:"translate(22 22) rotate(180)",fill:"#FAFAFA"})}),(0,t.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.8669 14.8948C12.6973 15.0417 12.4308 15.0338 12.2718 14.8771L9.11387 11.766C8.96204 11.6164 8.96204 11.3836 9.11387 11.234L12.2718 8.12294C12.4308 7.96621 12.6973 7.95828 12.8669 8.1052C13.0366 8.25213 13.0452 8.49821 12.8861 8.65486L9.99818 11.5L12.8861 14.3451C13.0452 14.5018 13.0366 14.7479 12.8669 14.8948Z",fill:"black"}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_3630_424",children:(0,t.jsx)("rect",{width:"22",height:"22",fill:"white",transform:"translate(22 22) rotate(180)"})})})]})})},oe=function(e){var n=e.onClick;return(0,t.jsx)("button",{className:"embla__button article_next ",onClick:n,children:(0,t.jsxs)("svg",{className:"embla__button__svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("g",{"clip-path":"url(#clip0_3630_423)",children:(0,t.jsx)("rect",{width:"22",height:"22",fill:"#FAFAFA"})}),(0,t.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.13308 7.10518C9.30273 6.95828 9.56919 6.96623 9.72824 7.12292L12.8861 10.234C13.038 10.3836 13.038 10.6164 12.8861 10.766L9.72824 13.8771C9.56919 14.0338 9.30273 14.0417 9.13308 13.8948C8.96343 13.7479 8.95483 13.5018 9.11388 13.3451L12.0018 10.5L9.11388 7.65487C8.95483 7.49818 8.96343 7.25207 9.13308 7.10518Z",fill:"black"}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_3630_423",children:(0,t.jsx)("rect",{width:"22",height:"22",fill:"white"})})})]})})},ae=function(e){var n=e.onClick,i=e.itemLength;return(0,t.jsx)("button",{className:"embla__button reserved_prev",onClick:n,children:(0,t.jsxs)("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{width:"33",height:"33",rx:"2",fill:"white"}),(0,t.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.8004 21.8197C19.5459 22.0715 19.1462 22.0579 18.9076 21.7893L14.1708 16.456C13.9431 16.1995 13.9431 15.8005 14.1708 15.544L18.9076 10.2107C19.1462 9.94208 19.5459 9.92848 19.8004 10.1803C20.0549 10.4322 20.0677 10.8541 19.8292 11.1226L15.4973 16L19.8292 20.8774C20.0677 21.146 20.0549 21.5679 19.8004 21.8197Z",fill:i>4?"#000":"#CBCBCB"})]})})},le=function(e){var n=e.onClick,i=e.itemLength;return(0,t.jsx)("button",{className:"embla__button reserved_next",onClick:n,children:(0,t.jsxs)("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{width:"33",height:"33",rx:"2",fill:"white"}),(0,t.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.1996 10.1803C14.4541 9.92849 14.8538 9.9421 15.0924 10.2107L19.8292 15.544C20.0569 15.8005 20.0569 16.1995 19.8292 16.456L15.0924 21.7893C14.8538 22.0579 14.4541 22.0715 14.1996 21.8197C13.9451 21.5678 13.9323 21.1459 14.1708 20.8774L18.5027 16L14.1708 11.1226C13.9323 10.854 13.9451 10.4321 14.1996 10.1803Z",fill:i>4?"#000":"#CBCBCB"})]})})},ce=i(25585);function de(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function ue(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function me(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var t,r,s=[],o=!0,a=!1;try{for(i=i.call(e);!(o=(t=i.next()).done)&&(s.push(t.value),!n||s.length!==n);o=!0);}catch(l){a=!0,r=l}finally{try{o||null==i.return||i.return()}finally{if(a)throw r}}return s}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return de(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return de(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var pe=function(e){var n=e.children,i=ue(e,["children"]),s=i.itemLength,o=i.article,a=i.loop,l=void 0===a||a,c=i.reserved,d=me((0,ce.Z)({loop:l,align:"start"}),2),u=d[0],m=d[1],p=(0,r.useState)(!1),h=p[0],x=p[1],v=(0,r.useState)(!1),f=v[0],j=v[1],g=(0,r.useCallback)((function(){return m&&m.scrollPrev()}),[m]),b=(0,r.useCallback)((function(){return m&&m.scrollNext()}),[m]),w=(0,r.useCallback)((function(){m&&(x(m.canScrollPrev()),j(m.canScrollNext()))}),[m]);(0,r.useEffect)((function(){m&&(m.on("select",w),s&&w())}),[m,w]);return(0,t.jsxs)("div",{className:"embla",children:[(0,t.jsx)("div",{className:"embla__viewport",ref:u,children:(0,t.jsx)("div",{className:"embla__container",children:n})}),o?(0,t.jsxs)("div",{children:[h&&(0,t.jsx)(se,{onClick:g}),h&&(0,t.jsx)(oe,{onClick:b})]}):c?(0,t.jsxs)("div",{children:[h&&(0,t.jsx)(ae,{onClick:g,itemLength:s}),f&&(0,t.jsx)(le,{onClick:b,itemLength:s})]}):(0,t.jsxs)("div",{children:[h&&(0,t.jsx)(te,{onClick:g}),f&&(0,t.jsx)(re,{onClick:b})]})]})},he=i(25675),xe=function(e){var n=e.children,i=e.size;return(0,t.jsx)("div",{style:{position:"relative",width:G(i),height:G(i),overflow:"hidden",borderRadius:G(i/2)},children:n})},ve=function(e){var n=e.content,i=e.photoUrl,r=e.duration,s=e.week,o=e.memberCompany,a=e.memberName,l=e.isBestReview;return(0,t.jsxs)(Q.Z,{children:[(0,t.jsxs)(Q.Z,{direction:"row",children:[(0,t.jsx)(xe,{size:30,children:(0,t.jsx)(he.default,{src:i,alt:"member profile",layout:"fill"})}),(0,t.jsx)(U.K,{width:12}),(0,t.jsxs)(Q.Z,{children:[(0,t.jsxs)(Q.Z,{direction:"row",children:[l&&(0,t.jsx)(X,{size:12,lineHeight:15,weight:700,color:"#00BC28",children:"\ubca0\uc2a4\ud2b8 \ub9ac\ubdf0\xa0"}),(0,t.jsxs)(X,{size:12,lineHeight:15,weight:700,children:[a," ",o]})]}),(0,t.jsxs)(Q.Z,{direction:"row",children:[(0,t.jsxs)(X,{size:11,lineHeight:16,color:"#ACACAC",weight:700,children:[r,"\xa0"]}),(0,t.jsx)(X,{size:11,lineHeight:16,color:"#ACACAC",children:s})]})]})]}),(0,t.jsx)(U.K,{height:13}),(0,t.jsx)(X,{size:14,lineHeight:21,children:n})]})},fe=i(87357),je=(0,K.a)((function(e){return{reviews:W(e.programClassification).reviews}}),(function(e){var n=e.reviews;return n?(0,t.jsx)(pe,{itemLength:n.length,loop:!1,children:n.map((function(e){var n=e.id,i=e.content,r=e.photoUrl,s=e.duration,o=e.week,a=e.memberName,l=e.memberCompany,c=e.isBestReview,d=o.includes("null")?"":o;return(0,t.jsx)(fe.Z,{sx:{flex:["0 0 100%","0 0 45%"],pl:"37px !important"},className:"embla__slide",children:(0,t.jsx)(ve,{content:i,photoUrl:r,duration:s,week:d,memberName:a,memberCompany:l,isBestReview:c})},n)}))}):null})),ge=(0,K.a)((function(e){var n=e.programClassification,i=function(e){var n=(0,V.L)({endpoint:(0,Y.gg)(e),dataName:"averageScore",withToken:!1}),i=n.averageScore,t=n.mutate;return{average:i&&isNaN(i)?0:i,mutate:t}}(n).average,t=W(n).reviews,r=null===t||void 0===t?void 0:t.length;return{average:i,totalReviewCount:r,programClassification:n,maxSemester:function(e){var n=(0,V.L)({endpoint:(0,Y.M)(e),dataName:"maxSemester",withToken:!1});return{maxSemester:n.maxSemester,mutate:n.mutate}}(n).maxSemester,invisible:0===r}}),(function(e){var n=e.average,i=e.totalReviewCount,r=e.programClassification,s=e.maxSemester,o=e.invisible;return(0,t.jsxs)(Q.Z,{pr:"5%",pl:["5%","5%","5%",0],sx:{visibility:o?"hidden":"visible"},children:[(0,t.jsx)(X,{size:24,weight:700,lineHeight:o?1:29,children:"\ub9ac\ubdf0"}),(0,t.jsx)(U.K,{height:18}),(0,t.jsxs)(Q.Z,{direction:"row",height:o?0:62,children:[(0,t.jsx)(ie,{label:"\ub9cc\uc871\ub3c4",content:(0,t.jsxs)(Q.Z,{direction:"row",children:[(0,t.jsxs)(X,{size:18,lineHeight:25,weight:700,children:[n," \xa0"]}),(0,t.jsx)(X,{size:18,lineHeight:25,weight:700,color:"#CBCBCB",children:"/ 5"})]})}),(0,t.jsx)(U.K,{width:17}),(0,t.jsx)(ie,{label:"\ub9ac\ubdf0 \uc218",content:(0,t.jsxs)(X,{size:18,lineHeight:25,weight:700,children:[i,"\uac74"]})}),(0,t.jsx)(U.K,{width:17}),(0,t.jsx)(ie,{label:"\ucd1d \uc9c4\ud589 \uae30\uc218",content:(0,t.jsxs)(X,{size:18,lineHeight:25,weight:700,children:[s,"\uae30"]})})]}),(0,t.jsx)(U.K,{height:o?0:37}),(0,t.jsx)(je,{programClassification:r})]})})),be=i(11773);function we(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function _e(e){var n=e.program,i=n.program_product,r=i?i[0]:{},o=n.description||n.introduction.replace(/(<([^>]+)>)|\n/gi,"").substring(0,100);return(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:n.name}),(0,t.jsx)("link",{rel:"canonical",href:"https://www.grownbetter.com/program/".concat(n.id)},"canonical"),(0,t.jsx)("meta",{property:"og:type",content:"product"},"type"),(0,t.jsx)("meta",{property:"og:title",content:n.name},"title"),(0,t.jsx)("meta",{property:"og:url",content:"https://www.grownbetter.com/program/".concat(n.id)},"url"),n.program_images.map((function(e,n){return(0,t.jsx)("meta",{property:"og:image",content:e.full_path},0==n?"image":"image_".concat(n))})),(0,t.jsx)("meta",{name:"description",property:"og:description",content:o},"description"),(0,t.jsx)("meta",{property:"product:price.amount",content:r.price}),(0,t.jsx)("meta",{property:"product:price.currency",content:"KRW"})]})}var ye=function(e){var n,i=e.program,s=(0,o.useRouter)(),c=((0,a.I0)(),(0,r.useState)({})),d=c[0],u=c[1],p=(0,r.useState)({}),h=p[0],x=p[1],v=(0,r.useState)(!1),f=v[0],j=v[1],b=(0,r.useState)(!1),_=b[0],y=b[1],k=(0,r.useState)({}),N=k[0],S=k[1];(0,r.useEffect)((function(){if(L(i),i.id&&h){var e=i.id,n=i.name,t=i.program_product[0];t.price,t.list_price;F().dataLayer({dataLayer:{ecommerce:null}}),F().dataLayer({dataLayer:{event:"detail",ecommerce:{detail:{actionField:{step:1},products:[{id:e,name:n,price:h.price}]}},goodsInfo:[{item_id:e,item_name:n,price:h.price,full_price:h.list_price}]}})}}),[i]);var L=function(e){if(u(e),y("reservation"===s.query.reservation&&"reservation"),e.statusCode==H.yt&&s.push("/"),Array.isArray(e.program_product)){var n=e.program_product[0],i=(0,q.x)(s,n);e.program_product.map((function(e){e.price<n.price&&(n=e)})),S(function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),t.forEach((function(n){we(e,n,i[n])}))}return e}({},n,{price:i}))}};(0,r.useEffect)((function(){x(N)}),[N]),(0,r.useEffect)((function(){j(!1),setTimeout((function(){j(!0)}),300)}),[null===i||void 0===i?void 0:i.introduction,N]);var P=(0,r.useMemo)((function(){return(0,t.jsx)(R.R,{introduction_editor:(null===i||void 0===i?void 0:i.introduction)||""})}),[null===i||void 0===i?void 0:i.introduction]);return(0,t.jsxs)(l.Z,{children:[h.name&&(0,t.jsx)(be.g,{event:"viewProgram",data:{programId:i.id,programName:i.name,productType:h.product_type}}),(0,t.jsx)(_e,{program:i}),(0,t.jsxs)("div",{className:"contents_wrap",children:[(0,t.jsx)("section",{id:"main-visual",className:"program_visual",children:(0,t.jsx)(m,{options:(null===i||void 0===i?void 0:i.program_images)||[]})}),(0,t.jsxs)("div",{className:"all_contents",children:[(0,t.jsx)(g,{id:(null===(n=s.query)||void 0===n?void 0:n.id)||"",name:(null===i||void 0===i?void 0:i.name)||"",productType:h.product_type,startDate:new Date(h.start_date),dataSelling:h,selling:i.is_hidden,reservation:_,invisible:0==h.price,sellingStatus:d.program_status}),(0,t.jsxs)("div",{className:(null===h||void 0===h?void 0:h.price)?"program_layoutpc":"program_layoutpc promo",children:[(0,t.jsx)(w,{options:(null===i||void 0===i?void 0:i.summary_description)||[],invisible:0==h.price}),(0,t.jsx)(C,{options:(null===i||void 0===i?void 0:i.program_product)||[],invisible:0==h.price}),(0,t.jsx)(ge,{programClassification:i.classification}),f?P:null,(0,t.jsx)(O,{options:(null===i||void 0===i?void 0:i.program_curiculum_registrations)||[],invisible:0==h.price}),(0,t.jsxs)("section",{className:"pro_recommend",style:{display:(null===h||void 0===h?void 0:h.price)?"block":"none"},children:[(0,t.jsxs)("h3",{className:"pro_h3",children:[(0,t.jsx)("span",{children:"Recommend"}),"\uc774\ub7f0 \ubd84\uc5d0\uac8c \ucd94\ucc9c \ub4dc\ub824\uc694"]}),(0,t.jsx)("div",{style:{whiteSpace:"pre-line"},children:null===i||void 0===i?void 0:i.referral})]}),(0,t.jsx)(D,{options:(null===i||void 0===i?void 0:i.professional_leaders)||[],invisible:0==h.price}),(0,t.jsx)(B,{options:(null===i||void 0===i?void 0:i.program_faqs)||[]})]})]})]})]})},ke=!0,Ne=ye},66145:function(e,n,i){"use strict";i.d(n,{P:function(){return s}});var t=i(88755),r=i(67294),s=function(e){var n=e.event,i=e.data,s=e.children,o=(0,t.i)().logEvent;return r.cloneElement(s,{onClick:function(){var e,t;null===(t=(e=s.props).onClick)||void 0===t||t.call(e),o(n,i)}})}},11773:function(e,n,i){"use strict";i.d(n,{g:function(){return l}});var t=i(85893),r=i(88755),s=i(24910),o=i(11163),a=i(67294),l=(0,s.a)((function(e){var n=e.event,i=e.data,t=(0,r.i)().logEvent,s=(0,o.useRouter)().asPath;(0,a.useEffect)((function(){t(n,i)}),[s])}),(function(){return(0,t.jsx)(a.Fragment,{})}))},99461:function(e,n,i){"use strict";i.d(n,{K:function(){return o}});var t=i(85893),r=(i(67294),i(8797));function s(){var e,n,i=(e=["\n  ","\n  ","\n  ","\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return s=function(){return i},i}var o=function(e){var n=e.width,i=e.height,r=e.isMargin,s=e.unit,o=void 0===s?"px":s,l=e.backgroundColor,c=r||!!n&&n<0||!!i&&i<0;return(0,t.jsx)(a,{width:n,height:i,isMargin:c,unit:o,backgroundColor:l})},a=r.ZP.div.withConfig({componentId:"sc-e539a9c9-0"})(s(),(function(e){var n=e.width,i=e.isMargin,t=e.unit;return n&&(i?"margin-right: ".concat(n).concat(t,";"):"width: ".concat(n).concat(t,";"))}),(function(e){var n=e.height,i=e.isMargin,t=e.unit;return n&&(i?"margin-top: ".concat(n).concat(t,";"):"height: ".concat(n).concat(t,";"))}),(function(e){var n=e.backgroundColor;return n?"background-color: ".concat(n):"background-color: inherit"}))},88755:function(e,n,i){"use strict";i.d(n,{i:function(){return s}});var t=i(19494),r=i(30572),s=function(){var e=(0,r.b)();return{logEvent:function(n,i){e||t.Z.getInstance().logEvent(n,i)}}}},30572:function(e,n,i){"use strict";i.d(n,{b:function(){return r}});var t=i(43946),r=function(){return"production"!==t.C}},27797:function(e,n,i){"use strict";i.d(n,{N:function(){return s}});var t=i(11163),r=i(97334),s=function(){var e=(0,t.useRouter)().asPath.split("?")[1];return r.parse(e)}},94792:function(e){e.exports={arrowPre:"styles_arrowPre__0QQ9h",arrowNext:"styles_arrowNext__OCALh"}},95755:function(e){e.exports={styleItemCarousel:"styles_styleItemCarousel__Vr8Se"}}},function(e){e.O(0,[9865,8008,5216,9774,2888,179],(function(){return n=56600,e(e.s=n);var n}));var n=e.O();_N_E=n}]);