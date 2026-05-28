export type Project = {
  id: string;
  title: string;
  group: string;
  status: 'Ongoing' | 'Completed';
  role: string;
  timeline: string;
  description: string;
  highlights: string[];
  challenges: string[];
  impact: string;
  tech: string;
  link?: string;
};

export type PersonalProject = {
  id: string;
  title: string;
  description: string;
  reason: string;
  tech: string;
  github?: string;
  demo?: string;
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
    role: 'Software Engineer',
    timeline: 'Nov 2025 – Present',
    description:
      'Customer-facing appointment scheduling flow on CVS.com — serving millions of users nationwide.',
    highlights: [
      'Contributing to the front-end build for the nationwide customer scheduling flow on CVS.com',
      'Integrating Adobe Experience Manager (AEM) content fragments into the Angular rendering pipeline',
      'Reduced cumulative layout shift on high-traffic pharmacy pages',
      'Close collaboration with product, UX, and backend teams across multiple sprint cycles',
    ],
    challenges: [
      'Integrating AEM content delivery into a complex Angular pipeline at enterprise scale',
      'Performance optimisation on high-traffic, production pages',
      'Coordinating frontend changes across large cross-functional teams',
    ],
    impact:
      'Scaling a public-facing scheduling flow used by millions of CVS customers, integrating AEM content delivery at enterprise scale.',
    tech: 'Angular, TypeScript, AEM, REST APIs, Tailwind CSS',
  },
  // ── Completed — newest first ──
  {
    id: 'health-hub',
    title: 'Health Hub — Service Creation Platform',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Software Engineer',
    timeline: 'Aug 2025 – Nov 2025',
    description:
      'React-based internal platform for creating and managing healthcare services across CVS locations.',
    highlights: [
      'Developed Health Hub service-creation platform in React with a test-first approach using Vitest',
      'Achieved near-100% test coverage on all critical workflows',
      'Built reusable UI components for service configuration flows',
      'Integrated backend API data to drive dynamic service management UI',
    ],
    challenges: [
      'Designing a test-first frontend architecture using Vitest',
      'Maintaining near-100% coverage without sacrificing development speed',
      'Building flexible, API-driven UI for complex service configuration workflows',
    ],
    impact:
      'Shipped with zero regressions at launch. Near-100% Vitest coverage across all critical workflows.',
    tech: 'React, TypeScript, Vitest, REST APIs, Tailwind CSS',
  },
  {
    id: 'iqe',
    title: 'Intelligent Questionnaire Engine (IQE)',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Software Engineer',
    timeline: 'Jan 2025 – Aug 2025',
    description:
      'React/Next.js internal tool for conditional, multi-step questionnaire workflows — enabling new questionnaire types without code changes.',
    highlights: [
      'Architected conditional branching via declarative rule config',
      'Managed dynamic form state entirely in React',
      'Built a decoupled question schema enabling new questionnaire types without per-workflow code changes',
      'Engineered complex API-driven, multi-step form logic with reusable component architecture',
    ],
    challenges: [
      'Managing conditional rendering and dynamic form/questionnaire state',
      'Designing a schema-driven architecture that scales without code changes per new workflow',
      'Keeping complex multi-step logic readable and maintainable',
    ],
    impact:
      'Scalable data-driven intake workflows across CVS.com — new questionnaire types can be added via config, no code changes required.',
    tech: 'React, Next.js, TypeScript, REST APIs',
  },
  {
    id: 'amt',
    title: 'Pharmacy Appointment Scheduler',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Software Engineer',
    timeline: 'Jan 2024 – Dec 2024',
    description:
      'Core scheduling logic for the internal CVS pharmacy appointment management system — deployed across 9,000+ CVS locations.',
    highlights: [
      'Built overnight time-slot configuration UI',
      'Engineered edge-case modal flows and high-volume state management in Angular',
      'Developed reusable Angular components for scheduling workflows',
      'Worked with backend and design teams to deliver production-ready UI features',
    ],
    challenges: [
      'Handling complex API-driven state across a large Angular application',
      'Building reliable overnight/time-slot logic with edge-case coverage',
      'Maintaining clean Angular component structure in an enterprise codebase',
      'Supporting accurate scheduling operations at 9,000+ pharmacy locations',
    ],
    impact:
      'Deployed to 9,000+ CVS pharmacy locations. Supports real pharmacy scheduling operations at enterprise scale.',
    tech: 'Angular, TypeScript, RxJS, REST APIs, Tailwind CSS',
  },
  {
    id: 'cvs-pdp',
    title: 'CVS.com | PDP Accessibility Remediation',
    group: 'Core Enterprise Projects | CVS Health',
    status: 'Completed',
    role: 'Software Engineer (designated a11y reviewer)',
    timeline: 'Jun 2023 – Jan 2024',
    description:
      'WCAG 2.1 accessibility remediation across CVS.com product detail pages — establishing team-wide accessibility standards.',
    highlights: [
      'Audited and fixed ARIA roles, semantic HTML, keyboard navigation, and colour contrast across CVS.com PDPs',
      'Acted as the squad\'s designated accessibility reviewer',
      'Established review criteria adopted as the team\'s ongoing standard',
    ],
    challenges: [
      'Browser-specific focus and screen-reader behaviour differences',
      'Retrofitting accessibility into a large, existing enterprise codebase',
      'Building review criteria that the full team could adopt and sustain',
    ],
    impact:
      'Improved accessibility across high-traffic CVS.com pages. Review standards adopted as the team\'s ongoing process.',
    tech: 'Angular, React, TypeScript, WCAG 2.1, ARIA, Semantic HTML',
  },
];

// ── Personal Projects ──────────────────────────────────────────────────────────
// TODO: Add your personal projects below. Each entry needs:
//   - title: project name
//   - description: one sentence — what it does
//   - reason: one sentence — why you built it
//   - tech: comma-separated stack tags
//   - github: link to the repo (optional)
//   - demo: live demo URL (optional)
export const personalProjects: PersonalProject[] = [
  {
    id: 'personal-placeholder-1',
    title: 'Personal Project — Coming Soon',
    description: 'TODO: Add a one-sentence description of what this project does.',
    reason: 'TODO: Add a one-sentence explanation of why you built it.',
    tech: 'React, TypeScript',
    github: 'https://github.com/michael-soucek',
  },
  {
    id: 'personal-placeholder-2',
    title: 'Personal Project — Coming Soon',
    description: 'TODO: Add a one-sentence description of what this project does.',
    reason: 'TODO: Add a one-sentence explanation of why you built it.',
    tech: 'Next.js, TypeScript',
    github: 'https://github.com/michael-soucek',
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
