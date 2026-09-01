import { useState } from 'react';
import BorderGlow from '@/components/BorderGlow';

export function Cta() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="grid grid-cols-1 gap-14 border-t border-border bg-gradient-to-b from-transparent to-cosmic-blue/5 px-6 py-24 md:grid-cols-2 md:items-center md:px-10"
    >
      <div className="flex flex-col gap-4">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
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
          <a href="mailto:nuwansalawatta@gmail.com" className="text-cosmic-blue hover:text-cosmic-purple">
            nuwansalawatta@gmail.com
          </a>
          <a href="https://linkedin.com/in/nsa94" target="_blank" rel="noreferrer" className="text-cosmic-blue hover:text-cosmic-purple">
            linkedin.com/in/nsa94
          </a>
          <a href="https://github.com/nuwan94" target="_blank" rel="noreferrer" className="text-cosmic-blue hover:text-cosmic-purple">
            github.com/nuwan94
          </a>
        </div>
      </div>

      <BorderGlow
        backgroundColor="#0d0f1c"
        borderRadius={17}
        glowColor="265 90% 70%"
        colors={['#5b8dff', '#b25cff', '#5b8dff']}
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
              className="h-11 rounded-lg border border-border bg-secondary px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cosmic-blue focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground/80">Email</span>
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-lg border border-border bg-secondary px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cosmic-blue focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground/80">Message</span>
            <textarea
              required
              rows={3}
              placeholder="Tell me about the role..."
              className="rounded-lg border border-border bg-secondary px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cosmic-blue focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-1.5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cosmic-blue to-cosmic-purple px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_26px_-8px_rgba(178,92,255,0.35)] transition-transform hover:-translate-y-0.5"
          >
            {submitted ? 'Thanks — I\'ll be in touch' : 'Send Message'}
          </button>
        </form>
      </BorderGlow>
    </section>
  );
}
