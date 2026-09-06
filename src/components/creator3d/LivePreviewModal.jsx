import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Smartphone, Monitor, ExternalLink, ArrowUpRight } from 'lucide-react';

export function LivePreviewModal({ project, isOpen, onClose }) {
  const [deviceView, setDeviceView] = useState('desktop');

  if (!isOpen || !project) return null;

  const projectUrl = project.url || 'https://doublelayerphotography.com/';
  const projectTitle = project.title || project.name || 'Custom Website Showcase';
  const categoryLabel = project.category || 'Website Showcase';
  const previewMedia = project.src || project.col2Img || project.col1Img1;
  const projectDesc = project.description || 'High-performance responsive website created with clean typography, fast loading times, and custom digital experience.';

  const whatsappMsg = encodeURIComponent(
    `Hi Ebenora Creations! I saw the showcase for "${projectTitle}" (${projectUrl}) on your portfolio, and I want a custom website built like this for my business!`
  );
  const whatsappUrl = `https://wa.me/918304085739?text=${whatsappMsg}`;

  const handleVisitSite = (e) => {
    e.preventDefault();
    // Opens target site in a new tab so user's main tab stays safely on Ebenora site
    window.open(projectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl h-[92vh] bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-3xl overflow-hidden flex flex-col shadow-2xl text-[#D7E2EA]"
        >
          {/* Header Toolbar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-neutral-900 border-b border-neutral-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <button
                onClick={handleVisitSite}
                className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-neutral-800 text-xs font-mono text-[#BBCCD7] hover:text-white transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#BBCCD7]" />
                <span className="truncate max-w-xs">{projectUrl}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#BBCCD7]" />
              </button>
            </div>

            {/* Device Toggles & Visit Site Button */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-neutral-800">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 font-medium transition-all ${
                    deviceView === 'desktop' ? 'bg-[#BBCCD7] text-black font-bold' : 'text-[#D7E2EA]/70 hover:text-white'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 font-medium transition-all ${
                    deviceView === 'mobile' ? 'bg-[#BBCCD7] text-black font-bold' : 'text-[#D7E2EA]/70 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span className="hidden sm:inline">Mobile (375px)</span>
                </button>
              </div>

              <button
                onClick={handleVisitSite}
                className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#BBCCD7] text-black hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>Visit Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-neutral-800 text-white/70 hover:text-white transition-colors cursor-pointer ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body / Scrollable Full View Container */}
          <div className="flex-1 overflow-y-auto bg-neutral-950 flex flex-col items-center p-3 sm:p-6">
            <div
              className={`transition-all duration-300 ${
                deviceView === 'mobile'
                  ? 'w-[375px] min-h-full bg-[#0C0C0C] rounded-3xl border border-neutral-800 shadow-2xl p-5 flex flex-col justify-between'
                  : 'w-full min-h-full bg-[#0C0C0C] rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between'
              }`}
            >
              {/* Header Info */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-800 pb-4 gap-3">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BBCCD7]">
                      [{categoryLabel}]
                    </span>
                    <h2 className="hero-heading font-black text-2xl sm:text-3xl uppercase tracking-tight mt-1">
                      {projectTitle}
                    </h2>
                  </div>

                  <button
                    onClick={handleVisitSite}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#BBCCD7]/10 border border-[#BBCCD7]/40 text-[#BBCCD7] hover:bg-[#BBCCD7] hover:text-black transition-all cursor-pointer"
                  >
                    <span>Open Live Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Uncropped Full View Showcase Container */}
                <div className="w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl relative">
                  <img
                    src={previewMedia}
                    alt={projectTitle}
                    className="w-full h-auto max-h-[55vh] object-cover rounded-2xl"
                  />
                  <div className="p-6 bg-neutral-900/90 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/90 font-light leading-relaxed max-w-xl">
                      {projectDesc}
                    </p>
                    <button
                      onClick={handleVisitSite}
                      className="px-6 py-3 rounded-full text-xs font-bold bg-[#BBCCD7] text-black hover:bg-white transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                    >
                      Visit {projectTitle} <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Additional Images Grid */}
                {project.col1Img1 && project.col1Img2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-video">
                      <img
                        src={project.col1Img1}
                        alt="Sub preview 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-video">
                      <img
                        src={project.col1Img2}
                        alt="Sub preview 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Scrolled Call To Action Banner */}
              <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col items-center text-center gap-4 bg-gradient-to-b from-transparent to-[#18011F]/50 p-6 rounded-2xl">
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                  [ Get Your Custom Website ]
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#D7E2EA]">
                  Contact Ebenora Creations for a Website Like This!
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-md font-light">
                  We design and build clean, modern, high-performance websites and digital experiences tailored to your business.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-center"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                      outline: '2px solid white',
                      outlineOffset: '-3px'
                    }}
                  >
                    Contact Ebenora Creations →
                  </a>
                  <button
                    onClick={handleVisitSite}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/40 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
                  >
                    Visit Live Site <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D7E2EA]/70 shrink-0">
            <span>⚡ Viewing Showcase — Ebenora Creations</span>
            <button
              onClick={handleVisitSite}
              className="text-[#BBCCD7] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              Visit {projectTitle} <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default LivePreviewModal;
