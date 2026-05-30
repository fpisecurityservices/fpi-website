import { useNavigate } from 'react-router-dom';
import { Phone, MapPin, CheckCircle } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';

export const HeroCommand = () => {
  const { isMobile, isTablet } = useResponsive();
  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', paddingTop: 68,
      background: '#0D2A3F',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/uploads/Two Armed Guards-63de0d99.png')",
        backgroundSize: 'cover', backgroundPosition: 'center 20%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(100deg, rgba(13,42,63,0.97) 0%, rgba(13,42,63,0.88) 45%, rgba(13,42,63,0.3) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
        background: 'linear-gradient(to top, rgba(13,42,63,0.6), transparent)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: isMobile ? '60px 24px' : '80px 48px', width: '100%' }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 28, height: 2, background: '#006090' }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8' }}>
              Pembroke Pines, FL &amp; Dallas, TX
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: isMobile ? 52 : isTablet ? 62 : 76,
            fontWeight: 700, color: '#fff', lineHeight: 1.0,
            letterSpacing: '-0.02em', marginBottom: 20, textWrap: 'balance',
          }}>
            Security Built<br />
            <span style={{ color: '#4A7FA8' }}>Around You.</span>
          </h1>

          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: isMobile ? 15 : 18,
            color: '#8998B1', lineHeight: 1.65, marginBottom: 36, maxWidth: 480,
          }}>
            A trusted private security guard company serving South Florida and Dallas, TX. Commercial security guards, 24-hour patrol, remote video surveillance, and a proprietary tech platform — all customized to your property.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/contact')} style={{
              background: '#006090', color: '#fff',
              fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
              padding: '14px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
              letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(0,96,144,0.4)',
              transition: 'background 0.15s', flex: isMobile ? '1' : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
            onMouseLeave={e => e.currentTarget.style.background = '#006090'}
            >Request a Free Consultation</button>
            <a href="tel:8003744316" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: 'rgba(255,255,255,0.07)', color: '#fff',
              fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
              padding: '14px 24px', borderRadius: 4,
              border: '1.5px solid rgba(255,255,255,0.18)',
              letterSpacing: '0.04em', textDecoration: 'none',
              transition: 'background 0.15s', flex: isMobile ? '1' : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            >
              <Phone size={15} />
              (800) 374-4316
            </a>
          </div>

          {!isMobile && (
            <div style={{ display: 'flex', gap: 40, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
              {[['24/7', 'Live Monitoring'], ['2', 'Locations'], ['6+', 'Service Lines'], ['100%', 'Custom Plans']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A7FA8', marginTop: 5 }}>{lbl}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const HeroClarity = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', paddingTop: 68,
      background: '#F4F6F8',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '60px 24px' : '80px 48px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 40 : 64, alignItems: 'center',
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E8EDF4', borderRadius: 20, padding: '5px 14px', marginBottom: 22 }}>
            <MapPin size={12} style={{ color: '#006090' }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#006090' }}>Pembroke Pines, FL &amp; Dallas, TX</span>
          </div>
          <h1 style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: isMobile ? 52 : isTablet ? 56 : 68,
            fontWeight: 700, color: '#0F3554', lineHeight: 1.0,
            letterSpacing: '-0.02em', marginBottom: 18, textWrap: 'balance',
          }}>
            Your Property.<br />
            <span style={{ color: '#006090' }}>Our Priority.</span>
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 17, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
            FPI Security delivers fully customized security solutions — from private security guards and 24-hour patrols to remote surveillance and CCTV monitoring systems — backed by our proprietary tech platform.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
            <button onClick={() => navigate('/contact')} style={{
              background: '#006090', color: '#fff',
              fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
              padding: '14px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
              letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(0,96,144,0.3)',
              transition: 'background 0.15s', flex: isMobile ? '1' : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
            onMouseLeave={e => e.currentTarget.style.background = '#006090'}
            >Get a Free Consultation</button>
            <button onClick={() => navigate('/services')} style={{
              background: '#fff', color: '#1A1E26',
              fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
              padding: '14px 24px', borderRadius: 4, cursor: 'pointer',
              border: '1.5px solid #C8D0DA', letterSpacing: '0.04em',
              transition: 'border-color 0.15s', flex: isMobile ? '1' : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#006090'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#C8D0DA'}
            >View Services</button>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['Licensed & Insured', 'Armed & Unarmed', '24/7 Operations'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle size={14} style={{ color: '#006090' }} />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4E5A6E', fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: 'relative', height: 520 }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '85%', height: '75%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.18)' }}>
              <img src="/uploads/Armed Guard Lobby-825c5341.png" alt="FPI Security armed officer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '52%', height: '42%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 12px 36px rgba(0,0,0,0.15)', border: '3px solid #fff' }}>
              <img src="/uploads/Residential Golf Cart Patrol-b71ef93c.png" alt="FPI Security residential patrol" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              position: 'absolute', top: '60%', right: -16,
              background: '#0F3554', borderRadius: 10, padding: '16px 20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)', minWidth: 140,
            }}>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 32, fontWeight: 700, color: '#fff', lineHeight: 1 }}>24/7</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A7FA8', marginTop: 4 }}>Live Monitoring</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const HeroSection = ({ direction = 'command' }) => {
  if (direction === 'command') return <HeroCommand />;
  return <HeroClarity />;
};

export default HeroSection;
