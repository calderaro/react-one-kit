const path = require('path')
console.log(path.join(__dirname, '../../node_modules'));
const options = require('./babel.node.config')
require('babel-register')(options)
