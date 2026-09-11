"use client"

import type React from "react"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import type { AeroEvent } from "./events-data"
import { CATEGORY_STYLE } from "./category-styles"

export function EventCard({ event }: { event: AeroEvent }) {
  const Icon = event.icon
  const style = CATEGORY_STYLE[event.category]
  const cardRef = useRef<HTMLAnchorElement>(null)

  // Track the pointer and expose its position as CSS custom properties so the
  // spotlight can follow the cursor without triggering a React re-render.
  function handlePointerMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <a
      ref={cardRef}
      href={event.href}
      onPointerMove={handlePointerMove}
      style={
        {
          "--spot": style.spotlight,
        } as React.CSSProperties
      }
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 ring-1 ring-inset ring-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-2xl hover:ring-white/20 hover:backdrop-blur-xl ${style.hoverBorder} ${style.glow}`}
    >
      {/* cursor-following spotlight glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(180px circle at var(--mx, 50%) var(--my, 0px), rgba(var(--spot), 0.3), transparent 60%)",
        }}
      />
      {/* frosted top-edge sheen that fades in on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* soft glass highlight across the top half */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="mb-5 flex items-center justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] ring-1 ${style.ring} ${style.text}`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-300`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden />
          {event.category}
        </span>
      </div>

      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
        {event.meta}
      </p>
      <h3 className="text-xl font-semibold text-white">{event.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {event.description}
      </p>

      <span
        className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${style.text}`}
      >
        View Event Report
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </a>
  )
}
