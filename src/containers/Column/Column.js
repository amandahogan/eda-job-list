import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'

import { changeSortBy, removeColumn } from '../../actions/columns'
import { showDetails } from '../../actions/details'
import Company from '../../components/Company'
import Sort from '../../components/Sort'
import { getCategories } from '../../selectors/categories'
import { getCompanies } from '../../selectors/companies'
import { getTags } from '../../selectors/tags'
import Filter from '../Filter'
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
        <Filter categories={this.props.categories} tags={this.props.tags} column={this.props.column} />
        <Grid.Column className='Column' computer={7} mobile={16} tablet={16}>
          <Sort changeSortBy={this.props.changeSortBy} />
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
  (state, ownProps) => {
    let compareFunction = null
    switch (ownProps.column.sortBy) {
      case 'Name':
        compareFunction = this.props.companies
        .map(company => {company.name})
        .sort()
        break;
      default: throw new Error('Invalid sortBy:'+ ownProps.column.sortBy)
    }
    return {
      companies: getCompanies(state)
        .filter(company => {
          if (ownProps.column.include.length === 0) {
            return true
          }
          return ownProps.column.include.every(tagId => company.tags.some(tag => tag.id === tagId))
        })
        .filter(company => {
          if (ownProps.column.exclude === 0) {
            return true
          }
          return ownProps.column.exclude.every(tagId => company.tags.every(tag => tag.id !== tagId))
        })
        .sort(compareFunction),
      categories: getCategories(state),
      tags: getTags(state)
    }
  },
  (dispatch, ownProps) => {
    return {
      closeThisColumn: () => {
        dispatch(removeColumn(ownProps.column.id))
      },
      changeSortBy: sortBy => {
        dispatch(changeSortBy(ownProps.column.id, sortBy))
      },
      showDetails: companyId => {
        dispatch(showDetails(companyId))
      }
    }
  }
)(Column)
