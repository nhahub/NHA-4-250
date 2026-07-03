import type { ReactNode } from 'react'
import { PublicLayout } from '@/layouts'

type PublicPageShellProps = {
  children: ReactNode
}

export function PublicPageShell({ children }: PublicPageShellProps) {
  return <PublicLayout>{children}</PublicLayout>
}
