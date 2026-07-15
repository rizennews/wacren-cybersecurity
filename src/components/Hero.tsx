"use client";

export default function Hero() {
  return (
    <section id="hero">
      <style jsx>{`
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
        }

        .grid-overlay {
          position: absolute; inset: 0; z-index: 0; opacity: 0.07;
          background-image:
            linear-gradient(var(--teal) 1px, transparent 1px),
            linear-gradient(90deg, var(--teal) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        .hero-eyebrow::before {
          content: ''; display: block;
          width: 2.5rem; height: 1.5px; background: #e67e22;
        }
        .hero-eyebrow::after { display: none; }

        h1 em {
          font-style: normal; color: var(--amber);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }
        .btn-secondary:hover { border-color: var(--amber); color: var(--amber); }

        @media (max-width: 900px) {
          #hero { 
            padding: 6rem 1.5rem 3rem;
            min-height: auto;
          }
          .hero-eyebrow { margin-bottom: 1.5rem; }
          .hero-eyebrow::before { width: 2rem; }
          h1 {
            font-size: clamp(2rem, 10vw, 3rem);
            margin-bottom: 1.5rem;
          }
          .hero-subtitle {
            font-size: 1.05rem;
            margin-bottom: 2rem;
          }
          .btn-group {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 0.85rem;
          }
        }
      `}</style>

      <div className="hero-bg"></div>
      <div className="grid-overlay"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">Programme Overview</div>
        <h1>
          WACREN Cybersecurity and
          <em> Trust Programme</em>
        </h1>
        <p className="hero-subtitle">
          Building Africa's Cybersecurity Trust Infrastructure for Research and Education — connecting trusted communities, training initiatives, operational incident response teams, and sectoral threat intelligence.
        </p>
        <div className="btn-group">
          <a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer" className="btn-primary">Explore TrustBroker Africa ↗</a>
          <a href="#why" className="btn-secondary">Learn about the Programme</a>
        </div>
      </div>
    </section>
  );
}
