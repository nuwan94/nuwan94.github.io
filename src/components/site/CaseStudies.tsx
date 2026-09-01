const projects = [
  {
    stat: '200+',
    statLabel: 'warehouses',
    tag: 'Sysco LABS · 4 years, ongoing',
    headline: 'SWMS Modernization',
    description:
      'Migrating a legacy Oracle Forms-based Warehouse Management System to Java and React, serving thousands of users across 200+ large-scale warehouses worldwide — managing inventory, orders, returns, and reporting.',
    tech: 'Java 17/21 · Spring Boot · React 16/19 · Redux Toolkit · TypeScript · IBM MQ · Oracle · AWS ECS',
    from: 'from-cosmic-blue/22 to-cosmic-purple/16',
  },
  {
    stat: '80%',
    statLabel: 'faster dev',
    tag: 'Sysco LABS',
    headline: 'SWMS Core UI',
    description:
      'A React component library wrapping Ant Design with a custom theme — standardizing UI across the warehouse management system with an editable data table and an advanced search module, cutting frontend dev time by 80%.',
    tech: 'React · TypeScript · Ant Design · Redux',
    from: 'from-cosmic-purple/22 to-cosmic-blue/16',
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
              <div
                className="absolute inset-0 opacity-50"
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
              />
              <div className="absolute bottom-6 left-7 flex flex-col gap-1">
                <span className="grad-text font-heading text-4xl font-bold leading-none">{p.stat}</span>
                <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{p.statLabel}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{p.tag}</span>
              <h3 className="font-heading text-2xl font-semibold">{p.headline}</h3>
              <p className="text-muted-foreground">{p.description}</p>
              <p className="text-xs text-muted-foreground/70">{p.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
