import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope } from 'lucide-react'
import { ROUTES } from '@/constants'
import { Card } from '@/components'

type AuthLayoutProps = {
  children: ReactNode
  description: string
  title: string
}

export function AuthLayout({ children, description, title }: AuthLayoutProps) {
  return (
    <main className="grid min-h-screen bg-[linear-gradient(135deg,#eff6ff_0%,#f8fafc_48%,#ecfeff_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <Link className="mb-8 flex w-fit items-center gap-2 font-semibold text-slate-950" to={ROUTES.home}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Stethoscope aria-hidden="true" className="h-5 w-5" />
          </span>
          Smart Clinic
        </Link>
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="hidden lg:block">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Secure access
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-normal text-slate-950">
              Role-based care workflows, ready when you sign in.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Patients, doctors, and administrators each receive a focused workspace
              with protected routes and clean clinic operations.
            </p>
          </section>
          <Card className="mx-auto w-full max-w-xl p-6 sm:p-8" glass>
            <div>
              <h2 className="text-3xl font-semibold tracking-normal text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
            <div className="mt-8">{children}</div>
          </Card>
        </div>
      </div>
    </main>
  )
}
