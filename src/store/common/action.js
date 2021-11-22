import i18next from '../../helpers/i18n'

export const setLanguage = payload => dispatch => {
  i18next.changeLanguage(payload)
  localStorage.setItem('lang', payload)
  dispatch(setLanguage(payload))
}