import React from 'react';
import { Mail, Phone, Globe, MapPin, Tag, CreditCard, Gift } from 'lucide-react';

export default function EbenoraInvoiceDocument({ invoice }) {
  if (!invoice) return null;

  const isQuote = (invoice.docType || 'INVOICE').toUpperCase() === 'QUOTATION';
  const currencySymbol = invoice.currency || '₹';

  // Format currency with comma separators
  const formatAmount = (amt) => {
    if (amt === undefined || amt === null || amt === '') return '0';
    const num = typeof amt === 'number' ? amt : parseFloat(String(amt).replace(/[^0-9.-]+/g, '')) || 0;
    return Math.abs(num).toLocaleString('en-IN');
  };

  const lineItems = invoice.lineItems || [];
  const advanceItem = invoice.advancePaidItem || {
    no: lineItems.length + 1,
    title: 'Advance Already Paid',
    subtitle: '(Received from client)',
    amount: -6000
  };

  return (
    <div className="w-full flex justify-center py-2">
      {/* A4 Portrait Luxury Invoice/Quote Sheet */}
      <div
        id="ebenora-invoice-sheet"
        className="relative bg-[#070707] text-[#E5E7EB] border border-[#222222] shadow-2xl rounded-2xl w-full max-w-[794px] min-h-[1080px] p-8 sm:p-10 flex flex-col justify-between font-['Kanit',sans-serif] print:border-none print:shadow-none print:rounded-none print:p-8"
        style={{
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.95), 0 0 35px rgba(217, 177, 95, 0.08)',
        }}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#D9B15F]/5 rounded-full blur-3xl pointer-events-none" />

        {/* ================= 1. HEADER SECTION ================= */}
        <div className="relative z-10 pb-5 border-b border-[#222222]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left: Golden Logo & Brand Tagline */}
            <div className="flex items-center space-x-3.5">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#161616] to-[#0A0A0A] p-2 border border-[#D9B15F]/50 flex items-center justify-center shadow-lg shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Ebenora Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(217,177,95,0.4)]"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F5F2EA] uppercase font-['Kanit']">
                  EBENORA <span className="text-[#D9B15F]">CREATIONS</span>
                </h1>
                <p className="text-[10px] text-[#A4A4A4] tracking-[0.22em] uppercase font-medium mt-0.5">
                  DESIGN &bull; DEVELOP &bull; INSPIRE
                </p>
                <p className="text-[9px] text-[#D9B15F] tracking-widest uppercase font-semibold mt-0.5">
                  YOU THINK. WE CREATE.
                </p>
              </div>
            </div>

            {/* Right: Contact Information Grid */}
            <div className="space-y-1.5 text-right sm:text-right text-[11px] text-zinc-300 font-sans">
              <div className="flex items-center justify-start sm:justify-end space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#D9B15F] shrink-0" />
                <span className="font-mono text-xs">{invoice.contact?.email || 'ebenoracretion@gmail.com'}</span>
              </div>
              <div className="flex items-center justify-start sm:justify-end space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#D9B15F] shrink-0" />
                <span className="font-mono text-xs">{invoice.contact?.phone || '9037352739'}</span>
              </div>
              <div className="flex items-center justify-start sm:justify-end space-x-2">
                <Globe className="w-3.5 h-3.5 text-[#D9B15F] shrink-0" />
                <span className="text-xs hover:underline cursor-pointer">{invoice.contact?.website || 'www.ebenoracreations.com'}</span>
              </div>
              <div className="flex items-center justify-start sm:justify-end space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9B15F] shrink-0" />
                <span className="text-xs">{invoice.contact?.location || 'Kerala, India'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. TITLE & META BLOCK ================= */}
        <div className="relative z-10 pt-5 pb-4 flex flex-col sm:flex-row items-start justify-between gap-4">
          {/* Left: Document Title, Spaced Subtitle & Greeting */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-['Kanit']">
              {isQuote ? 'QUOTATION' : 'INVOICE'}
            </h2>
            <div className="text-[11px] font-semibold tracking-[0.25em] text-zinc-300 uppercase mt-1">
              {invoice.subtitle || 'W E B S I T E   D E V E L O P M E N T'}
            </div>
            <div className="text-xs text-zinc-400 mt-2.5 space-y-0.5 leading-relaxed">
              <p>
                {isQuote
                  ? 'Thank you for your interest in Ebenora Creations.'
                  : 'Thank you for choosing Ebenora Creations.'}
              </p>
              <p className="text-zinc-500">
                {isQuote
                  ? `Here's your formal quotation and cost breakdown for the ${invoice.title || 'project'}.`
                  : `Here's your detailed invoice for the ${invoice.title || 'website development project'}.`}
              </p>
            </div>
          </div>

          {/* Right: Meta Details Box */}
          <div className="bg-[#0E0E0E] border border-[#222222] rounded-xl px-4 py-3 text-xs min-w-[220px] shadow-inner font-sans">
            <div className="grid grid-cols-2 gap-y-1.5 text-zinc-400">
              <span className="font-medium">{isQuote ? 'Quotation No.' : 'Invoice No.'}</span>
              <span className="text-right text-white font-mono font-semibold">
                : &nbsp;{invoice.invoiceNo || invoice.id || 'EC/WD/2026/016'}
              </span>

              <span className="font-medium">Date</span>
              <span className="text-right text-white font-mono">
                : &nbsp;{invoice.dateCreated || '15 Oct 2026'}
              </span>

              <span className="font-medium">{isQuote ? 'Valid Until' : 'Due Date'}</span>
              <span className="text-right text-white font-mono">
                : &nbsp;{invoice.dueDate || '—'}
              </span>
            </div>
          </div>
        </div>

        {/* ================= 3. BILL TO & PROJECT DETAILS ================= */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 pb-5 border-y border-[#1C1C1C]">
          {/* Bill To */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-[#D9B15F] uppercase mb-1.5">
              B I L L &nbsp; T O
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide uppercase">
              {invoice.clientCompany || invoice.client?.company || 'BROWNLIGHTS MEDIA'}
            </h3>
            <div className="text-xs text-zinc-300 mt-0.5 font-medium">
              {invoice.clientName || invoice.client?.name || 'Brownlights Media'}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              {invoice.clientLocation || invoice.client?.location || 'Kozhikode Kerala'}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-[#D9B15F] uppercase mb-1.5">
              P R O J E C T &nbsp; D E T A I L S
            </div>
            <div className="grid grid-cols-3 gap-y-1 text-xs">
              <span className="text-zinc-400">Project</span>
              <span className="col-span-2 text-white font-medium">
                : &nbsp;{invoice.projectDetails?.project || invoice.title || 'Website Development'}
              </span>

              <span className="text-zinc-400">Type</span>
              <span className="col-span-2 text-zinc-300">
                : &nbsp;{invoice.projectDetails?.type || 'Business Website'}
              </span>

              <span className="text-zinc-400">Status</span>
              <span className="col-span-2 text-emerald-400 font-medium">
                : &nbsp;{invoice.projectDetails?.status || 'Ready to launch'}
              </span>
            </div>
          </div>
        </div>

        {/* ================= 4. VALUATION & LINE ITEMS TABLE ================= */}
        <div className="relative z-10 py-3 flex-1 flex flex-col justify-center">
          <div className="w-full overflow-hidden rounded-xl border border-[#222222]">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#121212] border-b border-[#242424] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
              <div className="col-span-1 text-zinc-400 text-center">No.</div>
              <div className="col-span-8">Description</div>
              <div className="col-span-3 text-right">Amount ({currencySymbol})</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#181818] text-xs">
              {lineItems.map((item, index) => {
                const isDiscount = (item.amount < 0) || item.type === 'discount' || (item.title && item.title.toLowerCase().includes('discount'));
                const isValuation = item.type === 'valuation' || (item.title && item.title.toLowerCase().includes('total project valuation'));

                return (
                  <div
                    key={item.id || index}
                    className={`grid grid-cols-12 px-4 py-2.5 items-center ${
                      isValuation ? 'bg-[#0E0E0E]' : 'hover:bg-[#111111]/70'
                    }`}
                  >
                    <div className="col-span-1 text-center font-mono text-zinc-400 text-xs">
                      {item.no || index + 1}
                    </div>

                    <div className="col-span-8 pr-3">
                      <div className={`font-semibold ${isValuation ? 'text-white' : 'text-zinc-200'}`}>
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-[10.5px] text-zinc-400 font-sans mt-0.5 leading-snug">
                          {item.subtitle}
                        </div>
                      )}
                    </div>

                    <div
                      className={`col-span-3 text-right font-mono font-medium ${
                        isDiscount ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      {isDiscount ? `– ${formatAmount(item.amount)}` : formatAmount(item.amount)}
                    </div>
                  </div>
                );
              })}

              {/* HIGHLIGHTED ROW 1: FINAL PROJECT COST (Warm Gold Pill) */}
              <div className="grid grid-cols-12 px-4 py-2.5 bg-[#0C0C0C] border-y border-[#262626] items-center">
                <div className="col-span-1 text-center">
                  <div className="w-6 h-6 rounded bg-[#1A1A1A] border border-[#333333] flex items-center justify-center mx-auto text-[#D9B15F]">
                    <Tag className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-7 pr-2">
                  <div className="font-bold text-xs text-white uppercase tracking-wider">
                    Final Project Cost
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    (After discount)
                  </div>
                </div>

                <div className="col-span-5 sm:col-span-4 flex justify-end">
                  <div className="bg-[#D9B15F] text-black font-extrabold text-sm sm:text-base font-sans tracking-tight px-4 py-1.5 rounded-lg shadow-md flex items-center space-x-1">
                    <span>{currencySymbol}</span>
                    <span>{formatAmount(invoice.finalCost || 16000)}</span>
                  </div>
                </div>
              </div>

              {/* Advance Already Paid Row */}
              {advanceItem && (
                <div className="grid grid-cols-12 px-4 py-2.5 items-center bg-[#090909]">
                  <div className="col-span-1 text-center font-mono text-zinc-400 text-xs">
                    {advanceItem.no || lineItems.length + 1}
                  </div>

                  <div className="col-span-8 pr-3">
                    <div className="font-semibold text-zinc-200">
                      {advanceItem.title || 'Advance Already Paid'}
                    </div>
                    {advanceItem.subtitle && (
                      <div className="text-[10.5px] text-zinc-400 font-sans mt-0.5">
                        {advanceItem.subtitle}
                      </div>
                    )}
                  </div>

                  <div className="col-span-3 text-right font-mono font-medium text-amber-400">
                    – {formatAmount(advanceItem.amount || 6000)}
                  </div>
                </div>
              )}

              {/* HIGHLIGHTED ROW 2: BALANCE DUE (Emerald/Mint Glow Box) */}
              <div className="grid grid-cols-12 px-4 py-2.5 bg-[#071310] border-t border-[#123E33] items-center">
                <div className="col-span-1 text-center">
                  <div className="w-6 h-6 rounded bg-[#0E2822] border border-[#1B5749] flex items-center justify-center mx-auto text-emerald-400">
                    <CreditCard className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-7 pr-2">
                  <div className="font-extrabold text-xs text-white uppercase tracking-wider">
                    {isQuote ? 'NET ESTIMATE PAYABLE' : 'BALANCE DUE'}
                  </div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-tight">
                    {isQuote ? '(PROPOSED CONTRACT BALANCE)' : '(AMOUNT REMAINING TO BE PAID)'}
                  </div>
                </div>

                <div className="col-span-5 sm:col-span-4 flex justify-end">
                  <div className="bg-[#0D251F] border border-[#1E6756] text-[#34D399] font-extrabold text-sm sm:text-base font-sans tracking-tight px-4 py-1.5 rounded-lg shadow-sm flex items-center space-x-1">
                    <span>{currencySymbol}</span>
                    <span>{formatAmount(invoice.balanceDue || 10000)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 5. SPECIAL OFFER CALLOUT BOX ================= */}
        {invoice.specialOffer?.enabled !== false && (
          <div className="relative z-10 my-3 p-3.5 rounded-xl bg-[#0E0E0E] border border-[#262626] flex items-center space-x-3.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#333333] flex items-center justify-center shrink-0 text-[#D9B15F]">
              <Gift className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-wider text-white uppercase">
                {invoice.specialOffer?.title || 'SPECIAL OFFER — A TOKEN OF APPRECIATION'}
              </div>
              <div className="text-[11px] text-zinc-300 font-sans mt-0.5 leading-snug">
                {invoice.specialOffer?.description ||
                  'As a token of appreciation, we are providing you with a 3-Month SEO Support Plan (worth ₹3,000) completely free.'}
              </div>
            </div>
          </div>
        )}

        {/* ================= 6. FOOTER SECTION ================= */}
        <div className="relative z-10 pt-4 border-t border-[#222222] flex items-center justify-between text-xs text-zinc-400">
          <div>
            <p className="text-zinc-400 text-xs">Thank you for your trust and support.</p>
            <p className="text-white font-semibold text-xs mt-0.5">&mdash; Team Ebenora Creations</p>
          </div>

          <div className="text-right">
            <div className="text-[10px] tracking-[0.25em] font-serif italic uppercase text-zinc-400 leading-tight">
              L E T &rsquo; S &nbsp; B U I L D &nbsp; S O M E T H I N G
            </div>
            <div className="text-[10px] tracking-[0.25em] font-serif italic uppercase text-zinc-400 leading-tight">
              G R E A T &nbsp; T O G E T H E R .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
