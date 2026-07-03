import { Link } from 'react-router-dom'
import { ArrowRight, CalendarPlus, CheckCircle2, HeartPulse, ShieldCheck } from 'lucide-react'
import { Badge, Card, StatCard } from '@/components'
import { departments, doctors, faqs, ROUTES, services } from '@/constants'
import { DepartmentCard, DoctorCard } from './components/PublicCards'
import { PublicPageShell } from './components/PublicPageShell'
import { SectionHeader } from './components/SectionHeader'

const stats = [
  { label: 'Patients supported', value: '24k+', trend: '98% satisfaction' },
  { label: 'Specialist doctors', value: '80+', trend: 'Across 12 departments' },
  { label: 'Avg. booking time', value: '2 min', trend: 'Fast guided flow' },
]

export default function HomePage() {
  return (
    <PublicPageShell>
      <main>
        <section className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#f8fafc_45%,#ecfeff_100%)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <Badge tone="teal">Modern medical management</Badge>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-normal text-slate-950 md:text-7xl">
                Smart clinic care for every role.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Patients book with confidence, doctors manage their day clearly,
                and administrators keep the clinic running from one calm system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  to={ROUTES.booking}
                >
                  <CalendarPlus aria-hidden="true" className="h-5 w-5" />
                  Book appointment
                </Link>
                <Link
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  to={ROUTES.doctors}
                >
                  Find doctors
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <Card className="relative p-5" glass>
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Today in clinic</p>
                    <p className="mt-1 text-3xl font-semibold">42 visits</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500">
                    <HeartPulse aria-hidden="true" className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-8 grid gap-3">
                  {[
                    'Cardiology follow-up confirmed',
                    'Pediatric vaccination reminder sent',
                    'Neurology slot opened at 11:00 AM',
                  ].map((item) => (
                    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3" key={item}>
                      <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-teal-300" />
                      <span className="text-sm text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <StatCard
                icon={<ShieldCheck aria-hidden="true" className="h-5 w-5" />}
                key={stat.label}
                {...stat}
              />
            ))}
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              description="Reusable care workflows for booking, records, schedules, notifications, and reporting."
              eyebrow="Services"
              title="Everything a connected clinic needs"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <Card className="p-5" key={service.title}>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              description="Start from a specialty, then choose a doctor, date, slot, and confirmation."
              eyebrow="Departments"
              title="Choose the right care path"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {departments.slice(0, 3).map((department) => (
                <DepartmentCard department={department} key={department.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              description="Clear profiles, ratings, specialties, availability, and booking actions."
              eyebrow="Doctors"
              title="Meet available specialists"
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {doctors.slice(0, 2).map((doctor) => (
                <DoctorCard doctor={doctor} key={doctor.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader align="center" eyebrow="FAQ" title="Helpful answers" />
            <div className="mt-10 grid gap-3">
              {faqs.slice(0, 3).map((faq) => (
                <Card className="p-5" key={faq.question}>
                  <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PublicPageShell>
  )
}
