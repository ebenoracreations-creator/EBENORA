import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

export default function ProjectEditModal({
  isOpen,
  onClose,
  project,
  onSave
}) {
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    category: 'Creative Production & Studio',
    isInvitation: false,
    url: '',
    localhostUrl: 'http://localhost:5174',
    activeUrlType: 'live',
    status: 'under_creation',
    statusNote: '',
    seoStatus: 'in_progress',
    currency: '₹',
    totalAmount: '45000',
    advanceAmount: '25000',
    balanceAmount: '20000',
    paymentStatus: 'advance_received'
  });

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name || '',
        client: project.client || '',
        category: project.category || 'Creative Production & Studio',
        isInvitation: Boolean(project.isInvitation),
        url: project.url || '',
        localhostUrl: project.localhostUrl || 'http://localhost:5174',
        activeUrlType: project.activeUrlType || 'live',
        status: project.status || 'under_creation',
        statusNote: project.statusNote || '',
        seoStatus: project.seoStatus || 'in_progress',
        currency: project.payment?.currency || '₹',
        totalAmount: String(project.payment?.totalAmount || '45000').replace(/[^0-9]/g, ''),
        advanceAmount: String(project.payment?.advanceAmount || '25000').replace(/[^0-9]/g, ''),
        balanceAmount: String(project.payment?.balanceAmount || '20000').replace(/[^0-9]/g, ''),
        paymentStatus: project.payment?.status || 'advance_received'
      });
    } else {
      setFormData({
        name: '',
        client: '',
        category: 'Creative Production & Studio',
        isInvitation: false,
        url: '',
        localhostUrl: 'http://localhost:5174',
        activeUrlType: 'live',
        status: 'under_creation',
        statusNote: '',
        seoStatus: 'in_progress',
        currency: '₹',
        totalAmount: '40000',
        advanceAmount: '20000',
        balanceAmount: '20000',
        paymentStatus: 'advance_received'
      });
    }
  }, [project, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawTotal = parseInt(String(formData.totalAmount).replace(/[^0-9]/g, ''), 10) || 0;
    const rawAdv = parseInt(String(formData.advanceAmount).replace(/[^0-9]/g, ''), 10) || 0;
    const computedBal = Math.max(0, rawTotal - rawAdv);

    const updated = {
      ...(project || {}),
      id: project?.id || `p_${Date.now()}`,
      num: project?.num || 'NEW',
      name: formData.name,
      client: formData.client,
      category: formData.category,
      isInvitation: formData.isInvitation,
      url: formData.url,
      localhostUrl: formData.localhostUrl,
      activeUrlType: formData.activeUrlType,
      status: formData.status,
      statusNote: formData.statusNote,
      seoStatus: formData.isInvitation ? 'na' : formData.seoStatus,
      payment: {
        currency: formData.currency,
        totalAmount: String(rawTotal),
        advanceAmount: String(rawAdv),
        balanceAmount: String(computedBal),
        status: computedBal === 0 && rawTotal > 0 ? 'fully_paid' : rawAdv > 0 ? 'advance_received' : 'pending',
        lastUpdated: new Date().toISOString().split('T')[0]
      }
    };

    onSave(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161616] border-b border-[#222222] text-white">
          <div>
            <h2 className="text-base font-semibold text-white tracking-tight">
              {project ? `Edit Website: ${project.name}` : 'Create New Website Project'}
            </h2>
            <p className="text-xs text-[#8899A6] mt-0.5">Configure client details, links, and SEO tracking</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white rounded-lg transition-colors cursor-pointer border border-[#2A2A2A]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
          
          {/* Row 1: Name and Client */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">
                Website / Project Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Brown Lights Media"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">
                Client / Brand Name
              </label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="e.g. Tony & Team"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Category & Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">
                Industry Category
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Studio & Photography Portfolio"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">
                Project Type
              </label>
              <div className="flex items-center gap-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-white">
                  <input
                    type="checkbox"
                    checked={formData.isInvitation}
                    onChange={(e) => setFormData({ ...formData, isInvitation: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 rounded"
                  />
                  <span>Digital Event Invitation (No SEO Needed)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Row 3: Live URL & Localhost Port */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-cyan-400">
                Live Production / GitHub Pages URL
              </label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://clientdomain.com"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors font-mono text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-amber-400">
                Localhost Dev Server URL
              </label>
              <input
                type="text"
                value={formData.localhostUrl}
                onChange={(e) => setFormData({ ...formData, localhostUrl: e.target.value })}
                placeholder="http://localhost:5174"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors font-mono text-xs"
              />
            </div>
          </div>

          {/* Row 4: Status & Active Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">Website Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none"
              >
                <option value="under_creation">Under Creation (Active Build)</option>
                <option value="completed">Completed &amp; Live</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">Default URL Target</label>
              <select
                value={formData.activeUrlType}
                onChange={(e) => setFormData({ ...formData, activeUrlType: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none"
              >
                <option value="live">Live Web Domain</option>
                <option value="localhost">Localhost Dev Server</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">SEO Status</label>
              <select
                disabled={formData.isInvitation}
                value={formData.isInvitation ? 'na' : formData.seoStatus}
                onChange={(e) => setFormData({ ...formData, seoStatus: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none disabled:opacity-50"
              >
                <option value="in_progress">SEO In Progress</option>
                <option value="completed">Optimized &amp; Ranked</option>
                <option value="pending">Pending SEO Setup</option>
                <option value="na">Not Applicable</option>
              </select>
            </div>
          </div>

          {/* Status Note */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-[#8899A6]">
              Work Update / Client Note
            </label>
            <input
              type="text"
              value={formData.statusNote}
              onChange={(e) => setFormData({ ...formData, statusNote: e.target.value })}
              placeholder="e.g. Hero section completed, waiting for client gallery photos"
              className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
            />
          </div>

          {/* Pricing Details */}
          <div className="bg-[#181818] border border-[#262626] rounded-xl p-4 space-y-3">
            <span className="text-xs font-medium text-emerald-400 block">
              Budget &amp; Payment Ledger
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Currency</label>
                <select
                  value={formData.currency}
                  onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                  className="w-full bg-[#141414] border border-[#2E2E2E] rounded p-2 text-white text-xs focus:outline-none"
                >
                  <option value="₹">₹ (INR)</option>
                  <option value="$">$ (USD / AUD)</option>
                  <option value="£">£ (GBP)</option>
                  <option value="€">€ (EUR)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Total Agreed Price</label>
                <input
                  type="number"
                  value={formData.totalAmount}
                  onChange={(e) => {
                    const t = e.target.value;
                    const a = formData.advanceAmount;
                    setFormData({
                      ...formData,
                      totalAmount: t,
                      balanceAmount: String(Math.max(0, (parseInt(t, 10) || 0) - (parseInt(a, 10) || 0)))
                    });
                  }}
                  className="w-full bg-[#141414] border border-[#2E2E2E] rounded p-2 text-white text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Advance Received</label>
                <input
                  type="number"
                  value={formData.advanceAmount}
                  onChange={(e) => {
                    const a = e.target.value;
                    const t = formData.totalAmount;
                    setFormData({
                      ...formData,
                      advanceAmount: a,
                      balanceAmount: String(Math.max(0, (parseInt(t, 10) || 0) - (parseInt(a, 10) || 0)))
                    });
                  }}
                  className="w-full bg-[#141414] border border-[#2E2E2E] rounded p-2 text-emerald-400 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#8899A6] block mb-1">Balance Due</label>
                <input
                  type="number"
                  value={formData.balanceAmount}
                  onChange={(e) => setFormData({ ...formData, balanceAmount: e.target.value })}
                  className="w-full bg-[#141414] border border-[#2E2E2E] rounded p-2 text-amber-400 text-xs focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#222222]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              <Save className="w-4 h-4" />
              <span>Save Project</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
