import {SIGN_IN, SIGN_OUT} from './type'

const initialState = {
  token: localStorage.getItem('token'),
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
      }
    case SIGN_OUT:
      return {
        ...state,
        token: null
      }
    default:
      return state
  }
}
