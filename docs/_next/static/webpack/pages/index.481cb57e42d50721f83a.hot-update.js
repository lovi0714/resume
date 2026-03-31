webpackHotUpdate_N_E("pages/index",{

/***/ "./component/etc/index.tsx":
/*!*********************************!*\
  !*** ./component/etc/index.tsx ***!
  \*********************************/
/*! exports provided: Etc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Etc", function() { return Etc; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_CommonSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/CommonSection */ "./component/common/CommonSection.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./component/common/index.tsx");
/* harmony import */ var _common_CommonRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CommonRow */ "./component/common/CommonRow.tsx");
/* harmony import */ var _common_Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Util */ "./component/common/Util.ts");
/* harmony import */ var _common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/PreProcessingComponent */ "./component/common/PreProcessingComponent.tsx");


var _jsxFileName = "C:\\Users\\hoin\\resume\\resume\\component\\etc\\index.tsx";






var Etc = {
  Component: function Component(_ref) {
    var payload = _ref.payload;
    return Object(_common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_6__["PreProcessingComponent"])({
      payload: payload,
      component: _Component
    });
  }
};

function _Component(_ref2) {
  var payload = _ref2.payload;
  var certifications = payload.list.filter(function (item) {
    return item.category === 'CERTIFICATION';
  });
  var trainings = payload.list.filter(function (item) {
    return item.category === 'TRAINING';
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
      title: "CERTIFICATION",
      items: certifications
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
      title: "TRAINING",
      items: trainings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

function Section(_ref3) {
  var title = _ref3.title,
      items = _ref3.items;

  if (!items.length) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_CommonSection__WEBPACK_IMPORTED_MODULE_2__["CommonSection"], {
    title: title,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemRows, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_c = Section;

function ItemRows(_ref4) {
  var _this = this;

  var items = _ref4.items;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common__WEBPACK_IMPORTED_MODULE_3__["EmptyRowCol"], {
    children: items.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_CommonRow__WEBPACK_IMPORTED_MODULE_4__["CommonRows"], {
        payload: serialize(item),
        index: index
      }, index.toString(), false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_c2 = ItemRows;

function serialize(item) {
  var DATE_FORMAT = _common_Util__WEBPACK_IMPORTED_MODULE_5__["default"].LUXON_DATE_FORMAT;
  var startedAt = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);

  var title = function () {
    if (item.endedAt) {
      var endedAt = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
      return "".concat(startedAt, " ~ ").concat(endedAt);
    }

    return startedAt;
  }();

  return {
    left: {
      title: title
    },
    right: {
      title: item.title,
      subTitle: item.subTitle
    }
  };
}

var _c, _c2;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "ItemRows");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./payload/etc.ts":
/*!************************!*\
  !*** ./payload/etc.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var etc = {
  disable: false,
  list: [{
    category: 'CERTIFICATION',
    title: 'SQLD',
    subTitle: '한국데이터베이스진흥센터',
    startedAt: '2025-04'
  }, {
    category: 'TRAINING',
    title: '쌍용교육센터 수료',
    subTitle: '자바 기반 AWS 클라우드 활용 Full-Stack 개발자 양성 과정',
    startedAt: '2021-11',
    endedAt: '2022-04'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (etc);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2V0Yy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BheWxvYWQvZXRjLnRzIl0sIm5hbWVzIjpbIkV0YyIsIkNvbXBvbmVudCIsInBheWxvYWQiLCJQcmVQcm9jZXNzaW5nQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY2VydGlmaWNhdGlvbnMiLCJsaXN0IiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5IiwidHJhaW5pbmdzIiwiU2VjdGlvbiIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJJdGVtUm93cyIsIm1hcCIsImluZGV4Iiwic2VyaWFsaXplIiwidG9TdHJpbmciLCJEQVRFX0ZPUk1BVCIsIlV0aWwiLCJMVVhPTl9EQVRFX0ZPUk1BVCIsInN0YXJ0ZWRBdCIsIkRhdGVUaW1lIiwiZnJvbUZvcm1hdCIsIllZWVlfTEwiLCJ0b0Zvcm1hdCIsIllZWVlfRE9UX0xMIiwiZW5kZWRBdCIsImxlZnQiLCJyaWdodCIsInN1YlRpdGxlIiwiZXRjIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS08sSUFBTUEsR0FBRyxHQUFHO0FBQ2pCQyxXQUFTLEVBQUUseUJBQTBEO0FBQUEsUUFBdkRDLE9BQXVELFFBQXZEQSxPQUF1RDtBQUNuRSxXQUFPQyw2RkFBc0IsQ0FBVTtBQUNyQ0QsYUFBTyxFQUFQQSxPQURxQztBQUVyQ0UsZUFBUyxFQUFFSDtBQUYwQixLQUFWLENBQTdCO0FBSUQ7QUFOZ0IsQ0FBWjs7QUFTUCxTQUFTQSxVQUFULFFBQXlFO0FBQUEsTUFBcERDLE9BQW9ELFNBQXBEQSxPQUFvRDtBQUN2RSxNQUFNRyxjQUFjLEdBQUdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhQyxNQUFiLENBQW9CLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLFFBQUwsS0FBa0IsZUFBNUI7QUFBQSxHQUFwQixDQUF2QjtBQUNBLE1BQU1DLFNBQVMsR0FBR1IsT0FBTyxDQUFDSSxJQUFSLENBQWFDLE1BQWIsQ0FBb0IsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0MsUUFBTCxLQUFrQixVQUE1QjtBQUFBLEdBQXBCLENBQWxCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFDLGVBQWY7QUFBK0IsV0FBSyxFQUFFSjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFDLFVBQWY7QUFBMEIsV0FBSyxFQUFFSztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQU1EOztBQUVELFNBQVNDLE9BQVQsUUFBcUU7QUFBQSxNQUFsREMsS0FBa0QsU0FBbERBLEtBQWtEO0FBQUEsTUFBM0NDLEtBQTJDLFNBQTNDQSxLQUEyQzs7QUFDbkUsTUFBSSxDQUFDQSxLQUFLLENBQUNDLE1BQVgsRUFBbUI7QUFDakIsd0JBQU8sdUpBQVA7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxtRUFBRDtBQUFlLFNBQUssRUFBRUYsS0FBdEI7QUFBQSwyQkFDRSxxRUFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBVlFGLE87O0FBWVQsU0FBU0ksUUFBVCxRQUFnRDtBQUFBOztBQUFBLE1BQTVCRixLQUE0QixTQUE1QkEsS0FBNEI7QUFDOUMsc0JBQ0UscUVBQUMsbURBQUQ7QUFBQSxjQUNHQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDUixJQUFELEVBQU9TLEtBQVAsRUFBaUI7QUFDMUIsMEJBQU8scUVBQUMsNERBQUQ7QUFBbUMsZUFBTyxFQUFFQyxTQUFTLENBQUNWLElBQUQsQ0FBckQ7QUFBNkQsYUFBSyxFQUFFUztBQUFwRSxTQUFpQkEsS0FBSyxDQUFDRSxRQUFOLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7TUFSUUosUTs7QUFVVCxTQUFTRyxTQUFULENBQW1CVixJQUFuQixFQUE2QztBQUMzQyxNQUFNWSxXQUFXLEdBQUdDLG9EQUFJLENBQUNDLGlCQUF6QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MsOENBQVEsQ0FBQ0MsVUFBVCxDQUFvQmpCLElBQUksQ0FBQ2UsU0FBekIsRUFBb0NILFdBQVcsQ0FBQ00sT0FBaEQsRUFBeURDLFFBQXpELENBQ2hCUCxXQUFXLENBQUNRLFdBREksQ0FBbEI7O0FBR0EsTUFBTWhCLEtBQUssR0FBSSxZQUFNO0FBQ25CLFFBQUlKLElBQUksQ0FBQ3FCLE9BQVQsRUFBa0I7QUFDaEIsVUFBTUEsT0FBTyxHQUFHTCw4Q0FBUSxDQUFDQyxVQUFULENBQW9CakIsSUFBSSxDQUFDcUIsT0FBekIsRUFBa0NULFdBQVcsQ0FBQ00sT0FBOUMsRUFBdURDLFFBQXZELENBQ2RQLFdBQVcsQ0FBQ1EsV0FERSxDQUFoQjtBQUdBLHVCQUFVTCxTQUFWLGdCQUF5Qk0sT0FBekI7QUFDRDs7QUFDRCxXQUFPTixTQUFQO0FBQ0QsR0FSYSxFQUFkOztBQVVBLFNBQU87QUFDTE8sUUFBSSxFQUFFO0FBQ0psQixXQUFLLEVBQUxBO0FBREksS0FERDtBQUlMbUIsU0FBSyxFQUFFO0FBQ0xuQixXQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FEUDtBQUVMb0IsY0FBUSxFQUFFeEIsSUFBSSxDQUFDd0I7QUFGVjtBQUpGLEdBQVA7QUFTRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUQ7QUFBQSxrREFBTUMsR0FBaUIsR0FBRztBQUN4QkMsU0FBTyxFQUFFLEtBRGU7QUFHeEI1QixNQUFJLEVBQUUsQ0FDSjtBQUNFRyxZQUFRLEVBQUUsZUFEWjtBQUVFRyxTQUFLLEVBQUUsTUFGVDtBQUdFb0IsWUFBUSxFQUFFLGNBSFo7QUFJRVQsYUFBUyxFQUFFO0FBSmIsR0FESSxFQU9KO0FBQ0VkLFlBQVEsRUFBRSxVQURaO0FBRUVHLFNBQUssRUFBRSxXQUZUO0FBR0VvQixZQUFRLEVBQUUsd0NBSFo7QUFJRVQsYUFBUyxFQUFFLFNBSmI7QUFLRU0sV0FBTyxFQUFFO0FBTFgsR0FQSTtBQUhrQixDQUExQjtBQW9CZUksa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDgxY2I1N2U0MmQ1MDcyMWY4M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21tb25TZWN0aW9uIH0gZnJvbSAnLi4vY29tbW9uL0NvbW1vblNlY3Rpb24nO1xuaW1wb3J0IHsgRW1wdHlSb3dDb2wgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgQ29tbW9uUm93cyB9IGZyb20gJy4uL2NvbW1vbi9Db21tb25Sb3cnO1xuaW1wb3J0IHsgSVJvdyB9IGZyb20gJy4uL2NvbW1vbi9JUm93JztcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJztcbmltcG9ydCB7IElFdGMgfSBmcm9tICcuL0lFdGMnO1xuaW1wb3J0IHsgUHJlUHJvY2Vzc2luZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9QcmVQcm9jZXNzaW5nQ29tcG9uZW50JztcblxudHlwZSBQYXlsb2FkID0gSUV0Yy5QYXlsb2FkO1xudHlwZSBJdGVtID0gSUV0Yy5JdGVtO1xuXG5leHBvcnQgY29uc3QgRXRjID0ge1xuICBDb21wb25lbnQ6ICh7IHBheWxvYWQgfTogUHJvcHNXaXRoQ2hpbGRyZW48eyBwYXlsb2FkOiBQYXlsb2FkIH0+KSA9PiB7XG4gICAgcmV0dXJuIFByZVByb2Nlc3NpbmdDb21wb25lbnQ8UGF5bG9hZD4oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgIH0pO1xuICB9LFxufTtcblxuZnVuY3Rpb24gQ29tcG9uZW50KHsgcGF5bG9hZCB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7IHBheWxvYWQ6IFBheWxvYWQgfT4pIHtcbiAgY29uc3QgY2VydGlmaWNhdGlvbnMgPSBwYXlsb2FkLmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSAnQ0VSVElGSUNBVElPTicpO1xuICBjb25zdCB0cmFpbmluZ3MgPSBwYXlsb2FkLmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSAnVFJBSU5JTkcnKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VjdGlvbiB0aXRsZT1cIkNFUlRJRklDQVRJT05cIiBpdGVtcz17Y2VydGlmaWNhdGlvbnN9IC8+XG4gICAgICA8U2VjdGlvbiB0aXRsZT1cIlRSQUlOSU5HXCIgaXRlbXM9e3RyYWluaW5nc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2VjdGlvbih7IHRpdGxlLCBpdGVtcyB9OiB7IHRpdGxlOiBzdHJpbmc7IGl0ZW1zOiBJdGVtW10gfSkge1xuICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiA8PjwvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbW1vblNlY3Rpb24gdGl0bGU9e3RpdGxlfT5cbiAgICAgIDxJdGVtUm93cyBpdGVtcz17aXRlbXN9IC8+XG4gICAgPC9Db21tb25TZWN0aW9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtUm93cyh7IGl0ZW1zIH06IHsgaXRlbXM6IEl0ZW1bXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEVtcHR5Um93Q29sPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDb21tb25Sb3dzIGtleT17aW5kZXgudG9TdHJpbmcoKX0gcGF5bG9hZD17c2VyaWFsaXplKGl0ZW0pfSBpbmRleD17aW5kZXh9IC8+O1xuICAgICAgfSl9XG4gICAgPC9FbXB0eVJvd0NvbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKGl0ZW06IEl0ZW0pOiBJUm93LlBheWxvYWQge1xuICBjb25zdCBEQVRFX0ZPUk1BVCA9IFV0aWwuTFVYT05fREFURV9GT1JNQVQ7XG4gIGNvbnN0IHN0YXJ0ZWRBdCA9IERhdGVUaW1lLmZyb21Gb3JtYXQoaXRlbS5zdGFydGVkQXQsIERBVEVfRk9STUFULllZWVlfTEwpLnRvRm9ybWF0KFxuICAgIERBVEVfRk9STUFULllZWVlfRE9UX0xMLFxuICApO1xuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgaWYgKGl0ZW0uZW5kZWRBdCkge1xuICAgICAgY29uc3QgZW5kZWRBdCA9IERhdGVUaW1lLmZyb21Gb3JtYXQoaXRlbS5lbmRlZEF0LCBEQVRFX0ZPUk1BVC5ZWVlZX0xMKS50b0Zvcm1hdChcbiAgICAgICAgREFURV9GT1JNQVQuWVlZWV9ET1RfTEwsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGAke3N0YXJ0ZWRBdH0gfiAke2VuZGVkQXR9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0ZWRBdDtcbiAgfSkoKTtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHtcbiAgICAgIHRpdGxlLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgc3ViVGl0bGU6IGl0ZW0uc3ViVGl0bGUsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IElFdGMgfSBmcm9tICcuLi9jb21wb25lbnQvZXRjL0lFdGMnO1xuXG5jb25zdCBldGM6IElFdGMuUGF5bG9hZCA9IHtcbiAgZGlzYWJsZTogZmFsc2UsXG5cbiAgbGlzdDogW1xuICAgIHtcbiAgICAgIGNhdGVnb3J5OiAnQ0VSVElGSUNBVElPTicsXG4gICAgICB0aXRsZTogJ1NRTEQnLFxuICAgICAgc3ViVGl0bGU6ICftlZzqta3rjbDsnbTthLDrsqDsnbTsiqTsp4TtnaXshLzthLAnLFxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wNCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogJ1RSQUlOSU5HJyxcbiAgICAgIHRpdGxlOiAn7IyN7Jqp6rWQ7Jyh7IS87YSwIOyImOujjCcsXG4gICAgICBzdWJUaXRsZTogJ+yekOuwlCDquLDrsJggQVdTIO2BtOudvOyasOuTnCDtmZzsmqkgRnVsbC1TdGFjayDqsJzrsJzsnpAg7JaR7ISxIOqzvOyglScsXG4gICAgICBzdGFydGVkQXQ6ICcyMDIxLTExJyxcbiAgICAgIGVuZGVkQXQ6ICcyMDIyLTA0JyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXRjO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==