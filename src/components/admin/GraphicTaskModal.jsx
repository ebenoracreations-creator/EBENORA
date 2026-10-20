import React, { useState, useEffect } from 'react';
import { X, Save, Palette } from 'lucide-react';

export default function GraphicTaskModal({
  isOpen,
  onClose,
  task,
  onSave
}) {
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    priority: 'high',
    deadline: '',
    price: '15000',
    status: 'pending',
    description: ''
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        client: task.client || '',
        priority: task.priority || 'high',
        deadline: task.deadline || '',
        price: String(task.price || '15000').replace(/[^0-9]/g, ''),
        status: task.status || 'pending',
        description: task.description || ''
      });
    } else {
      setFormData({
        title: '',
        client: '',
        priority: 'high',
        deadline: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
        price: '12000',
        status: 'pending',
        description: ''
      });
    }
  }, [task, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSave({
      ...(task || { id: 'g_' + Date.now() }),
      ...formData,
      price: String(parseInt(formData.price, 10) || 0)
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161616] border-b border-[#222222] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white tracking-tight">
                {task ? 'Edit Graphic Task' : 'New Graphic Deliverable'}
              </h2>
              <p className="text-xs text-[#8899A6] mt-0.5">Asset specs, client, deadline &amp; pricing</p>
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-[#8899A6]">
              Deliverable Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. 3D Metallic Hero Badge & Studio Watermark"
              className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">
                Client / Project *
              </label>
              <input
                type="text"
                required
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="e.g. Brown Lights Media"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">
                Agreed Price (₹)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="15000"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-emerald-400 font-medium focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-white focus:outline-none"
              >
                <option value="urgent">Urgent</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Standard / Low</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#8899A6]">Target Delivery Date</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-[#8899A6]">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-white focus:outline-none"
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-[#8899A6]">
              Task Instructions &amp; Deliverable Format
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Provide color palettes, dimension requirements, vector file types (.svg/.png/.ai), etc."
              className="w-full bg-[#1A1A1A] border border-[#2E2E2E] focus:border-amber-500 rounded-lg p-2.5 text-white focus:outline-none transition-colors"
            />
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
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <Save className="w-4 h-4" />
              <span>Save Deliverable</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
