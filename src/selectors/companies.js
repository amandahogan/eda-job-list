import { getTagById } from './tags'

export const getCompanies = state => {
  return state.companies.map(company => getCompanyById(company.id))
}

export const getCompanyById = (state, companyId) => {
  const matching = state.companies.find(company => {
    return company.id === companyId
  })
  if (matching === undefined) return null
  return Object.assign(
    {},
    matching,
    {tags: matching.tags.map(getTagById)}
  )
}
