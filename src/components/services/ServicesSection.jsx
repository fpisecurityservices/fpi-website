import useResponsive from '../../hooks/useResponsive';
import { SERVICES_DATA } from '../../data/services';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)';

  return (
    <section id="services" style={{ background: '#F4F6F8', padding: isMobile ? '64px 24px' : '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 36 : 52, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>What We Offer</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 48, fontWeight: 700, color: '#0F3554', marginBottom: 14, lineHeight: 1.05 }}>Comprehensive Security Solutions</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Every engagement is built around your property. We combine people, technology, and intelligence for security that actually fits.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 18 }}>
          {SERVICES_DATA.map(s => (
            <ServiceCard key={s.id} service={s} direction="clarity" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
