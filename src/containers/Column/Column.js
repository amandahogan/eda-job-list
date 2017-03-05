import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'

import { removeColumn } from '../../actions/columns'
import { showDetails } from '../../actions/details'
import Company from '../../components/Company'
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'
import { getCompanies } from '../../selectors/companies'
import Actions from './Actions'
import './Column.css'

class Column extends Component {
  render () {
    const actions = [
      {
        onClick: this.props.closeThisColumn,
        text: 'Close Column'
      }
    ]
    return (
      <Container>
        <Actions actions={actions} />
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

Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
}

export default connect(
  state => {
    return {
      companies: getCompanies(state)
    }
  },
  (dispatch, ownProps) => {
    return {
      closeThisColumn: () => {
        dispatch(removeColumn(ownProps.column.id))
      },
      showDetails: companyId => {
        dispatch(showDetails(companyId))
      }
    }
  }
)(Column)
