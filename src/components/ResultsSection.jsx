import React from 'react';
import { TrendingUp, Quote } from 'lucide-react';

export default function ResultsSection() {
  const whatsappUrl = "https://wa.me/18005557368?text=" + encodeURIComponent("Hi SENTRIK Team! I'd like to see your client case studies and organic growth results.");

  return (
    <section id="results" className="py-24 relative overflow-hidden bg-[#040407]">
      <div className="container mx-auto">
        
        {/* Header matching Image 1 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-pill-purple mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
            <span>CASE STUDY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Strategic SEO. <span className="font-serif italic text-[#FF8A00] font-normal">Real Results.</span>
          </h2>
        </div>

        {/* Big Results Showcase Box matching Image 1 */}
        <div className="max-w-5xl mx-auto glass-panel-sentrik p-8 rounded-3xl border border-white/10 bg-[#0B0B12]/90">
          
          {/* Metrics Header Bar matching Image 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pb-8 border-b border-white/10">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#34D399] font-heading">+184%</span>
              <span className="text-xs text-slate-400 font-mono mt-1 block">Organic Impressions</span>
            </div>

            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#00F0FF] font-heading">+72%</span>
              <span className="text-xs text-slate-400 font-mono mt-1 block">Organic Traffic</span>
            </div>

            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#FF8A00] font-heading">+41</span>
              <span className="text-xs text-slate-400 font-mono mt-1 block">Keywords Ranked</span>
            </div>

            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#C084FC] font-heading">3.4x</span>
              <span className="text-xs text-slate-400 font-mono mt-1 block">Non-Branded Traffic</span>
            </div>
          </div>

          {/* Graph & Testimonial Split matching Image 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            
            {/* Graph Visualization */}
            <div className="lg:col-span-7 bg-[#040407] p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="text-slate-300 font-bold">Organic Traffic Growth Trajectory</span>
                <span className="text-[#34D399]">Jan - Jun Trend</span>
              </div>

              {/* Line Graph SVG Simulation */}
              <div className="relative h-40 w-full flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7000FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path 
                    d="M0,130 Q80,120 150,90 T300,50 T500,10 L500,150 L0,150 Z" 
                    fill="url(#chartGrad)" 
                  />

                  <path 
                    d="M0,130 Q80,120 150,90 T300,50 T500,10" 
                    fill="none" 
                    stroke="#7000FF" 
                    strokeWidth="4" 
                  />

                  {/* Pulsing Dots */}
                  <circle cx="150" cy="90" r="5" fill="#FF8A00" />
                  <circle cx="300" cy="50" r="5" fill="#00F0FF" />
                  <circle cx="500" cy="10" r="6" fill="#34D399" className="animate-ping" />
                </svg>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-white/5">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Testimonial Quote matching Image 1 */}
            <div className="lg:col-span-5 p-6 bg-[#040407] rounded-2xl border border-white/10 flex flex-col justify-between h-full">
              <div>
                <Quote className="w-8 h-8 text-[#FF8A00] opacity-80 mb-3" />
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-body mb-4">
                  "SENTRIK didn't just do SEO. They built a system that changed the way we grow online."
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="block text-white font-bold">Client Name</span>
                  <span className="text-slate-400">Industry</span>
                </div>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00F0FF] hover:underline flex items-center gap-1 font-bold"
                >
                  View Case Study →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
