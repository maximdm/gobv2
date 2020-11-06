module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/service.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about_icon.js":
/*!**********************************!*\
  !*** ./components/about_icon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "G:\\MDMax\\go brasov\\site_nextjs\\gobv-site\\components\\about_icon.js";


function Icon(props) {
  const {
    label,
    title,
    small,
    subtitle,
    children,
    className
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `el-icon ${className}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "el-icon-circle",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "el-icon-inner",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "el-icon-label",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }, this), title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "el-icon-title",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 23
    }, this), subtitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "el-icon-subtitle",
      children: [subtitle, " ", small && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "el-icon-small",
        children: small
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 42
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/page_components/service.js":
/*!***********************************************!*\
  !*** ./components/page_components/service.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _about_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about_icon */ "./components/about_icon.js");

var _jsxFileName = "G:\\MDMax\\go brasov\\site_nextjs\\gobv-site\\components\\page_components\\service.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Components


const service = [{
  title: "Comunitatea",
  subtitle: "Fi parte a unei comunități ce iubește Brasșovul și poate contura o față acestui loc",
  link: "/about",
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
  link: "/",
  icon: "ti-cup"
}, {
  title: "Transparență",
  subtitle: "Vezi tot ce se întâmplă în interiorul afacerilor din grup",
  link: "/",
  icon: "ti-ruler-alt-2"
}, {
  title: "Împrietenește-te",
  subtitle: "Grupul pornește de la ideea că fiecare comerciant poate fi atât relația ta dar mia ales prietenuil tău drag",
  link: "/",
  icon: "ti-brush-alt"
}];

function Service() {
  let sliderSettings = {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section section-service section-service-1 display-fit-screen",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "display-full-screen",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "overlay-image",
        style: {
          backgroundImage: `url(/images/main/servicii.jpg)`
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
          className: "el-slider"
        }, sliderSettings), {}, {
          children: service.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item box",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "inner",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "service-item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "service-head",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_about_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    label: `0${index + 1}.`,
                    title: item.title,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: item.icon
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "service-body",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: item.subtitle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 33
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, this))
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

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./pages/service.js":
/*!**************************!*\
  !*** ./pages/service.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Despre; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page_components_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/page_components/service */ "./components/page_components/service.js");


var _jsxFileName = "G:\\MDMax\\go brasov\\site_nextjs\\gobv-site\\pages\\service.js";

