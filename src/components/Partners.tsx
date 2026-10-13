"use client";
import React, { useEffect, useRef } from 'react';

const partnerData = [
  { name: "WACREN", logo: "/images/wacren.png", fallback: "WACREN" },
  { name: "TrustBroker Africa", logo: "/images/trustbroker.jpg", fallback: "TrustBroker Africa" },
  { name: "Open CSIRT Foundation", logo: "/images/open-csirt.png", fallback: "Open CSIRT Foundation" }
];

export default function Partners() {
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
    <section id="partners" ref={sectionRef}>
      <style jsx>{`
        #partners {
          max-width: 1100px; margin: 0 auto; text-align: center;
          padding: 6rem 1.25rem; background: var(--surface);
          border-top: 1px solid var(--border);
        }
        
        .section-label {
          font-family: var(--mono); font-size: 0.68rem;
          color: var(--grey); letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
          justify-content: center;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: var(--grey);
          max-width: 3rem; opacity: 0.3;
        }

        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800; color: var(--text); line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 3rem;
        }

        .partners-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .partner-logo-container {
          width: 200px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          padding: 1rem;
        }

        .partner-logo-container:hover {
          transform: translateY(-4px) scale(1.05);
        }

        .logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .partner-logo-container:hover .logo-img {
          filter: grayscale(0%);
          opacity: 1;
        }

        @media (max-width: 480px) {
          .partners-grid {
            gap: 1.5rem;
          }
          .partner-logo-container {
            width: 160px;
            height: 80px;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 className="reveal">Partners</h2>
        <div className="partners-grid reveal">
          {partnerData.map((partner, index) => (
            <div key={index} className="partner-logo-container">
              <img src={partner.logo} alt={partner.name} className="logo-img" title={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
