import { Globe, Code2, Bot, Clapperboard, Plus, ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';

const serviceIcons: Record<string, React.ReactNode> = {
  'websites':      <Globe size={20} />,
  'web-apps':      <Code2 size={20} />,
  'ai-automation': <Bot size={20} />,
  'ai-video':      <Clapperboard size={20} />,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-32">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              My Specialization
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              How I Bring{' '}
              <span className="text-gradient">Ideas to Life</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-[1.8] text-ink/50">
              Tailored development services for startups, businesses, and founders who need production software delivered on time.
            </p>
          </div>
          <a href="#contact" className="btn-ghost shrink-0 text-xs py-2.5 px-5">
            Work With Me <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Accordion list with generous spacing */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {services.map((service, i) => (
            <details
              key={service.id}
              className="card group overflow-hidden open:border-accent/40 open:bg-surface-elevated/90 transition-all duration-300 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5 px-6 sm:px-8 py-6 sm:py-7 hover:bg-surface-hover transition-colors">
                {/* Number */}
                <span className="hidden sm:flex shrink-0 items-center justify-center h-10 w-10 rounded-xl border border-white/8 bg-surface-elevated text-xs font-black text-ink/40 group-open:border-accent/40 group-open:text-accent-light group-open:bg-accent-muted transition-all">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <span className="flex shrink-0 h-12 w-12 items-center justify-center rounded-2xl bg-accent-muted text-accent-light border border-accent/20 transition-transform group-hover:scale-105">
                  {serviceIcons[service.id] ?? <Globe size={20} />}
                </span>

                {/* Title + pitch preview */}
                <span className="flex-1 min-w-0 pr-2">
                  <span className="block text-base sm:text-lg font-bold text-ink group-hover:text-white transition-colors">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink/45 group-open:hidden line-clamp-1">
                    {service.pitch}
                  </span>
                </span>

                {/* Toggle icon */}
                <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-ink/40 transition-all group-open:rotate-45 group-open:border-accent/40 group-open:text-accent-light group-open:bg-accent-muted">
                  <Plus size={17} />
                </span>
              </summary>

              {/* Expanded content with generous internal padding */}
              <div className="mx-6 sm:mx-8 mb-6 sm:mb-8 rounded-2xl border border-white/8 bg-surface-card p-6 sm:p-8 animate-fade-up shadow-inner">
                <p className="mb-6 text-sm sm:text-base leading-[1.85] text-ink/75 max-w-3xl">
                  {service.pitch}
                </p>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between pt-5 border-t border-white/8">
                  <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
                      Technologies & Tools
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {service.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-surface-elevated px-3.5 py-1.5 text-xs font-medium text-ink/65 transition-all hover:border-accent/40 hover:text-accent-light hover:scale-105"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="btn-ghost shrink-0 text-xs py-2.5 px-5 self-start sm:self-auto shadow-sm"
                  >
                    Inquire About This <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
