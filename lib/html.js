!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("reactOneKit",[],e):"object"==typeof exports?exports.reactOneKit=e():t.reactOneKit=e()}(global,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.w={},n(n.s=25)}({2:function(t,e){t.exports=require("babel-runtime/core-js/json/stringify")},23:function(t,e){t.exports=require("serialize-javascript")},24:function(t,e){t.exports=require("babel-runtime/helpers/extends")},25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c(n(2)),r=c(n(24)),o=c(n(23));function c(t){return t&&t.__esModule?t:{default:t}}var a={title:"",ogtitle:"",description:"",ogdescription:"",keywords:[]},s={root:null,initialState:{},routerContext:{},splits:[]},p="/static/"+(process.env.TARGET||"development")+"/",l=p+"main.js",u="\n  <script type='application/javascript' src='"+p+"vendors.js'><\/script>\n";e.default=function(t){var e=(t.scripts||[]).reduce(function(t,e){return t+'<script src="'+e+'"><\/script>'},"");return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=(0,r.default)({},s,n),p=c.root,d=c.initialState,f=c.routerContext,m=c.splits,g=(0,r.default)({},a,t.defaultHead,n.head);return"\n      <html>\n        <head>\n          <link rel='shortcut icon' type='image/png' href='/static/img/logos/favicon.png'/>\n          <meta charSet='utf-8'/>\n          <meta httpEquiv='x-ua-compatible' content='ie=edge'/>\n          <meta name='viewport' content='width=device-width, initial-scale=1'/>\n          "+("\n      <title>"+(g.title||"")+"</title>\n      <meta name='description' content='"+(g.description||"")+"' />\n      <meta property='og:title' content='"+(g.ogtitle||"")+"' />\n      <meta property='og:description' content='"+(g.ogdescription||"")+"' />\n      <meta property='og:url' content='"+(g.ogurl||"")+"' />\n      <meta property='og:type' content='"+(g.ogtype||"website")+"' />\n      <meta property='og:image' content='"+(g.ogimage||"/static/img/opgimg.png")+"' />\n      <meta name='keywords' content='"+g.keywords+"'>\n      <link rel='canonical' href='"+g.canonicalLink+"' />\n    ")+"\n          "+(m.length?"<link rel='stylesheet' href='/static/production/"+m[0]+".css' />":"")+"\n          \n\n        </head>\n        <body>\n          <div id='root'>"+(p||"")+"</div>\n          <script type='text/javascript'>\n            window.initialState = "+(0,o.default)(d)+"\n            window.splitPoints = "+(f?(0,i.default)(f.splitPoints):null)+"\n            window.splits = "+(0,i.default)(m)+"\n          <\/script>\n          "+e+"\n          "+u+"\n          <script type='application/javascript' src='"+l+"'><\/script>\n        </body>\n      </html>\n    "}}}})});