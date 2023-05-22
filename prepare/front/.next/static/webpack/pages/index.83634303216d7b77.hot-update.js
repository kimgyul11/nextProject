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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ \"./components/post/Comment.js\");\n/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentForm */ \"./components/post/CommentForm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ \"./components/post/PostImages.js\");\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/Avatar */ \"./components/ui/Avatar.js\");\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ui_Avatar__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    _s();\n    var id = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        var ref;\n        return (ref = state.user.me) === null || ref === void 0 ? void 0 : ref.id;\n    });\n    console.log(id, post.User.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ui_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                    fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                id && post.User.id === id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"수정\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"삭제\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"신고\"\n                }, void 0, false, {\n                    fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this),\n                post.Images[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostImages__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    image: post.Images\n                }, void 0, false, {\n                    fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                    lineNumber: 24,\n                    columnNumber: 28\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"content들어오는 컴포넌트\"\n                }, void 0, false, {\n                    fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"좋아요 버튼\"\n                }, void 0, false, {\n                    fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/post/PostCard.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(PostCard, \"FJdoDJNyUlJ5WKWdRipc5DguCUQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QvUG9zdENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBOEI7QUFDRztBQUNPO0FBQ0U7QUFDSjtBQUNKO0FBRWxDLElBQU1NLFFBQVEsR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBQ3RCLElBQU1DLEVBQUUsR0FBR0wsd0RBQVcsQ0FBQyxTQUFDTSxLQUFLO1lBQUtBLEdBQWE7UUFBYkEsT0FBQUEsQ0FBQUEsR0FBYSxHQUFiQSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsRUFBRSxjQUFiRixHQUFhLFdBQUksR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxHQUFhLENBQUVELEVBQUU7S0FBQSxDQUFDO0lBQ3BESSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsRUFBRSxFQUFFRCxJQUFJLENBQUNPLElBQUksQ0FBQ04sRUFBRSxDQUFDLENBQUM7SUFFOUIscUJBQ0U7a0JBQ0UsNEVBQUNSLGdEQUFJOzs4QkFDSCw4REFBQ0ssbURBQU07Ozs7eUJBQUc7Z0JBQ1RHLEVBQUUsSUFBSUQsSUFBSSxDQUFDTyxJQUFJLENBQUNOLEVBQUUsS0FBS0EsRUFBRSxpQkFDeEI7O3NDQUNFLDhEQUFDTyxRQUFNO3NDQUFDLElBQUU7Ozs7O2lDQUFTO3NDQUNuQiw4REFBQ0EsUUFBTTtzQ0FBQyxJQUFFOzs7OztpQ0FBUzs7Z0NBQ2xCLGlCQUVILDhEQUFDQSxRQUFNOzhCQUFDLElBQUU7Ozs7O3lCQUFTO2dCQUVwQlIsSUFBSSxDQUFDUyxNQUFNLENBQUMsQ0FBQyxDQUFDLGtCQUFJLDhEQUFDWixtREFBVTtvQkFBQ2EsS0FBSyxFQUFFVixJQUFJLENBQUNTLE1BQU07Ozs7O3lCQUFJOzhCQUNyRCw4REFBQ0UsS0FBRzs4QkFBQyxrQkFBZ0I7Ozs7O3lCQUFNOzhCQUMzQiw4REFBQ0gsUUFBTTs4QkFBQyxRQUFNOzs7Ozt5QkFBUzs4QkFDdkIsOERBQUNiLG9EQUFXOzs7O3lCQUFHOzhCQUNmLDhEQUFDRCxnREFBUTs7Ozt5QkFBRzs7Ozs7O2lCQUNQO3FCQUNOLENBQ0g7QUFDSixDQUFDO0dBeEJLSyxRQUFROztRQUNESCxvREFBVzs7O0FBRGxCRyxLQUFBQSxRQUFRO0FBMEJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0L1Bvc3RDYXJkLmpzP2VlYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi91aS9BdmF0YXJcIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcbiAgY29uc29sZS5sb2coaWQsIHBvc3QuVXNlci5pZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxBdmF0YXIgLz5cbiAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24+7IiY7KCVPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPuyCreygnDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b24+7Iug6rOgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZT17cG9zdC5JbWFnZXN9IC8+fVxuICAgICAgICA8ZGl2PmNvbnRlbnTrk6TslrTsmKTripQg7Lu07Y+s64SM7Yq4PC9kaXY+XG4gICAgICAgIDxidXR0b24+7KKL7JWE7JqUIOuyhO2KvDwvYnV0dG9uPlxuICAgICAgICA8Q29tbWVudEZvcm0gLz5cbiAgICAgICAgPENvbW1lbnRzIC8+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJuYW1lcyI6WyJDYXJkIiwiQ29tbWVudHMiLCJDb21tZW50Rm9ybSIsInVzZVNlbGVjdG9yIiwiUG9zdEltYWdlcyIsIkF2YXRhciIsIlBvc3RDYXJkIiwicG9zdCIsImlkIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJjb25zb2xlIiwibG9nIiwiVXNlciIsImJ1dHRvbiIsIkltYWdlcyIsImltYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post/PostCard.js\n"));

/***/ }),

/***/ "./components/ui/Avatar.js":
/*!*********************************!*\
  !*** ./components/ui/Avatar.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});