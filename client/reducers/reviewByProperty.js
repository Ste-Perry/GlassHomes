import { SET_REVIEWS_BY_PROP_ID } from '../actions/reviews'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS_BY_PROP_ID:
      return action.reviews
    default:
      return state
  }
}

export default reducer
