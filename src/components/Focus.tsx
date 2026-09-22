import { focusAreas } from '../data/skills';
import SectionHeading from './SectionHeading';

/**
 * "Currently building" — compact, and honest about the level: this is active
 * engineering practice and growth, not a claim of senior expertise. The skill
 * levels live in the Skills section; this section says where the effort is going.
 */
export default function Focus() {
  return (
    <section id="focus" className="relative py-24" aria-labelledby="focus-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        <SectionHeading
          eyebrow="Current Focus"
          titleId="focus-heading"
          title={<>What I'm <span className="text-gradient">Building Now</span></>}
          subtitle="The areas I am actively practising in. These are working skills I keep pushing on, not claims of expertise."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <li key={area.id} className="card p-5 sm:p-6">
              <h3 className="text-sm font-bold text-ink">{area.title}</h3>
              <p className="mt-2 text-xs leading-[1.75] text-ink/50">{area.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
