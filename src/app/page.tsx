"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyCybersecurity from "@/components/WhyCybersecurity";
import Pillars from "@/components/Pillars";
import Architecture from "@/components/Architecture";
import Components from "@/components/Components";
import Milestones from "@/components/Milestones";
import GetInvolved from "@/components/GetInvolved";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WACREN Cybersecurity & Trust Programme",
    "url": "https://cybersecurity.wacren.net",
    "logo": "https://cybersecurity.wacren.net/logo.png",
    "description": "Building Africa's Cybersecurity Trust Infrastructure for Research and Education.",
    "sameAs": [
      "https://twitter.com/wacren",
      "https://www.linkedin.com/company/west-and-central-african-research-and-education-network/",
      "https://mastodon.social/@wacren",
      "https://bsky.app/profile/wacren.bsky.social"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Hero />
      <WhyCybersecurity />
      <Pillars />
      <Architecture />
      <Components />
      <Milestones />
      <GetInvolved />
      <Partners />
      <section id="eu-support">
        <style jsx>{`
          #eu-support {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem 2.5rem;
          }
          .eu-banner-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto 1px 1fr 1px auto;
            gap: 2rem;
            align-items: center;
          }
          .eu-banner-separator {
            width: 1px;
            height: 80px;
            background: #e0e0e0;
          }
          .eu-banner-logo {
            height: 120px;
            width: auto;
            background: transparent;
          }
          .eu-banner-text {
            text-align: left;
            font-size: 1rem;
            color: #333;
            line-height: 1.6;
            font-weight: 500;
          }
          .eu-banner-disclaimer {
            font-size: 0.8rem;
            color: #666;
            line-height: 1.5;
            max-width: 250px;
            text-align: left;
          }
          @media (max-width: 900px) {
            #eu-support { padding: 3rem 1.25rem; }
            .eu-banner-container {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              text-align: center;
            }
            .eu-banner-separator {
              display: none;
            }
            .eu-banner-logo {
              margin: 0 auto;
              height: 80px;
            }
            .eu-banner-text {
              text-align: left;
              font-size: 0.9rem;
            }
            .eu-banner-disclaimer {
              text-align: center;
              max-width: 100%;
            }
          }
        `}</style>
        <div className="eu-banner-container">
          <img src="/images/GGEUlogos.avif" alt="European Union and Global Gateway Logos" className="eu-banner-logo" loading="lazy" decoding="async" width={240} height={120} />
          <div className="eu-banner-separator"></div>
          <div className="eu-banner-text">
            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>FUNDED BY</div>
            <div>The European Union, under the EU Global Gateway Strategy and the Africa-Europe Investment Package, through DG INTPA.</div>
          </div>
          <div className="eu-banner-separator"></div>
          <div className="eu-banner-disclaimer">
            Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible.
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
