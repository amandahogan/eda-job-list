import { addTag } from './tags'
import { getTagId, hasTag } from '../selectors/tags'

let nextColumnId = 3

export const addColumn = () => {
  return {
    payload: nextColumnId++,
    type: 'ADD_COMPANIES'
  }
}

export const addCompanyTag = (companyId, categoryId, value) => {
  return (dispatch, getState) => {
    const state = getState()
    if (!hasTag(state, categoryId, value)) {
      dispatch(addTag(categoryId, value))
    }
    const tagId = getTagId(categoryId, value)
    dispatch({
      companyId,
      tagId,
      type: 'ADD_COMPANY_TAG'
    })
  }
}

export const removeColumn = id => {
  return {
    payload: id,
    type: 'REMOVE_COMPANIES'
  }
}
