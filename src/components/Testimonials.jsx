import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Founder, Commercial Photography Studio",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "Within 2 weeks of launching our new portfolio site with AuraCraft, we booked 3 luxury commercial clients. The clean design and fast load speed made a huge difference.",
      result: "High-Ticket Client Inquiries",
      type: "Photography Portfolio"
    },
    {
      name: "Elena & David",
      role: "Wedding Event Hosts",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      quote: "Our digital invitation website was a massive hit. Guests RSVP'd directly online, checked the event schedule, and used the live map routing. Zero hassle!",
      result: "180+ Digital RSVPs",
      type: "Event RSVP Site"
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Owner, Velocity Store",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      quote: "The direct WhatsApp checkout feature is brilliant. Customers pick their items and send the formatted order directly to my WhatsApp. Simple and highly effective.",
      result: "Direct WhatsApp Orders",
      type: "WhatsApp Store"
    }
  ];

  return (
    <section className="py-20 bg-[#08080A] border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill-emerald inline-flex items-center gap-2 mb-3">
            <span>⭐ Client Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Clients Say About <span className="text-[#FF6B00]">AuraCraft.</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="studio-card p-6 bg-[#121215] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#08080A] border border-white/10 text-zinc-300 rounded-full">
                    {rev.type}
                  </span>
                  <div className="flex items-center gap-1 text-[#FF6B00] font-bold text-xs">
                    ★★★★★
                  </div>
                </div>

                <Quote className="w-6 h-6 text-[#FF6B00] opacity-60 mb-2" />

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div>
                <div className="p-2.5 bg-[#08080A] border border-white/10 rounded-xl mb-4 font-mono text-xs font-bold text-zinc-300 flex items-center justify-between">
                  <span className="text-[#34D399]">🎯 {rev.result}</span>
                  <span className="text-zinc-500">Verified</span>
                </div>

                <div className="flex items-center gap-3">
                  <img src={rev.img} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    <span className="text-xs text-zinc-400">{rev.role}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
