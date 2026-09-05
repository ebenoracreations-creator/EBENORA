import React from 'react';
import { Target, Compass, Search, Edit3, Radio, BarChart3 } from 'lucide-react';

export default function SystemSection() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      icon: Search,
      desc: "We research your business, market, audience & competitors."
    },
    {
      num: "02",
      title: "POSITION",
      icon: Compass,
      desc: "We define your unique positioning and search opportunities."
    },
    {
      num: "03",
      title: "STRUCTURE",
      icon: Target,
      desc: "We build a search-friendly information architecture."
    },
    {
      num: "04",
      title: "CREATE",
      icon: Edit3,
      desc: "We develop content that matches intent and builds authority."
    },
    {
      num: "05",
      title: "DISTRIBUTE",
      icon: Radio,
      desc: "We build signals that increase visibility across search & AI platforms."
    },
    {
      num: "06",
      title: "MEASURE",
      icon: BarChart3,
      desc: "We track performance, opportunities and continuous growth."
    }
  ];

  return (
    <section id="strategy" className="py-24 relative overflow-hidden bg-[#040407]">
      <div className="container mx-auto">
        
        {/* Header matching Image 1 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-pill-purple mb-3">
            <span>THE SENTRIK SYSTEM™</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our 6-step system for <br />
            digital <span className="font-serif italic text-[#FF8A00] font-normal">discoverability.</span>
          </h2>
        </div>

        {/* 6 Step Horizontal Process Flow with Dashed Lines matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="glass-panel-sentrik p-6 rounded-2xl border border-white/10 bg-[#090910] flex flex-col justify-between hover:border-[#FF6B00]/50 transition-all group relative"
              >
                <div>
                  {/* Circle Icon Node */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/15 flex items-center justify-center text-[#FF8A00] group-hover:border-[#FF8A00] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {idx < 5 && (
                      <span className="hidden lg:block text-slate-600 font-mono text-xs font-bold tracking-tighter">
                        ┈┈┈►
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono font-bold text-[#FF8A00] block mb-1">
                    {step.num}
                  </span>

                  <h3 className="text-base font-extrabold font-heading text-white tracking-wider mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
