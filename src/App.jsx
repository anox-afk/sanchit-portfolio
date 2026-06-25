import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />

      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease',
        pointerEvents: loaded ? 'auto' : 'none',
      }}>
        <Navbar />
        <Hero />
        <Expertise />
        <Projects />
        <Experience />
        <About />
        <Contact />

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-logo">Sanchit<span>.</span></div>
            <p className="footer-copy">© 2026 Sanchit Kumar. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              <a href="mailto:sanchit@example.com" className="footer-link">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
