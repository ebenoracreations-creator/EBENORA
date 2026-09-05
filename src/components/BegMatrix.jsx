import React from 'react';
import { ShieldCheck, Zap, RotateCcw, Lock, Clock, HeartHandshake } from 'lucide-react';

export default function BegMatrix({ onOpenQuote }) {
  const guarantees = [
    {
      icon: RotateCcw,
      title: "100% Free Redesign Guarantee",
      desc: "If our initial custom design draft doesn't completely thrill you on first view, we redesign it for free until you love it.",
      badge: "Zero Risk",
      badgeClass: "badge-pill-orange"
    },
    {
      icon: Zap,
      title: "Sub-1-Second Speed Guarantee",
      desc: "We build clean custom code guaranteed to load in under 1 second and score 95-100 on Google Lighthouse.",
      badge: "Ultra Fast",
      badgeClass: "badge-pill-cyan"
    },
    {
      icon: ShieldCheck,
      title: "Google & AI SEO Rank Architecture",
      desc: "Pre-installed JSON-LD structured schemas, OpenGraph tags, and canonical SEO structure engineered to rank high on search engines.",
      badge: "#1 SEO Rank",
      badgeClass: "badge-pill-emerald"
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Monthly Creative Team",
      desc: "Optionally hire AuraCraft month-to-month for continuous graphic design, video editing, motion graphics, and web updates.",
      badge: "Full Partnership",
      badgeClass: "badge-pill"
    },
    {
      icon: Lock,
      title: "100% Full Code Ownership",
      desc: "No monthly platform lock-in or hidden platform fees. You own 100% of your website code and assets forever.",
      badge: "Total Ownership",
      badgeClass: "badge-pill"
    },
    {
      icon: Clock,
      title: "Guaranteed Rapid Launch",
      desc: "We respect your business timeline. Your website will be fully ready, tested, and live on your schedule.",
      badge: "On Schedule",
      badgeClass: "badge-pill"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0C] border-t border-white/10">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill inline-flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
            <span>Risk-Free Business Guarantees</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Ironclad <span className="text-[#FF6B00]">Promises to You.</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-2 font-normal">
            We remove all the risk so you can work with us with 100% peace of mind.
          </p>
        </div>

        {/* Grid of Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="studio-card p-6 bg-[#121215] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center text-[#FF6B00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={item.badgeClass}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-xs font-mono font-bold text-zinc-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                  <span>Guaranteed in Writing</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
