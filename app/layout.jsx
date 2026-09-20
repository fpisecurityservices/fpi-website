import './globals.css';
import AppShell from './AppShell';

export const metadata = {
  metadataBase: new URL('https://www.fpisecurity.com'),
  robots: { index: true, follow: true },
  keywords:
    'security services, security guard, security guard companies near me, security companies in Miami, surveillance camera technology, security camera technology, commercial security guard service, 24-hour security guard service, CCTV monitoring service, video surveillance services, remote surveillance, virtual guard services, security solutions, private security, security systems, security camera surveillance companies, private security guards, security systems providers, security video monitoring systems, security patrols, security guards Miami, mobile patrol Fort Lauderdale, remote video monitoring, access control Miami, security company Dallas TX, security services Georgia, security company Arizona, security guards Nevada, security services California, HOA security, commercial security officers',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FPI Security Services',
  foundingDate: '1981',
  url: 'https://www.fpisecurity.com',
  telephone: '+18003744316',
  email: 'info@fpisecurity.com',
  description:
    'Personalized security services including private security guards, mobile patrol, remote video monitoring, access control, and autonomous surveillance. Serving Florida, Texas, Georgia, Arizona, Nevada, and California.',
  areaServed: [
    { '@type': 'State', name: 'Florida' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'State', name: 'Georgia' },
    { '@type': 'State', name: 'Arizona' },
    { '@type': 'State', name: 'Nevada' },
    { '@type': 'State', name: 'California' },
    { '@type': 'City', name: 'Miami' },
    { '@type': 'City', name: 'Fort Lauderdale' },
    { '@type': 'City', name: 'Boca Raton' },
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Fort Worth' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Security Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Security Guards' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Security Guard Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24-Hour Security Guard Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Patrols' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CCTV Monitoring Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Surveillance Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remote Surveillance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virtual Guard Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Camera Surveillance Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access Control Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Autonomous Surveillance' } },
    ],
  },
  location: [
    {
      '@type': 'Place',
      name: 'FPI Security Services — South Florida HQ',
      address: { '@type': 'PostalAddress', addressRegion: 'FL', addressCountry: 'US' },
    },
    {
      '@type': 'Place',
      name: 'FPI Security Services — Dallas Office',
      address: { '@type': 'PostalAddress', addressLocality: 'Dallas', addressRegion: 'TX', addressCountry: 'US' },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
