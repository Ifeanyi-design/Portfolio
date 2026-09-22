import { MessageCircle, FileCheck2, Hammer, Rocket, Check } from 'lucide-react';

/**
 * Process section — for the client-side visitor who is deciding whether
 * commissioning a developer is risky. It answers "what actually happens if I
 * message this person?" before they have to ask. Kept deliberately secondary:
 * it sits below the professional content, not above it.
 */
const steps = [
  {
    icon: MessageCircle,
    title: 'Free intro conversation',
    desc: 'You describe what the product needs in plain language — by message or call, whichever suits you. No jargon, no obligation, no charge.',
  },
  {
    icon: FileCheck2,
    title: 'Fixed scope & price',
    desc: 'You get a written plan — what is being built, what it costs, and when it lands — before any code is written.',
  },
  {
    icon: Hammer,
    title: 'Build in weekly milestones',
    desc: 'You see working progress every week on a private link, so there are no surprises at the end.',
  },
  {
    icon: Rocket,
    title: 'Launch & handover',
    desc: 'I deploy it, hand over the source code, document it, and stay available after launch.',
  },
] as const;

const included = [
  'Written scope before payment',
  'Source code you own outright',
  'Deployment handled for you',
  'Documentation & handover',
  'Post-launch support window',
] as const;

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
            For Client Work
          </p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            How a project <span className="text-gradient">actually runs</span>
          </h2>
          <p className="mt-4 text-sm leading-[1.85] text-ink/55">
            If you are commissioning work rather than hiring me onto a team, here is exactly what
            happens from first message to launch — so there is nothing left to guess at.
          </p>
        </div>

        {/* Steps */}
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="card relative flex flex-col p-6 hover:border-accent/35 transition-all">
              {/* Step number */}
              <span
                aria-hidden
                className="absolute right-5 top-4 text-4xl font-black leading-none text-white/[0.055] select-none"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20">
                <Icon size={19} />
              </span>

              <h3 className="text-sm font-bold text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-[1.75] text-ink/50">{desc}</p>
            </li>
          ))}
        </ol>

        {/* What every engagement includes */}
        <div className="card mt-8 flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
              Included in every project
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs font-medium text-ink/65">
                  <Check size={14} className="mt-0.5 shrink-0 text-ok" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a href="#contact" className="btn-primary shrink-0 justify-center text-sm py-3 px-6">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
