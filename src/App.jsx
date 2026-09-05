import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import CreatorPortfolioPage from './pages/CreatorPortfolioPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrandingPage from './pages/BrandingPage';
import WebDevPage from './pages/WebDevPage';
import SeoPage from './pages/SeoPage';
import SocialMediaPage from './pages/SocialMediaPage';
import CustomSolutionsPage from './pages/CustomSolutionsPage';
import PortfolioPage from './pages/PortfolioPage';
import PackagesPage from './pages/PackagesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isCreatorPage = location.pathname === '/' || location.pathname === '/3d-creator';

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]">
      <ScrollToTop />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<CreatorPortfolioPage />} />
          <Route path="/3d-creator" element={<CreatorPortfolioPage />} />
          <Route path="/classic-home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
          <Route path="/services/web-development" element={<WebDevPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/custom-solutions" element={<CustomSolutionsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}
