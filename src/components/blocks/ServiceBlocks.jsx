'use client';
import { Phone } from 'lucide-react';
import {
  ServiceHero, Section, H2, H3, Body, CTAButton, Divider, StatBox, StepCard, FAQItem, FinalCTA, BulletItem, Breadcrumb,
} from '../ServicePageKit';

const bgOf = (b) => (b === 'gray' ? '#F4F6F8' : '#fff');
const mediaUrl = (m) => (m && typeof m === 'object' ? m.url : null);
const mediaAlt = (m) => (m && typeof m === 'object' ? m.alt || '' : '');
const colsOf = (n, isMobile) => {
  if (isMobile) return '1fr';
  if (n === '3') return 'repeat(3, 1fr)';
  if (n === '1') return '1fr';
  return '1fr 1fr';
};
// Split a textarea value into paragraphs so multi-paragraph copy renders like the original.
const paras = (text) => String(text || '').split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);

const Prose = ({ text, style }) =>
  paras(text).map((p, i) => (
    <Body key={i} style={i === paras(text).length - 1 ? style : undefined}>{p}</Body>
  ));

const serviceHero = ({ block, isMobile, navigate }) => (
  <ServiceHero
    isMobile={isMobile}
    tags={(block.tags || []).map((t) => t.tag)}
    title={block.heading}
    intro={block.intro}
    ctaText={block.ctaText}
    onCta={() => navigate(block.ctaLink || '/contact')}
  />
);

const contentSection = ({ block, isMobile, navigate }) => {
  const items = block.items || [];
  const hasAfter = block.afterHeading || block.afterBody;
  return (
    <Section bg={bgOf(block.background)} isMobile={isMobile}>
      {block.heading && <H2>{block.heading}</H2>}
      {block.intro && (
        items.length > 0 ? <Prose text={block.intro} /> : <div style={{ maxWidth: 860 }}><Prose text={block.intro} /></div>
      )}
      {items.length > 0 && (block.heading || block.intro) && <Divider />}
      {(block.preHeading || block.preBody) && (
        <div style={{ marginBottom: 24 }}>
          {block.preHeading && <H3>{block.preHeading}</H3>}
          <Prose text={block.preBody} />
        </div>
      )}
      {items.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: colsOf(block.columns, isMobile), gap: 40 }}>
          {items.map((it, i) => (
            <div key={i} style={it.wide && !isMobile ? { gridColumn: '1 / -1' } : undefined}>
              {it.heading && <H3>{it.heading}</H3>}
              <Prose text={it.body} />
            </div>
          ))}
        </div>
      )}
      {hasAfter ? (
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          {block.afterHeading && <H3>{block.afterHeading}</H3>}
          <Prose text={block.afterBody} />
          {block.ctaText && <CTAButton variant={block.ctaVariant || 'primary'} onClick={() => navigate(block.ctaLink || '/contact')}>{block.ctaText}</CTAButton>}
        </div>
      ) : (
        block.ctaText && (
          <div style={{ marginTop: 36, textAlign: block.ctaAlign === 'center' && !isMobile ? 'center' : 'left' }}>
            <CTAButton variant={block.ctaVariant || 'primary'} onClick={() => navigate(block.ctaLink || '/contact')}>{block.ctaText}</CTAButton>
          </div>
        )
      )}
    </Section>
  );
};

