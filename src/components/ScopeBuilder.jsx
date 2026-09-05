import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export default function ScopeBuilder({ onOpenQuote }) {
  const [selectedServices, setSelectedServices] = useState(['web', 'graphics']);
  const [timeline, setTimeline] = useState('7-days');
  const [needsMonthlySupport, setNeedsMonthlySupport] = useState(true);

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getServicesListText = () => {
    const map = {
      web: 'Custom Web Development',
      graphics: 'Graphic Design & Branding',
      video: 'Professional Video Editing',
      motion: 'Motion Graphics & Animation'
    };
    return selectedServices.map(s => map[s]).join(', ');
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi AuraCraft Team! I built my project scope on your website:
• Services Needed: ${getServicesListText()}
• Timeline: ${timeline === 'express' ? 'Express (3-5 Days)' : timeline === '7-days' ? 'Standard (7 Days)' : '14+ Days'}
• Monthly Creative Retainer Support: ${needsMonthlySupport ? 'Yes, interested in monthly support' : 'Project-based'}

Can we discuss starting my custom project roadmap?`;
    return `https://wa.me/18005552872?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-20 bg-[#0A0A0C] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-pill inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#00F0FF]" />
            <span>Custom Project Scope Builder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Build Your Creative <span className="text-[#FF6B00]">Project Roadmap.</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-2 font-normal">
            Select the services your business requires. We will craft a tailored execution roadmap for your approval.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column */}
          <div className="lg:col-span-7 studio-card p-6 sm:p-8 bg-[#121215] flex flex-col justify-between border border-white/10">
            <div>
              
              {/* Step 1: Select Services */}
              <div className="mb-6">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  1. Choose Creative Services Needed
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'web', label: 'Web Development', desc: 'Custom Coded & Mobile' },
                    { id: 'graphics', label: 'Graphic Design', desc: 'Logo & Brand Identity' },
                    { id: 'video', label: 'Video Editing', desc: 'Promos & Reels' },
                    { id: 'motion', label: 'Motion Graphics', desc: 'Animated Intros & FX' },
                  ].map((srv) => {
                    const active = selectedServices.includes(srv.id);
                    return (
                      <div
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          active 
                            ? 'bg-[#FF6B00]/15 border-[#FF6B00] text-white shadow-lg' 
                            : 'bg-[#181820] border-white/10 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">{srv.label}</span>
                          <CheckCircle2 className={`w-4 h-4 ${active ? 'text-[#FF8533]' : 'text-zinc-600'}`} />
                        </div>
                        <span className="block text-[11px] text-zinc-400 mt-0.5">{srv.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Timeline */}
              <div className="mb-6">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  2. Select Target Launch Timeline
                </label>
                
                <div className="grid grid-cols-3 gap-3 font-heading font-bold text-xs">
                  <button
                    onClick={() => setTimeline('express')}
                    className={`p-3 rounded-xl border transition-all ${
                      timeline === 'express' ? 'bg-cyan-500/20 border-cyan-400 text-white' : 'bg-[#181820] border-white/10 text-zinc-400'
                    }`}
                  >
                    Express (3-5 Days)
                  </button>
                  <button
                    onClick={() => setTimeline('7-days')}
                    className={`p-3 rounded-xl border transition-all ${
                      timeline === '7-days' ? 'bg-cyan-500/20 border-cyan-400 text-white' : 'bg-[#181820] border-white/10 text-zinc-400'
                    }`}
                  >
                    Standard (7 Days)
                  </button>
                  <button
                    onClick={() => setTimeline('14-days')}
                    className={`p-3 rounded-xl border transition-all ${
                      timeline === '14-days' ? 'bg-cyan-500/20 border-cyan-400 text-white' : 'bg-[#181820] border-white/10 text-zinc-400'
                    }`}
                  >
                    Flexible (14+ Days)
                  </button>
                </div>
              </div>

              {/* Step 3: Monthly Support */}
              <div 
                onClick={() => setNeedsMonthlySupport(!needsMonthlySupport)}
                className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                  needsMonthlySupport ? 'bg-emerald-500/15 border-emerald-500 text-white' : 'bg-[#181820] border-white/10 text-zinc-400'
                }`}
              >
                <div>
                  <span className="block text-sm font-bold text-white">Include Ongoing Monthly Support?</span>
                  <span className="text-xs text-zinc-400">Dedicated creative updates, video edits & SEO maintenance every month</span>
                </div>
                <CheckCircle2 className={`w-5 h-5 ${needsMonthlySupport ? 'text-[#34D399]' : 'text-zinc-600'}`} />
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 studio-card-orange p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="badge-pill-orange mb-4">
                📋 Scope Summary
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-4">Your Custom Scope</h3>

              <div className="bg-[#08080A] border border-white/10 p-4 rounded-xl space-y-3 mb-6 font-mono text-xs text-zinc-200">
                <div>
                  <span className="text-zinc-400 block">Selected Services:</span>
                  <span className="font-bold text-white">{getServicesListText()}</span>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <span className="text-zinc-400 block">Timeline:</span>
                  <span className="font-bold text-[#FF8533] uppercase">{timeline}</span>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <span className="text-zinc-400 block">Monthly Creative Retainer:</span>
                  <span className="font-bold text-[#34D399]">{needsMonthlySupport ? 'Yes (Continuous Support)' : 'Project Only'}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 font-medium mb-6">
                ⚡ We review your scope and provide a comprehensive execution roadmap with zero obligation.
              </p>
            </div>

            <div className="space-y-3">
              <a 
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center py-3.5 text-xs font-bold rounded-xl"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Scope to WhatsApp</span>
              </a>

              <button 
                onClick={onOpenQuote}
                className="btn-secondary w-full justify-center py-3 text-xs font-bold rounded-xl"
              >
                Submit Project Brief
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
