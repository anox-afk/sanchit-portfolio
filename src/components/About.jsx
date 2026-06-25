import React from 'react';

const About = () => {
  return (
    <section className="section" id="about-detail">
      {/* Spider web decoration */}
      <svg className="web-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" style={{opacity:0.06}}>
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
          <span className="section-tag-text">04 / About</span>
          <div className="section-tag-line" />
        </div>

        <div className="about-grid">
          {/* Left: stats */}
          <div>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-num">2<span className="accent">+</span></div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">50<span className="accent">+</span></div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">15<span className="accent">+</span></div>
                <div className="stat-label">Brand Clients</div>
              </div>
              <div className="stat-box">
                <div className="stat-num"><span className="accent">∞</span></div>
                <div className="stat-label">Passion for Film</div>
              </div>
            </div>

            {/* Tools */}
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem',marginTop:'1rem'}}>
              {['Premiere Pro','After Effects','DaVinci Resolve','Canon EOS R','Sony FX3','Meta Ads','Lightroom','Audition'].map(t => (
                <span key={t} style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'0.68rem',padding:'0.3rem 0.7rem',borderRadius:'40px',border:'1px solid var(--border)',color:'var(--text-muted)',background:'rgba(255,255,255,0.02)'}}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className="about-body">
            <h2>The Story<br />Behind the <span className="accent">Lens.</span></h2>
            <p>
              I'm Sanchit Kumar — a videographer and digital content specialist based in Delhi, 
              with a deep passion for storytelling through the camera. Every frame is intentional, 
              every cut purposeful.
            </p>
            <p>
              From fashion films and product shoots to brand campaigns and corporate documentaries, 
              I bring a cinematic sensibility to every project. My work lives at the intersection 
              of art and strategy — visuals that don't just look beautiful, they perform.
            </p>
            <p>
              Currently working as Executive – Digital Marketing at Rama Hospital & Research Centre, 
              driving their brand presence across digital platforms while continuing to take on 
              freelance projects that challenge my craft.
            </p>
            <div style={{marginTop:'2rem',display:'flex',gap:'1.5rem'}}>
              <a href="#contact" style={{display:'flex',alignItems:'center',gap:'0.6rem',fontFamily:'Space Grotesk,sans-serif',fontSize:'0.7rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--accent)'}}>
                <span style={{width:'1.5rem',height:'1px',background:'rgba(232,0,28,0.5)',display:'inline-block'}} />
                Let's Work
              </a>
              <a href="#work" style={{display:'flex',alignItems:'center',gap:'0.6rem',fontFamily:'Space Grotesk,sans-serif',fontSize:'0.7rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--text-dim)'}}>
                <span style={{width:'1rem',height:'1px',background:'var(--border)',display:'inline-block'}} />
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
