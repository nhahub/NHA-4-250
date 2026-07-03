import { Card } from '@/components'
import { services } from '@/constants'
import { PublicPageShell } from './components/PublicPageShell'
import { SectionHeader } from './components/SectionHeader'

export default function ServicesPage() {
  return (
    <PublicPageShell>
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Designed for the full clinic lifecycle, from discovery and booking to records, dashboards, and notifications."
            eyebrow="Services"
            title="Connected digital clinic services"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Card className="p-6" key={service.title}>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </PublicPageShell>
  )
}
