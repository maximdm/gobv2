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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/common/headline.js":
/*!***************************************!*\
  !*** ./components/common/headline.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "G:\\MDMax\\go brasov\\site_nextjs\\gobv-site\\components\\common\\headline.js";


function Headline(props) {
  const {
    label,
    title,
    subtitle,
    divider_1,
    divider_2,
    position,
    className
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: `el-headline ${position || "side"} ${className}`,
    children: [label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "el-headline-label",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }, this), title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "el-headline-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, this), divider_1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "divider divider-1-reverse divider-1-1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "divider divider-1-reverse divider-1-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this), divider_2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "divider divider-1-reverse divider-1-2 divider-single"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }, this), subtitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 26
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Headline);

/***/ }),

/***/ "./components/common/tables/blog_table.js":
/*!************************************************!*\
  !*** ./components/common/tables/blog_table.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const posts = [{
  title: "Unde am simțit spirtiul Go în weekend",
  image: "https://www.romaniaexperience.com/wp-content/uploads/2017/05/schwarz-pub.jpg",
  date: "Ma1 15, 2021",
  link: "/single-post"
}, {
  title: "Un 1 Martie La Brașov",
  image: "data:image/jpeg;base64,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",
  date: "Martie 1, 2021",
  link: "/single-post"
}, {
  title: "GO în munți",
  image: "data:image/jpeg;base64,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",
  date: "Mai 21, 2021",
  link: "/single-post"
}, {
  title: "Go la bowling",
  image: "data:image/jpeg;base64,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",
  date: "Mai 21, 2021",
  link: "/single-post"
}];
/* harmony default export */ __webpack_exports__["default"] = (posts);

/***/ }),

/***/ "./components/page_components/blog.js":
/*!********************************************!*\
  !*** ./components/page_components/blog.js ***!
  \********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_headline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/headline */ "./components/common/headline.js");
/* harmony import */ var _components_common_tables_blog_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/tables/blog_table */ "./components/common/tables/blog_table.js");

var _jsxFileName = "G:\\MDMax\\go brasov\\site_nextjs\\gobv-site\\components\\page_components\\blog.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Components




