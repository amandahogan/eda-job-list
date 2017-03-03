export const showDetails = companyId => {
  return {
    payload: companyId,
    type: 'SHOW_DETAILS'
  }
}
