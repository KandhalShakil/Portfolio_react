import React, { useEffect, Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './components/ErrorBoundary.css';
import Lenis from 'lenis';

// 6D Experience Components (Immediate Load)
import Experience6D from './components/Experience6D.jsx';
import Cursor6D from './components/Cursor6D.jsx';
import Navbar from './components/Navbar.jsx';

// Lazy Loaded Sections for Performance
const Hero = lazy(() => import('./components/Hero.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Education = lazy(() => import('./components/Education.jsx'));
const Certifications = lazy(() => import('./components/Certifications.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

// Compact Loading Component
const SectionLoader = () => (
  <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.2 }}>
    <div className="loader-pulse"></div>
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    window.scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <Experience6D />
        <Cursor6D />
        <Navbar />
        <main className="relative z-10">
          <Suspense fallback={<SectionLoader />}>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
