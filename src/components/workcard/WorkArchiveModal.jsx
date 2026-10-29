import React, { useState, useMemo } from 'react';
import {
  WORK_CATEGORIES,
  exportWorksToJSON,
  importWorksFromJSON,
  getWorkStatistics
} from '../../utils/workDatabase';
import { exportAllInvoicesLedgerToExcel } from '../../utils/excelExporter';
import {
  X,
  Search,
  Filter,
  Download,
  Upload,
  Copy,
  Trash2,
  ExternalLink,
  Printer,
  FileCheck,
  Layers,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';

export default function WorkArchiveModal({
  isOpen,
  onClose,
  works = [],
  onSelectWork,
  onDuplicateWork,
  onDeleteWork,
  onRefreshWorks
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stats = useMemo(() => getWorkStatistics(works), [works]);

  // Filtered list
  const filteredWorks = useMemo(() => {
    return works.filter((w) => {
      const matchesCategory =
        selectedCategory === 'all' || w.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        (w.title && w.title.toLowerCase().includes(q)) ||
        (w.clientName && w.clientName.toLowerCase().includes(q)) ||
        (w.clientCompany && w.clientCompany.toLowerCase().includes(q)) ||
        (w.id && w.id.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [works, selectedCategory, searchQuery]);

  if (!isOpen) return null;

  // Handle file import
  const handleFileImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const result = importWorksFromJSON(content);
        if (result.success) {
          alert(`Successfully imported ${result.count} works into your local database!`);
          if (onRefreshWorks) onRefreshWorks();
        } else {
          alert(`Import failed: ${result.error}`);
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0E0E0E] border border-[#2E2E2E] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white font-['Kanit',sans-serif]">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#222222] flex items-center justify-between bg-gradient-to-r from-[#141414] to-[#0A0A0A]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D9B15F]/20 border border-[#D9B15F]/50 flex items-center justify-center">
              <Layers className="w-5 h-5 text-[#D9B15F]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-bold tracking-wide text-white">
                  Ebenora Studio Work Vault
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D9B15F]/20 border border-[#D9B15F]/60 text-[#F1D38A] font-mono font-bold">
                  {stats.totalWorks} Works Logged
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Laptop-resident database of all client deliverables, contracts &amp; project cards.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Export Master Excel Ledger */}
            <button
              onClick={() => exportAllInvoicesLedgerToExcel(works)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/60 text-xs font-semibold text-emerald-300 transition-all shadow-sm"
              title="Download Master Accounting Ledger (.xlsx) of all invoices & works"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Excel Ledger (.xlsx)</span>
            </button>

            {/* Export JSON */}
            <button
              onClick={() => exportWorksToJSON(works)}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#333333] text-xs font-semibold text-zinc-200 transition-all"
              title="Download full JSON database backup onto this laptop"
            >
              <Download className="w-3.5 h-3.5 text-[#D9B15F]" />
              <span className="hidden sm:inline">Export JSON</span>
            </button>

            {/* Import JSON */}
            <label className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#333333] text-xs font-semibold text-zinc-200 cursor-pointer transition-all">
              <Upload className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Import JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="hidden"
              />
            </label>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Metrics Pill Bar */}
        <div className="px-6 py-3 bg-[#111111] border-b border-[#222222] flex items-center space-x-2 overflow-x-auto text-xs scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#D9B15F] text-black shadow-md'
                : 'bg-[#1C1C1C] text-zinc-400 hover:text-white border border-[#2D2D2D]'
            }`}
          >
            All Works ({stats.totalWorks})
          </button>

          {WORK_CATEGORIES.map((cat) => {
            const count = stats.categoryBreakdown[cat.key] || 0;
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap border transition-all ${
                  isSelected
                    ? 'border-[#D9B15F] bg-[#D9B15F]/20 text-[#F1D38A]'
                    : 'border-[#262626] bg-[#161616] text-zinc-400 hover:text-white'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span>{cat.label}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px] font-mono">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 bg-[#0A0A0A] border-b border-[#222222] flex items-center space-x-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ID (e.g. EC-GD-001), Client, Company, or Project Title..."
              className="w-full bg-[#141414] border border-[#2D2D2D] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D9B15F]"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-zinc-400 hover:text-white px-2 py-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* Works Table / Card Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {filteredWorks.length === 0 ? (
            <div className="text-center py-16 text-zinc-500">
              <FileCheck className="w-12 h-12 mx-auto mb-3 opacity-30 text-[#D9B15F]" />
              <p className="text-sm">No works found matching your filter.</p>
              <p className="text-xs mt-1 text-zinc-600">
                Create a new card or reset search filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {filteredWorks.map((work) => {
                const catObj =
                  WORK_CATEGORIES.find((c) => c.key === work.category) ||
                  WORK_CATEGORIES[0];

                return (
                  <div
                    key={work.id}
                    className="p-4 rounded-xl bg-[#131313] border border-[#242424] hover:border-[#D9B15F]/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
                  >
                    {/* Left: ID & Main Info */}
                    <div className="flex items-start space-x-3.5 flex-1">
                      <div className="px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#333333] font-mono text-xs font-bold text-[#F1D38A] shrink-0 text-center">
                        {work.id}
                        <div
                          className="w-full h-1 mt-1 rounded-full"
                          style={{ backgroundColor: catObj.color }}
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-bold text-white group-hover:text-[#D9B15F] transition-colors">
                            {work.title}
                          </h3>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1C1C1C] border border-[#333333] text-zinc-300">
                            {catObj.label}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 text-xs text-zinc-400">
                          <span>
                            Client: <strong className="text-zinc-200">{work.clientName}</strong>
                            {work.clientCompany && ` (${work.clientCompany})`}
                          </span>
                          <span>&bull;</span>
                          <span>Issued: {work.dateCreated || 'N/A'}</span>
                          {work.financials?.totalAmount && (
                            <>
                              <span>&bull;</span>
                              <span className="font-mono text-[#D9B15F] font-semibold">
                                {work.financials.currency || '₹'} {work.financials.totalAmount}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Deliverables snippet */}
                        {work.deliverables && work.deliverables.length > 0 && (
                          <p className="text-[11px] text-zinc-500 line-clamp-1">
                            {work.deliverables.join(' • ')}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center space-x-2 shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-[#222222]">
                      <button
                        onClick={() => {
                          onSelectWork(work);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#D9B15F]/20 hover:bg-[#D9B15F] hover:text-black border border-[#D9B15F]/60 text-[#F1D38A] text-xs font-semibold transition-all flex items-center space-x-1"
                        title="Load into Card Preview & Editor"
                      >
                        <span>Open Card</span>
                      </button>

                      <button
                        onClick={() => onDuplicateWork(work)}
                        className="p-2 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] border border-[#333333] text-zinc-300 hover:text-white transition-all"
                        title="Duplicate as new work (auto-assigns next sequential ID)"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              `Are you sure you want to delete work record "${work.id} - ${work.title}"?`
                            )
                          ) {
                            onDeleteWork(work.id);
                          }
                        }}
                        className="p-2 rounded-lg bg-[#1C1C1C] hover:bg-rose-950/60 border border-[#333333] hover:border-rose-500 text-zinc-400 hover:text-rose-300 transition-all"
                        title="Delete record from laptop database"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#111111] border-t border-[#222222] flex items-center justify-between text-xs text-zinc-400">
          <div>
            Showing <strong className="text-white">{filteredWorks.length}</strong> of{' '}
            <strong className="text-white">{stats.totalWorks}</strong> total works in this laptop's vault.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2E2E2E] text-zinc-200 text-xs font-medium"
          >
            Close Vault
          </button>
        </div>
      </div>
    </div>
  );
}
