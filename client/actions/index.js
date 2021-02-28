import { getProperties, getPropertyById, addProperty, deleteProperty, updateProperty, addImageProp } from '../apis/properties'

export const SET_PROPERTIES = 'SET_PROPERTIES'
export const ADD_PROPERTIES = 'ADD_PROPERTIES'
export const DELETE_PROPERTIES = 'DELETE_PROPERTIES'
export const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES'
export const SET_PROPERTY_BY_PROP_ID = 'SET_PROPERTY_BY_PROP_ID'
export const SET_PROPERTIES_EMPTY = 'SET_PROPERTIES_EMPTY'

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

export function setPropertyById (property) {
  return {
    type: SET_PROPERTY_BY_PROP_ID,
    property
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

//testing addThePropsWithImage
export function addPropertiesWithImage(image, property) {
  return dispatch => {
    return addImageProp(image)
      .then(fileUrl => {
        property.image = fileUrl
        return addProperty(property)
          .then(propId => {
            dispatch(fetchProperties())
            return null
          })
      })
  }
}

export function addPropertiesWithDefaultImage(property) {
  return dispatch => {
        property.img = './images/default-monochrome.svg'
        return addProperty(property)
          .then(propId => {
            dispatch(fetchPropertyById(propId))
            // dispatch(fetchProperties())
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

export function updateTheProperties(id, property) {
  return dispatch => {
    return updateProperty(id, property)
    .then(() => {
      dispatch(fetchProperties())
      return null
    })
  }
}

export function clearPropById() {
  return {
    type: SET_PROPERTIES_EMPTY,
    property: {}
  }
}
