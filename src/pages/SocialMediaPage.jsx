import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, Layout, Share2, Palette } from 'lucide-react';

export default function SocialMediaPage() {
  return (
    <div className="pt-32 pb-20">
      
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-[#292929] bg-[#050505]">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <div className="badge-gold">
            <span>SOCIAL MEDIA & CREATIVE CONTENT</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-extrabold leading-tight">
            Your Brand Should Look <br />
            <span className="text-gold-gradient italic font-normal">Consistent Everywhere.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
            From Instagram feeds to high-converting ad creative visual systems, we build content designed to make your business impossible to ignore.
          </p>

          <div className="pt-4">
            <Link to="/contact" className="btn-gold-primary py-4 px-8 text-xs font-bold">
              ELEVATE MY SOCIAL PRESENCE →
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Sections */}
      <section className="py-24 bg-[#0B0B0B] border-b border-[#292929]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Social Brand Strategy", desc: "Establishing content pillars, visual guidelines, and channel positioning." },
              { title: "Content Design Systems", desc: "Cohesive visual templates, carousels, and feed aesthetics for Instagram & LinkedIn." },
              { title: "Creative Campaigns", desc: "Impactful promotional campaign concepts designed for product launches and events." },
              { title: "Social Branding Assets", desc: "Custom avatars, highlight covers, banner art, and channel branding." },
              { title: "Advertising Creatives", desc: "High-converting ad visuals engineered for Meta, Instagram, and LinkedIn ads." },
              { title: "Performance Content", desc: "Visual storytelling designed to drive clicks, engagement, and direct inquiries." },
            ].map((item, idx) => (
              <div key={idx} className="ebenora-card p-6 bg-[#050505]">
                <h3 className="text-lg font-bold text-[#F5F2EA] mb-2">{item.title}</h3>
                <p className="text-xs text-[#A4A4A4] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto text-center max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl text-[#F5F2EA] font-bold">Make Your Brand Impossible to Ignore</h2>
          <Link to="/contact" className="btn-gold-primary py-4 px-8 text-xs font-bold">
            ELEVATE MY SOCIAL PRESENCE →
          </Link>
        </div>
      </section>

    </div>
  );
}
