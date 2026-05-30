import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Car, Video, Camera, Bot, Cpu, ArrowRight } from 'lucide-react';

const iconMap = {
  shield: Shield,
  car: Car,
  video: Video,
  camera: Camera,
  bot: Bot,
  cpu: Cpu,
};

const ServiceCard = ({ service, direction = 'clarity' }) => {
  const navigate = useNavigate();
  const isLight = direction === 'clarity';
  const [hovered, setHovered] = useState(false);
  const bg = isLight ? '#fff' : '#0F3554';
  const border = isLight
    ? (hovered ? '1px solid #006090' : '1px solid #E2E6ED')
    : (hovered ? '1px solid rgba(0,96,144,0.5)' : '1px solid rgba(39,81,106,0.4)');
  const headingColor = isLight ? '#1A1E26' : '#fff';
  const bodyColor = isLight ? '#647184' : '#7090B0';
  const iconBg = isLight ? '#E8EDF4' : 'rgba(0,96,144,0.2)';

  const IconComp = iconMap[service.icon] || Shield;

  return (
    <div
      onClick={() => navigate('/services/' + service.id)}
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
        <IconComp size={22} style={{ color: '#006090' }} />
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
        <ArrowRight size={14} style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.15s' }} />
      </div>
    </div>
  );
};

export default ServiceCard;
