import { getProperties, getPropertyById, addProperty, deleteProperty } from '../apis/properties'

export const SET_PROPERTIES = 'SET_PROPERTIES'
export const ADD_PROPERTIES = 'ADD_PROPERTIES'
export const DELETE_PROPERTIES = 'DELETE_PROPERTIES'

export function setProperties (properties) {
  return {
    type: SET_PROPERTIES,
    properties
  }
}

export function addProperties (properties) {
  return {
    type: ADD_PROPERTIES,
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

export function addTheProperties(properties) {
  return dispatch => {
    return addProperty(properties)
    .then(() => {
      dispatch(fetchProperties())
      return null
    })
  }
}

export function deleteTheProperties(id) {
  return dispatch => {
    return deleteProperty(id)
    .then(() => {
      dispatch(fetchProperties())
      return null
    })
  }
}

