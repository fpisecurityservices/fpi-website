import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, QuickAnswer, ResultsTable, Testimonial, BulletList, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const Rio360CaseStudy = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Autonomous Security Replaced Our Guard | FPI Dealership Case"
        description="FPI replaced a security guard with RIO360 at a Florida car dealership — cutting costs and delivering 24/7 autonomous lot coverage. Get your free assessment."
        ogTitle="Cutting Dealership Security Costs with Autonomous AI | FPI Case Study"
        ogDescription="FPI replaced a traditional guard at a Florida dealership's off-site lot with the solar-powered RIO360 — 24/7 coverage without staffing costs and zero incidents."
        ogUrl="https://www.fpisecurity.com/case-studies/rio360-dealership-security-florida"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Case Studies', onClick: () => navigate('/insights/case-studies') },
        { label: 'RIO360 Cuts Dealership Security Costs — Florida' },
      ]} />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px 40px' : '64px 48px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
            {['Case Study', 'Autonomous Security', 'Florida Auto Dealership · Off-Site Lot'].map(t => (
              <span key={t} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,96,144,0.2)', color: '#8998B1', padding: '4px 10px', borderRadius: 4 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 34 : 48, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 8 }}>
            Cutting Dealership Security Costs with Autonomous AI
          </h1>
        </div>
      </div>

      {/* Quick answer */}
      <Section isMobile={isMobile} py="36px 48px" pyMobile="28px 24px">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <QuickAnswer isMobile={isMobile}>
            FPI Security Services replaced a traditional security guard at a Florida auto dealership's off-site lot with the RIO360 — a solar-powered, AI-equipped autonomous security device. The result: 24/7 coverage without staffing costs, zero incidents post-deployment, and full remote visibility for the management team. FPI deploys autonomous security devices in large facilities across South Florida and Texas.
          </QuickAnswer>
        </div>
      </Section>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* What is RIO360 */}
        <Section isMobile={isMobile}>
          <H2>What Is RIO360? Solar-Powered AI Security — No Guard Required</H2>
          <Body>
            The RIO360 by RAD is an{' '}
            <InlineLink onClick={() => navigate('/autonomous-surveillance')}>autonomous security device</InlineLink>{' '}
            built for large open environments where traditional guards are expensive to maintain or impractical to deploy.
          </Body>
          <Body>
            Unlike fixed video surveillance cameras, the RIO360 operates autonomously — autonomous robots patrol premises without human intervention. It requires no on-site power infrastructure, no network cabling, and no continuous human oversight. Where a guard post has shift gaps, call-outs, and documentation failures, the RIO360 does not. It is purpose-built for car lots, construction sites, and any property where after-hours coverage is the highest-risk window.
          </Body>
          <div style={{ marginTop: 8 }}>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 700, color: '#0F3554', marginBottom: 12 }}>Core capabilities:</div>
            <BulletList items={[
              'Solar-powered — continuous 24/7 operation with no utility dependency',
              'Cellular connectivity — real-time communication without on-site network infrastructure',
              'AI-powered anomaly detection — identifies behavior patterns and unauthorized access, not just movement',
              "Two-way audio — live deterrence via loudspeaker, real-time talk-down from FPI's SOC",
              "Direct integration with FPI's Security Operations Center for verified, human-reviewed response",
            ]} />
          </div>
        </Section>

        {/* Client background */}
        <Section isMobile={isMobile} py="32px 48px" pyMobile="24px 24px">
          <H2>Client Background: Florida Auto Dealership</H2>
          <Body>
            A well-established Florida automobile dealership managed a remote off-site inventory lot housing a variety of vehicles — including high-value models — requiring continuous monitoring outside standard operating hours.
          </Body>
          <Body style={{ marginBottom: 0 }}>
            The management team's initial request was traditional guard services. FPI's site assessment identified a better solution.
          </Body>
        </Section>

        {/* Challenge */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <H2>The Challenge: 24/7 Security for a Remote Off-Site Lot</H2>
          <Body>
            Providing reliable, cost-effective security for a remote vehicle lot is a problem traditional guards handle poorly. Shift changes, call-outs, and documentation gaps create exactly the windows that theft rings exploit — the case where autonomous patrol devices reduce operational costs for large properties.
          </Body>
          <Body>
            Miami-Dade County projects $69.3M in vehicle theft costs for 2025 (CrimeGrade, 2025). Criminal rings have stolen 30+ vehicles from 20+ Florida dealers using key programmers — causing losses exceeding $2.5M (Patch, 2024). For a dealership managing high-value inventory in a remote lot, one overnight incident can cost more than a year of security.
          </Body>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 700, color: '#0F3554', margin: '8px 0 12px' }}>The dealership's security requirements were specific:</div>
          <BulletList items={[
            'Round-the-clock deterrence and monitoring — not just during staffed hours',
            'Autonomous operation with no dependency on local power or network infrastructure',
            'Immediate response capability when unauthorized activity was detected',
            'A measurable reduction in security expenditure versus a full-time guard post',
          ]} />
        </Section>

        {/* Solution */}
        <Section isMobile={isMobile}>
          <H2>The Solution: Replacing the Guard with RIO360</H2>
          <Body>
            After the site assessment, FPI recommended replacing the guard post with a single RIO360 unit. FPI deploys autonomous security devices in large facilities, and the three advantages were immediate: superior coverage, a fraction of the ongoing cost, and no shift gaps, call-outs, or documentation failures.
          </Body>
          <Divider />
          <H3>Phase 1 — Site Assessment and Deployment Planning</H3>
          <Body>
            FPI's security team mapped the off-site lot — identifying high-risk access points, coverage gaps, and the optimal device position. The priority: maximum lot coverage and visible perimeter deterrence. AI-powered devices detect suspicious behavior in monitored areas, and placement determines detection quality — a unit that can be seen changes behavior before an incident occurs.
          </Body>
          <H3>Phase 2 — Installation and SOC Integration</H3>
          <Body>
            The solar-powered RIO360 was installed at the identified location — no on-site power connection or cabling required — and was operational immediately. Autonomous security units stream live video to monitoring centers, and FPI provides 24/7 remote monitoring in South Florida: feeds were integrated directly with FPI's{' '}
            <InlineLink onClick={() => navigate('/remote-video-monitoring')}>Security Operations Center</InlineLink>, and the client received portal access before the first patrol ran.
          </Body>
          <H3>Phase 3 — Team Training and Protocol Integration</H3>
          <Body>
            FPI provided management team training. FPI integrates autonomous devices with surveillance systems, connecting the RIO360 to existing{' '}
            <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance cameras</InlineLink>{' '}and protocols.
          </Body>
          <BulletList items={[
            'Interpreting RIO360 alerts and SOC notifications in real time',
            'Understanding autonomous deterrence — how the talk-down audio system functions',
            'Accessing patrol logs and incident documentation through the FPI client portal',
          ]} />
          <Body style={{ marginBottom: 0 }}>Fully operational within days of deployment — no disruption to daily operations.</Body>
        </Section>

        {/* Results */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <H2>The Results: Cost Savings, Enhanced Coverage, Zero Incidents</H2>
          <Body>The RIO360 delivered measurable improvements across every key security metric:</Body>
          <ResultsTable
            isMobile={isMobile}
            headers={['Metric', 'Before RIO360', 'After RIO360']}
            rows={[
              ['Security coverage', 'Business hours only — guard shifts', '24/7 autonomous — no gaps'],
              ['Labor & staffing costs', 'Ongoing — salary + overhead', 'Eliminated'],
              ['Infrastructure required', 'On-site power + check-in systems', 'None — solar + cellular'],
              ['Response to unauthorized access', 'Delayed — guard-dependent', 'Immediate — AI detection + SOC alert'],
              ['Incident documentation', 'Manual guard logs', 'Automated — accessible via client portal'],
              ['Client satisfaction', 'Moderate — guard reliability variable', 'High — significant improvement reported'],
            ]}
          />
          <Body style={{ marginTop: 16, marginBottom: 0 }}>
            The dealership reported a significant reduction in security expenditure alongside improved peace of mind. Autonomous patrol devices reduce operational costs for large properties, delivering consistent, uninterrupted coverage — unaffected by weather, shift changes, or staffing gaps — at a fraction of the guard cost.
          </Body>
        </Section>

        {/* Beyond security */}
        <Section isMobile={isMobile}>
          <H2>Beyond Security: What the Dealership Gained</H2>
          <Body>The RIO360 deployment delivered value beyond theft deterrence. The management team gained:</Body>
          <BulletList items={[
            'Remote visibility — lot status from any device, any hour, without calling anyone',
            'Documented coverage — automated logs that satisfy insurance audit requirements',
            'Operational intelligence — activity data supporting inventory management decisions',
            'Vendor simplicity — one FPI contract covering device, SOC monitoring, and maintenance',
          ]} />
          <Body style={{ marginBottom: 0 }}>
            For a dealership managing inventory, financing, and service operations, one less vendor is a real win. The RIO360 handles the lot. The team handles the business.
          </Body>
        </Section>

        {/* Testimonial */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <Testimonial
            isMobile={isMobile}
            quote="We are incredibly pleased with the RIO360 solution provided by FPI Security Services. It has significantly reduced our security costs while enhancing the overall security of our dealership's off-site lot. The seamless operation and real-time deterrence have made a noticeable difference in preventing incidents. We highly recommend FPI Security Services for their innovative and cost-effective security solutions."
            attribution="Dealership Management Team, Florida Auto Dealership Client"
          />
        </Section>

        {/* Is RIO360 right for you */}
        <Section isMobile={isMobile}>
          <H2>Is RIO360 the Right Solution for Your Dealership?</H2>
          <Body>
            RIO360 delivers the strongest ROI for dealerships managing remote or off-site lots with high-value inventory and recurring guard labor costs that don't justify the coverage gaps they create. FPI deploys autonomous security robots for campuses and parking areas across FL and TX.
          </Body>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 700, color: '#0F3554', margin: '8px 0 12px' }}>Ideal deployment scenarios:</div>
          <div>
            {[
              ['Off-site vehicle storage lots', ' with no on-site staff after hours', null],
              ['High-value inventory lots', ' — luxury, performance, and fleet vehicles requiring continuous deterrence', '/industries/car-dealership-security'],
              ['Locations with prior guard no-shows', ' or documentation failures that caused incidents', null],
              ['Properties where insurance requires', ' documented, verifiable security coverage', null],
              ['Multi-location dealership groups', ' needing consistent security standards across all sites', null],
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
            FPI Security Services serves dealerships across South Florida — Miami-Dade, Broward, and Palm Beach counties — and the Dallas–Fort Worth metro in Texas.
          </Body>
        </Section>

        {/* FAQ */}
        <Section bg="#F4F6F8" isMobile={isMobile}>
          <H2>Frequently Asked Questions — Autonomous Security for Car Dealerships</H2>
          <Divider />
          <FAQItem
            question="Can an autonomous device replace a security guard at a car dealership?"
            answer="In remote lot environments, yes. For off-site storage and after-hours perimeter monitoring, the RIO360 provides equal or superior coverage at a fraction of the ongoing guard cost. Human guards remain valuable for access control and visitor interaction — but for unmanned perimeter coverage, autonomous devices outperform guards on cost and consistency."
          />
          <FAQItem
            question="How does RIO360 operate without power or internet infrastructure?"
            answer="The RIO360 runs on integrated solar panels — no external power source required. It connects to FPI's Security Operations Center via cellular network, requiring no on-site cabling or internet infrastructure. This makes it deployable in remote lots, temporary storage locations, and any property without existing security infrastructure."
          />
          <FAQItem
            question="What happens when RIO360 detects unauthorized access?"
            answer="The RIO360's AI layer identifies the anomaly and triggers an immediate response: live video streams to FPI's SOC, a trained operator reviews and verifies the detection, and real-time verbal deterrence is issued through the unit's loudspeaker. Law enforcement notification follows verified detections — no automated dispatch without human review."
          />
          <FAQItem
            question="How much does it cost compared to a security guard?"
            answer="A traditional guard post carries ongoing costs: hourly rates, overtime, scheduling overhead, training, and turnover. The RIO360 replaces that with a single service agreement covering device, SOC monitoring, and maintenance — typically at a fraction of the annual guard cost. Contact FPI for a site-specific cost comparison for your lot."
          />
          <FAQItem
            question="Is RIO360 available in South Florida and Texas?"
            answer={<>FPI Security Services deploys the RIO360 across South Florida — Miami-Dade, Broward, and Palm Beach counties — and in the Dallas–Fort Worth metro in Texas. <InlineLink onClick={() => navigate('/contact')}>Contact FPI</InlineLink> for a site assessment and deployment timeline for your location.</>}
          />
          <FAQItem
            question="Does RIO360 integrate with existing dealership security systems?"
            answer={<>Yes. FPI integrates the RIO360 with existing surveillance cameras, <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>, and dealership security protocols. All RIO360 data — patrol logs, detection events, and incident footage — is accessible through the FPI client portal alongside any other FPI-managed services at your locations.</>}
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
        title="Protect Your Lot — Autonomous Security by FPI"
        body="FPI offers a no-cost site assessment for RIO360 deployment — covering coverage gap analysis and a site-specific cost comparison against your current guard contract. Available across South Florida and the Dallas–Fort Worth area, with a written proposal as the output."
        ctaText="Request Your Free Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default Rio360CaseStudy;
