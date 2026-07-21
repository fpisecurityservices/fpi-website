import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, StepCard, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const PatrolPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security Patrol Services: Smarter Protection That Works"
        description="FPI security patrol services provide fast response, visible deterrence & reliable overnight coverage. Protect your property today."
        ogTitle="Security Patrol Services | GPS-Verified Mobile Patrol | FPI Security"
        ogDescription="Risk-based mobile patrol with GPS-verified coverage, randomized routes, and documented proof of every visit — across six states."
        ogUrl="https://www.fpisecurity.com/services/patrol"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['Security Patrols', 'Multi-Site', 'Rapid Response', 'GPS Tracked']}
        title="Security Patrol Services For Your Property"
        intro="FPI offers mobile patrol security across Florida, Texas, Georgia, Arizona, Nevada, and California — risk-based security patrol services that are GPS-verified on every visit. Our patrols go beyond presence: every round is documented, timestamped, and accountable."
        ctaText="Get a Patrol Plan Built for Your Risk, Hours and Property Layout"
        onCta={() => navigate('/contact')}
      />

      {/* Positioning */}
      <Section isMobile={isMobile}>
        <H2>Mobile Patrol Security That Proves Coverage, Not Just Presence</H2>
        <Body>
          GPS-verified patrol logs are proof of coverage — not just a promise. FPI's patrol model is built around documentation, not assumptions: every visit records the time, location, and duration of each patrol stop, and every record is accessible through the FPI client portal. When a patrol company tells you your property was checked last night, you should not have to take their word for it. With FPI, you can see it.
        </Body>
      </Section>

      {/* Why static security fails */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Why Static Security Leaves Your Property Exposed</H2>
        <Body>Predictability is a vulnerability. This is not a pitch against fixed-post security — it is an honest risk analysis of what happens when coverage never changes.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40 }}>
          <div>
            <H3>The predictability problem — how criminals study fixed security patterns</H3>
            <Body>
              Criminals observe before they act. A guard who walks the same route at the same times, every night, teaches an observer exactly when each zone is unwatched. Over days or weeks, fixed patterns become a map of your property's gaps. Randomized patrol routes remove that map — when visit timing cannot be predicted, planning around it becomes impractical.
            </Body>
          </div>
          <div>
            <H3>What happens to unpatrolled zones after hours</H3>
            <Body>
              After business hours, perimeter blind spots and secondary access points go unwatched entirely on many properties. Rear doors, loading areas, fence lines, and far corners of parking lots sit outside camera coverage and beyond the reach of a fixed post. These are the zones where trespassing, theft, and vandalism concentrate once static coverage ends for the day.
            </Body>
          </div>
          <div>
            <H3>The real deterrence value of a visible, moving presence</H3>
            <Body>
              A marked patrol vehicle circulating a property signals one thing to a potential bad actor: someone is actively watching, and their next pass cannot be timed. Patrol visits deter trespassing on commercial premises precisely because the presence moves — deterrence follows the vehicle across every zone it covers.
            </Body>
          </div>
          <div>
            <H3>Mobile patrol vs. on-site guard — when each makes sense</H3>
            <Body>
              Mobile patrol fits large areas, after-hours windows, and multi-site portfolios where a fixed post cannot justify its cost. An on-site guard fits high-risk locations, client-facing posts, and 24/7 fixed coverage. Many FPI clients combine both. If you are weighing a dedicated officer, see our{' '}
              <InlineLink onClick={() => navigate('/services/officers')}>security guard services</InlineLink>.
            </Body>
          </div>
        </div>
      </Section>

      {/* What is mobile patrol */}
      <Section isMobile={isMobile}>
        <H2>What Are Mobile Patrol Security Services?</H2>
        <Body>
          Mobile patrol security is a vehicle-based service in which trained officers follow planned routes to inspect, deter, and document security conditions across a property. Security patrol officers inspect properties during scheduled visits — checking access points, sweeping perimeters, and recording what they find.
        </Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>How mobile patrol differs from on-site guards</H3>
            <Body>
              Mobile patrol delivers coverage across zones through randomized visits at a lower cost per hour. An on-site guard holds a fixed post with constant presence and the strongest deterrence at a single point. The right choice depends on whether your risk is concentrated in one location or spread across a property.
            </Body>
          </div>
          <div>
            <H3>When vehicle patrol security is the better option</H3>
            <Body>
              Vehicle patrol security is typically the better fit for large campuses, properties with multiple access points, budget-constrained after-hours coverage, active construction sites, and vacant properties awaiting sale or development. In each case, the ground to cover is too large for a fixed post to protect.
            </Body>
          </div>
          <div>
            <H3>How random patrol patterns improve deterrence</H3>
            <Body>
              Mobile patrol officers follow randomized routes to prevent predictability. Unpredictable visit timing removes the ability for bad actors to plan around a schedule — there is no reliable window in which the property is guaranteed to be unwatched, so the risk calculation changes on every approach.
            </Body>
          </div>
        </div>
      </Section>

      {/* What's included */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>What Our Security Patrol Services Include</H2>
        <Body>FPI's security and patrol services cover marked vehicle patrols, overnight rounds, alarm response, perimeter checks, access point inspections, parking enforcement, and documented incident reporting.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Marked vehicle patrols</H3>
            <Body>
              Branded, marked patrol vehicles create visible deterrence the moment they enter the property. FPI deploys vehicle patrol security across our service areas, with officers patrolling both interior zones and exterior grounds on every visit.
            </Body>
          </div>
          <div>
            <H3>Overnight security patrols</H3>
            <Body>
              FPI provides overnight security patrols for high-risk hours — the window when most property crime occurs. Overnight rounds use randomized timing within scheduled windows, so no two nights follow the same pattern.
            </Body>
          </div>
          <div>
            <H3>Alarm response and on-site verification</H3>
            <Body>
              Patrol officers respond on-site to alarm activations and verify threats in person. That eliminates false alarm fatigue — instead of guessing whether an activation was wind or an intruder, you get an officer's verified report, and real threats get an immediate response.
            </Body>
          </div>
          <div>
            <H3>Exterior and perimeter checks</H3>
            <Body>
              Every patrol includes a systematic perimeter sweep: fencing, gates, exterior doors, lighting, and vulnerable access points are inspected and their condition documented. Perimeter issues get flagged before they become entry points.
            </Body>
          </div>
          <div>
            <H3>Door, gate and access point inspections</H3>
            <Body>
              Each visit verifies that every entry point is secured. Results are logged with a timestamp and officer ID — so an unlocked door is a documented finding with a name and a time attached, not a surprise discovered the next morning.
            </Body>
          </div>
          <div>
            <H3>Parking enforcement and suspicious activity reporting</H3>
            <Body>
              Officers monitor for unauthorized vehicles, enforce parking rules where required, and report suspicious activity in real time. Parking enforcement reduces vehicle-related incidents in lots and keeps fire lanes and reserved areas clear.
            </Body>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <H3>Incident reports with timestamps and photos</H3>
          <Body style={{ maxWidth: 760 }}>
            Every patrol visit generates a timestamped, photo-documented report accessible through the FPI client portal. Patrol officers document security conditions after each visit — this is the proof-of-coverage layer a basic patrol company does not provide, and it is standard on every FPI patrol program.
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>Request a Free Property Patrol Assessment</CTAButton>
        </div>
      </Section>

      {/* Why vehicle patrol over static */}
      <Section isMobile={isMobile}>
        <H2>Why Businesses Choose Vehicle Patrol Security Over Static Guards</H2>
        <Body>Vehicle patrol covers more ground at a lower cost per hour than a fixed security post. For many properties, that makes it the practical business decision — not a downgrade.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Better coverage for large properties</H3>
            <Body>
              One patrol officer in a vehicle can cover a multi-acre property that would otherwise require three or four static posts. Mobile patrol units cover multiple locations per shift, reaching zones a fixed guard would never see from their post.
            </Body>
          </div>
          <div>
            <H3>More cost-effective after-hours protection</H3>
            <Body>
              A full-time overnight guard means paying for eight hours of presence whether the risk justifies it or not. Scheduled patrol visits concentrate spending on the checks that matter — for lower-risk overnight periods, patrol is the smarter budget allocation, delivering verified coverage without a full-shift cost.
            </Body>
          </div>
          <div>
            <H3>Faster response to suspicious activity</H3>
            <Body>
              A mobile officer already on or near the property can respond within minutes — reaching the far side of a large site faster than waiting on external emergency services to arrive, assess, and act.
            </Body>
          </div>
          <div>
            <H3>Flexible scheduling based on risk</H3>
            <Body>
              Patrols are scheduled around actual risk windows: late nights, weekends, holidays, and active construction phases. You are not locked into a 24/7 fixed post when your exposure is concentrated in specific hours.
            </Body>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <H3>A stronger visible deterrent</H3>
          <Body style={{ maxWidth: 760 }}>
            A marked patrol vehicle actively circulating a property is a moving signal of active security. Active security programs reduce property crimes by 16% compared to gate-only setups (TechPro Security, 2025).
          </Body>
          <CTAButton variant="secondary" onClick={() => navigate('/services/officers')}>Compare Patrol vs. On-Site Guard Options</CTAButton>
        </div>
      </Section>

      {/* Risk-based plan by property type */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>A Risk-Based Patrol Plan for Every Property</H2>
        <Body>FPI designs patrol programs around the actual risk profile, layout, and high-risk hours of each property type — from construction sites to residential communities.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Construction sites</H3>
            <Body>
              Active sites hold exposed equipment and materials that disappear on nights and weekends. FPI patrols verify perimeter integrity, prevent unauthorized access, and document contractor equipment left in the open — with overnight and weekend rounds concentrated on the hours your site sits empty.
            </Body>
          </div>
          <div>
            <H3>Commercial buildings and office parks</H3>
            <Body>
              After-hours exterior patrols cover parking lots, entrances, and access points across the campus. Beyond deterrence, documented patrol activity gives property managers the tenant-safety and liability documentation their ownership groups and insurers expect.
            </Body>
          </div>
          <div>
            <H3>Warehouses and industrial facilities</H3>
            <Body>
              California, Florida, and Texas account for 54% of all U.S. cargo theft (NICB, 2025) — and FPI patrols in all three. Patrol programs for industrial facilities focus on perimeter integrity, access point monitoring, and overnight coverage when high-value inventory is most exposed.
            </Body>
          </div>
          <div>
            <H3>HOAs, condos and residential communities</H3>
            <Body>
              A visible patrol presence serves gated and non-gated communities alike: resident peace of mind, visitor monitoring, and after-hours deterrence. The investment shows up in property value too — homes in gated communities with active security sell for an average of $30,000 more (TechPro Security, 2025).
            </Body>
          </div>
          <div>
            <H3>Retail centers and parking lots</H3>
            <Body>
              After-hours lot patrols monitor for suspicious vehicles, check storefront doors and service entrances, and sweep the perimeter. Parking enforcement integrates directly into the patrol program, keeping lots orderly during business hours and watched after close.
            </Body>
          </div>
          <div>
            <H3>Vacant properties and multi-site portfolios</H3>
            <Body>
              FPI patrol officers can serve multiple vacant or low-occupancy properties per shift — cost-effective verified coverage across an entire portfolio. FPI conducts patrol visits across commercial districts and residential neighborhoods in every state we serve.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>See How We'd Patrol Your Property Type</CTAButton>
      </Section>

      {/* Process */}
      <Section isMobile={isMobile}>
        <H2>How We Build Your Patrol Strategy</H2>
        <Body>FPI doesn't start with a vehicle — we start with your risk. Every patrol program follows a systematic five-step process.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20, marginBottom: 32 }}>
          <StepCard number="1" title="Step 1 — Property threat assessment & vulnerability mapping">
            <Body style={{ marginBottom: 0 }}>
              FPI conducts a no-cost on-site assessment to identify access points, blind spots, high-risk zones, and optimal patrol routes. The assessment produces a vulnerability map — the foundation the entire program is built on.
            </Body>
          </StepCard>
          <StepCard number="2" title="Step 2 — Custom patrol route & frequency design">
            <Body style={{ marginBottom: 0 }}>
              Routes and visit frequency are designed around actual risk data, not a standard template. High-risk zones get higher frequency; low-risk zones get efficient coverage. Randomization windows are built in from day one.
            </Body>
          </StepCard>
          <StepCard number="3" title="Step 3 — Officer deployment & vehicle assignment">
            <Body style={{ marginBottom: 0 }}>
              Trained, background-checked patrol officers are assigned to your property with a dedicated marked vehicle — briefed on your site's layout, protocols, and escalation contacts before the first round runs.
            </Body>
          </StepCard>
          <StepCard number="4" title="Step 4 — Live GPS tracking & incident reporting">
            <Body style={{ marginBottom: 0 }}>
              Every patrol is GPS-tracked in real time, and each visit generates a timestamped incident report in the FPI client portal. This is documented accountability — verifiable data, not a verbal assurance that the rounds happened.
            </Body>
          </StepCard>
        </div>
        <div style={{ maxWidth: 760 }}>
          <H3>Step 5 — Monthly review & route optimization</H3>
          <Body>
            FPI reviews patrol data monthly and adjusts routes, timing, and frequency based on incident patterns and client feedback. Your patrol program is not static — it improves with every month of data.
          </Body>
        </div>
      </Section>

      {/* Differentiators */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>What Makes Our Vehicle Patrol Security Different</H2>
        <Body>Most patrol companies send a vehicle. FPI builds a verified, adaptive patrol program.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>GPS-verified patrol logs — proof of presence, every visit</H3>
            <Body>
              GPS logs confirm the time, location, and duration of every patrol stop, accessible any time through the client portal. When you ask "how do I know the patrol actually happened?" — this is the answer: GPS-verified patrol logs provide documented proof of every site visit.
            </Body>
          </div>
          <div>
            <H3>Trained & certified patrol officers — not just drivers</H3>
            <Body>
              FPI patrol officers are trained in de-escalation, incident response, and your site-specific procedures. They are security professionals operating a patrol route — not drivers assigned to circle a parking lot.
            </Body>
          </div>
          <div>
            <H3>24/7 dispatch coordination</H3>
            <Body>
              FPI dispatch operates around the clock. Officers can be redirected, reinforced, or escalated in response to real-time conditions — an alarm activation, a client call, or a suspicious activity report from another site.
            </Body>
          </div>
          <div>
            <H3>Transparent client reporting portal</H3>
            <Body>
              Clients access patrol logs, incident reports, and GPS history through FPI's proprietary portal — no chasing down reports, no waiting until Monday. What our officers documented overnight is on your screen in the morning.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Rapid deployment — no long-term contracts required</H3>
          <Body>
            FPI can deploy patrol services quickly after the initial assessment, with flexible contract options for permanent, seasonal, or project-based coverage. Starting a patrol program should be a low-friction decision — ours is.
          </Body>
        </div>
      </Section>

      {/* Overnight */}
      <Section isMobile={isMobile}>
        <H2>Overnight Security for High-Risk Hours</H2>
        <Body>Most property crime concentrates late at night — and those hours require a different patrol strategy, not a scaled-down version of daytime coverage.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>The highest-risk hours for commercial & residential properties</H3>
            <Body>
              The risk window is consistent across property types: after business hours, on weekends, and during holidays — when staff are gone, traffic drops, and visibility is low. Cargo theft losses alone rose 60% in 2025 to $725 million (NICB, 2025), driven overwhelmingly by after-hours incidents.
            </Body>
          </div>
          <div>
            <H3>Why nights, weekends and holidays need a different patrol strategy</H3>
            <Body>
              In these windows, staffing drops, emergency response times stretch, and natural surveillance from passersby disappears. Patrol frequency and randomization matter more precisely when no one else is watching the property.
            </Body>
          </div>
          <div>
            <H3>Randomized rounds vs predictable routines</H3>
            <Body>
              Predictable routines are vulnerabilities — a patrol that arrives at midnight and 3 AM every night is a schedule an observer can work around. FPI's overnight scheduling ensures no two nights follow the same pattern.
            </Body>
          </div>
          <div>
            <H3>Common overnight threats we help deter</H3>
            <Body>
              Overnight patrol programs target the incidents that cluster after dark: unauthorized access, vandalism, trespassing, vehicle theft, equipment theft from construction sites, and parking lot incidents.
            </Body>
          </div>
        </div>
      </Section>

      {/* Signs you need patrol */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Signs Your Property Needs Mobile Patrol Services</H2>
        <Body>If any of these apply to your property, a patrol program is worth evaluating.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Recent trespassing or vandalism</H3>
            <Body>
              One incident signals a vulnerability that has already been found. A visible patrol presence changes the risk calculation for would-be offenders before the second incident happens.
            </Body>
          </div>
          <div>
            <H3>Frequent alarm activations</H3>
            <Body>
              Repeated false alarms without on-site verification drain resources and desensitize everyone who responds to them. Patrol officers verify activations in person, so a real alarm never gets dismissed as another false one.
            </Body>
          </div>
          <div>
            <H3>Large areas with limited staff</H3>
            <Body>
              Properties with wide footprints and minimal staff cannot self-monitor. Mobile patrol fills that gap without the cost of multiple static posts.
            </Body>
          </div>
          <div>
            <H3>Multiple access points</H3>
            <Body>
              Every additional entry and exit point is another potential vulnerability. Patrol officers systematically check each one on every visit — and log the result.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Rising overnight liability</H3>
          <Body>
            Incidents during unmanned hours create liability exposure, and Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025). Documented patrol activity is evidence of due diligence — a real consideration for insurance and legal purposes.
          </Body>
          <a href="tel:8003744316" style={{ textDecoration: 'none' }}>
            <CTAButton onClick={() => {}}>Talk to a Patrol Specialist — Available 24/7</CTAButton>
          </a>
        </div>
      </Section>

      {/* How to choose */}
      <Section isMobile={isMobile}>
        <H2>How to Choose the Right Security and Patrol Services Provider</H2>
        <Body>Choosing a patrol provider is a risk decision, not just a price decision. Use these five criteria as an objective evaluation guide.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Licensing and training</H3>
            <Body>
              Every patrol officer should be licensed under their state's private security regulations — Chapter 493 in Florida, and the equivalent licensing authority in Texas, Georgia, Arizona, Nevada, and California. Then ask about training standards beyond the license: de-escalation, incident response, and site-specific procedures.
            </Body>
          </div>
          <div>
            <H3>Reporting transparency</H3>
            <Body>
              Ask whether you receive patrol logs, timestamps, GPS data, and incident reports — or just a monthly summary. Transparency is the baseline; a provider who cannot show you their coverage is asking you to take it on faith.
            </Body>
          </div>
          <div>
            <H3>Response protocols</H3>
            <Body>
              What happens when an officer identifies a threat? Understand the escalation procedure, alarm response capability, and how dispatch communicates with you in real time before you sign anything.
            </Body>
          </div>
          <div>
            <H3>Technology integration</H3>
            <Body>
              A modern patrol provider runs GPS tracking, digital reporting, and a client-accessible portal. Paper logs and verbal reports are not acceptable standards in 2026.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Experience in your property type</H3>
          <Body>
            A provider who patrols warehouses and construction sites operates differently from one who covers HOA communities. Verify relevant experience in your property type — and in your market.
          </Body>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Mobile Patrol Security</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What is included in mobile patrol services?"
            answer="Mobile patrol services include marked vehicle patrols, perimeter and access point inspections, alarm response verification, parking enforcement, suspicious activity reporting, and timestamped incident reports with photo documentation — all accessible through the FPI client portal, with GPS verification on every visit."
          />
          <FAQItem
            question="How often should patrol officers visit a property?"
            answer="Frequency depends on the property's risk profile, size, and high-risk hours. FPI designs patrol schedules after a property assessment — typical commercial properties receive multiple visits per shift, with frequency concentrated in the overnight and weekend windows where risk is highest."
          />
          <FAQItem
            question="Can patrol officers respond to alarm activations?"
            answer="Yes. FPI patrol officers respond to alarm activations and verify the situation on-site, eliminating false alarm confusion and ensuring real threats receive an immediate in-person response backed by a documented report."
          />
          <FAQItem
            question="Are patrol visits random or scheduled?"
            answer="Both. FPI uses a combination of planned patrol windows and randomized visit timing within those windows. You get predictable coverage levels without a predictable pattern — which prevents bad actors from planning around a schedule."
          />
          <FAQItem
            question="Is vehicle patrol security more affordable than an on-site guard?"
            answer="In most cases, yes. Vehicle patrol covers larger areas per officer hour than a fixed post. For large properties, multi-site portfolios, or after-hours coverage, patrol is typically the more cost-effective option — and many clients combine patrol with a daytime on-site guard."
          />
          <FAQItem
            question="Do you provide overnight security patrols?"
            answer="Yes. FPI provides overnight security patrols scheduled around the highest-risk hours for each property. Patrol frequency and randomization are adjusted specifically for nighttime, weekend, and holiday coverage — the windows when most property crime occurs."
          />
          <FAQItem
            question="Can patrol services cover multiple locations?"
            answer="Yes. FPI patrol officers can cover multiple properties per shift, making vehicle patrol a cost-effective option for property managers with portfolios — whether concentrated in South Florida or Dallas–Fort Worth, or spread across the six states we serve."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to a patrol specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Patrol Plan Built for Your Risk, Hours and Property Layout"
        body="FPI patrol programs start with a free property assessment — access points, blind spots, and high-risk hours mapped before a single route is designed."
        ctaText="Get a Patrol Plan Built for Your Risk, Hours and Property Layout"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default PatrolPage;
