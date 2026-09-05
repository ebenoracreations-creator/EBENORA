import React from 'react';
import { HeartHandshake, AlertTriangle } from 'lucide-react';

export default function HardTruthSection({ onOpenQuote }) {
  return (
    <section id="hard-truth" className="py-24 bg-[#0A0A0C] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-pill inline-flex items-center gap-2 mb-3 border-red-500/30 text-red-400 bg-red-500/10">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>The Truth Most Agencies Hide From You</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Just Having a Website <span className="text-[#FF6B00]">Won't Magically Get You Clients.</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-3 font-normal leading-relaxed">
            Here is the honest truth explained simply: A website is just the foundation. To reach the top and get real business, you need continuous creative effort.
          </p>
        </div>

        {/* 3 Simple Truth Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Card 1 */}
          <div className="studio-card p-6 bg-[#121215] flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl flex items-center justify-center font-extrabold text-sm mb-4 font-mono">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-2">A Website is Like a Bicycle</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                If you buy a shiny bicycle but never pedal it, it stays parked in the garage. A website alone won't bring customers unless you continuously drive people to it with great content, videos, and graphics.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-red-400 font-semibold">
              ❌ Mistake: "Build it and wait"
            </div>
          </div>

          {/* Card 2 */}
          <div className="studio-card p-6 bg-[#121215] flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-[#FF6B00]/20 text-[#FF8533] border border-[#FF6B00]/30 rounded-xl flex items-center justify-center font-extrabold text-sm mb-4 font-mono">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SEO Needs Regular Feeding</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Google is like a puppy—it likes fresh food! If you never update your site, Google assumes your site is abandoned. Regular SEO maintenance, new reviews, and updated visuals keep you on top.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#FF8533] font-semibold">
              ⚠️ SEO requires continuous effort
            </div>
          </div>

          {/* Card 3 */}
          <div className="studio-card p-6 bg-[#121215] flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-emerald-500/20 text-[#34D399] border border-emerald-500/30 rounded-xl flex items-center justify-center font-extrabold text-sm mb-4 font-mono">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Boring Content Kills Sales</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                If a visitor arrives and sees plain text with no exciting videos, motion graphics, or stunning design, they click "Back" in 3 seconds. High-converting creative assets hold their attention.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#34D399] font-semibold">
              💡 Solution: Great Videos & Graphics
            </div>
          </div>

        </div>

        {/* Solution Box */}
        <div className="studio-card p-8 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-[#141419] border border-purple-500/30">
          <div className="space-y-3">
            <div className="badge-pill border-purple-500/30 text-purple-300 bg-purple-500/10 inline-flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-purple-400" /> Ongoing Creative Partnership
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Hire AuraCraft as Your Dedicated Monthly Creative Team
            </h3>
            <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
              Don't stress over doing everything yourself. You can hire us month-to-month to handle your <strong>ongoing website updates, graphic design, video editing, motion graphics, and SEO growth</strong> so your business never stops winning.
            </p>
          </div>

          <button 
            onClick={onOpenQuote}
            className="btn-primary py-4 px-6 rounded-xl text-sm font-bold shrink-0"
          >
            Discuss Monthly Creative Retainer
          </button>
        </div>

      </div>
    </section>
  );
}
