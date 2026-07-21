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
      title="FPI Security | Private Security Guards in FL, TX, GA, AZ, NV & CA"
      description="FPI provides licensed security guards, remote video monitoring, and customized patrol across Florida, Texas, Georgia, Arizona, Nevada, and California. Request a free security assessment today."
      ogTitle="FPI Security | Guards, Patrol & Remote Monitoring in Six States"
      ogDescription="Licensed security guards, mobile patrol, and AI-assisted video monitoring for commercial, residential, and industrial properties — from South Florida to Southern California."
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
