import React from 'react';
import FadeIn from './FadeIn';

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
    <section className="h-[100dvh] min-h-[640px] w-full max-w-[100vw] flex flex-col justify-between relative overflow-hidden bg-[#0C0C0C] select-none">
      {/* 3-Line Massive Kinetic Services Marquee Running in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col justify-center gap-1 sm:gap-2 md:gap-3 select-none opacity-90">
        {/* Line 1 - Moving Left at Unified Speed */}
        <div className="overflow-hidden w-full whitespace-nowrap">
          <div className="flex w-max hero-marquee-track">
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              Web Designing • Development • Web Development • Graphic Designing • Video Editing • AI Video Creations • SEO • Digital Marketing •&nbsp;
            </span>
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              Web Designing • Development • Web Development • Graphic Designing • Video Editing • AI Video Creations • SEO • Digital Marketing •&nbsp;
            </span>
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              Web Designing • Development • Web Development • Graphic Designing • Video Editing • AI Video Creations • SEO • Digital Marketing •&nbsp;
            </span>
          </div>
        </div>

        {/* Line 2 - Moving Left at Unified Speed */}
        <div className="overflow-hidden w-full whitespace-nowrap">
          <div className="flex w-max hero-marquee-track">
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              AI Video Creations • SEO • Digital Marketing • Web Designing • Development • Web Development • Graphic Designing • Video Editing •&nbsp;
            </span>
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              AI Video Creations • SEO • Digital Marketing • Web Designing • Development • Web Development • Graphic Designing • Video Editing •&nbsp;
            </span>
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              AI Video Creations • SEO • Digital Marketing • Web Designing • Development • Web Development • Graphic Designing • Video Editing •&nbsp;
            </span>
          </div>
        </div>

        {/* Line 3 - Moving Left at Unified Speed */}
        <div className="overflow-hidden w-full whitespace-nowrap">
          <div className="flex w-max hero-marquee-track">
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              Graphic Designing • Video Editing • AI Video Creations • SEO • Digital Marketing • Web Designing • Development • Web Development •&nbsp;
            </span>
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              Graphic Designing • Video Editing • AI Video Creations • SEO • Digital Marketing • Web Designing • Development • Web Development •&nbsp;
            </span>
            <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] uppercase tracking-tighter text-white/[0.04] mr-8 leading-[0.85]">
              Graphic Designing • Video Editing • AI Video Creations • SEO • Digital Marketing • Web Designing • Development • Web Development •&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Ambient Spotlight Glow Behind 3D Character */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[750px] lg:w-[900px] h-[340px] sm:h-[520px] md:h-[750px] bg-[radial-gradient(circle_at_center,rgba(182,0,168,0.35)_0%,rgba(118,33,176,0.18)_45%,transparent_70%)] pointer-events-none z-0 blur-3xl" />

      {/* Navbar: About -> Services -> Projects -> Contact */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="w-full max-w-full flex items-center justify-between px-3 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 gap-1 sm:gap-2">
          <button
            onClick={() => handleNav('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNav('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNav('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading Layer 1: Solid Gradient Filled Text (Prominent & 100% visible on Mobile z-20, Behind Character on Desktop z-0) */}
      <div className="absolute top-[13%] sm:top-[14%] md:top-[42%] -translate-y-1/2 left-0 w-full px-4 sm:px-6 md:px-10 z-20 md:z-0 pointer-events-none flex justify-center items-center">
        <FadeIn delay={0.15} y={40} className="w-full flex flex-col items-center">
          <h1
            className="hero-heading font-black uppercase leading-none whitespace-nowrap text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] tracking-[0.08em] md:tracking-[0.12em]"
            style={{
              fontSize: 'clamp(1rem, 5.8vw, 12.5vw)'
            }}
          >
            hi, i&apos;m ebenora
          </h1>
          <span className="sr-only">
            Best Designing Studio — Global Web Design, 3D Web & Luxury Branding for Clients Worldwide
          </span>
        </FadeIn>
      </div>

      {/* Hero Portrait Layer 2: Fixed 3D Character (Anchored & Fixed in place, z-10) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[94vw] max-w-[360px] sm:max-w-[440px] md:max-w-[620px] lg:max-w-[720px] xl:max-w-[800px] top-[18%] sm:top-[18%] md:top-auto md:bottom-20 lg:bottom-24 pointer-events-none flex justify-center items-start md:items-end">
        <FadeIn delay={0.35} y={30} className="w-full flex justify-center items-start md:items-end">
          <img
            src="./images/hero.png"
            alt="Best Designing Studio - Ebenora Creations 3D Hero"
            className="w-full h-auto max-h-[48vh] sm:max-h-[52vh] md:max-h-[63vh] lg:max-h-[67vh] object-contain object-top md:object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[104%] brightness-[105%]"
            loading="eager"
          />
        </FadeIn>
      </div>

      {/* Hero Heading Layer 3: Perfect Pixel-Matched Outline Overlay (Desktop Only z-20) */}
      <div className="hidden md:flex absolute top-[42%] -translate-y-1/2 left-0 w-full px-4 z-20 pointer-events-none justify-center items-center">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <span
            className="font-black uppercase leading-none whitespace-nowrap text-center block tracking-[0.08em] md:tracking-[0.12em]"
            style={{
              fontSize: 'clamp(1rem, 5.8vw, 12.5vw)',
              color: 'transparent',
              WebkitTextStroke: '2px #BBCCD7'
            }}
          >
            hi, i&apos;m ebenora
          </span>
        </FadeIn>
      </div>

      {/* Bottom Bar (z-30) */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between pb-6 sm:pb-7 md:pb-8 px-6 sm:px-8 md:px-12 z-30 pointer-events-none gap-4 md:gap-8">
        {/* Logo: Left on desktop, centered on mobile - ENLARGED SIZE */}
        <FadeIn delay={0.35} y={20} className="flex justify-center md:justify-start items-center shrink-0 pointer-events-auto">
          <img
            src="./images/logo.png"
            alt="Ebenora Creations Logo"
            className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-105"
          />
        </FadeIn>

        {/* Tagline: Right on desktop (right-aligned), centered on mobile */}
        <FadeIn delay={0.35} y={20} className="max-w-[340px] sm:max-w-[440px] md:max-w-[460px] lg:max-w-[560px] flex justify-center md:justify-end text-center md:text-right">
          <p
            className="text-[#D7E2EA] font-medium uppercase tracking-wider leading-relaxed text-center md:text-right drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            style={{ fontSize: 'clamp(0.78rem, 1.1vw, 1.05rem)' }}
          >
            We design brands, build powerful websites, create compelling visuals and help businesses grow through digital experiences that perform.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export default HeroSection;
