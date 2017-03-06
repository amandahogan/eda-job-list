const initialState = [
  {
    id: 0,
    categoryId: 1,
    value: 'Javascript',
    companies: [
      {companyId: 0},
      {companyId: 1},
      {companyId: 2},
      {companyId: 3}
    ]
  },
  {
    id: 1,
    categoryId: 1,
    value: 'PHP',
    companies: [
      {companyId: 4},
      {companyId: 5}
    ]
  },
  {
    id: 2,
    categoryId: 2,
    value: 'Nairobi',
    companies: [
      {companyId: 0}
    ]
  },
  {
    id: 3,
    categoryId: 2,
    value: 'Auckland',
    companies: [
      {companyId: 3},
      {companyId: 4},
      {companyId: 5}
    ]
  },
  {
    id: 4,
    categoryId: 3,
    value: 'ReactJS',
    companies: [
      {companyId: 3}
    ]
  },
  {
    id: 5,
    categoryId: 3,
    value: 'AngularJS',
    companies: [
      {companyId: 0},
      {companyId: 5}
    ]
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'ADD_COMPANY_TAG':
      return state.map(tag => {
        if (tag.id === payload.tagId) {
          return Object.assign(
            {},
            tag,
            {
              companies: [...tag.companies, payload.companyId]
            }
          )
        }
        return tag
      })

    case 'ADD_TAG':
      return [...state, payload]

    default:
      return state
  }
}
