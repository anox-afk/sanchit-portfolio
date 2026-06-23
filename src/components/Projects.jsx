import React from 'react';

import thumbFashion from '../assets/thumb_fashion.png';
import thumbProduct from '../assets/thumb_product.png';
import thumbTraditional from '../assets/thumb_traditional.png';
import thumbStore from '../assets/thumb_store.png';
import thumbCampus from '../assets/thumb_campus.png';
import thumbCreative from '../assets/thumb_creative.png';

const projects = [
  {
    thumb: thumbFashion,
    tag: 'Fashion',
    title: 'Annura Fashion',
    description: 'A stunning fashion film with dynamic transitions and cinematic color grading.'
  },
  {
    thumb: thumbProduct,
    tag: 'Product',
    title: 'Product Shoot',
    description: 'High-end product videography with controlled lighting and crisp composition.'
  },
  {
    thumb: thumbTraditional,
    tag: 'Cultural',
    title: 'Traditional Shoot',
    description: 'Capturing cultural essence with vibrant visuals and authentic storytelling.'
  },
  {
    thumb: thumbStore,
    tag: 'Commercial',
    title: 'Store Shoot',
    description: 'Brand-forward commercial shoot for a retail store environment.'
  },
  {
    thumb: thumbCampus,
    tag: 'Campus',
    title: 'SD Campus',
    description: 'Energetic campus videography featuring student life and campus culture.'
  },
  {
    thumb: thumbCreative,
    tag: 'Creative',
    title: 'Creative Reel',
    description: 'Experimental creative reel showcasing editing skills and motion design.'
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-video-wrap">
        <img src={project.thumb} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
        <div className="project-play-overlay">
          <div className="play-btn">▶</div>
        </div>
      </div>
      <div className="project-info">
        <div className="project-tag">{project.tag}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-desc">
          A glimpse of the stories behind the lens — from fashion to broadcast.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
