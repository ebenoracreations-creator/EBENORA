import React, { useState } from 'react';
import { Eye, ArrowRight, Award } from 'lucide-react';
import LivePreviewModal from './LivePreviewModal';

export default function PortfolioShowcase({ onOpenQuote }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const topProjects = [
    {
      id: 'ecommerce',
      categoryLabel: 'E-Commerce & WhatsApp Engine',
      title: 'Velocity Commerce & WhatsApp Direct Store',
      subtitle: 'Top-Ranked Shopping Engine with Zero Platform Fees',
      description: 'Built for high client interaction. Customers browse items, select variations, and send a formatted order directly to WhatsApp. Bypasses expensive ecommerce monthly fees while maximizing order conversions.',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      result: '0% Monthly Platform Fees & Instant Leads',
      tags: ['WhatsApp Direct Order', 'Sub-Second Speed', 'Google SEO #1', 'Mobile Coded']
    },
    {
      id: 'invitation',
      categoryLabel: 'Digital Event & RSVP Hub',
      title: 'Royal Celebration Digital RSVP Website',
      subtitle: 'Interactive RSVP, Venue Map & Live Guest Tracking',
      description: 'Replaces traditional paper invitations with a luxury digital hub. Guests confirm RSVPs online in 1 click, check event schedules, and get turn-by-turn Google Maps routing.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      result: '180+ Verified Digital RSVPs',
      tags: ['Digital RSVP System', 'Google Maps Routing', 'Countdown Timer', 'Photo Gallery']
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-pill-orange inline-flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-[#FF6B00]" />
            <span>Our Best Works Only</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We Only Present Our <span className="text-[#FF6B00]">Best Work.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Projects that achieved <strong>top search rankings</strong>, <strong>high client engagement</strong>, and <strong>real business results</strong>.
          </p>

          {/* Collaborative Growth Callout Box (Black Theme) */}
          <div className="studio-card p-6 bg-[#0D0D10] border border-white/15 rounded-2xl mt-6 text-left flex items-start gap-4">
            <div className="w-10 h-10 bg-[#FF6B00]/20 text-[#FF8533] border border-[#FF6B00]/30 rounded-xl flex items-center justify-center shrink-0 font-bold text-lg">
              🤝
            </div>
            <div>
              <h4 className="text-base font-bold text-white">A Two-Way Partnership to Reach The Absolute Top</h4>
              <p className="text-xs text-zinc-400 font-normal leading-relaxed mt-1">
                Getting your business to the top point requires a team effort. We deliver world-class web development, video editing, graphic design, and SEO—and with your active collaboration, your business scales to lead your market.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Flagship Work Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {topProjects.map((project) => (
            <div 
              key={project.id}
              className="studio-card bg-[#0D0D10] rounded-3xl overflow-hidden flex flex-col justify-between border border-white/15"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#000000]">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#000000]/90 backdrop-blur-md rounded-full border border-white/20 text-xs font-bold text-white">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#000000]/90 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#34D399] flex items-center gap-1">
                    🎯 Result: {project.result}
                  </span>
                  
                  <button 
                    onClick={() => setActiveModalProject(project)}
                    className="px-3 py-1.5 bg-[#FF6B00] text-white font-extrabold text-xs rounded-xl hover:bg-white hover:text-black transition-colors"
                  >
                    Test-Drive Demo
                  </button>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs font-mono font-bold text-[#FF8533] mb-3">{project.subtitle}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-zinc-400 bg-[#000000] px-2.5 py-1 rounded-lg border border-white/10 font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <button 
                    onClick={() => setActiveModalProject(project)}
                    className="btn-secondary flex-1 py-3 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-[#00F0FF]" /> Launch Demo Preview
                  </button>

                  <button 
                    onClick={onOpenQuote}
                    className="btn-primary py-3 px-5 text-xs font-bold rounded-xl flex items-center gap-1.5"
                  >
                    <span>Build This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Render Live Preview Modal */}
      {activeModalProject && (
        <LivePreviewModal 
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onOpenQuote={onOpenQuote}
        />
      )}

    </section>
  );
}
