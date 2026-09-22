import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

// Order matches the page flow: proof → capability → experience → person →
// recognition → action. Services/Process stay on the page but out of the nav,
// so professional credibility is what a recruiter clicks through.
const navLinks = [
  { label: 'Work',        href: '#work' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'About',       href: '#about' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact',     href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll reading progress line */}
      <div
        className="scroll-progress transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="glass rounded-2xl px-5 py-3 shadow-2xl transition-all">
            <div className="flex items-center justify-between">

              {/* Logo */}
              <a
                href="#top"
                className="group flex items-center gap-2.5 font-bold text-lg cursor-pointer"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-white text-sm font-black select-none transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-glow-sm">
                  I
                </span>
                <span className="tracking-tight text-ink group-hover:text-white transition-colors">
                  Ifeanyi<span className="text-gradient">.</span>
                </span>
              </a>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="relative rounded-lg px-4 py-2 text-sm font-medium text-ink/60 hover:text-ink hover:bg-surface-hover transition-all duration-200"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              {/* CTA + hamburger */}
              <div className="flex items-center gap-3">
                {/* Wrapped in a plain div on purpose: `.btn-primary` sets display
                    inline-flex and is emitted after `.hidden` in the stylesheet, so
                    `hidden lg:inline-flex` on the anchor itself loses and the button
                    leaks into the mobile header. The wrapper has no conflicting
                    display rule, so `hidden` behaves here. */}
                <div className="hidden lg:block">
                  <a href="#contact" className="btn-primary shimmer-badge py-2 px-5 text-xs">
                    Let's Talk <ArrowUpRight size={14} />
                  </a>
                </div>
                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-ink/60 hover:text-ink hover:bg-surface-hover transition-colors cursor-pointer"
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile nav */}
            {open && (
              <nav
                className="lg:hidden border-t border-white/5 pt-3 pb-2 mt-3 flex flex-col gap-1 animate-fade-up"
                aria-label="Mobile"
              >
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-ink/60 hover:text-ink hover:bg-surface-hover transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-1 justify-center text-sm py-3"
                >
                  Let's Talk <ArrowUpRight size={15} />
                </a>
              </nav>
            )}
          </div>

          {/* Availability pill with shimmer */}
          <div className="mt-1.5 flex justify-center">
            <span className="shimmer-badge inline-flex items-center gap-1.5 rounded-full bg-ok/10 border border-ok/25 px-3.5 py-1 text-[11px] font-semibold text-ok/95 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse" />
              {site.availabilityShort}
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
