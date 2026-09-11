import type { LucideIcon } from "lucide-react"
import {
  Telescope,
  Rocket,
  Users,
  Trophy,
  Plane,
  Satellite,
  CalendarDays,
  Globe,
  Clapperboard,
  ShieldCheck,
  Mic,
} from "lucide-react"

export type EventCategory =
  | "Observation"
  | "Competition"
  | "Exhibition"
  | "Seminar"
  | "Screening"

export interface AeroEvent {
  id: string
  title: string
  description: string
  category: EventCategory
  icon: LucideIcon
  /** Short tag shown in the card header, e.g. edition or format. */
  meta: string
  /** Original event report URL. */
  href: string
  /** Optional details used only when the event is rendered as the highlighted event. */
  featured?: {
    tagline: string
    blurb: string
    stats: { value: string; label: string }[]
    ctaHref: string
  }
}

export const CATEGORIES: { label: string; value: EventCategory | "All" }[] = [
  { label: "All Missions", value: "All" },
  { label: "Observation", value: "Observation" },
  { label: "Competitions", value: "Competition" },
  { label: "Exhibitions", value: "Exhibition" },
  { label: "Seminars", value: "Seminar" },
  { label: "Screenings", value: "Screening" },
]

export const EVENTS: AeroEvent[] = [
  {
    id: "skywatch",
    title: "SkyWatch 2.0",
    description:
      "An immersive astronomy experience bringing the universe to the MITS community through technical workshops and deep-sky observation.",
    category: "Observation",
    icon: Telescope,
    meta: "Highlighted · 2026",
    href: "https://aerospace-club-mits.vercel.app/reports/skywatch.pdf",
    featured: {
      tagline: "Highlighted Event of 2026",
      blurb:
        "SkyWatch brings the wonders of the universe to the MITS community through a blend of technical workshops and deep-sky observation. Featuring a special collaboration with the Aryabhat Foundation, this multi-day event aims to ignite scientific curiosity and inspire the next generation of space enthusiasts.",
      stats: [
        { value: "Jan 24–25", label: "2026" },
        { value: "5", label: "Telescopes" },
        { value: "Free", label: "All Students" },
      ],
      ctaHref: "https://aerospace-club-mits.vercel.app/skywatch",
    },
  },
  {
    id: "isro-exhibition",
    title: "ISRO Exhibition",
    description:
      "Showcase of India's space technology featuring real models, prototypes and mission replicas.",
    category: "Exhibition",
    icon: Rocket,
    meta: "Exhibition",
    href: "https://aerospace-club-mits.vercel.app/reports/isro-exhibition.pdf",
  },
  {
    id: "sheldons-round-table",
    title: "Sheldons Round Table",
    description:
      "Technical brainstorming sessions where members debate the future of aerospace tech.",
    category: "Seminar",
    icon: Users,
    meta: "Discussion",
    href: "https://aerospace-club-mits.vercel.app/reports/sheldons-round-table.pdf",
  },
  {
    id: "galactic-pi-rates",
    title: "Galactic Pi-rates",
    description:
      "Technical competition testing aerospace knowledge, problem solving and coding skills.",
    category: "Competition",
    icon: Trophy,
    meta: "Competition",
    href: "https://aerospace-club-mits.vercel.app/reports/galactic-pi-rates.pdf",
  },
  {
    id: "itap",
    title: "ITAP",
    description:
      "International program featuring guest lectures and seminars from aerospace experts.",
    category: "Seminar",
    icon: Plane,
    meta: "International Program",
    href: "https://aerospace-club-mits.vercel.app/reports/itap.pdf",
  },
  {
    id: "space-day-quiz-2k24",
    title: "Space Day Quiz 2k24",
    description:
      "A fast-paced quiz challenging students on space history, missions and technology.",
    category: "Competition",
    icon: Satellite,
    meta: "Quiz · 2k24",
    href: "https://aerospace-club-mits.vercel.app/reports/space-day-quiz-2k24.pdf",
  },
  {
    id: "space-day-2k25",
    title: "Space Day 2k25",
    description:
      "Annual celebration blending technical talks, showcases and cultural events.",
    category: "Exhibition",
    icon: CalendarDays,
    meta: "Celebration · 2k25",
    href: "https://aerospace-club-mits.vercel.app/reports/space-day-celebration-2k25.pdf",
  },
  {
    id: "galactic-horizon",
    title: "Galactic Horizon",
    description:
      "Research exhibitions exploring the frontiers of future aerospace innovation.",
    category: "Exhibition",
    icon: Globe,
    meta: "Research Expo",
    href: "https://aerospace-club-mits.vercel.app/reports/galactic-horizon.pdf",
  },
  {
    id: "celestial-frames",
    title: "Celestial Frames",
    description:
      "Immersive space documentary screenings that bring the cosmos to the big screen.",
    category: "Screening",
    icon: Clapperboard,
    meta: "Documentary",
    href: "https://aerospace-club-mits.vercel.app/reports/Celestial%20Frames.pdf",
  },
  {
    id: "all-india-seminar",
    title: "All India Seminar",
    description:
      "Prioritizing safety culture across aviation, aeronautics, astronomy and space technology.",
    category: "Seminar",
    icon: ShieldCheck,
    meta: "National Seminar",
    href: "https://aerospace-club-mits.vercel.app/reports/all%20india%20seminar.pdf",
  },
  {
    id: "info-session",
    title: "Info Session",
    description:
      "An intro to how aerospace blends precision, logistics and sustainability.",
    category: "Seminar",
    icon: Mic,
    meta: "Orientation",
    href: "https://aerospace-club-mits.vercel.app/reports/Info%20session.pdf",
  },
]

/** The single hero event highlighted at the top of the section. */
export const FEATURED_EVENT_ID = "skywatch"
