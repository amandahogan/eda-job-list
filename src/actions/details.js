export const hideDetails = () => {
  return {
    type: 'HIDE_DETAILS'
  }
}

export const showDetails = companyId => {
  return {
    payload: companyId,
    type: 'SHOW_DETAILS'
  }
}
