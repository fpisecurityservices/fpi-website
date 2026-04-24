// FPI Security — Services Section + Individual Service Page

const SERVICES_DATA = [
  {
    id: 'officers',
    icon: 'shield',
    title: 'Security Officers',
    shortDesc: 'Professional private security guards and commercial security guard services — armed and unarmed, deployed with custom post orders for your property.',
    fullDesc: 'Our private security guards are the face of your property\'s safety program. Every officer is screened, background-checked, and trained to your specific post orders and protocols. From front-desk concierge security to armed patrol, we provide 24-hour security guard service with the right personnel for your environment.',
    tags: ['On-Site', 'Armed/Unarmed', 'Custom Uniforms', '24-Hour Service'],
    bullets: ['Thorough background screening and vetting', 'Site-specific training and orientation', 'Armed and unarmed private security guards', 'Custom uniform programs available', 'Supervisory oversight and daily reporting', 'Rapid deployment for new assignments'],
    photo: 'uploads/Male Guard Lobby-f9cc8769.png',
    photoAlt: 'FPI security officer at lobby desk',
    seoKeywords: 'security guard companies near me, private security guards Miami, commercial security guard service, 24-hour security guard service, security guards Miami',
  },
  {
    id: 'patrol',
    icon: 'car',
    title: 'Mobile Patrol',
    shortDesc: 'Marked security patrol vehicles providing visible deterrence, perimeter sweeps, and rapid response across single and multi-site properties.',
    fullDesc: 'Our security patrols provide a highly visible presence across your properties. Regular checks, perimeter sweeps, and rapid incident response — ideal for multi-site coverage, construction sites, retail centers, and HOA communities. GPS-tracked and available around the clock.',
    tags: ['Security Patrols', 'Multi-Site', 'Rapid Response', 'GPS Tracked'],
    bullets: ['Branded, marked security patrol vehicles', 'GPS-tracked routes with live dashboard', 'Scheduled and randomized patrol patterns', 'Incident documentation with photos', 'After-hours and overnight coverage', 'Rapid response capability'],
    photo: 'uploads/Patrol Tahoe-2668d00f.png',
    photoAlt: 'FPI Security marked patrol vehicle',
    seoKeywords: 'security patrols South Florida, mobile patrol security Miami, security patrol services Dallas TX',
  },
  {
    id: 'remote',
    icon: 'video',
    title: 'Remote Video Monitoring',
    shortDesc: 'CCTV monitoring service with live remote operators 24/7. Video surveillance services with real-time alerts, talk-down audio, and direct dispatch integration.',
    fullDesc: 'Our remote surveillance service provides 24/7 live video monitoring by trained operators who actively watch your cameras — not just record them. As a leading video surveillance service and CCTV monitoring provider, our virtual guard services respond instantly through audio talk-down, dispatch integration, and full incident documentation.',
    tags: ['CCTV Monitoring', 'Virtual Guard', 'Remote Surveillance', '24/7 Live'],
    bullets: ['Live virtual guard operators — not just recording', 'Proactive CCTV monitoring with audio deterrence', 'Real-time incident alerts and documentation', 'Direct integration with local dispatch', 'Scalable video surveillance systems', 'Monthly analytics reporting'],
    photo: 'uploads/Video Monitoring-2ab3f587.png',
    photoAlt: 'FPI Security remote video monitoring',
    seoKeywords: 'CCTV monitoring service Miami, video surveillance services South Florida, remote surveillance, virtual guard services, security video monitoring systems',
  },
  {
    id: 'access',
    icon: 'camera',
    title: 'Access Control & Surveillance Systems',
    shortDesc: 'Expert installation of security camera surveillance systems, access control, and integrated security solutions — designed, installed, and maintained by our in-house technical team.',
    fullDesc: 'FPI is a trusted security systems provider offering professional installation of cutting-edge surveillance camera technology and access control tailored to your property. From high-definition security camera technology networks to keypad and card-reader entry systems, we handle everything from design through ongoing maintenance — ensuring your security systems are always at peak performance.',
    tags: ['Security Camera Surveillance', 'Access Control', 'Security Systems', 'Maintenance & Support'],
    bullets: ['High-definition security camera surveillance systems', 'Remote monitoring with smart analytics', 'Keypad, card reader, fob, and mobile credential access', 'Biometric entry options available', 'Enterprise-grade equipment by certified technicians', 'Full audit trails and real-time entry monitoring', 'Client portal for access management', 'Ongoing maintenance and support packages'],
    photo: 'uploads/ChatGPT Image Apr 24, 2026, 09_49_34 AM.png',
    photoAlt: 'FPI Security technician installing camera and access control system',
    seoKeywords: 'security camera surveillance companies Miami, security systems providers South Florida, surveillance camera technology, security camera technology, access control installation Miami',
  },
  {
    id: 'autonomous',
    icon: 'bot',
    title: 'Autonomous Surveillance',
    shortDesc: 'AI-powered autonomous surveillance solutions that extend your security coverage — combining robotic patrols with live remote surveillance monitoring.',
    fullDesc: 'FPI deploys autonomous robotic security devices as part of a complete security solution. These AI-assisted units patrol defined areas, detect anomalies, and feed data directly into our remote surveillance operations platform — supplementing your private security guards at a fraction of the staffing cost.',
    tags: ['Robotics', 'AI-Assisted', 'Extended Coverage', 'Cost-Effective'],
    bullets: ['Autonomous mobile patrol robots', 'AI-powered anomaly detection', 'Real-time video and audio feeds', 'Direct integration with our ops platform', 'Extends coverage without additional headcount', 'Ideal for large campuses and parking areas'],
    photo: 'uploads/Monitoring Center-5633d731.png',
    photoAlt: 'FPI autonomous security surveillance',
    seoKeywords: 'autonomous security robots South Florida, AI security surveillance Miami',
  },
  {
    id: 'tech',
    icon: 'cpu',
    title: 'Proprietary Tech Platform',
    shortDesc: 'Our custom-built platform powers dispatch, reporting, real-time monitoring, and client dashboards — built for how we operate.',
    fullDesc: 'We built our own technology platform because off-the-shelf software couldn\'t meet our standards. Every feature — from live GPS dispatch to client-facing reporting — was designed specifically for how FPI operates. Our clients get real-time visibility into their security programs.',
    tags: ['Client Portal', 'Live Dashboard', 'GPS Dispatch', 'Custom Reports'],
    bullets: ['Real-time GPS tracking for all patrol units', 'Live incident reporting with photo documentation', 'Client-facing dashboard with 24/7 access', 'Integrated dispatch with automated alerts', 'Post order compliance monitoring', 'Monthly and on-demand analytics reporting'],
    photo: 'uploads/Virtual Guard-a9a7f0ee.png',
    photoAlt: 'FPI Security virtual guard monitoring station',
    seoKeywords: 'security technology platform, security management software, client security dashboard',
  },
];

