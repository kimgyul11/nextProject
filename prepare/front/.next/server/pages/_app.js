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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initialState\": () => (/* binding */ initialState)\n/* harmony export */ });\nconst initialState = {\n    mainPosts: []\n};\nconst reducer = (state = initialState, action)=>{\n    switch(action.type){\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0lBQzFCQyxTQUFTLEVBQUUsRUFBRTtDQUNkLENBQUM7QUFFRixNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSCxZQUFZLEVBQUVJLE1BQU0sR0FBSztJQUNoRCxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakI7WUFDRSxPQUFPRixLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBQ0QsaUVBQWVELE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXByb2plYy1mcm9udC8uL3JlZHVjZXJzL3Bvc3QuanM/NmZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"loginAction\": () => (/* binding */ loginAction),\n/* harmony export */   \"logoutAction\": () => (/* binding */ logoutAction)\n/* harmony export */ });\nconst initialState = {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n};\nconst loginAction = (data)=>{\n    return {\n        type: \"LOG_IN\",\n        data\n    };\n};\nconst logoutAction = ()=>{\n    return {\n        type: \"LOG_OUT\"\n    };\n};\nconst reducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"LOG_IN\":\n            return {\n                ...state,\n                isLoggedIn: true,\n                user: action.data\n            };\n        case \"LOG_OUT\":\n            return {\n                ...state,\n                isLoggedIn: false,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7SUFDMUJDLFVBQVUsRUFBRSxLQUFLO0lBQ2pCQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxTQUFTLEVBQUUsRUFBRTtDQUNkLENBQUM7QUFDSyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsSUFBSSxHQUFLO0lBQ25DLE9BQU87UUFDTEMsSUFBSSxFQUFFLFFBQVE7UUFDZEQsSUFBSTtLQUNMLENBQUM7QUFDSixDQUFDLENBQUM7QUFDSyxNQUFNRSxZQUFZLEdBQUcsSUFBTTtJQUNoQyxPQUFPO1FBQ0xELElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHVixZQUFZLEVBQUVXLE1BQU0sR0FBSztJQUNoRCxPQUFRQSxNQUFNLENBQUNKLElBQUk7UUFDakIsS0FBSyxRQUFRO1lBQ1gsT0FBTztnQkFDTCxHQUFHRyxLQUFLO2dCQUNSVCxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLElBQUksRUFBRVMsTUFBTSxDQUFDTCxJQUFJO2FBQ2xCLENBQUM7UUFDSixLQUFLLFNBQVM7WUFDWixPQUFPO2dCQUNMLEdBQUdJLEtBQUs7Z0JBQ1JULFVBQVUsRUFBRSxLQUFLO2dCQUNqQkMsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDO1FBQ0o7WUFDRSxPQUFPUSxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBRUQsaUVBQWVELE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXByb2plYy1mcm9udC8uL3JlZHVjZXJzL3VzZXIuanM/MGRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgdXNlcjogbnVsbCxcbiAgc2lnblVwRGF0YToge30sXG4gIGxvZ2luRGF0YToge30sXG59O1xuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkxPR19JTlwiLFxuICAgIGRhdGEsXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkxPR19PVVRcIixcbiAgfTtcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkxPR19JTlwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIFwiTE9HX09VVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

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