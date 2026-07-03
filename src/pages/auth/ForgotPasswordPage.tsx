import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Mail } from 'lucide-react'
import { Button, Input } from '@/components'
import { ROUTES } from '@/constants'
import { useAuth } from '@/context'
import { forgotPasswordSchema, type ForgotPasswordFormValues } from '@/features/auth'
import { AuthLayout } from './AuthLayout'

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { resetPassword } = useAuth()

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = handleSubmit(async ({ email }) => {
    setIsSubmitting(true)
    try {
      await resetPassword(email)
      toast.success('Password reset instructions sent.')
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <AuthLayout
      description="Enter your email and we will send secure recovery instructions."
      title="Reset password"
    >
      <form className="grid gap-4" onSubmit={onSubmit}>
        <Input
          error={errors.email?.message}
          label="Email"
          leftIcon={<Mail aria-hidden="true" className="h-4 w-4" />}
          type="email"
          {...register('email')}
        />
        <Button isLoading={isSubmitting} type="submit">
          Send reset link
        </Button>
        <Link className="text-center text-sm font-semibold text-blue-700 hover:text-blue-800" to={ROUTES.login}>
          Back to sign in
        </Link>
      </form>
    </AuthLayout>
  )
}
