import { useState, type FormEvent } from 'react';
import { Mail, MapPin, GitFork, Link2, MessageCircle, Send, ArrowUpRight, Copy, Check, Clock } from 'lucide-react';
import { site } from '../data/site';

const inputCls =
  'w-full rounded-xl border border-white/8 bg-surface-elevated px-4 py-3.5 text-sm text-ink placeholder:text-ink/25 outline-none transition-all duration-200 focus:border-accent/60 focus:ring-2 focus:ring-accent/20 focus:bg-surface-card';

const socialIcon: Record<string, React.ReactNode> = {
  GitHub:    <GitFork size={16} />,
  LinkedIn:  <Link2 size={16} />,
  WhatsApp:  <MessageCircle size={16} />,
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const sub  = encodeURIComponent(`Project enquiry from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`Hi Ifeanyi,\n\n${message}\n\n— ${name}\nReply to: ${email}`);
    window.location.href = `mailto:${site.email}?subject=${sub}&body=${body}`;
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(site.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">

      {/* Bottom ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[550px]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 115%, rgba(99,102,241,0.22) 0%, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Hero CTA banner */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-accent/25 bg-surface-card dot-grid p-8 sm:p-14 shadow-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, transparent 60%)' }}
          />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok/10 px-3 py-1 text-xs font-semibold text-ok mb-4">
                <Clock size={12} />
                <span>Typical response: Under 4 hours</span>
              </div>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Have a project <span className="text-gradient">in mind?</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-[1.8] text-ink/60">
                Whether you're looking for full-stack web applications, AI automation, or dedicated engineering support, let's build something exceptional.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary shimmer-badge">
                Email Directly <ArrowUpRight size={15} />
              </a>
              {site.socials.filter(s => s.label === 'WhatsApp').map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle size={15} className="text-emerald-400" /> WhatsApp
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Info Cards + Contact Form */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">

          {/* ── Direct Contact Details ── */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              Direct Channels
            </p>
            <h3 className="mb-6 text-2xl font-bold text-ink">Get in touch directly</h3>

            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="card group flex items-center justify-between p-4 hover:border-accent/35 transition-all">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3.5 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20">
                    <Mail size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink/35 mb-0.5">Email Address</p>
                    <p className="truncate text-sm font-semibold text-ink/80 group-hover:text-accent-light transition-colors">
                      {site.email}
                    </p>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-ink/50 hover:border-accent/40 hover:text-accent-light hover:bg-white/5 transition-colors cursor-pointer shrink-0 ml-2"
                >
                  {copiedEmail ? <Check size={14} className="text-ok" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="card flex items-center gap-3.5 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20">
                  <MapPin size={17} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink/35 mb-0.5">Base Location</p>
                  <p className="text-sm font-semibold text-ink/80">{site.location}</p>
                </div>
              </div>

              {/* Social Links */}
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-3.5 p-4 hover:border-accent/35 transition-all"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20">
                    {socialIcon[s.label] ?? <ArrowUpRight size={17} />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink/35 mb-0.5">{s.label}</p>
                    <p className="truncate text-sm font-semibold text-ink/80 group-hover:text-accent-light transition-colors">
                      {s.href.replace(/^https?:\/\/(www\.)?/, '')}
                    </p>
                  </div>
                  <ArrowUpRight size={14} className="text-ink/30 group-hover:text-accent-light transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Message Form ── */}
          <form onSubmit={handleSubmit} className="card p-7 sm:p-8 flex flex-col gap-5 shadow-xl">
            <div>
              <h4 className="text-base font-bold text-ink">Send a Direct Message</h4>
              <p className="text-xs text-ink/40 mt-1">Fill out the details below and it will open directly in your mail client.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/50">
                Your Name
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                  placeholder="e.g. Alex Morgan"
                  autoComplete="name"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/50">
                Your Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                  placeholder="alex@company.com"
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/50">
              Project Description / Message
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputCls} resize-y`}
                placeholder="What are you building? What is your timeline and budget?"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">
              <p className="text-xs text-ink/30">
                Direct mail client link — safe and private.
              </p>
              <button type="submit" className="btn-primary shimmer-badge shrink-0 text-sm py-3 px-6">
                Send Message <Send size={14} />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
