import type { HTMLAttributes } from 'react'
import { cn } from '@/utils'

type BadgeTone = 'blue' | 'teal' | 'green' | 'amber' | 'red' | 'slate'

const tones: Record<BadgeTone, string> = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  teal: 'bg-teal-50 text-teal-700 ring-teal-100',
  green: 'bg-green-50 text-green-700 ring-green-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  red: 'bg-red-50 text-red-700 ring-red-100',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
}

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone
}

export function Badge({ className, tone = 'blue', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}
