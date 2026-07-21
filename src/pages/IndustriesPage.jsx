import { useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, HardHat, Building2, HeartPulse, Warehouse, Car, Hotel } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { INDUSTRIES_DATA } from '../data/industries';

const iconMap = {
  home: Home,
  'shopping-bag': ShoppingBag,
  'hard-hat': HardHat,
  'building-2': Building2,
  'heart-pulse': HeartPulse,
  warehouse: Warehouse,
  car: Car,
  hotel: Hotel,
};

const IndustriesPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security Services by Industry | FPI FL & TX"
        description="FPI provides tailored security for HOAs, retail, construction, commercial offices, healthcare, warehouses, car dealerships & hotels across FL & TX."
        ogTitle="Security for Every Industry | FPI Security"
        ogDescription="Over 40 years securing commercial properties across South Florida and Texas — every program built from scratch around the specific risks of that industry."
        ogUrl="https://www.fpisecurity.com/industries"
      />
      {/* Hero banner */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '56px 24px' : '72px 48px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/photo-lobby-team.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,42,63,0.96) 0%, rgba(15,53,84,0.88) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>Industries Served</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>Security for Every Industry</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 17, color: '#7090B0', maxWidth: 620, lineHeight: 1.7, marginBottom: 12 }}>
            FPI Security Services is a contract security company with over 40 years of experience designing and deploying security programs for commercial properties across South Florida and Texas — from HOA communities and warehouses to car dealerships, healthcare facilities, and beyond. Every program starts with a site assessment and is built around the specific risks, regulations, and operational requirements of that property type.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 14 : 15, color: '#8998B1', maxWidth: 620, lineHeight: 1.7 }}>
            FPI serves HOA and residential communities, retail and shopping centers, construction sites, commercial office buildings, healthcare and medical facilities, warehouses and industrial properties, car dealerships, and hospitality and hotel properties across South Florida and the Dallas–Fort Worth area.
          </p>
        </div>
      </div>

      {/* Industry cards */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 24px' : '64px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 20 : 32 }}>
          {INDUSTRIES_DATA.map(ind => {
            const IconComp = iconMap[ind.icon] || Home;
            return (
              <div key={ind.id} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, background: '#F4F6F8', borderRadius: 10, overflow: 'hidden', border: '1px solid #E2E6ED' }}>
                <div style={{ padding: isMobile ? '24px 20px' : '32px 28px' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: '#E8EDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <IconComp size={22} style={{ color: '#006090' }} />
                  </div>
                  <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 22 : 24, fontWeight: 700, color: '#0F3554', marginBottom: 10, lineHeight: 1.15 }}>{ind.title}</h2>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 14 }}>{ind.shortDesc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                    {ind.services.map(s => (
                      <span key={s} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#E8EDF4', color: '#27516A', padding: '3px 8px', borderRadius: 4 }}>{s}</span>
                    ))}
                  </div>
                  <button onClick={() => navigate(ind.path || '/contact')} style={{
                    background: '#006090', color: '#fff',
                    fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600,
                    padding: '9px 20px', borderRadius: 4, border: 'none', cursor: 'pointer',
                    letterSpacing: '0.04em', transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
                  onMouseLeave={e => e.currentTarget.style.background = '#006090'}
                  >{ind.path ? 'Learn More →' : 'Get a Quote'}</button>
                </div>
                <div style={{ overflow: 'hidden', minHeight: isMobile ? 200 : 240 }}>
                  <img src={ind.photo} alt={ind.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: ind.photoPosition || 'center', display: 'block', minHeight: isMobile ? 200 : 240 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why FPI for every industry */}
      <div style={{ background: '#F4F6F8', padding: isMobile ? '56px 24px' : '80px 48px', borderTop: '1px solid #E2E6ED' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 32 : 42, fontWeight: 700, color: '#0F3554', marginBottom: 14, lineHeight: 1.05 }}>One Security Partner. Every Property Type.</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.7, maxWidth: 720, marginBottom: 36 }}>
            FPI has served commercial properties across South Florida and Texas for over 40 years — across more industries, more property types, and more risk profiles than any single competitor.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 32 }}>
            {[
              ['40+ Years of Industry-Specific Experience', 'Four decades means FPI has seen every type of security failure across every property type. Programs are built on that accumulated knowledge — not on a standard template pulled off a shelf.'],
              ['A Proprietary Platform for Every Industry', 'The same platform that gives an HOA board GPS patrol logs gives a warehouse manager cargo theft documentation and a healthcare director access control audit trails — one platform, adapted to each industry\'s documentation and compliance requirements.'],
              ['Programs Built From Scratch, Not Templates', 'Every industry has different regulations, different risks, and different operational hours. FPI starts every engagement with a site assessment — never with a standard package.'],
            ].map(([title, desc], i) => (
              <div key={title}>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 21, fontWeight: 700, color: '#0F3554', marginBottom: 10, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.7 }}>{desc}</p>
                {i === 1 && (
                  <button onClick={() => navigate('/technology/soc')} style={{
                    marginTop: 12, background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                    fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600, color: '#006090',
                  }}>Learn more about our technology →</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: '#fff', padding: isMobile ? '56px 24px' : '80px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 32 : 42, fontWeight: 700, color: '#0F3554', marginBottom: 32, lineHeight: 1.05 }}>Frequently Asked Questions About FPI's Industry Security Programs</h2>
          <div style={{ maxWidth: 860 }}>
            {[
              ['What industries does FPI Security serve?', 'FPI Security Services serves HOA and residential communities, retail and shopping centers, construction sites, commercial office buildings, healthcare and medical facilities, warehouses and industrial facilities, car dealerships, and hospitality and hotel properties across South Florida and Texas.'],
              ['Does FPI customize security programs for each industry?', 'Yes. FPI begins every engagement with a site-specific assessment — covering the unique risks, regulations, and operational requirements of that property type. An HOA community needs different coverage than a warehouse or a hospital. Every FPI program is built from scratch around those differences.'],
              ['Can FPI handle security for multiple properties in different industries?', 'Yes. FPI manages security programs across multiple property types under one service agreement — with centralized reporting through the FPI client portal. Whether you manage HOA communities, commercial buildings, or a mixed portfolio, FPI provides unified visibility and accountability.'],
              ['Does FPI have experience with regulated industries like healthcare?', 'Yes. FPI deploys security programs for healthcare facilities (HIPAA-aware officers, restricted area access control) and other regulated environments requiring compliance documentation across South Florida and Texas. All FPI officers are background-checked and licensed under their state\'s private security regulations, such as Florida Statute Chapter 493.'],
              ['How quickly can FPI deploy security for my industry?', 'Deployment timeline depends on property type and scope. FPI can deploy guard services within days of a site assessment and solar surveillance trailers within 24–48 hours for construction and outdoor properties. Contact FPI for a deployment timeline specific to your industry and property.'],
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: '1px solid #E2E6ED', paddingBottom: 24, marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, fontWeight: 700, color: '#0F3554', marginBottom: 8, lineHeight: 1.2 }}>{q}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#0D2A3F', padding: isMobile ? '56px 24px' : '64px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 30 : 38, fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.1 }}>Don't See Your Industry? Every Property Has Unique Security Needs.</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.7, marginBottom: 28 }}>FPI has provided security for properties across South Florida and Texas for over 40 years — if your industry isn't listed above, FPI has likely served it. Tell us about your property and FPI will build a program around it.</p>
          <button onClick={() => navigate('/contact')} style={{
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
            padding: '13px 32px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', transition: 'background 0.15s', marginBottom: 16,
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
          onMouseLeave={e => e.currentTarget.style.background = '#006090'}
          >Get a Free Security Assessment</button>
          <div>
            <a href="tel:8003744316" style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600, color: '#8998B1', textDecoration: 'none' }}>(800) 374-4316 — Available 24/7</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
