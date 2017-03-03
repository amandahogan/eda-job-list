import { combineReducers } from 'redux'

import auth from './auth'
import categories from './categories'
import columns from './columns'
import companies from './companies'
import details from './details'
import users from './users'

export default combineReducers({
  auth,
  categories,
  columns,
  companies,
  details,
  users
})
