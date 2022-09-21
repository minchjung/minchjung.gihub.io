"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 6029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node = function() {
    var v0 = [
        {
            "defaultValue": 8,
            "kind": "LocalArgument",
            "name": "count"
        }
    ], v1 = [
        {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
        }
    ];
    return {
        "fragment": {
            "argumentDefinitions": v0 /*: any*/ ,
            "kind": "Fragment",
            "metadata": null,
            "name": "ArticleRefetchQuery",
            "selections": [
                {
                    "args": v1 /*: any*/ ,
                    "kind": "FragmentSpread",
                    "name": "useArticleCardContainer"
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": v0 /*: any*/ ,
            "kind": "Operation",
            "name": "ArticleRefetchQuery",
            "selections": [
                {
                    "alias": null,
                    "args": [
                        {
                            "fields": v1 /*: any*/ ,
                            "kind": "ObjectValue",
                            "name": "input"
                        }
                    ],
                    "concreteType": "ArticleNode",
                    "kind": "LinkedField",
                    "name": "articles",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Article",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "id",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "image",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "category",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "date",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hasNext",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "total",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "19b940dcd38f647ef0e7ecc0def6d2f4",
            "id": null,
            "metadata": {},
            "name": "ArticleRefetchQuery",
            "operationKind": "query",
            "text": "query ArticleRefetchQuery(\n  $count: Int = 8\n) {\n  ...useArticleCardContainer_yu5n1\n}\n\nfragment useArticleCardContainer_yu5n1 on Query {\n  articles(input: {count: $count}) {\n    nodes {\n      id\n      title\n      image\n      category\n      date\n    }\n    hasNext\n    total\n  }\n}\n"
        }
    };
}();
node.hash = "e388516cc6651a40f3f17db324b33706";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);


/***/ }),

/***/ 6654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CarouselHeroBanner",
    "selections": [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Literal",
                    "name": "filter",
                    "value": {
                        "type": "Hero"
                    }
                }
            ],
            "concreteType": "Banner",
            "kind": "LinkedField",
            "name": "banners",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "image",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ctaText",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ctaLink",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "backgroundColor",
                    "storageKey": null
                }
            ],
            "storageKey": "banners(filter:{\"type\":\"Hero\"})"
        }
    ],
    "type": "Query",
    "abstractKey": null
};
node.hash = "6b28c5fdf27e53bcd3244206abd0a405";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);


/***/ }),

/***/ 1039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node = function() {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    }, v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
    }, v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
    }, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
    }, v4 = {
        "kind": "Literal",
        "name": "count",
        "value": 8
    }, v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
    }, v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNext",
        "storageKey": null
    }, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "total",
        "storageKey": null
    };
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "MainPageIndexQuery",
            "selections": [
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CarouselHeroBanner"
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useProductsQuery"
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useArticleCardContainer"
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "MainPageIndexQuery",
            "selections": [
                {
                    "alias": null,
                    "args": [
                        {
                            "kind": "Literal",
                            "name": "filter",
                            "value": {
                                "type": "Hero"
                            }
                        }
                    ],
                    "concreteType": "Banner",
                    "kind": "LinkedField",
                    "name": "banners",
                    "plural": true,
                    "selections": [
                        v0 /*: any*/ ,
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                        },
                        v1 /*: any*/ ,
                        v2 /*: any*/ ,
                        v3 /*: any*/ ,
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "ctaText",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "ctaLink",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "backgroundColor",
                            "storageKey": null
                        }
                    ],
                    "storageKey": "banners(filter:{\"type\":\"Hero\"})"
                },
                {
                    "alias": null,
                    "args": [
                        {
                            "fields": [
                                v4 /*: any*/ ,
                                {
                                    "kind": "Literal",
                                    "name": "type",
                                    "value": "REGULAR"
                                }
                            ],
                            "kind": "ObjectValue",
                            "name": "input"
                        }
                    ],
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "products",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Product",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                                v0 /*: any*/ ,
                                v1 /*: any*/ ,
                                v2 /*: any*/ ,
                                v3 /*: any*/ ,
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Badge",
                                    "kind": "LinkedField",
                                    "name": "badge",
                                    "plural": false,
                                    "selections": [
                                        v0 /*: any*/ ,
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "color",
                                            "storageKey": null
                                        },
                                        v5 /*: any*/ 
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Tag",
                                    "kind": "LinkedField",
                                    "name": "tags",
                                    "plural": true,
                                    "selections": [
                                        v0 /*: any*/ ,
                                        v5 /*: any*/ 
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "programId",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        v6 /*: any*/ ,
                        v7 /*: any*/ 
                    ],
                    "storageKey": "products(input:{\"count\":8,\"type\":\"REGULAR\"})"
                },
                {
                    "alias": null,
                    "args": [
                        {
                            "fields": [
                                v4 /*: any*/ 
                            ],
                            "kind": "ObjectValue",
                            "name": "input"
                        }
                    ],
                    "concreteType": "ArticleNode",
                    "kind": "LinkedField",
                    "name": "articles",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Article",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                                v0 /*: any*/ ,
                                v1 /*: any*/ ,
                                v3 /*: any*/ ,
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "category",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "date",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        v6 /*: any*/ ,
                        v7 /*: any*/ 
                    ],
                    "storageKey": "articles(input:{\"count\":8})"
                }
            ]
        },
        "params": {
            "cacheID": "8908619923865fa7e986ff36065bb601",
            "id": null,
            "metadata": {},
            "name": "MainPageIndexQuery",
            "operationKind": "query",
            "text": "query MainPageIndexQuery {\n  ...CarouselHeroBanner\n  ...useProductsQuery\n  ...useArticleCardContainer\n}\n\nfragment CarouselHeroBanner on Query {\n  banners(filter: {type: Hero}) {\n    id\n    type\n    title\n    description\n    image\n    ctaText\n    ctaLink\n    backgroundColor\n  }\n}\n\nfragment useArticleCardContainer on Query {\n  articles(input: {count: 8}) {\n    nodes {\n      id\n      title\n      image\n      category\n      date\n    }\n    hasNext\n    total\n  }\n}\n\nfragment useProductsQuery on Query {\n  products(input: {count: 8, type: REGULAR}) {\n    nodes {\n      id\n      title\n      description\n      image\n      badge {\n        id\n        color\n        text\n      }\n      tags {\n        id\n        text\n      }\n      programId\n    }\n    hasNext\n    total\n  }\n}\n"
        }
    };
}();
node.hash = "faebb88335aaf3f68c0130e2d3b3bbd0";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);


