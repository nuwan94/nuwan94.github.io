import LogoLoop from '@/components/LogoLoop';
import { TechIconTooltip, type TechIconName } from './tech-icons';

const stack: { name: TechIconName; label: string }[] = [
  { name: 'java', label: 'Java' },
  { name: 'springBoot', label: 'Spring Boot' },
  { name: 'react', label: 'React' },
  { name: 'typescript', label: 'TypeScript' },
  { name: 'nextjs', label: 'Next.js' },
  { name: 'redux', label: 'Redux' },
  { name: 'postgresql', label: 'PostgreSQL' },
  { name: 'aws', label: 'AWS' },
  { name: 'docker', label: 'Docker' },
  { name: 'apacheKafka', label: 'Apache Kafka' },
  { name: 'graphql', label: 'GraphQL' },
  { name: 'terraform', label: 'Terraform' },
  { name: 'git', label: 'Git' },
  { name: 'claude', label: 'Claude' },
  { name: 'cursor', label: 'Cursor' },
  { name: 'githubCopilot', label: 'GitHub Copilot' },
];

const logos = stack.map(({ name, label }) => ({
  node: <TechIconTooltip name={name} label={label} size={30} />,
  title: label,
  ariaLabel: label,
}));

export function TechTicker() {
  return (
    <div className="border-t border-border py-10">
      <LogoLoop
        logos={logos}
        speed={70}
        direction="left"
        logoHeight={30}
        gap={64}
        fadeOut
        fadeOutColor="#06070d"
        pauseOnHover
        scaleOnHover
        ariaLabel="Technologies I work with"
      />
    </div>
  );
}
