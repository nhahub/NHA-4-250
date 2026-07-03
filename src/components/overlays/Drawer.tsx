import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/common'
import { cn } from '@/utils'

type DrawerProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  side?: 'left' | 'right'
  title: string
}

export function Drawer({
  children,
  isOpen,
  onClose,
  side = 'right',
  title,
}: DrawerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm">
      <aside
        aria-modal="true"
        className={cn(
          'fixed top-0 h-full w-full max-w-sm bg-white shadow-2xl',
          side === 'left' ? 'left-0' : 'right-0',
        )}
        role="dialog"
      >
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
          <Button onClick={onClose} size="icon" variant="ghost">
            <X aria-hidden="true" className="h-5 w-5" />
            Close drawer
          </Button>
        </header>
        <div className="p-5">{children}</div>
      </aside>
    </div>
  )
}
