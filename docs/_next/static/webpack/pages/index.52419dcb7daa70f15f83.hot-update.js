webpackHotUpdate_N_E("pages/index",{

/***/ "./component/common/Style.ts":
/*!***********************************!*\
  !*** ./component/common/Style.ts ***!
  \***********************************/
/*! exports provided: Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
var Style = {
  blue: {
    color: '#3c78d8'
  },
  gray: {
    color: 'gray'
  },
  global: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8
  },
  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em'
  },
  profileImg: {
    maxHeight: '320px'
  },
  profileHeadline: {
    fontSize: '1.05rem',
    fontWeight: 400,
    lineHeight: 1.7
  },
  profileHighlightCard: {
    height: '100%',
    padding: '0.9rem 1rem',
    border: '1px solid #dbe5f1',
    borderRadius: '0.5rem',
    backgroundColor: '#f8fbff',
    lineHeight: 1.6
  },
  profileHighlightTitle: {
    color: '#3c78d8',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    marginBottom: '0.35rem',
    textTransform: 'uppercase'
  },
  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px'
  },
  footer: {},
  skillKeywordBadge: {
    fontWeight: 400
  }
};

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

/***/ "./component/introduce/index.tsx":
/*!***************************************!*\
  !*** ./component/introduce/index.tsx ***!
  \***************************************/
/*! exports provided: Introduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Introduce", function() { return Introduce; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Style */ "./component/common/Style.ts");
/* harmony import */ var _common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PreProcessingComponent */ "./component/common/PreProcessingComponent.tsx");

var _jsxFileName = "C:\\Users\\hoin\\resume\\resume\\component\\introduce\\index.tsx";



var Introduce = {
  Component: function Component(_ref) {
    var payload = _ref.payload;
    return Object(_common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_3__["PreProcessingComponent"])({
      payload: payload,
      component: _Component
    });
  }
};

function _Component(_ref2) {
  var _this = this;

  var payload = _ref2.payload;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          style: _common_Style__WEBPACK_IMPORTED_MODULE_2__["Style"].blue,
          children: "INTRODUCE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 9,
        children: [payload.contents.map(function (content, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: content
          }, index.toString(), false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-right",
          style: _common_Style__WEBPACK_IMPORTED_MODULE_2__["Style"].sign,
          children: payload.sign
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./component/profile/contact.tsx");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./component/profile/image.tsx");
/* harmony import */ var _common_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Style */ "./component/common/Style.ts");
/* harmony import */ var _common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PreProcessingComponent */ "./component/common/PreProcessingComponent.tsx");

var _jsxFileName = "C:\\Users\\hoin\\resume\\resume\\component\\profile\\index.tsx";





