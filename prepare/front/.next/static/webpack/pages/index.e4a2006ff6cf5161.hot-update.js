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

/***/ "./components/post/PostCard.js":
/*!*************************************!*\
  !*** ./components/post/PostCard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ \"./components/post/Comment.js\");\n/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentForm */ \"./components/post/CommentForm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    _s();\n    var id = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        var ref;\n        return (ref = state.user.me) === null || ref === void 0 ? void 0 : ref.id;\n    });\n    console.log(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: [\n                    id && post.User.id === id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"수정\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"삭제\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"신고\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"content들어오는 컴포넌트\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"좋아요 버튼\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(PostCard, \"FJdoDJNyUlJ5WKWdRipc5DguCUQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QvUG9zdENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBOEI7QUFDRztBQUNPO0FBQ0U7QUFFMUMsSUFBTUksUUFBUSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTs7SUFDdEIsSUFBTUMsRUFBRSxHQUFHSCx3REFBVyxDQUFDLFNBQUNJLEtBQUs7WUFBS0EsR0FBYTtRQUFiQSxPQUFBQSxDQUFBQSxHQUFhLEdBQWJBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLGNBQWJGLEdBQWEsV0FBSSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLEdBQWEsQ0FBRUQsRUFBRTtLQUFBLENBQUM7SUFDcERJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxFQUFFLENBQUMsQ0FBQztJQUNoQixxQkFDRSw4REFBQ00sS0FBRzs7MEJBQ0YsOERBQUNaLGdEQUFJOztvQkFDRk0sRUFBRSxJQUFJRCxJQUFJLENBQUNRLElBQUksQ0FBQ1AsRUFBRSxLQUFLQSxFQUFFLGlCQUN4Qjs7MENBQ0UsOERBQUNRLFFBQU07MENBQUMsSUFBRTs7Ozs7cUNBQVM7MENBQ25CLDhEQUFDQSxRQUFNOzBDQUFDLElBQUU7Ozs7O3FDQUFTOztvQ0FDbEIsaUJBRUgsOERBQUNBLFFBQU07a0NBQUMsSUFBRTs7Ozs7NkJBQVM7a0NBR3JCLDhEQUFDRixLQUFHO2tDQUFDLGtCQUFnQjs7Ozs7NkJBQU07a0NBQzNCLDhEQUFDRSxRQUFNO2tDQUFDLFFBQU07Ozs7OzZCQUFTOzs7Ozs7cUJBQ2xCOzBCQUNQLDhEQUFDWixvREFBVzs7OztxQkFBRzswQkFDZiw4REFBQ0QsZ0RBQVE7Ozs7cUJBQUc7Ozs7OzthQUNSLENBQ047QUFDSixDQUFDO0dBdEJLRyxRQUFROztRQUNERCxvREFBVzs7O0FBRGxCQyxLQUFBQSxRQUFRO0FBd0JkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0L1Bvc3RDYXJkLmpzP2VlYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XG4gIGNvbnNvbGUubG9nKGlkKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcmQ+XG4gICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uPuyImOyglTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj7sgq3soJw8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uPuyLoOqzoDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7Lyoge3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlPXtwb3N0LkltYWdlc30gLz59ICovfVxuICAgICAgICA8ZGl2PmNvbnRlbnTrk6TslrTsmKTripQg7Lu07Y+s64SM7Yq4PC9kaXY+XG4gICAgICAgIDxidXR0b24+7KKL7JWE7JqUIOuyhO2KvDwvYnV0dG9uPlxuICAgICAgPC9DYXJkPlxuICAgICAgPENvbW1lbnRGb3JtIC8+XG4gICAgICA8Q29tbWVudHMgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJDb21tZW50cyIsIkNvbW1lbnRGb3JtIiwidXNlU2VsZWN0b3IiLCJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInN0YXRlIiwidXNlciIsIm1lIiwiY29uc29sZSIsImxvZyIsImRpdiIsIlVzZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/post/PostCard.js\n"));

/***/ })

});