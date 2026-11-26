import GradientWaves from '@/components/GradientWaves';
import { CheckIcon, GlobeIcon } from './icons';
import { StatCounter } from './StatCounter';
import { FeaturedProject } from './FeaturedProject';
import { contactLinks, isExternal } from '@/data/links';

const achievements = [
  { icon: CheckIcon, title: 'First Class Honours', subtitle: 'B.Sc. in Software Engineering' },
  { icon: GlobeIcon, title: 'Fortune 100 Experience', subtitle: "Sysco - World's largest food-service provider" },
] as const;

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GradientWaves
          horizonColor="#5b8dff"
          waveColor="#b25cff"
          crestColor="#f4f5fb"
          speed={0.3}
          amplitude={2}
          waveScale={0.55}
          swell={30}
          turbulence={16}
          height={5.5}
          fogDepth={16}
          brightness={0.95}
          opacity={0.85}
          mouseInteraction
          parallaxStrength={0.4}
          grain
          grainIntensity={0.05}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 md:grid-cols-[1.05fr_1fr] md:items-center md:px-10 md:pt-28">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple before:shadow-[0_0_8px_rgba(178,92,255,0.5)]">
            Open to Full-Time Roles in Singapore
          </span>
          <h1 className="font-heading text-5xl font-semibold leading-[1.08] md:text-[54px]">
            Hi, I'm Nuwan — <span className="grad-text">Full-Stack Software Engineer</span>
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            I design and ship enterprise-scale, microservices-based applications with Java, Spring Boot, and React —
            5+ years building systems that run real warehouse operations for thousands of users.
          </p>
          <div className="flex flex-wrap gap-3.5 pt-1">
            <a
              href="/Nuwan_Alawatta_CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cosmic-blue to-cosmic-purple px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_-8px_rgba(178,92,255,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white/[0.03] px-6 py-3.5 text-sm font-bold transition-colors hover:border-cosmic-blue/60"
            >
              View Projects
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={isExternal(href) ? '_blank' : undefined}
                rel={isExternal(href) ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-cosmic-blue/60 hover:text-foreground"
              >
                <Icon width={16} height={16} className="text-cosmic-blue" />
                {label}
              </a>
            ))}
          </div>
          <div className="flex gap-8 pt-4">
            <StatCounter target={5} label="Years Experience" />
            <StatCounter target={10} label="Enterprise Projects Delivered" />
          </div>
        </div>

        <div className="relative flex flex-col gap-4">
          <div className="absolute right-0 top-4 h-44 w-44 animate-[spin_11s_linear_infinite] rounded-full">
            <div className="absolute inset-0 rounded-full border border-dashed border-border" />
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cosmic-blue shadow-[0_0_14px_4px_rgba(91,141,255,0.35)]" />
          </div>

          {/* Swap in <HeroTerminal /> here to bring the terminal back. */}
          <div className="relative h-[370px]">
            <FeaturedProject />
          </div>

          <div className="relative grid gap-3 sm:grid-cols-2">
            {achievements.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-cosmic-blue to-cosmic-purple">
                  <Icon width={18} height={18} stroke="#fff" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-heading text-base font-bold leading-tight">{title}</div>
                  <div className="text-xs text-muted-foreground">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
