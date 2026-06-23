import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; {new Date().getFullYear()} Sanchit Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
