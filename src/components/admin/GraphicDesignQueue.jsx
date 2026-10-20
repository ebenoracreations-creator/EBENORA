import React, { useState } from 'react';
import { 
  Palette, 
  Plus, 
  CheckSquare, 
  Square, 
  Edit3, 
  Trash2, 
  Clock, 
  CheckCircle2, 
  Calendar,
  DollarSign,
  Save,
  Check
} from 'lucide-react';

export default function GraphicDesignQueue({
  graphicTasks,
  onToggleTaskStatus,
  onEditTask,
  onDeleteTask,
  onAddNewTask,
  onUpdateTaskPriceDirect
}) {
  const [filter, setFilter] = useState('pending');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskPriceInput, setTaskPriceInput] = useState('');

  const filteredTasks = graphicTasks.filter(task => {
    if (filter === 'pending') return task.status !== 'completed';
    if (filter === 'completed') return task.status === 'completed';
    return true;
  });

  const pendingCount = graphicTasks.filter(t => t.status !== 'completed').length;
  const completedCount = graphicTasks.filter(t => t.status === 'completed').length;

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'high':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'medium':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'low':
      default:
        return 'bg-[#222222] text-[#8899A6] border-[#333333]';
    }
  };

  const handleSavePrice = (task) => {
    if (onUpdateTaskPriceDirect) {
      onUpdateTaskPriceDirect(task.id, taskPriceInput);
    }
    setEditingTaskId(null);
  };

  return (
    <section className="space-y-4 pt-6 border-t border-[#1E1E1E]">
      
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#121212] border border-[#222222] rounded-xl p-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Graphic Design Queue
            </h2>
            <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20">
              {pendingCount} Pending
            </span>
          </div>
          <p className="text-xs text-[#8899A6]">
            Branding deliverables, logos, 3D assets, lookbooks, and promotional designs.
          </p>
        </div>

        <button
          type="button"
          onClick={onAddNewTask}
          className="self-start sm:self-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-semibold text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Graphic Work</span>
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center justify-between gap-3 bg-[#121212] p-3 rounded-xl border border-[#222222]">
        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              filter === 'pending'
                ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                : 'text-[#8899A6] hover:text-white hover:bg-[#1A1A1A]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Pending ({pendingCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('completed')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              filter === 'completed'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'text-[#8899A6] hover:text-white hover:bg-[#1A1A1A]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Completed ({completedCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#222222] text-white'
                : 'text-[#8899A6] hover:text-white hover:bg-[#1A1A1A]'
            }`}
          >
            All Works ({graphicTasks.length})
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTasks.map((task) => {
          const isDone = task.status === 'completed';
          const priceVal = parseInt(String(task.price || '0').replace(/[^0-9]/g, ''), 10) || 0;

          return (
            <div
              key={task.id}
              className={`bg-[#121212] border ${
                isDone 
                  ? 'border-[#1E1E1E] opacity-70' 
                  : 'border-[#222222] hover:border-[#333333]'
              } rounded-xl p-5 flex flex-col justify-between gap-4 transition-all`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => onToggleTaskStatus(task.id)}
                    className="mt-0.5 text-[#556070] hover:text-emerald-400 transition-colors shrink-0 cursor-pointer"
                    title={isDone ? 'Mark as Pending' : 'Mark as Done'}
                  >
                    {isDone ? (
                      <CheckSquare className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Square className="w-5 h-5 text-[#444] hover:text-white" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className={`text-sm font-semibold tracking-tight ${isDone ? 'line-through text-[#666]' : 'text-white'}`}>
                        {task.title}
                      </h3>
                      
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getPriorityBadge(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>

                    <p className="text-xs text-[#8899A6]">
                      Client: <span className="text-white/80 font-medium">{task.client}</span>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => onEditTask(task)}
                      className="p-1.5 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white rounded-lg transition-colors cursor-pointer border border-[#2A2A2A]"
                      title="Edit Task"
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteTask(task.id)}
                      className="p-1.5 bg-[#1A1A1A] hover:bg-red-500/20 text-[#8899A6] hover:text-red-400 rounded-lg transition-colors cursor-pointer border border-[#2A2A2A]"
                      title="Delete Task"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                {task.description && (
                  <div className="text-xs text-[#A0AEC0] mt-3 pl-8 bg-[#161616] border border-[#222222] rounded-lg p-2.5">
                    {task.description}
                  </div>
                )}
              </div>

              {/* Price & Deadline Row */}
              <div className="pt-3 border-t border-[#1E1E1E] flex flex-wrap items-center justify-between gap-3 text-xs pl-8">
                
                {/* Price Display & Editor */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#8899A6]">Price:</span>
                  {editingTaskId === task.id ? (
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-emerald-400 font-medium">₹</span>
                      <input
                        type="number"
                        value={taskPriceInput}
                        onChange={(e) => setTaskPriceInput(e.target.value)}
                        className="w-20 bg-[#1E1E1E] text-white border border-[#333333] rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-cyan-500"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => handleSavePrice(task)}
                        className="p-1 bg-cyan-500 hover:bg-cyan-400 text-black rounded transition-colors"
                        title="Save Price"
                      >
                        <Save className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingTaskId(task.id);
                        setTaskPriceInput(String(priceVal));
                      }}
                      className="text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-[#1A1A1A] hover:bg-[#222222] px-2 py-0.5 rounded border border-[#2A2A2A] transition-colors cursor-pointer"
                      title="Click to edit price"
                    >
                      ₹{priceVal.toLocaleString('en-IN')} ✎
                    </button>
                  )}
                </div>

                {/* Deadline & Status toggle */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[#8899A6] text-xs">
                    <Calendar className="w-3 h-3 text-amber-400/80" />
                    <span>{task.deadline || 'No deadline'}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleTaskStatus(task.id)}
                    className={`text-xs font-medium px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      isDone
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white border border-[#2E2E2E]'
                    }`}
                  >
                    {isDone ? 'Completed' : 'Mark Done'}
                  </button>
                </div>

              </div>

            </div>
          );
        })}

        {filteredTasks.length === 0 && (
          <div className="col-span-full bg-[#121212] border border-dashed border-[#222222] rounded-xl p-8 text-center space-y-2">
            <Palette className="w-7 h-7 text-[#556070] mx-auto" />
            <p className="text-xs text-[#8899A6]">No graphic tasks in this queue</p>
          </div>
        )}
      </div>

    </section>
  );
}
