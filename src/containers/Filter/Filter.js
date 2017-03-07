import { connect } from 'react-redux'

import { addExcludeTag, addIncludeTag, removeExcludeTag, removeIncludeTag } from '../../actions/columns'
import Filter from '../../components/Filter'

export default connect(
  state => {
    return {}
  },
  (dispatch, ownProps) => {
    const columnId = ownProps.column.id
    return {
      addExcludeTag: (categoryId, value) => dispatch(addExcludeTag(columnId, categoryId, value)),
      addIncludeTag: (categoryId, value) => dispatch(addIncludeTag(columnId, categoryId, value)),
      removeExcludeTag: tagId => dispatch(removeExcludeTag(columnId, tagId)),
      removeIncludeTag: tagId => dispatch(removeIncludeTag(columnId, tagId))
    }
  }
)(Filter)
