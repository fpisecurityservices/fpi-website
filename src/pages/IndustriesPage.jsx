import { useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, HardHat, Building2, HeartPulse, Warehouse, Car, Hotel } from 'lucide-react';
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
      {/* Hero banner */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '56px 24px' : '72px 48px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/photo-lobby-team.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,42,63,0.96) 0%, rgba(15,53,84,0.88) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>Industries Served</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>We Know Your Industry</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 17, color: '#7090B0', maxWidth: 560, lineHeight: 1.7 }}>
            Generic security programs don't work. We specialize in the unique demands of each property type — from luxury residences to warehouse logistics.
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
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 14 }}>{ind.fullDesc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                    {ind.services.map(s => (
                      <span key={s} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#E8EDF4', color: '#27516A', padding: '3px 8px', borderRadius: 4 }}>{s}</span>
                    ))}
                  </div>
                  <button onClick={() => navigate('/contact')} style={{
                    background: '#006090', color: '#fff',
                    fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600,
                    padding: '9px 20px', borderRadius: 4, border: 'none', cursor: 'pointer',
                    letterSpacing: '0.04em', transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
                  onMouseLeave={e => e.currentTarget.style.background = '#006090'}
                  >Get a Quote</button>
                </div>
                <div style={{ overflow: 'hidden', minHeight: isMobile ? 200 : 240 }}>
                  <img src={ind.photo} alt={ind.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: ind.photoPosition || 'center', display: 'block', minHeight: isMobile ? 200 : 240 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#0D2A3F', padding: isMobile ? '56px 24px' : '64px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Don't See Your Industry?</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.7, marginBottom: 28 }}>We customize security programs for any property type. Tell us about your needs and we'll build a solution around you.</p>
          <button onClick={() => navigate('/contact')} style={{
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
            padding: '13px 32px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
          onMouseLeave={e => e.currentTarget.style.background = '#006090'}
          >Request a Custom Security Plan</button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
