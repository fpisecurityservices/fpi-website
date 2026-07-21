import { useNavigate } from 'react-router-dom';
import { Phone, Monitor, Radio, FileText, MapPin, Bell, Lock } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const moduleIcons = { Monitor, Radio, FileText, MapPin, Bell, Lock };

const ModuleHeader = ({ icon, children }) => {
  const IconComp = moduleIcons[icon];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
      <div style={{ width: 38, height: 38, background: '#E8EDF4', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <IconComp size={18} style={{ color: '#006090' }} />
      </div>
      <H3 style={{ marginBottom: 0 }}>{children}</H3>
    </div>
  );
};

const PlatformPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="FPI Proprietary Security Platform | Built In-House"
        description="FPI built its own security platform — client dashboard, GPS tracking, incident reporting & automated alerts. Real-time visibility for every property. See how it works."
        ogTitle="FPI Proprietary Security Platform | Built In-House"
        ogDescription="Real-time GPS tracking, automated security incident reporting, and a 24/7 client dashboard — the platform behind every FPI service."
        ogUrl="https://www.fpisecurity.com/fpi-technology-platform"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['Proprietary', 'Built In-House', '6 Modules', 'Any Device, 24/7']}
        title="Built From the Ground Up for Security Operations"
        intro="FPI Security Services built its own proprietary security platform — not an adaptation of off-the-shelf software. It handles security incident reporting, live GPS patrol tracking, dispatch status, and security analytics, all accessible to clients from any device, 24/7. FPI's platform is the technology infrastructure behind every service FPI delivers across the six states we serve."
        ctaText="Request a Platform Demo & Free Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Why FPI built it */}
      <Section isMobile={isMobile}>
        <H2>Why FPI Built Its Own Security Platform</H2>
        <Body>Most security companies manage their operations with off-the-shelf software built for generic guard deployment — FPI evaluated every option and found none of them adequate for the accountability and visibility standards FPI clients require.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Generic Software Was Not Built for Client Accountability</H3>
            <Body>
              Off-the-shelf security monitoring software tracks guards for the company — not for the client. FPI's clients needed to see the same data FPI sees: live GPS routes, incident timestamps, officer locations, and alert history, accessible from a phone at 11 PM without calling anyone. No existing platform provided that. So FPI built one that does.
            </Body>
          </div>
          <div>
            <H3>Incident Reporting Required More Than a Text Log</H3>
            <Body>
              Standard guard apps generate text-based incident logs. FPI needed security incident reporting with photos, timestamps, GPS coordinates, and automatic client delivery — because when a board asks "what happened at gate 3 last Tuesday at 2 AM," the answer needs to be accessible in 30 seconds, not reconstructed from a paper log.
            </Body>
          </div>
          <div>
            <H3>Patrol Verification Needed to Be Unfakeable</H3>
            <Body>
              Paper patrol logs can be completed in advance. GPS-logged patrol routes with timestamps cannot. FPI needed a system where every{' '}
              <InlineLink onClick={() => navigate('/services/patrol')}>patrol visit</InlineLink>{' '}
              is documented with GPS coordinates, time, and photo — so clients hold proof that rounds were completed, not just a guard's word that they were.
            </Body>
          </div>
        </div>
      </Section>

      {/* Six modules */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>The FPI Platform — 6 Modules, One Dashboard</H2>
        <Body>FPI's platform integrates six operational modules into one client-accessible dashboard — giving property managers, HOA boards, and operations directors complete visibility into their security program from any device.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <ModuleHeader icon="Monitor">Client Dashboard — Real-Time Visibility Across All Your Sites</ModuleHeader>
            <Body>
              The client dashboard aggregates all security activity across every property in real time — patrol status, incident reports, alert history, and officer locations — in one interface, desktop or mobile. The HOA board president opens it before Thursday's meeting. The operations director pulls it during an ownership call. No calls, no reports requested, no waiting.
            </Body>
          </div>
          <div>
            <ModuleHeader icon="Radio">Live Dispatch — Instant Officer Communication & Response</ModuleHeader>
            <Body>
              Live dispatch connects FPI's command center directly to every officer in the field — real-time deployment, route adjustments, and incident response without radio delays. When the{' '}
              <InlineLink onClick={() => navigate('/security-operations-center')}>Security Operations Center</InlineLink>{' '}
              detects an anomaly, dispatch reaches the closest officer immediately, and every dispatch event is logged with timestamp and outcome.
            </Body>
          </div>
          <div>
            <ModuleHeader icon="FileText">Incident Reports — Automated Documentation with Photos</ModuleHeader>
            <Body>
              This is security incident reporting the way it should work: every FPI officer generates a timestamped, photo-documented report at the moment of occurrence — automatically delivered to the client portal with GPS coordinates, officer ID, and incident classification. No paper logs, no after-shift reconstruction, no manual submission. You have the report before the officer leaves the scene — and a searchable archive of every report since your program began.
            </Body>
          </div>
          <div>
            <ModuleHeader icon="MapPin">GPS Tracking — Live Patrol Routes & Timestamps</ModuleHeader>
            <Body>
              GPS security tracking on every patrol unit broadcasts live coordinates — visible on your dashboard as a moving route with timestamps at every checkpoint. You see exactly when officers arrived at each location, how long they stayed, and the route they covered. Every completed round is logged and exportable for insurance and compliance documentation.
            </Body>
          </div>
          <div>
            <ModuleHeader icon="Bell">Automated Alerts — Push Notifications for Critical Events</ModuleHeader>
            <Body>
              When a defined security event occurs — an access control breach, a{' '}
              <InlineLink onClick={() => navigate('/services/remote')}>camera anomaly</InlineLink>, a patrol gap, or a filed incident report — the platform pushes a notification to designated contacts instantly. The property manager gets the alert on their phone before they check email. Thresholds are configured per property and per event type.
            </Body>
          </div>
          <div>
            <ModuleHeader icon="Lock">Access Control — Integrated Entry Management & Audit Logs</ModuleHeader>
            <Body>
              Every credential event — door access, denied entries, after-hours attempts — is logged in a searchable audit trail in the client portal. When someone asks "who accessed the server room at 3 AM last Wednesday," the answer is in the portal in seconds: timestamped, exportable, and ready for compliance review through this security management platform.
            </Body>
          </div>
        </div>
      </Section>

      {/* SOC connection */}
      <Section isMobile={isMobile}>
        <H2>How the Platform Connects to FPI's Security Operations Center</H2>
        <Body style={{ maxWidth: 860 }}>
          The FPI platform is what clients see — the{' '}
          <InlineLink onClick={() => navigate('/security-operations-center')}>Security Operations Center</InlineLink>{' '}
          is what acts on it. When the platform detects an anomaly through AI cameras, access control events, or GPS patrol gaps, the alert reaches a live SOC operator who reviews and responds in real time. The platform and the SOC are two layers of the same system — one shows you everything, the other makes sure something is done about it.
        </Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40 }}>
          <div>
            <H3>Platform Data → SOC Action → Client Documentation</H3>
            <Body>
              The chain runs end to end: the platform detects an event → a SOC operator reviews it live → response is dispatched → an incident report is generated → the client portal updates → you receive an automated alert. Every step documented, every step accessible. You never have to ask what happened — the platform tells you before you think to ask.
            </Body>
          </div>
          <div>
            <H3>One View — Every Service, Every Property, Every Shift</H3>
            <Body>
              Whether you have one guard post or a 20-site portfolio, the platform presents the same unified view — patrol GPS, incident reports, access control logs, and camera alerts in one dashboard. Multi-site clients see all properties simultaneously; the operations director sees the full picture before the ownership call.
            </Body>
          </div>
        </div>
      </Section>

      {/* Feature list */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Platform Features — Complete List</H2>
        <Body>FPI's security operations platform was built feature-by-feature around the operational requirements of commercial security management.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Core Platform Features</H3>
            <Body>
              Real-time GPS tracking for all patrol units. Live incident reporting with photo documentation. A client-facing dashboard with 24/7 access. Integrated dispatch with automated alerts. Post order compliance monitoring. Monthly and on-demand analytics reports. And cybersecurity firmware patching for all connected devices — because a security platform that ignores the security of its own hardware isn't finished.
            </Body>
          </div>
          <div>
            <H3>Analytics & Reporting</H3>
            <Body>
              The security analytics module generates monthly reports covering patrol coverage rates, incident frequency by zone, response time averages, and access control event summaries. On-demand reports are available anytime through the portal — this security reporting software never makes you wait for an end-of-month cycle.
            </Body>
          </div>
          <div>
            <H3>Mobile Access — Any Device, Any Time</H3>
            <Body>
              The full platform is accessible from desktop, tablet, or mobile. Property managers check patrol status from a phone at 11 PM; board members pull last week's incident reports before a Saturday morning meeting. No desktop required, no VPN, no IT setup.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section isMobile={isMobile}>
        <H2>Frequently Asked Questions About FPI's Security Platform</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What technology platform does FPI Security Services use?"
            answer="FPI Security Services operates a proprietary security platform built in-house — not off-the-shelf software. The platform provides clients with real-time GPS patrol tracking, automated incident reporting with photo documentation, live dispatch integration, a 24/7 client dashboard, automated alerts, and integrated access control audit logs — accessible from any device, 24/7."
          />
          <FAQItem
            question="What is security incident reporting and how does FPI handle it?"
            answer="Security incident reporting is the documentation of security events — what happened, when, where, and who responded. FPI's platform generates automated, photo-documented incident reports with GPS coordinates and timestamps at the moment of occurrence, delivered to the client portal without manual submission — accessible before the officer leaves the scene."
          />
          <FAQItem
            question="Can clients access FPI's security platform from their phone?"
            answer="Yes. The FPI client portal is fully mobile-accessible — GPS patrol logs, incident reports, access control audit trails, and alert history are all available from any device, 24/7. No desktop, VPN, or IT setup required. Property managers and HOA boards access their security data from wherever they are."
          />
          <FAQItem
            question="How does FPI's GPS tracking work for security patrols?"
            answer="Every FPI patrol unit broadcasts live GPS coordinates to the client dashboard — showing real-time location, patrol route, and timestamps at every checkpoint. Completed rounds are logged with coordinates and timestamps, creating an exportable patrol record for insurance audits and compliance documentation."
          />
          <FAQItem
            question="Is FPI's security platform available to all clients?"
            answer="Yes. Every FPI client receives portal access regardless of service type. Whether you have a single guard post, mobile patrol, remote monitoring, or a full integrated security program, the platform provides unified visibility into all activity across your properties."
          />
        </div>
        <div style={{ marginTop: 32, background: '#F4F6F8', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Want a walkthrough of the portal?</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="See the Platform in Action"
        body="FPI's proprietary platform delivers the visibility and documentation most security companies cannot provide — because most security companies use software they did not build. A no-cost security assessment includes a walkthrough of the client portal specific to your property type and coverage program, available across all six states we serve."
        ctaText="Request a Platform Demo & Free Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default PlatformPage;
