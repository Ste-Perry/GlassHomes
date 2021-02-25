
import { getProperties, getPropertyById } from '../apis/properties'

export const SET_PROPERTIES = 'SET_PROPERTIES'

export function setProperties (properties) {
  return {
    type: SET_PROPERTIES,
    properties
  }
}

export function fetchProperties () {
  return dispatch => {
    return getProperties()
      .then(properties => {
        dispatch(setProperties(properties))
        return null
      })
  }
}

export function fetchPropertyById(id) {
  return dispatch => {
    return getPropertyById (id) 
      .then(property => {
        dispatch(setPropertyById(property))
        return null
      })
  }
}

