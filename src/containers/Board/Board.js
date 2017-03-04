import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Grid, Icon, Menu } from 'semantic-ui-react'

import { addColumn, removeColumn } from '../../actions/columns'
import Details from '../Details'
import Column from '../Column'

import './Board.css'

class Board extends Component {
  render () {
    return (
      <Grid className='Board'>
        <Menu fluid>
          <Button basic onClick={this.props.addColumn}>
            <Icon.Group size='large'>
              <Icon name='columns' />
              <Icon corner color='green' name='add' />
            </Icon.Group>
          </Button>
        </Menu>
        <Grid.Row>
          {this.props.columns.map((column, index) => {
            return <Column column={column} key={index} />
          })}
        </Grid.Row>
        {this.props.isDetailsOpen ? <Details /> : null}
      </Grid>
    )
  }
}

export default connect(
  state => {
    return {
      columns: state.columns,
      isDetailsOpen: state.details !== null
    }
  },
  dispatch => {
    return {
      addColumn: () => dispatch(addColumn()),
      removeColumn: id => dispatch(removeColumn(id))
    }
  }
)(Board)
