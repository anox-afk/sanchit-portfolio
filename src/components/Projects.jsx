import React from 'react';
import projectThumb1 from '../assets/project_thumb_1.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          <div className="project-card glass-panel">
            <div className="project-img-container">
              <img src={projectThumb1} alt="Broadcast Ready Packages" />
            </div>
            <div className="project-info">
              <h3>Broadcast-Ready Packages</h3>
              <p>Consistently delivered polished news segments requiring advanced audio cleanup and rapid-turnaround editing under pressure.</p>
            </div>
          </div>
          
          <div className="project-card glass-panel">
            <div className="project-img-container">
              <img src={projectThumb1} alt="Social Media Revamp" />
            </div>
            <div className="project-info">
              <h3>Social Media Content Revamp</h3>
              <p>Redesigned visual templates and editing styles for promotional reels, leading to a noticeable increase in cross-platform engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
