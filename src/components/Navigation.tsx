"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <>
    <header className="header-sticky">
      <style jsx global>{`
        :root {
          --font-outfit-fallback: "Outfit", sans-serif;
        }
        .header-sticky {
          position: fixed !important;
          top: 0 !important;
          left: 0;
          right: 0;
          z-index: 2000 !important;
          width: 100%;
          background: var(--white);
        }
        .top-bar {
          background: var(--teal) !important;
          width: 100%;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
        .top-bar-content {
          padding: 0.4rem 1rem;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100%;
        }
        .top-bar span {
          font-family: var(--mono);
          font-size: 0.52rem;
          color: rgba(255,255,255,0.8) !important;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 1.4;
          text-align: center;
          display: inline-block;
          max-width: 100%;
        }
        .top-bar a {
          color: #ffffff !important;
          text-decoration: none !important;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          margin-left: 0.4rem;
        }

        .nav-container {
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          padding: 0.8rem 2.5rem;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        }
        
        .nav-logo {
          font-family: var(--mono); font-size: 0.7rem; color: var(--teal) !important;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none !important;
        }
        .nav-logo span { color: var(--text) !important; }

        .nav-logo-link {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nav-logo-img {
          display: block;
          height: 46px;
          width: auto;
        }
        
        .nav-links { 
          display: flex; gap: 2rem; list-style: none; align-items: center;
        }
        
        .nav-links li a {
          font-family: var(--mono); font-size: 0.68rem; color: #64748b;
          text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-links li a:hover { color: var(--teal); }
        
        .nav-cta {
          font-family: var(--mono); font-size: 0.68rem;
          background: var(--teal); color: #fff !important;
          border: none; padding: 0.55rem 1.4rem; cursor: pointer;
          letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700;
          text-decoration: none;
        }

        .mobile-toggle {
          display: none;
          background: none; border: none; color: var(--text);
          cursor: pointer;
        }

        .mobile-cta { display: none; }

        @media (max-width: 900px) {
          .nav-container { padding: 0.7rem 1.5rem; }
          .nav-logo-img { height: 38px; }
          .mobile-toggle { display: flex; }
          
          .nav-links {
            position: fixed; 
            top: 4.5rem; 
            right: 0; 
            left: 0;
            background: #fff;
            flex-direction: column; 
            justify-content: flex-start; 
            align-items: center;
            padding: 2.5rem 1.5rem;
            border-bottom: 1px solid var(--border);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1050;
            gap: 1.5rem;
            height: auto;
            max-height: calc(100vh - 4.5rem);
            overflow-y: auto;
          }
          .nav-links-open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .nav-links li { 
            width: 100%; 
            padding: 0.15rem 0;
            list-style: none;
          }
          
          .nav-links li a { 
            font-size: 0.85rem !important; 
            font-family: var(--sans) !important; 
            font-weight: 700 !important;
            color: var(--text) !important;
            letter-spacing: 0.01em !important; 
            text-transform: none !important;
            width: 100% !important;
            display: block !important;
            text-decoration: none !important;
            text-align: center;
          }
          .nav-links li a:hover { color: var(--teal) !important; }

          .nav-links li:nth-child(2) {
            border-bottom: 2px solid #f0f3f8;
            padding-bottom: 0.6rem;
            margin-bottom: 0.2rem;
          }

          .mobile-cta {
            display: block !important;
            width: 100%;
            background: var(--amber) !important;
            color: #ffffff !important;
            text-align: center;
            padding: 0.85rem;
            border-radius: 12px;
            font-family: var(--sans);
            font-weight: 800;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-decoration: none !important;
            margin-top: 0.4rem;
          }
          
          .nav-cta { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-container">
        
        <Link href="/" className="nav-logo nav-logo-link" onClick={() => setIsMenuOpen(false)} aria-label="WACREN Cybersecurity and Trust Programme — home">
          <img src="/images/wacren.png" alt="WACREN - West and Central African Research and Education Network logo" className="nav-logo-img" width={140} height={46} fetchPriority="high" />
        </Link>
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li><Link href="/#why" onClick={() => setIsMenuOpen(false)}>Why It Matters</Link></li>
          <li><Link href="/#components" onClick={() => setIsMenuOpen(false)}>Components</Link></li>
          <li><Link href="/#milestones" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
          <li><a href="mailto:secretariat@wacren.net" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          <a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer" className="mobile-cta">TrustBroker Africa</a>
        </ul>

        <a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer" className="nav-cta">
          TrustBroker Africa <ArrowRight size={14} />
        </a>
        
        <button className="mobile-toggle" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
    </>
  );
}
