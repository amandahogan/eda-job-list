import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import './Board.css'
import Column from '../Column'
import Details from '../Details'

class Board extends Component {
  render () {
    return (
      <div className='Board'>
        <Grid>
          <Grid.Row>
            <Column />
          </Grid.Row>
        </Grid>
        <Details />
      </div>
    )
  }
}

export default Board
