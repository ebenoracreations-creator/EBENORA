import React from 'react';
import { PhoneCall, UserPlus, Globe, CheckCircle2, Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function MetricsOverview({ 
  stats, 
  projects, 
  onUpdateCallCount, 
  onOpenLeadsModal 
}) {
  const underCreationCount = projects.filter(p => p.status === 'under_creation').length;
  const completedCount = projects.filter(p => p.status === 'completed').length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* 1. Calls Done */}
      <div className="bg-[#121212] border border-[#222222] rounded-xl p-5 flex flex-col justify-between hover:border-[#333333] transition-all">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-[#8899A6]">
            Outreach Calls
          </span>
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <PhoneCall className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-baseline justify-between my-2">
          <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {stats.callsDone}
          </div>

          <div className="flex items-center gap-1 bg-[#1A1A1A] p-1 rounded-lg border border-[#2A2A2A]">
            <button
              type="button"
              onClick={() => onUpdateCallCount(-1)}
              title="Decrease Call Count"
              className="w-6 h-6 rounded bg-[#242424] hover:bg-red-500/20 text-[#8899A6] hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Minus className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => onUpdateCallCount(1)}
              title="Increase Call Count"
              className="w-6 h-6 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="pt-3 border-t border-[#1E1E1E] text-xs text-[#556070] flex items-center justify-between">
          <span>Client inquiries</span>
          <span className="text-amber-400/80 font-medium">Logged</span>
        </div>
      </div>

      {/* 2. Leads Created */}
      <div 
        onClick={onOpenLeadsModal}
        className="bg-[#121212] border border-[#222222] rounded-xl p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-[#8899A6]">
            Leads Created
          </span>
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
            <UserPlus className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-baseline justify-between my-2">
          <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {stats.leadsCreated}
          </div>
          <span className="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span>Manage</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>

        <div className="pt-3 border-t border-[#1E1E1E] text-xs text-[#556070] flex items-center justify-between">
          <span>Active Pipeline</span>
          <span className="text-cyan-400/80 font-medium">In Progress</span>
        </div>
      </div>

      {/* 3. Websites Under Creation */}
      <div className="bg-[#121212] border border-[#222222] rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-[#8899A6]">
            Under Creation
          </span>
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
            <Globe className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-baseline justify-between my-2">
          <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>{underCreationCount}</span>
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          </div>
          <span className="text-[11px] text-indigo-300/80 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
            In Build
          </span>
        </div>

        <div className="pt-3 border-t border-[#1E1E1E] text-xs text-[#556070] flex items-center justify-between">
          <span>Active projects</span>
          <span className="text-indigo-400/80 font-medium">Coding</span>
        </div>
      </div>

      {/* 4. Websites Completed */}
      <div className="bg-[#121212] border border-[#222222] rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-[#8899A6]">
            Websites Completed
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-baseline justify-between my-2">
          <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {completedCount}
          </div>
          <span className="text-[11px] text-emerald-300/80 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
            Delivered
          </span>
        </div>

        <div className="pt-3 border-t border-[#1E1E1E] text-xs text-[#556070] flex items-center justify-between">
          <span>Production Ready</span>
          <span className="text-emerald-400/80 font-medium">Live & Hosted</span>
        </div>
      </div>

    </div>
  );
}
