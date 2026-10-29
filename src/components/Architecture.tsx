"use client";
import React, { useEffect, useRef } from 'react';

export default function Architecture() {
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
    <section id="architecture" ref={sectionRef}>
      <style jsx>{`
        #architecture { max-width: 1100px; margin: 0 auto; padding: 2rem 2.5rem 3rem; }
        
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
        .section-label.grey { color: var(--grey); }
        .section-label.grey::after { background: var(--grey); opacity: 0.3; }

        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800; color: var(--text); line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        .arch-full {
          margin-top: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: var(--hero-bg);
          padding: 2rem 1.5rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 0.5rem;
          border-radius: 4px;
        }
        .arch-full-node {
          width: 100%; max-width: 480px;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1rem 1.5rem;
          text-align: center;
          position: relative;
          transition: border-color 0.2s;
          background: rgba(255,255,255,0.03);
        }
        .arch-full-node:hover { border-color: var(--amber); }
        .arch-full-node.top { border-color: var(--amber); background: rgba(230,126,34,0.1); }
        .arch-full-node.bottom { border-color: var(--grey); background: rgba(122,143,168,0.2); }
        
        .node-label {
          font-family: var(--mono); font-size: 0.85rem;
          letter-spacing: 0.06em; color: #ffffff; font-weight: 700;
        }
        .node-sub { font-size: 0.68rem; color: #c8d3e8; margin-top: 0.2rem; font-family: var(--mono); }
        .arch-full-arrow { color: var(--amber); font-size: 1.2rem; opacity: 0.8; }
        


        @media (max-width: 900px) {
          #architecture { padding: 3rem 1.25rem 3rem; }
          .arch-full { padding: 1.5rem 1rem; gap: 0.25rem; }
          .arch-full-node { 
            padding: 0.8rem 1rem; 
            max-width: 100%;
          }
          .node-label { font-size: 0.75rem; }
          .node-sub { font-size: 0.6rem; }
          .arch-full-arrow { font-size: 1.2rem; margin: 0.25rem 0; }
          .arch-caption { font-size: 0.78rem; margin-top: 1.25rem; padding: 0 0.5rem; }
        }
        .divider { height: 4px; background: linear-gradient(90deg, var(--teal) 0%, var(--grey) 50%, transparent 100%); opacity: 0.3; }
      `}</style>
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '4rem' }}>
        <h2 className="reveal">Programme Architecture</h2>
        
        <div className="arch-full reveal">
          <div className="arch-full-node top">
            <div className="node-label">TrustBroker Africa</div>
            <div className="node-sub">Community &amp; Collaboration</div>
          </div>
          <div className="arch-full-arrow">↓</div>
          <div className="arch-full-node">
            <div className="node-label">Training &amp; Capacity Building</div>
            <div className="node-sub">Workshops &nbsp;·&nbsp; Exercises &nbsp;·&nbsp; CyberBastion</div>
          </div>
          <div className="arch-full-arrow">↓</div>
          <div className="arch-full-node">
            <div className="node-label">Operational Teams — CSIRTs</div>
            <div className="node-sub">Incident response across research &amp; education networks</div>
          </div>
          <div className="arch-full-arrow">↓</div>
          <div className="arch-full-node bottom">
            <div className="node-label">WACREN ISAC — Threat Intelligence</div>
            <div className="node-sub">Under Development</div>
          </div>
        </div>
        

      </div>
    </section>
  );
}
