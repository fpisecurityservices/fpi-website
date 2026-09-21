'use client';
import { useNavigate } from 'react-router-dom';
import { RichText } from '@payloadcms/richtext-lexical/react';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider } from '../ServicePageKit';
import { serviceRenderers } from './ServiceBlocks';
import { homeRenderers } from './HomeBlocks';

const mediaUrl = (m) => (m && typeof m === 'object' ? m.url : null);

const HeroBlock = ({ block, isMobile, isTablet, navigate }) => {
  const dark = block.variant !== 'clarity';
  const bg = mediaUrl(block.backgroundImage);
  return (
    <section
      style={{
        minHeight: '70vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', paddingTop: 68,
        background: dark ? '#0D2A3F' : '#F4F6F8',
      }}
    >
      {dark && bg && (
        <>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center 20%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(13,42,63,0.97) 0%, rgba(13,42,63,0.88) 45%, rgba(13,42,63,0.3) 100%)' }} />
        </>
      )}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: isMobile ? '60px 24px' : '80px 48px', width: '100%' }}>
        <div style={{ maxWidth: 640 }}>
          {block.eyebrow && (
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 16 }}>{block.eyebrow}</div>
          )}
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 44 : isTablet ? 58 : 72, fontWeight: 700, color: dark ? '#fff' : '#0F3554', lineHeight: 1.02, letterSpacing: '-0.02em', marginBottom: 16, textWrap: 'balance' }}>{block.headline}</h1>
          {block.subhead && (
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 18, color: dark ? '#8998B1' : '#4E5A6E', lineHeight: 1.65, marginBottom: 28, maxWidth: 480 }}>{block.subhead}</p>
          )}
          {block.ctaText && (
            <CTAButton onClick={() => navigate(block.ctaLink || '/contact')}>{block.ctaText}</CTAButton>
          )}
        </div>
      </div>
    </section>
  );
};

const RichTextBlock = ({ block, isMobile }) => (
  <Section isMobile={isMobile}>
    <div className="fpi-richtext" style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, color: '#4E5A6E', lineHeight: 1.8, maxWidth: 820 }}>
      {block.content ? <RichText data={block.content} /> : null}
    </div>
  </Section>
);

const FeatureGridBlock = ({ block, isMobile, isTablet }) => {
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  return (
    <Section bg="#F4F6F8" isMobile={isMobile}>
      {block.heading && <H2>{block.heading}</H2>}
      {block.intro && <Body>{block.intro}</Body>}
      {(block.heading || block.intro) && <Divider />}
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 24 }}>
        {(block.items || []).map((item, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #E2E6ED', borderRadius: 8, padding: 24 }}>
            <H3 style={{ fontSize: 20 }}>{item.title}</H3>
            {item.description && <Body style={{ marginBottom: 0 }}>{item.description}</Body>}
          </div>
        ))}
      </div>
    </Section>
  );
};

const StatBandBlock = ({ block, isMobile }) => (
  <div style={{ background: '#0D2A3F', padding: isMobile ? '40px 24px' : '56px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: isMobile ? 32 : 56, justifyContent: isMobile ? 'flex-start' : 'space-around' }}>
      {(block.stats || []).map((s, i) => (
        <div key={i}>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 36 : 48, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.value}</div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A7FA8', marginTop: 8 }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const CTABlockRender = ({ block, isMobile, navigate }) => (
  <div style={{ background: 'linear-gradient(135deg, #006090, #00507A)', padding: isMobile ? '48px 24px' : '64px 48px' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 30 : 40, fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.1 }}>{block.heading}</h2>
      {block.body && <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: 28 }}>{block.body}</p>}
      {block.buttonText && (
        <button onClick={() => navigate(block.buttonLink || '/contact')} style={{ background: '#fff', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 700, padding: '14px 32px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.04em' }}>{block.buttonText}</button>
      )}
    </div>
  </div>
);

const RENDERERS = {
  hero: HeroBlock,
  richText: RichTextBlock,
  featureGrid: FeatureGridBlock,
  statBand: StatBandBlock,
  cta: CTABlockRender,
  ...serviceRenderers,
  ...homeRenderers,
};

// These blocks manage their own space below the fixed header (full-bleed hero).
const SELF_TOP = new Set(['homeHero']);

export default function RenderBlocks({ blocks = [] }) {
  const { isMobile, isTablet } = useResponsive();
  const navigate = useNavigate();
  const topPad = SELF_TOP.has(blocks[0]?.blockType) ? 0 : 68;
  return (
    <div style={{ paddingTop: topPad }}>
      {blocks.map((block, i) => {
        const Comp = RENDERERS[block.blockType];
        if (!Comp) return null;
        return <Comp key={block.id || i} block={block} isMobile={isMobile} isTablet={isTablet} navigate={navigate} />;
      })}
    </div>
  );
}
