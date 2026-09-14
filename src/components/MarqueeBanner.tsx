/** CSS-only infinite marquee — two rows scrolling opposite directions. */
const ROW_1 = [
  'React', 'TypeScript', 'Python', 'Flask', 'REST APIs', 'PostgreSQL',
  'Tailwind CSS', 'AI Agents', 'Tool-Calling', 'RAG', 'JWT Auth', 'SQLAlchemy',
  'React Native', 'Zustand', 'Vite', 'Redis',
];
const ROW_2 = [
  'Web Apps', 'Business Automation', 'AI Systems', 'Full-Stack', 'Mobile Apps',
  'API Design', 'Database Design', 'Performance', 'SEO', 'Cloudflare',
  'Supabase', 'LangGraph', 'MCP', 'IndexedDB', 'Celery', 'OpenRouter',
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden py-2">
      <ul
        aria-hidden
        className={`flex shrink-0 gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {doubled.map((item, i) => (
          <li key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/25">
            <span className="h-[3px] w-[3px] rounded-full bg-accent/40 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="border-y border-surface-border bg-surface-card py-1 overflow-hidden">
      <Row items={ROW_1} />
      <Row items={ROW_2} reverse />
    </div>
  );
}
