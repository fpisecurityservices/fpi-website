import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import StickyQuoteBtn from './components/StickyQuoteBtn';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import LocationsPage from './pages/LocationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OfficersPage from './pages/OfficersPage';
import PatrolPage from './pages/PatrolPage';
import RemoteMonitoringPage from './pages/RemoteMonitoringPage';
import SurveillancePage from './pages/SurveillancePage';
import AccessControlPage from './pages/AccessControlPage';
import SocPage from './pages/SocPage';
import PlatformPage from './pages/PlatformPage';
import AutonomousPage from './pages/AutonomousPage';
import MaintenancePage from './pages/MaintenancePage';

const AppLayout = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/officers" element={<OfficersPage />} />
        <Route path="/services/patrol" element={<PatrolPage />} />
        <Route path="/services/remote" element={<RemoteMonitoringPage />} />
        <Route path="/services/surveillance" element={<SurveillancePage />} />
        <Route path="/services/access" element={<AccessControlPage />} />
        <Route path="/services/autonomous" element={<AutonomousPage />} />
        <Route path="/services/maintenance" element={<MaintenancePage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/security-operations-center" element={<SocPage />} />
        <Route path="/fpi-technology-platform" element={<PlatformPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {showFooter && <SiteFooter />}
      <StickyQuoteBtn />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppLayout />
    <Analytics />
  </BrowserRouter>
);

export default App;
