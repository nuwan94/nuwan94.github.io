import type { TechIconName } from '@/components/site/tech-icons';
import cutAndDryVideo from '@/assets/cutanddry-video.mp4';
import swmsVideo from '@/assets/swms-video.mp4';
import coreUiVideo from '@/assets/coreui-video.mp4';
import planningPokerVideo from '@/assets/planning-poker-video.mp4';
import hotelPmsVideo from '@/assets/hotel-pms-video.mp4';
import ratesVideo from '@/assets/rates-video.mp4';
import devtoolsCover from '@/assets/devtools-cover.png';
import timetableCover from '@/assets/timetable-cover.png';

export type Project = {
  stat: string;
  statLabel: string;
  tag: string;
  headline: string;
  description: string;
  tech: TechIconName[];
  from: string;
  video?: string;
  image?: string;
  link?: string;
};

// Label for a project's external link: repos are "View on GitHub", everything
// else is a live demo.
export const linkLabel = (url: string) =>
  new URL(url).hostname === 'github.com' ? 'View on GitHub' : 'See demo';

// How many projects (from the top of the list) are shown on the home page.
// Everything after this is only on /projects.
export const HOME_PROJECT_LIMIT = 3;

export const projects: Project[] = [
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
  {
    stat: 'Live',
    statLabel: 'Sigiriya, Sri Lanka',
    tag: 'Thalkote Boutique Villas',
    headline: 'Thalkote Villas',
    description:
      'End-to-end platform for a luxury boutique villa resort — a public marketing and booking website, plus a full admin property management system with a live booking engine (room types, rate plans, date/guest search, and checkout).',
    tech: ['nextjs', 'typescript', 'tailwindcss', 'postgresql'],
    from: 'from-cosmic-blue/22 to-cosmic-purple/16',
    video: hotelPmsVideo,
    link: 'https://thalkotevillas.com',
  },
  {
    stat: 'Open Source',
    statLabel: 'Personal project',
    tag: 'Side Project',
    headline: 'Planning Poker',
    description:
      'A real-time collaborative estimation tool for agile teams — synchronized voting over WebSockets, multiple card decks (Fibonacci, T-shirt sizes, Powers of 2), configurable voting timers, and room-based sessions with live reveal/clear, built type-safe end to end.',
    tech: ['react', 'typescript', 'nodejs', 'express', 'socketio', 'tailwindcss'],
    from: 'from-cosmic-purple/22 to-cosmic-blue/16',
    video: planningPokerVideo,
    link: 'https://github.com/nuwan94/planning-poker',
  },
  {
    stat: '30 min',
    statLabel: 'Auto-refresh cycle',
    tag: 'Side Project',
    headline: 'Sri Lanka Bank Rates',
    description:
      'A live comparison of exchange rates across Sri Lankan banks. Python scrapers run on a GitHub Actions schedule every 30 minutes and commit the latest rates, feeding a React dashboard that highlights the best USD buying rate, per-bank trend arrows, and a zoomable historical chart.',
    tech: ['python', 'githubActions', 'react', 'vite', 'chartjs', 'tailwindcss'],
    from: 'from-cosmic-blue/22 to-cosmic-purple/16',
    video: ratesVideo,
    link: 'https://rates.nuwan.dev',
  },
  {
    stat: '24',
    statLabel: 'Tools, all in the browser',
    tag: 'Side Project',
    headline: 'Bytebox Dev Tools',
    description:
      'A playful collection of small developer tools that run entirely in the browser, so nothing you paste is uploaded: JSON formatter, Base64, UUID, regex tester, JWT reader, text diff, SQL formatter, QR codes, and more.',
    tech: ['nextjs', 'react', 'typescript'],
    from: 'from-cosmic-purple/22 to-cosmic-blue/16',
    image: devtoolsCover,
    link: 'https://devtools.nuwan.dev',
  },
  {
    stat: '3',
    statLabel: 'Languages',
    tag: 'Side Project',
    headline: 'School Timetable',
    description:
      'A free timetable maker for Sri Lankan schools. Generates clash-free class and teacher timetables, arranges daily relief cover, plans term tests, and prints sheets in English, Sinhala and Tamil. Private by design: no account, nothing uploaded, works offline.',
    tech: ['react', 'vite'],
    from: 'from-cosmic-blue/22 to-cosmic-purple/16',
    image: timetableCover,
    link: 'https://timetable.nuwan.dev',
  },
];
