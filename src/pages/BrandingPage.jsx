import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BrandingPage() {
  useEffect(() => {
    document.title = "Graphic Design & Branding Agency in Kochi | Ebenora Creations";
  }, []);

  return (
    <div className="pt-32 pb-20 font-['Kanit',sans-serif] bg-[#0C0C0C] text-[#D7E2EA]">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-neutral-900 bg-[#0C0C0C]">
        <div className="container mx-auto text-center max-w-4xl space-y-6 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BBCCD7]/10 border border-[#BBCCD7]/30 text-xs font-semibold text-[#BBCCD7] uppercase tracking-widest">
            <span>GRAPHIC DESIGN & BRANDING KOCHI</span>
          </div>

          <h1 className="hero-heading font-black text-4xl sm:text-6xl uppercase tracking-tight leading-tight">
            Design That Makes Your Brand Impossible to Ignore
          </h1>

          <p className="text-base sm:text-xl text-[#D7E2EA]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Build a recognizable brand with professional graphic design, logo design, visual identity, and creative marketing materials from Ebenora Creations in Kochi, Kerala.
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
              Build My Brand →
            </Link>
          </div>
        </div>
      </section>

      {/* Sections Breakdown */}
      <section className="py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Complete Brand Identity Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Brand Strategy & Positioning", desc: "Defining your core message, target market, competitive edge, and brand archetype." },
              { title: "Logo & Mark Design", desc: "Crafting iconic, versatile logo marks engineered for scale across digital and print surfaces in Kochi & Kerala." },
              { title: "Color & Typography Systems", desc: "Curating high-contrast color palettes and luxury typography pairings for instant recognition." },
              { title: "Brand Guidelines Manual", desc: "Detailed rules for logo usage, clear space, brand voice, imagery style, and color codes." },
              { title: "Marketing & Print Collateral", desc: "Business cards, letterheads, brochures, pitch decks, posters, and packaging design." },
              { title: "Social Media Brand Identity", desc: "Cohesive visual templates, avatars, banners, and campaign story systems for social channels." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-xs text-[#D7E2EA]/70 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0C0C0C] border-b border-neutral-900">
        <div className="container mx-auto max-w-4xl text-center px-6">
          <h2 className="hero-heading text-3xl font-black uppercase tracking-tight mb-12">
            The Branding Execution Process
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-mono text-xs">
            {["DISCOVER", "STRATEGIZE", "CREATE", "REFINE", "LAUNCH"].map((step, idx) => (
              <div key={idx} className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-2xl text-[#BBCCD7] font-bold">
                <span className="text-[#BBCCD7] block mb-1">0{idx+1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto text-center max-w-2xl space-y-6 px-6">
          <h2 className="hero-heading text-3xl font-black uppercase tracking-tight">Ready to Build a Memorable Brand?</h2>
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
            BUILD MY BRAND →
          </Link>
        </div>
      </section>
    </div>
  );
}
