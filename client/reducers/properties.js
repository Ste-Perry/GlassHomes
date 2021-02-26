import { SET_PROPERTIES, ADD_PROPERTIES, DELETE_PROPERTIES, UPDATE_PROPERTIES } from '../actions'


const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROPERTIES:
      return action.properties
    case ADD_PROPERTIES:
      return [...state, {id: action.id, address: action.address, suburb: action.suburb,bedrooms: action.bedrooms, bathrooms: action.bathrooms, parking: action.parking}]
    case DELETE_PROPERTIES:
      return state.filter(property => property.id !== action.id)
    case UPDATE_PROPERTIES:
      return state.map(property => property.id === action.id)
    default:
      return state
  }
}

export default reducer
