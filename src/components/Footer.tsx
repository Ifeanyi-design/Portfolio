import { GitFork, Link2, MessageCircle } from 'lucide-react';
import { site } from '../data/site';

const socialIcon: Record<string, React.ReactNode> = {
  GitHub:   <GitFork size={15} />,
  LinkedIn: <Link2 size={15} />,
  WhatsApp: <MessageCircle size={15} />,
};

const navLinks = [
  { label: 'Work',     href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-surface-border bg-surface-card">

      {/* Watermark */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
        <span className="text-[12vw] font-black uppercase tracking-tighter text-white/[0.025] whitespace-nowrap">
          {site.name}
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-bold text-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white font-black text-sm">
                I
              </span>
              <span>Ifeanyi<span className="text-gradient">.</span></span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-[1.7] text-ink/35">
              Full-Stack & AI Developer — building the web, one project at a time.
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex flex-col gap-5 sm:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}
                   className="text-sm font-medium text-ink/40 hover:text-accent-light transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-2">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   title={s.label}
                   className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-surface-elevated text-ink/40 hover:border-accent/40 hover:text-accent-light hover:bg-accent-muted transition-all">
                  {socialIcon[s.label] ?? <GitFork size={15} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-surface-border pt-6 sm:flex-row">
          <p className="text-xs text-ink/45">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink/35">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
