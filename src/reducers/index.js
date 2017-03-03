import { combineReducers } from 'redux'

import auth from './auth'
import columns from './columns'
import companies from './companies'
import users from './users'

export default combineReducers({
  auth,
  columns,
  companies,
  users
})
