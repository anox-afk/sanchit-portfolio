import React from 'react';

const Expertise = () => {
  const skills = [
    {
      icon: '🎬',
      title: 'Post-Production',
      description: 'Video Editing, Multi-cam Editing, Advanced Color Grading, Sound Design & Audio Mixing, Motion Graphics, Seamless Transitions.'
    },
    {
      icon: '📷',
      title: 'Production & Camera',
      description: 'DSLR/Mirrorless Videography, Studio & On-Location Shoots, Lighting Setups, Gimbal Operation, Audio Capture, Visual Composition.'
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Social Media Strategy, Thumbnail Design, Brand Awareness, Audience Engagement Analytics, Content Optimization.'
    },
    {
      icon: '⚙️',
      title: 'Software Suite',
      description: 'Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, Photoshop, Adobe Express, Canva, Lightroom.'
    }
  ];

  const tools = [
    'Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Final Cut Pro',
    'Adobe Photoshop', 'Adobe Lightroom', 'Adobe Express', 'Canva',
    'Microsoft Office', 'Media Management Tools'
  ];

  return (
    <section id="expertise" className="section">
      <div className="section-inner">
        <p className="section-label">What I Do</p>
        <h2 className="section-title">Areas of Expertise</h2>
        <p className="section-desc">
          From the first frame to final delivery — I handle every step of the production pipeline.
        </p>

        <div className="expertise-grid">
          {skills.map((skill, i) => (
            <div key={i} className="expertise-card">
              <div className="expertise-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="software-chips">
          {tools.map((tool, i) => (
            <span key={i} className="chip">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