var Profile = {
  Component: function Component(_ref) {
    var payload = _ref.payload;
    return Object(_common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_5__["PreProcessingComponent"])({
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
      headline = payload.headline,
      highlights = payload.highlights;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 3,
        sm: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 9,
        sm: 12,
        children: [createNameArea(name), createHeadlineArea(headline), createProfileContactMap(contact), createHighlightArea(highlights)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

function createNameArea(name) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "text-center text-md-left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        style: _common_Style__WEBPACK_IMPORTED_MODULE_4__["Style"].blue,
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

function createHeadlineArea(headline) {
  if (!headline) {
    return '';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: _common_Style__WEBPACK_IMPORTED_MODULE_4__["Style"].profileHeadline,
        className: "mb-3 text-center text-md-left",
        children: headline
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

function createProfileContactMap(contacts) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "pt-2",
      children: contacts.map(function (contact, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
          payload: contact
        }, index.toString(), false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
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

function createHighlightArea(highlights) {
  var _this2 = this;

  if (!(highlights !== null && highlights !== void 0 && highlights.length)) {
    return '';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "pt-2",
    children: highlights.map(function (highlight, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 4,
        sm: 12,
        className: "pb-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: _common_Style__WEBPACK_IMPORTED_MODULE_4__["Style"].profileHighlightCard,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: _common_Style__WEBPACK_IMPORTED_MODULE_4__["Style"].profileHighlightTitle,
            children: highlight.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: highlight.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this2)
      }, index.toString(), false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this2);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
  headline: '보험 심사 자동화, 대용량 데이터 구조 개선, 운영 반영까지 책임지는 백엔드 개발자입니다.',
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
  }],
  highlights: [{
    title: '6,900만 건 구조 개선',
    description: '상품 단위 LIST 파티션 구조 전환으로 유지보수성과 확장성을 확보했습니다.'
  }, {
    title: '입력 시간 50%+ 단축',
    description: '고지정보 자동입력과 검증 로직으로 현업 작업 시간을 절반 이상 줄였습니다.'
  }, {
    title: '요구사항부터 운영까지',
    description: '분석, 개발, 테스트, 운영 반영까지 단독으로 수행한 프로젝트 경험이 있습니다.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NvbW1vbi9TdHlsZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ludHJvZHVjZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9wcm9maWxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9maWxlLnRzIl0sIm5hbWVzIjpbIlN0eWxlIiwiYmx1ZSIsImNvbG9yIiwiZ3JheSIsImdsb2JhbCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0Iiwid29yZFdyYXAiLCJ3b3JkQnJlYWsiLCJsaW5lSGVpZ2h0Iiwic2lnbiIsImZvbnRTaXplIiwicHJvZmlsZUltZyIsIm1heEhlaWdodCIsInByb2ZpbGVIZWFkbGluZSIsInByb2ZpbGVIaWdobGlnaHRDYXJkIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInByb2ZpbGVIaWdobGlnaHRUaXRsZSIsImxldHRlclNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0VHJhbnNmb3JtIiwiZm9vdGVyQ292ZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpblRvcCIsImZvb3RlciIsInNraWxsS2V5d29yZEJhZGdlIiwiSW50cm9kdWNlIiwiQ29tcG9uZW50IiwicGF5bG9hZCIsIlByZVByb2Nlc3NpbmdDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250ZW50cyIsIm1hcCIsImNvbnRlbnQiLCJpbmRleCIsInRvU3RyaW5nIiwiUHJvZmlsZSIsImltYWdlIiwiY29udGFjdCIsIm5hbWUiLCJoZWFkbGluZSIsImhpZ2hsaWdodHMiLCJjcmVhdGVOYW1lQXJlYSIsImNyZWF0ZUhlYWRsaW5lQXJlYSIsImNyZWF0ZVByb2ZpbGVDb250YWN0TWFwIiwiY3JlYXRlSGlnaGxpZ2h0QXJlYSIsInRpdGxlIiwic21hbGwiLCJjb250YWN0cyIsImxlbmd0aCIsImhpZ2hsaWdodCIsImRlc2NyaXB0aW9uIiwicHJvZmlsZSIsImRpc2FibGUiLCJsaW5rIiwiaWNvbiIsImZhRW52ZWxvcGUiLCJmYVBob25lIiwiYmFkZ2UiLCJmYUdpdGh1YiIsImZhQmxvZ2dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWVBO0FBQUE7QUFBTyxJQUFNQSxLQUF1QyxHQUFHO0FBQ3JEQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFO0FBREgsR0FEK0M7QUFLckRDLE1BQUksRUFBRTtBQUNKRCxTQUFLLEVBQUU7QUFESCxHQUwrQztBQVNyREUsUUFBTSxFQUFFO0FBQ05DLGNBQVUsRUFBRSw0QkFETjtBQUVOQyxjQUFVLEVBQUUsR0FGTjtBQUdOQyxZQUFRLEVBQUUsWUFISjtBQUlOQyxhQUFTLEVBQUUsVUFKTDtBQUtOQyxjQUFVLEVBQUU7QUFMTixHQVQ2QztBQWlCckRDLE1BQUksRUFBRTtBQUNKTCxjQUFVLEVBQUUsdUJBRFI7QUFFSk0sWUFBUSxFQUFFO0FBRk4sR0FqQitDO0FBc0JyREMsWUFBVSxFQUFFO0FBQ1ZDLGFBQVMsRUFBRTtBQURELEdBdEJ5QztBQTBCckRDLGlCQUFlLEVBQUU7QUFDZkgsWUFBUSxFQUFFLFNBREs7QUFFZkwsY0FBVSxFQUFFLEdBRkc7QUFHZkcsY0FBVSxFQUFFO0FBSEcsR0ExQm9DO0FBZ0NyRE0sc0JBQW9CLEVBQUU7QUFDcEJDLFVBQU0sRUFBRSxNQURZO0FBRXBCQyxXQUFPLEVBQUUsYUFGVztBQUdwQkMsVUFBTSxFQUFFLG1CQUhZO0FBSXBCQyxnQkFBWSxFQUFFLFFBSk07QUFLcEJDLG1CQUFlLEVBQUUsU0FMRztBQU1wQlgsY0FBVSxFQUFFO0FBTlEsR0FoQytCO0FBeUNyRFksdUJBQXFCLEVBQUU7QUFDckJuQixTQUFLLEVBQUUsU0FEYztBQUVyQlMsWUFBUSxFQUFFLFNBRlc7QUFHckJMLGNBQVUsRUFBRSxHQUhTO0FBSXJCZ0IsaUJBQWEsRUFBRSxRQUpNO0FBS3JCQyxnQkFBWSxFQUFFLFNBTE87QUFN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SSxFQUFFSyw0RUFBU0E7QUFIakIsR0FoQk8sQ0FWdUI7QUFnQ2hDbkIsWUFBVSxFQUFFLENBQ1Y7QUFDRUssU0FBSyxFQUFFLGdCQURUO0FBRUVLLGVBQVcsRUFBRTtBQUZmLEdBRFUsRUFLVjtBQUNFTCxTQUFLLEVBQUUsZUFEVDtBQUVFSyxlQUFXLEVBQUU7QUFGZixHQUxVLEVBU1Y7QUFDRUwsU0FBSyxFQUFFLGFBRFQ7QUFFRUssZUFBVyxFQUFFO0FBRmYsR0FUVTtBQWhDb0IsQ0FBbEM7QUFnRGVDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyNDE5ZGNiN2RhYTcwZjE1ZjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFRTdHlsZUtleSA9XG4gIHwgJ2JsdWUnXG4gIHwgJ2dyYXknXG4gIHwgJ2dsb2JhbCdcbiAgfCAnc2lnbidcbiAgfCAncHJvZmlsZUltZydcbiAgfCAncHJvZmlsZUhlYWRsaW5lJ1xuICB8ICdwcm9maWxlSGlnaGxpZ2h0Q2FyZCdcbiAgfCAncHJvZmlsZUhpZ2hsaWdodFRpdGxlJ1xuICB8ICdmb290ZXJDb3ZlcidcbiAgfCAnZm9vdGVyJ1xuICB8ICdza2lsbEtleXdvcmRCYWRnZSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZTogUmVjb3JkPFRTdHlsZUtleSwgQ1NTUHJvcGVydGllcz4gPSB7XG4gIGJsdWU6IHtcbiAgICBjb2xvcjogJyMzYzc4ZDgnLFxuICB9LFxuXG4gIGdyYXk6IHtcbiAgICBjb2xvcjogJ2dyYXknLFxuICB9LFxuXG4gIGdsb2JhbDoge1xuICAgIGZvbnRGYW1pbHk6IFwiJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWZcIixcbiAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgICB3b3JkQnJlYWs6ICdrZWVwLWFsbCcsXG4gICAgbGluZUhlaWdodDogMS44LFxuICB9LFxuXG4gIHNpZ246IHtcbiAgICBmb250RmFtaWx5OiBcIidQYXJpc2llbm5lJywgY3Vyc2l2ZVwiLFxuICAgIGZvbnRTaXplOiAnMS41ZW0nLFxuICB9LFxuXG4gIHByb2ZpbGVJbWc6IHtcbiAgICBtYXhIZWlnaHQ6ICczMjBweCcsXG4gIH0sXG5cbiAgcHJvZmlsZUhlYWRsaW5lOiB7XG4gICAgZm9udFNpemU6ICcxLjA1cmVtJyxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogMS43LFxuICB9LFxuXG4gIHByb2ZpbGVIaWdobGlnaHRDYXJkOiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZzogJzAuOXJlbSAxcmVtJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2RiZTVmMScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmYmZmJyxcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gIH0sXG5cbiAgcHJvZmlsZUhpZ2hsaWdodFRpdGxlOiB7XG4gICAgY29sb3I6ICcjM2M3OGQ4JyxcbiAgICBmb250U2l6ZTogJzAuNzhyZW0nLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wNGVtJyxcbiAgICBtYXJnaW5Cb3R0b206ICcwLjM1cmVtJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgfSxcblxuICBmb290ZXJDb3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLFxuICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcbiAgICBoZWlnaHQ6ICc4MHB4JyxcbiAgfSxcblxuICBmb290ZXI6IHt9LFxuXG4gIHNraWxsS2V5d29yZEJhZGdlOiB7XG4gICAgZm9udFdlaWdodDogNDAwLFxuICB9LFxufTtcbiIsImltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnLi4vY29tbW9uL1N0eWxlJztcbmltcG9ydCB7IElJbnRyb2R1Y2UgfSBmcm9tICcuL0lJbnRyb2R1Y2UnO1xuaW1wb3J0IHsgUHJlUHJvY2Vzc2luZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9QcmVQcm9jZXNzaW5nQ29tcG9uZW50JztcblxudHlwZSBQYXlsb2FkID0gSUludHJvZHVjZS5QYXlsb2FkO1xuXG5leHBvcnQgY29uc3QgSW50cm9kdWNlID0ge1xuICBDb21wb25lbnQ6ICh7IHBheWxvYWQgfTogUHJvcHNXaXRoQ2hpbGRyZW48eyBwYXlsb2FkOiBQYXlsb2FkIH0+KSA9PiB7XG4gICAgcmV0dXJuIFByZVByb2Nlc3NpbmdDb21wb25lbnQ8UGF5bG9hZD4oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgIH0pO1xuICB9LFxufTtcblxuZnVuY3Rpb24gQ29tcG9uZW50KHsgcGF5bG9hZCB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7IHBheWxvYWQ6IFBheWxvYWQgfT4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209ezEyfSBtZD17M30+XG4gICAgICAgICAgPGgyIHN0eWxlPXtTdHlsZS5ibHVlfT5JTlRST0RVQ0U8L2gyPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17MTJ9IG1kPXs5fT5cbiAgICAgICAgICB7cGF5bG9hZC5jb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2luZGV4LnRvU3RyaW5nKCl9Pntjb250ZW50fTwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e1N0eWxlLnNpZ259PlxuICAgICAgICAgICAge3BheWxvYWQuc2lnbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgUHJvZmlsZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgeyBJUHJvZmlsZSB9IGZyb20gJy4vSVByb2ZpbGUnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICcuLi9jb21tb24vU3R5bGUnO1xuaW1wb3J0IHsgUHJlUHJvY2Vzc2luZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9QcmVQcm9jZXNzaW5nQ29tcG9uZW50JztcblxudHlwZSBQYXlsb2FkID0gSVByb2ZpbGUuUGF5bG9hZDtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGUgPSB7XG4gIENvbXBvbmVudDogKHsgcGF5bG9hZCB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7IHBheWxvYWQ6IFBheWxvYWQgfT4pID0+IHtcbiAgICByZXR1cm4gUHJlUHJvY2Vzc2luZ0NvbXBvbmVudDxQYXlsb2FkPih7XG4gICAgICBwYXlsb2FkLFxuICAgICAgY29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgfSk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBDb21wb25lbnQoeyBwYXlsb2FkIH06IFByb3BzV2l0aENoaWxkcmVuPHsgcGF5bG9hZDogUGF5bG9hZCB9Pikge1xuICBjb25zdCB7IGltYWdlLCBjb250YWN0LCBuYW1lLCBoZWFkbGluZSwgaGlnaGxpZ2h0cyB9ID0gcGF5bG9hZDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17M30gc209ezEyfT5cbiAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXs5fSBzbT17MTJ9PlxuICAgICAgICAgIHtjcmVhdGVOYW1lQXJlYShuYW1lKX1cbiAgICAgICAgICB7Y3JlYXRlSGVhZGxpbmVBcmVhKGhlYWRsaW5lKX1cbiAgICAgICAgICB7Y3JlYXRlUHJvZmlsZUNvbnRhY3RNYXAoY29udGFjdCl9XG4gICAgICAgICAge2NyZWF0ZUhpZ2hsaWdodEFyZWEoaGlnaGxpZ2h0cyl9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hbWVBcmVhKG5hbWU6IFBheWxvYWRbJ25hbWUnXSkge1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbWQtbGVmdFwiPlxuICAgICAgICA8aDEgc3R5bGU9e1N0eWxlLmJsdWV9PlxuICAgICAgICAgIHtuYW1lLnRpdGxlfSA8c21hbGw+e25hbWUuc21hbGwgfHwgJyd9PC9zbWFsbD5cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkbGluZUFyZWEoaGVhZGxpbmU/OiBzdHJpbmcpIHtcbiAgaWYgKCFoZWFkbGluZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDb2w+XG4gICAgICAgIDxwIHN0eWxlPXtTdHlsZS5wcm9maWxlSGVhZGxpbmV9IGNsYXNzTmFtZT1cIm1iLTMgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCI+XG4gICAgICAgICAge2hlYWRsaW5lfVxuICAgICAgICA8L3A+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZmlsZUNvbnRhY3RNYXAoY29udGFjdHM6IFBheWxvYWRbJ2NvbnRhY3QnXSkge1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAge2NvbnRhY3RzLm1hcCgoY29udGFjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvZmlsZUNvbnRhY3Qga2V5PXtpbmRleC50b1N0cmluZygpfSBwYXlsb2FkPXtjb250YWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIaWdobGlnaHRBcmVhKGhpZ2hsaWdodHM/OiBQYXlsb2FkWydoaWdobGlnaHRzJ10pIHtcbiAgaWYgKCFoaWdobGlnaHRzPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3cgY2xhc3NOYW1lPVwicHQtMlwiPlxuICAgICAge2hpZ2hsaWdodHMubWFwKChoaWdobGlnaHQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxDb2wga2V5PXtpbmRleC50b1N0cmluZygpfSBtZD17NH0gc209ezEyfSBjbGFzc05hbWU9XCJwYi0zXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGUucHJvZmlsZUhpZ2hsaWdodENhcmR9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGUucHJvZmlsZUhpZ2hsaWdodFRpdGxlfT57aGlnaGxpZ2h0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57aGlnaGxpZ2h0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICkpfVxuICAgIDwvUm93PlxuICApO1xufVxuIiwiaW1wb3J0IHsgZmFFbnZlbG9wZSwgZmFQaG9uZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYUJsb2dnZXIsIGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi4vYXNzZXQvX3NhbXBsZS5qcGcnO1xuaW1wb3J0IHsgSVByb2ZpbGUgfSBmcm9tICcuLi9jb21wb25lbnQvcHJvZmlsZS9JUHJvZmlsZSc7XG5cbmNvbnN0IHByb2ZpbGU6IElQcm9maWxlLlBheWxvYWQgPSB7XG4gIGRpc2FibGU6IGZhbHNlLFxuXG4gIGltYWdlLFxuICBuYW1lOiB7XG4gICAgdGl0bGU6ICfsnbTtmLjsnbgnLFxuICAgIHNtYWxsOiAnKEhvaW4gTGVlKScsXG4gIH0sXG4gIGhlYWRsaW5lOlxuICAgICfrs7Ttl5gg7Ius7IKsIOyekOuPme2ZlCwg64yA7Jqp65+JIOuNsOydtO2EsCDqtazsobAg6rCc7ISgLCDsmrTsmIEg67CY7JiB6rmM7KeAIOyxheyehOyngOuKlCDrsLHsl5Trk5wg6rCc67Cc7J6Q7J6F64uI64ukLicsXG4gIGNvbnRhY3Q6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ2xvdmkwNzE0QGdtYWlsLmNvbScsXG4gICAgICBsaW5rOiAnbWFpbHRvOmxvdmkwNzE0QGdtYWlsLmNvbScsXG4gICAgICBpY29uOiBmYUVudmVsb3BlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdQbGVhc2UgY29udGFjdCBtZSBieSBlbWFpbCcsXG4gICAgICBpY29uOiBmYVBob25lLFxuICAgICAgYmFkZ2U6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb3ZpMDcxNCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2xvdmkwNzE0JyxcbiAgICAgIGljb246IGZhR2l0aHViLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdodHRwczovL3ZlbG9nLmlvL0Bsb3ZpMDcxNCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly92ZWxvZy5pby9AbG92aTA3MTQnLFxuICAgICAgaWNvbjogZmFCbG9nZ2VyLFxuICAgIH0sXG4gIF0sXG4gIGhpZ2hsaWdodHM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJzYsOTAw66eMIOqxtCDqtazsobAg6rCc7ISgJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn7IOB7ZKIIOuLqOychCBMSVNUIO2MjO2LsOyFmCDqtazsobAg7KCE7ZmY7Jy866GcIOycoOyngOuztOyImOyEseqzvCDtmZXsnqXshLHsnYQg7ZmV67O07ZaI7Iq164uI64ukLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ+yeheugpSDsi5zqsIQgNTAlKyDri6jstpUnLFxuICAgICAgZGVzY3JpcHRpb246ICfqs6Dsp4DsoJXrs7Qg7J6Q64+Z7J6F66Cl6rO8IOqygOymnSDroZzsp4HsnLzroZwg7ZiE7JeFIOyekeyXhSDsi5zqsITsnYQg7KCI67CYIOydtOyDgSDspITsmIDsirXri4jri6QuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn7JqU6rWs7IKs7ZWt67aA7YSwIOyatOyYgeq5jOyngCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ+u2hOyEnSwg6rCc67CcLCDthYzsiqTtirgsIOyatOyYgSDrsJjsmIHquYzsp4Ag64uo64+F7Jy866GcIOyImO2Wie2VnCDtlITroZzsoJ3tirgg6rK97ZeY7J20IOyeiOyKteuLiOuLpC4nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==