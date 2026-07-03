import type { USER_ROLES } from '@/constants'

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]

export type AuthUser = {
  id: string
  name: string
  email: string
  role: UserRole
  avatarUrl?: string
}
