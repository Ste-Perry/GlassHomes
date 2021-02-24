import { combineReducers } from 'redux'
import auth from './auth'


import properties from './properties'

export default combineReducers({
  properties,
  auth

})
