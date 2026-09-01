import swmsVideo from '@/assets/swms-video.mp4';
import coreUiVideo from '@/assets/coreui-video.mp4';
import cutAndDryVideo from '@/assets/cutanddry-video.mp4';
import { TechIconTooltip, techLabels, type TechIconName } from './tech-icons';

const projects: {
  stat: string;
  statLabel: string;
  tag: string;
  headline: string;
  description: string;
  tech: TechIconName[];
  from: string;
  video?: string;
}[] = [
  {
    stat: 'Ongoing',
    statLabel: 'Since Jan 2026',
    tag: 'Cut+Dry Inc',
    headline: 'Cut+Dry',
    description:
      "Contributing to Cut+Dry's core B2B e-commerce platform, connecting foodservice distributors, restaurants, and manufacturers for online ordering, invoicing, and payments. Re-architecting core application workflows and refactoring backend API contracts to reduce tech debt and improve performance and maintainability.",
    tech: ['java', 'springBoot', 'hibernate', 'react', 'graphql', 'apollographql', 'php', 'circleci', 'aws'],
    from: 'from-cosmic-blue/22 to-cosmic-purple/16',
    video: cutAndDryVideo,
  },
  {
    stat: '200+',
    statLabel: 'warehouses',
    tag: 'Sysco LABS',
    headline: 'SWMS Modernization',
    description:
      'Migrating a legacy Oracle Forms-based Warehouse Management System to Java and React, serving thousands of users across 200+ large-scale warehouses worldwide — managing inventory, orders, returns, and reporting.',
    tech: ['java', 'springBoot', 'react', 'redux', 'typescript', 'oracle', 'aws'],
    from: 'from-cosmic-purple/22 to-cosmic-blue/16',
    video: swmsVideo,
  },
  {
    stat: '80%',
    statLabel: 'Developer Experience Improvement',
    tag: 'Sysco LABS',
    headline: 'SWMS Core UI',
    description:
      'A React component library wrapping Ant Design with a custom theme — standardizing UI across the warehouse management system with an editable data table and an advanced search module, cutting frontend dev time by 80%.',
    tech: ['react', 'typescript', 'antdesign', 'redux'],
    from: 'from-cosmic-blue/22 to-cosmic-purple/16',
    video: coreUiVideo,
  },
];

export function CaseStudies() {
  return (
    <section id="projects" className="relative flex flex-col gap-16 border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto flex flex-col items-center gap-3.5 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
          Projects
        </span>
        <h2 className="font-heading text-4xl font-semibold">Things I've Shipped</h2>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        {projects.map((p, i) => (
          <div key={i} className={`flex flex-col items-center gap-10 md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
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
              <h3 className="font-heading text-2xl font-semibold">{p.headline}</h3>
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
    </section>
  );
}
