import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const euCountries = [
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR',
  'HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI',
  'SK','NO','CH','IS','LI','GB',
];

const stats = [
  { value: '3', label: 'Years at CVS Health' },
  { value: '39', label: 'Countries Visited' },
  { value: '4.0', label: 'GPA — Summa Cum Laude' },
  { value: '2', label: 'Citizenships' },
];

const languages = [
  { flag: '🇺🇸', name: 'English', level: 'Native' },
  { flag: '🇩🇪', name: 'German', level: 'Intermediate — ongoing' },
  { flag: '🇭🇺', name: 'Hungarian', level: 'Conversational' },
];

const About: React.FC = () => {
  const [isEurope, setIsEurope] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => { if (euCountries.includes(data.country_code)) setIsEurope(true); })
      .catch(() => {});
  }, []);
  return (
    <Layout>
      <div className="bg-[#f8f7f4] min-h-screen">
        {/* Hero header */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 py-12 sm:py-20 text-center">
            <p className="section-label mb-4">About</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 break-words">Michael Dean Soucek</h1>
            <div className="accent-bar mx-auto mb-5" />
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Front-end engineer with three years of enterprise experience at CVS Health. I build precise, accessible, and maintainable systems — clarity and structure over decoration.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-16">

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e8e6e1] rounded-lg overflow-hidden border border-[#e8e6e1]">
            {stats.map((s) => (
              <div key={s.label} className="bg-white flex flex-col items-center justify-center py-8 px-4">
                <span className="text-3xl font-extrabold text-gray-900 tracking-tight">{s.value}</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-1 text-center">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold mb-3">Background</p>
              <p className="text-gray-700 leading-relaxed">
                I hold dual American–Hungarian citizenship with an EU passport — able to work anywhere in the European Union without visa sponsorship. I graduated Summa Cum Laude from Arizona State University with a {isEurope ? 'B.Sc.' : 'B.S.'} in Graphic Information Technology, which gave me an unusual foundation: both technical architecture and visual communication.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold mb-3">Philosophy</p>
              <p className="text-gray-700 leading-relaxed">
                Clarity over cleverness. Consistency over convenience. I approach every system as something that will be maintained long after I've written it — so naming, structure, and accessibility are never afterthoughts. Travelling to 39 countries has shaped how I think about building for diverse, global audiences.
              </p>
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold mb-6">Languages</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="bg-white border border-gray-200 rounded-lg px-6 py-5 flex items-center gap-4">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{lang.name}</div>
                    <div className="text-sm text-gray-500">{lang.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold mb-6">Education</p>
            <div className="bg-white border border-gray-200 rounded-lg px-6 sm:px-8 py-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-gray-900">Arizona State University</h3>
                  <p className="text-gray-600 mt-0.5">{isEurope ? 'B.Sc.' : 'B.S.'} Graphic Information Technology</p>
                  <p className="text-sm text-gray-500 mt-1">Aug 2017 – Dec 2022</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-0.5 rounded">Summa Cum Laude</span>
                  <span className="text-sm text-gray-500">GPA 4.0 / 4.0</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                An integrated foundation in both technical architecture and visual communication — the combination that defines my approach to front-end development. Capstone: responsive analytics dashboard built in React, Tailwind CSS, and Chart.js.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;
