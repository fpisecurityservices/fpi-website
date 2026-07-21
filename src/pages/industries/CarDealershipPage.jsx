import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const CarDealershipPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Vehicle Theft Prevention & Car Dealership Security | FPI"
        description="FPI provides vehicle theft prevention for car dealerships in FL & TX — autonomous surveillance, GPS patrol & 24/7 monitoring. Free assessment."
        ogTitle="Vehicle & Auto Theft Prevention for Car Dealerships | FPI"
        ogDescription="Autonomous solar surveillance towers, live 3 AM SOC monitoring, GPS patrol logs, and LPR — theft prevention built for open dealership lots."
        ogUrl="https://www.fpisecurity.com/industries/car-dealership-security"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'Car Dealerships' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['Autonomous Solar Towers', 'Live SOC Monitoring', 'LPR at Entry/Exit', 'GPS Patrol Logs']}
        title="Vehicle & Auto Theft Prevention for Car Dealerships in FL & TX"
        intro="Car dealerships hold millions in exposed vehicle inventory across open lots — making them a primary target for organized theft rings operating overnight and on weekends in South Florida and Texas. FPI provides vehicle theft prevention for car dealerships in South Florida and Texas built for that exact problem: autonomous solar surveillance towers that cover the entire lot with AI detection — no power infrastructure, operational within 24 hours. Auto theft prevention that stops the loss instead of documenting it."
        ctaText="Get a Free Dealership Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Why high value target */}
      <Section isMobile={isMobile}>
        <H2>Why Car Dealerships Are High-Value Theft Targets</H2>
        <Body>Car dealerships concentrate millions in high-value vehicle inventory across open, accessible lots — often with minimal overnight security and predictable gaps that organized theft rings identify and exploit.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Organized Theft Rings Targeting High-Value Inventory</H3>
            <Body>
              One criminal ring stole more than 30 vehicles from over 20 Florida dealers — Hellcats, Corvettes, and Ram TRXs — for losses exceeding $2.5 million (Patch, 2024). These rings use key programmers to clone remotes overnight, targeting specific high-value models. The guard log says "all clear." Two vehicles are gone. AI-powered devices detect suspicious behavior in monitored areas — the layer a paper log never provided.
            </Body>
          </div>
          <div>
            <H3>The Real Cost — Inventory Loss + Floorplan Interest</H3>
            <Body>
              Miami-Dade County projects $69.3 million in vehicle theft costs in 2025 (CrimeGrade, 2025). A stolen vehicle costs more than its sticker: it keeps accruing floorplan interest while the insurance claim is processed. A stolen $80,000 Hellcat generates weeks of floorplan interest before the claim closes — and surveillance systems provide video evidence after incidents, so without footage the claim is delayed or denied outright.
            </Body>
          </div>
          <div>
            <H3>Overnight &amp; Weekend Vulnerability Windows</H3>
            <Body>
              Patrol visits deter trespassing on commercial premises, but most dealership theft happens Friday night through Monday morning — when the lot is empty, cameras have blind spots, and police response is slowest. The north corner of the back row is always the blind spot the ring already found.
            </Body>
          </div>
          <div>
            <H3>Insurance Exposure Without Documented Coverage</H3>
            <Body>
              Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025). Without GPS-verified patrol logs and camera coverage documentation, adjusters can deny claims or reduce payouts. In the US, a vehicle is stolen every 37 seconds (FinanceBuzz, 2024) — every FPI patrol generates the documentation that protects the dealership's claim when its turn comes.
            </Body>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Vehicle Theft Prevention Services for Car Dealerships</H2>
        <Body>FPI provides a complete vehicle theft prevention program for car dealerships — autonomous lot surveillance, GPS-tracked patrol, LPR at entry and exit, and 24/7 SOC monitoring.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Autonomous Solar Surveillance Towers — Full Lot Coverage</H3>
            <Body>
              FPI deploys autonomous security devices in large facilities, and FPI autonomous surveillance towers protect dealership inventory 24/7 without power infrastructure. Solar-powered towers with AI cameras, two-way audio, and 4G/LTE connectivity deploy across the lot — no power runs, no cable trenching, operational within 24 hours. The entire inventory footprint covered with AI detection that identifies movement at 3 AM. Explore our{' '}
              <InlineLink onClick={() => navigate('/autonomous-surveillance')}>autonomous surveillance</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>24/7 Live SOC Monitoring — Someone Watching at 3 AM</H3>
            <Body>
              FPI provides 24/7 remote monitoring in South Florida, and autonomous security units stream live video to monitoring centers. When AI detects movement in the back row at 3 AM, a live FPI SOC operator reviews the footage in real time — not a recording in the morning — and dispatches verified response immediately. Explore our{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>GPS-Tracked Patrol — Documented Coverage for Insurance</H3>
            <Body>
              FPI offers patrol visit services in South Florida and every market we serve. GPS-tracked vehicles cover the lot perimeter and adjacent areas on randomized schedules — every visit logged with timestamp, GPS route, and photo in the client portal. The fixed-ops director pulls last week's patrol logs before the GM asks. Explore our{' '}
              <InlineLink onClick={() => navigate('/mobile-patrol')}>patrol services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>License Plate Recognition at Entry &amp; Exit</H3>
            <Body>
              LPR (license plate recognition) cameras at every lot entry and exit log every vehicle arriving and departing — cross-referencing against watchlists in real time. Unauthorized vehicles are flagged before they reach the inventory, and every plate is logged in the client portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance systems</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>Service Bay &amp; Parts Room Access Control</H3>
          <Body>
            The service bay and parts room are the highest-theft-risk interior zones. Keycard access control logs every entry — protecting parts inventory and limiting access to authorized personnel. Camera coverage documents false damage claims from service bay incidents before they become disputes. Explore our{' '}
            <InlineLink onClick={() => navigate('/access-control')}>access control systems</InlineLink>.
          </Body>
        </div>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Car Dealerships Choose FPI for Auto Theft Prevention</H2>
        <Body>Dealerships choose FPI because FPI understands the specific economics of vehicle theft — floorplan interest, insurance documentation, and the difference between a guard who was there and a guard whose patrol is verified.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>One Stolen Hellcat = 18 Months of FPI Service</H3>
            <Body>
              The cost of one stolen high-value vehicle — floorplan interest, insurance deductible, claim processing time, and brand impact — exceeds the annual cost of FPI's full dealership security program. The math is not close. This is a business decision, not a security purchase.
            </Body>
          </div>
          <div>
            <H3>AI Detection + Human Verification — Not Just Alarms</H3>
            <Body>
              Monitoring services reduce response time during security incidents. When the autonomous tower detects movement at 3 AM, a live SOC operator reviews the footage before dispatching — no false alarm fatigue, no delayed response. Police receive a verified call with video evidence. Explore our{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Client Portal — Pull the Logs Before the GM Asks</H3>
            <Body>
              GPS patrol logs, incident reports, and camera alert history — all accessible from any device, 24/7. The fixed-ops director opens the portal from her phone before the GM's 7:30 AM call, with the last seven days of coverage documented. No phone tag with a guard company.
            </Body>
          </div>
          <div>
            <H3>Weather-Rated Hardware for South Florida Conditions</H3>
            <Body>
              South Florida's salt air and humidity degrade standard commercial security hardware. FPI deploys weather-rated cameras and autonomous towers designed for coastal environments — IP66-rated housings that hold performance where standard equipment corrodes. Active security reduces property crimes 16% (TechPro Security, 2025), but only if the hardware survives the climate.
            </Body>
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Automotive Security Technology for Open Lot Protection</H2>
        <Body>Open dealership lots require security technology designed for large outdoor footprints — not the fixed camera systems built for indoor commercial environments.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Solar Autonomous Towers — The Open Lot Solution</H3>
            <Body>
              Autonomous robots patrol premises without human intervention. Self-contained solar and battery units with AI cameras, two-way audio, and 4G/LTE — repositionable as the lot layout changes. Move the tower when the high-value inventory moves. No permits, no infrastructure, operational within 24 hours.
            </Body>
          </div>
          <div>
            <H3>AI Behavioral Detection — Beyond Motion Triggers</H3>
            <Body>
              AI cameras distinguish vehicles from humans, detect individuals moving between parked cars at unusual hours, and flag behavior patterns associated with key programming attempts. Standard motion triggers generate false alarms from wind and animals; AI detection generates alerts that actually matter.
            </Body>
          </div>
          <div>
            <H3>Parking Lot Security Cameras &amp; LPR Integration</H3>
            <Body>
              HD cameras cover the full lot perimeter — entry gates, back rows, service drive, and customer parking — integrated with LPR at entry and exit. Every vehicle logged, every anomaly flagged, every incident documented for the insurance file.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>FPI Client Portal — Real-Time Visibility for Dealership Management</H3>
          <Body>
            Live tower feeds, patrol GPS logs, LPR vehicle logs, and incident reports — all in one dashboard. The GM reviews overnight activity before opening; the fixed-ops director pulls coverage documentation before an insurance call. No vendor calls needed.
          </Body>
        </div>
      </Section>

      {/* FAQ */}
      <Section isMobile={isMobile}>
        <H2>Frequently Asked Questions About Car Dealership Security</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="How does FPI prevent vehicle theft at car dealerships?"
            answer="FPI prevents vehicle theft through autonomous solar surveillance towers with AI detection, 24/7 live SOC monitoring, GPS-tracked patrol on randomized schedules, and license plate recognition at entry and exit. Every anomaly is reviewed by a live operator — not recorded for the next morning. Available across South Florida and Texas."
          />
          <FAQItem
            question="What is auto theft prevention for dealerships and how does it work?"
            answer="Auto theft prevention for dealerships combines AI-powered surveillance cameras, autonomous patrol towers, GPS-verified patrol, and live monitoring that detects and responds to threats before vehicles are stolen — not after. FPI's SOC monitors dealership lot feeds overnight so a live operator verifies every alert in real time."
          />
          <FAQItem
            question="What security does FPI provide for car dealership lots?"
            answer="FPI provides autonomous solar surveillance towers for full lot coverage, GPS-tracked patrol, license plate recognition at entry and exit, 24/7 SOC live monitoring, service bay access control, and a client portal where dealership management reviews overnight coverage from any device. Available across South Florida and the Dallas–Fort Worth area."
          />
          <FAQItem
            question="Does FPI use surveillance cameras for car dealership parking lots?"
            answer="Yes. FPI deploys HD surveillance cameras and autonomous solar towers across dealership lots — covering back rows, entry gates, service drives, and customer parking. All cameras integrate with license plate recognition and connect to FPI's Security Operations Center for live overnight monitoring."
          />
          <FAQItem
            question="How does FPI document dealership security coverage for insurance purposes?"
            answer="Every FPI patrol generates a GPS-verified, timestamped log in the client portal — exportable for insurance audits and claims. Surveillance footage from autonomous towers and fixed cameras provides evidence documentation. Dealerships with documented FPI coverage are better positioned for claim approval and premium reduction."
          />
          <FAQItem
            question="How quickly can FPI deploy autonomous surveillance towers to a dealership lot?"
            answer="FPI autonomous solar surveillance towers are operational within 24–48 hours of deployment — no power infrastructure, no cable trenching, no permits required. The units run on solar power with battery backup and transmit over 4G/LTE cellular. Contact FPI for a deployment timeline for your specific lot."
          />
        </div>
        <div style={{ marginTop: 32, background: '#F4F6F8', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a dealership security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Dealership Security Assessment"
        body="FPI's no-cost assessment covers lot coverage gaps, autonomous tower placement, patrol route design, LPR positioning, and SOC monitoring configuration — for car dealerships across South Florida and the Dallas–Fort Worth area. The output is a written security proposal with a coverage map, not a sales presentation."
        ctaText="Get a Free Dealership Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default CarDealershipPage;
