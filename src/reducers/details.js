const initialState = null

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'HIDE_DETAILS':
      return null

    case 'SHOW_DETAILS':
      return {
        companyId: payload
      }

    default:
      return state
  }
}
