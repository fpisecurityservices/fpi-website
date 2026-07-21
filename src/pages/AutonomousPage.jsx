import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, StepCard, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const AutonomousPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Autonomous Security Robots | AI Patrol for Your Property"
        description="FPI autonomous security robots patrol 24/7, detect anomalies with AI & feed live data to our ops center. Extend coverage without adding headcount."
        ogTitle="Autonomous Security Robots | AI-Powered Patrol | FPI Security"
        ogDescription="AI-powered mobile patrol robots that extend security coverage without adding headcount — managed, monitored, and integrated by FPI across six states."
        ogUrl="https://www.fpisecurity.com/services/autonomous"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['Robotics', 'AI-Assisted', 'Extended Coverage', 'SOC Integrated']}
        title="Autonomous Security Robots: AI-Powered Patrol Without Added Headcount"
        intro="FPI deploys autonomous security robots across Florida, Texas, Georgia, Arizona, Nevada, and California — AI-powered mobile patrol units that cover large areas 24/7 and feed live data directly into the FPI Security Operations Center. FPI autonomous robots extend security coverage without increasing headcount: one robot supplements a human guard team to cover ground that additional staffing would cost several times more to patrol."
        ctaText="Request a Free Autonomous Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* What are they */}
      <Section isMobile={isMobile}>
        <H2>What Are Autonomous Security Robots?</H2>
        <Body>
          An autonomous security robot is a self-propelled mobile unit equipped with AI cameras, sensors, two-way audio, and real-time connectivity that patrols defined areas on programmed routes — detecting anomalies and streaming live data to a central monitoring center without requiring constant human direction.
        </Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>How Autonomous Robots Differ from Fixed Security Cameras</H3>
            <Body>
              Fixed cameras cover a fixed field of view — what happens outside the frame goes unseen. Autonomous robots patrol premises without human intervention, moving through a defined zone, changing angles, and detecting from multiple vantage points on every patrol cycle. Coverage follows the robot instead of ending at the lens.
            </Body>
          </div>
          <div>
            <H3>How Autonomous Robots Differ from Security Guards</H3>
            <Body>
              Guards make judgment calls, de-escalate human confrontations, and respond physically. Robots patrol continuously, detect with AI, and stream footage — without fatigue, distraction, or scheduling gaps. They are complementary: the robot handles perimeter surveillance while the guard handles human interaction.
            </Body>
          </div>
          <div>
            <H3>The Role of AI in Autonomous Security Patrol</H3>
            <Body>
              AI-powered devices detect suspicious behavior in monitored areas — the artificial intelligence security layer distinguishes humans from animals, flags loitering in restricted zones, identifies abandoned objects, and applies AI threat detection beyond simple motion triggers. The result: less alert noise, more real detections.
            </Body>
          </div>
        </div>
      </Section>

      {/* What's included */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>What FPI's Autonomous Security Robot Service Includes</H2>
        <Body>FPI's autonomous robot service is not hardware rental — it is a managed patrol program that includes deployment, configuration, SOC integration, and ongoing monitoring.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Autonomous Mobile Patrol on Defined Routes</H3>
            <Body>
              FPI deploys autonomous security devices in large facilities with patrol routes programmed to the property — covering high-risk zones, perimeter paths, parking areas, and blind spots on schedules that can be randomized to prevent predictable patterns.
            </Body>
          </div>
          <div>
            <H3>AI-Powered Anomaly Detection — Beyond Motion Triggers</H3>
            <Body>
              The robot's AI layer analyzes its camera feeds in real time — detecting humans in restricted zones, vehicles in unauthorized areas, and behavioral anomalies that standard motion sensors miss. Every detection generates an alert to the FPI Security Operations Center.
            </Body>
          </div>
          <div>
            <H3>Real-Time Video & Audio Feeds to the FPI SOC</H3>
            <Body>
              Autonomous security units stream live video to monitoring centers — every frame the robot captures flows into FPI's Security Operations Center (SOC), where trained operators watch, verify, and respond through our{' '}
              <InlineLink onClick={() => navigate('/services/remote')}>remote monitoring operation</InlineLink>. The robot detects; the human decides.
            </Body>
          </div>
          <div>
            <H3>Two-Way Audio — Active Deterrence While Patrolling</H3>
            <Body>
              The robot's onboard speaker lets SOC operators issue real-time verbal warnings to individuals in restricted areas — deterring incidents without physical intervention. Most unauthorized-presence situations end with a verbal warning, before any escalation.
            </Body>
          </div>
          <div>
            <H3>Direct Integration with FPI's Surveillance Platform</H3>
            <Body>
              FPI integrates autonomous devices with surveillance systems: robot footage feeds the same platform as{' '}
              <InlineLink onClick={() => navigate('/services/surveillance')}>fixed cameras</InlineLink>{' '}
              and patrol GPS logs — one unified security picture instead of another siloed feed.
            </Body>
          </div>
          <div>
            <H3>Client Portal Access — Every Patrol, Every Detection, Visible</H3>
            <Body>
              Robot patrol logs, AI detection events, and incident footage are all in the FPI client portal — from any device, 24/7. An Operations Director reviews last night's coverage before the morning standup, without a single vendor call.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>See How FPI's Robots Integrate with Your Security Plan</CTAButton>
      </Section>

      {/* ROSA proof block */}
      <Section isMobile={isMobile}>
        <H2>Autonomous Security in Action — Real Results from South Florida</H2>
        <Body style={{ maxWidth: 860 }}>
          FPI deployed ROSA at Florida Gun Center in Hialeah — a high-traffic firearms retailer managing a large inventory across an active shopping plaza. Within days of deployment, ROSA autonomously detected unauthorized individuals accessing the property, activated its onboard speaker to announce detection, and notified law enforcement. The subjects fled and did not return.
        </Body>
        <Body style={{ maxWidth: 860 }}>
          The result: zero repeat incidents, a measurable reduction in utility costs from eliminated water theft, and a security team that could verify coverage without being on-site.
        </Body>
        <CTAButton variant="secondary" onClick={() => navigate('/contact')}>Ask Us About the ROSA Deployment</CTAButton>
      </Section>

      {/* Cost comparison */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Autonomous Security Robots vs. Hiring Additional Guards</H2>
        <Body>Adding a security guard adds salary, benefits, scheduling overhead, and training costs — adding an autonomous robot adds coverage at a fraction of that cost. Autonomous patrol devices reduce operational costs for large properties.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>The Real Cost of Adding a Security Guard</H3>
            <Body>
              A guard post costs more than the hourly rate: annual salary plus benefits, overtime, scheduling gaps, training, and turnover all accumulate over a 12-month contract. Meanwhile, the insurance math still applies — Florida businesses without adequate security pay 30–40% higher premiums (TechPro Security, 2025), so under-covering is its own cost.
            </Body>
          </div>
          <div>
            <H3>What an Autonomous Robot Covers That a Guard Cannot</H3>
            <Body>
              A robot patrols continuously without breaks, shift changes, or fatigue — holding a consistent pace across a large parking lot or campus perimeter. Those are exactly the zones that go underserved when guard staffing is at minimum.
            </Body>
          </div>
          <div>
            <H3>The Force Multiplier Model — 1 Guard + 1 Robot</H3>
            <Body>
              The most effective deployment pairs the robot with{' '}
              <InlineLink onClick={() => navigate('/services/officers')}>on-site security guards</InlineLink>: the human handles access points, visitor interaction, and incident response while the robot patrols the perimeter, parking areas, and secondary zones simultaneously. One guard plus one robot covers ground that would otherwise take three posts.
            </Body>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section isMobile={isMobile}>
        <H2>How FPI's Autonomous Security Robot Service Works</H2>
        <Body>FPI's autonomous robot service operates as a managed program — not a hardware deployment. From site assessment to active patrol, every step is handled by FPI.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
          <StepCard number="1" title="Step 1 — Site Assessment & Route Design">
            <Body style={{ marginBottom: 0 }}>
              FPI maps the property — high-risk zones, blind spots, and optimal patrol paths. The robot's patrol program is designed around the actual vulnerability profile of the site, not a default factory setting.
            </Body>
          </StepCard>
          <StepCard number="2" title="Step 2 — Robot Deployment & SOC Integration">
            <Body style={{ marginBottom: 0 }}>
              FPI deploys the robot, programs the routes, and integrates the unit's live feeds into the Security Operations Center. The client receives portal access before the first patrol runs.
            </Body>
          </StepCard>
          <StepCard number="3" title="Step 3 — 24/7 Patrol with Live SOC Monitoring">
            <Body style={{ marginBottom: 0 }}>
              The robot patrols continuously while remote monitoring centers track surveillance feeds in real time — reviewing AI alerts and responding to verified detections as they happen.
            </Body>
          </StepCard>
          <StepCard number="4" title="Step 4 — Continuous Optimization & Reporting">
            <Body style={{ marginBottom: 0 }}>
              FPI reviews patrol data and detection patterns monthly — adjusting routes, timing, and sensitivity thresholds based on real incident data. Monthly reports arrive through the client portal.
            </Body>
          </StepCard>
        </div>
      </Section>

      {/* Where it delivers value */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Where Autonomous Security Robots Deliver the Most Value</H2>
        <Body>Autonomous security robots deliver maximum ROI in large, open, or under-staffed coverage zones where adding human guards would be cost-prohibitive.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Large Campuses & Corporate Properties</H3>
            <Body>
              Multiple buildings, parking structures, and outdoor zones — the robot patrols between fixed guard posts, covering the gaps in human coverage efficiently across the whole campus.
            </Body>
          </div>
          <div>
            <H3>Parking Lots & Parking Structures</H3>
            <Body>
              Parking areas are among the highest-risk zones for vehicle theft, vandalism, and personal safety incidents — and among the hardest to staff cost-effectively. A robot patrols the full structure continuously, level by level.
            </Body>
          </div>
          <div>
            <H3>Warehouses & Industrial Facilities</H3>
            <Body>
              FPI deploys autonomous security robots for campuses and industrial sites across our markets. With California, Florida, and Texas accounting for 54% of U.S. cargo theft and the average incident costing $202,000 (NICB, 2025), continuous perimeter patrol between guard posts is a high-return layer for{' '}
              <InlineLink onClick={() => navigate('/industries')}>warehouse and industrial properties</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Retail Centers & Shopping Plazas</H3>
            <Body>
              After hours, retail risk concentrates in parking lots, loading docks, and service entrances. The robot patrols those zones continuously overnight, when staffing is at its minimum and incidents cluster.
            </Body>
          </div>
          <div>
            <H3>HOA Communities & Residential Complexes</H3>
            <Body>
              Robot patrol supplements overnight guard coverage in{' '}
              <InlineLink onClick={() => navigate('/industries')}>gated communities</InlineLink>{' '}
              — covering amenity areas, parking lots, and perimeter zones that a single overnight guard cannot monitor simultaneously.
            </Body>
          </div>
          <div>
            <H3>Construction Sites & Temporary Deployments</H3>
            <Body>
              Robots deploy rapidly to active{' '}
              <InlineLink onClick={() => navigate('/industries')}>construction sites</InlineLink>{' '}
              — patrolling equipment yards and material storage areas through the overnight and weekend windows when sites are most vulnerable.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Get a Robot Deployment Plan for Your Property</CTAButton>
      </Section>

      {/* Why FPI */}
      <Section isMobile={isMobile}>
        <H2>Why Choose FPI for Autonomous Security Robot Deployment</H2>
        <Body>Most autonomous security robot providers deliver hardware — FPI delivers a managed security program where the robot is one component of an integrated protection system.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Managed Service — Not a Robot Rental</H3>
            <Body>
              FPI owns the deployment, configuration, monitoring, and maintenance of the robot. You get a managed security program — not a piece of hardware to figure out. One service agreement, one point of contact.
            </Body>
          </div>
          <div>
            <H3>SOC Integration — Every Detection Reviewed by a Human</H3>
            <Body>
              The robot's AI flags anomalies; a live SOC operator reviews the footage and decides the response. No automated police dispatch without human verification — judgment stays in the loop on every alert.
            </Body>
          </div>
          <div>
            <H3>One Platform — Robot + Guards + Cameras + Patrol in One View</H3>
            <Body>
              The FPI client portal shows robot patrol logs, guard GPS data, fixed camera feeds, and incident reports in one unified dashboard. The Operations Director sees the full security picture — not siloed reports from separate vendors.
            </Body>
          </div>
          <div>
            <H3>Scalable Deployment Across Multiple Sites</H3>
            <Body>
              FPI manages robot deployments across multiple properties under one service agreement with centralized reporting. One location or ten, the platform scales without changing providers.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Autonomous Security Robots</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What does an autonomous security robot do?"
            answer="An autonomous security robot patrols defined areas on programmed routes, detects anomalies with AI cameras and sensors, streams live video to a monitoring center, and issues real-time verbal warnings through its onboard speaker — operating continuously without breaks or scheduling gaps."
          />
          <FAQItem
            question="Can autonomous security robots replace security guards?"
            answer="No — and FPI does not deploy them as replacements. Autonomous robots are force multipliers: they extend coverage to large patrol zones where adding a human guard would be cost-prohibitive, while human officers handle access control, visitor interaction, and incident response."
          />
          <FAQItem
            question="How does the robot connect to FPI's monitoring center?"
            answer="FPI's autonomous robots stream live video and AI detection alerts directly to the FPI Security Operations Center over an encrypted connection. Trained operators monitor feeds in real time and respond to verified detections — the robot detects, the human decides."
          />
          <FAQItem
            question="What areas are best suited for autonomous security robot patrol?"
            answer="Autonomous robots deliver the most value in large, open coverage zones: corporate campuses, parking structures, warehouse perimeters, retail centers, and construction sites. They cover the ground between fixed guard posts cost-effectively — especially during overnight and weekend hours."
          />
          <FAQItem
            question="How much does an autonomous security robot service cost?"
            answer="Cost depends on property size, number of units, patrol complexity, and monitoring requirements. For large coverage zones, FPI autonomous robot service is typically more cost-effective than adding a full-time guard post. Contact FPI for a site-specific proposal with real numbers for your property."
          />
          <FAQItem
            question="Do FPI autonomous robots work indoors and outdoors?"
            answer="Yes — FPI deploys autonomous security robots for both indoor and outdoor environments, depending on unit specifications. Outdoor units carry weatherproof housings rated for the environments they patrol. FPI selects the appropriate unit during the site assessment."
          />
          <FAQItem
            question="How quickly can autonomous robots be deployed to a new site?"
            answer="Following a site assessment and route design, FPI can deploy autonomous security robots and configure SOC integration within days. The timeline depends on property complexity and the number of units required — contact FPI for a deployment schedule for your specific site."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to an autonomous security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="See How Autonomous Security Robots Can Extend Your Coverage"
        body="FPI offers a no-cost autonomous security assessment — patrol zone mapping, coverage gap analysis, and a site-specific recommendation comparing your current coverage model to a robot deployment. Available for commercial properties across all six states we serve."
        ctaText="Request a Free Autonomous Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default AutonomousPage;
