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
    <section id="services" className="relative py-24">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
          <a href="#contact" className="btn-ghost shrink-0 text-xs py-2.5">
            Work With Me <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {services.map((service, i) => (
            <details
              key={service.id}
              className="card group overflow-hidden open:border-accent/40 open:bg-surface-elevated/90 transition-all duration-300"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5.5 hover:bg-surface-hover transition-colors">
                {/* Number */}
                <span className="hidden sm:flex shrink-0 items-center justify-center h-10 w-10 rounded-xl border border-white/8 bg-surface-elevated text-xs font-black text-ink/40 group-open:border-accent/40 group-open:text-accent-light group-open:bg-accent-muted transition-all">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <span className="flex shrink-0 h-11 w-11 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20 transition-transform group-hover:scale-105">
                  {serviceIcons[service.id] ?? <Globe size={20} />}
                </span>

                {/* Title + pitch preview */}
                <span className="flex-1 min-w-0">
                  <span className="block text-base font-bold text-ink group-hover:text-white transition-colors">
                    {service.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink/45 group-open:hidden line-clamp-1">
                    {service.pitch}
                  </span>
                </span>

                {/* Toggle icon */}
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-ink/40 transition-all group-open:rotate-45 group-open:border-accent/40 group-open:text-accent-light group-open:bg-accent-muted">
                  <Plus size={16} />
                </span>
              </summary>

              {/* Expanded content */}
              <div className="mx-6 mb-6 rounded-xl border border-white/6 bg-surface-card/90 p-5.5 animate-fade-up">
                <p className="mb-4 text-sm leading-[1.85] text-ink/70">{service.pitch}</p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-white/5">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
                      Technologies & Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/8 bg-surface-elevated px-3 py-1 text-xs font-medium text-ink/55 transition-colors hover:border-accent/30 hover:text-accent-light"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="btn-ghost shrink-0 text-xs py-2 px-4 self-start sm:self-auto"
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
