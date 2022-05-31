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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Beans_OneDrive_Desktop_DevMountain_Web_Dev_Lab_Practice_Week_11_Day_1_Designing_React_17_Components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Beans_OneDrive_Desktop_DevMountain_Web_Dev_Lab_Practice_Week_11_Day_1_Designing_React_17_Components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Beans_OneDrive_Desktop_DevMountain_Web_Dev_Lab_Practice_Week_11_Day_1_Designing_React_17_Components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var onFavoriteToggle = function onFavoriteToggle(id) {\n        var speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        var speakerRecUpdated = _objectSpread({}, speakersRecPrevious, {\n            favorite: !speakersRecPrevious.favorite\n        });\n        var speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), speakersData = ref[0], setSpeakersData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), hasErrored = ref2[0], setHasErrored = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), error = ref3[0], setError = ref3[1];\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, ms);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        function delayFunc() {\n            return _delayFunc.apply(this, arguments);\n        }\n        function _delayFunc() {\n            _delayFunc = _asyncToGenerator(C_Users_Beans_OneDrive_Desktop_DevMountain_Web_Dev_Lab_Practice_Week_11_Day_1_Designing_React_17_Components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_Beans_OneDrive_Desktop_DevMountain_Web_Dev_Lab_Practice_Week_11_Day_1_Designing_React_17_Components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(2000);\n                        case 3:\n                            setIsLoading(false);\n                            setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);\n                            _ctx.next = 11;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setIsLoading(false);\n                            setHasErrored(t);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return _delayFunc.apply(this, arguments);\n        }\n        delayFunc();\n    }, []);\n    if (isLoading === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 44,\n        columnNumber: 34\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Beans\\\\OneDrive\\\\Desktop\\\\DevMountain\\\\Web-Dev\\\\Lab-Practice\\\\Week-11\\\\Day-1\\\\Designing React 17 Components\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"/yVVtZtPdtfj0wIbmvkcbPWAI8A=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFDRzs7QUFFNUMsU0FBU0ksWUFBWSxDQUFDLEtBQWdCLEVBQUU7UUFBbEIsWUFBYyxHQUFkLEtBQWdCLENBQWRDLFlBQVk7UUF5QnpCQyxnQkFBZ0IsR0FBekIsU0FBU0EsZ0JBQWdCLENBQUNDLEVBQUUsRUFBRTtRQUM1QixJQUFNQyxtQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxJQUFJLENBQUMsU0FBVUMsR0FBRyxFQUFFO1lBQzNELE9BQU9BLEdBQUcsQ0FBQ0osRUFBRSxLQUFLQSxFQUFFO1NBQ3JCLENBQUM7UUFDRixJQUFNSyxpQkFBaUIsR0FBRyxrQkFDckJKLG1CQUFtQjtZQUN0QkssUUFBUSxFQUFFLENBQUNMLG1CQUFtQixDQUFDSyxRQUFRO1VBQ3hDO1FBQ0QsSUFBTUMsZUFBZSxHQUFHTCxZQUFZLENBQUNNLEdBQUcsQ0FBQyxTQUFVSixHQUFHLEVBQUU7WUFDdEQsT0FBT0EsR0FBRyxDQUFDSixFQUFFLEtBQUtBLEVBQUUsR0FBR0ssaUJBQWlCLEdBQUdELEdBQUcsQ0FBQztTQUNoRCxDQUFDO1FBQ0ZLLGVBQWUsQ0FBQ0YsZUFBZSxDQUFDO0tBQ2pDOztJQXBDRCxJQUF3Q1osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUx0RCxZQUtxQixHQUFxQkEsR0FBWSxHQUFqQyxFQUxyQixlQUtzQyxHQUFJQSxHQUFZLEdBQWhCO0lBQ3BDLElBQWtDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBTmxELFNBTWtCLEdBQWtCQSxJQUFjLEdBQWhDLEVBTmxCLFlBTWdDLEdBQUlBLElBQWMsR0FBbEI7SUFDOUIsSUFBb0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFQckQsVUFPbUIsR0FBbUJBLElBQWUsR0FBbEMsRUFQbkIsYUFPa0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNoQyxJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVJ4QyxLQVFjLEdBQWNBLElBQVksR0FBMUIsRUFSZCxRQVF3QixHQUFJQSxJQUFZLEdBQWhCO0lBRXRCLElBQU1xQixLQUFLLEdBQUcsU0FBQ0MsRUFBRTtlQUFLLElBQUlDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPO21CQUFLQyxVQUFVLENBQUVELE9BQU8sRUFBRUYsRUFBRSxDQUFDO1NBQUEsQ0FBQztLQUFBO0lBR3hFckIsZ0RBQVMsQ0FBQyxXQUFNO2lCQUVDeUIsU0FBUzttQkFBVEEsVUFBUzs7aUJBQVRBLFVBQVM7WUFBVEEsVUFBUyxHQUF4Qiw0UEFBMkI7Ozs7OzttQ0FFbkJMLEtBQUssQ0FBQyxJQUFJLENBQUM7OzRCQUNqQkwsWUFBWSxDQUFDLEtBQUssQ0FBQzs0QkFDbkJGLGVBQWUsQ0FBQ2YsOENBQUksQ0FBQyxDQUFDOzs7Ozs7NEJBRXBCaUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNwQkUsYUFBYSxDQUFDUyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O2FBRXJCO21CQVRnQkQsVUFBUzs7UUFVeEJBLFNBQVMsRUFBRSxDQUFDO0tBRWIsRUFBQyxFQUFFLENBQUMsQ0FBQztJQWdCTixJQUFJWCxTQUFTLEtBQUssSUFBSSxFQUFFLHFCQUFPLDhEQUFDYSxLQUFHO2tCQUFDLFlBQVU7Ozs7O1lBQU07SUFHcEQscUJBQ0UsOERBQUNBLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlCQUF5QjtrQkFDdEMsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEtBQUs7c0JBQ2pCdEIsWUFBWSxDQUFDTSxHQUFHLENBQUMsU0FBVWlCLE9BQU8sRUFBRTtnQkFDbkMscUJBQ0UsOERBQUNoQyxnREFBTztvQkFFTmdDLE9BQU8sRUFBRUEsT0FBTztvQkFDaEIzQixZQUFZLEVBQUVBLFlBQVk7b0JBQzFCQyxnQkFBZ0IsRUFBRyxXQUFNO3dCQUN2QkEsZ0JBQWdCLENBQUMwQixPQUFPLENBQUN6QixFQUFFLENBQUM7cUJBQzdCO21CQUxJeUIsT0FBTyxDQUFDekIsRUFBRTs7Ozt3QkFNZixDQUNGO2FBQ0gsQ0FBQzs7Ozs7Z0JBQ0U7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBNURRSCxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUE4RHJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XHJcbiAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2hhc0Vycm9yZWQsIHNldEhhc0Vycm9yZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQgKHJlc29sdmUsIG1zKSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICBhd2FpdCBkZWxheSgyMDAwKVxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SGFzRXJyb3JlZCh0KVxyXG4gICAgfVxyXG4gIH1cclxuICAgIGRlbGF5RnVuYygpO1xyXG5cclxuICB9LFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xyXG4gICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XHJcbiAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXHJcbiAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xyXG4gICAgfSk7XHJcbiAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzTG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDtcclxuIl0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwic3BlYWtlcnNEYXRhIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzZXRTcGVha2Vyc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwic2V0SGFzRXJyb3JlZCIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwidCIsImRpdiIsImNsYXNzTmFtZSIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ })

});