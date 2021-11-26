import * as apiDevelopment from './development'
import * as apiProduction from './production'
import {error} from '../helpers/notistack'
import {logout} from '../store/auth/action'

export const doRequest = async (method, endpoint, postParams = null) => {
  const lang = localStorage.getItem('lang')

  let path = process.env.REACT_APP_API + endpoint
  let headers = {
    'Content-Type': 'application/json'
  }

  if (method === 'POST' || method === 'PUT') {
    postParams = JSON.stringify(postParams)
  }

  const token = localStorage.getItem('token')
  if (token) {
    headers.Authorization = token
  }

  let newUrl = new URL(path)
  let params = new URLSearchParams(newUrl.search)
  params.set('hl', lang)

  const url = newUrl.origin + newUrl.pathname + '?' + params.toString()

  const response = await fetch(url, {
    method: method,
    mode: 'cors',
    credentials: 'same-origin',
    headers: headers,
    body: postParams
  })

  const json = await response.json()

  if (json.code === 401) { // Expired token
    logout()
  }
  else if (json.code === 500 || json.code === 0) {
    error(json.errorMessage)
  }

  return json
}

export const doCustomDomainRequest = async url => {
  const response = await fetch(url, {
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
  })

  return await response.json()
}

export const doFakeRequest = (json, delay) => {
  return new Promise(resolve =>
    setTimeout(() => resolve(json), delay)
  )
}

export default process.env.REACT_APP_MODE === 'development' ? apiDevelopment : apiProduction