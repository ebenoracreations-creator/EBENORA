import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Websites & Digital Experiences',
    budget: '₹6,000 – ₹8,000',
    timeline: 'Immediate',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message text
    const text = `Hi Ebenora Creations Team!
I would like to start a project inquiry:
- Name: ${formData.name}
- Company: ${formData.company || 'N/A'}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service Needed: ${formData.service}
- Budget Range: ${formData.budget}
- Timeline: ${formData.timeline}
- Details: ${formData.details}`;

    const whatsappUrl = `https://wa.me/919037352739?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      
      {/* Hero */}
      <section className="py-16 border-b border-[#292929] bg-[#050505]">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <div className="badge-gold">
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-extrabold leading-tight">
            Have an Idea? <br />
            <span className="text-gold-gradient italic font-normal">Let's Make It Real.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
            Tell us about your brand, digital vision, or search growth goals. We will build a tailored roadmap around your business.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 font-mono text-sm font-bold text-[#F1D38A]">
            <a href="tel:+919037352739" className="flex items-center gap-2 hover:underline">
              <Phone className="w-4 h-4" />
              <span>+91 903 735 2739</span>
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Form & Direct Contact Grid matching Requirement #22 */}
      <section className="py-24 bg-[#0B0B0B]">
        <div className="container mx-auto max-w-4xl">
          
          <div className="ebenora-card p-8 sm:p-12 bg-[#050505] border-[#D9B15F]/30">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#D9B15F] mx-auto" />
                <h2 className="font-serif text-3xl text-[#F5F2EA] font-bold">Inquiry Transmitted</h2>
                <p className="text-sm text-[#A4A4A4]">Thank you! We have opened WhatsApp with your project details. Our team will respond promptly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-gold-outline text-xs py-3 px-6 mt-4"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#292929] pb-4 mb-6">
                  <h2 className="text-2xl font-bold font-serif text-[#F5F2EA]">Project Inquiry Form</h2>
                  <span className="text-xs font-mono text-[#A4A4A4]">Fill out the fields below for an immediate proposal & consultation.</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">YOUR NAME *</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Alexander Vance"
                      className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">COMPANY / BRAND</label>
                    <input 
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="e.g. Vance Studio"
                      className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">EMAIL ADDRESS *</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="alexander@vance.com"
                      className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">PHONE NUMBER *</label>
                    <input 
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 900 000 0000"
                      className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">SERVICE NEEDED</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                    >
                      <option>Branding & Graphic Design</option>
                      <option>Websites & Digital Experiences</option>
                      <option>SEO & Digital Growth</option>
                      <option>Social Media & Creative Content</option>
                      <option>Custom Creative Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">BUDGET RANGE</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                    >
                      <option>₹6,000 – ₹8,000</option>
                      <option>₹11,000 – ₹13,000 (With Photo Portal)</option>
                      <option>₹20,000 (Premium Support)</option>
                      <option>Custom Enterprise Scope</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">TIMELINE</label>
                    <select 
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                    >
                      <option>Immediate (1-2 Weeks)</option>
                      <option>Standard (2-4 Weeks)</option>
                      <option>Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#D9B15F] font-bold mb-2">PROJECT DETAILS & GOALS</label>
                  <textarea 
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    placeholder="Briefly describe your vision, website features, or SEO goals..."
                    className="w-full p-3.5 bg-[#0B0B0B] border border-[#292929] rounded-xl text-xs font-sans text-[#F5F2EA] focus:outline-none focus:border-[#D9B15F]"
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-gold-primary w-full py-4 text-xs font-bold flex items-center justify-center gap-2 rounded-xl"
                >
                  <span>START THE CONVERSATION</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
