import React from 'react';
import { Search, Compass, Wrench, RefreshCw, BarChart, TrendingUp } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      name: "Audit",
      icon: Search,
      desc: "We analyse your current visibility and gaps."
    },
    {
      num: "02",
      name: "Strategy",
      icon: Compass,
      desc: "We build a custom strategy based on real data."
    },
    {
      num: "03",
      name: "Build",
      icon: Wrench,
      desc: "We implement the plan with precision."
    },
    {
      num: "04",
      name: "Optimise",
      icon: RefreshCw,
      desc: "We refine, improve and strengthen performance."
    },
    {
      num: "05",
      name: "Measure",
      icon: BarChart,
      desc: "We track results and report transparently."
    },
    {
      num: "06",
      name: "Grow",
      icon: TrendingUp,
      desc: "We scale what works and drive sustainable growth."
    }
  ];

  return (
    <section className="py-24 bg-[#050509] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header matching Image 1 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-pill-purple mb-3">
            <span>OUR PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A simple, proven <span className="font-serif italic text-[#C084FC] font-normal">process that works.</span>
          </h2>
        </div>

        {/* 6 Process Cards Horizontal Flow with Dashed Arrows matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="glass-panel-sentrik p-6 rounded-2xl border border-white/10 bg-[#090910] flex flex-col justify-between hover:border-[#00F0FF]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/15 flex items-center justify-center text-[#00F0FF] group-hover:border-[#00F0FF] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {idx < 5 && (
                      <span className="hidden lg:block text-slate-600 font-mono text-xs font-bold tracking-tighter">
                        ┈┈┈►
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono font-bold text-[#00F0FF] block mb-1">
                    {p.num}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{p.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-body">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
