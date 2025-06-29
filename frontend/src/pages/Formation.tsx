import React from 'react';
import Header from '../components/Header';
import Formation from '../components/Formation';

const FormationPage: React.FC<{ onNavigate: (sectionId: string) => void }>
  = ({ onNavigate }) => (
  <>
    <Header activeSection="formation" onNavigate={onNavigate} />
    <Formation />
  </>
);

export default FormationPage;
