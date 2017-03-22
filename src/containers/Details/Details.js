import { connect } from 'react-redux'

import { addCompanyTag } from '../../actions/companies'
import { hideDetails } from '../../actions/details'
import { getCompanyById } from '../../selectors/companies'
import Details from '../../components/Details'

export default connect(
  state => {
    const company = getCompanyById(state, state.details.companyId)
    return {
      categories: state.categories.map(category => {
        return Object.assign(
          {},
          category,
          {
            tags: company.tags
              .filter(tag => {
                return tag.category.id === category.id
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
      addTag: (companyId, categoryId, value) => {
        return dispatch(addCompanyTag(companyId, categoryId, value))
      },
      close: () => dispatch(hideDetails())
    }
  }
)(Details)
