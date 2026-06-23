import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content glass-panel p-4" style={{ padding: '3rem' }}>
          <p className="about-text">
            Innovative and technically proficient Videographer and Digital Content Specialist with a
            proven track record in end-to-end video production, digital marketing synergy, and
            compelling visual storytelling.
          </p>
          <p className="about-text">
            Equipped with comprehensive expertise across the entire
            production pipeline—from storyboarding and on-site camera operation to advanced post-production and color grading. Adept at transforming raw footage into high-impact, broadcast-ready content and engaging social media campaigns that elevate brand presence and drive
            audience engagement in fast-paced environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
