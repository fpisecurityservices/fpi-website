import useResponsive from '../hooks/useResponsive';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  const direction = 'command';
  const isLight = direction === 'clarity';
  const bg = isLight ? '#F4F6F8' : '#0D2A3F';
  const headingColor = isLight ? '#0F3554' : '#fff';
  const bodyColor = isLight ? '#4E5A6E' : '#7090B0';
  const eyebrowColor = isLight ? '#006090' : '#4A7FA8';
  const statValueColor = isLight ? '#006090' : '#fff';
  const statLabelColor = isLight ? '#8A96A8' : '#4A7FA8';

  return (
    <section style={{ background: bg, padding: isMobile ? '64px 24px' : '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 72, alignItems: 'center' }}>
        {!isMobile && (
          <div style={{ position: 'relative', height: 480 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '88%', height: '72%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}>
              <img src="/uploads/Office Building with Supervisor-c670ba06.png" alt="FPI Security supervisor with officers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '52%', height: '46%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.16)', border: `3px solid ${isLight ? '#fff' : '#0D2A3F'}` }}>
              <img src="/uploads/Two Guard High Rise Lobby-b8e7df31.png" alt="FPI officers at luxury high-rise lobby" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>
        )}
        <div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: eyebrowColor, marginBottom: 12 }}>About FPI Security</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 36 : 46, fontWeight: 700, color: headingColor, marginBottom: 20, lineHeight: 1.05 }}>
            Personal Service.<br />Enterprise Capability.
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: bodyColor, lineHeight: 1.75, marginBottom: 16 }}>
            FPI Security Services is a leading private security company serving Miami, South Florida, and Dallas, TX. We invest the time to understand your property, your people, and your risk profile — then build a fully customized security solution around it.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: bodyColor, lineHeight: 1.75, marginBottom: 36 }}>
            Headquartered in Pembroke Pines, FL with offices in Dallas, TX, we combine highly trained private security guards with commercial security patrol services and a custom-built technology platform — delivering security systems that actually work.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36, paddingBottom: 36, borderBottom: `1px solid ${isLight ? '#E2E6ED' : 'rgba(255,255,255,0.1)'}` }}>
            {[['Pembroke Pines, FL', 'Headquarters'], ['Dallas, TX', 'Regional Office'], ['Proprietary', 'Tech Platform']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 16 : 20, fontWeight: 700, color: statValueColor }}>{v}</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: statLabelColor, marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/contact')} style={{
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600,
            padding: '12px 26px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
          onMouseLeave={e => e.currentTarget.style.background = '#006090'}
          >Request a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
