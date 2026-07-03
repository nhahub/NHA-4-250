import { createContext, useContext } from 'react'
import type { AuthUser, UserRole } from '@/types'

type LoginInput = {
  email: string
  password: string
  role: UserRole
}

type RegisterInput = {
  email: string
  name: string
  password: string
}

export type AuthContextValue = {
  isAuthenticated: boolean
  login: (input: LoginInput) => Promise<AuthUser>
  logout: () => void
  register: (input: RegisterInput) => Promise<AuthUser>
  resetPassword: (email: string) => Promise<void>
  roleHome: string | null
  user: AuthUser | null
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.')
  }

  return context
}
