export const showDetails = (companyId) => {
  return {
    payload: companyId,
    type: 'SHOW_DETIALS'
  }
}

export const hideDetials = (companyId) => {
  return {
    payload: companyId,
    type: 'HIDE_DETIALS'
  }
}
