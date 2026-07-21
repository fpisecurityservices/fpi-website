import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const SurveillancePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Surveillance Systems | Mobile Trailers & Business Cameras"
        description="FPI installs surveillance systems with HD, IP & thermal cameras for businesses. Expert installation & advanced security technology. Learn more today."
        ogTitle="Smart Surveillance Systems for Business | FPI Security"
        ogDescription="Design, installation, and monitoring of commercial surveillance systems — IP, HD, thermal, and mobile trailer deployments across six states."
        ogUrl="https://www.fpisecurity.com/services/surveillance"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['IP & HD Cameras', 'Thermal', 'Mobile Trailers', 'Installation & Monitoring']}
        title="Smart Surveillance Systems for Your Business Security"
        intro="FPI designs, installs, and manages commercial surveillance systems across Florida, Texas, Georgia, Arizona, Nevada, and California — covering IP, HD, and thermal cameras plus rapid-deployment mobile trailer units. One partner for the full system, from site assessment to live monitoring."
        ctaText="Get a Free Commercial Surveillance Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Overview */}
      <Section isMobile={isMobile}>
        <H2>An Overview of Business Camera Systems</H2>
        <Body>Commercial surveillance systems have evolved from analog recording devices into AI-powered, networked platforms that prevent incidents rather than document them.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40 }}>
          <div>
            <H3>The Evolution of Business Security Camera Systems</H3>
            <Body>
              The trajectory is clear: analog CCTV gave way to IP cameras, IP cameras connected to the cloud, and cloud-connected systems now run AI video analytics. Each generation moved the camera further from "a recording device" and closer to "a detection system" — and the businesses still running the first generation are protected by the standards of twenty years ago.
            </Body>
          </div>
          <div>
            <H3>Why Commercial Security Camera Systems Are Important</H3>
            <Body>
              Cameras matter for four reasons that go beyond recording: prevention (visible coverage deters), documentation (surveillance systems provide video evidence after incidents), liability (footage resolves disputes), and insurance (active security reduces property crimes 16% compared to gate-only setups — TechPro Security, 2025).
            </Body>
          </div>
        </div>
      </Section>

      {/* Why most systems fail */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Why Most Business Surveillance Systems Fail to Protect Your Business</H2>
        <Body>A camera that records without anyone watching is a documentation tool — not a security system. This is the problem FPI builds every deployment to solve.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Cameras Without Monitoring Are Just Expensive Hard Drives</H3>
            <Body>
              Recorded footage documents crime after it happens. Without live monitoring or AI detection, the camera's only job is confirming what was lost — after it is gone. Pairing hardware with{' '}
              <InlineLink onClick={() => navigate('/services/remote')}>remote video monitoring</InlineLink>{' '}
              is what turns a recording system into a prevention system.
            </Body>
          </div>
          <div>
            <H3>The Gap Between Installing a System and Actually Being Secure</H3>
            <Body>
              Camera placement, resolution selection, blind spot analysis, and monitoring configuration are the gap most DIY and low-cost installations leave open. A well-specified camera pointed at the wrong zone — or recording at a resolution that can't identify a face — provides the feeling of security without the function.
            </Body>
          </div>
          <div>
            <H3>What a Single Unmonitored Incident Can Cost Your Business</H3>
            <Body>
              The average cargo theft incident costs $202,000 (NICB, 2025) — one unmonitored overnight event at a warehouse can exceed a decade of surveillance investment. And the exposure compounds: Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025).
            </Body>
          </div>
          <div>
            <H3>Why Off-the-Shelf IP Cameras Are Not a Commercial Surveillance Solution</H3>
            <Body>
              Consumer IP (Internet Protocol — digital, network-connected) cameras lack commercial resolution, weatherproofing, storage redundancy, and integration with alarm or access control systems. They are built for doorbells and driveways, not evidence-grade coverage of a commercial property.
            </Body>
          </div>
        </div>
      </Section>

      {/* What is a business surveillance system */}
      <Section isMobile={isMobile}>
        <H2>What Is a Business Surveillance System and What Should It Include?</H2>
        <Body>
          A commercial surveillance system is a networked infrastructure of cameras, recorders, management software, and — critically — monitoring, working together to detect, document, and deter threats in real time.
        </Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>The Core Components of a Commercial Surveillance System</H3>
            <Body>
              Every commercial system is built from six layers. Cameras capture the property; surveillance systems record activity across all access points. An NVR or DVR stores the footage. Video management software organizes and searches it. Storage — local plus cloud — retains it. Network infrastructure carries it. And the monitoring layer, human or AI, is what turns all of the above into response.
            </Body>
          </div>
          <div>
            <H3>How IP Cameras Differ from Traditional CCTV Technology</H3>
            <Body>
              IP cameras transmit digital video over a network — enabling remote access, higher resolution, and AI integration. Traditional CCTV (closed-circuit television) is analog: video travels over coaxial cable to a local recorder, on a closed loop that cannot scale or be accessed remotely.
            </Body>
          </div>
          <div>
            <H3>Understanding HD Cameras, Resolution, and Real-World Coverage</H3>
            <Body>
              Resolution determines whether footage is evidence-grade or just a blurry record of an event. 1080p (Full HD) identifies faces and plates at close range; 4K holds identification detail across wide areas where digital zoom is needed. The wrong resolution choice is only discovered when the footage is needed — and fails.
            </Body>
          </div>
          <div>
            <H3>On-Premise vs. Cloud-Based Surveillance Monitoring Systems</H3>
            <Body>
              On-premise systems store to a local NVR: no internet dependency, no subscription, but physically vulnerable. Cloud systems offer remote access and redundant backup on a subscription model. Hybrid deployments — local recording with encrypted cloud sync — capture the strengths of both, and are FPI's standard recommendation.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>How a CCTV Surveillance Monitoring System Works End-to-End</H3>
          <Body>
            The chain runs: camera captures → signal transmits over the network → NVR records → VMS manages and raises alerts → an operator (human or AI) reviews → the incident is documented or escalated. A weakness at any link — a misaimed camera, full storage, an unwatched alert — breaks the whole chain.
          </Body>
        </div>
      </Section>

      {/* Camera types */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Types of Surveillance Cameras for Businesses</H2>
        <Body>The right camera type depends on the coverage zone, lighting conditions, indoor/outdoor environment, and whether active tracking is needed. Each type below is a distinct deployment scenario.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Dome Cameras — Discreet Indoor Coverage</H3>
            <Body>
              Ceiling-mounted, wide-angle, vandal-resistant. Dome cameras cover retail floors, office lobbies, and corridors without dominating the space — and their housing conceals which way the lens points.
            </Body>
          </div>
          <div>
            <H3>Bullet Cameras — Long-Range Outdoor Perimeters</H3>
            <Body>
              Cylindrical, long-focal-length, weatherproof. Bullet cameras watch parking lots, building perimeters, and gates — and their visible profile is itself a deterrent.
            </Body>
          </div>
          <div>
            <H3>PTZ Cameras — Active Tracking for Large Open Areas</H3>
            <Body>
              PTZ (pan-tilt-zoom) cameras actively track movement across wide areas — operators or AI control the view in real time. Ideal for large lots, campuses, and venues where one camera must do the work of several fixed views.
            </Body>
          </div>
          <div>
            <H3>Fisheye & Panoramic Cameras — 360° With a Single Unit</H3>
            <Body>
              One unit covers an entire open space — warehouse floors, open-plan offices, retail floors — with dewarping software rendering usable, evidence-ready footage from the fisheye image. Fewer cameras, no blind seams between views.
            </Body>
          </div>
          <div>
            <H3>Thermal Cameras — Detection in Complete Darkness</H3>
            <Body>
              Thermal cameras detect intruders in complete darkness and adverse weather — reading heat signatures instead of visible light, they work through smoke, fog, and zero-light conditions. Critical for industrial perimeters and remote sites.
            </Body>
          </div>
          <div>
            <H3>IP Cameras & Network-Based Systems for Scalable Infrastructure</H3>
            <Body>
              IP camera networks scale across multiple locations from a single dashboard — transmitting over existing network infrastructure with remote management and AI integration built in. The commercial standard for any new deployment.
            </Body>
          </div>
          <div>
            <H3>HD Cameras — Evidence-Grade Recording</H3>
            <Body>
              High-definition cameras cover blind spots in large facilities, and HD is the threshold for usable evidence in police investigations and insurance claims. 1080p at minimum; 4K where wide zones demand zoom-in identification.
            </Body>
          </div>
          <div>
            <H3>Indoor vs. Outdoor Cameras — Environmental Ratings</H3>
            <Body>
              IP66-rated housings are dust-tight and protected against water jets; IP67 adds submersion resistance. Choosing the wrong rating for an outdoor installation guarantees eventual hardware failure — and a coverage gap you discover after the fact.
            </Body>
          </div>
          <div>
            <H3>Mobile Surveillance Trailers — Rapid Deployment Anywhere</H3>
            <Body>
              FPI deploys mobile surveillance trailers for construction and remote sites: self-contained units with solar power, cellular connectivity, and onboard recording — operational within 24–48 hours, no infrastructure required. This is the hardware differentiator camera-only vendors don't offer.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>See Which Camera Types Are Right for Your Property</CTAButton>
      </Section>

      {/* End-to-end services */}
      <Section isMobile={isMobile}>
        <H2>Our End-to-End Business Surveillance Services</H2>
        <Body>FPI manages every phase of surveillance deployment — from vulnerability assessment through installation, monitoring integration, and ongoing maintenance. FPI installs surveillance systems for businesses in every state we serve.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Surveillance System Installation — Site Assessment to Go-Live</H3>
            <Body>
              The workflow: site vulnerability walk → camera placement design → hardware procurement → installation → network configuration → testing → go-live. Every step is FPI's responsibility, so there is no gap between what was designed and what was installed — and no finger-pointing between vendors when something needs attention.
            </Body>
          </div>
          <div>
            <H3>CCTV Installation Services for Commercial and Industrial Properties</H3>
            <Body>
              FPI handles CCTV installation for multi-zone commercial properties — office buildings, warehouses, retail centers, and industrial campuses — engineering camera counts, sightlines, and cable paths around how the property actually operates.
            </Body>
          </div>
          <div>
            <H3>Surveillance Services with 24/7 Remote Monitoring</H3>
            <Body>
              Cameras without monitoring are documentation tools. FPI pairs surveillance hardware with live operator coverage, so CCTV cameras monitor facilities in real time — with audio warnings and video-verified dispatch behind them. See{' '}
              <InlineLink onClick={() => navigate('/services/remote')}>remote video monitoring</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>CCTV Surveillance Monitoring System Management</H3>
            <Body>
              Beyond installation sits the operational layer: system health monitoring, alert configuration, operator review protocols, and escalation procedures — managed continuously so the system you bought keeps doing the job you bought it for.
            </Body>
          </div>
          <div>
            <H3>Ongoing Maintenance Plans for Video Surveillance and Monitoring</H3>
            <Body>
              FPI manages ongoing surveillance system maintenance across all our markets: firmware updates, camera health checks, storage verification, lens cleaning, and remote diagnostics. See{' '}
              <InlineLink onClick={() => navigate('/services/maintenance')}>maintenance plans</InlineLink>{' '}
              for the full scope.
            </Body>
          </div>
          <div>
            <H3>Mobile Surveillance Trailers for Construction, Events, and Remote Sites</H3>
            <Body>
              FPI deploys, configures, monitors, and retrieves mobile surveillance trailers — clients never manage the hardware. When the project ends or the event closes, the trailer leaves with us, and coverage moves wherever it's needed next.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Surveillance Camera Upgrades and Legacy System Integration</H3>
          <Body>
            Many commercial properties run analog CCTV systems installed 10–15 years ago. FPI integrates new IP cameras with legacy infrastructure where possible — and designs phased migration plans where it is not, so coverage never lapses mid-upgrade.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Request a Surveillance System Installation Quote</CTAButton>
        </div>
      </Section>

      {/* Industries */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Surveillance Camera Solutions by Industry</H2>
        <Body>FPI deploys surveillance systems across the highest-risk commercial environments in every market we serve — each industry with a distinct camera and monitoring strategy.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Retail — Loss Prevention and Shrinkage Reduction</H3>
            <Body>
              Dome cameras for floor coverage, PTZ for parking, AI analytics for loitering detection. The outcome is measurable: reduced shrinkage, documented incidents, and staff accountability at the register and the stockroom door.
            </Body>
          </div>
          <div>
            <H3>Construction Sites — Asset Protection and Mobile Trailers</H3>
            <Body>
              Mobile trailers are the primary solution: no infrastructure, solar-powered, and rapidly repositioned as the site evolves from groundwork to build-out. Coverage arrives days after the order — not after the trenching, permitting, and utility work a fixed system would need.
            </Body>
          </div>
          <div>
            <H3>Manufacturing and Warehousing — Compliance and Perimeter Security</H3>
            <Body>
              California, Florida, and Texas account for 54% of all U.S. cargo theft (NICB, 2025). FPI specifies perimeter bullet cameras, interior fisheye coverage, and overnight thermal — with high-definition cameras covering blind spots and footage doubling as safety-compliance documentation.
            </Body>
          </div>
          <div>
            <H3>Office Buildings and Corporate Campuses</H3>
            <Body>
              Lobby domes, stairwell coverage, parking structure bullets, and access control integration — with tenant-safety documentation flowing into property management reporting.
            </Body>
          </div>
          <div>
            <H3>Healthcare Facilities — Patient Safety and Access Integration</H3>
            <Body>
              Patient area monitoring, restricted-zone coverage, and access control integration for medication rooms — configured with recording and retention settings that respect HIPAA (the federal patient-privacy law governing healthcare data).
            </Body>
          </div>
          <div>
            <H3>Restaurants and Hospitality — Accountability and Guest Safety</H3>
            <Body>
              POS-area coverage for loss prevention, dining area monitoring for customer safety incidents, and back-of-house accountability — with retention configured for the insurance claims hospitality operators actually face.
            </Body>
          </div>
          <div>
            <H3>Automotive Dealerships — Lot Surveillance and Vehicle Protection</H3>
            <Body>
              Miami-Dade County projects $69.3 million in vehicle theft costs in 2025 (CrimeGrade, 2025). FPI deploys surveillance technology for dealerships across our markets: PTZ for active lot tracking, LPR for entry/exit logging, and thermal for overnight coverage of open-air inventory.
            </Body>
          </div>
          <div>
            <H3>Schools and Educational Facilities</H3>
            <Body>
              Perimeter coverage, entrance monitoring, parking lot surveillance, and emergency lockdown camera integration — supporting student safety programs and integrating with visitor management at the front door.
            </Body>
          </div>
          <div>
            <H3>Remote and Temporary Sites — Mobile Surveillance Solutions</H3>
            <Body>
              The broadest trailer use case: oil and gas sites, outdoor events, vacant properties, disaster recovery. Cellular connectivity and solar power make sites viable that have no infrastructure at all — monitored from day one.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Get a Surveillance Plan for Your Industry</CTAButton>
      </Section>

      {/* Advanced technology */}
      <Section isMobile={isMobile}>
        <H2>Advanced Surveillance Camera Technology We Deploy</H2>
        <Body>FPI deploys purpose-built commercial surveillance technology — not consumer-grade cameras rebranded for business use.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>AI-Powered Video Analytics — Beyond Simple Motion Triggers</H3>
            <Body>
              AI-powered video analytics detect anomalies beyond simple motion triggers: distinguishing humans from animals, detecting loitering, flagging abandoned objects, and cutting false alert noise so real events get real attention.
            </Body>
          </div>
          <div>
            <H3>License Plate Recognition (LPR/ANPR) Cameras</H3>
            <Body>
              LPR (license plate recognition, also called ANPR — automatic number plate recognition) cameras document every vehicle entering a facility, logging plate data at entry and exit points. Essential for dealerships, warehouses, and gated facilities.
            </Body>
          </div>
          <div>
            <H3>Night Vision and Infrared HD Cameras for 24/7 Clarity</H3>
            <Body>
              Infrared illuminators enable HD footage in complete darkness without visible light — the difference between "something moved" and an identifiable face on overnight parking lot, perimeter, and construction site coverage.
            </Body>
          </div>
          <div>
            <H3>Thermal Camera Systems for Perimeter and Hazardous Environments</H3>
            <Body>
              In the technology stack, thermal is the detection layer: heat signatures instead of visible light, unaffected by darkness, glare, dust, or fog. Deployed on oil and gas sites, industrial perimeters, and construction yards.
            </Body>
          </div>
          <div>
            <H3>Video Management Software (VMS) — Centralized Control</H3>
            <Body>
              VMS (video management software) is the command layer: view every camera from one interface, configure alerts, search footage by time or zone, and export evidence clips for police or insurers in minutes.
            </Body>
          </div>
          <div>
            <H3>Wireless and IP Camera Networks for Flexible Deployment</H3>
            <Body>
              Wireless IP cameras eliminate cable runs in retrofit installations, and PoE (Power over Ethernet) cameras carry power and data on a single cable — cutting installation complexity and cost on new deployments.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Mobile App Access — Monitor Your Surveillance System from Anywhere</H3>
          <Body>
            Live feeds, playback, and alert history through the FPI mobile app and client portal — from any device, anywhere, across every site you manage.
          </Body>
        </div>
      </Section>

      {/* Why FPI */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Why Businesses Choose Our Commercial Surveillance Services Over the Competition</H2>
        <Body>Most surveillance vendors sell cameras — FPI designs, installs, integrates, and manages the entire system under one accountability umbrella.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>We Design, Install, and Monitor — One Partner for the Full System</H3>
            <Body>
              No handoff between a camera vendor and a monitoring company. FPI owns the outcome from site assessment to ongoing management — one service agreement, one point of contact, one party accountable when it matters.
            </Body>
          </div>
          <div>
            <H3>No Cookie-Cutter Systems — Every Deployment Is Site-Specific</H3>
            <Body>
              Camera type, placement, resolution, and monitoring configuration are designed from your property's vulnerability assessment — not selected from a standard package built for someone else's building.
            </Body>
          </div>
          <div>
            <H3>Certified Technicians With Commercial-Grade Installation Experience</H3>
            <Body>
              Certified installation is what separates evidence-grade coverage from decorative cameras: correct placement for identification, housing ratings matched to the environment, and network configuration built for reliability. Credential documentation is available on request.
            </Body>
          </div>
          <div>
            <H3>Systems That Scale — From a Single Location to a Multi-Site Enterprise</H3>
            <Body>
              IP camera networks scale across multiple locations from a single dashboard. The same VMS platform manages one location or fifty — so growth never means starting over with a new vendor.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Transparent Pricing with No Hidden Maintenance Costs</H3>
          <Body>
            FPI{' '}
            <InlineLink onClick={() => navigate('/services/maintenance')}>maintenance plans</InlineLink>{' '}
            cover firmware updates, hardware health monitoring, and remote diagnostics — a fixed line item instead of surprise service calls.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Compare Your Current System to FPI Standards</CTAButton>
        </div>
      </Section>

      {/* Buyer's guide */}
      <Section isMobile={isMobile}>
        <H2>How to Choose the Right Business Surveillance System</H2>
        <Body>The right surveillance system depends on your property type, coverage zones, lighting conditions, budget, and whether you need active monitoring or recorded backup. Use this as a decision tool, not a pitch.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>How Many Cameras Does Your Business Actually Need?</H3>
            <Body>
              Start with entry and exit points, high-value zones, blind spots identified in the assessment, and anywhere an incident has previously occurred. Over-coverage wastes budget; under-coverage leaves the gaps that incidents find. The count comes from the property — not from a package tier.
            </Body>
          </div>
          <div>
            <H3>Wired vs. Wireless — Which Is Right for Your Property?</H3>
            <Body>
              Wired: more reliable, higher bandwidth, harder to interfere with. Wireless: faster to deploy and ideal for retrofits, but dependent on network quality. Hybrid systems match the medium to each zone rather than forcing one answer on the whole property.
            </Body>
          </div>
          <div>
            <H3>Cloud Storage vs. On-Site NVR/DVR — Pros, Cons, and Costs</H3>
            <Body>
              On-site NVR (network video recorder, for IP cameras) or DVR (digital video recorder, for analog) offers fast retrieval with no monthly fees — but the hardware itself can be stolen or damaged. Cloud storage is redundant and remotely accessible at a subscription cost. FPI's standard: local recording with encrypted cloud sync.
            </Body>
          </div>
          <div>
            <H3>What Resolution Do You Really Need for Evidence-Grade Footage?</H3>
            <Body>
              1080p is the minimum for evidence-grade footage at close range. 4K is the recommendation for wide-area coverage where digital zoom must still identify individuals. Resolution decisions are per-zone, not per-system.
            </Body>
          </div>
          <div>
            <H3>Indoor vs. Outdoor Ratings — IP66, IP67, and What They Mean</H3>
            <Body>
              As a buying decision: deploying an under-rated camera in a direct-rain or high-dust environment means eventual hardware failure and a silent coverage loss. Match IP66/IP67 ratings to each mounting location's real exposure.
            </Body>
          </div>
          <div>
            <H3>Do You Need Active Monitoring or Is Recording Enough?</H3>
            <Body>
              Recording captures evidence. Active monitoring prevents incidents. For high-value properties and overnight coverage,{' '}
              <InlineLink onClick={() => navigate('/services/remote')}>monitoring</InlineLink>{' '}
              is the layer that turns a camera system into a prevention system.
            </Body>
          </div>
        </div>
      </Section>

      {/* CTA block */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Get a Free Commercial Surveillance System Assessment</H2>
        <Body style={{ maxWidth: 760 }}>
          FPI conducts no-cost surveillance assessments covering camera placement, resolution requirements, blind spot analysis, and monitoring recommendations — with no obligation, available across all six states we serve.
        </Body>
        <H3 style={{ maxWidth: 760 }}>Tell Us About Your Site and We'll Design Your Custom Camera System in 48 Hours</H3>
        <Body style={{ maxWidth: 760 }}>
          Submit your property details and FPI will deliver a site-specific camera layout and system recommendation within 48 hours.
        </Body>
        <CTAButton onClick={() => navigate('/contact')}>Get My Free Surveillance Assessment</CTAButton>
      </Section>

      {/* FAQ */}
      <Section isMobile={isMobile}>
        <H2>Frequently Asked Questions About Business Surveillance Systems</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What is the difference between IP cameras and CCTV cameras?"
            answer="CCTV (closed-circuit television) cameras transmit analog video over coaxial cable to a local recorder — closed circuit, limited scalability. IP (Internet Protocol) cameras transmit digital video over a network, enabling remote access, higher resolution, AI integration, and multi-site management from one dashboard."
          />
          <FAQItem
            question="How much does a commercial surveillance system installation cost?"
            answer="Cost depends on the number of cameras, camera types (HD vs. thermal vs. PTZ), wired vs. wireless infrastructure, storage configuration, and monitoring integration. FPI provides a no-cost site assessment and a line-item quote for your specific property — no package pricing, no padding."
          />
          <FAQItem
            question="Can I monitor my business cameras remotely from my phone?"
            answer="Yes. FPI surveillance systems include client portal and mobile app access — view live feeds, review recorded footage, and receive real-time alerts from any device, across every location on your account."
          />
          <FAQItem
            question="How long is commercial surveillance footage stored?"
            answer="Storage duration depends on recording resolution, camera count, and storage configuration (on-site NVR or cloud). Most commercial systems are configured for 30–90 days, and FPI designs retention schedules around your compliance and insurance requirements."
          />
          <FAQItem
            question="What is a mobile surveillance trailer and when should I use one?"
            answer="A mobile surveillance trailer is a self-contained, solar-powered camera unit deployable without electrical or network infrastructure. Use one for active construction sites, remote facilities, outdoor events, and temporary coverage gaps — FPI deploys them within 24–48 hours."
          />
          <FAQItem
            question="Do your surveillance services include ongoing monitoring?"
            answer="Yes. FPI offers 24/7 remote monitoring as an integrated service — trained operators watch live feeds, issue real-time audio warnings, and dispatch video-verified police calls. Hardware and monitoring under one provider, one accountability chain."
          />
          <FAQItem
            question="How many cameras does my business need?"
            answer="Camera count depends on property size, number of entry and exit points, high-value zones, and blind spot analysis. FPI determines the optimal count through a no-cost site assessment — not a standard formula or a per-square-foot rule of thumb."
          />
          <FAQItem
            question="Can you integrate new cameras with my existing system?"
            answer="In most cases, yes. FPI assesses existing infrastructure during the site walk and integrates new IP cameras with legacy systems where compatible — or designs a phased migration plan where it is not, keeping coverage continuous throughout."
          />
          <FAQItem
            question="What is the difference between a DVR and NVR system?"
            answer="A DVR (digital video recorder) processes analog camera signals locally over coaxial connections. An NVR (network video recorder) manages IP camera data over a network — enabling higher resolution, remote access, and scalability across sites."
          />
          <FAQItem
            question="Are your CCTV installation services available for multi-location businesses?"
            answer="Yes. FPI deploys and manages surveillance systems across multiple locations from a centralized VMS platform — giving operations teams a single dashboard for every site, across all six states we serve."
          />
        </div>
        <div style={{ marginTop: 32, background: '#F4F6F8', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to a surveillance specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get My Free Surveillance Assessment"
        body="Camera placement, resolution requirements, blind spot analysis, and monitoring recommendations — designed for your site and delivered within 48 hours."
        ctaText="Get My Free Surveillance Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default SurveillancePage;
