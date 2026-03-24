import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-72 flex-1 min-h-screen bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default Layout;
