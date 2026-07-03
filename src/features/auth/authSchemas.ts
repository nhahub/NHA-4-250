import { z } from 'zod'
import { USER_ROLES } from '@/constants'

export const loginSchema = z.object({
  email: z.email('Enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
  role: z.enum([USER_ROLES.patient, USER_ROLES.doctor, USER_ROLES.admin]),
})

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.email('Enter a valid email address.'),
    password: z.string().min(6, 'Password must be at least 6 characters.'),
    confirmPassword: z.string().min(6, 'Confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

export const forgotPasswordSchema = z.object({
  email: z.email('Enter a valid email address.'),
})

export type LoginFormValues = z.infer<typeof loginSchema>
export type RegisterFormValues = z.infer<typeof registerSchema>
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>
