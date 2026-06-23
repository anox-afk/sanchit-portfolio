import React from 'react';
import sanchitPhoto from '../assets/sanchit_profile.png';

const About = () => {
  return (
    <section id="about" className="section about-bg">
      <div className="section-inner">
        <div className="about-grid">
          {/* Left: Photo */}
          <div className="about-image-wrap">
            <img src={sanchitPhoto} alt="Sanchit Kumar" />
            <div className="about-image-accent"></div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Turning Vision Into<br />Visual Reality</h2>
            <p>
              Innovative and technically proficient Videographer and Digital Content Specialist
              with a proven track record in end-to-end video production, digital marketing
              synergy, and compelling visual storytelling.
            </p>
            <p>
              Equipped with comprehensive expertise across the entire production pipeline—from
              storyboarding and on-site camera operation to advanced post-production and color
              grading. Adept at transforming raw footage into high-impact, broadcast-ready
              content.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">DSLR & Mirrorless Videography</div>
              <div className="highlight-item">Advanced Color Grading</div>
              <div className="highlight-item">Studio & On-Location Shoots</div>
              <div className="highlight-item">Sound Design & Audio Mixing</div>
              <div className="highlight-item">Motion Graphics</div>
              <div className="highlight-item">Social Media Strategy</div>
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