/* ── Service Card ─────────────────────────────────────────── */
const ServiceCard = ({ service, onSelect, direction = 'command' }) => {
  const isLight = direction === 'clarity';
  const [hovered, setHovered] = React.useState(false);
  const bg = isLight ? '#fff' : '#0F3554';
  const border = isLight
    ? (hovered ? '1px solid #006090' : '1px solid #E2E6ED')
    : (hovered ? '1px solid rgba(0,96,144,0.5)' : '1px solid rgba(39,81,106,0.4)');
  const headingColor = isLight ? '#1A1E26' : '#fff';
  const bodyColor = isLight ? '#647184' : '#7090B0';
  const iconBg = isLight ? '#E8EDF4' : 'rgba(0,96,144,0.2)';

  return (
    <div
      onClick={() => onSelect(service.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg, borderRadius: 8, padding: '28px 24px',
        border, cursor: 'pointer',
        boxShadow: hovered ? (isLight ? '0 8px 28px rgba(0,96,144,0.12)' : '0 8px 28px rgba(0,0,0,0.25)') : (isLight ? '0 2px 12px rgba(0,0,0,.06)' : 'none'),
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.2s',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 8, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i data-lucide={service.icon} style={{ width: 22, height: 22, color: '#006090' }}></i>
      </div>
      <div>
        <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 21, fontWeight: 700, color: headingColor, marginBottom: 8, lineHeight: 1.15 }}>{service.title}</h3>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: bodyColor, lineHeight: 1.65 }}>{service.shortDesc}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {service.tags.map(t => (
          <span key={t} style={{
            fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: isLight ? '#E8EDF4' : 'rgba(0,96,144,0.15)',
            color: isLight ? '#27516A' : '#4A7FA8',
            padding: '3px 8px', borderRadius: 4,
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600, marginTop: 4 }}>
        <span>Learn more</span>
        <i data-lucide="arrow-right" style={{ width: 14, height: 14, transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.15s' }}></i>
      </div>
    </div>
  );
};

/* ── Services Section (home) ──────────────────────────────── */
const ServicesSection = ({ onNavigate, direction = 'command' }) => {
  const { isMobile, isTablet } = useResponsive();
  const isLight = direction === 'clarity';
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)';
  return (
    <section id="services" style={{ background: isLight ? '#fff' : '#F4F6F8', padding: isMobile ? '64px 24px' : '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 36 : 52, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>What We Offer</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 48, fontWeight: 700, color: '#0F3554', marginBottom: 14, lineHeight: 1.05 }}>Comprehensive Security Solutions</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Every engagement is built around your property. We combine people, technology, and intelligence for security that actually fits.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 18 }}>
          {SERVICES_DATA.map(s => (
            <ServiceCard key={s.id} service={s} direction={direction} onSelect={id => onNavigate('service-' + id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Service Detail Page ──────────────────────────────────── */
const ServiceDetailPage = ({ serviceId, onNavigate }) => {
  const service = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];
  const others = SERVICES_DATA.filter(s => s.id !== serviceId).slice(0, 3);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      {/* Header banner */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: '56px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <button onClick={() => onNavigate('services')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#4A7FA8', fontFamily: "'Barlow', sans-serif", fontSize: 13, cursor: 'pointer', marginBottom: 20, padding: 0 }}>
            <i data-lucide="arrow-left" style={{ width: 14, height: 14 }}></i>
            All Services
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,96,144,0.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i data-lucide={service.icon} style={{ width: 24, height: 24, color: '#4A7FA8' }}></i>
            </div>
            <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>{service.title}</h1>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {service.tags.map(t => (
              <span key={t} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,96,144,0.2)', color: '#8998B1', padding: '4px 10px', borderRadius: 4 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: typeof useResponsive !== 'undefined' && useResponsive().isMobile ? '40px 24px' : '56px 48px', display: 'grid', gridTemplateColumns: typeof useResponsive !== 'undefined' && useResponsive().isMobile ? '1fr' : '1fr 1fr', gap: 48 }}>
        <div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 32, fontWeight: 700, color: '#0F3554', marginBottom: 16, lineHeight: 1.1 }}>What's Included</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.75, marginBottom: 28 }}>{service.fullDesc}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
            {service.bullets.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 20, height: 20, background: '#E8EDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="check" style={{ width: 11, height: 11, color: '#006090' }}></i>
                </div>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
          <button onClick={() => onNavigate('contact')} style={{
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
            padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
          onMouseLeave={e => e.currentTarget.style.background = '#006090'}
          >Get a Custom Quote</button>
        </div>

        <div>
          <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginBottom: 32 }}>
            <img src={service.photo} alt={service.photoAlt} style={{ width: '100%', height: 340, objectFit: 'cover' }} />
          </div>
          {/* Quick contact card */}
          <div style={{ background: '#F4F6F8', borderRadius: 10, padding: '28px 24px', border: '1px solid #E2E6ED' }}>
            <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 22, fontWeight: 700, color: '#0F3554', marginBottom: 10 }}>Talk to a Security Expert</h3>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#647184', marginBottom: 20, lineHeight: 1.6 }}>We'll assess your property and build a custom {service.title.toLowerCase()} program within 24 hours.</p>
            <a href="tel:8003744316" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
              <i data-lucide="phone" style={{ width: 18, height: 18 }}></i>
              (800) 374-4316
            </a>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#8A96A8' }}>Available 24/7 for urgent requests</div>
          </div>
        </div>
      </div>

      {/* Other services */}
      <div style={{ background: '#F4F6F8', padding: '56px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 30, fontWeight: 700, color: '#0F3554', marginBottom: 28 }}>Other Services</h3>
          <div style={{ display: 'grid', gridTemplateColumns: typeof useResponsive !== 'undefined' && useResponsive().isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {others.map(s => (
              <ServiceCard key={s.id} service={s} direction="clarity" onSelect={id => onNavigate('service-' + id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Services Overview Page ───────────────────────────────── */
const ServicesPage = ({ onNavigate }) => {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)';
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px' : '64px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>What We Offer</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>Security Services</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', maxWidth: 520, lineHeight: 1.7 }}>From on-site officers to autonomous surveillance — every service is customized to your property and risk profile.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 24px' : '56px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 22 }}>
          {SERVICES_DATA.map(s => (
            <ServiceCard key={s.id} service={s} direction="clarity" onSelect={id => onNavigate('service-' + id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ServicesSection, ServiceDetailPage, ServicesPage, SERVICES_DATA });
