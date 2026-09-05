import React, { useState } from 'react';
import HeroSection from '../components/creator3d/HeroSection';
import MarqueeSection from '../components/creator3d/MarqueeSection';
import AboutSection from '../components/creator3d/AboutSection';
import ProjectsSection from '../components/creator3d/ProjectsSection';
import ServicesSection from '../components/creator3d/ServicesSection';
import ContactModal from '../components/creator3d/ContactModal';
import LivePreviewModal from '../components/creator3d/LivePreviewModal';
import PageTurnOverlay from '../components/creator3d/PageTurnOverlay';

export function CreatorPortfolioPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedPreviewProject, setSelectedPreviewProject] = useState(null);

  const handleNavigate = (targetId) => {
    setIsFlipping(true);

    setTimeout(() => {
      if (targetId === 'contact') {
        setIsContactOpen(true);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'auto' });
        }
      }
    }, 280);

    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip select-none font-['Kanit',sans-serif]">
      {/* 3D Page Turn Flip Animation on Navbar Click */}
      <PageTurnOverlay isFlipping={isFlipping} />

      {/* 1. HERO SECTION */}
      <HeroSection onNavigate={handleNavigate} />

      {/* 2. MARQUEE SHOWCASE (Click tile to open live preview) */}
      <MarqueeSection onSelectProject={(proj) => setSelectedPreviewProject(proj)} />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. PROJECTS SECTION */}
      <ProjectsSection onSelectProject={(proj) => setSelectedPreviewProject(proj)} />

      {/* 5. SERVICES SECTION (All 7 Services Included) */}
      <ServicesSection />

      {/* CALL TO ACTION BANNER */}
      <section className="w-full bg-[#18011F] text-white py-20 px-6 text-center border-t border-[#B600A8]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
            [ Start Your Project ]
          </span>
          <h2 className="hero-heading font-black text-3xl sm:text-5xl uppercase tracking-tight">
            Ready to turn your idea into something unforgettable?
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-2xl font-light">
            We transform ideas into digital experiences that look powerful, communicate clearly, and help businesses stand out globally.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="mt-2 rounded-full px-10 py-4 text-sm sm:text-base font-bold uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
              outline: '2px solid white',
              outlineOffset: '-3px'
            }}
          >
            Start a Project →
          </button>
        </div>
      </section>

      {/* LIVE PREVIEW MODAL */}
      <LivePreviewModal
        project={selectedPreviewProject}
        isOpen={Boolean(selectedPreviewProject)}
        onClose={() => setSelectedPreviewProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* CONTACT MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Dark Footer */}
      <footer id="contact" className="w-full bg-[#0C0C0C] py-12 px-6 border-t border-neutral-900 text-xs text-[#D7E2EA]/60 uppercase tracking-widest">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-sm text-[#D7E2EA]">EBENORA CREATIONS</span>
            <span className="text-[10px] text-[#BBCCD7]/70">DESIGN. DEVELOP. INSPIRE. — YOU THINK. WE CREATE.</span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="mailto:hello@ebenoracreations.com" className="hover:text-white transition-colors">
              hello@ebenoracreations.com
            </a>
            <a href="tel:+919037352739" className="hover:text-white transition-colors">
              +91 90373 52739
            </a>
          </div>

          <button
            onClick={() => setIsContactOpen(true)}
            className="hover:text-white transition-colors cursor-pointer border-b border-[#D7E2EA]/40 pb-0.5"
          >
            Talk to Ebenora →
          </button>
        </div>
      </footer>
    </div>
  );
}

export default CreatorPortfolioPage;
