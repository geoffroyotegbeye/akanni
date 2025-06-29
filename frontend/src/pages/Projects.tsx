import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';

const ProjectsPage: React.FC<{ onNavigate: (sectionId: string) => void }>
  = ({ onNavigate }) => (
  <>
    <Header activeSection="projects" onNavigate={onNavigate} />
    <Projects />
  </>
);

export default ProjectsPage;
