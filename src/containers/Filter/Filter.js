import { connect } from 'react-redux'

import { addExcludeTag, addIncludeTag, removeExcludeTag, removeIncludeTag } from '../../actions/columns'
import Filter from '../../components/Filter'
import { getTagById } from '../../selectors/tags'

export default connect(
  (state, ownProps) => {
    return {
      exclude: ownProps.column.exclude.map(tagId => getTagById(state, tagId)),
      include: ownProps.column.include.map(tagId => getTagById(state, tagId))
    }
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