function Blog() {
  let sliderSettings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: 30,
    draggable: false,
    responsive: [{
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section section-blog section-blog-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "display-spacing",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_grid_system__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_common_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Articole",
          title: "Urm\u0103re\u0219te ce se \xEEnt\xE2mpl\u0103 \xEEn lume GO",
          divider_1: true,
          position: "center"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
          className: "el-slider el-slider-plr--15"
        }, sliderSettings), {}, {
          children: _components_common_tables_blog_table__WEBPACK_IMPORTED_MODULE_6__["default"].map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: `/home-2${item.link}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post-image bg-primary",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: item.image,
                  alt: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post-content",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post-data",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "post-title",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    href: `/home-1${item.link}`,
                    children: item.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post-date",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "ti-time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 45
                  }, this), item.date]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 33
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Despre; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page_components_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/page_components/blog */ "./components/page_components/blog.js");


var _jsxFileName = "G:\\MDMax\\go brasov\\site_nextjs\\gobv-site\\pages\\blog.js";

function Despre() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_page_components_blog__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
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

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL2hlYWRsaW5lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlcy9ibG9nX3RhYmxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZV9jb21wb25lbnRzL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdyaWQtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhlYWRsaW5lIiwicHJvcHMiLCJsYWJlbCIsInRpdGxlIiwic3VidGl0bGUiLCJkaXZpZGVyXzEiLCJkaXZpZGVyXzIiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsInBvc3RzIiwiaW1hZ2UiLCJkYXRlIiwibGluayIsIkJsb2ciLCJzbGlkZXJTZXR0aW5ncyIsImRvdHMiLCJzcGVlZCIsImFycm93cyIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJQYWRkaW5nIiwiZHJhZ2dhYmxlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInNzZzQwNCIsInBhZ2UiLCJtb2QiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiRGVzcHJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVlLFNBQVMwSSxNQUFULEdBQWtCO0FBQzdCLHNCQUNFO0FBQUEsMkJBQUUscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFGLG1CQURGO0FBR0QsQzs7Ozs7Ozs7Ozs7QUNOSCxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ibG9nLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkbGluZShwcm9wcykge1xyXG4gICAgY29uc3QgeyBsYWJlbCwgdGl0bGUsIHN1YnRpdGxlLCBkaXZpZGVyXzEsIGRpdmlkZXJfMiwgcG9zaXRpb24sIGNsYXNzTmFtZSB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgZWwtaGVhZGxpbmUgJHtwb3NpdGlvbiB8fCBcInNpZGVcIn0gJHtjbGFzc05hbWV9YH0+XHJcbiAgICAgICAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsLWhlYWRsaW5lLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImVsLWhlYWRsaW5lLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtkaXZpZGVyXzEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXIgZGl2aWRlci0xLXJldmVyc2UgZGl2aWRlci0xLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXIgZGl2aWRlci0xLXJldmVyc2UgZGl2aWRlci0xLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZGl2aWRlcl8yICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyIGRpdmlkZXItMS1yZXZlcnNlIGRpdmlkZXItMS0yIGRpdmlkZXItc2luZ2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3N1YnRpdGxlICYmIDxwPntzdWJ0aXRsZX08L3A+fVxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGxpbmU7IiwiY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVW5kZSBhbSBzaW3Im2l0IHNwaXJ0aXVsIEdvIMOubiB3ZWVrZW5kXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cucm9tYW5pYWV4cGVyaWVuY2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA1L3NjaHdhcnotcHViLmpwZ1wiLFxyXG4gICAgICAgIGRhdGU6IFwiTWExIDE1LCAyMDIxXCIsXHJcbiAgICAgICAgbGluazogXCIvc2luZ2xlLXBvc3RcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVW4gMSBNYXJ0aWUgTGEgQnJhyJlvdlwiLFxyXG4gICAgICAgIGltYWdlOiBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhNVEVoVVRFeE1WRmhVV0dSNFpHQmdZR1JnWUhSc2ZIUjBZSFI4Ykdob1lIeWdnSGhvbElCa2dJVEVpSlNrckxpNHZHaDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HeEFRR3kwbUh5WXZMUzB0THlzdExTMHRNQzB2S3kwdExTMHRMUzB0TFMwdEt5MHZMUzh2TFMwdExTMHRMeTh0TFMwdkxTOHRMUzB0TGYvQUFCRUlBS3NCSmdNQklnQUNFUUVERVFIL3hBQWNBQUFDQXdFQkFRRUFBQUFBQUFBQUFBQUVCUUlEQmdjQkFBai94QUJFRUFBQ0FRSUVBd1lEQlFZRUJnRUZBUUFCQWhFRElRQUVFakVGUVZFR0V5SmhjWUV5a2FFalFySFI4RkppY29MQjRRY1VrdkVWTTBPaXNzSmpVNE9UdzlJVy84UUFHUUVBQXdFQkFRQUFBQUFBQUFBQUFBQUFBUUlEQkFBRi84UUFOaEVBQVFRQkFnTUdCQVVDQndBQUFBQUFBUUFDQXhFaEVqRUVRVkVUSW1GeHdmQ0JrYUd4TW5MUjRmRUZJeFFrUW1LQ29zTC8yZ0FNQXdFQUFoRURFUUEvQUhIWTNLYTgwcE95YW45OWxIOWZiRGZqK1NGS3RKSldqWGFRd3QzTmNiUDVLM1AzUElZQzdLNUhXV2htVjdNaEZ2aGJUcVBsYmFMeU91TlJtdE5kSHkxY2FYWVI2OHc2ZktmSWlNZVR3akE2Q3VkNFJLNS94dk9WM1ZFckM2dTUxV3VZQ2tRTFNDc25ycW5uZW5ONTh2VHZFZ0VqK0xadjlRcVQ2emp6UHBVN3dVNm9QZVUyS01lVGFRSWYxS0JaUE9BY0xzNnBBZ2dpNFllYTNGdmNEM1U0d1BlN3RDZmdtR3kwUCtGakExYW9NQnRBZ2RRU0pQNGZQQjNhaXVHcTB5amVLb3V3UC9UMXdoUGs4T2ZlT1dNamszYWpvcnEybUpwdEJ2cFlNTFQ3K2tnOHNmWkRNUWFqN0FFUjVYa1I3NDBtY0NMczY1K3FXc3JiZG5SM09lYW55YldudURQL0FLZlhBakt0SE50V29naWllOElqNGRhSXhrUjkyV1lBK1VZRHE4UWFzNjFDdmR2VllrTXN4cEpLbHdEZUJCSG1SeW5EempScEhLVlJTSUlwTWxNUjBDbUo2a21veG56d0kzQXNJNU5KSSs0L2RNdFJ3MnROS2pxYVhhbXJYM1BoV1RIdVBuZ3ZITnUxdWNidnFGTkdJTk5FV1ZNRUdKYUNOakVERzB5WENtQUJyVnF0Umh5MUZGSGxDa2F2VmlaOHNlbEZOcUpiV3lDYUVZOE9QR1QxSG9mMFBuaXBLcDFhR0hLUXcySUJBUG9SSTladHpBdXVYekxnRVZ0VHNvKzdFKytHTlJvQlBUQ2JzLzRtclAxYVBwaVQ1Q0h0YU9kL1JkU0pjeEphd0Z5VHNBTnljS3FQYmpJbHhUNzJKKzhWWUw4eUxldTJBLzhBRW5PbGFWT2dESGVFbHZNTEZ2UWsvd0RiamtuRXFPbDVuZTR4Uno4MG5qaHNXdjBFYWdJa0VFRVNETm82ejB4aVg3WnV6RTBrUTB3WUJhU1dnNzJJaWVWampIOWwrMWRTbFNxNVZpU0hwdUtmN3JsVEVlVS9YMXdSMmNCS1JnUGVRTUlzaUdydkxySFo3aXExMUpGaXZ4S2R4Nzh3ZXVISXh5M2dPY05ETXEwK0hadlEyUHkzOXNkUzJ4elhhZ3VlelFhVmdHUFl4Q2pVREFNcEJCdUNNV0REV2tVVkcvcmo0NEhxMWlyRDlrdEI4aVFJUHBJajNHSlZYeHlCU2pzZlduSlVQSk5QK2trZjB3ZXpRNDZOK0kvTWZoaFAySU01UkIreXpqNU8ySEdab0ZsSUZqdUQwSXVEODhDSTl3SHdVeXJSZ2JpT2JLZDJxZ0Y2cmhWQm1JK0oyTWNnZ0o5WUhQRm1WcTYxRFJIVWRDTEVleHRoYncycjMrYnExZDBvRHVLZjhSaHFyZk1Ldjh1SGM3WURtZ0U3R0pqRVp4OU9IUVEvRk15YWRJbGZqTUtuOFRIU3YxTStnT0paWExoUWxKZmhwZ1NlcDVUNS9lUHFNQlppcHF6Q2pjVVYxa2RYZVZRZXcxSDNHR3RCSUVibmNucVR1Y1RHWFdpcnhpUXhBTmlXckRwZ3ZUajNFWjJ4NlRqa1Y3ajdGWmJIMkRTRnJBSlQvd0FwbVVaTlBkc1hvZ0V4SkFwbjRqWU1XVzAybmVKa2FQT1pWY3dvWlNWZEQ0V2lHUmh5WUg2ZzR5UGE3UGdaS2tWSTcxcWxSZ0NBYmZhcTlqL0dQcGhQd25KbE12VnFacXZYUjNwOTdSSllrTXF6TzVrdDVFaXpBM3ZqekkzdGFTd0RCejVXbVJIYlhNRTVoQ3loV1ZRSGpZa01RVDZSQTlzTCtKVnRkT2xSSzMrMENQNVFHMGY2aVQvTmdhcG1IUXFNd0dJZFFwSkpMQkdBWlhXZHlMSFNmTVlEZXF6WmhOTXRvaG9VRS92RWdlbjBHUE5sc3ZjNGM3VElqTEE5eXd0NGd4MkJpRzhYcDRZdis5aWpoNmpTRmJZc1N4OGhHSjFWSUxVaHRxSkI4dnlJZyt3eDlrY3E1V2xWZzZOWnBtWUFrcnF0TzVnYmVlQWM3ZWE3bW03alNwZUNyQnRJVnZ1cVJLTEh6SjlSMHhkbXMwQjNsQ2lBYWRTcWhMZ2t3UXUzckpnL3dHMTdDOW9jeUtsVUNtMGtvbmVIb3dYU1JQV0JmMTY3V1Zja3ROY3VVRUNvb0xlYnE3QW41TXZ5d1hqVGVuNC9iMVhCRjlsdUhyVXo4TEpwMFpZRTNKRStFazh5ZkFUNm5IVFRqTC80ZDhNTkxMbXE0aDZ6YXI3aFJaZnBmNVkxSng3SENzMHN2cmxCUXdMbUcrMXBEcUgrZ1g4eGdtdlZWQVdkZ3FqY2tnRDVuQ1NyeFZHek5JMDFxVkFLVlUrRkRlV29BRUY0QkZqZVkyeGR6Z0Z5UDR4VjAwbTg3WUU3THI5a1QxWW42NG80N21YS0FOU0tDZnZNcFB5VW44Y1g4Q29WUlJRYWtVUlB3bGpmMUlBUHNjWXRXcmkvSnYzS1lMR2Y0aE1XemdXYkpUVVI1blV4K2hHTXB4eklTaXZqUTlzVks1NnFwSk5rTW1KUGdYb0l3SHhOSW9BSG50aXo5MXRoR0ZoelFNZ2l4R04xMmJwOCtxZy9uOVQ5TVpnSjQvWEdyNENZVlJQSWovdW41WHdkVnR0Y1cwNUZaaW1kWi9YWEhVY3E4MDBQTXFQd25ITktzbHlmTDlmcjB4MGpLajdGT3VoVDhnTWRGelV1STVJVXYzRlFOLzBhcDhYL0FNYm5adkpXTmowYUR6T0c0d0VWU29yMDJFcVJjZFZZVCtZOXNlNVJ0T21tV0xGUUJKM0lnd1Q1MmoxeFFZOGxtVnpvR0xxZVlIMW44c1UwbUpXKzRzZlVXUDUrK0xGYjdSdjRWL0Y4RDFYMDFkUEp4STlWaWZtSS93Qk9HdEtVbTdHRFRRZGYySzlaZmxVYkQ5S21FWFo5U3B6WS9aekR0L3FDdC9YRGxjZEZXZ0pEYVQ5b3VJSExJN0lETld5UnlxYlQ3aS9xdm5nL2dlUTdpZ2xMbUJMSHF4dXgrWndpektITlowcURDWlZkL3dENVR0OG8vd0MwOWNhUEs1aldvTVFkbUhRaXhIenhPSTZwSE81YkQxK3E0N0lnWTlad0FTVEFBa255R1BLZUYvSGFnS3JSRzladEVmdWk3KzJrRWZ6REdoenFDQUMrNEZTSlUxV0VHb3hxR2VXb1FvL2xRS1BXY09GRTRwcDdBREJGTTRVWUZKZ0ZJSmlXbkh3eENwbUZWbFVueE5NRHJBa24wSFh6SFhCdEdsS0wzNVloUnJoNUtneHlPd1A4UFVlZTNTY1JOUFdmRjhQSmV2bTNVZEI3OUl2ZG9FbmxqclhVb011UHNSWjRBbmZIMkRaUW9Ma0hHYVpyNXM2YjBxUVhVcHRwQTd2V3NjbWttUjFEZE1henRmb3FwL2x1NjExTllOSllFQUtGSmN6WVV4SlV6dnRqTzhOcmFYendxYW1GUkhkSGFEcUZOMkV6dE50K3ErbUhmQ3ljeXoxRFBkVEx0Skhla0hZQ1ArU2tiY3pQbU1lZERYZTZuOTB5enZDT0NKbUZxZ2wyWUloWjIrSktoTC9DT2FBS0JIU0l1TVpYTGlKSU84Z0VXa2JIMmcvWEc1NDgxV2lNeG1LWjBoajNKVTJQalFGVy9pVXY4aGpJMWNnNlUwWWdnT3BaZW9VRUtIUGtXTWZJODhacGdBQUFNZ20vSE9DdUZxL05xVjB1UlpxUVlrZndsVHZ6Z2ZNNEx6dWVDWlNqbFNEclNxcjZodEIxWDl3NGp5R0lyVEZUTE5UdjNsTmxJaWRpSERMK3VZSFhBbWRwazB1OHVIVnU3Z2lDUGhJLzdXaWVneGxqZFF4endtSVJ3eXRPbmxhTlFUckxzcjN0c2tXOXpmMXdSdzVtZHFDUHQ5c0I2dHJqNktod0Zra2VwM2xFZmNXcXdFY3dwYVBJeC9USHVUcmdwUnFTQWFkVUUraDBmL3pobW5iSHNMbDEzaGp6UnBIclRVL05SZ2duQ3pzNVZMWmFrVGM2WVBxQ1ZQNFlQcVZBb0xNWUFCSlBRQzV4N3NadGdQZ3VXTDdUem1zOVJ5Z0owSkRWSTgvRWZmVEFCNnNjYWFpby93QTB3QWdKUXBnQWJEVTlXdy8vQUJqQ0RzRlJOUTFzNjQ4Vlp5RjhsbVRIbE52NWNhSEp0TmF1ZWhSUGtnZi9BUFppVEJmZTZuNkxrRDJtRWhSMW5EYkxyQ0tPZ0dGM0ZoOXBTbnJobk9KeE4vdlNPOGg5RVZ6WHQya1o0a3hlbWgvOGhiNVlXOW9uQzBWSE9jYTMvRVhock5TR1lRZUtsSWZ6UTNuejBtL29XUExIT3MveEx2Y3ZwYjRrTnZNYzE5UitmbGlyaGxhNEhJU2ltcHhIcmpRNVJOQnBBajlxZmVNQmNHeVFGTTFpZHhZYy9rWU84YlRoN2w2QmJTYkFBV0hsNSsvNFlsZENsZDJYTHg2d2xzZFB5TGcwa2cvZEg0REdCcmNQVXh0UFhiR3M0WG5Bd1ZaMDFBQVBKNDZqcjUvN1lNVHdDczg3U1FDcEptMUdhMEE3aGxJODFod1BreDltR0NPTVBvcG1xTjBFbmxZRUg2UlB6d203U1ZlNmVubUlnQjFXb09hM0lEZVlJWmw4L0Qwd1R4M09JeXNnT293ZE5OVEpkb2tFZ2ZkWGUvOEFURDZ2eEJaRXlvWm9OVk1iR21qRHpFdnk5eDg4UjRtcElCWDQwT3RSMWo0bDkxSkh2ak1jTTRzZ0NtVlVxcDhUc0VCQUtFQVROdExnUnk5c09xUEhLSlZhbXF3M0lsZ0JCbTY5Q0w5SXdXdkRtN29LSVdQODZ5bjQvRUQvQVBZcFgrdUR1Slp6dWFEMWlKS0xJSFZ0Z1BkaUI3NFQ1bXQzWGZnbjdOMWZRMDgycGdoZkpmQ1FwOGlPbUdxMVMxUnFaMlFoL1kzWC92Vmo1YVY2NExkaUF1U3pnT1RiTDVjT3hsMm1wV1BVdGNuMUErZDhNNkxEV0hVZ3BWaTQyMVJZL3dBd3Q2Z2RjZVplc0phbVB1Ry9scXVCOGo5TUplT1pCNkttcGxtMGttR3BicXhPeFVjak43WUIvdHNGREFTVlpXdFhDbkpVeStZcVZEdFQ4Q2Z6UXpIMWpTUG5pcmh2SDBZSHZQczMwaGlyV21CZVBjSEUrR1ZkZXBVc0NGWjJ0WWxiNzh6SDYyd2RZZFZKcVh1YjRuM2JsUkdoR1UxVy9aVnRJRi80cEo4Z2NQbGJDVGd0TldGWm9CV28wUWJqUUZBQXZ2SU1uelk0STRSVWtCRk1wVHNwL2Fna0NPcWlJbm1SZ3RKNW9wcUd3aTROVk5ldFdybjRkUm8wdjRFUGpiK1ovb293VHg3aUlvMEtsV2ZnVmo2bUlBLzFFWVZka2E4QTB3MHBUcDBWSGtTcFpqNmttK09MaHJBWEp6VjRwcHpTVUNMVkVabFBtcDI5eCtIbmpMOEY0NVdIRU14bGE3RWhuTFU1T3dXU0ZYeUtnVzh1cHhQdGxuRlN0bHF5bVdwVkNyQVQ5NEF3eEZnZkNiRzhFNHozYk4yL3pDNWxJV29oWGE0a0FNQlBPMWoxMG5rY1k1K0kwdXlkaVBrUi9LNWRHem1iQ2lUTzhXQlA0WSt3dDRkbnhYVmF5L0NWRWVSSURNUC9BQkhxRGo3SHBESXNLVnJsOUtwV3IwMERhdEZNTWllRStJNjBsQnBpWmxUcE03VGpmY0Q0NldwaGY4dUtUVTRWVVZnTlEyOEFhQXlHQ0pWbXVQSVlWOXBhYTVkeHBUU2hLVmtDbUlxS2oweXdqeTdvK2VsdXVLZUJ5alZHcmgwcWlrSzFJN1dtSVZlWk1xTlBQVVJiSGxSdk1jdWdaUFB3OThsZTdVTTFsaG1jNktBbnVBL2V1cGxXOEEwNlNwMjVxT2NIZkVEVnAwMnphNm9wZ21uU1krTWpSNHRDam9ha0FUYUZhOXNDNVdzZ2Q2OVVyM3RYdkM2T0pDVkxWS2NLUmVreWhrbWJ6RWl4d3JwNU90bUhvMEVzS210enN4VUxwRE1RU0xra0NDWjVqZVNIRW5EUlpKSitDNnFWT1hybnZkWUoySkFEV085ajh0OTlzVHArTVY2UzdPaXZUOWhBOXl4VmZZNG54MURTcmlhZmRBYVJwQUtyYUZMS0dBSVUzL1F4Um1LcW9GQStKTEw3eUk5QVFqZW94aTBscnlDdVIzWlROOTFtbHFrZUVBQjU2TkFKOWdTZmJBbGJLQ2djMVJJblM3S3BuWUxVcHczeU1mekhGdVlyQWtNUGhxS3BYMGZVQUQvQ1dJOXZMQWRPc1RWUTFMaXJxa25tZFFZLyt2end3SkFMRDE5UDRRVzE0SHhTb0s5S2lISVFPNEs4akxWVDhyZyt3dzY3YnRWYWt0Q2o4ZFk2ZDRFR0ZPcnloNS9seGxPekxFNXVqcjNKQithZ2o2R2NiTFBQT1lwK1ZaS2Z1dEd0V1AwWmY5T1BSNFJ4ZEdRZXRMa3k0ZmxGbzBrcEo4S0tGSG5ITStaMzk4UjRmVGp2R083MUdiNVFnUHVxQSsrQ3NMdUxjYW81ZFpxT0FlUzdrK2dHTnRBZkJjTXF2am15SG8yREh6S0xHcGxYMUlINDR4ZFB0V2MyN0lxaFZVU09aUHIwOU1ZcmlYRWFock9DeGtNUkpNL29Zd05uSGJ2YU9nVm14RW1pdTBaa0JrSWtRd0k2Z2dqbjVZNFB4WEphZFZGWkdseVBPQWJHL2xicmgva2ExUUFFMVdqa3VGbkVrWmlTTnphWmpHclhhY00wb2VqbXl6S2srQkxiN3gvU2NhcmhtYkJKRzhEYjA1ZnJyakxaZmh6RXFFNW1QcU1QOHBrNGQrUURSRzIwWHY4QXErRWNCZEtqWDVwYVBWNTJ0ZjhBcjh2NjRhMEdGUmJlR3FrRWZ2Ui9YQzNMNlRBQm1iRUhjR0pCOUNKeEdrL3drRy85N1l6bHBCVjdEZ2o4NXF6bXBhbFRRaTAyOEtpNVljMko1RGNBZE1WZG5TeG9hcmQ0bzd1bmV5S0oxRXh1U1ZQckNERWMyYkZ4ekJERG5jUWZuZ0RoenZSTGliVmRTcnlFaUFmUWhZYWR2czJ4Umg3MW4zMFdDWmdhY0lGSzYwYStYZk1JR1dOVFNzcW9nVW1KVTJFRUE2b3hzNjFGR1VGU3BvMVBSZ3JHd1pUeURXQmkyMXJuR2E0cEZUTWVKaFRwT3IwV0Q3b1dRVElFUmRBUVpJdUR6d09tU3JaT2tycTV6R1dpS3FBa1JCSUxDTjBQbk1XNWJHUHUyQ01lL29vRXFkYk05elNlazBGcDdzS2Z2SmRRVkhPQ3pSemxoMHc0L3dDS3RSZ3NsVnorMW9ZRjFNQUFsZ0paVzByT3hEVDFqTzFNOG5kSWFjQ1NvaFJka0IxSFVCOS9VSUI1K0U0MG1iUjh5akZySUJxUWJOcTNCWWtSSUc0Mms3bU1DSEZnSGJaQTVVT0Zaa1UwWjc2dFVWV01tU1lNZzdOQWlML2V3UnhETzY2cTBTUWZ2SVZsVzFGZkNEeTU2Z2JUQmtRQ2Nackk4VHJ2VE5EVXBMc2RkUm9Xd1ZWQ3dCSU5vaVBsdmdUZ3ZGblpxbFVBczlNU1dsUUJLOTJtOFhnSDY0QW1EbTBQZGJyZ0ZmbmMvclp6VlVCMWJTd1VnYVFkSUpGaVNOUmdqb2NYMCtKNW1tb1lIVlQ4S0dvRUlHZ2xra2lkZ3prNm92M1l3ejRmd1NsVmsxNnBKWncrbFVGaUJBbG1VazIzNjRjOFE3RzVkMEZNUFdRTjRScGM2ZnZQZFQ0U0pCTVJpVEkzT09wcC9WTllLQjRibUsxVkNnTk5LWmx4S3VwcXJxSTBqeFdVZUVFM3NRT2M0dG81MnAzTkdzVjBnR0NVYVBDeElJMHdBSU1SRTdYeFZ4UEoxY3BUZ3NLaWd6VGdhU3BJSUtpOTBZVGI3dTQydGtobjNWTzRGVFVoQVlvMzNiblltK20xK1Y5c2RMTVl6VHIyUHBTS2FkcGFyTXowKzhMb1hrRTZkaUtaTjFBRWFnUGxpL2dMRktiYTNLSlZYVU5KOFRGRHBpUjhIeHJ0NG9neXNHVkhGdUxoejNwSkIwbU5LZ2hRRmpVUzRJbWZROU91SjhMeldxa2hJV0tkTXdZdmN6QlBUZmZwaUhhaHJuUHZyUzVQdTFKMTVVZDBGN2xXVWhRcEJrRWdzRE93TFFiWGszd2t5Wk5haTZCWjBLYWhtYmtBUXN6OFJuNjRpbFdxS1lwT1dBMkN0Q3dKQk5yUkxRWmJwZ0RLNW9wVHFwelkydkJKYTBBYzkvVUZRUnRpTDVteXpaeGpQbXUyVG5zMXhnNWVnRUFhb3BKWkxnYVJ6V0FOd3hKUHI1REgyRmREaWY4QWxhanJNajkwOWI4dmVSNVkreFJuRnlNR2t1T09nQlMwQ2lXcVZJU3ZVQXJVcVRCR2tEN29ERXVpWCtDWG1EOEpuRG5pWEZ1K0NWS1hkdjNIMnF1ckNvb2E0Q01XQ3NBZExTSTFLVlE4c0orSDVaZ2Urb0JYbHpTS2EvRFZpblZmVkpBZzZDeTlDVGNiemJsY2dhMUJhMU9vUlhMaWt3SGdkaURwMDFsa3F3MExyMkJtVGUrTkVMUzFoRjVPVDc5RXlJNHptOHNVeXBDbGxSRlNwOTFvV0JHMDJtNUhKeHZPRnE1eXBsMTd3UFRXcWlLRkRRVFVSeXBtbWRVR0dUYUJhZWxyczM5bi9tS1ZRU3lwb1dvaVFEcll1TmFORHFaQ3JJa1NrVHl3cDRsbGRSQlFFMHFRWFdkMHA5NFNOTXlUSDd3NWsyV1FBRHFhNitmdjdKcnNJbnRSeDMvT296V3BkMkU4QmtsaVNBYjdhUjRpdk96ZGNJczI0K3pxRUVnZ2FnUFlFK29pZjlzT09MOExOTlZmUVdwMUVEQW53aVdXUnBLeEVFaGh0dEVXT0ZHYnk3TlFVQ1JvY0VUSkJCSGlqWUhtTFlqSmV1M2IyZ0JhTnJnR2dDakE2UEZBSDNXTS9MVVFRT2pIQy9NNWVhWWZZZ3IvQUVVanl2SHl4ZDJlYzNSMmtTeVNiK0ZnYnoxRzkvUHBqMVFaYW5wdXFNekUzRWhnU1BPREh5T0pFRUdsd1d1NEpEWjNLa1hsUVdqbEZOaGYvU01hZkpIV010VlAzOHhWcUQwYW5tUW4vWkF4anVGWm51a0ZXbUpidUdWL2N1SjhvOEI5aGpUOFd6aTVmTDVkQVJyUlZJRnZ1b1ZOdjVzYmVHZUdSbHp0aG43THFVdTJmYUJhRlBRclRVWWl3TndzeVpqYVFOUHVlbU9XOFJ6OVN2VU5SekxNYi8yd1R4NWkxWmpMSFY0aVNlWkczcGJiQXRPaktNMTVVcUlpUkJEU1o2eW8rWnhVeTlwM2hzdFVUUTBXbVhZc0VaZ3pzVVA0akFXY3loT1plQVQ0dHNIOW1YQXpDanFDUHAvYkJkVlB0cWdpYi9TQmpDTGJ4VHZ5ajdxcmZ4cW5LUkJuckhVV3dTdEJTTnZ3eERPVW5DaGxWZ09ZRUVmN1lGeW1lSCt4R044ZVFpL2RPK0Y1WlJVQk1XQlAweG1lM1dZVFFvS3NWT3N5bnhGdTdPaitVT1FUYVlKTjR3KzRJOHRVY3pCR21Kbi9BRzJ3OW81Q2pwMU1BUjBrZlVHeHdXUDB5RW53SHI2cVdrT3RaTC9ET3F6NWFvYXBKN2wwMFZDMzdRT3FuRzRDZ3F4azd2WUM4c09IOFNsMlA2NS9uOVJqM2krZlFLYUZNSWxQOW1tcUlONTJXd2s5TjhKYU9ZVlRITDYvM3hkd0Rzcm05M0MzL0RndFFzaDNkU0FmTWJIR2F6cU9panUzZ2d1U3JFRWFsSEljcEIwODVuYkIzWnZONnF0TUwxeFoyMTRjbmZnYmFSM25xTm9PM1RFREhoVG55c3Z4SjNNRmwxTXBRbW9HTndRMm1aMk1SSFRTZXVIK1E0azJobnB1QXloUzZINEhQdzJYOTZBYmRiempOOFR5eDc2cFRWU1ZRM1pUY3h5aUNiVEE5UFBGVFpPSzYwaXhJMUR6bGZpdGN4YThlZUlCejJQdjRMTFY0V2o0TmxsV29XQWpVWmpmVElFeDZtL3Y1WTErV3pham1NWWRxc1ZHZ21KL1hQRm4vRmdnSm1ZaVk5OFo1WlpyTFltanpPeTlOa2JBMFdVNzdUOE1TdXE5MlJUWlF6S3dHa1R2QmpZR1drNHpXUWhLUnFQcEFGM2VBcGtTQXd0RE1DU3FnZ21aUFBEWGgvRkJtUXlFSFNJMVhqZVFBQ1BLWjl1dUFPMG5DaldBcDVlRHBZTnBCZ0d4RUNiU0p3STJTQ3pLUlo2WVV0RVRwUXduU0NhSjhFNDdCWlo2MWFwbURWSlNORkpGSmdMSXVRMzNoRWVaTEc4ZzQ2Q0dtcFRIS0dZY3RnRi85c2NpN0dkbmM2bVlEVTFxVVJzN3VDb2puWS9HZWtmTVk2Znc3TWVOZFRFbWxUcUJ5ZXZlS1BsNExZMlFzcHdOL3VyL0FOVmhaRkxUSEFpaFZjaHlCcEU4WnBwVW91cnFEZUZCR3FXNUFEbVp0NlRqalBFajNUc0doQ0pCdGNsWkJVMytFVGIrODQ2MWtzOERVWjNCZ2Y4QUw1eHFKSnQrMXlKNldIT2NwMmk3UFZhMWFwVm82QVdJSzY1R2t3QVNBQWI3bWZNYllUaXdaS2NGNTdXRlkrbXBOVW9kSldCSTV5QWRRamU0SGx1TU02UHdFSURlREF2c2R2Y244Y2VQd3V0U3JPMVJRUkxhWTBraVRZRDc4a1J5dmJBdFhQMU5WT21wWUYvaUYxQWlac0xYSStYcmp5M25haXVxamxOMFdzRzd3K0Zwa0ZvdEhNNnZQbWNLcy9sYmt2VnBqbkNIVWV0eFlFbjZZVzhUVTFHQW1WU1RITnpibjY5ZVI4c0ZwbG5WVkVEU1RNRVNva2pyemdFV00vUEJhS2JaUGlsS0Q3elRBcEtydGNzMVJDZlpRYlJmZVBmSDJHT1hDS3dJSVdWTXBjN0hlWTI1Uk9Qc0VDeFlDRkoxbmN3QlVEVWRKV29UVXEweks2R2lxakRhd0sxVEo1a2UyQmVJWitvY3djM1RBUnBzUUoyVXFDUTBnbUNST0JhSllvRkZodWZNK2ZrT21KdFUxTEVnRUdEUFAweHBNcm50eGk4L0ZjU2hzM3hLclVJWjNrZ01KaFI4UkpPdzNreUR5TzJDdUJPd1ZnRllnS2RUWEkwa1FWY1hYVGZjajFrV3dMbDhzV2NMNXh0amNjQzRiM1FOekxid1NCOHRqNm0rTVQrS01kT2tKSjVkYlZJNHkvWkl1RVpiTlZNcTJVcUpxVk5QZFZTUXV4RXFSSk1STVd0SHBBWC9BUGpzMm12U1VaU0Q0VmJjK1lZQVhIbk9Odm1Nc3luWFQzNXIxL3ZneklWMXFMSVBxT1lPTS84QWozeU9vcTNZdEM0OGNrOUt0QjFLUkdvUWJiL09MR2VZNTRubVdVVmRSaUdBYWIybXpiSG1WWWRMNDZkMmo0T3RlbVJBRlFBNkcvb2ZJLzN4eS9QblFpbVNIbHFiam1JQklIbGN0N3pqVkR4QW1KcmNjbEo3Tk9Sc2kyekswcVlGTWsxWGluVVZ2aHZzVmpxdGo1cjh4Y3BtNnVacVBtYXJrbHBSQnNMUVdnZnNySUhtVzhqaW12UVpxbE4xaURCSTgwRUh5MnFEbmlIRHMyR3pmYzB3UXFJUW8ybjcwKzVZdDZrOUJqWWJFTGdPbm91Q2p4cXY5cXc2QUQ2REVNcldIYzE3N2QyYmZ4eC9YRmZhTVJYcWZ5Mi9sWEV1R3NPNllFQUVySk5wTVZGajF4b2pvUXMvNCtpcHFvQUpud0dvV3JJMjdLYitha1JQcUNSN0h5d2RtcXA3OTEvZS9vTUljam11N3JVbUZqckE5aVlQME1lK0hPYjhPWnJBekpZSDJJQkh6bkM5bi9tTC93QnZxbkRxY3RGUjB1Tk1uYStNNzJneUJSeXlpeDUrWDU0WTVUTmFiY3p6dDhoT0diNWRYVUJyekhMOC93QThYWmdxanNyTlpETWhhRlJ2M2xINjg3NDl6dkhpdEZZSHhGaDhvd1R4RGdVVVhwMHViNm85Tk5zWjdqQ0NuUXBxeUNRR053ZVovdGd4SFU0L205Rm55Q3ZLT2JaellBdDB2UDRIQnRUTEFLV3ViM0Z4SFhmY2NzWi9zMjkyTGdUTjdLZ0hrWUF2NVkwV2R6S2xKYTlybVBlSlg5ZXVOTHQ2UkJ4YWJmNGJLYW1lc2ZCVFVzZm9BTWJIL0VISnJvRmNFQmxHZ3lZMUJwdDZnMzlKeHp2c05sMGFvN0ZucHNxbGtxSVlLa1FlZnhBbUYwbVFaeHN1M3ZFRmJMcUF3MUxCWmpFQmlJSWphWW4wbkFOVVVIRG1zR2xaMVkxVFVGNUF2MXNESG9meHhDaFUwMTFpU1ZKWXRFRTZrQUk4VzREVEhrY0NOVWFWVndvUVhKRjUzanFZMjU5TDRDR2JxYWkwRVF3TEJBWVVhZ05qYmMvUEdMVG13b2pCeW5HYXpjR0I4c1U1V296RjEzTG93QTZsUnJBOVNVajN4UzJZQnNUNy9uK3ZiQzJwbVhTdFRxZmRSZ3lFR3pFRUd4RmlPWHo2NG5wYzQ5NHJjWkJWRGRhWHNyVTd1bXJNVHFhcUdOcHNJdDZRUHJqVTVZNktoWFVGaGpjMkVBMko1WDN4aURXQ3N5SVlVTVN2OExBTXYwTWUyTlFLdmVWRlVHeFFGenNQQUZCbmY4dVdNMDJyWGJkMWpjeHJqWGo4MXErSGNiZHRURStBV1dOMlBXZVMrZ24wd09sVmpXcXVlaW5tZDlSNW5xRDg4QTVhbytrTm9FSHhBRm9pYjNrY2dZd0xuT0lPSDFCQ0FFKzB1RDRaMzhpSjUzZ25Ca21kUWF6SkJ5ZVFLczJOckJaV3BPZVJBSlBvT1o5Qmltdm1LenFTUHNrRnl6R0RIb0xpMysrRWVVNGpUV0N6Rk5XdHBLbFRFbGhCSXZNOHNYY0JZMVdZdDhPcldaTTNNd3ZvQUFaL2h4bGUyUjFhbkZ4T3dHQVBOVmE1cFJGWGg3QkEwblVTVEEza0t6QVNUY3lBSndqcVpIdTZkTjJhektZVlJMYW1JVUdTWUEwbjY4NHhvdUxadlV5VWtCZ01wSkhYcDY2VFA4eTRSOXFhbmV4U1F4Y1hHeWlCRWN0dnFZeE1SOW00TUpzLzZ2ajArVktiZ0RaV2VwNTc0M1ZGV21oaFRkbWM4aEp0NXlxaTNyZ29OcXV4OGF3ZE1sb1kyaFoyVVI4OEJaRkVyT05CMFphaE1OZTl5QzBjMllpRnhmbW43MTFwMHdhWWNXamRWMkYrc0F1VDFPTk1qQU1CWmxhNEN3Mm1TYlhKRzF6eTZ0SG5CNlk5d0h4Zk9wNFZGZ0FJM3NPVnh2MXg5aFF4MVkreUZwOGJDUnNjVTZCcElqOWZuaU9TcXpLbmFNZVpYSkh2VUFmVFRKa3dvTXdOcG1SYWR1Y1dPSXd5SFlMZ0xUdnM3a29YVVJCYTQ2eDY4cC9DTWF6TExBd2d5V2FVT1FUNUE4cllqbmM5bU1vNHJLM2ZVV0pCUTdwNkVjc1k5UmxsMHV3QjcraTJNQWF5d3RJMVE4aE9LTTNsQ2g3eWw4VVN5OG1INTRGNEp4bEsxVWtiT3R2VVNTRDgvcGgvVEc1NjQwOER3d3k4bkpzZVg4NFhTRkJaT3V0Wk5RTUVianA2NDV4Mng0U085Y3lBajZXa0h4QndDRGJvUVo5empjY1Z5M2R0M3RNZ0UvRXZKaGpNZHA4c3VZV202VlZVQStOTmlMenZGdG93UXdSU0J3b1lvbnI0L3NrZGx0RlpPdlJOSVJxZ05BMVJNMkVUTmhxMFI1a1JnZjhBNFMzZVU2cUJpUTNpSU93UE16TWdkSkcrSDJiUk83QzkyS3BJanhXV1BFWkk1aVdOcHhSa3MyelZlNmFvak10eWlDZEl2OFFGbGtkY2FSSy9UYmZqZnY3MG9nVmxLTzBXUVpzdzBYbURzZWdHOFJ5NjRobDh1NkJneWtlQVFZTUdYYzJPeHNCaHIya3BWRksxRkRFYWZGcGJUdE1tQUpOcm55eFRTcnVpb3pNUXRRU3ZpMWd4SVlHUk1nMkk4eGlzVXozUXRJb2dWOVBmUk5leVQ1K2ozZFNneCs5cGIwSWNpQjhoODhQdTBHZGlxNy8vQUUzRk52Umwxb2ZMNzRueUdMTTlra3pTcDhLdWc4T20wd1FkdWM0VjhiVW5ONXFnUi96NkFaT1UxS1FEb0FmUFN5L3pZcER4QWttYjFBTi9NZWlKZGFiNUt1ZTdEa1FUdCtQdlA5TWFETFNVQkoydjg3ZmpqRDVQaUJwWmFrWEZ5d2pWYlpRWkZ0cEorUnhxdXpPZERIUk16YjU3ZldQbGpTeHhjQ1QxUDBLZHI3Q05hcmF4NmoveHhhM0RhVllMclVIbEpGeFBRN2oxeFF1V0xTRmd5YkQxdjg3WW5STEpDa0crR2hOT2QrYi9BTWdybGxlTjlpV1Z0VkFuVGVGUEwwajhCR0k4TjdNNWg3TXNDUk1uOWV2dGpwR1JjTUlNL0xyL0FMNFBiTGdqYURqWmFVckVaZnNzaWY4QU1Pb1dPbVltT1pPOXVucGhkMnFyclRwQkZBQW1BTWFiak5UUVRKMnh5M3Rubnl6Z0JyQWJYdWVmcWNJNWNUUVZWU3VmOHV5OGxiU1FSOTFqSWdqOTRSSTY0WFZSQUFtYldnOVlPelg5eGl6aGxRdWFpai9xSTF2M2x1RGdHcFJMU0JzQUphUEQxbU9tSU5HU0ZGWDE4d1dsbTFTMjVpODJrMkEzeDVReklVR0R2dksrRSt2TDZZcldpdW5VcDFrODdEcUxCckRZNzRJeW5DaTUxRTFBT21yZnlHQzdUV1ViUlZHcUZVVlhzQU5BVzhNUk1YL1pBMzlJeHJPQzUzdktBTGN3VlBtRHBKZ2VadDZZUkNnajFSU2NDRDRWNnFkbEpVY2dUQkRSWW5EUE5zOUtuTk1STlJyMnNBQ0p2YmtJOXNZWmFOQWIraTRFZzJudFRpU1V5eU1ZOFJnTEpQVTZlUytaUHRmQzMvamptd0FwcmNrQVN4bTF5YkMxbzMyM3dyeWxEVVZRRXN6VEVSSk84U1NMVGY4QVBCSEVjaDNLQWxyNmhJRnJ5QkFQTXdXdWVuTEhCcnROTjJWUTZ3YlRUaUtrRUticzRPaVpnQU5wdU9RQ3dZRzhyMXhPam14UlZXUTJaeVlqbGZUZU5Wd0IraGhXdVlhdFJLU1RXUXdyQWk2bTVrOUZIUHlITEZOVGlOT2tBcXhWZllNNW1tdjhLaUM4YlNZWHlhY1NhMDVBM1U5VlpXazRkbWFyb1daWFBpRU1xbStxQ1pOeUpJSWsyQUlFamJGZWM0cXRLbXpFQ1FDdHZ1bmx2emwrYzdZVTUzTlZGcHA0aTc2QXhMbU5Pby9kUVFBSXNJR0lDcDNkQjIzSVVNdGdZTWhSSlBPU0RQN3B4SXMxSFBQMFhhamFnNDFhS2NMU1FMcWVtTFFZNmJ5UkFBNVg2WXFwc1g3MXBhU2hDbmFKSGxGbzVlWFBDcWs1K0c4dGRwTjJuZmU1Snc3cFBwa3RwOFFlRk94WUJpZllkZjdZczVwQlJMZGtEVUMwclZBczhvRTI4ei92YU91UHNWMWVKRFZzeG1TRmhTSW40anFIeGZvM25IMkhNWG11ME42cHhscThOSjJKMG4zd1dhaEJaRk02YiszNk9GSStIK1lZZE5TQmRYVmhKUXgwWWkraytzRWUva01lYzZnZmZKS3dYaFZaWE9sVDFCM25HZ29aNE11a2tsQ051bm1QTVlRY1NvRHcxRStGeFBwK3RzVlpQTmxUNVlnNXVzYW03cXJIZG03S09xVkdwMVFVT2h5ZkRGZzBjL1hHdnlYYVp6VDhhRFgxbTNxY1pITWNSUk5ETXNqclk2ZjY0YVp2TFVYQ1BTcWxWaVNzeWZVQW0rQ3g4clcyMDBpU0hPN3FkRldxWHFOSFA5ZjN4anM2UTVaTlV3Yk9QQ0RlUmFiV2dlMk5MazY2cWU3cklySTR0cWdnK3U5dlhCWEd1eHkxS1pha082cUNXVUk1MHNTQnZJRUd3amtNVmhqN1FYekh6VFNBVXNSbWFpTDRTSHFmRVowd3EvRXdCZ3lkOUk2emhmbGFXWlNyU0RFTFNEQWhGOEtoZTdxeklHNTFhT3Z5R05kd2ZneTVyS05VQVo5RGFYUmo4V2tLM0tMaVJiMXdMazhnclZKWm1nS0ZwcDRRQkI1UU9RM21UWWVjN1dhbXQwa1pjRDVmc28yQU1yUWRtc21tYnl6VTJVcWZpRGtiRXpZbm1PbzZIQzNzVjJVV3RscTFQTXEycWxtYXFnZ2tGZkNvSlh5SkFNWEJ3NTRidzl0Yk5TcXNyMHlJRStGeEFsWEhueVBMRCtoeENrcnVvOEpkdFJtMTRVWCtXTmNQWlFzYjJsRE5lZTlMZzF6dndya3RQSVpoS3IwYWRJMVJTY3F6QzNPMjl2UEIyZnBMVnFvTk1WRXVoTytvZmRCNUU3ZWUyT3Mwc3VnQmdDNUpQbVR1VGptdmEzaDlORldxR2gyck5TS2svRk9vcVIwSUlGK2hPSmNUd1dsd2UwOVNVdDJ1ZWRvV2Nsd3hzRVUwN1c4RjJJUFU2dkxsaXpnV1pkVFQwc2RSQTFIb1ZBZjU2UVBrY2RCeS9DTXprY3dsV3BUU3JscW1sS3NIVUYxZUZpUXdIaHNwbitMcmZTSHNUbGFWSE1LbE5acXRxVmlBU2t3SVVtNFVYajF4cmdqZUk2TzQvVDM4VndPbFkzaHZFUVhybEpXd3FvRElJREF0ei9pM3dYUjQwQ2djbmZZL1FmaGhUd2pLUjNiM0FhbTFNK2NPVzM4Z1FNS0Z6QXAwa2tncXN5UFE3L2ppVFFXemFmRUgvcVI2S29PVjBMZ25IUWxuaHJRTmg2ZnJ5eGJtK01zMHgvdDc0eE9Uckl3VmthZGpiNVJIcUNQVVk5cmNTZnZTb0ppUHBHL25qVytRTTNSY1FNcTdqZWJZaGpOaGRqMDZZNXZuTXpyWXpHOGc3WEh2MC9YVFU4ZHo1N3JRaEJMSHhHWWoxbmxqUGNJeXBxUHBRRXdKWjR1UmExTWNwSkNqbkxUc01GemdBa2YwVStES3kxNllLd2hNU2Z2U0NJWHFMNy8yeFc2SFhwREd4Z0JaRW55QWkvTG5NWWRaWExNMWFrOHBwVjlKQkYxSWdnTHpQTzQ2TlBtSG1kU08vZERUZGd6ejRya3lBWThLK1NqcDY0emFnWGZCVE82cXJOSGhxRFVkOUJoanp1eE5nYit0ellZOWJOQWdBeUpsZEtFZ25hRnRzTHhIeUJ4RmVITlVWUXNvbytOb0pKNXdEMTlaNjRZMDhrNENyU3BhYlJJK0s4ekRiS1NCZHBKMjJ0Z09MUnVnbzhQeXVsOVpBVmhzdlN4QUxORzQzOHZMRjlUUHE5SFh1bE9zQVBpRW9WQzhnRGNFL25oNWsrQVZIVFNRRkpFQURjRG1KSUpreHpuMXdkUjdPTFRCV1FwTzhHRDVFa3laSFhHWFhadmMraUlhU3NIbDgxVW8xTkVDYWJFcklhZW5pa2JFYjRNQmV1TlZRNlVYeEV6SUhPMzdST3dqK3VORnhIc25YcjE5YVV6b055ZFFNOVNxblk3ZlhBUEZzdldSSEZXaFVTbW9FU3BJSmtUTGJiQTNubmlqNWM2VzQ2KytwVEhVbDFmTUR1SHBvaFJZRGIrSmhxQThaSHJ0c0QxaWNVOFB5a0FWS2lmZUFwcGZ4TWRpUU4xNTM1QW5sZUdUcjZGcU4zYXVTcWhWT295VFZwMkFrVGRwOVNNTzhwbWhVck1CVEFXbHM0Y2dBcW9CT240ZEEwMjhnQ044S1FXdE5EQzVyVVJ4V21wZHpKQVRRbkx4TkFiNVFYSjg0NjRFb1o0TzVvS0FRNFlBeGNGRldTU2JhSkUrc2JZWDU3UEJuWTZDRllDSU56djRyN2d4dGJhTFlZY0lVMGFYZWFOUmRnaStVa0ZuSTZEUkhtVGlkVU03cmtQL0FKZGFWNDAxQ0pZQWs2QllRSnZxNXdaL0VDdkpJWHJCaWhHaUFva0h3N0h3aTRCSFU4OFR6aTZrZW9SNDVWR003ZkhMNzJCMHg1d2V1QnMxbEtoRk1VOVVScWNiS05kMUJFWGNyY2c3QmdJM2x3TEJ5amxGVnNrYVowMCs0ZGhZbDI4WjZreUpBbnBiK24yTE14UzFFRVNXMGdNVldUYjZBYy9VNCt3alpjWlQ2dkJleEM5ZkZoeGxhSzFzdTFaZkYzYUhSdXQ1bTRuY1JoTG1XK3pCSE1qQjNEODR5OE9xU1laaWJyRmo2RzI0MnhHTmdPVDE5Rk9MY29iczd4RGVqVXRBYlNPaGtTTDhySEJHYnkrbTQyeG44N20xZFZxRmZ0QWVSSTVjN0E0WThEejdzQ3RVeU9XT21oSTc0K0lYT2VDS082T3k5WWZDMXhnL2g5SFN3U1FLYkVBZVJKajVYd3NxcUpPa3pHNHdWbEtzMlB0akk4WXZselFCcGFVVWxRaE15aGVtRElBT2xwNVEyNEZ1Unc4NEZXeTFjSHVxZVl5ekt4VFZxSkVnQTNHcGxLM0Z5SXZ2aEJTelZSNURtbXkrWU1qcnp2UHRIbmlkTGpGV2lqMDZiK0M4RWJxVDE4c2ErRW1iQ1FIMFdubldmSXBuR3pncHZ3TGhGVEpVcTlOcXlzejFXcWhoejFLSmtIWXlKZ1d1TUtjaHdWcWdFeXlLYmhURE5IVEgyVDRwbUt5S2xjU1dNSytrQXh6TUMrM3BqWGNBNGFFdVN3QStFTkgvQUpDM3RqMFEwVE9BckFRSUNENEhsNlMxblZHSnNOTno5UjE5Y1F6OURVenN1NGFDUFlYOWNYWmlreTVtczZCWlhRU29FYXJHU0QrMTVZVk54RmhtS2pvcE5MVW9aaVBEcUtnbVBTMDRoTkhHNkxzcEc0czdjaG5JOHVhZUtSMGJ0VFZyT0h1M2RqVnVCakE5cU1zcmE2dHc2VlpnM0J1TEVIR3R5VmRtZUo1LzN4bGUzL0Q5VTFSVUtsYWthUlBpMUpZQUQ3Mm9BVDVuR21aZ0VUV2pOWXo1SkRseEsxUFpyanRQT1VkTHFxdnAwMUtlNHVJT25xcHcyckQ3SmttU0VqenNOL3BqRGRtT3h6b1JXclZUU2k2cXNhZ0xmRTdUZmZiOW9qbmpTNS9LdXpsMDFXdGV4TUFYOURneThUTkhEcjBhanpBNmRVWTQydWRSTks3aldTRFpWbFNGQVVGUkd3VzhBY3RveHhiTVpZYWl2bTVDOVpiVkh5eDJuaHRkbnk4RmRUTEtFVEcxdWZsam51ZXpYMk5XazYwd0dDcHJkUzJrb0NBVnVJY1JJOU1MTTVqM3h2NmoweDkwQUtORlpLcGxSVElOSUhXMTFJSkhRZ2tHMnc5b3dYUWZ4VTZyekxHRmdpQ0FZYUFWTXhjWHRmbmlpcFdaU05ER29nTUdTQUxqNDlvSkY3RGUrQ2NsazJyZDBxZ2pRSTFra2psSVVFOVJ5dDU0U1I1Y0NqbHhVTXBtRFZ6TG9jcmxscExjelMxRWcvRDRqNGVwc3NXTzJMTTF4VU1TRXlWQ0poSUxVWDBMT21TR0FtNTBycHQ2NDJPVTRDZ2dFVzV4YjhNT3FYWlBMTUFUUVdZc2VmekY4Wm91Sk1zem93TmdMOTlWZDBSYTBFcm1sSGlncXVMQWt4TGJtMGZlRUJ0b2tqYmFMelpSeVZKWFpuYlZjdHBKMDdtWTBnZ24xSmp5SXhyTzBQWnFqUlZYcFNwTGdRZkZNbnEwa2VnTVk1enhicy9tNkZmVFVTQnFMSXl5WkhVTnZNYno3Q0l3ekFROGpicGF6bHBDY1Y2eXNaR1dVZ1hCWUtBSnRBVUxFMis3N0hCZE9wVldOWkNSdWlDUFlreWZhZnl3RjJYeWlMcnF3dmgyT2tMTFhpdzVqOHNPRnBtcFV0ZVlMRzMwSFRFWFNOMWx0N2VxSWJnZUsxM1pyTC9aaGlJSnZodlh5U3RjZ1QxaStCOGhsUXFxSnd5Vm9IcGowV2FXdHdxVlNyeTFNTFlDQnlHTDR4VWpUZnJpNVRqd0p1S2RJOGdIRm8xU1Q4UzdNWmVxUzJnSThIeG9BcHZ6UEltUURmb01jNTdWZG1hMlR5K2hCcXBFL2FWRkFCaWJLd253cmE1MkpqYkhZd01JZU85bzZWS2FZSGUxRFlvTGkvN1g1WXBGSTltZHgwUTFMaVNzRlR2cW9FQXhUUUhlUGhFOUxUOCtlRHFaZW9sS2Q0MU5GZ0RlQUIwZ0REWHRMdzFzdlRYTVZNcUFqTnBRY2ttNEVINFFZdDZSMHdtYmlpTlRMT3NDMExUT2xpWkkzMjZlcytXTm8xU0FFRG43Q2s2MDN5MlM3MFZLUmx1OTA2Z0wvQ1JBNlJlLzhST0Z2Rk9JRXNVcHNLbmk4VGhvRS9lTUEzSEtUTXh5c01PZURVYWRPbWFhbC9HanN6TThrRzJrQ0FCek13TitlTXJ3ekpHb0lVRUx6YmtmbUwrZ0dDM1NBUzQzWHlURTBBamFETnBzOTV1VEp2OEFQeUh5eDlnako2S0pJcERXeCtKM0owMjVMWTllVnY2ZTRnNnljRDUwazgxVnhGSXBLRklJa0VIcjB4NXdtb2FtV3FVNGd4WWNnY1hjUXFkelRFSXJhWUFEd3crbHNTNExXQnFrd3F5UEVvMjh5UExCQi90aytPNk1kYWlGbjJWZ2RMY3VmWG5iRFRLQlRGakl2WTRaZG9PQ29Jcm9TMUkySUY5Si9MRi9aM0pLU1RFS0RNM014WUcrSG1rQVpxS1hzanFwVTFPSEVsS3FUdUE0TVJIVVhtZVczUEYzK1hPNHczelZJQ0ZtKzdlVW13d3BvWmpRMFRZL3EyTVFsN1FkM2tFWE5MY0t0czQ0dGhnUHV2Y0dNVXVpazR2UGlRam5oWkJWT0FTcStsbU5EYWtKR25iNWRPbU9pOW5hd3JaSlRVdUdCMWZQSE9zMXcvdWFGTncwa21HSHNiNGY5bmVJVlZ5ZFNFRFV3U1BEOFN6dVk1akhvY0k1OEVoRHRxSkNJRm1renBjVlh2cTgza0lQV0EzNDR1cElLZG1PcWpVNS9zc2Q1OGpqRk1LbFJuWmVSVWpyYkdrN0xaNFZpMUNwdVJzZWNkUE1ZendjYk5KSUdtcy9RK29PeTF2WXdOc2ZEeFdNNHZVelZQTUI2ZmVhYVpKVXFHWlFiM01DOXJYNVlicSticlZlOU5MN1JkTlEweVFvdXRyRTg0dDBPSHd6SlZOQU1nRmxqbllrRzJBVjRObTN6RENsVzdseFRSN2pVR0VzQUdIVEcrTmdjeG0rNHg0clBzRUZsK0tadDgvbDZXWVUwMUxGZ3ZJNlFUYU45aHVjYmp0TG5YcDAwYW5Fc3hVeUpnYUhZbmUwYWY2YzhJK0xVR0FwVmFpNlhwVkozc0RkU1ZQN0pVbkdsNGZtUTZDSUpOaHo5VGowR3RxMjNrL05BOGlzZjJiN1hxTXZVcnZka3BhNmdqVEwweGVKSmdzc0VDZHhnUFBWNkw1UE9pb3dYWERMTWFwSkpCVWMyQk9OZHh2aFZKTXVlN1JGME4za1FBR1AzcC9pa2ozeHluanFnMGpJaURzTjRpUkI4aU56anorSWtkRkt4cnM3L1VmcWdLS1ZaS2pTWnRDQ29USGlabjVXdVYyTi9MRzA0UUZVREdSN09BYUdmOW94TzFoL2Y4TWFqaERpY1E0Z3ZzUngvaVBQb0Z1aFkwRFVWcThvckdDTGV1SENJU0Jxc1FQaUJ1VDZiUmhmbE13QkFrU2YxYkRHcG5GUkM3c0FvM0ovVytHNGYrbXhSQTI0a25mcDcrcVdTUXU1SkQycnJhamxVSUltcUpCQTVEa1J1TVE0L21xZVpVNVphZmVzMWp5Qytlb2M4RjVuaGh6aFNwVURVNlNHVVhaekkzYjlrZVcvWHBncklVbHBlRlZDanl4aTR1Vi9EU05EeVMxMkw5Zk1KV2dFR2x6VGlGRTBIYWdVMGxZTWphT28vQ2ZJNEo0Qm1JcUNTT1dHWCtJcU0ycXVnQldreTBtNmtrRW1Eemd3STh6akc1Yk82YXFGU0NBdzhnZW40NGFYaGpSQzVnYURhNmptZUlGRWtDY0c1Zk9kNm9JTmp2akRVdUpNY3lLWm1EeTVSQnY4d1BuZzdnM0V3REV3cmJkUmpESlB4UWowM3kraXE5clEvd0FGdFVxakVuelNxTlRFQURtY1liTTlvR0ZUUUdBRStrQWRUaGJ4TGlkVE1NQXBKUUdQWHpPSVJ3U2cyNGdKVHBkaHVWcCtKOW82bFk5emxBWk5pLzVkQjU0YjltdXp0UExqVTNqcW01WTh2VDg4Wi9nbGNVMWhGMHh2eko5OGFTbFgxQ2RSUHZINFkwTjR5Tmg3NlYvRFBidWcvd0RFYkxHcHcrdUFKS2dQRzlrWU1ZODRCeHlEaFdUS29LcnBKWDRVL2FOeUpua0FiNDdUeEhNb2xJdHBubGZwQkozOGdjY1M0blNPc290U0tWT0F6bVNTWUV4UDAzbmZIcGNQS0pXZDA0VUhOTGQxZHdhcXpaamFvMit0L2hSWkJzSmdOZUxDMkpjVDRtRmJ1bExLUTJsbzhMRWd4cEF1d1dlUUFucmlGZDRTZ3FoZ3BPcFFHYVdBaUMya3lUendSbXNpdFNvWFR3MWFnOGRVWDBrQUJqY2tLVEZ6L1crS25zOVdwM3Z6L2I3b0NxOFVKa2t6TlIyVEw2QzYvR1JPbGVRVW1kVE56SkpNUkdQc084am1CbHFZcFphQkJ1NTNiZVNZdmMvZ01mWVIwMW5BSHhDSGQ2cEpUNG81b3UxT1ZaREJCK29NNHA0VHhEVldEYVZFcVFZRVNmYTN5d053ZGl4ekUzbFpPQnVDc1JWVmVXbzI5ampSMlRRMTQ5NUNRRlB1eS9IaFNaNk5RRnFMTVF3M2lUdU1OZU5WS2xDQlNaZTdnYVQ1WXlGZHpUWXNoMG1ZdC9VWTBDVkMxR29HTWdGWUhTZDQ2WW5QRzAwNmt6SGxlMXVJVjJNQ0RUYUNXQmtrOUR6OXNGWnlyQ0pxSUJXZktCNW5DbktvRVlGYkg1L2pndmphQW1uSTNZVGlRYUk1V2lrQy9LSnlGWmEvaDFRZVdEb05JZUl5Unp3bDRkbDFCMWdRM1dUaHB4ZHpiMHhDVER0QTJLRHNJK3JWTDA0QjhNekdLOHJuNjFLaXdwMU5NMlpTSmtEeStsc1U4SmI4Y1I0cVlaWXR2aUxIdWErcjhrRS80SnJ6SGVWaTFPQVZCN294OTBHd05wdmZGT2M0bWhLRTAybzFsUGhjK0VWSTg5cHg3MlNBR1NyTUFKMVRNRG9NVmNTY3NsN3lKOTRJMnhzbWhZMEIzTjM2cHk0MXA1Sytwbnk4R0laVnVlZGp2UHZqMmwydHFVbmFvVHJZcUVCallUYVlGNGs0eWZBOHcyalRxSkhpRjc0TDRPUHQwOG1uNVhHSlI2MlNmaTVwYlhST0pyVnpOSXNtclFBRERxeWs5WWtBeGhCMmY0azJYclFTZTdheFUvZFBsNVk2UURhZjNmNlk1d1IzbVU3MXdDNFpocWdBL0VSeTN0ajB1TGdlMTRuWWNnWitDdEhKVFNEc3VpcG1rS2FpZkRFbkhMTzBDS2FWWjBBSVlHb2dCbndpK2s5RHVZODhFY0VxSC9KTGMrT3BwYTV1Q3drWWRjVnlxZDFVcWFScjA3KzBYNUcyR25IK0lZRDBvKy9rcEFVdVljQnF6UWhiTUFUQjhpWkhyeitlR3ZEODBWSGgzQTl2VnZMeXdxcW54aitsc01lRzJCeEoxTmNaUEJhQlBiZEsxUEQ4OHRKZThlV2Q5clhqb281QW0ySC9BQXlrWFlWYThGaDhGUDdxZWZtL255NVl5ZFJ5S29BMkNpUEswNHRwY1NxZ2thejlQeXhLS2NjK3FBZUYwV25YNWVXRVhIZUk5MEN3dXpFS2k5V05nUDY0eXk4V3JUL3pEOU1DMU0yN09DekVsVElubGlQOVFMT0pqYTA4amE1c2dhU1UyN2JVUlQ0U3loL0VHUXNiWFkxQVNUN2s0NXZrYUZSOUxCUklZRW43ckFIOGZiRzJ6TlF1bWh6cVVrR0QxRzJFSEVISzFBb01BamwrZStLdW1zQnJRazEyY0luaDlaZzdNSVpSNGRUQWdpT1huNjR2eXJ6VlFEYlVDY0NjUXJOVGtJWUM3RGNYM04rZUE4bm1uTHFTeG1jWmRHZGFEcFM3QlIxY3AzcnZVSWpVZEsyRUNUZjF3NW81bEdRQkF1bUxReXpPTTFXcWt0Qk1pZWNIRExLWk9tRWM2Rm0xeUFlZm5oSkdCdzd5ZUNVdGRoTUtQRmxwOHZ2RDd5bjFCdmIzdzF5L2FLa0lKY0NkMUY0UGxHK015dkM2UGRodEFucUpINEhGT1VOeUpNRGFTVEdJU2NMRTRjMVE4Vzg1S2Q4VjQ4S3pLZ1lyVG1TSXNmNGp2N0Q1NHczRTZPWXFNNEVBT1k4UEpTWmk5cE1Bay9YRFZ2RVhKM2ducHNEMHdQUmMzdjAvREd6aG1pQWR3TE82Unpzb3pOVTBHaUFTVlRTQ0RwQzJFalZ2Y2o3b256R1BzcjRVZ2hRdlFEUW84OU55VC9FU2V1Q2FRc01SekxFQzJFN1VudXBRNURHdFRVa3hKUE1qOE1mWTg3b2F6dnR2Sm4zTzV4OWhpRytLQy8vWlwiLFxyXG4gICAgICAgIGRhdGU6IFwiTWFydGllIDEsIDIwMjFcIixcclxuICAgICAgICBsaW5rOiBcIi9zaW5nbGUtcG9zdFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJHTyDDrm4gbXVuyJtpXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeE1URWhVVEV4TVdGaFVYR1JnWkdCVVlGaGdYR0JnYUdoZ1lHQmdZRnhvWUhTZ2dHaG9sR3hjVklURWlKU2tyTGk0dUZ4OHpPRE1zTnlndExpc0JDZ29LRGcwT0doQVFHeTBtSUNVdExTOHZMeTB0TFMwckx5MHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFLd0JKZ01CSWdBQ0VRRURFUUgveEFBYkFBQUNBd0VCQVFBQUFBQUFBQUFBQUFBRUJRSURCZ0VBQi8vRUFEMFFBQUVDQkFRREJRWUVCQWNCQVFBQUFBRUNFUUFESVRFRUVrRlJCU0poRXpKeGdaRUdRcUd4MGZBVVVzSGhJM0tTOFJVV00xTmlvckpFUS8vRUFCb0JBQU1CQVFFQkFBQUFBQUFBQUFBQUFBRUNBd1FBQlFiL3hBQXJFUUFDQWdFREJBRUVBZ0lEQUFBQUFBQUFBUUlSQXhJaE1RUVRRVkZoRkNJeWNhSFJCZUVqZ1pILzJnQU1Bd0VBQWhFREVRQS9BUHBpRlJlaFVCQXhZRlVqZEtOR01ON1lDS0ptTGdLWXM3d0lxY2R6SGFOd3QySHpjV1NLUUJPeEp0RkM1c1FlSFNTRnZlaTRUU2RZbWd3UExpK1hCQ0V5OUlPa3FnS1hwQjBxWEVwY25CK0VWRjVYQWlWdEZ5VlJGOGxVV0lYQktGd0dVSFNMRFFjekJnL2xDTldQRjBYWW1ja0pKVVFFZ1ZlemF4a3ZhakdTNW5aaXJoMk9nQnVHOFFJanhySDlxY3FWSElDM0tsMytnaVhBTUVoWjVwUjZMSk5lcmJ4c3c0bGkvd0NTUmt6Wk83OWtUUHl6RjhzeG9lSSt6SXF1V3B0Y3BIeWFNMlExeEhvNDgwY2l1SjUyWEZMRzZaZWd4ZkxnVkJnbVVZYVhBa1ZaZWd4WkZTUkZnRVJaVkhZaVV4S0xzUGhsTDdvZndzUEUyaFhKTGs3UnFkSUdDS3dSaEpCV3RLU0N4TmRMWEQ3dyt3V0RUSkdoV2JuYm9Ob3ZtWXBJUzdna1JrbjFMZTBVYW9kSWx2Smc4dGFaZkxMRERXdXZWNHZPSllWdnZDb1RuSjZ1WXFNMDd4UHRleS9kZmdjVE1meWpjeE9YTXM5b1J5bmhySW1FcFlGOTMwaEo0MUhnZUUzTGtybmNEa25NV0lKTDBMTjRDUFlyaHlWTFFTQVFBMno3RnJVZzVCR1ZuNlFGeFhHR1dFTEFDa2dzcWx0aStrQ01weWFWblNoQ0t1aHFCWHlqc3l4ak8vNXFGZVE5T3NCcTlvSnFyWkVpN2tQNVhncnBNcjhCZlY0bDVHVStXa3VTWUFtUzJ0RmZDMHpWSzdUTHk2azIxN3U1OElLeFM2eG8wNlhWa1l2WEc2QkZKajBlelZqMEVEajZMb2lac0VBQnVrQ3o1VUJPeWhBekhqd3d6M2owc2dRVW1kU0EyY0JUY0xBNWx0QjgzRURXQTV1SVNUUzhQRlNZcm5GZVNuS1l1bHhDSnk0QVZLd3lRWUxSTmhmTFZGNlZSSnFtRU5UTXJGZ1hDNFRXaTVFMkZhc1pTRzBpWkU4VGgwekFRb1hnRERMM2hqSVU4U2xzeWlkaVQvQndtWVZKREpQdS9mV0cwcVJsc0dncklJOE5vNldWeTVPamkwOEZhVWszYUYzRk1FQ2tzSzNZQzhObmoyWWJ3STVIRjJneXhxU3BtVzRYd0FFQmMxUkFQdUJ3Yis4VDRmdkQzOERJS1d5SlpPMUQ2aXBndGVVaGpFTU5LRlhyRHp6VG03YllrTU1JTFNrak04UTdNTElsOTFoNitmbEE4YWhmQ3BSTGhMTURUU3VwR3NKK0pZY0lJQUE4aTN3TWFzT2RTcUprellYSDdtVThNbFpwaVFSUzVmWVE5WGpFZ3NQT2tEWVRCcGxzc3FjczRIenRReFhqaFRNbnppVTVSeVRLNDRQSEV2eE0yajd3b1hPMGkwVFhEUUptMGg0UlVSSk95eENtdEJXRWtsUmNnTjFpWERNTG5KY1VIeGg2bkNwWm1oTW1WUmRGc2VLL3VQSWxKQW9BSUd4RThKb2tWT3dnUGlaTXJ1cUxHckV1M3JDNUhFMXBvRGZYOUluSEczdlkwNTA2R2FWekRjRUMxb3V3MHM2VzFlQUpYRUZxcjhkSVp5RmtCemVETk5IUm9BeFhzNGc1aURsZW82Ymp3aEx3ekNacHdRMlpJUE1SWnE2NlJxNTA0WkNUYnBBM0JzRjJZenFKekY2V0RQUnh2OVllSFVUampscWY2SXo2ZU1za2RLcjJGelpTVUlDRWhnTEFSbk1mTVl3N3htTlNtbnhqTTR1WlV3dUc5N0x6YTRSek9JOUFpcGtkaTVDVWJZemtvVUtQU0s1dUplRDVtSzBhQThOSzdSZk1DRTcwam90Y3M2VitBUHRZOFpwaS9pZUFNdGxKSktUYzdRQ0ppbzB3aENTdEdlYzVKMHljd0VtSmRscVBPTE1QS1VvWmdIamhtRUdvZy9DRVd5dG5URU04U21UM0RRS3BSZUlTVE5FWmVneVhNaWFwclFGS1hFMUY2eEdTTEZ3bU9UQitFbEVzWVhTWWI0QmJSTmhpZ3ZzMkVFWWFaU0tWS2lzdThUcXlveTdlT3BWQVVtTEJpQU5ZWFNnNjJFS21HT052RlF4QU5qcEZlZHIyZzBDd2hTbkZJcGx6Q2x6Ni90RUpDaTVJT2xBOFVZcGV4ZmNDR2pHeFpPbFl6bDRnTTd3dTRzZ0tHY2RBWVhxbnFxQmE4VkdhMnNYeDROTDFKa01tZFNXbWljdWFVMkpIU0xKdUlKR3ora0RCY1dNNGk4b3JraEZzaG5hS2xuZUczRE1BaFF6TGVoM29XaXZpZUZTVkJNdE5UbzBSVTFxb3U4YnF4dHc2WU96QkFZTnRmUjRqaU9KQUdrQ3pIbElDUWFpRkU2ZVZFa205WWpIR3BOdGw5VktoaHhERXBXa3VITmRiZFJDekRxU1R6S2J5ZDRKNGVxV1FTdG5CMVB3SSs3d3Z4UlFGbklYUzhWalMrMUVaYnUyYWJoeVpSSEs3YXZ2QkUyU0JVZWhONHpXRG5FYW1EWnMwbGpVUktjSHE1S3FRMlZtS0hRQjRIV0wzSlFDUXhhbzJpT0M3Z2lIRUpuSVFERVgrVkZZN0xVSU1kT2Q2d3B4SzRMeEx1OExjU1kzSkdadWlsVTZQUUpNajBWMG9rM1pySkV1dFRCQ2tnRzlOb0RtVHdTL3lnbjhHU0FRWGZjeENUYUtwZWozRVZFb2JUYUV3RU81bUZtbWhBUG5DK1lncExGTm92Z2FTcXpQMUNiZGtKYzBnVXBFRlZ2RnRJaVVqZUxKSkdkeWJWRlpURkNwWmc2VEtCVUFTdzNhR3N2aDZjckJxKzhRNUhnSWhsbWt6UmhnMmpNQkJpMU10VU9KMkRFdXJ2MU5QTHJFMHprc0FBSWkzYTJOQ1ZLbUQ0RnFPSWRTcEtTbUFETFY3b2Q5SWl0TTJ0R2JxUDBpTFZqeGRETUlEVWdhY29abU5tR3NDRHRYWk5mZ1BVeGFqREF1b2trbmZwQVMzM0MzYUE4Uk9JVnkrRVhZZEM1Z09XclZheDhvTXcrR1EzeGhsSVVLTkJsT2xzam93dnlJZTJJcHFQV0lZakVLVlNIbUp3YUZjeERFNmlBWi9EQ3pvTDlEZnkzaW1QSkJ2Y2preHpTRmdtS0FpU1pwaTc4T3NCeWczYTBSUWtXQXJabzBYRXp0TTg4VkdYREdWdzBnak9PWG9mZ1lKenluYklOS3hONWt1QjFnY2xiMkU0UTFXaXhCUDNTS2NheVNlWnpXblRTQWtZMHBMcy9qQmNuSmJCamlVV1BjWGlBZ01IOUdpT0Y0Z0VBclVRek4xalBZN2lLbHdzblRqckU0NHIyWlh1VXgzeERqR2M5SUFPSzYrc0tnNU1UQ1dpcWhYQXVwakh0MzFpK1RDcEV5Q0VZZ3h6VkNqbVN1RHBNMEtJZlRyR2VsVFZIUjRLa0ltRTBTWDhERTVLeW1vMXNqRkFVajJLV010NFJCRTBYU1k4U3RYU0VXTkRQSlNLTWRPaGRNckRSUERpYnhkaHVGQXFGV2kxUmp5VGJzVXlNQVRla2VqWXk4QkxzUTVFZWhYMUVRdkRNemtxVVZDalF5d000QUpERnh1ZFlUcVVyUWtiQWcvcEZjaVRNdm5BYnhndU5vS2xYQnJoaVFTendGaTBKTlNIODRTUzU2d1hLbk8xWVlTc1RtNzFCRXUyNDdvZldwTGNIblNLMERmS09tUUFCZFIxQWdxYlBSVUVPV3BFTU5OSUdVRjN2UjRyM0pWUlB0UlRzSG5yc0FnaUNNUGpqWXY0UmFsWU55L1ZtSHhqMlpBb2ExYzJmcUhpYmtxS1JWY0VwazhFMVlwYTBMMXk4dk5sTGZPRGNZRW51c25xSy9yQStJUXNzeWdUdVhIbEhSa3FCSk5zN0tucm93TGRZdjdmUnc4S3NSaUpxQStUVzRJTC9HRmc0bVg1a0g3OElPaHZnWFdsc2JMQ1R1dnhqbkU4MUNHWnZQemhCaHVQSkJvaFRlRFJMSGNkS2d3Y0RxWVR0UzFjRDl5TkJxTVl0UkEyczM3UTV3c3c1UkdTazhVQ0M0dkRFY2VEVkgwZ3l4UzlIUnlMeWFBemdsZ2E5VFdMRTRoSkRueWhKSXhvV3FoQUIzZ3BTM29GcHIwL1dKT0RSUlMyR01pYVhadyswRDRpUWh3VWptdlMzbkFtR2RCdUhpWU5jMlpqNDBnSzA5am5UNUN4bVVHTENCQ2hDSEF2NHhCTTFTaXowNlU4NHZFc04zaDEzL2VEd0I3Z1l3eVZQUXVkNHJuY0lTVHEyMzd3MEFvQ0srVUF6WjlTeFBVdlFRK3B2Z1hTcTNCcFhCa3VYQmJRdjhBT0s4VndOR3dmeDBpd3psZjdqZUZZNG1RVm5tV3A5NE55WExGcUw0UUhMOW45U29OMHFmcEJLZlpoSkJJVjYvdEIrSHdyZStmT0x6TFZaejYwam5OK0dIVEgwSVA4dWpSejhJNGVFNWJKL1dOQ0VhUEVnbE5uTDdXZzkxOEM5dXhOZ01JUjdyZFRERldJRXRrdkZzMWVYdWdSSE1rMVlIMGdPZG9aUlNkTGtzVk56VkR0SEpjc2JSek1rRjdmZldKbkVqU0ZWK0JxWGtqTVNtNWZ3QXJIRXFBTlBTQkp1SUwwZU95OFg2bUcwdWhIT1BCMlltYXBSSUREWng5WTdFRnIxYytyUjZHU2Z3RzQrUldGK0VlVWFNdysvQ01NTVNmekg3OEk0TVczdks5VEcvNmRHRHZ5czJvbERyNm1MZXkySjhLeGgwWXhSMVBySHZ4aHU2bjNjeHp3djJOM3ZnK2dEcVBXS3BpQm9XOEl4S2VKVEFPK3IxaVNlTVRQenFieGhPeDhoZWF6YXlwUUdqdnZGd3AzUUJHRlh4U1ovdUsvcUlqcWVKekNIN1ZmOVJoSllOK1JsblNYQnVTYVdEK1VWVEhMTy9yR0svSHpILzFWLzFINnhDYnhpYVAvd0JGL3dCVUsrbmZzUDFDOUd5bVNIRE9XMmVJSXdDTm94UCtMVENmOVZmOVIrc1hTK05UaGFZcnpMLytvUDA4L0RBczhiM1J0MFlSQ1RRSDRmV08vaGtma0hvSXlpZmFSWXVzSHlyL0FOWTUvbWhYNXY4QXJDZGlaVDZpSnJmd3NxdjhNZWdpWDRDVitRZWtZdyswTTBudkh3b0loTzlvaU8vT0k2QlJkdkFWam5na2xiZEhkOU5iS3paZmdRTlB2eU1TSmxTbTdSYUV2WUtXRXUyemtQR0ttY1hVVXVoZVVFUG1XNmFha0pOVDBwWFFHTS94ZmkvYWpMTENqVjF6bHFPZGJVQWNsZ205QSt6bG5PTEwxTVl1b3V6Vml3dVN1U28rMFNDa2gwaEpCRkZDcmpjR09Ba1dwSHg3Mlo5b0oySE9YTXNvTmNvWWdlU3JQdStrYVUrMXlpU0VoYXJzUVNCVHkrSWVPeFo4Y25UZEhaTVdTTzhWWnV4TUwwSStVY0NTVFdQbjhyMnlMOHdVUDVWT2ZpQjg0dFY3WEEwL2kyM0g2S2pYMi9remR4dndmUUNvNjFnWmNsR29ySHo3RmUxVXhLbUNINlozK0lEZmQ0R1B0UUNhcFUrdk01K0xSeXdyMkI1Wkx3ZlNNaU5BUE14YkptQzdodkVOSHpoUEhaYjFKRzdwUDZQQjJINHFoVkVyU2VqMWgvcDR0Y2szbmt0Nk4ydkVwL01JNGNhaGdNeE1aQkdOVlo2UmFNWVJjaUQ5TkU3NnFScVU4UVNOUE40NU14NmEwSGxHVlZ4UkkxZndnWlhHYTBRRzhhd1YwMFZ1RDZtWnFsWXZhSS9qMWJpTW1lS0txWEE2TThlSEZsYXBIazRoK3ltVDdydXpXS3h3OFlpcmlEV29JejB2aVNUdVBqRi80bEpIZUJnckZGSGQ2ZmdiSjRnQnZIWm5FM1pyalV3bk0wSFdJbGNOMjRpUExKQmE4VlZ4WHhySFlCS285RFVpZmNNbWxWSTdtRzBEZmlFdGVPSm43UjNjWHN0MncwUnhSQUVDbWVXZDJIcVlXVDhhdXcrVVQ3MXVrTXNZNFhNZlZoMWltWk9JRUtQNGh1b3Q0eE9VNDk1NFBjWGxuYVBnUFhpWGlDY1FvV05JR1VOUkhrUzNodTlpQjJwREJPTUY5ZHRJcm5ZeHczOTRwRW9OcThEVG1CWjYrdnloRjFHTnZZWllKQkF4TFIwelNZQ3pIN0JnR1pPVVRRbjcyZ1BxVU4yV1BrVElqaWNXbEFkUkEyR3A2Q0VLcDVCeWdncTJaMjhTUlQ3dEIrRzRlbEE3U2VidmxRTzhyUWN1blFkWE5iWmMzWEtLMjVMWXVrMXM4bkdUcHFsQURJZ2ExY0RxZEQwRUg0YVFCNGk1STFCdlh2S1lXMGF1MFdwbUJHWmdBU0FRSHpaUWR0alp6MThvby9Ga2hUWmFCbk9scmFSNG1icWNtU1c3UFZ4NG9ZMXNpZUpuRWt1N2JFMUxmbVBsYnJBNmlWRnE2T3gzc0cvU0lLUzlIY2tpbCt1OS9sRUptSUtDR1lDNC9kaDg5NHoydUxIM1lXb2hCQUtnRlhMKzZDTk4xSFFWZzNoVXhBT1ZLOHdCdWN3QjNLU3NCaTcwcHBTRWVPazlwbEtWclhTb21Kb2tBbGdoV2RXWk5kUW5vN3hQaG1CUGVCVWtndWtnMExIWXNmTVJSTFlaTm16eEhEcGM0YzNLb2dNc2J0cldvK3NaL0g0SmNrbFNxcEh2QjJmUWREYUM4TGo1aWFrQWdrMnNhc2RUbDlQcERuQThTbHphQlFDcWd5MUFQYW9BOTVORCtyUlRGMU9iRDh4SlpjRUp1K0dZdVRqaWxUajA4QzRpdVZNdWRmaDV4bytOY0ZrcUxBZGpNUGRZSHNwbi9FZmxOcmIyTVpmRjRLYks3NkNsdGJqMUZJOWJCMWVMTXZ0NTlQazgvSmhuQjc3am1iS0JJU3pMMHJSWGg4WVhUSlpGV3B2NlJTcmlSSURxTGhtYWpOdDVzWVlIRnBWS3pVSWNoVktnNVhTWDZrTjkwcnJsRms2VFBZVGk4MUJvdHhzcXY3d2IvbU4yQlNUdlVONVVqTXFualNJZHBHbFNzaTRKbXd3L0ZwWi9NT2hEL3dEa21DempKYXJGSUk2dDhER0dFelVSY0p4UHhocll2YVJ0aWxxL09JNVRHU2s0NlludXFQMzB0REhEKzBLN0tZaldsZnBIYTVMZ1I0alJTMlk1cVI0a2FHbThMRThTU2ZvSUpsejBxTjFKUHFJTjF1eE5POUJxTVVSVE5Ud2dsR04zTCtUUXNVQTRKdGFuOTRpb3RyVGY2dkJqSlM0RmNmWTBPSy81Q1BRcE1zazJmeklqMEMvazdSOEdiQmVMRXJJSFI0Rkw3K1VXbWJScXhrY2tqYUVkdEhFbDZDQlZUZzBWTHh0S1JIVjZDb3NiSkFiN2VJS1drVk5LVS9ickN4VThzTGlLWms5blljeHVvbXc2YmJQQ0srQnRBZk54WVNudWxtdXpCL09LRThTVXpKRGRXYytzTFF1dFNUNGErc0VTTVhrTHMreVgrZThPeGt0d2hLWmk2RlJyb1Nmc3d4dy9ENWFSL0VXeE9qNk5RMFBudTIwS0puR1Y1cUpTL2g5djhZQ21ZbGFsWmxFbFY3L0hvS1JLU2xYb3JIU3ZsalhqT0tsczBzWlVnMUpOVDZ3cUJtcU9TVWxSSjFEdjVteVI4S2RERnVBU1ppNjg1YllrSkhnSzdXcWFqdzArRDRXQWlxMkswc1hGUUFzTUU3VytyZ0FIUExNb0ttLzVMUnhPYnVoUGdaY3VTd0NlMG1DZ0pCeVp0U3pPcGl6Yitid1lWRUt6ekNWVERmWlBRZGZBVWJ4Z2hNb1NuSlNlWis3bVVwaWFBS0lhMUh1WG8wZWxaQWMzWkZSTzZnSEFzMlZRTGVXc2VmazZoTjdjZXpVc2JpcUExVEMyYmNsTjdrQ3JWY2tVOE5iZ1JaaHNHVDN3dzBjRXQxTklNazQ1Q1FmNFNVWG9jdHJrZ2lwcTVldDRKR0xsQ3FwTXRRdVNSbFBsNDlXalBQSTNza1VqQmVRT1pLS0JSSjZxQkZkMjJCK09zVi9od3JObXp0bExJeWhpWEJBVTlBbTlSZUdLOFRJVXJsa1RBTDBVUTVMMkFxUGR1K29pdVpoSFprNUFDU0FTQ3owWWhnZktoaFZMVHV4OUs4Q1ZlRVNXSGFaQlI4d3lzKytleHVQS054Z2VCU1NoSjdjTFNVZ25Oa093dTVBRDBZK3NKWmFoTFlnbExWRlN4cmE0Nk1MVkZJN2ljU2lhb0tPVE9QZlRMU2xZQm93VWtBc2EzSmVDODErd3FBOFg3TUlTeVFTTmZlVWsyMEx0VFg5NFFjUzRHcEtpVWJ1V3EzVUZxYi9ySHNQeFNYSm1wVmtVNkJrU0NwUVNoM09Vc1d5bHlXV1N4Rm5nM0crMlpHVW1YS0FWWW5Pbzdsa0FQNWxuM2g4ZVdWaXpnbnlBeXVMcUNES25vem9zZnplT29kOWFuclNxODhjbVlkMlBhSUFvNzBGWGNhOVdyNHdUK1BSTlc0S1JmbHk1QURmVlNpUmFnSHppaWFuRFAvcUFhR25LUVhHampUeEhTTEtlUGluL0FPRW5CK3d3NEhDWXVYMnNvZG51UXlTblU1a2QxbmF2eEY0Ull6Z2s2U1NHem9JN3lkZGlVM0h4Z2hYQnNwZVJOU2xlbk1VR2dzQzFRNEYrb040ZjRiRnJFc0RFSkNTNUdhNkZBVUJjRTVUYW11Mmd0RHJKWXVKYWw2ZlA5a01uVHFYN01FbFVUQzQxdkdlREptOHlRRXIxVUFhK0xId3JlTWxpcEtwWlpZSVB3OVk5YnB1c2htL0haK2pCa3hPRE9oVVh5VlZIM3BBUW1hUlBQR3pWWklObkpJdVBQUTBwRVFXaW44UVdBT255KzM5WXZ3NnRkaDgvN3h5a2NIU3BqSGQ5S3dhbGFYb1RlbW10L1RTQUVNQTFQalErZHdZNnFZZTZkTllYVmIyRmx3TnBtSU5LbHZ2OW9sMi9YKzBLKzFvNXBGVXpHblNwM2h0YWd0eEZDMmFiRExKUzZTVmFVQkxkQ0tmU2tlakdMV3BYZU1kaE82bjRLTEQ3TDg1OE9rUW5Ud0JXSWhUdTFXdXdKYUZtSm1PWXp4KzVsa3FDSm1OMjlZaEltRXEzSk5JaDJhU3dDaVQvQUMwZjRRYmh1RTRncUhab05xS1V5S0hVWjI5UkhUbERIeTYvWThZU2wrS3M1alppVUhLRk9kVmFEb0F6K2J4UWM1RFZiOHhPWC8wMzFocEk5bTEzbUxEM1pQTXAvd0NaVEFIcldHbUY0SWsyUm1WK1phczVwcUFTMnVnakZQOEF5T0NINDcvbzB3NlBJL3kyL1ptTU5oSmkzSUZCVE00eTlhdlh5ZUN4d1pWQ3VZa2JNRksvUVJwWlhzdXRaSldwYmJabXkySkYwNWJqeGFrV3l2WnlVTzhRaWw4d1UvV3g2MHJwR09mK1FtL3hmOEY0OUhGY21ibDRmRGdKVHpxTnl3eWtuME5CMCtqTXNOZ0dmczVJdmNncVBWeXF6YnUwYWZCY0xrSkl5b1VzaHlTVVVxS09wV1VCNG5pWlNpaWtsSlFEYzg3YU9rSnVhMXBSb3paTThwOHRsNFlZdzRRb1J3MllybEhaZ2swR2Nxdm9TbElEOUFTYndXTU5LbEZpdk9vQ29yYzlhS1lEcHJlS3p4dGFIRGFVVlZBOGdrTnJxOTc2d214Wm1UQzdLclhObVBYOHJOZHY3UkZ4c2R5U0QrSTVKc3Zzd01wSi93QlJrbFhMbFlPeGMyOTU3NkV3aFJ3OHAvOEFxbXFIaG0vN09kUnNMUWJMU1ZKZGxEK2NOWUFaaHpBcUdqdnBGMHNLQWRyR3hTcEp1MTM2RStzTkdiZ3FFYjFGZUh3d1N4T2F6WmlTRGZRUGR6RjRrb1FyTUVCMllyVjNxUDQ5TnIxZUlvblRDV0pTQnNBZkhYUzJ1a2VXaEtROUhyZHZocEVtNU43bEl4UlljWE1VYWVyZ0RkazVlc1hTMWdBdUsySkljNldxYWVJZXZuQU03R0t5c2hudFZqc3hjYWFVMzlLY1ZPcHVvMDFwMG85UHBITEhld3paY3BFdFN1WlRtZzd3b05oMDZ4R1hod1RjaFA1azBOcVhMK3NVeXBLUzVXdFA4b3FSMWRzdmsvN0ZZSW9CUExmM2dCNmhnVzNwR3VHTkpiaTBnbkRZVllIVFIzSk5MaG5KczF6SHNTVWtLY0JSVFFIS3hiVm4wcllSMVQzU0NRUzJZTTdNU2Jsd1BDOFVwQ2hWTmc2VkpJQUx0bUJCZTc5YTZST1dYZWtCdElHbTRGS2p6andGZ2EyRkRyMTFqc3JDU0FCa2tIUUZ6emFWRldZWmdIdDRSY3VlQVNIS1NvRVppV3FLdUdWc1RSOTZnUjZSSVVGVVVvai9BSmpNSGNubGNsSjFEZFBWYmRDU2xZUW5HUzBza2dvMERnZ01BeHpEVkxhK1BrU2xTS0ZJVHplQmZROWRBOEFMVExVU2wwaWprSjcyWnFFTGNBZVRsckVRQmhzQ21WN3B5dWVZS3pBRlZDek9WQVdyMGlmYlVseTdGY3BEaWF0S1hGbnE5RWdrTnFDSG8xYjhwR2tVNDZRRkRJcE9ZSFJJSllWWTdpdGpGZUZrVEZBTHpncGZ1M1NzTVNYU0VnSjdxcWh5dzFlbFFLOHdBQnpPQ1hjaTFhcURCaUFLSjBGUzlLdzFSYWFZa2xyMmFFUEV1RHJsdXBQTWk3NmdmOGh0MStVQUlCTEVSdGxUR0YwbVpvQ3dCY3BmS1hGdkRUVjRXcmx5d1IycU1ya3N0QTVSV3hCc2I3V3RIcllPdmJWUzVNOHVrVDNURUNKQ2lYYTJtcDhJdnd5U29zQTUyRi9JUTN4WERGam1sWkZvL01LcThHM3QrMEs1aUZwcVVxVDFJS2Z2V04wT29oTmJNeXl3dUw0TDFMVWtzb01XWWd4eWJpcWVHdjdid0N1WUJjeDVFdFNySlVlb0ZJWnlvVFR1U1RpQ28vYlIycjFJOG80SXBtWWtDMVlWdXhsRTlpM0xCMitVZWhmUHhCSmVQUTEwTTRuMU5mc3ZpU2xTVkxSTEd2SUNVOVVxcVI0eFZoL1kzQnlnRE5LNXF0aVZEeElDUUNSNC92RlV6aWMxU1JtVXdJbzAxUlpxVk9mZnc4NEJ4eDdRWnN6bTNQbkNXdlJsVXZkWHhqNTN2NVh0cWEvWCtqMUZpeFZ0RTBFcWRoTU9CMmFKRXRSTEFsTHJ1MVdjNnZVaXgycUZqT01TOHpxVVZrbXJBSmZlNUxDMVczYTBMcGFGcFVybmxxQUJ5aHptdmNPUUFQS095WnE3Rmc5Q29jempiUjJCdDlBSWhLS2wrVzVTNVI0MkdFM0c1aU96UWxBRmVZTTdPR3E1MU9nQnBTMENUY2FzQmJxTEdqSkJIVU1IZHo4YVFRaWVGQWxjNGkzdUFHcjFOYXQ2ZElIQVNCUlFMMEpXQzdOWDM5aTdEcENxdlIzL0FHV1lTYlFKWlZYSVRtWlhTZ2NnTzE0dndhenpCUVNDenBJS2l4Y00rNmFHbElFL0VwdUNVQ3BBQVU1ZW5NWEpGM2FnRFJUTXhhU0RWUkIwclFIcldqNjFadlFyblpBYzB0aHNPelNvS00yWXBTUUdCS0dGS0FBQmhRMmJWN3h3OFJKTHkxRUFPR0xPZnpNdytJSHJDYVhpMHBORWdrZ1ZLZ2FsaFIwNmpaL0tyY1NwYTZnaGxOeXN3TFBkUUhoL1FLaU9hZkxDcCtpL0Y0eE9kUzFTeXBUdjNWTEljaTZsWEFxR2NHcGdYaUhGbEplaldJWnN3MEFLVXF6SnZjVWNieDVIRCtaMXFZL2x6VTBjT3JhdGZoRnFNT2dPYVpSVEtCUUZybDZpOWdOVGVIdUhMM0E0eWU0cm1ZcWVvY3ZLSFU1V0FYK3RnTkJwYXpYQjRjaE9Zc2tuVWpLU0hjQmdhRVV1U2F1OFg1SDdybXZlRGdBZk1WRzBEVFpTclptNnVBMWcxQXh0Y3NLM2haejFLa3FPVUtkaEV4UUZLV0JvSEpxSEdWSkZuOHF2QS9LV3pGbkRPMm9lamluUmhaL0tQSndxelVxTEZueWpQdTdPYmZLQnAwc2tCbkc1TzlTOXJ0dkFqRmV4clpMR1lwSkxKRDArQWNsMjhJdlhna01WQlFMZTZGT2JpclAwb1gwZUFjUEthbFRXcW1ZZjlyZXY3em1NZ0VOV2hkaDBkN2c2MXE3eHN4NHRJZVFwTXZNUUJSdnpINW5YWUdKSE1Dd1VBb2U2WlpVU1hhaEpHcldlMmhvSW9WVkp5SkNnQmR0R3U0YlU2dlFlTVhZNlNaZ0lKSUw1blU3TVdGaFJJbzZiVmU1Y2tTbGV6NEJLVzJ4VVVDcFlpWUtrS0NzaGFxbE02c3RBZHRlaEZTMWtxSm5aNWRjb1ZMVTZWSEs3cTVTYVVZbS9oZVdIQkNRWjB4QkxqbFNVcVRRTUVnREs1cUNYZHVtZ21KbWxTU0JsbUlQS250RkFnQUJobWNCbFVvNmgzclZjcEdOeXIrZjZJdDF5R280Z2x3ZXpDNVpmS3RETEk5MVNUWXVjb3JjRWlyRndSSWxTMXB5UzdBc0dybE5EbVYrUXNDNUxnNzFFVlluaFFVRWdOSklJS3BhYUlPYXFBa1BVZ200eWgvQVFQaWZaeXljK1ZRQllwV0UxY1hTRTBKb0hkNldlNnVVUGU0V25SejhKTVFFb1dHU1pnQUFjSUhlR1ZtYTZYRE1LMjM0cVJPcWY0aUFrbmtRaEtTOTJ6S05qV3JOcFdJcHd5LzRxWjh5V3FXb0JRQlhuWUpKRk1nR1d5eTRUY1Z1OERZUEN5a1RjeWNVeEFCU0ZxT1JkNkZidTNlM0ZnK2tVOS8xYUVWalVTWEFXQ1NTRWtGaWtpL1BtU0FhZ1ptT3BmeENhYkxLKzBVRk14S0dmS3hyUUVWWWdzR0RDSVl6Qk5tVktXWlRCUldBRkIzekhNRldVeHVLQkxOSERqVkpDUVNWNWVaYWFsUUdaU2swZDdNNE9qYWdNNmc2MmRyOUF1dGhoK0lUTlRsR1pDaUhNeFNEbEJ1UUFWR2padkJ5WDVTL0p1Sm15MHV0SGFBbElEb0FDZ3F4SVRtSklmVklyOFZhK0lka3JOS29DK2FXdks2U2tBQjhwTEN3eTZaU3dOSXQ0ZDdRZG9TRkJJSlBOTUFZTTFBQUFBVFR2SDlCQzltU1ZwYmZ5SFUyTjhQTFNSbWxrSWNyT1YrVjlxQmhZdSsvUXh6R1NpNHpxWjNZMHpKUFhjRWgySTlkRjgvaUlSbFVWRmN1WWFVSXlxQ2hUTUhBR21YWjJMWGFwbkI3cExIZHpVbGcyWjlkVzFwUVFFM2Fja1BzMEpKbkRFRWdwQ1NmZXpCVXRSbzV0UnpzMUsycEZuRjUvWjRjRktXQkxGaWtoSkZMaDNyOTJodE53aUZabFpPV2xDUm9WSlpMMUZCMTFhQnBpRkpTM1preXl6OG95NWRRMWFPYjJjM2pSSEpMWjhvU1dLTWx3WWxVMVN2Mit2cEVrWVRmNGZLTlF2QlMxZ01sU1FMZ01RS0U5MTNicmF1bWcrTTRXb2dDU1V0cVFRL1FWT1k2ZmJQbytyVjF3WjNnYUVKUkxHai9IOVk1QkdMd3FFTUNGbFk3MmpmQXQ5MU1laXFtbnZZbWcwcVpjd2FwUUdwVUpjaG1MM0YvbmFKeThPcFJKWE5KTHVRS3MyOW0xRU1DaGxBSjVYSTdvQXVGZE9nanN4QUZQRVhPaFRWZ1dldnlqNXp2V3JQVVVVZ1JhVUNwRDdVRGlwYW9EalhvMFM3SWlvU0F3RlNTM3FwaGJYd2c2VEtjbXBEUFp0TXBHbTZqRkUzQm9Lc3BkcTB6SzJOYUc5SUN5VzZaMG95YUtVS0x1Wmw5UXBMZ21vZGo4SDBpdE9GS2lWalA3cEE2V0pGTnhxU1JCVTNEQ1dsU2t1N3RWam8rdFluK0ZUbEpMbTVyYXcwOG9wcmE0SnhqYkExNElNNnJWcVRSanMxU0I2Qjd4S1VtVWtqS2tsM3FTSFBwMGVwZnllQ3NRd293b1ZOYzNHYlhYckMrWElTQ0dBR1pMdHBTekMybm5Bakp5VzdHY1lyaEZxbHNMWlJxa2Q1dEZGajQrblNPc1RleDBjUFdtcW5zNEJlSVk0WkFDSzBkalVkNXZTT1M1eElXSFpndXJtck5kK2lpSTdsV2gycU95NWlWQURNR1NQeWdrN3NkUjQ3eFlhRGxGRCtaNlZHVVV1WGUrd2hialRrenFIZTVnNUFlNlg5YzZvb2w0dFlTRkFrRXVrK0RKUHJGRmliM1FtcHZZYUwwSWNHb2Ntb0lvR2JWdHYxTVY0cWVoTEFzK2wyRHRUNzZid25uVDFMWFUzSUZHc1JYMWN3UFBVU0NYdi9kNjY5WW9zTjFZM0NHbUh4WHZJS2t1S1BZZ1c5ZHJNTHhiaGNhUWpKUTVpNUo1dHJrSDdlRk9DV1FsYWdXSUdVZUJIellrZUVNc1NuSVNsTm1CWTFkMjNqUkhIRk03eFlYK0tTd1MxRFk1dlUwRzlxdlM4UWxvSzFOTEFVUjNzeFpJcmxEdVJxUlI5WVduRUUwb3dvQlg2OUlqdy9pY3pzNTB2bHlrbXVWT1lVMFVRK3VyMm8wVmEySnVZUmlzUVVxSGNtRHVCV1YxS1ZVdWtNUzRjQjJmZDdSZmlNUG5sRElwQ2xTMUVaZytiSXdVQ0VrWnFkM0tIZDJCZWdFUEM1WWtwVUFYTXZOcGNyU2tzNDJMK01FY0FTY1Iyc3hhbEpXbFNRbFNDVTVRQXMwRmo1dllSUFVsdjZKODJVY0tYTUpDVktWTFNseUZLbG5uekh1WmtpaEdaSllXS3FVY3d5NHBnMEdXQUV1UVNDUjJTVk9tcHBNUDVQRWRTOU0zeERqTTExYzFIU0dCSUJBT29CQUw2dmVMK0Y4VVhOVXNMQ1NRbDBxQVlwOTFrZ2NvSE1wVE5kUk1NOGNrOVhBaWtuOW81bThaU0VTME82a2tJVXNwY3BVejUyVWhucG9CVWJWSHBYRVFnbDZoSjF6ZDVuQVNRZTZROUZOMHFJR1R3MUtwSzFGU3MwcEtsSlBLU1RMU1FsM0ZxMkREV0xlQVlZS2xoUkp6R1hlbkxRamxETUtBYVJPVUlLSSt0blJqNWN6SjJza3NwS25DRktOZWZNRTJxVW13clR3TWNVcVVsUUJsQVNpT1ZZYXVVRmRBL2VZaWhGYTNFVVR1UUdaYzlwbENWSlRsQUtsQWhnT2ovd0J6Qm5Cc2F0U2dra05rekdnT1loWlNIZDZaUUEwTE9OSzF4K3prN0lIQ1RVNWxybUJRQkpBWldSV1hOVElDQ2tkVWdzTmRZRWwrMWEyU2hjZ0h2RklHWXFEaWhTYnR5bnJjdTRobWNhcnNaczZnVkxRbktBR1NYU3BYTUJjY3hwK3RZU25FS0taTTFSS2xySzZrazVLQmY4TU95YXpEUzFCSFkvdXZXdURtcTRMMEx3ODFRV29DV1Y1aVUzUWFxSlZNS3JrTXlxMWU5YWtZZnNETUxCYTFUR2MxQU53d0JEdVFYcy9uRk9Md2lWSm1KT3lWNXFaZ1ZaZ3BJTFVTY3JrRGM2VWhSangySm1vbGtnSm1CSXJWcW05M3BwK2dpMFk2bHMySU9mOEFEdTBKU29BZ2N5VWs4NG9TeENXWTFQUmhiWXVZbktuTU01U0tQUlJGckxXNUZITGdGMmdIZ1U0ekFVcjVzcVN5aSthaVVGbkhqNDBFRVlESEsvaU1BbktwZ3hWcWhhaVM1cVgzaU1sSk92UVVpekQ4UVVrYzVvNmViS2tuS3RzcFVBZVVpbFM3eGZOeEV5d1NGb0tuZERnWGJtWlZoYjBFSnh4aFRoQlFnaXRXVURkdEZEcjR1WGd6aDZHT1Z5d1NUZlpKVlh6aDBxK0NpQzUweVNvY3pTMU81VVZGVjIxTmRSZDRyeFVtYUVoVXNnME9YS1FsOHRtZEpHdlEwWjQ1amNNa29DckVaYlVCY2dGeDVSVnd6RWtvZXhDaUhENklVYTFyVklodFNhK0Fuc0R4QUtETHltYUJVSzVWTWRRYWh1ajMwajBNc05nWlUwSlZNbHBVb3BTb2toeVNTb2ErSDNTT1JOcE43Tm5ILzlrPVwiLFxyXG4gICAgICAgIGRhdGU6IFwiTWFpIDIxLCAyMDIxXCIsXHJcbiAgICAgICAgbGluazogXCIvc2luZ2xlLXBvc3RcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiR28gbGEgYm93bGluZ1wiLFxyXG4gICAgICAgIGltYWdlOiBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhNU0VoVVNFaE1WRlJVWEZoVVhGUmNZRnhVWUZSWVdGUlVYRnhVWUZSY1lIU2dnR0JvbEd4VVZJVEVoSlNrckxpNHVGeDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HaEFRR3kwbElDVXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBT0VBNFFNQkVRQUNFUUVERVFIL3hBQWNBQUFCQlFFQkFRQUFBQUFBQUFBQUFBQUdBZ01FQlFjQkFBai94QUJFRUFBQkF3SURCQWNFQ0FRRkF3VUFBQUFCQWdNUkFBUVNJVEVGQmtGUkJ4TWlZWEdCa1RLaHNjRVVJMEpTWW5LQzBUT1M0ZkFWUTZLeThTUlRWQllYWTRQQy84UUFHZ0VBQWdNQkFRQUFBQUFBQUFBQUFBQUFBUUlBQXdRRkJ2L0VBREVSQUFJQ0FRUUJBd0VIQkFNQkFRQUFBQUFCQWhFREJCSWhNVUVUTWxFaUJSUmhjWUdSc1VLaHdmQWowZUZTTS8vYUFBd0RBUUFDRVFNUkFEOEF4TlN6QUU1VUFpalFIR0RUQ0hLZ0JZcGdIUlVJSk5LRWRaY2dFY0RRWVIxSlVzdHR4RWFjek9kUkVMQjlDMCtFUjZtb1Fic2RuS1VZSXlPUXF1YzB1UXJrMC9kUGNDeEdGOTE4NDBnSHExWUNna2pPWnpyTTlSQ2FwdWd2SE5lQTgzZzNldGRwTW9ZU3BESkNrckswcFNTU2dRQnFLdmhLRFgwaU9Na0RXMCtocDFhaXBxN2J6QUVGQ2hvT1lKcGxHU0R1WWFiaGJydTJEQzJuRnBXVEJHRW5Ea0lNQXhCSm9LTFFBSFhzN2FpRXNxTml2cjJTVXBkUzRoU2VySkpndGhSazZaMGppMzRaRTBScjY1MndnaGFXN3BLMUU0aGgrcUhLQkdYZlNSalhkLzNIM0lvZG8zTit0Wlc4aGFuRGxHQ2RCNFJWOGFhdXhIT25WQSs5dHA3TUczYlBQRWlEN29vOERJWkcxRXE5cTA4MExXbW1Tdm9qa2tkQzdNKzJsOXMvbkN2aUtFazBSTlB5R2U1KzlWa3l4OUdVMlZvVzRNU25KVHJ4Vmg1VWliZzdYWUhqVXVHRWJ1Nld3WDVVMnBzcTVOdkxDaWU0RTFIa1hlNFgwbWx3VjI4RzRXenJZSVMrNjR4akhZVWdZLzVwVGtkS2pUN3NrWk5jRk52RHVBMWFwYlYxcmkyM0FjR2FaTVo1NVpWVktVa1dSdDhFUGFwc0JzN3FFdE9KZkNwQ2lrRWt6bjJod2lseDI1Vyt4bkZvQVYycWtuTDBPdGFyRUxmWTIyVU1xN2JlSWNRWXEzRGxlTi9LS2MrR09WZmlYdjhBNm50Ly9HSHVyVDk3ajhHWDdpLy9BS0FSU1BaSE9zWnZKSzdTRG5wVW9Oa0FqUHpvaWk3bG5DZTQ2VkNEYWFLSUtvZ1BCTTBvdy9iTUZXWGZTdG9oZE5Ob0FUaVZLZ1pHRVpqenF1L2dic2ZiTW5KUG1yUDNWS1pLSnNBYTVudjA5S20wWTRsOVE0LzBwZGlHc24ybTAzVUhzdUtIblN2REJ1NkR2WmRXKzk5eWovTlBtYW5vUi8xazNsaXgwaFhhZnRoVlQwNWVKTW4wL0JZczlLRDZZeG9COFA4QWlwL3lyK3Ird05zUGd0clRwUlNmYWFQbFIzNWZ3QnNpVzdHLzl1c2RvZXY5YWJmTHpFRHhyNVBQYlgyVzdrNjJ5ZnpJUjhZcWJvK1lpK2tSbDdDMks3bzIwSis2cFNmOXFxWlpZUjY0RmxoYklGejBYYkplekNuRStEcy83Z2FMeVJsL1VCWW5FUW5vZ3NnMnB0THprRXlDU2drSGdaRVQ0VXV5M2U0UEtLdEhRNjR6aVZiM1NWS0tRQVZncEtWQXpLU21mN0ZCd2t3N21oZDd1WnRoUUdOMXAvQ01wVm4vQUtnS1dXT1RmSy91UlM0NksvYm02RzBWcFFoVFNsZ0pCTUtTb0JYSERDc2hWYXh6aStiWTI2UGpnSGJyZDY1YnlYYnZpUDhBNDFrZXNSUnV2QWR5K1NsMjFaWVZKV2tmWkdOS3dVa0h1NTFaR1Nya1crU21La0ZVbE9YRVU2WkIvd0NqMi9KWHJVdGtwRkM4cWNPRWFEUHhxd1FJYmQyMUxjdktYaWpKS1J4aktnN0NVRm8rR25VcndoZUV6QjBQalJxd0VtNmU2NUNsd0FRcVlHZ0I1VkNFQnRCbzJRZVNqblFjaVVPSkE0Q2w1R29lUWFsQkpDRlJRQ1MyTG1pUWZOeVR5K2RSaHNVbHlnU3p5TGxVeEduR2dRbFk1R2t4UnNnbEYwSjBJN3FpQ1NVWEZHZ0Q3YjFTaVdTbWJoUjlsUG1UbFZjbTEwTWd2Y3RyQlNFemNKU3ZDSnlYRXhud3FxTW41WUhablgrTC9XOVhBVDJpQXBSSVRya1pJMHE2d1dlVHZJOEZGTGFqSW5Rbk9PVlNpYmlmczdleTlJa1BSeUIxbmxTUGFIY3dsdDk0OXFOSVc0NmtoQ0U0bEdCcHpFS3pxSng2QTVITGZwYWN5K3NRUjN5S2Q0NWVHQlNqOEZ0YTlLeWlkRXE4Q1BoUzFrK1J2b0x1ejZTVXFnRkJIa2FONVB3SnNpV0kzM3QxRHRwSG4vVVZOMC9NUWVtdmtZZDJqc2w3K0l6YnE4VzJ6OHFEbEh6Rmc5SVoraWJEL3dESHQvNUUwTitQNGY3QTlKbnk4aFpHWXJTSVRqZHB3VHg1VUFrYTBRQ3J0YVVRRW9vd2toT2hxRUdIbUNCSTBvVVFhUUtBVU9JWFVDTDZ5b1FmUXFvRXR0aGJKY3VWRkxjU0JPWmlrbE5SSWUydFlPV3hBZEVUcHhGU00xTG9QUkFOMk9kUFFMUEp1aE1tYURpVGNFbTdtM0VzNGgxYVhNVVFUT1VlRlo4c1gyV1JvOXRsZjBsUVUzaGFJRUZLZEo1NWlqQnVJR3I2S3BwbHh2SDFyYW5CaE9FcE9pdUJQZFZpbW1JMHlFdzVJTXFJVUNNdEpISHpwbS9nSElRYkE3YXNIWEJINTRJUGhWY214b3NlM2l2bTdkYVVER3VCSktWQ00rUU5Wd3gzYkhjaHF6M290bFpPSWdhZHNCU2ZVYVU3d2ZEQnVYa21td3NudTAyb3RubWd5UFExVy9WaitKS1Q2TERZZTRxM1Z6OUtBVEVwN0ptZUVta1dkU2UzcC9pRndrbFpMMnBiN1ZDSExkUzdaMU9hY2NsSktmQ0tNczJLTHF4VkdUWFFGYlIzWXVaSXdJQXlqdERsVnkxZU9xRmVHVjJRbTkzbmtuVkkvVisxSDE0dm9PeGw3c3g1NXZzcVZpSDk4YWVNckNrMFdxN25LbklSVnVpb1FSakZRaG5xYmNrU25QdTQwYkt4bUtJQ1haWFFRcVNKeWlvUVcrL25ta2lnUWZZdUU4ajZVYklRYmhJQnk5Q0tBUzUyRTlaNENpNFE0VnpJVWtpSTh6VmMxSzdRVVJXdG05YTRVc21SSndnNngzOTlSelVWYkpUYjRIMWJIZWJrT01PRHdGRlpJUHBrY1pJZkRlRUFvTGlWY1FRUlROUmE3QW0wZHVMdFdwT0lmaWsrUW1xMUFaeUlSV3l2MmtsQjVqU2pVa0RnYy93a3EvaExTdnVtRFVlU3V5YlNUYmJKdTJDSEN5ckNQT2ZTazlTRXZJMjJTRmJVdlZ1RkpTMHR1Qm5BMXBvdUs4Z2RqZHZ0ZTRSOWtrZCtSb3lVV0ZObGhiYlhZV29mU0dnZWVYN1ZWTEZLdm9ZeWt2SmNYNmRrdU5wRGFDbFExS2NRSlBmVmYvTWtrR29YMlFFYnV0dW94b1E2c2M4VW5LaXNrNzhBMm9xRTJWdk1KVEpHb0pxK0t5UzZFbEtFZXhEdjFSeUdIa0JWbnB5ajJKSEpHWHRMRzEyKyswSlM0cEk4YVNXT0w3UllzajhGaXh2Q3RTa3FjVVZpWlVBWWtlVlo1NFlwY0l0VTJXTzB0NG1uRy9xR01MZ0kxWEtTT0l6R3RDRUZFVnRsRS90WldOSVdsYmFJN1JBU1RNY0R5cTVOVndMYklmMGhMaW82MVFtQURNUkoxTkhjd0YzdDdkbFRES25tYjB1d0FZN09aNGlSUldSdDBBRTJ0cXZoVUVnODVxNUt4ZDFFNy9FMWQxVGFUZVFFN09BYTYxRHFRdEtnT3JJaFhqMzFXcFdFcXJsWktpVmE4YWRBSjFoYXRxU0NWOW9xd3dkQjN6U3RzS1JDdlc4TGlreURCMUdsTXVnTVN5NG9FWVNabW93RW5hRGpqaXNhMHhvTWhBb0trdUJuWXl3NFVMQkFCS1NEbnBsenBoU1NiNHJjeCt3b3FtVTVSNFVyaW53R3kyRzBya2txRnd2emd6NjBWaVZBOVJuUnZOZEp5S2tMOFVDbGNFTnVZdjhBOVduUmR1eXJ5aWw5TkUzQ25kNGJaU1NEYUpDdVlWbDZWSEIrR0cwVUxqMHF4SUdEbEhDbXJqa0Zsa25lYTZ3ZFgxeWlua1krTko2VVBnTytSSjJkdFJ0U1ZmU0M2VHpTb0NCNFVyeDg4QlRGMkd3RjNjOVM4azVtRUxNS2poTlRmVHBvbTF0V0tlM0Z2MHpDRXFITUtCcXplaGVTQ3ZZbDQzN1RDL0lUUTN4WWFZdEYwODJrZGwxQm5nRkNQU2xwTmh0a1Q2U2ttVnBJUDNoSU5Nclh0WXJTZlpJd2RZUUVPQlI0QldSOWFNOGtuN2dReHhYUmJ0Ykl2R1VkWjFTWEVuS0pCandtcWZWaEx5V2JHaUd4ZHVJY1V0VEpDU0lLVTRkYXZ4enhyaVhKVmtoTiszZ1l2dG9MVUIxYmVEbkpHZFBLZU45SVdFSng3WTVhYlpXQmhVQWU3VVZSTEdtWGJtVzJ5TGl3Sit2YndubUorVlVUeDVWN1haWkZ3ZlkvYzdMc1Zyd01LY2hSN0tVcU1UK1UwdS9PdTZEdGg4a2ZhdTZUYkF4dWh4Q1NjaVRrVHlrVlpESmxmd0k0d0tyNkJhZmY5OVdYbEI5QkkycmJKY01qSTh4V1hGa2NWeVd6Z21VVzFXbHpLeHBHWUdvcmJqbW4wWjVKb3IxcWduRHBWb29nMUNIZ2FoQ1FMaFpHYWlSeXBhR1BORXlURTBRQ3d2dXFXU2g1RnpHVTBkekJ0TzR3YWxvbE1aWGFnbVFhbkJCdFZvYWhCOTlzaEFTa1R4VWUvbFJvbGtNaFE1MEtJT01ZaVk5YWlqWkc2UkxEVVpna0h1eU5XZW1pdjFHU21ieDlIc1B1ajlhdjNvZW1SWkNZMXZGZXAwdUZueGcvRVVyeERyS1N4dmxlNkV0ckhlZ1ZYTFRwK0IxbW9qN1IzbGVlVGhVMDJPOEp6cXFPbFVYZkl6emJrVU1tWk5YVUpaTFR0UjJNUFdydzhzUmlsMkliY3l3c3Rxb1NqQzQwSEorMWpJVUI1VWpoOEVzdExIWU5xOTIwM2FVbjdpNHBQVmxGKzBiWW11eHgvZEE1bHR4azhnRGxRKzlSWGFaUFJrK21pcWUzU3ZSbUVwVitVMGZ2ZUg1RDZNL2dTM3NpN2I3WFVMeERTS1BxNDVkU1FOc2w0R0x1K3VBT3F1RXVxVE1oS3lySTh4SnAxWGhpL21ScFovN2EvV2piSVhLd1FTRFdEaWpTeDBvQ2trR0RVaTJud0Iwd0xmQXhHTkpOZE9QUmxmWW1NcUlEZ0ZRaEpRSW9NS0hRNFJsUUNjaWFoRHZWVkNIQ3pSSWNEUm9FRkJTaFVJTFMrb2Fpb0E3OUlIRk5TeVVkUzRudkZGU2FCdFE0a2cvYXBsa1lyZ2hlRGtSVGVveWVtZUxhdVZIMVJmU0V3ZUlORlpFRDAyZXhVMjlDN0dKZFVJTkJ0VUZKMlFVcTBIR2FxTG1UdXFGVzdFVWIySkxJcWJFSGV6Z2FqUWtlRks4U0c5UmtocTZlUjdMemcvVXI5NlI2ZUw4SVpacEltczd3M3FQWnVGZWNINGlxM284ZndQOEFlWmZKQTJwdEo5MDRuVmxWRllGSHBBOVhjVi9YZDVxVWcyRTdWL3dXSjcrTlpwNEYvU1hMSjhqeWxKSUpTWkVHcWxCcDhqT1NhQXhRa254TmIxMFp6cmJKVmtCTlc0OFU4bnRRcmtsMlRtOWtyKzBRbngxOUsxeCt6OHI2Ulc4MFYyV051aHRFZlVoeFExS2lRRCtuRVFmU3JGOW01YjVwRTllQmFXMjhqalloRnZiRGtBeTBmZVVaK3RIN2pOSUhyUjhJV2Q3Rm4rTFoyU3dlQnQwRDNwRWlrbG9wSldGWklzVi9pR3pYakQxb3UyVVRHTmh4V0VlTGJzcDhnUldlV21sZElzVTQxL3JISGR5eTRDdXhmUmNnZjVmOE44Zi9BRnFNSy9TYXp6eHlnNmtoazAxYUJsMWhTRkZDd1VxQmdnZ2dnOTROSVE2bHNuU29FdkVibDN5a2RZTFplR0o0VEhoTTFBV1VUMXVVa3BVa3BVREJCRUVIdkZRZzMxUXFCSHJUWnFuVnBiYkJVcFJoSUhFMUNHa2JQNkdYVk40bkxnSldSN0tVU0IzRWs1MGFGc0RkNmQxYm13Y0NITzBrK3l0UHNxOHVCN3FGQlRLUHJGam5VQ0xGeWVJcUVEM292M05SdEJhblhrL1V0a0NCbGpWckU4Z0k5YWlBellWN2g3UEtNSDBSbVB5Q2ZHZFpwaGFNWTZSOXowN1BkU1VFOVM1T0NjeWtqVkpQSHVwdDdRRkJNRFNnZDFIMVNQR0o2bWo2aUY5Tm51cXB2VVFIQmljRkhjaFhCbmxOeUlvMm1nSk5FRDZHZVJxcWkzY1d5alZSYU5kWVJKN3FsQXNRenNlTTNWcFFUbmhKRWo4M0k5M3J5cnE2VFF3bkhmbGxTOEw1L3dERExsenlUMndUWlBiWkNjbXlJajJwU1o1NWc1VjNJWXNVZUl2Z3pQSkx6MmVBSEVwSG1KK05YS2NJK1VJMDMwbUlkY1NCbEt2RElaY3lSN2g2MW55NTEvU1dSZy9JMG5hQUdpUDVsQlhqOW1xbHE2WHRHZUczN2hhYnhLdFU0ZkRUKy9LaXRUQ2ZFbFFQU2xIcDJlRUhJWmlZN3ZRNWVsT3RrL3hBOXlIQTR0SnhvVVVxQmtFR0k3dldxZFJwMUpjRFk4dE1LN1hhek4ra00zNGh5SWJ1VWo2eFBjdjc2Zjd6cmk2alJ2Rzc4ZngrQnJ4NVZQanovSk0zTDNTVzF0RUpmQVVoS1N0dFl6UXZUQ29ldWxZcUxEYjIyUkdsRWhqSFRSc3h0dDFwMUlBVXVRcnZqTUdveUl6UUpwUmc3NklMTUx2U28vWWJKSGlTQjhKcUFadnpZeXBnR2VkTWlFbXprak1MUmg4WmcrNmFqSWpFQWFVWTZFaW9RM25vYllDYkZKSDJsckovbUkrVkZDczBGV2xFaGtmVHFBcHBoSEhyQ3J5Q1NEOFJRWVYyWXl1MEkwTkFJanFWVkNCUHVydVJlWHd4b2hEZW1OYzUvbEExcWRnc203eWRIMTVhSUxzcGVRQktpa0VLQTU0VHFLbEFzREJjY3hVR1BmU0J5cVdTa1BxcUVIMldZRWd3c2pzODBZdlpJL0VlSElTZGNOYXROcC9Wa2t5ckprMnF5b0lneHkxcm9wYkpVeXU3UlkyZGdwM05JeW1LMzRjRHlxL0JseTUxaWRNa09iS1VpU1V6N3ZqV2lXa2FWb3BqcTFOOWloWmt0aFJnREVSbG45bVFJRlluRnVWU2Y2SXUzcExnWlZhcE1oT0tRQ2N3QmtQT3JuZ2crRmRpTExMdDBSN2UzSzFCS1FDYzR6ZzVaL0tzS3h5bExhalE4aWpIYytoU0RoT0ZVbFBMaUR6VDMvR3JWS1dKN1dIakl0eUZyWEVrZHNDTXhPS084Y09GWExOOGMveVY3UG5nNmx3RWE4NFBIV2xtbGtYNEN0T0R0R2g5SGU4YWxSYk9LaFl6WldkRXFQMlQrRlh6bXVKa3hPTDROMFpLU3Mxdlp0K0hXeWZaVWtsTGlUcWxRMUg5L3ZXWnFoekVlbVhhV083UTBEL0RSSjhWbjloUVlRQlN1Z0UwWG9XZC93Q3NXT2Jmd1YvV29CbTh6bFRBTTI2WGUzYkhPTUJDdkhoODZEQ2pGTWRBSjNGVUNqNlA2T3JNTldqYUI5MEUrS3N6N3pSRkN4WnlvZ01GNll0cWRaZUpiQnliUm4rWlprKzREMW9NWkFEMWxBaElzYk54NHcyaFN1Y0FtUEUxQ0gwdnU3WXBhWWJRa1FBbEk5QlRJVWtiVFFDaFFPWWcwU0h6QnRaaENYblVwMERpd1BBS01VZ3lJblZwcUVKRmxiNDFSRWpMTG1TWVNuelB1bmxWbUtHK1NpTE9XMVdYRzhtemsyMXUwU3JHdDhyY1Vmd0JSUWcrY1Q2UlhXd1BhM3h4MFpKY2c5YjNDY3l0QVZsbVlHY2FIeDUxdWpQRzIzTlcvd0NSSlFsd29PaS90VktjUktFdUlRQ2tFcEFTbVZLU2daem9CM2NLMHcxVVZVVXV6TGswelZ5bHpYeVZUalNuSENrQlVBOGZuT2xKcWNzcFRjZWtOanFNVTF5elR0ZzduenM3R1JuMXdVRDNZU241MXpvYWlPTFVVdmd0bGlsUEZ6OG1mdTJ4UXBTbENRazRUbkd1dmVjdUE5MWIzTjc3WlRHRnhxSk12OXFDMUhWc3BUT3BWbHh6eTlhdHlUaGhTYVhMS3NXS1diM01HN3h6RW9xNWtuOXhYTjFNOTB0M3lkSERGUmh0K0JoSzgrWEk4cW9VdWJUSGJPdkFqMmdVa2pJeDJWZDhjUExMd3E3YzE3djNGVlBvN2JYSzJscElWcEdoNFRNVFdUTkJwVlpiaWF1Nk5vMlp2RGhReGV6MlhmcUxubGpTT3c0ZkZNSDlKNG1zZTNkSDhpenFWR09ieWJRTDkwODZmdE9LandCd3A5d0ZVRmt1R1Y0TlFBWWRHS1gxWGtXNWhlQTVtSWlST3RVNWxrYVd6czZQMmRMVFJuTDd5clZjZm1iTTgvdEp0TTRVcjhrL0lpczI3VlI3Vm0rT1A3THlQdWdJNlRkb3EraUpDNERqaFRJSERpUlczSGJnbkxzNDJxampobWxIRnpGUGd5Y0twaWdVbGRRSjlFN01zN2x4dGxWdTVoVDFhWkdLSk9VY0t5Nm5IbWswOGJvNldqejZXR054elJ0MzhEKzBITnBNb0t2YkFINEZmc2F6TDc1RHZuOWpiaVgyWmxraytQM1JnRzJ0b3FmZmNkV1pVcFJKK0E5d3JveHVsZlp4Y3lnc2tsRHEzWDVFTEhURlJ2dTVleWtOV3phUU15a0ZSNWtpU1RSUXJEU3hQWkZFQlg3ejNvWlljY09pVWsrZ3FFUGw1KzRLbEZSMVVTVDVtYVVZYTZ5b1F2V21paHRwZjNsRlI4c2tlUEUvcXJkb1lweWRtYlVTcUpNMzFmNjViWlFGWUcyV214T1FKU2dZb1A1aWE2c05Oa2lya3VMc3lMUEI4SmxBOWF3QW9EOEpCNEdNdjM4cXRqR0w1aWhvNUczVE5hMk5lMi8rSHVkZ0VxUWdSeTdNL0g0VmhXSEk4eWZnYVdSS0xYa0I3TjFUcm9obzRaeW5pb24yanp5QUZiODA5emNoTVdMMDQxNU5ZMlAxaVVxdDNOUW9IREVBUVlBQTd5UlhObEZOcWFMYnBiUVMzcTNZY2JkdVlSaUVLY1Rsd3hBNWVBSnJaanp3bENNbS93QUNseGxHVFJuTzBnb3FLaUlCeno1YVZibms1Ty9BbUZwS2lNOWhTbEpnbkVrNXhrQ0ZRSTlEV1M0ZE5NMHJjeEtYMFpCU0p5R1lsSjkydm5VOVRGMUtQK0FiSi8wc1VtN1NsS2todnNxMWxST2ZNVG9lK25obnd3dEtMcC9MRmVHY3FibHlpRkhFYWU4Y3F6VGduekhvMHFWZGhQdTd0Z0czZnMxNk9KU3RvOG5XbFNQZE5VUmdrN0ROMkQrM0Vkc09SQWNUaVA1d2NMbm1WREZIREdLeFRWTXRpN1JYZzBneG9YUkhhWFBYTGZ0MFlna0JDcGlNOHlCSjhLb3pTeUt2VFIwL3MvSHBKS2YzaDExUnNPMTlyWExUU1ZkUVZxSU9NQko3UG1KbXE1WnNzVXJqK1pvMCtoMG1iSTR1ZEx4ejJZZjBpYmJYY1BJU3BHREFuTko1bXI4V1Z6amJWR1Q3UzBtUFM1ZG1PVzVWMkNZVlZoenhRTlFKOUU3bFh0MzFMQ1VOZGd0dGpFcEpqVE16T2xZNVpzMjlLTWVEdFp0TG80WTdjL3ErRXlWdm52Rzh3MDZoVEl6U1lVQ1lnZ3daMG1oTFZaSXoyeWorb05OOW1ZZFJCempQcFBqOGo1dks2Mm5HT2h5b0ErbHQzaDlRMmZ3SitGTWtLeHBtK3ZrbFVNcFVpVGh5ektaeTBWV0dXVFVSazZqYU84dE45bnloSDY2ZEsvOEFhQWpwTzNwZU51V0hHdXJLeUJPZVkxT283cWZEbm5OMUpVVjYzN1B3WWNDeTQ1M2JxdURKQ2EwbkhFelVJR2QyMEVPSWFVQ1VvYlFVaUpNcVhoSjlFSk5kNzdJVVZ5L1ArLzVPZDlwTjdFbytPLzhBZjBJTzI3M0tFRSsxSVBlUHVqZ0s3ZW9tbzQzK0p6OUpoYmtteFRMSStqQlNqMndWVEVFZ29PaDdzS3A3b0ZjL0RrY1pXYThzVnZwZVNacy9hcWdoSkJ3Z0VLTUFTbzkvTStOYTVxT1NIUGt6NDRTeHpZVjd1M1RjakVFNVJBQUFBSGQ1MWd6WTNYQm9qUGtKZjhWUjE3cmlDRGd3b3pPY3dGR0I2R3N5eFAwMUZsam45VmpXOCszRkxlN0NzSVUxQkprQWhhZEJHcGtqMHBzR2xYcDAvREprelZLMEFOL1pvd0F2b2N4NTlwdEJNNWtBT0pJRUtnVGlHczU1MWNuS01udDVSVTZhVGZCRHZWdEp0R3lHMUpVSG5FaFN1S0NsSkEwbVp6UDU2cW5QSXB2d1d3aEZ4K1NpMnJhWW1rdm9HV1BxaWVhOElVUEdRVG4zYzZtcGxHYVNYdVM1SmczUnUraXRXVGtJanVqUThmR3Ezd2xhb3VWRExoS1RpR1FPdktoTnloOWNRcXBjTWVVaFNWSlVPR0ZRNVprRDQxa3l5ZmJMSUxpaVp0VklWYmxYRnQ4RDlMelpQeFpIODFaY2pUZGxzVlJVV2R1dDFhVzJ4aVd0UVNrY3lhcUhQcUxjUGR4Tmphb2FHYW9sWis4bzZtbVFnUVBpUkZFQjh6ZEoxdXB2YURvVnhDU252VEg3ZzByTFhUNkJVR2dDZ2wzRDNjVmYzU0dnT3dJVTZlU0FkUEU2ZXZLb1JuMU5ac2hDQWhJZ0pBQUhjS2NRYTJ2YkJ4cGFDUGFTUjZpS0ZJS2sxMGZJbTBiVlRMaTJsYW9VcEovU1lwV05aRktxaEtOMzNmdHI5TnVoU1hVRk9BRUpJemlOTkt6YmM2NXM5SjYvMlZOUmk0TlB5d28yVnRXNERTeTZ3VWxDWkFoWGE4TXFXT295VTNLUFJrejZEU3JKR09LZHB2OEFZeUxwYTI2Ymh4cEpRVVlRcVFlZVZXWWMzcWVLS2Rmb0ZwRkNwV3BYL1lBTVZYbk1QWXFnQXcyMHlwYnkzTVVJQ1VCTVRNQkFrK0VsWHJYUndaSlFhMkoya1ZTakJ3K3J5VkYyM0VaNGdRWVB4cmJITEtmdVpUc2pIcEV4OXBJWVFBcnRLT002aklwaVBJZ2VwcmJOYllwbU9EMzVHL2dkc0xFRVpuSUFtTzhaNTkwQStsWFlHcFZGbGVlY2ttMFJ3NjQwdExoQ2twSkVaeGlUUEtaaWt6emsrVXZwNkd4cVBUZklRdnU0VnFVRkU5WXJnWTRBSFBQKy9Damd4Ymx5VjVzdTNoRjVhclNsYVhGa3FRMmxJek9aVU0vbjdxcXpMaHhRY2NuMnhxNzI4cDFaaElTam1lWE0xemN5akZKTHMxdzNTNVlPYlJ2a3ZTb3Q5aURnNEdEa0YrT1hvYWJIYTRIYVM1QjlwMGhKZ0hKUUp6NHBKR1k0WmsvM01tVGNXME5zVXFka1IrWnhZZFNUcEF6TWpoQXFwNDV0V2l4T04weHBTdFNCSW5LZlhQbVJJcVJuSVJ3WGd1TCs4RHFMZERhQWNMSlNySVQxaE9KWjkrRWR3QjFySGxkOHRsc0ZYQjY0VC8wYnlTTTBwdGllZVRxMHgvcnJISHkveE5ENkN6b1EzYTZ4YXJ4WXlTU2hxZWYybGZMMXB4TE4zYVJGTUtkY1RVSVlwMDhiTC9nM0lIRXRxOERtbjNqMzBySFRNaEFvQlBwWG9vM1graDJpU29mV3V3dHptSkdTZklmT2loVzdENENpQVM0S0lENXM2WjlsOVJ0QXJBaEx5UXY5UTdLdi93QSt0S3gwQ083K3lsM2R3MncyTTFITThBa1pxSnBYMFBCcFNUZlI5RjdxN0ZlWmxEajNXSUdHQkdZamg0VlhoeHpqN25aMVB0SFhhYlBGZWxqMnNMdUZhRGpHTzlQR3lpVU5YQUhzcUtWZUN0UGVCNjByU0hVbStHekdKb0VQVFVBR1MzRkYxYmlsWjVKQUdRaFFJZ0Q5SU5laCt6b3FveitVditqbDZ1ZDNEOGY0NUt0MFNFcEVZaE1nZjNvUkI4NmFVUDhBa3BJZmZVYmZSYXEyZVZCcE13Q016eTFQN1YwTTJQZW9ST2ZqemJkN0gxUTBNSVVGck9VWkJNZCtmdXFZOFBwZHU3NkpMSjZ2TlVrUmRwSXhrQW1WNEFjczVWaUppT0FnMHVvVjhYejRMTURwWFhCYTIxdUZOdHVFeGhiVE9rWkRNL0dyTWM2eHBzcG5HNXRJVUhTNDJBbmdNendDajhUV2RSYzdvdWsxR3JJR3pTa3RMU3RRSzhSN0JWR0k4RW1lQlBDdVROUDFMZmc2VGYwcWhWNjY2TUpVaEpTVTZEMmdEekh5cTVSdmxGY1d1aXJVRUtWaU1rOHNPZm1vL3ZWZVROSytpeFkwbHdjVzVBeVNJT1VRRE04NTFNMVhqeXpqSzEyeFp3VWx5VlY5cmhIWkhHSmlZQVZIZGw3cXQxVUh4eFhIUDVrd3k0NVpNMklwS0NNZVl6ekIwMGcvM3pybFB1MmJGK0JMdTF6WjNLaE1MY3RXazk2aDE3aWg2SlRWVUZTcjhReWRzMzNjYlphYmEwWmFBOWxDWjcxUktqNnpUSVVLVzZJRGpzVkNHZTlNRnAxbXozdndBTEg2U0RRR1JqdlJuc2o2VnRCcEJFcFJMcS9CRVlSL01VK2xLRm4xSmJvZ1JUaWtvVUNDSEtKREh1bi9BR2VEYnN2OFVPWVNmd3JCK1lUUWZSRWM2R3QyT3BZTjI0bjZ4NGRpZFV0OFBYWDBwVnlGbXAyclVDbkFTQ21vUUd0KzlsQzVzM211S2tHUHpBU1BlQlVDajVhWVlVdGFXMGlWcVVFZ2ZpSmlQV2xDYU4vN1J2OEEvZEhwVW9KQTJSYmx4dkdjd0NsUGVTQm42VjNkQnFZeHhLQzdPVnFOUEtXUno4RFcyTFhxM0F0SXluaHlreFBQV3RlYnVPYVA2bGVQbU1zVC9RZGJmSVVUbWUxTWR4ZzVlVWVsREhuY2RST0xmNHI5UmNtSlN3d2FYNFAvQU5KZDIyMHVGQ0NEb1R6TmRPRGpOV3pCTGZCdElyRU1MUTRWUmxCQ1RPWXk0RHdtcytTTWxsM2VEVEhKR1dMYXV3ajJOMU55MHRMaW9jQ1pHV1JJSkFIZHByMzFYbWxKMXRWcnlOalNpM1pIMnEya0JEYU95Qk1nRUFmM0ZYNDAwaW1jazM4bFdMalBJSE9FZ1o1ay9LUFdEVldhVVZGOEZrWXk0ZGo5NDI0RE9tbVVna0RoWE54NUlTK2l6Uk9FMTlTUWw1c1lUa21ZOW8rV1puU3R5MDZqamRKWDhtUjVuTEp6MThGSGRPbEExU1ZFZG5ETUNlT2ZHc2M5dU9uU3Z4WDhtNkNlUnU3cnpZd2xHS0UrdmpXSFdhbS9vUnIwK0wrcGxqWjdJUzVsb2E1T2JPb0w1TmtjZTVqKzBiUXNvdGJZbVNxNVU0Znl5aHBKOXpsRERQZkRkOGd5UjJ5bytodGtpRUo4S3VRaFpKTkVBbFJxQkFicFBmdzJML2VpUFhLZ3dvQ09naTMrdXVISTBTMm4xS2lmbFNvak4wYXB3RDAxQUNGR29FRU9rSFpZdTdkTEIwVSt6UDVRNEZLLzBnME95RjdhMnlVSlNoSWdKQUFIY0tpUkNlMEtKQjFVVkNFRzlUS1Q0VkNHTDlIbTY2VHRPNmVXT3l5OHNOamhpVWNSUGtERkw1RzZSc3VDbUZQblBjKzR4QnhnNm1IRWQ4ZGx3ZW1FK1JxakpMMDhzTXZoY1A4QVV0eC9WR1VQa25YeENSaElKeXlqUE1aRWZQenJ1NlhXWThFZlRuMTQvd0NqbTZqVFR5UzN4NzhsU1hjSkdwQjlSKzRxM1U0NHRSbkY5bFdGeVRjV2pqbDJuQ1VEMmdrcTF5QlNKOHlUdzVkOWJNZVpZbzdVVlBDNVMzUHlPYk92U3BTMExFbEtjUUhQTklFZVJvNDliNmszRHl2NEs1NmJiRlRYVEhtM3NMaWNQWnhUSTA4dTdVMGMyVFoxNUJHRzljK0R0MkZseEtpRlljeEdaR2ZzbWREbkZTR1RkS1BQSzhFU1NqSmYzSzhLd0tTck9KQkNzOVJNU0RwbFM1WUx6NThsc0pPWFhqd09MdVY0aVNWYzVHWVBuV0dXUG1weC9WZjd5WHFhcTR2bjRZdGQyQ0lpZUhoem1NcVhUeHpOL1hKN2ZqL2VnNWxqcjZZOC9KV3ZyazVad0lFNWtVTlJrU2RMd1dZTWJxMzVIYlptZEJYRnpOK0RmRU5kMU5ta3FHZVhFOEFOU2ZJVnlkWEp0S0VlMmFzVkxsK0FUM2oycUhiN3JFK3doYUVvL0toUS9xYTYyUEdvUVVWNFJqbkxkS3o2SzJPNUtFbm1CVFJmQUdXZ05NQWFkWFVJWloweDdSaGhMUTFXb2VpYy93QnFVWkVMb05NZlNPZUpIcEJvZVFNMmhrMHdCNmFKQnB4VkFoUmJRZkJmWWI0bFMxUjNJVEh4VUtLSXkwT3RBaEpib2dGazFBa083WEFOQWdKYm90SnhPclQ5dDF4Ui9tajVVcTdHZlFXeFRpbnltbnJtWEV1dG9WaVFRVTlra1phZzh3UklJNUUxVEtVSkp4YlhJNlVrN1FZYlFjRHJTSDJ3UUZDU2s2cFVQYVFydkUrWUlQR2pwczhKSjRNbmZoLzVHeVFmL3dDa2YxS081ZlNyZ1NlSWpNZDQ0R3VwbzU1RW5oa20xOHJ4L3Z3WWM4STM2aWRQK3pJeFliUEtmekVLOURXN0ZpeHQvVTEvRC9ZelR5elhTZjhBSy9jWlF3VUVsSmt4NmlSa1I1YytGRDBIaGUrSExHOVJaRnRsMFd0c0pSTVloR2NFWWtuWHhHZmxWK1BXWXAzanljUDhUUFBCa2k5MEJsZDJvWVFvcUlrUW5MTGxKSHdpb3NVY2N0L2thOTYyblBiSkpNampJSUJnNmlSa2ZPcm5MZGJmUWlXeWt1eXR4cDVnK0FJOVpFSHlybXkxR0tLcTcvSTNyRmtrK3FPcWRLc2hNY29TUGhyV2JKbjlSYlkzK3kvd1dRd3FEdDErN0pGczBuamluaHk4NjV1ZWN1alZHSloyRnNTcWF6UEtrdVMxUUNuYnQ1OUNzVHdkZUdGUE1JT3A4L2g0MVJwTVcrZnF5L1FiTktsdFJsYzEwMzBaRDZRM0F2OEFyclJsZk5BbnhBZy9Da2lGaFZOV0FJbDQ3aFNTYVZzaVBubmYvYi9YM2FzT2FVZGxQbHFhVkRsOTBMMzhYVHJaKzJnRWZwT2YrNm8rd0c3TUtweFI4cXFFSXo3a1VHd21hTjdjRHUzVXRnOWx0cGJZL09xRksrQUhsVThCbzBoUnpxSUJJYk5NQVVwVlFoVDdmdkEweXRaT1NVcVBvS0RDZ1k2TzdySGJ0cTRxR0wrWXo4NlJEUzZEaXJCREhsMjJXbGVSYzJkaWtkWXM4aWtqc25VZk1kOUNPV1VXbWd1S0JmYSt4MU5PVHcxQmpXdlM2TDdVazByNW81dWZTeDhGV2xCbkxNNStQb2RhN0gzaUdXUDFmMy83T2U4TW9QZzZtOWpWc1R5NStZMHF1S3l3ZDQ1Y2Z1UFVKY1NSR1hjQ2NUY28vQ1RwNEtId0lxK1Vsa1gxVTJLb2JlT1JpNHUxbk1nZTRqL21oRExPQ3FLNC9Pd3ZGQ1R0dm45aU1wWk9ScWpKbHlTN0w0UWl1anphSk5aMTlUcXl4dXVTVTBnQXdQVTVlbE5LYXgrM2xpcUxsMlh0aHM0NFE0dkpKOWtjVm51N2h4TllzMG4yMld4U0NyWit5WGtNOWNsbkd2OEF5MG4yWis4cmlVamx4MHlHZFk0dzlWMjE5UDhBSmEzdC9NRGQ2eGQzTHVLNHlVa1JoR1FIbFcxWllvcWVObEFyWnJnNTAvcXBpN0dhNTBNN1FJWld3czVvVVNQeXF6K00wRk5XSzR1alV1c3lxNjBJQXZTYnZFTGUzVUVudHI3S1I0Nm1xNU8zUThWeFo4L3JVWnpwZ0JGMGYzL1UzN0NwZ0ZXQStDeEE5OFVzdWdvK203WlVnVTZGWklKb2dCamZmYnFiUzJjZE9vRUpITlJ5U1BXa2ZkREw1UG43ZG5heWtYekx5am1YUVZIbmpNSDQwWjlCajJmUzZINWc4eFVUQXlhMGFjVTg2cW9RekRwbTI4RzdjTUpQYmRNZm9IdEg1ZWRWM3lNdWhqb2t1OFRLVS9keTlLa2V4cGRHcFlxdEt6RmxiVi9FQlhtcFlXZFJOSFc5b2s2TEZWdkNOdVF0eTZ4Z3BYbUR6TWVrNlVJeG5qbGNTU2NXcVpRYlIyZW9aZ0JhZVlJeEQ4dzQrSXJyNmZWcnphZjlqSFBIOGNsSTRZeWt4eTFGZEZaNWRwbWZZdkpGVkZONnU3dEEyMTBOcVVCd3A0NWR2Q1JIRy9Kd3VEV00vWC9pbW5sVWxmVEZqQnAxNE9vbndxaHpMS0NuWU96a0VBcGJVODV5SWhwUGVlSy9jUEdzMlhVUWl1V1d3eHlabys3KzZja08zUnhxeWhBOWtScE1aWmNoa0t6eGpMTHpMcjRIbEpRNGlGenJRaUlGYWVsd1UrUU4zaDJRMnBlSXBFbld1SnJNMHNjK0RmaGlwUjVLTnpZU09Bckt0Yk11OUdJV2JxN3NJYVRqSWxTbzE0ZHdydGFhTGxGU2tZTTBrblNDVmRwbGtTUE0xcjJsRm1mNzhidnFjek9mS1RXTExsOUYyelZqaXBvQW5kMWxmZHBJNitMR2VuYUdHTjNIQXRPRkp4QlFJOFFaRlh4MVVaY1dWdkMwYi9zaTgrclRqeVZBblhXTTYxUXlxcVpubEFzRjNTWTlvZXRPOGtSZHJNUDZXTnNHNWVES0Q5VzJjNDBLeit3K05WeHlLN0gyTXp2NkVzRUVhZ2dqeEdsUDZpSnNacnU3Ty9ycWxzc1BXNmtTUW5yUHM2WlZGSkVjV2F2Yk9naWF0c3FHcis1U2hKVVRBQUpKN2hRazZRVWo1bDN5MjRiMjdXN1BZQnd0amtoUEh6MXBWME1GdlJGZkJMeW15ZFlJcUwzQmZSdFBYVmFWR0ZMdHh5RmNlem9DUTEzVUxKUWxWbUY1Rk9MeW1qNmxlUWJSczdDQjBCVDRFL0NtOVpnOU1oWEc2NEprT0xCOWFzV3Fyd0I0YjhrUnpkNTRleThQTVIrOVdMVlI4b1I0WmVHUTE3SnVlYVQ0ZjFBcC92T05nOUdaYmJ1YnIvU0Y0WDducWRJaEFWaTdweEFKOTlUN3pEb1BveXF3NlkzSXM3Y1lpSEhWRGl0UmlmQklGU2FsSmRpeGFUNkplN3EwcmNJVGtsSnlFUUo4SzUwTkszTzVHaVdXbzhCN2JaQ3VuR0ZHUnlGdktvdUpFd1Uza1dVd3JoeHJqYTdBMjdOMkRKU0lXeVY5YXNKR2ZFOTFZOFdsY3BKRms4dEkwQzBFQ3ZSd2pTbzVzcFd4OWFzcWRvQU83d0xFU2E1UDJndURacG55RFBXSlBLdUp0YU45bHR1N2FKVTVpNVYwUHMvRzNPMlp0VE5LTkJveXlJcjBFWXFqbXRuTGkyU1JtQjZVSndUUVZKb3pmYmU3clhXcmhJRW1mV3VEcU1rOGVSeFIwTWFVbFpXV3U3S0ZMR1dsTGkxTTVTb2VlT0tWaFhiN0lCaE1ETHVyclk1YnVESEw1Q08zdHlrUUNmV3RhVkl6c0g5K0xCMTIyV2hLbFpqTUNKSTRpYXo2aVVvcmNXNGttNk1iZTNhSU9pdlNxSTYxUHlYUEFXKzUyeEZwdUF0QmlPWXlyUkROdjZLNVk2WEpwOHZjMCtocS9ka0tLUUFxdE82dU81SFJva3NiS3lsV1E1Y1QrMVZ2SjRRZG84VXBTSUVBY2hxZkUwRklPMGpPSjVKcTFTQnRHRk5FMEc3Q29qWnRhaVlhRW0wRlRjVGFJTnRHbVZUZURhV1ZudFZ4QXdLSlVrODlSNEdtV1p4NkE4YVpmN3FNQVlqSU1xbjE1amhXelM1Rkt6UG5qUVpOSnJlWkR6d29NZ0k3NEtIVkh4Rlk5VDBhTUpKM0h0QUdncmlyUDlxbW1oeFlNMHVhREJzVnRvem5uQlVaQ2syNDNLRDRHc3VveHFVUzdGS21aMm02SlZoSEV3SzRyeEpzNkNrYVh1OVk5V2djK05kalRZRkNOR0RMazNNdmtWc0tEamhvTmNCUUY3MUhBc0s0RVI1aXVIcnNQMTdqZGdueFJIMlptTVhFMVZwOEQ3SG5rOEJCc3djYTYyQ0ZJeVpKRnNrMXFLU0Z0UE5CSGNhejZoWEJsdUwzQUhLYTh0eW1kV2dpMkxhSkFrRE91NW9JMUd6RHFKZUMyNnF1bmJNdkJueko0a0R1RmNHbkxvNmFTWFlsMTBuV21VRkhzSWxLS3U5SkEzRG5WVWtuR1BSRHhhUEtsM3Q5QnFoSlpGSzIva1pDVk5qa0tsb2xES3JlYVJ5R280MnhCa1FlNGlSNTFFK1FNczdXV3oxamVYTlBMdTd4VnFsdGUrQlUvcVcyUWJiSXZrdXBDaHJ4SEkxMk1HZU9TTm1ESmljV1NMbXJXeXRBUnZjcVlUNTFoMUUvQnF4SUp0M0djTFNCK0VmQ3RPRDJvejVPeThTS3ZLeEs2aENqM2dYRGF6K0UvQ3FzdnRaYmpWc3puZHUyTGx5Mk9BT0krV2Y3Vno4VVU1VWJNanFKc05vbkt1b2tjOWtzVXdvbHloUVFSMzRUOVRQSlNmakIrTlpOUkJORitKOGtmWjNzZ2VGQ09QZ2ttRXRzaUJXcU1hUlMyU2hUMEFpM2d5TlZ6amFHaXpPbDI1K2xLU05BWjlhNGt0TXQ5SFJXWDZRejJjSUZkWERqMm94WkpXeWZOWDBWMlorQlhHU2E2T20zZlowSkhDcEdGOHNEWjRSVm5YZ2g0cUFvUzJKaFNaNEtuamxWVGszeEZESlYySVVnVXZwdnRqMkpDTzZxNVkvZ04vSThobm5TYmZrRGw4Q2l3TzhVNmlxRjNNODJpUG4zMHE0SStTeTJPOFdsendPbzdxdndaSGpsWlRsU2txQ2k1ZEdHZUVWMTNKVlpoUzVvQ05wZHRaVlhKeXp1Vm02Q3BCanNPQzJtT1FycTRIY0VZc3Erb3VtMDFvS21OdkNLZ1FWM3RjSWFVT2VYcldQVlRxSnB3UnVSUjdrV2YxeFVlQ2ZpZjZWbjBqdVJkcU9JbWtzcHJxSFBING9nRU9WQWdwdnYvQVY0cC8zQ3MrZDFFdXhLMlI5akl5VDVVTVRzaytBbVpUV2xGSThSUkFRN3JRMHJHUUR0Sm02Y1A1UjdxeFV0NXEvcEN1MlRrSzJSWEJtWkpwZ0FHVlJsWE00eHJham9WdTVFQlZKdlZqN1RpMVVzbzJORVEySk5WYkxZN2RJbHBhclVrb3JnbzNOc1VMZm5WZE52bERicTZPaHFOS0xqdFlOOTlpRkE4NnpUamI0TEluVW9KNDFWdGRqTm9sSWJTTzgwKzFJcGNteGFhQ1JDZS9jSHFZNzQ4cTBySy9Ub3EyZlZaUVhEa21LeFNseWE0UTRzS2QxN2lXNDVaVjF0SE80VVl0VENwV0VLRjF0VE0xQ0hsMFd3VUJPODExalhoR2lkZkd1VHE4bHZhZERUd3BXUDduanRxOEJUNkh0aTZycEJ5ME1xNmh6eDZLSUJwZEFJSTc1dUFvQ2VaSHVyRnE1VkUwNmRjaU4zVEtVMU5OSzBUTXFZVHRKcmFqTXgxeEVVU0ZkZW5JMGttTWtCV3pqTDdoL0Y4QldMRkxkTm11YXFLQzIxNFZ1UmxhSlVVUmFNMUNxNCtON20zNU9zMVE0bXJzV0pWOVFrcGZBb2lyNUtLWDVDcHNXMmlzNzVkME5aWXRXOEp4VG55clNzVnhzelN5YzBKTlV5VFRIWEkyb2s2VlJPVjlsc1ZSNURNNjFVb3RqT1NYUklDQU1oVmlpbWlwdDJjQ2FxY1JyT3hTMEVVcGNncDVnK29FajRVdTduYjhqcGVTb0ZaN05ORjV1MDdDeW5uWFEwVXFkR1RVcml3dlRwWFdPY1ZlMnI3cTBtTlRrS296NWRrUzdGajNNQzFTU1NUbWE0MG0yN09rbFNMVGR0M0E4SjBJaXRXam5VNk0rcGpjRFFHVlYyVWMyaVFWMFJTTThxZ3dnSHZSYzQzSUJ5VDhhNVdzbmNxTitualNzWHUyOUJ3enhvNlNmTkV6d2JWb0wyVlYwMFlhSEZycVdTaW0yNWNoTFpQR01xb3p6VVl0bHVLTnlBallyeERwQisxOGE1dW5uVWpkbGo5SWIycXNxNnNXWVpJazQ2YXhhTTNiUlhJd3V1VHFUNTRKRFNPRmFNV1RpaXFTOGo2R1lwbENoSE1lU2luMjJ4Tnc3aWcwVk5xVk1GSnJnUXBSTkxOODBQRkpLeDVoRVptcVhEeVJ6c2NGR01VM3lJMnpwVFJsQko4QVVtSUlxaVM1TEVOT3E0Vm15UHdYUVZqYlI3U2Z6RDQxWEgzSmx6Nm9ZNm1LVnJrZmNTYkJSUzRrcHpQS3JjVW5HVm9HeU0vcGwwRmlkb0VJeEtRUndycXJVTlJ0b3p2UlJjdHNaRkJ0dDNIQ3VIS3Ntb3liMHBCaGo5TnVCVXhXTXRKRmdZV2s4alYrQjFKRldYMm1nMmlzZ2E3aU9XeVROTUFyTnNYV0JCUEhoVmVXVzJJMEZiQVY3TXljNjRzM2JPbEVsYkxibFdRMHBzS3VTb3RUcUVyREMxWElGZGlMdEhLa3FkQzNsVVdLZ08yN2VZMVlSb1BqWEsxV1czdFJ0d3dwV1VxMjRVRkRnYzZ6UWRPeS90VUdsaXVVandyc3drbWpET0xUNUg4VlBZbEFJblN1WEQyczZMN0g3ZXJjSGtweWtrVm9YUlNMVFVqMkJpSHFyemRsbU04bWhsN1FWMFNSUUswS0ZCZTRMNk9MbzVQY0NQUWsxVkxzc1F3L3JXT1hab2gwSlR3OHFUeVdIbDZueE5SOXNnL3NyK0tueHEvVCs5QzVQYUY5eDdOZFRKN1NqRjdnWjJ0b0s1K2Iyb3NqNzJWUXJJWEQxbnJWK0gzRldYb1BkbWZ3MCtGZHlIUnk1ZGswMDRvTzd5YUNzMnA5cGRoN0JoeXVUTTNJbjdGMU5hTk4yREo3ZjFDU3c5bXVqajZNZWIzc1hkK3lhYVhSV2dFdWZhUGlhNGVUM002VU9ocGVsSWdsdnNuMlJXakNkRFVlMUZqV293bi8vWlwiLFxyXG4gICAgICAgIGRhdGU6IFwiTWFpIDIxLCAyMDIxXCIsXHJcbiAgICAgICAgbGluazogXCIvc2luZ2xlLXBvc3RcIixcclxuICAgIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0ICBMaW5rICBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSGVhZGxpbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2hlYWRsaW5lXCI7XHJcbmltcG9ydCBwb3N0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vdGFibGVzL2Jsb2dfdGFibGVcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQmxvZygpIHtcclxuICAgIGxldCBzbGlkZXJTZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAzMCxcclxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTUwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLWJsb2cgc2VjdGlvbi1ibG9nLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lIGxhYmVsPVwiQXJ0aWNvbGVcIiB0aXRsZT1cIlVybcSDcmXImXRlIGNlIHNlIMOubnTDom1wbMSDIMOubiBsdW1lIEdPXCIgZGl2aWRlcl8xPXt0cnVlfSBwb3NpdGlvbj1cImNlbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBjbGFzc05hbWU9XCJlbC1zbGlkZXIgZWwtc2xpZGVyLXBsci0tMTVcIiB7Li4uc2xpZGVyU2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJwb3N0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hvbWUtMiR7aXRlbS5saW5rfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW1hZ2UgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaG9tZS0xJHtpdGVtLmxpbmt9YH0+e2l0ZW0udGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktdGltZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IgPSAnU1NHIERhdGEgTk9UX0ZPVU5EJ1xuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSByZWxvYWRpbmcgaW4gZGV2ZWxvcG1lbnQgZnJvbSBmYWxsYmFjayByZXR1cm5pbmcgMjAwXG4gICAgICAgIC8vIHRvIG9uLWRlbWFuZC1lbnRyeS1oYW5kbGVyIGNhdXNpbmcgaXQgdG8gcmVsb2FkIHBlcmlvZGljYWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgICAgIH0gPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXMsIHRoaXMubG9jYWxlcylcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHVybCA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uLCBvcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBCbG9nIGZyb20gIFwiLi4vY29tcG9uZW50cy9wYWdlX2NvbXBvbmVudHMvYmxvZ1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNwcmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PjxCbG9nIC8+PC8+XHJcbiAgICApXHJcbiAgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdyaWQtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9