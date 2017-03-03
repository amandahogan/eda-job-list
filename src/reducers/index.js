import { combineReducers } from 'redux'

import columns from './columns'
import companies from './companies'
import details from './details'
import users from './users'

export default combineReducers({
  columns,
  companies,
  details,
  users
})
