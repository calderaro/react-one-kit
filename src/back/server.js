const http = require('http')
const express = require('express')
const compress = require('compression')
const helmet = require('helmet')
const chalk = require('chalk')
const html = require('./html')
const render = require('./render')

const log = console.log

module.exports = function makeServer (props) {
  const app = express()
  const server = http.createServer(app)
  const template = (props.html || html)(props.head)

  app
    .use(helmet())
    .use(compress())
    .use('/static', express.static(props.statics))

  if (props.NODE_ENV === 'production') {
    const rootReducer = props.rootReducer
    const routes = props.routes
    const renderer = render(routes, rootReducer, template, props.i18n)

    app
      .use('/build', express.static(props.build))
      .get('*', (req, res) => renderer(req, res).then(root => res.send(root)))

    process.on('SIGINT', () => server.close(err => process.exit(err ? 1 : 0)))
  } else {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const compiler = webpack(props.webpackDevConfig)

    app
      .use(webpackDevMiddleware(compiler, {publicPath: props.webpackDevConfig.output.publicPath}))
      .use(webpackHotMiddleware(compiler))
      .get('*', (req, res) => res.status(200).send(template({})))
  }

  server.listen(props.PORT, () =>
      log(chalk.green(`Listening at port ${props.PORT} in ${props.NODE_ENV} mode targeting ${props.TARGET}`)))

  process.on('uncaughtException', err =>
    err.code === 'EADDRINUSE' ? log(chalk.red(`Port ${props.PORT} in use`)) : log(chalk.red(err.code)))
}
