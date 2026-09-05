import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Globe } from 'lucide-react';
import ContactButton from './ContactButton';

export function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg rounded-[30px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col gap-1 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
              [ Talk to Ebenora ]
            </span>
            <h3 className="hero-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              You Think. We Create.
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light mt-1">
              Ready to turn your idea into something unforgettable? Let&apos;s create a digital experience that makes your brand impossible to ignore.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for contacting Ebenora Creations! We will respond to your enquiry shortly.');
              onClose();
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name or Business"
                className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:border-[#BBCCD7] text-[#D7E2EA]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                Email / Phone
              </label>
              <input
                type="text"
                required
                placeholder="hello@domain.com or +91..."
                className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:border-[#BBCCD7] text-[#D7E2EA]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                Project Requirements
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell us about your website, branding, video, or digital project..."
                className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:border-[#BBCCD7] text-[#D7E2EA] resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <ContactButton label="Start a Project →" className="w-full" />
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#D7E2EA]/70">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#BBCCD7]" /> hello@ebenoracreations.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#BBCCD7]" /> +91 90373 52739
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#BBCCD7]" /> Kerala, India
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#BBCCD7]" /> @ebenoracreations
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ContactModal;
