import { Phone } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';
import { useNavigate } from 'react-router-dom';

const CTAStrip = () => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '64px 24px' : '80px 48px', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/uploads/Event Guards-ea496454.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,42,63,0.95) 0%, rgba(0,96,144,0.88) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 36 : 46, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.05 }}>Ready to Elevate Your Security?</h2>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 14 : 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: 32 }}>
          Tell us about your property and we'll build a custom security plan that fits your needs and budget. No contracts, no one-size-fits-all.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{
            background: '#fff', color: '#006090',
            fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 700,
            padding: '14px 34px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)'; }}
          >Get a Free Consultation</button>
          <a href="tel:8003744316" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'transparent', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
            padding: '14px 28px', borderRadius: 4,
            border: '1.5px solid rgba(255,255,255,0.4)',
            letterSpacing: '0.04em', textDecoration: 'none',
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
          >
            <Phone size={15} />
            (800) 374-4316
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
