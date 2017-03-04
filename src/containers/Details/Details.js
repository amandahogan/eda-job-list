import { connect } from 'react-redux'

import { hideDetails } from '../../actions/details'
import Details from '../../components/Details'

export default connect(
  state => {
    const getTagById = (state, tagId) => {
      return state.tags.find(tag => tag.id === tagId)
    }
    const company = state.companies.find(company => {
      return company.id === state.details.companyId
    })
    return {
      categories: state.categories.map(category => {
        return Object.assign(
          {},
          category,
          {
            tags: company.tags
              .map(tagId => getTagById(state, tagId))
              .filter(tag => {
                return tag.categoryId === category.id
              })
          }
        )
      }),
      company,
      open: state.details !== null
    }
  },
  dispatch => {
    return {
      close: () => dispatch(hideDetails())
    }
  }
)(Details)
