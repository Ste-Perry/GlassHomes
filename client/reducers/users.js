import { SET_USERS } from '../actions/users'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}

export default reducer
