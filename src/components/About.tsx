import { MapPin, ArrowUpRight, Code, Cpu, Layers, GraduationCap } from 'lucide-react';
import { site } from '../data/site';

const highlights = [
  {
    icon: Code,
    title: 'Backend & API Engineering',
    desc: 'Python with FastAPI and Flask, normalized PostgreSQL databases, JWT auth and background jobs with Celery.',
  },
  {
    icon: Cpu,
    title: 'AI Systems & Agents',
    desc: 'Custom MCP servers, LLM integrations, tool-calling agents and semantic search with pgvector.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Delivery',
    desc: 'React and TypeScript interfaces, an interactive canvas editor, and responsive mobile-first layouts.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* ── Left Column ── */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              About Me
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Who is <span className="text-gradient">{site.name.split(' ')[0]}</span>?
            </h2>

            {/* Philosophy Quote */}
            <blockquote className="mt-8 rounded-2xl border border-accent/25 bg-accent-muted/80 p-6 shadow-sm transition-all hover:border-accent/40">
              <span className="block mb-2 text-3xl font-serif leading-none text-accent/50">"</span>
              <p className="text-base font-semibold leading-[1.8] text-ink/85 italic">
                I like understanding how systems work underneath, not just calling APIs — so the
                software I write stays debuggable, documented and maintainable.
              </p>
            </blockquote>

            {/* Status badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ok/25 bg-ok/10 px-3.5 py-1.5 text-xs font-semibold text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse" />
                {site.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-surface-elevated px-3.5 py-1.5 text-xs font-semibold text-ink/55">
                <GraduationCap size={11} className="text-accent-light" />
                B.Sc. Computer Science
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-surface-elevated px-3.5 py-1.5 text-xs font-semibold text-ink/55">
                <MapPin size={11} className="text-accent-light" />
                {site.location}
              </span>
            </div>

            {/* 3 Core Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="card flex items-start gap-3.5 p-4 hover:border-accent/30 transition-all"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">{title}</h4>
                    <p className="mt-0.5 text-xs leading-[1.65] text-ink/50">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests — direction of travel, deliberately not a second skills list */}
            <div className="mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
                Interests
              </p>
              <div className="flex flex-wrap gap-1.5">
                {site.interests.map((interest) => (
                  <span key={interest} className="chip">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="space-y-6">
            {/* Identity Card */}
            <div className="card flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-2xl font-black text-white shadow-glow">
                  {site.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{site.name}</h3>
                  <p className="text-xs font-medium text-accent-light mt-0.5">{site.role}</p>
                  <p className="text-xs text-ink/40 mt-1">Computer Science Student · AI & Software Engineer</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-ok/25 bg-ok/10 px-3 py-1 text-[11px] font-semibold text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                Available Now
              </span>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-sm leading-[1.9] text-ink/65 card p-6">
              {site.about.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            {/* Action buttons */}
            <div className="card p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold text-ink">Open to opportunities?</p>
                <p className="text-xs text-ink/40 mt-0.5">Tell me about the role, the team, or the project.</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a href={`mailto:${site.email}`} className="btn-primary text-xs py-2.5 px-5">
                  Get In Touch <ArrowUpRight size={14} />
                </a>
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs py-2.5 px-4"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
