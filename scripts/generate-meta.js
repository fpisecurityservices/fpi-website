import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const distFile = join(distDir, 'index.html');

console.log('generate-meta.js starting...');
console.log('Looking for:', distFile);

const PAGES = {
  '/': {
    title: 'FPI Security | Private Security Guards in FL, TX, GA, AZ, NV & CA',
    description: 'FPI provides licensed security guards, remote video monitoring, and customized patrol across Florida, Texas, Georgia, Arizona, Nevada, and California. Request a free security assessment today.',
    ogTitle: 'FPI Security | Guards, Patrol & Remote Monitoring in Six States',
    ogDescription: 'Licensed security guards, mobile patrol, and AI-assisted video monitoring for commercial, residential, and industrial properties — from South Florida to Southern California.',
    canonical: 'https://www.fpisecurity.com/',
  },
  '/services': {
    title: 'Security Guard & Monitoring Services | FPI Security',
    description: 'FPI offers security officers, mobile patrol, remote video monitoring, access control, and autonomous surveillance — tailored for properties across six states.',
    ogTitle: 'FPI Security Services | Guards, Patrol, Remote Monitoring & More',
    ogDescription: 'From licensed guards to AI-powered surveillance, FPI delivers end-to-end security programs built around your property type and risk profile.',
    canonical: 'https://www.fpisecurity.com/services',
  },
  '/services/officers': {
    title: 'Security Officer Services | Professional & Licensed Guards',
    description: 'Need trusted security officer services? Our armed & unarmed guards protect your business 24/7. Licensed, professional & reliable — Contact Us Today!',
    ogTitle: 'Security Officer Services | Professional & Licensed Guards | FPI Security',
    ogDescription: 'Armed and unarmed security guards, licensed and background-checked, with live GPS dispatch and real-time reporting.',
    canonical: 'https://www.fpisecurity.com/services/officers',
  },
  '/services/patrol': {
    title: 'Security Patrol Services: Smarter Protection That Works',
    description: 'FPI security patrol services provide fast response, visible deterrence & reliable overnight coverage. Protect your property today.',
    ogTitle: 'Security Patrol Services | GPS-Verified Mobile Patrol | FPI Security',
    ogDescription: 'Risk-based mobile patrol with GPS-verified coverage, randomized routes, and documented proof of every visit — across six states.',
    canonical: 'https://www.fpisecurity.com/services/patrol',
  },
  '/services/remote': {
    title: 'Remote Video Monitoring Service | 24/7 Live Protection',
    description: 'Remote video monitoring service with 24/7 live protection, video verification, and real-time alerts. Upgrade your security monitoring services today.',
    ogTitle: 'Remote Video Monitoring | AI Detection + Live Human Response | FPI Security',
    ogDescription: '24/7 remote video monitoring with AI detection and a live human operator reviewing every alert before police are called.',
    canonical: 'https://www.fpisecurity.com/services/remote',
  },
  '/services/surveillance': {
    title: 'Surveillance Systems | Mobile Trailers & Business Cameras',
    description: 'FPI installs surveillance systems with HD, IP & thermal cameras for businesses. Expert installation & advanced security technology. Learn more today.',
    ogTitle: 'Smart Surveillance Systems for Business | FPI Security',
    ogDescription: 'Design, installation, and monitoring of commercial surveillance systems — IP, HD, thermal, and mobile trailer deployments.',
    canonical: 'https://www.fpisecurity.com/services/surveillance',
  },
  '/services/access': {
    title: 'Access Control Systems | Smart & Biometric Installation',
    description: 'Access control systems for businesses with keycard, biometric, and cloud-based solutions. Enhance security and streamline visitor management today. Contact us!',
    ogTitle: 'Smart Access Control Systems for Business | FPI Security',
    ogDescription: 'Keycard, biometric, mobile, and cloud-based access control — installed, integrated, and managed by one partner.',
    canonical: 'https://www.fpisecurity.com/services/access',
  },
  '/services/autonomous': {
    title: 'Autonomous Security Robots | AI Patrol for Your Property',
    description: 'FPI autonomous security robots patrol 24/7, detect anomalies with AI & feed live data to our ops center. Extend coverage without adding headcount.',
    ogTitle: 'Autonomous Security Robots | AI-Powered Patrol | FPI Security',
    ogDescription: 'AI-powered mobile patrol robots that extend security coverage without adding headcount — managed, monitored, and integrated by FPI.',
    canonical: 'https://www.fpisecurity.com/services/autonomous',
  },
  '/services/maintenance': {
    title: 'Security System Maintenance Services | Trusted Pros',
    description: 'Expert security system maintenance services to keep your cameras, alarms & surveillance running 24/7. Protect your investment — Contact FPI today!',
    ogTitle: 'Security System Maintenance Services | FPI Security',
    ogDescription: 'Proactive maintenance for cameras, alarms, and access control — including cybersecurity firmware patching — across six states.',
    canonical: 'https://www.fpisecurity.com/services/maintenance',
  },
  '/industries': {
    title: 'Security for HOA, Retail, Healthcare & More | FPI Security',
    description: 'FPI Security serves HOAs, retail centers, construction sites, hospitals, offices, warehouses, dealerships, and hotels across six states. Custom programs for every industry.',
    ogTitle: 'FPI Security | Industry-Specific Security Solutions',
    ogDescription: "Whether it's a residential community, shopping center, or healthcare facility — FPI builds security programs around your industry's specific risks and requirements.",
    canonical: 'https://www.fpisecurity.com/industries',
  },
  '/locations': {
    title: 'Security Services in FL, TX, GA, AZ, NV & CA | FPI Security',
    description: 'FPI Security operates across Florida, Texas, Georgia, Arizona, Nevada, and California — providing licensed guards, mobile patrol, and remote monitoring in every market we serve.',
    ogTitle: 'FPI Security | Serving Six States Coast to Coast',
    ogDescription: 'Locally operated security services across six states. Licensed guards, mobile patrol, and surveillance built for your market.',
    canonical: 'https://www.fpisecurity.com/locations',
  },
  '/about': {
    title: 'About FPI Security | Licensed Security Company in Six States',
    description: 'FPI Security is a privately owned security company built on integrity and personal service. Learn about our team, values, and approach to commercial and residential security.',
    ogTitle: 'About FPI Security | Our Story, Values & Team',
    ogDescription: "FPI isn't a franchise — we're a privately owned security company focused on personal relationships, licensed officers, and security programs that actually fit your property.",
    canonical: 'https://www.fpisecurity.com/about',
  },
  '/contact': {
    title: 'Contact FPI Security | Free Security Consultation',
    description: "Request a free security consultation with FPI. We serve Florida, Texas, Georgia, Arizona, Nevada, and California — and we'll build a custom security plan around your property and budget.",
    ogTitle: 'Get a Free Security Consultation | FPI Security',
    ogDescription: 'Tell us about your property and security needs. FPI will respond within one business day with a custom proposal — no pressure, no generic packages.',
    canonical: 'https://www.fpisecurity.com/contact',
  },
};

try {
  const baseHtml = readFileSync(distFile, 'utf-8');
  console.log('Read index.html successfully, length:', baseHtml.length);

  for (const [route, meta] of Object.entries(PAGES)) {
    let html = baseHtml;

    html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
    html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${meta.description}">`);
    html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${meta.canonical}">`);
    html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${meta.ogTitle}">`);
    html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${meta.ogDescription}">`);
    html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${meta.canonical}">`);

    if (route === '/') {
      writeFileSync(distFile, html);
      console.log('✓ / (index.html updated)');
    } else {
      const dir = join(distDir, route.slice(1));
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html);
      console.log(`✓ ${route}`);
    }
  }

  console.log('Meta tags injected for all routes.');
} catch (err) {
  console.error('generate-meta.js failed:', err);
  process.exit(1);
}
