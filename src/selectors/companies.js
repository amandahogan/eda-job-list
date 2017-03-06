import { getTagById } from './tags'

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
    {tags: matching.tags.map(tagId => getTagById(state, tagId))}
  )
}
