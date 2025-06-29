import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Home: React.FC<{ onNavigate: (sectionId: string) => void }>
  = ({ onNavigate }) => (
  <>
    <Header activeSection="accueil" onNavigate={onNavigate} />
    <Hero onNavigate={onNavigate} />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <FAQ onNavigate={onNavigate} onOpenChat={() => {}} />
    <Footer onNavigate={onNavigate} />
    <ChatWidget isOpen={false} onToggle={() => {}} />
  </>
);

export default Home;
