export interface Comment {
  id: string
  text: string
  createdAt: number
  author: string
}

export const STORAGE_KEYS = {
  saved: 'gujaratmitra_saved_articles',
  comments: 'gujaratmitra_comments',
  savedVideos: 'gujaratmitra_saved_videos',
  commentsVideos: 'gujaratmitra_comments_videos',
  theme: 'gujaratmitra_theme',
  fontScale: 'gujaratmitra_font_scale',
  language: 'gujaratmitra_language',
} as const

export type Theme = 'light' | 'dark'
export type FontScale = 80 | 90 | 100 | 110 | 120 | 130
export type Language = 'gu' | 'en' | 'hi' | 'mr'

export const FONT_SCALES: FontScale[] = [80, 90, 100, 110, 120, 130]
export const DEFAULT_THEME: Theme = 'light'
export const DEFAULT_FONT_SCALE: FontScale = 100
export const DEFAULT_LANGUAGE: Language = 'gu'

function readString(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function loadTheme(): Theme {
  const raw = readString(STORAGE_KEYS.theme)
  return raw === 'dark' ? 'dark' : 'light'
}

export function saveTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(STORAGE_KEYS.theme, theme)
  } catch {
    // ignore
  }
}

export function loadFontScale(): FontScale {
  const raw = readString(STORAGE_KEYS.fontScale)
  const n = raw === null ? NaN : Number(raw)
  return (FONT_SCALES as number[]).includes(n) ? (n as FontScale) : DEFAULT_FONT_SCALE
}

export function saveFontScale(scale: FontScale): void {
  try {
    window.localStorage.setItem(STORAGE_KEYS.fontScale, String(scale))
  } catch {
    // ignore
  }
}

export function loadLanguage(): Language {
  const raw = readString(STORAGE_KEYS.language)
  return raw === 'en' || raw === 'hi' || raw === 'mr' ? raw : 'gu'
}

export function saveLanguage(language: Language): void {
  try {
    window.localStorage.setItem(STORAGE_KEYS.language, language)
  } catch {
    // ignore
  }
}

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function writeJSON(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage unavailable or quota exceeded — ignore
  }
}

export function loadSavedSlugs(): string[] {
  const value = readJSON<string[]>(STORAGE_KEYS.saved, [])
  return Array.isArray(value) ? value.filter((s) => typeof s === 'string') : []
}

export function saveSlug(slug: string, saved: boolean): void {
  const slugs = loadSavedSlugs()
  const next = saved ? Array.from(new Set([...slugs, slug])) : slugs.filter((s) => s !== slug)
  writeJSON(STORAGE_KEYS.saved, next)
}

export function loadSavedVideoSlugs(): string[] {
  const value = readJSON<string[]>(STORAGE_KEYS.savedVideos, [])
  return Array.isArray(value) ? value.filter((s) => typeof s === 'string') : []
}

export function saveVideoSlug(slug: string, saved: boolean): void {
  const slugs = loadSavedVideoSlugs()
  const next = saved ? Array.from(new Set([...slugs, slug])) : slugs.filter((s) => s !== slug)
  writeJSON(STORAGE_KEYS.savedVideos, next)
}

export function loadVideoComments(slug: string): Comment[] {
  const value = readJSON<Record<string, unknown>>(STORAGE_KEYS.commentsVideos, {})
  const list = value?.[slug]
  if (!Array.isArray(list)) return []
  return list.filter(
    (c): c is Comment =>
      typeof c === 'object' &&
      c !== null &&
      typeof (c as Comment).id === 'string' &&
      typeof (c as Comment).text === 'string' &&
      typeof (c as Comment).createdAt === 'number' &&
      typeof (c as Comment).author === 'string',
  )
}

export function saveVideoComments(slug: string, comments: Comment[]): void {
  const value = readJSON<Record<string, unknown>>(STORAGE_KEYS.commentsVideos, {})
  value[slug] = comments
  writeJSON(STORAGE_KEYS.commentsVideos, value)
}

export function loadComments(slug: string): Comment[] {
  const value = readJSON<Record<string, unknown>>(STORAGE_KEYS.comments, {})
  const list = value?.[slug]
  if (!Array.isArray(list)) return []
  return list.filter(
    (c): c is Comment =>
      typeof c === 'object' &&
      c !== null &&
      typeof (c as Comment).id === 'string' &&
      typeof (c as Comment).text === 'string' &&
      typeof (c as Comment).createdAt === 'number' &&
      typeof (c as Comment).author === 'string',
  )
}

export function saveComments(slug: string, comments: Comment[]): void {
  const value = readJSON<Record<string, unknown>>(STORAGE_KEYS.comments, {})
  value[slug] = comments
  writeJSON(STORAGE_KEYS.comments, value)
}