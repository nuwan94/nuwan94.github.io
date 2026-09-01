const roles = [
  {
    role: 'Software Engineer',
    company: 'Cut+Dry Inc',
    location: 'Palo Alto, CA (Remote)',
    period: 'Jan 2026 – Present',
    bullets: [
      'Re-architecting core application workflows and microservices to optimize structure and minimize tech debt.',
      'Refactoring backend API contracts using Spring Boot and JPA for performance and maintainability.',
    ],
  },
  {
    role: 'Associate Technical Lead',
    company: 'Sysco LABS Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'Aug 2024 – Dec 2025',
    bullets: [
      'Designed end-to-end labor management features for warehouse operations using React, Redux, TypeScript, and Spring Boot microservices.',
      'Implemented CI/CD pipelines with Jenkins, Docker, GitHub Actions, and Terraform — cutting deployment errors by 90% and release cycles by 50%.',
      'Mentored 3–4 engineers on clean API integration patterns, RBAC enforcement, and enterprise React practices.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Sysco LABS Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'Aug 2022 – Aug 2024',
    bullets: [
      'Developed microservices and REST APIs with Spring Boot and JPA, powering operations for 1,000+ warehouse operators.',
      'Optimized complex SQL queries in PostgreSQL/Oracle, cutting heavy task execution from minutes to under 30 seconds.',
      'Built shared React component libraries, reducing frontend development timelines by 80%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Sysco LABS Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'Jul 2021 – Aug 2022',
    bullets: [
      'Engineered responsive React frontends connected to secure Spring Boot REST APIs during legacy system migrations.',
      'Improved reliability through optimized state management, error handling, and SQL query tuning.',
    ],
  },
  {
    role: 'Trainee Associate Software Engineer',
    company: 'Zone24x7 Inc',
    location: 'Colombo, Sri Lanka',
    period: 'Jul 2019 – Mar 2020',
    bullets: [
      'Built an internal code-quality dashboard (Spring Boot, Kotlin, Angular, PostgreSQL), reducing unresolved code smells by 50% in three months.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto mb-14 flex max-w-xl flex-col items-center gap-3.5 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
          Experience
        </span>
        <h2 className="font-heading text-4xl font-semibold">Where I've Worked</h2>
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col">
        <div className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-purple/20" />
        {roles.map((r, i) => (
          <div key={i} className="relative flex gap-6 pb-12 last:pb-0">
            <span
              className="z-10 mt-1.5 h-[18px] w-[18px] flex-shrink-0 rounded-full border-2 bg-background"
              style={{
                borderColor: i === 0 ? 'var(--cosmic-blue)' : 'var(--cosmic-purple)',
                boxShadow: `0 0 12px ${i === 0 ? 'rgba(91,141,255,0.4)' : 'rgba(178,92,255,0.3)'}`,
              }}
            />
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-semibold">
                  {r.role} <span className="text-muted-foreground">&middot; {r.company}</span>
                </h3>
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-cosmic-blue">{r.period}</span>
              </div>
              <span className="text-xs text-muted-foreground/70">{r.location}</span>
              <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                {r.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
