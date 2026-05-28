import React, { useState } from 'react';
import { projects, personalProjects, platformRows } from '../data/projects';
import ProjectCard from './ProjectCard';

const SHOW_PERSONAL_PROJECTS = false;

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
        <div className="mb-20">
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

        {/* Personal Projects */}
        {SHOW_PERSONAL_PROJECTS && (
        <div>
          <div className="mb-8">
            <p className="section-label mb-3">Side Work</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Personal Projects</h2>
            <div className="accent-bar mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {personalProjects.map((proj) => {
              const techItems = proj.tech ? proj.tech.split(',').map(t => t.trim()) : [];
              return (
                <article key={proj.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-0.5 w-full bg-slate-300" />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{proj.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{proj.description}</p>
                    <p className="text-sm text-gray-500 italic mb-4">{proj.reason}</p>

                    {techItems.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {techItems.map((t) => (
                          <span key={t} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded font-medium">{t}</span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900 px-3 py-1.5 rounded transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.116 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                          </svg>
                          View on GitHub
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 border border-blue-200 hover:border-blue-400 px-3 py-1.5 rounded transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