/***/ }),

/***/ 2837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node = function() {
    var v0 = [
        {
            "defaultValue": 8,
            "kind": "LocalArgument",
            "name": "count"
        },
        {
            "defaultValue": "REGULAR",
            "kind": "LocalArgument",
            "name": "type"
        }
    ], v1 = [
        {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
        },
        {
            "kind": "Variable",
            "name": "type",
            "variableName": "type"
        }
    ], v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    }, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
    };
    return {
        "fragment": {
            "argumentDefinitions": v0 /*: any*/ ,
            "kind": "Fragment",
            "metadata": null,
            "name": "ProductsRefetchQuery",
            "selections": [
                {
                    "args": v1 /*: any*/ ,
                    "kind": "FragmentSpread",
                    "name": "useProductsQuery"
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": v0 /*: any*/ ,
            "kind": "Operation",
            "name": "ProductsRefetchQuery",
            "selections": [
                {
                    "alias": null,
                    "args": [
                        {
                            "fields": v1 /*: any*/ ,
                            "kind": "ObjectValue",
                            "name": "input"
                        }
                    ],
                    "concreteType": "ProductNode",
                    "kind": "LinkedField",
                    "name": "products",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Product",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                                v2 /*: any*/ ,
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "description",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "image",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Badge",
                                    "kind": "LinkedField",
                                    "name": "badge",
                                    "plural": false,
                                    "selections": [
                                        v2 /*: any*/ ,
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "color",
                                            "storageKey": null
                                        },
                                        v3 /*: any*/ 
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Tag",
                                    "kind": "LinkedField",
                                    "name": "tags",
                                    "plural": true,
                                    "selections": [
                                        v2 /*: any*/ ,
                                        v3 /*: any*/ 
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "programId",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hasNext",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "total",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "f8436fb29704834a71f8f229a895fc48",
            "id": null,
            "metadata": {},
            "name": "ProductsRefetchQuery",
            "operationKind": "query",
            "text": "query ProductsRefetchQuery(\n  $count: Int = 8\n  $type: ProductType = REGULAR\n) {\n  ...useProductsQuery_2pbCSa\n}\n\nfragment useProductsQuery_2pbCSa on Query {\n  products(input: {count: $count, type: $type}) {\n    nodes {\n      id\n      title\n      description\n      image\n      badge {\n        id\n        color\n        text\n      }\n      tags {\n        id\n        text\n      }\n      programId\n    }\n    hasNext\n    total\n  }\n}\n"
        }
    };
}();
node.hash = "accb2e9347ceed6da3843ddbb320013a";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);


/***/ }),

/***/ 4673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node = {
    "argumentDefinitions": [
        {
            "defaultValue": 8,
            "kind": "LocalArgument",
            "name": "count"
        }
    ],
    "kind": "Fragment",
    "metadata": {
        "refetch": {
            "connection": null,
            "fragmentPathInResult": [],
            "operation": __webpack_require__(6029)
        }
    },
    "name": "useArticleCardContainer",
    "selections": [
        {
            "alias": null,
            "args": [
                {
                    "fields": [
                        {
                            "kind": "Variable",
                            "name": "count",
                            "variableName": "count"
                        }
                    ],
                    "kind": "ObjectValue",
                    "name": "input"
                }
            ],
            "concreteType": "ArticleNode",
            "kind": "LinkedField",
            "name": "articles",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Article",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "image",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "category",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNext",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "total",
                    "storageKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Query",
    "abstractKey": null
};
node.hash = "e388516cc6651a40f3f17db324b33706";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);


/***/ }),

