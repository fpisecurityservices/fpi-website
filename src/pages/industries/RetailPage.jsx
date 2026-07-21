import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const RetailPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Retail Loss Prevention & Mall Security Services | FPI"
        description="FPI provides retail loss prevention, mall security & surveillance cameras for stores and shopping centers in FL & TX. Free assessment."
        ogTitle="Retail Loss Prevention & Mall Security Services | FPI"
        ogDescription="Hospitality-forward loss prevention officers, store surveillance cameras that are actively monitored, parking enforcement, and 24/7 SOC monitoring."
        ogUrl="https://www.fpisecurity.com/industries/retail-shopping-center-security"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'Retail & Shopping Centers' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['Retail Loss Prevention', 'Mall Security', 'Store Surveillance', 'Parking Enforcement']}
        title="Retail Loss Prevention & Mall Security Services in FL & TX"
        intro="FPI provides retail loss prevention and mall security services — guards, surveillance cameras, parking enforcement, and 24/7 monitoring — for stores and shopping centers across South Florida and Texas. FPI installs and monitors surveillance cameras for retail stores and shopping centers in Florida, and FPI officers protect retail environments while maintaining a welcoming customer experience. Hospitality-forward security that deters theft without driving shoppers away."
        ctaText="Get a Free Retail Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Why high risk */}
      <Section isMobile={isMobile}>
        <H2>Why Retail Environments Are High-Risk — And Hard to Secure</H2>
        <Body>Retail environments face a security challenge no other property type does — the space that must feel welcoming to shoppers must also deter organized theft rings, manage confrontations, and protect staff. FPI officers protect retail environments while maintaining a welcoming customer experience.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Organized Retail Crime &amp; Shrinkage Costs</H3>
            <Body>
              U.S. retail loses more than $112 billion annually to shrinkage (NRF Retail Security Survey, 2024), and organized retail crime affects 88% of retailers at an average loss above $700,000 per retailer per year (NRF ORC Survey, 2023). Unlike casual shoplifting, ORC rings run coordinated teams targeting high-value merchandise across multiple locations in a single day. The loss prevention manager's real adversary is the ring, not the casual shoplifter.
            </Body>
          </div>
          <div>
            <H3>The Customer Experience Dilemma</H3>
            <Body>
              Every retailer faces the same tension: aggressive security deters customers alongside criminals. An intimidating officer is a loss prevention tool that costs more in lost revenue than the theft it prevents. The solution is not fewer guards — it is better-trained guards. Unarmed officers enforce property rules on-site while representing the brand.
            </Body>
          </div>
          <div>
            <H3>Parking Lots — The Highest-Liability Zone</H3>
            <Body>
              Parking enforcement reduces vehicle theft in parking lots, and parking lots are where shoppers are most vulnerable and least protected. Parking lot crimes account for 1 in 10 crimes in the U.S. (Bureau of Justice Statistics) — vehicle break-ins and incidents there create liability exposure far beyond the incident itself.
            </Body>
          </div>
          <div>
            <H3>After-Hours Vulnerability — Cameras That Record vs. Cameras That Alert</H3>
            <Body>
              Most retail properties have surveillance cameras — but cameras that only record are evidence tools, not prevention tools. FPI's store surveillance camera systems connect to a 24/7 SOC where live operators monitor feeds, detect anomalies, and alert before losses occur. Surveillance systems provide video evidence after incidents; live monitoring prevents them.
            </Body>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Retail Loss Prevention &amp; Security Services</H2>
        <Body>FPI provides a complete retail loss prevention program — from hospitality-forward guards and parking enforcement to store surveillance cameras and 24/7 SOC monitoring.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Loss Prevention Security Guards — Hospitality-Forward</H3>
            <Body>
              FPI provides unarmed security guards for businesses, and FPI officers protect retail environments while maintaining a welcoming customer experience. Retail officers are trained in visible-presence deterrence, de-escalation, incident documentation, and brand-appropriate conduct, with armed options for high-value or high-risk retail. Explore our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Parking Lot &amp; Parking Structure Security</H3>
            <Body>
              FPI provides parking enforcement for private properties and manages parking enforcement in commercial complexes. Dedicated enforcement officers plus GPS patrol vehicles cover structures, surface lots, and perimeter access — every violation and incident logged in the client portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/mobile-patrol')}>patrol services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Surveillance Cameras for Retail Stores &amp; Shopping Centers</H3>
            <Body>
              FPI installs surveillance systems for businesses in Florida, and FPI installs and monitors surveillance cameras for retail stores and shopping centers in Florida — covering floor areas, fitting room access points, cash wraps, stockrooms, and loading docks with AI-powered cameras. Crucially, FPI does not just sell cameras: every installed system connects to FPI's SOC for live monitoring. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>24/7 Remote Video Monitoring — Loss Prevention at Scale</H3>
            <Body>
              FPI provides 24/7 remote monitoring in South Florida. Our SOC monitors live retail camera feeds — flagging suspicious behavior, verifying incidents before police dispatch, and maintaining after-hours surveillance. The difference between a camera that records and a camera that prevents. Explore our{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Mobile Patrol for Shopping Centers &amp; Plazas</H3>
            <Body>
              GPS-tracked patrol vehicles cover the full property perimeter — entrances, loading docks, parking areas — on randomized schedules. Visible deterrence across the entire footprint without the cost of a fixed guard at every point.
            </Body>
          </div>
          <div>
            <H3>Access Control for Stockrooms &amp; Restricted Areas</H3>
            <Body>
              Unarmed security guards monitor building access points, backed by keycard and credential-based access control for stockrooms, cash offices, and receiving areas — logging every entry event and restricting access to authorized personnel only. Explore our{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
            </Body>
          </div>
        </div>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Retail Operators Choose FPI for Loss Prevention</H2>
        <Body>Retail operators choose FPI because FPI understands the retail environment — loss prevention that protects revenue without becoming the reason customers choose to shop elsewhere.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Hospitality-Forward Officers — Protection Without Intimidation</H3>
            <Body>
              FPI retail officers are trained in hospitality standards alongside security protocols. They greet, assist, and deter — not just patrol and react. The shopper notices the professionalism before the deterrence effect.
            </Body>
          </div>
          <div>
            <H3>Cameras That Monitor — Not Just Record</H3>
            <Body>
              Most retail properties have cameras. FPI's connect to a live SOC — operators detect anomalies in real time and alert before losses occur. Surveillance systems provide video evidence after incidents, but live monitoring stops them first. Explore our{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>GPS-Verified Documentation for Every Shift</H3>
            <Body>
              Every FPI patrol generates a GPS-verified, timestamped log in the client portal, and every incident generates a photo-documented report. The loss prevention manager pulls the history before an audit — no phone calls needed. Florida businesses without adequate security pay 30–40% higher premiums (TechPro Security, 2025); documentation is part of closing that gap.
            </Body>
          </div>
          <div>
            <H3>Scalable — Single Store to 60-Tenant Plaza</H3>
            <Body>
              FPI deploys a single loss prevention officer for a store and a full program for a 60-tenant shopping plaza — same platform, same service agreement, same client portal. Active security reduces property crimes 16% (TechPro Security, 2025) at every scale.
            </Body>
          </div>
        </div>
      </Section>

      {/* By property type */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Retail Security by Property Type</H2>
        <Body>Different retail environments require different coverage models — a flagship store and a 60-store open-air plaza have entirely different security footprints.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Malls &amp; Enclosed Shopping Centers</H3>
            <Body>
              Enclosed malls face multiple entry and exit points, food court incidents, common area coverage, and coordination with individual tenant security teams. FPI manages property-wide mall security while coordinating with tenant protocols.
            </Body>
          </div>
          <div>
            <H3>Open-Air Shopping Centers &amp; Lifestyle Plazas</H3>
            <Body>
              FPI manages parking enforcement in commercial complexes. Multi-tenant open-air properties require guard deployment, parking enforcement, perimeter patrol, and surveillance — all under one service agreement.
            </Body>
          </div>
          <div>
            <H3>Standalone Retail Stores &amp; Flagship Locations</H3>
            <Body>
              Individual stores — especially flagship and high-value locations — benefit from dedicated loss prevention officers trained to the brand's specific customer experience standards alongside security protocols.
            </Body>
          </div>
          <div>
            <H3>Strip Plazas &amp; Neighborhood Shopping Centers</H3>
            <Body>
              Neighborhood plazas face loitering, parking violations, and after-hours incidents that affect anchor tenant retention. FPI provides patrol and parking enforcement that keeps the property operating professionally.
            </Body>
          </div>
        </div>
      </Section>

      {/* Cameras + monitoring */}
      <Section isMobile={isMobile}>
        <H2>Surveillance Cameras &amp; Monitoring for Retail Loss Prevention</H2>
        <Body>FPI designs, installs, and actively monitors surveillance camera systems for retail stores and shopping centers — the difference between cameras that document losses and cameras that prevent them.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Store Surveillance Camera Systems — Design &amp; Installation</H3>
            <Body>
              FPI installs surveillance systems for businesses in Florida. We assess the store layout, identify blind spots, and design a camera system covering floor areas, fitting room access, cash wrap, stockroom, and loading dock — with AI-enabled cameras that detect behavioral patterns, not just motion. FPI installs and maintains all hardware.
            </Body>
          </div>
          <div>
            <H3>AI-Powered Behavioral Detection for Loss Prevention</H3>
            <Body>
              AI cameras in retail detect behavioral patterns associated with theft — prolonged dwell in specific zones, concealment gestures, coordinated movement across multiple people. The AI flags, the SOC operator reviews, the loss prevention response follows. Behavioral intelligence, not motion alerts.
            </Body>
          </div>
          <div>
            <H3>24/7 Live Monitoring by FPI's Security Operations Center</H3>
            <Body>
              CCTV cameras monitor facilities in real time. When the store closes, FPI's SOC takes over — live operators monitor store and parking lot feeds overnight, detecting unauthorized access and perimeter breaches, with every alert human-verified before any action. Explore our{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Incident Documentation &amp; Evidence for Insurance &amp; Legal</H3>
            <Body>
              Surveillance systems provide video evidence after incidents. Every FPI incident generates a timestamped report with photo and video documentation — exportable for law enforcement, insurance claims, and legal proceedings, accessible in the client portal 24/7.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Retail Security Services</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What is retail loss prevention security?"
            answer="Retail loss prevention security combines uniformed officers, surveillance camera systems, and monitoring services to reduce shrinkage, deter organized retail crime, and protect staff and customers. FPI provides loss prevention guards, store surveillance cameras, parking enforcement, and 24/7 SOC monitoring for retail stores and shopping centers across South Florida and Texas."
          />
          <FAQItem
            question="Does FPI install surveillance cameras for retail stores?"
            answer="Yes. FPI designs, installs, and maintains surveillance camera systems for retail stores and shopping centers — covering floor areas, cash wraps, fitting room access, stockrooms, loading docks, and parking lots. Every installed system connects to FPI's Security Operations Center for live monitoring. FPI serves South Florida and Texas."
          />
          <FAQItem
            question="What is mall security and what does it include?"
            answer="Mall security includes uniformed officers in common areas and anchor tenant entrances, parking lot enforcement and patrol, surveillance camera monitoring, and access control for restricted areas. FPI manages property-wide mall security programs for enclosed malls, open-air shopping centers, and lifestyle plazas across South Florida and Texas."
          />
          <FAQItem
            question="How do FPI security officers handle customers without disrupting the shopping experience?"
            answer="FPI retail officers are trained in hospitality-forward security — professional, approachable, and visible without being intimidating, and trained to your property's specific customer experience standards before their first shift. The goal is a professional presence that deters theft without discouraging shoppers."
          />
          <FAQItem
            question="Does FPI provide parking lot security for shopping centers?"
            answer="Yes. FPI provides dedicated parking enforcement officers and GPS-tracked patrol for retail parking lots and structures across South Florida and Texas. Every patrol visit is logged with GPS, timestamp, and photo documentation — accessible in the FPI client portal."
          />
          <FAQItem
            question="Can FPI security cameras monitor my store after hours?"
            answer="Yes. FPI store surveillance camera systems connect to our Security Operations Center, where trained operators monitor live feeds after hours — detecting unauthorized access and alerting before losses occur. This is active monitoring, not passive recording. Available 24/7 across South Florida and Texas."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a retail security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Retail Security Assessment"
        body="FPI's no-cost assessment covers loss prevention gaps, store surveillance camera placement, parking coverage, and officer deployment strategy — for retail stores, shopping plazas, and malls across South Florida and the Dallas–Fort Worth area. The output is a written security proposal built around your specific property and customer experience standards."
        ctaText="Get a Free Retail Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default RetailPage;
