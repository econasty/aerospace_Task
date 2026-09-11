"use client"

import { useMemo, useState } from "react"
import {
  CATEGORIES,
  EVENTS,
  FEATURED_EVENT_ID,
  type EventCategory,
} from "./events-data"
import { EventCard } from "./event-card"
import { FeaturedEvent } from "./featured-event"
import { Starfield } from "./starfield"

export function EventsSection() {
  const [active, setActive] = useState<EventCategory | "All">("All")

  const featured = useMemo(
    () => EVENTS.find((e) => e.id === FEATURED_EVENT_ID)!,
    [],
  )

  const gridEvents = useMemo(
    () => EVENTS.filter((e) => e.id !== FEATURED_EVENT_ID),
    [],
  )

  const visible = useMemo(
    () =>
      active === "All"
        ? gridEvents
        : gridEvents.filter((e) => e.category === active),
    [active, gridEvents],
  )

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#060a17] py-24 sm:py-32"
    >
      <Starfield />
      {/* ambient gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Mission Log
          </span>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Events
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <p className="mt-6 text-pretty text-base leading-relaxed text-slate-400">
            From night-sky observations to national seminars — explore the
            missions that define the Aerospace Club&apos;s journey through the
            cosmos.
          </p>
        </div>

        {/* featured */}
        <div className="mt-14">
          <FeaturedEvent event={featured} />
        </div>

        {/* filter chips */}
        <div className="mt-14 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.value
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActive(cat.value)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-200"
                    : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/25 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-sm text-slate-500">
            No events in this category yet — stay tuned for the next launch.
          </p>
        )}
      </div>
    </section>
  )
}
