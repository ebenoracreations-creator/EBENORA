import React, { useState } from 'react';
import { Calculator, CheckCircle, ArrowRight, Zap, Sparkles, MessageCircle, ShieldAlert, Clock, Award } from 'lucide-react';

export default function RoiCalculator({ onOpenQuote }) {
  const [siteType, setSiteType] = useState('ecommerce'); // invitation, photography, ecommerce, business, saas
  const [pageCount, setPageCount] = useState(3);
  const [whatsappEngine, setWhatsappEngine] = useState(true);
  const [seoDominance, setSeoDominance] = useState(true);
  const [customAnimations, setCustomAnimations] = useState(true);
  const [speedOptimization, setSpeedOptimization] = useState(true);

  // Pricing math calculation algorithm
  const basePrices = {
    invitation: 199,
    photography: 299,
    ecommerce: 399,
    business: 499,
    saas: 699
  };

  const calculateCost = () => {
    let cost = basePrices[siteType] || 399;
    cost += (pageCount - 1) * 45;
    if (whatsappEngine) cost += 80;
    if (seoDominance) cost += 90;
    if (customAnimations) cost += 75;
    if (speedOptimization) cost += 60;
    return cost;
  };

  const calculateDays = () => {
    let days = 4;
    if (pageCount > 4) days += 3;
    if (pageCount > 8) days += 3;
    if (siteType === 'ecommerce' || siteType === 'saas') days += 2;
    return days;
  };

  const totalCost = calculateCost();
  const timelineDays = calculateDays();

  const getSiteTypeName = () => {
    switch (siteType) {
      case 'invitation': return 'Event & Invitation Website';
      case 'photography': return 'Photography & Portfolio Site';
      case 'ecommerce': return 'Shopify/WhatsApp E-Commerce Store';
      case 'business': return 'Custom Business Lead Engine';
      case 'saas': return 'Luxury Web Application';
      default: return 'Custom Website';
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi AuraCraft Team! I just used your Interactive Calculator on your website. 
Here are my project details:
• Type: ${getSiteTypeName()}
• Pages: ${pageCount}
• WhatsApp Engine: ${whatsappEngine ? 'Yes' : 'No'}
• SEO Dominance: ${seoDominance ? 'Yes' : 'No'}
• Custom Animations: ${customAnimations ? 'Yes' : 'No'}
• Est. Cost: $${totalCost}
• Est. Delivery: ${timelineDays} Days

Can we discuss starting my project?`;
    return `https://wa.me/18005552872?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-20 relative overflow-hidden bg-slate-950/60 border-y border-white/10">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7000ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill inline-flex items-center gap-2 mb-4">
            <Calculator className="w-4 h-4 text-[#00f2fe]" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Transparent Pricing. <span className="gradient-text-cyan">Zero Hidden Fees.</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Customize your website requirements below and get an instant cost & turnaround timeline estimation.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              
              {/* Step 1: Select Website Type */}
              <div className="mb-8">
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                  <span>1. Choose Project Category</span>
                  <span className="text-[#00f2fe] text-xs font-mono">Selected: {getSiteTypeName()}</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'invitation', label: 'Event & Invitation', desc: 'RSVP + Map' },
                    { id: 'photography', label: 'Photography', desc: 'Luxury Gallery' },
                    { id: 'ecommerce', label: 'WhatsApp Store', desc: 'Shop & Checkout' },
                    { id: 'business', label: 'Business Lead Engine', desc: 'High Conversion' },
                    { id: 'saas', label: 'Custom Web App', desc: 'Full-Stack' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSiteType(item.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        siteType === item.id
                          ? 'bg-[#00f2fe]/15 border-[#00f2fe] text-white shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className="block text-sm font-bold text-white mb-0.5">{item.label}</span>
                      <span className="block text-[11px] text-slate-400">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Slider for Page Count */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-300">
                    2. Estimated Number of Pages
                  </label>
                  <span className="text-xl font-extrabold text-[#00f2fe] font-mono px-3 py-1 bg-[#00f2fe]/10 rounded-lg border border-[#00f2fe]/30">
                    {pageCount} {pageCount === 1 ? 'Page' : 'Pages'}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={pageCount}
                  onChange={(e) => setPageCount(parseInt(e.target.value))}
                  className="w-full my-3"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>1 Page Landing</span>
                  <span>5 Pages</span>
                  <span>12+ Enterprise Pages</span>
                </div>
              </div>

              {/* Step 3: Feature Checkboxes */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                  3. Select Conversion Boosters
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  <div 
                    onClick={() => setWhatsappEngine(!whatsappEngine)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      whatsappEngine ? 'bg-emerald-500/10 border-emerald-500 text-white' : 'bg-slate-900/60 border-white/10 text-slate-400'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold text-white">WhatsApp Order Engine</span>
                      <span className="text-[10px] text-slate-400">Direct lead chat integration</span>
                    </div>
                    <CheckCircle className={`w-5 h-5 ${whatsappEngine ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </div>

                  <div 
                    onClick={() => setSeoDominance(!seoDominance)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      seoDominance ? 'bg-purple-500/10 border-purple-500 text-white' : 'bg-slate-900/60 border-white/10 text-slate-400'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold text-white">#1 Google SEO Schema</span>
                      <span className="text-[10px] text-slate-400">Full structured JSON-LD data</span>
                    </div>
                    <CheckCircle className={`w-5 h-5 ${seoDominance ? 'text-purple-400' : 'text-slate-600'}`} />
                  </div>

                  <div 
                    onClick={() => setCustomAnimations(!customAnimations)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      customAnimations ? 'bg-cyan-500/10 border-cyan-500 text-white' : 'bg-slate-900/60 border-white/10 text-slate-400'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold text-white">Glassmorphism & Micro-FX</span>
                      <span className="text-[10px] text-slate-400">Luxury hover physics</span>
                    </div>
                    <CheckCircle className={`w-5 h-5 ${customAnimations ? 'text-cyan-400' : 'text-slate-600'}`} />
                  </div>

                  <div 
                    onClick={() => setSpeedOptimization(!speedOptimization)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      speedOptimization ? 'bg-amber-500/10 border-amber-500 text-white' : 'bg-slate-900/60 border-white/10 text-slate-400'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold text-white">Sub-1s Load Speed Engine</span>
                      <span className="text-[10px] text-slate-400">100/100 Lighthouse score</span>
                    </div>
                    <CheckCircle className={`w-5 h-5 ${speedOptimization ? 'text-amber-400' : 'text-slate-600'}`} />
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Instant Live Estimate Breakdown Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-[#00f2fe]/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 flex flex-col justify-between shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-extrabold text-xs rounded-bl-xl uppercase tracking-wider">
              Instant Estimate
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">
                <Sparkles className="w-4 h-4 text-[#00f2fe]" />
                Estimated Investment & Timeline
              </div>

              {/* Big Price Display */}
              <div className="my-4 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-slate-400">Starting From</span>
                  <span className="text-4xl sm:text-5xl font-black text-white font-heading">${totalCost}</span>
                  <span className="text-xs text-slate-400 font-mono">USD</span>
                </div>
                <p className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> 100% Money-Back Satisfaction Guarantee Included
                </p>
              </div>

              {/* Key Deliverables Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00f2fe]" /> Estimated Delivery:
                  </span>
                  <span className="font-bold text-white font-mono">{timelineDays} Business Days</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Target Google Speed:</span>
                  <span className="font-bold text-emerald-400 font-mono">0.3s - 0.7s (Lighthouse 100)</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Mobile Optimization:</span>
                  <span className="font-bold text-white">100% Perfect Pixel</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Revisions Allowed:</span>
                  <span className="font-bold text-white">Unlimited Revisions</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <a 
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center py-3.5 rounded-xl font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Estimate to WhatsApp Now</span>
              </a>

              <button 
                onClick={onOpenQuote}
                className="btn-secondary w-full justify-center py-3 rounded-xl font-semibold text-sm flex items-center gap-2"
              >
                <span>Submit Full Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
