import React from 'react';
import thumbFashion from '../assets/thumb_fashion.png';
import thumbProduct from '../assets/thumb_product.png';
import thumbStore from '../assets/thumb_store.png';
import thumbTraditional from '../assets/thumb_traditional.png';
import thumbCampus from '../assets/thumb_campus.png';

const projects = [
  {
    num: '01',
    title: 'Annura Fashion',
    desc: 'Fashion editorial film showcasing the SS collection — dynamic cuts and soft chromatic grading.',
    tag: 'Fashion Film',
    thumb: thumbFashion,
  },
  {
    num: '02',
    title: 'iMac Product Shoot',
    desc: 'High-end product cinematography for Apple hardware — clean studio setup with macro detail shots.',
    tag: 'Product Shoot',
    thumb: thumbProduct,
  },
  {
    num: '03',
    title: 'Store Campaign',
    desc: 'Full commercial production for a retail brand — storytelling through environment and lifestyle.',
    tag: 'Commercial',
    thumb: thumbStore,
  },
  {
    num: '04',
    title: 'Traditional Shoot',
    desc: 'Cultural and traditional attire campaign — warm colour palette emphasising heritage and texture.',
    tag: 'Cultural',
    thumb: thumbTraditional,
  },
  {
    num: '05',
    title: 'SD Campus Film',
    desc: 'Corporate campus documentary — interviews, b-roll, and motion graphics in a polished package.',
    tag: 'Documentary',
    thumb: thumbCampus,
  },
];

const Projects = () => {
  return (
    <section className="section" id="work">
      {/* Spider web decoration */}
      <svg className="web-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" style={{opacity:0.05}}>
        {[0,45,90,135,180,225,270,315].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <line key={i} x1="0" y1="800" x2={0 + 700*Math.cos(rad)} y2={800 + 700*Math.sin(rad)} stroke="var(--accent)" strokeWidth="0.8"/>;
        })}
        {[80,180,280,380].map((r, i) => (
          <polygon key={i} stroke="var(--accent)" strokeWidth="0.8" fill="none"
            points={[0,45,90,135,180,225,270,315].map(a => {
              const rad = (a * Math.PI) / 180;
              return `${0+r*Math.cos(rad)},${800+r*Math.sin(rad)}`;
            }).join(' ')}
          />
        ))}
      </svg>

      <div className="container">
        <div className="section-tag">
          <span className="section-tag-text">02 / Selected Work</span>
          <div className="section-tag-line" />
        </div>

        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'2rem',marginBottom:'3rem'}}>
          <h2 className="section-title">Selected<br /><span className="accent">Projects.</span></h2>
          <a href="#contact" style={{fontFamily:'Space Grotesk, sans-serif',fontSize:'0.7rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--accent)',display:'flex',alignItems:'center',gap:'0.6rem',whiteSpace:'nowrap',marginBottom:'0.4rem'}}>
            <span style={{display:'inline-block',width:'1.5rem',height:'1px',background:'rgba(232,0,28,0.5)'}} />
            View All
          </a>
        </div>

        <div className="projects-list">
          {projects.map((p) => (
            <div key={p.num} className="project-row">
              <span className="project-num">{p.num}</span>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <span className="project-tag">{p.tag}</span>
              <img src={p.thumb} alt={p.title} className="project-thumb" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
