import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import SectionHeading from './SectionHeading';

/**
 * Education — deliberately compact. The point is that a recruiter sees
 * "Computer Science student" immediately; the section does not need to be large.
 * No graduation year is claimed, only the confirmed current status.
 */
export default function Education() {
  return (
    <section id="education" className="relative py-24" aria-labelledby="education-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        <SectionHeading
          eyebrow="Education"
          titleId="education-heading"
          title={<>Academic <span className="text-gradient">Background</span></>}
        />

        <div className="card p-7 sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-muted text-accent-light">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{education.qualification}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-light">{education.institution}</p>
                <p className="mt-3 max-w-xl text-sm leading-[1.8] text-ink/55">{education.note}</p>
              </div>
            </div>

            <span className="chip-accent shrink-0 self-start">{education.status}</span>
          </div>

          <div className="mt-7 border-t border-surface-border pt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
              Relevant Areas
            </p>
            <div className="flex flex-wrap gap-1.5">
              {education.areas.map((area) => (
                <span key={area} className="chip">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
