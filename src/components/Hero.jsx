import React from 'react';
import sanchitHero from '../assets/sanchit_hero.png';

const Hero = () => {
  return (
    <section className="hero-section" id="about">
      {/* Radial glow */}
      <div className="hero-radial" />
      <div className="hero-scan-lines" />

      {/* Spider web background */}
      <svg className="web-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" style={{opacity:0.1}}>
        {[0,45,90,135,180,225,270,315].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <line key={i} x1="1200" y1="0" x2={1200 + 700*Math.cos(rad)} y2={0 + 700*Math.sin(rad)} stroke="var(--accent)" strokeWidth="0.8"/>;
        })}
        {[80,180,280,380].map((r, i) => (
          <polygon key={i} stroke="var(--accent)" strokeWidth="0.8" fill="none"
            points={[0,45,90,135,180,225,270,315].map(a => {
              const rad = (a * Math.PI) / 180;
              return `${1200+r*Math.cos(rad)},${0+r*Math.sin(rad)}`;
            }).join(' ')}
          />
        ))}
      </svg>

      {/* Main content */}
      <div className="hero-main">
        {/* LEFT: text */}
        <div className="hero-left">
          <div className="hero-overline">
            <span className="hero-overline-line" />
            Portfolio — Est. 2024
          </div>

          <h1 className="hero-headline">
            <span className="hero-headline-line"><span>CRAFTING</span></span>
            <span className="hero-headline-line"><span>CINEMATIC</span></span>
            <span className="hero-headline-line"><span>STORIES,</span></span>
            <span className="hero-headline-line"><span>FRAME <span className="hero-headline-accent">BY</span></span></span>
            <span className="hero-headline-line"><span><span className="hero-headline-accent">FRAME.</span></span></span>
          </h1>

          <p className="hero-desc">
            Videographer &amp; Digital Content Specialist based in Delhi —
            transforming raw footage into broadcast-ready stories that
            elevate brands and drive real audience engagement.
          </p>

          <div className="hero-ctas">
            <a href="#work" className="hero-cta-primary">
              <span className="cta-line" />
              View Work
            </a>
            <a href="#contact" className="hero-cta-secondary">
              <span className="cta-line" />
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT: photo */}
        <div className="hero-right">
          <div className="hero-img-frame">
            <img
              src={sanchitHero}
              alt="Sanchit Kumar — Videographer"
              className="hero-photo"
            />
          </div>
          <span className="hero-img-caption">Sanchit Kumar · Videographer · Delhi</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom">
        <span>Based in Karkardooma, Delhi</span>
        <div className="hero-scroll-hint">
          <div className="scroll-dot" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
