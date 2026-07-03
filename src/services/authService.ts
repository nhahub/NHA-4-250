import { USER_ROLES } from '@/constants'
import type { AuthUser, UserRole } from '@/types'

type LoginPayload = {
  email: string
  role: UserRole
}

type RegisterPayload = {
  email: string
  name: string
}

const roleHome: Record<UserRole, string> = {
  [USER_ROLES.patient]: '/patient/dashboard',
  [USER_ROLES.doctor]: '/doctor/dashboard',
  [USER_ROLES.admin]: '/admin/dashboard',
}

function getNameFromEmail(email: string) {
  return email
    .split('@')[0]
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export const authService = {
  getRoleHome(role: UserRole) {
    return roleHome[role]
  },

  async login({ email, role }: LoginPayload): Promise<AuthUser> {
    return {
      id: `${role}-${email}`,
      name: getNameFromEmail(email) || 'Clinic User',
      email,
      role,
    }
  },

  async register({ email, name }: RegisterPayload): Promise<AuthUser> {
    return {
      id: `patient-${email}`,
      name,
      email,
      role: USER_ROLES.patient,
    }
  },

  async forgotPassword(): Promise<void> {
    return
  },
}
