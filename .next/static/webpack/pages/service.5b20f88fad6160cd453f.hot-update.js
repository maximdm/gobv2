webpackHotUpdate_N_E("pages/service",{

/***/ "./components/page_components/service.js":
/*!***********************************************!*\
  !*** ./components/page_components/service.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _about_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about_icon */ "./components/about_icon.js");


var _jsxFileName = "G:\\MDMax\\go brasov\\site_nextjs\\gobv-site\\components\\page_components\\service.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // Components


var service = [{
  title: "Comunitate",
  subtitle: "Fi parte a unei comunități ce iubește Brasșovul și poate contura o față acestui loc",
  link: "/",
  icon: "ti-heart"
}, {
  title: "Opinii",
  subtitle: "Află ce considerăm topul divertismentului în Brașov",
  link: "/",
  icon: "ti-ruler-pencil"
}, {
  title: "Oferte",
  subtitle: "Fii primul care află ofertele din Brașov",
  link: "/",
  icon: "ti-paint-bucket"
}, {
  title: "Imagine",
  subtitle: "Creează-ți o imagine prorpie în cadrul GoBrașov",
  link: "/service-details",
  icon: "ti-cup"
}, {
  title: "Cardio",
  subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
  link: "/service-details",
  icon: "ti-ruler-alt-2"
}, {
  title: "Climbing",
  subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
  link: "/service-details",
  icon: "ti-brush-alt"
}];

function Service() {
  var _this = this;

  var sliderSettings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: "section section-service section-service-1 display-fit-screen",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "display-full-screen",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "overlay-image",
        style: {
          backgroundImage: "url(/images/main/servicii.jpg)"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
          className: "el-slider"
        }, sliderSettings), {}, {
          children: service.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "item box",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "service-item",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "service-head",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_about_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "0".concat(index + 1, "."),
                      title: item.title,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                        className: item.icon
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "service-body",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                      children: item.subtitle
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }, this);
}

_c = Service;
/* harmony default export */ __webpack_exports__["default"] = (Service);

var _c;

$RefreshReg$(_c, "Service");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlX2NvbXBvbmVudHMvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJzZXJ2aWNlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImxpbmsiLCJpY29uIiwiU2VydmljZSIsInNsaWRlclNldHRpbmdzIiwiZG90cyIsInNwZWVkIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJpbml0aWFsU2xpZGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FDWjtBQUNJQyxPQUFLLEVBQUUsWUFEWDtBQUVJQyxVQUFRLEVBQUUscUZBRmQ7QUFHSUMsTUFBSSxFQUFFLEdBSFY7QUFJSUMsTUFBSSxFQUFFO0FBSlYsQ0FEWSxFQU9aO0FBQ0lILE9BQUssRUFBRSxRQURYO0FBRUlDLFVBQVEsRUFBRSxxREFGZDtBQUdJQyxNQUFJLEVBQUUsR0FIVjtBQUlJQyxNQUFJLEVBQUU7QUFKVixDQVBZLEVBYVo7QUFDSUgsT0FBSyxFQUFFLFFBRFg7QUFFSUMsVUFBUSxFQUFFLDBDQUZkO0FBR0lDLE1BQUksRUFBRSxHQUhWO0FBSUlDLE1BQUksRUFBRTtBQUpWLENBYlksRUFtQlo7QUFDSUgsT0FBSyxFQUFFLFNBRFg7QUFFSUMsVUFBUSxFQUFFLGlEQUZkO0FBR0lDLE1BQUksRUFBRSxrQkFIVjtBQUlJQyxNQUFJLEVBQUU7QUFKVixDQW5CWSxFQXlCWjtBQUNJSCxPQUFLLEVBQUUsUUFEWDtBQUVJQyxVQUFRLEVBQUUscUhBRmQ7QUFHSUMsTUFBSSxFQUFFLGtCQUhWO0FBSUlDLE1BQUksRUFBRTtBQUpWLENBekJZLEVBK0JaO0FBQ0lILE9BQUssRUFBRSxV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Y2UuNWIyMGY4OGZhZDYxNjBjZDQ1M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2Fib3V0X2ljb25cIjtcclxuXHJcbmNvbnN0IHNlcnZpY2UgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29tdW5pdGF0ZVwiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIkZpIHBhcnRlIGEgdW5laSBjb211bml0xIPIm2kgY2UgaXViZciZdGUgQnJhc8iZb3Z1bCDImWkgcG9hdGUgY29udHVyYSBvIGZhyJvEgyBhY2VzdHVpIGxvY1wiLFxyXG4gICAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICAgIGljb246IFwidGktaGVhcnRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT3BpbmlpXCIsXHJcbiAgICAgICAgc3VidGl0bGU6IFwiQWZsxIMgY2UgY29uc2lkZXLEg20gdG9wdWwgZGl2ZXJ0aXNtZW50dWx1aSDDrm4gQnJhyJlvdlwiLFxyXG4gICAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICAgIGljb246IFwidGktcnVsZXItcGVuY2lsXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk9mZXJ0ZVwiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIkZpaSBwcmltdWwgY2FyZSBhZmzEgyBvZmVydGVsZSBkaW4gQnJhyJlvdlwiLFxyXG4gICAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICAgIGljb246IFwidGktcGFpbnQtYnVja2V0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkltYWdpbmVcIixcclxuICAgICAgICBzdWJ0aXRsZTogXCJDcmVlYXrEgy3Im2kgbyBpbWFnaW5lIHByb3JwaWUgw65uIGNhZHJ1bCBHb0JyYciZb3ZcIixcclxuICAgICAgICBsaW5rOiBcIi9zZXJ2aWNlLWRldGFpbHNcIixcclxuICAgICAgICBpY29uOiBcInRpLWN1cFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDYXJkaW9cIixcclxuICAgICAgICBzdWJ0aXRsZTogXCJOdWxsYSBjb25zZXF1YXQgbWFzc2EgcXVpcyBlbmltLiBEb25lYyBwZWRlIGp1c3RvLCBmcmluZ2lsbGEgdmVsLCBhbGlxdWV0IG5lYywgdnVscHV0YXRlIGVnZXQsIGFyY3UuIEluIGVuaW0ganVzdG8uXCIsXHJcbiAgICAgICAgbGluazogXCIvc2VydmljZS1kZXRhaWxzXCIsXHJcbiAgICAgICAgaWNvbjogXCJ0aS1ydWxlci1hbHQtMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDbGltYmluZ1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIk51bGxhIGNvbnNlcXVhdCBtYXNzYSBxdWlzIGVuaW0uIERvbmVjIHBlZGUganVzdG8sIGZyaW5naWxsYSB2ZWwsIGFsaXF1ZXQgbmVjLCB2dWxwdXRhdGUgZWdldCwgYXJjdS4gSW4gZW5pbSBqdXN0by5cIixcclxuICAgICAgICBsaW5rOiBcIi9zZXJ2aWNlLWRldGFpbHNcIixcclxuICAgICAgICBpY29uOiBcInRpLWJydXNoLWFsdFwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIFNlcnZpY2UoKSB7XHJcbiAgICBsZXQgc2xpZGVyU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5MDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTcwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLXNlcnZpY2Ugc2VjdGlvbi1zZXJ2aWNlLTEgZGlzcGxheS1maXQtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1mdWxsLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvbWFpbi9zZXJ2aWNpaS5qcGcpYCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIGNsYXNzTmFtZT1cImVsLXNsaWRlclwiIHsuLi5zbGlkZXJTZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBib3hcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGxhYmVsPXtgMCR7aW5kZXggKyAxfS5gfSB0aXRsZT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXRlbS5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5zdWJ0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==