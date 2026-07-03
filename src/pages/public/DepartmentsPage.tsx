import { departments } from '@/constants'
import { DepartmentCard } from './components/PublicCards'
import { PublicPageShell } from './components/PublicPageShell'
import { SectionHeader } from './components/SectionHeader'

export default function DepartmentsPage() {
  return (
    <PublicPageShell>
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Each department routes patients into a focused booking journey with relevant doctors and available time slots."
            eyebrow="Departments"
            title="Specialties organized for quick decisions"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <DepartmentCard department={department} key={department.id} />
            ))}
          </div>
        </div>
      </main>
    </PublicPageShell>
  )
}
