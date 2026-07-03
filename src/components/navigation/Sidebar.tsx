import { NavLink } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils'

export type SidebarItem = {
  icon: LucideIcon
  label: string
  to: string
}

type SidebarProps = {
  items: SidebarItem[]
  title?: string
}

export function Sidebar({ items, title = 'Workspace' }: SidebarProps) {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white px-4 py-6 lg:block">
      <p className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>
      <nav aria-label={`${title} navigation`} className="mt-4 space-y-1">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950',
                  isActive && 'bg-blue-50 text-blue-700',
                )
              }
              key={item.to}
              to={item.to}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
