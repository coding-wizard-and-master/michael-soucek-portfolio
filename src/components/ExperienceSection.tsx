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
        title: 'Software Engineer',
        period: 'Jun 2024 – Present',
        location: 'Remote',
        badge: 'Current',
        bullets: [
          'Engineered customer-facing scheduling flows on CVS.com serving millions of users — integrating AEM content fragments into an Angular rendering pipeline and reducing cumulative layout shift on high-traffic pharmacy pages.',
          'Built core scheduling logic for the Pharmacy Appointment Scheduler — overnight time-slot configuration, edge-case modal flows, and high-volume state management in Angular, deployed across 9,000+ CVS locations.',
          'Developed Health Hub service-creation platform in React with a test-first approach using Vitest — achieving near-100% coverage on all critical workflows and zero regressions at launch.',
          'Maintained DevSecOps pipeline: Snyk vulnerability scanning, GitLeaks secret rotation, Docker base image upgrades, CircleCI optimisation, and Harness deployment management.',
        ],
        tech: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Docker', 'CircleCI', 'Snyk', 'Harness', 'AEM'],
      },
      {
        title: 'Front-End Engineer',
        period: 'Jun 2023 – Jun 2024',
        location: 'Remote',
        bullets: [
          'Architected the Intelligent Questionnaire Engine (IQE) in React/Next.js — conditional branching via declarative rule config, dynamic form state managed entirely in React, and a decoupled question schema enabling new questionnaire types without code changes.',
          'Engineered complex API-driven, multi-step form logic with reusable component architecture — scaling data-driven intake workflows across CVS.com without per-workflow code changes.',
          "Led WCAG 2.1 accessibility remediation across CVS.com PDPs — auditing and fixing ARIA roles, semantic HTML, keyboard navigation, and colour contrast; acted as squad's designated a11y reviewer; established review criteria adopted as the team's ongoing standard.",
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
        title: 'Software Engineer Intern',
        period: 'May 2022 – Dec 2022',
        location: 'Remote',
        bullets: [
          'Built a client portal integrating external ITSM platforms with internal systems using React and RESTful APIs — designing reusable UI components that streamlined cross-platform workflows.',
          'Developed internal device-management automation tooling across Jamf, Workspace ONE, and Microsoft Intune, managing large-scale deployments and authoring onboarding documentation.',
        ],
        tech: ['React', 'HTML/CSS', 'REST APIs', 'Jamf', 'Workspace ONE', 'Microsoft Intune'],
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
          <p className="text-slate-400 mt-4 text-sm">3.5 years of enterprise front-end engineering in healthcare technology.</p>
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
