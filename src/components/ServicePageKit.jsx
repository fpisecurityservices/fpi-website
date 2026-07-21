import { Check, ChevronRight } from 'lucide-react';

export const Breadcrumb = ({ trail, isMobile }) => (
  <div style={{ background: '#F4F6F8', borderBottom: '1px solid #E2E6ED', padding: isMobile ? '10px 24px' : '12px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontFamily: "'Barlow', sans-serif", fontSize: 13 }}>
      {trail.map((item, i) => (
        <span key={item.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {i > 0 && <ChevronRight size={13} style={{ color: '#8A96A8' }} />}
          {item.onClick ? (
            <span onClick={item.onClick} style={{ color: '#006090', cursor: 'pointer' }}>{item.label}</span>
          ) : (
            <span style={{ color: '#647184' }}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  </div>
);

export const Section = ({ children, bg = '#fff', py = '64px 48px', pyMobile = '48px 24px', isMobile }) => (
  <div style={{ background: bg, padding: isMobile ? pyMobile : py }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>{children}</div>
  </div>
);

export const H2 = ({ children, style = {} }) => (
  <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 34, fontWeight: 700, color: '#0F3554', marginBottom: 12, lineHeight: 1.15, ...style }}>{children}</h2>
);

export const H3 = ({ children, style = {} }) => (
  <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 24, fontWeight: 700, color: '#0F3554', marginBottom: 10, lineHeight: 1.2, ...style }}>{children}</h3>
);

export const Body = ({ children, style = {} }) => (
  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 16, ...style }}>{children}</p>
);

export const CTAButton = ({ children, onClick, variant = 'primary' }) => (
  <button
    onClick={onClick}
    style={{
      background: variant === 'primary' ? '#006090' : 'transparent',
      color: variant === 'primary' ? '#fff' : '#006090',
      border: variant === 'primary' ? 'none' : '2px solid #006090',
      fontFamily: "'Barlow', sans-serif",
      fontSize: 15,
      fontWeight: 600,
      padding: '13px 28px',
      borderRadius: 4,
      cursor: 'pointer',
      letterSpacing: '0.04em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
    }}
    onMouseEnter={e => { e.currentTarget.style.background = variant === 'primary' ? '#00507A' : '#EEF4F8'; }}
    onMouseLeave={e => { e.currentTarget.style.background = variant === 'primary' ? '#006090' : 'transparent'; }}
  >
    {children}
    <ChevronRight size={16} />
  </button>
);

export const BulletItem = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
    <div style={{ width: 20, height: 20, background: '#E8EDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
      <Check size={11} style={{ color: '#006090' }} />
    </div>
    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.65 }}>{text}</span>
  </div>
);

export const Divider = () => <div style={{ borderTop: '1px solid #E2E6ED', margin: '32px 0' }} />;

export const StatBox = ({ stat, label, source }) => (
  <div style={{ background: '#F4F6F8', borderRadius: 8, padding: '24px 20px', border: '1px solid #E2E6ED', flex: 1, minWidth: 200 }}>
    <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 36, fontWeight: 700, color: '#006090', marginBottom: 6 }}>{stat}</div>
    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#0F3554', fontWeight: 600, marginBottom: 4 }}>{label}</div>
    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#8A96A8' }}>{source}</div>
  </div>
);

export const StepCard = ({ number, title, children }) => (
  <div style={{ background: '#F4F6F8', borderRadius: 8, padding: '28px 24px', border: '1px solid #E2E6ED', position: 'relative' }}>
    <div style={{ width: 36, height: 36, background: '#006090', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 18, fontWeight: 700, color: '#fff' }}>{number}</span>
    </div>
    <H3 style={{ marginBottom: 8 }}>{title}</H3>
    {children}
  </div>
);

export const FAQItem = ({ question, answer }) => (
  <div style={{ borderBottom: '1px solid #E2E6ED', paddingBottom: 24, marginBottom: 24 }}>
    <H3 style={{ fontSize: 20, marginBottom: 8 }}>{question}</H3>
    <Body style={{ marginBottom: 0 }}>{answer}</Body>
  </div>
);

export const InlineLink = ({ onClick, children }) => (
  <span onClick={onClick} style={{ color: '#006090', cursor: 'pointer', textDecoration: 'underline' }}>{children}</span>
);

export const ServiceHero = ({ tags, title, intro, ctaText, onCta, isMobile }) => (
  <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px 56px' : '64px 48px 72px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ maxWidth: 760 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {tags.map(t => (
            <span key={t} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,96,144,0.2)', color: '#8998B1', padding: '4px 10px', borderRadius: 4 }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 38 : 54, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>
          {title}
        </h1>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, color: '#B0BDD0', lineHeight: 1.75, marginBottom: 32 }}>
          {intro}
        </p>
        <CTAButton onClick={onCta}>{ctaText}</CTAButton>
      </div>
    </div>
  </div>
);

export const FinalCTA = ({ title, body, ctaText, onCta, isMobile }) => (
  <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px' : '64px 48px', textAlign: 'center' }}>
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 30 : 38, fontWeight: 700, color: '#fff', marginBottom: 16 }}>{title}</h2>
      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, color: '#B0BDD0', marginBottom: 32, lineHeight: 1.7 }}>{body}</p>
      <CTAButton onClick={onCta}>{ctaText}</CTAButton>
    </div>
  </div>
);
