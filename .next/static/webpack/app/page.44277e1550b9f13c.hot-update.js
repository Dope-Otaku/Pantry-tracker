"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"(app-pages-browser)/./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ \"(app-pages-browser)/./node_modules/@mui/system/esm/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [itemName, setItemName] = \"\";\n    const updateInventory = async ()=>{\n        const snapshot = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"inventory\"));\n        const docs = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc)=>{\n            inventoryList.push({\n                name: doc.id,\n                ...doc.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h1\",\n                children: \"Inventory Management\"\n            }, void 0, false, {\n                fileName: \"E:\\\\practice\\\\Pantry-tracker\\\\app\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            inventory.forEach((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        item.name,\n                        item.count\n                    ]\n                }, void 0, true);\n            }),\n            inventory.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        item.name,\n                        item.count\n                    ]\n                }, void 0, true);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\practice\\\\Pantry-tracker\\\\app\\\\page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"z2yPCjnpnv+Uf3uAhlCwxAxm6Ok=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFDZ0M7QUFDMUM7QUFDUztBQUNKO0FBRXhCLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBRztJQUVoQyxNQUFNQyxrQkFBa0I7UUFDdEIsTUFBTUMsV0FBV1osMERBQUtBLENBQUNILCtEQUFVQSxDQUFDTSxnREFBU0EsRUFBRTtRQUM3QyxNQUFNVSxPQUFPLE1BQU1kLDREQUFPQSxDQUFDYTtRQUMzQixNQUFNRSxnQkFBZ0IsRUFBRTtRQUN4QkQsS0FBS0UsT0FBTyxDQUFDLENBQUNDO1lBQ1pGLGNBQWNHLElBQUksQ0FBQztnQkFDakJDLE1BQU1GLElBQUlHLEVBQUU7Z0JBQ1osR0FBR0gsSUFBSUksSUFBSSxFQUFFO1lBQ2Y7UUFDRjtRQUNBZCxhQUFhUTtJQUNmO0lBRUFsQixnREFBU0EsQ0FBQztRQUNSZTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVixtREFBR0E7OzBCQUNGLDhEQUFDQyxzRkFBVUE7Z0JBQUNtQixTQUFROzBCQUFLOzs7Ozs7WUFDeEJoQixVQUFVVSxPQUFPLENBQUMsQ0FBQ087Z0JBQ2xCLHFCQUNFOzt3QkFDR0EsS0FBS0osSUFBSTt3QkFDVEksS0FBS0MsS0FBSzs7O1lBR2pCO1lBQ0NsQixVQUFVbUIsR0FBRyxDQUFDLENBQUNGO2dCQUNkLHFCQUNFOzt3QkFDR0EsS0FBS0osSUFBSTt3QkFDVEksS0FBS0MsS0FBSzs7O1lBR2pCOzs7Ozs7O0FBR047R0EzQ3dCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgRmlyZXN0b3JlLCBnZXREb2NzLCBxdWVyeSB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIkAvZmlyZWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ludmVudG9yeSwgc2V0SW52ZW50b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IFwiXCI7XG5cbiAgY29uc3QgdXBkYXRlSW52ZW50b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNuYXBzaG90ID0gcXVlcnkoY29sbGVjdGlvbihmaXJlc3RvcmUsIFwiaW52ZW50b3J5XCIpKTtcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgZ2V0RG9jcyhzbmFwc2hvdCk7XG4gICAgY29uc3QgaW52ZW50b3J5TGlzdCA9IFtdO1xuICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICBpbnZlbnRvcnlMaXN0LnB1c2goe1xuICAgICAgICBuYW1lOiBkb2MuaWQsXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRJbnZlbnRvcnkoaW52ZW50b3J5TGlzdCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVJbnZlbnRvcnkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkludmVudG9yeSBNYW5hZ2VtZW50PC9UeXBvZ3JhcGh5PlxuICAgICAge2ludmVudG9yeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICB7aXRlbS5jb3VudH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAge2ludmVudG9yeS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIHtpdGVtLmNvdW50fVxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJGaXJlc3RvcmUiLCJnZXREb2NzIiwicXVlcnkiLCJCb3giLCJUeXBvZ3JhcGh5IiwiZmlyZXN0b3JlIiwiSG9tZSIsImludmVudG9yeSIsInNldEludmVudG9yeSIsIm9wZW4iLCJzZXRPcGVuIiwiaXRlbU5hbWUiLCJzZXRJdGVtTmFtZSIsInVwZGF0ZUludmVudG9yeSIsInNuYXBzaG90IiwiZG9jcyIsImludmVudG9yeUxpc3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsIm5hbWUiLCJpZCIsImRhdGEiLCJ2YXJpYW50IiwiaXRlbSIsImNvdW50IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});