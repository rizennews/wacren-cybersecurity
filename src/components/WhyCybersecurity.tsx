"use client";
import React, { useEffect, useRef } from 'react';
import { Globe, AlertTriangle, Shield } from 'lucide-react';

export default function WhyCybersecurity() {
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
    <section id="why" ref={sectionRef}>
      <style jsx>{`
        #why {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 3rem 2.5rem;
        }
        .why-container {
          max-width: 1100px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 2rem;
        }
        .why-text {
          max-width: 100%;
        }
        
        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800; color: var(--text); line-height: 1.1;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        .why-text p {
          color: var(--muted); margin-bottom: 1rem; line-height: 1.8;
          font-size: 1.1rem;
        }
        .stat-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }
        .stat-card {
          border: 1px solid var(--border); padding: 1.5rem;
          display: flex; flex-direction: column; gap: 1rem;
          background: var(--card);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .stat-card:hover { 
          border-color: var(--amber); 
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
          transform: translateY(-4px);
        }
        .stat-icon {
          width: 3rem; height: 3rem; flex-shrink: 0;
          border: 1px solid var(--amber); color: var(--amber);
          display: flex; align-items: center; justify-content: center;
          background: rgba(230, 126, 34, 0.05);
        }
        .stat-text strong {
          font-family: var(--sans); font-size: 1rem;
          color: var(--text); display: block; margin-bottom: 0.75rem;
          font-weight: 700;
        }
        .stat-text span { font-size: 0.9rem; color: var(--muted); line-height: 1.6; }

        @media (max-width: 1000px) {
          .stat-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          #why { padding: 3rem 1.5rem; }
          .why-container { gap: 2rem; }
        }
      `}</style>
      <div className="why-container">
        <div className="why-text reveal">
          <h2>Why Cybersecurity Matters for Research &amp; Education Networks</h2>
          <p>Research and education networks across Africa are expanding rapidly, connecting universities, research institutes, digital libraries, and digital learning platforms.</p>
          <p>As digital infrastructure grows, cybersecurity threats targeting academic networks and research systems are also increasing.</p>
          <p>Protecting these environments requires trusted collaboration, cybersecurity skills development, coordinated incident response capabilities, and sectoral threat intelligence.</p>
        </div>
        <div className="stat-grid reveal">
          <div className="stat-card">
            <div className="stat-icon"><Globe size={24} /></div>
            <div className="stat-text">
              <strong>Expanding Networks</strong>
              <span>Universities, research institutes, and digital libraries connecting across the continent</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><AlertTriangle size={24} /></div>
            <div className="stat-text">
              <strong>Rising Threats</strong>
              <span>Academic networks face increasing cybersecurity incidents requiring coordinated response</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Shield size={24} /></div>
            <div className="stat-text">
              <strong>Trusted Collaboration</strong>
              <span>Building operational trust between teams protecting research &amp; education infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
