import useResponsive from '../hooks/useResponsive';
import { Section, H2, Divider, FAQItem } from '../components/ServicePageKit';

const HomeFaq = () => {
  const { isMobile } = useResponsive();

  return (
    <Section bg="#F4F6F8" isMobile={isMobile} py="80px 48px" pyMobile="56px 24px">
      <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#006090', marginBottom: 12 }}>Frequently Asked Questions</div>
      <H2>Common Questions About FPI Security Services</H2>
      <Divider />
      <div style={{ maxWidth: 860 }}>
        <FAQItem
          question="What is FPI Security Services?"
          answer="FPI Security Services is a licensed private security company headquartered in Pembroke Pines, Florida, with a regional office in Dallas, Texas. FPI provides security guard services, mobile patrol, remote video monitoring, surveillance systems, access control, and autonomous security robots for commercial properties across Florida, Texas, Georgia, Arizona, Nevada, and California."
        />
        <FAQItem
          question="What security services does FPI offer?"
          answer="FPI offers armed and unarmed security guards, GPS-tracked mobile patrol, 24/7 remote video monitoring, surveillance camera and access control system installation, autonomous security robots, and ongoing security system maintenance. All services are available as standalone programs or as one integrated security solution."
        />
        <FAQItem
          question="What areas does FPI Security serve?"
          answer="FPI Security Services operates in six states: Florida, Texas, Georgia, Arizona, Nevada, and California — anchored by South Florida (Miami-Dade, Broward, and Palm Beach County) and the Dallas–Fort Worth area. FPI serves commercial properties, HOA communities, warehouses, construction sites, healthcare facilities, retail centers, and car dealerships."
        />
        <FAQItem
          question="Does FPI Security have its own technology platform?"
          answer="Yes. FPI built its own proprietary security operations platform — not off-the-shelf software. The platform provides clients with real-time GPS patrol tracking, live incident reporting with photo documentation, a 24/7 client dashboard, automated alerts, and integrated dispatch. Few security companies anywhere offer this level of client visibility."
        />
        <FAQItem
          question="Is FPI Security licensed and insured?"
          answer="Yes. All FPI security officers are licensed under the private security regulations of the state where they serve — such as Florida Statute Chapter 493 — fully background-checked, and continuously trained. FPI carries comprehensive liability insurance, and documentation is available on request for HOA boards, property managers, and insurance carriers."
        />
      </div>
    </Section>
  );
};

export default HomeFaq;
