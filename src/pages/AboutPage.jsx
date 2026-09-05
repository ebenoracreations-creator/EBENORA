import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Award, Globe, ShieldCheck, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      
      {/* Hero */}
      <section className="py-16 border-b border-[#292929] bg-[#050505]">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <div className="badge-gold">
            <span>ABOUT EBENORA CREATIONS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-extrabold leading-tight">
            We Turn Ideas <br />
            <span className="text-gold-gradient italic font-normal">Into Experiences.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
            Ebenora Creations exists at the intersection of creative thinking, strategic design, high-performance technology, and long-term digital growth.
          </p>

          <div className="pt-4 font-mono text-sm font-bold text-[#F1D38A] tracking-widest uppercase">
            DESIGN • DEVELOP • INSPIRE
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-[#0B0B0B] border-b border-[#292929]">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#F5F2EA] font-bold">The Ebenora Story</h2>
              <p className="text-xs sm:text-sm text-[#A4A4A4] leading-relaxed">
                Most agencies treat design, development, and SEO as separate tasks done by disconnected teams. We built Ebenora Creations around one unified principle: <strong>True digital growth requires all creative and technical assets to work seamlessly together.</strong>
              </p>
              <p className="text-xs sm:text-sm text-[#A4A4A4] leading-relaxed">
                From luxury brand strategy and custom web development to global search discoverability, we build digital assets designed to help businesses stand out and compete globally.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#050505] border border-[#292929] space-y-4">
              <span className="text-xs font-mono text-[#D9B15F] font-bold uppercase tracking-widest block">OUR BRAND CORE</span>
              <div className="text-lg font-serif italic text-[#F5F2EA]">"You think. We create."</div>
              <p className="text-xs text-[#A4A4A4] leading-relaxed">
                We take your vision and turn it into a world-class digital brand engineered for credibility and search visibility.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#292929]">
            <div className="p-6 rounded-xl bg-[#050505] border border-[#292929]">
              <h3 className="text-base font-bold text-[#F5F2EA] mb-2 font-serif">Strategy Before Execution</h3>
              <p className="text-xs text-[#A4A4A4]">We analyze positioning, target market, and search intent before writing code or designing pixels.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-[#292929]">
              <h3 className="text-base font-bold text-[#F5F2EA] mb-2 font-serif">Global-Quality Standards</h3>
              <p className="text-xs text-[#A4A4A4]">Built to compete globally with sub-second speeds, luxury typography, and clean code architecture.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-[#292929]">
              <h3 className="text-base font-bold text-[#F5F2EA] mb-2 font-serif">Long-Term Growth Partner</h3>
              <p className="text-xs text-[#A4A4A4]">We don't simply hand over files—we build digital assets your business can continuously grow with.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto text-center max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl text-[#F5F2EA] font-bold">Let's Build Something Exceptional Together</h2>
          <Link to="/contact" className="btn-gold-primary py-4 px-8 text-xs font-bold">
            START THE CONVERSATION →
          </Link>
        </div>
      </section>

    </div>
  );
}
