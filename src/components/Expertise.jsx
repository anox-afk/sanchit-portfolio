import React from 'react';

const skills = [
  {
    num: '01', label: 'Cinematography', featured: true,
    desc: 'Core strength — framing powerful visual stories with a cinematic eye, from concept to camera.',
    tags: ['Canon EOS R', 'Sony FX3', 'Gimbals', 'Lighting', 'Composition'],
  },
  {
    num: '02', label: 'Video Editing', featured: false,
    tags: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects'],
  },
  {
    num: '03', label: 'Color Grading', featured: false,
    tags: ['DaVinci Resolve', 'LUTs', 'Color Theory'],
  },
  {
    num: '04', label: 'Digital Marketing', featured: true,
    desc: 'Driving brand growth through strategic content — from reels to full campaigns.',
    tags: ['Social Media', 'Meta Ads', 'Content Strategy', 'Analytics', 'SEO'],
  },
  {
    num: '05', label: 'Motion Graphics', featured: false,
    tags: ['After Effects', 'Premiere', 'Transitions'],
  },
  {
    num: '06', label: 'Production', featured: false,
    tags: ['Pre-Production', 'Direction', 'Coordination', 'Post-Production'],
  },
];

const Expertise = () => {
  return (
    <section className="section skills-section" id="skills">
      {/* Spider web decoration */}
      <svg className="web-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" style={{opacity:0.05}}>
        {[0,45,90,135,180,225,270,315].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <line key={i} x1="600" y1="400" x2={600 + 700*Math.cos(rad)} y2={400 + 700*Math.sin(rad)} stroke="var(--accent)" strokeWidth="0.8"/>;
        })}
        {[80,180,280,380].map((r, i) => (
          <polygon key={i} stroke="var(--accent)" strokeWidth="0.8" fill="none"
            points={[0,45,90,135,180,225,270,315].map(a => {
              const rad = (a * Math.PI) / 180;
              return `${600+r*Math.cos(rad)},${400+r*Math.sin(rad)}`;
            }).join(' ')}
          />
        ))}
      </svg>

      <div className="container">
        <div className="section-tag">
          <span className="section-tag-text">01 / Skills</span>
          <div className="section-tag-line" />
        </div>

        <div className="skills-header">
          <h2 className="section-title">Technical<br /><span className="accent">Stack.</span></h2>
          <p className="skills-subtitle">Across the full pipeline — from pre-production planning to final colour grade and delivery.</p>
        </div>

        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.num} className={`skill-card ${s.featured ? 'featured' : 'normal'}`}>
              <div className="skill-card-corner" />
              <span className="skill-card-num">{s.num}</span>
              <div>
                <p className="skill-card-label">{s.label}</p>
                {s.desc && <p className="skill-card-desc">{s.desc}</p>}
              </div>
              <div className="skill-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
