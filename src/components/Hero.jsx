import React from 'react';
import { ArrowRight, Code, Palette, Video, Film, Layers } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Pill Badge */}
            <div className="badge-pill-orange">
              <span>#1 Ranked Full-Stack Creative Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
              A Website Alone Won't Get You Clients. <span className="text-[#FF6B00]">You Need The Complete Creative Engine.</span>
            </h1>

            {/* Simple Truth Box */}
            <div className="studio-card p-6 border border-white/10 bg-[#121215] rounded-2xl relative">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-3 py-1 rounded-full mb-3">
                💡 Simple Truth (Explained Simply)
              </div>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Imagine opening a toy store inside a dark cave with no signs or roads. Even if your toys are awesome, nobody comes in! 
                That's what happens when you just buy a basic website. To get real customers, you need <strong className="text-white font-semibold">stunning web development</strong>, <strong className="text-white font-semibold">eye-catching video editing</strong>, <strong className="text-white font-semibold">graphic design</strong>, and <strong className="text-white font-semibold">active monthly effort</strong> so clients actually see you and buy from you.
              </p>
            </div>

            {/* All-in-One Capabilities Pills */}
            <div className="flex flex-wrap gap-2.5 w-full">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#141419] border border-white/10 text-xs font-semibold text-zinc-300 flex items-center gap-2">
                <Code className="w-4 h-4 text-[#FF6B00]" /> Web Development
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#141419] border border-white/10 text-xs font-semibold text-zinc-300 flex items-center gap-2">
                <Palette className="w-4 h-4 text-pink-400" /> Graphic Design & Branding
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#141419] border border-white/10 text-xs font-semibold text-zinc-300 flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" /> Professional Video Editing
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#141419] border border-white/10 text-xs font-semibold text-zinc-300 flex items-center gap-2">
                <Film className="w-4 h-4 text-purple-400" /> Motion Graphics
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-bold text-[#34D399] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#34D399]" /> Monthly Growth Strategy
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button 
                onClick={onOpenQuote}
                className="btn-primary text-base py-4 px-8 rounded-xl flex items-center justify-center gap-3"
              >
                <span>Get My Custom Plan</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a 
                href="#portfolio"
                className="btn-secondary text-base py-4 px-6 rounded-xl flex items-center justify-center gap-2"
              >
                <span>See Our Best Work</span>
              </a>
            </div>

            {/* Real Work Proof Tag */}
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-zinc-400">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block" />
              <span>We only showcase real work that achieved top rankings & real client results</span>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="studio-card p-6 rounded-3xl bg-[#121215] border border-white/10">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-mono text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="bg-[#08080A] text-zinc-300 px-3 py-1 rounded-full border border-white/10 font-mono text-[11px] font-bold">
                  AURACRAFT ENGINE
                </span>
              </div>

              {/* Stacked Showcase Preview */}
              <div className="space-y-3.5">
                
                <div className="p-4 rounded-xl bg-[#181820] border border-[#FF6B00]/40">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 bg-[#FF6B00]/20 text-[#FF8533] rounded-full">
                    1. High-Converting Web
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">Sub-Second Responsive Website</h3>
                  <p className="text-xs text-zinc-400">Clean, fast code built for #1 Google ranking and mobile perfection.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#181820] border border-purple-500/30">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">
                    2. Video & Motion Graphics
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">Attention-Grabbing Videos</h3>
                  <p className="text-xs text-zinc-400">Reels, promos & animated logos that keep visitors engaged.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#181820] border border-emerald-500/30">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 bg-emerald-500/20 text-[#34D399] rounded-full">
                    3. Continuous Monthly Push
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">Ongoing Growth Support</h3>
                  <p className="text-xs text-zinc-400">We don't abandon you after launch. We support your growth every month.</p>
                </div>

              </div>

              {/* Bottom Badge */}
              <div className="mt-4 p-3 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300">⚡ Complete Creative Powerhouse</span>
                <span className="text-[#FF6B00] font-bold">#1 Ranking Architecture</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
