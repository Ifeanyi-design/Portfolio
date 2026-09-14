/** CSS-only infinite marquee — two rows scrolling opposite directions with edge fade and pause on hover. */
const ROW_1 = [
  'React', 'TypeScript', 'Python', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL',
  'Tailwind CSS', 'AI Agents', 'Tool-Calling', 'RAG', 'JWT Auth', 'SQLModel',
  'React Native', 'Zustand', 'Vite', 'Docker',
];
const ROW_2 = [
  'Web Apps', 'Business Automation', 'AI Systems', 'Full-Stack Engineering', 'Escrow Systems',
  'Database Design', 'Cloudflare', 'Supabase', 'LangGraph', 'MCP Servers', 'pgvector', 'Celery', 'Stripe',
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden py-2 group">
      <ul
        aria-hidden
        className={`flex shrink-0 gap-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/30 transition-colors hover:text-accent-light cursor-default"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/40 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="relative border-y border-surface-border bg-surface-card/60 py-1.5 overflow-hidden">
      {/* Edge gradient masks for seamless fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10"
      />

      <Row items={ROW_1} />
      <Row items={ROW_2} reverse />
    </div>
  );
}
