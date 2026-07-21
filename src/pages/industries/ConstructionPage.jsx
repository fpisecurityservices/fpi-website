import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const ConstructionPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Construction Site Security Services | FPI FL & TX"
        description="FPI provides construction site security: armed guards, solar surveillance trailers & 24/7 monitoring for active sites in FL & TX. Free assessment."
        ogTitle="Construction Site Security Services for Active Jobsites | FPI"
        ogDescription="Armed overnight guards, GPS patrol, and solar surveillance trailers that deploy without power infrastructure — operational within 24 hours."
        ogUrl="https://www.fpisecurity.com/industries/construction-site-security"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'Construction Site Security' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['Solar Trailers', 'Armed Overnight Guards', '24/7 SOC Monitoring', 'GPS Patrol Logs']}
        title="Construction Site Security Services for Active Jobsites in FL & TX"
        intro="FPI provides professional construction site security across South Florida and Texas — armed overnight guards, GPS-tracked patrol, and solar surveillance trailers that deploy without power infrastructure. FPI deploys solar surveillance trailers to construction sites without power infrastructure, so coverage does not wait on the utility company. FPI can have security on a new construction site within 24 hours of an assessment."
        ctaText="Get a Free Construction Site Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Why high risk */}
      <Section isMobile={isMobile}>
        <H2>Why Construction Sites Are the Most Vulnerable Job Sites</H2>
        <Body>Construction sites are among the most theft-vulnerable environments in commercial real estate — high-value equipment, open perimeters, no permanent infrastructure, and predictable off-hours windows make them prime targets. Construction sites face the highest theft risk during overnight hours and weekends.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>The Real Cost of Construction Theft &amp; Vandalism</H3>
            <Body>
              The average construction theft loss is $53,000 per incident, and the construction industry loses more than $1 billion annually to equipment theft (National Equipment Register, 2024). The damage compounds past the equipment itself: project delay, insurance claim, and subcontractor dispute. Only 21% of stolen construction equipment is ever recovered — which is why surveillance systems provide video evidence after incidents, but prevention beats recovery every time.
            </Body>
          </div>
          <div>
            <H3>Overnight &amp; Weekend Vulnerability Windows</H3>
            <Body>
              Most construction theft occurs Friday night through Monday morning — when the site is empty, the perimeter is unsecured, and response time is slowest. Heavy equipment, copper, and materials staged in laydown yards are the primary targets, and they sit exposed for the 60+ hours no one is on site.
            </Body>
          </div>
          <div>
            <H3>No Infrastructure — No Power, No Wifi, No Fixed Perimeter</H3>
            <Body>
              Traditional security cameras require power outlets and wifi. Most active construction sites have neither in laydown yards, parking areas, or perimeter zones. This infrastructure gap is the reason most construction sites are under-secured — and the reason FPI's solar surveillance trailers exist.
            </Body>
          </div>
          <div>
            <H3>Multiple Access Points &amp; High Subcontractor Turnover</H3>
            <Body>
              Active sites have multiple entry points used by dozens of subcontractors, delivery drivers, and inspectors every day. Credential management and access logging are impossible without a structured system — creating documented, unauthorized-access exposure that lands on the GC when something goes wrong.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>OSHA Liability &amp; Insurance Exposure Without Documentation</H3>
          <Body>
            Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025). Documented security coverage — GPS patrol logs, surveillance footage, access records — reduces those costs and provides the OSHA (Occupational Safety and Health Administration) compliance documentation required if a site incident occurs.
          </Body>
        </div>
      </Section>

      {/* Services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Construction Site Security Services</H2>
        <Body>FPI provides a complete construction site security program — from armed overnight guards and GPS patrol to solar surveillance trailers and 24/7 SOC monitoring — deployable across South Florida and Texas. FPI provides armed overnight security guards for active construction sites in South Florida and every market we serve.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Armed &amp; Unarmed Security Guards for Construction Sites</H3>
            <Body>
              Armed officers secure high-risk locations 24/7 — overnight posts, gate access, and high-value equipment areas. Unarmed officers handle daytime visitor management and access control. All are Chapter 493-licensed (or state equivalent) and site-briefed before deployment. Explore our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Overnight &amp; Weekend Patrol Services</H3>
            <Body>
              FPI offers patrol visit services in South Florida and beyond, and patrol visits deter trespassing on commercial premises. GPS-tracked vehicles cover the full site perimeter on randomized schedules — every visit logged with timestamp, GPS route, and photo. This is the coverage that matters from Friday night through Monday morning. Explore our{' '}
              <InlineLink onClick={() => navigate('/mobile-patrol')}>mobile patrol services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Solar Surveillance Trailers — Deploy Anywhere, No Power Required</H3>
            <Body>
              FPI deploys solar surveillance trailers to construction sites without power infrastructure — self-contained solar and battery units with AI cameras, two-way audio, and 4G/LTE connectivity. No electrical permits, no cable runs, no wifi. FPI deploys autonomous security devices in large facilities and repositions them as the site evolves — move the trailer when the high-risk zone shifts. Operational within 24 hours. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>CCTV &amp; Construction Site Camera Systems</H3>
            <Body>
              FPI installs surveillance systems for businesses in Florida and across our markets — fixed CCTV for site offices, main entry gates, and permanent structures, with AI-powered detection that distinguishes humans from animals and flags perimeter breaches after hours. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>construction CCTV systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>24/7 Remote Monitoring by FPI's SOC</H3>
            <Body>
              Autonomous security units stream live video to monitoring centers. FPI's Security Operations Center watches feeds from solar trailers and fixed cameras across the site — AI flags anomalies, operators verify and respond in real time, and every incident generates a timestamped report. Explore our{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Access Control for Construction Site Gates &amp; Restricted Zones</H3>
            <Body>
              Keycard and credential-based access control for main gates, equipment storage, and restricted zones. Every entry event is logged — critical for subcontractor accountability and OSHA compliance documentation. Explore our{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>Fire Watch Security Officers</H3>
          <Body>
            Licensed fire watch officers for sites with hot work permits, temporary power systems, or fire suppression outages during construction phases — available 24/7 on short notice across South Florida and Texas.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Request a Security Plan for Your Active Jobsite</CTAButton>
        </div>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Construction Companies Choose FPI</H2>
        <Body>Construction companies choose FPI because standard security solutions fail on active construction sites — and FPI builds programs specifically for sites without power, without wifi, and without predictable perimeters.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Solar Trailers Ready in 24 Hours — No Infrastructure Required</H3>
            <Body>
              FPI can deploy a solar surveillance trailer to a new construction site within 24 hours of an assessment — no electrical permits, no contractor coordination, no network setup. The site is covered before the weekend, not after the next incident.
            </Body>
          </div>
          <div>
            <H3>GPS-Verified Patrol Logs for Insurance &amp; OSHA Documentation</H3>
            <Body>
              Every FPI patrol generates a GPS-verified, timestamped log in the client portal. When the insurance adjuster asks for proof of coverage after a theft, the project manager pulls the patrol history — no phone calls. The same documentation supports OSHA site safety reviews.
            </Body>
          </div>
          <div>
            <H3>Repositionable Security as the Project Evolves</H3>
            <Body>
              Unlike fixed camera installations, FPI's solar trailers move with the project. As high-risk zones shift — foundation to framing to finishing — FPI repositions coverage accordingly. One security program adapts to the full project lifecycle instead of covering yesterday's layout.
            </Body>
          </div>
          <div>
            <H3>Armed Response — Not Just Recording</H3>
            <Body>
              AI-powered devices detect suspicious behavior in monitored areas. When the SOC detects a perimeter breach, a live operator verifies the footage and dispatches armed response — not a recorded alert to review in the morning. Active security reduces property crimes 16% versus no security (TechPro Security, 2025). Powered by FPI's{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>One Vendor — From Assessment to Active Coverage</H3>
          <Body>
            FPI manages the full program: site assessment, guard deployment, trailer installation, monitoring configuration, and patrol scheduling. One vendor, one service agreement, one point of contact for the project manager.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>See How FPI Secures Active Construction Sites</CTAButton>
        </div>
      </Section>

      {/* Project types */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Construction Site Security by Project Type</H2>
        <Body>Different construction project types carry different security profiles — FPI designs programs around the phase, footprint, and risk of each project.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Commercial &amp; Mixed-Use Developments</H3>
            <Body>
              Large-scale builds with multiple subcontractors, long timelines, and significant material value on site. Perimeter patrol plus solar trailers for outdoor staging areas plus access control for occupied floors during phased construction.
            </Body>
          </div>
          <div>
            <H3>Residential Construction Sites</H3>
            <Body>
              Single-family and multi-family residential sites face copper theft, lumber theft, and appliance theft during finishing phases. Overnight patrol and solar trailers cover the highest-risk windows without fixed infrastructure.
            </Body>
          </div>
          <div>
            <H3>Civil Engineering &amp; Infrastructure Projects</H3>
            <Body>
              Road, utility, and civil projects spread expensive equipment across linear sites impossible to cover with fixed cameras. GPS patrol plus repositionable solar trailers follow the active work zone as it moves.
            </Body>
          </div>
          <div>
            <H3>Demolition &amp; High-Risk Environments</H3>
            <Body>
              Demolition sites need personnel trained for unstable structures, hazardous materials, and unauthorized-entry liability — with fire watch integration for phases involving open flame or hot work.
            </Body>
          </div>
          <div>
            <H3>Laydown Yards &amp; Material Storage Areas</H3>
            <Body>
              Laydown yards — where materials and equipment stage before installation — are the highest theft-risk zone on any site. Solar surveillance trailers deploy directly in the yard with zero infrastructure, and AI detection flags unauthorized access after hours.
            </Body>
          </div>
          <div>
            <H3>Public Works &amp; Municipal Projects</H3>
            <Body>
              Government-funded projects require compliance documentation, credentialed personnel, and security records for public accountability. FPI provides documentation-ready programs built for public works contracts.
            </Body>
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section isMobile={isMobile}>
        <H2>Security Technology Built for Construction Environments</H2>
        <Body>Construction sites present unique technology challenges — no power, no network, dust, vibration, and constantly changing layouts. FPI deploys technology purpose-built for those conditions.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Solar Surveillance Trailers — The Infrastructure-Free Solution</H3>
            <Body>
              Solar panel, battery bank, AI camera array, two-way audio speaker, and 4G/LTE modem in one weatherproof unit rated for outdoor construction environments. No grid power, no wifi, no cable permits. AI detection sends real-time alerts to the FPI SOC.
            </Body>
          </div>
          <div>
            <H3>AI-Powered Detection — After Hours, Every Night</H3>
            <Body>
              AI-powered devices detect suspicious behavior in monitored areas — distinguishing humans from animals, catching vehicles entering restricted zones after hours, and flagging perimeter breaches. It cuts false-alert noise while holding 24/7 detection capability.
            </Body>
          </div>
          <div>
            <H3>4G/LTE Connectivity — Works Anywhere on Site</H3>
            <Body>
              FPI equipment runs on cellular 4G/LTE (fourth-generation Long-Term Evolution wireless) — no site wifi required. Coverage works anywhere a cell signal reaches, including remote sites and areas where temporary wifi is impractical.
            </Body>
          </div>
          <div>
            <H3>FPI Client Portal — Project Manager Access 24/7</H3>
            <Body>
              GPS patrol logs, incident reports, trailer camera feeds, and alert history — all on any device, 24/7. The project manager checks Friday night coverage before arriving Monday morning; the insurance manager exports patrol logs for a claim.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Construction Site Security</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What construction site security services does FPI provide?"
            answer="FPI provides armed and unarmed security guards, GPS-verified overnight patrol, solar-powered surveillance trailers, fixed CCTV systems, 24/7 SOC monitoring, access control for site gates, and fire watch officers — all deployable across South Florida and the Dallas–Fort Worth area."
          />
          <FAQItem
            question="How quickly can FPI deploy security to a new construction site?"
            answer="FPI can deploy guards within days of an assessment and solar surveillance trailers within 24–48 hours. No power infrastructure or network setup is required for trailer deployment — the units run on solar power and 4G/LTE cellular connectivity."
          />
          <FAQItem
            question="Do your surveillance systems work on sites without power or wifi?"
            answer="Yes. FPI's solar-powered surveillance trailers operate entirely off-grid — solar panels charge an onboard battery bank, and all data transmits over 4G/LTE cellular. They deploy in laydown yards, perimeter zones, and remote areas with no power infrastructure required."
          />
          <FAQItem
            question="What is the difference between monitored and unmonitored construction site cameras?"
            answer="Unmonitored cameras record — they document what happened. FPI's monitored systems connect to our SOC, where live operators review AI-flagged alerts in real time and dispatch a verified response before losses occur. Monitoring prevents incidents; recording only documents them."
          />
          <FAQItem
            question="Do you provide overnight security guards for construction sites?"
            answer="Yes. FPI deploys armed and unarmed overnight security guards for active construction sites across South Florida and Texas. Officers are site-briefed before deployment and trained for construction environment protocols, and GPS patrol logs document every round."
          />
          <FAQItem
            question="Can construction site security help with OSHA compliance documentation?"
            answer="Yes. FPI's client portal provides GPS-verified patrol logs, timestamped incident reports, and access control records — the documentation required for OSHA site safety reviews and insurance audits. All records are accessible from any device, 24/7."
          />
          <FAQItem
            question="Do you offer security for multiple construction sites under one contract?"
            answer="Yes. FPI manages security across multiple active sites under one service agreement, with centralized reporting through the client portal. Guards, patrol routes, and trailer deployments are coordinated from a single account manager."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a construction security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Construction Site Security Assessment"
        body="FPI's no-cost assessment covers perimeter vulnerabilities, equipment theft risk, overnight coverage gaps, and solar trailer placement — for active projects and upcoming developments across South Florida and the Dallas–Fort Worth area. FPI can have coverage operational within 24–48 hours of assessment."
        ctaText="Get a Free Construction Site Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default ConstructionPage;
