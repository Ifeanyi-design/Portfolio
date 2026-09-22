import type { ReactNode } from 'react';

interface Props {
  /** Small uppercase kicker above the title */
  eyebrow: string;
  /** Section title — wrap the emphasised word in <span className="text-gradient"> */
  title: ReactNode;
  subtitle?: string;
  /** Set when the section's aria-labelledby should point at this heading */
  titleId?: string;
  /** Optional CTA rendered to the right on wide screens */
  action?: ReactNode;
}

/**
 * One section header for the whole site, so every section keeps the same
 * eyebrow / title / subtitle rhythm without duplicating markup.
 */
export default function SectionHeading({ eyebrow, title, subtitle, titleId, action }: Props) {
  return (
    <div
      className={
        action
          ? 'mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'
          : 'mb-12 max-w-2xl'
      }
    >
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
          {eyebrow}
        </p>
        <h2 id={titleId} className="text-4xl font-black leading-tight sm:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm leading-[1.8] text-ink/50">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}
