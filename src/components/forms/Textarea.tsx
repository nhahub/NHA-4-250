import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/utils'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
  helperText?: string
  label?: string
}

export function Textarea({
  className,
  error,
  helperText,
  id,
  label,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name

  return (
    <div className="w-full">
      {label ? (
        <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea
        aria-invalid={Boolean(error)}
        className={cn(
          'min-h-28 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100',
          error && 'border-red-300 focus:border-red-300 focus:ring-red-100',
          className,
        )}
        id={textareaId}
        {...props}
      />
      {error || helperText ? (
        <p className={cn('mt-2 text-sm', error ? 'text-red-600' : 'text-slate-500')}>
          {error ?? helperText}
        </p>
      ) : null}
    </div>
  )
}
