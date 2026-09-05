import React from 'react';
import { Code, Palette, Video, Film, CheckCircle2 } from 'lucide-react';

export default function ServicesPowerhouse({ onOpenQuote }) {
  const services = [
    {
      icon: Code,
      title: "1. Web Development & Coded Sites",
      badge: "Fast & Mobile Coded",
      desc: "Custom sub-second responsive websites engineered for #1 Google SEO ranking. We build Event RSVP Invitations, Photography Portfolios, WhatsApp Direct E-Commerce Shops, and Business Lead Engines.",
      items: ["Event RSVP & Map Sites", "Photography Portfolios", "WhatsApp Direct Order Shops", "Custom Business Lead Engines"]
    },
    {
      icon: Palette,
      title: "2. Graphic Design & Branding",
      badge: "High-Ticket Visuals",
      desc: "Stand out with bold, memorable visual identities. We design custom logos, brand style guidelines, social media posters, ad banners, and marketing assets.",
      items: ["Custom Logo & Emblem Design", "Brand Guidelines & Color Kits", "Social Media Posters & Banners", "Marketing & Ad Visuals"]
    },
    {
      icon: Video,
      title: "3. Professional Video Editing",
      badge: "Attention-Grabbing",
      desc: "Raw footage transformed into high-converting videos. We edit promotional reels, commercial product videos, client case studies, and social media content.",
      items: ["Instagram & TikTok Reels", "Product Commercial Edits", "Brand Story Videos", "Audio Clean-up & Color Grading"]
    },
    {
      icon: Film,
      title: "4. Motion Graphics & Animation",
      badge: "Dynamic Motion",
      desc: "Bring your brand to life with sleek animation. We create 3D animated logo intros, video transition effects, interactive micro-animations, and animated graphics.",
      items: ["Animated Logo Intros", "Dynamic Video Transitions", "UI Micro-Animations", "Motion Explainer Videos"]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill-emerald inline-flex items-center gap-2 mb-3">
            <span>⚡ Complete Creative Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything Your Business Needs to <span className="text-[#FF6B00]">Dominate Online.</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-3 font-normal">
            From coding custom websites to editing high-impact videos and designing bold graphics—AuraCraft does it all under one roof.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="studio-card p-8 bg-[#121215] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center text-[#FF6B00]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#08080A] border border-white/10 text-zinc-400 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{srv.desc}</p>

                  <div className="space-y-2.5 border-t border-white/10 pt-5 mb-6">
                    {srv.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={onOpenQuote}
                  className="btn-secondary py-3 text-xs font-bold w-full rounded-xl"
                >
                  Inquire About {srv.title.split('.')[1]}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
