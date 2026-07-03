import { HelpCircle } from 'lucide-react'
import { Card } from '@/components'
import { faqs } from '@/constants'
import { PublicPageShell } from './components/PublicPageShell'
import { SectionHeader } from './components/SectionHeader'

export default function FaqPage() {
  return (
    <PublicPageShell>
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            align="center"
            description="Quick answers for patients, doctors, and administrators using the clinic management system."
            eyebrow="FAQ"
            title="Frequently asked questions"
          />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <Card className="p-6" key={faq.question}>
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <HelpCircle aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-950">{faq.question}</h2>
                    <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </PublicPageShell>
  )
}
