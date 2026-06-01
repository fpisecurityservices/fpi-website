import SEO from '../components/SEO';
import HeroSection from '../sections/HeroSection';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/services/ServicesSection';
import IndustriesStrip from '../components/industries/IndustriesStrip';
import TechSection from '../sections/TechSection';
import AboutSection from '../sections/AboutSection';
import CTAStrip from '../sections/CTAStrip';

const HomePage = () => (
  <>
    <SEO
      title="FPI Security | Private Security Guards in Miami & Dallas, TX"
      description="FPI provides licensed security guards, remote video monitoring, and customized patrol for Miami and Dallas businesses. Request a free security assessment today."
      ogTitle="FPI Security | Guards, Patrol & Remote Monitoring | Miami & Dallas"
      ogDescription="Licensed security guards, mobile patrol, and AI-assisted video monitoring for commercial, residential, and industrial properties across South Florida and DFW."
      ogUrl="https://www.fpisecurity.com/"
    />
    <HeroSection direction="command" />
    <TrustBar />
    <ServicesSection />
    <IndustriesStrip />
    <TechSection />
    <AboutSection />
    <CTAStrip />
  </>
);

export default HomePage;
