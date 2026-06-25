import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1800);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(timer); };
  }, []);

  return (
    <nav className={`navbar${visible ? ' visible' : ''}`}>
      <div className={`nav-inner${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <svg className="nav-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2"/>
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
          </svg>
          Sanchit<span style={{color:'var(--accent)'}}>.</span>
        </a>

        <div className="nav-links">
          {['Work','About','Experience','Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              <span className="nav-link-top">{link}</span>
              <span className="nav-link-bot">{link}</span>
            </a>
          ))}
        </div>

        <a href="mailto:sanchit@example.com" className="nav-cta">Hire Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
