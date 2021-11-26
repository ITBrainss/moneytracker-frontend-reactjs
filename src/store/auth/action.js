import {signIn, signOut} from './actionCreator'
import history from '../../helpers/history'
import {error, success} from '../../helpers/notistack'
import i18next from 'i18next'
import * as api from '../../api/development'

export const login = data => dispatch => {
  return api.authLogin(data)
    .then(r => {
      if (r.code === 200) {
        localStorage.setItem('token', r.body)
        dispatch(signIn({token: r.body}))
        history.push('/')
      }
      else return error(r.message)
    })
}

export const logout = () => dispatch => {
  localStorage.removeItem('token')
  dispatch(signOut)
  history.push('/login')
}

export const forgot = data => () => {
  return api.authForgot(data)
}

export const changePassword = data => {
  api.authPasswordChange(data)
    .then(r => {
      if (r.code === 200) success(i18next.t('successDone'))
    })
}

export const reset = data => () => {
  return api.authReset(data)
}
