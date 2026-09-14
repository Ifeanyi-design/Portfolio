import { MapPin, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

const skills = [
  'Python', 'Flask', 'React', 'TypeScript', 'REST APIs',
  'PostgreSQL', 'SQLAlchemy', 'JWT Auth', 'AI Agents',
  'Tool-Calling', 'RAG', 'LangGraph', 'React Native', 'Tailwind CSS',
];

export default function About() {
  return (
    <section id="about" className="relative py-24">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* ── Left ── */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              About Me
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Who is{' '}
              <span className="text-gradient">{site.name.split(' ')[0]}</span>?
            </h2>

            {/* Quote card */}
            <blockquote className="mt-8 rounded-2xl border border-accent/20 bg-accent-muted p-6">
              <span className="block mb-2 text-3xl font-serif leading-none text-accent/40">"</span>
              <p className="text-base font-semibold leading-[1.75] text-ink/80 italic">
                I like understanding how things work underneath — the systems I build are
                debuggable, documented and maintainable.
              </p>
            </blockquote>

            {/* Status pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ok/20 bg-ok/10 px-3.5 py-1.5 text-xs font-semibold text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                Available for Freelance
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-surface-elevated px-3.5 py-1.5 text-xs font-semibold text-ink/50">
                <MapPin size={11} />
                {site.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-surface-elevated px-3.5 py-1.5 text-xs font-semibold text-ink/50">
                CS Undergraduate
              </span>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/30">
                Skills & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s}
                    className="rounded-full border border-white/8 bg-surface-elevated px-3 py-1.5 text-xs font-medium text-ink/50 hover:border-accent/30 hover:text-accent-light transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right ── */}
          <div>
            {/* Avatar tile */}
            <div className="card mb-8 flex items-center gap-4 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-2xl font-black text-white shadow-glow">
                {site.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-ink">{site.name}</p>
                <p className="text-sm text-ink/45">{site.role}</p>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-5">
              {site.about.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm leading-[1.9] text-ink/60">{p}</p>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary text-sm py-3">
                Get In Touch <ArrowUpRight size={15} />
              </a>
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="btn-ghost text-sm py-3">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
