"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/images/carousel-1.jpg",
    alt: "Delegates holding TrustBroker Africa and Cybersecurity placards at a programme event",
  },
  {
    src: "/images/carousel-2.jpg",
    alt: "WACREN community members gathered for a cybersecurity training workshop",
  },
  {
    src: "/images/carousel-3.jpg",
    alt: "Panel session on investing in cyber resilience at the Global Conference on Cyber Capacity Building in Accra, Ghana",
  },
  {
    src: "/images/carousel-4.jpg",
    alt: "Africa Connect 3 exhibition stand at the Global Conference on Cyber Capacity Building",
  },
  {
    src: "/images/carousel-5.jpg",
    alt: "Participants at a TrustBroker Africa cybersecurity community meeting",
  },
  {
    src: "/images/carousel-6.jpg",
    alt: "Delegates networking at the AfricaConnect cybersecurity programme event",
  },
];

const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = slides.length;

  const step = useCallback((delta: number) => {
    setIndex((current) => (current + delta + total) % total);
  }, [total]);

  // Respect the user's reduced-motion preference (disables autoplay + zoom).
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Autoplay, paused on hover/focus and when reduced motion is requested.
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, total]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 50) step(delta > 0 ? -1 : 1);
  };

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

        .hero-inner {
          position: relative; z-index: 1;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 3rem;
          align-items: center;
        }

        h1 em {
          font-style: normal; color: var(--amber);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }
        .btn-secondary:hover { border-color: var(--amber); color: var(--amber); }

        /* --- Image carousel --- */
        .hero-carousel {
          position: relative;
          width: 100%;
        }

        .carousel-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          background: #00224a;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.7s ease, transform 5s ease;
          pointer-events: none;
        }

        .carousel-slide.is-active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: grid;
          place-items: center;
          padding: 0;
          background: rgba(0, 20, 45, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #fff;
          cursor: pointer;
          backdrop-filter: blur(6px);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }

        .carousel-nav:hover,
        .carousel-nav:focus-visible {
          background: var(--amber);
          border-color: var(--amber);
          outline: none;
        }

        .carousel-nav.prev { left: 0.85rem; }
        .carousel-nav.next { right: 0.85rem; }

        .carousel-dots {
          position: absolute;
          bottom: 0.9rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          gap: 0.5rem;
        }

        .carousel-dot {
          width: 0.55rem;
          height: 0.55rem;
          padding: 0;
          border: none;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.45);
          cursor: pointer;
          transition: background 0.25s, width 0.25s;
        }

        .carousel-dot:hover,
        .carousel-dot:focus-visible {
          background: #fff;
          outline: none;
        }

        .carousel-dot[aria-current="true"] {
          background: var(--amber);
          width: 1.7rem;
        }

        .carousel-counter {
          position: absolute;
          top: 0.85rem;
          right: 0.9rem;
          z-index: 3;
          font-family: var(--font-outfit), sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          color: #fff;
          background: rgba(0, 20, 45, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.22);
          padding: 0.3rem 0.6rem;
        }

        @media (max-width: 900px) {
          #hero { 
            padding: 6rem 1.5rem 3rem;
            min-height: auto;
          }
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
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>

      <div className="hero-bg"></div>
      <div className="grid-overlay"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1>
            WACREN Cybersecurity and
            <em> Trust Programme</em>
          </h1>
          <p className="hero-subtitle">
            Building Africa's Cybersecurity Trust Infrastructure for Research and Education — connecting trusted communities, training initiatives, operational incident response teams, and sectoral threat intelligence.
          </p>
          <div className="btn-group">
            <a href="#why" className="btn-secondary">Learn about the Programme</a>
          </div>
        </div>

        <div
          className="hero-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Programme highlights"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
        >
          <div className="carousel-viewport">
            {slides.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`carousel-slide${i === index ? " is-active" : ""}`}
                aria-hidden={i !== index}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}

            <button
              type="button"
              className="carousel-nav prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              className="carousel-nav next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <span className="carousel-counter" aria-hidden="true">
              {index + 1} / {total}
            </span>

            <div className="carousel-dots">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  className="carousel-dot"
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
