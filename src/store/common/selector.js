export const commonState = state => state.common

export const getCurrentLanguage = (state, currentLang) => state.filter(el => el.value === currentLang)[0]
