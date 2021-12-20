import {SIGN_IN, SIGN_OUT} from './type'

export const signIn = payload => {
  return {type: SIGN_IN, payload}
}

export const signOut = {type: SIGN_OUT}