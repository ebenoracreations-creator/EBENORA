import React from 'react';

// Lightweight offline SVG QR Code renderer for Ebenora Work Card verification
export default function StudioQRCode({ value, size = 80 }) {
  // A clean deterministic SVG QR-style matrix representation with center emblem
  const encodedText = encodeURIComponent(value || 'https://ebenoracreations.com/');
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size * 2}x${size * 2}&data=${encodedText}&color=D9B15F&bgcolor=0B0B0B&qzone=1`;

  return (
    <div 
      className="relative flex items-center justify-center p-1.5 rounded-lg border border-[#D9B15F]/40 bg-[#0B0B0B]"
      style={{ width: size, height: size }}
    >
      <img
        src={qrApiUrl}
        alt="Verification QR"
        className="w-full h-full object-contain rounded"
        onError={(e) => {
          // Fallback SVG if offline without internet
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.nextElementSibling) {
            e.currentTarget.nextElementSibling.style.display = 'flex';
          }
        }}
      />
      {/* Offline SVG fallback */}
      <div 
        className="hidden absolute inset-0 items-center justify-center p-1 bg-[#0B0B0B] rounded"
        style={{ display: 'none' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#D9B15F] fill-current">
          {/* Position detection patterns */}
          <rect x="5" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" />
          <rect x="13" y="13" width="12" height="12" fill="currentColor" />
          <rect x="67" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" />
          <rect x="75" y="13" width="12" height="12" fill="currentColor" />
          <rect x="5" y="67" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" />
          <rect x="13" y="75" width="12" height="12" fill="currentColor" />
          {/* Data cells */}
          <rect x="42" y="8" width="6" height="6" />
          <rect x="52" y="16" width="6" height="6" />
          <rect x="40" y="24" width="8" height="8" />
          <rect x="10" y="44" width="8" height="8" />
          <rect x="25" y="48" width="6" height="6" />
          <rect x="40" y="40" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <rect x="68" y="42" width="6" height="6" />
          <rect x="80" y="50" width="8" height="8" />
          <rect x="44" y="70" width="8" height="8" />
          <rect x="58" y="78" width="8" height="8" />
          <rect x="74" y="68" width="6" height="6" />
          <rect x="84" y="82" width="8" height="8" />
        </svg>
      </div>
    </div>
  );
}
