import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { CASE_STUDIES_DATA } from '../../data/caseStudies';
import { Breadcrumb } from '../../components/ServicePageKit';

const CaseStudiesHub = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Case Studies | Real Security Results | FPI Security"
        description="Real FPI Security deployments with measurable results — autonomous security, guard replacement, and theft prevention across Florida and Texas."
        ogTitle="FPI Security Case Studies | Real Deployments, Real Results"
        ogDescription="See how FPI's autonomous devices, officers, and technology solved real security problems for businesses across South Florida and Texas."
        ogUrl="https://www.fpisecurity.com/insights/case-studies"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Case Studies' },
      ]} />

      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '56px 24px' : '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>Case Studies</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 40 : 56, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>Real Deployments. Measurable Results.</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: isMobile ? 15 : 17, color: '#7090B0', maxWidth: 620, lineHeight: 1.7 }}>
            Every FPI program is built around a real problem. These are the deployments — the challenge, the solution, and the measurable outcome — for businesses across South Florida and Texas.
          </p>
        </div>
      </div>

      {/* Case study cards */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 24px' : '64px 48px', display: 'flex', flexDirection: 'column', gap: isMobile ? 28 : 40 }}>
        {CASE_STUDIES_DATA.map((cs, i) => (
          <div
            key={cs.slug}
            onClick={() => navigate(cs.path)}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: 0, borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
              boxShadow: '0 6px 32px rgba(0,0,0,0.10)', border: '1px solid #E2E6ED',
            }}
          >
            {!isMobile && i % 2 !== 0 && (
              <div style={{ overflow: 'hidden' }}>
                <img src={cs.photo} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 320, display: 'block' }} />
              </div>
            )}
            <div style={{ padding: isMobile ? '28px 24px' : '44px 44px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: '#E8EDF4', color: '#006090', padding: '4px 10px', borderRadius: 4 }}>{cs.tag}</span>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8A96A8', padding: '4px 0' }}>{cs.client}</span>
              </div>
              <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 26 : 32, fontWeight: 700, color: '#0F3554', marginBottom: 12, lineHeight: 1.1 }}>{cs.title}</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 16 }}>{cs.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 20, padding: '12px 16px', background: '#F4F6F8', borderRadius: 6, borderLeft: '3px solid #006090' }}>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600, color: '#0F3554', lineHeight: 1.5 }}>Result: {cs.result}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600 }}>
                <span>Read the case study</span>
                <ArrowRight size={15} />
              </div>
            </div>
            {(isMobile || i % 2 === 0) && (
              <div style={{ overflow: 'hidden', minHeight: isMobile ? 200 : 'unset', order: isMobile ? -1 : 0 }}>
                <img src={cs.photo} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: isMobile ? 200 : 320, display: 'block' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#0D2A3F', padding: isMobile ? '56px 24px' : '64px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 30 : 38, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Want Results Like These?</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#7090B0', lineHeight: 1.7, marginBottom: 28 }}>Tell us about your property and FPI will build a security program around it — starting with a free, no-obligation assessment.</p>
          <button onClick={() => navigate('/contact')} style={{
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
            padding: '13px 32px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
          onMouseLeave={e => e.currentTarget.style.background = '#006090'}
          >Request a Free Security Assessment</button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesHub;
