import HeroSection from '../sections/HeroSection';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/services/ServicesSection';
import IndustriesStrip from '../components/industries/IndustriesStrip';
import TechSection from '../sections/TechSection';
import AboutSection from '../sections/AboutSection';
import CTAStrip from '../sections/CTAStrip';

const HomePage = () => (
  <>
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
