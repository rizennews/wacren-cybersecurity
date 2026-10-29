"use client";
import React, { useEffect, useRef } from 'react';

export default function GetInvolved() {
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
    <section id="get-involved" ref={sectionRef}>
      <style jsx>{`
        #get-involved {
          text-align: center;
          background: #002d5c;
          padding: 3rem 2.5rem;
        }
        .involved-inner { max-width: 640px; margin: 0 auto; }
        
        .section-label {
          font-family: var(--mono); font-size: 0.68rem;
          color: var(--amber); letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.75rem;
          justify-content: center;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.1);
          max-width: 3rem;
        }

        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800; color: #ffffff; line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        #get-involved p {
          color: #c8d3e8; margin-bottom: 2rem; font-size: 1rem; line-height: 1.8;
        }
        
        .involved-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        
        .btn-primary {
          font-family: var(--mono); font-size: 0.78rem;
          background: var(--amber); color: #fff;
          border: none; padding: 0.9rem 1.8rem; cursor: pointer;
          letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700;
          transition: transform 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          font-family: var(--mono); font-size: 0.78rem;
          background: transparent; color: #ffffff;
          border: 1px solid rgba(255,255,255,0.2); padding: 0.9rem 1.8rem; cursor: pointer;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-secondary:hover { border-color: var(--amber); color: var(--amber); }
      `}</style>
      <div className="involved-inner">
        <h2 className="reveal">Get Involved</h2>
        <p className="reveal">Cybersecurity professionals, research networks, and institutions can participate in the programme through the TrustBroker Africa community.</p>
        <div className="involved-btns reveal">
          <a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer" className="btn-primary">Join the Community ↗</a>
          <a href="https://indico.wacren.net/category/39/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Participate in Training ↗</a>
          <a href="mailto:secretariat@wacren.net" className="btn-secondary">Contact the Programme Team</a>
        </div>
      </div>
    </section>
  );
}
