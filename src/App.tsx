import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'services', 'portfolio', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header activeSection={activeSection} onNavigate={scrollToSection} />
            <main>
              <section id="accueil">
                <Hero onNavigate={scrollToSection} />
              </section>
              <section id="apropos">
                <About />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="portfolio">
                <Portfolio onNavigate={scrollToSection} />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="faq">
                <FAQ onNavigate={scrollToSection} onOpenChat={openChat} />
              </section>
            </main>
            <Footer onNavigate={scrollToSection} />
            <ChatWidget isOpen={isChatOpen} onToggle={toggleChat} />
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;