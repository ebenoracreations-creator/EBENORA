import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getStoredWorks,
  saveWorkRecord,
  deleteWorkRecord,
  getNextWorkId,
  WORK_CATEGORIES,
  exportWorksToJSON
} from '../utils/workDatabase';
import EbenoraWorkCard from '../components/workcard/EbenoraWorkCard';
import WorkCardEditor from '../components/workcard/WorkCardEditor';
import WorkArchiveModal from '../components/workcard/WorkArchiveModal';
import {
  Printer,
  Download,
  Layers,
  ArrowLeft,
  Sparkles,
  LayoutTemplate,
  CheckCircle,
  FolderArchive,
  Eye,
  Edit3
} from 'lucide-react';

export default function WorkCardGeneratorPage() {
  const [works, setWorks] = useState(() => getStoredWorks());
  const [orientation, setOrientation] = useState('landscape'); // 'landscape' | 'portrait'
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('editor'); // for mobile: 'editor' | 'preview'
  const [showSaveToast, setShowSaveToast] = useState(false);

  // Initialize fresh active work
  const createNewWork = (categoryKey = 'graphic_design') => {
    const nextId = getNextWorkId(categoryKey, works);
    const catObj = WORK_CATEGORIES.find((c) => c.key === categoryKey);

    return {
      id: nextId,
      category: categoryKey,
      title: 'Luxury Brand Identity & Digital Assets',
      clientName: '',
      clientCompany: '',
      dateCreated: new Date().toISOString().split('T')[0],
      deliveryDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      deliverables: [...(catObj?.defaultDeliverables || ['Primary Logo Suite', 'Print Vector Assets'])],
      specs: {
        resolution: '300 DPI CMYK / 4K UHD',
        format: 'Master Vector SVG, AI, High-Res PDF',
        turnaround: '7 Days'
      },
      financials: {
        currency: '₹',
        totalAmount: '25000',
        advancePaid: '15000',
        balanceDue: '10000',
        paymentStatus: 'Advance Received'
      },
      notes: 'Certified studio deliverable produced by Ebenora Creations. Complete ownership rights transferred to client upon final balance settlement.',
      qrPayload: 'https://ebenoracreations.com/'
    };
  };

  const [currentWork, setCurrentWork] = useState(() => {
    // If works exist, start with a fresh new one or load latest
    return createNewWork('graphic_design');
  });

  // Save current work to database
  const handleSave = () => {
    const updatedList = saveWorkRecord(currentWork);
    setWorks(updatedList);
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  // Reset to brand new work card
  const handleNew = () => {
    const fresh = createNewWork(currentWork.category || 'graphic_design');
    setCurrentWork(fresh);
  };

  // Duplicate an existing work as new
  const handleDuplicate = (sourceWork) => {
    const nextId = getNextWorkId(sourceWork.category, works);
    const duplicated = {
      ...sourceWork,
      id: nextId,
      title: `${sourceWork.title} (Copy)`,
      dateCreated: new Date().toISOString().split('T')[0]
    };
    const updatedList = saveWorkRecord(duplicated);
    setWorks(updatedList);
    setCurrentWork(duplicated);
  };

  // Delete work from database
  const handleDelete = (workId) => {
    const updatedList = deleteWorkRecord(workId);
    setWorks(updatedList);
    if (currentWork.id === workId) {
      handleNew();
    }
  };

  // Select work from archive modal
  const handleSelectWork = (selectedWork) => {
    setCurrentWork(selectedWork);
  };

  // Refresh works list
  const handleRefreshWorks = () => {
    setWorks(getStoredWorks());
  };

  // Trigger high-resolution print / PDF download
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#D7E2EA] font-['Kanit',sans-serif] pb-16">
      {/* ================= TOP STUDIO NAVIGATION ================= */}
      <header className="sticky top-0 z-40 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#222222] px-4 sm:px-8 py-3.5 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3.5">
            <Link
              to="/admin"
              className="p-2 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#2D2D2D] text-zinc-400 hover:text-white transition-all flex items-center space-x-1"
              title="Return to Admin Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Admin</span>
            </Link>

            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] p-1.5 border border-[#D9B15F]/40 flex items-center justify-center shadow-md">
              <img src="/images/logo.png" alt="Ebenora Logo" className="w-full h-full object-contain" />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-sm sm:text-base tracking-wider uppercase">
                  EBENORA <span className="text-[#D9B15F]">WORK CARD</span> GENERATOR
                </span>
                <span className="hidden md:inline-flex text-[10px] px-2 py-0.5 rounded-full bg-[#D9B15F]/15 border border-[#D9B15F]/40 text-[#F1D38A] font-mono">
                  v1.0 Local DB
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block">
                Create luxury deliverable cards with auto-increment IDs &amp; high-res PDF print.
              </p>
            </div>
          </div>

          {/* Top Controls & Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Orientation Toggle */}
            <div className="hidden lg:flex items-center p-0.5 bg-[#141414] rounded-lg border border-[#262626] text-xs">
              <button
                onClick={() => setOrientation('landscape')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  orientation === 'landscape'
                    ? 'bg-[#D9B15F] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Landscape
              </button>
              <button
                onClick={() => setOrientation('portrait')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  orientation === 'portrait'
                    ? 'bg-[#D9B15F] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Portrait
              </button>
            </div>

            {/* Archive Vault Button */}
            <button
              onClick={() => setIsArchiveOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#333333] text-xs font-semibold text-zinc-200 transition-all shadow-sm"
              title="Open Local Works Archive Vault"
            >
              <FolderArchive className="w-3.5 h-3.5 text-[#D9B15F]" />
              <span>Vault ({works.length})</span>
            </button>

            {/* Print / Download PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D9B15F] to-[#C9973E] hover:from-[#c9973e] hover:to-[#b8852c] text-black font-bold text-xs transition-all shadow-lg shadow-[#D9B15F]/20 active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Save Toast Notification */}
      {showSaveToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/60 text-emerald-200 text-xs shadow-2xl animate-bounce">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>Work record successfully saved to laptop database!</span>
        </div>
      )}

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex items-center justify-center p-2 bg-[#111111] border-b border-[#222222] no-print">
        <div className="flex p-1 bg-[#1A1A1A] rounded-xl border border-[#333333] w-full max-w-xs">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'editor' ? 'bg-[#D9B15F] text-black shadow' : 'text-zinc-400'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Card Editor</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'preview' ? 'bg-[#D9B15F] text-black shadow' : 'text-zinc-400'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Card</span>
          </button>
        </div>
      </div>

      {/* ================= MAIN SPLIT CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Editor Controls */}
          <div
            className={`lg:col-span-5 space-y-6 ${
              activeTab === 'preview' ? 'hidden lg:block' : 'block'
            }`}
          >
            <WorkCardEditor
              work={currentWork}
              onChange={setCurrentWork}
              onSave={handleSave}
              onNew={handleNew}
              onOpenArchive={() => setIsArchiveOpen(true)}
              onPrint={handlePrint}
              allWorks={works}
            />
          </div>

          {/* Right Column: Live Luxury Card Preview */}
          <div
            className={`lg:col-span-7 space-y-4 ${
              activeTab === 'editor' ? 'hidden lg:block' : 'block'
            }`}
          >
            {/* Preview Toolbar */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#121212] border border-[#222222] no-print">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Live Card Preview
                </span>
                <span className="text-[11px] text-zinc-500">
                  ({orientation === 'landscape' ? 'Landscape 16:10' : 'Portrait Letter'})
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-1 text-xs text-[#D9B15F] hover:text-[#f1d38a] font-semibold transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Media Print / PDF</span>
                </button>
              </div>
            </div>

            {/* Rendered Luxury Card */}
            <div className="sticky top-20">
              <EbenoraWorkCard work={currentWork} orientation={orientation} />

              <div className="mt-4 text-center text-xs text-zinc-500 no-print flex items-center justify-center space-x-4">
                <span>Tip: Click <strong>Download PDF</strong> to export at 300+ DPI vector quality.</span>
                <span>&bull;</span>
                <span>Work ID: <strong className="text-[#D9B15F] font-mono">{currentWork.id}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ================= WORK ARCHIVE MODAL ================= */}
      <WorkArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        works={works}
        onSelectWork={handleSelectWork}
        onDuplicateWork={handleDuplicate}
        onDeleteWork={handleDelete}
        onRefreshWorks={handleRefreshWorks}
      />
    </div>
  );
}
