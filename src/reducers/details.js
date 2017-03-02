const initialState = {
  companyId: null
}

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'SHOW_DETAILS':
      return {
        companyId: payload
      }
    case 'HIDE_DETAILS':
      return {
        companyId: null
      }
  }
}
