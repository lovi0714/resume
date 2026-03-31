webpackHotUpdate_N_E("pages/index",{

/***/ "./component/profile/index.tsx":
/*!*************************************!*\
  !*** ./component/profile/index.tsx ***!
  \*************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./component/profile/contact.tsx");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./component/profile/image.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./component/common/index.tsx");
/* harmony import */ var _common_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Style */ "./component/common/Style.ts");
/* harmony import */ var _common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/PreProcessingComponent */ "./component/common/PreProcessingComponent.tsx");

var _jsxFileName = "C:\\Users\\hoin\\resume\\resume\\component\\profile\\index.tsx";







var Profile = {
  Component: function Component(_ref) {
    var payload = _ref.payload;
    return Object(_common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_7__["PreProcessingComponent"])({
      payload: payload,
      component: _Component
    });
  }
};

function _Component(_ref2) {
  var payload = _ref2.payload;
  var image = payload.image,
      contact = payload.contact,
      name = payload.name,
      notice = payload.notice;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 3,
        sm: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
          src: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 9,
        sm: 12,
        children: [createNameArea(name), createProfileContactMap(contact), createNoticeArea(notice)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

function createNameArea(name) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "text-center text-md-left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        style: _common_Style__WEBPACK_IMPORTED_MODULE_6__["Style"].blue,
        children: [name.title, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          children: name.small || ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

function createProfileContactMap(contacts) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "pt-3",
      children: contacts.map(function (contact, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
          payload: contact
        }, index.toString(), false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

function createNoticeArea(notice) {
  if (!(notice !== null && notice !== void 0 && notice.title)) {
    return '';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common__WEBPACK_IMPORTED_MODULE_5__["EmptyRowCol"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      color: "secondary",
      role: "alert",
      className: "mt-3",
      children: [notice.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        className: "mr-2",
        icon: notice.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 24
      }, this) : '', notice.title]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

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

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js":
false,

/***/ "./payload/profile.ts":
/*!****************************!*\
  !*** ./payload/profile.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _asset_sample_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/_sample.jpg */ "./asset/_sample.jpg");
/* harmony import */ var _asset_sample_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_asset_sample_jpg__WEBPACK_IMPORTED_MODULE_2__);



var profile = {
  disable: false,
  image: _asset_sample_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  name: {
    title: '이호인',
    small: '(Hoin Lee)'
  },
  contact: [{
    title: 'lovi0714@gmail.com',
    link: 'mailto:lovi0714@gmail.com',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEnvelope"]
  }, {
    title: 'Please contact me by email',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPhone"],
    badge: true
  }, {
    title: 'https://github.com/lovi0714',
    link: 'https://github.com/lovi0714',
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"]
  }, {
    title: 'https://velog.io/@lovi0714',
    link: 'https://velog.io/@lovi0714',
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBlogger"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (profile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3Byb2ZpbGUvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9wYXlsb2FkL3Byb2ZpbGUudHMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIkNvbXBvbmVudCIsInBheWxvYWQiLCJQcmVQcm9jZXNzaW5nQ29tcG9uZW50IiwiY29tcG9uZW50IiwiaW1hZ2UiLCJjb250YWN0IiwibmFtZSIsIm5vdGljZSIsImNyZWF0ZU5hbWVBcmVhIiwiY3JlYXRlUHJvZmlsZUNvbnRhY3RNYXAiLCJjcmVhdGVOb3RpY2VBcmVhIiwiU3R5bGUiLCJibHVlIiwidGl0bGUiLCJzbWFsbCIsImNvbnRhY3RzIiwibWFwIiwiaW5kZXgiLCJ0b1N0cmluZyIsImljb24iLCJwcm9maWxlIiwiZGlzYWJsZSIsImxpbmsiLCJmYUVudmVsb3BlIiwiZmFQaG9uZSIsImJhZGdlIiwiZmFHaXRodWIiLCJmYUJsb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJTyxJQUFNQSxPQUFPLEdBQUc7QUFDckJDLFdBQVMsRUFBRSx5QkFBMEQ7QUFBQSxRQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQ25FLFdBQU9DLDZGQUFzQixDQUFVO0FBQ3JDRCxhQUFPLEVBQVBBLE9BRHFDO0FBRXJDRSxlQUFTLEVBQUVIO0FBRjBCLEtBQVYsQ0FBN0I7QUFJRDtBQU5vQixDQUFoQjs7QUFTUCxTQUFTQSxVQUFULFFBQXlFO0FBQUEsTUFBcERDLE9BQW9ELFNBQXBEQSxPQUFvRDtBQUFBLE1BQy9ERyxLQUQrRCxHQUM5QkgsT0FEOEIsQ0FDL0RHLEtBRCtEO0FBQUEsTUFDeERDLE9BRHdELEdBQzlCSixPQUQ4QixDQUN4REksT0FEd0Q7QUFBQSxNQUMvQ0MsSUFEK0MsR0FDOUJMLE9BRDhCLENBQy9DSyxJQUQrQztBQUFBLE1BQ3pDQyxNQUR5QyxHQUM5Qk4sT0FE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QUNKTyxTQUFLLEVBQUUsS0FESDtBQUVKQyxTQUFLLEVBQUU7QUFGSCxHQUowQjtBQVFoQ1QsU0FBTyxFQUFFLENBQ1A7QUFDRVEsU0FBSyxFQUFFLG9CQURUO0FBRUVTLFFBQUksRUFBRSwyQkFGUjtBQUdFSCxRQUFJLEVBQUVJLDRFQUFVQTtBQUhsQixHQURPLEVBTVA7QUFDRVYsU0FBSyxFQUFFLDRCQURUO0FBRUVNLFFBQUksRUFBRUsseUVBRlI7QUFHRUMsU0FBSyxFQUFFO0FBSFQsR0FOTyxFQVdQO0FBQ0VaLFNBQUssRUFBRSw2QkFEVDtBQUVFUyxRQUFJLEVBQUUsNkJBRlI7QUFHRUgsUUFBSSxFQUFFTywyRUFBUUE7QUFIaEIsR0FYTyxFQWdCUDtBQUNFYixTQUFLLEVBQUUsNEJBRFQ7QUFFRVMsUUFBSSxFQUFFLDRCQUZSO0FBR0VILFFBQUksRUFBRVEsNEVBQVNBO0FBSGpCLEdBaEJPO0FBUnVCLENBQWxDO0FBZ0NlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MmFjYmQyZThlNzI5YmM1NDNkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZmlsZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgeyBFbXB0eVJvd0NvbCB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBJUHJvZmlsZSB9IGZyb20gJy4vSVByb2ZpbGUnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICcuLi9jb21tb24vU3R5bGUnO1xuaW1wb3J0IHsgUHJlUHJvY2Vzc2luZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9QcmVQcm9jZXNzaW5nQ29tcG9uZW50JztcblxudHlwZSBQYXlsb2FkID0gSVByb2ZpbGUuUGF5bG9hZDtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGUgPSB7XG4gIENvbXBvbmVudDogKHsgcGF5bG9hZCB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7IHBheWxvYWQ6IFBheWxvYWQgfT4pID0+IHtcbiAgICByZXR1cm4gUHJlUHJvY2Vzc2luZ0NvbXBvbmVudDxQYXlsb2FkPih7XG4gICAgICBwYXlsb2FkLFxuICAgICAgY29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgfSk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBDb21wb25lbnQoeyBwYXlsb2FkIH06IFByb3BzV2l0aENoaWxkcmVuPHsgcGF5bG9hZDogUGF5bG9hZCB9Pikge1xuICBjb25zdCB7IGltYWdlLCBjb250YWN0LCBuYW1lLCBub3RpY2UgfSA9IHBheWxvYWQ7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPXszfSBzbT17MTJ9PlxuICAgICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgbWQ9ezl9IHNtPXsxMn0+XG4gICAgICAgICAge2NyZWF0ZU5hbWVBcmVhKG5hbWUpfVxuICAgICAgICAgIHtjcmVhdGVQcm9maWxlQ29udGFjdE1hcChjb250YWN0KX1cbiAgICAgICAgICB7Y3JlYXRlTm90aWNlQXJlYShub3RpY2UpfVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYW1lQXJlYShuYW1lOiBQYXlsb2FkWyduYW1lJ10pIHtcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnRcIj5cbiAgICAgICAgPGgxIHN0eWxlPXtTdHlsZS5ibHVlfT5cbiAgICAgICAgICB7bmFtZS50aXRsZX0gPHNtYWxsPntuYW1lLnNtYWxsIHx8ICcnfTwvc21hbGw+XG4gICAgICAgIDwvaDE+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZmlsZUNvbnRhY3RNYXAoY29udGFjdHM6IFBheWxvYWRbJ2NvbnRhY3QnXSkge1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIGNsYXNzTmFtZT1cInB0LTNcIj5cbiAgICAgICAge2NvbnRhY3RzLm1hcCgoY29udGFjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvZmlsZUNvbnRhY3Qga2V5PXtpbmRleC50b1N0cmluZygpfSBwYXlsb2FkPXtjb250YWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RpY2VBcmVhKG5vdGljZTogUGF5bG9hZFsnbm90aWNlJ10pIHtcbiAgaWYgKCFub3RpY2U/LnRpdGxlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlSb3dDb2w+XG4gICAgICA8QWxlcnQgY29sb3I9XCJzZWNvbmRhcnlcIiByb2xlPVwiYWxlcnRcIiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgIHtub3RpY2UuaWNvbiA/IDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItMlwiIGljb249e25vdGljZS5pY29ufSAvPiA6ICcnfVxuICAgICAgICB7bm90aWNlLnRpdGxlfVxuICAgICAgPC9BbGVydD5cbiAgICA8L0VtcHR5Um93Q29sPlxuICApO1xufVxuIiwiaW1wb3J0IHsgZmFFbnZlbG9wZSwgZmFQaG9uZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYUJsb2dnZXIsIGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi4vYXNzZXQvX3NhbXBsZS5qcGcnO1xuaW1wb3J0IHsgSVByb2ZpbGUgfSBmcm9tICcuLi9jb21wb25lbnQvcHJvZmlsZS9JUHJvZmlsZSc7XG5cbmNvbnN0IHByb2ZpbGU6IElQcm9maWxlLlBheWxvYWQgPSB7XG4gIGRpc2FibGU6IGZhbHNlLFxuXG4gIGltYWdlLFxuICBuYW1lOiB7XG4gICAgdGl0bGU6ICfsnbTtmLjsnbgnLFxuICAgIHNtYWxsOiAnKEhvaW4gTGVlKScsXG4gIH0sXG4gIGNvbnRhY3Q6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ2xvdmkwNzE0QGdtYWlsLmNvbScsXG4gICAgICBsaW5rOiAnbWFpbHRvOmxvdmkwNzE0QGdtYWlsLmNvbScsXG4gICAgICBpY29uOiBmYUVudmVsb3BlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdQbGVhc2UgY29udGFjdCBtZSBieSBlbWFpbCcsXG4gICAgICBpY29uOiBmYVBob25lLFxuICAgICAgYmFkZ2U6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb3ZpMDcxNCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2xvdmkwNzE0JyxcbiAgICAgIGljb246IGZhR2l0aHViLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdodHRwczovL3ZlbG9nLmlvL0Bsb3ZpMDcxNCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly92ZWxvZy5pby9AbG92aTA3MTQnLFxuICAgICAgaWNvbjogZmFCbG9nZ2VyLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==