import React from 'react';
import sanchitPhoto from '../assets/sanchit_profile.png';

const Hero = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-bg-glow"></div>
      <div className="hero-bg-glow2"></div>

      <div className="hero">
        {/* Left Content */}
        <div className="hero-left">
          <div className="hero-badge">
            <span>●</span> Available for Projects
          </div>

          <h1 className="hero-title">
            Sanchit<br />
            <span className="accent">Kumar</span>
          </h1>

          <p className="hero-subtitle">
            Videographer & Digital Content Specialist crafting cinematic stories
            from lens to screen — from concept to broadcast-ready content.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>6+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Tools Mastered</p>
            </div>
          </div>
        </div>

        {/* Right - Profile Photo */}
        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-glow"></div>
            <div className="hero-photo-border">
              <div className="hero-photo-border-inner">
                <img src={sanchitPhoto} alt="Sanchit Kumar - Videographer" />
              </div>
            </div>

            {/* Floating Badge: Available */}
            <div className="hero-floating-badge">
              <div className="dot"></div>
              <div>
                <strong>Available for Work</strong>
                <span>Delhi, India</span>
              </div>
            </div>

            {/* Floating Tools */}
            <div className="hero-floating-tools">
              <p>Software</p>
              <span>Premiere Pro</span>
              <span>DaVinci Resolve</span>
              <span>After Effects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
