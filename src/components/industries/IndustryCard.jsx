import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, HardHat, Building2, HeartPulse, Warehouse, Car, Hotel } from 'lucide-react';

const iconMap = {
  home: Home,
  'shopping-bag': ShoppingBag,
  'hard-hat': HardHat,
  'building-2': Building2,
  'heart-pulse': HeartPulse,
  warehouse: Warehouse,
  car: Car,
  hotel: Hotel,
};

const IndustryCard = ({ industry, direction = 'clarity' }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const isLight = direction === 'clarity';
  const bg = isLight ? '#fff' : '#0F3554';
  const headingColor = isLight ? '#0F3554' : '#fff';
  const bodyColor = isLight ? '#647184' : '#7090B0';
  const iconBg = isLight ? '#E8EDF4' : 'rgba(0,96,144,0.2)';

  const IconComp = iconMap[industry.icon] || Home;

  return (
    <div
      onClick={() => navigate('/industries')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg, borderRadius: 8, padding: '24px 22px',
        border: isLight
          ? (hovered ? '1px solid #006090' : '1px solid #E2E6ED')
          : (hovered ? '1px solid rgba(0,96,144,0.5)' : '1px solid rgba(39,81,106,0.35)'),
        cursor: 'pointer',
        boxShadow: hovered ? '0 6px 24px rgba(0,96,144,0.12)' : (isLight ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'),
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 8, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <IconComp size={20} style={{ color: '#006090' }} />
      </div>
      <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 19, fontWeight: 700, color: headingColor, marginBottom: 8, lineHeight: 1.2 }}>{industry.title}</h3>
      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: bodyColor, lineHeight: 1.65 }}>{industry.shortDesc}</p>
    </div>
  );
};

export default IndustryCard;
