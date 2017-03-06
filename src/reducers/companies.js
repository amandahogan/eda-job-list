const initialState = [
  {
    description:
      'At Flare, we are building the first integrated emergency response system for  Africa. Our app connects patients and hospitals with ambulances in areas where there is no available 911. It is a digital response platform, including both infrastructure and consumer-facing products like mobile and browser-based apps. Flare is based in Nairobi, Kenya. We are scaling up our presence in Nairobi and to other major cities in Kenya. Next up, we’ll be moving into several other major cities across Africa like Johannesburg, Lagos, and Accra.',
    id: 0,
    name: 'Flare',
    tags: [0, 2, 5]
  },
  {
    description:
      'LINK is recognized as Australia’s premiere property sales and marketing agency, specializing in new off-the-plan residential projects. Founded in 2007 and with operations in Sydney and Brisbane, LINK has achieved over $1.23bn in sales in the Sydney region alone. LINK has built an innovative industry-leading platform that services our partners, clients, and staff. We pride ourselves on innovation and have invested heavily in integration between these systems.',
    id: 1,
    name: 'Link',
    tags: [0]
  },
  {
    description: '',
    id: 2,
    name: 'Jobbatical',
    tags: [0]
  },
  {
    description: '',
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

    case 'ADD_COMPANY_TAG':
      return state.map(company => {
        if (company.id === payload.companyId) {
          return Object.assign(
            {},
            company,
            {
              tags: [...company.tags, payload.tagId]
            }
          )
        }
        return company
      })

    case 'REMOVE_COMPANY':
      return state.filter(company => company.id !== payload)

    default:
      return state
  }
}
