import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const articles = [
    {
      title: "Why High-Performance Web Architecture is Critical for Global SEO",
      category: "GLOBAL SEO",
      date: "August 2026",
      desc: "How sub-second loading speed, clean semantic code, and structured JSON-LD schema impact search engine crawl rates and commercial rankings.",
      img: "/images/insight-1.svg"
    },
    {
      title: "Branding Beyond Logos: Building a Luxury Identity System",
      category: "BRAND STRATEGY",
      date: "August 2026",
      desc: "Why international luxury brands focus on high-contrast editorial typography, color psychology, and strict brand guidelines.",
      img: "/images/insight-2.svg"
    },
    {
      title: "The Single Connected Team Advantage for Web & Growth",
      category: "DIGITAL GROWTH",
      date: "August 2026",
      desc: "Why separating design, development, and SEO into different vendors harms site speed and search discoverability.",
      img: "/images/insight-3.svg"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      
      {/* Hero */}
      <section className="py-16 border-b border-[#292929] bg-[#050505]">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <div className="badge-gold">
            <span>INSIGHTS & STRATEGY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-extrabold leading-tight">
            Thought Leadership on <br />
            <span className="text-gold-gradient italic font-normal">Design, SEO & Growth.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
            Articles and strategic guides from the Ebenora Creations team on building brands that get seen and compete globally.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[#0B0B0B]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <div key={idx} className="ebenora-card overflow-hidden bg-[#050505] flex flex-col justify-between">
                <div className="p-6">
                  <span className="text-[10px] font-mono font-bold text-[#D9B15F] px-2.5 py-1 bg-[#151515] rounded border border-[#292929] inline-block mb-3">
                    {art.category} • {art.date}
                  </span>
                  <h3 className="text-lg font-bold text-[#F5F2EA] mb-3 font-serif leading-snug">{art.title}</h3>
                  <p className="text-xs text-[#A4A4A4] leading-relaxed mb-4">{art.desc}</p>
                </div>

                <div className="p-6 pt-0 border-t border-[#292929]/50 mt-4">
                  <Link to="/contact" className="text-xs font-mono text-[#F1D38A] font-bold flex items-center gap-1 hover:underline">
                    <span>READ ARTICLE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
