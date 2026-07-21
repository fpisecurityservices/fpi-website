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
