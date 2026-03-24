import React, { useEffect, useState } from 'react';
import Typewriter from './Typewriter';

const euCountries = [
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR',
  'HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI',
  'SK','NO','CH','IS','LI','GB',
];

const HeroSection: React.FC = () => {
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => setCountry(data.country_code ?? ''))
      .catch(() => {});
  }, []);

  const bio = (() => {
    if (country === 'DK' || country === 'SE') {
      return 'Three years of enterprise front-end engineering at CVS Health. Dual EU/US citizen with Danish heritage — looking to relocate to Denmark. EU passport, no sponsorship needed.';
    }
    if (country === 'CH' || country === 'DE' || country === 'FR' || country === 'LI' || country === 'AT' || country === 'IT') {
      return 'Three years of enterprise front-end engineering at CVS Health. Dual EU/US citizen seeking relocation to Switzerland — EU passport holder, full work authorisation.';
    }
    if (euCountries.includes(country)) {
      return 'Three years of enterprise front-end engineering at CVS Health. Dual EU/US citizen open to relocation across Europe. EU passport, no sponsorship needed.';
    }
    return 'Three years of enterprise front-end engineering at CVS Health across Angular, React, and Next.js. ASU B.S. Graphic Information Technology, Summa Cum Laude.';
  })();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">

      {/* Faint warm tinted radial glow — very subtle, not grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl mx-auto">

        {/* Eyebrow */}
        <p className="section-label mb-8 tracking-[0.22em]">Front-End Software Engineer</p>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 leading-none mb-8">
          <Typewriter
            text="Michael Soucek"
            segments={[
              { text: 'Michael', duration: 800, className: 'inline' },
              { text: '\u00a0Soucek', duration: 800, className: 'text-blue-600 inline' },
            ]}
            interSegmentDelay={80}
            startDelay={200}
          />
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-slate-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <div className="h-px w-16 bg-slate-200" />
        </div>

        {/* Bio */}
        <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          {bio}
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="mailto:michaelsoucek73@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded transition-colors"
          >
            Let's Connect
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <div className="h-5 w-px bg-slate-200" />

          {/* GitHub */}
          <a
            href="https://github.com/coding-wizard-and-master"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.116 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/michael-soucek/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.369 4.268 5.451v6.29zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.072 0-1.144.926-2.073 2.07-2.073 1.145 0 2.073.929 2.073 2.073 0 1.144-.928 2.072-2.073 2.072zM7.119 20.452H3.554V9h3.565v11.452z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs uppercase tracking-widest text-slate-400">Scroll</span>
        <div className="w-px h-8 bg-slate-300" />
      </div>

    </section>
  );
};

export default HeroSection;
