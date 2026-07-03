import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { Avatar, Badge, Card, CardContent } from '@/components'
import { ROUTES, routeToDoctorDetails, type departments, type doctors } from '@/constants'

type Department = (typeof departments)[number]
type Doctor = (typeof doctors)[number]

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = department.icon

  return (
    <Card className="p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </div>
        <Badge tone="teal">{department.doctors} doctors</Badge>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{department.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{department.description}</p>
      <Link
        className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
        to={ROUTES.doctors}
      >
        View specialists
      </Link>
    </Card>
  )
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <CardContent>
        <div className="flex items-start gap-4">
          <Avatar name={doctor.name} size="lg" />
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-slate-950">{doctor.name}</h3>
            <p className="text-sm font-medium text-blue-700">{doctor.specialty}</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-slate-600">
              <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
              {doctor.rating} ({doctor.reviews} reviews)
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{doctor.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge tone="blue">{doctor.department}</Badge>
          <Badge tone="slate">{doctor.experience}</Badge>
          <Badge tone="green">{doctor.nextAvailable}</Badge>
        </div>
        <Link
          className="mt-5 inline-flex rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          to={routeToDoctorDetails(doctor.id)}
        >
          View profile
        </Link>
      </CardContent>
    </Card>
  )
}
