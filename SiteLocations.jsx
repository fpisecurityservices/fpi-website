// FPI Security — Locations Page + Tech Section

const TechSection = ({ direction = 'command' }) => {
  const { isMobile } = useResponsive();
  const isLight = direction === 'clarity';
  const bg = isLight ? '#0F3554' : '#0D2A3F';
  return (
    <section style={{ background: bg, padding: isMobile ? '64px 24px' : '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 72, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 14 }}>Our Technology</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 46, fontWeight: 700, color: '#fff', marginBottom: 18, lineHeight: 1.05 }}>
            Built From the Ground Up for Security Operations
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.75, marginBottom: 30 }}>
            Off-the-shelf security software couldn't meet our standards. We built our own platform — every feature designed specifically for how we operate and what our clients need.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Real-time GPS tracking for all patrol units',
              'Live incident reporting with photo documentation',
              'Client-facing dashboard with 24/7 access',
              'Integrated dispatch with automated alerts',
              'Post order compliance monitoring',
              'Monthly and on-demand analytics reports',
            ].map(feat => (
              <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 20, height: 20, background: 'rgba(0,96,144,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i data-lucide="check" style={{ width: 11, height: 11, color: '#006090' }}></i>
                </div>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#8998B1' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr', gap: isMobile ? 12 : 16 }}>
          {[
            { icon: 'monitor', label: 'Client Dashboard', desc: 'Real-time visibility across all your sites' },
            { icon: 'radio', label: 'Live Dispatch', desc: 'Instant officer communication and response' },
            { icon: 'file-text', label: 'Incident Reports', desc: 'Automated documentation with photos' },
            { icon: 'map-pin', label: 'GPS Tracking', desc: 'Live patrol routes and timestamps' },
            { icon: 'bell', label: 'Automated Alerts', desc: 'Push notifications for critical events' },
            { icon: 'lock', label: 'Access Control', desc: 'Integrated entry management and audit logs' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'rgba(27,70,104,0.4)', border: '1px solid rgba(39,81,106,0.5)',
              borderRadius: 8, padding: '18px 16px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(27,70,104,0.65)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(27,70,104,0.4)'}
            >
              <div style={{ width: 34, height: 34, background: 'rgba(0,96,144,0.2)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <i data-lucide={item.icon} style={{ width: 17, height: 17, color: '#4A7FA8' }}></i>
              </div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#4A7FA8', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Locations Page ───────────────────────────────────────── */
const LocationsPage = ({ onNavigate }) => {
  const { isMobile } = useResponsive();
  const locations = [
    {
      city: 'Pembroke Pines, FL',
      label: 'Headquarters',
      description: 'FPI Security Services is headquartered in Pembroke Pines, FL — centrally located to serve Miami-Dade, Broward, and Palm Beach counties. Our state-of-the-art operations center runs 24/7, dispatching officers, monitoring live feeds, and managing client programs across South Florida.',
      coverage: ['Pembroke Pines', 'Miami-Dade County', 'Broward County', 'Palm Beach County', 'Fort Lauderdale', 'Boca Raton', 'Coral Gables', 'Aventura'],
      phone: '(800) 374-4316',
      email: 'info@fpisecurity.com',
      photo: 'uploads/Pembroke Pines.jpg',
      keywords: 'security services Pembroke Pines, security guards South Florida, security company Fort Lauderdale, security services Broward County',
    },
    {
      city: 'Dallas, TX',
      label: 'Regional Office',
      description: 'FPI expanded to Dallas, TX in 2024, bringing the same personalized, tech-forward approach that made us South Florida\'s trusted security partner. We serve the greater DFW metroplex with the full suite of FPI services — from uniformed officers to mobile patrol and remote video monitoring.',
      coverage: ['Dallas', 'Fort Worth', 'Plano', 'Irving', 'Arlington', 'Frisco', 'McKinney', 'Garland'],
      phone: '(800) 374-4316',
      email: 'dallas@fpisecurity.com',
      photo: 'uploads/Dallas.png',
      keywords: 'security services Dallas TX, security guards Dallas, security company DFW, security services Fort Worth',
    },
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '56px 24px' : '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>Our Locations</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>Where We Operate</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, color: '#7090B0', maxWidth: 520, lineHeight: 1.7 }}>
            Headquartered in Pembroke Pines, FL with a growing presence in Dallas — personalized service in two of the country's most dynamic markets.
          </p>
        </div>
      </div>

      {/* Location cards */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 24px' : '64px 48px', display: 'flex', flexDirection: 'column', gap: isMobile ? 28 : 48 }}>
        {locations.map((loc, i) => (
          <div key={loc.city} style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 0, borderRadius: 12, overflow: 'hidden',
            boxShadow: '0 6px 32px rgba(0,0,0,0.10)', border: '1px solid #E2E6ED',
          }}>
            {/* On mobile always show image on top; on desktop alternate */}
            {!isMobile && i % 2 !== 0 && (
              <div style={{ overflow: 'hidden' }}>
                <img src={loc.photo} alt={`FPI Security ${loc.city}`} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 400, display: 'block' }} />
              </div>
            )}
            {/* Content */}
            <div style={{ padding: isMobile ? '32px 24px' : '48px 44px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: '#E8EDF4', color: '#006090', padding: '4px 10px', borderRadius: 4 }}>{loc.label}</span>
              </div>
              <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 700, color: '#0F3554', marginBottom: 12, lineHeight: 1.05 }}>{loc.city}</h2>
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
                  <i data-lucide="phone" style={{ width: 16, height: 16 }}></i>
                  {loc.phone}
                </a>
                <a href={`mailto:${loc.email}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#4E5A6E', fontFamily: "'Barlow', sans-serif", fontSize: 14 }}>
                  <i data-lucide="mail" style={{ width: 16, height: 16, color: '#4A7FA8' }}></i>
                  {loc.email}
                </a>
              </div>
              <button onClick={() => onNavigate('contact')} style={{
                background: '#006090', color: '#fff', alignSelf: 'flex-start',
                fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600,
                padding: '11px 24px', borderRadius: 4, border: 'none', cursor: 'pointer',
                letterSpacing: '0.04em', transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
              onMouseLeave={e => e.currentTarget.style.background = '#006090'}
              >Request a Quote in {loc.city}</button>
            </div>
            {/* Photo right (desktop even, or mobile always) */}
            {(isMobile || i % 2 === 0) && (
              <div style={{ overflow: 'hidden', minHeight: isMobile ? 240 : 'unset' }}>
                <img src={loc.photo} alt={`FPI Security ${loc.city}`} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: isMobile ? 240 : 400, display: 'block' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ background: '#F4F6F8', padding: '64px 48px', textAlign: 'center', borderTop: '1px solid #E2E6ED' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 38, fontWeight: 700, color: '#0F3554', marginBottom: 14 }}>Outside Our Coverage Area?</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', lineHeight: 1.7, marginBottom: 28 }}>We're growing. Contact us to discuss whether we can serve your location.</p>
          <button onClick={() => onNavigate('contact')} style={{
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

Object.assign(window, { TechSection, LocationsPage });
