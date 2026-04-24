// FPI Security — Industries Section + Page

const INDUSTRIES_DATA = [
  {
    id: 'hoa',
    icon: 'home',
    title: 'HOA & Residential Communities',
    shortDesc: 'Gate officers, patrol services, and access control for HOAs, condominiums, and gated communities across South Florida.',
    fullDesc: 'Residential communities require a security partner who understands the balance between safety and community feel. Our officers are trained in hospitality-forward security — professional, approachable, and effective.',
    keywords: 'HOA security South Florida, residential security Miami, gated community security officers',
    services: ['Security Officers', 'Mobile Patrol', 'Access Control', 'Remote Video'],
    photo: 'uploads/Female Guard Guardhouse-a32ab5f4.png',
  },
  {
    id: 'retail',
    icon: 'shopping-bag',
    title: 'Retail & Shopping Centers',
    shortDesc: 'Loss prevention, uniformed deterrence, and incident response for retail stores, plazas, and shopping centers.',
    fullDesc: 'Retail environments face constant loss prevention challenges. FPI officers deter theft, manage crowds, and respond to incidents — all while maintaining a welcoming environment for your customers.',
    keywords: 'retail security South Florida, loss prevention Miami, shopping center security',
    services: ['Security Officers', 'Mobile Patrol', 'Remote Video', 'Access Control'],
    photo: 'uploads/RIO Mini Retail.png',
  },
  {
    id: 'construction',
    icon: 'hard-hat',
    title: 'Construction Sites',
    shortDesc: 'Overnight and weekend patrol for active construction sites — protecting equipment, materials, and your investment.',
    fullDesc: 'Construction sites are prime targets for theft and vandalism after hours. Our patrol officers and remote monitoring solutions protect your site around the clock, giving you peace of mind and protecting your project timeline.',
    keywords: 'construction site security South Florida, construction patrol Miami, site security Dallas TX',
    services: ['Mobile Patrol', 'Remote Video', 'Autonomous Surveillance', 'Security Officers'],
    photo: 'uploads/PPE Detection.png',
  },
  {
    id: 'commercial',
    icon: 'building-2',
    title: 'Commercial Office Buildings',
    shortDesc: 'Lobby security, access management, and workplace safety programs for office parks and commercial real estate.',
    fullDesc: 'Office buildings and commercial properties need security that projects professionalism while maintaining effective safety protocols. Our officers manage lobby access, enforce visitor policies, and respond to workplace incidents.',
    keywords: 'office building security South Florida, commercial security Miami, lobby security officers',
    services: ['Security Officers', 'Access Control', 'Remote Video', 'Mobile Patrol'],
    photo: 'uploads/Male Guard Lobby-f9cc8769.png',
  },
  {
    id: 'healthcare',
    icon: 'heart-pulse',
    title: 'Healthcare & Medical',
    shortDesc: 'HIPAA-aware security personnel trained in de-escalation and emergency response for hospitals, clinics, and medical campuses.',
    fullDesc: 'Healthcare environments require specially trained security professionals who understand patient privacy, de-escalation techniques, and emergency response protocols. FPI officers receive healthcare-specific training before deployment.',
    keywords: 'healthcare security South Florida, hospital security Miami, medical campus security',
    services: ['Security Officers', 'Access Control', 'Remote Video'],
    photo: 'uploads/Hospital Guard.png',
  },
  {
    id: 'warehouse',
    icon: 'warehouse',
    title: 'Warehouses & Industrial',
    shortDesc: 'Perimeter security, gate control, and overnight patrol for warehouses, logistics facilities, and industrial properties.',
    fullDesc: 'Warehouses and industrial facilities require robust perimeter security, gate management, and after-hours patrol. FPI provides uniformed officers and autonomous surveillance solutions optimized for large footprint facilities.',
    keywords: 'warehouse security South Florida, industrial security Miami, logistics facility security',
    services: ['Mobile Patrol', 'Security Officers', 'Autonomous Surveillance', 'Access Control'],
    photo: 'uploads/Industrial Surveillance.png',
    photoPosition: 'right center',
  },
  {
    id: 'dealership',
    icon: 'car',
    title: 'Car Dealerships',
    shortDesc: 'Autonomous surveillance and mobile patrol protecting vehicle inventory, lot perimeters, and after-hours dealership assets.',
    fullDesc: 'Car dealerships represent millions in exposed inventory — vehicles parked in open lots are prime targets for theft and vandalism. FPI deploys autonomous surveillance towers and patrol officers to deter threats and provide 24/7 visibility across your lot.',
    keywords: 'car dealership security South Florida, auto lot security Miami, dealership patrol services',
    services: ['Autonomous Surveillance', 'Mobile Patrol', 'Remote Video', 'Security Officers'],
    photo: 'uploads/RIO Mini Dealership.png',
  },
  {
    id: 'hospitality',
    icon: 'hotel',
    title: 'Hospitality & Hotels',
    shortDesc: 'Guest-forward security programs for hotels, resorts, and hospitality venues balancing safety with exceptional guest experience.',
    fullDesc: 'Security at hospitality properties must blend seamlessly with the guest experience. Our officers are trained in hospitality standards — they protect guests and assets while serving as positive brand ambassadors for your property.',
    keywords: 'hotel security South Florida, resort security Miami, hospitality security services',
    services: ['Security Officers', 'Access Control', 'Remote Video'],
    photo: 'uploads/Residential Security Officer-6779728e.png',
  },
];

