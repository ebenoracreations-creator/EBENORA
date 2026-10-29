import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getStoredWorks,
  saveWorkRecord,
  deleteWorkRecord,
  getNextWorkId,
  getNextInvoiceNumber,
  WORK_CATEGORIES
} from '../utils/workDatabase';
import { exportInvoiceToExcel } from '../utils/excelExporter';
import EbenoraWorkCard from '../components/workcard/EbenoraWorkCard';
import WorkCardEditor from '../components/workcard/WorkCardEditor';
import EbenoraInvoiceDocument from '../components/workcard/EbenoraInvoiceDocument';
import InvoiceEditor from '../components/workcard/InvoiceEditor';
import WorkArchiveModal from '../components/workcard/WorkArchiveModal';
import {
  Printer,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  FolderArchive,
  Eye,
  Edit3,
  FileSpreadsheet,
  Award
} from 'lucide-react';

export default function WorkCardGeneratorPage() {
  const [works, setWorks] = useState(() => getStoredWorks());
  // Template format: 'invoice' (Official Sample Layout) or 'card' (Delivery Card Layout)
  const [docFormat, setDocFormat] = useState('invoice');
  const [invoiceTheme, setInvoiceTheme] = useState('white'); // 'white' (default) | 'dark'
  const [orientation, setOrientation] = useState('landscape'); // for card format
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('editor'); // for mobile: 'editor' | 'preview'
  const [showSaveToast, setShowSaveToast] = useState(false);

  // Initialize Invoice State (defaults to Brownlights Media sample or fresh invoice)
  const createNewInvoice = (categoryKey = 'web_development', docType = 'INVOICE') => {
    const nextNum = getNextInvoiceNumber(categoryKey, docType, works);
    const catObj = WORK_CATEGORIES.find((c) => c.key === categoryKey) || WORK_CATEGORIES[0];

    return {
      id: nextNum,
      invoiceNo: nextNum,
      docType: docType, // 'INVOICE' | 'QUOTATION'
      category: categoryKey,
      categoryCode: catObj.code,
      subtitle: catObj.subtitle,
      title: catObj.label,
      projectType: 'Business Website',
      projectStatus: 'Ready to launch',
      clientName: 'Brownlights Media',
      clientCompany: 'BROWNLIGHTS MEDIA',
      clientLocation: 'Kozhikode Kerala',
      dateCreated: '15 Oct 2026',
      dueDate: '—',
      currency: '₹',
      contact: {
        email: 'ebenoracretion@gmail.com',
        phone: '9037352739',
        website: 'www.ebenoracreations.com',
        location: 'Kerala, India'
      },
      lineItems: [
        {
          id: 1,
          no: 1,
          title: 'Original Quotation',
          subtitle: '(Initial discussion and proposed cost)',
          amount: 12000,
          type: 'charge'
        },
        {
          id: 2,
          no: 2,
          title: 'Revised Development Cost',
          subtitle: '(First two website versions failed – design and functionality issues)',
          amount: 15000,
          type: 'charge'
        },
        {
          id: 3,
          no: 3,
          title: 'Additional Page',
          subtitle: '(As per client’s request)',
          amount: 2500,
          type: 'charge'
        },
        {
          id: 4,
          no: 4,
          title: 'Total Project Valuation',
          subtitle: '(Original quote + revised cost + additional page)',
          amount: 17500,
          type: 'valuation'
        },
        {
          id: 5,
          no: 5,
          title: 'Special Discount',
          subtitle: '(Token of appreciation)',
          amount: -1500,
          type: 'discount'
        }
      ],
      finalCost: 16000,
      advancePaidItem: {
        no: 6,
        title: 'Advance Already Paid',
        subtitle: '(Received from client)',
        amount: -6000
      },
      balanceDue: 10000,
      specialOffer: {
        enabled: true,
        title: 'SPECIAL OFFER — A TOKEN OF APPRECIATION',
        description: 'As a token of appreciation, we are providing you with a 3-Month SEO Support Plan (worth ₹3,000) completely free.'
      }
    };
  };

  // Initialize Card State
  const createNewWorkCard = (categoryKey = 'graphic_design') => {
    const nextId = getNextWorkId(categoryKey, works);
    const catObj = WORK_CATEGORIES.find((c) => c.key === categoryKey) || WORK_CATEGORIES[0];

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

  // Current active invoice
  const [currentInvoice, setCurrentInvoice] = useState(() => {
    const seed = works.find((w) => w.id === 'EC/WD/2026/016' || w.invoiceNo === 'EC/WD/2026/016');
    return seed || createNewInvoice('web_development', 'INVOICE');
  });

  // Current active card
  const [currentWorkCard, setCurrentWorkCard] = useState(() => createNewWorkCard('graphic_design'));

  // Save current active document to laptop database
  const handleSave = () => {
    const docToSave = docFormat === 'invoice' ? currentInvoice : currentWorkCard;
    const updatedList = saveWorkRecord(docToSave);
    setWorks(updatedList);
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  // Create new active document
  const handleNew = () => {
    if (docFormat === 'invoice') {
      const fresh = createNewInvoice(currentInvoice.category || 'web_development', currentInvoice.docType || 'INVOICE');
      setCurrentInvoice(fresh);
    } else {
      const fresh = createNewWorkCard(currentWorkCard.category || 'graphic_design');
      setCurrentWorkCard(fresh);
    }
  };

  // Duplicate document
  const handleDuplicate = (sourceDoc) => {
    if (sourceDoc.lineItems || sourceDoc.invoiceNo) {
      const nextNum = getNextInvoiceNumber(sourceDoc.category || 'web_development', sourceDoc.docType || 'INVOICE', works);
      const duplicated = {
        ...sourceDoc,
        id: nextNum,
        invoiceNo: nextNum,
        title: `${sourceDoc.title || 'Project'} (Copy)`,
        dateCreated: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      };
      const updatedList = saveWorkRecord(duplicated);
      setWorks(updatedList);
      setCurrentInvoice(duplicated);
      setDocFormat('invoice');
    } else {
      const nextId = getNextWorkId(sourceDoc.category, works);
      const duplicated = {
        ...sourceDoc,
        id: nextId,
        title: `${sourceDoc.title} (Copy)`,
        dateCreated: new Date().toISOString().split('T')[0]
      };
      const updatedList = saveWorkRecord(duplicated);
      setWorks(updatedList);
      setCurrentWorkCard(duplicated);
      setDocFormat('card');
    }
  };

  // Delete document
  const handleDelete = (docId) => {
    const updatedList = deleteWorkRecord(docId);
    setWorks(updatedList);
    if (currentInvoice.id === docId || currentWorkCard.id === docId) {
      handleNew();
    }
  };

  // Select document from archive modal
  const handleSelectWork = (selectedDoc) => {
    if (selectedDoc.lineItems || selectedDoc.invoiceNo) {
      setCurrentInvoice(selectedDoc);
      setDocFormat('invoice');
    } else {
      setCurrentWorkCard(selectedDoc);
      setDocFormat('card');
    }
  };

  // Trigger high-resolution media print / PDF download
  const handlePrint = () => {
    setActiveTab('preview');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#D7E2EA] font-['Kanit',sans-serif] pb-16">
      {/* ================= TOP STUDIO NAVIGATION ================= */}
      <header className="sticky top-0 z-40 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#222222] px-4 sm:px-8 py-3 no-print print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center space-x-2.5">
              <Link
                to="/admin"
                className="p-1.5 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#2D2D2D] text-zinc-400 hover:text-white transition-all flex items-center space-x-1"
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
                    EBENORA <span className="text-[#D9B15F]">STUDIO</span> GENERATOR
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400 hidden sm:block">
                  Auto-calculates valuation, discounts, advance, and exports pixel-perfect PDF.
                </p>
              </div>
            </div>

            {/* Template Format Switcher (Invoice vs Card) */}
            <div className="flex p-0.5 bg-[#141414] rounded-xl border border-[#262626]">
              <button
                onClick={() => setDocFormat('invoice')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  docFormat === 'invoice'
                    ? 'bg-[#D9B15F] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Invoice &amp; Quote</span>
              </button>
              <button
                onClick={() => setDocFormat('card')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  docFormat === 'card'
                    ? 'bg-[#D9B15F] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Delivery Card</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
            {/* Card Orientation Toggle (Visible only in Card mode) */}
            {docFormat === 'card' && (
              <div className="hidden lg:flex items-center p-0.5 bg-[#141414] rounded-lg border border-[#262626] text-xs">
                <button
                  onClick={() => setOrientation('landscape')}
                  className={`px-2 py-0.5 rounded-md ${
                    orientation === 'landscape' ? 'bg-[#D9B15F] text-black font-semibold' : 'text-zinc-400'
                  }`}
                >
                  Landscape
                </button>
                <button
                  onClick={() => setOrientation('portrait')}
                  className={`px-2 py-0.5 rounded-md ${
                    orientation === 'portrait' ? 'bg-[#D9B15F] text-black font-semibold' : 'text-zinc-400'
                  }`}
                >
                  Portrait
                </button>
              </div>
            )}

            {/* Export Excel (.xlsx) */}
            {docFormat === 'invoice' && (
              <button
                onClick={() => exportInvoiceToExcel(currentInvoice)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-500/60 text-emerald-300 font-semibold text-xs transition-all shadow-sm"
                title="Save & Export this Invoice/Quotation as an Excel Sheet (.xlsx)"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Export Excel</span>
              </button>
            )}

            {/* Archive Vault Button */}
            <button
              onClick={() => setIsArchiveOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#333333] text-xs font-semibold text-zinc-200 transition-all shadow-sm"
            >
              <FolderArchive className="w-3.5 h-3.5 text-[#D9B15F]" />
              <span>Vault ({works.length})</span>
            </button>

            {/* Print / Download PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#D9B15F] to-[#C9973E] hover:from-[#c9973e] hover:to-[#b8852c] text-black font-bold text-xs transition-all shadow-lg shadow-[#D9B15F]/20 active:scale-95"
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
          <span>Document saved to laptop database!</span>
        </div>
      )}

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex items-center justify-center p-2 bg-[#111111] border-b border-[#222222] no-print print:hidden">
        <div className="flex p-1 bg-[#1A1A1A] rounded-xl border border-[#333333] w-full max-w-xs">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'editor' ? 'bg-[#D9B15F] text-black shadow' : 'text-zinc-400'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Editor</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'preview' ? 'bg-[#D9B15F] text-black shadow' : 'text-zinc-400'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Document</span>
          </button>
        </div>
      </div>

      {/* ================= MAIN SPLIT CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 print:!p-0 print:!m-0 print:!max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start print:!block">
          {/* Left Column: Editor Controls */}
          <div
            id="workcard-editor-column"
            className={`lg:col-span-5 space-y-6 no-print print:hidden ${
              activeTab === 'preview' ? 'hidden lg:block' : 'block'
            }`}
          >
            {docFormat === 'invoice' ? (
              <InvoiceEditor
                invoice={currentInvoice}
                onChange={setCurrentInvoice}
                onSave={handleSave}
                onNew={handleNew}
                onOpenArchive={() => setIsArchiveOpen(true)}
                onPrint={handlePrint}
                allWorks={works}
              />
            ) : (
              <WorkCardEditor
                work={currentWorkCard}
                onChange={setCurrentWorkCard}
                onSave={handleSave}
                onNew={handleNew}
                onOpenArchive={() => setIsArchiveOpen(true)}
                onPrint={handlePrint}
                allWorks={works}
              />
            )}
          </div>

          {/* Right Column: Live Luxury Preview */}
          <div
            id="workcard-preview-column"
            className={`lg:col-span-7 space-y-4 print:!block print:!w-full print:!m-0 print:!p-0 ${
              activeTab === 'editor' ? 'hidden lg:block' : 'block'
            }`}
          >
            {/* Preview Toolbar */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#121212] border border-[#222222] no-print print:hidden">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Live Preview: {docFormat === 'invoice' ? (currentInvoice.docType || 'INVOICE') : 'WORK CARD'}
                </span>
                <span className="text-[11px] text-[#D9B15F] font-mono">
                  {docFormat === 'invoice' ? currentInvoice.invoiceNo : currentWorkCard.id}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* Theme Selector for Invoice */}
                {docFormat === 'invoice' && (
                  <div className="flex p-0.5 bg-[#1C1C1C] rounded-lg border border-[#333333] text-xs mr-1">
                    <button
                      onClick={() => setInvoiceTheme('white')}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                        invoiceTheme === 'white'
                          ? 'bg-white text-black font-bold shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                      title="Switch to Crisp White Executive Theme (Printer Friendly)"
                    >
                      ☀️ White Theme
                    </button>
                    <button
                      onClick={() => setInvoiceTheme('dark')}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                        invoiceTheme === 'dark'
                          ? 'bg-[#D9B15F] text-black font-bold shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                      title="Switch to Dark Obsidian Theme"
                    >
                      🌙 Dark Theme
                    </button>
                  </div>
                )}

                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-1 text-xs text-[#D9B15F] hover:text-[#f1d38a] font-semibold transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Media Print / PDF</span>
                </button>
              </div>
            </div>

            {/* Rendered Document */}
            <div className="sticky top-20 print:static print:top-0 print:m-0 print:p-0">
              {docFormat === 'invoice' ? (
                <EbenoraInvoiceDocument invoice={currentInvoice} theme={invoiceTheme} />
              ) : (
                <EbenoraWorkCard work={currentWorkCard} orientation={orientation} />
              )}

              <div className="mt-4 text-center text-xs text-zinc-500 no-print print:hidden flex items-center justify-center space-x-4">
                <span>Tip: Click <strong>Download PDF</strong> to export clean A4 vector PDF.</span>
                <span>&bull;</span>
                <span>Target: <strong className="text-white">{docFormat === 'invoice' ? (currentInvoice.clientCompany || currentInvoice.clientName) : currentWorkCard.clientName}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ================= WORK ARCHIVE VAULT MODAL ================= */}
      <WorkArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        works={works}
        onSelectWork={handleSelectWork}
        onDuplicateWork={handleDuplicate}
        onDeleteWork={handleDelete}
        onRefreshWorks={() => setWorks(getStoredWorks())}
      />
    </div>
  );
}
