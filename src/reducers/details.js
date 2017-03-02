const inintalState = {
  companyId: null
}

export default (state = inintalState, {payload, type}) => {
  switch (type) {
    case 'SHOW_DETAILS':
      return {
        companyId: payload
      }
    case 'HIDE_DETIALS':
      return {
        companyId: null
      }
  }
}
