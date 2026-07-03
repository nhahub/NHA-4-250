import { Link, NavLink } from 'react-router-dom'
import { CalendarPlus, Menu, Stethoscope } from 'lucide-react'
import { ROUTES } from '@/constants'
import { Button } from '@/components/common'
import { cn } from '@/utils'

const navItems = [
  { label: 'Services', to: ROUTES.services },
  { label: 'Departments', to: ROUTES.departments },
  { label: 'Doctors', to: ROUTES.doctors },
  { label: 'FAQ', to: ROUTES.faq },
  { label: 'Contact', to: ROUTES.contact },
]

type NavbarProps = {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 font-semibold text-slate-950" to={ROUTES.home}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Stethoscope aria-hidden="true" className="h-5 w-5" />
          </span>
          Smart Clinic
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'rounded-2xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950',
                  isActive && 'bg-blue-50 text-blue-700',
                )
              }
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-2xl px-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-100"
            to={ROUTES.login}
          >
            Login
          </Link>
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
            to={ROUTES.booking}
          >
            <CalendarPlus aria-hidden="true" className="h-4 w-4" />
            Book now
          </Link>
        </div>
        <Button
          aria-label="Open navigation menu"
          className="lg:hidden"
          onClick={onMenuClick}
          size="icon"
          variant="ghost"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
