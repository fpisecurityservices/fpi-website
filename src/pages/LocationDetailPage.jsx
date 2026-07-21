import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { LOCATIONS_DATA } from '../data/locations';
import { SERVICES_DATA } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import { Section, H2, Body, CTAButton, Divider, FinalCTA } from '../components/ServicePageKit';

const LocationDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const loc = LOCATIONS_DATA.find(l => l.slug === slug);

  if (!loc) return <Navigate to="/locations" replace />;

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)';

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title={loc.metaTitle}
        description={loc.metaDescription}
        ogTitle={loc.metaTitle}
        ogDescription={loc.metaDescription}
        ogUrl={`https://www.fpisecurity.com/locations/${loc.slug}`}
      />

      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '56px 24px' : '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <MapPin size={14} style={{ color: '#4A7FA8' }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8' }}>{loc.label}</span>
          </div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>{loc.h2Title}</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, color: '#7090B0', maxWidth: 620, lineHeight: 1.7 }}>{loc.description}</p>
        </div>
      </div>

      {/* Coverage + contact */}
      <Section isMobile={isMobile}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 64, alignItems: 'start' }}>
          <div>
            <H2 style={{ fontSize: 28 }}>Coverage Areas</H2>
            <Body>FPI officers, patrol units, and monitoring programs are active throughout the {loc.city} market:</Body>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {loc.coverage.map(area => (
                <span key={area} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4E5A6E', background: '#F4F6F8', padding: '6px 12px', borderRadius: 4, border: '1px solid #E2E6ED' }}>{area}</span>
              ))}
            </div>
          </div>
          <div>
            <H2 style={{ fontSize: 28 }}>Contact This Office</H2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              <a href={`tel:${loc.phone.replace(/\D/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
                <Phone size={17} />
                {loc.phone}
              </a>
              <a href={`mailto:${loc.email}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#4E5A6E', fontFamily: "'Barlow', sans-serif", fontSize: 15 }}>
                <Mail size={17} style={{ color: '#4A7FA8' }} />
                {loc.email}
              </a>
            </div>
            <CTAButton onClick={() => navigate('/contact')}>Request a Quote in {loc.city}</CTAButton>
          </div>
        </div>
        <div style={{ marginTop: 40, borderRadius: 12, overflow: 'hidden', boxShadow: '0 6px 32px rgba(0,0,0,0.10)', maxHeight: 420 }}>
          <img src={loc.photo} alt={`FPI Security ${loc.city}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', maxHeight: 420 }} />
        </div>
      </Section>

      {/* Services available in this market */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Every FPI Service, Available in {loc.city}</H2>
        <Body>The full FPI program operates in this market — officers, patrol, monitoring, systems, and maintenance, all backed by the same proprietary platform and Security Operations Center.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 18 }}>
          {SERVICES_DATA.map(s => (
            <ServiceCard key={s.id} service={s} direction="clarity" />
          ))}
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title={`Ready to Secure Your ${loc.city.split(',')[0]} Property?`}
        body="Tell us about your property and FPI will build a custom security program — patrol routes, staffing, technology, and cost estimate — typically within 24 hours."
        ctaText="Request a Free Consultation"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default LocationDetailPage;
