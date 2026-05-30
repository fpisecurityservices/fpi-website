import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Check, Shield, Car, Video, Camera, Bot, Cpu } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';
import { SERVICES_DATA } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';

const iconMap = {
  shield: Shield,
  car: Car,
  video: Video,
  camera: Camera,
  bot: Bot,
  cpu: Cpu,
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const service = SERVICES_DATA.find(s => s.id === id);
  if (!service) { navigate('/services', { replace: true }); return null; }
  const others = SERVICES_DATA.filter(s => s.id !== service.id).slice(0, 3);
  const IconComp = iconMap[service.icon] || Shield;

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      {/* Header banner */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '40px 24px' : '56px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <button onClick={() => navigate('/services')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#4A7FA8', fontFamily: "'Barlow', sans-serif", fontSize: 13, cursor: 'pointer', marginBottom: 20, padding: 0 }}>
            <ArrowLeft size={14} />
            All Services
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(0,96,144,0.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <IconComp size={24} style={{ color: '#4A7FA8' }} />
            </div>
            <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 36 : 48, fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>{service.title}</h1>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {service.tags.map(t => (
              <span key={t} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,96,144,0.2)', color: '#8998B1', padding: '4px 10px', borderRadius: 4 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 24px' : '56px 48px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 48 }}>
        <div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 32, fontWeight: 700, color: '#0F3554', marginBottom: 16, lineHeight: 1.1 }}>What's Included</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.75, marginBottom: 28 }}>{service.fullDesc}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
            {service.bullets.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 20, height: 20, background: '#E8EDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Check size={11} style={{ color: '#006090' }} />
                </div>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/contact')} style={{
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
              <Phone size={18} />
              (800) 374-4316
            </a>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#8A96A8' }}>Available 24/7 for urgent requests</div>
          </div>
        </div>
      </div>

      {/* Other services */}
      <div style={{ background: '#F4F6F8', padding: isMobile ? '40px 24px' : '56px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 30, fontWeight: 700, color: '#0F3554', marginBottom: 28 }}>Other Services</h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {others.map(s => (
              <ServiceCard key={s.id} service={s} direction="clarity" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