/***/ 1216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node = function() {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    }, v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
    };
    return {
        "argumentDefinitions": [
            {
                "defaultValue": 8,
                "kind": "LocalArgument",
                "name": "count"
            },
            {
                "defaultValue": "REGULAR",
                "kind": "LocalArgument",
                "name": "type"
            }
        ],
        "kind": "Fragment",
        "metadata": {
            "refetch": {
                "connection": null,
                "fragmentPathInResult": [],
                "operation": __webpack_require__(2837)
            }
        },
        "name": "useProductsQuery",
        "selections": [
            {
                "alias": null,
                "args": [
                    {
                        "fields": [
                            {
                                "kind": "Variable",
                                "name": "count",
                                "variableName": "count"
                            },
                            {
                                "kind": "Variable",
                                "name": "type",
                                "variableName": "type"
                            }
                        ],
                        "kind": "ObjectValue",
                        "name": "input"
                    }
                ],
                "concreteType": "ProductNode",
                "kind": "LinkedField",
                "name": "products",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "Product",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                            v0 /*: any*/ ,
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "description",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "image",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "Badge",
                                "kind": "LinkedField",
                                "name": "badge",
                                "plural": false,
                                "selections": [
                                    v0 /*: any*/ ,
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "color",
                                        "storageKey": null
                                    },
                                    v1 /*: any*/ 
                                ],
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "Tag",
                                "kind": "LinkedField",
                                "name": "tags",
                                "plural": true,
                                "selections": [
                                    v0 /*: any*/ ,
                                    v1 /*: any*/ 
                                ],
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "programId",
                                "storageKey": null
                            }
                        ],
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNext",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "total",
                        "storageKey": null
                    }
                ],
                "storageKey": null
            }
        ],
        "type": "Query",
        "abstractKey": null
    };
}();
node.hash = "accb2e9347ceed6da3843ddbb320013a";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);


/***/ }),

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



/***/ }),

/***/ 3099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ environment/* initEnvironment */.N)
});

// UNUSED EXPORTS: RelayContainer

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-relay/hooks"
var hooks_ = __webpack_require__(6025);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/relay/environment.ts + 2 modules
var environment = __webpack_require__(1204);
;// CONCATENATED MODULE: ./src/common/relay/Container.tsx




const Container = ({ pageProps , children  })=>{
    const environment = useEnvironment(pageProps.initialRecords);
    return /*#__PURE__*/ _jsx(RelayEnvironmentProvider, {
        environment: environment,
        children: /*#__PURE__*/ _jsx(Suspense, {
            fallback: null,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/common/relay/index.ts




/***/ }),

/***/ 8478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* reexport */ ArticleCardContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react-reveal/globals"
var globals_ = __webpack_require__(7769);
var globals_default = /*#__PURE__*/__webpack_require__.n(globals_);
;// CONCATENATED MODULE: ./src/common/component/ArticleCard/ArticleCard.tsx








globals_default()({
    ssrFadeout: true
});
const useArticleCard = ({ data  })=>{
    const { id , title , image , category , date  } = data;
    const newDate = external_moment_default()(date).format("YYYY.MM.DD");
    return {
        id,
        title,
        image,
        category,
        newDate
    };
};
const ArticleCard = (0,bind/* bind */.a)(useArticleCard, ({ id , title , image , category , newDate  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/article/${id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: image,
                            alt: title,
                            layout: "fill",
                            objectFit: "cover"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/article/${id}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InfoSection, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Category, {
                                    children: category
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ArticleCard_Date, {
                                    children: newDate
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                            children: title
                        })
                    ]
                })
            })
        ]
    });
});
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-8c35374f-0"
})`
  position: relative;
  background-color: inherit;
  cursor: pointer;

  @media ${style/* device.tablet */.Uh.tablet} {
    width: 29.43vw;
    height: 41.15vw;

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    width: 42.22vw;
    height: auto;
  }
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8c35374f-1"
})`
  position: relative;
  height: 16.88vw;
  max-height: 206px;
  overflow: hidden;
  margin-bottom: 14px;
  border-radius: 4px;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin-bottom: 10px;
    height: 22.66vw;
    max-height: none;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    height: 31.67vw;
    margin-bottom: 7px;
    border-radius: 2px;
  }
`;
const InfoSection = external_styled_components_default().div.withConfig({
    componentId: "sc-8c35374f-2"
})`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin-bottom: 7px;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin-bottom: 9px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin-bottom: 9px;
  }
`;
const Category = external_styled_components_default().div.withConfig({
    componentId: "sc-8c35374f-3"
})`
  font-size: 14px;
  color: #616973;
