let nextColumnId = 1

import { getTagId } from '../selectors/tags'

export const addColumn = () => {
  return {
    payload: nextColumnId++,
    type: 'ADD_COLUMN'
  }
}

export const addExcludeTag = (columnId, categoryId, value) => {
  return (dispatch, getState) => {
    const tagId = getTagId(getState(), categoryId, value)
    if (tagId !== null) {
      dispatch({
        payload: {
          columnId,
          tagId
        },
        type: 'ADD_EXCLUDE_TAG'
      })
    }
  }
}

export const addIncludeTag = (columnId, categoryId, value) => {
  return (dispatch, getState) => {
    const tagId = getTagId(getState(), categoryId, value)
    if (tagId !== null) {
      dispatch({
        payload: {
          columnId,
          tagId
        },
        type: 'ADD_INCLUDE_TAG'
      })
    }
  }
}

export const changeSortBy = (columnId, sortBy) => {
  return {
    payload: {
      columnId,
      sortBy
    },
    type: 'CHANGE_SORT_BY'
  }
}

export const removeColumn = id => {
  return {
    payload: id,
    type: 'REMOVE_COLUMN'
  }
}

export const removeExcludeTag = (columnId, tagId) => {
  return {
    payload: {
      columnId,
      tagId
    },
    type: 'REMOVE_EXCLUDE_TAG'
  }
}

export const removeIncludeTag = (columnId, tagId) => {
  return {
    payload: {
      columnId,
      tagId
    },
    type: 'REMOVE_INCLUDE_TAG'
  }
}
