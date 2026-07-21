import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Eye, Star, Users, Quote, Check } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';

const iconMap = { 'shield-check': ShieldCheck, eye: Eye, star: Star, users: Users };

const AboutPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const values = [
    { icon: 'shield-check', title: 'Integrity', desc: 'Every patrol round is GPS-logged. Every incident is documented. Every shift is covered — or you hear from us before you notice. Integrity means accountability you can verify, not a promise you take on faith.' },
    { icon: 'eye', title: 'Vigilance', desc: 'FPI officers are trained to identify pre-incident behavior — not just respond to alarms. Randomized patrol routes, AI-assisted monitoring, and SOC oversight mean threats are addressed before they become incidents.' },
    { icon: 'star', title: 'Excellence', desc: 'Every FPI officer is background-checked, state-licensed, and trained to your specific post orders before their first shift. Your property gets an officer who knows it — not one seeing it for the first time on day one.' },
    { icon: 'users', title: 'Partnership', desc: 'When something happens at your property at 2 AM, you reach a decision-maker at FPI — not an answering service. No account managers, no runaround. You always know who to call.' },
  ];
  const stats = [
    { value: '1981', label: 'Founded' },
    { value: '24/7', label: 'Operations Center' },
    { value: '6', label: 'States Served' },
    { value: '100%', label: 'Custom Programs' },
  ];
  const gallery = [
    { src: '/uploads/Two Guard High Rise Lobby-b8e7df31.png', caption: 'Luxury High-Rise Security', alt: 'FPI Security officers at luxury high-rise lobby — South Florida residential security services' },
    { src: '/uploads/Male Guard Lobby-f9cc8769.png', caption: 'Corporate Lobby Security', alt: 'FPI Security officer at corporate office lobby — commercial building security Miami' },
    { src: '/uploads/Event Guards-ea496454.png', caption: 'Special Event Security', alt: 'FPI Security officers at special event — event security services South Florida' },
    { src: '/uploads/Two Armed Guards-63de0d99.png', caption: 'Armed Officers & Patrol Fleet', alt: 'FPI armed security officers and patrol fleet — armed security guard services in six states' },
    { src: '/uploads/Residential Golf Cart Patrol-b71ef93c.png', caption: 'Residential Community Patrol', alt: 'FPI Security patrol vehicle at residential community — HOA security services South Florida' },
    { src: '/uploads/Office Building with Supervisor-c670ba06.png', caption: 'Field Supervision & Oversight', alt: 'FPI Security field supervisor overseeing officers — security management and oversight' },
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="About FPI Security | Contract Security Company Since 1981"
        description="FPI Security Services — a privately owned contract security company founded in 1981, now serving six states. Learn about our mission, values, and team."
        ogTitle="About FPI Security | Our Story, Values & Team"
        ogDescription="Founded in 1981 and privately owned — licensed officers, a proprietary technology platform, and security programs built from scratch for every property."
        ogUrl="https://www.fpisecurity.com/about"
      />
      {/* Hero Banner */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: isMobile ? 300 : 420, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/uploads/Monitoring Center-5633d731.png')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(7,25,42,0.97) 0%, rgba(13,42,63,0.88) 50%, rgba(13,42,63,0.5) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: isMobile ? '60px 24px' : '80px 48px', width: '100%' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>About FPI Security</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 44 : 62, fontWeight: 700, color: '#fff', lineHeight: 1.0, marginBottom: 10, maxWidth: 700 }}>
            Built on Integrity.<br />Driven by Excellence.
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, color: '#4A7FA8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            A privately owned contract security company — founded in 1981, now serving six states
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 17, color: '#8998B1', lineHeight: 1.7, maxWidth: 560 }}>
            FPI Security Services was founded on a simple belief — every property deserves a security program built specifically for it, not adapted from a template or staffed from a roster. We back that belief with state-licensed officers trained to your specific post orders and a proprietary technology platform built in-house.
          </p>
        </div>
      </div>

      {/* Mission Bar */}
      <div style={{ background: '#006090', padding: isMobile ? '36px 24px' : '44px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          {!isMobile && <Quote size={36} style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />}
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 20 : 26, fontWeight: 600, color: '#fff', lineHeight: 1.45, margin: 0 }}>
            Our mission is to give every client verifiable security — licensed officers who know their property, technology that documents every shift, and a partner who answers when it matters.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '56px 24px' : '88px 48px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 36 : 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 14 }}>Our Story</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#0F3554', marginBottom: 20, lineHeight: 1.05 }}>Small Enough to Care.<br />Capable Enough to Deliver.</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 16 }}>
            FPI Security Services was founded in 1981 on a gap the industry still hasn't closed: large security companies treated every property the same, while small ones lacked the infrastructure to deliver consistently. FPI was built to occupy the space between — the attention of a boutique firm with the operational capability of an enterprise provider.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 16 }}>
            Headquartered in Pembroke Pines, FL, we built our reputation across Miami-Dade, Broward, and Palm Beach counties, expanded to Dallas, TX in 2024, and today protect properties across six states. Every officer is licensed under their state's private security regulations — Florida Statute Chapter 493 and its counterparts — and background-checked before their first shift.
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
              <img src={p.src} alt={p.alt || p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#fff', marginBottom: 24, lineHeight: 1.05 }}>Built to Fix What Other Security Companies Get Wrong</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                ['Truly customized programs', 'Most security companies have three contract tiers — you pick the closest one. FPI starts with a site assessment and builds your program from scratch: patrol routes, post orders, officer training, and technology configuration all designed for your specific property. No templates.'],
                ['Technology-first operations', "Most security companies send a monthly report. FPI gives you a live dashboard — GPS patrol routes in real time, incident reports with photos as they happen, and alert history accessible from any device. You never have to call us to know what's happening at your property."],
                ['Personal attention, enterprise scale', "Large security companies assign account managers who cycle out every six months and don't know your property. At FPI, you work directly with decision-makers who know your site, your risk profile, and your history — from day one to year five."],
                ['Rigorous officer selection', 'Most security companies send whoever is available. FPI background-checks, state-licenses, and trains every officer to your specific post orders before their first shift. Your officer knows your property, your protocols, and your team — not just the uniform requirements.'],
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
            <button onClick={() => navigate('/security-operations-center')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24,
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600, color: '#4A7FA8',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#8998B1'}
            onMouseLeave={e => e.currentTarget.style.color = '#4A7FA8'}
            >Learn more about our technology →</button>
          </div>
          {!isMobile && (
            <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.3)', height: 480 }}>
              <img src="/uploads/Armed Guard Lobby-825c5341.png" alt="FPI armed security officer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: '#F4F6F8', padding: isMobile ? '56px 24px' : '80px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#0F3554', marginBottom: 32, lineHeight: 1.05 }}>Frequently Asked Questions About FPI Security Services</h2>
          <div style={{ maxWidth: 860 }}>
            {[
              ['How long has FPI Security been in business?', 'FPI Security Services was founded in 1981 and is headquartered in Pembroke Pines, Florida. The company built its reputation across South Florida — including Miami-Dade, Broward, and Palm Beach County — expanded to the Dallas–Fort Worth area in 2024, and today serves six states.'],
              ['Is FPI Security licensed and insured?', 'Yes. FPI officers are licensed under the private security regulations of the state where they serve — in Florida, Statute Chapter 493, which requires background checks, training certification, and ongoing compliance. FPI carries comprehensive liability insurance, and all documentation is available on request for HOA boards, property managers, and insurance carriers.'],
              ['How are FPI security officers trained?', 'Every FPI officer is background-checked, state-licensed, and trained to the specific post orders of your property before their first shift. Training covers your site layout, access protocols, emergency procedures, and reporting requirements — not a generic curriculum applied to every deployment.'],
              ['Does FPI Security require long-term contracts?', "FPI does not require long-term contracts to begin service. Programs are designed around your property's actual needs and can be structured with flexible terms. FPI's position is that the quality of service — not a contract — is what keeps clients. Contact FPI to discuss the right structure for your property."],
              ['What technology does FPI use to manage security programs?', 'FPI operates a proprietary security platform built in-house — not off-the-shelf software. The platform provides real-time GPS patrol tracking, live incident reporting with photo documentation, a 24/7 client dashboard, automated alerts, and integrated dispatch — a level of client visibility few security companies offer.'],
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: '1px solid #E2E6ED', paddingBottom: 24, marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, fontWeight: 700, color: '#0F3554', marginBottom: 8, lineHeight: 1.2 }}>{q}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: isMobile ? '56px 24px' : '80px 48px', textAlign: 'center', background: '#fff' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 42, fontWeight: 700, color: '#0F3554', marginBottom: 14 }}>Start With a Site Assessment — No Commitment Required</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', lineHeight: 1.7, marginBottom: 28 }}>Share your property details and FPI will deliver a custom security program — patrol routes, staffing model, technology configuration, and cost estimate — typically within 24 hours. No contracts required to start.</p>
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
            >Explore Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
