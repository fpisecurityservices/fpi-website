import { Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { LOCATIONS_DATA } from '../data/locations';
import { useNavigate } from 'react-router-dom';

const LocationsPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security Services in FL, TX, GA, AZ, NV & CA | FPI Security"
        description="FPI Security operates across Florida, Texas, Georgia, Arizona, Nevada, and California — providing licensed guards, mobile patrol, and remote monitoring in every market we serve."
        ogTitle="FPI Security | Serving Six States Coast to Coast"
        ogDescription="Locally operated security services across six states. Licensed guards, mobile patrol, and surveillance built for your market."
        ogUrl="https://www.fpisecurity.com/locations"
      />
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '56px 24px' : '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>Our Locations</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>One Security Partner. Six States.</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, color: '#7090B0', maxWidth: 560, lineHeight: 1.7 }}>
            Headquartered in Pembroke Pines, FL with operations across Florida, Texas, Georgia, Arizona, Nevada, and California — personalized service in some of the country's most dynamic markets.
          </p>
        </div>
      </div>

      {/* Location cards */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 24px' : '64px 48px', display: 'flex', flexDirection: 'column', gap: isMobile ? 28 : 48 }}>
        {LOCATIONS_DATA.map((loc, i) => (
          <div key={loc.city} style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 0, borderRadius: 12, overflow: 'hidden',
            boxShadow: '0 6px 32px rgba(0,0,0,0.10)', border: '1px solid #E2E6ED',
          }}>
            {!isMobile && i % 2 !== 0 && (
              <div style={{ overflow: 'hidden' }}>
                <img src={loc.photo} alt={`FPI Security ${loc.city}`} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 400, display: 'block' }} />
              </div>
            )}
            <div style={{ padding: isMobile ? '32px 24px' : '48px 44px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: '#E8EDF4', color: '#006090', padding: '4px 10px', borderRadius: 4 }}>{loc.label}</span>
              </div>
              <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 700, color: '#0F3554', marginBottom: 12, lineHeight: 1.05 }}>{loc.h2Title || loc.city}</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.75, marginBottom: 22 }}>{loc.description}</p>
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A96A8', marginBottom: 10 }}>Coverage Areas</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {loc.coverage.map(area => (
                    <span key={area} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#4E5A6E', background: '#F4F6F8', padding: '4px 10px', borderRadius: 4, border: '1px solid #E2E6ED' }}>{area}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 20, borderTop: '1px solid #E2E6ED', marginBottom: 20 }}>
                <a href={`tel:${loc.phone.replace(/\D/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 700 }}>
                  <Phone size={16} />
                  {loc.phone}
                </a>
                <a href={`mailto:${loc.email}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#4E5A6E', fontFamily: "'Barlow', sans-serif", fontSize: 14 }}>
                  <Mail size={16} style={{ color: '#4A7FA8' }} />
                  {loc.email}
                </a>
              </div>
              <button onClick={() => navigate('/contact')} style={{
                background: '#006090', color: '#fff', alignSelf: 'flex-start',
                fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600,
                padding: '11px 24px', borderRadius: 4, border: 'none', cursor: 'pointer',
                letterSpacing: '0.04em', transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
              onMouseLeave={e => e.currentTarget.style.background = '#006090'}
              >Request a Quote in {loc.city}</button>
            </div>
            {(isMobile || i % 2 === 0) && (
              <div style={{ overflow: 'hidden', minHeight: isMobile ? 240 : 'unset' }}>
                <img src={loc.photo} alt={`FPI Security ${loc.city}`} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: isMobile ? 240 : 400, display: 'block' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Expansion markets */}
      <div style={{ background: '#0D2A3F', padding: isMobile ? '48px 24px' : '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>Our Newest Markets</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 32 : 44, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>Now Serving Georgia, Arizona, Nevada &amp; California</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
            The same licensed officers, mobile patrol, and proprietary technology platform that built our reputation in Florida and Texas — now available in four new states.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
            {['Georgia', 'Arizona', 'Nevada', 'California'].map(state => (
              <span key={state} style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 18 : 22, fontWeight: 700, color: '#fff', background: 'rgba(0,96,144,0.25)', border: '1px solid rgba(74,127,168,0.4)', padding: '10px 24px', borderRadius: 6 }}>{state}</span>
            ))}
          </div>
          <button onClick={() => navigate('/contact')} style={{
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600,
            padding: '12px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
          onMouseLeave={e => e.currentTarget.style.background = '#006090'}
          >Request Service in Your State</button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ background: '#F4F6F8', padding: '64px 48px', textAlign: 'center', borderTop: '1px solid #E2E6ED' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 38, fontWeight: 700, color: '#0F3554', marginBottom: 14 }}>Outside Our Coverage Area?</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', lineHeight: 1.7, marginBottom: 28 }}>We're growing. Contact us to discuss whether we can serve your location.</p>
          <button onClick={() => navigate('/contact')} style={{
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600,
            padding: '12px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
          onMouseLeave={e => e.currentTarget.style.background = '#006090'}
          >Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
