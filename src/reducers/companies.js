const initialState = [
  {
    description: '',
    id: 0,
    name: 'Flare',
    tags: [0, 2, 5]
  },
  {
    desciption: '',
    id: 1,
    name: 'Link',
    tags: [0]
  },
  {
    desciption: '',
    id: 2,
    name: 'Xceed',
    tags: [0]
  },
  {
    desciption: '',
    id: 3,
    name: 'Lightbox',
    tags: [0, 3, 4]
  },
  {
    description: '',
    id: 4,
    name: '8 Wire Digital',
    tags: [1, 3]
  },
  {
    description: '',
    id: 5,
    name: 'Vend',
    tags: [1, 3, 5]
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'ADD_COMPANY':
      return [...state, payload]

    case 'REMOVE_COMPANY':
      return state.filter(company => company.id !== payload)

    default:
      return state
  }
}
