import React from 'react';

export default function SearchEvolvedSection() {
  const platforms = [
    {
      name: "Google Search",
      sub: "Traditional Search",
      logo: (
        /* Official Google G Logo SVG */
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
          <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
          <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.4 0 15.3s.7 5.6 1.9 8l3.7-2.9z"/>
          <path fill="#34A853" d="M12 23.5c3.2 0 6-1.1 8-2.9l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7.5 10.1 7.5z"/>
        </svg>
      ),
      bg: "bg-[#101018] border-[#FF6B00]/40"
    },
    {
      name: "Google AI",
      sub: "Generative Search",
      logo: (
        /* Google AI Sparkle Logo SVG */
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sparkleGrad)"/>
          <defs>
            <linearGradient id="sparkleGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4285F4"/>
              <stop offset="0.5" stopColor="#9B51E0"/>
              <stop offset="1" stopColor="#E91E63"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      bg: "bg-[#101018] border-blue-500/40"
    },
    {
      name: "ChatGPT",
      sub: "AI Discovery",
      logo: (
        /* OpenAI ChatGPT Knot Logo SVG */
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2ZM12 20A8 8 0 1 1 20 12 8 8 0 0 1 12 20Z" fill="#10A37F"/>
          <circle cx="12" cy="12" r="4" fill="#10A37F"/>
        </svg>
      ),
      bg: "bg-[#101018] border-emerald-500/40"
    },
    {
      name: "Gemini",
      sub: "AI Discovery",
      logo: (
        /* Gemini Star Logo SVG */
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="#7000FF"/>
        </svg>
      ),
      bg: "bg-[#101018] border-purple-500/40"
    },
    {
      name: "More Platforms",
      sub: "Emerging Surfaces",
      logo: (
        /* Infinity Surfaces Logo SVG */
        <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5" className="w-8 h-8">
          <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.356-8-5.096 0-5.096 8 0 8 5.223 0 7.261-8 12.356-8Z"/>
        </svg>
      ),
      bg: "bg-[#101018] border-[#FF6B00]/40"
    }
  ];

  return (
    <section id="aeo-geo" className="py-24 bg-[#050509] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header matching Image 1 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-pill-purple mb-3">
            <span>SEARCH HAS EVOLVED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We prepare your brand for <br />
            where <span className="font-serif italic text-[#FF8A00] font-normal">discovery</span> is happening.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal max-w-2xl mx-auto font-body">
            People now search, ask and discover across multiple platforms. SENTRIK ensures your brand is understandable, authoritative and discoverable everywhere.
          </p>
        </div>

        {/* 5 Platform Cards Row with Logos matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {platforms.map((plat, idx) => (
            <div 
              key={idx}
              className={`glass-panel-sentrik p-6 rounded-2xl border ${plat.bg} flex flex-col items-center text-center hover:border-white/40 transition-all group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#040407] border border-white/15 flex items-center justify-center mb-4 shadow-lg">
                {plat.logo}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 font-heading">{plat.name}</h3>
              <span className="text-xs font-mono text-slate-400">{plat.sub}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
