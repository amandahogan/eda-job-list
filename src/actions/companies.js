import { addTag } from './tags'
import { getTagId, hasTag } from '../selectors/tags'

let nextCompanyId = 3

export const addCompany = company => {
  return {
    payload: Object.assign(
      {},
      {id: nextCompanyId++}
    ),
    type: 'ADD_COMPANY'
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

export const removeCompany = id => {
  return {
    payload: id,
    type: 'REMOVE_COMPANY'
  }
}
