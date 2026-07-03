import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { authService } from '@/services'
import type { AuthUser } from '@/types'
import { AuthContext, type AuthContextValue } from './authContextValue'

const AUTH_STORAGE_KEY = 'smart-clinic-auth-user'

type AuthProviderProps = {
  children: ReactNode
}

function getStoredUser() {
  const storedUser = window.localStorage.getItem(AUTH_STORAGE_KEY)
  return storedUser ? (JSON.parse(storedUser) as AuthUser) : null
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(getStoredUser)

  const persistUser = useCallback((nextUser: AuthUser) => {
    setUser(nextUser)
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser))
  }, [])

  const login = useCallback(
    async (input: LoginInput) => {
      const nextUser = await authService.login(input)
      persistUser(nextUser)
      return nextUser
    },
    [persistUser],
  )

  const register = useCallback(
    async (input: RegisterInput) => {
      const nextUser = await authService.register(input)
      persistUser(nextUser)
      return nextUser
    },
    [persistUser],
  )

  const logout = useCallback(() => {
    setUser(null)
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
  }, [])

  const resetPassword = useCallback(async (email: string) => {
    await authService.forgotPassword(email)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(user),
      login,
      logout,
      register,
      resetPassword,
      roleHome: user ? authService.getRoleHome(user.role) : null,
      user,
    }),
    [login, logout, register, resetPassword, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
