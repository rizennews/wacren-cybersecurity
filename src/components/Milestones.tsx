"use client";
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const milestoneData = [
  {
    date: "26–27 March 2026",
    title: "WACREN Conference 2026",
    excerpt: "Connected Futures: Advancing Africa's Digital Sovereignty Through Open Collaboration — bringing researchers, technologists, and policymakers together in Banjul, The Gambia.",
    desc: "The conference explores how open collaboration and shared digital ecosystems strengthen Africa’s research capacity and digital sovereignty. Highlighting initiatives such as LIBSENSE, Africa Digital Campus, WACREN CLI-MET, and EduAI, with targeted pre-conference workshops and project meetings.",
    image: "/images/WACREN 2026 poster.jpeg",
    startTime: "26 March 2026, 9:00 AM",
    endTime: "27 March 2026, 5:00 PM",
    timeZone: "UTC",
    location: "Sir Dawda Kairaba Jawara International Conference Center (SDKJICC), Banjul, The Gambia",
    activities: [
      "Theme: Connected Futures: Advancing Africa's Digital Sovereignty",
      "Focus: Advanced Connectivity, HPC, and Distributed Data Ecosystems",
      "Showcasing LIBSENSE, Africa Digital Campus, CLI-MET & EduAI",
      "Pre-conference targeted workshops & project meetings",
      "Registration: $150 (Africa resident) / $200 (Non-resident)"
    ],
    link: "https://wacren2026.wacren.net/"
  },
  {
    date: "15–22 May 2026",
    title: "TrustBroker Africa Community & Training Event",
    excerpt: "Bringing together cybersecurity professionals, CSIRTs, and research network operators from across Africa to a week of community and training collaboration.",
    desc: "This annual community and training event strengthens trusted collaboration and develops operational cybersecurity capabilities across the continent.",
    image: "/images/TrustBroker Africa (TBA) VI - Community & Training Event.png",
    startTime: "18 May 2026, 9:00 AM",
    endTime: "22 May 2026, 5:00 PM",
    timeZone: "Africa/Accra",
    location: "Office of the NSA, Old JIB Hall, National Cybersecurity Coordination Centre",
    activities: [
      "CSIRT and Security Operations Training",
      "Community Collaboration Sessions",
      "Operational Security Discussions",
      "CyberBastion Africa League Finals",
      "CyberBastion International League Launch"
    ],
    link: "https://indico.wacren.net/event/270/"
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
    <section id="milestones" style={{ padding: '3rem 2.5rem', background: 'var(--ink)' }} ref={sectionRef}>
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
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .milestone-card:hover {
          border-color: var(--teal);
          border-top-color: var(--teal);
          box-shadow: 0 6px 20px rgba(0, 74, 153, 0.09);
        }
        .milestone-image {
          height: 240px;
          background: var(--surface);
        }
        .milestone-image img {
          display: block; width: 100%; height: 100%;
          object-fit: cover;
        }
        .milestone-body { padding: 1.5rem; }
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
        
        .milestone-meta {
          margin-top: 1.25rem; padding-top: 1.25rem;
          border-top: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 0.6rem;
        }
        .milestone-meta-row {
          display: flex; align-items: flex-start; gap: 0.5rem;
          font-size: 0.82rem; color: var(--muted);
          line-height: 1.5;
        }
        .milestone-meta-row svg { color: var(--teal); flex-shrink: 0; margin-top: 0.15rem; }
        
        .milestone-activities {
          margin-top: 1.25rem; padding-top: 1.25rem;
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

        .past-events-button {
          margin-top: 3rem;
          text-align: center;
        }
        .past-events-button a {
          font-family: var(--mono);
          font-size: 0.75rem;
          color: var(--teal);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
          border: 1px solid var(--teal);
          padding: 0.85rem 2rem;
          display: inline-block;
          transition: all 0.2s;
        }
        .past-events-button a:hover {
          background: var(--teal);
          color: #fff;
        }

        @media (max-width: 900px) {
          #milestones { padding: 3rem 1.25rem !important; }
          .milestones-grid { grid-template-columns: 1fr; gap: 1rem; }
          .milestone-body { padding: 1.25rem; }
          h3 { font-size: 1rem; }
          .milestone-card p { font-size: 0.82rem; }
        }
      `}</style>
      <div className="milestones-inner">
        <h2 className="reveal">Past Events</h2>
        <div className="milestones-grid">
          {milestoneData.map((milestone, index) => (
            <div key={index} className="milestone-card reveal">
              {milestone.image && (
                <div className="milestone-image">
                  <img src={milestone.image} alt={`${milestone.title} banner and event details`} loading="lazy" decoding="async" width={600} height={300} />
                </div>
              )}
              <div className="milestone-body">
                <div className="milestone-date">{milestone.date}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.excerpt || milestone.desc}</p>
                {milestone.startTime && (
                  <div className="milestone-meta">
                    <div className="milestone-meta-row">
                      <Calendar size={14} />
                      <span>{milestone.startTime} – {milestone.endTime} · {milestone.timeZone}</span>
                    </div>
                    <div className="milestone-meta-row">
                      <MapPin size={14} />
                      <span>{milestone.location}</span>
                    </div>
                  </div>
                )}
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
            </div>
          ))}
        </div>
        <div className="past-events-button reveal">
          <a href="https://indico.wacren.net/category/39/" target="_blank" rel="noopener noreferrer">
            View past cybersecurity events
          </a>
        </div>
      </div>
    </section>
  );
}
