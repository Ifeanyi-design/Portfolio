import { Check, ArrowUpRight, Mail } from 'lucide-react';
import { opportunities } from '../data/opportunities';
import { site } from '../data/site';
import SectionHeading from './SectionHeading';

/**
 * "What I'm looking for" — an availability statement, not a demand list.
 * It sits after the professional content and before contact so the page reads
 * as credible first and available second.
 */
export default function Opportunity() {
  return (
    <section id="opportunities" className="relative py-24" aria-labelledby="opportunities-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        <div className="card dot-grid relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.10) 0%, transparent 60%)' }}
          />

          <div className="relative">
            <SectionHeading
              eyebrow="What I'm Looking For"
              titleId="opportunities-heading"
              title={<>Open to <span className="text-gradient">opportunities</span></>}
              subtitle="Open to IT placements, internships, software engineering roles and AI-focused opportunities where I can contribute and keep growing."
            />

            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <Check size={15} className="mt-0.5 shrink-0 text-ok" />
                  <span>
                    <span className="block text-sm font-semibold text-ink/80">{item.label}</span>
                    <span className="mt-0.5 block text-xs leading-[1.6] text-ink/40">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-4 border-t border-surface-border pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-[1.75] text-ink/45">
                Not on the list? If it is software or AI work, I am interested — the list above is
                what I am actively targeting, not a limit.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a href="#contact" className="btn-primary text-sm py-3 px-6">
                  Get in touch <ArrowUpRight size={15} />
                </a>
                <a href={`mailto:${site.email}`} className="btn-ghost text-sm py-3 px-6">
                  <Mail size={15} /> Email directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
