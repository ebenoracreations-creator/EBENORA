import React from 'react';
import { XCircle, CheckCircle2, Zap, AlertTriangle, ShieldCheck, ArrowRight, Sparkles, Trophy } from 'lucide-react';

export default function ComparisonSection({ onOpenQuote }) {
  return (
    <section className="py-20 bg-slate-950/80 border-y border-white/10 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-red-500/5 via-[#00f2fe]/10 to-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill inline-flex items-center gap-2 mb-3">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Why 90% of Websites Fail & How We Win</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Standard Website vs. <span className="gradient-text-cyan">AuraCraft Masterpiece</span>
          </h2>
          <p className="text-slate-300 text-lg mt-3">
            Most agencies sell bloated, slow templates that confuse visitors. Here is why our bespoke architecture drives 3.4x more paying clients.
          </p>
        </div>

        {/* Side-by-side comparison cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Card: Typical Cheap/Template Site */}
          <div className="glass-panel p-8 rounded-3xl border border-red-500/20 bg-gradient-to-b from-slate-950 to-red-950/20 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle className="w-3.5 h-3.5" /> Typical Template Site
            </div>

            <h3 className="text-2xl font-bold text-slate-300 mb-6">Slow & Generic Template</h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-950/20 border border-red-500/15">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Slow Load Times (3s - 6s)</strong>
                  <span>Visitors leave before the page even loads. High bounce rates.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-950/20 border border-red-500/15">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Zero Google SEO Optimization</strong>
                  <span>Missing JSON-LD schema markup, bad meta tags. Buried on Page 5 of Google.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-950/20 border border-red-500/15">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Friction Lead Forms</strong>
                  <span>Boring contact forms that nobody fills out. Zero instant WhatsApp integration.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-950/20 border border-red-500/15">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Cookie-Cutter Aesthetics</strong>
                  <span>Looks like thousands of cheap templates. Fails to build luxury trust.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: AuraCraft High-Converting Masterpiece */}
          <div className="glass-panel p-8 rounded-3xl border border-[#00f2fe]/40 bg-gradient-to-b from-slate-900 via-slate-950 to-[#00f2fe]/10 relative shadow-[0_0_50px_rgba(0,242,254,0.2)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/40 text-[#00f2fe] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> AuraCraft Conversion Engine
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-6 flex items-center justify-between">
              <span>Bespoke Luxury Architecture</span>
              <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30">
                100/100 Lighthouse
              </span>
            </h3>

            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30">
                <CheckCircle2 className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Sub-1-Second Instant Load Speed</strong>
                  <span>Optimized code with zero bloat. Instant response on all mobile devices.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30">
                <CheckCircle2 className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">#1 Google SEO Dominance</strong>
                  <span>Full structured JSON-LD schema, OpenGraph tags, semantic HTML5 hierarchy.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30">
                <CheckCircle2 className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">WhatsApp Direct Lead Engine</strong>
                  <span>1-Tap pre-filled WhatsApp lead buttons & direct order checkout engine.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30">
                <CheckCircle2 className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Magnetic Luxury Aesthetics</strong>
                  <span>Obsidian glassmorphism, micro-interactions & custom animations that WOW clients.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <button 
                onClick={onOpenQuote}
                className="btn-primary w-full py-4 text-sm font-bold justify-center rounded-xl"
              >
                <span>Upgrade to an AuraCraft Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
