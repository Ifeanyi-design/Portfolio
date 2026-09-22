import { Building2, CalendarDays } from 'lucide-react';
import { experience, timeline } from '../data/experience';
import SectionHeading from './SectionHeading';

/**
 * Experience + a compact career progression.
 *
 * The progression sits in a full-width grid rather than a narrow side column:
 * with one experience entry beside six milestones the two columns were wildly
 * uneven and left a large dead area on the page. Every period here comes from
 * confirmed information — nothing is dated by guesswork.
 */
export default function Experience() {
  return (
    <section id="experience" className="relative py-24" aria-labelledby="experience-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        <SectionHeading
          eyebrow="Experience"
          titleId="experience-heading"
          title={<>Where I've <span className="text-gradient">Worked</span></>}
          subtitle="Professional experience, plus the progression that led to it — from coursework through to team-based engineering work."
        />

        {/* ── Experience cards ── */}
        <div className="space-y-5">
          {experience.map((entry) => (
            <article key={entry.id} className="card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-muted text-accent-light">
                    <Building2 size={19} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{entry.organisation}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-accent-light">{entry.role}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1.5 sm:items-end">
                  <span className="chip-accent">{entry.type}</span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/40">
                    <CalendarDays size={11} />
                    {entry.period}
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-[1.8] text-ink/55">{entry.summary}</p>

              {entry.points && entry.points.length > 0 && (
                <ul className="mt-4 max-w-3xl space-y-2 text-sm text-ink/60">
                  {entry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-light" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {entry.stack && entry.stack.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-surface-border pt-5">
                  {entry.stack.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* ── Career progression ── */}
        <div className="mt-12">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
            Progression
          </p>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((milestone) => (
              <li key={`${milestone.period}-${milestone.title}`} className="card p-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-accent-light">
                  {milestone.period}
                </p>
                <h3 className="mt-1.5 text-sm font-bold leading-snug text-ink">{milestone.title}</h3>
                <p className="mt-1.5 text-xs leading-[1.7] text-ink/45">{milestone.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
