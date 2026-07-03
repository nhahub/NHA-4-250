import { useMemo, useState } from 'react'
import { FilterBar, SearchInput, Select } from '@/components'
import { departments, doctors } from '@/constants'
import { DoctorCard } from './components/PublicCards'
import { PublicPageShell } from './components/PublicPageShell'
import { SectionHeader } from './components/SectionHeader'

export default function DoctorsPage() {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('')

  const departmentOptions = departments.map((item) => ({
    label: item.name,
    value: item.name,
  }))

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase())
      const matchesDepartment = department ? doctor.department === department : true

      return matchesSearch && matchesDepartment
    })
  }, [department, search])

  return (
    <PublicPageShell>
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Search specialists, compare availability, review profile details, and begin the appointment flow."
            eyebrow="Doctors"
            title="Find the right doctor"
          />
          <div className="mt-10">
            <FilterBar title="Search and filter">
              <SearchInput
                aria-label="Search doctors"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
              />
              <Select
                aria-label="Filter by department"
                onChange={(event) => setDepartment(event.target.value)}
                options={departmentOptions}
                placeholder="All departments"
                value={department}
              />
            </FilterBar>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {filteredDoctors.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor.id} />
            ))}
          </div>
          {!filteredDoctors.length ? (
            <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600">
              No doctors match your filters.
            </p>
          ) : null}
        </div>
      </main>
    </PublicPageShell>
  )
}
