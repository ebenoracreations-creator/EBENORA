import React, { useState } from 'react';

export default function EbenoraLogo({ className = "h-10 sm:h-12 lg:h-14", showTagline = true }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="inline-flex items-center gap-3 select-none group cursor-pointer">
      {!imgError ? (
        <img 
          src="/images/logo.png" 
          alt="Ebenora Creations Logo" 
          className={`${className} w-auto object-contain max-h-16 transition-transform duration-300 group-hover:scale-105`}
          onError={() => setImgError(true)}
        />
      ) : (
        /* High-Luxury SVG Emblem fallback */
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F1D38A] via-[#D9B15F] to-[#C9973E] p-[1.5px] shadow-[0_0_20px_rgba(217,177,95,0.3)]">
            <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center font-serif font-black text-2xl text-[#F1D38A]">
              E
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold tracking-wider text-xl sm:text-2xl text-[#F5F2EA] flex items-center gap-2 leading-none">
              EBENORA <span className="text-[#D9B15F] font-manrope font-semibold text-xs tracking-normal">CREATIONS</span>
            </span>
            {showTagline && (
              <span className="text-[9px] font-dmsans tracking-[0.25em] text-[#A4A4A4] uppercase mt-1 font-bold">
                DESIGN • DEVELOP • INSPIRE
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
