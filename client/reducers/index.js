import { combineReducers } from 'redux'
import auth from './auth'


import properties from './properties'
import reviews from './reviews'
import propertyById from './propertyById'
import reviewByProperty from './reviewByProperty'
export default combineReducers({
  properties,
  auth,
  reviews,
  reviewByProperty,
  propertyById
})
