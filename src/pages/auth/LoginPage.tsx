import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { LockKeyhole, Mail } from 'lucide-react'
import { Button, Input, Select } from '@/components'
import { ROUTES, USER_ROLES } from '@/constants'
import { useAuth } from '@/context'
import { loginSchema, type LoginFormValues } from '@/features/auth'
import { authService } from '@/services'
import { AuthLayout } from './AuthLayout'

const roleOptions = [
  { label: 'Patient', value: USER_ROLES.patient },
  { label: 'Doctor', value: USER_ROLES.doctor },
  { label: 'Admin', value: USER_ROLES.admin },
]

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: 'patient@smartclinic.test',
      password: 'secret123',
      role: USER_ROLES.patient,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(async (values) => {
    setIsSubmitting(true)
    try {
      const user = await login(values)
      toast.success(`Welcome back, ${user.name}`)
      navigate(from ?? authService.getRoleHome(user.role), { replace: true })
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <AuthLayout
      description="Choose a role to preview protected patient, doctor, and admin workspaces."
      title="Sign in"
    >
      <form className="grid gap-4" onSubmit={onSubmit}>
        <Input
          error={errors.email?.message}
          label="Email"
          leftIcon={<Mail aria-hidden="true" className="h-4 w-4" />}
          type="email"
          {...register('email')}
        />
        <Input
          error={errors.password?.message}
          label="Password"
          leftIcon={<LockKeyhole aria-hidden="true" className="h-4 w-4" />}
          type="password"
          {...register('password')}
        />
        <Select
          error={errors.role?.message}
          label="Role"
          options={roleOptions}
          {...register('role')}
        />
        <div className="flex items-center justify-between gap-4 text-sm">
          <Link className="font-semibold text-blue-700 hover:text-blue-800" to={ROUTES.forgotPassword}>
            Forgot password?
          </Link>
          <Link className="text-slate-600 hover:text-blue-700" to={ROUTES.register}>
            Create account
          </Link>
        </div>
        <Button isLoading={isSubmitting} type="submit">
          Sign in
        </Button>
      </form>
    </AuthLayout>
  )
}
