"use client";
import React, { useEffect, useRef } from 'react';

const pillarData = [
  {
    num: "01",
    title: "Trusted Community Collaboration",
    desc: "A trusted environment for knowledge exchange and operational coordination across the continent."
  },
  {
    num: "02",
    title: "Training & Capacity Building",
    desc: "Workshops, exercises, and gamified training to develop practical cyber defence skills."
  },
  {
    num: "03",
    title: "Operational Incident Response",
    desc: "CSIRTs and response teams protecting research and education infrastructure across Africa."
  },
  {
    num: "04",
    title: "Sectoral Threat Intelligence",
    desc: "ISAC capabilities for sharing threat intelligence and situational awareness across networks."
  }
];

export default function Pillars() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="overview" style={{ padding: '4rem 2.5rem' }} ref={sectionRef}>
      <style jsx>{`
        .overview-inner { max-width: 1100px; margin: 0 auto; }
        
        .section-label {
          font-family: var(--mono); font-size: 0.68rem;
          color: var(--teal); letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
          max-width: 3rem;
        }

        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800; color: var(--text); line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        .pillars {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: var(--border);
          border: 1px solid var(--border);
          margin-top: 2rem;
        }
        .pillar {
          background: var(--card); padding: 1.5rem;
          position: relative; overflow: hidden;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .pillar:hover { background: var(--teal-dim); box-shadow: inset 0 0 0 1px var(--teal); }
        .pillar::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--teal); transform: scaleX(0);
          transform-origin: left; transition: transform 0.3s;
        }
        .pillar:hover::before { transform: scaleX(1); }
        .pillar-num {
          font-family: var(--mono); font-size: 2rem; font-weight: 700;
          color: var(--grey-light); margin-bottom: 0.75rem; line-height: 1;
        }
        .pillar-title { font-size: 0.9rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
        .pillar-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

        @media (max-width: 900px) {
          .pillars { grid-template-columns: 1fr; background: none; gap: 0.75rem; }
          .pillar { border: 1px solid var(--border); padding: 1.25rem; }
          .pillar-num { font-size: 1.6rem; }
        }
      `}</style>
      <div className="overview-inner">
        <h2 className="reveal">Four Complementary Elements</h2>
        <p className="reveal" style={{ color: 'var(--muted)', maxWidth: '640px', lineHeight: '1.8' }}>
          The WACREN Cybersecurity &amp; Trust Programme brings together four complementary elements that form Africa's emerging cybersecurity trust infrastructure for research and education.
        </p>
        <div className="pillars">
          {pillarData.map((pillar, index) => (
            <div key={index} className="pillar reveal">
              <div className="pillar-num">{pillar.num}</div>
              <div className="pillar-title">{pillar.title}</div>
              <div className="pillar-desc">{pillar.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