`;
const ArticleCard_Date = external_styled_components_default().div.withConfig({
    componentId: "sc-8c35374f-4"
})`
  font-size: 13px;
  color: #8b95a1;
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-8c35374f-5"
})`
  height: 48px;
  font-size: 18px;
  font-weight: 500 !important;
  line-height: 24px;
  word-break: break-word;
  color: #1a1a1a;

  @media ${style/* device.tablet */.Uh.tablet} {
    height: 5.73vw;
    font-size: 2.08vw;
    line-height: 3.13vw;
    letter-spacing: -0.03em;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 11.11vw;
    font-size: 3.73vw;
    line-height: 5.56vw;
  }
`;

;// CONCATENATED MODULE: ./src/common/component/ArticleCard/index.ts


// EXTERNAL MODULE: ./src/main/component/CardContainer/index.ts + 1 modules
var CardContainer = __webpack_require__(9391);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/hook/useWindowWidth/index.ts + 3 modules
var useWindowWidth = __webpack_require__(189);
// EXTERNAL MODULE: external "relay-hooks"
var external_relay_hooks_ = __webpack_require__(3098);
;// CONCATENATED MODULE: ./src/main/component/ArticleCardContainer/useArticleCardContainer.ts



const fragment = __webpack_require__(4673);
const useArticleCardContainer = ({ fragmentRef  })=>{
    const { width  } = (0,useWindowWidth/* useWindowSize */.i)();
    const isTablet = width <= 960 && width > 560;
    const { data: { articles: { nodes  } ,  } , refetch ,  } = (0,external_relay_hooks_.useRefetchable)(fragment, fragmentRef);
    const handleCount = (0,external_react_.useCallback)((count)=>refetch({
            count
        })
    , [
        refetch
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isTablet) {
            handleCount(6);
        }
    }, [
        isTablet
    ]);
    return {
        nodes: nodes.map((node)=>({
                ...node,
                id: node.id.split("@")[1]
            })
        )
    };
};

;// CONCATENATED MODULE: ./src/main/component/ArticleCardContainer/ArticleCardContainer.tsx





const ArticleCardContainer = (0,bind/* bind */.a)(useArticleCardContainer, ({ nodes  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CardContainer/* CardContainer */._, {
        title: "그로우앤베터 블로그",
        subTitle: "스타트업의 트렌드, 실무 에센스, 실무자 인터뷰, 커리어 정보",
        children: nodes.map((article)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(ArticleCard, {
                data: article
            }, article.id);
        })
    });
});

;// CONCATENATED MODULE: ./src/main/component/ArticleCardContainer/index.ts



/***/ }),

/***/ 6543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* reexport */ BannerContainer_BannerContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/common/component/BandBanner/BandBanner.tsx






const BandBanner = ({ title , subtitle , color , image , url  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(BannerContainer, {
        color: color,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: url,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SubTitle, {
                                    children: subtitle
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: image,
                                width: 160,
                                height: 160,
                                layout: "intrinsic"
                            })
                        })
                    ]
                })
            })
        })
    });
};
const BannerContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-ac3cf794-0"
})`
  width: 100%;
  height: 160px;
  background-color: ${({ color  })=>color
};
  &:hover {
    cursor: pointer;
  }

  @media ${style/* device.tablet */.Uh.tablet} {
    height: 140px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    height: 180px;
  }
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ac3cf794-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1223px;
  margin: 0 auto;
  padding: 0 23px;

  @media ${style/* device.tablet */.Uh.tablet} {
    padding: 0 20px;
    height: 100%;
  }
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-ac3cf794-2"
})`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: #fff;

  @media ${style/* device.tablet */.Uh.tablet} {
    line-height: 2.86vw;
    font-size: 2.34vw;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    line-height: 6.94vw;
    font-size: 5vw;
  }
`;
const SubTitle = external_styled_components_default().h2.withConfig({
    componentId: "sc-ac3cf794-3"
})`
  margin-top: 8px;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #fff;

  @media ${style/* device.tablet */.Uh.tablet} {
    line-height: 2.6vw;
    margin-top: 5px;
    font-size: 1.82vw;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    line-height: 5.56vw;
    font-size: 4.17vw;
  }
`;
const ImageSection = external_styled_components_default().div.withConfig({
    componentId: "sc-ac3cf794-4"
})`
  width: 160px;
  height: 160px;
  margin-right: 17px;
  overflow: hidden;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin: auto 17px auto 0;
    width: 18.23vw;
    height: auto;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin: auto 0 auto 37px;
    width: 30.56vw;
    height: auto;
  }
