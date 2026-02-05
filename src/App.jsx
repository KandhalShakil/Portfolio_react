import React, { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './components/ErrorBoundary.css';

// 3D Components
import Scene3D from './components/3D/Scene3D.jsx';
import Hero3D from './components/3D/Hero3D.jsx';
import Skills3D from './components/3D/Skills3D.jsx';
import Projects3D from './components/3D/Projects3D.jsx';
import './components/3D/3D.css';

// Regular Components
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Loading Component
function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p>Loading 3D Experience...</p>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App app-3d">
        <Suspense fallback={<Loading />}>
          <Scene3D />
          <Navbar />
          <Hero3D />
          <About />
          <Skills3D />
          <Education />
          <Achievements />
          <Projects3D />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
