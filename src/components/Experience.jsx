import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="about">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content glass-panel">
              <h3>Executive – Department of Digital Marketing</h3>
              <span className="timeline-date">Rama Hospital & Research Centre | Noida, UP | April 2026 – Present</span>
              <ul>
                <li>Spearhead digital marketing initiatives by conceptualizing, shooting, and editing healthcare-focused multimedia content.</li>
                <li>Collaborate with medical professionals to produce educational videos and patient testimonials adhering to medical compliance.</li>
                <li>Manage end-to-end video production workflows for platforms like YouTube, Instagram, and Facebook.</li>
                <li>Optimize video and visual content for algorithms and analyze metrics for audience retention.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item right">
            <div className="timeline-content glass-panel">
              <h3>Video & Photo Editor</h3>
              <span className="timeline-date">SitaMarhi Tej | February 2025 – November 2025</span>
              <ul>
                <li>Directed on-location videography and studio photography for regional news under tight deadlines.</li>
                <li>Executed post-production workflows using Adobe Premiere Pro (cutting, multi-cam, color correction, lower-thirds).</li>
                <li>Engineered dynamic thumbnails and promotional visuals, increasing CTR and channel growth.</li>
                <li>Established a structured media asset management system for the editorial team.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
