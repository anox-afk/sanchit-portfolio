import React from 'react';

const Experience = () => {
  const jobs = [
    {
      title: 'Executive – Department of Digital Marketing',
      company: 'Rama Hospital & Research Centre | Noida, UP',
      date: 'April 2026 – Present',
      points: [
        'Spearhead digital marketing by conceptualizing, shooting, and editing healthcare-focused multimedia content.',
        'Collaborate with medical professionals to produce educational videos, patient testimonials, and promotional campaigns.',
        'Manage end-to-end video production workflows for YouTube, Instagram, and Facebook.',
        'Optimize video and visual content, analyzing performance metrics to increase audience retention.'
      ]
    },
    {
      title: 'Video & Photo Editor',
      company: 'SitaMarhi Tej',
      date: 'February 2025 – November 2025',
      points: [
        'Directed on-location videography and studio photography for high-stakes regional news coverage.',
        'Executed post-production using Adobe Premiere Pro — precision cutting, multi-cam, color correction, lower-thirds.',
        'Engineered dynamic thumbnails and social media creatives, significantly increasing viewer CTR and channel growth.',
        'Established a structured media asset management system for the editorial team.'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-bg">
      <div className="section-inner">
        <p className="section-label">Career</p>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-desc">Crafting compelling narratives at every role.</p>

        <div className="timeline">
          {jobs.map((job, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{job.date}</div>
              <div className="timeline-card">
                <h3>{job.title}</h3>
                <div className="company">{job.company}</div>
                <ul>
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
