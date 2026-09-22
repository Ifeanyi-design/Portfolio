import { Trophy, ArrowUpRight } from 'lucide-react';
import { recognitions } from '../data/recognition';
import SectionHeading from './SectionHeading';

/**
 * Recognition — factual and restrained. No confetti, no oversized trophy
 * graphics: the award text carries the weight. Team results are attributed
 * to the team, and each card links back to the project it came from.
 */
export default function Recognition() {
  return (
    <section id="recognition" className="relative py-24" aria-labelledby="recognition-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        <SectionHeading
          eyebrow="Recognition"
          titleId="recognition-heading"
          title={<>Competitions & <span className="text-gradient">Results</span></>}
          subtitle="Two team competitions in 2026. Both results belong to the team — the roles are stated as they actually were."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {recognitions.map((entry) => (
            <article key={entry.id} className="card flex flex-col p-6 sm:p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-muted text-accent-light">
                  <Trophy size={19} />
                </span>
                <span className="chip-accent shrink-0">{entry.year}</span>
              </div>

              <p className="text-lg font-black leading-snug text-gradient">{entry.award}</p>

              <h3 className="mt-3 text-sm font-bold leading-snug text-ink">{entry.event}</h3>
              <p className="mt-1 text-xs font-semibold text-ink/45">Project: {entry.project}</p>

              <p className="mt-4 text-sm leading-[1.8] text-ink/55">{entry.context}</p>

              {entry.projectId && (
                <a
                  href="#work"
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-accent-light transition-colors hover:text-ink"
                >
                  See the project card <ArrowUpRight size={13} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
