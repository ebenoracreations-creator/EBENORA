import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function InsightsSection() {
  const whatsappUrl = "https://wa.me/18005557368?text=" + encodeURIComponent("Hi SENTRIK Team! I'd like to read your latest insights and strategies on discoverability.");

  const articles = [
    {
      date: "May 24, 2024",
      title: "Why Most Websites Don't Get Traffic (And How to Fix It)",
      tag: "Strategy",
      img: "/images/insight-1.svg"
    },
    {
      date: "May 24, 2024",
      title: "AI Search is Changing the Game. Are You Ready?",
      tag: "AEO & GEO",
      img: "/images/insight-2.svg"
    },
    {
      date: "May 24, 2024",
      title: "Content Strategy That Ranks (And Converts)",
      tag: "Content",
      img: "/images/insight-3.svg"
    },
    {
      date: "May 24, 2024",
      title: "The Future of SEO is Discoverability",
      tag: "Future SEO",
      img: "/images/insight-4.svg"
    }
  ];

  return (
    <section id="insights" className="py-24 relative overflow-hidden bg-[#040407]">
      <div className="container mx-auto">
        
        {/* Header matching Image 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 max-w-6xl mx-auto">
          <div>
            <div className="badge-pill-purple mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>INSIGHTS & STRATEGIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ideas, strategies and <br />
              <span className="font-serif italic text-[#FF8A00] font-normal">insights to help you grow.</span>
            </h2>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark-secondary py-3 px-5 text-xs font-bold rounded-xl flex items-center gap-2"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
          </a>
        </div>

        {/* 4 Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {articles.map((art, idx) => (
            <a 
              key={idx}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-sentrik rounded-2xl overflow-hidden border border-white/10 bg-[#0B0B12] flex flex-col justify-between group hover:border-[#7000FF]/50 transition-all duration-300 text-decoration-none"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#040407]">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 bg-slate-950/90 text-[10px] font-mono font-bold text-[#00F0FF] rounded border border-white/10">
                    {art.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block mb-2">{art.date}</span>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#FF8A00] transition-colors mb-4 font-heading">
                    {art.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center text-xs font-mono font-bold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
