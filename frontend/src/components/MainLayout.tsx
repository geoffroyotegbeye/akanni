import React from 'react';
import Header from './Header';

interface MainLayoutProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ activeSection, onNavigate, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={onNavigate} />
      {children}
    </div>
  );
};

export default MainLayout;
