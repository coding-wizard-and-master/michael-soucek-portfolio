import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const techItems = project.tech ? project.tech.split(',').map(t => t.trim()) : [];

  return (
    <article className="w-full rounded-lg border border-gray-200 bg-white overflow-hidden">
      {/* Accent bar */}
      <div className="h-0.5 w-full bg-blue-600" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <div className="text-sm text-gray-500 mt-1">{project.timeline} · {project.role}</div>
          </div>
          <span className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded ${
            project.status === 'Ongoing'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-gray-100 text-gray-500'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tech tags */}
        {techItems.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {techItems.map((t) => (
              <span key={t} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded font-medium">{t}</span>
            ))}
          </div>
        )}

        {/* What I Built */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-5">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">What I Built</p>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-5">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Technical Challenges</p>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Business / User Impact */}
        {project.impact && (
          <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
            <svg className="shrink-0 mt-0.5 w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
            </svg>
            <p className="text-xs text-blue-800 leading-relaxed"><span className="font-semibold">Business / User Impact: </span>{project.impact}</p>
          </div>
        )}

        {/* Link */}
        {project.link && (
          <div className="mt-5">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
            >
              View on GitHub
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
