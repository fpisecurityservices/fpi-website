import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const H4 = ({ children }) => (
  <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, fontWeight: 700, color: '#0F3554', marginBottom: 8, lineHeight: 1.2 }}>{children}</h4>
);

const AccessControlPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Access Control Systems | Smart & Biometric Installation"
        description="Access control systems for businesses with keycard, biometric, and cloud-based solutions. Enhance security and streamline visitor management today. Contact us!"
        ogTitle="Smart Access Control Systems for Business | FPI Security"
        ogDescription="Keycard, biometric, mobile, and cloud-based access control — installed, integrated, and managed by one partner across six states."
        ogUrl="https://www.fpisecurity.com/access-control"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['Keycard & Badge', 'Biometric', 'Mobile & Cloud', 'Visitor Management']}
        title="Smart Access Control Systems for Your Business"
        intro="FPI installs and manages commercial access control systems across Florida, Texas, Georgia, Arizona, Nevada, and California — covering keycard, biometric, mobile, and cloud-based solutions. One partner from assessment through installation, integration, and ongoing credential management."
        ctaText="Get a Free Consultation for Your Access Control System"
        onCta={() => navigate('/contact')}
      />

      {/* Trust block */}
      <Section isMobile={isMobile}>
        <H2>Professional Access Control Solutions Trusted by Businesses, Office Buildings, and Enterprise Facilities</H2>
        <Body>FPI delivers end-to-end access control solutions — from single-door installations to enterprise-wide systems — across every market we serve, anchored by our South Florida headquarters and Dallas–Fort Worth operations.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40 }}>
          <div>
            <H3>Certified Access Control Installation — Licensed Technicians</H3>
            <Body>
              Certified installation is not a formality: it determines warranty validity, building-code compliance, and whether the system performs reliably under daily load. FPI's licensed technicians install to manufacturer specification and local code in every state we operate. Credential documentation is available on request.
            </Body>
          </div>
          <div>
            <H3>Cloud, On-Premise, and Hybrid Systems Available</H3>
            <Body>
              FPI is technology-agnostic: the right system architecture depends on your infrastructure, compliance requirements, and how your team manages access — not on FPI's preferred vendor. We design cloud, on-premise, and hybrid deployments and recommend what fits, not what's easiest to sell.
            </Body>
          </div>
        </div>
      </Section>

      {/* Why outdated ACS is a risk */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Why Outdated Access Control Is One of Your Biggest Security Risks</H2>
        <Body>Most commercial security breaches don't start with a forced entry — they start with a credential that was never deactivated. Read this section as a risk audit of your current setup, not a sales pitch.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>The Real Cost of Lost Keycards and Unrevoked Credentials</H3>
            <Body>
              Lost or unrevoked credentials create unauthorized access vulnerabilities — a former employee's keycard can open your building indefinitely if credentials aren't managed in real time. Every card that left with someone who no longer works for you is an active key to your facility, and legacy systems give you no way to know how many are still out there.
            </Body>
          </div>
          <div>
            <H3>Why Legacy Badge Access Control Systems Leave Your Building Exposed</H3>
            <Body>
              Legacy badge access control systems lack remote management, meaningful audit logs, and integration with modern surveillance. When a breach is traced to an outdated badge reader that couldn't be monitored or audited, the system itself becomes part of your liability exposure.
            </Body>
          </div>
          <div>
            <H3>What Happens When You Can't Track Who Enters Your Facility</H3>
            <Body>
              Modern access control technology logs every entry and exit event. Without that log, you have both a security gap — no way to reconstruct who was where — and a compliance risk: HIPAA (healthcare privacy law), GDPR (European data protection regulation), and SOC 2 audits all expect documented access records for sensitive areas.
            </Body>
          </div>
          <div>
            <H3>The Hidden Liability of Unmanaged Visitor Access</H3>
            <Body>
              Visitors with no logged entry and no temporary credential are an unaccounted-for presence in your building — a liability exposure that concentrates in healthcare, data centers, and multi-tenant buildings. Paper sign-in sheets don't verify identity, don't restrict where a visitor can go, and don't stand up in an audit. Visitor management closes this gap — covered in depth below.
            </Body>
          </div>
        </div>
      </Section>

      {/* What is a commercial ACS */}
      <Section isMobile={isMobile}>
        <H2>What Is a Commercial Access Control System and What Should It Include?</H2>
        <Body>
          A commercial access control system is a security infrastructure that restricts, monitors, and logs entry to physical spaces — replacing locks and keys with programmable credentials managed from a central platform. Access control systems restrict entry to authorized personnel only, and record everything else.
        </Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Core Components of a Modern Access Control System</H3>
            <Body>
              Five layers work together in every modern system. Readers and credentials sit at the door, where each access event begins. Controllers and panels apply the rules that grant or deny entry. Management software gives administrators one place to run users, zones, and schedules. Electronic locks execute the decision physically. And integrations connect the whole system to cameras, alarms, and visitor logs.
            </Body>
          </div>
          <div>
            <H3>How Keycard Access Systems and Badge Access Control Work</H3>
            <Body>
              The chain is simple: the credential (card or badge) presents to the reader, the reader passes it to the controller, and the controller checks programmed rules before releasing the lock. Keycard systems manage employee access across multiple zones — one card, different permissions per door, all set centrally.
            </Body>
          </div>
          <div>
            <H3>Biometric Access Control — Beyond Cards and PINs</H3>
            <Body>
              Fingerprint, facial recognition, and iris scanning eliminate credential-sharing and lost-card risks — the credential is the person. Biometric systems prevent unauthorized entry in sensitive areas, which is why they anchor access control in healthcare restricted zones and data centers.
            </Body>
          </div>
          <div>
            <H3>Mobile Access Control — Unlocking Doors with a Smartphone</H3>
            <Body>
              Mobile access control replaces physical keycards with smartphone credentials, using BLE (Bluetooth Low Energy) or NFC (near-field communication) to authenticate the phone at the reader. Credentials are provisioned and revoked remotely — no card printers, no pickup, no collection when someone leaves.
            </Body>
          </div>
          <div>
            <H3>Cloud-Based Access Control vs. On-Premise — Which Is Right for You?</H3>
            <Body>
              Cloud-based access control allows remote permission management from any device — plus multi-site dashboards and automatic updates. On-premise systems keep data on your hardware with no internet dependency, at the cost of local IT overhead. Hybrid deployments split the difference. The full decision guide is below.
            </Body>
          </div>
          <div>
            <H3>How Access Control Systems Integrate with Surveillance and Alarms</H3>
            <Body>
              FPI integrates access control with existing security infrastructure, so an access event triggers a camera pull at the same door — a denied badge swipe at 2 AM arrives as an alert with footage attached. Paired with{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>, the access log and the video record become one system.
            </Body>
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Access Control Technologies We Install and Support</H2>
        <Body>FPI installs and supports the full spectrum of commercial access control technologies — from legacy keycard upgrades to enterprise biometric and mobile systems.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Keycard Systems and Badge Access Control for Commercial Properties</H3>
            <Body>
              The most widely deployed technology, and still the workhorse of commercial access. FPI installs proximity, smart card, and RFID credential systems with zone-based management — and because revocation is instant, a lost card is a deactivation, not a rekeying project.
            </Body>
          </div>
          <div>
            <H3>Biometric Access Control — Fingerprint, Facial Recognition, and Iris Scanning</H3>
            <Body>
              The highest security tier: no credential to lose, share, or clone. FPI deploys biometric access control for server rooms, pharmaceutical storage, executive floors, and healthcare restricted areas — anywhere "who exactly entered" cannot be an open question.
            </Body>
          </div>
          <div>
            <H3>Mobile Access Control — App-Based and Smartphone Credential Systems</H3>
            <Body>
              BLE and NFC-based access via smartphone. IT departments provision or revoke credentials remotely without any physical interaction — onboarding happens before the new hire reaches the lobby, and offboarding happens the moment HR clicks the button.
            </Body>
          </div>
          <div>
            <H3>Cloud-Based Access Control for Multi-Location and Remote Management</H3>
            <Body>
              A single dashboard manages permissions across multiple sites, floors, or buildings — ideal for commercial real estate portfolios, retail chains, and distributed enterprises where access decisions happen at headquarters but doors are everywhere.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Request a System Design Consultation</CTAButton>
      </Section>

      {/* Key components */}
      <Section isMobile={isMobile}>
        <H2>Key Components of a Complete System</H2>
        <Body>A complete access control system is more than a reader at a door — it is a layered architecture of hardware, software, and integrations.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 32 }}>
          <div>
            <H4>Readers and credentials</H4>
            <Body>
              The entry point of every access event. Reader types span proximity, smart card, biometric, and mobile — and credential formats range from cards and fobs to fingerprints and phones. FPI matches reader type to each door's traffic and security level.
            </Body>
          </div>
          <div>
            <H4>Controllers and panels</H4>
            <Body>
              The decision-making layer: controllers receive reader input and apply programmed rules to grant or deny access in milliseconds. They can live on-premise or be cloud-hosted — a key architecture choice FPI works through during system design.
            </Body>
          </div>
          <div>
            <H4>Centralized management software</H4>
            <Body>
              The administrative layer: manage users, zones, schedules, and audit logs from a single dashboard, with mobile app access and multi-site management for portfolio operators. This is where a thousand doors become one screen.
            </Body>
          </div>
          <div>
            <H4>Electronic and wireless locks</H4>
            <Body>
              Electric strikes, magnetic locks, and wireless lock options execute the controller's decision. Fail-safe locks release on power loss (life-safety egress); fail-secure locks stay locked. Choosing correctly per door is a code-compliance requirement, not a preference.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H4>Integrations with video surveillance and alarms</H4>
          <Body>
            Access events can trigger camera pulls, alarm alerts, and visitor log entries — the integration layer that turns a standalone door reader into a full security ecosystem, connected to{' '}
            <InlineLink onClick={() => navigate('/remote-video-monitoring')}>live monitoring</InlineLink>{' '}
            when you want humans watching the events that matter.
          </Body>
        </div>
      </Section>

      {/* End-to-end services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Our End-to-End Commercial Access Control Services</H2>
        <Body>FPI manages every phase of access control deployment — from site assessment through installation, integration, and ongoing credential management. FPI installs access control systems for secured facilities in every state we serve.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Access Control Installation — Site Assessment to Full Deployment</H3>
            <Body>
              The workflow: vulnerability assessment → system design → hardware procurement → installation → testing → staff training. Every phase is FPI's responsibility, so the system that goes live matches the system that was designed — and your team knows how to run it on day one.
            </Body>
          </div>
          <div>
            <H3>System Design for Office Buildings, Campuses, and Multi-Tenant Properties</H3>
            <Body>
              FPI designs access control systems for office buildings across our markets — multi-floor zoning, tenant isolation, and shared-space access scheduling that keeps the loading dock, the gym, and the ninth floor on different rules without three separate systems.
            </Body>
          </div>
          <div>
            <H3>Visitor Management System Setup and Configuration</H3>
            <Body>
              Visitor management systems issue temporary credentials and log every entry. FPI configures digital check-in, ID verification, badge printing, and host notification — replacing the paper sign-in sheet with a system that actually knows who is in the building.
            </Body>
          </div>
          <div>
            <H3>Legacy System Upgrades — Migrate from Outdated Keycard Systems</H3>
            <Body>
              Many commercial buildings run 10–15-year-old keycard systems with no audit trail and no remote management. FPI migrates legacy infrastructure to modern platforms — reusing compatible wiring and hardware where possible, so the upgrade costs less than a rip-and-replace.
            </Body>
          </div>
          <div>
            <H3>Cloud-Based Access Control Migration and Management</H3>
            <Body>
              Moving from on-premise to cloud is a managed process: data migration, credential transfer, user training, and ongoing remote management. FPI runs the migration and stays on as the managing partner afterward.
            </Body>
          </div>
          <div>
            <H3>Ongoing Maintenance, Credential Management, and Remote Support</H3>
            <Body>
              FPI manages ongoing credential updates and remote access support across all our markets: access level changes, system health monitoring, firmware updates, and remote troubleshooting — covered under FPI{' '}
              <InlineLink onClick={() => navigate('/service-maintenance')}>maintenance plans</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Integration with Existing Surveillance Cameras and Alarm Systems</H3>
          <Body>
            FPI integrates access control with existing security infrastructure: an access event pulls the camera at that door, and an unauthorized attempt raises an alert — with{' '}
            <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>{' '}
            adding a live operator to verify what the system flagged.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>See How FPI Manages Your Full Access Control Deployment</CTAButton>
        </div>
      </Section>

      {/* Industries */}
      <Section isMobile={isMobile}>
        <H2>Access Control Systems for Every Commercial Environment</H2>
        <Body>FPI deploys access control systems across the highest-complexity commercial environments in every market we serve — each with a distinct access challenge.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Office Buildings — Floor-by-Floor Zoning</H3>
            <Body>
              Multi-tenant buildings require zone isolation: employees access only their floors, visitors are logged at reception, and after-hours access runs on schedules. One system, per-tenant rules, centrally managed.
            </Body>
          </div>
          <div>
            <H3>Healthcare Facilities — HIPAA-Compliant Access and Patient Area Control</H3>
            <Body>
              HIPAA — the federal law protecting patient health information — requires documented access logs for areas containing protected records. FPI deploys biometric access for medication storage, restricted labs, and record rooms, with audit trails built for the compliance officer, not just the security desk.
            </Body>
          </div>
          <div>
            <H3>Educational Campuses — Student, Staff, and Visitor Access Management</H3>
            <Body>
              A true multi-credential environment: staff keycards, student mobile credentials, and visitor temporary badges on one platform — with emergency lockdown integration that secures every controlled door at once.
            </Body>
          </div>
          <div>
            <H3>Warehousing and Industrial — Restricted Zone and Shift-Based Access</H3>
            <Body>
              Shift-based access scheduling admits each crew only during its hours; restricted zone isolation protects hazmat storage and high-value inventory; loading dock control logs every entry on the property's most exposed side.
            </Body>
          </div>
          <div>
            <H3>Retail and Multi-Location Brands — Centralized Cloud Access Control</H3>
            <Body>
              A cloud platform manages credentials across all locations from one dashboard: store managers control their own site, corporate controls the portfolio, and a terminated regional employee loses access to every store at once.
            </Body>
          </div>
          <div>
            <H3>Data Centers and Server Rooms — Biometric and Multi-Factor Entry</H3>
            <Body>
              The highest-security tier: biometric plus PIN plus time-based access — multi-factor authentication at the door. Biometric systems prevent unauthorized entry in sensitive areas, and the full audit trail feeds SOC 2 and compliance reporting directly.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Residential Complexes and HOAs — Tenant and Visitor Management</H3>
          <Body>
            Tenant mobile credentials, visitor intercom integration, delivery access scheduling, and common area control — with the documentation that matters to the board: properties with documented, active security programs see 16% fewer property crimes, and Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025).
          </Body>
        </div>
      </Section>

      {/* Visitor management */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Visitor Management Systems — The Missing Layer in Most Access Control Plans</H2>
        <Body>Most commercial access control systems manage employees — they leave visitor access as an afterthought. Visitor management closes that gap: visitor management systems issue temporary credentials and log every entry.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>What Is a Visitor Management System and Why Does It Matter?</H3>
            <Body>
              A visitor management system replaces paper sign-in logs with digital check-in, ID verification, temporary credential issuance, and real-time visitor tracking. It matters because the paper log answers none of the questions that count: who is this person, where are they allowed, and are they still in the building?
            </Body>
          </div>
          <div>
            <H3>How Visitor Management Integrates with Your Badge Access Control</H3>
            <Body>
              When a visitor checks in digitally, the system automatically generates a temporary badge credential — valid only for designated areas and only for the duration of the visit. The visitor badge runs on the same access control rails as employee badges, with an expiration built in.
            </Body>
          </div>
          <div>
            <H3>Digital Check-In, ID Verification, and Temporary Credential Issuance</H3>
            <Body>
              The workflow: visitor arrives → kiosk or host-initiated check-in → ID scanned and verified → host notified automatically → temporary badge credential issued → every subsequent access event logged. Reception stops being a bottleneck and starts being a checkpoint.
            </Body>
          </div>
          <div>
            <H3>Real-Time Visitor Logs and Compliance Reporting</H3>
            <Body>
              Visitor logs are time-stamped, searchable, and exportable — exactly what HIPAA audits, SOC 2 assessments, and insurance documentation requests ask for. When the auditor asks who accessed the records room in March, the answer is an export, not a filing cabinet.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Emergency Evacuation Accountability with Visitor Tracking</H3>
          <Body>
            In an emergency, the visitor management system produces an instant list of everyone on-site — employees and visitors alike — for evacuation accountability. When the building empties, you know exactly who should be at the muster point. That is a life-safety differentiator, not a convenience feature.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Add Visitor Management to Your Access Control Plan</CTAButton>
        </div>
      </Section>

      {/* Why FPI */}
      <Section isMobile={isMobile}>
        <H2>Why Businesses Choose Our Access Control Solutions Over the Competition</H2>
        <Body>Most access control providers sell hardware — FPI installs, integrates, and manages the entire system under one accountability umbrella.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>We Install, Integrate, and Manage — One Partner, Full Accountability</H3>
            <Body>
              No handoff between vendors: FPI handles assessment, installation, surveillance integration, visitor system setup, and ongoing management. One point of contact, one service agreement — and one party responsible when something needs attention.
            </Body>
          </div>
          <div>
            <H3>System-Agnostic Approach — We Work with Leading Hardware Brands</H3>
            <Body>
              FPI is not locked to one manufacturer. We recommend the right hardware for each client's infrastructure, budget, and compliance requirements — because the best system for your building is rarely the one a single-brand dealer happens to carry.
            </Body>
          </div>
          <div>
            <H3>Scalable from a Single Door to a 50-Building Enterprise</H3>
            <Body>
              The same platform that manages a 3-door office scales to a 50-building portfolio. Credentials, zones, and reporting grow with the business — no forklift upgrade when you open the next location.
            </Body>
          </div>
          <div>
            <H3>Remote Access Management — Change Permissions from Anywhere</H3>
            <Body>
              FPI manages ongoing credential updates and remote access support across every market we serve. HR terminates an employee — credentials are revoked from any device, immediately. The gap between "no longer employed" and "no longer has access" drops to seconds.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>No Proprietary Lock-In — Your System, Your Data</H3>
          <Body>
            FPI does not deploy proprietary hardware that traps clients. You retain ownership of your system and your data — if you ever change providers, the system stays and keeps working. We keep clients by performing, not by locking the door behind them.
          </Body>
        </div>
      </Section>

      {/* Decision guide */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>How to Choose the Right Access Control System for Your Business</H2>
        <Body>The right access control system depends on your property type, number of users, compliance requirements, and budget — not on what's easiest to install. Use this section as a decision tool, not a pitch.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Cloud-Based vs. On-Premise — A Decision Guide for Facility Managers</H3>
            <Body>
              Cloud: remote management from any device, automatic updates, and multi-site dashboards — at the cost of internet dependency and a subscription. On-premise: full data control and no internet requirement — at the cost of local IT burden and manual updates. Hybrid keeps decisions local while adding cloud visibility. Most multi-site operators land on cloud; most single-site, compliance-heavy facilities weigh hybrid.
            </Body>
          </div>
          <div>
            <H3>Keycard Systems vs. Biometric Access Control — Pros, Cons, and Use Cases</H3>
            <Body>
              Keycard: affordable, scalable, familiar to users — but cards get lost and shared. Biometric: the highest security tier with no credential to lose — at a higher upfront cost per door. In practice, most buildings mix them: keycards for general circulation, biometric for the rooms where certainty matters.
            </Body>
          </div>
          <div>
            <H3>How Many Access Points Does Your Building Actually Need to Control?</H3>
            <Body>
              Start with main entries, stairwells, server rooms, restricted zones, and visitor-facing reception. Over-controlling creates daily friction for staff; under-controlling creates the gaps incidents find. The right count comes from a walk-through, not a formula.
            </Body>
          </div>
          <div>
            <H3>What to Look for in Access Control Software</H3>
            <Body>
              The checklist: a complete audit trail, remote credential management, a multi-site dashboard, visitor management integration, alarm and camera integration, and compliance reporting you can export. Software missing any of these will be the reason you replace the system early.
            </Body>
          </div>
          <div>
            <H3>How Much Does a Commercial Access Control System Cost?</H3>
            <Body>
              Cost varies by the number of access points, credential type (card vs. biometric vs. mobile), software tier, cloud vs. on-premise architecture, visitor management add-ons, and integration complexity. FPI provides a line-item proposal after a free consultation — priced from your building, not from a package sheet.
            </Body>
          </div>
          <div>
            <H3>Planning for Scalability — Choose a System That Grows with You</H3>
            <Body>
              Avoid systems tied to a single manufacturer's roadmap. Choose platforms with open API integrations and modular credential expansion — so the system you buy for this building still fits when you have five.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Not Sure Which System Is Right for You? Talk to a Specialist</CTAButton>
      </Section>

      {/* FAQ */}
      <Section isMobile={isMobile}>
        <H2>Frequently Asked Questions About Access Control Systems</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What is the difference between keycard systems and biometric access control?"
            answer="Keycard systems use a physical credential — a card or fob — to grant access: convenient and affordable, but vulnerable to loss or sharing. Biometric systems authenticate a physical trait (fingerprint, face, or iris), so there is no credential to lose — the highest security tier for sensitive areas."
          />
          <FAQItem
            question="How does cloud-based access control work?"
            answer="Cloud-based access control stores permissions, audit logs, and system settings on a secure remote server accessible from any device. Administrators manage credentials, zones, and schedules without being on-site — one dashboard covering every door and every location."
          />
          <FAQItem
            question="Can mobile access control replace physical keycards entirely?"
            answer="Yes, in most commercial environments. Mobile access control uses BLE or NFC technology to authenticate a smartphone as the credential. IT administrators provision or revoke access remotely without issuing physical cards — and employees stop carrying a badge they can lose."
          />
          <FAQItem
            question="What is a visitor management system and how does it integrate with access control?"
            answer="A visitor management system digitizes check-in — capturing visitor ID, notifying the host, and issuing a temporary credential valid only for designated areas and the duration of the visit. It runs on the same access platform as employee credentials, with every visitor entry logged."
          />
          <FAQItem
            question="How is a commercial access control system installed?"
            answer="FPI begins with a site vulnerability assessment, designs the system architecture, installs readers, controllers, and locks, configures the management software, integrates with existing cameras, and trains your staff. Timeline varies with property size and door count."
          />
          <FAQItem
            question="Can you integrate access control with our existing security cameras?"
            answer="Yes. FPI integrates access control with existing surveillance infrastructure so every access event triggers a camera pull at that door — and unauthorized attempts arrive as alerts with footage attached. Pairing with FPI remote video monitoring adds live operator review."
          />
          <FAQItem
            question="What happens if a keycard is lost or an employee leaves?"
            answer="With a modern access control system, credentials are deactivated remotely in seconds — no lock rekeying required. Cloud-based systems let HR revoke access the moment an employee offboards, closing the gap that lost and unreturned cards leave open."
          />
          <FAQItem
            question="How do access control systems for office buildings handle multiple floors or zones?"
            answer="Zone-based access permissions are programmed per user or user group. An employee can access their floor and common areas but not executive floors or server rooms — and changes apply instantly from the management dashboard, not door by door."
          />
          <FAQItem
            question="Is biometric access control HIPAA or GDPR compliant?"
            answer="Biometric access control can be deployed in HIPAA- and GDPR-compliant configurations — the compliance depends on how biometric data is stored and processed. FPI designs systems with those requirements built in from the assessment phase, not patched on after installation."
          />
          <FAQItem
            question="What does access control installation cost for a mid-size commercial building?"
            answer="Cost depends on the number of access points, credential type, software tier, and integration complexity — a mid-size building with mixed keycard and biometric coverage prices very differently from a card-only deployment. FPI provides a free consultation and a line-item proposal for your specific building."
          />
        </div>
        <div style={{ marginTop: 32, background: '#F4F6F8', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to an access control specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Consultation for Your Access Control System"
        body="Tell us about your building and how your team manages access today — FPI will assess your needs and design a system around them. A consultation, not a sales call."
        ctaText="Get a Free Consultation for Your Access Control System"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default AccessControlPage;
