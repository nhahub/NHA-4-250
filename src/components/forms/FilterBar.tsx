import type { ReactNode } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { Card } from '@/components/common'

type FilterBarProps = {
  children: ReactNode
  title?: string
}

export function FilterBar({ children, title = 'Filters' }: FilterBarProps) {
  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
        <SlidersHorizontal aria-hidden="true" className="h-4 w-4 text-blue-600" />
        {title}
      </div>
      <div className="grid gap-3 md:grid-cols-3">{children}</div>
    </Card>
  )
}
