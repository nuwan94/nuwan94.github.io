import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Full-color technology logos, hotlinked straight from two icon CDNs so
// there's nothing to keep in sync locally:
//  - devicon (https://devicon.dev)      — languages, frameworks, infra
//  - Simple Icons (https://simpleicons.org) — AI/agent tooling devicon doesn't have yet
const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';

const devicon = (slug: string) => `${DEVICON_CDN}/${slug}.svg`;
// Simple Icons ships flat black by default; pass a hex to recolor server-side
// (brand color when it reads on a dark card, white for black/white marks).
const simpleIcon = (slug: string, hex: string) => `${SIMPLE_ICONS_CDN}/${slug}/${hex}`;

export const techIcons = {
  // Languages, frameworks & infra — devicon
  java: devicon('java/java-plain'),
  springBoot: devicon('spring/spring-original'),
  hibernate: devicon('hibernate/hibernate-original'),
  apacheKafka: devicon('apachekafka/apachekafka-original'),
  graphql: devicon('graphql/graphql-plain'),
  react: devicon('react/react-original'),
  redux: devicon('redux/redux-original'),
  typescript: devicon('typescript/typescript-original'),
  javascript: devicon('javascript/javascript-original'),
  nextjs: devicon('nextjs/nextjs-original'),
  nodejs: devicon('nodejs/nodejs-original'),
  express: devicon('express/express-original'),
  tailwindcss: devicon('tailwindcss/tailwindcss-original'),
  html5: devicon('html5/html5-original'),
  css3: devicon('css3/css3-original'),
  jest: devicon('jest/jest-plain'),
  postgresql: devicon('postgresql/postgresql-original'),
  mysql: devicon('mysql/mysql-original'),
  redis: devicon('redis/redis-original'),
  aws: devicon('amazonwebservices/amazonwebservices-original-wordmark'),
  docker: devicon('docker/docker-original'),
  terraform: devicon('terraform/terraform-original'),
  githubActions: devicon('githubactions/githubactions-original'),
  jenkins: devicon('jenkins/jenkins-original'),
  git: devicon('git/git-original'),
  datadog: devicon('datadog/datadog-original'),
  oracle: devicon('oracle/oracle-original'),
  kotlin: devicon('kotlin/kotlin-original'),
  angular: devicon('angular/angular-original'),
  kubernetes: devicon('kubernetes/kubernetes-plain'),
  vercel: devicon('vercel/vercel-original'),
  cloudflare: devicon('cloudflare/cloudflare-original'),
  grafana: devicon('grafana/grafana-original'),
  kafka: devicon('apachekafka/apachekafka-original'),
  php: devicon('php/php-original'),
  apollographql: devicon('apollographql/apollographql-original'),
  circleci: devicon('circleci/circleci-plain'),
  antdesign: devicon('antdesign/antdesign-original'),

  // AI & agent tooling — Simple Icons
  claude: simpleIcon('claude', 'D97757'),
  cursor: simpleIcon('cursor', 'ffffff'),
  githubCopilot: simpleIcon('githubcopilot', 'ffffff'),
  modelContextProtocol: simpleIcon('modelcontextprotocol', 'ffffff'),
  lmStudio: simpleIcon('lmstudio', 'ffffff'),
  ollama: simpleIcon('ollama', 'ffffff'),
} as const;

export type TechIconName = keyof typeof techIcons;

// Human-readable label per icon — used for tooltips/aria-labels anywhere a
// TechIconName is displayed without its own hand-written caption.
export const techLabels: Record<TechIconName, string> = {
  java: 'Java',
  springBoot: 'Spring Boot',
  hibernate: 'JPA / Hibernate',
  apacheKafka: 'Apache Kafka',
  graphql: 'GraphQL',
  react: 'React',
  redux: 'Redux',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  nextjs: 'Next.js',
  nodejs: 'Node.js',
  express: 'Express',
  tailwindcss: 'Tailwind CSS',
  html5: 'HTML5',
  css3: 'CSS3',
  jest: 'Jest',
  postgresql: 'PostgreSQL',
  mysql: 'MySQL',
  redis: 'Redis',
  aws: 'AWS',
  docker: 'Docker',
  terraform: 'Terraform',
  githubActions: 'GitHub Actions',
  jenkins: 'Jenkins',
  git: 'Git',
  datadog: 'DataDog',
  oracle: 'Oracle',
  kotlin: 'Kotlin',
  angular: 'Angular',
  kubernetes: 'Kubernetes',
  vercel: 'Vercel',
  cloudflare: 'Cloudflare',
  grafana: 'Grafana',
  kafka: 'Kafka',
  php: 'PHP',
  apollographql: 'Apollo GraphQL',
  circleci: 'CircleCI',
  antdesign: 'Ant Design',
  claude: 'Claude',
  cursor: 'Cursor',
  githubCopilot: 'GitHub Copilot',
  modelContextProtocol: 'MCP',
  lmStudio: 'LM Studio',
  ollama: 'Ollama',
};

export function TechIcon({ name, size = 16, className }: { name: TechIconName; size?: number; className?: string }) {
  return (
    <img
      src={techIcons[name]}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}

// Hover tooltip for icon-only tech stack displays (e.g. the hero LogoLoop
// ticker). Rendered through a portal: the ticker track sits inside an
// `overflow-x: hidden` + `will-change: transform` ancestor, which would
// otherwise clip or mis-position an absolutely/fixed-positioned tooltip.
function Tooltip({ anchor, label }: { anchor: HTMLElement; label: string }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let raf: number;
    const track = () => {
      const r = anchor.getBoundingClientRect();
      setPos({ x: r.left + r.width / 2, y: r.top });
      raf = requestAnimationFrame(track);
    };
    track();
    return () => cancelAnimationFrame(raf);
  }, [anchor]);

  if (!pos) return null;

  return createPortal(
    <span
      role="tooltip"
      className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-[calc(100%+10px)] whitespace-nowrap rounded-md border border-white/10 bg-[#11131f] px-2.5 py-1 text-xs font-medium text-foreground shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
      style={{ left: pos.x, top: pos.y }}
    >
      {label}
    </span>,
    document.body
  );
}

export function TechIconTooltip({ name, label, size = 16 }: { name: TechIconName; label: string; size?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <span
      ref={ref}
      className="inline-flex outline-none"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <TechIcon name={name} size={size} />
      {hovered && ref.current && <Tooltip anchor={ref.current} label={label} />}
    </span>
  );
}
