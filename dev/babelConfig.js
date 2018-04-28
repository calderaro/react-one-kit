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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/babel.config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webpack/babel.config.js":
/*!*********************************!*\
  !*** ./webpack/babel.config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar env = __webpack_require__(/*! babel-preset-env */ \"babel-preset-env\");\nvar react = __webpack_require__(/*! babel-preset-react */ \"babel-preset-react\");\nvar transformRuntime = __webpack_require__(/*! babel-plugin-transform-runtime */ \"babel-plugin-transform-runtime\");\nvar dynamicImport = __webpack_require__(/*! babel-plugin-syntax-dynamic-import */ \"babel-plugin-syntax-dynamic-import\");\nvar objectRestSpread = __webpack_require__(/*! babel-plugin-transform-object-rest-spread */ \"babel-plugin-transform-object-rest-spread\");\nvar classProperties = __webpack_require__(/*! babel-plugin-transform-class-properties */ \"babel-plugin-transform-class-properties\");\nvar reactHotLoader = __webpack_require__(/*! react-hot-loader/babel */ \"react-hot-loader/babel\");\n\nmodule.exports = {\n    \"presets\": [env, react],\n    \"plugins\": [transformRuntime, dynamicImport, objectRestSpread, classProperties, reactHotLoader.default ? reactHotLoader.default : reactHotLoader]\n};\n\n//# sourceURL=webpack://reactOneKit/./webpack/babel.config.js?");

/***/ }),

/***/ "babel-plugin-syntax-dynamic-import":
/*!*****************************************************!*\
  !*** external "babel-plugin-syntax-dynamic-import" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-plugin-syntax-dynamic-import\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-plugin-syntax-dynamic-import%22?");

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

/***/ "react-hot-loader/babel":
/*!*****************************************!*\
  !*** external "react-hot-loader/babel" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/babel\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-hot-loader/babel%22?");

/***/ })

/******/ });
});