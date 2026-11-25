import { useState } from 'react';
import BorderGlow from '@/components/BorderGlow';
import { SunsetBand } from './SunsetScene';
import { contactLinks, isExternal } from '@/data/links';

export function Cta() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative isolate grid grid-cols-1 gap-14 overflow-hidden border-t border-border px-6 pb-40 pt-24 md:grid-cols-2 md:items-center md:px-10"
    >
      <SunsetBand />
      <div className="flex flex-col gap-4">
        <span className="eyebrow">
          Let's Talk
        </span>
        <h2 className="font-heading text-4xl font-semibold leading-tight">
          Hiring in Singapore? <span className="grad-text">Let's Connect.</span>
        </h2>
        <p className="max-w-sm text-muted-foreground">
          I'm actively looking for full-time Full-Stack / Backend roles in Singapore. Reach out directly or send a
          message below.
        </p>
        <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
          {contactLinks.map(({ label, href, display }) => (
            <a
              key={label}
              href={href}
              target={isExternal(href) ? '_blank' : undefined}
              rel={isExternal(href) ? 'noreferrer' : undefined}
              className="text-vice-pink hover:text-vice-orange"
            >
              {display}
            </a>
          ))}
        </div>
      </div>

      <BorderGlow
        backgroundColor="#1e0e30"
        borderRadius={17}
        glowColor="335 95% 65%"
        colors={['#ff3d8b', '#ff8a3d', '#2fd6d0']}
        glowIntensity={1}
      >
        <form
          className="flex flex-col gap-3.5 p-7"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground/80">Name</span>
            <input
              required
              type="text"
              placeholder="Your name"
              className="h-11 rounded-lg border border-border bg-secondary px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-vice-pink focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground/80">Email</span>
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-lg border border-border bg-secondary px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-vice-pink focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground/80">Message</span>
            <textarea
              required
              rows={3}
              placeholder="Tell me about the role..."
              className="rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-vice-pink focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-1.5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-vice-pink to-vice-orange px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_26px_-8px_rgba(255,138,61,0.35)] transition-transform hover:-translate-y-0.5"
          >
            {submitted ? 'Thanks — I\'ll be in touch' : 'Send Message'}
          </button>
        </form>
      </BorderGlow>
    </section>
  );
}
