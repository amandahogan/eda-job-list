import { combineReducers } from 'redux'

import categories from './categories'
import columns from './columns'
import companies from './companies'
import users from './users'

export default combineReducers({
  categories,
  columns,
  companies,
  users
})
