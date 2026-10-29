import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://cybersecurity.wacren.net";
const siteTitle = "WACREN Cybersecurity & Trust Programme";
const siteDescription =
  "Building Africa's Cybersecurity Trust Infrastructure for Research and Education — connecting trusted communities, operational CSIRTs, capacity building, and sectoral threat intelligence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: "WACREN Cybersecurity",
  keywords: [
    "WACREN",
    "Cybersecurity",
    "Africa Research and Education Network",
    "TrustBroker Africa",
    "CyberBastion League",
    "WACREN ISAC",
    "REN-ISAC Africa",
    "CSIRT",
    "Incident Response",
    "Threat Intelligence",
    "AfricaConnect",
    "Global Gateway",
    "Open CSIRT Foundation",
  ],
  authors: [{ name: "WACREN", url: "https://wacren.net" }],
  creator: "WACREN",
  publisher: "WACREN",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/carousel-1.jpg",
        width: 1656,
        height: 932,
        type: "image/jpeg",
        alt: "WACREN Cybersecurity and Trust Programme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/carousel-1.jpg"],
    site: "@wacren",
    creator: "@wacren",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/wacren.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/images/wacren.png", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#002d5c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "WACREN",
        "url": "https://wacren.net",
        "logo": `${siteUrl}/images/wacren.png`,
        "sameAs": [
          "https://www.linkedin.com/company/west-and-central-african-research-and-education-network/",
          "https://twitter.com/wacren",
          "https://bsky.app/profile/wacren.bsky.social",
          "https://mastodon.social/@wacren"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": siteTitle,
        "description": siteDescription,
        "publisher": { "@id": `${siteUrl}/#organization` },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://indico.wacren.net" />
        <link rel="preconnect" href="https://trustbroker.africa" />
      </head>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
