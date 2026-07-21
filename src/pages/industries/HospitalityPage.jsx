import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const HospitalityPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security for Hotels & Hospitality Properties | FPI"
        description="FPI provides security for hotels & hospitality properties in FL & TX — CARE Ambassador officers, surveillance cameras & 24/7 monitoring. Free assessment."
        ogTitle="Security for Hotels & Hospitality Properties | FPI"
        ogDescription="CARE Ambassador officers who protect the property while representing the brand, hotel surveillance cameras, parking patrol, and 24/7 monitoring."
        ogUrl="https://www.fpisecurity.com/industries/hotel-security-services"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'Hospitality & Hotels' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['CARE Ambassador Officers', 'Hotel Surveillance', 'Parking Patrol', '24/7 Monitoring']}
        title="Security for Hotels & Hospitality Properties in FL & TX"
        intro="FPI provides security for hotels and hospitality properties across South Florida and Texas. FPI provides hotel security guards trained in hospitality standards for properties in South Florida and Texas — because security in a hotel must protect guests and assets without disrupting the guest experience or the property's brand. That balance is the whole challenge, and FPI CARE Ambassador officers are the answer: trained in both security and hospitality, they protect the property while representing its brand."
        ctaText="Get a Free Hotel Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Why specialized */}
      <Section isMobile={isMobile}>
        <H2>Why Hotels &amp; Hospitality Properties Require Specialized Security</H2>
        <Body>Hotels face a security challenge unlike any other commercial property — the same space that must feel like a refuge for guests must also prevent unauthorized access, protect high-value assets, and manage incidents without disrupting the experience that keeps guests returning.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>The Brand Reputation Risk of Security Incidents</H3>
            <Body>
              A single security incident documented on TripAdvisor or Google Reviews affects occupancy for months — hotels with security incidents see an average 14% drop in TripAdvisor scores that carries into occupancy (Hotel Management Magazine, 2023). A lobby altercation, a car broken into in the parking structure, or an unauthorized person on a guest floor all become public property in the review era. FPI provides security for hotels while maintaining the guest experience standard of the property.
            </Body>
          </div>
          <div>
            <H3>Unauthorized Access — Pools, Gyms &amp; Guest Floors</H3>
            <Body>
              Hotel amenities — pools, fitness centers, spa areas — attract unauthorized visitors who use the property without registering as guests. Guest floors require controlled access to protect registered guests from unwanted intrusion. Unarmed security guards monitor building access points to close those gaps.
            </Body>
          </div>
          <div>
            <H3>Parking Structure &amp; Valet Security</H3>
            <Body>
              Patrol visits deter trespassing on commercial premises, and hotel parking structures are among the highest-risk zones for vehicle theft and break-ins — concentrated, predictable, and often minimally supervised overnight. Parking structures account for 40% of hotel-related theft and vehicle incidents (ASIS International, 2023). Valet operations add liability from vehicle damage and theft claims.
            </Body>
          </div>
          <div>
            <H3>After-Hours Vulnerability &amp; Back-of-House Access</H3>
            <Body>
              Hotels operate 24/7, but staffing drops significantly overnight. Loading docks, service entrances, and back-of-house corridors are vulnerable to unauthorized access during overnight hours, and housekeeping and maintenance movement creates access control complexity.
            </Body>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Hotel Security Services</H2>
        <Body>FPI provides a complete hotel security program — CARE Ambassador officers, hotel surveillance cameras, parking patrol, access control, and 24/7 SOC monitoring — for hospitality properties across South Florida and Texas.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>CARE Ambassador Security Officers — Brand-First Protection</H3>
            <Body>
              FPI provides unarmed security guards for businesses, and FPI provides hotel security guards trained in hospitality standards for properties in South Florida and Texas. FPI CARE Ambassador officers are trained in both security protocols and the specific hospitality standards of the property — professional appearance, guest interaction etiquette, and incident response that minimizes disruption. FPI provides security for hotels while maintaining the guest experience standard of the property; the guest notices the professionalism, not the security posture. Explore our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Hotel Surveillance Cameras — Lobby, Corridors &amp; Parking</H3>
            <Body>
              FPI installs surveillance systems for businesses in Florida, and CCTV cameras monitor facilities in real time. Our hotel surveillance camera systems cover lobbies, elevator banks, corridor access points, pool areas, parking structures, and service entrances, with AI-powered cameras detecting loitering and unauthorized access. Every system connects to FPI's SOC. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Parking Structure Patrol &amp; Valet Zone Coverage</H3>
            <Body>
              FPI offers patrol visit services in South Florida. GPS-tracked patrol vehicles cover hotel parking structures, valet staging areas, and surface lots on randomized schedules — every visit logged with timestamp and documentation in the client portal. Visible patrol deters vehicle theft and break-ins without a fixed guard post at every level. Explore our{' '}
              <InlineLink onClick={() => navigate('/mobile-patrol')}>patrol services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Access Control for Guest Floors &amp; Restricted Areas</H3>
            <Body>
              Unarmed officers enforce property rules on-site, supported by keycard access control for guest floor elevators, fitness centers, pool areas, and back-of-house corridors, plus temporary credentials for contractors and vendors — every access event logged in the client portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>24/7 Remote Monitoring by FPI's SOC</H3>
          <Body>
            FPI provides 24/7 remote monitoring in South Florida. Our SOC watches live hotel camera feeds overnight — detecting unauthorized access to amenity areas, parking structure incidents, and service entrance activity, with every alert human-verified. Explore our{' '}
            <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
          </Body>
        </div>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Hotel Operators Choose FPI Security</H2>
        <Body>Hotel operators choose FPI because FPI understands that security in a hospitality environment must serve the guest experience — not compete with it.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>CARE Ambassador Training — Hospitality Standards Built In</H3>
            <Body>
              FPI CARE Ambassador officers are trained to the specific brand standards of each property — dress code, guest interaction protocols, and escalation procedures that match the hotel's service culture. A luxury resort and a business hotel have different standards; FPI trains to both.
            </Body>
          </div>
          <div>
            <H3>Brand Protection — Security That Does Not Appear on TripAdvisor</H3>
            <Body>
              The goal is incident prevention, not incident response. FPI's proactive presence, AI detection, and SOC monitoring address threats before they become incidents guests post about. Monitoring services reduce response time during security incidents. Explore our{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>GPS-Verified Documentation for Liability Protection</H3>
            <Body>
              Surveillance systems provide video evidence after incidents. Every FPI patrol generates a GPS-verified, timestamped log, and every incident generates a photo-documented report in the client portal — essential for insurance claims, liability disputes, and valet damage documentation. Florida businesses without adequate security pay 30–40% higher premiums (TechPro Security, 2025).
            </Body>
          </div>
          <div>
            <H3>Scalable — From Boutique Hotel to Full-Service Resort</H3>
            <Body>
              FPI deploys a single CARE Ambassador for a boutique property and a full program for a 500-room full-service hotel — same platform, same service agreement, same client portal. Active security reduces property crimes 16% (TechPro Security, 2025).
            </Body>
          </div>
        </div>
      </Section>

      {/* Property types */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Hotel Security Solutions by Property Type</H2>
        <Body>Different hospitality properties carry different security profiles — a boutique hotel and a full-service resort require entirely different programs.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Full-Service Hotels &amp; Resorts</H3>
            <Body>
              Full-service properties require coverage across multiple buildings, parking structures, pool and spa areas, ballrooms and event spaces, and back-of-house operations. FPI manages the full program under one service agreement.
            </Body>
          </div>
          <div>
            <H3>Boutique &amp; Luxury Hotels</H3>
            <Body>
              Luxury properties demand security invisible to guests — CARE Ambassadors in professional attire, discreet surveillance, and visitor management that reflects the brand's positioning. The security program is a brand element, not an interruption.
            </Body>
          </div>
          <div>
            <H3>Extended Stay &amp; Business Hotels</H3>
            <Body>
              Extended stay properties have unique challenges: long-term guests create access control complexity, and the residential nature of extended stay blurs the line between hotel security and residential security concerns.
            </Body>
          </div>
          <div>
            <H3>Hotel Parking Structures &amp; Exterior Facilities</H3>
            <Body>
              Parking structures are the highest-risk zone for guest vehicle theft and break-ins — and the most likely source of negative reviews when incidents occur. FPI deploys surveillance cameras, patrol, and LPR (license plate recognition) at parking entry and exit points.
            </Body>
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section isMobile={isMobile}>
        <H2>Hotel Security Technology — Cameras, Access Control &amp; Monitoring</H2>
        <Body>FPI installs and manages hotel security systems covering surveillance cameras, access control, and 24/7 SOC monitoring — integrated into one platform accessible through the client portal.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Hotel Surveillance Camera Systems</H3>
            <Body>
              HD cameras covering lobby, elevator banks, corridor access points, pool and fitness areas, parking structures, and service entrances. AI detection distinguishes guests from unauthorized visitors, and all feeds connect to FPI's SOC.
            </Body>
          </div>
          <div>
            <H3>Guest Floor &amp; Amenity Access Control</H3>
            <Body>
              Keycard-controlled elevator access for guest floors, credential management for amenity areas, and temporary access for contractors — all logged and accessible in the client portal.
            </Body>
          </div>
          <div>
            <H3>FPI Client Portal — Real-Time Visibility for Hotel Management</H3>
            <Body>
              Patrol logs, camera alerts, access control events, and incident reports — all in one dashboard, on any device 24/7. The GM reviews overnight activity before morning standup; the security director pulls documentation before an insurance call.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Hotel Security Services</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What does security for hotels include?"
            answer="Security for hotels includes uniformed officers trained in hospitality standards, hotel surveillance cameras covering lobbies and parking areas, access control for guest floors and amenities, GPS-tracked parking patrol, and 24/7 remote video monitoring. FPI provides all of these as an integrated hotel security program across South Florida and Texas."
          />
          <FAQItem
            question="What are hotel security guards trained to do?"
            answer="FPI hotel security guards — CARE Ambassadors — are trained in both security protocols and the hospitality standards of the specific property. They manage unauthorized access, respond to incidents, assist guests, and maintain a professional presence that reflects the hotel's brand without creating a security-focused atmosphere."
          />
          <FAQItem
            question="Does FPI install surveillance cameras for hotels?"
            answer="Yes. FPI designs and installs hotel surveillance camera systems covering lobbies, elevator banks, guest floor access points, pool areas, parking structures, and service entrances. Every system connects to FPI's Security Operations Center for 24/7 live monitoring. FPI serves hotels across South Florida and Texas."
          />
          <FAQItem
            question="How does FPI protect the guest experience while providing security?"
            answer="FPI CARE Ambassador officers are trained to the specific brand and service standards of each property — professional appearance, guest interaction protocols, and incident response procedures that minimize disruption. Security is present and effective without creating an atmosphere that makes guests uncomfortable."
          />
          <FAQItem
            question="Can FPI handle security for a hotel parking structure?"
            answer="Yes. FPI provides GPS-tracked patrol, surveillance cameras, and LPR at parking entry and exit points for hotel parking structures across South Florida and Texas. Every patrol visit is logged and accessible in the client portal — documentation available for vehicle damage and theft claims."
          />
          <FAQItem
            question="Does FPI provide security for boutique and luxury hotels?"
            answer="Yes. FPI deploys CARE Ambassador officers trained to the specific standards of luxury and boutique properties — discreet, professional, and brand-appropriate. Security programs are designed around the property's service culture, not a standard template. Available across South Florida and the Dallas–Fort Worth area."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a hospitality security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Hotel Security Assessment"
        body="FPI's no-cost assessment covers CARE Ambassador deployment, surveillance camera placement, parking structure coverage, access control configuration, and SOC monitoring requirements — for hotels, resorts, and hospitality properties across South Florida and the Dallas–Fort Worth area. The output is a written security proposal built around your property's brand standards and operational requirements."
        ctaText="Get a Free Hotel Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default HospitalityPage;
