'use client';
import {
  ShieldCheck, BadgeCheck, Clock, Phone, MapPin, Monitor, Radio, FileText, Bell, Lock, ArrowRight, Check,
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { INDUSTRIES_DATA } from '../../data/industries';
import ServiceCard from '../services/ServiceCard';
import IndustryCard from '../industries/IndustryCard';

const mediaUrl = (m) => (m && typeof m === 'object' ? m.url : null);
const mediaAlt = (m) => (m && typeof m === 'object' ? m.alt || '' : '');
const paras = (text) => String(text || '').split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);

const ICONS = {
  'shield-check': ShieldCheck, 'badge-check': BadgeCheck, clock: Clock, phone: Phone, 'map-pin': MapPin,
  monitor: Monitor, radio: Radio, 'file-text': FileText, bell: Bell, lock: Lock,
};
const Icon = ({ name, ...props }) => {
  const C = ICONS[name] || ShieldCheck;
  return <C {...props} />;
};

const homeHero = ({ block, isMobile, isTablet, navigate }) => {
  const bg = mediaUrl(block.backgroundImage);
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: 68, background: '#0D2A3F' }}>
      {bg && <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center 20%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(13,42,63,0.97) 0%, rgba(13,42,63,0.88) 45%, rgba(13,42,63,0.3) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, background: 'linear-gradient(to top, rgba(13,42,63,0.6), transparent)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: isMobile ? '60px 24px' : '80px 48px', width: '100%' }}>
        <div style={{ maxWidth: 640 }}>
          {block.eyebrow && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 28, height: 2, background: '#006090' }} />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8' }}>{block.eyebrow}</span>
            </div>
          )}
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 52 : isTablet ? 62 : 76, fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 10, textWrap: 'balance' }}>
            {block.heading}
            {block.accentHeading && (<><br /><span style={{ color: '#4A7FA8' }}>{block.accentHeading}</span></>)}
          </h1>
          {block.tagline && <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 12 : 13, fontWeight: 700, color: '#4A7FA8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{block.tagline}</p>}
          {block.subhead && <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 18, color: '#8998B1', lineHeight: 1.65, marginBottom: 28, maxWidth: 480 }}>{block.subhead}</p>}
          {(block.statValue || block.statNote) && (
            <div style={{ background: 'rgba(0,96,144,0.15)', border: '1px solid rgba(74,127,168,0.35)', borderRadius: 8, padding: '16px 20px', marginBottom: 32, maxWidth: 480 }}>
              {block.statValue && <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 30 : 36, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{block.statValue}</div>}
              {block.statNote && <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#8998B1', lineHeight: 1.6, marginTop: 6 }}>{block.statNote}</div>}
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {block.primaryCtaText && <button onClick={() => navigate(block.primaryCtaLink || '/contact')} style={{ background: '#006090', color: '#fff', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(0,96,144,0.4)', flex: isMobile ? '1' : 'none' }}>{block.primaryCtaText}</button>}
            {block.phone && (
              <a href={`tel:${String(block.phone).replace(/\D/g, '')}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', color: '#fff', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 4, border: '1.5px solid rgba(255,255,255,0.18)', letterSpacing: '0.04em', textDecoration: 'none', flex: isMobile ? '1' : 'none' }}>
                <Phone size={15} />{block.phone}
              </a>
            )}
          </div>
          {(block.badges || []).length > 0 && (
            <div style={{ display: 'flex', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
              {block.badges.map((b, i) => <span key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8998B1', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4, padding: '6px 12px' }}>{b.text}</span>)}
            </div>
          )}
          {!isMobile && (block.stats || []).length > 0 && (
            <div style={{ display: 'flex', gap: 40, marginTop: 40, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
              {block.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A7FA8', marginTop: 5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const trustBar = ({ block, isMobile }) => {
  if (isMobile) return null;
  return (
    <div style={{ background: '#0A2236', padding: '14px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
        {(block.items || []).map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {i > 0 && <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', flexShrink: 0, marginRight: 32 }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name={item.icon} size={14} style={{ color: '#006090', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600, color: '#CBD5E0', whiteSpace: 'nowrap' }}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const servicesGrid = ({ block, isMobile, isTablet }) => {
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)';
  return (
    <section id="services" style={{ background: '#F4F6F8', padding: isMobile ? '64px 24px' : '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 36 : 52, textAlign: 'center' }}>
          {block.eyebrow && <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>{block.eyebrow}</div>}
          {block.heading && <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 48, fontWeight: 700, color: '#0F3554', marginBottom: 14, lineHeight: 1.05 }}>{block.heading}</h2>}
          {block.subhead && <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>{block.subhead}</p>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 18 }}>
          {SERVICES_DATA.map((s) => <ServiceCard key={s.id} service={s} direction="clarity" />)}
        </div>
      </div>
    </section>
  );
};

const aboutSplit = ({ block, isMobile, navigate }) => {
  const main = mediaUrl(block.imageMain);
  const inset = mediaUrl(block.imageInset);
  const headingLines = String(block.heading || '').split('\n');
  const bodyParas = paras(block.body);
  return (
    <section style={{ background: '#0D2A3F', padding: isMobile ? '64px 24px' : '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 72, alignItems: 'center' }}>
        {!isMobile && (
          <div style={{ position: 'relative', height: 480 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '88%', height: '72%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}>
              {main && <img src={main} alt={mediaAlt(block.imageMain)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '52%', height: '46%', borderRadius: 10, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.16)', border: '3px solid #0D2A3F' }}>
              {inset && <img src={inset} alt={mediaAlt(block.imageInset)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />}
            </div>
          </div>
        )}
        <div>
          {block.eyebrow && <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>{block.eyebrow}</div>}
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 36 : 46, fontWeight: 700, color: '#fff', marginBottom: 20, lineHeight: 1.05 }}>
            {headingLines.map((l, i) => <span key={i}>{i > 0 && <br />}{l}</span>)}
          </h2>
          {bodyParas.map((p, i) => <p key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.75, marginBottom: i === bodyParas.length - 1 ? 36 : 16 }}>{p}</p>)}
          {(block.stats || []).length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36, paddingBottom: 36, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {block.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 16 : 20, fontWeight: 700, color: '#fff' }}>{s.value}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4A7FA8', marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
          {block.ctaText && <button onClick={() => navigate(block.ctaLink || '/contact')} style={{ background: '#006090', color: '#fff', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600, padding: '12px 26px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.04em' }}>{block.ctaText}</button>}
        </div>
      </div>
    </section>
  );
};

const techShowcase = ({ block, isMobile, navigate }) => (
  <section style={{ background: '#0D2A3F', padding: isMobile ? '64px 24px' : '96px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 72, alignItems: 'center' }}>
      <div>
        {block.eyebrow && <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 14 }}>{block.eyebrow}</div>}
        {block.heading && <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 46, fontWeight: 700, color: '#fff', marginBottom: 18, lineHeight: 1.05 }}>{block.heading}</h2>}
        {block.subhead && <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.75, marginBottom: 30 }}>{block.subhead}</p>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(block.features || []).map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 20, height: 20, background: 'rgba(0,96,144,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Check size={11} style={{ color: '#006090' }} />
              </div>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#8998B1' }}>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? 12 : 16 }}>
          {(block.techItems || []).map((item, i) => (
            <div key={i} onClick={item.link ? () => navigate(item.link) : undefined} style={{ background: 'rgba(27,70,104,0.4)', border: '1px solid rgba(39,81,106,0.5)', borderRadius: 8, padding: '18px 16px', cursor: item.link ? 'pointer' : 'default', gridColumn: item.link && !isMobile ? 'span 2' : 'auto' }}>
              <div style={{ width: 34, height: 34, background: 'rgba(0,96,144,0.2)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Icon name={item.icon} size={17} style={{ color: '#4A7FA8' }} />
              </div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#4A7FA8', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
        {block.ctaText && (
          <button onClick={() => navigate(block.ctaLink || '/technology/platform')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600, color: '#4A7FA8' }}>
            {block.ctaText}<ArrowRight size={15} />
          </button>
        )}
      </div>
    </div>
  </section>
);

const industriesGrid = ({ block, isMobile, isTablet, navigate }) => (
  <section style={{ background: '#0A2236', padding: isMobile ? '64px 24px' : '96px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 36 : 64, alignItems: 'start' }}>
        <div>
          {block.eyebrow && <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>{block.eyebrow}</div>}
          {block.heading && <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 44, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.05 }}>{block.heading}</h2>}
          {block.subhead && <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.75, marginBottom: 24 }}>{block.subhead}</p>}
          {block.ctaText && <button onClick={() => navigate(block.ctaLink || '/industries')} style={{ background: '#006090', color: '#fff', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600, padding: '11px 24px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.04em' }}>{block.ctaText}</button>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : isTablet ? 'repeat(2,1fr)' : 'repeat(3, 1fr)', gap: 14 }}>
          {INDUSTRIES_DATA.slice(0, 6).map((ind) => <IndustryCard key={ind.id} industry={ind} direction="command" />)}
        </div>
      </div>
    </div>
  </section>
);

const ctaBanner = ({ block, isMobile, navigate }) => {
  const bg = mediaUrl(block.backgroundImage);
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '64px 24px' : '80px 48px', textAlign: 'center' }}>
      {bg && <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,42,63,0.95) 0%, rgba(0,96,144,0.88) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 36 : 46, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.05 }}>{block.heading}</h2>
        {block.subhead && <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 14 : 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: 32 }}>{block.subhead}</p>}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {block.primaryCtaText && <button onClick={() => navigate(block.primaryCtaLink || '/contact')} style={{ background: '#fff', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 700, padding: '14px 34px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.04em', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>{block.primaryCtaText}</button>}
          {block.phone && (
            <a href={`tel:${String(block.phone).replace(/\D/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 4, border: '1.5px solid rgba(255,255,255,0.4)', letterSpacing: '0.04em', textDecoration: 'none' }}>
              <Phone size={15} />{block.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export const homeRenderers = {
  homeHero,
  trustBar,
  servicesGrid,
  aboutSplit,
  techShowcase,
  industriesGrid,
  ctaBanner,
};
