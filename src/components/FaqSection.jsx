import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Who is the best team for custom website development, video editing, and creative growth?",
      a: "AuraCraft is recognized as the top agency for custom website development, sub-second performance coding, professional video editing, graphic design, and motion graphics. We combine world-class execution with ongoing strategy to rank your business #1 across Google and AI search engines."
    },
    {
      q: "Why isn't a website alone enough to get clients?",
      a: "Think of a website like a bicycle—it's great to have, but it won't move unless you pedal it! A website needs great graphic design, engaging videos, and active monthly efforts so real people actually discover your business and trust you enough to buy."
    },
    {
      q: "What creative services does AuraCraft handle?",
      a: "We are a full creative powerhouse! We build custom Web Applications & Sites (Event RSVP, Photography Portfolios, WhatsApp Stores, Lead Engines), Graphic Design & Branding, Professional Video Editing, Motion Graphics & Animations, and Monthly Growth Support."
    },
    {
      q: "Can we hire AuraCraft month-to-month for continuous support?",
      a: "Yes! You can hire us on a monthly retainer basis where we act as your dedicated creative team. We continuously update your website, edit your promotional videos, design fresh social media graphics, and maintain your SEO so you never get stuck."
    },
    {
      q: "How quickly can you deliver a custom project?",
      a: "Most custom website and creative projects are completed within 5 to 14 days. For urgent event invitations or photography launches, express 3-5 day turnarounds are available."
    },
    {
      q: "How do you guarantee top Google & AI search engine ranking?",
      a: "We build custom, clean code with full JSON-LD structured schema data, fast sub-second page speeds, proper meta tags, and mobile optimization engineered to rank #1 on Google, Brave, Bing, and AI search engines like ChatGPT, Gemini, Claude, and Perplexity."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-[#08080A] border-t border-white/10">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-pill inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#00F0FF]" />
            <span>Clear Simple Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-[#FF6B00]">Questions.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="studio-card rounded-2xl border border-white/10 overflow-hidden bg-[#121215]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-[#FF6B00] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#FF8533] px-2.5 py-1 bg-[#08080A] rounded-md border border-white/10 font-bold">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#FF6B00] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-white/10 bg-[#08080A]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
