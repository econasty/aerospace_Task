import { ArrowUpRight, Sparkles } from "lucide-react"
import type { AeroEvent } from "./events-data"

export function FeaturedEvent({ event }: { event: AeroEvent }) {
  const Icon = event.icon
  const details = event.featured
  const stats = details?.stats ?? []

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-cyan-500/10 p-8 sm:p-10 lg:p-12">
      {/* orbit rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/[0.05]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-24 top-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl"
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-200">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {details?.tagline ?? "Highlighted Event"}
          </span>

          <h3 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {event.title}
          </h3>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-300">
            {details?.blurb ?? event.description}
          </p>

          <a
            href={details?.ctaHref ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:scale-[1.03]"
          >
            Explore Event
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300 shadow-[0_0_50px_-10px_rgba(34,211,238,0.6)]">
            <Icon className="h-11 w-11" strokeWidth={1.4} aria-hidden />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-4 text-center"
              >
                <p className="text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
