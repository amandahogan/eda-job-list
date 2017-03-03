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

export const removeCompany = id => {
  return {
    payload: id,
    type: 'REMOVE_COMPANY'
  }
}
