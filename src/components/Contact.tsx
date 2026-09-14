import { useState, type FormEvent } from 'react';
import { Mail, MapPin, GitFork, Link2, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

const inputCls =
  'w-full rounded-xl border border-white/8 bg-surface-elevated px-4 py-3 text-sm text-ink placeholder:text-ink/25 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-surface-card';

const socialIcon: Record<string, React.ReactNode> = {
  GitHub:    <GitFork size={16} />,
  LinkedIn:  <Link2 size={16} />,
  WhatsApp:  <MessageCircle size={16} />,
};

export default function Contact() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const sub  = encodeURIComponent(`Project enquiry from ${name || 'your website'}`);
    const body = encodeURIComponent(`Hi Ifeanyi,\n\n${message}\n\n— ${name}\nReply to: ${email}`);
    window.location.href = `mailto:${site.email}?subject=${sub}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-24">

      {/* Bottom page glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(99,102,241,0.18) 0%, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Hero CTA banner */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-accent/20 bg-surface-card dot-grid p-10 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, transparent 60%)' }}
          />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
                Let's Work Together
              </p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Have a project{' '}
                <span className="text-gradient">in mind?</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-[1.8] text-ink/50">
                I reply to every message within 24 hours. Let's build something great.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary">
                Email Me <ArrowUpRight size={15} />
              </a>
              {site.socials.filter(s => s.label === 'WhatsApp').map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="btn-ghost">
                  <MessageCircle size={15} /> WhatsApp
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Info + Form */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">

          {/* ── Contact info ── */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              Direct Contact
            </p>
            <h3 className="mb-6 text-2xl font-bold text-ink">Reach out directly</h3>

            <div className="space-y-3">
              {/* Email */}
              <a href={`mailto:${site.email}`}
                 className="card group flex items-center gap-4 p-4 hover:border-accent/30">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent-light">
                  <Mail size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink/30 mb-0.5">Email</p>
                  <p className="truncate text-sm font-medium text-ink/70 group-hover:text-accent-light transition-colors">
                    {site.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="card flex items-center gap-4 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent-light">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink/30 mb-0.5">Location</p>
                  <p className="text-sm font-medium text-ink/70">{site.location}</p>
                </div>
              </div>

              {/* Socials */}
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="card group flex items-center gap-4 p-4 hover:border-accent/30">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent-light">
                    {socialIcon[s.label] ?? <ArrowUpRight size={16} />}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink/30 mb-0.5">{s.label}</p>
                    <p className="truncate text-sm font-medium text-ink/70 group-hover:text-accent-light transition-colors">
                      {s.href.replace(/^https?:\/\/(www\.)?/, '')}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} className="card p-7 sm:p-8 flex flex-col gap-5">
            <p className="text-sm font-semibold text-ink/40">
              Or send me a message ↓
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/45">
                Your Name
                <input type="text" required value={name}
                       onChange={e => setName(e.target.value)}
                       className={inputCls} placeholder="Ade Okon" autoComplete="name" />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/45">
                Your Email
                <input type="email" required value={email}
                       onChange={e => setEmail(e.target.value)}
                       className={inputCls} placeholder="you@example.com" autoComplete="email" />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/45">
              Your Message
              <textarea required rows={5} value={message}
                        onChange={e => setMessage(e.target.value)}
                        className={`${inputCls} resize-y`}
                        placeholder="What are you building? What problem should it solve?" />
            </label>
            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="text-xs text-ink/25">Opens your email app — no data stored here.</p>
              <button type="submit" className="btn-primary shrink-0 text-sm py-3">
                Send Message <Send size={14} />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
