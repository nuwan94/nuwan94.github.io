import { useState } from 'react';
import BorderGlow from '@/components/BorderGlow';
import { projects, linkLabel, type Project } from '@/data/projects';
import { TechIconTooltip, techLabels } from './tech-icons';
import { ArrowRightIcon, ShuffleIcon } from './icons';

// Only projects with something to link to (a live demo or repo), so the card
// always has a "See demo" / "View on GitHub" link.
const pool = projects.filter((p) => p.link);

// Random pick, never the one currently shown (so Shuffle always changes it).
const pickRandom = (exclude?: Project) => {
  const options = pool.filter((p) => p !== exclude);
  return options[Math.floor(Math.random() * options.length)];
};

export function FeaturedProject() {
  const [p, setP] = useState(() => pickRandom());

  return (
    <BorderGlow
      backgroundColor="#0d0f1c"
      borderRadius={17}
      glowColor="265 90% 70%"
      colors={['#5b8dff', '#b25cff', '#5b8dff']}
      animated
      glowIntensity={1.1}
      // BorderGlow's inner wrapper is overflow:auto (flashes a scrollbar) and
      // has square corners (the video pokes out past the card's rounded border).
      // Its stylesheet is unlayered, so plain Tailwind utilities can't override
      // it: needs `!`.
      className="h-full w-full [&_.border-glow-inner]:overflow-hidden! [&_.border-glow-inner]:rounded-[16px]!"
    >
      <div className="relative h-full">
        <div
          key={p.headline}
          className="flex h-full flex-col overflow-hidden"
          style={{ animation: 'fadeIn 0.4s ease-out' }}
        >
          <div className={`relative min-h-0 flex-1 bg-gradient-to-br ${p.from}`}>
            {p.video && (
              <video className="absolute inset-0 h-full w-full object-cover" src={p.video} autoPlay muted loop playsInline />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            <div className="absolute bottom-4 left-5 flex flex-col gap-1">
              <span className="grad-text font-heading text-3xl font-bold leading-none">{p.stat}</span>
              <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{p.statLabel}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 p-5">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
              Featured Project · {p.tag}
            </span>
            <h3 className="font-heading text-xl font-semibold">{p.headline}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                {p.tech.map((name) => (
                  <TechIconTooltip key={name} name={name} label={techLabels[name]} size={18} />
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cosmic-blue transition-colors hover:text-cosmic-purple"
                >
                  {linkLabel(p.link)}
                  <ArrowRightIcon width={14} height={14} className="-rotate-45" />
                </a>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setP(pickRandom(p))}
          aria-label="Show another random project"
          className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-xs font-bold text-foreground backdrop-blur transition-colors hover:border-cosmic-blue/60"
        >
          <ShuffleIcon width={14} height={14} />
          Shuffle
        </button>
      </div>
    </BorderGlow>
  );
}
