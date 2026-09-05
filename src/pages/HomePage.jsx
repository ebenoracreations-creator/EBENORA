import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Layers, Cpu, Compass, Award, Globe, TrendingUp, Monitor, Smartphone, Zap, Eye, BarChart3, Code2, Rocket } from 'lucide-react';

export default function HomePage() {
  const whatsappUrl = "https://wa.me/919037352739?text=" + encodeURIComponent("Hi Ebenora Creations Team! I'm interested in starting a strategic project.");

  return (
    <div className="relative pt-44 pb-24">
      
      {/* ========================================================================= */}
      {/* 6. HOME PAGE HERO SECTION WITH RICH VISUAL MOCKUP ENGINE */}
      {/* ========================================================================= */}
      <section className="relative py-12 lg:py-20 overflow-hidden border-b border-[#292929]">
        
        {/* Ambient Gold Pulse Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-radial from-[#D9B15F]/20 via-[#C9973E]/8 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="badge-gold inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F1D38A]" />
                <span>CREATIVE DESIGN & DIGITAL STUDIO</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F2EA] leading-[1.05] tracking-tight font-extrabold">
                WE DON'T JUST BUILD WEBSITES. <br />
                <span className="text-gold-gradient font-normal italic">WE BUILD DIGITAL BRANDS THAT GET SEEN.</span>
              </h1>

              <p className="text-sm sm:text-base font-dmsans text-[#D9B15F] font-bold tracking-wider uppercase">
                Design. Development. SEO. Growth. One creative partner built around your business.
              </p>

              <p className="text-base text-[#A4A4A4] max-w-xl font-manrope leading-relaxed">
                Ebenora Creations is a creative design and digital studio creating bold brands, high-performance websites, powerful content and world-class SEO strategies designed to increase visibility, credibility and growth.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <Link 
                  to="/contact"
                  className="btn-gold-primary py-4 px-8 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <span>START YOUR PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link 
                  to="/portfolio"
                  className="btn-gold-outline py-4 px-7 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <span>EXPLORE OUR WORK</span>
                </Link>
              </div>

              {/* Value indicators */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#292929]">
                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929]">
                  <div className="text-[11px] font-dmsans font-bold text-[#F1D38A] uppercase mb-0.5 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#D9B15F]" /> GLOBAL SEO
                  </div>
                  <p className="text-[10px] text-[#A4A4A4]">Search readiness.</p>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929]">
                  <div className="text-[11px] font-dmsans font-bold text-[#F1D38A] uppercase mb-0.5 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#D9B15F]" /> SPEED & UX
                  </div>
                  <p className="text-[10px] text-[#A4A4A4]">Sub-1s loading.</p>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929]">
                  <div className="text-[11px] font-dmsans font-bold text-[#F1D38A] uppercase mb-0.5 flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#D9B15F]" /> STRATEGY
                  </div>
                  <p className="text-[10px] text-[#A4A4A4]">Purposeful design.</p>
                </div>
              </div>

            </div>

            {/* Right Column: RICH VISUAL DARK STUDIO MOCKUP & FLOATING CARDS */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-6 bg-[#0B0B0B]/90 border border-[#D9B15F]/35 shadow-[0_0_60px_rgba(217,177,95,0.2)] overflow-hidden">
                
                {/* Floating Image Graphic */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#292929] mb-4 group">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                    alt="Ebenora Digital Studio Mockup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                  {/* Floating Gold Score Pill */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#050505]/90 backdrop-blur-md border border-[#D9B15F]/40 font-dmsans text-xs text-[#F5F2EA] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                    <span className="font-bold text-[#F1D38A]">99/100</span>
                    <span className="text-[#A4A4A4]">LIGHTHOUSE SCORE</span>
                  </div>
                </div>

                {/* Interactive Visual Metrics Row */}
                <div className="grid grid-cols-3 gap-3 text-center font-dmsans">
                  <div className="p-3 rounded-xl bg-[#050505] border border-[#292929]">
                    <span className="block text-xl font-extrabold text-[#F1D38A]">100%</span>
                    <span className="text-[9px] text-[#A4A4A4] uppercase font-bold">Custom Code</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#050505] border border-[#292929]">
                    <span className="block text-xl font-extrabold text-[#D9B15F]">&lt; 0.8s</span>
                    <span className="text-[9px] text-[#A4A4A4] uppercase font-bold">Load Speed</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#050505] border border-[#292929]">
                    <span className="block text-xl font-extrabold text-[#C9973E]">Global</span>
                    <span className="text-[9px] text-[#A4A4A4] uppercase font-bold">SEO Ready</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONNECTED GROWTH ARCHITECTURE VISUAL DIAGRAM */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0B0B0B] border-b border-[#292929] relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            <div className="badge-gold">
              <span>THE EBENORA ARCHITECTURE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EA] font-extrabold leading-tight">
              Your Business Has Competition. <br />
              <span className="text-gold-gradient italic font-normal">Your Digital Presence Shouldn't Look Like Everyone Else.</span>
            </h2>

            <p className="text-base text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
              There are thousands of designers, developers and agencies. Ebenora combines <strong>Strategy + Design + Development + SEO + Content</strong> into one connected digital experience.
            </p>

            {/* VISUAL DIAGRAM WITH ICONS & GOLD CONNECTORS */}
            <div className="p-8 rounded-3xl bg-[#050505] border border-[#D9B15F]/30 max-w-4xl mx-auto shadow-[0_0_40px_rgba(217,177,95,0.15)]">
              <span className="text-xs font-dmsans text-[#D9B15F] font-bold uppercase tracking-widest block mb-8">
                OUR CONNECTED DIGITAL GROWTH SYSTEM
              </span>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 font-dmsans text-xs font-bold text-[#F5F2EA]">
                {[
                  { name: "BRAND", icon: Award, desc: "Identity" },
                  { name: "WEBSITE", icon: Monitor, desc: "Platform" },
                  { name: "CONTENT", icon: Code2, desc: "Storytelling" },
                  { name: "SEO", icon: TrendingUp, desc: "Discoverability" },
                  { name: "VISIBILITY", icon: Eye, desc: "Reach" },
                  { name: "GROWTH", icon: Rocket, desc: "Conversion" },
                ].map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-[#0B0B0B] border border-[#292929] hover:border-[#D9B15F] transition-all flex flex-col items-center text-center group">
                      <div className="w-10 h-10 rounded-xl bg-[#151515] border border-[#D9B15F]/30 flex items-center justify-center text-[#D9B15F] mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[#F1D38A] font-extrabold text-xs block">{node.name}</span>
                      <span className="text-[10px] text-[#A4A4A4]">{node.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/about"
                className="btn-gold-outline py-3.5 px-8 text-xs font-bold"
              >
                <span>WHY EBENORA →</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. VISUAL SERVICES SHOWCASE SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#050505] border-b border-[#292929] relative">
        <div className="container mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="badge-gold">
              <span>OUR CAPABILITIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EA] font-extrabold">
              Everything Your <span className="text-gold-gradient italic font-normal">Digital Presence Needs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="ebenora-card p-8 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-[#292929]">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" alt="Branding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-dmsans font-bold text-[#D9B15F] px-3 py-1 bg-[#151515] rounded-full border border-[#292929] inline-block mb-3">
                  01 — BRANDING
                </span>
                <h3 className="text-2xl font-bold text-[#F5F2EA] mb-2 font-serif">Branding & Graphic Design</h3>
                <p className="text-xs font-dmsans text-[#D9B15F] mb-4 font-bold">Build a brand people remember.</p>
              </div>
              <Link to="/services/branding" className="btn-gold-outline text-xs py-3 w-full text-center mt-4">
                EXPLORE BRANDING →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="ebenora-card p-8 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-[#292929]">
                  <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80" alt="Web Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-dmsans font-bold text-[#D9B15F] px-3 py-1 bg-[#151515] rounded-full border border-[#292929] inline-block mb-3">
                  02 — WEB DESIGN
                </span>
                <h3 className="text-2xl font-bold text-[#F5F2EA] mb-2 font-serif">Websites & Digital Experiences</h3>
                <p className="text-xs font-dmsans text-[#D9B15F] mb-4 font-bold">Turn attention into action.</p>
              </div>
              <Link to="/services/web-development" className="btn-gold-outline text-xs py-3 w-full text-center mt-4">
                EXPLORE WEB DESIGN →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="ebenora-card p-8 flex flex-col justify-between group border-[#D9B15F]/40 shadow-[0_0_30px_rgba(217,177,95,0.12)]">
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-[#D9B15F]/30">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="SEO & Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-dmsans font-bold text-[#F1D38A] px-3 py-1 bg-[#D9B15F]/15 rounded-full border border-[#D9B15F]/30 inline-block mb-3">
                  03 — SEO & GROWTH
                </span>
                <h3 className="text-2xl font-bold text-[#F5F2EA] mb-2 font-serif">SEO & Digital Growth</h3>
                <p className="text-xs font-dmsans text-[#D9B15F] mb-4 font-bold">Be discovered when searching.</p>
              </div>
              <Link to="/services/seo" className="btn-gold-primary text-xs py-3 w-full text-center mt-4">
                EXPLORE SEO →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* VISUAL PORTFOLIO PREVIEW SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0B0B0B] border-b border-[#292929]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 max-w-6xl mx-auto">
            <div>
              <div className="badge-gold mb-3">
                <span>OUR RECENT WORK</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EA] font-extrabold">
                Selected <span className="text-gold-gradient italic font-normal">Case Studies.</span>
              </h2>
            </div>

            <Link to="/portfolio" className="btn-gold-outline py-3 px-6 text-xs font-bold">
              VIEW ALL PROJECTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="ebenora-card overflow-hidden bg-[#050505] group">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#292929]">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Vance Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-xs font-dmsans text-[#D9B15F] font-bold block mb-1">Vance Commercial Studio</span>
                <h3 className="text-xl font-bold font-serif text-[#F5F2EA]">Luxury Architectural & Commercial Engine</h3>
              </div>
            </div>

            <div className="ebenora-card overflow-hidden bg-[#050505] group">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#292929]">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" alt="Royal Celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-xs font-dmsans text-[#D9B15F] font-bold block mb-1">Royal Celebration Events</span>
                <h3 className="text-xl font-bold font-serif text-[#F5F2EA]">Digital Event Hub & Brand Visual System</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL HOMEPAGE CTA */}
      <section className="py-24 bg-[#050505] relative">
        <div className="container mx-auto text-center max-w-3xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EA] font-extrabold leading-tight">
            Ready to Build a Brand <br />
            <span className="text-gold-gradient italic font-normal">That Deserves to Be Seen?</span>
          </h2>
          <p className="text-sm text-[#A4A4A4] max-w-xl mx-auto">
            From visual identity to search visibility, Ebenora Creations builds the complete digital presence.
          </p>

          <div className="pt-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold-primary py-4 px-9 text-xs sm:text-sm font-bold">
              CHAT WITH US ON WHATSAPP →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
