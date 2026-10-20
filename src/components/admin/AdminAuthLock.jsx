import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, ShieldAlert } from 'lucide-react';

export default function AdminAuthLock({ onAuthenticate }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'EBENORA@2008') {
      setError(false);
      onAuthenticate();
    } else {
      setError(true);
      setErrorMessage('Access denied. Invalid password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background: faded logo watermark */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/images/logo.png)', backgroundSize: '60%' }}
      />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Auth Card */}
      <div className="relative w-full max-w-md bg-[#111111]/90 backdrop-blur-sm border border-[#262626] rounded-2xl shadow-2xl shadow-black/60 p-8 sm:p-10">
        
        {/* Logo + Brand */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="/images/logo.png"
            alt="Ebenora Creations"
            className="w-24 h-24 object-contain mb-5 drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          />
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Ebenora Creations
          </h1>
          <p className="text-sm text-[#8899A6] mt-1">Admin Panel</p>
          <div className="mt-3 px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            <p className="text-xs text-cyan-400 font-medium">Enter password to unlock admin suite</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Enter password..."
                autoFocus
                className={`w-full bg-[#1A1A1A] border ${
                  error 
                    ? 'border-red-500/60 text-red-400 focus:ring-red-500/30' 
                    : 'border-[#333] text-white focus:border-cyan-500/60 focus:ring-cyan-500/20'
                } rounded-xl p-4 pr-12 text-sm placeholder-[#4A5568] focus:outline-none focus:ring-2 transition-all`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#556070] hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-sm text-red-400">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 px-4 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25"
          >
            <span>Unlock Admin Suite</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
