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
  '/security-officers': {
    title: 'Security Officer Services | Professional & Licensed Guards',
    description: 'Need trusted security officer services? Our armed & unarmed guards protect your business 24/7. Licensed, professional & reliable — Contact Us Today!',
    ogTitle: 'Security Officer Services | Professional & Licensed Guards | FPI Security',
    ogDescription: 'Armed and unarmed security guards, licensed and background-checked, with live GPS dispatch and real-time reporting.',
    canonical: 'https://www.fpisecurity.com/security-officers',
  },
  '/mobile-patrol': {
    title: 'Security Patrol Services: Smarter Protection That Works',
    description: 'FPI security patrol services provide fast response, visible deterrence & reliable overnight coverage. Protect your property today.',
    ogTitle: 'Security Patrol Services | GPS-Verified Mobile Patrol | FPI Security',
    ogDescription: 'Risk-based mobile patrol with GPS-verified coverage, randomized routes, and documented proof of every visit — across six states.',
    canonical: 'https://www.fpisecurity.com/mobile-patrol',
  },
  '/remote-video-monitoring': {
    title: 'Remote Video Monitoring Service | 24/7 Live Protection',
    description: 'Remote video monitoring service with 24/7 live protection, video verification, and real-time alerts. Upgrade your security monitoring services today.',
    ogTitle: 'Remote Video Monitoring | AI Detection + Live Human Response | FPI Security',
    ogDescription: '24/7 remote video monitoring with AI detection and a live human operator reviewing every alert before police are called.',
    canonical: 'https://www.fpisecurity.com/remote-video-monitoring',
  },
  '/surveillance-systems': {
    title: 'Surveillance Systems | Mobile Trailers & Business Cameras',
    description: 'FPI installs surveillance systems with HD, IP & thermal cameras for businesses. Expert installation & advanced security technology. Learn more today.',
    ogTitle: 'Smart Surveillance Systems for Business | FPI Security',
    ogDescription: 'Design, installation, and monitoring of commercial surveillance systems — IP, HD, thermal, and mobile trailer deployments.',
    canonical: 'https://www.fpisecurity.com/surveillance-systems',
  },
  '/access-control': {
    title: 'Access Control Systems | Smart & Biometric Installation',
    description: 'Access control systems for businesses with keycard, biometric, and cloud-based solutions. Enhance security and streamline visitor management today. Contact us!',
    ogTitle: 'Smart Access Control Systems for Business | FPI Security',
    ogDescription: 'Keycard, biometric, mobile, and cloud-based access control — installed, integrated, and managed by one partner.',
    canonical: 'https://www.fpisecurity.com/access-control',
  },
  '/autonomous-surveillance': {
    title: 'Autonomous Security Robots | AI Patrol for Your Property',
    description: 'FPI autonomous security robots patrol 24/7, detect anomalies with AI & feed live data to our ops center. Extend coverage without adding headcount.',
    ogTitle: 'Autonomous Security Robots | AI-Powered Patrol | FPI Security',
    ogDescription: 'AI-powered mobile patrol robots that extend security coverage without adding headcount — managed, monitored, and integrated by FPI.',
    canonical: 'https://www.fpisecurity.com/autonomous-surveillance',
  },
  '/service-maintenance': {
    title: 'Security System Maintenance Services | Trusted Pros',
    description: 'Expert security system maintenance services to keep your cameras, alarms & surveillance running 24/7. Protect your investment — Contact FPI today!',
    ogTitle: 'Security System Maintenance Services | FPI Security',
    ogDescription: 'Proactive maintenance for cameras, alarms, and access control — including cybersecurity firmware patching — across six states.',
    canonical: 'https://www.fpisecurity.com/service-maintenance',
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
  '/locations/pembroke-pines-fl': {
    title: 'Security Services in Pembroke Pines & South Florida | FPI Security',
    description: 'FPI Security Services headquarters in Pembroke Pines, FL — licensed guards, mobile patrol, and remote monitoring for Miami-Dade, Broward, and Palm Beach County.',
    ogTitle: 'FPI Security | Pembroke Pines, FL Headquarters',
    ogDescription: 'Licensed guards, mobile patrol, and remote monitoring across South Florida — headquartered in Pembroke Pines.',
    canonical: 'https://www.fpisecurity.com/locations/pembroke-pines-fl',
  },
  '/locations/dallas-tx': {
    title: 'Security Services in Dallas–Fort Worth, TX | FPI Security',
    description: 'FPI Security Services regional office in Dallas, TX — licensed guards, mobile patrol, and remote monitoring across the DFW metroplex, from Fort Worth to Plano.',
    ogTitle: 'FPI Security | Dallas, TX Regional Office',
    ogDescription: 'Licensed guards, mobile patrol, and remote monitoring across the Dallas–Fort Worth metroplex.',
    canonical: 'https://www.fpisecurity.com/locations/dallas-tx',
  },
  '/about': {
    title: 'About FPI Security | Contract Security Company Since 1981',
    description: 'FPI Security Services — a privately owned contract security company founded in 1981, now serving six states. Learn about our mission, values, and team.',
    ogTitle: 'About FPI Security | Our Story, Values & Team',
    ogDescription: 'Founded in 1981 and privately owned — licensed officers, a proprietary technology platform, and security programs built from scratch for every property.',
    canonical: 'https://www.fpisecurity.com/about',
  },
  '/technology/soc': {
    title: "Security Operations Center | FPI's 24/7 Command Infrastructure",
    description: 'FPI SOC delivers real-time alerts, AI video analytics, LPR & remote monitoring for businesses across six states. Smart protection. Contact us today!',
    ogTitle: "Security Operations Center | FPI's 24/7 Command Infrastructure",
    ogDescription: 'The 24/7 command infrastructure behind every FPI service — AI detection, live operators, and verified response across six states.',
    canonical: 'https://www.fpisecurity.com/technology/soc',
  },
  '/technology/platform': {
    title: 'FPI Proprietary Security Platform | Built In-House',
    description: 'FPI built its own security platform — client dashboard, GPS tracking, incident reporting & automated alerts. Real-time visibility for every property. See how it works.',
    ogTitle: 'FPI Proprietary Security Platform | Built In-House',
    ogDescription: 'Real-time GPS tracking, automated security incident reporting, and a 24/7 client dashboard — the platform behind every FPI service.',
    canonical: 'https://www.fpisecurity.com/technology/platform',
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
