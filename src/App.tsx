import React, { useEffect } from 'react';
import { setHydrating } from './utils/hydration';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import useReveal from './hooks/useReveal';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectPage';
import Clients from './pages/Clients';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import ExternalStaff from './pages/ExternalStaff';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import VirtualAssistantDetails from './pages/VirtualAssistantDetails';
import ColdCallingDetails from './pages/ColdCallingDetails';
import PersonalAssistantDetails from './pages/PersonalAssistantDetails';
import VirtualBusinessAssistantDetails from './pages/VirtualBusinessAssistantDetails';
import VirtualPropertyManagementDetails from './pages/VirtualPropertyManagementDetails';
import LeadGenerationDetails from './pages/LeadGenerationDetails';
import Footer from './components/Footer';
import ChatWidgetEmbed from './components/ChatWidgetEmbed';
import Seo from './seo/Seo';
import ServiceExtras from './components/seo/ServiceExtras';
import CtaBanner from './components/seo/CtaBanner';
import ArticlePage from './pages/ArticlePage';
import ArticleListing from './pages/ArticleListing';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';
import OtherServicesPage from './pages/OtherServicesPage';
import RichLandingPage from './pages/RichLandingPage';
import MobileCtaBar from './components/lead/MobileCtaBar';
import { RICH_LANDINGS } from './content/richLandings';
import { BLOG_POSTS } from './content/blog';
import { CASE_STUDIES } from './content/caseStudies';
import { LOCATION_PAGES } from './content/locations';
import { LANDING_PAGES } from './content/landing';

/** Service page + FAQs (with FAQPage schema) + related service links. */
const withExtras = (page: React.ReactElement) => (
  <>
    {page}
    <ServiceExtras />
  </>
);

const SERVICE_ROUTES: [string, React.ReactElement][] = [
  ['/virtual-assistant', <VirtualAssistantDetails />],
  ['/cold-calling', <ColdCallingDetails />],
  ['/personal-assistant', <PersonalAssistantDetails />],
  ['/business-assistant', <VirtualBusinessAssistantDetails />],
  ['/property-management', <VirtualPropertyManagementDetails />],
  ['/lead-generation', <LeadGenerationDetails />],
];

const RevealManager: React.FC = () => {
  useReveal();
  // Hydration has committed once this runs; later mounts use the real window width.
  useEffect(() => setHydrating(false), []);
  return null;
};

function App() {
  return (
    <Router>
      <Seo />
      <RevealManager />
      <Header />
      <ScrollToTop />
      <ChatWidgetEmbed siteId="alpha-ahead" />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/other-services" element={<OtherServicesPage />} />
          <Route path="/services" element={<><ServicesPage /><CtaBanner /></>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/staff" element={<ExternalStaff />} />

          {/* Service Detail Pages */}
          {SERVICE_ROUTES.map(([path, el]) => (
            <Route key={path} path={path} element={withExtras(el)} />
          ))}

          {/* Content */}
          <Route
            path="/blog"
            element={
              <ArticleListing
                title="Outsourcing, Virtual Assistant & Growth Guides"
                intro="Practical, no-fluff guides on hiring and onboarding virtual assistants, appointment setters and cold callers, and on growing with SEO and digital marketing."
                articles={BLOG_POSTS}
              />
            }
          />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route
            path="/case-studies"
            element={
              <ArticleListing
                title="Case Studies"
                intro="How we built and run our own brands, Zingo Assist, Alpha Medi Assist and Learn with Alpha, and what your business can learn from them."
                articles={CASE_STUDIES}
              />
            }
          />
          <Route path="/case-studies/:slug" element={<ArticlePage />} />
          {RICH_LANDINGS.map(r => (
            <Route key={r.slug} path={`/${r.slug}`} element={<RichLandingPage />} />
          ))}
          {[...LOCATION_PAGES, ...LANDING_PAGES].map(l => (
            <Route key={l.slug} path={`/${l.slug}`} element={<ArticlePage />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCtaBar />
    </Router>
  );
}

export default App;
