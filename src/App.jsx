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
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <FloatingAction />
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
