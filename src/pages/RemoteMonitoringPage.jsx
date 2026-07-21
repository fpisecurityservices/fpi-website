import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const RemoteMonitoringPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Remote Video Monitoring Service | 24/7 Live Protection"
        description="Remote video monitoring service with 24/7 live protection, video verification, and real-time alerts. Upgrade your security monitoring services today."
        ogTitle="Remote Video Monitoring | AI Detection + Live Human Response | FPI Security"
        ogDescription="24/7 remote video monitoring with AI detection and a live human operator reviewing every alert before police are called. Serving six states."
        ogUrl="https://www.fpisecurity.com/remote-video-monitoring"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['CCTV Monitoring', 'Virtual Guard', 'Remote Surveillance', '24/7 Live']}
        title="Remote Video Monitoring Service for Total 24/7 Security"
        intro="FPI provides 24/7 remote video monitoring across Florida, Texas, Georgia, Arizona, Nevada, and California — combining AI detection with live human operator review. Every alert is verified by a trained operator before police are called. Not a camera system — a prevention system."
        ctaText="Get a Free Consultation for Your Remote Video Monitoring System"
        onCta={() => navigate('/contact')}
      />

      {/* UVP */}
      <Section isMobile={isMobile}>
        <H2>The Only Remote Video Monitoring Service That Combines AI Detection with Live Human Response</H2>
        <Body style={{ maxWidth: 860 }}>
          FPI's remote video monitoring service guarantees that a live human operator reviews every alert before a police call is made. The AI layer watches your cameras continuously and flags anomalies; a trained operator confirms what the AI found, issues audio warnings, and dispatches verified alerts. Most security options either record without responding or respond without verifying. FPI does both — detection and judgment, working together on every alert, every hour of the day.
        </Body>
      </Section>

      {/* What is RVM */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>What Is a Remote Video Monitoring Service?</H2>
        <Body>
          A remote video monitoring service is a managed security solution where trained operators monitor live camera feeds from a central command center and respond to threats in real time — before harm occurs.
        </Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>How Remote CCTV Monitoring Differs from Traditional Security Cameras</H3>
            <Body>
              Traditional cameras record — they don't respond. A remote CCTV (closed-circuit television) monitoring service adds live human oversight: remote monitoring centers track surveillance feeds in real time, issue warnings the moment something is wrong, and dispatch verified alerts. The camera becomes the start of a response, not just a record of a loss.
            </Body>
          </div>
          <div>
            <H3>Why 24/7 Video Monitoring Is Now the Standard for Commercial Security</H3>
            <Body>
              Crime doesn't follow business hours. After-hours, weekends, and holidays are the highest-risk windows for commercial properties — exactly when static cameras record to an empty office and part-time coverage has gone home. 24/7 video monitoring closes that gap with continuous live coverage.
            </Body>
          </div>
          <div>
            <H3>Real-Time Video Monitoring vs. Recorded Surveillance: What Actually Prevents Crime</H3>
            <Body>
              Recorded footage documents crime after it happens. Real-time video monitoring prevents it — monitoring services detect alarms and notify authorities immediately, while operators intervene with audio warnings as events unfold. It is a fundamental shift in security philosophy: from evidence collection to active prevention.
            </Body>
          </div>
        </div>
      </Section>

      {/* Solutions suite */}
      <Section isMobile={isMobile}>
        <H2>A Comprehensive Suite of Video Monitoring Solutions</H2>
        <Body>FPI provides a full stack of remote video monitoring solutions — from live operator coverage to wireless mobile units.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Live Video Monitoring (24/7 Real-Time Coverage)</H3>
            <Body>
              The core service: trained operators monitor live camera feeds around the clock, detect anomalies as they develop, issue real-time audio warnings, and dispatch verified alerts. Coverage never sleeps, never takes a break, and never watches just one screen.
            </Body>
          </div>
          <div>
            <H3>Remote CCTV Monitoring Service for Commercial Properties</H3>
            <Body>
              For multi-zone commercial properties, operators manage multiple camera views simultaneously with AI-assisted anomaly flagging — so a 40-camera property gets meaningful attention on every zone, not a wall of ignored thumbnails.
            </Body>
          </div>
          <div>
            <H3>Video Verified Alarm Response</H3>
            <Body>
              When an alarm triggers, an operator reviews live footage before calling police. Video verification reduces false alarm dispatches by confirming threats on-screen — which eliminates false-dispatch fees, improves police response priority, and reduces your liability exposure. It is a legal and insurance differentiator, not just a convenience.
            </Body>
          </div>
          <div>
            <H3>Virtual Security Guard / Virtual Perimeter Guard</H3>
            <Body>
              A virtual guard monitors a defined perimeter via camera and issues real-time audio warnings to trespassers — at a fraction of the cost of a physical guard post. For posts that need a human on the ground, compare our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Video Surveillance Installation Services</H3>
            <Body>
              FPI installs surveillance systems for businesses across our markets — handling camera placement, wiring, NVR setup, and system configuration, not just the monitoring. Placement follows a site-specific vulnerability assessment, so cameras cover the zones that actually carry risk.
            </Body>
          </div>
          <div>
            <H3>Wireless Remote Video Monitoring System (Solar & Mobile Units)</H3>
            <Body>
              For sites without existing infrastructure: solar-powered, wireless camera units deployable within 24–48 hours. Ideal for construction sites, remote facilities, and temporary coverage — no trenching, no electrical work, no waiting on utilities.
            </Body>
          </div>
          <div>
            <H3>Video Intercom Systems & Access Control Integration</H3>
            <Body>
              Video intercoms let operators verify visitor identity before granting access — integrating monitoring with{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control</InlineLink>. Every intercom event is recorded to the NVR, creating a visual log of who requested entry and what was decided.
            </Body>
          </div>
          <div>
            <H3>Network Video Recorders (NVR) Setup and Management</H3>
            <Body>
              A network video recorder (NVR) stores encrypted footage locally and syncs to cloud backup. FPI configures retention periods to your compliance needs and manages retrieval when an incident requires footage — for police, insurers, or counsel.
            </Body>
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Our Technology: Combining AI and Real-Time Surveillance</H2>
        <Body>FPI's monitoring platform combines AI-powered video analytics with trained human operators — the AI detects anomalies, the human decides.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Active Video Monitoring</H3>
            <Body>
              Active monitoring means operators watch live feeds in real time — not just respond to triggered alarms. Trained operators manage alerts from multiple client locations simultaneously, with AI prioritizing what needs human eyes first. This is proactive security, not reactive recording.
            </Body>
          </div>
          <div>
            <H3>AI & Machine Learning: A System That Gets Smarter Over Time</H3>
            <Body>
              The AI analyzes movement patterns, distinguishes humans from animals, and learns site-specific baselines — so a raccoon at 2 AM stops generating alerts while a person at the fence line always does. Alert noise drops over time; real detections stand out.
            </Body>
          </div>
          <div>
            <H3>Network Video Recorders with Encrypted Cloud Backup</H3>
            <Body>
              Local NVR storage plus encrypted cloud sync means redundant footage retention. If local hardware is damaged, stolen, or destroyed, cloud footage is preserved — critical for insurance claims and legal proceedings where the footage is the case.
            </Body>
          </div>
          <div>
            <H3>Video Verification for Rapid Police Response</H3>
            <Body>
              When operators dispatch police with video-verified threat confirmation, response priority increases — many jurisdictions fast-track verified calls versus standard alarm calls. Video verification turns "an alarm went off" into "an operator is watching an intruder on camera right now."
            </Body>
          </div>
          <div>
            <H3>360° Smart Security Cameras: Night Vision, Smoke, Dust & Weather Resistant</H3>
            <Body>
              High-definition cameras cover blind spots in large facilities — with 360° fields of view, infrared night vision, and weatherproof housings rated for outdoor deployment. Built for construction sites, industrial yards, and dealership lots, not just climate-controlled lobbies.
            </Body>
          </div>
          <div>
            <H3>Two-Way Audio & Video Intercom Systems for Active Deterrence</H3>
            <Body>
              Operators use two-way audio to issue real-time verbal warnings to trespassers — often deterring incidents without any police dispatch. Hearing "You are on camera. Security has been notified. Leave the property now" ends most intrusions on the spot. Active deterrence, not passive recording.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Real-Time Video Monitoring Dashboard & Mobile App</H3>
          <Body>
            Clients access live feeds, alert history, and incident reports through the FPI client portal and mobile app — 24/7, from any device, with multi-site view for portfolio managers.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>See How Our System Works — Request a Demo</CTAButton>
        </div>
      </Section>

      {/* Industries */}
      <Section isMobile={isMobile}>
        <H2>Real-Time Video Surveillance to Prevent Theft and Vandalism</H2>
        <Body>FPI deploys remote video monitoring across the highest-risk property types in every market we serve — from South Florida to Southern California.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Construction Site Security — Stop Theft Before It Costs You</H3>
            <Body>
              Construction sites are prime targets for equipment and materials theft, especially overnight and on weekends. Wireless solar units deploy without infrastructure and move as the site evolves — monitored coverage from groundbreaking to punch list, with audio deterrence stopping most intrusions before anything is loaded onto a truck.
            </Body>
          </div>
          <div>
            <H3>Auto Dealership Video Surveillance — Protect Your Lot 24/7</H3>
            <Body>
              Miami-Dade County alone projects vehicle theft costs of $69.3 million in 2025 (CrimeGrade, 2025). Dealership lots hold millions in open-air inventory overnight. FPI monitors lots with AI detection and two-way audio deterrence, and integrates monitoring with GPS-verified patrol visits for layered coverage.
            </Body>
          </div>
          <div>
            <H3>Retail & Multi-Location Brand Protection</H3>
            <Body>
              Retail chains benefit from centralized monitoring across every location — one platform, one reporting portal, unified incident response. A regional loss-prevention manager sees all sites in a single dashboard instead of juggling vendors by market.
            </Body>
          </div>
          <div>
            <H3>Apartment & Residential Complex Security</H3>
            <Body>
              Operators monitor common areas, parking structures, and entry points, with video intercom integration for visitor verification. Residents get real peace of mind; management gets liability documentation for every incident in a common area.
            </Body>
          </div>
          <div>
            <H3>Oil, Gas & Remote Site Surveillance</H3>
            <Body>
              Remote and unmanned sites need coverage where no infrastructure exists. Wireless solar monitoring watches the perimeter 24/7 with AI detection, and operators escalate verified threats — no power, no trenching, no on-site staff required.
            </Body>
          </div>
          <div>
            <H3>Warehouses, Logistics & Industrial Properties</H3>
            <Body>
              California, Florida, and Texas account for 54% of all U.S. cargo theft (NICB, 2025) — three states where FPI operates monitoring programs daily. FPI monitors perimeters, verifies dock access events, and covers overnight hours when high-value inventory is most exposed.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Get a Custom Monitoring Plan for Your Property Type</CTAButton>
      </Section>

      {/* What makes us unique */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>What Makes Our Service Unique?</H2>
        <Body>Most security options either record without responding or respond without verifying. FPI does both.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Remote Video Monitoring vs. On-Site Security Guards: Cost & Effectiveness</H3>
            <Body>
              Remote monitoring covers more square footage per operator hour at a significantly lower cost — one operator watches zones that would take multiple fixed posts. Guards remain irreplaceable for high-contact situations: lobbies, access points, incident response. Most FPI clients treat this as a complementary decision, pairing monitoring with{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>on-site guards</InlineLink>{' '}
              where human presence matters.
            </Body>
          </div>
          <div>
            <H3>Our CCTV Monitoring Service vs. Basic Alarm Systems</H3>
            <Body>
              Alarm systems trigger — they don't verify. FPI's CCTV monitoring service adds a human layer that confirms the threat before dispatch. The result: fewer false alarms, higher police response priority, and reduced liability. Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025) — verified monitoring is part of what closes that gap.
            </Body>
          </div>
          <div>
            <H3>How We Eliminate False Alarms with Video Verification</H3>
            <Body>
              The workflow is simple and disciplined: AI flags an anomaly → a live operator reviews the feed → the operator confirms or dismisses → police are dispatched with video evidence only when the threat is real. That mechanism — human judgment on every alert — is what separates FPI from alarm-only systems.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3 style={{ fontSize: 20 }}>Cutting-Edge Video Surveillance Technology</H3>
          <Body>
            Behind the human response sits the full stack: AI analytics, encrypted NVR storage, cloud backup, a real-time mobile dashboard, and two-way audio — the infrastructure that makes verified response possible.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Compare Your Current Setup to FPI Remote Monitoring</CTAButton>
        </div>
      </Section>

      {/* FAQ */}
      <Section isMobile={isMobile}>
        <H2>Frequently Asked Questions About Remote Camera Monitoring Services</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What is a remote video monitoring service and how does it work?"
            answer="A remote video monitoring service connects your cameras to a central monitoring center where trained operators watch live feeds in real time. Operators detect threats as they develop, issue audio warnings through on-site speakers, and dispatch video-verified police calls — preventing incidents instead of recording them."
          />
          <FAQItem
            question="How is remote CCTV monitoring different from regular security cameras?"
            answer="Regular cameras record. Remote CCTV monitoring adds live human oversight — operators watch feeds in real time and respond to threats as they happen, not after the fact. The difference is between having evidence of a break-in and having a break-in interrupted."
          />
          <FAQItem
            question="What does 24/7 video monitoring include?"
            answer="FPI's 24/7 video monitoring includes live operator coverage, AI-assisted anomaly detection, real-time audio warnings, video verified alarm response, timestamped incident reports, and full client portal access — across every camera and every monitored location."
          />
          <FAQItem
            question="How fast is the response time on your real-time video monitoring system?"
            answer="Response follows a disciplined workflow: AI detects the anomaly, a live operator reviews the feed, verifies or dismisses it, and dispatches with video confirmation when the threat is real. Actual timing depends on your site configuration — contact FPI and we'll walk through verified response benchmarks for your property type."
          />
          <FAQItem
            question="Do you offer wireless remote video monitoring systems?"
            answer="Yes. FPI deploys wireless, solar-powered surveillance units with no infrastructure requirements — deployable within 24–48 hours for construction sites, remote facilities, and temporary coverage needs, with the same live operator monitoring as fixed installations."
          />
          <FAQItem
            question="What industries do you serve?"
            answer="FPI monitors construction sites, auto dealerships, retail and multi-location brands, apartment and residential complexes, oil and gas sites, and warehouses and industrial facilities — across Florida, Texas, Georgia, Arizona, Nevada, and California."
          />
          <FAQItem
            question="How does video verification reduce false alarms?"
            answer="Before calling police, a live operator reviews the footage to confirm the threat is real. Verified calls receive higher police response priority, false dispatches are eliminated, and you avoid the fees and desensitization that come with repeated false alarms."
          />
          <FAQItem
            question="Can I monitor my cameras live from a mobile app?"
            answer="Yes. The FPI client portal and mobile app provide 24/7 access to live feeds, alert history, and incident reports across all monitored locations — one login, every site, any device."
          />
          <FAQItem
            question="What is included in your video surveillance installation services?"
            answer="FPI handles site assessment, camera placement, wiring, NVR configuration, cloud backup setup, and operator onboarding. Installation follows a vulnerability assessment specific to your property — not a standard template — so coverage matches your actual risk."
          />
          <FAQItem
            question="Do your video intercom systems integrate with existing access control?"
            answer="Yes. FPI video intercom systems integrate with existing access control infrastructure — allowing operators to verify visitor identity on camera and grant or deny access remotely, with every event recorded for the access log."
          />
        </div>
        <div style={{ marginTop: 32, background: '#F4F6F8', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to a monitoring specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Consultation for Your Remote Video Monitoring System"
        body="Tell us about your property and cameras — FPI will design a monitoring program with AI detection, live operators, and video-verified response."
        ctaText="Get a Free Consultation for Your Remote Video Monitoring System"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default RemoteMonitoringPage;
