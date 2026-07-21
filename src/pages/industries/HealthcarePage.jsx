import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import useResponsive from '../../hooks/useResponsive';
import { Section, H2, H3, Body, CTAButton, Divider, FAQItem, InlineLink, ServiceHero, FinalCTA, Breadcrumb } from '../../components/ServicePageKit';

const HealthcarePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security for Hospitals & Healthcare Services | FPI"
        description="FPI provides healthcare security services & hospital security guards trained in HIPAA protocols for hospitals & clinics in FL & TX. Free assessment."
        ogTitle="Healthcare Security Services & Hospital Security Guards | FPI"
        ogDescription="HIPAA-trained, de-escalation-certified hospital security guards, HIPAA-compliant access control, and hospital surveillance cameras across FL & TX."
        ogUrl="https://www.fpisecurity.com/industries/healthcare-security-services"
      />
      <Breadcrumb isMobile={isMobile} trail={[
        { label: 'Home', onClick: () => navigate('/') },
        { label: 'Industries', onClick: () => navigate('/industries') },
        { label: 'Healthcare & Medical' },
      ]} />

      <ServiceHero
        isMobile={isMobile}
        tags={['HIPAA-Trained Officers', 'De-Escalation Certified', 'Restricted Area Access', '24/7 Monitoring']}
        title="Healthcare Security Services & Hospital Security Guards in FL & TX"
        intro="FPI provides healthcare security services for hospitals, clinics, and medical campuses across South Florida and Texas. FPI provides healthcare security services for hospitals and medical facilities in Florida and beyond — and the difference is training: FPI healthcare security guards are trained in HIPAA protocols and de-escalation before deployment, not general-purpose guards reassigned to a clinical environment. Security for hospitals demands a different standard, and every FPI officer meets it before their first shift."
        ctaText="Get a Free Healthcare Security Assessment"
        onCta={() => navigate('/contact')}
      />

      {/* Why specialized */}
      <Section isMobile={isMobile}>
        <H2>Why Healthcare Environments Require Specialized Security</H2>
        <Body>Hospitals and medical facilities face a security environment unlike any other — high patient vulnerability, restricted-area compliance requirements, and the highest rate of workplace violence of any US industry, all within a setting that must remain calm and therapeutic.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Workplace Violence — The #1 Healthcare Security Risk</H3>
            <Body>
              Healthcare workers are five times more likely to experience workplace violence than workers in other industries (Bureau of Labor Statistics, 2023), and 75% of workplace assaults occur in healthcare and social service settings (OSHA, 2023). From patient-on-staff assaults to domestic incidents that follow patients into clinical settings, a guard without de-escalation training in this environment is a liability, not an asset.
            </Body>
          </div>
          <div>
            <H3>HIPAA Compliance &amp; Patient Privacy Requirements</H3>
            <Body>
              HIPAA — the Health Insurance Portability and Accountability Act — requires healthcare facilities to protect patient privacy in access control systems, surveillance camera placement, and incident documentation. A camera aimed at a patient examination area, or an access log that exposes patient movement, can create HIPAA liability. FPI designs all systems to HIPAA standards from the start.
            </Body>
          </div>
          <div>
            <H3>Restricted Area Access — Pharmacy, Medication Storage &amp; Patient Records</H3>
            <Body>
              Biometric systems prevent unauthorized entry in sensitive areas. Pharmacy areas, medication storage rooms, and patient records areas require documented credential management — not just a locked door. Every access event must be logged and auditable for regulatory compliance.
            </Body>
          </div>
          <div>
            <H3>Emergency Department &amp; After-Hours Vulnerability</H3>
            <Body>
              Emergency departments run 24/7 under high-stress conditions — the environment most associated with patient-on-staff incidents. After-hours periods with minimal staff create unauthorized-access risk in parking structures, loading docks, and building entry points. Security for hospitals has to cover both the crisis and the quiet 3 AM shift.
            </Body>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>FPI Healthcare Security Services</H2>
        <Body>FPI provides a complete healthcare security program — from HIPAA-trained hospital security guards and access control for restricted areas to hospital surveillance cameras and after-hours patrol.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Hospital Security Guards — HIPAA-Trained &amp; De-Escalation Certified</H3>
            <Body>
              FPI healthcare security guards are trained in HIPAA protocols and de-escalation before deployment, and FPI provides unarmed security guards for businesses across every setting. Our healthcare officers train in HIPAA patient privacy protocols, de-escalation techniques for clinical environments, emergency response procedures, and your facility's specific post orders before day one. Armed options are available for high-risk areas including emergency departments. Explore our{' '}
              <InlineLink onClick={() => navigate('/security-officers')}>security guard services</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Access Control for Restricted Areas — HIPAA-Compliant</H3>
            <Body>
              FPI installs access control systems for secured facilities, and access control technology logs every entry and exit event. We deploy HIPAA-compliant access control for pharmacy areas, medication storage, patient records, and restricted clinical zones — keycard, biometric, and mobile credential options, every entry auditable. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>security systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Hospital Surveillance Cameras &amp; CCTV Systems</H3>
            <Body>
              FPI installs surveillance systems for businesses in Florida and every market we serve. Our hospital surveillance camera systems cover entrances, emergency department waiting areas, parking structures, and restricted-zone access points — designed with HIPAA patient privacy boundaries in mind. Explore our{' '}
              <InlineLink onClick={() => navigate('/surveillance-systems')}>surveillance systems</InlineLink>.
            </Body>
          </div>
          <div>
            <H3>Mobile Patrol for Medical Campuses &amp; Parking Structures</H3>
            <Body>
              Medical campuses cover large footprints — multiple buildings, parking structures, and outdoor areas. GPS-tracked patrol vehicles cover the full campus perimeter on randomized schedules, with every visit logged and accessible in the client portal. Explore our{' '}
              <InlineLink onClick={() => navigate('/mobile-patrol')}>mobile patrol services</InlineLink>.
            </Body>
          </div>
        </div>
        <div style={{ maxWidth: 820, marginTop: 8 }}>
          <H3>24/7 Remote Monitoring for After-Hours Coverage</H3>
          <Body>
            FPI provides 24/7 remote monitoring in South Florida and beyond. Our SOC watches hospital and clinic camera feeds after hours — detecting unauthorized access, parking structure incidents, and perimeter breaches, with every alert human-verified before response so patient care is never disturbed by a false alarm. Explore our{' '}
            <InlineLink onClick={() => navigate('/remote-video-monitoring')}>remote video monitoring</InlineLink>.
          </Body>
        </div>
      </Section>

      {/* Why choose */}
      <Section isMobile={isMobile}>
        <H2>Why Healthcare Facilities Choose FPI Security</H2>
        <Body>Healthcare facilities choose FPI because a security guard in a clinical environment must be trained differently — and because HIPAA-compliant systems require design expertise, not just hardware installation.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Healthcare-Specific Training — Not Generic Guards</H3>
            <Body>
              Most security companies deploy the same guard to a warehouse and a hospital. FPI trains healthcare officers separately — de-escalation, HIPAA protocols, emergency response, and facility-specific post orders. The difference shows up in incident outcomes, not just the training file.
            </Body>
          </div>
          <div>
            <H3>HIPAA-Compliant System Design</H3>
            <Body>
              FPI's surveillance camera placement, access control configuration, and incident documentation are designed with HIPAA requirements in mind from the start — not retrofitted for compliance after installation. Every system deploys without creating patient privacy liability.
            </Body>
          </div>
          <div>
            <H3>Documented Compliance for Regulatory Audits</H3>
            <Body>
              Surveillance systems provide video evidence after incidents, and every access control event, incident report, and patrol log is timestamped in the FPI client portal — exportable for Joint Commission, CMS (Centers for Medicare &amp; Medicaid Services), and state health department audits. Florida businesses without adequate security pay 30–40% more in insurance premiums (TechPro Security, 2025); documentation protects both compliance and cost.
            </Body>
          </div>
          <div>
            <H3>Rapid Verified Response — SOC-Backed</H3>
            <Body>
              Monitoring services reduce response time during security incidents. When FPI's SOC detects an anomaly in a hospital camera feed, a live operator verifies before dispatching — no false alarm fatigue in a clinical environment where unnecessary disturbance affects patient care. Active security reduces property crimes 16% (TechPro Security, 2025). Explore our{' '}
              <InlineLink onClick={() => navigate('/technology/soc')}>Security Operations Center</InlineLink>.
            </Body>
          </div>
        </div>
      </Section>

      {/* Facility types */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Healthcare Security by Facility Type</H2>
        <Body>Different healthcare environments carry different security profiles — a trauma center emergency department and a medical office park require entirely different programs.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Hospitals &amp; Trauma Centers</H3>
            <Body>
              Hospitals require 24/7 guard coverage in emergency departments, lobby security, restricted-area access control, parking structure patrol, and after-hours perimeter monitoring. FPI manages the full hospital security program under one agreement.
            </Body>
          </div>
          <div>
            <H3>Outpatient Clinics &amp; Ambulatory Care Centers</H3>
            <Body>
              Outpatient facilities face high patient volume during business hours, vulnerable patients in waiting areas, and after-hours unauthorized access. FPI provides lobby officers, access control, and after-hours monitoring for ambulatory care facilities.
            </Body>
          </div>
          <div>
            <H3>Medical Office Buildings &amp; Professional Parks</H3>
            <Body>
              Multi-tenant medical office buildings need zone-specific access control for each practice, shared lobby management, and parking structure coverage. FPI runs the full medical office building security program under one agreement.
            </Body>
          </div>
          <div>
            <H3>Behavioral Health &amp; Mental Health Facilities</H3>
            <Body>
              Behavioral health environments require officers with advanced de-escalation training — patient-on-staff incidents are more common and more complex than in general healthcare settings. FPI trains officers specifically for behavioral health before deployment.
            </Body>
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section isMobile={isMobile}>
        <H2>Hospital Surveillance Cameras &amp; Healthcare Security Technology</H2>
        <Body>FPI installs and manages hospital surveillance cameras and access control systems designed specifically for healthcare environments — HIPAA-compliant placement, AI-assisted detection, and live SOC monitoring after hours.</Body>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>HIPAA-Compliant Hospital Surveillance Camera Placement</H3>
            <Body>
              CCTV cameras monitor facilities in real time. Hospital surveillance cameras cover entrance and exit points, waiting areas, parking structures, and restricted-zone access — designed to avoid patient care areas that would create HIPAA liability. FPI's system design follows HIPAA boundary requirements.
            </Body>
          </div>
          <div>
            <H3>Biometric Access Control for Pharmacy &amp; Restricted Areas</H3>
            <Body>
              Biometric systems prevent unauthorized entry in sensitive areas. Fingerprint and facial recognition for pharmacy storage, medication rooms, and patient records areas provide the highest security tier with a complete audit trail for regulatory compliance.
            </Body>
          </div>
          <div>
            <H3>FPI Client Portal — Compliance Documentation on Demand</H3>
            <Body>
              Access control logs, incident reports, patrol records, and camera alert history — accessible from any device, 24/7, and exportable for Joint Commission, CMS, and state health department audits. The Director of Security pulls the last 90 days of access logs before an inspection, no vendor calls needed.
            </Body>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Healthcare Security Services</H2>
        <Divider />
        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="What is security for hospitals and how does it differ from standard security?"
            answer="Security for hospitals requires officers trained in HIPAA patient privacy protocols, de-escalation techniques for clinical environments, and emergency response procedures — skills standard security guards do not receive. FPI provides hospital-specific training for every officer before their first shift at a healthcare facility."
          />
          <FAQItem
            question="What healthcare security services does FPI provide?"
            answer="FPI provides HIPAA-trained hospital security guards, HIPAA-compliant access control for restricted areas, hospital surveillance cameras, mobile patrol for medical campuses, and 24/7 remote monitoring — for hospitals, clinics, and medical office buildings across South Florida and Texas."
          />
          <FAQItem
            question="Are FPI hospital security guards trained for healthcare environments?"
            answer="Yes. FPI hospital security guards receive healthcare-specific training before deployment — including HIPAA patient privacy protocols, de-escalation techniques for clinical environments, emergency response procedures, and your facility's specific post orders. FPI does not deploy general-purpose guards to healthcare environments."
          />
          <FAQItem
            question="Does FPI install HIPAA-compliant surveillance cameras for hospitals?"
            answer="Yes. FPI designs and installs hospital surveillance camera systems with HIPAA-compliant placement — covering entrances, emergency department waiting areas, parking structures, and restricted-zone access points while avoiding patient care areas that would create privacy liability. FPI serves South Florida and Texas."
          />
          <FAQItem
            question="How does FPI handle access control for pharmacy and restricted healthcare areas?"
            answer="FPI installs HIPAA-compliant access control systems for pharmacy areas, medication storage, and patient records — including biometric options that provide the highest security tier with a complete audit trail. Every access event is logged and exportable for regulatory compliance audits."
          />
          <FAQItem
            question="Does FPI provide security for outpatient clinics and medical office buildings?"
            answer="Yes. FPI provides security services for the full spectrum of healthcare facilities — hospitals, outpatient clinics, ambulatory care centers, behavioral health facilities, and medical office buildings across South Florida and the Dallas–Fort Worth area in Texas."
          />
        </div>
        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Talk to a healthcare security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      <FinalCTA
        isMobile={isMobile}
        title="Get a Free Healthcare Security Assessment"
        body="FPI's no-cost assessment covers officer training requirements, access control compliance for restricted areas, hospital surveillance camera placement, and patrol coverage — for hospitals, clinics, and medical campuses across South Florida and the Dallas–Fort Worth area. The output is a written proposal designed for your facility's specific regulatory and operational requirements."
        ctaText="Get a Free Healthcare Security Assessment"
        onCta={() => navigate('/contact')}
      />
    </div>
  );
};

export default HealthcarePage;
