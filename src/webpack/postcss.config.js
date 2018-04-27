module.exports = {
  ident: 'postcss',
  plugins: (loader) => [
    require('autoprefixer')(),
    require('precss')(),
    require('postcss-nested')()
  ]
}
