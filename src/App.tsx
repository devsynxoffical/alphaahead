import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
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
import RealEstateTransactionCoordinatorDetails from './pages/RealEstateTransactionCoordinatorDetails';
import SEODetails from './pages/SEODetails';
import WebDevelopmentDetails from './pages/WebDevelopmentDetails';
import DigitalMarketingDetails from './pages/DigitalMarketingDetails';
import GraphicDesignDetails from './pages/GraphicDesignDetails';
import VideoEditingDetails from './pages/VideoEditingDetails';
import ITSupportDetails from './pages/ITSupportDetails';
import Footer from './components/Footer';
import ChatWidgetEmbed from './components/ChatWidgetEmbed';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <ChatWidgetEmbed siteId="alpha-ahead" />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/home" element={<HeroSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/staff" element={<ExternalStaff />} />
        
        {/* Service Detail Pages */}
        <Route path="/virtual-assistant" element={<VirtualAssistantDetails />} />
        <Route path="/cold-calling" element={<ColdCallingDetails />} />
        <Route path="/personal-assistant" element={<PersonalAssistantDetails />} />
        <Route path="/business-assistant" element={<VirtualBusinessAssistantDetails />} />
        <Route path="/property-management" element={<VirtualPropertyManagementDetails />} />
        <Route path="/lead-generation" element={<LeadGenerationDetails />} />
        <Route path="/transaction-coordinator" element={<RealEstateTransactionCoordinatorDetails />} />
        <Route path="/seo" element={<SEODetails />} />
        <Route path="/web-development" element={<WebDevelopmentDetails />} />
        <Route path="/digital-marketing" element={<DigitalMarketingDetails />} />
        <Route path="/graphic-design" element={<GraphicDesignDetails />} />
        <Route path="/video-editing" element={<VideoEditingDetails />} />
        <Route path="/it-support" element={<ITSupportDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
