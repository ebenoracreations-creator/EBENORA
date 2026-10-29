import React, { useState } from 'react';
import { WORK_CATEGORIES, getNextInvoiceNumber } from '../../utils/workDatabase';
import {
  Wand2,
  RefreshCw,
  Plus,
  Trash2,
  DollarSign,
  Calendar,
  Layers,
  FileText,
  User,
  Sparkles,
  Gift,
  CheckCircle,
  FileCheck
} from 'lucide-react';

export default function InvoiceEditor({
  invoice,
  onChange,
  onSave,
  onNew,
  onOpenArchive,
  onPrint,
  allWorks = []
}) {
  const [quickText, setQuickText] = useState('');
  const [isQuickPasteOpen, setIsQuickPasteOpen] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  const isQuote = (invoice.docType || 'INVOICE').toUpperCase() === 'QUOTATION';

  // Toggle between INVOICE and QUOTATION mode
  const handleDocTypeToggle = (type) => {
    const nextNum = getNextInvoiceNumber(invoice.category || 'web_development', type, allWorks);
    onChange({
      ...invoice,
      docType: type,
      invoiceNo: nextNum,
      id: nextNum
    });
  };

  // Handle Category Change -> Automatically updates category code in invoice number & subtitle
  const handleCategoryChange = (e) => {
    const newCategoryKey = e.target.value;
    const catObj = WORK_CATEGORIES.find((c) => c.key === newCategoryKey) || WORK_CATEGORIES[0];
    const nextNum = getNextInvoiceNumber(newCategoryKey, invoice.docType || 'INVOICE', allWorks);

    onChange({
      ...invoice,
      category: newCategoryKey,
      categoryCode: catObj.code,
      subtitle: catObj.subtitle,
      invoiceNo: nextNum,
      id: nextNum,
      projectDetails: {
        ...invoice.projectDetails,
        project: catObj.label
      }
    });
  };

  // Regenerate Next Invoice Number
  const handleRegenerateId = () => {
    const nextNum = getNextInvoiceNumber(invoice.category || 'web_development', invoice.docType || 'INVOICE', allWorks);
    onChange({
      ...invoice,
      invoiceNo: nextNum,
      id: nextNum
    });
  };

  // Recalculate Final Cost and Balance Due
  const recalculateTotals = (items, advanceAmt) => {
    let subtotal = 0;
    let discounts = 0;

    items.forEach((item) => {
      const amt = parseFloat(item.amount || '0') || 0;
      if (item.type === 'discount' || amt < 0) {
        discounts += Math.abs(amt);
      } else if (item.type !== 'valuation') {
        subtotal += amt;
      }
    });

    const final = Math.max(0, subtotal - discounts);
    const advance = parseFloat(advanceAmt || '0') || 0;
    const balance = Math.max(0, final - advance);

    return {
      finalCost: final,
      balanceDue: balance
    };
  };

  // Add line item
  const handleAddLineItem = () => {
    const current = invoice.lineItems || [];
    const nextNo = current.length + 1;
    const newItem = {
      id: Date.now(),
      no: nextNo,
      title: 'Additional Service / Page',
      subtitle: '(As requested by client)',
      amount: 2500,
      type: 'charge'
    };
    const updatedItems = [...current, newItem];
    const { finalCost, balanceDue } = recalculateTotals(updatedItems, invoice.advancePaidItem?.amount);

    onChange({
      ...invoice,
      lineItems: updatedItems,
      finalCost,
      balanceDue
    });
  };

  // Update line item
  const handleUpdateLineItem = (index, field, value) => {
    const updated = [...(invoice.lineItems || [])];
    updated[index] = { ...updated[index], [field]: value };

    // If amount changed, auto-recalculate
    const { finalCost, balanceDue } = recalculateTotals(updated, invoice.advancePaidItem?.amount);

    onChange({
      ...invoice,
      lineItems: updated,
      finalCost,
      balanceDue
    });
  };

  // Remove line item
  const handleRemoveLineItem = (index) => {
    const updated = (invoice.lineItems || []).filter((_, i) => i !== index);
    // Renumber
    const renumbered = updated.map((item, i) => ({ ...item, no: i + 1 }));
    const { finalCost, balanceDue } = recalculateTotals(renumbered, invoice.advancePaidItem?.amount);

    onChange({
      ...invoice,
      lineItems: renumbered,
      finalCost,
      balanceDue
    });
  };

  // Update Advance Paid
  const handleAdvanceChange = (val) => {
    const advNum = parseFloat(val || '0') || 0;
    const updatedAdv = {
      ...(invoice.advancePaidItem || {}),
      no: (invoice.lineItems?.length || 0) + 1,
      title: 'Advance Already Paid',
      subtitle: '(Received from client)',
      amount: -Math.abs(advNum)
    };
    const { finalCost, balanceDue } = recalculateTotals(invoice.lineItems || [], advNum);

    onChange({
      ...invoice,
      advancePaidItem: updatedAdv,
      finalCost,
      balanceDue
    });
  };

  // Quick Text Parser ("Magic Paste")
  const handleParseQuickText = () => {
    if (!quickText.trim()) return;

    const lines = quickText.split('\n').map((l) => l.trim()).filter(Boolean);
    let detectedClient = invoice.clientName || 'Client Name';
    let detectedCompany = invoice.clientCompany || 'Company';
    let detectedLocation = invoice.clientLocation || 'Kerala, India';
    let detectedTitle = invoice.title || 'Website Development';
    let detectedCategory = invoice.category || 'web_development';
    let detectedItems = [];
    let detectedAdvance = 0;

    lines.forEach((line) => {
      const lower = line.toLowerCase();

      // Check category
      if (lower.includes('category:') || lower.includes('service:')) {
        const val = lower.split(':')[1]?.trim() || '';
        if (val.includes('graphic') || val.includes('design')) detectedCategory = 'graphic_design';
        else if (val.includes('video') || val.includes('reel') || val.includes('edit')) detectedCategory = 'video_editing';
        else if (val.includes('market') || val.includes('social')) detectedCategory = 'marketing';
        else if (val.includes('brand')) detectedCategory = 'branding';
        else if (val.includes('invite') || val.includes('wedding')) detectedCategory = 'invitations';
        else if (val.includes('web')) detectedCategory = 'web_development';
        return;
      }

      // Check Client
      if (lower.startsWith('client:') || lower.startsWith('name:')) {
        detectedClient = line.split(':')[1]?.trim() || detectedClient;
        return;
      }

      // Check Company
      if (lower.startsWith('company:') || lower.startsWith('brand:')) {
        detectedCompany = line.split(':')[1]?.trim() || detectedCompany;
        return;
      }

      // Check Location
      if (lower.startsWith('location:') || lower.startsWith('city:') || lower.startsWith('address:')) {
        detectedLocation = line.split(':')[1]?.trim() || detectedLocation;
        return;
      }

      // Check Advance
      if (lower.startsWith('advance:') || lower.startsWith('deposit:')) {
        const numOnly = line.replace(/[^0-9]/g, '');
        if (numOnly) detectedAdvance = parseFloat(numOnly);
        return;
      }

      // Line items with numbers or bullets: e.g. "1. Original Quotation - 12000" or "- Additional Page: 2500"
      const priceMatch = line.match(/(?:₹|\$|rs\.?|inr)?\s*([0-9,]+)(?:\/-)?\s*$/i);
      if (priceMatch) {
        const amtStr = priceMatch[1].replace(/,/g, '');
        const amt = parseFloat(amtStr);
        const desc = line.replace(priceMatch[0], '').replace(/^[-•*0-9.)\s]+/, '').replace(/[:-]\s*$/, '').trim();

        if (desc && !isNaN(amt)) {
          const isDisc = desc.toLowerCase().includes('discount');
          detectedItems.push({
            id: Date.now() + Math.random(),
            no: detectedItems.length + 1,
            title: desc,
            subtitle: isDisc ? '(Special discount)' : '(As per scope)',
            amount: isDisc ? -Math.abs(amt) : amt,
            type: isDisc ? 'discount' : 'charge'
          });
        }
      }
    });

    const finalLineItems = detectedItems.length > 0 ? detectedItems : (invoice.lineItems || []);
    const { finalCost, balanceDue } = recalculateTotals(finalLineItems, detectedAdvance);
    const catObj = WORK_CATEGORIES.find((c) => c.key === detectedCategory) || WORK_CATEGORIES[0];
    const nextNum = getNextInvoiceNumber(detectedCategory, invoice.docType || 'INVOICE', allWorks);

    onChange({
      ...invoice,
      category: detectedCategory,
      categoryCode: catObj.code,
      subtitle: catObj.subtitle,
      invoiceNo: nextNum,
      id: nextNum,
      clientName: detectedClient,
      clientCompany: detectedCompany,
      clientLocation: detectedLocation,
      lineItems: finalLineItems,
      advancePaidItem: {
        no: finalLineItems.length + 1,
        title: 'Advance Already Paid',
        subtitle: '(Received from client)',
        amount: -Math.abs(detectedAdvance)
      },
      finalCost,
      balanceDue
    });

    setIsQuickPasteOpen(false);
    setQuickText('');
  };

  const handleSaveClick = () => {
    onSave();
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 2500);
  };

  return (
    <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-6 font-['Kanit',sans-serif]">
      {/* ================= TOP CONTROLS & DOC TYPE SWITCHER ================= */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#222222]">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-white">Invoice &amp; Quotation Studio</h2>
            <Sparkles className="w-4 h-4 text-[#D9B15F]" />
          </div>
          <p className="text-xs text-zinc-400">
            Create 1:1 luxury dark themed client invoices and quotations.
          </p>
        </div>

        {/* Document Type Switcher (INVOICE vs QUOTATION) */}
        <div className="flex items-center space-x-2">
          <div className="flex p-0.5 bg-[#1A1A1A] rounded-xl border border-[#333333]">
            <button
              type="button"
              onClick={() => handleDocTypeToggle('INVOICE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                !isQuote ? 'bg-[#D9B15F] text-black shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Invoice
            </button>
            <button
              type="button"
              onClick={() => handleDocTypeToggle('QUOTATION')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                isQuote ? 'bg-[#D9B15F] text-black shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Quotation
            </button>
          </div>

          <button
            onClick={() => setIsQuickPasteOpen(!isQuickPasteOpen)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#D9B15F]/15 border border-[#D9B15F]/50 text-[#F1D38A] hover:bg-[#D9B15F]/25 text-xs font-semibold transition-all"
            title="Auto-fill by pasting text"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Magic Paste</span>
          </button>

          <button
            onClick={handleSaveClick}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-[#D9B15F] hover:bg-[#c9973e] text-black font-semibold text-xs transition-all shadow-md"
          >
            {saveSuccessMsg ? (
              <>
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Saved!</span>
              </>
            ) : (
              <span>Save DB</span>
            )}
          </button>
        </div>
      </div>

      {/* Quick Text Parser Expandable Box */}
      {isQuickPasteOpen && (
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#D9B15F]/50 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#D9B15F] flex items-center space-x-1.5">
              <Wand2 className="w-3.5 h-3.5" />
              <span>Paste Invoice/Quote Brief (Auto-detects lines &amp; amounts)</span>
            </span>
          </div>
          <textarea
            value={quickText}
            onChange={(e) => setQuickText(e.target.value)}
            placeholder={`Client: BROWNLIGHTS MEDIA\nLocation: Kozhikode Kerala\nCategory: Website Development\n1. Original Quotation: 12000\n2. Revised Development Cost: 15000\n3. Additional Page: 2500\n4. Special Discount: -1500\nAdvance: 6000`}
            rows={6}
            className="w-full bg-[#141414] border border-[#333333] rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#D9B15F] font-mono leading-relaxed"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsQuickPasteOpen(false)}
              className="px-3 py-1 rounded text-xs text-zinc-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleParseQuickText}
              className="px-4 py-1.5 rounded-lg bg-[#D9B15F] text-black text-xs font-bold hover:bg-[#c9973e] transition-all"
            >
              Parse &amp; Apply
            </button>
          </div>
        </div>
      )}

      {/* ================= METADATA & CATEGORY GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Service Category */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Service Category
          </label>
          <select
            value={invoice.category || 'web_development'}
            onChange={handleCategoryChange}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
          >
            {WORK_CATEGORIES.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.label} (EC/{cat.code}/...)
              </option>
            ))}
          </select>
        </div>

        {/* Document Number (e.g. EC/WD/2026/016) */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              {isQuote ? 'Quotation Number' : 'Invoice Number'}
            </label>
            <button
              type="button"
              onClick={handleRegenerateId}
              title="Recalculate next consecutive ID"
              className="text-[11px] text-[#D9B15F] hover:underline flex items-center space-x-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Next ID</span>
            </button>
          </div>
          <input
            type="text"
            value={invoice.invoiceNo || invoice.id || ''}
            onChange={(e) => onChange({ ...invoice, invoiceNo: e.target.value, id: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-[#F1D38A] font-mono font-bold focus:outline-none focus:border-[#D9B15F]"
            placeholder="EC/WD/2026/016"
          />
        </div>

        {/* Issue Date */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Issue Date
          </label>
          <input
            type="text"
            value={invoice.dateCreated || '15 Oct 2026'}
            onChange={(e) => onChange({ ...invoice, dateCreated: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="15 Oct 2026"
          />
        </div>

        {/* Due Date / Valid Until */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            {isQuote ? 'Valid Until' : 'Due Date'}
          </label>
          <input
            type="text"
            value={invoice.dueDate || '—'}
            onChange={(e) => onChange({ ...invoice, dueDate: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="— or 30 Oct 2026"
          />
        </div>
      </div>

      {/* ================= BILL TO & PROJECT DETAILS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#222222]">
        {/* Bill To */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-[#D9B15F] uppercase tracking-wider">
            Bill To (Client Information)
          </label>
          <input
            type="text"
            value={invoice.clientCompany || ''}
            onChange={(e) => onChange({ ...invoice, clientCompany: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white uppercase font-bold focus:outline-none focus:border-[#D9B15F]"
            placeholder="COMPANY NAME (e.g. BROWNLIGHTS MEDIA)"
          />
          <input
            type="text"
            value={invoice.clientName || ''}
            onChange={(e) => onChange({ ...invoice, clientName: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="Attention / Contact Person"
          />
          <input
            type="text"
            value={invoice.clientLocation || ''}
            onChange={(e) => onChange({ ...invoice, clientLocation: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="Location (e.g. Kozhikode Kerala)"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-[#D9B15F] uppercase tracking-wider">
            Project Details
          </label>
          <input
            type="text"
            value={invoice.projectDetails?.project || invoice.title || ''}
            onChange={(e) =>
              onChange({
                ...invoice,
                title: e.target.value,
                projectDetails: { ...invoice.projectDetails, project: e.target.value }
              })
            }
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="Project (e.g. Website Development)"
          />
          <input
            type="text"
            value={invoice.projectDetails?.type || ''}
            onChange={(e) =>
              onChange({
                ...invoice,
                projectDetails: { ...invoice.projectDetails, type: e.target.value }
              })
            }
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="Type (e.g. Business Website)"
          />
          <input
            type="text"
            value={invoice.projectDetails?.status || ''}
            onChange={(e) =>
              onChange({
                ...invoice,
                projectDetails: { ...invoice.projectDetails, status: e.target.value }
              })
            }
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="Status (e.g. Ready to launch)"
          />
        </div>
      </div>

      {/* ================= LINE ITEMS TABLE EDITOR ================= */}
      <div className="space-y-3 pt-3 border-t border-[#222222]">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold text-[#D9B15F] uppercase tracking-wider">
            Valuation &amp; Line Items
          </label>
          <button
            type="button"
            onClick={handleAddLineItem}
            className="text-xs text-[#D9B15F] hover:underline flex items-center space-x-1"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Line Item</span>
          </button>
        </div>

        <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
          {(invoice.lineItems || []).map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-2.5 rounded-xl bg-[#141414] border border-[#2B2B2B] flex items-center space-x-2 text-xs"
            >
              <span className="font-mono text-zinc-500 w-5 text-center font-bold">
                {idx + 1}
              </span>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  value={item.title || ''}
                  onChange={(e) => handleUpdateLineItem(idx, 'title', e.target.value)}
                  className="bg-[#1A1A1A] border border-[#333333] rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
                  placeholder="Item Title (e.g. Original Quotation)"
                />
                <input
                  type="text"
                  value={item.subtitle || ''}
                  onChange={(e) => handleUpdateLineItem(idx, 'subtitle', e.target.value)}
                  className="bg-[#1A1A1A] border border-[#333333] rounded-lg px-2.5 py-1 text-xs text-zinc-400 focus:outline-none focus:border-[#D9B15F]"
                  placeholder="Subtitle (e.g. Initial discussion cost)"
                />
              </div>

              <div className="w-24 shrink-0">
                <input
                  type="number"
                  value={item.amount || ''}
                  onChange={(e) => handleUpdateLineItem(idx, 'amount', parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#1A1A1A] border border-[#333333] rounded-lg px-2.5 py-1 text-xs text-right font-mono text-white focus:outline-none focus:border-[#D9B15F]"
                  placeholder="Amount"
                />
              </div>

              <button
                type="button"
                onClick={() => handleRemoveLineItem(idx)}
                className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
                title="Remove item"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ADVANCE & TOTALS SUMMARY ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[#222222]">
        {/* Advance Received */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
            Advance Already Paid (₹)
          </label>
          <input
            type="number"
            value={Math.abs(invoice.advancePaidItem?.amount || 0)}
            onChange={(e) => handleAdvanceChange(e.target.value)}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs font-mono font-bold text-amber-400 focus:outline-none focus:border-[#D9B15F]"
            placeholder="6000"
          />
        </div>

        {/* Final Project Cost (Auto-Computed) */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
            Final Project Cost
          </label>
          <div className="w-full bg-[#1F190D] border border-[#D9B15F]/50 rounded-xl px-3 py-2 text-sm font-mono font-bold text-[#F1D38A]">
            ₹ {Number(invoice.finalCost || 0).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Balance Due (Auto-Computed) */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
            Balance Due
          </label>
          <div className="w-full bg-[#081F1A] border border-emerald-500/50 rounded-xl px-3 py-2 text-sm font-mono font-bold text-emerald-400">
            ₹ {Number(invoice.balanceDue || 0).toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* ================= SPECIAL OFFER CALLOUT BOX ================= */}
      <div className="space-y-2 pt-3 border-t border-[#222222]">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="offerEnabled"
            checked={invoice.specialOffer?.enabled !== false}
            onChange={(e) =>
              onChange({
                ...invoice,
                specialOffer: { ...invoice.specialOffer, enabled: e.target.checked }
              })
            }
            className="w-4 h-4 rounded text-[#D9B15F] bg-[#161616] border-[#333333]"
          />
          <label htmlFor="offerEnabled" className="text-xs font-bold text-zinc-200 cursor-pointer">
            Include Special Appreciation Offer Gift Box
          </label>
        </div>

        {invoice.specialOffer?.enabled !== false && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6">
            <input
              type="text"
              value={invoice.specialOffer?.title || 'SPECIAL OFFER — A TOKEN OF APPRECIATION'}
              onChange={(e) =>
                onChange({
                  ...invoice,
                  specialOffer: { ...invoice.specialOffer, title: e.target.value }
                })
              }
              className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
              placeholder="Offer Title"
            />
            <input
              type="text"
              value={
                invoice.specialOffer?.description ||
                'As a token of appreciation, we are providing you with a 3-Month SEO Support Plan (worth ₹3,000) completely free.'
              }
              onChange={(e) =>
                onChange({
                  ...invoice,
                  specialOffer: { ...invoice.specialOffer, description: e.target.value }
                })
              }
              className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
              placeholder="Offer Description"
            />
          </div>
        )}
      </div>

      {/* ================= CONTACT DETAILS ================= */}
      <div className="space-y-2 pt-3 border-t border-[#222222]">
        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
          Studio Contact Info (Displayed in Header)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <input
            type="text"
            value={invoice.contact?.email || 'ebenoracretion@gmail.com'}
            onChange={(e) =>
              onChange({
                ...invoice,
                contact: { ...invoice.contact, email: e.target.value }
              })
            }
            className="bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1 text-xs text-white font-mono"
            placeholder="Email"
          />
          <input
            type="text"
            value={invoice.contact?.phone || '9037352739'}
            onChange={(e) =>
              onChange({
                ...invoice,
                contact: { ...invoice.contact, phone: e.target.value }
              })
            }
            className="bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1 text-xs text-white font-mono"
            placeholder="Phone"
          />
          <input
            type="text"
            value={invoice.contact?.website || 'www.ebenoracreations.com'}
            onChange={(e) =>
              onChange({
                ...invoice,
                contact: { ...invoice.contact, website: e.target.value }
              })
            }
            className="bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1 text-xs text-white"
            placeholder="Website"
          />
          <input
            type="text"
            value={invoice.contact?.location || 'Kerala, India'}
            onChange={(e) =>
              onChange({
                ...invoice,
                contact: { ...invoice.contact, location: e.target.value }
              })
            }
            className="bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1 text-xs text-white"
            placeholder="Location"
          />
        </div>
      </div>
    </div>
  );
}
