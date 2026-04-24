// FPI Security — Trust Bar, About, CTA Strip, Footer (responsive)

/* ── Trust Bar ───────────────────────────────────────────── */
const TrustBar = ({ direction = 'command' }) => {
  const { isMobile } = useResponsive();
  const isLight = direction === 'clarity';
  const bg = isLight ? '#fff' : '#0A2236';
  const border = isLight ? '1px solid #E2E6ED' : 'none';
  const shadow = isLight ? '0 2px 12px rgba(0,0,0,.06)' : 'none';
  const textColor = isLight ? '#1A1E26' : '#CBD5E0';

  const items = [
    { icon: 'shield-check', label: 'Licensed & Insured' },
    { icon: 'badge-check', label: 'Armed & Unarmed Officers' },
    { icon: 'clock', label: '24/7 Operations' },
    { icon: 'phone', label: '(800) 374-4316' },
    { icon: 'map-pin', label: 'FL & TX' },
  ];

  if (isMobile) return null;

  return (
    <div style={{ background: bg, borderBottom: border, boxShadow: shadow, padding: '14px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <React.Fragment key={item.label}>
            {i > 0 && <div style={{ width: 1, height: 16, background: isLight ? '#E2E6ED' : 'rgba(255,255,255,0.1)', flexShrink: 0 }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i data-lucide={item.icon} style={{ width: 14, height: 14, color: '#006090', flexShrink: 0 }}></i>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600, color: textColor, whiteSpace: 'nowrap' }}>{item.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/* ── About Section ────────────────────────────────────────── */
const AboutSection = ({ direction = 'command', onNavigate }) => {
  const { isMobile } = useResponsive();
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
              <img src="uploads/Office Building with Supervisor-c670ba06.png" alt="FPI Security supervisor with officers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '52%', height: '46%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.16)', border: `3px solid ${isLight ? '#fff' : '#0D2A3F'}` }}>
              <img src="uploads/Two Guard High Rise Lobby-b8e7df31.png" alt="FPI officers at luxury high-rise lobby" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
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
          <button onClick={() => onNavigate('contact')} style={{
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

/* ── CTA Strip ────────────────────────────────────────────── */
const CTAStrip = ({ onNavigate }) => {
  const { isMobile } = useResponsive();
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '64px 24px' : '80px 48px', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('uploads/Event Guards-ea496454.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,42,63,0.95) 0%, rgba(0,96,144,0.88) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 36 : 46, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.05 }}>Ready to Elevate Your Security?</h2>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 14 : 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: 32 }}>
          Tell us about your property and we'll build a custom security plan that fits your needs and budget. No contracts, no one-size-fits-all.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('contact')} style={{
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
            <i data-lucide="phone" style={{ width: 15, height: 15 }}></i>
            (800) 374-4316
          </a>
        </div>
      </div>
    </section>
  );
};

/* ── Footer ───────────────────────────────────────────────── */
const SiteFooter = ({ onNavigate }) => {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr 1fr';
  return (
    <footer style={{ background: '#07192A', padding: isMobile ? '48px 24px 24px' : '60px 48px 28px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 36 : 48, marginBottom: 40 }}>
          <div>
            <img src="assets/logo-transparent.png" alt="FPI Security Services" style={{ height: 38, objectFit: 'contain', marginBottom: 14, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4A7FA8', lineHeight: 1.7, maxWidth: 260, marginBottom: 18 }}>
              Personalized, tech-forward security solutions for properties across Pembroke Pines, FL and Dallas, TX.
            </p>
            <a href="tel:8003744316" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#fff', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 700 }}>
              <i data-lucide="phone" style={{ width: 16, height: 16, color: '#006090' }}></i>
              (800) 374-4316
            </a>
          </div>
          {[
            { heading: 'Services', links: [
              { label: 'Security Officers', id: 'services' },
              { label: 'Mobile Patrol', id: 'services' },
              { label: 'Remote Video Monitoring', id: 'services' },
              { label: 'Access Control', id: 'services' },
              { label: 'Autonomous Surveillance', id: 'services' },
            ]},
            { heading: 'Industries', links: [
              { label: 'HOA & Residential', id: 'industries' },
              { label: 'Retail & Shopping Centers', id: 'industries' },
              { label: 'Construction Sites', id: 'industries' },
              { label: 'Commercial Office', id: 'industries' },
              { label: 'Healthcare & Medical', id: 'industries' },
            ]},
            { heading: 'Company', links: [
              { label: 'About FPI', id: 'about' },
              { label: 'Locations', id: 'locations' },
              { label: 'Technology', id: 'services' },
              { label: 'Contact', id: 'contact' },
              { label: 'Request a Quote', id: 'contact' },
            ]},
          ].map(col => (
            <div key={col.heading}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 14 }}>{col.heading}</div>
              {col.links.map(l => (
                <button key={l.label} onClick={() => onNavigate(l.id)} style={{
                  display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#567090',
                  marginBottom: 10, padding: 0, textAlign: 'left', transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8998B1'}
                onMouseLeave={e => e.currentTarget.style.color = '#567090'}
                >{l.label}</button>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#3A5068' }}>© 2025 FPI Security Services. All rights reserved. | Licensed & Insured</span>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#3A5068' }}>Pembroke Pines, FL · Dallas, TX</span>
        </div>
      </div>
    </footer>
  );
};

/* ── About Page ───────────────────────────────────────────── */
const AboutPage = ({ onNavigate }) => {
  const { isMobile, isTablet } = useResponsive();
  const values = [
    { icon: 'shield-check', title: 'Integrity', desc: 'We do what we say. Every officer, every shift, every client.' },
    { icon: 'eye', title: 'Vigilance', desc: 'Proactive, attentive security — never passive, never reactive.' },
    { icon: 'star', title: 'Excellence', desc: 'High standards across hiring, training, technology, and service delivery.' },
    { icon: 'users', title: 'Partnership', desc: 'We build long-term relationships, not transactional contracts.' },
  ];
  const stats = [
    { value: '24/7', label: 'Operations Center' },
    { value: '2', label: 'Office Locations' },
    { value: '6+', label: 'Service Lines' },
    { value: '100%', label: 'Custom Programs' },
  ];
  const gallery = [
    { src: 'uploads/Two Guard High Rise Lobby-b8e7df31.png', caption: 'Luxury High-Rise Security' },
    { src: 'uploads/Male Guard Lobby-f9cc8769.png', caption: 'Corporate Lobby Security' },
    { src: 'uploads/Event Guards-ea496454.png', caption: 'Special Event Security' },
    { src: 'uploads/Two Armed Guards-63de0d99.png', caption: 'Armed Officers & Patrol Fleet' },
    { src: 'uploads/Residential Golf Cart Patrol-b71ef93c.png', caption: 'Residential Community Patrol' },
    { src: 'uploads/Office Building with Supervisor-c670ba06.png', caption: 'Field Supervision & Oversight' },
  ];
  const pad = isMobile ? '24px' : '48px';

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: isMobile ? 300 : 420, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('uploads/Monitoring Center-5633d731.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(7,25,42,0.97) 0%, rgba(13,42,63,0.88) 50%, rgba(13,42,63,0.5) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: isMobile ? '60px 24px' : '80px 48px', width: '100%' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>About FPI Security</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 44 : 62, fontWeight: 700, color: '#fff', lineHeight: 1.0, marginBottom: 18, maxWidth: 700 }}>
            Built on Integrity.<br />Driven by Excellence.
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 17, color: '#8998B1', lineHeight: 1.7, maxWidth: 560 }}>
            FPI Security Services was founded on a simple belief — every property deserves a security program built specifically for it, backed by people who genuinely care about doing the job right.
          </p>
        </div>
      </div>

      {/* Mission Bar */}
      <div style={{ background: '#006090', padding: isMobile ? '36px 24px' : '44px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          {!isMobile && <i data-lucide="quote" style={{ width: 36, height: 36, color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}></i>}
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 20 : 26, fontWeight: 600, color: '#fff', lineHeight: 1.45, margin: 0 }}>
            Our mission is to provide professional security services with integrity, vigilance, and excellence — customized to every client, every property, every time.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '56px 24px' : '88px 48px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 36 : 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 14 }}>Our Story</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#0F3554', marginBottom: 20, lineHeight: 1.05 }}>Personal Service.<br />Enterprise Capability.</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 16 }}>
            FPI Security Services was built on the belief that the security industry needed a different kind of company — one small enough to care deeply about every client, and capable enough to deliver at an enterprise level.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 16 }}>
            Headquartered in Pembroke Pines, FL, we serve Miami-Dade, Broward, and Palm Beach counties — and expanded to Dallas, TX in 2024.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8 }}>
            What sets us apart is our investment in technology. We built a proprietary platform from scratch — because off-the-shelf software couldn't meet our standards.
          </p>
        </div>
        {!isMobile && (
          <div style={{ position: 'relative', height: 500 }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '90%', height: '70%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}>
              <img src="uploads/Office Building with Supervisor-c670ba06.png" alt="FPI supervisor with team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '44%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 12px 36px rgba(0,0,0,0.14)', border: '3px solid #fff' }}>
              <img src="uploads/Female Guard Guardhouse-a32ab5f4.png" alt="FPI officer at guardhouse" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={{ background: '#0D2A3F', padding: isMobile ? '48px 24px' : '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 32 : 48, textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 44 : 56, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A7FA8', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div style={{ background: '#F4F6F8', padding: isMobile ? '56px 24px' : '88px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>What We Stand For</div>
            <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#0F3554', lineHeight: 1.05 }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? 16 : 24 }}>
            {values.map(v => (
              <div key={v.title} style={{ background: '#fff', borderRadius: 10, padding: isMobile ? '24px 18px' : '32px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E6ED' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: '#E8EDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <i data-lucide={v.icon} style={{ width: 20, height: 20, color: '#006090' }}></i>
                </div>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 18 : 22, fontWeight: 700, color: '#0F3554', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#647184', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '56px 24px' : '88px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>FPI in the Field</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#0F3554', lineHeight: 1.05 }}>Our Officers. Our Properties.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? 10 : 16 }}>
          {gallery.map((p, i) => (
            <div key={i} style={{ borderRadius: 8, overflow: 'hidden', position: 'relative', height: isMobile ? 160 : (i === 0 || i === 3 ? 380 : 260), boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <img src={p.src} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              {!isMobile && (
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(7,25,42,0.85), transparent)', padding: '24px 18px 16px' }}>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600, color: '#fff' }}>{p.caption}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why FPI */}
      <div style={{ background: '#0F3554', padding: isMobile ? '56px 24px' : '88px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 36 : 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 14 }}>Why Choose FPI</div>
            <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#fff', marginBottom: 24, lineHeight: 1.05 }}>A Different Kind of Security Company</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                ['Truly customized programs', 'No cookie-cutter contracts. Every program is built from scratch around your property, risk profile, and budget.'],
                ['Technology-first operations', 'Our proprietary platform gives clients real-time visibility — live GPS, incident reports, client dashboards, and analytics.'],
                ['Personal attention, enterprise scale', 'You deal with decision-makers, not account managers. We stay accountable because we are invested in your outcome.'],
                ['Rigorous officer selection', 'We screen, background-check, and train every officer to your specific post orders before they set foot on your property.'],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 22, height: 22, background: 'rgba(0,96,144,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <i data-lucide="check" style={{ width: 12, height: 12, color: '#4A7FA8' }}></i>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{title}</div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#7090B0', lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!isMobile && (
            <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.3)', height: 480 }}>
              <img src="uploads/Armed Guard Lobby-825c5341.png" alt="FPI armed security officer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: isMobile ? '56px 24px' : '80px 48px', textAlign: 'center', background: '#fff' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 42, fontWeight: 700, color: '#0F3554', marginBottom: 14 }}>Ready to Work Together?</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', lineHeight: 1.7, marginBottom: 28 }}>Tell us about your property and we will build a security program around it — typically within 24 hours.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('contact')} style={{
              background: '#006090', color: '#fff',
              fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
              padding: '14px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
              letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(0,96,144,0.3)',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
            onMouseLeave={e => e.currentTarget.style.background = '#006090'}
            >Request a Consultation</button>
            <button onClick={() => onNavigate('services')} style={{
              background: '#fff', color: '#1A1E26',
              fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
              padding: '14px 24px', borderRadius: 4, cursor: 'pointer',
              border: '1.5px solid #C8D0DA', letterSpacing: '0.04em',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#006090'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#C8D0DA'}
            >View Our Services</button>
          </div>
        </div>
      </div>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
};

Object.assign(window, { TrustBar, AboutSection, AboutPage, CTAStrip, SiteFooter });
