import {doFakeRequest} from './index'
import user from './fakeData/user.json'

export const authLogin = data => doFakeRequest(user, 500)
export const authForgot = () => doFakeRequest(500)
export const authReset = () => doFakeRequest(500)
export const authPasswordChange = () => doFakeRequest(500)