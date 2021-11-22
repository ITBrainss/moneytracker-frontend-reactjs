import {SET_LANGUAGE} from './type'
import i18next from '../../helpers/i18n'

const initialState = {
  language: null,
  languageOptions: [
    {value: 'az', text: i18next.t('language.az')},
    {value: 'ar', text: i18next.t('language.ar')},
    {value: 'ru', text: i18next.t('language.ru')},
    {value: 'tr', text: i18next.t('language.tr')}
  ]
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}
