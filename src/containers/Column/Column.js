import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import './Column.css'
import Company from '../../components/Company'

class Column extends Component {
  render () {
    return (
      <Grid.Column className='Column' width={8}>
        {this.props.companies.map((company, index) => {
          return <Company company={company} key={index} />
        })}
      </Grid.Column>
    )
  }
}

export default connect(
  state => {
    return {
      companies: state.companies
    }
  }
)(Column)
