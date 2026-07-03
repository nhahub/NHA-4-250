export function RouteLoading() {
  return (
    <div
      aria-label="Loading page"
      className="grid min-h-screen place-items-center bg-[var(--color-background)] px-6"
      role="status"
    >
      <div className="w-full max-w-sm rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="h-3 w-28 animate-pulse rounded-full bg-blue-100" />
        <div className="mt-6 h-8 w-3/4 animate-pulse rounded-full bg-slate-100" />
        <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-slate-100" />
        <div className="mt-3 h-4 w-5/6 animate-pulse rounded-full bg-slate-100" />
      </div>
    </div>
  )
}
