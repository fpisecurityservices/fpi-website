import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const CommercialOfficePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Building Security Services for Commercial Office | FPI"
        description="FPI provides building security services for commercial offices in FL & TX — lobby guards, access control & 24/7 monitoring. Get a free assessment."
        ogTitle="Building Security Services for Commercial Office Buildings | FPI"
        ogDescription="Class A lobby officers, access control, surveillance, and maintenance — one vendor, one SLA, one client portal for your commercial portfolio."
        ogUrl="https://www.fpisecurity.com/industries/commercial-office-building-security"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'Commercial Office Buildings' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['Class A Standard', 'One Vendor', 'Building Access Control', '24/7 Monitoring']}
        title="Building Security Services for Commercial Office Buildings in FL & TX"
        intro="FPI provides building security services for commercial office buildings and corporate campuses across South Florida and Texas — lobby guards, access control systems, surveillance cameras, and 24/7 monitoring under one service agreement. FPI provides building security services for commercial office buildings in FL and TX with one partner for guards, technology, and maintenance — no accountability gaps between separate vendors."
        ctaText="Get a Free Building Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Why specialized */}
      <Section isMobile={isMobile}>
        <H2>Why Commercial Office Buildings Require Specialized Building Security</H2>
        <Body>Commercial office buildings face security challenges that standard guard services cannot address alone — Class A lobby standards, multi-tenant access control, after-hours vulnerability, and the liability exposure of managing hundreds of employees, visitors, and vendors daily.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>The Class A Building Standard — Security That Projects Professionalism</H3>
            <Body>
              A Class A building commands premium rents on the quality of the tenant experience — and the lobby security officer is the first impression every tenant, visitor, and prospective tenant receives. An unprofessional guard is not a security problem; it is a leasing problem. Properties in high-crime areas lose up to 15% of their value (Get Safe and Sound, 2025), and the lobby is where that perception forms.
            </Body>
          </div>
          <div>
            <H3>Multi-Tenant Access Control Complexity</H3>
            <Body>
              Keycard systems manage employee access across multiple zones — tenant floors, shared amenities, parking structures, loading docks, and server rooms — with credential management that changes every time a tenant onboards or offboards staff. Without a structured system, every personnel change is a security gap.
            </Body>
          </div>
          <div>
            <H3>After-Hours &amp; Parking Structure Vulnerability</H3>
            <Body>
              Commercial office buildings are most exposed after 6 PM, when parking structures, loading docks, and common areas run on minimal staffing. Unauthorized access to vacant floors, after-hours loitering, and parking structure incidents all create liability exposure for ownership. 43% of businesses in high-crime areas report security as a major operational constraint (Get Safe and Sound, 2025).
            </Body>
          </div>
          <div>
            <H3>The Multi-Vendor Accountability Gap</H3>
            <Body>
              When guards, surveillance systems, and maintenance are managed by different vendors, accountability lives in the gaps between them. A camera goes offline — the guard company says it is not their problem, the camera vendor quotes 3–5 business days. One security vendor manages guards, systems, and maintenance for commercial buildings, and that is the gap FPI closes.
            </Body>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Building Security Services for Commercial Properties</H2>
        <Body>FPI provides a complete building security program for commercial office properties — from Class A lobby officers and parking structure patrol to access control systems and 24/7 SOC monitoring.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Lobby Security Officers — Class A Standards</H3>
            <Body>
              FPI provides unarmed security guards for businesses, and unarmed security guards monitor building access points. Our lobby officers are trained in concierge-standard protocols — professional appearance, visitor management, tenant assistance, and incident response. Armed options are available for high-security tenants or elevated-risk buildings. Explore our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Access Control Systems for Commercial Buildings</H3>
            <Body>
              FPI installs access control systems for secured facilities, and access control technology logs every entry and exit event. Keycard, mobile credential, and biometric access — zoned by tenant floor, amenity area, and restricted zone. Every event is logged and accessible in the client portal for ownership reporting. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>security systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Surveillance Camera Systems for Office Buildings</H3>
            <Body>
              FPI installs surveillance systems for businesses in Florida and every market we serve — HD cameras covering lobby entrances, elevator banks, parking structures, loading docks, and stairwells, with AI analytics that detect anomalies beyond motion triggers. Every system connects to FPI's SOC. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>24/7 Remote Video Monitoring</H3>
            <Body>
              FPI provides 24/7 remote monitoring in South Florida and beyond. Our SOC watches live camera feeds when building staff is minimal — AI flags anomalies, operators verify and respond. Explore our{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Mobile Patrol for Building Perimeters &amp; Parking Structures</H3>
            <Body>
              GPS-tracked patrol vehicles cover building perimeters, parking structures, and loading dock areas on randomized schedules — every patrol logged and accessible in the client portal, documentation the asset manager can export for ownership reports.
            </Body>
          </div>
          <div>
            <H3>Security System Maintenance &amp; Managed Support</H3>
            <Body>
              FPI maintains all installed systems — cameras, access control, and autonomous devices — under tiered agreements. Proactive monitoring alerts FPI before a camera fails, so the facilities manager gets a notification, not a discovery. Explore our{' '}
              <InlineLink onClick={() => navigate('/service-maintenance')}>maintenance plans</InlineLink>.
            </Body>
          </div>
        </div>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Commercial Property Owners Choose FPI Building Security</H2>
        <Body>Commercial property owners and asset managers choose FPI because FPI manages guards, technology systems, and maintenance under one service agreement — with one point of contact and one client portal.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>One Vendor — Guards, Systems, Maintenance, One SLA</H3>
            <Body>
              One security vendor manages guards, systems, and maintenance for commercial buildings. When a camera goes offline at 11 PM, FPI knows before the facilities manager does. One call solves everything — not three, and not a round of "that's not our scope."
            </Body>
          </div>
          <div>
            <H3>Class A Lobby Presence — Concierge-Standard Officers</H3>
            <Body>
              FPI lobby officers are trained to the building's specific brand standards — professional appearance, visitor greeting protocols, and tenant assistance alongside security duties. The lobby officer is the building's first impression, every day.
            </Body>
          </div>
          <div>
            <H3>GPS-Verified Documentation for Ownership Reporting</H3>
            <Body>
              The asset manager presents quarterly building reports to ownership. Every FPI patrol, access control event, and incident is documented in the client portal — exportable, timestamped, and ready for review without calling anyone. Surveillance systems provide video evidence after incidents, and it is all in one place.
            </Body>
          </div>
          <div>
            <H3>Rapid Response — SOC Verified, Not Alarm-Only</H3>
            <Body>
              Monitoring services reduce response time during security incidents. FPI's SOC verifies every alert before dispatching — no false alarm fatigue for building tenants or police. Explore our{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>Scalable from One Building to a Multi-Property Portfolio</H3>
          <Body>
            FPI manages one office building or a 20-property commercial portfolio on the same platform — centralized reporting, one point of contact, and consistent service standards across every asset. Active security reduces property crimes 16% (TechPro Security, 2025), and consistent standards keep that result portfolio-wide.
          </Body>
        </div>
      </Section>

      {/* Property types */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Building Security Solutions by Commercial Property Type</H2>
        <Body>Different commercial office properties carry different security footprints — a 5-floor single-tenant building and a 40-floor multi-tenant tower require entirely different programs.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Class A Multi-Tenant Office Towers</H3>
            <Body>
              Multi-tenant towers require floor-by-floor access control zoning, shared amenity management, visitor credentialing for multiple tenants, and lobby security serving several tenant brands at once. FPI manages the full program under one building-wide agreement.
            </Body>
          </div>
          <div>
            <H3>Corporate Campuses &amp; Single-Tenant Headquarters</H3>
            <Body>
              Single-tenant corporate campuses require integrated security across multiple buildings, parking structures, and outdoor areas — with access control reflecting the corporate security policy. FPI designs campus-wide programs with centralized SOC monitoring.
            </Body>
          </div>
          <div>
            <H3>Mixed-Use Commercial &amp; Retail Buildings</H3>
            <Body>
              Mixed-use buildings with office and retail components need zone-specific protocols — lobby access for office tenants, retail floor coverage, and parking enforcement for shared structures. FPI runs the full mixed-use program under one agreement.
            </Body>
          </div>
          <div>
            <H3>Medical Office Buildings &amp; Professional Parks</H3>
            <Body>
              Medical office buildings require HIPAA-aware access control for patient areas and officers trained in de-escalation for sensitive environments. Professional parks need perimeter patrol and after-hours coverage across multiple buildings. See our{' '}
              <InlineLink onClick={() => navigate('/industries/healthcare-security-services')}>healthcare security services</InlineLink>.
            </Body>
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section isMobile={isMobile}>
        <H2>Building Security Technology — Access Control, Surveillance &amp; Monitoring</H2>
        <Body>FPI's technology layer turns a traditional guard service into a fully accountable building security program — with real-time visibility for asset managers, facilities directors, and ownership groups.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Integrated Access Control &amp; Visitor Management</H3>
            <Body>
              Keycard systems manage employee access across multiple zones — keycard, mobile credential, and biometric, zoned by floor, amenity, and restricted area. Visitor pre-registration, temporary credential issuance, and after-hours access logging, all accessible in the client portal.
            </Body>
          </div>
          <div>
            <H3>AI-Powered Surveillance for Commercial Properties</H3>
            <Body>
              HD cameras covering lobby, elevator banks, stairwells, parking, and loading dock — with AI analytics detecting loitering, unauthorized access, and after-hours anomalies. Every feed connects to FPI's SOC for live verification.
            </Body>
          </div>
          <div>
            <H3>FPI Client Portal — Real-Time Visibility for Asset Managers</H3>
            <Body>
              GPS patrol logs, access control events, incident reports, and camera alert history in one dashboard, on any device, 24/7. The asset manager pulls last quarter's data before presenting to ownership; the facilities manager checks camera health before a tenant meeting.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Building Security Services</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What are building security services?"
            answer="Building security services include uniformed security officers, access control systems, surveillance cameras, mobile patrol, and 24/7 remote monitoring — designed to protect commercial properties, their tenants, and their assets. FPI provides all of these as one integrated building security program for commercial office buildings across South Florida and Texas."
          />
          <FAQItem
            question="What does building security include for commercial office buildings?"
            answer="Building security for commercial offices typically includes lobby officers, floor and zone access control, parking structure patrol, surveillance camera systems, visitor management, and after-hours remote monitoring. FPI manages all of these under one service agreement, with GPS patrol logs and incident reports in the client portal."
          />
          <FAQItem
            question="What are corporate security services?"
            answer="Corporate security services protect commercial office buildings and corporate campuses through trained security officers, access control systems, surveillance cameras, and 24/7 monitoring. FPI provides corporate security services for single-tenant headquarters and multi-tenant office towers across South Florida and the Dallas–Fort Worth area."
          />
          <FAQItem
            question="Does FPI provide access control systems for commercial buildings?"
            answer="Yes. FPI installs and manages access control systems for commercial office buildings — keycard, mobile credential, and biometric systems zoned by tenant floor, amenity area, and restricted zone. Every entry event is logged and accessible in the client portal. FPI serves South Florida and Texas."
          />
          <FAQItem
            question="Can FPI manage security for a multi-building commercial portfolio?"
            answer="Yes. FPI manages building security programs across multi-property commercial portfolios under one service agreement, with centralized reporting through the client portal. Asset managers access GPS patrol logs, access control events, and incident reports for all buildings in one dashboard."
          />
          <FAQItem
            question="How does FPI's one-vendor model benefit commercial building operators?"
            answer="FPI manages guards, surveillance systems, access control, and maintenance under one service agreement — one point of contact, one invoice, one client portal. When a camera goes offline or a guard post is uncovered, there is one call to make and no accountability gaps between separate vendors."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a building security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Building Security Assessment"
        body="FPI's no-cost assessment covers lobby access protocols, access control zoning, surveillance camera placement, patrol coverage, and maintenance requirements — for commercial office buildings and corporate campuses across South Florida and the Dallas–Fort Worth area. The output is a written proposal for your asset management team, not a sales call."
        ctaText="Get a Free Building Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default CommercialOfficePage;
