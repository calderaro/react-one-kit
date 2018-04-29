const bindActionCreators = require('redux').bindActionCreators
const connect = require('react-redux').connect

const createConnect = actions => Component => connect(state => state, dispatch => bindActionCreators(actions, dispatch))(Component)

module.exports = createConnect
