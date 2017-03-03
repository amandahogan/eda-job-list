import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

import './Welcome.css'

class Welcome extends Component {
  render () {
    return (
      <div className='Welcome'>
        <Header as='h1'>Welcome</Header>
      </div>
    )
  }
}

export default Welcome
