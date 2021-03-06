const env = require('babel-preset-env')
const react = require('babel-preset-react')
const transformRuntime = require('babel-plugin-transform-runtime')
const dynamicImport = require('babel-plugin-syntax-dynamic-import')
const objectRestSpread = require('babel-plugin-transform-object-rest-spread')
const classProperties = require('babel-plugin-transform-class-properties')
const reactHotLoader = require('react-hot-loader/babel')


module.exports = {
  "presets": [env, react],
  "plugins": [
      transformRuntime,
      dynamicImport,
      objectRestSpread,
      classProperties,
      reactHotLoader.default ? reactHotLoader.default : reactHotLoader
    ]
}
