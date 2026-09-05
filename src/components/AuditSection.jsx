import React from 'react';
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react';

export default function AuditSection() {
  const whatsappAuditUrl = "https://wa.me/18005557368?text=" + encodeURIComponent("Hi SENTRIK Team! I'd like to request a full digital discoverability audit for my website.");

  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-slate-950/90 border-b border-white/10">
      <div className="container mx-auto">
        
        <div className="max-w-5xl mx-auto glass-panel-sentrik p-8 sm:p-12 border border-[#7000FF]/30 bg-[#090910]/90 rounded-3xl shadow-[0_0_60px_rgba(112,0,255,0.2)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column matching Image 1 */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <div className="badge-pill-purple">
                <Activity className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>SENTRIK AUDIT PREVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Find your <br />
                <span className="font-serif italic text-[#FF8A00] font-normal">invisible gaps.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                We analyse your digital presence to uncover opportunities that others miss. Request your custom discoverability audit.
              </p>

              {/* DIRECT WHATSAPP AUDIT BUTTON */}
              <div className="pt-2 w-full">
                <a 
                  href={whatsappAuditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-gradient py-4 px-8 text-sm font-bold w-full rounded-xl flex items-center justify-center gap-3"
                >
                  <span>Get Full Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Direct WhatsApp Consultation with SENTRIK Team</span>
              </div>
            </div>

            {/* Right Column: Discoverability Score & Metrics Gauge matching Image 1 */}
            <div className="lg:col-span-7 bg-[#040407] p-6 sm:p-8 rounded-2xl border border-white/10">
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Radial Score Gauge */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 bg-[#0B0B12] rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 mb-2">
                    Discoverability Score
                  </span>
                  
                  <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#7000FF] via-[#0066FF] to-[#FF8A00] p-1.5 shadow-[0_0_30px_rgba(112,0,255,0.4)]">
                    <div className="w-full h-full bg-[#040407] rounded-full flex flex-col items-center justify-center">
                      <span className="text-4xl font-extrabold text-white font-heading">72</span>
                      <span className="text-[10px] text-slate-400 font-mono">/100</span>
                    </div>
                  </div>

                  <span className="mt-3 text-xs font-mono font-bold text-[#00F0FF]">
                    SENTRIK Index Verified
                  </span>
                </div>

                {/* Breakdown Bars matching Image 1 */}
                <div className="sm:col-span-7 space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Technical Foundation</span>
                      <span className="font-bold text-[#34D399]">87%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#34D399] h-full rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Content Architecture</span>
                      <span className="font-bold text-[#FF8A00]">64%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FF8A00] h-full rounded-full" style={{ width: '64%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Search Intent</span>
                      <span className="font-bold text-[#00F0FF]">71%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00F0FF] h-full rounded-full" style={{ width: '71%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Authority</span>
                      <span className="font-bold text-[#C084FC]">48%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#C084FC] h-full rounded-full" style={{ width: '48%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Conversion</span>
                      <span className="font-bold text-[#34D399]">79%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#34D399] h-full rounded-full" style={{ width: '79%' }}></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Opportunities Found Counter Grid */}
              <div className="grid grid-cols-4 gap-2 text-center mt-6 pt-5 border-t border-white/10 font-mono">
                <div className="p-2 bg-[#0B0B12] rounded-xl">
                  <span className="block text-lg font-bold text-[#FF8A00]">07</span>
                  <span className="text-[9px] text-slate-400">Technical</span>
                </div>
                <div className="p-2 bg-[#0B0B12] rounded-xl">
                  <span className="block text-lg font-bold text-[#C084FC]">12</span>
                  <span className="text-[9px] text-slate-400">Content</span>
                </div>
                <div className="p-2 bg-[#0B0B12] rounded-xl">
                  <span className="block text-lg font-bold text-[#00F0FF]">04</span>
                  <span className="text-[9px] text-slate-400">Authority</span>
                </div>
                <div className="p-2 bg-[#0B0B12] rounded-xl">
                  <span className="block text-lg font-bold text-[#34D399]">09</span>
                  <span className="text-[9px] text-slate-400">Conversion</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
