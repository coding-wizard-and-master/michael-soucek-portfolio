import React from 'react';
import Sidebar from '../components/Sidebar';

const Contact: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-72 flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-gray-700 mb-2">📧 <a href="mailto:michaelsoucek73@gmail.com" className="text-blue-600">michaelsoucek73@gmail.com</a></p>
        <p className="text-gray-700 mb-2">🌐 <a href="https://www.linkedin.com/in/michael-soucek/" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/michael-soucek</a></p>
        <p className="text-gray-700">💻 <a href="https://github.com/coding-wizard-and-master" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/coding-wizard-and-master</a></p>
        <p className="mt-4 text-gray-600">📍 Alpharetta, Georgia, USA</p>
      </div>
    </div>
  );
};

export default Contact;