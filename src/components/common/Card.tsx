import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  glass?: boolean
}

export function Card({ children, className, glass = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white shadow-sm',
        glass &&
          'border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('border-b border-slate-100 p-5', className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-5', className)} {...props}>
      {children}
    </div>
  )
}
