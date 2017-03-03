import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'

import { showDetails } from '../../actions/details'
import Company from '../../components/Company'
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'
import './Column.css'

class Column extends Component {
  render () {
    return (
      <Container>
        <Filter />
        <Grid.Column className='Column' computer={7} mobile={16} tablet={16}>
          <Sort />
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
      </Container>
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
