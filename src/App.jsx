import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import StickyQuoteBtn from './components/StickyQuoteBtn';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import LocationsPage from './pages/LocationsPage';
import LocationDetailPage from './pages/LocationDetailPage';
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

// Old /services/:id URLs redirect to the new top-level slugs from the site architecture
const LEGACY_SERVICE_PATHS = {
  officers: '/security-officers',
  patrol: '/mobile-patrol',
  remote: '/remote-video-monitoring',
  surveillance: '/surveillance-systems',
  access: '/access-control',
  autonomous: '/autonomous-surveillance',
  maintenance: '/service-maintenance',
};

const LegacyServiceRedirect = () => {
  const { id } = useParams();
  return <Navigate to={LEGACY_SERVICE_PATHS[id] || '/services'} replace />;
};

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
        <Route path="/security-officers" element={<OfficersPage />} />
        <Route path="/mobile-patrol" element={<PatrolPage />} />
        <Route path="/remote-video-monitoring" element={<RemoteMonitoringPage />} />
        <Route path="/surveillance-systems" element={<SurveillancePage />} />
        <Route path="/access-control" element={<AccessControlPage />} />
        <Route path="/autonomous-surveillance" element={<AutonomousPage />} />
        <Route path="/service-maintenance" element={<MaintenancePage />} />
        <Route path="/services/:id" element={<LegacyServiceRedirect />} />
        <Route path="/technology/soc" element={<SocPage />} />
        <Route path="/technology/platform" element={<PlatformPage />} />
        <Route path="/security-operations-center" element={<Navigate to="/technology/soc" replace />} />
        <Route path="/fpi-technology-platform" element={<Navigate to="/technology/platform" replace />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:slug" element={<LocationDetailPage />} />
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