`;

;// CONCATENATED MODULE: ./src/common/component/BandBanner/index.ts


;// CONCATENATED MODULE: ./src/main/component/BannerContainer/BannerContainer.tsx


const BannerContainer_BannerContainer = ({ order  })=>{
    const { title , subtitle , color , image , url  } = BANNER_DATA[order];
    return /*#__PURE__*/ jsx_runtime_.jsx(BandBanner, {
        title: title,
        subtitle: subtitle,
        color: color,
        image: `/images/main/${image}`,
        url: url
    });
};
// 배너 내용 교체 시 아래 내용 변경 및 추가
const BANNER_DATA = {
    first: {
        title: "인기 세미나가 0원!",
        subtitle: "신청서 작성하고 프로필 완성하면 100% 할인",
        color: "#FF3E55",
        image: "banner_icon_coupon.svg",
        url: "/program/716"
    },
    second: {
        title: "뉴스레터 구독하기",
        subtitle: "업계 트렌드, 해외 아티클, 실전 에센스를 큐레이션해 드려요.",
        color: "#6E65F4",
        image: "banner_icon_newsletter.svg",
        url: "https://bit.ly/2RS11PL"
    }
};

;// CONCATENATED MODULE: ./src/main/component/BannerContainer/index.ts



/***/ }),

/***/ 9391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* reexport */ CardContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/component/OutlinedButton/index.tsx + 1 modules
var OutlinedButton = __webpack_require__(1936);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
// EXTERNAL MODULE: ./src/common/hook/useMobile/index.ts + 1 modules
var useMobile = __webpack_require__(4961);
;// CONCATENATED MODULE: ./src/main/component/CardContainer/CardContainer.tsx






const CardContainer = ({ children , title , subTitle , hasNext , handleCount  })=>{
    const isMobile = (0,useMobile/* useMobile */.X)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        "data-test": "main-page",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleSection, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SubTitle, {
                        children: subTitle
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ListSection, {
                children: children
            }),
            hasNext && handleCount && /*#__PURE__*/ jsx_runtime_.jsx(OutlinedButton/* OutlinedButton */.U, {
                onClick: ()=>handleCount(1000)
                ,
                style: {
                    display: hasNext ? "flex" : "none",
                    width: isMobile ? "85.33vw" : "400px",
                    height: isMobile ? "44px" : "50px",
                    margin: isMobile ? "21px auto" : "40px auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonText, {
                            children: [
                                title,
                                " 더보기"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ExpandMoreIconPT, {})
                    ]
                })
            })
        ]
    });
};
const ExpandMoreIconPT = external_styled_components_default()((ExpandMore_default())).withConfig({
    componentId: "sc-35cbe665-0"
})`
  padding-top: 2px;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-35cbe665-1"
})`
  max-width: 1224px;
  margin: 76px auto 95px;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin: 47px 0 50px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin: 57px 0 55px;
  }
`;
const TitleSection = external_styled_components_default().div.withConfig({
    componentId: "sc-35cbe665-2"
})`
  margin: 0 24px 27px;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin: 0 24px 21px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin: 0 20px 18px;
  }
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-35cbe665-3"
})`
  font-size: 24px;

  @media ${style/* device.tablet */.Uh.tablet} {
    font-size: 18px;
  }
`;
const SubTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-35cbe665-4"
})`
  margin-top: 9px;
  font-size: 14px;
  color: #8b95a1;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin-top: 6px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin-top: 5px;
    font-size: 12px;
  }
`;
const ListSection = external_styled_components_default().div.withConfig({
    componentId: "sc-35cbe665-5"
})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 24px;
  row-gap: 40px;
  min-height: 1px;
  overflow: hidden;
  padding: 0 24px;

  @media ${style/* device.tablet */.Uh.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 21px;
    row-gap: 22px;
    padding: 0 2.6vw 20px;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    row-gap: 27px;
    padding: 0 5.33vw 20px;
  }
`;
const ButtonText = external_styled_components_default().p.withConfig({
    componentId: "sc-35cbe665-6"
})`
  font-size: 16px;

  @media ${style/* device.tablet */.Uh.tablet} {
    font-size: 13px;
  }
`;

;// CONCATENATED MODULE: ./src/main/component/CardContainer/index.ts



/***/ }),

