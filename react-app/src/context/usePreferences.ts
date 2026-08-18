import { createContext, useContext } from 'react'
import type { Theme, FontScale, Language } from '../utils/storage'

export interface PreferencesContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  fontScale: FontScale
  setFontScale: (scale: FontScale) => void
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

export const PreferencesContext = createContext<PreferencesContextValue | null>(null)

export function usePreferences(): PreferencesContextValue {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider')
  return ctx
}