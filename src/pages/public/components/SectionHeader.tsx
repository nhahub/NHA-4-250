type SectionHeaderProps = {
  align?: 'left' | 'center'
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeader({
  align = 'left',
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
