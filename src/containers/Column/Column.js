import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import { showDetails } from '../../actions/details'
import Company from '../../components/Company'
import './Column.css'

class Column extends Component {
  render () {
    return (
      <Grid.Column className='Column' computer={8} mobile={16} tablet={16}>
        {this.props.companies.map((company, index) => {
          return (
            <Company
              company={company}
              key={index}
              showDetails={() => {
                this.props.showDetails(company.id)
              }}
            />
          )
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
  },
  dispatch => {
    return {
      showDetails: companyId => {
        dispatch(showDetails(companyId))
      }
    }
  }
)(Column)
