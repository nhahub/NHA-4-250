import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  helperText?: string
  label?: string
  leftIcon?: ReactNode
}

export function Input({
  className,
  error,
  helperText,
  id,
  label,
  leftIcon,
  ...props
}: InputProps) {
  const inputId = id ?? props.name

  return (
    <div className="w-full">
      {label ? (
        <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className="relative">
        {leftIcon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </span>
        ) : null}
        <input
          aria-invalid={Boolean(error)}
          className={cn(
            'h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100',
            Boolean(leftIcon) && 'pl-10',
            error && 'border-red-300 focus:border-red-300 focus:ring-red-100',
            className,
          )}
          id={inputId}
          {...props}
        />
      </div>
      {error || helperText ? (
        <p className={cn('mt-2 text-sm', error ? 'text-red-600' : 'text-slate-500')}>
          {error ?? helperText}
        </p>
      ) : null}
    </div>
  )
}
