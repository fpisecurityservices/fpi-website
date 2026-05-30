import { Monitor, Radio, FileText, MapPin, Bell, Lock, Check } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';

const TechSection = () => {
  const { isMobile } = useResponsive();
  const bg = '#0D2A3F';

  const techItems = [
    { Icon: Monitor, label: 'Client Dashboard', desc: 'Real-time visibility across all your sites' },
    { Icon: Radio, label: 'Live Dispatch', desc: 'Instant officer communication and response' },
    { Icon: FileText, label: 'Incident Reports', desc: 'Automated documentation with photos' },
    { Icon: MapPin, label: 'GPS Tracking', desc: 'Live patrol routes and timestamps' },
    { Icon: Bell, label: 'Automated Alerts', desc: 'Push notifications for critical events' },
    { Icon: Lock, label: 'Access Control', desc: 'Integrated entry management and audit logs' },
  ];

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
                  <Check size={11} style={{ color: '#006090' }} />
                </div>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#8998B1' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? 12 : 16 }}>
          {techItems.map(item => (
            <div key={item.label} style={{
              background: 'rgba(27,70,104,0.4)', border: '1px solid rgba(39,81,106,0.5)',
              borderRadius: 8, padding: '18px 16px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(27,70,104,0.65)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(27,70,104,0.4)'}
            >
              <div style={{ width: 34, height: 34, background: 'rgba(0,96,144,0.2)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <item.Icon size={17} style={{ color: '#4A7FA8' }} />
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

export default TechSection;