/***/ 1511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4910);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var _common_constant_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2352);
/* harmony import */ var relay_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3098);
/* harmony import */ var relay_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(relay_hooks__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const fragment = __webpack_require__(6654);
const autoplayDelay = 3000;
const imageSlideSpeed = 600;
const contentSlideSpeed = 800;
const useCarousel = ({ fragmentRef  })=>{
    const { 0: contentSwiper , 1: setContentSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: backgroundColor , 1: setBackgroundColor  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const realData = (0,relay_hooks__WEBPACK_IMPORTED_MODULE_9__.useFragment)(fragment, fragmentRef);
    const data = realData.banners;
    const onSlideChange = ({ realIndex  })=>{
        setBackgroundColor(data[realIndex].backgroundColor);
        contentSwiper === null || contentSwiper === void 0 ? void 0 : contentSwiper.slideTo(realIndex + 1, contentSlideSpeed);
    };
    return {
        data,
        setContentSwiper,
        backgroundColor,
        onSlideChange
    };
};
const Carousel = (0,_utils_bind__WEBPACK_IMPORTED_MODULE_5__/* .bind */ .a)(useCarousel, ({ data , setContentSwiper , backgroundColor , onSlideChange  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Background, {
        color: backgroundColor,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageSection, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                        onSlideChange: onSlideChange,
                        loop: true,
                        slidesPerView: "auto",
                        centeredSlides: true,
                        spaceBetween: 13,
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay,
                            swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination
                        ],
                        pagination: {
                            clickable: true,
                            el: ".slideNavigator",
                            renderBullet: (_, className)=>`<div class=${className}><div class="dot"></div></div>`
                        },
                        autoplay: {
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        },
                        speed: imageSlideSpeed,
                        style: {
                            cursor: "pointer"
                        },
                        children: data.map(({ title , image , id , ctaLink  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: `${ctaLink}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageContainer, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                style: {
                                                    borderRadius: "4px"
                                                },
                                                priority: index === 0,
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: title,
                                                src: image
                                            })
                                        })
                                    })
                                })
                            }, id)
                        )
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentSection, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                            allowTouchMove: false,
                            spaceBetween: 400,
                            loop: true,
                            onSwiper: setContentSwiper,
                            style: {
                                width: "100%",
                                cursor: "pointer"
                            },
                            children: data.map(({ id , ctaText , title , description , ctaLink  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                    style: {
                                        margin: 0
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        href: `${ctaLink}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                                                    children: ctaText
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                                    children: title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                                                    children: description
                                                })
                                            ]
                                        })
                                    })
                                }, id)
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SlideNavigator, {
                            className: "slideNavigator"
                        })
                    ]
                })
            ]
        })
    });
});
const ImageSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-0"
})`
  width: 600px;
  height: 380px;
  margin-right: 48px;
  .swiper-slide {
    display: "flex";
    margin: 0;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.tablet */ .Uh.tablet} {
    width: 52vw;
    height: 33vw;
    margin-right: 3vw;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    width: 100vw;
    height: 55vw;
    margin: 0px;
    .swiper-slide {
      width: 88vw;
    }
  }
`;
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-1"
})`
  width: 600px;
  height: 380px;
  position: relative;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.tablet */ .Uh.tablet} {
    width: 52vw;
    height: 33vw;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    width: 88vw;
    height: 55vw;
  }
`;
const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-2"
})`
  padding: 46px 0px;
  max-width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.tablet */ .Uh.tablet} {
    padding: 25px 0px;
    max-width: 38vw;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    margin-left: 6vw;
    padding: 16px 0px 22px 0px;
    max-width: 80vw;
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-3"
})`
  width: ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.desktopContainerSize */ .Uh.desktopContainerSize};
  display: flex;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.desktopContainer */ .Uh.desktopContainer} {
    margin: 0px 24px;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    flex-direction: column-reverse;
    margin: 0;
  }
`;
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-4"
})`
  background-color: ${({ color  })=>color !== null && color !== void 0 ? color : "#696969"
};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.7s;
  padding: 20px 0px;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    padding-bottom: 35px;
  }
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-5"
})`
  font-size: 18px;
  font-weight: 700;
  line-height: 25.65px;
  color: #05d431;
  margin-bottom: 20px;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.tablet */ .Uh.tablet} {
    font-size: 16px;
    line-height: 142.52%;
    margin-bottom: 9px;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    font-size: 15px;
    margin-bottom: 8px;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-6"
})`
  font-size: 34px;
  font-weight: 700;
  line-height: 44px;
  color: white;
  margin-bottom: 11px;
  white-space: pre-line;
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.tablet */ .Uh.tablet} {
    font-size: 24px;
    font-size: 3.3vw;
    line-height: 4.1vw;
    margin-bottom: 9px;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.03em;
  }
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-7"
})`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.tablet */ .Uh.tablet} {
    font-size: 1.75vw;
    letter-spacing: -0.02em;
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  }
`;
const SlideNavigator = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-15763676-8"
})`
  .swiper-pagination-bullet {
    background-color: inherit;
    height: 22px;
    padding: 7px 0px;
    .dot {
      background: #eeeeee;
      height: 8px;
      border-radius: 50%;
    }
  }

  .swiper-pagination-bullet-active {
    width: 25px;
    .dot {
      background-color: #d5d5d5;
      border-radius: 4px;
    }
  }
  @media ${_common_constant_style__WEBPACK_IMPORTED_MODULE_8__/* .device.mobile */ .Uh.mobile} {
    display: none;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _Carousel__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1511);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Carousel__WEBPACK_IMPORTED_MODULE_0__]);
_Carousel__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ ProgramCardContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/main/component/CardContainer/index.ts + 1 modules
var CardContainer = __webpack_require__(9391);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/common/constant/style.ts
var style = __webpack_require__(2352);
;// CONCATENATED MODULE: ./src/common/component/Badge/Badge.tsx



const Badge = ({ children , backgroundColor  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(BadgeContainer, {
        backgroundColor: backgroundColor,
        children: /*#__PURE__*/ jsx_runtime_.jsx(BadgeName, {
            children: children
        })
    });
};
const BadgeContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-45b85f9a-0"
})`
  position: absolute;
  top: 8px;
  left: 8px;
  width: fit-content;
  height: 26px;
  background-color: ${({ backgroundColor  })=>backgroundColor
};
  border-radius: 1px;
  line-height: 1.5;
  z-index: 99;

  @media ${style/* device.mobile */.Uh.mobile} {
    height: 20px;
    line-height: 14px;
  }
