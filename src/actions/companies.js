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
    if (!hasTag(getState(), categoryId, value)) {
      dispatch(addTag(categoryId, value))
    }
    const tagId = getTagId(getState(), categoryId, value)
    dispatch({
      payload: {
        companyId,
        tagId
      },
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
