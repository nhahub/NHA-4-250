import type { SelectHTMLAttributes } from 'react'
import { cn } from '@/utils'
import type { SelectOption } from '@/types'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string
  label?: string
  options: SelectOption[]
  placeholder?: string
}

export function Select({
  className,
  error,
  id,
  label,
  options,
  placeholder,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name

  return (
    <div className="w-full">
      {label ? (
        <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor={selectId}>
          {label}
        </label>
      ) : null}
      <select
        aria-invalid={Boolean(error)}
        className={cn(
          'h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100',
          error && 'border-red-300 focus:border-red-300 focus:ring-red-100',
          className,
        )}
        id={selectId}
        {...props}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  )
}
