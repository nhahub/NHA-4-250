import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { LockKeyhole, Mail, UserRound } from 'lucide-react'
import { Button, Input } from '@/components'
import { ROUTES } from '@/constants'
import { useAuth } from '@/context'
import { registerSchema, type RegisterFormValues } from '@/features/auth'
import { AuthLayout } from './AuthLayout'

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = handleSubmit(async (values) => {
    setIsSubmitting(true)
    try {
      const user = await registerUser(values)
      toast.success(`Account created for ${user.name}`)
      navigate(ROUTES.patientDashboard, { replace: true })
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <AuthLayout
      description="Create a patient account to book appointments, view records, and manage notifications."
      title="Create account"
    >
      <form className="grid gap-4" onSubmit={onSubmit}>
        <Input
          error={errors.name?.message}
          label="Full name"
          leftIcon={<UserRound aria-hidden="true" className="h-4 w-4" />}
          {...register('name')}
        />
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
        <Input
          error={errors.confirmPassword?.message}
          label="Confirm password"
          leftIcon={<LockKeyhole aria-hidden="true" className="h-4 w-4" />}
          type="password"
          {...register('confirmPassword')}
        />
        <Button isLoading={isSubmitting} type="submit">
          Create account
        </Button>
        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link className="font-semibold text-blue-700 hover:text-blue-800" to={ROUTES.login}>
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
