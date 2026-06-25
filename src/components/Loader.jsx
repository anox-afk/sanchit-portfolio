import React, { useEffect, useRef, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tips = ['Framing the shot...', 'Cutting footage...', 'Color grading...', 'Rendering...'];
    let tip = 0;
    const tipEl = document.getElementById('loader-tip');

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 12 + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return Math.min(next, 100);
      });
    }, 120);

    const tipInterval = setInterval(() => {
      tip = (tip + 1) % tips.length;
      if (tipEl) tipEl.textContent = tips[tip];
    }, 800);

    return () => { clearInterval(interval); clearInterval(tipInterval); };
  }, []);

  return (
    <div className={`loader-screen${done ? ' hidden' : ''}`}>
      {/* Web bg */}
      <svg className="loader-web-svg" viewBox="0 0 1200 800" fill="none" aria-hidden="true">
        {[0,45,90,135,180,225,270,315].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <line key={i} x1="600" y1="400" x2={600 + 700*Math.cos(rad)} y2={400 + 700*Math.sin(rad)} stroke="#e8001c" strokeWidth="0.8"/>;
        })}
        {[80,180,280,380].map((r, i) => (
          <polygon key={i} stroke="#e8001c" strokeWidth="0.8" fill="none"
            points={[0,45,90,135,180,225,270,315].map(a => {
              const rad = (a * Math.PI) / 180;
              return `${600+r*Math.cos(rad)},${400+r*Math.sin(rad)}`;
            }).join(' ')}
          />
        ))}
      </svg>

      <div className="loader-content">
        <div className="loader-line" />
        <div className="loader-name">
          Sanchit<span>.</span>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'0.5rem',width:'200px'}}>
          <div className="loader-bar-wrap">
            <div className="loader-bar-fill" style={{width:`${progress}%`}} />
          </div>
          <div style={{display:'flex',justifyContent:'space-between',width:'100%', opacity: progress > 0 ? 1 : 0, transition:'opacity 0.3s'}}>
            <span className="loader-tip" id="loader-tip" style={{opacity:1}}>Framing the shot...</span>
            <span className="loader-percent">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