function Despre() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_page_components_service__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hYm91dF9pY29uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZV9jb21wb25lbnRzL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwibGFiZWwiLCJ0aXRsZSIsInNtYWxsIiwic3VidGl0bGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInNlcnZpY2UiLCJsaW5rIiwiaWNvbiIsIlNlcnZpY2UiLCJzbGlkZXJTZXR0aW5ncyIsImRvdHMiLCJzcGVlZCIsImFycm93cyIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYmFja2dyb3VuZEltYWdlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRGVzcHJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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QSx5Q0FDSSxxRUFBQyxtREFBRDtBQUFNLHlCQUFLLEVBQUcsSUFBR0EsS0FBSyxHQUFHLENBQUUsR0FBM0I7QUFBK0IseUJBQUssRUFBRUQsSUFBSSxDQUFDdEIsS0FBM0M7QUFBQSwyQ0FDSTtBQUFNLCtCQUFTLEVBQUVzQixJQUFJLENBQUNmO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQU1JO0FBQUssMkJBQVMsRUFBQyxjQUFmO0FBQUEseUNBQ0k7QUFBQSw4QkFBSWUsSUFBSSxDQUFDcEI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBK0JxQixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIOztBQUVjZixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUVlLFNBQVNnQixNQUFULEdBQWtCO0FBQzdCLHNCQUNFO0FBQUEsMkJBQUUscUVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFGLG1CQURGO0FBR0QsQzs7Ozs7Ozs7Ozs7QUNOSCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZXJ2aWNlLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbihwcm9wcykge1xyXG4gICAgY29uc3QgeyBsYWJlbCwgdGl0bGUsIHNtYWxsLCBzdWJ0aXRsZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGVsLWljb24gJHtjbGFzc05hbWV9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWwtaWNvbi1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWwtaWNvbi1pbm5lclwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJlbC1pY29uLWxhYmVsXCI+e2xhYmVsfTwvc3Bhbj59XHJcbiAgICAgICAgICAgIHt0aXRsZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJlbC1pY29uLXRpdGxlXCI+e3RpdGxlfTwvc3Bhbj59XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbC1pY29uLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1YnRpdGxlfSB7c21hbGwgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZWwtaWNvbi1zbWFsbFwiPntzbWFsbH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJY29uOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2Fib3V0X2ljb25cIjtcclxuXHJcbmNvbnN0IHNlcnZpY2UgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29tdW5pdGF0ZWFcIixcclxuICAgICAgICBzdWJ0aXRsZTogXCJGaSBwYXJ0ZSBhIHVuZWkgY29tdW5pdMSDyJtpIGNlIGl1YmXImXRlIEJyYXPImW92dWwgyJlpIHBvYXRlIGNvbnR1cmEgbyBmYcibxIMgYWNlc3R1aSBsb2NcIixcclxuICAgICAgICBsaW5rOiBcIi9hYm91dFwiLFxyXG4gICAgICAgIGljb246IFwidGktaGVhcnRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT3BpbmlpXCIsXHJcbiAgICAgICAgc3VidGl0bGU6IFwiQWZsxIMgY2UgY29uc2lkZXLEg20gdG9wdWwgZGl2ZXJ0aXNtZW50dWx1aSDDrm4gQnJhyJlvdlwiLFxyXG4gICAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICAgIGljb246IFwidGktcnVsZXItcGVuY2lsXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk9mZXJ0ZVwiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIkZpaSBwcmltdWwgY2FyZSBhZmzEgyBvZmVydGVsZSBkaW4gQnJhyJlvdlwiLFxyXG4gICAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICAgIGljb246IFwidGktcGFpbnQtYnVja2V0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkltYWdpbmVcIixcclxuICAgICAgICBzdWJ0aXRsZTogXCJDcmVlYXrEgy3Im2kgbyBpbWFnaW5lIHByb3JwaWUgw65uIGNhZHJ1bCBHb0JyYciZb3ZcIixcclxuICAgICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgICBpY29uOiBcInRpLWN1cFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJUcmFuc3BhcmVuyJvEg1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIlZlemkgdG90IGNlIHNlIMOubnTDom1wbMSDIMOubiBpbnRlcmlvcnVsIGFmYWNlcmlsb3IgZGluIGdydXBcIixcclxuICAgICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgICBpY29uOiBcInRpLXJ1bGVyLWFsdC0yXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIsOObXByaWV0ZW5lyJl0ZS10ZVwiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIkdydXB1bCBwb3JuZciZdGUgZGUgbGEgaWRlZWEgY8SDIGZpZWNhcmUgY29tZXJjaWFudCBwb2F0ZSBmaSBhdMOidCByZWxhyJtpYSB0YSBkYXIgbWlhIGFsZXMgcHJpZXRlbnVpbCB0xIN1IGRyYWdcIixcclxuICAgICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgICBpY29uOiBcInRpLWJydXNoLWFsdFwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIFNlcnZpY2UoKSB7XHJcbiAgICBsZXQgc2xpZGVyU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5MDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTcwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLXNlcnZpY2Ugc2VjdGlvbi1zZXJ2aWNlLTEgZGlzcGxheS1maXQtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1mdWxsLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvbWFpbi9zZXJ2aWNpaS5qcGcpYCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIGNsYXNzTmFtZT1cImVsLXNsaWRlclwiIHsuLi5zbGlkZXJTZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBib3hcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGxhYmVsPXtgMCR7aW5kZXggKyAxfS5gfSB0aXRsZT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXRlbS5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5zdWJ0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcclxuIiwiaW1wb3J0IFNlcnZpY2UgZnJvbSAgXCIuLi9jb21wb25lbnRzL3BhZ2VfY29tcG9uZW50cy9zZXJ2aWNlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc3ByZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+PFNlcnZpY2UgLz48Lz5cclxuICAgIClcclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=