import React, { useState } from 'react';
import { X, PhoneCall, UserPlus, Plus, ArrowRight, Trash2 } from 'lucide-react';

export default function LeadsCallsModal({
  isOpen,
  onClose,
  callLogs,
  leads,
  onAddCallLog,
  onAddLead,
  onDeleteCallLog,
  onDeleteLead,
  onConvertLeadToProject
}) {
  const [activeTab, setActiveTab] = useState('calls');

  // Call Form
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [outcome, setOutcome] = useState('Interested');
  const [notes, setNotes] = useState('');
  const [nextFollowUp, setNextFollowUp] = useState('');

  // Lead Form
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [serviceRequested, setServiceRequested] = useState('3D Web Development');
  const [leadBudget, setLeadBudget] = useState('45000');

  if (!isOpen) return null;

  const handleCreateCall = (e) => {
    e.preventDefault();
    if (!clientName.trim()) return;
    onAddCallLog({
      id: 'c_' + Date.now(),
      clientName,
      phone,
      date: new Date().toISOString().split('T')[0],
      outcome,
      notes,
      nextFollowUp
    });
    setClientName('');
    setPhone('');
    setNotes('');
    setNextFollowUp('');
  };

  const handleCreateLead = (e) => {
    e.preventDefault();
    if (!leadName.trim()) return;
    onAddLead({
      id: 'l_' + Date.now(),
      name: leadName,
      phone: leadPhone,
      serviceRequested,
      status: 'hot',
      date: new Date().toISOString().split('T')[0],
      estimatedBudget: leadBudget || '40000'
    });
    setLeadName('');
    setLeadPhone('');
    setLeadBudget('45000');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161616] border-b border-[#222222] text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white tracking-tight">
                Client Calls &amp; Pipeline Leads
              </h2>
              <p className="text-xs text-[#8899A6] mt-0.5">
                Log conversation history and track potential new project leads
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white rounded-lg transition-colors cursor-pointer border border-[#2A2A2A]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-[#222222] bg-[#141414] text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('calls')}
            className={`py-2 px-4 font-medium rounded-t-lg transition-all cursor-pointer ${
              activeTab === 'calls'
                ? 'bg-[#1E1E1E] text-white border-t border-l border-r border-[#2E2E2E]'
                : 'text-[#8899A6] hover:text-white'
            }`}
          >
            Calls History ({callLogs.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('leads')}
            className={`py-2 px-4 font-medium rounded-t-lg transition-all cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-[#1E1E1E] text-white border-t border-l border-r border-[#2E2E2E]'
                : 'text-[#8899A6] hover:text-white'
            }`}
          >
            Active Leads ({leads.length})
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {activeTab === 'calls' ? (
            <div className="space-y-6">
              
              {/* Add Call Form */}
              <form onSubmit={handleCreateCall} className="bg-[#181818] border border-[#262626] rounded-xl p-4 space-y-3">
                <div className="text-xs font-medium text-amber-400 flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Log Client Call Record</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Client Name *"
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone / WhatsApp"
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  />
                  <select
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  >
                    <option value="Interested">Interested / Qualified</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Follow-up Needed">Follow-up Needed</option>
                    <option value="Declined">Not Interested</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Meeting summary / scope requested..."
                    className="sm:col-span-2 bg-[#141414] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  />
                  <input
                    type="date"
                    value={nextFollowUp}
                    onChange={(e) => setNextFollowUp(e.target.value)}
                    title="Next Follow-up Date"
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Save Call Record
                </button>
              </form>

              {/* Call History List */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-white tracking-wide">
                  Recent Call Records
                </h3>

                <div className="space-y-2">
                  {callLogs.map((c) => (
                    <div
                      key={c.id}
                      className="bg-[#161616] border border-[#222222] rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-[#2E2E2E] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{c.clientName}</span>
                          <span className="text-[#8899A6]">({c.phone || 'No phone'})</span>
                          <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-[10px] font-medium">
                            {c.outcome}
                          </span>
                        </div>
                        <p className="text-xs text-[#8899A6]">{c.notes}</p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right text-[11px] text-[#556070]">
                          <div>Called: {c.date}</div>
                          {c.nextFollowUp && <div className="text-amber-400/90">Follow-up: {c.nextFollowUp}</div>}
                        </div>

                        <button
                          type="button"
                          onClick={() => onDeleteCallLog(c.id)}
                          className="p-1.5 text-[#556070] hover:text-red-400 rounded transition-colors cursor-pointer"
                          title="Delete Call"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {callLogs.length === 0 && (
                    <div className="text-center py-6 text-xs text-[#556070]">
                      No call records logged yet.
                    </div>
                  )}
                </div>
              </div>

            </div>
          ) : (
            /* Leads View */
            <div className="space-y-6">
              
              {/* Add Lead Form */}
              <form onSubmit={handleCreateLead} className="bg-[#181818] border border-[#262626] rounded-xl p-4 space-y-3">
                <div className="text-xs font-medium text-cyan-400 flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Register Inbound Lead</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Prospect / Brand *"
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="Phone / WhatsApp"
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={serviceRequested}
                    onChange={(e) => setServiceRequested(e.target.value)}
                    placeholder="e.g. 3D Web Development"
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2 text-xs text-white focus:outline-none"
                  />
                  <input
                    type="number"
                    value={leadBudget}
                    onChange={(e) => setLeadBudget(e.target.value)}
                    placeholder="Est. Budget (₹)"
                    className="bg-[#141414] border border-[#2E2E2E] focus:border-cyan-500 rounded-lg p-2 text-xs text-emerald-400 font-medium focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Add to Leads Pipeline
                </button>
              </form>

              {/* Leads Pipeline List */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-white tracking-wide">
                  Active Leads Pipeline
                </h3>

                <div className="space-y-2">
                  {leads.map((l) => (
                    <div
                      key={l.id}
                      className="bg-[#161616] border border-[#222222] rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-[#2E2E2E] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{l.name}</span>
                          <span className="text-[#8899A6]">({l.phone || 'No phone'})</span>
                          <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-[10px] font-medium">
                            {l.serviceRequested}
                          </span>
                        </div>
                        <div className="text-xs text-[#8899A6]">
                          Est. Budget: <span className="text-emerald-400 font-medium">₹{(parseInt(l.estimatedBudget, 10) || 0).toLocaleString('en-IN')}</span> · Logged: {l.date}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => onConvertLeadToProject(l)}
                          className="px-3 py-1 bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 rounded-lg transition-colors flex items-center gap-1 cursor-pointer text-xs"
                          title="Convert to Active Website Project"
                        >
                          <span>Convert to Project</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onDeleteLead(l.id)}
                          className="p-1.5 text-[#556070] hover:text-red-400 rounded transition-colors cursor-pointer"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {leads.length === 0 && (
                    <div className="text-center py-6 text-xs text-[#556070]">
                      No active leads in pipeline.
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
