import { getTagById } from './tags'
import { getUserById } from './users'

export function getCompanies (state) {
  return state.companies.map(company => getCompanyById(state, company.id))
}

export function getCompanyById (state, companyId) {
  const matching = state.companies.find(company => {
    return company.id === companyId
  })
  if (matching === undefined) return null
  return Object.assign(
    {},
    matching,
    {
      followers: matching.followers.map(userId => getUserById(state, userId)),
      tags: matching.tags.map(tagId => getTagById(state, tagId))
    }
  )
}

export const getFollowers = (state, companyId) => {
  const company = getCompanyById(state, companyId)
  return company.followers.map(follower => getUserById(state, follower.id))
}
