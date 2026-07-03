import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-semibold text-slate-950">Smart Clinic</p>
          <p className="mt-2 max-w-xl leading-6">
            Connected care management for patients, doctors, and clinic teams.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          <Link className="hover:text-blue-700" to={ROUTES.about}>
            About
          </Link>
          <Link className="hover:text-blue-700" to={ROUTES.services}>
            Services
          </Link>
          <Link className="hover:text-blue-700" to={ROUTES.contact}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
