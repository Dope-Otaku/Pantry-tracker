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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"(app-pages-browser)/./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ \"(app-pages-browser)/./node_modules/@mui/system/esm/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [itemName, setItemName] = \"\";\n    const updateInventory = async ()=>{\n        const snapshot = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"inventory\"));\n        const docs = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc1)=>{\n            inventoryList.push({\n                name: doc1.id,\n                ...doc1.data()\n            });\n        });\n        setInventory(inventoryList);\n    // console.log(inventory);\n    };\n    const removeItem = async (item)=>{\n        const docRef = doc((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"inventory\"), item);\n        const docSnap = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            if (quantity === 1) {\n                await deleteDoc(docRef);\n            } else {\n                await setDoc(docRef, {\n                    quantity: quantity - 1\n                });\n            }\n        }\n        await updateInventory();\n    };\n    const addItem = async (item)=>{\n        const docRef = doc((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"inventory\"), item);\n        const docSnap = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            await setDoc(docRef, {\n                quantity: quantity + 1\n            });\n        } else {\n            await setDoc(docRef, {\n                quantity: 1\n            });\n        }\n        await updateInventory();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    // console.log(updateInventory);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        justifyContent: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h1\",\n                children: \"Inventory Management\"\n            }, void 0, false, {\n                fileName: \"E:\\\\practice\\\\Pantry-tracker\\\\app\\\\page.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            inventory.forEach((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        item.name,\n                        item.count\n                    ]\n                }, void 0, true);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\practice\\\\Pantry-tracker\\\\app\\\\page.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"z2yPCjnpnv+Uf3uAhlCwxAxm6Ok=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFPZjtBQUNLO0FBQ1M7QUFDSjtBQUV4QixTQUFTVzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUc7SUFFaEMsTUFBTUMsa0JBQWtCO1FBQ3RCLE1BQU1DLFdBQVdaLDBEQUFLQSxDQUFDSiwrREFBVUEsQ0FBQ08sZ0RBQVNBLEVBQUU7UUFDN0MsTUFBTVUsT0FBTyxNQUFNZCw0REFBT0EsQ0FBQ2E7UUFDM0IsTUFBTUUsZ0JBQWdCLEVBQUU7UUFDeEJELEtBQUtFLE9BQU8sQ0FBQyxDQUFDQztZQUNaRixjQUFjRyxJQUFJLENBQUM7Z0JBQ2pCQyxNQUFNRixLQUFJRyxFQUFFO2dCQUNaLEdBQUdILEtBQUlJLElBQUksRUFBRTtZQUNmO1FBQ0Y7UUFDQWQsYUFBYVE7SUFDYiwwQkFBMEI7SUFDNUI7SUFFQSxNQUFNTyxhQUFhLE9BQU9DO1FBQ3hCLE1BQU1DLFNBQVNQLElBQUlwQiwrREFBVUEsQ0FBQ08sZ0RBQVNBLEVBQUUsY0FBY21CO1FBQ3ZELE1BQU1FLFVBQVUsTUFBTTFCLDJEQUFNQSxDQUFDeUI7UUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO1lBQ3BCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdGLFFBQVFKLElBQUk7WUFDakMsSUFBSU0sYUFBYSxHQUFHO2dCQUNsQixNQUFNQyxVQUFVSjtZQUNsQixPQUFPO2dCQUNMLE1BQU1LLE9BQU9MLFFBQVE7b0JBQUVHLFVBQVVBLFdBQVc7Z0JBQUU7WUFDaEQ7UUFDRjtRQUNBLE1BQU1mO0lBQ1I7SUFFQSxNQUFNa0IsVUFBVSxPQUFPUDtRQUNyQixNQUFNQyxTQUFTUCxJQUFJcEIsK0RBQVVBLENBQUNPLGdEQUFTQSxFQUFFLGNBQWNtQjtRQUN2RCxNQUFNRSxVQUFVLE1BQU0xQiwyREFBTUEsQ0FBQ3lCO1FBRTdCLElBQUlDLFFBQVFDLE1BQU0sSUFBSTtZQUNwQixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRixRQUFRSixJQUFJO1lBQ2pDLE1BQU1RLE9BQU9MLFFBQVE7Z0JBQUVHLFVBQVVBLFdBQVc7WUFBRTtRQUNoRCxPQUFPO1lBQ0wsTUFBTUUsT0FBT0wsUUFBUTtnQkFBRUcsVUFBVTtZQUFFO1FBQ3JDO1FBQ0EsTUFBTWY7SUFDUjtJQUVBaEIsZ0RBQVNBLENBQUM7UUFDUmdCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsZ0NBQWdDO0lBRWhDLE1BQU1tQixhQUFhLElBQU10QixRQUFRO0lBQ2pDLE1BQU11QixjQUFjLElBQU12QixRQUFRO0lBRWxDLHFCQUNFLDhEQUFDUCxtREFBR0E7UUFBQytCLE9BQU07UUFBUUMsUUFBTztRQUFRQyxTQUFRO1FBQU9DLGdCQUFlOzswQkFDOUQsOERBQUNqQyxzRkFBVUE7Z0JBQUNrQyxTQUFROzBCQUFLOzs7Ozs7WUFDeEIvQixVQUFVVSxPQUFPLENBQUMsQ0FBQ087Z0JBQ2xCLHFCQUNFOzt3QkFDR0EsS0FBS0osSUFBSTt3QkFDVEksS0FBS2UsS0FBSzs7O1lBR2pCOzs7Ozs7O0FBSU47R0FyRXdCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgY29sbGVjdGlvbixcbiAgRmlyZXN0b3JlLFxuICBnZXREb2MsXG4gIGdldERvY3MsXG4gIHF1ZXJ5LFxufSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJAL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnZlbnRvcnksIHNldEludmVudG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2l0ZW1OYW1lLCBzZXRJdGVtTmFtZV0gPSBcIlwiO1xuXG4gIGNvbnN0IHVwZGF0ZUludmVudG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IHF1ZXJ5KGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcImludmVudG9yeVwiKSk7XG4gICAgY29uc3QgZG9jcyA9IGF3YWl0IGdldERvY3Moc25hcHNob3QpO1xuICAgIGNvbnN0IGludmVudG9yeUxpc3QgPSBbXTtcbiAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgaW52ZW50b3J5TGlzdC5wdXNoKHtcbiAgICAgICAgbmFtZTogZG9jLmlkLFxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0SW52ZW50b3J5KGludmVudG9yeUxpc3QpO1xuICAgIC8vIGNvbnNvbGUubG9nKGludmVudG9yeSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgY29uc3QgZG9jUmVmID0gZG9jKGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcImludmVudG9yeVwiKSwgaXRlbSk7XG4gICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xuXG4gICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHtcbiAgICAgIGNvbnN0IHsgcXVhbnRpdHkgfSA9IGRvY1NuYXAuZGF0YSgpO1xuICAgICAgaWYgKHF1YW50aXR5ID09PSAxKSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZURvYyhkb2NSZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgc2V0RG9jKGRvY1JlZiwgeyBxdWFudGl0eTogcXVhbnRpdHkgLSAxIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB1cGRhdGVJbnZlbnRvcnkoKTtcbiAgfTtcblxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUsIFwiaW52ZW50b3J5XCIpLCBpdGVtKTtcbiAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XG5cbiAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkge1xuICAgICAgY29uc3QgeyBxdWFudGl0eSB9ID0gZG9jU25hcC5kYXRhKCk7XG4gICAgICBhd2FpdCBzZXREb2MoZG9jUmVmLCB7IHF1YW50aXR5OiBxdWFudGl0eSArIDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHsgcXVhbnRpdHk6IDEgfSk7XG4gICAgfVxuICAgIGF3YWl0IHVwZGF0ZUludmVudG9yeSgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlSW52ZW50b3J5KCk7XG4gIH0sIFtdKTtcbiAgLy8gY29uc29sZS5sb2codXBkYXRlSW52ZW50b3J5KTtcblxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0T3Blbih0cnVlKTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+SW52ZW50b3J5IE1hbmFnZW1lbnQ8L1R5cG9ncmFwaHk+XG4gICAgICB7aW52ZW50b3J5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIHtpdGVtLmNvdW50fVxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICB7Lyoge2ludmVudG9yeS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSl9ICovfVxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9uIiwiRmlyZXN0b3JlIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInF1ZXJ5IiwiQm94IiwiVHlwb2dyYXBoeSIsImZpcmVzdG9yZSIsIkhvbWUiLCJpbnZlbnRvcnkiLCJzZXRJbnZlbnRvcnkiLCJvcGVuIiwic2V0T3BlbiIsIml0ZW1OYW1lIiwic2V0SXRlbU5hbWUiLCJ1cGRhdGVJbnZlbnRvcnkiLCJzbmFwc2hvdCIsImRvY3MiLCJpbnZlbnRvcnlMaXN0IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJuYW1lIiwiaWQiLCJkYXRhIiwicmVtb3ZlSXRlbSIsIml0ZW0iLCJkb2NSZWYiLCJkb2NTbmFwIiwiZXhpc3RzIiwicXVhbnRpdHkiLCJkZWxldGVEb2MiLCJzZXREb2MiLCJhZGRJdGVtIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50IiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});