const compareSection = ({ block, isMobile }) => (
  <Section bg={bgOf(block.background)} isMobile={isMobile}>
    {block.heading && <H2>{block.heading}</H2>}
    {block.intro && <Body>{block.intro}</Body>}
    <Divider />
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40, marginBottom: 40 }}>
      {(block.columns || []).map((col, i) => (
        <div key={i}>
          {col.heading && <H3>{col.heading}</H3>}
          {col.intro && <Body>{col.intro}</Body>}
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {(col.bullets || []).map((b, j) => (
              <li key={j} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 8 }}>{b.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    {(block.lists || []).length > 0 && (
      <div>
        {block.listsHeading && <H3>{block.listsHeading}</H3>}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24 }}>
          {block.lists.map((list, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '20px 24px', border: '1px solid #E2E6ED' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>{list.label}</div>
              {(list.items || []).map((it, j) => (
                <div key={j} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', padding: '6px 0', borderBottom: j < list.items.length - 1 ? '1px solid #F0F2F5' : 'none' }}>{it.text}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </Section>
);

const steps = ({ block, isMobile, navigate }) => (
  <Section bg={bgOf(block.background)} isMobile={isMobile}>
    {block.heading && <H2>{block.heading}</H2>}
    {block.intro && <Body>{block.intro}</Body>}
    <Divider />
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 24, marginBottom: block.afterHeading || block.afterBody ? 32 : 40 }}>
      {(block.steps || []).map((s, i) => (
        <StepCard key={i} number={String(i + 1)} title={s.title}>
          <Body style={{ marginBottom: 0 }}>{s.body}</Body>
        </StepCard>
      ))}
    </div>
    {(block.afterHeading || block.afterBody) && (
      <div style={{ maxWidth: 760 }}>
        {block.afterHeading && <H3>{block.afterHeading}</H3>}
        <Prose text={block.afterBody} />
      </div>
    )}
    {block.ctaText && <CTAButton onClick={() => navigate(block.ctaLink || '/contact')}>{block.ctaText}</CTAButton>}
  </Section>
);

const statsSection = ({ block, isMobile }) => (
  <Section bg={bgOf(block.background)} isMobile={isMobile}>
    {block.heading && <H2>{block.heading}</H2>}
    {block.intro && <Body>{block.intro}</Body>}
    <Divider />
    {(block.stats || []).length > 0 && (
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 32, marginBottom: 48 }}>
        {block.stats.map((s, i) => (
          <StatBox key={i} stat={s.stat} label={s.label} source={s.source} />
        ))}
      </div>
    )}
    <div style={{ display: 'grid', gridTemplateColumns: colsOf(block.columns, isMobile), gap: 40 }}>
      {(block.items || []).map((it, i) => (
        <div key={i}>
          {it.heading && <H3>{it.heading}</H3>}
          <Prose text={it.body} />
        </div>
      ))}
    </div>
  </Section>
);

const testimonials = ({ block, isMobile }) => (
  <Section isMobile={isMobile}>
    {block.heading && <H2>{block.heading}</H2>}
    {block.note && <Body style={{ color: '#8A96A8', fontStyle: 'italic', fontSize: 13 }}>{block.note}</Body>}
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
      {(block.items || []).map((t, i) => (
        <div key={i} style={{ background: '#F4F6F8', borderRadius: 8, padding: '28px 24px', border: '1px solid #E2E6ED', borderLeft: '4px solid #006090' }}>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 16 }}>{t.quote}</p>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, color: '#8A96A8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.attribution}</div>
        </div>
      ))}
    </div>
  </Section>
);

const faq = ({ block, isMobile }) => (
  <Section bg={bgOf(block.background)} isMobile={isMobile}>
    {block.eyebrow && <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>{block.eyebrow}</div>}
    {block.heading && <H2>{block.heading}</H2>}
    <Divider />
    <div style={{ maxWidth: 860 }}>
      {(block.items || []).map((f, i) => (
        <FAQItem key={i} question={f.question} answer={f.answer} />
      ))}
    </div>
    {block.contactText && (
      <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>{block.contactText}</span>
        {block.phone && (
          <a href={`tel:${String(block.phone).replace(/\D/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            {block.phone}
          </a>
        )}
      </div>
    )}
  </Section>
);

const finalCta = ({ block, isMobile, navigate }) => (
  <FinalCTA
    isMobile={isMobile}
    title={block.heading}
    body={block.body}
    ctaText={block.ctaText}
    onCta={() => navigate(block.ctaLink || '/contact')}
  />
);

const pricingTiers = ({ block, isMobile, navigate }) => (
  <Section bg={bgOf(block.background)} isMobile={isMobile}>
    {block.heading && <H2>{block.heading}</H2>}
    {block.intro && <Body>{block.intro}</Body>}
    <Divider />
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }}>
      {(block.tiers || []).map((t, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 10, padding: isMobile ? '28px 22px' : '36px 30px', border: '1px solid #E2E6ED', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
          <H3 style={{ marginBottom: 4 }}>{t.name}</H3>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#006090', marginBottom: 18 }}>{t.tagline}</div>
          <div style={{ flex: 1 }}>
            {(t.bullets || []).map((b, j) => <BulletItem key={j} text={b.text} />)}
          </div>
          <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid #E2E6ED', fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#647184', lineHeight: 1.6 }}>
            <strong style={{ color: '#0F3554' }}>Best for:</strong> {t.bestFor}
          </div>
        </div>
      ))}
    </div>
    {block.afterBody && <Body style={{ maxWidth: 760 }}>{block.afterBody}</Body>}
    {block.ctaText && <CTAButton onClick={() => navigate(block.ctaLink || '/contact')}>{block.ctaText}</CTAButton>}
  </Section>
);

const imageBlock = ({ block, isMobile }) => {
  const url = mediaUrl(block.image);
  const maxWidth = block.width === 'full' ? '100%' : block.width === 'narrow' ? 680 : 1040;
  return (
    <Section bg={bgOf(block.background)} isMobile={isMobile}>
      <figure style={{ margin: '0 auto', maxWidth }}>
        {url && <img src={url} alt={mediaAlt(block.image)} style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }} />}
        {block.caption && (
          <figcaption style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#8A96A8', marginTop: 8, textAlign: 'center' }}>{block.caption}</figcaption>
        )}
      </figure>
    </Section>
  );
};

const imageText = ({ block, isMobile, navigate }) => {
  const url = mediaUrl(block.image);
  const imgEl = (
    <div style={{ flex: 1, width: '100%' }}>
      {url && <img src={url} alt={mediaAlt(block.image)} style={{ width: '100%', height: 'auto', borderRadius: 10, display: 'block', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />}
    </div>
  );
  const txtEl = (
    <div style={{ flex: 1 }}>
      {block.heading && <H2>{block.heading}</H2>}
      <Prose text={block.body} />
      {block.ctaText && <CTAButton onClick={() => navigate(block.ctaLink || '/contact')}>{block.ctaText}</CTAButton>}
    </div>
  );
  return (
    <Section bg={bgOf(block.background)} isMobile={isMobile}>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 24 : 48, alignItems: 'center' }}>
        {isMobile ? <>{txtEl}{imgEl}</> : block.imagePosition === 'left' ? <>{imgEl}{txtEl}</> : <>{txtEl}{imgEl}</>}
      </div>
    </Section>
  );
};

const breadcrumb = ({ block, isMobile, navigate }) => (
  <Breadcrumb
    isMobile={isMobile}
    trail={(block.items || []).map((it) => (it.path ? { label: it.label, onClick: () => navigate(it.path) } : { label: it.label }))}
  />
);

export const serviceRenderers = {
  breadcrumb,
  serviceHero,
  contentSection,
  compareSection,
  steps,
  statsSection,
  testimonials,
  faq,
  finalCta,
  pricingTiers,
  image: imageBlock,
  imageText,
};
