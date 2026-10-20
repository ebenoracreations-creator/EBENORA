import React, { useState } from 'react';
import { Search, Plus, Globe, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import ProjectCardRow from './ProjectCardRow';

export default function WebsiteProjects({
  projects,
  onEditProject,
  onDeleteProject,
  onToggleProjectStatus,
  onOpenPreview,
  onUpdateSeoChecklist,
  onTogglePaymentStatus,
  onToggleUrlMode,
  onAddNewProject,
  onUpdatePricingDirect
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((proj) => {
    const matchSearch =
      proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.url.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchSearch) return false;

    if (activeFilter === 'under_creation') return proj.status === 'under_creation';
    if (activeFilter === 'completed') return proj.status === 'completed';
    if (activeFilter === 'seo_active') return !proj.isInvitation && proj.seoStatus === 'in_progress';

    return true;
  });

  const underCreationCount = projects.filter(p => p.status === 'under_creation').length;
  const completedCount = projects.filter(p => p.status === 'completed').length;
  const seoActiveCount = projects.filter(p => !p.isInvitation && p.seoStatus === 'in_progress').length;

  return (
    <section className="space-y-4">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#121212] border border-[#222222] rounded-xl p-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Website Projects
            </h2>
            <span className="px-2 py-0.5 bg-cyan-400/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/20">
              {projects.length} Total
            </span>
          </div>
          <p className="text-xs text-[#8899A6]">
            Active client builds, domain pings, progress tracking, and search optimization.
          </p>
        </div>

        <button
          type="button"
          onClick={onAddNewProject}
          className="self-start md:self-auto px-4 py-2 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-semibold text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Website Project</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#121212] p-3 rounded-xl border border-[#222222]">
        
        {/* Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-[#222222] text-white'
                : 'text-[#8899A6] hover:text-white hover:bg-[#1A1A1A]'
            }`}
          >
            All Websites ({projects.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('under_creation')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeFilter === 'under_creation'
                ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                : 'text-[#8899A6] hover:text-amber-400 hover:bg-[#1A1A1A]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Under Creation ({underCreationCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('completed')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeFilter === 'completed'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'text-[#8899A6] hover:text-emerald-400 hover:bg-[#1A1A1A]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Completed ({completedCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('seo_active')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeFilter === 'seo_active'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'text-[#8899A6] hover:text-cyan-400 hover:bg-[#1A1A1A]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SEO Active ({seoActiveCount})</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-[#556070] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder-[#556070] focus:outline-none focus:border-cyan-500/60 transition-all"
          />
        </div>

      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCardRow
              key={project.id}
              project={project}
              onEdit={onEditProject}
              onDelete={onDeleteProject}
              onToggleStatus={onToggleProjectStatus}
              onOpenPreview={onOpenPreview}
              onUpdateSeoChecklist={onUpdateSeoChecklist}
              onTogglePaymentStatus={onTogglePaymentStatus}
              onToggleUrlMode={onToggleUrlMode}
              onUpdatePricingDirect={onUpdatePricingDirect}
            />
          ))}
        </div>
      ) : (
        <div className="bg-[#121212] border border-dashed border-[#262626] rounded-xl p-12 text-center space-y-3">
          <Globe className="w-10 h-10 text-[#556070] mx-auto" />
          <h3 className="text-base font-semibold text-white">No projects found</h3>
          <p className="text-xs text-[#8899A6] max-w-sm mx-auto">
            No projects match the current search or filter criteria.
          </p>
          <button
            type="button"
            onClick={onAddNewProject}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs rounded-lg transition-all"
          >
            Create Website Project
          </button>
        </div>
      )}

    </section>
  );
}
