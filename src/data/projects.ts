export type Project = {
  id: string;
  title: string;
  group: string;
  status: 'Ongoing' | 'Completed';
  role: string;
  timeline: string;
  description: string;
  highlights: string[];
  keyValue: string;
  tech: string;
  link?: string;
};

export type PlatformRow = {
  area: string;
  tools: string;
  impact: string;
};

export const projects: Project[] = [
  // ── Ongoing ──
  {
    id: 'cvs-scheduling',
    title: 'CVS.com | Customer-Facing Scheduling',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Ongoing',
    role: 'Front-End Engineer',
    timeline: 'Nov 2025 – Present',
    description:
      'Contributing to front-end development for the nationwide customer-facing scheduling flow on CVS.com — serving millions of users. Integrating AEM content fragments into the Angular rendering pipeline.',
    highlights: [
      'Contributing to the front-end build for the nationwide customer scheduling flow on CVS.com',
      'Integrating Adobe Experience Manager (AEM) content fragments into the Angular rendering pipeline',
      'Improved scheduling flow performance and reduced layout shift on high-traffic pages',
      'Close collaboration with product, UX, and backend teams across multiple sprint cycles',
    ],
    keyValue: 'Scaling a public-facing scheduling flow used by millions of CVS customers, integrating AEM content delivery at enterprise scale.',
    tech: 'Next.js, Angular, AEM, TypeScript',
  },
  // ── Completed — newest first ──
  {
    id: 'health-hub',
    title: 'Health Hub – Service Creation',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Software Development Engineer',
    timeline: 'Aug 2025 – Nov 2025',
    description:
      'Built the "new-service" area within Health Hub — an internal platform that allows CVS teams to architect and launch new healthcare service offerings. Engineered with a test-first approach using Vitest.',
    highlights: [
      'Designed the full new-service creation flow: multi-step form architecture with conditional field logic',
      'Vitest test suite with near-100% coverage on all critical service-creation workflows',
      'Built on top of CVS Health\'s internal component library — composing and extending existing components to deliver the new-service creation flow.',
      'Worked directly with product owners to translate service-launch requirements into UI contracts',
    ],
    keyValue: 'High-level platform engineering with a test-first mentality — ensuring 100% functional reliability for critical internal workflows.',
    tech: 'React, TypeScript, Vitest',
  },
  {
    id: 'iqe',
    title: 'Intelligent Questionnaire Engine (IQE)',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Front-End Engineer',
    timeline: 'Jan 2025 – Aug 2025',
    description:
      'Developed a multi-step engine that uses conditional branching to guide patients through medical intake forms. Built with expert-level React component architecture to handle deeply nested logic trees and dynamic form state.',
    highlights: [
      'Conditional branching engine — each answer gates subsequent questions via a declarative rule config',
      'Dynamic form state managed entirely in React with no external state library',
      'Decoupled question schema from rendering logic — new questionnaire types added without code changes',
    ],
    keyValue: 'Expert-level React component architecture and logic-heavy frontend development in a regulated healthcare context.',
    tech: 'React, Next.js, TypeScript',
  },
  {
    id: 'amt',
  title: 'Pharmacy Appointment Scheduler',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Software Development Engineer',
    timeline: 'Jan 2024 – Dec 2024',
    description:
      'Internal tool used by 9,000+ CVS pharmacy locations to configure and publish appointment time slots for vaccines and other services.',
    highlights: [
      'Built the UI for pharmacy store admins to create, configure, and manage appointment time slots across all CVS locations.',
      'Engineered complex time-slot logic handling edge cases and boundary conditions across varied pharmacy scheduling configurations.',
      'Modular Angular component architecture designed for long-term maintainability',
      'Close collaboration with pharmacy ops and backend teams to map business rules to UI state',
    ],
    keyValue: 'Used daily by pharmacy staff nationwide to manage patient scheduling — handling complex business logic in a high-stakes healthcare environment.',
    tech: 'Angular, TypeScript, Tailwind CSS',
  },
  {
    id: 'cvs-pdp',
    title: 'CVS.com | PDP Accessibility',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Digital Development Engineer I',
    timeline: 'Jun 2023 – Jan 2024',
    description:
      'Drove the accessibility remediation initiative across CVS.com Product Detail Pages — bringing high-traffic product pages into full WCAG 2.1 compliance and establishing a11y standards adopted across the team.',
    highlights: [
      'Audited and remediated WCAG 2.1 violations across PDP components — semantic HTML, ARIA labels, keyboard navigation, and colour contrast',
      'Established accessibility review criteria adopted as team standards for ongoing development',
      "Acted as the squad's a11y reviewer — providing guidance and reviews on pull requests",
      'Optimised page rendering and reduced cumulative layout shift on high-traffic product views',
    ],
    keyValue: 'Accessibility is not a checkbox — this work turned compliance into a culture, with standards that outlasted the project itself.',
    tech: 'React, Next.js, TypeScript, WCAG 2.1, ARIA',
  },
];

export const platformRows: PlatformRow[] = [
  {
    area: 'Security',
    tools: 'Snyk, GitLeaks',
    impact: 'Remediating vulnerabilities and managing secret rotation at enterprise scale.',
  },
  {
    area: 'Testing',
    tools: 'Jest, Vitest',
    impact: 'Maintaining high coverage and debugging complex coverage report discrepancies.',
  },
  {
    area: 'DevOps',
    tools: 'Docker, Harness, CircleCI',
    impact: 'Ensuring production-ready deployments across stage and prod environments.',
  },
];
