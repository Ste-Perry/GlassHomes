import { SET_ADMIN_REVIEWS } from '../actions/reviews'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_REVIEWS:
      return action.reviews
    default:
      return state
  }
}

export default reducer