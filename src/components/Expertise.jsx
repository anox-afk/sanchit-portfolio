import React from 'react';

const Expertise = () => {
  const skills = [
    {
      title: "Post-Production",
      description: "Video Editing, Multi-cam Editing, Advanced Color Grading, Sound Design & Audio Mixing, Motion Graphics, Seamless Transitions."
    },
    {
      title: "Production & Camera",
      description: "DSLR/Mirrorless Videography, Studio & On-Location Shoots, Lighting Setups, Gimbal Operation, Audio Capture, Visual Composition."
    },
    {
      title: "Digital Marketing",
      description: "Social Media Strategy, Thumbnail Design, Brand Awareness, Audience Engagement Analytics, Content Optimization."
    },
    {
      title: "Software Suite",
      description: "Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, Photoshop, Canva, Lightroom."
    }
  ];

  return (
    <section id="expertise">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <div key={index} className="expertise-card glass-panel">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
