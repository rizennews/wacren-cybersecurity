"use client";
import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/west-and-central-african-research-and-education-network/',
      icon: <Linkedin size={18} />
    },
    { 
      name: 'BlueSky', 
      url: 'https://bsky.app/profile/wacren.bsky.social',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.8c-1.321-1.196-3.376-1.196-4.697 0-1.321 1.196-1.321 3.328 0 4.524a3.178 3.178 0 0 0 .91.643l-.91 3.11h6.694l-.91-3.11a3.178 3.178 0 0 0 .91-.643c1.321-1.196 1.321-3.328 0-4.524Z" />
          <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
        </svg>
      )
    },
    { 
      name: 'Mastodon', 
      url: 'https://mastodon.social/@wacren',
      icon: (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
          <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://twitter.com/wacren',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <footer>
      <style jsx>{`
        footer {
          background: #002d5c;
          border-top: 3px solid var(--amber);
          padding: 4rem 2.5rem 2rem;
          color: #ffffff;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .footer-brand {
          flex: 1 1 320px;
          min-width: 260px;
        }
        .nav-logo-img {
          display: block;
          height: 44px;
          width: auto;
          object-fit: contain;
          margin-bottom: 1.25rem;
        }
        .footer-brand p {
          font-size: 0.85rem;
          color: #c8d3e8;
          max-width: 380px;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(122, 180, 255, 0.2);
          border-radius: 8px;
          color: #c8d3e8;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .social-link:hover {
          background: rgba(122, 180, 255, 0.1);
          border-color: #7ab4ff;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-links-group {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
          flex: 2 1 500px;
          justify-content: space-between;
        }
        .footer-col {
          min-width: 140px;
        }
        .footer-col h4 {
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--amber);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
          font-weight: 700;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-col li {
          margin-bottom: 0.65rem;
        }
        .footer-col :global(a) {
          font-size: 0.84rem;
          color: #e2e8f0 !important;
          text-decoration: none;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .footer-col :global(a:hover) {
          color: var(--amber) !important;
          transform: translateX(2px);
        }

        .footer-bottom {
          max-width: 1100px;
          margin: 3.5rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--mono);
          font-size: 0.68rem;
          color: #9cb3d3;
          letter-spacing: 0.04em;
          gap: 2rem;
        }
        .footer-copyright {
          white-space: nowrap;
          flex-shrink: 0;
        }
        .support-text {
          text-align: right;
          line-height: 1.6;
        }

        @media (min-width: 901px) {
          .support-text {
            white-space: nowrap;
          }
        }

        @media (max-width: 900px) {
          footer {
            padding: 3.5rem 1.5rem 2rem;
          }
          .footer-inner {
            flex-direction: column;
            gap: 2.5rem;
          }
          .footer-brand {
            width: 100%;
          }
          .footer-brand p {
            max-width: 100%;
          }
          .footer-links-group {
            width: 100%;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1.25rem;
            margin-top: 2.5rem;
            padding-top: 1.75rem;
          }
          .support-text {
            text-align: center;
            max-width: 100%;
            line-height: 1.6;
          }
        }

        @media (max-width: 600px) {
          .footer-links-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem 1.5rem;
          }
        }

        @media (max-width: 420px) {
          .footer-links-group {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
        }
      `}</style>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" aria-label="WACREN Cybersecurity and Trust Programme">
            <img src="/images/wacren.png" alt="WACREN Cybersecurity and Trust Programme logo" className="nav-logo-img" loading="lazy" decoding="async" width={140} height={44} />
          </a>
          <p>
            Building Africa's Cybersecurity Trust Infrastructure through trusted communities, cybersecurity training initiatives, operational incident response teams, and sectoral threat intelligence capabilities.
          </p>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Programme</h4>
            <ul>
              <li><a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer">TrustBroker Africa ↗</a></li>
              <li><a href="https://indico.wacren.net/category/39/" target="_blank" rel="noopener noreferrer">Training Resources ↗</a></li>
              <li><a href="/#components">WACREN ISAC</a></li>
              <li><a href="/#components">CyberBastion League</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Events</h4>
            <ul>
              <li><a href="https://wacren2026.wacren.net/" target="_blank" rel="noopener noreferrer">WACREN Conference 2026 ↗</a></li>
              <li><a href="https://indico.wacren.net/event/270/" target="_blank" rel="noopener noreferrer">TrustBroker Africa Event ↗</a></li>
              <li><a href="https://indico.wacren.net/category/39/" target="_blank" rel="noopener noreferrer">Community Calendar ↗</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer">Join the Community ↗</a></li>
              <li><a href="mailto:secretariat@wacren.net">secretariat@wacren.net</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">© 2026 WACREN. All Rights Reserved.</div>
        <div className="support-text">
          The WACREN Cybersecurity Program is supported by the AfricaConnect Project co-funded by the European Union through the Global Gateway Program.
        </div>
      </div>
    </footer>
  );
}
