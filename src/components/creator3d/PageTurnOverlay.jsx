import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageTurnOverlay({ isFlipping }) {
  return (
    <AnimatePresence>
      {isFlipping && (
        <div className="fixed inset-0 z-50 pointer-events-none flex justify-end" style={{ perspective: '1500px' }}>
          {/* Page Turn Curl Sheet */}
          <motion.div
            key="page-sheet"
            initial={{ rotateY: -90, x: '-100%', opacity: 0.2 }}
            animate={{ rotateY: 0, x: '0%', opacity: 1 }}
            exit={{ rotateY: 90, x: '100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            className="w-full h-full bg-gradient-to-r from-[#0C0C0C] via-[#18011F] to-[#7621B0] shadow-[0_0_80px_rgba(182,0,168,0.5)] border-r-4 border-[#B600A8]/60 flex items-center justify-center overflow-hidden"
            style={{ transformOrigin: 'left center' }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="hero-heading font-black text-3xl md:text-5xl uppercase tracking-widest animate-pulse">
                Ebenora
              </span>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#BBCCD7] to-transparent" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default PageTurnOverlay;
