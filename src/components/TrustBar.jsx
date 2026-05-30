import { ShieldCheck, BadgeCheck, Clock, Phone, MapPin } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';

const TrustBar = () => {
  const { isMobile } = useResponsive();

  const items = [
    { Icon: ShieldCheck, label: 'Licensed & Insured' },
    { Icon: BadgeCheck, label: 'Armed & Unarmed Officers' },
    { Icon: Clock, label: '24/7 Operations' },
    { Icon: Phone, label: '(800) 374-4316' },
    { Icon: MapPin, label: 'FL & TX' },
  ];

  if (isMobile) return null;

  return (
    <div style={{ background: '#0A2236', padding: '14px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {i > 0 && <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', flexShrink: 0, marginRight: 32 }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <item.Icon size={14} style={{ color: '#006090', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600, color: '#CBD5E0', whiteSpace: 'nowrap' }}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
