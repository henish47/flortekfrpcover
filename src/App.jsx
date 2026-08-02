import React, { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import FloatingAction from './components/common/FloatingAction';
import { ModalProvider } from './context/ModalContext';
import LeadGenPopup from './components/common/LeadGenPopup';

// Lazy Loaded Page Components
const Products = React.lazy(() => import('./pages/Products'));
const Applications = React.lazy(() => import('./pages/Applications'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Reviews = React.lazy(() => import('./pages/Reviews'));
const SizeChartPage = React.lazy(() => import('./pages/SizeChartPage'));
const Installation = React.lazy(() => import('./pages/Installation'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));

// Lazy Loaded SEO Pages
const FRPManholeCovers = React.lazy(() => import('./pages/seo/FRPManholeCovers'));
const FRPDrainCovers = React.lazy(() => import('./pages/seo/FRPDrainCovers'));
const FRPCableTrenchCovers = React.lazy(() => import('./pages/seo/FRPCableTrenchCovers'));
const HeavyDutyFRPCovers = React.lazy(() => import('./pages/seo/HeavyDutyFRPCovers'));
const FRPCoverExporter = React.lazy(() => import('./pages/seo/FRPCoverExporter'));
const FRPCoverManufacturerIndia = React.lazy(() => import('./pages/seo/FRPCoverManufacturerIndia'));
const FRPCoverManufacturerGujarat = React.lazy(() => import('./pages/seo/FRPCoverManufacturerGujarat'));
const IndustrialFRPCovers = React.lazy(() => import('./pages/seo/IndustrialFRPCovers'));
const MunicipalFRPCovers = React.lazy(() => import('./pages/seo/MunicipalFRPCovers'));
const FRPvsCastIronCovers = React.lazy(() => import('./pages/seo/FRPvsCastIronCovers'));

// Lazy Loaded Blog Pages
const BlogIndex = React.lazy(() => import('./pages/blog/BlogIndex'));
const Top10Manufacturers = React.lazy(() => import('./pages/blog/Top10Manufacturers'));
const IndustrialApplications = React.lazy(() => import('./pages/blog/IndustrialApplications'));
const FRPvsCastIronComparison = React.lazy(() => import('./pages/blog/FRPvsCastIronComparison'));
const HowToChoose = React.lazy(() => import('./pages/blog/HowToChoose'));
const MunicipalBenefits = React.lazy(() => import('./pages/blog/MunicipalBenefits'));
const PriceGuide = React.lazy(() => import('./pages/blog/PriceGuide'));
const HeavyDutyFeatures = React.lazy(() => import('./pages/blog/HeavyDutyFeatures'));
const ReplacingCastIron = React.lazy(() => import('./pages/blog/ReplacingCastIron'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Low-footprint CSS fallback loader
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <div className="w-10 h-10 border-4 border-[#1B8036]/20 border-t-[#1B8036] rounded-full animate-spin"></div>
    <span className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest animate-pulse">Loading...</span>
  </div>
);

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
        <React.Suspense fallback={<LoadingFallback />}>
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
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/top-10-frp-manhole-cover-manufacturers-india" element={<Top10Manufacturers />} />
            <Route path="/blog/best-frp-manhole-covers-industrial-applications" element={<IndustrialApplications />} />
            <Route path="/blog/frp-vs-cast-iron-manhole-covers-comparison" element={<FRPvsCastIronComparison />} />
            <Route path="/blog/how-to-choose-right-frp-manhole-cover" element={<HowToChoose />} />
            <Route path="/blog/benefits-frp-covers-municipal-projects" element={<MunicipalBenefits />} />
            <Route path="/blog/frp-cover-price-guide-india" element={<PriceGuide />} />
            <Route path="/blog/heavy-duty-frp-covers-features-applications" element={<HeavyDutyFeatures />} />
            <Route path="/blog/why-frp-covers-replacing-cast-iron" element={<ReplacingCastIron />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </React.Suspense>
      </main>
      <FloatingAction />
      <LeadGenPopup />
      <Footer />
      <SpeedInsights />
    </div>
  );
};
export default App;
