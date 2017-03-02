import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Grid, Icon, Menu } from 'semantic-ui-react'

import { addColumn, removeColumn } from '../../actions/columns'
import Column from '../Column'
import Details from '../../components/Details'
import './Board.css'

class Board extends Component {
  render () {
    return (
      <Grid className='Board'>
        <Menu fluid>
          <Button circular onClick={this.props.addColumn}>
            <Button.Content>
              <Icon name='add' />
            </Button.Content>
          </Button>
        </Menu>
        <Grid.Row>
          {this.props.columns.map((column, index) => {
            return <Column column={column} key={index} />
          })}
        </Grid.Row>
        <Details />
      </Grid>
    )
  }
}

export default connect(
  state => {
    return {
      columns: state.columns
    }
  },
  dispatch => {
    return {
      addColumn: () => dispatch(addColumn()),
      removeColumn: id => dispatch(removeColumn(id))
    }
  }
)(Board)
