import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');


  useEffect(() => {
    // Initialize scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        '.section-title, .skill-card, .education-card, .certificate-card, .project-card'
      );

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.classList.add('animate');
        }
      });
    };

    // Add scroll progress indicator
    const handleScroll = () => {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        const windowScroll = document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / height) * 100;
        scrollIndicator.style.width = `${scrolled}%`;
      }
      animateOnScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', animateOnScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', animateOnScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme + '-theme';
  };

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  return (
    
    <div className="App">
      {/* Scroll Indicator */}
      <div className="scroll-indicator"></div>

      {/* Main Content */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
