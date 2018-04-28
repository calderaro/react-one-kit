const path = require('path')
const env = require('babel-preset-env')
const react = require('babel-preset-react')
const transformRuntime = require('babel-plugin-transform-runtime')
const dynamicImport = require('babel-plugin-dynamic-import-node').default
const objectRestSpread = require('babel-plugin-transform-object-rest-spread')
const classProperties = require('babel-plugin-transform-class-properties')

module.exports = {
  "presets": [env, react],
  "plugins": [
      transformRuntime,
      dynamicImport,
      objectRestSpread,
      classProperties
    ]
}
