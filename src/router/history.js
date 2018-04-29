const createBrowserHistory = require('history').createBrowserHistory

const createHistory = process.env.targetenv === 'browser' ? createBrowserHistory() : {}

module.exports = createHistory
