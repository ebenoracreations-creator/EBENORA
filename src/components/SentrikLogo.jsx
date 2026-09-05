import React, { useState, useEffect } from 'react';

export default function SentrikLogo({ className = "h-8" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {!imgError ? (
        <img 
          src="/images/logo.svg" 
          alt="SENTRIK Logo" 
          className="h-full w-auto object-contain"
          onError={() => {
            // Try PNG if SVG fails, otherwise fallback to SVG vector
            setImgError(true);
          }}
        />
      ) : (
        /* Vector SVG Logo matching Image 2 */
        <svg 
          viewBox="0 0 460 70" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          aria-label="SENTRIK Logo"
        >
          <defs>
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A3FF" />
              <stop offset="100%" stopColor="#0066FF" />
            </linearGradient>
          </defs>

          {/* Letter S */}
          <path 
            d="M65 14 C45 4, 18 10, 10 24 C2 38, 26 42, 45 46 C62 50, 62 62, 40 66 C20 70, 5 60, 0 52" 
            stroke="url(#metalGrad)" 
            strokeWidth="11" 
            strokeLinecap="round"
            fill="none"
          />

          {/* Letter E */}
          <path d="M78 12 H118 M78 12 V64 M78 38 H110 M78 64 H118" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="square" />

          {/* Letter N */}
          <path d="M135 64 V12 L178 64 V12" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="square" />

          {/* Letter T */}
          <path d="M190 12 H240 M215 12 V64" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="square" />

          {/* Letter R */}
          <path d="M255 12 V64 M255 12 H285 C298 12 300 28 285 36 H255 M280 36 L305 64" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="square" />

          {/* Letter I + ELECTRIC BLUE TRIANGLE ACCENT */}
          <path d="M325 24 V64" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="square" />
          <polygon points="325,10 338,10 338,23" fill="url(#blueAccent)" />

          {/* Letter K */}
          <path d="M355 12 V64 M395 12 L358 38 L400 64" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="square" />
        </svg>
      )}
    </div>
  );
}
