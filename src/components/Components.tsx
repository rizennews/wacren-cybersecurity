"use client";
import React, { useEffect, useRef } from 'react';

const componentData = [
  {
    tag: "Community",
    title: "TrustBroker Africa",
    desc: "A community initiative connecting cybersecurity professionals and incident response teams across Africa. It provides a trusted environment for collaboration, knowledge exchange, and operational coordination between teams responsible for protecting research and education infrastructure.",
    link: "https://trustbroker.africa",
    linkText: "trustbroker.africa ↗"
  },
  {
    tag: "Training",
    title: "Training & Capacity Building",
    desc: "The programme supports cybersecurity skills development through workshops, collaborative exercises, incident response training, and cybersecurity maturity development. These initiatives help strengthen operational readiness among cybersecurity professionals serving research and education institutions."
  },
  {
    tag: "Gamified Training",
    title: "CyberBastion League",
    desc: "Introducing the CyberBastion League in Africa in collaboration with the Open CSIRT Foundation. CyberBastion provides a gamified cyber defence training platform where teams participate in simulated incident response scenarios and cyber defence challenges.",
    subDesc: "The league begins online and culminates with face-to-face finals during the TrustBroker Africa community event.",
    link: "https://indico.wacren.net/event/270",
    linkText: "indico.wacren.net ↗"
  },
  {
    tag: "Intelligence",
    title: "WACREN ISAC",
    desc: "WACREN is establishing a sectoral Information Sharing and Analysis Centre (ISAC) to support threat intelligence sharing and situational awareness across research and education networks.",
    subDesc: "The ISAC will enable participating organisations to exchange cyber threat intelligence, identify emerging risks, and coordinate responses to cybersecurity incidents.",
    isAmber: true,
    status: "Under Development"
  }
];

export default function Components() {
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
    <section id="components" ref={sectionRef}>
      <style jsx>{`
        #components {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 6rem 2.5rem;
        }
        .components-inner { max-width: 1100px; margin: 0 auto; }
        
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

        .component-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem; margin-top: 2.5rem;
        }
        .component-card {
          border: 1px solid var(--border);
          background: var(--card);
          padding: 2rem;
          position: relative;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .component-card:hover {
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0, 74, 153, 0.10);
        }
        .component-card.amber-card { border-left: 3px solid var(--amber); }
        .component-card.amber-card:hover { border-color: var(--amber); box-shadow: 0 8px 28px rgba(230,126,34,0.10); }
        
        .card-tag {
          font-family: var(--mono); font-size: 0.6rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--teal); margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .card-tag::before {
          content: ''; display: block; width: 1.5rem; height: 1px; background: var(--teal);
        }
        .amber-card .card-tag { color: var(--amber); }
        .amber-card .card-tag::before { background: var(--amber); }
        
        h3 {
          font-family: var(--sans); font-size: 1.15rem;
          font-weight: 700; color: var(--text); margin-bottom: 0.75rem;
        }

        .component-card p {
          font-size: 0.9rem; color: var(--muted); line-height: 1.75; margin-bottom: 0.75rem;
        }
        .component-card a {
          font-family: var(--mono); font-size: 0.7rem;
          color: var(--teal); text-decoration: none; letter-spacing: 0.08em;
          transition: opacity 0.2s;
        }
        .component-card a:hover { opacity: 0.7; }
        .amber-card a { color: var(--amber); }
        
        .status-badge {
          display: inline-block;
          font-family: var(--mono); font-size: 0.58rem;
          color: var(--amber); border: 1px solid var(--amber);
          padding: 0.1rem 0.4rem; letter-spacing: 0.1em;
          text-transform: uppercase; margin-top: 0.3rem;
        }

        @media (max-width: 900px) {
          #components { padding: 3rem 1.25rem !important; }
          .component-grid { grid-template-columns: 1fr; gap: 1rem; }
          .component-card { padding: 1.25rem; }
          h3 { font-size: 1.05rem; }
          .component-card p { font-size: 0.85rem; line-height: 1.6; }
          .status-badge { font-size: 0.52rem; }
        }
      `}</style>
      <div className="components-inner">
        <h2 className="reveal">What the Programme Delivers</h2>
        <div className="component-grid">
          {componentData.map((comp, index) => (
            <div key={index} className={`component-card reveal ${comp.isAmber ? 'amber-card' : ''}`}>
              <h3>{comp.title}</h3>
              <p>{comp.desc}</p>
              {comp.subDesc && <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{comp.subDesc}</p>}
              {comp.link && <a href={comp.link}>{comp.linkText}</a>}
              {comp.status && <span className="status-badge">{comp.status}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
