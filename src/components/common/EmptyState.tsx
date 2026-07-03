import type { ReactNode } from 'react'
import { ClipboardList } from 'lucide-react'
import { Button } from './Button'

type EmptyStateProps = {
  title: string
  description: string
  actionLabel?: string
  icon?: ReactNode
  onAction?: () => void
}

export function EmptyState({
  actionLabel,
  description,
  icon,
  onAction,
  title,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
        {icon ?? <ClipboardList aria-hidden="true" className="h-6 w-6" />}
      </div>
      <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
        {description}
      </p>
      {actionLabel && onAction ? (
        <Button className="mt-5" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}
