import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Globe, MessageCircle, Check, Sparkles, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  { id: 'web', label: '3D Web Design & Development' },
  { id: 'branding', label: 'Luxury Brand Identity' },
  { id: 'invitation', label: 'Digital Wedding / Event Invites' },
  { id: 'brochure', label: 'Digital Lookbook & Fashion' },
  { id: 'photo', label: 'Photography & Film Showcase' },
  { id: 'seo', label: 'SEO & AI Growth Strategy' }
];

const TIMELINES = [
  'ASAP (< 1 week)',
  '1 – 2 Weeks',
  'Within 1 Month',
  'Flexible / Long Term'
];

export function ContactModal({ isOpen, onClose }) {
  const [selectedService, setSelectedService] = useState('3D Web Design & Development');
  const [selectedTimeline, setSelectedTimeline] = useState('1 – 2 Weeks');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const text = 
`✨ *New Project Inquiry — Ebenora Creations* ✨

👤 *Client / Brand:* ${name.trim()}
📞 *Phone / Contact:* ${contact.trim()}
🎯 *Service Needed:* ${selectedService}
⏱️ *Timeline:* ${selectedTimeline}
📝 *Project Scope:* ${details.trim() || 'Ready to discuss details over WhatsApp.'}

🌐 *Sent via ebenoracreations.com*`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918304085739?text=${encodedText}`;

    setIsRedirecting(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      onClose();
    }, 350);
  };

  const handleDirectChat = () => {
    const directUrl = `https://wa.me/918304085739?text=${encodeURIComponent("Hi Ebenora Creations! I would like to discuss a strategic creative project for my brand.")}`;
    window.open(directUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-xl rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-5 sm:p-8 text-[#D7E2EA] shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto"
        >
          {/* Ambient Spotlight Accents */}
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-white/60 hover:text-white hover:border-[#D7E2EA]/40 transition-colors cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-col gap-1.5 mb-5 relative z-10 pr-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest text-[#25D366] font-bold">
                WhatsApp Direct Connect • +91 83040 85739
              </span>
            </div>
            <h3 className="hero-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              You Think. We Create.
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
              Tell us what you're building. Your brief is pre-formatted and sent directly to our creator team on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4 relative z-10">
            {/* 1. Interactive Service Picker */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-2 text-[#BBCCD7]">
                1. Select Service
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((srv) => {
                  const active = selectedService === srv.label;
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.label)}
                      className={`text-left p-2.5 sm:p-3 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-between gap-1.5 cursor-pointer border ${
                        active
                          ? 'border-[#B600A8] bg-[#B600A8]/20 text-white shadow-[0_0_15px_rgba(182,0,168,0.3)]'
                          : 'border-neutral-800 bg-neutral-900/80 text-[#D7E2EA]/70 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{srv.label}</span>
                      {active && <Check className="w-3.5 h-3.5 text-[#E2ECF3] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Interactive Timeline Picker */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1.5 text-[#BBCCD7]">
                2. Target Timeline
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map((time) => {
                  const active = selectedTimeline === time;
                  return (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTimeline(time)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer border ${
                        active
                          ? 'border-white/50 bg-white/10 text-white font-semibold'
                          : 'border-neutral-800 bg-neutral-900/60 text-[#D7E2EA]/60 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Client & Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#D7E2EA]/80">
                  Your Name / Brand *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tony / DLP Studio"
                  className="w-full rounded-xl bg-neutral-900/90 border border-neutral-800 px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#BBCCD7] text-[#D7E2EA] placeholder:text-neutral-600"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#D7E2EA]/80">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. +91 83040 85739"
                  className="w-full rounded-xl bg-neutral-900/90 border border-neutral-800 px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#BBCCD7] text-[#D7E2EA] placeholder:text-neutral-600"
                />
              </div>
            </div>

            {/* 4. Project Requirements */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-[#D7E2EA]/80">
                Project Notes / Vision (Optional)
              </label>
              <textarea
                rows={2}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Key goals, reference websites, specific features or deadline..."
                className="w-full rounded-xl bg-neutral-900/90 border border-neutral-800 px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#BBCCD7] text-[#D7E2EA] placeholder:text-neutral-600 resize-none"
              />
            </div>

            {/* Submit via WhatsApp Button */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="submit"
                disabled={isRedirecting}
                className="w-full rounded-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                  outline: '2px solid white',
                  outlineOffset: '-3px'
                }}
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
                <span>
                  {isRedirecting ? 'Opening WhatsApp...' : 'Send Inquiry via WhatsApp →'}
                </span>
              </button>

              {/* Instant 1-Click WhatsApp Shortcut */}
              <button
                type="button"
                onClick={handleDirectChat}
                className="w-full text-center text-[11px] text-[#BBCCD7]/80 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 py-1"
              >
                <span>Or chat directly without filling form</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
              </button>
            </div>
          </form>

          {/* Quick Info Bar */}
          <div className="mt-5 pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#D7E2EA]/60 relative z-10">
            <a
              href="https://wa.me/918304085739"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="truncate">+91 83040 85739</span>
            </a>
            <a
              href="mailto:ebenoracreations@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#BBCCD7]" />
              <span className="truncate">ebenoracreations@gmail.com</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#BBCCD7]" />
              <span className="truncate">Kochi, Kerala</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#BBCCD7]" />
              <span className="truncate">@ebenora</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ContactModal;

