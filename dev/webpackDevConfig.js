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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/dev.config.js");
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

/***/ "./webpack/dev.config.js":
/*!*******************************!*\
  !*** ./webpack/dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar babelConfig = __webpack_require__(/*! ./babel.config.js */ \"./webpack/babel.config.js\");\nvar postcssConfig = __webpack_require__(/*! ./postcss.config.js */ \"./webpack/postcss.config.js\");\n\nmodule.exports = function createWebpackDevConfig(props) {\n  var projectPath = props.projectPath,\n      clientEntryPath = props.clientEntryPath,\n      clientOutputPath = props.clientOutputPath,\n      api = props.api;\n\n\n  return {\n    mode: 'development',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', clientEntryPath],\n    output: {\n      path: clientOutputPath,\n      filename: '[name].js',\n      publicPath: '/static/development/'\n    },\n    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({\n      'process.env': {\n        'NODE_ENV': (0, _stringify2.default)('development'),\n        'target': (0, _stringify2.default)('development'),\n        'targetenv': (0, _stringify2.default)('browser'),\n        'api': (0, _stringify2.default)(api)\n      }\n    })],\n    module: {\n      rules: [{ test: /\\.js$/, loader: 'babel-loader', include: projectPath, options: babelConfig }, { test: /\\.(css)$/,\n        use: ['style-loader', {\n          loader: 'css-loader',\n          options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' }\n        }, { loader: 'postcss-loader', options: postcssConfig }]\n      }]\n    },\n    resolveLoader: {\n      modules: [path.join(__dirname, '../../node_modules')]\n    },\n    resolve: {\n      alias: {\n        react: path.join(__dirname, '../../node_modules/react'),\n        'react-hot-loader': path.join(__dirname, '../../node_modules/react-hot-loader'),\n        'webpack-hot-middleware': path.join(__dirname, '../../node_modules/webpack-hot-middleware')\n      }\n    }\n  };\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack://reactOneKit/./webpack/dev.config.js?");

/***/ }),

/***/ "./webpack/postcss.config.js":
/*!***********************************!*\
  !*** ./webpack/postcss.config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  ident: 'postcss',\n  plugins: function plugins(loader) {\n    return [__webpack_require__(/*! autoprefixer */ \"autoprefixer\")(), __webpack_require__(/*! precss */ \"precss\")(), __webpack_require__(/*! postcss-nested */ \"postcss-nested\")()];\n  }\n};\n\n//# sourceURL=webpack://reactOneKit/./webpack/postcss.config.js?");

/***/ }),

/***/ "autoprefixer":
/*!*******************************!*\
  !*** external "autoprefixer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"autoprefixer\");\n\n//# sourceURL=webpack://reactOneKit/external_%22autoprefixer%22?");

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

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://reactOneKit/external_%22path%22?");

/***/ }),

/***/ "postcss-nested":
/*!*********************************!*\
  !*** external "postcss-nested" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"postcss-nested\");\n\n//# sourceURL=webpack://reactOneKit/external_%22postcss-nested%22?");

/***/ }),

/***/ "precss":
/*!*************************!*\
  !*** external "precss" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"precss\");\n\n//# sourceURL=webpack://reactOneKit/external_%22precss%22?");

/***/ }),

/***/ "react-hot-loader/babel":
/*!*****************************************!*\
  !*** external "react-hot-loader/babel" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/babel\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-hot-loader/babel%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack://reactOneKit/external_%22webpack%22?");

/***/ })

/******/ });
});