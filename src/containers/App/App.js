import { connect } from 'react-redux'

import { login, logout } from '../../actions/auth'
import App from '../../components/App'

export default connect(
  state => {
    return {
      profile: state.auth
    }
  },
  dispatch => {
    return {
      login: profile => dispatch(login(profile)),
      logout: () => dispatch(logout())
    }
  }
)(App)
