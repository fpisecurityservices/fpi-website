import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const SocPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security Operations Center | FPI's 24/7 Command Infrastructure"
        description="FPI SOC delivers real-time alerts, AI video analytics, LPR & remote monitoring for businesses across six states. Smart protection. Contact us today!"
        ogTitle="Security Operations Center | FPI's 24/7 Command Infrastructure"
        ogDescription="The 24/7 command infrastructure behind every FPI service — AI detection, live operators, and verified response across six states."
        ogUrl="https://www.fpisecurity.com/technology/soc"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['24/7 Command Infrastructure', 'AI + Human', 'Multi-Site', 'In-House — Not Outsourced']}
        title="Security Operations Center: Complete Protection for Your Business"
        intro="FPI's Security Operations Center monitors client properties 24/7 from a centralized command infrastructure — it is not a service you purchase, it is the engine behind every service FPI delivers across Florida, Texas, Georgia, Arizona, Nevada, and California. Everything the SOC detects, you see in real time through the FPI client dashboard."
        ctaText="See How Our SOC Protects Your Business"
        onCta={() => navigate('/contact')}
      />

      {/* What is a SOC */}
      <Section isMobile={isMobile}>
        <H2>What Is a Security Operations Center (SOC)?</H2>
        <Body>
          A Security Operations Center is a centralized command facility where trained operators and AI-powered systems work together to monitor, detect, verify, and respond to physical security threats across multiple client locations — 24 hours a day, 7 days a week. Most SOC definitions online refer to cybersecurity; FPI's SOC commands physical security — cameras, patrols, access control, and alarms.
        </Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40 }}>
          <div>
            <H3>How Our SOC Protects Your Business 24/7</H3>
            <Body>
              Remote monitoring centers track surveillance feeds in real time — and at FPI, that means live camera feeds from client properties reviewed by trained operators using AI-assisted analytics. When the AI flags a threat, the operator verifies it on-screen before any action is taken: no false alarm dispatches, no reactive-only response, no unwatched cameras recording an incident nobody sees until morning.
            </Body>
          </div>
          <div>
            <H3>SOC Services vs. Traditional Security Guards</H3>
            <Body>
              These layers complement each other — they don't compete. Guards provide on-site physical presence and human response; the SOC provides centralized intelligence, multi-site visibility, and verified response coordination. The SOC detects, verifies, and responds to threats before they escalate into incidents — and when a threat needs hands on-site, it coordinates with{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>FPI security guards</InlineLink>{' '}
              in the field.
            </Body>
          </div>
        </div>
      </Section>

      {/* Core capabilities */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Our Core SOC Capabilities</H2>
        <Body>FPI's SOC integrates eight specialized capabilities into a single coordinated command system — each one powered by AI and reviewed by trained human operators.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>AI Video Analytics & Intelligent Monitoring</H3>
            <Body>
              AI-powered devices detect suspicious behavior in monitored areas — loitering, perimeter breaches, unauthorized access — beyond simple motion triggers. This artificial intelligence security layer applies AI threat detection at a scale no human team can match, then hands each flag to an operator: the AI detects, the human decides. The result is proactive response without false alarm noise.{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>Learn more about our Remote Video Monitoring →</InlineLink>
            </Body>
          </div>
          <div>
            <H3>Remote Video Monitoring</H3>
            <Body>
              FPI provides 24/7 remote monitoring from the SOC — operators watch live feeds from multiple client locations simultaneously. When AI flags an anomaly, the operator reviews the live feed and takes action: audio warning, police dispatch, or client notification. Around the clock, with no coverage gaps.{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>Explore our 24/7 Remote Video Monitoring →</InlineLink>
            </Body>
          </div>
          <div>
            <H3>Autonomous Response</H3>
            <Body>
              Autonomous security units stream live video to monitoring centers — and autonomous response systems execute pre-programmed deterrence actions the moment AI confirms a threat: activating lights, triggering audio warnings, or locking access points, with no human delay. The SOC oversees every automated action and escalates when judgment is needed.{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>See our Surveillance Systems →</InlineLink>
            </Body>
          </div>
          <div>
            <H3>Loitering Deterrence</H3>
            <Body>
              Loitering detection identifies individuals who remain in a designated zone beyond a threshold time — a pre-incident signal, not yet an incident. SOC operators issue a real-time verbal warning through talk-down audio before the situation escalates. Especially effective for retail entrances, parking structures, and perimeter zones after hours.
            </Body>
          </div>
          <div>
            <H3>Talk-Down Audio</H3>
            <Body>
              Talk-down audio enables SOC operators to issue real-time verbal warnings to trespassers — the operator speaks directly to the individual through on-site speakers, from the command center, the moment unauthorized presence is detected. Most incidents end right there: no physical intervention, no police dispatch, no report of a loss the next morning.
            </Body>
          </div>
          <div>
            <H3>Virtual Guarding</H3>
            <Body>
              Virtual guarding is remote officer-level oversight of a property via camera — no physical guard post required. SOC operators monitor the property exactly as an on-site guard would, with the ability to trigger audio warnings, contact emergency services, or notify on-site personnel. Cost-effective for large areas and after-hours coverage.{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>Compare with On-Site Security Guards →</InlineLink>
            </Body>
          </div>
          <div>
            <H3>License Plate Recognition (LPR)</H3>
            <Body>
              License plate recognition cameras log every vehicle entering and exiting monitored facilities, cross-referencing plate data against watchlists in real time. The SOC receives an instant alert for any flagged plate. With Miami-Dade County alone projecting $69.3 million in vehicle theft costs in 2025 (CrimeGrade, 2025), LPR is critical for dealerships, warehouses, gated communities, and logistics facilities.{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>Explore our Surveillance Camera Technology →</InlineLink>
            </Body>
          </div>
          <div>
            <H3>Access Control Solutions</H3>
            <Body>
              The SOC monitors access control events in real time — door opens, denied credentials, after-hours entry attempts. When access control triggers an alert, the SOC operator pulls the camera at that door and responds before the situation escalates. The badge reader and the camera stop being separate systems.{' '}
              <InlineLink onClick={() => navigate('/access-control')}>Learn about our Access Control Systems →</InlineLink>
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Request a No-Cost SOC Consultation</CTAButton>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Choose FPI's Security Operations Center</H2>
        <Body>FPI's SOC is not a contracted third-party monitoring center — it is FPI's own command infrastructure, operated by FPI's own trained personnel, with no third-party monitoring center involvement anywhere in the chain.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Proprietary Infrastructure — Not an Outsourced Call Center</H3>
            <Body>
              Most security companies outsource their monitoring to a third-party alarm center that has never seen your property and doesn't employ your guards. FPI's SOC is operated in-house — same company, same standards, same accountability as the officers and technicians in the field. No handoff, no information gap, no "that's the monitoring company's fault."
            </Body>
          </div>
          <div>
            <H3>AI + Human Intelligence — Neither Alone Is Enough</H3>
            <Body>
              Intelligent video analytics detect at a scale and speed no human team can match. Humans verify context and make judgment calls no algorithm can replicate. FPI's SOC runs both layers in parallel: the AI flags the anomaly, the operator confirms the threat and decides the response.
            </Body>
          </div>
          <div>
            <H3>Multi-Site Visibility From a Single Command Center</H3>
            <Body>
              Trained operators manage alerts from multiple client locations at once. Whether you have one property or twenty — in one state or across all six we serve — the SOC provides unified visibility with consistent response protocols at every location.
            </Body>
          </div>
          <div>
            <H3>Connected to the FPI Technology Platform</H3>
            <Body>
              Everything the SOC detects and documents is accessible to you in real time through the FPI Technology Platform — live camera feeds, incident reports, GPS patrol logs, and alert history. The SOC is the engine; the platform is the dashboard.{' '}
              <InlineLink onClick={() => navigate('/technology/platform')}>See what you access in the FPI Platform →</InlineLink>
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>See What Our SOC Looks Like for Your Property</CTAButton>
      </Section>

      {/* How it works */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>How Our Security Operations Center Works</H2>
        <Body>FPI's SOC operates through a defined sequence — detect, verify, respond, document. Each step is executed in real time, every time.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Real-Time Alerts & Alarm Response</H3>
            <Body>
              Monitoring services detect alarms and notify authorities immediately — but at FPI, verification comes first. An AI or sensor triggers an alert → the SOC operator receives the notification → reviews live footage → verifies the threat → takes action: audio warning, police dispatch, or client notification. Verified alerts get priority response; false triggers get dismissed without wasting anyone's night.
            </Body>
          </div>
          <div>
            <H3>Incident Response Process</H3>
            <Body>
              The full chain runs detection → operator verification → escalation decision → response execution → documentation. The SOC detects, verifies, and responds to threats before they escalate into incidents — and every verified incident generates a timestamped report in the FPI client portal, so the record exists before you ask for it.
            </Body>
          </div>
          <div>
            <H3>24/7 Remote Monitoring Infrastructure</H3>
            <Body>
              The technical chain is purpose-built, not a repurposed alarm center: networked cameras → encrypted video feeds → SOC monitoring stations → AI analytics layer → operator review → documented response. Autonomous security units and fixed cameras alike stream live video into the same infrastructure, watched by the same team.
            </Body>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <a href="tel:8003744316" style={{ textDecoration: 'none' }}>
            <CTAButton onClick={() => {}}>Talk to a SOC Specialist — Available 24/7</CTAButton>
          </a>
        </div>
      </Section>

      {/* Benefits */}
      <Section isMobile={isMobile}>
        <H2>Benefits of a Security Operations Center</H2>
        <Body>A Security Operations Center shifts security from reactive to proactive — the difference between documenting what happened and preventing it from happening.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>24/7 Real-Time Monitoring</H3>
            <Body>
              Threats do not follow business hours. FPI's SOC operates around the clock — monitoring, detecting, and responding at 2 AM on a Sunday with the same capability as 2 PM on a Tuesday. The property is never unwatched.
            </Body>
          </div>
          <div>
            <H3>Proactive Threat Detection & Response</H3>
            <Body>
              Monitoring services reduce response time during security incidents — and proactive detection means the SOC identifies pre-incident behavior first: loitering, perimeter breaches, unauthorized vehicle activity. With the average cargo theft incident costing $202,000 (NICB, 2025), intervening before the incident is the whole business case.
            </Body>
          </div>
          <div>
            <H3>Cost-Efficiency and Risk Reduction</H3>
            <Body>
              The SOC covers sites and zones that would take a far larger physical guard force to replicate: more coverage, faster response, and documented accountability at a lower cost per monitored zone. The insurance math agrees — Florida businesses without adequate security pay 30–40% higher premiums (TechPro Security, 2025).
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Get a Free Security Operations Assessment</CTAButton>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About SOC Services</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What does a Security Operations Center do?"
            answer="FPI's Security Operations Center is a 24/7 command facility where trained operators and AI-powered systems monitor live camera feeds, detect threats, verify incidents, and coordinate response across all client properties in the six states we serve. It is the infrastructure behind every FPI service — not a separate product."
          />
          <FAQItem
            question="How does AI video analytics improve security?"
            answer="AI video analytics analyze live camera feeds to detect anomalies — loitering, perimeter breaches, unauthorized access — faster and at greater scale than human monitoring alone. The AI flags potential threats; a trained SOC operator reviews and confirms before any action is taken."
          />
          <FAQItem
            question="How fast is your incident response time?"
            answer="SOC operators review AI-flagged alerts immediately upon notification, and response action — audio warning, police dispatch, or client notification — follows operator verification within the same workflow. Exact timing depends on your site configuration; contact FPI for verified response benchmarks for your property type."
          />
          <FAQItem
            question="What is the difference between SOC and traditional security?"
            answer="Traditional security relies on physical guards at fixed posts — effective but limited in coverage. FPI's SOC adds a centralized intelligence layer: AI detection, live operator monitoring, and verified response across multiple sites simultaneously, at a lower cost per monitored zone."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to a SOC specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Protect Your Business Today"
        body="FPI's Security Operations Center is monitoring properties across six states right now. If your business operates without this layer of intelligence and response capability, it is operating with a gap — and a no-cost consultation reveals exactly where that gap is and what closing it looks like for your property."
        ctaText="Protect Your Business Today — Contact FPI"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default SocPage;
