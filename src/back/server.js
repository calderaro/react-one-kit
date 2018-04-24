import http from 'http'
import express from 'express'
import compress from 'compression'
import helmet from 'helmet'
import chalk from 'chalk'

const log = console.log

export default function makeServer (props) {
  const html = require(props.html).default
  const app = express()
  const server = http.createServer(app)
  const template = html(props.metas)

  app
    .use(helmet())
    .use(compress())
    .use('/static', express.static(props.statics))

  if (props.NODE_ENV === 'production') {
    const rootReducer = require(props.rootReducer).default
    const routes = require(props.routes).default
    const render = require(props.render).default(routes, rootReducer, template, props.i18n)

    app
      .use('/build', express.static(props.build))
      .get('*', (req, res) => render(req, res).then(root => res.send(root)))

    process.on('SIGINT', () => server.close(err => process.exit(err ? 1 : 0)))
  } else {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackConfig = require(props.webpackConfig)
    const compiler = webpack(webpackConfig)

    app
      .use(webpackDevMiddleware(compiler, {publicPath: webpackConfig.output.publicPath}))
      .use(webpackHotMiddleware(compiler))
      .get('*', (req, res) => res.status(200).send(template({})))
  }

  server.listen(props.PORT, () =>
      log(chalk.green(`Listening at port ${props.PORT} in ${props.NODE_ENV} mode targeting ${props.TARGET}`)))

  process.on('uncaughtException', err =>
    err.code === 'EADDRINUSE' ? log(chalk.red(`Port ${props.PORT} in use`)) : log(chalk.red(err.code)))
}
