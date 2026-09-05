import React from 'react';
import { Cpu, Target, FileText, Award, MapPin, Zap, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const whatsappUrl = "https://wa.me/18005557368?text=" + encodeURIComponent("Hi SENTRIK Team! I'd like to inquire about your discoverability services.");

  const services = [
    {
      icon: Cpu,
      title: "Technical SEO",
      desc: "Build a strong technical foundation."
    },
    {
      icon: Target,
      title: "Search Strategy",
      desc: "Find the right opportunities and drive real results."
    },
    {
      icon: FileText,
      title: "Content Systems",
      desc: "Create and structure content that ranks, informs and converts."
    },
    {
      icon: Award,
      title: "Authority Building",
      desc: "Build trust, relevance and authority across the web."
    },
    {
      icon: MapPin,
      title: "Local SEO",
      desc: "Dominate local searches and Google Maps discoverability."
    },
    {
      icon: Zap,
      title: "Conversion SEO",
      desc: "Turn traffic into leads with smart conversion optimisation."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#040407]">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side Header matching Image 1 */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="badge-pill-orange mb-2">
              <span>WHAT WE DO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Services built for <br />
              <span className="font-serif italic text-[#C084FC] font-normal">visibility, authority</span> <br />
              <span className="font-serif italic text-[#FF8A00] font-normal">& growth.</span>
            </h2>
          </div>

          {/* Right 6 Cards Grid matching Image 1 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <a 
                  key={idx}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-sentrik p-6 rounded-2xl border border-white/10 bg-[#090910] flex flex-col justify-between hover:border-[#FF6B00]/40 transition-all duration-300 group relative text-decoration-none"
                >
                  <div>
                    {/* Top Left Icon Box matching Image 1 */}
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF8A00] mb-5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-heading">{srv.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-body">{srv.desc}</p>
                  </div>

                  {/* Corner Accent Arrow ↗ matching Image 1 */}
                  <div className="pt-4 flex justify-end">
                    <ArrowUpRight className="w-4 h-4 text-[#FF8A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
