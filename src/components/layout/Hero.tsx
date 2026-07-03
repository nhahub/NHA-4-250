import type { ReactNode } from 'react'
import { Button } from '@/components/common'

type HeroProps = {
  actions?: ReactNode
  eyebrow?: string
  subtitle: string
  title: string
}

export function Hero({ actions, eyebrow, subtitle, title }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.38),transparent_34%),linear-gradient(135deg,rgba(20,184,166,0.22),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-normal md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {actions ?? <Button>Get started</Button>}
        </div>
      </div>
    </section>
  )
}
