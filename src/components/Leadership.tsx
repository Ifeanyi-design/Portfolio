import { Users, HeartHandshake } from 'lucide-react';
import { leadership } from '../data/experience';
import SectionHeading from './SectionHeading';

/**
 * Leadership / team collaboration.
 *
 * The distinction that matters to a recruiter is "has worked inside a team on
 * a shared codebase" versus "only ever coded alone" — so this section leads
 * with the collaborative engineering work rather than with titles.
 */
export default function Leadership() {
  const [primary, ...rest] = leadership;

  return (
    <section id="leadership" className="relative py-24" aria-labelledby="leadership-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        <SectionHeading
          eyebrow="Team & Leadership"
          titleId="leadership-heading"
          title={<>Working With <span className="text-gradient">Teams</span></>}
          subtitle="A good part of my engineering happens with other people — shared codebases, shared decisions, and shipping together under a deadline."
        />

        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr] lg:items-start">

          {/* Primary team role */}
          {primary && (
            <article className="card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-muted text-accent-light">
                    <Users size={19} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{primary.organisation}</h3>
                    {primary.role && (
                      <p className="mt-0.5 text-sm font-semibold text-accent-light">{primary.role}</p>
                    )}
                  </div>
                </div>
                <span className="chip-accent shrink-0">{primary.period}</span>
              </div>

              <p className="mt-5 text-sm leading-[1.8] text-ink/55">{primary.summary}</p>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-surface-border pt-5">
                {primary.themes.map((theme) => (
                  <span key={theme} className="chip">{theme}</span>
                ))}
              </div>
            </article>
          )}

          {/* Secondary community involvement — no title is claimed */}
          <div className="space-y-5">
            {rest.map((entry) => (
              <article key={entry.id} className="card p-6">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-surface-elevated text-ink/50">
                    <HeartHandshake size={17} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{entry.organisation}</h3>
                    {entry.role && (
                      <p className="mt-0.5 text-xs font-semibold text-accent-light">{entry.role}</p>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-xs leading-[1.75] text-ink/50">{entry.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {entry.themes.map((theme) => (
                    <span key={theme} className="chip">{theme}</span>
                  ))}
                </div>
              </article>
            ))}

            {/* What this section is really saying.
                Deliberately NOT using `.card` here: `.card` sets bg-surface-card and is
                emitted after the background and border utilities, so the accent tint
                below would silently lose. Same pattern as the About pull quote. */}
            <div className="rounded-2xl border border-accent/25 bg-accent-muted p-6">
              <p className="text-xs leading-[1.8] text-ink/70">
                Both competitions below were team efforts. IntelliCT and PadeeSpace were built
                by a group, and my role on each is stated on the project card — I did not build
                either of them alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