`;
const BadgeName = external_styled_components_default().span.withConfig({
    componentId: "sc-45b85f9a-1"
})`
  padding: 5px 10px;
  font-size: 13px;
  color: #fff;

  @media ${style/* device.mobile */.Uh.mobile} {
    padding: 4px 6px;
    font-size: 10px;
  }
`;

;// CONCATENATED MODULE: ./src/common/component/Badge/index.ts


;// CONCATENATED MODULE: ./src/common/component/Tag/Tag.tsx



const Tag = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(TagContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(TagText, {
            children: children
        })
    });
};
const TagContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-3a68db96-0"
})`
  width: fit-content;
  height: 25px;
  background-color: #f3f4f8;
  border-radius: 2px;
  line-height: 20px;
`;
const TagText = external_styled_components_default().div.withConfig({
    componentId: "sc-3a68db96-1"
})`
  padding: 2px 10px;
  font-size: 12px;
  color: #8b95a1;
  letter-spacing: -0.03em;

  @media ${style/* device.mobile */.Uh.mobile} {
    padding: 3px 6px;
    font-size: 10px;
  }
`;

;// CONCATENATED MODULE: ./src/common/component/Tag/index.ts


// EXTERNAL MODULE: ./utils/bind.ts
var bind = __webpack_require__(4910);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-reveal/globals"
var globals_ = __webpack_require__(7769);
var globals_default = /*#__PURE__*/__webpack_require__.n(globals_);
;// CONCATENATED MODULE: ./src/common/component/Card/Card.tsx









globals_default()({
    ssrFadeout: true
});
const useCard = ({ data  })=>{
    const { title , badge , description , image , tags , programId  } = data;
    return {
        title,
        badge,
        description,
        image,
        tags,
        programId
    };
};
const Card = (0,bind/* bind */.a)(useCard, ({ title , badge , description , image , tags , programId  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/program/${programId}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkStyle, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: image,
                                alt: title,
                                layout: "fill",
                                objectFit: "cover"
                            })
                        }),
                        badge && /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                            backgroundColor: badge.color,
                            children: badge.text
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TagSection, {
                children: tags.map(({ id , text  })=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                        children: text
                    }, id);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/program/${programId}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkStyle, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                            children: description
                        })
                    ]
                })
            })
        ]
    });
});
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-81ed7517-0"
})`
  position: relative;
  background-color: inherit;

  @media ${style/* device.tablet */.Uh.tablet} {
    width: 29.43vw;
    height: 41.15vw;

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    width: 42.22vw;
    height: auto;
  }
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-81ed7517-1"
})`
  position: relative;
  height: 16.88vw;
  max-height: 206px;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 4px;

  @media ${style/* device.tablet */.Uh.tablet} {
    height: 22.66vw;
    max-height: none;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    height: 31.67vw;
    margin-bottom: 7px;
    border-radius: 2px;
  }
`;
const TagSection = external_styled_components_default().div.withConfig({
    componentId: "sc-81ed7517-2"
})`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
  justify-content: start;
`;
const Divider = external_styled_components_default().div.withConfig({
    componentId: "sc-81ed7517-3"
})`
  width: 100%;
  align-self: center;
  border-bottom: 1px solid #edeff5;
  margin: 11px 0 8px;

  @media ${style/* device.mobile */.Uh.mobile} {
    margin: 7px 0 4px;
  }
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-81ed7517-4"
})`
  height: 48px;
  font-size: 18px;
  font-weight: 500 !important;
  line-height: 24px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 3em;
  color: #1a1a1a;

  @media ${style/* device.tablet */.Uh.tablet} {
    height: 5.73vw;
    font-size: 2.08vw;
    line-height: 3.13vw;
    letter-spacing: -0.03em;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 11.11vw;
    font-size: 3.73vw;
    line-height: 5.56vw;
  }
