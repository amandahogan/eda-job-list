const initialState = [
  {
    description: '',
    id: 0,
    name: 'Flare'
  },
  {
    desciption: '',
    id: 1,
    name: 'Link'
  },
  {
    desciption: '',
    id: 2,
    name: 'Xceed'
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    default:
      return state
  }
}
