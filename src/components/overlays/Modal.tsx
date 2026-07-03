import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button, Card } from '@/components/common'

type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/40 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <Card className="w-full max-w-lg overflow-hidden" glass>
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
          <Button onClick={onClose} size="icon" variant="ghost">
            <X aria-hidden="true" className="h-5 w-5" />
            Close modal
          </Button>
        </header>
        <div className="p-5">{children}</div>
      </Card>
    </div>
  )
}
