import { Award, Clock, LockKeyhole, UsersRound } from 'lucide-react'
import { Card } from '@/components'
import { PublicPageShell } from './components/PublicPageShell'
import { SectionHeader } from './components/SectionHeader'

const values = [
  {
    title: 'Patient clarity',
    description: 'Every action is designed to make appointments, records, and care steps easier to understand.',
    icon: UsersRound,
  },
  {
    title: 'Clinical focus',
    description: 'Doctors get a focused workspace for schedules, visits, patient context, and daily decisions.',
    icon: Award,
  },
  {
    title: 'Secure access',
    description: 'Role-based routes protect patient, doctor, and admin experiences across the platform.',
    icon: LockKeyhole,
  },
  {
    title: 'Fast operations',
    description: 'Admins can monitor activity, availability, departments, and clinic statistics without clutter.',
    icon: Clock,
  },
]

export default function AboutPage() {
  return (
    <PublicPageShell>
      <main>
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              description="Smart Clinic brings patient booking, doctor scheduling, medical records, and operational dashboards into one modern frontend architecture."
              eyebrow="About"
              title="A calmer way to run clinic care"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon

                return (
                  <Card className="p-5" key={value.title}>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-600">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-slate-950">{value.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </PublicPageShell>
  )
}
