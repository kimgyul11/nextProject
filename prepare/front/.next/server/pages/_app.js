/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/gimgiyul/portfolio/nextProject/prepare/front/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_configureStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ2Y7QUFFL0IsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQU8sOERBQUNELFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztZQUFJLENBQUM7QUFDdEMsQ0FBQztBQUVELGlFQUFlSCx1RUFBaUIsQ0FBQ0MsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wcm9qZWMtZnJvbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iXSwibmFtZXMiOlsid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    index: (state = {}, action)=>{\n        switch(action.type){\n            case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n                return {\n                    ...state,\n                    ...action.payload\n                };\n            default:\n                return state;\n        }\n    },\n    user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFFZDtBQUNBO0FBRTFCLE1BQU1JLFdBQVcsR0FBR0gsc0RBQWUsQ0FBQztJQUNsQ0ksS0FBSyxFQUFFLENBQUNDLEtBQUssR0FBRyxFQUFFLEVBQUVDLE1BQU0sR0FBSztRQUM3QixPQUFRQSxNQUFNLENBQUNDLElBQUk7WUFDakIsS0FBS1IsdURBQU87Z0JBQ1YsT0FBTztvQkFBRSxHQUFHTSxLQUFLO29CQUFFLEdBQUdDLE1BQU0sQ0FBQ0UsT0FBTztpQkFBRSxDQUFDO1lBQ3pDO2dCQUNFLE9BQU9ILEtBQUssQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDREosSUFBSTtJQUNKQyxJQUFJO0NBQ0wsQ0FBQztBQUNGLGlFQUFlQyxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wcm9qZWMtZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcz9iOWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0sXG4gIHVzZXIsXG4gIHBvc3QsXG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbIkhZRFJBVEUiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsInJvb3RSZWR1Y2VyIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": () => (/* binding */ addPost),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initialState\": () => (/* binding */ initialState)\n/* harmony export */ });\nconst initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: \"coloo88@naver.com\",\n                nickname: \"김기율\"\n            },\n            content: \"첫 번째 게시글\",\n            Images: [\n                {\n                    src: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV4AaFqRIma7V3grzYG1IXW5MogxWv8cnWhJ_LE7S&s\"\n                },\n                {\n                    src: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV4AaFqRIma7V3grzYG1IXW5MogxWv8cnWhJ_LE7S&s\"\n                }, \n            ],\n            Comments: [\n                {\n                    User: {\n                        nickname: \"kim\"\n                    },\n                    content: \"어렵다 넥스트 JS\"\n                },\n                {\n                    User: {\n                        nickname: \"메롱메롱\"\n                    },\n                    content: \"하나도 안어려운데?\"\n                }, \n            ]\n        }, \n    ],\n    imagePaths: [],\n    postAdded: false\n};\nconst ADD_POST = \"ADD_POST\";\nconst addPost = {\n    type: ADD_POST\n};\nconst dummyPost = {\n    id: 123,\n    content: \"쓰레기데이터\",\n    User: {\n        id: 1,\n        nickname: \"호호호\"\n    },\n    Images: [],\n    Comment: []\n};\nconst reducer = (state = initialState, action)=>{\n    switch(action.type){\n        case ADD_POST:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost,\n                    ...state.mainPosts\n                ],\n                postAdded: true\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRztJQUMxQkMsU0FBUyxFQUFFO1FBQ1Q7WUFDRUMsRUFBRSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFO2dCQUNKRCxFQUFFLEVBQUUsbUJBQW1CO2dCQUN2QkUsUUFBUSxFQUFFLEtBQUs7YUFDaEI7WUFDREMsT0FBTyxFQUFFLFVBQVU7WUFDbkJDLE1BQU0sRUFBRTtnQkFDTjtvQkFDRUMsR0FBRyxFQUFFLG9HQUFvRztpQkFDMUc7Z0JBQ0Q7b0JBQ0VBLEdBQUcsRUFBRSxvR0FBb0c7aUJBQzFHO2FBQ0Y7WUFDREMsUUFBUSxFQUFFO2dCQUNSO29CQUNFTCxJQUFJLEVBQUU7d0JBQ0pDLFFBQVEsRUFBRSxLQUFLO3FCQUNoQjtvQkFDREMsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCO2dCQUNEO29CQUNFRixJQUFJLEVBQUU7d0JBQ0pDLFFBQVEsRUFBRSxNQUFNO3FCQUNqQjtvQkFDREMsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0RJLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUM7QUFDRixNQUFNQyxRQUFRLEdBQUcsVUFBVTtBQUNwQixNQUFNQyxPQUFPLEdBQUc7SUFDckJDLElBQUksRUFBRUYsUUFBUTtDQUNmLENBQUM7QUFFRixNQUFNRyxTQUFTLEdBQUc7SUFDaEJaLEVBQUUsRUFBRSxHQUFHO0lBQ1BHLE9BQU8sRUFBRSxRQUFRO0lBQ2pCRixJQUFJLEVBQUU7UUFDSkQsRUFBRSxFQUFFLENBQUM7UUFDTEUsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDREUsTUFBTSxFQUFFLEVBQUU7SUFDVlMsT0FBTyxFQUFFLEVBQUU7Q0FDWjtBQUVELE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdqQixZQUFZLEVBQUVrQixNQUFNLEdBQUs7SUFDaEQsT0FBUUEsTUFBTSxDQUFDTCxJQUFJO1FBQ2pCLEtBQUtGLFFBQVE7WUFDWCxPQUFPO2dCQUNMLEdBQUdNLEtBQUs7Z0JBQ1JoQixTQUFTLEVBQUU7b0JBQUNhLFNBQVM7dUJBQUtHLEtBQUssQ0FBQ2hCLFNBQVM7aUJBQUM7Z0JBQzFDUyxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDO1FBQ0o7WUFDRSxPQUFPTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBQ0QsaUVBQWVELE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXByb2plYy1mcm9udC8uL3JlZHVjZXJzL3Bvc3QuanM/NmZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IFwiY29sb284OEBuYXZlci5jb21cIixcbiAgICAgICAgbmlja25hbWU6IFwi6rmA6riw7JyoXCIsXG4gICAgICB9LFxuICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gFwiLFxuICAgICAgSW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUlBWNEFhRnFSSW1hN1YzZ3J6WUcxSVhXNU1vZ3hXdjhjbldoSl9MRTdTJnNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSUFY0QWFGcVJJbWE3VjNncnpZRzFJWFc1TW9neFd2OGNuV2hKX0xFN1Mmc1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogXCJraW1cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Ja066C164ukIOuEpeyKpO2KuCBKU1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgbmlja25hbWU6IFwi66mU66Gx66mU66GxXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiBcIu2VmOuCmOuPhCDslYjslrTroKTsmrTrjbA/XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcbmNvbnN0IEFERF9QT1NUID0gXCJBRERfUE9TVFwiO1xuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XG4gIHR5cGU6IEFERF9QT1NULFxufTtcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICBpZDogMTIzLFxuICBjb250ZW50OiBcIuyTsOugiOq4sOuNsOydtO2EsFwiLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6IFwi7Zi47Zi47Zi4XCIsXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbW1lbnQ6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcbiAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwiQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"loginAction\": () => (/* binding */ loginAction),\n/* harmony export */   \"logoutAction\": () => (/* binding */ logoutAction)\n/* harmony export */ });\nconst initialState = {\n    isLoggedIn: false,\n    me: null,\n    signUpData: {},\n    loginData: {}\n};\nconst loginAction = (data)=>{\n    return {\n        type: \"LOG_IN\",\n        data\n    };\n};\nconst logoutAction = ()=>{\n    return {\n        type: \"LOG_OUT\"\n    };\n};\nconst reducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"LOG_IN\":\n            return {\n                ...state,\n                isLoggedIn: true,\n                me: action.data\n            };\n        case \"LOG_OUT\":\n            return {\n                ...state,\n                isLoggedIn: false,\n                me: null\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7SUFDMUJDLFVBQVUsRUFBRSxLQUFLO0lBQ2pCQyxFQUFFLEVBQUUsSUFBSTtJQUNSQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxTQUFTLEVBQUUsRUFBRTtDQUNkLENBQUM7QUFDSyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsSUFBSSxHQUFLO0lBQ25DLE9BQU87UUFDTEMsSUFBSSxFQUFFLFFBQVE7UUFDZEQsSUFBSTtLQUNMLENBQUM7QUFDSixDQUFDLENBQUM7QUFDSyxNQUFNRSxZQUFZLEdBQUcsSUFBTTtJQUNoQyxPQUFPO1FBQ0xELElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHVixZQUFZLEVBQUVXLE1BQU0sR0FBSztJQUNoRCxPQUFRQSxNQUFNLENBQUNKLElBQUk7UUFDakIsS0FBSyxRQUFRO1lBQ1gsT0FBTztnQkFDTCxHQUFHRyxLQUFLO2dCQUNSVCxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLEVBQUUsRUFBRVMsTUFBTSxDQUFDTCxJQUFJO2FBQ2hCLENBQUM7UUFDSixLQUFLLFNBQVM7WUFDWixPQUFPO2dCQUNMLEdBQUdJLEtBQUs7Z0JBQ1JULFVBQVUsRUFBRSxLQUFLO2dCQUNqQkMsRUFBRSxFQUFFLElBQUk7YUFDVCxDQUFDO1FBQ0o7WUFDRSxPQUFPUSxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBRUQsaUVBQWVELE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXByb2plYy1mcm9udC8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9LFxufTtcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJMT0dfSU5cIixcbiAgICBkYXRhLFxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJMT0dfT1VUXCIsXG4gIH07XG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJMT0dfSU5cIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICBtZTogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgXCJMT0dfT1VUXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIG1lOiBudWxsLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\n\nconst configureStore = ()=>{\n    const middlewares = [];\n    const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));\n    const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n    debug: \"development\" === \"development\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNXO0FBQ0M7QUFFekI7QUFFdEMsTUFBTU0sY0FBYyxHQUFHLElBQU07SUFDM0IsTUFBTUMsV0FBVyxHQUFHLEVBQUU7SUFDdEIsTUFBTUMsUUFBUSxHQUNaQyxNQUFxQyxHQUNqQ04sQ0FBd0MsR0FDeENDLDZFQUFtQixDQUFDSCxzREFBZSxJQUFJTSxXQUFXLENBQUMsQ0FBQztJQUMxRCxNQUFNRyxLQUFLLEdBQUdSLGtEQUFXLENBQUNHLGlEQUFXLEVBQUVHLFFBQVEsQ0FBQztJQUNoRCxPQUFPRSxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTUMsT0FBTyxHQUFHWCxpRUFBYSxDQUFDTSxjQUFjLEVBQUU7SUFDNUNNLEtBQUssRUFBRUgsYUFqQkksS0FpQnFCLGFBQWE7Q0FDOUMsQ0FBQztBQUVGLGlFQUFlRSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wcm9qZWMtZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz9mMjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdO1xuICBjb25zdCBlbmhhbmNlciA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgZW5oYW5jZXIpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVdyYXBwZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicm9vdFJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJwcm9jZXNzIiwic3RvcmUiLCJ3cmFwcGVyIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();