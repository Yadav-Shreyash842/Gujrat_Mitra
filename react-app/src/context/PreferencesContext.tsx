import { useEffect, useState, type ReactNode } from 'react'
import {
  loadTheme,
  saveTheme,
  loadFontScale,
  saveFontScale,
  loadLanguage,
  saveLanguage,
  type Theme,
  type FontScale,
  type Language,
} from '../utils/storage'
import { translate } from '../utils/translations'
import { PreferencesContext } from './usePreferences'

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => loadTheme())
  const [fontScale, setFontScaleState] = useState<FontScale>(() => loadFontScale())
  const [language, setLanguageState] = useState<Language>(() => loadLanguage())

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-font-scale', String(fontScale))
  }, [fontScale])

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    saveTheme(next)
  }

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
  }

  const setFontScale = (next: FontScale) => {
    setFontScaleState(next)
    saveFontScale(next)
  }

  const setLanguage = (next: Language) => {
    setLanguageState(next)
    saveLanguage(next)
  }

  const t = (key: string) => translate(language, key)

  return (
    <PreferencesContext.Provider
      value={{ theme, setTheme, toggleTheme, fontScale, setFontScale, language, setLanguage, t }}
    >
      {children}
    </PreferencesContext.Provider>
  )
}