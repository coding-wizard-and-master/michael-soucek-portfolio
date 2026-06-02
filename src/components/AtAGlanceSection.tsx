import React, { useEffect, useState } from 'react';

const euCountries = [
  'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR',
  'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI',
  'SK', 'NO', 'CH', 'IS', 'LI', 'GB',
];

const euWorkAuthorizationText =
  'Hungarian / EU citizen — full right to work across the EU/EEA. EU citizen eligible for Swiss work authorization via the EU/EFTA route. No employer visa sponsorship required.';

const usWorkAuthorizationText =
  'American citizen — full right to work across the United States. No employer visa sponsorship required.';

const facts = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    label: 'Current Role',
    value: 'Software Engineer at CVS Health',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <polyline strokeLinecap="round" strokeLinejoin="round" points="16 18 22 12 16 6" />
        <polyline strokeLinecap="round" strokeLinejoin="round" points="8 6 2 12 8 18" />
      </svg>
    ),
    label: 'Core Stack',
    value: 'Angular · React · Next.js · TypeScript',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    label: 'Work Authorization',
    value: euWorkAuthorizationText,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      </svg>
    ),
    label: 'Specialties',
    value:
      'Enterprise frontend · Accessibility (WCAG 2.1) · API integration · Reusable component systems · Production releases',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
    label: 'Domain',
    value: 'Healthcare technology — public-facing and internal tools',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-4a4 4 0 11-8 0 4 4 0 018 0z" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: 'Collaboration',
    value: 'Design teams · Backend engineers · Product · DevSecOps',
  },
];

const AtAGlanceSection: React.FC = () => {
  const [isEurope, setIsEurope] = useState(true);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        if (typeof data?.country_code === 'string') {
          setIsEurope(euCountries.includes(data.country_code));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="section-label mb-3">Quick Facts</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">At a Glance</h2>
          <div className="accent-bar mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((fact) => {
            const displayValue =
              fact.label === 'Work Authorization'
                ? (isEurope ? euWorkAuthorizationText : usWorkAuthorizationText)
                : fact.value;

            return (
            <div
              key={fact.label}
              className="bg-white border border-gray-200 rounded-lg px-5 py-5 flex items-start gap-4"
            >
              <div className="shrink-0 mt-0.5 text-blue-600">{fact.icon}</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                  {fact.label}
                </p>
                <p className="text-sm text-gray-800 leading-relaxed">{displayValue}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceSection;
