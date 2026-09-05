import React from 'react';
import { Layers } from 'lucide-react';

export default function FoundationsSection() {
  const layers = [
    {
      num: "LAYER 05",
      name: "Conversion",
      desc: "Turn visibility into enquiries and customers.",
      glow: "border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF8A00]"
    },
    {
      num: "LAYER 04",
      name: "Authority",
      desc: "Build credibility, trust and digital authority.",
      glow: "border-purple-500/40 bg-purple-500/10 text-[#C084FC]"
    },
    {
      num: "LAYER 03",
      name: "Content",
      desc: "Content that answers, ranks and converts.",
      glow: "border-blue-500/40 bg-blue-500/10 text-blue-300"
    },
    {
      num: "LAYER 02",
      name: "Search Intelligence",
      desc: "Strategy, intent, keywords and opportunity mapping.",
      glow: "border-cyan-500/40 bg-cyan-500/10 text-[#00F0FF]"
    },
    {
      num: "LAYER 01",
      name: "Technical Foundation",
      desc: "Crawlabilty, indexation, speed and site health.",
      glow: "border-emerald-500/40 bg-emerald-500/10 text-[#34D399]"
    }
  ];

  return (
    <section className="py-24 bg-[#050509] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column matching Image 1 */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="badge-pill-purple mb-2">
              <Layers className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>THE FOUNDATIONS OF DISCOVERABILITY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Everything we do, <br />
              <span className="font-serif italic text-[#C084FC] font-normal">works together.</span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed font-body mb-2">
              Discoverability is not a single trick. It is a multi-layered system where technical speed, search intent, structured content, digital authority, and conversion engineering build on top of each other.
            </p>

            {/* Pure SVG 3D Stacked Pyramidal Disk Rings Graphic matching Image 1 (ZERO baked text!) */}
            <div className="w-full max-w-xs mx-auto lg:mx-0 p-6 rounded-2xl border border-white/10 bg-[#090910] shadow-[0_0_50px_rgba(112,0,255,0.2)] text-center">
              <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Layer 05 Ring - Orange Top */}
                <ellipse cx="150" cy="40" rx="45" ry="14" fill="rgba(255, 107, 0, 0.2)" stroke="#FF6B00" strokeWidth="3" />
                <text x="150" y="44" fill="#FF8A00" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LAYER 05</text>

                {/* Layer 04 Ring - Purple */}
                <ellipse cx="150" cy="85" rx="70" ry="18" fill="rgba(112, 0, 255, 0.2)" stroke="#7000FF" strokeWidth="3" />
                <text x="150" y="89" fill="#C084FC" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LAYER 04</text>

                {/* Layer 03 Ring - Blue */}
                <ellipse cx="150" cy="130" rx="95" ry="22" fill="rgba(0, 102, 255, 0.2)" stroke="#0066FF" strokeWidth="3" />
                <text x="150" y="134" fill="#60A5FA" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LAYER 03</text>

                {/* Layer 02 Ring - Cyan */}
                <ellipse cx="150" cy="175" rx="120" ry="25" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" strokeWidth="3" />
                <text x="150" y="179" fill="#00F0FF" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LAYER 02</text>

                {/* Layer 01 Ring - Emerald Green Base */}
                <ellipse cx="150" cy="215" rx="140" ry="28" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="3.5" />
                <text x="150" y="219" fill="#34D399" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LAYER 01 TECHNICAL FOUNDATION</text>
              </svg>
            </div>
          </div>

          {/* Right Stacked Hierarchy matching Image 1 */}
          <div className="lg:col-span-7 space-y-3">
            {layers.map((layer, idx) => (
              <div 
                key={idx}
                className="glass-panel-sentrik p-5 rounded-2xl border border-white/10 bg-[#0B0B12]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border ${layer.glow}`}>
                    {layer.num}
                  </span>
                  <span className="text-lg font-bold text-white font-heading">{layer.name}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-body">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
