import React, { PropTypes } from 'react'

import './App.css'
import Board from '../../containers/Board'
import Navbar from '../../components/Navbar'
import Welcome from '../../components/Welcome'

class App extends React.Component {
  render () {
    const { login, logout, profile } = this.props
    return (
      <div className='App'>
        <Navbar login={login} logout={logout} profile={profile} />
        {profile ? <Board /> : <Welcome />}
      </div>
    )
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object
}

export default App
