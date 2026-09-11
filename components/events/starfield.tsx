// Deterministic star positions so server and client render identically
// (no Math.random at render time -> no hydration mismatch).
const STARS = Array.from({ length: 48 }, (_, i) => {
  const x = (i * 71 + 13) % 100
  const y = (i * 37 + 7) % 100
  const size = (i % 3) + 1
  const delay = (i % 7) * 0.6
  const duration = 2.4 + (i % 5) * 0.7
  return { x, y, size, delay, duration }
})

export function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: 0.15 + (s.size / 3) * 0.35,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
