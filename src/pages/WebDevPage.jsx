import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Monitor, Smartphone, Tablet } from 'lucide-react';

export default function WebDevPage() {
  useEffect(() => {
    document.title = "Web Design & Development Company in Kochi | Ebenora Creations";
  }, []);

  return (
    <div className="pt-32 pb-20 font-['Kanit',sans-serif] bg-[#0C0C0C] text-[#D7E2EA]">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-neutral-900 bg-[#0C0C0C]">
        <div className="container mx-auto text-center max-w-4xl space-y-6 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BBCCD7]/10 border border-[#BBCCD7]/30 text-xs font-semibold text-[#BBCCD7] uppercase tracking-widest">
            <span>WEB DESIGN & DEVELOPMENT KOCHI</span>
          </div>

          <h1 className="hero-heading font-black text-4xl sm:text-6xl uppercase tracking-tight leading-tight">
            Web Design & Development Company in Kochi
          </h1>

          <p className="text-base sm:text-xl text-[#D7E2EA]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Ebenora Creations creates modern, responsive, and SEO-friendly websites for businesses, brands, and startups in Kochi and across Kerala.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block rounded-full px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid white',
                outlineOffset: '-3px'
              }}
            >
              Start Your Website →
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-Device Mockup Presentation */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-900">
        <div className="container mx-auto max-w-5xl text-center space-y-12 px-6">
          <h2 className="hero-heading text-3xl font-black uppercase tracking-tight">
            Responsive Across Every Device
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col items-center">
              <Monitor className="w-10 h-10 text-[#BBCCD7] mb-4" />
              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">Desktop Excellence</h3>
              <p className="text-xs text-[#D7E2EA]/70">Full widescreen immersion with rich editorial typography and cinematic layouts.</p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col items-center">
              <Tablet className="w-10 h-10 text-[#BBCCD7] mb-4" />
              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">Tablet Optimized</h3>
              <p className="text-xs text-[#D7E2EA]/70">Fluid touch layout adaptation with zero horizontal shifting or broken elements.</p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col items-center">
              <Smartphone className="w-10 h-10 text-[#BBCCD7] mb-4" />
              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">Mobile First UX</h3>
              <p className="text-xs text-[#D7E2EA]/70">Fast mobile navigation, comfortable touch targets, and sub-1s load times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-24 bg-[#0C0C0C] border-b border-neutral-900">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="hero-heading text-3xl font-black uppercase tracking-tight">
              Engineering Standards Built-In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Fast sub-second page loading speed",
              "100% Mobile responsive custom design",
              "SEO-ready architecture and schema data",
              "WhatsApp enquiry and contact integrations",
              "Conversion-focused layouts and CTAs",
              "Wedding and digital invitation features",
              "Scalable structure for business growth",
              "Cross-browser testing (Chrome, Safari, Firefox)",
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-2xl flex items-center gap-3 text-xs font-mono text-[#D7E2EA]">
                <CheckCircle2 className="w-4 h-4 text-[#BBCCD7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto text-center max-w-2xl space-y-6 px-6">
          <h2 className="hero-heading text-3xl font-black uppercase tracking-tight">Ready for a High-Performance Website?</h2>
          <Link
            to="/contact"
            className="inline-block rounded-full px-10 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
              outline: '2px solid white',
              outlineOffset: '-3px'
            }}
          >
            BUILD MY WEBSITE →
          </Link>
        </div>
      </section>
    </div>
  );
}
