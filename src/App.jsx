import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './components/ErrorBoundary.css';

// Regular Components
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ChatBot from './components/ChatBot.jsx';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
        <ChatBot />
      </div>
    </ErrorBoundary>
  );
}

export default App;
