import { useCallback, useState, type ReactNode } from 'react'
import { AuthContext, type AuthUser } from './useAuth'

const STORAGE_KEY = 'demoAuthUser'

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<AuthUser>
    if (!parsed || typeof parsed.email !== 'string' || parsed.email.trim() === '') return null
    return {
      name: typeof parsed.name === 'string' ? parsed.name : '',
      email: parsed.email,
      avatar: typeof parsed.avatar === 'string' ? parsed.avatar : undefined,
      avatarUrl: typeof parsed.avatarUrl === 'string' ? parsed.avatarUrl : undefined,
    }
  } catch {
    return null
  }
}

function writeStoredUser(user: AuthUser | null) {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore storage errors
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser())

  const signIn = useCallback((email: string, name = '') => {
    const existing = readStoredUser()
    const next: AuthUser = {
      name: name || existing?.name || '',
      email,
      avatar: existing?.avatar,
      avatarUrl: existing?.avatarUrl,
    }
    setUser(next)
    writeStoredUser(next)
  }, [])

  const register = useCallback((name: string, email: string) => {
    const next: AuthUser = { name, email }
    setUser(next)
    writeStoredUser(next)
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    writeStoredUser(null)
  }, [])

  const updateProfile = useCallback((patch: Partial<AuthUser>) => {
    setUser((prev) => {
      if (!prev) return prev
      const next = { ...prev, ...patch }
      writeStoredUser(next)
      return next
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, register, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}
