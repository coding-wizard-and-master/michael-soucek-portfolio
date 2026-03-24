import React from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-72 flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} title={p.title} description={p.description} link={p.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;