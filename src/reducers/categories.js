const initialState = [
  {
    id: 1,
    name: 'Languages'
  },
  {
    id: 2,
    name: 'Locations'
  },
  {
    id: 3,
    name: 'Technologies'
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    default:
      return state
  }
}
