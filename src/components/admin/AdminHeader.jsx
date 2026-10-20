import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Upload, 
  Plus, 
  LogOut, 
  PhoneCall, 
  Palette, 
  RefreshCw,
  Clock,
  FileText
} from 'lucide-react';

export default function AdminHeader({ 
  onLogout, 
  onExportData, 
  onImportData, 
  onOpenNewProject, 
  onOpenNewGraphicTask,
  onOpenLeadsModal,
  onResetDefaults
}) {
  const [currentTime, setCurrentTime] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        onImportData(parsed);
      } catch {
        alert('Invalid JSON backup file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[#1E1E1E] px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Brand */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Ebenora Creations"
              className="w-9 h-9 object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white tracking-tight">
                  Ebenora <span className="text-cyan-400">Creations</span>
                </span>
                <span className="px-2 py-0.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-[10px] font-medium">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-[#556070] flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                <span>Outtech Pipeline · Active Development</span>
              </p>
            </div>
          </div>

          <div className="hidden sm:flex md:hidden items-center gap-1.5 text-xs text-[#8899A6] bg-[#1A1A1A] px-2.5 py-1.5 rounded-lg border border-[#262626]">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{currentTime}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-end gap-2 w-full md:w-auto">
          
          <div className="hidden lg:flex items-center gap-2 text-xs text-[#8899A6] bg-[#1A1A1A] px-3 py-1.5 rounded-lg border border-[#262626] mr-2">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{currentTime}</span>
          </div>

          {/* Work Cards Generator */}
          <Link
            to="/work-card"
            className="px-3 py-2 bg-gradient-to-r from-[#D9B15F] to-[#C9973E] hover:from-[#c9973e] hover:to-[#b8852c] text-black font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-[#D9B15F]/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Work Cards</span>
            <span className="sm:hidden">Cards</span>
          </Link>

          {/* New Website Project */}
          <button
            type="button"
            onClick={onOpenNewProject}
            className="px-3 sm:px-4 py-2 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Website</span>
          </button>

          {/* New Graphic Task */}
          <button
            type="button"
            onClick={onOpenNewGraphicTask}
            className="px-3 py-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/20"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Graphic Task</span>
            <span className="sm:hidden">Graphic</span>
          </button>

          {/* Calls & Leads */}
          <button
            type="button"
            onClick={onOpenLeadsModal}
            className="px-3 py-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-black font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Calls & Leads</span>
            <span className="sm:hidden">Calls</span>
          </button>

          {/* Export */}
          <button
            type="button"
            onClick={onExportData}
            title="Export JSON Backup"
            className="p-2 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white border border-[#262626] rounded-lg transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Import */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Import JSON Backup"
            className="p-2 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white border border-[#262626] rounded-lg transition-all cursor-pointer"
          >
            <Upload className="w-4 h-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Reset */}
          <button
            type="button"
            onClick={onResetDefaults}
            title="Reset to Factory Seed Data"
            className="p-2 bg-[#1A1A1A] hover:bg-orange-500/20 text-[#8899A6] hover:text-orange-400 border border-[#262626] rounded-lg transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={onLogout}
            title="Lock Panel"
            className="p-2 bg-[#1A1A1A] hover:bg-red-500/20 text-[#8899A6] hover:text-red-400 border border-[#262626] rounded-lg transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>

        </div>
      </div>
    </header>
  );
}
