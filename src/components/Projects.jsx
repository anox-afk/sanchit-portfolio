import React, { useRef } from 'react';

import annuraFashion from '../assets/annura_fashion.mp4';
import productShoot from '../assets/product_shoot.mp4';
import traditionalShoot from '../assets/traditional_shoot.mp4';
import storeShoot from '../assets/store_shoot.mp4';
import sdCampus from '../assets/sd_campus.mp4';
import video487 from '../assets/video_487.mp4';

const projects = [
  {
    src: annuraFashion,
    tag: 'Fashion',
    title: 'Annura Fashion',
    description: 'A stunning fashion film with dynamic transitions and cinematic color grading.'
  },
  {
    src: productShoot,
    tag: 'Product',
    title: 'Product Shoot',
    description: 'High-end product videography with controlled lighting and crisp composition.'
  },
  {
    src: traditionalShoot,
    tag: 'Cultural',
    title: 'Traditional Shoot',
    description: 'Capturing cultural essence with vibrant visuals and authentic storytelling.'
  },
  {
    src: storeShoot,
    tag: 'Commercial',
    title: 'Store Shoot',
    description: 'Brand-forward commercial shoot for a retail store environment.'
  },
  {
    src: sdCampus,
    tag: 'Campus',
    title: 'SD Campus',
    description: 'Energetic campus videography featuring student life and campus culture.'
  },
  {
    src: video487,
    tag: 'Creative',
    title: 'Creative Reel',
    description: 'Experimental creative reel showcasing editing skills and motion design.'
  },
];

const VideoCard = ({ project }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-video-wrap">
        <video
          ref={videoRef}
          src={project.src}
          muted
          loop
          playsInline
          preload="metadata"
        />
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
          Hover over any project to preview — a glimpse of the stories behind the lens.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <VideoCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
