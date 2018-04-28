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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/babel.register.js");
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

/***/ "./webpack/babel.node.config.js":
/*!**************************************!*\
  !*** ./webpack/babel.node.config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar env = __webpack_require__(/*! babel-preset-env */ \"babel-preset-env\");\nvar react = __webpack_require__(/*! babel-preset-react */ \"babel-preset-react\");\nvar transformRuntime = __webpack_require__(/*! babel-plugin-transform-runtime */ \"babel-plugin-transform-runtime\");\nvar dynamicImport = __webpack_require__(/*! babel-plugin-dynamic-import-node */ \"babel-plugin-dynamic-import-node\").default;\nvar objectRestSpread = __webpack_require__(/*! babel-plugin-transform-object-rest-spread */ \"babel-plugin-transform-object-rest-spread\");\nvar classProperties = __webpack_require__(/*! babel-plugin-transform-class-properties */ \"babel-plugin-transform-class-properties\");\n\nmodule.exports = {\n    \"presets\": [env, react],\n    \"plugins\": [transformRuntime, dynamicImport, objectRestSpread, classProperties]\n};\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(dynamicImport, 'dynamicImport', '/Users/calderaro/dev/react-one-kit/src/webpack/babel.node.config.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://reactOneKit/./webpack/babel.node.config.js?");

/***/ }),

/***/ "./webpack/babel.register.js":
/*!***********************************!*\
  !*** ./webpack/babel.register.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar options = __webpack_require__(/*! ./babel.node.config */ \"./webpack/babel.node.config.js\");\n__webpack_require__(/*! babel-register */ \"babel-register\")(options);\n\n//# sourceURL=webpack://reactOneKit/./webpack/babel.register.js?");

/***/ }),

/***/ "babel-plugin-dynamic-import-node":
/*!***************************************************!*\
  !*** external "babel-plugin-dynamic-import-node" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-plugin-dynamic-import-node\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-plugin-dynamic-import-node%22?");

/***/ }),

/***/ "babel-plugin-transform-class-properties":
/*!**********************************************************!*\
  !*** external "babel-plugin-transform-class-properties" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-plugin-transform-class-properties\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-plugin-transform-class-properties%22?");

/***/ }),

/***/ "babel-plugin-transform-object-rest-spread":
/*!************************************************************!*\
  !*** external "babel-plugin-transform-object-rest-spread" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-plugin-transform-object-rest-spread\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-plugin-transform-object-rest-spread%22?");

/***/ }),

/***/ "babel-plugin-transform-runtime":
/*!*************************************************!*\
  !*** external "babel-plugin-transform-runtime" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-plugin-transform-runtime\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-plugin-transform-runtime%22?");

/***/ }),

/***/ "babel-preset-env":
/*!***********************************!*\
  !*** external "babel-preset-env" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-preset-env\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-preset-env%22?");

/***/ }),

/***/ "babel-preset-react":
/*!*************************************!*\
  !*** external "babel-preset-react" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-preset-react\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-preset-react%22?");

/***/ }),

/***/ "babel-register":
/*!*********************************!*\
  !*** external "babel-register" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-register\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-register%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://reactOneKit/external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-hot-loader%22?");

/***/ })

/******/ });
});