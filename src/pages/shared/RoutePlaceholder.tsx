import { Link } from 'react-router-dom'

type RoutePlaceholderProps = {
  title: string
  description: string
  eyebrow?: string
}

export function RoutePlaceholder({
  title,
  description,
  eyebrow = 'Smart Clinic',
}: RoutePlaceholderProps) {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-16 text-[var(--color-text)]">
      <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center rounded-3xl border border-white/70 bg-white/80 px-6 py-12 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
            to="/booking"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}

export default RoutePlaceholder
