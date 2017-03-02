import { combineReducers } from 'redux'

import columns from './columns'
import companies from './companies'
import users from './users'

export default combineReducers({
  columns,
  companies,
  users
})
