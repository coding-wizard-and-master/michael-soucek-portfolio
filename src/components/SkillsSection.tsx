import React from 'react';

const skillGroups = [
  {
    label: 'Frameworks',
    accentColor: 'bg-blue-500',
    skills: ['Angular', 'React', 'Next.js'],
  },
  {
    label: 'Languages',
    accentColor: 'bg-blue-500',
    skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    label: 'Styling',
    accentColor: 'bg-blue-500',
    skills: ['Tailwind CSS', 'Sass'],
  },
  {
    label: 'Testing',
    accentColor: 'bg-blue-500',
    skills: ['Vitest', 'Jest'],
  },
  {
    label: 'Tooling & DevOps',
    accentColor: 'bg-blue-500',
    skills: ['Docker', 'CircleCI', 'Harness', 'Vite', 'Webpack', 'Vercel', 'Git', 'GitHub'],
  },
  {
    label: 'APIs & Auth',
    accentColor: 'bg-blue-500',
    skills: ['REST', 'OAuth2'],
  },
  {
    label: 'Platforms & CMS',
    accentColor: 'bg-blue-500',
    skills: ['AEM'],
  },
  {
    label: 'Security',
    accentColor: 'bg-blue-500',
    skills: ['Snyk', 'GitLeaks'],
  },
  {
    label: 'Accessibility',
    accentColor: 'bg-blue-500',
    skills: ['WCAG 2.1', 'Semantic HTML', 'ARIA Patterns', 'Screen Reader Optimization'],
  },
  {
    label: 'Back-End & Databases',
    accentColor: 'bg-blue-500',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'SQL', 'Postman'],
  },
  {
    label: 'AI Tools',
    accentColor: 'bg-blue-500',
    skills: ['GitHub Copilot', 'Windsurf', 'ChatGPT'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-label mb-3">Expertise</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Technical Skills</h2>
          <div className="accent-bar mx-auto mt-4" />
        </div>

        {/* Skill groups — flat list layout */}
        <div className="space-y-0 divide-y divide-gray-200 border-t border-b border-gray-200">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-4 py-6">
              <div className="sm:w-40 shrink-0 flex items-center gap-2 pt-0.5">
                <span className="w-1 h-4 rounded-full bg-blue-500 inline-block shrink-0" />
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{group.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
