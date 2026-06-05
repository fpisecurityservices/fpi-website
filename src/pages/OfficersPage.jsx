import { useNavigate } from 'react-router-dom';
import { Phone, Check, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import useResponsive from '../hooks/useResponsive';

const Section = ({ children, bg = '#fff', py = '64px 48px', pyMobile = '48px 24px', isMobile }) => (
  <div style={{ background: bg, padding: isMobile ? pyMobile : py }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>{children}</div>
  </div>
);

const H2 = ({ children, style = {} }) => (
  <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 34, fontWeight: 700, color: '#0F3554', marginBottom: 12, lineHeight: 1.15, ...style }}>{children}</h2>
);

const H3 = ({ children, style = {} }) => (
  <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 24, fontWeight: 700, color: '#0F3554', marginBottom: 10, lineHeight: 1.2, ...style }}>{children}</h3>
);

const Body = ({ children, style = {} }) => (
  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#4E5A6E', lineHeight: 1.8, marginBottom: 16, ...style }}>{children}</p>
);

const CTAButton = ({ children, onClick, variant = 'primary' }) => (
  <button
    onClick={onClick}
    style={{
      background: variant === 'primary' ? '#006090' : 'transparent',
      color: variant === 'primary' ? '#fff' : '#006090',
      border: variant === 'primary' ? 'none' : '2px solid #006090',
      fontFamily: "'Barlow', sans-serif",
      fontSize: 15,
      fontWeight: 600,
      padding: '13px 28px',
      borderRadius: 4,
      cursor: 'pointer',
      letterSpacing: '0.04em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
    }}
    onMouseEnter={e => { e.currentTarget.style.background = variant === 'primary' ? '#00507A' : '#EEF4F8'; }}
    onMouseLeave={e => { e.currentTarget.style.background = variant === 'primary' ? '#006090' : 'transparent'; }}
  >
    {children}
    <ChevronRight size={16} />
  </button>
);

const BulletItem = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
    <div style={{ width: 20, height: 20, background: '#E8EDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
      <Check size={11} style={{ color: '#006090' }} />
    </div>
    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.65 }}>{text}</span>
  </div>
);

const Divider = () => <div style={{ borderTop: '1px solid #E2E6ED', margin: '32px 0' }} />;

const StatBox = ({ stat, label, source }) => (
  <div style={{ background: '#F4F6F8', borderRadius: 8, padding: '24px 20px', border: '1px solid #E2E6ED', flex: 1, minWidth: 200 }}>
    <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 36, fontWeight: 700, color: '#006090', marginBottom: 6 }}>{stat}</div>
    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#0F3554', fontWeight: 600, marginBottom: 4 }}>{label}</div>
    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#8A96A8' }}>{source}</div>
  </div>
);

const StepCard = ({ number, title, children }) => (
  <div style={{ background: '#F4F6F8', borderRadius: 8, padding: '28px 24px', border: '1px solid #E2E6ED', position: 'relative' }}>
    <div style={{ width: 36, height: 36, background: '#006090', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 18, fontWeight: 700, color: '#fff' }}>{number}</span>
    </div>
    <H3 style={{ marginBottom: 8 }}>{title}</H3>
    {children}
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div style={{ borderBottom: '1px solid #E2E6ED', paddingBottom: 24, marginBottom: 24 }}>
    <H3 style={{ fontSize: 20, marginBottom: 8 }}>{question}</H3>
    <Body style={{ marginBottom: 0 }}>{answer}</Body>
  </div>
);

const OfficersPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 68 }}>
      <SEO
        title="Security Officer Services | Professional & Licensed Guards"
        description="Need trusted security officer services? Our armed & unarmed guards protect your business 24/7. Licensed, professional & reliable — Contact Us Today!"
        ogTitle="Security Officer Services | Professional & Licensed Guards | FPI Security"
        ogDescription="Need trusted security officer services? Our armed & unarmed guards protect your business 24/7. Licensed, professional & reliable — Contact Us Today!"
        ogUrl="https://www.fpisecurity.com/services/officers"
      />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px 56px' : '64px 48px 72px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {['On-Site', 'Armed/Unarmed', 'Licensed', '24-Hour Service'].map(t => (
                <span key={t} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,96,144,0.2)', color: '#8998B1', padding: '4px 10px', borderRadius: 4 }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 38 : 54, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>
              Professional Security Guard Services: Reliable Protection
            </h1>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, color: '#B0BDD0', lineHeight: 1.75, marginBottom: 32 }}>
              FPI Security Services provides professional security guard services across South Florida and Texas — delivering armed and unarmed officers who protect your people, property, and operations around the clock. When it matters most, reliable security guard services are not a luxury — they are a business necessity.
            </p>
            <CTAButton onClick={() => navigate('/contact')}>Get a Free Quote — Contact Our Team, Available 24/7</CTAButton>
          </div>
        </div>
      </div>

      {/* Section 1: What Our Security Officer Services Include */}
      <Section isMobile={isMobile}>
        <H2>What Our Security Officer Services Include</H2>
        <Body>FPI delivers a full range of security officer services — from on-site guards and armed security guard services to commercial patrol coverage — tailored to your property's unique requirements.</Body>
        <Divider />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40 }}>
          <div>
            <H3>On-Site Security Guards for Businesses & Properties</H3>
            <Body>
              On-site security guards provide a physical deterrent that cameras and alarms alone cannot replicate. FPI deploys professional security officers across South Florida and Texas who manage access control, monitor entry and exit points, respond to incidents in real time, and maintain a visible presence that discourages criminal activity before it starts. Whether you need coverage for a single location in Miami-Dade or multiple properties across Dallas–Fort Worth, our on-site guards integrate seamlessly with your existing operations.
            </Body>
          </div>
          <div>
            <H3>Armed Security Guard Services</H3>
            <Body>
              FPI provides armed security guard services through licensed officers who carry firearms in compliance with Florida Statute Chapter 493. Our armed security guards are deployed in high-risk environments — financial institutions, pharmaceutical warehouses, executive protection, and locations with elevated threat profiles. Armed officers respond immediately to security threats and maintain verified credentials through ongoing training. For properties that require the strongest deterrent,{' '}
              <span
                onClick={() => navigate('/services/patrol')}
                style={{ color: '#006090', cursor: 'pointer', textDecoration: 'underline' }}
              >
                explore our armed guard services
              </span>{' '}
              in detail.
            </Body>
          </div>
          <div>
            <H3>Unarmed Security Guard Services</H3>
            <Body>
              FPI's unarmed security guards conduct regular patrols inside facilities, monitor access points, and report incidents in real time through our proprietary client portal. Every unarmed officer carries out documented patrol rounds, logs observations, and escalates issues immediately when needed. For environments that require a professional presence without a visible firearm, our unarmed guards deliver accountability and deterrence. Learn more about our{' '}
              <span
                onClick={() => navigate('/services/officers')}
                style={{ color: '#006090', cursor: 'pointer', textDecoration: 'underline' }}
              >
                unarmed security guard options
              </span>.
            </Body>
          </div>
          <div>
            <H3>Commercial Security Guards</H3>
            <Body>
              Commercial security guards from FPI are trained for professional business environments — office buildings, retail centers, and industrial facilities where a uniformed presence reinforces safety and operational order. Our officers arrive in professional attire with site-specific briefings, ensuring your tenants, staff, and customers experience a consistent, trustworthy security presence from day one.
            </Body>
          </div>
        </div>

        <div style={{ marginTop: 36, textAlign: isMobile ? 'left' : 'center' }}>
          <CTAButton onClick={() => navigate('/contact')}>View Our Armed Guard Services</CTAButton>
        </div>
      </Section>

      {/* Section 2: Armed vs. Unarmed */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Armed vs. Unarmed Security Guards — Which One Does Your Business Need?</H2>
        <Body>
          The core difference between armed and unarmed security guards is this: armed guards carry licensed firearms and are trained to respond to active threats, while unarmed guards provide access control, deterrence, and monitoring in environments where visible force is not required or appropriate.
        </Body>
        <Divider />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <H3>When to Choose Armed Security Guards</H3>
            <Body>Armed guards are the right choice when your environment presents elevated risk, high-value assets, or after-hours exposure that demands an immediate response capability.</Body>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              {[
                'High-value inventory or cash-handling environments (banks, jewelry, pharmaceuticals)',
                'Late-night operations in areas with elevated crime statistics',
                'Locations requiring visible armed deterrence to prevent escalation',
                'Facilities handling sensitive materials or data centers',
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 8 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <H3>When to Choose Unarmed Security Guards</H3>
            <Body>Unarmed guards are the right fit when your priority is professional presence, access management, and incident documentation in a lower-risk or customer-facing setting.</Body>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              {[
                'Office building lobbies and corporate campuses',
                'HOA communities where a welcoming but authoritative presence is needed',
                'Retail environments focused on loss prevention and customer interaction',
                'Healthcare reception areas requiring de-escalation, not armed response',
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.7, marginBottom: 8 }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <H3>Industries That Require Each Type</H3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#fff', borderRadius: 8, padding: '20px 24px', border: '1px solid #E2E6ED' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>Armed Guards</div>
              {['Financial Institutions & Banks', 'Pharmaceutical & Medical Facilities', 'Construction Sites (overnight)', 'Industrial Warehouses & Cargo', 'Car Dealerships', 'Government & Municipal Buildings'].map((item, i) => (
                <div key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', padding: '6px 0', borderBottom: i < 5 ? '1px solid #F0F2F5' : 'none' }}>{item}</div>
              ))}
            </div>
            <div style={{ background: '#fff', borderRadius: 8, padding: '20px 24px', border: '1px solid #E2E6ED' }}>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>Unarmed Guards</div>
              {['HOA & Residential Communities', 'Retail & Shopping Centers', 'Corporate Office Buildings', 'Healthcare & Hospital Facilities', 'Educational Campuses', 'Special Events & Venues'].map((item, i) => (
                <div key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', padding: '6px 0', borderBottom: i < 5 ? '1px solid #F0F2F5' : 'none' }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: How Our Security Guard Hiring Process Works */}
      <Section isMobile={isMobile}>
        <H2>How Our Security Guard Hiring Process Works</H2>
        <Body>Getting started with FPI is straightforward. We eliminate guesswork with a structured four-step process that matches the right guard type, schedule, and technology to your specific property and risk profile.</Body>
        <Divider />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 24, marginBottom: 40 }}>
          <StepCard number="1" title="Step 1 — Free Security Assessment">
            <Body style={{ marginBottom: 0 }}>
              Before recommending any service, FPI conducts a no-cost security assessment of your property. Our team evaluates physical layout, access points, operating hours, and risk factors to identify coverage gaps you may not have noticed. There is no obligation — the assessment gives you an accurate picture of your actual security needs before you commit to a plan.
            </Body>
          </StepCard>

          <StepCard number="2" title="Step 2 — Customized Security Plan">
            <Body style={{ marginBottom: 0 }}>
              Based on the assessment findings, FPI designs a customized security plan — specifying guard type (armed or unarmed), deployment schedule, patrol routes, reporting cadence, and escalation protocols. No two plans are identical. Your property, your industry, and your operational hours each shape a unique program built around what you actually need.
            </Body>
          </StepCard>

          <StepCard number="3" title="Step 3 — Guard Deployment & Onboarding">
            <Body style={{ marginBottom: 0 }}>
              Deployed guards receive a full site-specific briefing before their first shift. Every FPI officer is uniformed, background-checked, and licensed under Florida Statute Chapter 493. Officers are oriented to your property's specific protocols, emergency contacts, access procedures, and reporting standards — so there is no learning curve on day one.
            </Body>
          </StepCard>

          <StepCard number="4" title="Step 4 — Ongoing Monitoring & Reporting via Client Portal">
            <Body style={{ marginBottom: 0 }}>
              FPI's proprietary client portal gives you live GPS dispatch visibility into where your guards are, when they arrived, and what they reported. Every patrol round generates a real-time incident log with photo documentation and custom analytics. If you have ever asked "how do I know the guards are actually there?" — the client portal answers that question with verifiable data, not a phone call.
            </Body>
          </StepCard>
        </div>

        <CTAButton onClick={() => navigate('/contact')}>Request a Free Security Assessment</CTAButton>
      </Section>

      {/* Section 4: Why Choose Our Licensed & Professional Security Guards */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Why Choose Our Licensed & Professional Security Guards</H2>
        <Body>What separates FPI guards from a staffing agency placement is verifiable credentials and the technology platform behind them — not a sales brochure.</Body>
        <Divider />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>Fully Licensed & Background-Checked Guards</H3>
            <Body>
              Every FPI security officer is licensed under Florida Statute Chapter 493, the state's governing regulation for private security professionals. Officers undergo comprehensive background checks covering criminal history, employment verification, and identity confirmation. For your business, this matters directly — documented guard credentials reduce your liability exposure if an incident ever leads to a legal claim involving your security provider.
            </Body>
          </div>

          <div>
            <H3>Armed & Unarmed Options Available</H3>
            <Body>
              FPI provides both armed and unarmed security guards through the same company and the same technology platform. If your security needs change — a new site opens, a threat level escalates, or your coverage requirements evolve — you can adjust guard type without switching vendors or restarting the onboarding process.
            </Body>
          </div>

          <div>
            <H3>24/7 Availability & Fast Response Time</H3>
            <Body>
              FPI operates around the clock — 24 hours a day, 365 days a year. Our live dispatch team monitors active deployments in real time and can respond to reported incidents immediately, not the next business day. If a situation escalates on-site, your guard is backed by a dispatch infrastructure that acts in minutes, not hours.
            </Body>
          </div>

          <div>
            <H3>Advanced Training & Certified Professionals</H3>
            <Body>
              FPI guards receive site-specific training that goes beyond standard certification requirements. Training includes de-escalation protocols for confrontational situations, emergency response procedures, access control best practices, and client-specific operational requirements. Guards are briefed on your property before deployment — not after their first incident.
            </Body>
          </div>

          <div style={{ gridColumn: isMobile ? '1' : 'span 2' }}>
            <H3>Proprietary Client Portal & Real-Time Reporting</H3>
            <Body>
              FPI's client portal is the platform that separates us from security companies that offer guards alone. The portal delivers GPS patrol tracking, photo-documented incident reports, and a custom analytics dashboard — all accessible in real time. You know where every officer is, what they observed, and when. That level of accountability is what responsible security management looks like.
            </Body>
          </div>
        </div>
      </Section>

      {/* Section 5: How Professional Security Guards Protect Your Business Investment */}
      <Section isMobile={isMobile}>
        <H2>How Professional Security Guards Protect Your Business Investment</H2>
        <Body>Security is not a cost center — it is a measurable investment in protecting your revenue, your liability profile, and your brand. Professional security guards deliver returns that show up in insurance premiums, loss reports, and tenant retention.</Body>
        <Divider />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 32, marginBottom: 48 }}>
          <StatBox stat="$202K" label="Average cargo theft incident value" source="NICB 2025" />
          <StatBox stat="30–40%" label="Insurance premium increase without adequate security" source="TechPro Security 2025" />
          <StatBox stat="16%" label="Reduction in property crimes with active security vs. gate-only" source="TechPro Security 2025" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 40 }}>
          <div>
            <H3>Reducing Financial Losses & Theft</H3>
            <Body>
              Visible, on-site security guard services are one of the most effective deterrents against theft, vandalism, and unauthorized access. According to the NICB (2025), the average cargo theft incident costs businesses $202,000. That single statistic illustrates what is at stake when perimeter security is inadequate. Armed officers deter criminal activity on-site before a theft event occurs — and that prevention is far less expensive than a single loss.
            </Body>
          </div>
          <div>
            <H3>Preventing Liability & Legal Risks</H3>
            <Body>
              Businesses with documented security programs — patrol logs, incident reports, access records — carry measurably lower liability exposure. Florida businesses without adequate security pay 30–40% higher insurance premiums than those with verified guard programs (TechPro Security, 2025). FPI's client portal generates the documentation insurers and courts require: timestamped patrol records, photo-documented incidents, and chain-of-custody logging that protects your business if a claim is ever filed.
            </Body>
          </div>
          <div>
            <H3>Protecting Brand Reputation & Customer Trust</H3>
            <Body>
              The professional appearance and conduct of your security officers directly shapes how customers, tenants, and partners perceive your business. For retail locations, office buildings, and car dealerships where customer interaction happens on-site, a uniformed FPI officer communicates that your organization takes safety seriously. That visible commitment builds trust and reinforces the brand image your marketing team works to establish.
            </Body>
          </div>
        </div>
      </Section>

      {/* Section 6: Industries We Serve */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Industries We Serve</H2>
        <Body>FPI provides security guard services across a wide range of industries in Florida and Texas. Each deployment is tailored to the regulatory environment, operational schedule, and risk profile of your specific sector.</Body>
        <Divider />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 40 }}>
          <div>
            <H3>HOA & Residential Community Security</H3>
            <Body>
              FPI guards manage gated community access, conduct regular patrol rounds, and document every visitor entry and exit. Beyond safety, professional on-site security creates measurable property value: gated communities with active security programs see homes sell for an average of $30,000 more (TechPro Security, 2025), and active security reduces property crimes 16% compared to gate-only setups. For HOA boards, our client portal provides the patrol documentation and incident reporting your board of directors requires for accountability.
            </Body>
          </div>

          <div>
            <H3>Commercial & Office Building Security</H3>
            <Body>
              FPI commercial security guards manage lobby access control, provide visible after-hours deterrence, and document all after-business-hours activity for property management reporting. Our officers are trained to project professionalism for tenant-facing interactions while maintaining strict access protocols — delivering both the safety function and the brand standard your tenants expect.
            </Body>
          </div>

          <div>
            <H3>Retail & Shopping Center Security</H3>
            <Body>
              In retail environments, FPI guards provide a dual function: loss prevention deterrence and customer-facing professionalism. Our officers monitor floor activity, manage parking lot coverage, and respond to shoplifting incidents with documented procedures. Visible security in retail reduces theft events and reassures customers that the property is actively managed and safe.
            </Body>
          </div>

          <div>
            <H3>Construction Site Security</H3>
            <Body>
              Active construction sites are high-value theft targets — equipment, materials, and tools represent significant capital at risk overnight. FPI guards prevent unauthorized access, document contractor arrivals and departures, and provide overnight coverage during the highest-risk hours. Our officers reduce equipment theft and vandalism that typically costs projects weeks of delays and tens of thousands in replacement costs.
            </Body>
          </div>

          <div>
            <H3>Healthcare & Hospital Security</H3>
            <Body>
              Healthcare environments demand a security officer who can de-escalate emotionally charged situations without resorting to force. FPI guards deployed in hospitals and clinical settings receive specialized training in verbal de-escalation, sensitive environment protocols, and HIPAA-aligned access control procedures. Our officers protect patients, staff, and visitors while maintaining the calm, professional atmosphere healthcare facilities require.
            </Body>
          </div>

          <div>
            <H3>Industrial & Warehouse Security</H3>
            <Body>
              California, Florida, and Texas account for 54% of all U.S. cargo theft, with total losses up 60% in 2025 to $725 million (NICB, 2025). FPI deploys armed security guards at industrial facilities and warehouses to protect perimeter access, monitor loading dock activity, and provide overnight coverage when cargo risk is highest. Our industrial security program integrates with{' '}
              <span
                onClick={() => navigate('/services/remote')}
                style={{ color: '#006090', cursor: 'pointer', textDecoration: 'underline' }}
              >
                remote video monitoring
              </span>{' '}
              for layered protection that covers every shift.
            </Body>
          </div>

          <div style={{ gridColumn: isMobile ? '1' : 'span 2' }}>
            <H3>Car Dealership Security</H3>
            <Body>
              Car dealerships face a concentrated and growing theft threat. In Florida alone, a criminal ring stole more than 30 vehicles from over 20 dealerships — resulting in losses exceeding $2.5 million (Patch, 2024). Miami-Dade County projects vehicle theft costs to reach $69.3 million in 2025 (CrimeGrade, 2025). FPI armed security guards provide overnight lot coverage and access control for high-value inventory. Our client portal delivers GPS-documented patrol logs and photo-verified round reports — giving your insurance carrier the documentation it requires and your management team real-time oversight of every shift.
            </Body>
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <CTAButton onClick={() => navigate('/contact')}>See How We Protect Your Business</CTAButton>
        </div>
      </Section>

      {/* Section 7: Testimonials */}
      <Section isMobile={isMobile}>
        <H2>What Our Clients Say About Our Security Services</H2>
        <Body style={{ color: '#8A96A8', fontStyle: 'italic', fontSize: 13 }}>Real client testimonials to be added before publication.</Body>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { placeholder: '[CLIENT NAME, TITLE, COMPANY — HOA or Residential]', quote: '[FPI has transformed the safety and accountability of our community. The client portal alone has made our board’s job significantly easier — we have documentation for everything.]' },
            { placeholder: '[CLIENT NAME, TITLE, COMPANY — Commercial or Industrial]', quote: '[Since deploying FPI guards at our facility, we have seen a measurable reduction in unauthorized access incidents. The real-time reporting gives our management team the visibility we were missing.]' },
            { placeholder: '[CLIENT NAME, TITLE, COMPANY — Retail or Car Dealership]', quote: '[Our dealership needed guards who understood the value of what they were protecting. FPI delivered professional, licensed officers with the documentation trail our insurance provider required.]' },
          ].map((t, i) => (
            <div key={i} style={{ background: '#F4F6F8', borderRadius: 8, padding: '28px 24px', border: '1px solid #E2E6ED', borderLeft: '4px solid #006090' }}>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4E5A6E', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 16 }}>{t.quote}</p>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, color: '#8A96A8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.placeholder}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 8: FAQ */}
      <Section bg="#F4F6F8" isMobile={isMobile}>
        <H2>Frequently Asked Questions About Security Guard Services</H2>
        <Divider />

        <div style={{ maxWidth: 860 }}>
          <FAQItem
            question="How much do security guard services cost?"
            answer="Security guard service costs vary based on guard type (armed or unarmed), coverage hours, location, and contract duration. Armed guards carry higher rates than unarmed officers due to licensing and training requirements. FPI provides a no-cost security assessment and delivers a custom quote based on your specific property and coverage needs — contact us to get started."
          />
          <FAQItem
            question="What is the difference between armed and unarmed security guards?"
            answer="Armed security guards carry licensed firearms in compliance with Florida Statute Chapter 493 and are deployed in high-risk environments where an immediate threat response capability is required. Unarmed security guards provide access control, regular patrols, and real-time incident reporting in lower-risk or customer-facing settings where a professional presence — not armed force — is the priority."
          />
          <FAQItem
            question="Are your security officers licensed and insured?"
            answer="Yes. All FPI security officers are licensed under Florida Statute Chapter 493 and undergo comprehensive background checks before deployment. FPI carries full commercial liability insurance on all guard operations. Documentation of officer licensing and company insurance coverage is available upon request for client records or insurance carrier requirements."
          />
          <FAQItem
            question="Do you offer long-term and short-term contracts?"
            answer="FPI offers flexible contract structures for both ongoing security needs and temporary coverage requirements. Whether you need a permanent security post, seasonal coverage for a retail location, guards for a construction project timeline, or event security for a one-time occasion, FPI designs a contract that fits your operational schedule — not a standard template."
          />
          <FAQItem
            question="How quickly can you deploy security guards?"
            answer="FPI can deploy security guards rapidly following the initial property assessment and plan approval. Our 24/7 live dispatch team manages scheduling and deployment logistics through our proprietary platform, enabling faster onboarding than traditional security staffing processes. Contact us to discuss your timeline — we will confirm a realistic deployment schedule for your specific situation."
          />
          <FAQItem
            question="Do you provide security guard services in Florida and Texas?"
            answer="Yes. FPI Security Services operates throughout South Florida — including Miami-Dade County, Broward County, and Palm Beach County — and across the Dallas–Fort Worth metro area in Texas. Whether your property is in Miami, Fort Lauderdale, Boca Raton, or Dallas, our guards are licensed and operational in your market."
          />
        </div>

        <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, padding: '24px 28px', border: '1px solid #E2E6ED', display: 'inline-flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#0F3554', fontWeight: 600 }}>Still have questions? Talk to a security specialist.</span>
          <a href="tel:8003744316" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#006090', fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 700 }}>
            <Phone size={18} />
            (800) 374-4316
          </a>
        </div>
      </Section>

      {/* Final CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: isMobile ? '48px 24px' : '64px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 30 : 38, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Get a Free Quote for Professional Security Guard Services Today</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, color: '#B0BDD0', marginBottom: 32, lineHeight: 1.7 }}>FPI Security is available 24/7. Tell us about your property and we'll build a custom security program within 24 hours.</p>
          <CTAButton onClick={() => navigate('/contact')}>Get a Free Quote — Contact Our Team, Available 24/7</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default OfficersPage;
