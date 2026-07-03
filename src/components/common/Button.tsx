import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus:ring-blue-200',
  secondary:
    'bg-teal-500 text-white shadow-lg shadow-teal-500/20 hover:bg-teal-600 focus:ring-teal-200',
  outline:
    'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700 focus:ring-blue-100',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus:ring-slate-100',
  danger:
    'bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600 focus:ring-red-200',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
  icon: 'h-10 w-10 p-0',
}

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  leftIcon,
  rightIcon,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition focus:outline-none focus:ring-4 disabled:opacity-60',
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading ? (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      ) : (
        leftIcon
      )}
      {size !== 'icon' ? children : <span className="sr-only">{children}</span>}
      {!isLoading && rightIcon}
    </button>
  )
}
