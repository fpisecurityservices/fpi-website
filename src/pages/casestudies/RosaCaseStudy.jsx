import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, QuickAnswer, ResultsTable, Testimonial, BulletList, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const RosaCaseStudy = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Autonomous Security Stopped Theft | FPI Florida Case Study"
        description="FPI's ROSA autonomous device stopped water theft at a Florida gun store — cutting utility costs. Real AI protection, real results. Get your free assessment."
        ogTitle="How ROSA Stopped Water Theft at a Florida Gun Store | FPI Case Study"
        ogDescription="FPI deployed ROSA at Florida Gun Center in Hialeah — within days it detected intruders, announced detection, and alerted law enforcement. They fled and didn't return."
        ogUrl="https://www.fpisecurity.com/case-studies/rosa-stops-theft-florida"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Case Studies', onClick: () => navigate('/insights/case-studies') },
        { label: 'ROSA Stops Water Theft — Florida Gun Center' },
      ]} />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px 40px' : '64px 48px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
            {['Case Study', 'Autonomous Security', 'Florida Gun Center · Hialeah, FL'].map(t => (
              <span key={t} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,96,144,0.2)', color: '#8998B1', padding: '4px 10px', borderRadius: 4 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 48, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 8 }}>
            How ROSA Stopped Water Theft at a Florida Gun Store
          </h1>
        </div>
      </div>

      {/* Quick answer */}
      <Section isMobile={isMobile} py="36px 48px" pyMobile="28px 24px">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <QuickAnswer isMobile={isMobile}>
            FPI Security Services deployed ROSA — a RAD ROSA&trade; autonomous AI security device — at Florida Gun Center in Hialeah, FL. Within days of installation, ROSA autonomously identified unauthorized individuals, announced their detection via built-in speaker, and alerted law enforcement. The subjects fled and did not return. FPI deploys autonomous security devices in large facilities across South Florida and Texas.
          </QuickAnswer>
        </div>
      </Section>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* What is ROSA */}
        <Section isMobile={isMobile}>
          <H2>What Is ROSA? AI-Powered Autonomous Security Explained</H2>
          <Body>
            ROSA stands for Responsive Observation Security Agent. It is an{' '}
            <InlineLink onClick={() => navigate('/autonomous-surveillance')}>autonomous security device</InlineLink>{' '}
            powered by artificial intelligence, designed to monitor, detect, and respond to security threats without requiring continuous human supervision.
          </Body>
          <Body>
            Unlike traditional video surveillance systems, ROSA operates independently — autonomous robots patrol premises without human intervention. Cameras record. ROSA acts. It analyzes activity in real time, identifies suspicious behavior, streams live video to FPI's monitoring center, and responds autonomously, closing the gap between detection and action.
          </Body>
          <div style={{ marginTop: 8 }}>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 700, color: '#0F3554', marginBottom: 12 }}>Key capabilities:</div>
            <BulletList items={[
              'Continuous 24/7 AI-powered monitoring — no on-site operator required',
              'AI behavioral analytics — identifies intent and behavior patterns, not just movement',
              'Autonomous audio response — announces detection and alerts authorities immediately',
              "Live video streaming to FPI's remote monitoring center",
              'Integration with existing security infrastructure and protocols',
            ]} />
          </div>
        </Section>

        {/* Client background */}
        <Section isMobile={isMobile} py="32px 48px" pyMobile="24px 24px">
          <H2>Client Background: Florida Gun Center</H2>
          <Body>
            Florida Gun Center (FGC) has served the South Florida firearms community for over 40 years. As an established gun store and shooting range in Hialeah, FGC offers firearms sales, accessories, and professional training services.
          </Body>
          <Body style={{ marginBottom: 0 }}>
            As FGC's operations grew, so did the security demands. Managing a large firearms inventory alongside consistent daily foot traffic made advanced, accountable security essential.
          </Body>
        </Section>

        {/* Challenge */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <H2>The Challenge: Water Theft, Utility Loss, and Security Gaps</H2>
          <Body>
            Despite having traditional surveillance cameras in place, FGC faced a persistent and costly problem: unauthorized individuals were repeatedly accessing the property and stealing water. The result was thousands of dollars added to their monthly utility bill — a clear case where monitoring services must reduce response time during security incidents, and the existing cameras did not.
          </Body>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 700, color: '#0F3554', margin: '8px 0 12px' }}>The core security failures were clear:</div>
          <BulletList items={[
            'Traditional cameras recorded but did not detect or respond to unauthorized access',
            'Thefts consistently occurred during non-operational hours, outside staffed windows',
            'No system in place to deter, alert, or respond in real time',
            'Financial losses from theft compounded by rising utility costs',
          ]} />
          <Body style={{ marginBottom: 0, fontWeight: 600, color: '#0F3554' }}>FGC needed a solution that could act — not just record.</Body>
        </Section>

        {/* Solution */}
        <Section isMobile={isMobile}>
          <H2>The Solution: Deploying ROSA at Florida Gun Center</H2>
          <Body>
            FPI Security Services recommended and implemented the RAD ROSA&trade; autonomous security device — purpose-built for exactly this challenge. FPI deploys autonomous security devices in large facilities, and ROSA provides 24/7 AI-driven monitoring with autonomous response capability, eliminating the gap between detection and action.
          </Body>
          <Divider />
          <H3>Phase 1 — Site Assessment and Strategic Placement</H3>
          <Body>
            FPI's security experts conducted a full survey of FGC's property. The assessment mapped access points, perimeter zones, and prior theft locations. ROSA was positioned to maximize coverage while reinforcing a visible security presence across the property and adjacent shopping plaza — improving deterrence and customer comfort simultaneously, because remote monitoring centers track surveillance feeds in real time and placement determines what they can see.
          </Body>
          <H3>Phase 2 — Deployment Without Operational Disruption</H3>
          <Body>
            Installation was swift and did not disrupt FGC's daily operations. ROSA was configured to monitor identified high-risk zones under continuous surveillance. Autonomous security units stream live video to monitoring centers, and ROSA's feeds were connected directly to FPI's{' '}
            <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote monitoring center</InlineLink>{' '}
            from day one.
          </Body>
          <H3>Phase 3 — Training and Integration</H3>
          <Body>
            FPI provided hands-on training for FGC's security staff, covering how ROSA fits their operation. FPI integrates autonomous devices with surveillance systems, connecting ROSA to the existing{' '}
            <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance infrastructure</InlineLink>.
          </Body>
          <BulletList items={[
            'Interpreting AI-generated alerts from the ROSA system',
            "Understanding ROSA's autonomous response capabilities and escalation logic",
            "Integrating ROSA outputs with FGC's existing security protocols",
          ]} />
          <Body style={{ marginBottom: 0 }}>The integration required minimal changes to existing procedures while delivering a measurable security upgrade.</Body>
        </Section>

        {/* Results */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <H2>The Results: Theft Stopped, Costs Reduced, Staff Protected</H2>
          <Body>The impact of ROSA's deployment was immediate and measurable:</Body>
          <ResultsTable
            isMobile={isMobile}
            headers={['Metric', 'Before ROSA', 'After ROSA']}
            rows={[
              ['Unauthorized access incidents', 'Recurring — multiple per month', 'Zero incidents post-deployment'],
              ['Water theft / utility loss', 'Thousands of dollars monthly', 'Eliminated'],
              ['Threat response time', 'None — cameras recorded only', 'Immediate — autonomous real-time response'],
              ['Staff & customer safety perception', 'Concerns raised', 'Significantly improved'],
              ['Business insights available', 'None', 'Activity tracking, analytics, and reporting enabled'],
            ]}
          />
          <Body style={{ marginTop: 16, marginBottom: 0 }}>
            Most notably: shortly after deployment, ROSA detected individuals attempting unauthorized access. The unit immediately activated its built-in speaker, announced that subjects had been identified, and notified law enforcement. The individuals fled and did not return. Autonomous patrol devices reduce operational costs for large properties — and here, that meant eliminating a recurring utility loss outright.
          </Body>
        </Section>

        {/* Beyond security */}
        <Section isMobile={isMobile}>
          <H2>Beyond Security: Business Intelligence Powered by ROSA</H2>
          <Body>ROSA's value extends beyond physical security. FPI's autonomous surveillance platform captures actionable data that directly supports business operations:</Body>
          <BulletList items={[
            'Customer behavior tracking — understand peak traffic patterns and visitor flow',
            'Operational reporting — automated incident logs eliminate manual documentation',
            'Marketing intelligence — real-world activity data to support business development',
            'Process optimization — insights into how customers and staff interact with the space',
          ]} />
          <Body style={{ marginBottom: 0 }}>
            For FGC, ROSA is more than a security tool. It is an operational asset — one that actively contributes to business growth and smarter day-to-day decisions.
          </Body>
        </Section>

        {/* Testimonial */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <Testimonial
            isMobile={isMobile}
            quote="ROSA has truly transformed our approach to security at Florida Gun Center. Not only have we seen a sharp decline in theft incidents, but our utility bill has also decreased, and our customers and staff now feel much more secure knowing that ROSA is actively monitoring our premises. The peace of mind it provides is invaluable, and it's clear that ROSA has become a crucial part of our operations."
            attribution="Robert Sanz, Store Manager, Florida Gun Center"
          />
        </Section>

        {/* Is ROSA right for you */}
        <Section isMobile={isMobile}>
          <H2>Is ROSA the Right Autonomous Security Solution for Your Business?</H2>
          <Body>
            ROSA is best suited for businesses that need continuous, verifiable coverage — especially during non-operational hours — and cannot rely exclusively on human guards.
          </Body>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 700, color: '#0F3554', margin: '8px 0 12px' }}>ROSA delivers the strongest ROI for:</div>
          <div>
            {[
              ['Retail properties and shopping plazas', ' with perimeter access vulnerabilities', null],
              ['Automotive dealerships', ' protecting high-value floorplan inventory overnight', '/industries/car-dealership-security'],
              ['Warehouses and industrial facilities', ' with large perimeters and shift-change coverage gaps', '/industries/warehouse-industrial-security'],
              ['Commercial properties', ' managing after-hours access control and utility security', null],
              ['HOA and residential communities', ' requiring visible, documented patrol presence', '/industries/hoa-residential-security'],
            ].map(([label, rest, link], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#006090', flexShrink: 0, marginTop: 8 }} />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.65 }}>
                  {link ? <InlineLink onClick={() => navigate(link)}>{label}</InlineLink> : <strong style={{ color: '#0F3554' }}>{label}</strong>}{rest}
                </span>
              </div>
            ))}
          </div>
          <Body style={{ marginTop: 8, marginBottom: 0 }}>
            FPI serves businesses across South Florida — Miami-Dade, Broward, and Palm Beach counties — and the Dallas–Fort Worth metro in Texas, alongside the rest of the six states we cover.
          </Body>
        </Section>

        {/* FAQ */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <H2>Frequently Asked Questions — ROSA Autonomous Security Device</H2>
          <Divider />
          <FAQItem
            question="What does ROSA stand for in security?"
            answer="ROSA stands for Responsive Observation Security Agent. It is an AI-powered autonomous security device manufactured by RAD and deployed by FPI Security Services. ROSA monitors, detects, and responds to security threats in real time without requiring continuous on-site human supervision."
          />
          <FAQItem
            question="How does ROSA detect and respond to unauthorized access?"
            answer="ROSA uses AI-driven behavioral analytics to identify suspicious activity — AI-powered devices detect suspicious behavior in monitored areas. When a threat is detected, the unit autonomously activates its built-in speaker to announce detection, streams live video to FPI's monitoring center, and alerts law enforcement, all without human intervention."
          />
          <FAQItem
            question="Can ROSA reduce utility and operational costs?"
            answer="Yes. As demonstrated at Florida Gun Center, ROSA's autonomous detection of unauthorized access directly eliminated recurring water theft — removing thousands of dollars from their monthly utility bill. The system also reduces the need for additional guard deployments during non-operational hours."
          />
          <FAQItem
            question="Is ROSA available in South Florida and Texas?"
            answer={<>FPI Security Services deploys ROSA across South Florida — including Miami-Dade, Broward, and Palm Beach counties — and in the Dallas–Fort Worth metro in Texas. <InlineLink onClick={() => navigate('/contact')}>Contact FPI</InlineLink> for a site assessment to determine coverage feasibility for your location.</>}
          />
          <FAQItem
            question="Does ROSA integrate with existing security systems?"
            answer={<>Yes. ROSA integrates with existing surveillance infrastructure, <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>, and security protocols. FPI's implementation team provides personnel training to ensure ROSA enhances — rather than replaces — your existing security framework.</>}
          />
          <FAQItem
            question="What industries benefit most from autonomous security devices like ROSA?"
            answer="ROSA is particularly effective for automotive dealerships, retail and shopping centers, warehouses and industrial facilities, commercial office buildings, and residential communities. Any business with large perimeters, non-operational hour vulnerabilities, or high-value asset exposure is a strong candidate."
          />
          <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
              <Phone size={18} />
              (800) 374-4316
            </a>
          </div>
        </Section>
      </div>

      <FinalCTA
        isMobile={isMobile}
        title="Protect Your Business with ROSA — Autonomous Security by FPI"
        body="FPI offers a no-cost site assessment for autonomous security, available across South Florida and the Dallas–Fort Worth area. The output is a written recommendation — not a sales call."
        ctaText="Request Your Free Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default RosaCaseStudy;
