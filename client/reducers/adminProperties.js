import { SET_ADMIN_PROPERTIES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_PROPERTIES:
      return action.properties
    default:
      return state
  }
}

export default reducer