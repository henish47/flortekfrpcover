import React, { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import FloatingAction from './components/common/FloatingAction';
import About from './pages/About';
import Reviews from './pages/Reviews';
import SizeChartPage from './pages/SizeChartPage';
import Installation from './pages/Installation';
import { ModalProvider } from './context/ModalContext';

import Sitemap from './pages/Sitemap';
import FAQPage from './pages/FAQPage';
import FRPManholeCovers from './pages/seo/FRPManholeCovers';
import FRPDrainCovers from './pages/seo/FRPDrainCovers';
import FRPCableTrenchCovers from './pages/seo/FRPCableTrenchCovers';
import HeavyDutyFRPCovers from './pages/seo/HeavyDutyFRPCovers';
import FRPCoverExporter from './pages/seo/FRPCoverExporter';
import FRPCoverManufacturerIndia from './pages/seo/FRPCoverManufacturerIndia';
import FRPCoverManufacturerGujarat from './pages/seo/FRPCoverManufacturerGujarat';
import IndustrialFRPCovers from './pages/seo/IndustrialFRPCovers';
import MunicipalFRPCovers from './pages/seo/MunicipalFRPCovers';
import FRPvsCastIronCovers from './pages/seo/FRPvsCastIronCovers';
import LeadGenPopup from './components/common/LeadGenPopup';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ModalProvider>
        <ScrollToTop />
        <AppContent />
      </ModalProvider>
    </Router>
  );
}

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-[#333333]">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Navigate to="/products" replace />} />
          <Route path="/sizes" element={<SizeChartPage />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/frp-manhole-covers" element={<FRPManholeCovers />} />
          <Route path="/frp-drain-covers" element={<FRPDrainCovers />} />
          <Route path="/frp-cable-trench-covers" element={<FRPCableTrenchCovers />} />
          <Route path="/heavy-duty-frp-covers" element={<HeavyDutyFRPCovers />} />
          <Route path="/frp-cover-exporter" element={<FRPCoverExporter />} />
          <Route path="/frp-cover-manufacturer-india" element={<FRPCoverManufacturerIndia />} />
          <Route path="/frp-cover-manufacturer-gujarat" element={<FRPCoverManufacturerGujarat />} />
          <Route path="/industrial-frp-covers" element={<IndustrialFRPCovers />} />
          <Route path="/municipal-frp-covers" element={<MunicipalFRPCovers />} />
          <Route path="/frp-vs-cast-iron-covers" element={<FRPvsCastIronCovers />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <FloatingAction />
      <LeadGenPopup />
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
