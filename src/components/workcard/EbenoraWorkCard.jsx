import React from 'react';
import { WORK_CATEGORIES } from '../../utils/workDatabase';
import StudioQRCode from './StudioQRCode';
import { CheckCircle2, ShieldCheck, Sparkles, Calendar, Layers, DollarSign } from 'lucide-react';

export default function EbenoraWorkCard({ work, orientation = 'landscape' }) {
  if (!work) return null;

  const categoryObj = WORK_CATEGORIES.find((c) => c.key === work.category) || WORK_CATEGORIES[0];
  const isLandscape = orientation === 'landscape';

  return (
    <div className="w-full flex justify-center print:py-0 print:m-0 print:w-full print:block">
      {/* Printable Card Container */}
      <div
        id="ebenora-print-card"
        className={`relative bg-[#080808] text-[#E5E7EB] border border-[#D9B15F]/60 rounded-2xl shadow-2xl overflow-hidden print:border-none print:shadow-none print:rounded-none print:min-h-0 print:h-auto print:max-w-full print:m-0 print:p-6 transition-all duration-300 font-['Kanit',sans-serif] ${
          isLandscape
            ? 'w-full max-w-[950px] aspect-[16/10] p-8 sm:p-10 flex flex-col justify-between'
            : 'w-full max-w-[680px] p-8 sm:p-10 flex flex-col justify-between space-y-6'
        }`}
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(217, 177, 95, 0.12)',
        }}
      >
        {/* Background Luxury Guilloche Watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center overflow-hidden">
          <img
            src="/images/logo.png"
            alt="Ebenora Watermark"
            className="w-[120%] h-[120%] object-contain select-none"
          />
        </div>

        {/* Ambient Gold Radial Glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#D9B15F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#C9973E]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Corner Geometric Accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D9B15F]/70 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D9B15F]/70 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D9B15F]/70 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D9B15F]/70 pointer-events-none" />

        {/* ================= HEADER SECTION ================= */}
        <div className="relative z-10 flex items-start justify-between border-b border-[#D9B15F]/30 pb-5">
          {/* Logo & Studio Identity */}
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-2 border border-[#D9B15F]/50 flex items-center justify-center shadow-lg">
              <img
                src="/images/logo.png"
                alt="Ebenora Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(217,177,95,0.4)]"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-widest text-[#F5F2EA] uppercase font-['Kanit']">
                  EBENORA <span className="text-[#D9B15F]">CREATIONS</span>
                </h1>
                <Sparkles className="w-4 h-4 text-[#D9B15F]" />
              </div>
              <p className="text-[11px] sm:text-xs text-[#A4A4A4] tracking-widest uppercase font-medium">
                DESIGN. DEVELOP. INSPIRE. &mdash; YOU THINK. WE CREATE.
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[10px] text-[#D9B15F] uppercase tracking-wider font-semibold">
                  Official Work Delivery Certificate &amp; Project Slip
                </span>
              </div>
            </div>
          </div>

          {/* Work ID & Category Badges */}
          <div className="text-right flex flex-col items-end space-y-1.5">
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#D9B15F]/15 border border-[#D9B15F]/70 text-[#F1D38A] font-mono font-bold text-sm tracking-wider shadow-sm">
              <Layers className="w-3.5 h-3.5 mr-1.5 text-[#D9B15F]" />
              {work.id || 'EC-GD-001'}
            </div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide uppercase bg-[#1A1A1A] border border-[#333333] text-[#D7E2EA]">
              <span
                className="w-2 h-2 rounded-full mr-1.5"
                style={{ backgroundColor: categoryObj.color }}
              />
              {categoryObj.label}
            </div>
          </div>
        </div>

        {/* ================= BODY CONTENT ================= */}
        <div className={`relative z-10 grid gap-6 my-auto ${isLandscape ? 'grid-cols-12' : 'grid-cols-1'}`}>
          {/* Left Column (Metadata, Deliverables, Specs) */}
          <div className={isLandscape ? 'col-span-7 flex flex-col justify-between space-y-4' : 'space-y-4'}>
            {/* Project Title & Client Details */}
            <div>
              <div className="flex items-center space-x-2 text-xs text-[#D9B15F] font-semibold uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Issued: {work.dateCreated || new Date().toISOString().split('T')[0]}</span>
                {work.deliveryDate && (
                  <>
                    <span className="text-zinc-600">&bull;</span>
                    <span className="text-zinc-400">Target Delivery: {work.deliveryDate}</span>
                  </>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-tight">
                {work.title || 'Untitled Studio Project'}
              </h2>
              <div className="mt-1 flex items-center space-x-2 text-xs text-[#A4A4A4]">
                <span>Prepared For:</span>
                <span className="text-[#F5F2EA] font-semibold">
                  {work.clientName || 'Valued Client'}
                </span>
                {work.clientCompany && (
                  <>
                    <span className="text-zinc-600">&bull;</span>
                    <span className="text-[#D9B15F]">{work.clientCompany}</span>
                  </>
                )}
              </div>
            </div>

            {/* Scope of Deliverables */}
            <div className="bg-[#101010]/90 rounded-xl p-3.5 border border-[#222222]">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#D9B15F] mb-2 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Deliverables &amp; Scope of Work</span>
              </div>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#D7E2EA]">
                {work.deliverables && work.deliverables.length > 0 ? (
                  work.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#D9B15F] mt-0.5">&bull;</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-zinc-500 italic">No deliverables itemized.</li>
                )}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#121212] p-2 rounded-lg border border-[#222222]">
                <div className="text-[9px] uppercase tracking-wider text-zinc-400">Resolution</div>
                <div className="text-[11px] font-medium text-white truncate">
                  {work.specs?.resolution || 'Retina / 4K'}
                </div>
              </div>
              <div className="bg-[#121212] p-2 rounded-lg border border-[#222222]">
                <div className="text-[9px] uppercase tracking-wider text-zinc-400">Format</div>
                <div className="text-[11px] font-medium text-white truncate">
                  {work.specs?.format || 'Master Deliverables'}
                </div>
              </div>
              <div className="bg-[#121212] p-2 rounded-lg border border-[#222222]">
                <div className="text-[9px] uppercase tracking-wider text-zinc-400">Turnaround</div>
                <div className="text-[11px] font-medium text-white truncate">
                  {work.specs?.turnaround || 'Standard Delivery'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Financials, QR Verification, Terms) */}
          <div className={isLandscape ? 'col-span-5 flex flex-col justify-between space-y-4' : 'space-y-4'}>
            {/* Financial Summary Card */}
            <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] p-4 rounded-xl border border-[#D9B15F]/40 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D9B15F] flex items-center space-x-1">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Investment Summary</span>
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    work.financials?.paymentStatus === 'Paid'
                      ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-300'
                      : work.financials?.paymentStatus === 'Advance Received'
                      ? 'bg-amber-950/80 border border-amber-500/60 text-amber-300'
                      : 'bg-zinc-800 border border-zinc-600 text-zinc-300'
                  }`}
                >
                  {work.financials?.paymentStatus || 'Paid'}
                </span>
              </div>

              <div className="flex items-baseline justify-between py-1 border-b border-[#262626]">
                <span className="text-xs text-zinc-400">Total Agreed:</span>
                <span className="text-lg font-bold text-white font-mono">
                  {work.financials?.currency || '₹'} {work.financials?.totalAmount || '0'}
                </span>
              </div>

              {(work.financials?.advancePaid || work.financials?.balanceDue) && (
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                  <div>
                    <span className="text-zinc-500">Advance: </span>
                    <span className="text-zinc-300 font-mono">
                      {work.financials?.currency || '₹'} {work.financials?.advancePaid || '0'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-500">Balance: </span>
                    <span className="text-[#D9B15F] font-mono font-bold">
                      {work.financials?.currency || '₹'} {work.financials?.balanceDue || '0'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Notes / Studio Guarantee */}
            <div className="bg-[#0D0D0D] p-3 rounded-xl border border-[#222222] text-[11px] text-[#A4A4A4] leading-relaxed">
              <p className="line-clamp-3">
                {work.notes ||
                  'Certified studio deliverable produced by Ebenora Creations. Crafted with bespoke art direction, original assets, and international production standards.'}
              </p>
            </div>

            {/* QR Code Verification & Studio Stamp */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#111111] border border-[#262626]">
              <div className="flex items-center space-x-3">
                <StudioQRCode value={work.qrPayload || `https://ebenoracreations.com/?work=${work.id}`} size={64} />
                <div>
                  <div className="text-[11px] font-semibold text-white flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9B15F]" />
                    <span>Scan to Verify Work</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    Authentic studio deliverable credential.
                  </p>
                  <p className="text-[9px] text-[#D9B15F] font-mono mt-0.5">
                    ebenoracreations.com
                  </p>
                </div>
              </div>

              {/* Digital Seal */}
              <div className="hidden sm:flex flex-col items-center justify-center p-2 rounded-full border border-[#D9B15F]/40 bg-[#161616] w-14 h-14 text-center">
                <span className="text-[8px] font-bold text-[#D9B15F] tracking-tighter uppercase leading-none">
                  EBENORA
                </span>
                <span className="text-[7px] text-zinc-400 uppercase tracking-tighter">
                  VERIFIED
                </span>
                <span className="text-[7px] text-[#D9B15F] font-bold">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER SECTION ================= */}
        <div className="relative z-10 pt-4 border-t border-[#D9B15F]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-2">
          <div className="flex items-center space-x-4">
            <span>WhatsApp: <strong className="text-white">+91 83040 85739</strong></span>
            <span className="hidden sm:inline text-zinc-700">&bull;</span>
            <span className="hidden sm:inline">ebenoracreations@gmail.com</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="italic text-zinc-500 font-serif">You Think. We Create.</span>
            <div className="w-20 border-b border-[#D9B15F]/60" />
            <span className="text-[10px] text-[#D9B15F] uppercase font-bold tracking-wider">
              Studio Sign-off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
