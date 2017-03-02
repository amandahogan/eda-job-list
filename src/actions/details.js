export const showDetails = (companyId) => {
  return {
    payload: companyId,
    type: 'SHOW_DETAILS'
  }
}

export const hideDetails = (companyId) => {
  return {
    payload: companyId,
    type: 'HIDE_DETAILS'
  }
}
