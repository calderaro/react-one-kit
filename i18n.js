const i18n = require('i18n')
const reacti18next = require('react-i18next')

module.exports = {
  i18n,
  I18nextProvider: reacti18next.I18nextProvider,
  translate: I18nextProvider.translate
}
