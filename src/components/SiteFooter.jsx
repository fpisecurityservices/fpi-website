import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';

const SiteFooter = () => {
  const { isMobile, isTablet } = useResponsive();
  const navigate = useNavigate();
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr 1fr';

  const footerLinks = [
    { heading: 'Services', links: [
      { label: 'Security Officers', path: '/services' },
      { label: 'Mobile Patrol', path: '/services' },
      { label: 'Remote Video Monitoring', path: '/services' },
      { label: 'Access Control', path: '/services' },
      { label: 'Autonomous Surveillance', path: '/services' },
    ]},
    { heading: 'Industries', links: [
      { label: 'HOA & Residential', path: '/industries' },
      { label: 'Retail & Shopping Centers', path: '/industries' },
      { label: 'Construction Sites', path: '/industries' },
      { label: 'Commercial Office', path: '/industries' },
      { label: 'Healthcare & Medical', path: '/industries' },
    ]},
    { heading: 'Company', links: [
      { label: 'About FPI', path: '/about' },
      { label: 'Locations', path: '/locations' },
      { label: 'Technology', path: '/services' },
      { label: 'Contact', path: '/contact' },
      { label: 'Request a Quote', path: '/contact' },
    ]},
  ];

  return (
    <footer style={{ background: '#07192A', padding: isMobile ? '48px 24px 24px' : '60px 48px 28px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 36 : 48, marginBottom: 40 }}>
          <div>
            <img src="/assets/logo-transparent.png" alt="FPI Security Services" style={{ height: 38, objectFit: 'contain', marginBottom: 14, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4A7FA8', lineHeight: 1.7, maxWidth: 260, marginBottom: 18 }}>
              Personalized, tech-forward security solutions for properties across Pembroke Pines, FL and Dallas, TX.
            </p>
            <a href="tel:8003744316" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#fff', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 700 }}>
              <Phone size={16} style={{ color: '#006090' }} />
              (800) 374-4316
            </a>
          </div>
          {footerLinks.map(col => (
            <div key={col.heading}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 14 }}>{col.heading}</div>
              {col.links.map(l => (
                <button key={l.label} onClick={() => navigate(l.path)} style={{
                  display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#567090',
                  marginBottom: 10, padding: 0, textAlign: 'left', transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8998B1'}
                onMouseLeave={e => e.currentTarget.style.color = '#567090'}
                >{l.label}</button>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#3A5068' }}>© 2025 FPI Security Services. All rights reserved. | Licensed & Insured</span>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#3A5068' }}>Pembroke Pines, FL · Dallas, TX</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
