import React, { useState } from 'react';
import { WORK_CATEGORIES, getNextWorkId } from '../../utils/workDatabase';
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
  Sliders,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function WorkCardEditor({
  work,
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

  // Handle Category Change -> Automatically recalculate next sequential Work ID
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    const nextId = getNextWorkId(newCategory, allWorks);
    const catObj = WORK_CATEGORIES.find((c) => c.key === newCategory);

    onChange({
      ...work,
      category: newCategory,
      id: nextId,
      deliverables:
        work.deliverables && work.deliverables.length > 0
          ? work.deliverables
          : catObj?.defaultDeliverables || []
    });
  };

  // Re-fetch next sequential ID manually
  const handleRegenerateId = () => {
    const nextId = getNextWorkId(work.category, allWorks);
    onChange({ ...work, id: nextId });
  };

  // Quick Text Parser ("Magic Paste")
  const handleParseQuickText = () => {
    if (!quickText.trim()) return;

    const lines = quickText.split('\n').map((l) => l.trim()).filter(Boolean);
    let detectedClient = work.clientName;
    let detectedCompany = work.clientCompany;
    let detectedTitle = work.title;
    let detectedCategory = work.category;
    let detectedAmount = work.financials?.totalAmount;
    let detectedAdvance = work.financials?.advancePaid;
    let detectedDeliverables = [];
    let detectedCurrency = work.financials?.currency || '₹';

    let inDeliverablesSection = false;

    lines.forEach((line) => {
      const lower = line.toLowerCase();

      // Check category
      if (lower.includes('category:') || lower.includes('service:')) {
        const val = lower.split(':')[1]?.trim() || '';
        if (val.includes('graphic') || val.includes('design') || val.includes('poster')) {
          detectedCategory = 'graphic_design';
        } else if (val.includes('video') || val.includes('reel') || val.includes('edit')) {
          detectedCategory = 'video_editing';
        } else if (val.includes('market') || val.includes('social') || val.includes('ad')) {
          detectedCategory = 'marketing';
        } else if (val.includes('web') || val.includes('site') || val.includes('3d')) {
          detectedCategory = 'web_development';
        } else if (val.includes('brand') || val.includes('logo')) {
          detectedCategory = 'branding';
        } else if (val.includes('invite') || val.includes('wedding')) {
          detectedCategory = 'invitations';
        }
        return;
      }

      // Check Client
      if (lower.startsWith('client:') || lower.startsWith('name:') || lower.startsWith('customer:')) {
        detectedClient = line.split(':')[1]?.trim() || detectedClient;
        return;
      }

      // Check Company / Brand
      if (lower.startsWith('company:') || lower.startsWith('brand:') || lower.startsWith('studio:')) {
        detectedCompany = line.split(':')[1]?.trim() || detectedCompany;
        return;
      }

      // Check Title / Project
      if (lower.startsWith('title:') || lower.startsWith('project:') || lower.startsWith('work:')) {
        detectedTitle = line.split(':')[1]?.trim() || detectedTitle;
        return;
      }

      // Check Amount / Price
      if (lower.startsWith('amount:') || lower.startsWith('price:') || lower.startsWith('total:') || lower.startsWith('fee:')) {
        const raw = line.split(':')[1]?.trim() || '';
        if (raw.includes('$')) detectedCurrency = '$';
        if (raw.includes('€')) detectedCurrency = '€';
        if (raw.includes('£')) detectedCurrency = '£';
        const numOnly = raw.replace(/[^0-9]/g, '');
        if (numOnly) detectedAmount = numOnly;
        return;
      }

      // Check Advance
      if (lower.startsWith('advance:') || lower.startsWith('deposit:')) {
        const raw = line.split(':')[1]?.trim() || '';
        const numOnly = raw.replace(/[^0-9]/g, '');
        if (numOnly) detectedAdvance = numOnly;
        return;
      }

      // Check Deliverables section
      if (lower.startsWith('deliverable') || lower.startsWith('scope:') || lower.startsWith('items:')) {
        inDeliverablesSection = true;
        return;
      }

      // Bullets detection
      if (line.startsWith('-') || line.startsWith('•') || line.startsWith('*') || inDeliverablesSection) {
        const clean = line.replace(/^[-•*]\s*/, '').trim();
        if (clean) detectedDeliverables.push(clean);
      }
    });

    // Auto-update next ID if category changed
    const autoId = getNextWorkId(detectedCategory, allWorks);

    const totalAmt = parseFloat(detectedAmount || '0') || 0;
    const advAmt = parseFloat(detectedAdvance || '0') || 0;
    const balAmt = Math.max(0, totalAmt - advAmt);

    onChange({
      ...work,
      id: autoId,
      category: detectedCategory,
      title: detectedTitle || work.title,
      clientName: detectedClient || work.clientName,
      clientCompany: detectedCompany || work.clientCompany,
      deliverables:
        detectedDeliverables.length > 0 ? detectedDeliverables : work.deliverables,
      financials: {
        ...work.financials,
        currency: detectedCurrency,
        totalAmount: detectedAmount || work.financials?.totalAmount,
        advancePaid: detectedAdvance || work.financials?.advancePaid,
        balanceDue: String(balAmt),
        paymentStatus: balAmt === 0 && totalAmt > 0 ? 'Paid' : advAmt > 0 ? 'Advance Received' : 'Pending'
      }
    });

    setIsQuickPasteOpen(false);
    setQuickText('');
  };

  // Add a deliverable item
  const handleAddDeliverable = () => {
    const current = work.deliverables || [];
    onChange({
      ...work,
      deliverables: [...current, 'New Deliverable Item']
    });
  };

  // Update a deliverable item
  const handleUpdateDeliverable = (index, value) => {
    const updated = [...(work.deliverables || [])];
    updated[index] = value;
    onChange({ ...work, deliverables: updated });
  };

  // Remove a deliverable item
  const handleRemoveDeliverable = (index) => {
    const updated = (work.deliverables || []).filter((_, i) => i !== index);
    onChange({ ...work, deliverables: updated });
  };

  // Auto-calculate Balance Due when Total or Advance changes
  const handleTotalChange = (val) => {
    const total = parseFloat(val || '0') || 0;
    const advance = parseFloat(work.financials?.advancePaid || '0') || 0;
    const balance = Math.max(0, total - advance);
    onChange({
      ...work,
      financials: {
        ...work.financials,
        totalAmount: val,
        balanceDue: String(balance),
        paymentStatus: balance === 0 && total > 0 ? 'Paid' : advance > 0 ? 'Advance Received' : 'Pending'
      }
    });
  };

  const handleAdvanceChange = (val) => {
    const advance = parseFloat(val || '0') || 0;
    const total = parseFloat(work.financials?.totalAmount || '0') || 0;
    const balance = Math.max(0, total - advance);
    onChange({
      ...work,
      financials: {
        ...work.financials,
        advancePaid: val,
        balanceDue: String(balance),
        paymentStatus: balance === 0 && total > 0 ? 'Paid' : advance > 0 ? 'Advance Received' : 'Pending'
      }
    });
  };

  const handleSaveClick = () => {
    onSave();
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 2500);
  };

  return (
    <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#222222]">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <span>Work Card Editor</span>
            <Sparkles className="w-4 h-4 text-[#D9B15F]" />
          </h2>
          <p className="text-xs text-zinc-400">
            Auto-generates sequential IDs per category &amp; exports to PDF.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsQuickPasteOpen(!isQuickPasteOpen)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#D9B15F]/15 border border-[#D9B15F]/50 text-[#F1D38A] hover:bg-[#D9B15F]/25 text-xs font-semibold transition-all"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>Magic Text Paste</span>
          </button>

          <button
            onClick={onNew}
            className="px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2a2a2a] text-zinc-300 text-xs font-medium border border-[#333333] transition-all"
          >
            + New Card
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
              <span>Save to Laptop DB</span>
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
              <span>Paste Details By Text (WhatsApp, Briefs, Email)</span>
            </span>
            <span className="text-[10px] text-zinc-500">Auto-detects client, category, deliverables &amp; price</span>
          </div>
          <textarea
            value={quickText}
            onChange={(e) => setQuickText(e.target.value)}
            placeholder={`Example paste:\nClient: Rahul Photography\nCategory: Video Editing\nTitle: Commercial Brand Showcase\nDeliverables:\n- 4K Commercial Cut\n- 3x Instagram Vertical Reels\nAmount: 35000\nAdvance: 20000`}
            rows={5}
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
              Parse &amp; Auto-Fill Card
            </button>
          </div>
        </div>
      )}

      {/* ================= FORM FIELDS GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Service Category */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Service Category
          </label>
          <select
            value={work.category}
            onChange={handleCategoryChange}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
          >
            {WORK_CATEGORIES.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.label} ({cat.prefix}-###)
              </option>
            ))}
          </select>
        </div>

        {/* Work ID (Auto-Increment & Editable) */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              Work ID (Auto-Generated)
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
          <div className="relative">
            <input
              type="text"
              value={work.id || ''}
              onChange={(e) => onChange({ ...work, id: e.target.value })}
              className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-[#F1D38A] font-mono font-bold focus:outline-none focus:border-[#D9B15F]"
              placeholder="EC-GD-001"
            />
          </div>
        </div>

        {/* Project Title */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Project Title / Work Description
          </label>
          <input
            type="text"
            value={work.title || ''}
            onChange={(e) => onChange({ ...work, title: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="e.g. Luxury Brand Identity &amp; Digital Lookbook"
          />
        </div>

        {/* Client Name */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Client Name
          </label>
          <input
            type="text"
            value={work.clientName || ''}
            onChange={(e) => onChange({ ...work, clientName: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="e.g. Rahul Sharma"
          />
        </div>

        {/* Client Company / Brand */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Client Company / Organization
          </label>
          <input
            type="text"
            value={work.clientCompany || ''}
            onChange={(e) => onChange({ ...work, clientCompany: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="e.g. Naomika Designs Studio"
          />
        </div>

        {/* Date Issued */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Issue Date
          </label>
          <input
            type="date"
            value={work.dateCreated || ''}
            onChange={(e) => onChange({ ...work, dateCreated: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
          />
        </div>

        {/* Target Delivery Date */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Target Delivery Date
          </label>
          <input
            type="date"
            value={work.deliveryDate || ''}
            onChange={(e) => onChange({ ...work, deliveryDate: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
          />
        </div>
      </div>

      {/* ================= DELIVERABLES LIST ================= */}
      <div className="space-y-2 pt-2 border-t border-[#222222]">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Scope of Deliverables
          </label>
          <button
            type="button"
            onClick={handleAddDeliverable}
            className="text-xs text-[#D9B15F] hover:underline flex items-center space-x-1"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>
        </div>

        <div className="space-y-2">
          {(work.deliverables || []).map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleUpdateDeliverable(idx, e.target.value)}
                className="flex-1 bg-[#161616] border border-[#333333] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
                placeholder={`Deliverable #${idx + 1}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveDeliverable(idx)}
                className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
                title="Remove item"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FINANCIAL DETAILS ================= */}
      <div className="space-y-3 pt-2 border-t border-[#222222]">
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          Investment &amp; Financials
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Currency */}
          <div>
            <span className="block text-[10px] text-zinc-400 uppercase mb-1">Currency</span>
            <select
              value={work.financials?.currency || '₹'}
              onChange={(e) =>
                onChange({
                  ...work,
                  financials: { ...work.financials, currency: e.target.value }
                })
              }
              className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            >
              <option value="₹">₹ INR</option>
              <option value="$">$ USD</option>
              <option value="AED">AED</option>
              <option value="€">€ EUR</option>
              <option value="£">£ GBP</option>
            </select>
          </div>

          {/* Total Amount */}
          <div>
            <span className="block text-[10px] text-zinc-400 uppercase mb-1">Total Agreed</span>
            <input
              type="text"
              value={work.financials?.totalAmount || ''}
              onChange={(e) => handleTotalChange(e.target.value)}
              className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-[#D9B15F]"
              placeholder="35000"
            />
          </div>

          {/* Advance Paid */}
          <div>
            <span className="block text-[10px] text-zinc-400 uppercase mb-1">Advance Received</span>
            <input
              type="text"
              value={work.financials?.advancePaid || ''}
              onChange={(e) => handleAdvanceChange(e.target.value)}
              className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-[#D9B15F]"
              placeholder="20000"
            />
          </div>

          {/* Payment Status */}
          <div>
            <span className="block text-[10px] text-zinc-400 uppercase mb-1">Status</span>
            <select
              value={work.financials?.paymentStatus || 'Paid'}
              onChange={(e) =>
                onChange({
                  ...work,
                  financials: { ...work.financials, paymentStatus: e.target.value }
                })
              }
              className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            >
              <option value="Paid">Paid in Full</option>
              <option value="Advance Received">Advance Received</option>
              <option value="Pending">Payment Pending</option>
              <option value="Complimentary">Complimentary</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= TECHNICAL SPECS ================= */}
      <div className="space-y-3 pt-2 border-t border-[#222222]">
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          Technical Specifications
        </label>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <span className="block text-[10px] text-zinc-400 uppercase mb-1">Resolution</span>
            <input
              type="text"
              value={work.specs?.resolution || ''}
              onChange={(e) =>
                onChange({
                  ...work,
                  specs: { ...work.specs, resolution: e.target.value }
                })
              }
              className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
              placeholder="300 DPI / 4K UHD"
            />
          </div>

          <div>
            <span className="block text-[10px] text-zinc-400 uppercase mb-1">Master Format</span>
            <input
              type="text"
              value={work.specs?.format || ''}
              onChange={(e) =>
                onChange({
                  ...work,
                  specs: { ...work.specs, format: e.target.value }
                })
              }
              className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
              placeholder="Vector / MP4 / PDF"
            />
          </div>

          <div>
            <span className="block text-[10px] text-zinc-400 uppercase mb-1">Turnaround</span>
            <input
              type="text"
              value={work.specs?.turnaround || ''}
              onChange={(e) =>
                onChange({
                  ...work,
                  specs: { ...work.specs, turnaround: e.target.value }
                })
              }
              className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
              placeholder="5 Days"
            />
          </div>
        </div>
      </div>

      {/* Notes & QR Link */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-[#222222]">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
            Studio Notes / Terms
          </label>
          <textarea
            value={work.notes || ''}
            onChange={(e) => onChange({ ...work, notes: e.target.value })}
            rows={2}
            className="w-full bg-[#161616] border border-[#333333] rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#D9B15F]"
            placeholder="Official deliverable produced by Ebenora Creations studio."
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
            Verification / QR Link URL
          </label>
          <input
            type="text"
            value={work.qrPayload || ''}
            onChange={(e) => onChange({ ...work, qrPayload: e.target.value })}
            className="w-full bg-[#161616] border border-[#333333] rounded-lg px-2.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#D9B15F]"
            placeholder="https://ebenoracreations.com/"
          />
        </div>
      </div>
    </div>
  );
}
