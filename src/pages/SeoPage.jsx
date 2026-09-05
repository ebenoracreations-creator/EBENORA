import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SeoPage() {
  useEffect(() => {
    document.title = "SEO & Digital Marketing Agency in Kochi, Kerala | Ebenora";
  }, []);

  return (
    <div className="pt-32 pb-20 font-['Kanit',sans-serif] bg-[#0C0C0C] text-[#D7E2EA]">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-neutral-900 bg-[#0C0C0C]">
        <div className="container mx-auto text-center max-w-4xl space-y-6 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BBCCD7]/10 border border-[#BBCCD7]/30 text-xs font-semibold text-[#BBCCD7] uppercase tracking-widest">
            <span>[ SEO & DIGITAL MARKETING KOCHI ]</span>
          </div>

          <h1 className="hero-heading font-black text-4xl sm:text-6xl uppercase tracking-tight leading-tight">
            Turn Search Visibility Into Business Growth
          </h1>

          <p className="text-base sm:text-xl text-[#D7E2EA]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Grow your visibility with strategic SEO, local SEO, content, and digital marketing services designed to help businesses compete in search in Kochi and across Kerala.
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
              Get an SEO Strategy →
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Pillars Breakdown */}
      <section className="py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
              The 5 Pillars of Search Discoverability
            </h2>
            <p className="text-xs font-mono text-[#BBCCD7] italic">
              &ldquo;Our goal isn&apos;t simply higher rankings. It&apos;s qualified visibility that contributes to real business growth.&rdquo;
            </p>
          </div>

          <div className="space-y-6">
            {/* 1 Technical SEO */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">1. Technical SEO</h3>
                <span className="text-xs font-mono text-[#BBCCD7] font-bold">PILLAR 01</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mb-4 font-light">Establishing a flawless technical foundation for search engine crawlers and user experience.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#D7E2EA]">
                <span>• Site architecture</span>
                <span>• Indexability & Crawling</span>
                <span>• Core Web Vitals</span>
                <span>• Mobile performance</span>
                <span>• Structured JSON-LD schema</span>
                <span>• Speed optimization</span>
              </div>
            </div>

            {/* 2 On-Page SEO */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">2. On-Page SEO</h3>
                <span className="text-xs font-mono text-[#BBCCD7] font-bold">PILLAR 02</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mb-4 font-light">Optimizing content and metadata to match commercial search intent for Kochi & Kerala businesses.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#D7E2EA]">
                <span>• Keyword strategy</span>
                <span>• Search intent mapping</span>
                <span>• Title & Meta tags</span>
                <span>• Internal linking</span>
                <span>• Content optimization</span>
                <span>• Heading hierarchy</span>
              </div>
            </div>

            {/* 3 Content Strategy */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">3. Content Strategy</h3>
                <span className="text-xs font-mono text-[#BBCCD7] font-bold">PILLAR 03</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mb-4 font-light">Developing authoritative content systems that inform, rank, and convert.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#D7E2EA]">
                <span>• Authority content</span>
                <span>• Topic clusters</span>
                <span>• Commercial landing pages</span>
                <span>• Educational guides</span>
              </div>
            </div>

            {/* 4 Local SEO */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">4. Local SEO</h3>
                <span className="text-xs font-mono text-[#BBCCD7] font-bold">PILLAR 04</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mb-4 font-light">Dominating local searches in Kochi and Google Maps discoverability.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#D7E2EA]">
                <span>• Google Business Profile</span>
                <span>• Local search visibility</span>
                <span>• Location pages</span>
                <span>• Reputation monitoring</span>
              </div>
            </div>

            {/* 5 Authority & Growth */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">5. Authority & Growth</h3>
                <span className="text-xs font-mono text-[#BBCCD7] font-bold">PILLAR 05</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mb-4 font-light">Building digital credibility and monitoring search performance continuously.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#D7E2EA]">
                <span>• Backlink strategy</span>
                <span>• Digital PR opportunities</span>
                <span>• Competitor analysis</span>
                <span>• Search visibility tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="container mx-auto text-center max-w-2xl space-y-6 px-6">
          <h2 className="hero-heading text-3xl font-black uppercase tracking-tight">Ready to Elevate Your Search Visibility?</h2>
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
            GET AN SEO STRATEGY →
          </Link>
        </div>
      </section>
    </div>
  );
}
