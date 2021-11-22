import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import translationAZ from '../locales/az.json'
import translationTR from '../locales/tr.json'
import translationEN from '../locales/en.json'
import translationRU from '../locales/ru.json'

const fallbackLng = 'en'

if (localStorage.getItem('lang') === null)
  localStorage.setItem('lang', fallbackLng)

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: translationEN},
      tr: {translation: translationTR},
      ru: {translation: translationRU},
      az: {translation: translationAZ}
    },
    lng: localStorage.getItem('lang'),
    fallbackLng: fallbackLng,
    interpolation: {escapeValue: false}
  })

export default i18n