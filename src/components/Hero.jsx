import React, { useRef, useEffect } from 'react';
import sanchitBase from '../assets/sanchit_base.png';
import sanchitSpider from '../assets/sanchit_spider_overlay.png';

const RADIUS = 140; // reveal circle radius in px

const Hero = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const rafRef = useRef(null);
  const cur = useRef({ x: -9999, y: -9999 });
  const target = useRef({ x: -9999, y: -9999 });
  const isInside = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cur.current.x = lerp(cur.current.x, target.current.x, 0.12);
      cur.current.y = lerp(cur.current.y, target.current.y, 0.12);
      const { x, y } = cur.current;

      if (isInside.current) {
        overlay.style.clipPath = `circle(${RADIUS}px at ${x}px ${y}px)`;
      } else {
        overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
      }

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
      isInside.current = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onLeave = () => {
      isInside.current = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
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
      {/* ─── BASE IMAGE: Clean dark portrait, no mask ─── */}
      <img
        src={sanchitBase}
        alt="Sanchit Kumar"
        draggable={false}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // Portrait image: face is in upper-center — shift so face centers on landscape screen
          objectPosition: 'center 10%',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* ─── Left dark vignette for text readability ─── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(100deg, rgba(9,9,11,0.75) 0%, rgba(9,9,11,0.2) 45%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      {/* Bottom vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(9,9,11,0.85) 0%, transparent 40%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ─── OVERLAY IMAGE: Same frame but with Spiderman mask ─── */}
      <img
        ref={overlayRef}
        src={sanchitSpider}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 10%',
          clipPath: 'circle(0px at 50% 50%)',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ─── Custom cursor: ring ─── */}
      <div
        ref={cursorRingRef}
        style={{
          position: 'absolute',
          width: `${RADIUS * 2}px`,
          height: `${RADIUS * 2}px`,
          borderRadius: '50%',
          border: '1.5px solid rgba(232, 0, 28, 0.6)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10,
          opacity: 0,
          transition: 'opacity 0.3s',
          top: 0,
          left: 0,
        }}
      />

      {/* ─── Custom cursor: spider dot ─── */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'absolute',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(232,0,28,0.15)',
          border: '1px solid rgba(232,0,28,0.8)',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 11,
          opacity: 0,
          transition: 'opacity 0.3s',
          top: 0,
          left: 0,
          fontSize: '11px',
        }}
      >🕷</div>

      {/* ─── TEXT: bottom-left overlay ─── */}
      <div style={{
        position: 'absolute',
        bottom: '8%',
        left: '5%',
        zIndex: 5,
        pointerEvents: 'none',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.45)',
          marginBottom: '0.25rem',
        }}>
          Your Friendly Neighborhood
        </p>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#e8001c',
          marginBottom: '1rem',
        }}>
          Videographer &amp; Content Creator
        </p>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          lineHeight: 0.88,
          letterSpacing: '-3px',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          <span style={{
            display: 'block',
            fontSize: 'clamp(3.5rem, 9.5vw, 9.5rem)',
            color: '#f0f0f0',
          }}>SANCHIT</span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(3.5rem, 9.5vw, 9.5rem)',
            color: '#e8001c',
          }}>KUMAR.</span>
        </h1>
      </div>

      {/* ─── Download / Explore ─── */}
      <a
        href="#work"
        style={{
          position: 'absolute',
          bottom: '3.5%',
          left: '5%',
          zIndex: 5,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'color 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#e8001c'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
      >
        ↓ Explore Work
      </a>

      {/* ─── Scroll hint bottom-right ─── */}
      <p style={{
        position: 'absolute',
        bottom: '3.5%',
        right: '3%',
        zIndex: 5,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.55rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.25)',
        pointerEvents: 'none',
        margin: 0,
      }}>
        Scroll ↓
      </p>
    </section>
  );
};

export default Hero;
