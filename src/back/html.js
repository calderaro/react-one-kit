import serialize from 'serialize-javascript'

const initialHead = {
  title: '',
  ogtitle: '',
  description: '',
  ogdescription: '',
  keywords: [],
}

const defaultProps = {
  root: null,
  initialState: {},
  routerContext: {},
  splits: []
}

const prefix = `/static/${process.env.TARGET || 'development'}/`
const main = prefix + 'main.js'

const productionHeaderDependencies = `
`
const productionDependencies = `
  <script type='application/javascript' src='${prefix}vendors.js'></script>
`

export default (initOpts) => {
  const scripts = (initOpts.scripts || []).reduce((a, b) => a + `<script src="${b}"></script>`, '')
  return (props = {}) => {
    const {root, initialState, routerContext, splits} = {...defaultProps, ...props}
    const head = {...initialHead, ...initOpts.defaultHead, ...props.head}
    const metas = `
      <title>${head.title || ''}</title>
      <meta name='description' content='${head.description || ''}' />
      <meta property='og:title' content='${head.ogtitle || ''}' />
      <meta property='og:description' content='${head.ogdescription || ''}' />
      <meta property='og:url' content='${head.ogurl || ''}' />
      <meta property='og:type' content='${head.ogtype || 'website'}' />
      <meta property='og:image' content='${head.ogimage || '/static/img/opgimg.png'}' />
      <meta name='keywords' content='${head.keywords}'>
      <link rel='canonical' href='${head.canonicalLink}' />
    `

    return `
      <html>
        <head>
          <link rel='shortcut icon' type='image/png' href='/static/img/logos/favicon.png'/>
          <meta charSet='utf-8'/>
          <meta httpEquiv='x-ua-compatible' content='ie=edge'/>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          ${metas}
          ${splits.length ? `<link rel='stylesheet' href='/static/production/${splits[0]}.css' />` : ''}
          ${process.env.NODE_ENV === 'production' ? productionHeaderDependencies : ''}
        </head>
        <body>
          <div id='root'>${root || ''}</div>
          <script type='text/javascript'>
            window.initialState = ${serialize(initialState)}
            window.splitPoints = ${routerContext ? JSON.stringify(routerContext.splitPoints) : null}
            window.splits = ${JSON.stringify(splits)}
          </script>
          ${scripts}
          ${process.env.NODE_ENV === 'production' ? productionDependencies : ''}
          <script type='application/javascript' src='${main}'></script>
        </body>
      </html>
    `
  }
}
