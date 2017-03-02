import React, { Component } from 'react'

import './App.css'
import Board from '../../containers/Board'
import Navbar from '../../containers/Navbar'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Board />
      </div>
    )
  }
}

export default App
