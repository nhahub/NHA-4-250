import { Mail, MapPin, Phone } from 'lucide-react'
import { Button, Card, Input, Textarea } from '@/components'
import { PublicPageShell } from './components/PublicPageShell'
import { SectionHeader } from './components/SectionHeader'

const contactCards = [
  { label: 'Phone', value: '+20 100 000 0000', icon: Phone },
  { label: 'Email', value: 'support@smartclinic.test', icon: Mail },
  { label: 'Location', value: 'Cairo Medical District', icon: MapPin },
]

export default function ContactPage() {
  return (
    <PublicPageShell>
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              description="Send a message to reception, ask about services, or request help with your account."
              eyebrow="Contact"
              title="We are here to help"
            />
            <div className="mt-8 grid gap-3">
              {contactCards.map((item) => {
                const Icon = item.icon

                return (
                  <Card className="flex items-center gap-4 p-4" key={item.label}>
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <p className="font-semibold text-slate-950">{item.value}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
          <Card className="p-6">
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Full name" name="name" placeholder="Your name" />
                <Input label="Email" name="email" placeholder="you@example.com" type="email" />
              </div>
              <Input label="Subject" name="subject" placeholder="How can we help?" />
              <Textarea label="Message" name="message" placeholder="Write your message" />
              <Button className="w-fit" type="submit">
                Send message
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </PublicPageShell>
  )
}
