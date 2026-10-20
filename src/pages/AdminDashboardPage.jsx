import React, { useState, useEffect } from 'react';
import AdminAuthLock from '../components/admin/AdminAuthLock';
import AdminHeader from '../components/admin/AdminHeader';
import MetricsOverview from '../components/admin/MetricsOverview';
import WebsiteProjects from '../components/admin/WebsiteProjects';
import GraphicDesignQueue from '../components/admin/GraphicDesignQueue';
import LiveStatusModal from '../components/admin/LiveStatusModal';
import ProjectEditModal from '../components/admin/ProjectEditModal';
import GraphicTaskModal from '../components/admin/GraphicTaskModal';
import LeadsCallsModal from '../components/admin/LeadsCallsModal';
import { INITIAL_ADMIN_DATA } from '../data/adminInitialData';

const STORAGE_KEY = 'ebenora_admin_data_v1';
const AUTH_KEY = 'ebenora_admin_authenticated';

export default function AdminDashboardPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  });

  // Admin Data State
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading stored admin data:', e);
    }
    return INITIAL_ADMIN_DATA;
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error persisting admin data:', e);
    }
  }, [data]);

  // Modals state
  const [previewProject, setPreviewProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null); // null or project object (or 'new')
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null); // null or task object (or 'new')
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);

  // Authentication Handlers
  const handleAuthenticate = () => {
    sessionStorage.setItem(AUTH_KEY, 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  // Export JSON Backup
  const handleExportData = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute(
      'download',
      `ebenora-admin-backup-${new Date().toISOString().split('T')[0]}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON Backup
  const handleImportData = (importedData) => {
    if (importedData && importedData.projects && importedData.stats) {
      setData(importedData);
      alert('Data backup successfully restored!');
    } else {
      alert('Corrupted or unrecognized backup structure.');
    }
  };

  // Reset to Factory Seed
  const handleResetDefaults = () => {
    if (window.confirm('Reset all admin records back to default Ebenora Creations portfolio seed data?')) {
      setData(INITIAL_ADMIN_DATA);
    }
  };

  // Call Count updater
  const handleUpdateCallCount = (delta) => {
    setData((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        callsDone: Math.max(0, (prev.stats.callsDone || 0) + delta)
      }
    }));
  };

  // Project Handlers
  const handleSaveProject = (savedProject) => {
    setData((prev) => {
      const exists = prev.projects.some((p) => p.id === savedProject.id);
      let updatedProjects;
      if (exists) {
        updatedProjects = prev.projects.map((p) => (p.id === savedProject.id ? savedProject : p));
      } else {
        updatedProjects = [savedProject, ...prev.projects];
      }
      return { ...prev, projects: updatedProjects };
    });
    setIsProjectModalOpen(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this website project?')) {
      setData((prev) => ({
        ...prev,
        projects: prev.projects.filter((p) => p.id !== projectId)
      }));
    }
  };

  const handleToggleProjectStatus = (projectId) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => {
        if (p.id === projectId) {
          const nextStatus = p.status === 'completed' ? 'under_creation' : 'completed';
          return {
            ...p,
            status: nextStatus,
            progress: nextStatus === 'completed' ? 100 : 65
          };
        }
        return p;
      })
    }));
  };

  const handleToggleUrlMode = (projectId) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            activeUrlType: p.activeUrlType === 'localhost' ? 'live' : 'localhost'
          };
        }
        return p;
      })
    }));
  };

  const handleUpdateSeoChecklist = (projectId, key, value) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => {
        if (p.id === projectId) {
          const updatedChecklist = {
            ...(p.seoChecklist || {}),
            [key]: value
          };
          // If all items checked, complete
          const allDone = Object.values(updatedChecklist).every(Boolean);
          return {
            ...p,
            seoChecklist: updatedChecklist,
            seoStatus: allDone ? 'completed' : 'in_progress'
          };
        }
        return p;
      })
    }));
  };

  const handleTogglePaymentStatus = (projectId) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => {
        if (p.id === projectId) {
          const isPaid = p.payment?.status === 'fully_paid';
          return {
            ...p,
            payment: {
              ...p.payment,
              status: isPaid ? 'advance_received' : 'fully_paid',
              balanceAmount: isPaid ? (p.payment?.advanceAmount || '20000') : '0',
              lastUpdated: new Date().toISOString().split('T')[0]
            }
          };
        }
        return p;
      })
    }));
  };

  // Direct Inline Price Updater for Websites ("EDIT PRIZE AND ALL")
  const handleUpdatePricingDirect = (projectId, updatedPayment) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            payment: updatedPayment
          };
        }
        return p;
      })
    }));
  };

  // Direct Inline Price Updater for Graphic Tasks
  const handleUpdateTaskPriceDirect = (taskId, newPrice) => {
    setData((prev) => ({
      ...prev,
      graphicTasks: prev.graphicTasks.map((t) => {
        if (t.id === taskId) {
          return {
            ...t,
            price: String(parseInt(newPrice, 10) || 0)
          };
        }
        return t;
      })
    }));
  };

  // Graphic Design Task Handlers
  const handleSaveGraphicTask = (savedTask) => {
    setData((prev) => {
      const exists = prev.graphicTasks.some((t) => t.id === savedTask.id);
      let updatedTasks;
      if (exists) {
        updatedTasks = prev.graphicTasks.map((t) => (t.id === savedTask.id ? savedTask : t));
      } else {
        updatedTasks = [savedTask, ...prev.graphicTasks];
      }
      return { ...prev, graphicTasks: updatedTasks };
    });
    setIsTaskModalOpen(false);
    setEditingTask(null);
  };

  const handleDeleteGraphicTask = (taskId) => {
    if (window.confirm('Delete this graphic design deliverable?')) {
      setData((prev) => ({
        ...prev,
        graphicTasks: prev.graphicTasks.filter((t) => t.id !== taskId)
      }));
    }
  };

  const handleToggleTaskStatus = (taskId) => {
    setData((prev) => ({
      ...prev,
      graphicTasks: prev.graphicTasks.map((t) => {
        if (t.id === taskId) {
          return {
            ...t,
            status: t.status === 'completed' ? 'pending' : 'completed'
          };
        }
        return t;
      })
    }));
  };

  // Leads & Call Logs Handlers
  const handleAddCallLog = (newCall) => {
    setData((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        callsDone: (prev.stats.callsDone || 0) + 1
      },
      callLogs: [newCall, ...(prev.callLogs || [])]
    }));
  };

  const handleDeleteCallLog = (callId) => {
    setData((prev) => ({
      ...prev,
      callLogs: prev.callLogs.filter((c) => c.id !== callId)
    }));
  };

  const handleAddLead = (newLead) => {
    setData((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        leadsCreated: (prev.stats.leadsCreated || 0) + 1
      },
      leads: [newLead, ...(prev.leads || [])]
    }));
  };

  const handleDeleteLead = (leadId) => {
    setData((prev) => ({
      ...prev,
      leads: prev.leads.filter((l) => l.id !== leadId)
    }));
  };

  const handleConvertLeadToProject = (lead) => {
    const newProj = {
      id: 'p_' + Date.now(),
      num: String(data.projects.length + 1).padStart(2, '0'),
      name: lead.name,
      client: lead.name,
      url: '',
      localhostUrl: 'http://localhost:5174',
      activeUrlType: 'localhost',
      category: lead.serviceRequested || 'Website Creation',
      isInvitation: false,
      status: 'under_creation',
      statusNote: 'Converted from lead pipeline. Initial setup.',
      progress: 20,
      seoStatus: 'in_progress',
      seoChecklist: {
        metaTags: false,
        sitemapSubmitted: false,
        googleSearchConsole: false,
        speedOptimization: false,
        backlinks: false
      },
      payment: {
        status: 'pending',
        totalAmount: lead.estimatedBudget || '₹45,000',
        advanceAmount: '₹0',
        balanceAmount: lead.estimatedBudget || '₹45,000',
        lastUpdated: new Date().toISOString().split('T')[0]
      }
    };

    setData((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects],
      leads: prev.leads.map((l) => (l.id === lead.id ? { ...l, status: 'converted' } : l))
    }));

    setIsLeadsModalOpen(false);
    alert(`Lead "${lead.name}" converted and added to Website Creation Hub!`);
  };

  // If locked, render authentication screen
  if (!isAuthenticated) {
    return <AdminAuthLock onAuthenticate={handleAuthenticate} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-cyan-400 selection:text-black">
      
      {/* Fixed Sticky Header */}
      <AdminHeader
        onLogout={handleLogout}
        onExportData={handleExportData}
        onImportData={handleImportData}
        onOpenNewProject={() => {
          setEditingProject(null);
          setIsProjectModalOpen(true);
        }}
        onOpenNewGraphicTask={() => {
          setEditingTask(null);
          setIsTaskModalOpen(true);
        }}
        onOpenLeadsModal={() => setIsLeadsModalOpen(true)}
        onResetDefaults={handleResetDefaults}
      />

      {/* Main Single-Page Admin Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
        
        {/* Top KPI Metrics Overview */}
        <MetricsOverview
          stats={data.stats}
          projects={data.projects}
          onUpdateCallCount={handleUpdateCallCount}
          onOpenLeadsModal={() => setIsLeadsModalOpen(true)}
          onOpenNewProject={() => {
            setEditingProject(null);
            setIsProjectModalOpen(true);
          }}
        />

        {/* 1. Main Focus: Website Creation & Projects Hub */}
        <WebsiteProjects
          projects={data.projects}
          onEditProject={(p) => {
            setEditingProject(p);
            setIsProjectModalOpen(true);
          }}
          onDeleteProject={handleDeleteProject}
          onToggleProjectStatus={handleToggleProjectStatus}
          onOpenPreview={(p) => setPreviewProject(p)}
          onUpdateSeoChecklist={handleUpdateSeoChecklist}
          onTogglePaymentStatus={handleTogglePaymentStatus}
          onToggleUrlMode={handleToggleUrlMode}
          onAddNewProject={() => {
            setEditingProject(null);
            setIsProjectModalOpen(true);
          }}
          onUpdatePricingDirect={handleUpdatePricingDirect}
        />

        {/* 2. Graphic Design Works Pending (Directly below websites) */}
        <GraphicDesignQueue
          graphicTasks={data.graphicTasks || []}
          onToggleTaskStatus={handleToggleTaskStatus}
          onEditTask={(t) => {
            setEditingTask(t);
            setIsTaskModalOpen(true);
          }}
          onDeleteTask={handleDeleteGraphicTask}
          onAddNewTask={() => {
            setEditingTask(null);
            setIsTaskModalOpen(true);
          }}
          onUpdateTaskPriceDirect={handleUpdateTaskPriceDirect}
        />

      </main>

      {/* Footer */}
      <footer className="w-full bg-[#080808] border-t border-[#1C1C1C] py-8 px-6 text-center text-xs text-[#718290]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono">
            EBENORA CREATIONS • EXECUTIVE ADMIN CONTROL CENTER
          </p>
          <div className="flex items-center gap-4">
            <a href="/" className="text-cyan-400 hover:underline">
              Return to Public Website →
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LiveStatusModal
        isOpen={Boolean(previewProject)}
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />

      <ProjectEditModal
        isOpen={isProjectModalOpen}
        project={editingProject}
        onClose={() => {
          setIsProjectModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
      />

      <GraphicTaskModal
        isOpen={isTaskModalOpen}
        task={editingTask}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSaveGraphicTask}
      />

      <LeadsCallsModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
        callLogs={data.callLogs || []}
        leads={data.leads || []}
        onAddCallLog={handleAddCallLog}
        onAddLead={handleAddLead}
        onDeleteCallLog={handleDeleteCallLog}
        onDeleteLead={handleDeleteLead}
        onConvertLeadToProject={handleConvertLeadToProject}
      />

    </div>
  );
}
