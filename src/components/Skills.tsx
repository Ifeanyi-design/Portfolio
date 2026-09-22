import { ArrowUpRight } from 'lucide-react';
import { skillGroups } from '../data/skills';
import SectionHeading from './SectionHeading';

/**
 * Grouped skills. This replaces the two scrolling technology marquees that
 * used to repeat the same list twice — the content is identical, but here it
 * is readable, categorised and carries an honest coarse level instead of a
 * fabricated star rating.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative py-24" aria-labelledby="skills-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        <SectionHeading
          eyebrow="Technical Skills"
          titleId="skills-heading"
          title={<>What I <span className="text-gradient">Build With</span></>}
          subtitle="Grouped by how I actually use them. Levels are deliberately coarse — Core, Applied, Working Knowledge — because a star rating would tell you nothing."
          action={
            <a href="#experience" className="btn-ghost shrink-0 text-xs py-2.5">
              See Where I've Worked <ArrowUpRight size={14} />
            </a>
          }
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.id} className="card flex flex-col p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-sm font-bold leading-snug text-ink">{group.title}</h3>
                <span className="chip-accent shrink-0">{group.level}</span>
              </div>

              <p className="mb-5 text-xs leading-[1.75] text-ink/45">{group.note}</p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
