import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import './Column.css'
import Company from '../Company'

class Column extends Component {
  render () {
    return (
      <Grid.Column className='Column' width={8}>
        <Company />
      </Grid.Column>
    )
  }
}

export default Column
