import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WACREN Cybersecurity & Trust Programme",
  description: "Building Africa's Cybersecurity Trust Infrastructure for Research and Education — connecting communities, training, and threat intelligence.",
  keywords: ["WACREN", "Cybersecurity", "Research and Education Network", "Africa", "TrustBroker", "CyberBastion", "ISAC", "Incident Response"],
  authors: [{ name: "WACREN" }],
  openGraph: {
    title: "WACREN Cybersecurity & Trust Programme",
    description: "Strengthening cybersecurity resilience across Africa's research and education networks.",
    url: "https://cybersecurity.wacren.net",
    siteName: "WACREN Cybersecurity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WACREN Cybersecurity & Trust Programme",
    site: "@wacren",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1c2c46',
};

import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS injected immediately */
            body { 
              font-family: var(--font-outfit), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif !important;
              background: #f9f6f3 !important;
              color: #323232 !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            * { box-sizing: border-box !important; }
            #hero { 
              background: #003366 !important;
              min-height: 85vh !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              justify-content: center !important;
              padding: 8rem 2.5rem 4rem !important;
            }
            .hero-content { position: relative !important; z-index: 1 !important; width: 100% !important; }
            h1 { 
              font-family: var(--font-outfit), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif !important;
              font-size: clamp(2rem, 5vw, 3.2rem) !important;
              font-weight: 800 !important;
              color: #e8f0ff !important;
              line-height: 1.1 !important;
              margin-bottom: 1.5rem !important;
            }
          `
        }} />
      </head>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
