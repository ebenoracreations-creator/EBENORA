import React, { useState } from 'react';
import { ArrowRight, Search, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('best interior designer in kochi');
  const whatsappAuditUrl = "https://wa.me/18005557368?text=" + encodeURIComponent("Hi SENTRIK Team! I'd like to find my website's search and AI discoverability gaps.");

  return (
    <section className="relative pt-36 pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#040407]">
      
      {/* Curved Planet Horizon Glow Mesh & Starry Perspective Grid matching Image 1 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1300px] h-[340px] bg-gradient-to-t from-[#7000FF]/25 via-[#FF6B00]/15 to-transparent rounded-[100%] blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#7000FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column matching Image 1 */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Tag Badge */}
            <div className="badge-pill-purple">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>SEARCH • AI • DISCOVERABILITY</span>
            </div>

            {/* Main Headline with Serif Accent matching Image 1 */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight">
              Your website exists. <br />
              But can people <span className="font-serif italic text-[#FF8A00] font-normal">find it?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl font-body">
              <strong className="text-white font-semibold">SENTRIK</strong> builds digital discoverability systems that help brands get found, understood and chosen across search and AI-driven platforms.
            </p>

            {/* CTAs matching Image 1 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a 
                href={whatsappAuditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange-gradient py-3.5 px-7 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <span>Find Your Gaps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="#problem"
                className="btn-dark-secondary py-3.5 px-6 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <span>See How It Works</span>
                <ChevronDown className="w-4 h-4 text-[#00F0FF]" />
              </a>
            </div>

            {/* TRUSTED BY AMBITIOUS BRANDS LOGO ROW matching Image 1 */}
            <div className="pt-6 border-t border-white/10 w-full">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                TRUSTED BY AMBITIOUS BRANDS
              </span>
              <div className="flex items-center gap-6 opacity-60 font-heading font-bold text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#FF8A00] inline-block"></span> logoipsum</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#7000FF] inline-block"></span> logoipsum</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#00F0FF] inline-block"></span> logoipsum</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#34D399] inline-block"></span> logoipsum</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Search AI Mockup Card matching Image 1 */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-sentrik p-6 sm:p-7 rounded-3xl border border-white/15 bg-[#090910]/90 shadow-[0_0_50px_rgba(112,0,255,0.3)]">
              
              {/* Search Bar Simulation */}
              <div className="p-3 bg-[#040407] border border-white/10 rounded-2xl flex items-center gap-3 mb-5">
                <Search className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-mono text-white focus:outline-none w-full"
                  placeholder="best interior designer in kochi"
                />
              </div>

              {/* SEARCH RESULTS COMPARISON BAR CHART matching Image 1 */}
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-white/5 mb-4 text-xs font-mono">
                <span className="text-[10px] text-slate-400 block mb-2 font-bold uppercase">SEARCH RESULTS</span>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-[11px] text-slate-300">Brand A</span>
                    <div className="flex-1 bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#FF8A00] h-full rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-[11px] text-slate-400">Brand B</span>
                    <div className="flex-1 bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-slate-600 h-full rounded-full w-[60%]"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-[11px] text-slate-400">Brand C</span>
                    <div className="flex-1 bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-slate-600 h-full rounded-full w-[45%]"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-[11px] text-slate-400">Brand D</span>
                    <div className="flex-1 bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-slate-600 h-full rounded-full w-[25%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SENTRIK OPPORTUNITY CARD matching Image 1 */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 mb-5">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    SENTRIK OPPORTUNITY
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 rounded-xl bg-[#040407] border border-white/5">
                    <span className="block text-xl font-extrabold text-[#FF8A00]">14</span>
                    <span className="text-[10px] text-slate-400 font-mono">Search Gaps Identified</span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#040407] border border-white/5">
                    <span className="block text-xl font-extrabold text-[#C084FC]">8</span>
                    <span className="text-[10px] text-slate-400 font-mono">Content Opportunities</span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#040407] border border-white/5">
                    <span className="block text-xl font-extrabold text-[#00F0FF]">3</span>
                    <span className="text-[10px] text-slate-400 font-mono">Technical Issues</span>
                  </div>
                </div>
              </div>

              {/* Visibility Potential Bar Graphic matching Image 1 */}
              <div className="p-4 rounded-2xl bg-[#040407] border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-slate-400">Visibility Potential</span>
                  <span className="text-slate-400">High</span>
                </div>
                
                <div className="flex items-end gap-1.5 h-14 pt-1">
                  {[25, 35, 50, 40, 65, 85, 75, 95].map((val, idx) => (
                    <div key={idx} className="flex-1 bg-slate-800 rounded-t-sm relative group overflow-hidden">
                      <div 
                        className="w-full bg-gradient-to-t from-[#7000FF] via-[#0066FF] to-[#FF8A00] rounded-t-sm transition-all duration-500" 
                        style={{ height: `${val}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
