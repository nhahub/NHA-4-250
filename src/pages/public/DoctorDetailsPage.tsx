import { Link, useParams } from 'react-router-dom'
import { CalendarPlus, Clock, Languages, MapPin, Star } from 'lucide-react'
import { Avatar, Badge, Card } from '@/components'
import { doctors, ROUTES } from '@/constants'
import { PublicPageShell } from './components/PublicPageShell'

export default function DoctorDetailsPage() {
  const { doctorId } = useParams()
  const doctor = doctors.find((item) => item.id === doctorId) ?? doctors[0]

  return (
    <PublicPageShell>
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="p-6" glass>
            <div className="flex flex-col gap-6 sm:flex-row">
              <Avatar name={doctor.name} size="lg" />
              <div>
                <Badge tone="blue">{doctor.department}</Badge>
                <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-6xl">
                  {doctor.name}
                </h1>
                <p className="mt-3 text-xl font-medium text-blue-700">{doctor.specialty}</p>
                <p className="mt-5 max-w-3xl leading-7 text-slate-600">{doctor.bio}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                    <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {doctor.rating} from {doctor.reviews} reviews
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                    <Clock aria-hidden="true" className="h-4 w-4" />
                    {doctor.experience}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {doctor.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                    <Languages aria-hidden="true" className="h-4 w-4" />
                    {doctor.languages.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-fit p-6">
            <h2 className="text-xl font-semibold text-slate-950">Next availability</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {doctor.nextAvailable}. Continue to select a date, available time slot,
              confirmation, and success page.
            </p>
            <Link
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              to={ROUTES.booking}
            >
              <CalendarPlus aria-hidden="true" className="h-5 w-5" />
              Book appointment
            </Link>
          </Card>
        </section>
      </main>
    </PublicPageShell>
  )
}
