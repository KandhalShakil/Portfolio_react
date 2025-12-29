import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Education = lazy(() => import('./components/Education.jsx'));
const Achievements = lazy(() => import('./components/Achievements.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '200px',
    color: '#00FF99'
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
