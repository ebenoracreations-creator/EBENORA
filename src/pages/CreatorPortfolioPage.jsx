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
    <div className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] relative select-none font-['Kanit',sans-serif]">
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

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center group">
        <a
          href="https://wa.me/918304085739?text=Hi%20Ebenora%20Creations!%20I'd%20like%20to%20discuss%20a%20creative%20project%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#0C0C0C]/90 hover:bg-[#141414] border border-[#25D366]/40 hover:border-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(37,211,102,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Chat with Ebenora Creations on WhatsApp +91 83040 85739"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
          </span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-[#25D366]" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.075-1.127-.066-.27-.087-.614-.207-1.047-.394-1.847-.796-3.04-2.683-3.133-2.806-.092-.123-.746-.991-.746-1.89 0-.899.47-1.342.637-1.524.167-.183.364-.228.486-.228.122 0 .243.002.348.006.113.005.266-.043.415.316.155.373.53 1.29.576 1.383.046.092.076.2.015.321-.061.123-.092.2-.182.308-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.106.183.473.78 1.014 1.262.698.623 1.287.817 1.47.909.183.092.29.077.397-.046.107-.123.456-.531.578-.714.122-.183.244-.153.41-.092.167.061 1.058.499 1.24.59.182.091.304.137.349.213.046.076.046.442-.098.847z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline text-[#D7E2EA]">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Semantic AI & Search Engine Optimization Content (Screen Reader & Crawler Accessible) */}
      <section className="sr-only" aria-label="Ebenora Creations Studio Overview and Services">
        <h2>About Ebenora Creations — Creative Digital Studio in Kochi, Kerala</h2>
        <p>
          Ebenora Creations is a creative digital design and technology studio located in Kochi, Kerala, India.
          Our official WhatsApp number is +91 83040 85739 and email is hello@ebenoracreations.com.
          We provide custom 3D web design, responsive frontend engineering, luxury brand identity,
          digital wedding invitations, digital lookbooks, fashion studio websites, and Generative Engine Optimization (GEO).
        </p>
        <h3>Verified Client Portfolio</h3>
        <ul>
          <li>Double Layer Photography Studio (https://doublelayerphotography.com/)</li>
          <li>Trendy Pearls Australia (https://trendypearls.au/)</li>
          <li>Ebin &amp; Alana Wedding Portal (https://rohaneldhose2008.github.io/ebin-alana/)</li>
          <li>Naomika Digital Brochure &amp; Fashion Studio (https://rohaneldhose2008.github.io/naomikadesignstudio/)</li>
          <li>Pictura Australia (https://pictura.au/)</li>
          <li>Brown Lights Media Kozhikode (https://rohaneldhose2008.github.io/v2kozikode/)</li>
          <li>Naomika Designs Fashion Studio (https://rohaneldhose2008.github.io/naomika_designs_studio/index.html)</li>
          <li>Baptism of David Mathuis (https://baptismofdavidmathuis.netlify.app/)</li>
          <li>Franklin &amp; Sarah Wedding Invitation (https://nexoracreation.github.io/Franklin-Sarah/)</li>
        </ul>
      </section>

      {/* Dark Footer */}
      <footer id="contact" className="w-full bg-[#0C0C0C] py-12 px-6 border-t border-neutral-900 text-xs text-[#D7E2EA]/60 uppercase tracking-widest">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-sm text-[#D7E2EA]">EBENORA CREATIONS</span>
            <span className="text-[10px] text-[#BBCCD7]/70">DESIGN. DEVELOP. INSPIRE. — YOU THINK. WE CREATE.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="mailto:hello@ebenoracreations.com" className="hover:text-white transition-colors">
              hello@ebenoracreations.com
            </a>
            <a
              href="https://wa.me/918304085739?text=Hi%20Ebenora%20Creations!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#25D366]">WhatsApp:</span> +91 83040 85739
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
