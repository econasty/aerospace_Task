import type { EventCategory } from "./events-data"

/**
 * Each category gets its own accent hue so the grid reads as a set of
 * distinct mission types rather than one repeated card.
 */
export const CATEGORY_STYLE: Record<
  EventCategory,
  {
    text: string
    ring: string
    glow: string
    dot: string
    /** Category-colored gradient wash that fades in behind the frosted glass on hover. */
    tint: string
    /** Category-colored border that lights up on hover. */
    hoverBorder: string
    /** Raw "r, g, b" accent used for the cursor-following spotlight. */
    spotlight: string
  }
> = {
  Observation: {
    text: "text-cyan-300",
    ring: "ring-cyan-400/30",
    glow: "group-hover:shadow-[0_0_50px_-6px_rgba(34,211,238,0.65)]",
    dot: "bg-cyan-400",
    tint: "from-cyan-400/25 via-cyan-400/5",
    hoverBorder: "group-hover:border-cyan-300/50",
    spotlight: "34, 211, 238",
  },
  Competition: {
    text: "text-amber-300",
    ring: "ring-amber-400/30",
    glow: "group-hover:shadow-[0_0_50px_-6px_rgba(251,191,36,0.6)]",
    dot: "bg-amber-400",
    tint: "from-amber-400/25 via-amber-400/5",
    hoverBorder: "group-hover:border-amber-300/50",
    spotlight: "251, 191, 36",
  },
  Exhibition: {
    text: "text-violet-300",
    ring: "ring-violet-400/30",
    glow: "group-hover:shadow-[0_0_50px_-6px_rgba(167,139,250,0.65)]",
    dot: "bg-violet-400",
    tint: "from-violet-400/25 via-violet-400/5",
    hoverBorder: "group-hover:border-violet-300/50",
    spotlight: "167, 139, 250",
  },
  Seminar: {
    text: "text-emerald-300",
    ring: "ring-emerald-400/30",
    glow: "group-hover:shadow-[0_0_50px_-6px_rgba(52,211,153,0.6)]",
    dot: "bg-emerald-400",
    tint: "from-emerald-400/25 via-emerald-400/5",
    hoverBorder: "group-hover:border-emerald-300/50",
    spotlight: "52, 211, 153",
  },
  Screening: {
    text: "text-rose-300",
    ring: "ring-rose-400/30",
    glow: "group-hover:shadow-[0_0_50px_-6px_rgba(251,113,133,0.6)]",
    dot: "bg-rose-400",
    tint: "from-rose-400/25 via-rose-400/5",
    hoverBorder: "group-hover:border-rose-300/50",
    spotlight: "251, 113, 133",
  },
}
