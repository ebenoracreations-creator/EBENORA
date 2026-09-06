import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export default function PackagesPage() {
  const whatsappUrl = "https://wa.me/918304085739?text=" + encodeURIComponent("Hi Ebenora Creations Team! I'd like to discuss a custom package for my website.");

  return (
    <div className="pt-32 pb-20">
      
      {/* Hero */}
      <section className="py-16 border-b border-[#292929] bg-[#050505]">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <div className="badge-gold">
            <span>TRANSPARENT CREATIVE PACKAGES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-extrabold leading-tight">
            Transparent Pricing <br />
            <span className="text-gold-gradient italic font-normal">Built Around Your Scope.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
            Every business has unique requirements. We provide clear, structured investment options with zero hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid matching Requirement #20 */}
      <section className="py-24 bg-[#0B0B0B] border-b border-[#292929]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Package 1: Core Website */}
            <div className="ebenora-card p-8 bg-[#050505] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#D9B15F] px-3 py-1 bg-[#151515] rounded-full border border-[#292929] inline-block mb-4">
                  CORE WEBSITE
                </span>
                
                <div className="mb-4">
                  <span className="text-3xl font-extrabold font-serif text-[#F5F2EA]">₹6,000 – ₹8,000</span>
                  <span className="text-xs text-[#A4A4A4] block font-mono">Standard Scope</span>
                </div>

                <p className="text-xs text-[#A4A4A4] mb-6 leading-relaxed">
                  Ideal for businesses needing a high-performance, responsive web presence.
                </p>

                <ul className="space-y-3 text-xs text-[#F5F2EA] border-t border-[#292929] pt-6 mb-8 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Custom responsive UI/UX</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Fast sub-second page speed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Fundamental SEO tags</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Mobile touch optimization</li>
                  <li className="flex items-center gap-2 text-[#A4A4A4]"><span className="text-[#D9B15F]">+</span> Add SEO Foundation: ₹3,000</li>
                </ul>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold-outline text-xs py-3 w-full text-center">
                SELECT CORE WEBSITE →
              </a>
            </div>

            {/* Package 2: Core + Photo Management Portal */}
            <div className="ebenora-card p-8 bg-[#050505] flex flex-col justify-between border-[#D9B15F]/40 shadow-[0_0_30px_rgba(217,177,95,0.12)]">
              <div>
                <span className="text-xs font-mono font-bold text-[#F1D38A] px-3 py-1 bg-[#D9B15F]/15 rounded-full border border-[#D9B15F]/30 inline-block mb-4">
                  MOST POPULAR
                </span>
                
                <div className="mb-4">
                  <span className="text-3xl font-extrabold font-serif text-[#F5F2EA]">₹11,000 – ₹13,000</span>
                  <span className="text-xs text-[#D9B15F] block font-mono">Core + Photo Portal (+₹5,000)</span>
                </div>

                <p className="text-xs text-[#A4A4A4] mb-6 leading-relaxed">
                  Includes full website build plus custom Photo Management Portal for photographers, event hosts, and studios.
                </p>

                <ul className="space-y-3 text-xs text-[#F5F2EA] border-t border-[#292929] pt-6 mb-8 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Everything in Core Website</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Photo Portal Add-on (+₹5,000)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Client gallery & upload access</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Add SEO Foundation: ₹3,000</li>
                </ul>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold-primary text-xs py-3 w-full text-center">
                SELECT PORTAL PACKAGE →
              </a>
            </div>

            {/* Package 3: Premium Support & Growth */}
            <div className="ebenora-card p-8 bg-[#050505] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#D9B15F] px-3 py-1 bg-[#151515] rounded-full border border-[#292929] inline-block mb-4">
                  PREMIUM SUPPORT
                </span>
                
                <div className="mb-4">
                  <span className="text-3xl font-extrabold font-serif text-[#F5F2EA]">₹20,000</span>
                  <span className="text-xs text-[#A4A4A4] block font-mono">Full Creative Retainer</span>
                </div>

                <p className="text-xs text-[#A4A4A4] mb-6 leading-relaxed">
                  Complete dedicated creative partner support, comprehensive SEO, and ongoing digital management.
                </p>

                <ul className="space-y-3 text-xs text-[#F5F2EA] border-t border-[#292929] pt-6 mb-8 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Complete Web Experience & Portal</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Global SEO Foundation INCLUDED</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Priority creative updates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9B15F]" /> Ongoing digital growth partner</li>
                </ul>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold-outline text-xs py-3 w-full text-center">
                SELECT PREMIUM SUPPORT →
              </a>
            </div>

          </div>

          {/* Maintenance & Additional Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6 rounded-2xl bg-[#050505] border border-[#292929]">
              <h4 className="text-base font-bold text-[#F5F2EA] mb-1 font-serif">Minor Photo / Content Updates</h4>
              <span className="text-sm font-mono text-[#D9B15F] font-bold block mb-2">₹700 – ₹1,000 per update</span>
              <p className="text-xs text-[#A4A4A4]">Fast maintenance for routine image uploads, banner swaps, and quick text changes.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#050505] border border-[#292929]">
              <h4 className="text-base font-bold text-[#F5F2EA] mb-1 font-serif">Major Redesign / Custom Features</h4>
              <span className="text-sm font-mono text-[#F1D38A] font-bold block mb-2">Quoted Separately</span>
              <p className="text-xs text-[#A4A4A4]">Tailored pricing based on custom functionality, section expansion, or complete brand overhauls.</p>
            </div>
          </div>

          {/* Pricing Conditions Box matching Requirement #20 */}
          <div className="p-6 rounded-2xl bg-[#050505] border border-[#292929] max-w-4xl mx-auto mt-8 font-mono text-xs text-[#A4A4A4] space-y-2">
            <span className="text-[#D9B15F] font-bold block uppercase mb-1 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> PRICING CONDITIONS & SCOPE DETERMINANTS
            </span>
            <p>Final project investment depends on: <strong>Scope, Complexity, Number of Sections, Development Effort, and Custom Functionality.</strong> All pricing conditions are communicated transparently before project kick-off.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto text-center max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl text-[#F5F2EA] font-bold">Have Questions About Scope?</h2>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold-primary py-4 px-8 text-xs font-bold">
            TALK TO US ON WHATSAPP →
          </a>
        </div>
      </section>

    </div>
  );
}
