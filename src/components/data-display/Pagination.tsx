import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/common'

type PaginationProps = {
  page: number
  pageSize: number
  total: number
  onPageChange: (page: number) => void
}

export function Pagination({ onPageChange, page, pageSize, total }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1
  const end = Math.min(total, page * pageSize)

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>
        Showing {start}-{end} of {total}
      </p>
      <div className="flex items-center gap-2">
        <Button
          aria-label="Previous page"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          size="icon"
          variant="outline"
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </Button>
        <span className="rounded-xl bg-white px-3 py-2 font-semibold text-slate-800 ring-1 ring-slate-200">
          {page} / {totalPages}
        </span>
        <Button
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          size="icon"
          variant="outline"
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}
