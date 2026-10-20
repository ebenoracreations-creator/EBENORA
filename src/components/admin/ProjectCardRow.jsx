import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  ExternalLink, 
  Activity, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  Search, 
  Eye,
  CheckSquare,
  Square,
  DollarSign,
  Save,
  Check
} from 'lucide-react';

export default function ProjectCardRow({ 
  project, 
  onEdit, 
  onDelete, 
  onToggleStatus, 
  onOpenPreview,
  onUpdateSeoChecklist,
  onTogglePaymentStatus,
  onToggleUrlMode,
  onUpdatePricingDirect
}) {
  const [isPinging, setIsPinging] = useState(false);
  const [pingResult, setPingResult] = useState(null);
  const [pingLatency, setPingLatency] = useState(null);

  // Inline Quick Price Editor State
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [priceForm, setPriceForm] = useState({
    total: project.payment?.totalAmount || '40000',
    advance: project.payment?.advanceAmount || '20000',
    balance: project.payment?.balanceAmount || '20000',
    currency: project.payment?.currency || '₹',
    status: project.payment?.status || 'advance_received'
  });
  const [priceSavedNotice, setPriceSavedNotice] = useState(false);

  const activeUrl = project.activeUrlType === 'localhost' && project.localhostUrl 
    ? project.localhostUrl 
    : project.url;

  const handlePing = async (e) => {
    e.stopPropagation();
    if (!activeUrl) return;
    setIsPinging(true);
    setPingResult(null);
    const start = performance.now();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      
      await fetch(activeUrl, {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const elapsed = Math.round(performance.now() - start);
      setPingLatency(elapsed);
      setPingResult('online');
    } catch {
      const img = new Image();
      const fallbackStart = performance.now();
      img.onload = () => {
        setPingLatency(Math.round(performance.now() - fallbackStart));
        setPingResult('online');
        setIsPinging(false);
      };
      img.onerror = () => {
        const elapsed = Math.round(performance.now() - fallbackStart);
        if (elapsed < 3000 && !activeUrl.includes('localhost')) {
          setPingLatency(elapsed);
          setPingResult('online');
        } else {
          setPingResult('offline');
        }
        setIsPinging(false);
      };
      img.src = `${activeUrl.replace(/\/$/, '')}/favicon.ico?t=${Date.now()}`;
      return;
    }
    setIsPinging(false);
  };

  const handleSavePriceInline = () => {
    const rawTotal = parseInt(String(priceForm.total).replace(/[^0-9]/g, ''), 10) || 0;
    const rawAdvance = parseInt(String(priceForm.advance).replace(/[^0-9]/g, ''), 10) || 0;
    const computedBalance = Math.max(0, rawTotal - rawAdvance);

    const updatedPayment = {
      ...project.payment,
      totalAmount: String(rawTotal),
      advanceAmount: String(rawAdvance),
      balanceAmount: String(computedBalance),
      currency: priceForm.currency,
      status: computedBalance === 0 && rawTotal > 0 ? 'fully_paid' : rawAdvance > 0 ? 'advance_received' : 'pending',
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    if (onUpdatePricingDirect) {
      onUpdatePricingDirect(project.id, updatedPayment);
    }
    setIsEditingPrice(false);
    setPriceSavedNotice(true);
    setTimeout(() => setPriceSavedNotice(false), 2000);
  };

  const isUnderCreation = project.status === 'under_creation';
  const currencySymbol = project.payment?.currency || '₹';
  const totalNum = parseInt(String(project.payment?.totalAmount || '0').replace(/[^0-9]/g, ''), 10) || 0;
  const advanceNum = parseInt(String(project.payment?.advanceAmount || '0').replace(/[^0-9]/g, ''), 10) || 0;
  const balanceNum = parseInt(String(project.payment?.balanceAmount || '0').replace(/[^0-9]/g, ''), 10) || 0;

  return (
    <div className={`bg-[#121212] border ${
      isUnderCreation 
        ? 'border-amber-500/30 hover:border-amber-500/50' 
        : 'border-[#222222] hover:border-[#333333]'
    } rounded-xl p-5 flex flex-col justify-between gap-4 transition-all`}>
      
      {/* Top Header Row */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
              isUnderCreation 
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
            }`}>
              {project.num}
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {project.name}
                </h3>

                {isUnderCreation ? (
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-medium rounded-full">
                    Under Creation
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-medium rounded-full">
                    Completed &amp; Live
                  </span>
                )}
              </div>

              <p className="text-xs text-[#8899A6] mt-0.5">
                {project.category} · <span className="text-white/80 font-medium">{project.client}</span>
              </p>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onEdit(project)}
              className="p-1.5 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white rounded-lg transition-colors cursor-pointer border border-[#2A2A2A]"
              title="Edit Settings"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDelete(project.id)}
              className="p-1.5 bg-[#1A1A1A] hover:bg-red-500/20 text-[#8899A6] hover:text-red-400 rounded-lg transition-colors cursor-pointer border border-[#2A2A2A]"
              title="Delete Project"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Status note */}
        {project.statusNote && (
          <div className="mt-3 bg-[#181818] border border-[#262626] rounded-lg p-2.5 text-xs text-[#A0AEC0]">
            <span className="text-amber-400/90 font-medium text-[11px] mr-1.5">Update:</span>
            {project.statusNote}
          </div>
        )}
      </div>

      {/* URL & Live Diagnostics Strip */}
      <div className="bg-[#181818] border border-[#222222] rounded-lg p-3 space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          
          {/* URL & Switcher */}
          <div className="flex items-center gap-2 max-w-full truncate">
            <button
              type="button"
              onClick={() => onToggleUrlMode(project.id)}
              className={`px-2 py-1 text-[10px] font-medium rounded border transition-colors flex items-center gap-1 cursor-pointer ${
                project.activeUrlType === 'localhost'
                  ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
                  : 'bg-[#222222] text-[#8899A6] border-[#333333] hover:text-white'
              }`}
              title="Toggle Live vs Localhost URL"
            >
              {project.activeUrlType === 'localhost' ? <Server className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
              <span>{project.activeUrlType === 'localhost' ? 'Localhost' : 'Live'}</span>
            </button>

            <a
              href={activeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400/90 hover:underline truncate max-w-xs flex items-center gap-1"
            >
              <span className="truncate">{activeUrl || 'No URL configured'}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>

          {/* Test & Preview Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Ping Test */}
            <button
              type="button"
              onClick={handlePing}
              disabled={isPinging || !activeUrl}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                pingResult === 'online'
                  ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                  : pingResult === 'offline'
                  ? 'bg-red-500/15 text-red-400 border-red-500/30'
                  : 'bg-[#1E1E1E] text-[#8899A6] hover:text-white border-[#2E2E2E]'
              }`}
            >
              <Activity className={`w-3 h-3 ${isPinging ? 'animate-spin' : ''}`} />
              <span>
                {isPinging ? 'Checking...' : pingResult === 'online' ? `Online (${pingLatency}ms)` : pingResult === 'offline' ? 'Offline' : 'Ping Status'}
              </span>
            </button>

            {/* Live Preview Modal */}
            <button
              type="button"
              onClick={() => onOpenPreview(project)}
              className="px-2.5 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-lg border border-cyan-500/20 transition-all flex items-center gap-1 cursor-pointer"
            >
              <Eye className="w-3 h-3" />
              <span>Preview</span>
            </button>
          </div>
        </div>
      </div>

      {/* SEO Works Block */}
      <div className="bg-[#181818] border border-[#222222] rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-[#8899A6] flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            SEO Work
          </span>

          {project.isInvitation ? (
            <span className="text-[10px] text-[#556070] bg-[#141414] border border-[#222222] px-2 py-0.5 rounded">
              Not Applicable (Invitation)
            </span>
          ) : (
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
              project.seoStatus === 'completed'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : project.seoStatus === 'in_progress'
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                : 'bg-[#1E1E1E] text-[#556070] border-[#2E2E2E]'
            }`}>
              {project.seoStatus === 'completed' ? 'Optimized & Ranked' : project.seoStatus === 'in_progress' ? 'SEO Active' : 'SEO Pending'}
            </span>
          )}
        </div>

        {project.isInvitation ? (
          <p className="text-xs text-[#556070] italic">
            Digital event invitation. Search indexing not required.
          </p>
        ) : (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {[
              { key: 'metaTags', label: 'Meta Tags' },
              { key: 'sitemapSubmitted', label: 'Sitemap XML' },
              { key: 'googleSearchConsole', label: 'GSC Verified' },
              { key: 'speedOptimization', label: 'PageSpeed 90+' },
              { key: 'backlinks', label: 'Backlinks' }
            ].map(item => {
              const isChecked = project.seoChecklist?.[item.key];
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => onUpdateSeoChecklist(project.id, item.key, !isChecked)}
                  className={`text-[10px] font-medium px-2 py-0.5 rounded border flex items-center gap-1 transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                      : 'bg-[#1E1E1E] text-[#556070] hover:text-[#8899A6] border-[#2A2A2A]'
                  }`}
                >
                  {isChecked ? <CheckSquare className="w-3 h-3 text-cyan-400" /> : <Square className="w-3 h-3" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Direct Inline Price & Payment Module */}
      <div className="bg-[#181818] border border-[#222222] rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#8899A6] flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              Payment &amp; Pricing
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
              project.payment?.status === 'fully_paid'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
            }`}>
              {project.payment?.status === 'fully_paid' ? 'Paid in Full' : 'Advance Received'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {priceSavedNotice && (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                <Check className="w-3 h-3" /> Saved
              </span>
            )}
            
            <button
              type="button"
              onClick={() => setIsEditingPrice(!isEditingPrice)}
              className="text-[11px] font-medium px-2 py-0.5 bg-[#222222] hover:bg-[#2A2A2A] text-cyan-400 rounded border border-[#333333] transition-colors cursor-pointer"
            >
              {isEditingPrice ? 'Close' : 'Edit Price'}
            </button>
          </div>
        </div>

        {/* Editing Mode: Direct Price Inputs */}
        {isEditingPrice ? (
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-3 space-y-3 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Currency</label>
                <select
                  value={priceForm.currency}
                  onChange={(e) => setPriceForm({ ...priceForm, currency: e.target.value })}
                  className="w-full bg-[#1E1E1E] text-white border border-[#333333] rounded p-1.5 text-xs focus:outline-none focus:border-cyan-500"
                >
                  <option value="₹">₹ (INR)</option>
                  <option value="$">$ (USD / AUD)</option>
                  <option value="£">£ (GBP)</option>
                  <option value="€">€ (EUR)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Total Price</label>
                <input
                  type="number"
                  value={priceForm.total}
                  onChange={(e) => {
                    const val = e.target.value;
                    const adv = priceForm.advance;
                    setPriceForm({ 
                      ...priceForm, 
                      total: val,
                      balance: String(Math.max(0, (parseInt(val, 10) || 0) - (parseInt(adv, 10) || 0)))
                    });
                  }}
                  className="w-full bg-[#1E1E1E] text-white border border-[#333333] rounded p-1.5 text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Advance Received</label>
                <input
                  type="number"
                  value={priceForm.advance}
                  onChange={(e) => {
                    const val = e.target.value;
                    const tot = priceForm.total;
                    setPriceForm({ 
                      ...priceForm, 
                      advance: val,
                      balance: String(Math.max(0, (parseInt(tot, 10) || 0) - (parseInt(val, 10) || 0)))
                    });
                  }}
                  className="w-full bg-[#1E1E1E] text-emerald-400 border border-[#333333] rounded p-1.5 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Balance</label>
                <input
                  type="number"
                  value={priceForm.balance}
                  onChange={(e) => setPriceForm({ ...priceForm, balance: e.target.value })}
                  className="w-full bg-[#1E1E1E] text-amber-400 border border-[#333333] rounded p-1.5 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#222222]">
              <button
                type="button"
                onClick={() => {
                  setPriceForm({
                    ...priceForm,
                    advance: priceForm.total,
                    balance: '0'
                  });
                }}
                className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded hover:bg-emerald-500/20 transition-colors"
              >
                Mark 100% Paid
              </button>

              <button
                type="button"
                onClick={handleSavePriceInline}
                className="px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs rounded transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Save className="w-3 h-3" />
                <span>Save Price</span>
              </button>
            </div>
          </div>
        ) : (
          /* Subtle clean price summary */
          <div className="flex items-center justify-between text-xs pt-1">
            <div className="flex items-center gap-4 text-[#8899A6]">
              <span>Price: <strong className="text-white font-medium">{currencySymbol}{totalNum.toLocaleString('en-IN')}</strong></span>
              <span>Advance: <strong className="text-emerald-400 font-medium">{currencySymbol}{advanceNum.toLocaleString('en-IN')}</strong></span>
              <span>Balance: <strong className={`font-medium ${balanceNum === 0 ? 'text-emerald-400' : 'text-amber-400'}`}>{currencySymbol}{balanceNum.toLocaleString('en-IN')}</strong></span>
            </div>

            <button
              type="button"
              onClick={() => onTogglePaymentStatus(project.id)}
              className="text-[10px] text-[#8899A6] hover:text-white bg-[#222] hover:bg-[#2A2A2A] px-2 py-0.5 rounded border border-[#2E2E2E] transition-colors"
            >
              {project.payment?.status === 'fully_paid' ? 'Mark Partial' : 'Mark Cleared'}
            </button>
          </div>
        )}

      </div>

      {/* Bottom Switcher Row */}
      <div className="flex items-center justify-between pt-2 border-t border-[#1E1E1E] text-xs">
        <span className="text-[#556070] text-[11px]">
          Updated: {project.payment?.lastUpdated || 'Recent'}
        </span>

        <button
          type="button"
          onClick={() => onToggleStatus(project.id)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
            project.status === 'completed'
              ? 'bg-[#1E1E1E] hover:bg-[#282828] text-[#A0AEC0] hover:text-white border border-[#2E2E2E]'
              : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{project.status === 'completed' ? 'Reopen Project' : 'Mark Website Completed'}</span>
        </button>
      </div>

    </div>
  );
}
