import { ADD_ALBUM } from '../actions/albums'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_ALBUM:
      return [...state, action.payload]
    default:
        return state
}
}