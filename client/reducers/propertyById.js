import { SET_PROPERTY_BY_PROP_ID, SET_PROPERTIES_EMPTY } from '../actions/index'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROPERTY_BY_PROP_ID:
      return action.property
    case SET_PROPERTIES_EMPTY:
      return action.property
    default:
      return state
  }
}

export default reducer