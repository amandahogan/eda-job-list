import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

import './App.css'
import Board from '../../containers/Board'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Menu>
          <Menu.Item name='home' onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='logout' onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
        <Board />
      </div>
    )
  }
}

export default App
