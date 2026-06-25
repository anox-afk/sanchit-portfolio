import React, { useRef, useEffect } from 'react';
import sanchitBase from '../assets/sanchit_base.jpg';
import sanchitSpider from '../assets/sanchit_spiderman_face.png';

const Hero = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const cursorRef = useRef(null);
  const rafRef = useRef(null);

  // lerp values
  const cur = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const RADIUS = 130;

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    const cursor = cursorRef.current;
    let active = false;

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cur.current.x = lerp(cur.current.x, target.current.x, 0.1);
      cur.current.y = lerp(cur.current.y, target.current.y, 0.1);

      const x = cur.current.x;
      const y = cur.current.y;

      overlay.style.clipPath = `circle(${active ? RADIUS : 0}px at ${x}px ${y}px)`;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
      if (!active) {
        active = true;
        cursor.style.opacity = '1';
      }
    };

    const onLeave = () => {
      active = false;
      cursor.style.opacity = '0';
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        cursor: 'none',
        background: '#09090b',
      }}
    >
      {/* ── BASE LAYER: Normal photo ── */}
      <img
        src={sanchitBase}
        alt="Sanchit Kumar"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          filter: 'brightness(0.55) contrast(1.1) saturate(0.8)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* ── Dark gradient overlay for text readability ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(9,9,11,0.7) 0%, rgba(9,9,11,0.1) 50%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(9,9,11,0.8) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ── OVERLAY LAYER: Spiderman masked photo, revealed by circle ── */}
      <img
        ref={overlayRef}
        src={sanchitSpider}
        alt="Spiderman"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          filter: 'brightness(0.75) contrast(1.1)',
          clipPath: 'circle(0px at 50% 50%)',
          transition: 'none',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ── Custom cursor: spider icon ── */}
      <div
        ref={cursorRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {/* Circle ring */}
        <div style={{
          position: 'absolute',
          width: `${RADIUS * 2}px`,
          height: `${RADIUS * 2}px`,
          border: '1.5px solid rgba(232,0,28,0.5)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />
        {/* Spider icon */}
        <span style={{
          fontSize: '1rem',
          filter: 'drop-shadow(0 0 6px #e8001c)',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}>🕷</span>
      </div>

      {/* ── TEXT OVERLAY ── */}
      <div style={{
        position: 'absolute',
        bottom: '8%',
        left: '4%',
        zIndex: 5,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        {/* Small overline */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.62rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '0.3rem',
        }}>Your Friendly Neighborhood</p>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.62rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#e8001c',
          marginBottom: '1rem',
        }}>Videographer &amp; Content Creator</p>

        {/* Big name */}
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          lineHeight: 0.9,
          letterSpacing: '-3px',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          <span style={{
            display: 'block',
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            color: '#f0f0f0',
          }}>SANCHIT</span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            color: '#e8001c',
          }}>KUMAR.</span>
        </h1>
      </div>

      {/* ── Download CV link ── */}
      <a
        href="#contact"
        style={{
          position: 'absolute',
          bottom: '3%',
          left: '4%',
          zIndex: 5,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          cursor: 'default',
          transition: 'color 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#e8001c'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
      >
        ↓ Explore Work
      </a>

      {/* ── Scroll hint bottom right ── */}
      <div style={{
        position: 'absolute',
        bottom: '3%',
        right: '3%',
        zIndex: 5,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.6rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)',
        pointerEvents: 'none',
      }}>
        Scroll ↓
      </div>
    </section>
  );
};

export default Hero;
