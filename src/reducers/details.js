const initialState = null

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'HIDE_DETAILS':
      return initialState

    case 'SHOW_DETAILS':
      return {
        companyId: payload
      }

    default:
      return state
  }
}
