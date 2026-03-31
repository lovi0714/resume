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
    return item.category === '자격증';
  });
  var trainings = payload.list.filter(function (item) {
    return item.category === '교육';
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
      title: "\uC790\uACA9\uC99D",
      items: certifications
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
      title: "\uAD50\uC721",
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
    category: '자격증',
    title: 'SQLD',
    subTitle: '한국데이터베이스진흥센터',
    startedAt: '2025-04'
  }, {
    category: '교육',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2V0Yy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BheWxvYWQvZXRjLnRzIl0sIm5hbWVzIjpbIkV0YyIsIkNvbXBvbmVudCIsInBheWxvYWQiLCJQcmVQcm9jZXNzaW5nQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY2VydGlmaWNhdGlvbnMiLCJsaXN0IiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5IiwidHJhaW5pbmdzIiwiU2VjdGlvbiIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJJdGVtUm93cyIsIm1hcCIsImluZGV4Iiwic2VyaWFsaXplIiwidG9TdHJpbmciLCJEQVRFX0ZPUk1BVCIsIlV0aWwiLCJMVVhPTl9EQVRFX0ZPUk1BVCIsInN0YXJ0ZWRBdCIsIkRhdGVUaW1lIiwiZnJvbUZvcm1hdCIsIllZWVlfTEwiLCJ0b0Zvcm1hdCIsIllZWVlfRE9UX0xMIiwiZW5kZWRBdCIsImxlZnQiLCJyaWdodCIsInN1YlRpdGxlIiwiZXRjIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS08sSUFBTUEsR0FBRyxHQUFHO0FBQ2pCQyxXQUFTLEVBQUUseUJBQTBEO0FBQUEsUUFBdkRDLE9BQXVELFFBQXZEQSxPQUF1RDtBQUNuRSxXQUFPQyw2RkFBc0IsQ0FBZTtBQUMxQ0QsYUFBTyxFQUFQQSxPQUQwQztBQUUxQ0UsZUFBUyxFQUFFSDtBQUYrQixLQUFmLENBQTdCO0FBSUQ7QUFOZ0IsQ0FBWjs7QUFTUCxTQUFTQSxVQUFULFFBQXlFO0FBQUEsTUFBcERDLE9BQW9ELFNBQXBEQSxPQUFvRDtBQUN2RSxNQUFNRyxjQUFjLEdBQUdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhQyxNQUFiLENBQW9CLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLFFBQUwsS0FBa0IsS0FBNUI7QUFBQSxHQUFwQixD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RSxjQUhaO0FBSUVULGFBQVMsRUFBRTtBQUpiLEdBREksRUFPSjtBQUNFZCxZQUFRLEVBQUUsSUFEWjtBQUVFRyxTQUFLLEVBQUUsV0FGVDtBQUdFb0IsWUFBUSxFQUFFLHdDQUhaO0FBSUVULGFBQVMsRUFBRSxTQUpiO0FBS0VNLFdBQU8sRUFBRTtBQUxYLEdBUEk7QUFIa0IsQ0FBMUI7QUFvQmVJLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjllZGZlOWZkMjYyM2Y5NjYzYTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tbW9uU2VjdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9Db21tb25TZWN0aW9uJztcbmltcG9ydCB7IEVtcHR5Um93Q29sIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IENvbW1vblJvd3MgfSBmcm9tICcuLi9jb21tb24vQ29tbW9uUm93JztcbmltcG9ydCB7IElSb3cgfSBmcm9tICcuLi9jb21tb24vSVJvdyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb21tb24vVXRpbCc7XG5pbXBvcnQgeyBJRXRjIH0gZnJvbSAnLi9JRXRjJztcbmltcG9ydCB7IFByZVByb2Nlc3NpbmdDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vUHJlUHJvY2Vzc2luZ0NvbXBvbmVudCc7XG5cbnR5cGUgUGF5bG9hZCA9IElFdGMuUGF5bG9hZDtcbnR5cGUgSXRlbSA9IElFdGMuSXRlbTtcblxuZXhwb3J0IGNvbnN0IEV0YyA9IHtcbiAgQ29tcG9uZW50OiAoeyBwYXlsb2FkIH06IFByb3BzV2l0aENoaWxkcmVuPHsgcGF5bG9hZDogUGF5bG9hZCB9PikgPT4ge1xuICAgIHJldHVybiBQcmVQcm9jZXNzaW5nQ29tcG9uZW50PElFdGMuUGF5bG9hZD4oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgIH0pO1xuICB9LFxufTtcblxuZnVuY3Rpb24gQ29tcG9uZW50KHsgcGF5bG9hZCB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7IHBheWxvYWQ6IFBheWxvYWQgfT4pIHtcbiAgY29uc3QgY2VydGlmaWNhdGlvbnMgPSBwYXlsb2FkLmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSAn7J6Q6rKp7KadJyk7XG4gIGNvbnN0IHRyYWluaW5ncyA9IHBheWxvYWQubGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09ICfqtZDsnKEnKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VjdGlvbiB0aXRsZT1cIuyekOqyqeymnVwiIGl0ZW1zPXtjZXJ0aWZpY2F0aW9uc30gLz5cbiAgICAgIDxTZWN0aW9uIHRpdGxlPVwi6rWQ7JyhXCIgaXRlbXM9e3RyYWluaW5nc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2VjdGlvbih7IHRpdGxlLCBpdGVtcyB9OiB7IHRpdGxlOiBzdHJpbmc7IGl0ZW1zOiBJdGVtW10gfSkge1xuICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiA8PjwvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbW1vblNlY3Rpb24gdGl0bGU9e3RpdGxlfT5cbiAgICAgIDxJdGVtUm93cyBpdGVtcz17aXRlbXN9IC8+XG4gICAgPC9Db21tb25TZWN0aW9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtUm93cyh7IGl0ZW1zIH06IHsgaXRlbXM6IEl0ZW1bXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEVtcHR5Um93Q29sPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDb21tb25Sb3dzIGtleT17aW5kZXgudG9TdHJpbmcoKX0gcGF5bG9hZD17c2VyaWFsaXplKGl0ZW0pfSBpbmRleD17aW5kZXh9IC8+O1xuICAgICAgfSl9XG4gICAgPC9FbXB0eVJvd0NvbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKGl0ZW06IEl0ZW0pOiBJUm93LlBheWxvYWQge1xuICBjb25zdCBEQVRFX0ZPUk1BVCA9IFV0aWwuTFVYT05fREFURV9GT1JNQVQ7XG4gIGNvbnN0IHN0YXJ0ZWRBdCA9IERhdGVUaW1lLmZyb21Gb3JtYXQoaXRlbS5zdGFydGVkQXQsIERBVEVfRk9STUFULllZWVlfTEwpLnRvRm9ybWF0KFxuICAgIERBVEVfRk9STUFULllZWVlfRE9UX0xMLFxuICApO1xuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgaWYgKGl0ZW0uZW5kZWRBdCkge1xuICAgICAgY29uc3QgZW5kZWRBdCA9IERhdGVUaW1lLmZyb21Gb3JtYXQoaXRlbS5lbmRlZEF0LCBEQVRFX0ZPUk1BVC5ZWVlZX0xMKS50b0Zvcm1hdChcbiAgICAgICAgREFURV9GT1JNQVQuWVlZWV9ET1RfTEwsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGAke3N0YXJ0ZWRBdH0gfiAke2VuZGVkQXR9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0ZWRBdDtcbiAgfSkoKTtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHtcbiAgICAgIHRpdGxlLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgc3ViVGl0bGU6IGl0ZW0uc3ViVGl0bGUsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IElFdGMgfSBmcm9tICcuLi9jb21wb25lbnQvZXRjL0lFdGMnO1xuXG5jb25zdCBldGM6IElFdGMuUGF5bG9hZCA9IHtcbiAgZGlzYWJsZTogZmFsc2UsXG5cbiAgbGlzdDogW1xuICAgIHtcbiAgICAgIGNhdGVnb3J5OiAn7J6Q6rKp7KadJyxcbiAgICAgIHRpdGxlOiAnU1FMRCcsXG4gICAgICBzdWJUaXRsZTogJ+2VnOq1reuNsOydtO2EsOuyoOydtOyKpOynhO2dpeyEvO2EsCcsXG4gICAgICBzdGFydGVkQXQ6ICcyMDI1LTA0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhdGVnb3J5OiAn6rWQ7JyhJyxcbiAgICAgIHRpdGxlOiAn7IyN7Jqp6rWQ7Jyh7IS87YSwIOyImOujjCcsXG4gICAgICBzdWJUaXRsZTogJ+yekOuwlCDquLDrsJggQVdTIO2BtOudvOyasOuTnCDtmZzsmqkgRnVsbC1TdGFjayDqsJzrsJzsnpAg7JaR7ISxIOqzvOyglScsXG4gICAgICBzdGFydGVkQXQ6ICcyMDIxLTExJyxcbiAgICAgIGVuZGVkQXQ6ICcyMDIyLTA0JyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXRjO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==