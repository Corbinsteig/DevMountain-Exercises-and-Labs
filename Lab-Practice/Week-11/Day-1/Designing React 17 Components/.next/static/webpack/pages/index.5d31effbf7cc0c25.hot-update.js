"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    var favorite = param.favorite;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 32,\n        columnNumber: 7\n    }, this);\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 49,\n        columnNumber: 7\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker, showSessions = param.showSessions;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 80,\n        columnNumber: 7\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkMsQ0FDTjtDQUNIO0FBWlFvQixNQUFBQSxPQUFPO0FBY2hCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7IGlkLCBmaXJzdCwgbGFzdCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoeyBmYXZvcml0ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3Moe1xyXG4gICAgZmlyc3QsXHJcbiAgICBsYXN0LFxyXG4gICAgYmlvLFxyXG4gICAgY29tcGFueSxcclxuICAgIHR3aXR0ZXJIYW5kbGUsXHJcbiAgICBmYXZvcml0ZSxcclxuICB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTcGVha2VyRmF2b3JpdGVcclxuICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHtiaW99XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHNob3dTZXNzaW9ucyB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cclxuICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyBcclxuICAgICAgICA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFNwZWFrZXIiXSwibmFtZXMiOlsiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic3BlYWtlciIsInNob3dTZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});