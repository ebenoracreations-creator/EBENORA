import React, { useState } from 'react';
import { Send, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function LeadEngineForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Web Development',
    timeline: 'Within 7 Days',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hi AuraCraft Team! I'm submitting a project inquiry:
• Name: ${formData.name || 'Interested Client'}
• Phone/Email: ${formData.phone || formData.email || 'Provided'}
• Primary Need: ${formData.projectType}
• Target Timeline: ${formData.timeline}
• Details: ${formData.message || 'Custom creative project'}

Can we discuss next steps?`;
    return `https://wa.me/18005552872?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0A0C] border-t border-white/10">
      <div className="container mx-auto">
        
        <div className="max-w-4xl mx-auto studio-card p-8 sm:p-12 bg-[#121215] border border-white/10 rounded-3xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="badge-pill-orange mb-3 inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                  <span>Get Started Today</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Let's Build Your <span className="text-[#FF6B00]">Creative Project.</span>
                </h2>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Fill out the brief below. We review your requirements and respond promptly with a custom strategy roadmap.
                </p>

                <div className="space-y-3 text-xs font-mono font-bold text-zinc-300 mb-6">
                  <div className="p-3 bg-[#08080A] border border-white/10 rounded-xl flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>Response Time: Under 2 Hours</span>
                  </div>

                  <div className="p-3 bg-[#08080A] border border-white/10 rounded-xl flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span>Free Strategy & Execution Plan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Brief Form */}
            <div className="lg:col-span-7 bg-[#08080A] p-6 rounded-2xl border border-white/10">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#34D399] border border-emerald-500/40 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white">Brief Received!</h3>
                  <p className="text-zinc-400 text-xs max-w-xs mx-auto">
                    Thank you, {formData.name || 'Friend'}! Our team will analyze your requirements and reach out shortly.
                  </p>
                  <a 
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp py-2.5 px-4 text-xs font-bold rounded-xl inline-flex items-center gap-2"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <h3 className="text-lg font-bold text-white mb-1">Submit Project Brief</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-zinc-400 mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins" 
                        className="w-full p-2.5 bg-[#141419] border border-white/10 rounded-xl text-xs text-white focus:border-[#FF6B00] focus:outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-zinc-400 mb-1">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000" 
                        className="w-full p-2.5 bg-[#141419] border border-white/10 rounded-xl text-xs text-white focus:border-[#FF6B00] focus:outline-none" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-zinc-400 mb-1">Primary Need</label>
                      <select 
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full p-2.5 bg-[#141419] border border-white/10 rounded-xl text-xs text-white focus:border-[#FF6B00] focus:outline-none"
                      >
                        <option value="Web Development">Web Design & Coded Site</option>
                        <option value="Graphic Design">Graphic Design & Branding</option>
                        <option value="Video Editing">Professional Video Editing</option>
                        <option value="Motion Graphics">Motion Graphics & Animations</option>
                        <option value="Monthly Creative Retainer">Monthly Creative Team Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-zinc-400 mb-1">Target Launch</label>
                      <select 
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full p-2.5 bg-[#141419] border border-white/10 rounded-xl text-xs text-white focus:border-[#FF6B00] focus:outline-none"
                      >
                        <option value="ASAP (3-5 Days)">ASAP (3-5 Days)</option>
                        <option value="Within 7 Days">Within 7 Days</option>
                        <option value="Within 14 Days">Within 14 Days</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-zinc-400 mb-1">Project Details</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business goals, ideas, or reference links..." 
                      className="w-full p-2.5 bg-[#141419] border border-white/10 rounded-xl text-xs text-white focus:border-[#FF6B00] focus:outline-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary w-full py-3.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Brief & Get Strategy Roadmap</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
