import React, { useState } from 'react';
import { projects, platformRows } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Enterprise Projects · CVS Health</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Projects</h2>
          <div className="accent-bar mx-auto mt-4" />
        </div>

        <div className="md:flex md:items-start md:gap-8 mb-16">

          {/* Project nav */}
          <nav aria-label="Project list" className="md:w-1/3 mb-6 md:mb-0">
            <ul className="space-y-2">
              {projects.map((p, idx) => (
                <li key={p.id}>
                  <button
                    onClick={() => setActiveIndex(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') setActiveIndex((i) => Math.min(projects.length - 1, i + 1));
                      if (e.key === 'ArrowUp') setActiveIndex((i) => Math.max(0, i - 1));
                    }}
                    aria-pressed={idx === activeIndex}
                    className={`w-full text-left px-4 py-3 rounded transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                      idx === activeIndex
                        ? 'bg-white border-gray-300 '
                        : 'bg-transparent border-transparent hover:bg-white hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-semibold text-sm ${idx === activeIndex ? 'text-blue-600' : 'text-gray-800'}`}>
                        {p.title}
                      </span>
                      <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${
                        p.status === 'Ongoing'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{p.timeline}</div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Active project card */}
          <div className="md:w-2/3">
            <ProjectCard project={projects[activeIndex]} />
          </div>

        </div>

        {/* Platform & Security table */}
        <div>
          <p className="section-label mb-2">Platform &amp; Security</p>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Under the Hood</h3>
          <p className="text-sm text-slate-400 mb-5">The infrastructure and tooling work that runs beneath every feature.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-5 py-3 font-semibold text-gray-700 w-1/6">Area</th>
                  <th className="px-5 py-3 font-semibold text-gray-700 w-1/4">Tools</th>
                  <th className="px-5 py-3 font-semibold text-gray-700">Impact</th>
                </tr>
              </thead>
              <tbody>
                {platformRows.map((row, i) => (
                  <tr key={i} className={i < platformRows.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-5 py-4 font-semibold text-gray-800">{row.area}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {row.tools.split(',').map(t => (
                          <span key={t} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-medium">{t.trim()}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
