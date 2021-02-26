import { ADD_NEW_REVIEW, SET_REVIEWS, DELETE_REVIEW, UPDATE_REVIEW } from '../actions/reviews'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return action.reviews
      case ADD_NEW_REVIEW:
      return [...state, {id: action.id, title: action.title, pros: action.pros,cons: action.cons, rating: action.rating, start_of_tenancy: action.start_of_tenancy, end_of_tenancy: action.end_of_tenancy, property_ID: action.propsId}]
    case DELETE_REVIEW:
      return state.filter(review => review.id !== action.id)
    case UPDATE_REVIEW:
      return state.map(review => review.id === action.id)
    default:
      return state
  }
}

export default reducer
