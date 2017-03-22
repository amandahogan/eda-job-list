const initialState = [
  {
    description:
      'At Flare, we are building the first integrated emergency response system for  Africa. Our app connects patients and hospitals with ambulances in areas where there is no available 911. It is a digital response platform, including both infrastructure and consumer-facing products like mobile and browser-based apps. Flare is based in Nairobi, Kenya. We are scaling up our presence in Nairobi and to other major cities in Kenya. Next up, we’ll be moving into several other major cities across Africa like Johannesburg, Lagos, and Accra.',
    followers: [0, 2],
    id: 0,
    name: 'Flare',
    tags: [0, 2, 5],
    dateCreated: 1389819711753,
    lastUpdated: 1489819711753
  },
  {
    description:
      'LINK is recognized as Australia’s premiere property sales and marketing agency, specializing in new off-the-plan residential projects. Founded in 2007 and with operations in Sydney and Brisbane, LINK has achieved over $1.23bn in sales in the Sydney region alone. LINK has built an innovative industry-leading platform that services our partners, clients, and staff. We pride ourselves on innovation and have invested heavily in integration between these systems.',
    followers: [3],
    id: 1,
    name: 'Link',
    tags: [0],
    dateCreated: 1389819711752,
    lastUpdated: 1489819711754
  },
  {
    description:
      'At Jobbatical, we think beyond borders and help the world work together. We believe the world really is your oyster and your next career step could be combined with your travel aspirations. We believe that the traditional 9-to-5 work model is fading away and that people want to join mission-driven teams, wherever they are in the world. We want to encourage individuals and employers to be honest about their commitments to each other. It\'s our goal to encourage companies to set aside cultural biases and hire the people with the best skill set for the job. We follow the same principles in recruiting for our own team—we don\'t discriminate based on nationality, gender, ethnicity, religion, sexual orientation, or anything else that doesn\'t have anything to do with the role you\'ll be filling.',
    followers: [2],
    id: 2,
    name: 'Jobbatical',
    tags: [0],
    dateCreated: 1389819711751,
    lastUpdated: 1489819711755
  },
  {
    description:
      'Lightbox is a New Zealand streaming TV service that offers you an incredible choice of TV shows to watch ad-free. For $12.99 per 30 days, you’ll have unlimited access to brand new, globally trending shows, cult classics, New Zealand favourites, and a huge range of kids’ shows.',
    followers: [1],
    id: 3,
    name: 'Lightbox',
    tags: [0, 3, 4],
    dateCreated: 1389819711750,
    lastUpdated: 1489819711756
  },
  {
    description:
      'In 2014, 8 Wire Digital came to fruition as a result of years of tech, web, and ecommerce experience coming together. Started by a couple of kiwis slugging it out at one of the world’s leading Magento Agencies in Australia, they decided to bring their talents back home to NZ. As it stands now, we’re an expert team based in Auckland, and we\'re backed with that experience of producing enterprise-level ecommerce solutions for some of Australasia\'s largest retailers. We’re passionate about our work, being at the cutting edge of technology, and delivering high performance ecommerce solutions. We\'ve even got individuals running their own online retailers, so we know what it\'s like on both sides of the fence. As a certified Magento developer, a Shopify partner, and a Woocommerce specialist, we\'ve got the right blend of skills, knowledge, and experience that allows us to deliver exactly what our clients need.',
    followers: [0, 1, 2, 3],
    id: 4,
    name: '8 Wire Digital',
    tags: [1, 3],
    dateCreated: 1389819711749,
    lastUpdated: 1489819711757
  },
  {
    description: 'Vend is New Zealand’s leading retail POS software, inventory management, ecommerce & customer loyalty for iPad, Mac and PC. Easily manage & grow your business in the cloud.',
    followers: [0],
    id: 5,
    name: 'Vend',
    tags: [1, 3, 5],
    dateCreated: 1389819711748,
    lastUpdated: 1489819711758
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
