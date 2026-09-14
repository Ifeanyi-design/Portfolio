import { ArrowRight, ArrowUpRight, FolderOpen, Layers3, CalendarDays, Globe } from 'lucide-react';
import { site } from '../data/site';

const stats = [
  { icon: FolderOpen,  value: '5+',  label: 'Projects Built' },
  { icon: Layers3,     value: '3',   label: 'Skill Domains'  },
  { icon: CalendarDays,value: '2+',  label: 'Years Coding'   },
  { icon: Globe,       value: '🌍',  label: 'Remote Worldwide'},
];

const techStack = [
  'Python', 'Flask', 'React', 'TypeScript',
  'PostgreSQL', 'AI Agents', 'REST APIs', 'Tailwind CSS',
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen hero-glow dot-grid overflow-hidden pt-40 pb-24">

      {/* Glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[700px] w-[700px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* ── Left ── */}
          <div>
            {/* Availability badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok/10 px-4 py-1.5 text-xs font-semibold text-ok">
              <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse" />
              {site.availability}
            </div>

            {/* Hello label */}
            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-ink/35 uppercase">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-6xl font-black leading-[1.02] sm:text-7xl lg:text-8xl">
              <span className="text-gradient">{site.name.split(' ')[0]}</span>
              <br />
              <span className="text-ink">{site.name.split(' ')[1] ?? ''}</span>
            </h1>

            {/* Role */}
            <p className="mt-4 text-xl font-semibold text-ink/50 sm:text-2xl">
              {site.role}
            </p>

            {/* Value prop */}
            <p className="mt-5 max-w-lg text-base leading-[1.8] text-ink/55">
              {site.valueProp}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Start a Project <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Social row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-semibold text-ink/35 uppercase tracking-widest">
              <span>Find me on</span>
              <a href={`mailto:${site.email}`} className="hover:text-accent-light transition-colors">Email</a>
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="hover:text-accent-light transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Stats grid + stack ── */}
          <div className="hidden lg:flex flex-col gap-3">

            {/* 2×2 stat tiles — all use same accent, no rainbow */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="card group flex flex-col gap-3 p-5 hover:scale-[1.02] cursor-default"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted text-accent-light">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-ink">{value}</div>
                    <div className="mt-0.5 text-xs font-medium text-ink/45">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stack panel */}
            <div className="card p-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">
                What I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/8 bg-surface-hover px-3 py-1 text-xs font-medium text-ink/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Mobile stack summary */}
        <div className="card mt-10 p-5 lg:hidden">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">
            What I work with
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span key={t} className="rounded-full border border-white/8 bg-surface-hover px-3 py-1 text-xs font-medium text-ink/55">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
