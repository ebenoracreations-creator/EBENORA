import React, { useState } from 'react';
import { X, Globe, Smartphone, Monitor, ShoppingBag, Calendar, Camera, Heart, MessageCircle, MapPin, Sparkles } from 'lucide-react';

export default function LivePreviewModal({ project, onClose, onOpenQuote }) {
  const [deviceView, setDeviceView] = useState('desktop');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(`Hi! I'm testing the live demo for "${project.title}" on the AuraCraft website and I want a custom site built for my business!`);
  const whatsappUrl = `https://wa.me/18005552872?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[88vh] bg-[#F4F0EA] border-3 border-black rounded-3xl overflow-hidden flex flex-col shadow-[8px_8px_0px_0px_#000]">
        
        {/* Top Header Toolbar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#FFE600] border-b-3 border-black">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-black inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-black inline-block" />
            </div>
            
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-white border-2 border-black text-xs font-mono font-bold text-black">
              <Globe className="w-3.5 h-3.5 text-black" />
              <span>demo.{project.id}.auracraft.design</span>
            </div>
          </div>

          {/* Device Responsive Toggles */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border-2 border-black">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 font-bold transition-all ${
                deviceView === 'desktop' ? 'bg-[#00F0FF] text-black border border-black' : 'text-slate-600'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 font-bold transition-all ${
                deviceView === 'mobile' ? 'bg-[#00F0FF] text-black border border-black' : 'text-slate-600'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden md:inline">Mobile (375px)</span>
            </button>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white border-2 border-black text-black hover:bg-red-400 hover:text-white transition-colors shadow-[2px_2px_0px_0px_#000]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-slate-200 flex justify-center p-4">
          
          <div className={`transition-all duration-300 ${
            deviceView === 'mobile' 
              ? 'w-[375px] h-full bg-white rounded-3xl border-4 border-black overflow-y-auto shadow-2xl' 
              : 'w-full h-full bg-white rounded-2xl border-3 border-black overflow-y-auto'
          }`}>

            {/* DEMO: INVITATION SITE */}
            {project.id === 'invitation' && (
              <div className="p-6 text-center space-y-6 font-sans">
                <div className="pt-6 pb-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 border-2 border-black text-pink-600 text-xs font-mono font-bold mb-3">
                    <Heart className="w-3.5 h-3.5 fill-current" /> Celebration RSVP
                  </span>
                  <h1 className="text-3xl font-serif font-bold text-black mb-1">Sophia & Alexander</h1>
                  <p className="text-xs font-mono font-bold text-slate-600">October 24, 2026 • Grand Celebration</p>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center bg-[#FFE600] p-4 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                  <div><span className="block text-2xl font-black text-black">74</span><span className="text-[9px] font-mono font-bold uppercase">Days</span></div>
                  <div><span className="block text-2xl font-black text-black">18</span><span className="text-[9px] font-mono font-bold uppercase">Hours</span></div>
                  <div><span className="block text-2xl font-black text-black">42</span><span className="text-[9px] font-mono font-bold uppercase">Mins</span></div>
                  <div><span className="block text-2xl font-black text-black">09</span><span className="text-[9px] font-mono font-bold uppercase">Secs</span></div>
                </div>

                <div className="bg-[#F4F0EA] p-5 rounded-2xl border-2 border-black text-left">
                  <h3 className="text-base font-bold text-black mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" /> Digital Guest RSVP
                  </h3>
                  {rsvpSubmitted ? (
                    <div className="p-3 bg-emerald-300 border-2 border-black text-black rounded-xl text-center font-bold text-xs">
                      ✓ RSVP Saved! Your response is recorded live.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <input type="text" placeholder="Your Name" className="w-full p-2.5 bg-white border-2 border-black rounded-xl text-xs" />
                      <select className="w-full p-2.5 bg-white border-2 border-black rounded-xl text-xs font-bold">
                        <option>Joyfully Attending (1 Guest)</option>
                        <option>Joyfully Attending (2 Guests)</option>
                        <option>Regretfully Declining</option>
                      </select>
                      <button 
                        onClick={() => setRsvpSubmitted(true)}
                        className="btn-brutal-primary w-full py-2.5 text-xs font-bold rounded-xl"
                      >
                        Submit Instant RSVP
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-white rounded-xl border-2 border-black text-xs font-bold text-black flex items-center justify-between">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-500" /> Grand Ballroom, NY</span>
                  <span className="text-blue-600 underline">Open Map →</span>
                </div>
              </div>
            )}

            {/* DEMO: PHOTOGRAPHY */}
            {project.id === 'photography' && (
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between border-b-2 border-black pb-4">
                  <span className="text-lg font-black font-heading text-black flex items-center gap-2">
                    <Camera className="w-5 h-5 text-purple-600" /> AURA LENS STUDIO
                  </span>
                  <span className="brutal-badge brutal-badge-cyan text-[10px]">
                    Editorial Portfolio
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=500&q=80",
                    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=80",
                    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=80",
                    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=500&q=80",
                  ].map((src, i) => (
                    <div key={i} className="border-2 border-black rounded-xl overflow-hidden aspect-square">
                      <img src={src} className="w-full h-full object-cover" alt="Work" />
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#FFE600] rounded-xl border-2 border-black flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-black">Book Editorial Photography</h4>
                    <p className="text-[10px] text-black">High-ticket wedding & brand shoots.</p>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-brutal-black py-2 px-3 text-[11px] font-bold">
                    Check Dates
                  </a>
                </div>
              </div>
            )}

            {/* DEMO: WHATSAPP E-COMMERCE */}
            {project.id === 'ecommerce' && (
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between border-b-2 border-black pb-3">
                  <span className="text-lg font-black text-black flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-emerald-600" /> VELOCITY STORE
                  </span>
                  <span className="brutal-badge brutal-badge-mint text-[10px]">
                    Cart ({cartCount})
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Aura Smart Watch", price: "$149", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
                    { title: "Sonic Audio Pods", price: "$99", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
                  ].map((prod, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border-2 border-black flex flex-col justify-between">
                      <img src={prod.img} className="w-full h-28 object-cover rounded-lg border border-black mb-2" alt={prod.title} />
                      <h4 className="text-xs font-bold text-black">{prod.title}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-black text-black">{prod.price}</span>
                        <button 
                          onClick={() => setCartCount(cartCount + 1)}
                          className="btn-brutal-whatsapp py-1 px-2 text-[10px] font-bold rounded"
                        >
                          WhatsApp Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEMO: BUSINESS LEAD ENGINE */}
            {project.id === 'business' && (
              <div className="p-6 space-y-6">
                <div className="text-center py-4 border-b-2 border-black">
                  <span className="brutal-badge brutal-badge-purple text-[10px]">
                    High-Converting Service Funnel
                  </span>
                  <h2 className="text-xl font-black text-black mt-2">Apex Financial Growth Advisory</h2>
                  <p className="text-xs text-slate-600 mt-1">We scale businesses with custom lead systems.</p>
                </div>

                <div className="p-4 bg-[#00F0FF] rounded-xl border-2 border-black text-center">
                  <h4 className="text-xs font-bold text-black mb-2">Ready to Scale Your Business?</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-brutal-black py-2 px-4 text-xs font-bold">
                    Schedule Free Call
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer Banner */}
        <div className="p-4 bg-white border-t-3 border-black flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-bold text-black">
            ⚡ Ready for a custom site like this for your business?
          </span>
          <button 
            onClick={() => { onClose(); onOpenQuote(); }}
            className="btn-brutal-primary py-2 px-4 text-xs font-bold rounded-xl"
          >
            Get Started Now
          </button>
        </div>

      </div>

    </div>
  );
}
