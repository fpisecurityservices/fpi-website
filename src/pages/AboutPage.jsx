import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Eye, Star, Users, Quote, Check } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';

const iconMap = { 'shield-check': ShieldCheck, eye: Eye, star: Star, users: Users };

const AboutPage = () => {
  const navigate = useNavigate();
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
    { src: '/uploads/Two Guard High Rise Lobby-b8e7df31.png', caption: 'Luxury High-Rise Security' },
    { src: '/uploads/Male Guard Lobby-f9cc8769.png', caption: 'Corporate Lobby Security' },
    { src: '/uploads/Event Guards-ea496454.png', caption: 'Special Event Security' },
    { src: '/uploads/Two Armed Guards-63de0d99.png', caption: 'Armed Officers & Patrol Fleet' },
    { src: '/uploads/Residential Golf Cart Patrol-b71ef93c.png', caption: 'Residential Community Patrol' },
    { src: '/uploads/Office Building with Supervisor-c670ba06.png', caption: 'Field Supervision & Oversight' },
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: isMobile ? 300 : 420, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/uploads/Monitoring Center-5633d731.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
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
          {!isMobile && <Quote size={36} style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />}
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
              <img src="/uploads/Office Building with Supervisor-c670ba06.png" alt="FPI supervisor with team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '44%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 12px 36px rgba(0,0,0,0.14)', border: '3px solid #fff' }}>
              <img src="/uploads/Female Guard Guardhouse-a32ab5f4.png" alt="FPI officer at guardhouse" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
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
            {values.map(v => {
              const IconComp = iconMap[v.icon] || ShieldCheck;
              return (
                <div key={v.title} style={{ background: '#fff', borderRadius: 10, padding: isMobile ? '24px 18px' : '32px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E6ED' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#E8EDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <IconComp size={20} style={{ color: '#006090' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 18 : 22, fontWeight: 700, color: '#0F3554', marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#647184', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              );
            })}
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
                    <Check size={12} style={{ color: '#4A7FA8' }} />
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
              <img src="/uploads/Armed Guard Lobby-825c5341.png" alt="FPI armed security officer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
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
            <button onClick={() => navigate('/contact')} style={{
              background: '#006090', color: '#fff',
              fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
              padding: '14px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
              letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(0,96,144,0.3)',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
            onMouseLeave={e => e.currentTarget.style.background = '#006090'}
            >Request a Consultation</button>
            <button onClick={() => navigate('/services')} style={{
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
    </div>
  );
};

export default AboutPage;
