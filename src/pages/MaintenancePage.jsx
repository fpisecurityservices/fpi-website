import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, BulletItem, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA } from '../components/ServicePageKit';

const PlanCard = ({ name, tagline, bullets, bestFor, isMobile }) => (
  <div style={{ background: '#fff', borderRadius: 10, padding: isMobile ? '28px 22px' : '36px 30px', border: '1px solid #E2E6ED', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
    <H3 style={{ marginBottom: 4 }}>{name}</H3>
    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#006090', marginBottom: 18 }}>{tagline}</div>
    <div style={{ flex: 1 }}>
      {bullets.map(b => <BulletItem key={b} text={b} />)}
    </div>
    <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid #E2E6ED', fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#647184', lineHeight: 1.6 }}>
      <strong style={{ color: '#0F3554' }}>Best for:</strong> {bestFor}
    </div>
  </div>
);

const MaintenancePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security System Maintenance Services | Trusted Pros"
        description="Expert security system maintenance services to keep your cameras, alarms & surveillance running 24/7. Protect your investment — Contact FPI today!"
        ogTitle="Security System Maintenance Services | FPI Security"
        ogDescription="Proactive maintenance for cameras, alarms, and access control — including cybersecurity firmware patching — across six states."
        ogUrl="https://www.fpisecurity.com/service-maintenance"
      />

      <ServiceHero
        isMobile={isMobile}
        tags={['Preventive Maintenance', 'System Repair', 'Cybersecurity Patching', 'Three Plans']}
        title="Professional Security System Maintenance Services"
        intro="FPI provides professional security system maintenance services across Florida, Texas, Georgia, Arizona, Nevada, and California — covering surveillance cameras, alarm systems, access control, and remote monitoring infrastructure. Proactive, not reactive: we find degradation before it becomes failure."
        ctaText="Protect Your Investment — Request a Free Maintenance Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Emotional hook */}
      <Section isMobile={isMobile}>
        <H2>Is Your Security System Actually Working Right Now?</H2>
        <Body style={{ maxWidth: 860 }}>
          Most commercial security systems degrade quietly. Cameras drift out of focus and lose resolution. Firmware goes unpatched for years. Storage fills, and recording quietly stops. Access logs stop writing, sensors drift out of calibration, and backup batteries expire in place. None of it announces itself — the system looks exactly the same on the wall as the day it was installed. Nobody notices until an incident happens and the footage, the log, or the alarm that should have been there isn't. That is the gap FPI's maintenance services close: verified, documented confirmation that every layer of your system is doing its job — before you need it to.
        </Body>
      </Section>

      {/* What's included */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>What Our Security System Maintenance Services Include</H2>
        <Body>FPI maintenance services cover every layer of a commercial security system — from physical hardware to firmware and network security.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Surveillance & CCTV System Maintenance</H3>
            <Body>
              Camera lens cleaning, housing inspection, resolution verification, recording continuity checks, NVR health monitoring, and storage capacity review. FPI repairs surveillance systems under active service contracts — so a degraded camera is corrected on a scheduled visit, not discovered after an incident.
            </Body>
          </div>
          <div>
            <H3>Alarm System Maintenance & Testing</H3>
            <Body>
              Panel testing, sensor calibration, battery backup verification, false alarm log review, and communication path testing across cellular and broadband. An untested alarm is a liability exposure: if it fails during an incident, the failure — and the missing test records — become part of the claim.
            </Body>
          </div>
          <div>
            <H3>Access Control System Upkeep</H3>
            <Body>
              Technical teams service access control systems on a regular schedule: reader and controller health checks, credential audits that catch inactive users who still have working badges, lock mechanism testing, and software updates across your{' '}
              <InlineLink onClick={() => navigate('/access-control')}>access control infrastructure</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Remote Monitoring & System Health Checks</H3>
            <Body>
              Remote diagnostics detect system degradation before equipment failure occurs. FPI monitors system health remotely — catching offline cameras, storage failures, and network drops as they happen, and pairing naturally with{' '}
              <InlineLink onClick={() => navigate('/remote-video-monitoring')}>24/7 remote video monitoring</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Security Firmware & Cybersecurity Updates</H3>
          <Body>
            Security cameras run embedded software — firmware. When that software is not updated, it contains known vulnerabilities that attackers actively exploit; unpatched camera firmware creates exploitable vulnerabilities in business networks. FPI patches firmware as part of every maintenance cycle, treating your security system as part of your network security — because it is.
          </Body>
        </div>
      </Section>

      {/* Three plans */}
      <Section isMobile={isMobile}>
        <H2>Our 3 Maintenance Plans: Find the Right Fit for Your Business</H2>
        <Body>FPI offers three tiered maintenance plans — designed so you can match coverage level to your actual risk exposure and budget. Service agreements include scheduled inspections and technical support at every tier; pricing is quoted per property after a short assessment.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }}>
          <PlanCard
            isMobile={isMobile}
            name="Essential Plan"
            tagline="Remote Support & Digital Defense"
            bullets={[
              'Remote system health monitoring',
              'Firmware & cybersecurity patch management',
              'Digital incident alerts',
              'Remote diagnostics',
              'Email & phone support',
            ]}
            bestFor="Smaller commercial properties with newer installed systems — digital protection without on-site visits."
          />
          <PlanCard
            isMobile={isMobile}
            name="Preferred Plan"
            tagline="Proactive On-Site Maintenance"
            bullets={[
              'Everything in Essential',
              'Scheduled on-site visits',
              'Camera & sensor physical inspection',
              'Access control hardware testing',
              'NVR/DVR storage verification',
              'Priority response SLA',
            ]}
            bestFor="Mid-size commercial properties, retail, and healthcare — physical and digital maintenance on a schedule."
          />
          <PlanCard
            isMobile={isMobile}
            name="Elite Plan"
            tagline="Managed Security & Zero-Downtime Guarantee"
            bullets={[
              'Everything in Preferred',
              'Dedicated account manager',
              '24/7 remote monitoring integration',
              'Guaranteed response time SLA',
              'Zero-downtime guarantee on covered systems',
              'Annual vulnerability assessment',
              'Compliance documentation package',
            ]}
            bestFor="Enterprise, healthcare, and multi-site portfolios — full managed service where downtime is not an option."
          />
        </div>
        <Body style={{ maxWidth: 760 }}>
          Elite plan clients receive a zero-downtime guarantee on all covered systems — when a covered component degrades, FPI's response is measured in an SLA, not a best effort.
        </Body>
        <CTAButton onClick={() => navigate('/contact')}>Not Sure Which Plan Fits? Talk to a Specialist</CTAButton>
      </Section>

      {/* Why it can't wait */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Why Security Equipment Maintenance Can't Wait</H2>
        <Body>Deferred maintenance does not just reduce performance — it creates documented liability and predictable equipment failure at the worst possible time.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Reliability When It Counts Most</H3>
            <Body>
              Maintenance agreements guarantee system uptime for critical facilities. A security system that fails during an incident is worse than no system at all — it creates a false sense of protection while the incident unfolds, and a documentation gap when the claim is filed.
            </Body>
          </div>
          <div>
            <H3>Lower Total Cost of Ownership</H3>
            <Body>
              Preventive maintenance costs a fraction of emergency repair and system replacement. The math is consistent: one emergency camera replacement — hardware, rush labor, and the downtime in between — outweighs years of a maintenance plan. Maintenance contracts reduce equipment failure in security installations, and with it, the emergency spend.
            </Body>
          </div>
          <div>
            <H3>Cybersecurity: The Hidden Risk of Unpatched Cameras</H3>
            <Body>
              IP cameras and access control panels are networked devices, and their known firmware vulnerabilities are publicly listed in CVE databases — the industry's public catalog of software flaws. Attackers scan the internet for unpatched devices around the clock. A security camera running old firmware is not just a weaker camera; it is an open door into your business network, discoverable by anyone looking. Patching closes that door — which is why FPI treats it as standard maintenance, not an add-on.
            </Body>
          </div>
          <div>
            <H3>Predictable Budgeting With No Surprise Invoices</H3>
            <Body>
              A maintenance plan converts unpredictable emergency repair costs into a fixed monthly or annual line item — easier to budget, easier to justify to ownership, and free of emergency service call markups.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 760, marginTop: 8 }}>
          <H3>Compliance & Liability Protection</H3>
          <Body>
            Documented maintenance records are evidence of due diligence — relevant for insurance claims, HIPAA audits in healthcare, and legal proceedings after a security incident. A system with no maintenance log is harder to defend, and the premium math is real: Florida businesses without adequate security pay 30–40% higher insurance premiums (TechPro Security, 2025).
          </Body>
          <CTAButton onClick={() => navigate('/contact')}>See What a Maintenance Visit Includes</CTAButton>
        </div>
      </Section>

      {/* FPI difference */}
      <Section isMobile={isMobile}>
        <H2>The FPI Difference: Proactive, Not Reactive</H2>
        <Body style={{ maxWidth: 860 }}>
          Most security maintenance providers show up when something breaks. FPI builds a maintenance program designed to prevent the break from happening. That is the whole philosophy: scheduled inspections, remote diagnostics, and firmware patching catch degradation while it is still cheap and invisible — because maintenance contracts reduce equipment failure in security installations, and failure is always more expensive than prevention. Cybersecurity is a standard layer of every FPI plan, not an add-on: a maintained system is patched, not just dusted. And because FPI maintains what FPI installed, there is no learning curve and no third-party handoff — the team servicing your system is the team that designed it. Maintenance is how your{' '}
          <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance</InlineLink>,{' '}
          <InlineLink onClick={() => navigate('/access-control')}>access control</InlineLink>, and monitoring investments keep earning their keep, year after year.
        </Body>
      </Section>

      {/* Who we serve */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Who We Serve</H2>
        <Body>FPI provides security system maintenance services to commercial properties across all six states we serve — anchored by our South Florida headquarters and Dallas–Fort Worth operations.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Commercial Properties</H3>
            <Body>
              Office buildings, corporate campuses, and multi-tenant properties. Maintenance covers lobby cameras, stairwell coverage, access control panels, and NVR systems — with the documented service records property managers need for tenant-safety reporting.
            </Body>
          </div>
          <div>
            <H3>Retail & Loss Prevention</H3>
            <Body>
              Retail surveillance systems work hardest during peak hours. Maintenance keeps cameras calibrated, recording continuously, and producing evidence-grade footage when a shrinkage event occurs — because footage that almost identifies a suspect identifies no one.
            </Body>
          </div>
          <div>
            <H3>Healthcare Facilities</H3>
            <Body>
              HIPAA-regulated environments (HIPAA is the federal law governing patient privacy) require documented access logs and verified system uptime. FPI maintenance plans include compliance documentation packages for healthcare clients — service records an auditor can actually use.
            </Body>
          </div>
          <div>
            <H3>Industrial & Warehousing</H3>
            <Body>
              California, Florida, and Texas account for 54% of all U.S. cargo theft (NICB, 2025), and industrial environments punish hardware: dust, moisture, and vibration degrade perimeter cameras, thermal units, and access control faster than any office setting. FPI maintenance includes environmental rating verification and hardware integrity checks matched to those conditions.
            </Body>
          </div>
        </div>
        <CTAButton onClick={() => navigate('/contact')}>Get a Maintenance Plan for Your Property Type</CTAButton>
      </Section>

      {/* FAQ */}
      <Section isMobile={isMobile}>
        <H2>Security System Maintenance FAQs</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="How Often Should a Security System Be Serviced?"
            answer="Most commercial security systems should be serviced at minimum twice per year, with monthly remote health checks in between. High-risk facilities — healthcare, industrial, multi-site — benefit from quarterly on-site visits. FPI sets maintenance frequency from a risk assessment, not a fixed schedule."
          />
          <FAQItem
            question="What Does a Maintenance Visit Include?"
            answer="An FPI maintenance visit includes camera lens cleaning and resolution verification, NVR/DVR health checks, alarm sensor testing and battery verification, access control reader and lock testing, firmware updates, and a written service report delivered through the client portal."
          />
          <FAQItem
            question="What Is the Difference Between Repair and Preventive Maintenance?"
            answer="Repair is reactive — it happens after a failure occurs. Preventive maintenance is proactive — it identifies and resolves degradation before failure. Preventive maintenance reduces the frequency and cost of repairs and prevents system downtime during the incidents your system exists to catch."
          />
          <FAQItem
            question="Does My Surveillance System Need Cybersecurity Maintenance?"
            answer="Yes. IP cameras and access control systems run embedded software (firmware) that accumulates known vulnerabilities when not updated, and attackers actively scan for unpatched networked devices. FPI includes firmware patching and network vulnerability assessment in every maintenance plan."
          />
        </div>
        <div style={{ marginTop: 32, background: '#F4F6F8', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to a maintenance specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Request Your Security Maintenance Assessment Today"
        body="FPI conducts no-cost maintenance assessments for commercial properties across all six states we serve — evaluating system health, firmware status, coverage gaps, and cybersecurity exposure. No obligation, results within 48 hours."
        ctaText="Request My Free Maintenance Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default MaintenancePage;
