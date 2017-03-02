const initialState = [
  {
    id: 0,
    name: 'Amanda'
  },
  {
    id: 1,
    name: 'Anna'
  },
  {
    id: 2,
    name: 'David'
  },
  {
    id: 3,
    name: 'Quinn'
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    default:
      return state
  }
}
