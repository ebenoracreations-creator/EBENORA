import React from 'react';
import { Eye, EyeOff, DollarSign, AlertCircle } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-[#050509] border-y border-white/10 relative overflow-hidden">
      
      {/* Ambient Purple Wave Ribbons Graphic in Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#7000FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* Section Header matching Image 1 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-pill-purple mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-[#C084FC]" />
            <span>THE PROBLEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            A beautiful website <span className="font-serif italic text-[#C084FC] font-normal">isn't</span> a strategy.
          </h2>
        </div>

        {/* 3 Problem Cards matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: You Exist */}
          <div className="glass-panel-sentrik p-8 rounded-3xl border border-white/10 bg-[#0B0B12]/90 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#C084FC] mb-6">
              <Eye className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-heading">You Exist</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your website is online.
            </p>
          </div>

          {/* Card 2: You're Invisible */}
          <div className="glass-panel-sentrik p-8 rounded-3xl border border-[#FF6B00]/30 bg-[#0B0B12]/90 flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,107,0,0.15)]">
            <div className="w-16 h-16 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF8A00] mb-6">
              <EyeOff className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-heading">You're Invisible</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your customers don't know where to find you.
            </p>
          </div>

          {/* Card 3: You're Losing */}
          <div className="glass-panel-sentrik p-8 rounded-3xl border border-pink-500/30 bg-[#0B0B12]/90 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6">
              <DollarSign className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-heading">You're Losing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Someone else gets the click, enquiry and sale.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
