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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/prod.config.js");
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

/***/ "./webpack/babel.config.js":
/*!*********************************!*\
  !*** ./webpack/babel.config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    \"presets\": [\"env\", \"react\"],\n    \"plugins\": [\"transform-runtime\", \"syntax-dynamic-import\", \"transform-object-rest-spread\", \"babel-plugin-transform-class-properties\", \"react-hot-loader/babel\"]\n};\n\n//# sourceURL=webpack://reactOneKit/./webpack/babel.config.js?");

/***/ }),

/***/ "./webpack/postcss.config.js":
/*!***********************************!*\
  !*** ./webpack/postcss.config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  ident: 'postcss',\n  plugins: function plugins(loader) {\n    return [__webpack_require__(/*! autoprefixer */ \"autoprefixer\")(), __webpack_require__(/*! precss */ \"precss\")()];\n  }\n};\n\n//# sourceURL=webpack://reactOneKit/./webpack/postcss.config.js?");

/***/ }),

/***/ "./webpack/prod.config.js":
/*!********************************!*\
  !*** ./webpack/prod.config.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar ExtractTextPlugin = __webpack_require__(/*! extract-text-webpack-plugin */ \"extract-text-webpack-plugin\");\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nvar BundleAnalyzerPlugin = __webpack_require__(/*! webpack-bundle-analyzer */ \"webpack-bundle-analyzer\").BundleAnalyzerPlugin;\nvar babelConfig = __webpack_require__(/*! ./babel.config.js */ \"./webpack/babel.config.js\");\nvar postcssConfig = __webpack_require__(/*! ./postcss.config.js */ \"./webpack/postcss.config.js\");\n\nmodule.exports = function createWebpackProdConfig(props) {\n  var projectPath = props.projectPath,\n      clientEntryPath = props.clientEntryPath,\n      clientOutputPath = props.clientOutputPath,\n      serverEntryPath = props.serverEntryPath,\n      serverOutputPath = props.serverOutputPath,\n      api = props.api;\n\n\n  var client = {\n    mode: 'production',\n    context: projectPath,\n    name: 'client',\n    entry: clientEntryPath,\n    output: {\n      filename: '[name].js',\n      path: clientOutputPath,\n      publicPath: '/static/production/'\n    },\n    optimization: {\n      minimize: true,\n      splitChunks: {\n        cacheGroups: {\n          commons: {\n            test: /[\\\\/]node_modules[\\\\/]/,\n            name: \"vendors\",\n            chunks: \"all\"\n          }\n        }\n      }\n    },\n    plugins: [new MiniCssExtractPlugin({\n      // Options similar to the same options in webpackOptions.output\n      // both options are optional\n      filename: \"[name].css\",\n      chunkFilename: \"[name].css\"\n    }), new webpack.DefinePlugin({\n      'process.env': {\n        'target': (0, _stringify2.default)('production'),\n        'NODE_ENV': (0, _stringify2.default)('production'),\n        'targetenv': (0, _stringify2.default)('browser'),\n        'api': (0, _stringify2.default)(api)\n      }\n    })],\n    module: {\n      rules: [{ test: /\\.js$/, loader: 'babel-loader', include: projectPath, options: babelConfig }, { test: /\\.(css)$/,\n        loader: [MiniCssExtractPlugin.loader, {\n          loader: 'css-loader',\n          query: { minimize: true, modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' }\n        }, { loader: 'postcss-loader', options: postcssConfig }]\n      }]\n    }\n  };\n\n  var server = {\n    mode: 'production',\n    name: 'server',\n    target: 'node',\n    externals: [nodeExternals()],\n    context: projectPath,\n    entry: serverEntryPath,\n    output: {\n      filename: 'server.routes.js',\n      path: serverOutputPath,\n      libraryTarget: 'commonjs2',\n      publicPath: '/build/production/'\n    },\n    plugins: [new webpack.DefinePlugin({\n      'process.env': {\n        'target': (0, _stringify2.default)('production'),\n        'NODE_ENV': (0, _stringify2.default)('production'),\n        'targetenv': (0, _stringify2.default)('server'),\n        'api': (0, _stringify2.default)(props.api)\n      }\n    })],\n    module: {\n      rules: [{\n        test: /\\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/,\n        options: {\n          'presets': ['env', 'react'],\n          'plugins': ['transform-runtime', 'dynamic-import-node', 'transform-object-rest-spread', 'babel-plugin-transform-class-properties']\n        }\n      }, { test: /\\.(css)$/,\n        use: [{\n          loader: 'css-loader/locals',\n          query: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' }\n        }, { loader: 'postcss-loader', options: postcssConfig }]\n      }]\n    }\n  };\n  return [client, server];\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BundleAnalyzerPlugin, 'BundleAnalyzerPlugin', '/Users/calderaro/dev/react-one-kit/src/webpack/prod.config.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://reactOneKit/./webpack/prod.config.js?");

/***/ }),

/***/ "autoprefixer":
/*!*******************************!*\
  !*** external "autoprefixer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"autoprefixer\");\n\n//# sourceURL=webpack://reactOneKit/external_%22autoprefixer%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "extract-text-webpack-plugin":
/*!**********************************************!*\
  !*** external "extract-text-webpack-plugin" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"extract-text-webpack-plugin\");\n\n//# sourceURL=webpack://reactOneKit/external_%22extract-text-webpack-plugin%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack://reactOneKit/external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://reactOneKit/external_%22path%22?");

/***/ }),

/***/ "precss":
/*!*************************!*\
  !*** external "precss" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"precss\");\n\n//# sourceURL=webpack://reactOneKit/external_%22precss%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack://reactOneKit/external_%22webpack%22?");

/***/ }),

/***/ "webpack-bundle-analyzer":
/*!******************************************!*\
  !*** external "webpack-bundle-analyzer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-bundle-analyzer\");\n\n//# sourceURL=webpack://reactOneKit/external_%22webpack-bundle-analyzer%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack://reactOneKit/external_%22webpack-node-externals%22?");

/***/ })

/******/ });
});