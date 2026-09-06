import React from 'react';
import FadeIn from './FadeIn';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Best website designing company in Kerala.",
    author: "Google Reviewer",
    role: "Verified Google Review",
    rating: 5
  },
  {
    quote: "Ebenora Creations is truly one of the best web designing and creative digital teams we've worked with. Modern, elegant, fast, and professionally developed websites with amazing attention to detail.",
    author: "Client Feedback",
    role: "Digital Brand Client",
    rating: 5
  },
  {
    quote: "Brought my creative vision to life perfectly. Clean layout, fast loading times, responsive mobile experience, and smooth communication throughout.",
    author: "Anandhu John",
    role: "Team Frame Fusion Photography",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 relative z-10 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={30} className="w-full text-center mb-12 sm:mb-16">
          <h2 className="hero-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight">
            What Clients Say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {TESTIMONIALS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} y={30}>
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between h-full gap-6 hover:border-[#BBCCD7]/40 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#BBCCD7]/30" />
                  <p className="text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA]/90 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col">
                  <span className="font-bold text-sm text-[#D7E2EA] uppercase tracking-wide">
                    {item.author}
                  </span>
                  <span className="text-xs text-[#BBCCD7]/70 font-light">
                    {item.role}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
