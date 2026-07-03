import type { ReactNode } from 'react'
import { cn } from '@/utils'

export type TableColumn<TItem> = {
  key: string
  header: ReactNode
  render: (item: TItem) => ReactNode
  className?: string
}

type TableProps<TItem> = {
  columns: TableColumn<TItem>[]
  data: TItem[]
  emptyMessage?: string
  getRowKey: (item: TItem) => string
}

export function Table<TItem>({
  columns,
  data,
  emptyMessage = 'No records found.',
  getRowKey,
}: TableProps<TItem>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((column) => (
                <th className={cn('px-4 py-3 font-semibold', column.className)} key={column.key}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length ? (
              data.map((item) => (
                <tr className="transition hover:bg-slate-50" key={getRowKey(item)}>
                  {columns.map((column) => (
                    <td className={cn('px-4 py-4 text-slate-700', column.className)} key={column.key}>
                      {column.render(item)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-10 text-center text-slate-500" colSpan={columns.length}>
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
