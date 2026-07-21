import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const WarehousePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Warehouse & Industrial Security Services | FPI"
        description="FPI provides warehouse security: armed guards, perimeter patrol, AI surveillance & 24/7 monitoring for industrial facilities in FL & TX. Free assessment."
        ogTitle="Warehouse & Industrial Security Services | FPI"
        ogDescription="Armed guards, GPS patrol, autonomous solar surveillance, and 24/7 SOC monitoring — one integrated warehouse security program for FL & TX."
        ogUrl="https://www.fpisecurity.com/industries/warehouse-industrial-security"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'Warehouses & Industrial Security' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['Cargo Theft Prevention', 'Autonomous Solar Towers', 'GPS Patrol', '24/7 SOC Monitoring']}
        title="Warehouse & Industrial Security Services for South Florida & Texas"
        intro="FPI provides integrated warehouse security services for warehouses, distribution centers, and industrial facilities across South Florida and Texas — two of the highest-risk cargo theft corridors in the country. FPI provides armed security guards for high-risk industrial facilities in Florida and pairs them with GPS patrol, autonomous surveillance, and live monitoring. One partner for guards, patrol, cameras, autonomous devices, and 24/7 monitoring — not four vendors pointing at each other."
        ctaText="Get a Free Warehouse Security Assessment Today"
        onCta={() => navigate('/contact')}
      />

      {/* Why high value */}
      <Section isMobile={isMobile}>
        <H2>Why Warehouses & Industrial Facilities Are High-Value Targets</H2>
        <Body>Warehouses and industrial facilities concentrate high-value inventory, multiple access points, and after-hours vulnerability — making them the primary target for organized cargo theft operations in Florida and Texas.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>The Scale of Cargo Theft in Florida &amp; Texas</H3>
            <Body>
              California, Florida, and Texas account for 54% of all U.S. cargo theft (NICB, 2025), and the average incident costs $202,000 (NICB, 2025). Losses rose 60% in 2025 to $725 million total. Cargo theft costs FL and TX warehouses millions in unrecovered losses annually — a VP of logistics in Miami or Dallas operates in one of the highest-risk corridors in the country.
            </Body>
          </div>
          <div>
            <H3>After-Hours &amp; Weekend Vulnerability Windows</H3>
            <Body>
              Patrol visits deter trespassing on commercial premises, and most industrial theft happens when facilities are understaffed or closed. Overnight loading dock exposure, weekend perimeter gaps, and holiday-period vulnerability for distribution centers are the windows organized crews plan around.
            </Body>
          </div>
          <div>
            <H3>Internal Threats &amp; Unauthorized Access</H3>
            <Body>
              High employee and subcontractor turnover in logistics creates credential-management challenges. Unrevoked access cards, tailgating at dock entrances, and unmonitored restricted zones are documented vectors for internal theft — and access control technology logs every entry and exit event, closing that gap.
            </Body>
          </div>
          <div>
            <H3>How Security Gaps Affect Insurance &amp; Liability</H3>
            <Body>
              Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025). Documented security coverage — GPS patrol logs, surveillance footage, access control records — directly reduces insurance costs and provides the documentation required when filing a claim.
            </Body>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Warehouse &amp; Industrial Security Services</H2>
        <Body>FPI provides armed security guards for high-risk industrial facilities in Florida and covers the full security stack for warehouses — from armed officers at dock gates to autonomous AI cameras patrolling the perimeter.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Armed &amp; Unarmed Security Guards for Warehouses</H3>
            <Body>
              Armed guards for high-value inventory areas, dock gates, and overnight posts; unarmed officers for access control, visitor management, and internal patrol. All are Chapter 493-licensed (or state equivalent) and background-checked. Explore our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Mobile Patrol &amp; Perimeter Security</H3>
            <Body>
              FPI offers patrol visit services in South Florida and beyond. GPS-tracked patrol vehicles cover the full perimeter — loading docks, yard areas, parking lots, and fence lines — on randomized schedules, every visit logged with timestamp, GPS route, and photo in the client portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/mobile-patrol')}>mobile patrol services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Autonomous Surveillance Towers &amp; Solar-Powered Units</H3>
            <Body>
              FPI deploys autonomous security devices in large facilities — solar-powered surveillance towers with AI detection and 4G/LTE (cellular) connectivity, no power infrastructure required. Ideal for outdoor yards, loading areas, and perimeter zones where running power to cameras is impractical. Autonomous patrol devices reduce operational costs for large properties. Explore our{' '}
              <InlineLink onClick={() => navigate('/autonomous-surveillance')}>autonomous surveillance</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Surveillance Camera Systems &amp; CCTV</H3>
            <Body>
              FPI installs surveillance systems for businesses in Florida, and high-definition cameras cover blind spots in large facilities — dome cameras for interior zones, bullet cameras for perimeter, PTZ (pan-tilt-zoom) for active tracking, and LPR (license plate recognition) at dock entrances. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>warehouse surveillance systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>24/7 Remote Video Monitoring</H3>
            <Body>
              FPI provides 24/7 remote monitoring in South Florida, and monitoring services reduce response time during security incidents. Our SOC operators watch live camera feeds from industrial facilities — AI flags anomalies, operators verify and respond. Explore our{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Access Control for Restricted Zones &amp; Loading Docks</H3>
            <Body>
              Keycard and biometric access control for dock gates, server rooms, pharmaceutical storage, and restricted inventory areas — every entry event logged and accessible via the client portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>Security System Maintenance &amp; Managed Support</H3>
          <Body>
            FPI maintains all installed security systems — cameras, access control, autonomous devices — under tiered maintenance agreements, including firmware patching, system health monitoring, and remote diagnostics. Explore our{' '}
            <InlineLink onClick={() => navigate('/service-maintenance')}>maintenance plans</InlineLink>.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Request a Custom Security Proposal for Your Facility</CTAButton>
        </div>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Businesses Choose FPI for Warehouse Security</H2>
        <Body>FPI integrates human officers, GPS patrol, AI surveillance, and live SOC monitoring under one service agreement — across South Florida and Texas.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>One Vendor — Full Accountability</H3>
            <Body>
              When guards, cameras, patrol, and monitoring are managed by different vendors, accountability lives in the gaps between them. FPI manages the full program under one service agreement — one contact, one portal, one report.
            </Body>
          </div>
          <div>
            <H3>GPS-Verified Patrol Logs — Proof Every Visit Happened</H3>
            <Body>
              Patrol officers document security conditions after each visit, and every FPI patrol generates a GPS-verified, timestamped log in the client portal. The VP of logistics pulls last week's coverage before an insurance audit — no phone calls needed.
            </Body>
          </div>
          <div>
            <H3>Autonomous Coverage Without Infrastructure</H3>
            <Body>
              FPI's solar surveillance towers deploy in outdoor yards and perimeter zones without electrical runs or network cables. AI detection plus 4G/LTE connectivity means coverage anywhere on the facility footprint, live within 24–48 hours.
            </Body>
          </div>
          <div>
            <H3>Rapid Response — SOC Verified, Not Alarm-Only</H3>
            <Body>
              Monitoring services reduce response time during security incidents. When AI detects a perimeter breach, a live SOC operator reviews the footage before dispatching — no false alarm fatigue, and police receive a verified call with video evidence. Active security reduces property crimes 16% (TechPro Security, 2025). Powered by FPI's{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>Scalable from a Single Facility to a Multi-Site Portfolio</H3>
          <Body>
            FPI's platform manages one warehouse or fifty from the same dashboard — credentials, patrol routes, and monitoring configurations scale without changing providers.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>See What FPI's Integrated Security Model Looks Like</CTAButton>
        </div>
      </Section>

      {/* Facility types */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Security Solutions by Facility Type</H2>
        <Body>Different warehouse and industrial operations carry different security profiles — FPI designs programs around the specific risk, layout, and operational hours of each facility type.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Distribution &amp; Logistics Centers</H3>
            <Body>
              FPI deploys perimeter security systems for warehouses and logistics centers. High-turnover dock access, multi-carrier operations, and overnight exposure make distribution centers the highest-risk facility type — the front line of the 54% of U.S. cargo theft concentrated in CA, FL, and TX (NICB, 2025).
            </Body>
          </div>
          <div>
            <H3>Manufacturing Facilities</H3>
            <Body>
              Manufacturing floors require zone-specific access control, safety-compliance camera coverage, and perimeter security for equipment yards. OSHA (Occupational Safety and Health Administration) documentation is a compliance requirement, not just a safety preference.
            </Body>
          </div>
          <div>
            <H3>Cold Storage &amp; Refrigerated Warehouses</H3>
            <Body>
              Cold storage facilities require cameras and devices rated for temperature extremes. Access control for refrigerated areas prevents both theft and product-liability exposure from unauthorized entry.
            </Body>
          </div>
          <div>
            <H3>E-Commerce &amp; Fulfillment Centers</H3>
            <Body>
              High-volume facilities with mixed carrier access need dock-level surveillance, LPR at every entry, and shift-based access control. Chain-of-custody documentation reduces carrier claim disputes.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>Government &amp; Regulated Industrial Facilities</H3>
          <Body>
            Government and regulated facilities require NDAA-compliant hardware, credentialed personnel, and compliance documentation. FPI installs and manages systems meeting federal and state procurement standards.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Get a Security Plan for Your Facility Type</CTAButton>
        </div>
      </Section>

      {/* Technology */}
      <Section isMobile={isMobile}>
        <H2>Security Technology Built for Industrial Environments</H2>
        <Body>Industrial environments subject security hardware to dust, vibration, temperature extremes, and large open footprints — FPI deploys technology purpose-rated for those conditions.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>AI-Powered Detection — Beyond Motion Triggers</H3>
            <Body>
              AI-powered devices detect suspicious behavior in monitored areas — distinguishing humans from forklifts, catching loitering in restricted zones, and flagging perimeter breaches in real time. It cuts false-alert noise across large facility footprints.
            </Body>
          </div>
          <div>
            <H3>Solar Surveillance Towers — No Power Infrastructure Required</H3>
            <Body>
              Self-contained solar and battery units with AI cameras, two-way audio, and 4G/LTE connectivity deploy in outdoor yards, loading areas, and perimeter zones within 24–48 hours — no electrical permits, no cable runs, no infrastructure.
            </Body>
          </div>
          <div>
            <H3>License Plate Recognition at Entry &amp; Exit</H3>
            <Body>
              LPR cameras cross-reference plate data against watchlists in real time. Every vehicle entering or exiting is logged — flagging unauthorized plates at dock entrances before they access the facility. Explore our{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>FPI Client Portal — Real-Time Visibility for Operations Teams</H3>
            <Body>
              GPS patrol logs, incident reports, camera access, and alert history — all accessible from any device, 24/7. The operations director pulls coverage data before a quarterly review; the insurance manager exports patrol logs for an audit.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Warehouse &amp; Industrial Security</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What security services does FPI provide for warehouses?"
            answer="FPI provides a complete warehouse security stack: armed and unarmed guards, GPS-verified mobile patrol, autonomous solar surveillance towers, HD camera systems, 24/7 SOC monitoring, access control for restricted zones, and ongoing system maintenance — all managed through one client portal."
          />
          <FAQItem
            question="How does FPI prevent cargo theft in warehouses and distribution centers?"
            answer="FPI combines perimeter cameras with LPR at dock entries, autonomous AI surveillance towers for outdoor yards, GPS-tracked patrol on randomized schedules, and 24/7 SOC monitoring. Every access event and patrol visit is documented. CA, FL, and TX account for 54% of U.S. cargo theft — FPI operates in two of those three markets."
          />
          <FAQItem
            question="Do you provide security guards for warehouses in Florida and Texas?"
            answer="Yes. FPI deploys Chapter 493-licensed armed and unarmed security guards at warehouses, distribution centers, and industrial facilities across South Florida — including Miami-Dade, Broward, and Palm Beach County — and the Dallas–Fort Worth area in Texas."
          />
          <FAQItem
            question="What is an autonomous surveillance tower and how does it work for warehouses?"
            answer="An autonomous surveillance tower is a self-contained, solar-powered unit with AI cameras, two-way audio, and 4G/LTE connectivity. It deploys in outdoor yards and perimeter zones without power infrastructure — providing AI-powered detection and live monitoring coverage within 24–48 hours of deployment."
          />
          <FAQItem
            question="Can FPI integrate with our existing cameras and access control systems?"
            answer="Yes. FPI integrates with existing camera infrastructure and access control systems. Our SOC monitors your current camera feeds, and our technicians connect new equipment to your existing infrastructure where compatible. A site assessment determines integration scope."
          />
          <FAQItem
            question="How do I get a free warehouse security assessment?"
            answer="Contact FPI to schedule a no-cost warehouse security assessment. An FPI specialist conducts a site walk covering perimeter vulnerabilities, access points, camera coverage gaps, and patrol route design. Available across South Florida and the Dallas–Fort Worth area."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a warehouse security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Warehouse Security Assessment Today"
        body="FPI's no-cost assessment covers perimeter vulnerabilities, access point analysis, camera coverage gaps, autonomous device placement, and patrol route design — for warehouses, distribution centers, and industrial facilities across South Florida and the Dallas–Fort Worth area. The output is a written security proposal with cost-benefit analysis, not a sales presentation."
        ctaText="Get a Free Warehouse Security Assessment Today"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default WarehousePage;
