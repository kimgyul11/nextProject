"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_SmallButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/SmallButton */ \"./components/ui/SmallButton.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar LoginForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), id = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var onChangeId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(e) {\n        setId(e.target.value);\n        console.log(id);\n    }, []);\n    var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(e) {\n        setPassword(e.target.value);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"user-id\",\n                        children: \"아이디\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"user_id\",\n                        value: id,\n                        onChange: onChangeId\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"user-id\",\n                        children: \"비밀번호\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"user_id\",\n                        value: password,\n                        onChange: onChangePassword\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_SmallButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"로그인\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/signup\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_SmallButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"회원가입\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/components/LoginForm.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(LoginForm, \"fpYoFxIqaOKeN7vXbgrUG+MC68E=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBNkI7QUFDd0I7QUFDVjtBQUUzQyxJQUFNSyxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBb0JGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBekJHLEVBQUUsR0FBV0gsR0FBWSxHQUF2QixFQUFFSSxLQUFLLEdBQUlKLEdBQVksR0FBaEI7SUFDaEIsSUFBZ0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckNLLFFBQVEsR0FBaUJMLElBQVksR0FBN0IsRUFBRU0sV0FBVyxHQUFJTixJQUFZLEdBQWhCO0lBRTVCLElBQU1PLFVBQVUsR0FBR1Isa0RBQVcsQ0FBQyxTQUFDUyxDQUFDLEVBQUs7UUFDcENKLEtBQUssQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLElBQU1VLGdCQUFnQixHQUFHZCxrREFBVyxDQUFDLFNBQUNTLENBQUMsRUFBSztRQUMxQ0YsV0FBVyxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLHFCQUNFLDhEQUFDSSxNQUFJOzswQkFDSCw4REFBQ0MsS0FBRzs7a0NBQ0YsOERBQUNDLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxTQUFTO2tDQUFDLEtBQUc7Ozs7OzZCQUFRO2tDQUNwQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hDLElBQUksRUFBQyxTQUFTO3dCQUNkVixLQUFLLEVBQUVQLEVBQUU7d0JBQ1RrQixRQUFRLEVBQUVkLFVBQVU7Ozs7OzZCQUNiOzs7Ozs7cUJBQ0w7MEJBQ04sOERBQUNRLEtBQUc7O2tDQUNGLDhEQUFDQyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsU0FBUztrQ0FBQyxNQUFJOzs7Ozs2QkFBUTtrQ0FDckMsOERBQUNDLE9BQUs7d0JBQ0pDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxJQUFJLEVBQUMsU0FBUzt3QkFDZFYsS0FBSyxFQUFFTCxRQUFRO3dCQUNmZ0IsUUFBUSxFQUFFUixnQkFBZ0I7Ozs7OzZCQUNuQjs7Ozs7O3FCQUNMOzBCQUNOLDhEQUFDRSxLQUFHOztrQ0FDRiw4REFBQ2QsdURBQVc7d0JBQUNxQixJQUFJLEVBQUMsS0FBSzs7Ozs7NkJBQUc7a0NBQzFCLDhEQUFDekIsa0RBQUk7d0JBQUMwQixJQUFJLEVBQUMsU0FBUztrQ0FDbEIsNEVBQUNDLEdBQUM7c0NBQ0EsNEVBQUN2Qix1REFBVztnQ0FBQ3FCLElBQUksRUFBQyxNQUFNOzs7OztxQ0FBRzs7Ozs7aUNBQ3pCOzs7Ozs2QkFDQzs7Ozs7O3FCQUNIOzs7Ozs7YUFDRCxDQUNQO0FBQ0osQ0FBQztHQXpDS3BCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQTJDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzP2VjZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNtYWxsQnV0dG9uIGZyb20gXCIuL3VpL1NtYWxsQnV0dG9uXCI7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VyX2lkXCJcbiAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSWR9XG4gICAgICAgID48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VyX2lkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgID48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U21hbGxCdXR0b24gdGV4dD1cIuuhnOq3uOyduFwiIC8+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8U21hbGxCdXR0b24gdGV4dD1cIu2ajOybkOqwgOyehVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIlNtYWxsQnV0dG9uIiwiTG9naW5Gb3JtIiwiaWQiLCJzZXRJZCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkNoYW5nZUlkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJmb3JtIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwidGV4dCIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n"));

/***/ })

});