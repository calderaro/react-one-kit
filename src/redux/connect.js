import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const createConnect = actions => Component => connect(state => state, dispatch => bindActionCreators(actions, dispatch))(Component)

export default createConnect
