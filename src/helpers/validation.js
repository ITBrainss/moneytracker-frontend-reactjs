import * as yup from 'yup'
import i18n from './i18n'

// const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const required = label => yup.string()
  .label(i18n.t(label)).required(`${i18n.t('validation.required')}`)

export const minLength = (label, quantity) => yup.string()
  .label(i18n.t(label) + ':')
  .min(quantity, i18n.t('validation.minimumLength')
    .slice(0, 7) + quantity + i18n.t('validation.minimumLength')
    .slice(8, i18n.t('validation.minimumLength').length))

export const validEmail = () => yup.string()
  .label(i18n.t('auth.email')).email(`${i18n.t('validation.wrongEmailFormat')}`).required(`${i18n.t('validation.required')}`)

export const mustMatch = (label, matchWith) => yup.string()
  .label(i18n.t(label) + ':').oneOf([yup.ref(matchWith), null], i18n.t('validation.passwordsMustMatch')).required(`${i18n.t('validation.required')}`)

export const getError = (name, error) => {
  if (error?.filter(el => el.path === name).length > 0) return 'error'
  else return null
}

export const getValidationError = (errors, name) => {
  if (errors.filter(el => el.path === name).length > 0) return 'error'
  else return null
}