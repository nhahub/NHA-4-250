import type { ReactNode } from 'react'
import { Card } from '@/components/common'

type StatCardProps = {
  icon?: ReactNode
  label: string
  trend?: string
  value: string
}

export function StatCard({ icon, label, trend, value }: StatCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{value}</p>
        </div>
        {icon ? (
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">
            {icon}
          </div>
        ) : null}
      </div>
      {trend ? <p className="mt-4 text-sm font-medium text-teal-600">{trend}</p> : null}
    </Card>
  )
}
