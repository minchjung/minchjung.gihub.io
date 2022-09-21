"use strict";
exports.id = 204;
exports.ids = [204];
exports.modules = {

/***/ 1204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ initEnvironment),
  "O": () => (/* binding */ useEnvironment)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "relay-runtime"
var external_relay_runtime_ = __webpack_require__(2825);
// EXTERNAL MODULE: ./src/common/constant/domain.ts
var domain = __webpack_require__(7738);
;// CONCATENATED MODULE: ./src/common/relay/fetchGraphQL.ts

const URL = domain/* GRAPHQL_ENDPOINT */.Z2;
const fetchGraphQL = async (params, variables)=>{
    const { text: query  } = params;
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    return await response.json();
};

;// CONCATENATED MODULE: ./src/common/utill/etc/isServer.ts
const isServer = "undefined" === "undefined";

;// CONCATENATED MODULE: ./src/common/relay/environment.ts




let relayEnvironment;
const createEnvironment = ()=>{
    return new external_relay_runtime_.Environment({
        network: external_relay_runtime_.Network.create(fetchGraphQL),
        store: new external_relay_runtime_.Store(new external_relay_runtime_.RecordSource())
    });
};
const initEnvironment = (initialRecords)=>{
    const environment = relayEnvironment !== null && relayEnvironment !== void 0 ? relayEnvironment : createEnvironment();
    if (initialRecords) {
        environment.getStore().publish(new external_relay_runtime_.RecordSource(initialRecords));
    }
    if (isServer) return environment;
    relayEnvironment ||= environment;
    return relayEnvironment;
};
const useEnvironment = (initialRecords)=>{
    const relayEnvironment1 = (0,external_react_.useMemo)(()=>initEnvironment(initialRecords)
    , [
        initialRecords
    ]);
    return relayEnvironment1;
};


/***/ })

};
;