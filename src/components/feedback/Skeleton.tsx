import { cn } from '@/utils'

type SkeletonProps = {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-2xl bg-slate-100', className)} />
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="mt-5 h-8 w-2/3" />
      <Skeleton className="mt-4 h-4 w-full" />
      <Skeleton className="mt-3 h-4 w-5/6" />
    </div>
  )
}
