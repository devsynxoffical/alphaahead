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
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/externalStaff" element={<ExternalStaff />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
