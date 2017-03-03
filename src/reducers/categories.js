const initialState = [
  {
    colour: 'violet',
    id: 1,
    name: 'Languages'
  },
  {
    colour: 'green',
    id: 2,
    name: 'Locations'
  },
  {
    colour: 'blue',
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
