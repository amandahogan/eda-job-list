export const login = profile => {
  return {
    payload: profile,
    type: 'LOGIN'
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
