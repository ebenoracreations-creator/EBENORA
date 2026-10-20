import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Monitor, Smartphone, RefreshCw, AlertTriangle, Wifi, Server } from 'lucide-react';

export default function LiveStatusModal({ project, isOpen, onClose }) {
  const [deviceView, setDeviceView] = useState('desktop');
  const [activeUrlType, setActiveUrlType] = useState('live');
  const [pingStatus, setPingStatus] = useState('checking');
  const [pingLatency, setPingLatency] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);

  useEffect(() => {
    if (!project || !isOpen) return;
    setActiveUrlType(project.activeUrlType || 'live');
    checkConnection(project.activeUrlType === 'localhost' && project.localhostUrl ? project.localhostUrl : project.url);
  }, [project, isOpen]);

  const targetUrl = activeUrlType === 'localhost' && project?.localhostUrl ? project.localhostUrl : project?.url;

  const checkConnection = async (urlToCheck) => {
    if (!urlToCheck) {
      setPingStatus('offline');
      return;
    }
    setPingStatus('checking');
    const startTime = performance.now();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      await fetch(urlToCheck, {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const elapsed = Math.round(performance.now() - startTime);
      setPingLatency(elapsed);
      setPingStatus('running');
      setLastChecked(new Date().toLocaleTimeString());
    } catch {
      const img = new Image();
      const fallbackStart = performance.now();
      img.onload = () => {
        setPingLatency(Math.round(performance.now() - fallbackStart));
        setPingStatus('running');
        setLastChecked(new Date().toLocaleTimeString());
      };
      img.onerror = () => {
        const elapsed = Math.round(performance.now() - fallbackStart);
        if (elapsed < 3000 && !urlToCheck.includes('localhost')) {
          setPingLatency(elapsed);
          setPingStatus('running');
        } else {
          setPingStatus('offline');
        }
        setLastChecked(new Date().toLocaleTimeString());
      };
      img.src = `${urlToCheck.replace(/\/$/, '')}/favicon.ico?t=${Date.now()}`;
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#111111] border border-[#262626] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#161616] border-b border-[#222222] text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-bold text-xs">
              {project.num || '00'}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {project.name}
                </h3>
                {project.status === 'under_creation' ? (
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-medium rounded-full">
                    Under Creation
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-medium rounded-full">
                    Completed &amp; Live
                  </span>
                )}
              </div>
              <p className="text-xs text-[#8899A6] truncate max-w-md">
                {targetUrl || 'No URL assigned'}
              </p>
            </div>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-2">
            {/* Live / Localhost switch */}
            <div className="flex items-center bg-[#1A1A1A] p-1 rounded-lg border border-[#2E2E2E] text-xs">
              <button
                type="button"
                onClick={() => {
                  setActiveUrlType('live');
                  checkConnection(project.url);
                }}
                className={`px-3 py-1 font-medium rounded transition-all cursor-pointer ${
                  activeUrlType === 'live'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-[#8899A6] hover:text-white'
                }`}
              >
                Live URL
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveUrlType('localhost');
                  checkConnection(project.localhostUrl || 'http://localhost:8000');
                }}
                className={`px-3 py-1 font-medium rounded transition-all cursor-pointer ${
                  activeUrlType === 'localhost'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'text-[#8899A6] hover:text-white'
                }`}
              >
                Localhost
              </button>
            </div>

            {/* Viewport toggle */}
            <div className="hidden sm:flex items-center bg-[#1A1A1A] p-1 rounded-lg border border-[#2E2E2E] text-xs">
              <button
                type="button"
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded transition-all cursor-pointer ${
                  deviceView === 'desktop' ? 'bg-[#2A2A2A] text-white' : 'text-[#8899A6] hover:text-white'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded transition-all cursor-pointer ${
                  deviceView === 'mobile' ? 'bg-[#2A2A2A] text-white' : 'text-[#8899A6] hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Re-ping check */}
            <button
              type="button"
              onClick={() => checkConnection(targetUrl)}
              className="p-2 bg-[#1A1A1A] hover:bg-[#262626] text-[#8899A6] hover:text-white border border-[#2E2E2E] rounded-lg transition-colors cursor-pointer"
              title="Ping server"
            >
              <RefreshCw className={`w-4 h-4 ${pingStatus === 'checking' ? 'animate-spin' : ''}`} />
            </button>

            {/* External link */}
            {targetUrl && (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1A1A1A] hover:bg-[#262626] text-cyan-400 border border-[#2E2E2E] rounded-lg transition-colors cursor-pointer"
                title="Open in new window"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 bg-[#1A1A1A] hover:bg-red-500/20 text-[#8899A6] hover:text-red-400 border border-[#2E2E2E] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Diagnostics Strip */}
        <div className="px-6 py-2.5 bg-[#141414] border-b border-[#222222] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#8899A6] flex items-center gap-1.5 font-medium">
              <Wifi className="w-3.5 h-3.5 text-cyan-400" />
              Server Status:
            </span>

            {pingStatus === 'running' && (
              <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                Online ({pingLatency ? `${pingLatency}ms` : 'fast'})
              </span>
            )}

            {pingStatus === 'checking' && (
              <span className="px-2 py-0.5 bg-amber-500/15 text-amber-400 border border-amber-500/30 rounded-full font-medium">
                Pinging server...
              </span>
            )}

            {pingStatus === 'offline' && (
              <span className="px-2 py-0.5 bg-red-500/15 text-red-400 border border-red-500/30 rounded-full font-medium">
                Unreachable / Offline
              </span>
            )}
          </div>

          <div className="text-[11px] text-[#556070]">
            Last checked: {lastChecked || 'Active'}
          </div>
        </div>

        {/* Modal Body / Iframe View */}
        <div className="flex-1 bg-[#0D0D0D] p-4 flex items-center justify-center overflow-auto">
          {targetUrl ? (
            <div
              className={`transition-all duration-300 h-full bg-black border border-[#262626] rounded-xl overflow-hidden flex flex-col shadow-2xl ${
                deviceView === 'mobile' ? 'w-[390px] max-h-[740px]' : 'w-full'
              }`}
            >
              {/* Browser Header Strip */}
              <div className="px-4 py-2 bg-[#1A1A1A] border-b border-[#2A2A2A] flex items-center justify-between text-xs text-[#8899A6]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 bg-[#121212] text-[11px] font-mono text-cyan-400/90 rounded border border-[#2A2A2A] truncate max-w-sm">
                  {targetUrl}
                </div>
                <div className="w-8" />
              </div>

              {/* Iframe */}
              <div className="flex-1 relative bg-white">
                <iframe
                  src={targetUrl}
                  title={project.name}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          ) : (
            <div className="text-center p-8 bg-[#161616] border border-[#262626] rounded-xl">
              <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <p className="text-white font-semibold text-base">No URL configured</p>
              <p className="text-xs text-[#8899A6] mt-1">Configure localhost or production URL in project settings.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
