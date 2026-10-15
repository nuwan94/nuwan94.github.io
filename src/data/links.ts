import type { ComponentType, SVGProps } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/site/icons';

export type ContactLink = {
  label: string;
  href: string;
  display: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const contactLinks: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/nuwan94', display: 'github.com/nuwan94', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nsa94', display: 'linkedin.com/in/nsa94', Icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:nuwansalawatta@gmail.com', display: 'nuwansalawatta@gmail.com', Icon: MailIcon },
];

export const isExternal = (href: string) => href.startsWith('http');
