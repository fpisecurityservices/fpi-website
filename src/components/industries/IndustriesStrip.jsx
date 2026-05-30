import { useNavigate } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import { INDUSTRIES_DATA } from '../../data/industries';
import IndustryCard from './IndustryCard';

const IndustriesStrip = () => {
  const { isMobile, isTablet } = useResponsive();
  const navigate = useNavigate();
  const bg = '#0A2236';
  const headingColor = '#fff';
  const bodyColor = '#7090B0';

  return (
    <section style={{ background: bg, padding: isMobile ? '64px 24px' : '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 36 : 64, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>Industries We Serve</div>
            <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: headingColor, marginBottom: 16, lineHeight: 1.05 }}>
              Security for Every Property Type
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: bodyColor, lineHeight: 1.75, marginBottom: 24 }}>
              From gated communities to construction sites, we understand the unique security challenges of each environment — and build programs specifically for them.
            </p>
            <button onClick={() => navigate('/industries')} style={{
              background: '#006090', color: '#fff',
              fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600,
              padding: '11px 24px', borderRadius: 4, border: 'none', cursor: 'pointer',
              letterSpacing: '0.04em', transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
            onMouseLeave={e => e.currentTarget.style.background = '#006090'}
            >See All Industries</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)', gap: 14 }}>
            {INDUSTRIES_DATA.slice(0, 6).map(ind => (
              <IndustryCard key={ind.id} industry={ind} direction="command" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesStrip;
