import { combineReducers } from 'redux'

import auth from './auth'
import columns from './columns'
import companies from './companies'
import details from './details'
import users from './users'

export default combineReducers({
  auth,
  columns,
  companies,
  details,
  users
})
