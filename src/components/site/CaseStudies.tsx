import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { TechIconTooltip, techLabels } from './tech-icons';
import { ArrowRightIcon } from './icons';

export function CaseStudies({ limit, standalone }: { limit?: number; standalone?: boolean }) {
  const shown = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="projects"
      className={`relative flex flex-col gap-16 px-6 py-24 md:px-10 ${standalone ? '' : 'border-t border-border'}`}
    >
      <div className="mx-auto flex flex-col items-center gap-3.5 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
          Projects
        </span>
        <h2 className="font-heading text-4xl font-semibold">Things I've Shipped</h2>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        {shown.map((p, i) => (
          <div key={p.headline} className={`flex flex-col items-center gap-10 md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className={`relative h-[280px] flex-1 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${p.from}`}>
              {p.video && (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
              <div
                className={`absolute inset-0 opacity-50 ${p.video ? 'mix-blend-overlay' : ''}`}
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
              />
              {p.video && <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />}
              <div className="absolute bottom-6 left-7 flex flex-col gap-1">
                <span className="grad-text font-heading text-4xl font-bold leading-none">{p.stat}</span>
                <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{p.statLabel}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{p.tag}</span>
              <h3 className="font-heading text-2xl font-semibold">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-cosmic-blue">
                    {p.headline}
                  </a>
                ) : (
                  p.headline
                )}
              </h3>
              <p className="text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {p.tech.map((name) => (
                  <TechIconTooltip key={name} name={name} label={techLabels[name]} size={20} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && projects.length > limit && (
        <Link
          to="/projects"
          className="mx-auto inline-flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-6 py-3.5 text-sm font-bold transition-colors hover:border-cosmic-blue/60"
        >
          Show More Projects
          <ArrowRightIcon width={16} height={16} />
        </Link>
      )}
    </section>
  );
}
