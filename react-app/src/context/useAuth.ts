import { createContext, useContext } from 'react'

export interface AuthUser {
  name: string
  email: string
  avatar?: string
  avatarUrl?: string
}

export interface AuthContextValue {
  user: AuthUser | null
  signIn: (email: string, name?: string) => void
  register: (name: string, email: string) => void
  signOut: () => void
  updateProfile: (patch: Partial<AuthUser>) => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
