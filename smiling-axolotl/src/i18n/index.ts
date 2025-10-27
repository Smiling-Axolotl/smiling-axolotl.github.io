import { createI18n } from 'vue-i18n'
import en from './en.json'
import es from './es.json'

const messages = {
  en,
  es
}

export type Locale = 'en' | 'es'

// Get saved language from localStorage or default to English
const savedLocale = (localStorage.getItem('locale') as Locale) || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  warnHtmlMessage: false,
  missingWarn: false,
  fallbackWarn: false,
  escapeParameter: false,
  silentTranslationWarn: true,
  silentFallbackWarn: true
})

// Export function to change language
export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}
