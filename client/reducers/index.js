import { combineReducers } from 'redux'
import auth from './auth'


import properties from './properties'
import reviews from './reviews'

export default combineReducers({
  properties,
  auth,
  reviews

})
