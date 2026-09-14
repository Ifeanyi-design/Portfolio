import { useState } from 'react';
import { ArrowRight, ArrowUpRight, FolderOpen, Layers3, CalendarDays, Globe, Copy, Check, Sparkles } from 'lucide-react';
import { site } from '../data/site';

const stats = [
  { icon: FolderOpen,   value: '5+',  label: 'Production Apps' },
  { icon: Layers3,      value: '3',   label: 'Core Domains'   },
  { icon: CalendarDays, value: '2+',  label: 'Years Building' },
  { icon: Globe,        value: '100%',label: 'Remote Worldwide'},
];

const techStack = [
  'Python', 'Flask', 'FastAPI', 'React', 'TypeScript',
  'PostgreSQL', 'AI Agents', 'MCP', 'Docker', 'Tailwind CSS',
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen hero-glow dot-grid overflow-hidden pt-40 pb-24 transition-colors duration-500"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.12), transparent 70%)`,
        }}
      />

      {/* Floating kinetic orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-accent/15 blur-[100px] animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-60 h-96 w-96 rounded-full bg-accent/10 blur-[110px] animate-float-reverse"
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
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-ink/60">
                <Sparkles size={12} className="text-accent-light" /> Full-Stack & AI Engineer
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

            {/* Value Proposition */}
            <p className="mt-5 max-w-lg text-base leading-[1.8] text-ink/60">
              {site.valueProp}
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Start a Project <ArrowUpRight size={16} />
              </a>
              {/* Quick copy email pill */}
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated px-4 py-3 text-xs font-semibold text-ink/60 transition-all hover:border-accent/40 hover:text-ink cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-ok" />
                    <span className="text-ok font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
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

          {/* ── Right Column: Interactive Stats & Tech Grid ── */}
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

            {/* Stack Panel */}
            <div className="card p-6 sm:p-7 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
                  Primary Tech Stack
                </p>
                <span className="text-[10px] font-semibold text-accent-light bg-accent-muted px-2.5 py-1 rounded-md border border-accent/20">
                  Production Tested
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-surface-elevated px-3.5 py-2 text-xs font-medium text-ink/70 transition-all hover:border-accent/40 hover:text-accent-light hover:scale-105 cursor-default shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Stack Summary */}
        <div className="card mt-10 p-5 lg:hidden animate-fade-up">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
            Primary Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/8 bg-surface-hover px-3 py-1 text-xs font-medium text-ink/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
