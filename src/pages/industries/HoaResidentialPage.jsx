import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const HoaResidentialPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Property Security Services | HOAs & Residential"
        description="Expert property security for HOAs, residential communities & apartment complexes. 24/7 guards, GPS patrol logs & client portal. Get a free quote today."
        ogTitle="Property Security Services for HOAs & Residential Communities | FPI"
        ogDescription="GPS-verified patrol logs, a 24/7 client portal, and Chapter 493-licensed officers — property security HOA boards can actually document."
        ogUrl="https://www.fpisecurity.com/industries/hoa-residential-security"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'HOA & Residential Security' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['HOA & Residential', 'GPS-Verified Patrol', 'Client Portal', 'Chapter 493 Licensed']}
        title="Property Security Services for HOAs & Residential Communities"
        intro="FPI provides professional property security services for HOA communities, gated neighborhoods, apartment complexes, and luxury residential properties across South Florida and Texas. This page speaks to the board president and property manager accountable for that decision — not the resident. Every patrol we run is GPS-verified and visible to your board in real time, so coverage is something you can prove, not just pay for."
        ctaText="Get a Free Property Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Trust block */}
      <Section isMobile={isMobile}>
        <H2>High-End Security Services Trusted by Property Owners, HOAs & Residential Managers</H2>
        <Body>FPI is trusted by HOA boards, property managers, and residential developers across South Florida and the Dallas–Fort Worth area to deliver security that is verifiable — not just present.</Body>
        <Divider />
        <H3>Licensed, Insured &amp; Chapter 493 Certified Security Professionals</H3>
        <Body style={{ maxWidth: 820 }}>
          Every FPI officer is licensed under Florida Statute Chapter 493 — the state regulation that requires background checks, formal training, and legal authorization to operate as a security professional (with equivalent licensing in every state we serve). Insurance documentation is available on request for board review and carrier requirements. For an HOA board accountable to hundreds of homeowners, that paperwork is not a formality — it is the difference between a defensible security program and an exposed one.
        </Body>
      </Section>

      {/* Problem */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>The Real Cost of Inadequate Property Protection</H2>
        <Body>For an HOA board, inadequate security is not just a safety issue — it is a financial liability and a governance failure. Florida HOAs face legal liability when professional security is inadequate or undocumented (Rust Injury Law FL).</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>What Happens to Property Value After a Security Incident?</H3>
            <Body>
              Homes in gated communities sell for an average of $30,000 more (TechPro Security, 2025) — a premium buyers pay for the expectation of safety. A community with a documented incident and no professional response on record loses exactly that premium. For the board, protecting property value is protecting the mandate residents elected you to uphold.
            </Body>
          </div>
          <div>
            <H3>Why Traditional Building Security Services Are No Longer Enough</H3>
            <Body>
              A guard at the gate with a paper log is not security — it is the appearance of security. The industry calls it the "ghost patrol": rounds marked complete on a clipboard that were never actually walked. Without GPS verification, photo-documented incident reports, and digital records, your board has no proof service was delivered. Active security programs reduce property crimes 16% versus gate-only setups (TechPro Security, 2025) — but only when the patrols actually happen.
            </Body>
          </div>
          <div>
            <H3>The Hidden Risks in Residential Complexes and Apartment Buildings</H3>
            <Body>
              Multi-family and apartment properties carry specific exposures: unauthorized access to amenities, tailgating at gates, package theft in lobbies, and after-hours incidents in parking structures. Daytime residential burglaries are more frequent in South Florida today than they were six or seven years ago (SuperGlobal Security, 2025). A property manager who cannot produce documentation when a resident files a complaint is personally exposed.
            </Body>
          </div>
          <div>
            <H3>Advanced Security Services vs. Basic Guard Patrol: What's the Difference?</H3>
            <Body>
              Basic patrol is a guard driving a route on a schedule that a would-be intruder can observe and plan around. Advanced security is GPS-verified random patrols, AI-assisted camera monitoring, digital incident reports, and a client portal that gives the board real-time visibility. One is a cost line; the other is a documented asset you can defend at the annual meeting.
            </Body>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <CTAButton onClick={() => navigate('/contact')}>See What Documented Security Looks Like for Your HOA</CTAButton>
        </div>
      </Section>

      {/* Services */}
      <Section isMobile={isMobile}>
        <H2>Our Complete Property Security Services for Residential Communities</H2>
        <Body>FPI provides a complete stack of property security services for HOA communities, apartment complexes, and luxury residential properties — from on-site officers to AI-assisted monitoring, all documented in one client portal.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>24/7 Security Guard Service — Armed &amp; Unarmed Options</H3>
            <Body>
              FPI provides unarmed security guards for residential communities — uniformed officers trained in hospitality-forward security that is professional, approachable, and effective. Armed options are available for high-value luxury developments or properties with elevated risk. Every officer is briefed on your community's specific protocols before their first shift. Explore our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>24-Hour Security Guard Service for High-Risk Properties</H3>
            <Body>
              Around-the-clock fixed-post coverage for communities with higher threat profiles — high-value luxury developments, communities responding to a recent incident, or properties with complex, multi-point access requirements that a single patrol pass cannot cover.
            </Body>
          </div>
          <div>
            <H3>Mobile Security Patrol Services</H3>
            <Body>
              FPI offers patrol visit services across every market we serve. GPS-tracked patrol vehicles cover the community perimeter, gate areas, amenity zones, and parking structures — with randomized timing that prevents the predictable patterns intruders exploit. Every visit is GPS-logged and accessible in the client portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/mobile-patrol')}>mobile patrol services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Concierge &amp; CARE Ambassador Security Programs</H3>
            <Body>
              For luxury residential communities and high-end HOAs where officer professionalism matters as much as deterrence, FPI CARE Ambassadors combine security competence with hospitality standards — protecting the community while representing its brand to residents and guests.
            </Body>
          </div>
          <div>
            <H3>Access Control &amp; Visitor Management for Gated Communities</H3>
            <Body>
              Unarmed security guards monitor building access points, but the system behind them is what scales. FPI manages gate access, visitor verification, temporary credential issuance for service vendors, and keycard systems for amenity areas. Explore our{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Advanced Security Services with AI-Assisted Monitoring</H3>
            <Body>
              FPI's hybrid model pairs an on-site guard with AI camera monitoring: SOC operators watch live community camera feeds — detecting anomalies, loitering, and unauthorized access — while the on-site officer handles resident-facing interactions. Explore our{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Fire Watch Security Officers</H3>
            <Body>
              Licensed fire watch officers for communities with fire suppression system outages, active construction phases, or code compliance requirements — available 24/7 on short notice.
            </Body>
          </div>
          <div>
            <H3>Disaster &amp; Emergency Security Response</H3>
            <Body>
              FPI deploys emergency security teams for post-hurricane, post-incident, and emergency access control situations. South Florida communities face recurring hurricane and tropical storm events that demand rapid, credentialed security deployment — not a scramble for coverage after the storm passes.
            </Body>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <CTAButton onClick={() => navigate('/contact')}>Request a Free Security Proposal for Your Community</CTAButton>
        </div>
      </Section>

      {/* Why choose */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Why Choose Our Advanced Security Services?</H2>
        <Body>HOA boards and property managers choose FPI because the service is verifiable — every patrol, every incident, every hour of coverage is documented and accessible.</Body>
        <Divider />
        <H3>Exclusive Benefits of Working with Us</H3>
        <Body>FPI is designed for the operational reality of HOA management: a board that needs proof, a manager who needs a platform, and residents who notice the moment something goes wrong. Every service layer is built around documentation and accountability.</Body>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40, marginTop: 24 }}>
          <div>
            <H3 style={{ fontSize: 20 }}>Personalized Security Service and Consulting</H3>
            <Body>
              No two HOA communities share the same layout, access points, or risk profile. FPI begins every engagement with a site-specific security assessment — mapping patrol routes, identifying blind spots, and designing coverage around your community's actual vulnerability, not a standard template.
            </Body>
          </div>
          <div>
            <H3 style={{ fontSize: 20 }}>Transparency and Visibility in Services</H3>
            <Body>
              HOA boards can access incident reports and patrol data 24/7 through the FPI client portal. The board president opens the portal before Thursday's meeting and has GPS patrol logs and photo-documented incidents ready to share with residents — without calling anyone.
            </Body>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <H3>Transparent Reporting: You See Everything, Every Shift</H3>
          <Body style={{ maxWidth: 820 }}>
            This is the direct answer to the ghost patrol problem. FPI provides GPS-verified patrol logs to HOA boards for every completed round — timestamp, GPS route, and photo documentation for every patrol visit. No more "all clear" logs that cannot be verified. When a resident asks whether the overnight patrol actually happened, you open the portal and show them the route the officer walked, minute by minute.
          </Body>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40, marginTop: 24 }}>
          <div>
            <H3 style={{ fontSize: 20 }}>Fully Licensed, Background-Checked &amp; Continuously Trained Officers</H3>
            <Body>
              FPI deploys Chapter 493-licensed security officers to residential communities in South Florida and equivalently licensed officers in every state we serve. Each is background-checked and site-trained on your community name, protocols, and residents with special access needs before they ever work a shift.
            </Body>
          </div>
          <div>
            <H3 style={{ fontSize: 20 }}>No Long-Term Lock-In Contracts — Results Keep You Here</H3>
            <Body>
              FPI does not rely on multi-year contracts to keep clients — the service quality and the client portal do that. Contract terms flex around HOA budget cycles, a direct answer for the board treasurer weighing how to commit association funds responsibly.
            </Body>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <a href="tel:8003744316" style={{ textDecoration: 'none' }}>
            <CTAButton onClick={() => {}}>Talk to a Property Security Specialist — 24/7</CTAButton>
          </a>
        </div>
      </Section>

      {/* Property types */}
      <Section isMobile={isMobile}>
        <H2>Property Security Services by Property Type</H2>
        <Body>FPI provides tailored security programs for every residential property type — from gated HOA communities to luxury high-rises and multi-family apartment complexes.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Apartment Complex Security — Protecting Residents and Common Areas</H3>
            <Body>
              For the property manager accountable to ownership, the exposures are specific: unauthorized access to amenities, lobby security, elevator monitoring, parking structure coverage, and package room protection. FPI's GPS patrol logs give you the documentation to put in front of ownership before they ask for it.
            </Body>
          </div>
          <div>
            <H3>HOA &amp; Gated Community Security</H3>
            <Body>
              FPI assigns unarmed personnel to residential communities for gate management, visitor access protocols, amenity patrol (pool, gym, clubhouse), and perimeter coverage. Gated communities with professional security command that $30,000 average value premium (TechPro Security, 2025) — the investment protects the very thing that draws buyers.
            </Body>
          </div>
          <div>
            <H3>High-End Residential Security for Luxury Properties</H3>
            <Body>
              Luxury properties require security that matches the brand — CARE Ambassador officers in professional attire, discreet surveillance, and visitor management that reflects the community's standards. The officer is part of the resident experience, not an interruption to it.
            </Body>
          </div>
          <div>
            <H3>Multi-Family &amp; Mixed-Use Residential</H3>
            <Body>
              Properties combining residential, retail, and amenity zones require zone-specific access control and coordinated patrol. FPI manages the full security program under one service agreement, so the manager has one vendor and one portal for the whole property.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>Residential Security Services for Townhome &amp; Condo Associations</H3>
          <Body>
            Smaller associations with tighter budgets benefit most from FPI's hybrid model — remote AI monitoring plus periodic patrol visits. The hybrid model reduces HOA security costs 20% versus full guard staffing (FPI internal), delivering documented coverage without a full-time post the association's budget cannot justify.
          </Body>
        </div>
      </Section>

      {/* Technology */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Advanced Security Services: Where Trained Officers Meet Smart Technology</H2>
        <Body>FPI's technology layer turns a traditional guard service into a fully accountable security program — with real-time visibility for the board, the property manager, and the ownership group.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Real-Time Reporting &amp; Incident Documentation</H3>
            <Body>
              Patrol officers document security conditions after each visit. Every FPI officer generates a timestamped, photo-documented incident report delivered automatically to the client portal. The property manager opens the app before the board meeting; the board president shares the patrol log at the annual resident meeting. No phone calls, no waiting on a vendor to email a summary.
            </Body>
          </div>
          <div>
            <H3>Access Control &amp; Visitor Management Integration</H3>
            <Body>
              Gate access, visitor pre-registration, temporary contractor credentials, and amenity area access control — all managed through one platform and logged in the FPI portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Surveillance Camera Monitoring as Part of Your Security Plan</H3>
            <Body>
              FPI SOC operators monitor community cameras in real time — parking structures, gate areas, pool decks — so the on-site guard is never the only layer of coverage. Explore our{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>{' '}
              and{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Mobile App: Stay Informed on Your Property 24/7</H3>
            <Body>
              The FPI client portal is fully mobile — patrol logs, incident reports, camera access, and alert history on any device, any hour. The manager checks coverage from her phone at 11 PM on a Saturday; the board president pulls last week's patrol data before a meeting.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>24/7 Monitoring with Intelligent Detection Technology</H3>
          <Body>
            FPI's Security Operations Center monitors AI-flagged anomalies from community cameras — loitering at the gate, unauthorized pool-area access, suspicious vehicles in the parking structure — and every alert is reviewed by a live operator before any response. Explore our{' '}
            <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>See the FPI Client Portal in Action</CTAButton>
        </div>
      </Section>

      {/* FAQ */}
      <Section isMobile={isMobile}>
        <H2>Frequently Asked Questions About Our Property Security Services</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What does a 24/7 security guard service include?"
            answer="FPI's 24/7 security guard service includes uniformed officer deployment at designated posts, scheduled and randomized patrol rounds, visitor access management, incident documentation with photo evidence, and GPS-verified patrol logs accessible through the FPI client portal. Armed and unarmed options are available."
          />
          <FAQItem
            question="Do you offer security services for residential apartment complexes?"
            answer="Yes. FPI provides security guard services, mobile patrol, access control, and remote monitoring for apartment complexes and multi-family properties across South Florida and the Dallas–Fort Worth area — all managed through a single client portal."
          />
          <FAQItem
            question="What is the difference between mobile patrol and on-site security?"
            answer="On-site security provides a fixed officer presence at a designated post. Mobile patrol deploys officers or vehicles across a property on scheduled and randomized routes. Most residential communities benefit from both — a fixed gate officer plus patrol coverage of the perimeter and amenity areas."
          />
          <FAQItem
            question="How quickly can you deploy security officers to my property?"
            answer="Deployment timelines depend on the scope of service and property assessment. FPI can deploy guard services rapidly following an initial site walk. Contact FPI for a specific timeline based on your community's location and coverage requirements."
          />
          <FAQItem
            question="Are your guards licensed and insured?"
            answer="Yes. All FPI security officers are licensed under Florida Statute Chapter 493 — or the equivalent in each state we serve — fully background-checked, and continuously trained. FPI carries comprehensive liability insurance, and documentation is available for HOA board review and carrier requirements on request."
          />
          <FAQItem
            question="Can your building security services integrate with our existing cameras?"
            answer="Yes. FPI integrates with existing camera infrastructure — our Security Operations Center monitors your current feeds while FPI patrol officers cover the property on the ground. Where upgrades are needed, FPI handles installation through our surveillance systems service."
          />
          <FAQItem
            question="What makes your services high-end compared to standard security companies?"
            answer="FPI's high-end property security includes GPS-verified patrol documentation, a 24/7 client portal with real-time visibility, AI-assisted camera monitoring, and CARE Ambassador officers trained for hospitality-standard resident interaction — not just deterrence. Every round is verifiable and every incident is documented before anyone asks."
          />
          <FAQItem
            question="Do you offer short-term contracts for event or construction security?"
            answer="Yes. FPI provides flexible contract terms for temporary needs — community events, construction phases, seasonal coverage gaps, and post-incident rapid deployment. No long-term commitment is required for temporary coverage."
          />
          <FAQItem
            question="How do I get a quote for property protection services?"
            answer="Contact FPI for a free property security assessment. A specialist conducts a site walk, evaluates your coverage needs, and provides a customized written proposal. Available across South Florida and the Dallas–Fort Worth area, and every market we serve."
          />
        </div>
        <div style={{ marginTop: 32, background: '#F4F6F8', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a property security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Contact Us Today — Get a Free Property Security Assessment"
        body="FPI offers a no-cost property security assessment for HOA communities, apartment complexes, and residential properties across six states. It covers patrol route design, access point vulnerability analysis, and technology recommendations — and the output is a written security proposal, not a sales call."
        ctaText="Get a Free Property Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default HoaResidentialPage;
