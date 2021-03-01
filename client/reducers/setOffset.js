import { OFFSET_ID_LIMIT } from '../actions/reviews'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFSET_ID_LIMIT:
      return action.offLimId
    default:
      return state
  }
}

export default reducer
