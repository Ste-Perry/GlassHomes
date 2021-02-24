import { getProperties } from '../apis/properties'

export const SET_FRUITS = 'SET_FRUITS'

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
