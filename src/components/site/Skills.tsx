import type { SVGProps } from 'react';
import { CompassIcon, MonitorIcon, CodeIcon, DatabaseIcon, CloudIcon, SparkleIcon } from './icons';
import { TechIcon, type TechIconName } from './tech-icons';

type Skill = { name: string; icon?: TechIconName };
type CategoryIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

const categories: { title: string; icon: CategoryIcon; accent: 'blue' | 'purple'; skills: Skill[] }[] = [
  {
    title: 'Concepts & Practices',
    icon: CompassIcon,
    accent: 'blue',
    skills: [
      { name: 'OOP' },
      { name: 'SOLID' },
      { name: 'Clean Code' },
      { name: 'RESTful APIs' },
      { name: 'Microservices' },
      { name: 'TDD' },
      { name: 'Cloud Native' },
    ],
  },
  {
    title: 'Frontend',
    icon: MonitorIcon,
    accent: 'purple',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'Redux', icon: 'redux' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Jest', icon: 'jest' },
    ],
  },
  {
    title: 'Backend',
    icon: CodeIcon,
    accent: 'blue',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'Spring Boot', icon: 'springBoot' },
      { name: 'JPA / Hibernate', icon: 'hibernate' },
      { name: 'REST APIs' },
      { name: 'Microservices' },
      { name: 'IBM MQ' },
      { name: 'Apache Kafka', icon: 'apacheKafka' },
      { name: 'GraphQL', icon: 'graphql' },
    ],
  },
  {
    title: 'Databases',
    icon: DatabaseIcon,
    accent: 'purple',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Oracle' },
      { name: 'PL/SQL' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudIcon,
    accent: 'blue',
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'GitHub Actions', icon: 'githubActions' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Git', icon: 'git' },
      { name: 'DataDog', icon: 'datadog' },
    ],
  },
  {
    title: 'AI & Agent Tooling',
    icon: SparkleIcon,
    accent: 'purple',
    skills: [
      { name: 'Claude', icon: 'claude' },
      { name: 'MCP', icon: 'modelContextProtocol' },
      { name: 'Cursor', icon: 'cursor' },
      { name: 'GitHub Copilot', icon: 'githubCopilot' },
      { name: 'LM Studio', icon: 'lmStudio' },
      { name: 'Ollama', icon: 'ollama' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto mb-14 flex max-w-xl flex-col items-center gap-3.5 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
          Skills
        </span>
        <h2 className="font-heading text-4xl font-semibold">What I Work With</h2>
        <p className="text-muted-foreground">
          Full-stack, end to end — from database schema to deployed microservice.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ title, icon: Icon, accent, skills }) => (
          <div
            key={title}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cosmic-blue/50 hover:shadow-[0_20px_45px_-25px_rgba(178,92,255,0.35)]"
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border"
              style={{
                background: accent === 'blue' ? 'linear-gradient(135deg, rgba(91,141,255,0.16), rgba(178,92,255,0.08))' : 'linear-gradient(135deg, rgba(178,92,255,0.16), rgba(91,141,255,0.08))',
                borderColor: 'var(--border-strong, rgba(255,255,255,0.16))',
                color: accent === 'blue' ? 'var(--cosmic-blue)' : 'var(--cosmic-purple)',
              }}
            >
              <Icon />
            </div>
            <h3 className="font-heading text-lg font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {icon && <TechIcon name={icon} size={14} />}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
