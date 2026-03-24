import React, { useEffect, useState } from 'react';

type Role = {
  title: string;
  period: string;
  location: string;
  bullets: string[];
  tech?: string[];
  badge?: string;
};

type Company = {
  name: string;
  accentColor: string;
  roles: Role[];
};

const experience: Company[] = [
  {
    name: 'CVS Health',
    accentColor: 'bg-red-500',
    roles: [
      {
        title: 'Software Development Engineer',
        period: 'Jun 2024 – Present',
        location: 'Alpharetta, GA',
        badge: 'Current',
        bullets: [
          'Built the core scheduling logic for the Pharmacy Appointment Scheduler — overnight time-slots, edge-case modal flows, and high-volume state management in Angular.',
          'Contributing to the customer-facing scheduling flows on CVS.com — integrating AEM content fragments into an Angular rendering pipeline serving millions of users nationwide.',
          'Developed the Health Hub service-creation platform in React with a test-first approach using Vitest, achieving near-100% coverage on critical workflows.',
          'Maintained DevSecOps pipeline: Snyk vulnerability scanning, Docker base image upgrades, CircleCI optimisation, and Harness deployment management.',
          'Collaborated daily with product, UX, backend, and QA in an Agile/SAFe environment.',
        ],
        tech: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Docker', 'CircleCI', 'Snyk', 'Harness', 'AEM'],
      },
      {
        title: 'Digital Development Engineer I',
        period: 'Jun 2023 – Jun 2024',
        location: 'Alpharetta, GA',
        bullets: [
          'Built e-commerce Product Detail Page (PDP) enhancements and developed the Intelligent Questionnaire Engine (IQE) — a condition-based multi-step intake flow — using React and Next.js.',
          'Engineered complex API-driven form logic with reusable component architecture for multi-step, data-driven intake workflows.',
          'Drove WCAG 2.1 compliance across PDP components — ARIA roles, semantic HTML, screen reader compatibility, and full keyboard navigation.',
          "Established accessibility review criteria adopted as the squad's standard for ongoing development.",
          'Collaborated cross-functionally with design, QA, and backend teams within an Agile framework.',
        ],
        tech: ['React', 'Next.js', 'TypeScript', 'WCAG 2.1', 'ARIA'],
      },
    ],
  },
  {
    name: 'Insight Enterprises',
    accentColor: 'bg-blue-500',
    roles: [
      {
        title: 'Associate Systems Engineer — Internship',
        period: 'Aug 2022 – Dec 2022',
  location: '',
        bullets: [
          "Built a client portal integrating external ITSM platforms with Insight's internal systems using React and RESTful APIs.",
          'Designed reusable UI components for internal tooling and streamlined cross-platform workflows.',
        ],
        tech: ['React', 'HTML/CSS', 'REST APIs'],
      },
      {
        title: 'Technical Support Engineer — Internship',
        period: 'May 2022 – Aug 2022',
  location: '',
        bullets: [
          'Developed an internal automation tool for corporate device management across Jamf, Workspace ONE, and Microsoft Intune.',
          'Managed large-scale device deployments and authored onboarding documentation.',
        ],
        tech: ['Jamf', 'Workspace ONE', 'Microsoft Intune'],
      },
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const [isEurope, setIsEurope] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        const euCountries = [
          'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR',
          'HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI',
          'SK','NO','CH','IS','LI','GB','NL',
        ];
        if (euCountries.includes(data.country_code)) setIsEurope(true);
      })
      .catch(() => {});
  }, []);
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="section-label mb-3">Career</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Experience</h2>
          <div className="accent-bar mx-auto mt-4" />
          <p className="text-slate-400 mt-4 text-sm">Three years of enterprise front-end engineering in healthcare technology.</p>
        </div>

        <div className="space-y-6">
          {experience.map((company) => (
            <div key={company.name} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
              <div className={`h-0.5 w-full ${company.accentColor}`} />
              <div className="px-6 pt-5 pb-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
              </div>

              <div className="divide-y divide-gray-100">
                {company.roles.map((role) => (
                  <div key={role.title} className="px-6 py-5">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{role.title}</span>
                      {role.badge && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          role.badge === 'Current'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}>
                          {role.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 mb-4">{role.period} · {role.location}</div>

                    <ul className="space-y-2 mb-4">
                      {role.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {role.tech && (
                      <div className="flex flex-wrap gap-1.5">
                        {role.tech.map((t) => (
                          <span key={t} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded font-medium">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="h-0.5 w-full bg-amber-400" />
          <div className="px-6 py-5">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900">Arizona State University</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">Summa Cum Laude</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              {isEurope ? 'B.Sc.' : 'B.S.'} Graphic Information Technology · Aug 2017 – Dec 2022 · {isEurope ? 'EQF Level: 6' : 'GPA 4.0'}
            </div>
            <p className="text-sm text-gray-700">A degree that bridged engineering and design — giving me the rare ability to think in systems and communicate visually at the same time.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
