import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { SERVICES_DATA } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';

const ServicesPage = () => {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)';
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security Guard & Monitoring Services | FPI Security | Miami & Dallas"
        description="FPI offers security officers, mobile patrol, remote video monitoring, access control, and autonomous surveillance — tailored for Miami and Dallas properties."
        ogTitle="FPI Security Services | Guards, Patrol, Remote Monitoring & More"
        ogDescription="From licensed guards to AI-powered surveillance, FPI delivers end-to-end security programs built around your property type and risk profile."
        ogUrl="https://www.fpisecurity.com/services"
      />
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px' : '64px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>What We Offer</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>Private Security Services in Miami &amp; Dallas</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', maxWidth: 520, lineHeight: 1.7 }}>From on-site officers to autonomous surveillance — every service is customized to your property and risk profile.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 24px' : '56px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 22 }}>
          {SERVICES_DATA.map(s => (
            <ServiceCard key={s.id} service={s} direction="clarity" headingLevel="h2" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
