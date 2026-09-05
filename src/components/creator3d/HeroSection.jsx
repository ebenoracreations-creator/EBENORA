import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export function HeroSection({ onNavigate }) {
  const handleNav = (targetId) => {
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-between relative overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Ambient Spotlight Glow Behind 3D Character */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[750px] lg:w-[900px] h-[340px] sm:h-[520px] md:h-[750px] bg-[radial-gradient(circle_at_center,rgba(182,0,168,0.35)_0%,rgba(118,33,176,0.18)_45%,transparent_70%)] pointer-events-none z-0 blur-3xl" />

      {/* Navbar: About -> Projects -> Services -> Contact */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-8 sm:pt-6 md:pt-8">
          <button
            onClick={() => handleNav('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNav('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleNav('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading Layer 1: Solid Gradient Filled Text (Behind Character z-0) */}
      <div className="absolute top-[38%] sm:top-[40%] md:top-[42%] -translate-y-1/2 left-0 w-full px-4 z-0 pointer-events-none flex justify-center items-center">
        <FadeIn delay={0.15} y={40} className="w-full flex flex-col items-center">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 13.5vw)' }}
          >
            hi, i&apos;m ebenora
          </h1>
          <span className="sr-only">
            Creative Digital Studio in Kochi, Kerala — Web Design, Branding, Graphic Design, Video & SEO
          </span>
        </FadeIn>
      </div>

      {/* Hero Portrait Layer 2: Highlighted & Scaled 3D Character (z-10) - Single unified hero for all devices */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[92vw] max-w-[420px] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[760px] xl:max-w-[840px] bottom-0 pointer-events-auto flex justify-center items-end">
        <FadeIn delay={0.35} y={30} className="w-full flex justify-center items-end">
          <Magnet
            strength={4}
            activeTransition="transform 0.2s ease-out"
            inactiveTransition="transform 0.5s ease-out"
            className="w-full flex justify-center items-end cursor-grab active:cursor-grabbing"
          >
            <img
              src="./images/hero.png"
              alt="Creative Digital Studio in Kochi, Kerala - Ebenora Creations 3D Hero"
              className="w-full h-auto max-h-[76vh] sm:max-h-[80vh] md:max-h-[84vh] lg:max-h-[88vh] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[104%] brightness-[105%]"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Hero Heading Layer 3: Perfect Pixel-Matched Outline Overlay (In Front of Character z-20) */}
      <div className="absolute top-[38%] sm:top-[40%] md:top-[42%] -translate-y-1/2 left-0 w-full px-4 z-20 pointer-events-none flex justify-center items-center">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <span
            className="font-black uppercase tracking-tight leading-none whitespace-nowrap text-center block"
            style={{
              fontSize: 'clamp(2.5rem, 11vw, 13.5vw)',
              color: 'transparent',
              WebkitTextStroke: '2px #BBCCD7'
            }}
          >
            hi, i&apos;m ebenora
          </span>
        </FadeIn>
      </div>

      {/* Bottom Bar (z-30) */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-30">
        <FadeIn delay={0.35} y={20} className="max-w-[260px] sm:max-w-[300px] md:max-w-[380px] text-center sm:text-left">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug drop-shadow-md"
            style={{ fontSize: 'clamp(0.65rem, 1.1vw, 1.15rem)' }}
          >
            We design brands, build powerful websites, create compelling visuals and help businesses grow through digital experiences that perform.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="shrink-0">
          <ContactButton
            onClick={() => handleNav('contact')}
            label="Start a Project →"
          />
        </FadeIn>
      </div>
    </section>
  );
}

export default HeroSection;
