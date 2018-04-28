(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("reactOneKit", [], factory);
	else if(typeof exports === 'object')
		exports["reactOneKit"] = factory();
	else
		root["reactOneKit"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./router/rrv4Helpers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://reactOneKit/../node_modules/webpack/buildin/module.js?");

/***/ }),

/***/ "./router/rrv4Helpers.js":
/*!*******************************!*\
  !*** ./router/rrv4Helpers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"babel-runtime/core-js/promise\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"babel-runtime/core-js/object/get-prototype-of\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nexports.generateAsyncRouteComponent = generateAsyncRouteComponent;\nexports.ensureReady = ensureReady;\nexports.convertCustomRouteConfig = convertCustomRouteConfig;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Returns a new React component, ready to be instantiated.\n * Note the closure here protecting Component, and providing a unique\n * instance of Component to the static implementation of `load`.\n */\nfunction generateAsyncRouteComponent(_ref) {\n  var name = _ref.name,\n      loader = _ref.loader,\n      Placeholder = _ref.Placeholder;\n\n  var Component = null;\n  return function (_React$Component) {\n    (0, _inherits3.default)(AsyncRouteComponent, _React$Component);\n    (0, _createClass3.default)(AsyncRouteComponent, null, [{\n      key: 'load',\n\n      /**\n       * Static so that you can call load against an uninstantiated version of\n       * this component. This should only be called one time outside of the\n       * normal render path.\n       */\n      value: function load() {\n        return loader().then(function (ResolvedComponent) {\n          Component = ResolvedComponent.default || ResolvedComponent;\n          return { name: name, seo: Component.seo };\n        });\n      }\n    }]);\n\n    function AsyncRouteComponent() {\n      (0, _classCallCheck3.default)(this, AsyncRouteComponent);\n\n      var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncRouteComponent.__proto__ || (0, _getPrototypeOf2.default)(AsyncRouteComponent)).call(this));\n\n      _this.updateState = _this.updateState.bind(_this);\n      _this.state = {\n        Component: Component\n      };\n      return _this;\n    }\n\n    (0, _createClass3.default)(AsyncRouteComponent, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        AsyncRouteComponent.load().then(this.updateState);\n      }\n    }, {\n      key: 'updateState',\n      value: function updateState() {\n        // Only update state if we don't already have a reference to the\n        // component, this prevent unnecessary renders.\n        if (this.state.Component !== Component) {\n          this.setState({\n            Component: Component\n          });\n        }\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        var ComponentFromState = this.state.Component;\n\n        if (ComponentFromState) {\n          return _react2.default.createElement(ComponentFromState, this.props);\n        }\n\n        if (Placeholder) {\n          return _react2.default.createElement(Placeholder, this.props);\n        }\n\n        return null;\n      }\n    }]);\n    return AsyncRouteComponent;\n  }(_react2.default.Component);\n}\n\n/**\n * First match the routes via react-router-config's `matchRoutes` function.\n * Then iterate over all of the matched routes, if they've got a load function\n * call it.\n *\n * This helps us to make sure all the async code is loaded before rendering.\n */\nfunction ensureReady(routeConfig, providedLocation) {\n  var matches = (0, _reactRouterConfig.matchRoutes)(routeConfig, providedLocation || location.pathname);\n  return _promise2.default.all(matches.map(function (match) {\n    var component = match.route.component;\n\n    if (component && component.load) {\n      return component.load();\n    }\n    return null;\n  }));\n}\n\nfunction convertCustomRouteConfig(customRouteConfig, parentRoute) {\n  return customRouteConfig.map(function (route) {\n    if (typeof route.path === 'function') {\n      var _pathResult = route.path(parentRoute || '').replace('//', '/');\n      return {\n        path: _pathResult,\n        component: route.component,\n        exact: route.exact,\n        routes: route.routes ? convertCustomRouteConfig(route.routes, _pathResult) : []\n      };\n    }\n    var pathResult = '' + parentRoute + route.path;\n    return {\n      path: pathResult,\n      component: route.component,\n      exact: route.exact,\n      routes: route.routes ? convertCustomRouteConfig(route.routes, pathResult) : []\n    };\n  });\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(generateAsyncRouteComponent, 'generateAsyncRouteComponent', '/Users/calderaro/dev/react-one-kit/src/router/rrv4Helpers.js');\n  reactHotLoader.register(ensureReady, 'ensureReady', '/Users/calderaro/dev/react-one-kit/src/router/rrv4Helpers.js');\n  reactHotLoader.register(convertCustomRouteConfig, 'convertCustomRouteConfig', '/Users/calderaro/dev/react-one-kit/src/router/rrv4Helpers.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://reactOneKit/./router/rrv4Helpers.js?");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/object/get-prototype-of\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/core-js/object/get-prototype-of%22?");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/promise\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/core-js/promise%22?");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/createClass\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/helpers/createClass%22?");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/inherits\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/helpers/inherits%22?");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-router-config%22?");

/***/ })

/******/ });
});