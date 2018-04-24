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
/******/ 	return __webpack_require__(__webpack_require__.s = "./back/server.js");
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

/***/ "./back/render.js":
/*!************************!*\
  !*** ./back/render.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nexports.default = createRender;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _rrv4Helpers = __webpack_require__(/*! ../router/rrv4Helpers */ \"./router/rrv4Helpers.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactI18next = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction createRender(routes, rootReducer, html, i18n) {\n  var store = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore)(rootReducer);\n  return function render(req, res) {\n    return (0, _rrv4Helpers.ensureReady)(routes, req.url).then(function (splits) {\n      var routerContext = { splitPoints: [] };\n      var root = (0, _server.renderToString)(_react2.default.createElement(\n        _reactI18next.I18nextProvider,\n        { i18n: i18n },\n        _react2.default.createElement(\n          _reactRedux.Provider,\n          { store: store },\n          _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { context: routerContext, location: req.url },\n            _react2.default.createElement(\n              _reactRouterDom.Switch,\n              null,\n              (0, _reactRouterConfig.renderRoutes)(routes)\n            )\n          )\n        )\n      ));\n      if (routerContext.url) return res.redirect(301, routerContext.url);\n      return html({ root: root, routerContext: routerContext, splits: splits.map(function (s) {\n          return s.name;\n        }), head: splits.length ? splits[0].seo : null });\n    });\n  };\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(createRender, 'createRender', '/Users/calderaro/dev/react-one-kit/src/back/render.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://reactOneKit/./back/render.js?");

/***/ }),

/***/ "./back/server.js":
/*!************************!*\
  !*** ./back/server.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nexports.default = makeServer;\n\nvar _http = __webpack_require__(/*! http */ \"http\");\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\nvar _chalk2 = _interopRequireDefault(_chalk);\n\nvar _html = __webpack_require__(/*! ./html */ \"./back/html.js\");\n\nvar _html2 = _interopRequireDefault(_html);\n\nvar _render = __webpack_require__(/*! ./render */ \"./back/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _dev = __webpack_require__(/*! ../webpack/dev.config */ \"./webpack/dev.config.js\");\n\nvar _dev2 = _interopRequireDefault(_dev);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar log = console.log;\n\nfunction makeServer(props) {\n  var app = (0, _express2.default)();\n  var server = _http2.default.createServer(app);\n  var template = (props.html || _html2.default)(props.metas);\n\n  app.use((0, _helmet2.default)()).use((0, _compression2.default)()).use('/static', _express2.default.static(props.statics));\n\n  if (props.NODE_ENV === 'production') {\n    var rootReducer = props.rootReducer;\n    var routes = props.routes;\n    var renderer = (0, _render2.default)(routes, rootReducer, template, props.i18n);\n\n    app.use('/build', _express2.default.static(props.build)).get('*', function (req, res) {\n      return renderer(req, res).then(function (root) {\n        return res.send(root);\n      });\n    });\n\n    process.on('SIGINT', function () {\n      return server.close(function (err) {\n        return process.exit(err ? 1 : 0);\n      });\n    });\n  } else {\n    var webpack = __webpack_require__(/*! webpack */ \"webpack\");\n    var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n    var webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n    var compiler = webpack(_dev2.default);\n\n    app.use(webpackDevMiddleware(compiler, { publicPath: _dev2.default.output.publicPath })).use(webpackHotMiddleware(compiler)).get('*', function (req, res) {\n      return res.status(200).send(template({}));\n    });\n  }\n\n  server.listen(props.PORT, function () {\n    return log(_chalk2.default.green('Listening at port ' + props.PORT + ' in ' + props.NODE_ENV + ' mode targeting ' + props.TARGET));\n  });\n\n  process.on('uncaughtException', function (err) {\n    return err.code === 'EADDRINUSE' ? log(_chalk2.default.red('Port ' + props.PORT + ' in use')) : log(_chalk2.default.red(err.code));\n  });\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(makeServer, 'makeServer', '/Users/calderaro/dev/react-one-kit/src/back/server.js');\n  reactHotLoader.register(log, 'log', '/Users/calderaro/dev/react-one-kit/src/back/server.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://reactOneKit/./back/server.js?");

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

/***/ "./webpack/babel.config.js":
/*!*********************************!*\
  !*** ./webpack/babel.config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    \"presets\": [\"env\", \"react\"],\n    \"plugins\": [\"transform-runtime\", \"syntax-dynamic-import\", \"transform-object-rest-spread\", \"babel-plugin-transform-class-properties\", \"react-hot-loader/babel\"]\n};\n\n//# sourceURL=webpack://reactOneKit/./webpack/babel.config.js?");

/***/ }),

/***/ "./webpack/dev.config.js":
/*!*******************************!*\
  !*** ./webpack/dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar babelConfig = __webpack_require__(/*! ./babel.config.js */ \"./webpack/babel.config.js\");\nvar postcssConfig = __webpack_require__(/*! ./postcss.config.js */ \"./webpack/postcss.config.js\");\n\nmodule.exports = function createWebpackDevConfig(props) {\n  var projectPath = props.projectPath,\n      clientEntryPath = props.clientEntryPath,\n      clientOutputPath = props.clientOutputPath,\n      api = props.api;\n\n\n  return {\n    mode: 'development',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', clientEntryPath],\n    output: {\n      path: clientOutputPath,\n      filename: '[name].js',\n      publicPath: '/static/development/'\n    },\n    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({\n      'process.env': {\n        'NODE_ENV': (0, _stringify2.default)('development'),\n        'target': (0, _stringify2.default)('development'),\n        'targetenv': (0, _stringify2.default)('browser'),\n        'api': (0, _stringify2.default)(api)\n      }\n    })],\n    module: {\n      rules: [{ test: /\\.js$/, loader: 'babel-loader', include: projectPath, options: babelConfig }, { test: /\\.(css)$/,\n        use: ['style-loader', {\n          loader: 'css-loader',\n          options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' }\n        }, { loader: 'postcss-loader', options: postcssConfig }]\n      }]\n    }\n  };\n};\n\n//# sourceURL=webpack://reactOneKit/./webpack/dev.config.js?");

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

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/extends\");\n\n//# sourceURL=webpack://reactOneKit/external_%22babel-runtime/helpers/extends%22?");

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

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack://reactOneKit/external_%22chalk%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack://reactOneKit/external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack://reactOneKit/external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack://reactOneKit/external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack://reactOneKit/external_%22http%22?");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-i18next\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-i18next%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack://reactOneKit/external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack://reactOneKit/external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack://reactOneKit/external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack://reactOneKit/external_%22serialize-javascript%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack://reactOneKit/external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack://reactOneKit/external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack://reactOneKit/external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });
});