/* ── Industry Card ────────────────────────────────────────── */
const IndustryCard = ({ industry, onSelect, direction = 'command' }) => {
  const [hovered, setHovered] = React.useState(false);
  const isLight = direction === 'clarity';
  const bg = isLight ? '#fff' : '#0F3554';
  const headingColor = isLight ? '#0F3554' : '#fff';
  const bodyColor = isLight ? '#647184' : '#7090B0';
  const iconBg = isLight ? '#E8EDF4' : 'rgba(0,96,144,0.2)';

  return (
    <div
      onClick={() => onSelect && onSelect(industry.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg, borderRadius: 8, padding: '24px 22px',
        border: isLight
          ? (hovered ? '1px solid #006090' : '1px solid #E2E6ED')
          : (hovered ? '1px solid rgba(0,96,144,0.5)' : '1px solid rgba(39,81,106,0.35)'),
        cursor: onSelect ? 'pointer' : 'default',
        boxShadow: hovered ? '0 6px 24px rgba(0,96,144,0.12)' : (isLight ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'),
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 8, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <i data-lucide={industry.icon} style={{ width: 20, height: 20, color: '#006090' }}></i>
      </div>
      <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 19, fontWeight: 700, color: headingColor, marginBottom: 8, lineHeight: 1.2 }}>{industry.title}</h3>
      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: bodyColor, lineHeight: 1.65 }}>{industry.shortDesc}</p>
    </div>
  );
};

/* ── Industries Strip (homepage) ──────────────────────────── */
const IndustriesStrip = ({ onNavigate, direction = 'command' }) => {
  const { isMobile, isTablet } = useResponsive();
  const isLight = direction === 'clarity';
  const bg = isLight ? '#F4F6F8' : '#0A2236';
  const headingColor = isLight ? '#0F3554' : '#fff';
  const bodyColor = isLight ? '#647184' : '#7090B0';

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
            <button onClick={() => onNavigate('industries')} style={{
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
              <IndustryCard key={ind.id} industry={ind} direction={direction} onSelect={id => onNavigate('industries')} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Industries Full Page ─────────────────────────────────── */
const IndustriesPage = ({ onNavigate }) => {
  const { isMobile } = useResponsive();
  return (
  <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
    {/* Hero banner */}
    <div style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '56px 24px' : '72px 48px' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('assets/photo-lobby-team.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
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
        {INDUSTRIES_DATA.map(ind => (
          <div key={ind.id} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, background: '#F4F6F8', borderRadius: 10, overflow: 'hidden', border: '1px solid #E2E6ED' }}>
            <div style={{ padding: isMobile ? '24px 20px' : '32px 28px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: '#E8EDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <i data-lucide={ind.icon} style={{ width: 22, height: 22, color: '#006090' }}></i>
              </div>
              <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 22 : 24, fontWeight: 700, color: '#0F3554', marginBottom: 10, lineHeight: 1.15 }}>{ind.title}</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 14 }}>{ind.fullDesc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                {ind.services.map(s => (
                  <span key={s} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#E8EDF4', color: '#27516A', padding: '3px 8px', borderRadius: 4 }}>{s}</span>
                ))}
              </div>
              <button onClick={() => onNavigate('contact')} style={{
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
        ))}
      </div>
    </div>

    {/* CTA */}
    <div style={{ background: '#0D2A3F', padding: isMobile ? '56px 24px' : '64px 48px', textAlign: 'center' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Don't See Your Industry?</h2>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.7, marginBottom: 28 }}>We customize security programs for any property type. Tell us about your needs and we'll build a solution around you.</p>
        <button onClick={() => onNavigate('contact')} style={{
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

Object.assign(window, { IndustriesStrip, IndustriesPage, INDUSTRIES_DATA });
