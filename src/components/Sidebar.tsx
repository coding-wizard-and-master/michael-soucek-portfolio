import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-white/90 backdrop-blur-md px-6 py-8 border-r border-gray-200 h-screen fixed">
      <div className="flex flex-col items-center h-full">
        <div className="mb-4 flex items-center justify-center w-full">
          <img src="/avatar.svg" alt="avatar" className="header-avatar object-contain shadow-sm rounded-md" style={{ maxWidth: '40px' }} />
        </div>
        <h2 className="text-2xl font-semibold">Michael Soucek</h2>
        <p className="text-sm text-gray-600 mt-1">Front-End Software Engineer</p>
        <div className="mt-6 w-full">
          <nav className="flex flex-col space-y-3 text-sm">
            <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>
            <Link to="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </nav>
        </div>

        <div className="mt-auto w-full">
          <div className="flex justify-center space-x-4 text-gray-600">
            <a href="https://github.com/coding-wizard-and-master" aria-label="github" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-gray-100 leading-none">
              <svg className="w-5 h-5 block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.116 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="#111827"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/michael-soucek/" aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-gray-100 leading-none">
              <svg className="w-5 h-5 block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.369 4.268 5.451v6.29zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.072 0-1.144.926-2.073 2.07-2.073 1.145 0 2.073.929 2.073 2.073 0 1.144-.928 2.072-2.073 2.072zM7.119 20.452H3.554V9h3.565v11.452z" />
              </svg>
            </a>
            <a href="#" aria-label="twitter" className="p-2 rounded hover:bg-gray-100">T</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
