"use client";
import React, { useEffect, useRef } from 'react';

const milestoneData = [
  {
    date: "26–27 March 2026",
    title: "WACREN Conference 2026",
    desc: "The WACREN Conference will showcase the full cybersecurity ecosystem connecting community collaboration, training initiatives, operational CSIRTs, and sectoral threat intelligence capabilities.",
    link: "https://wacren2026.wacren.net/"
  },
  {
    date: "15–22 May 2026",
    title: "TrustBroker Africa Community & Training Event",
    desc: "Bringing together cybersecurity professionals, CSIRTs, and research network operators from across Africa.",
    activities: [
      "Cybersecurity training workshops",
      "Community collaboration sessions",
      "Knowledge exchange",
      "CyberBastion League finals"
    ]
  }
];

export default function Milestones() {
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
    <section id="milestones" style={{ padding: '4rem 2.5rem', background: 'var(--ink)' }} ref={sectionRef}>
      <style jsx>{`
        .milestones-inner { max-width: 1100px; margin: 0 auto; }
        
        .section-label {
          font-family: var(--mono); font-size: 0.68rem;
          color: var(--grey); letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
          max-width: 3rem;
          opacity: 0.3;
        }

        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800; color: var(--text); line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        .milestones-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1.5rem; margin-top: 2rem;
        }
        .milestone-card {
          border: 1px solid var(--border);
          border-top: 3px solid var(--grey);
          background: var(--card);
          padding: 1.5rem; position: relative; overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .milestone-card:hover {
          border-color: var(--teal);
          border-top-color: var(--teal);
          box-shadow: 0 6px 20px rgba(0, 74, 153, 0.09);
        }
        .milestone-date {
          font-family: var(--mono); font-size: 0.72rem;
          color: var(--teal); letter-spacing: 0.1em;
          margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;
        }
        .milestone-date::before {
          content: ''; width: 0.5rem; height: 0.5rem;
          background: var(--teal); border-radius: 50%;
        }
        
        h3 { font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text); font-family: var(--sans); font-weight: 700; }
        
        .milestone-card p { font-size: 0.88rem; color: var(--muted); line-height: 1.75; }
        
        .milestone-activities {
          margin-top: 1rem; padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .milestone-activities li {
          font-size: 0.82rem; color: var(--muted);
          list-style: none; padding: 0.2rem 0;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .milestone-activities li::before {
          content: '–'; color: var(--teal); font-weight: 700;
        }

        @media (max-width: 900px) {
          #milestones { padding: 3rem 1.25rem !important; }
          .milestones-grid { grid-template-columns: 1fr; gap: 1rem; }
          .milestone-card { padding: 1.5rem; }
          h3 { font-size: 1rem; }
          .milestone-card p { font-size: 0.82rem; }
        }
      `}</style>
      <div className="milestones-inner">
        <h2 className="reveal">Upcoming Milestones</h2>
        <div className="milestones-grid">
          {milestoneData.map((milestone, index) => (
            <div key={index} className="milestone-card reveal">
              <div className="milestone-date">{milestone.date}</div>
              <h3>{milestone.title}</h3>
              <p>{milestone.desc}</p>
              {milestone.activities && (
                <ul className="milestone-activities">
                  {milestone.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              )}
              {milestone.link && (
                <div style={{ marginTop: '1.5rem' }}>
                  <a href={milestone.link} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.7rem',
                    color: 'var(--teal)',
                    textDecoration: 'none',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    View Conference Details ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
