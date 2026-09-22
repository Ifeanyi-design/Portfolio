import { useRef } from 'react';
import {
  ArrowRight, ArrowUpRight, FolderOpen, Rocket, Trophy, Briefcase,
  GraduationCap, Users, Sparkles,
} from 'lucide-react';
import { site } from '../data/site';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { recognitions } from '../data/recognition';

/** A link is real only when it exists and is not the '#' placeholder. */
const isRealLink = (href: string | undefined): boolean =>
  typeof href === 'string' && href.length > 0 && href !== '#';

// Every number is computed from the real data files, so a recruiter can verify
// it by scrolling — and it can never drift out of sync. No invented metrics,
// and none of the old marketing figures ("100% Remote Worldwide") survive.
const stats = [
  { icon: FolderOpen, value: String(projects.length),                                              label: 'Projects & Builds' },
  { icon: Rocket,     value: String(projects.filter((p) => isRealLink(p.links.demo)).length),       label: 'Live Deployments' },
  { icon: Trophy,     value: String(recognitions.length),                                           label: 'Competition Awards' },
  { icon: Briefcase,  value: String(experience.length),                                             label: 'IT / SIWES Placement' },
];

// Mirrors the detail in the Experience / Education / Recognition sections —
// the hero exists so a recruiter gets the whole profile in one screen.
const glance = [
  {
    icon: GraduationCap,
    label: 'B.Sc. Computer Science',
    detail: 'University of Ibadan · current student',
  },
  {
    icon: Briefcase,
    label: 'IT / Software Development Intern',
    detail: 'HIIT PLC · May – Aug 2026',
  },
  {
    icon: Trophy,
    label: '1st Place — IESA Forge the Future Hackathon 2026',
    detail: 'IntelliCT · computer vision, built with the team',
  },
  {
    icon: Users,
    label: 'Team Devions',
    detail: 'Admin / Technical Contributor',
  },
];

/** Shared by the desktop column and the mobile stack below it. */
function GlanceCard() {
  return (
    <div className="card p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
          At a Glance
        </p>
        <span className="rounded-md border border-accent/20 bg-accent-muted px-2.5 py-1 text-[10px] font-semibold text-accent-light">
          Student · Engineer
        </span>
      </div>

      <ul className="space-y-3.5">
        {glance.map(({ icon: Icon, label, detail }) => (
          <li key={label} className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-muted text-accent-light">
              <Icon size={15} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold leading-snug text-ink">{label}</span>
              <span className="mt-0.5 block text-[11px] leading-[1.5] text-ink/40">{detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Perf: mutate the spotlight's style directly instead of setState —
  // a mousemove-driven re-render of the whole Hero would jank on low-end hardware.
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.background = `radial-gradient(650px circle at ${x}% ${y}%, rgba(99,102,241,0.12), transparent 70%)`;
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen hero-glow dot-grid overflow-hidden pt-40 pb-24"
    >
      {/* Cursor spotlight — style mutated via ref, no re-render (see handleMouseMove) */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(650px circle at 50% 50%, rgba(99,102,241,0.12), transparent 70%)',
        }}
      />

      {/* Ambient accent washes — pre-blurred gradients, no CSS filter (cheap on old GPUs) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-[26rem] w-[26rem]"
        style={{ background: 'radial-gradient(circle at center, rgba(99,102,241,0.14), transparent 62%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-80 h-[30rem] w-[30rem]"
        style={{ background: 'radial-gradient(circle at center, rgba(99,102,241,0.10), transparent 62%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* ── Left Column ── */}
          <div className="animate-fade-up">

            {/* Status pills row */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok/10 px-3.5 py-1.5 text-xs font-semibold text-ok shadow-sm">
                <span className="h-2 w-2 rounded-full bg-ok animate-pulse" />
                {site.availability}
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-ink/60">
                <Sparkles size={12} className="text-accent-light" /> {site.shortRole}
              </span>
            </div>

            {/* Hello subtitle */}
            <p className="mb-2 text-xs font-bold tracking-[0.25em] text-ink/40 uppercase">
              Hello, I'm
            </p>

            {/* Headline Name */}
            <h1 className="text-6xl font-black leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="text-gradient drop-shadow-sm">{site.name.split(' ')[0]}</span>
              <br />
              <span className="text-ink">{site.name.split(' ')[1] ?? ''}</span>
            </h1>

            {/* Role Title */}
            <p className="mt-4 text-xl font-semibold text-ink/60 sm:text-2xl">
              {site.role}
            </p>

            {/* Student line — the first thing a recruiter should register */}
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink/50">
              <GraduationCap size={15} className="shrink-0 text-accent-light" aria-hidden />
              {site.intro}
            </p>

            {/* Value Proposition */}
            <p className="mt-5 max-w-lg text-base leading-[1.8] text-ink/60">
              {site.valueProp}
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#experience" className="btn-ghost">
                View Experience <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Let's Talk
              </a>
            </div>

            {/* Social row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-semibold text-ink/40 uppercase tracking-widest">
              <span>Connect:</span>
              <a href={`mailto:${site.email}`} className="hover:text-accent-light transition-colors">
                Email
              </a>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right Column: facts a recruiter can verify ── */}
          <div className="hidden lg:flex flex-col gap-3.5 animate-fade-up">

            {/* 2×2 Stat Tiles */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="card group flex flex-col gap-3 p-5 hover:scale-[1.03] cursor-default transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20 transition-transform group-hover:scale-110">
                    <Icon size={19} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-ink group-hover:text-gradient transition-colors">
                      {value}
                    </div>
                    <div className="mt-0.5 text-xs font-medium text-ink/45">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <GlanceCard />
          </div>

        </div>

        {/* Mobile summary */}
        <div className="mt-10 lg:hidden animate-fade-up">
          <GlanceCard />
        </div>
      </div>
    </section>
  );
}
