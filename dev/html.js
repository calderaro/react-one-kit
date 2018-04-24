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
/******/ 	return __webpack_require__(__webpack_require__.s = "./back/html.js");
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

/***/ "./back/html.js":
/*!**********************!*\
  !*** ./back/html.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"babel-runtime/helpers/extends\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initialHead = {\n  title: '',\n  ogtitle: '',\n  description: '',\n  ogdescription: '',\n  keywords: []\n};\n\nvar defaultProps = {\n  root: null,\n  initialState: {},\n  routerContext: {},\n  splits: []\n};\n\nvar prefix = '/static/' + (process.env.TARGET || 'development') + '/';\nvar main = prefix + 'main.js';\n\nvar productionHeaderDependencies = '\\n';\nvar productionDependencies = '\\n  <script type=\\'application/javascript\\' src=\\'' + prefix + 'vendors.js\\'></script>\\n';\n\nvar _default = function _default(initOpts) {\n  var scripts = (initOpts.scripts || []).reduce(function (a, b) {\n    return a + ('<script src=\"' + b + '\"></script>');\n  }, '');\n  return function () {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var _defaultProps$props = (0, _extends3.default)({}, defaultProps, props),\n        root = _defaultProps$props.root,\n        initialState = _defaultProps$props.initialState,\n        routerContext = _defaultProps$props.routerContext,\n        splits = _defaultProps$props.splits;\n\n    var head = (0, _extends3.default)({}, initialHead, initOpts.defaultHead, props.head);\n    var metas = '\\n      <title>' + (head.title || '') + '</title>\\n      <meta name=\\'description\\' content=\\'' + (head.description || '') + '\\' />\\n      <meta property=\\'og:title\\' content=\\'' + (head.ogtitle || '') + '\\' />\\n      <meta property=\\'og:description\\' content=\\'' + (head.ogdescription || '') + '\\' />\\n      <meta property=\\'og:url\\' content=\\'' + (head.ogurl || '') + '\\' />\\n      <meta property=\\'og:type\\' content=\\'' + (head.ogtype || 'website') + '\\' />\\n      <meta property=\\'og:image\\' content=\\'' + (head.ogimage || '/static/img/opgimg.png') + '\\' />\\n      <meta name=\\'keywords\\' content=\\'' + head.keywords + '\\'>\\n      <link rel=\\'canonical\\' href=\\'' + head.canonicalLink + '\\' />\\n    ';\n\n    return '\\n      <html>\\n        <head>\\n          <link rel=\\'shortcut icon\\' type=\\'image/png\\' href=\\'/static/img/logos/favicon.png\\'/>\\n          <meta charSet=\\'utf-8\\'/>\\n          <meta httpEquiv=\\'x-ua-compatible\\' content=\\'ie=edge\\'/>\\n          <meta name=\\'viewport\\' content=\\'width=device-width, initial-scale=1\\'/>\\n          ' + metas + '\\n          ' + (splits.length ? '<link rel=\\'stylesheet\\' href=\\'/static/production/' + splits[0] + '.css\\' />' : '') + '\\n          ' + (undefined === 'production' ? productionHeaderDependencies : '') + '\\n        </head>\\n        <body>\\n          <div id=\\'root\\'>' + (root || '') + '</div>\\n          <script type=\\'text/javascript\\'>\\n            window.initialState = ' + (0, _serializeJavascript2.default)(initialState) + '\\n            window.splitPoints = ' + (routerContext ? (0, _stringify2.default)(routerContext.splitPoints) : null) + '\\n            window.splits = ' + (0, _stringify2.default)(splits) + '\\n          </script>\\n          ' + scripts + '\\n          ' + (undefined === 'production' ? productionDependencies : '') + '\\n          <script type=\\'application/javascript\\' src=\\'' + main + '\\'></script>\\n        </body>\\n      </html>\\n    ';\n  };\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initialHead, 'initialHead', '/Users/calderaro/dev/react-one-kit/src/back/html.js');\n  reactHotLoader.register(defaultProps, 'defaultProps', '/Users/calderaro/dev/react-one-kit/src/back/html.js');\n  reactHotLoader.register(prefix, 'prefix', '/Users/calderaro/dev/react-one-kit/src/back/html.js');\n  reactHotLoader.register(main, 'main', '/Users/calderaro/dev/react-one-kit/src/back/html.js');\n  reactHotLoader.register(productionHeaderDependencies, 'productionHeaderDependencies', '/Users/calderaro/dev/react-one-kit/src/back/html.js');\n  reactHotLoader.register(productionDependencies, 'productionDependencies', '/Users/calderaro/dev/react-one-kit/src/back/html.js');\n  reactHotLoader.register(_default, 'default', '/Users/calderaro/dev/react-one-kit/src/back/html.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://reactOneKit/./back/html.js?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/extends\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/helpers/extends%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-hot-loader%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack://reactOneKit/external_%22serialize-javascript%22?");

/***/ })

/******/ });
});