`;
// 2 line ellipsis
const Description = external_styled_components_default().h4.withConfig({
    componentId: "sc-81ed7517-5"
})`
  margin-top: 7px;
  color: #8b95a1;
  font-size: 14px;
  font-weight: 400 !important;
  line-height: 24px;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;

  @media ${style/* device.tablet */.Uh.tablet} {
    margin-top: 5px;
    font-size: 1.69vw;
    line-height: 2.6vw;
    height: 2.6vw;
    letter-spacing: -0.03em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media ${style/* device.mobile */.Uh.mobile} {
    margin-top: 3px;
    font-size: 2.93vw;
    line-height: 4.44vw;
    height: unset;
    white-space: unset;
  }
`;
const LinkStyle = external_styled_components_default().a.withConfig({
    componentId: "sc-81ed7517-6"
})`
  cursor: pointer;
`;

;// CONCATENATED MODULE: ./src/common/component/Card/index.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "relay-hooks"
var external_relay_hooks_ = __webpack_require__(3098);
// EXTERNAL MODULE: ./src/common/hook/useTablet/index.ts + 1 modules
var useTablet = __webpack_require__(5714);
;// CONCATENATED MODULE: ./src/common/hook/useProductsQuery/useProductsQuery.ts



const fragment = __webpack_require__(1216);
const useProductsQuery = ({ fragmentRef , productType  })=>{
    const isTablet = (0,useTablet/* useTablet */.F)();
    const containerTitle = CONTAINER_DATE[productType].title;
    const containerSubTitle = CONTAINER_DATE[productType].subTitle;
    const { data: { products  } , error , refetch ,  } = (0,external_relay_hooks_.useRefetchable)(fragment, fragmentRef);
    const handleData = (type)=>refetch({
            type
        })
    ;
    const handleCount = (count, type = productType)=>refetch({
            count,
            type
        })
    ;
    const { hasNext , nodes  } = products;
    (0,external_react_.useEffect)(()=>{
        handleData(productType);
    }, [
        productType
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isTablet && productType == "SEMINAR") {
            handleCount(3);
            return;
        }
        if (isTablet) {
            handleCount(6);
        }
    }, [
        isTablet
    ]);
    return {
        hasNext,
        nodes,
        handleCount,
        containerTitle,
        containerSubTitle
    };
};
const CONTAINER_DATE = {
    REGULAR: {
        title: "정규 프로그램",
        subTitle: "현업 시니어와 함께하는 실전 중심 기수제 라이브 트레이닝"
    },
    SEMINAR: {
        title: "라이브 세미나",
        subTitle: "현업 시니어가 라이브로 공유하는 업계 트렌드 & 실무 에센스! 그리고 질의응답까지"
    },
    VOD: {
        title: "VOD",
        subTitle: "언제 어디서든 부담없이 듣는 현업 시니어의 실전 노하우"
    }
};

;// CONCATENATED MODULE: ./src/common/hook/useProductsQuery/index.ts


;// CONCATENATED MODULE: ./src/main/component/ProgramCardContainer/ProgramCardContainer.tsx





const ProgramCardContainer = (0,bind/* bind */.a)(useProductsQuery, ({ hasNext , nodes , handleCount , containerTitle , containerSubTitle  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CardContainer/* CardContainer */._, {
        title: containerTitle,
        subTitle: containerSubTitle,
        hasNext: hasNext,
        handleCount: handleCount,
        children: nodes.map((data)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                data: data
            }, data.id);
        })
    });
});

;// CONCATENATED MODULE: ./src/main/component/ProgramCardContainer/index.ts



/***/ }),

/***/ 8820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ query),
/* harmony export */   "h": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9496);
/* harmony import */ var src_main_component_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8324);
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2747);
/* harmony import */ var src_main_component_ProgramCardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9466);
/* harmony import */ var src_main_component_ArticleCardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8478);
/* harmony import */ var src_main_component_BannerContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6543);
/* harmony import */ var relay_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3098);
/* harmony import */ var relay_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(relay_hooks__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__, src_main_component_Carousel__WEBPACK_IMPORTED_MODULE_5__, _containers_layout__WEBPACK_IMPORTED_MODULE_6__]);
([_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__, src_main_component_Carousel__WEBPACK_IMPORTED_MODULE_5__, _containers_layout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const query = __webpack_require__(1039);
const MainPage = ()=>{
    const { data  } = (0,relay_hooks__WEBPACK_IMPORTED_MODULE_10__.useQuery)(query);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (router.query && router.query.code) {
            dispatch(_reduxs_AuthRedux__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getLoginKakaoRequest */ .ZP.getLoginKakaoRequest("userInfo", {
                code: router.query.code
            }));
        }
    }, [
        router.query
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_main_component_Carousel__WEBPACK_IMPORTED_MODULE_5__/* .Carousel */ .l, {
                fragmentRef: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_main_component_ProgramCardContainer__WEBPACK_IMPORTED_MODULE_7__/* .ProgramCardContainer */ .k, {
                fragmentRef: data,
                productType: "REGULAR"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_main_component_BannerContainer__WEBPACK_IMPORTED_MODULE_9__/* .BannerContainer */ .U, {
                order: "first"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_main_component_ProgramCardContainer__WEBPACK_IMPORTED_MODULE_7__/* .ProgramCardContainer */ .k, {
                fragmentRef: data,
                productType: "SEMINAR"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_main_component_ProgramCardContainer__WEBPACK_IMPORTED_MODULE_7__/* .ProgramCardContainer */ .k, {
                fragmentRef: data,
                productType: "VOD"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_main_component_BannerContainer__WEBPACK_IMPORTED_MODULE_9__/* .BannerContainer */ .U, {
                order: "second"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_main_component_ArticleCardContainer__WEBPACK_IMPORTED_MODULE_8__/* .ArticleCardContainer */ .Q, {
                fragmentRef: data
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _MainPage__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "I": () => (/* reexport safe */ _MainPage__WEBPACK_IMPORTED_MODULE_0__.I)
/* harmony export */ });
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainPage__WEBPACK_IMPORTED_MODULE_0__]);
_MainPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;