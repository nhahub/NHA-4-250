import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { Drawer } from '@/components/overlays'
import { Footer } from '@/components/layout'
import { Navbar } from '@/components/navigation'

type PublicLayoutProps = {
  children: ReactNode
}

const mobileLinks = [
  { label: 'Home', to: ROUTES.home },
  { label: 'About', to: ROUTES.about },
  { label: 'Services', to: ROUTES.services },
  { label: 'Departments', to: ROUTES.departments },
  { label: 'Doctors', to: ROUTES.doctors },
  { label: 'FAQ', to: ROUTES.faq },
  { label: 'Contact', to: ROUTES.contact },
  { label: 'Login', to: ROUTES.login },
  { label: 'Book Appointment', to: ROUTES.booking },
]

export function PublicLayout({ children }: PublicLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      {children}
      <Footer />
      <Drawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        side="right"
        title="Navigation"
      >
        <nav aria-label="Mobile navigation" className="grid gap-2">
          {mobileLinks.map((item) => (
            <Link
              className="rounded-2xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              key={item.to}
              onClick={() => setIsMenuOpen(false)}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Drawer>
    </div>
  )
}
