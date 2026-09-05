import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const projects = [
    {
      id: 'vance-luxury',
      client: 'Vance Commercial Studio',
      category: 'WEB DESIGN',
      title: 'Luxury Architectural & Commercial Studio Engine',
      summary: 'High-performance portfolio website engineered for sub-second speeds and high-ticket client bookings.',
      challenge: 'The client had exceptional photography work but was losing inquiries due to a slow, generic template website.',
      strategy: 'We built a custom dark luxury editorial layout with sub-second image loading and streamlined inquiry pathways.',
      direction: 'Deep obsidian black, fine champagne gold line details, and large editorial serif typography.',
      execution: 'Custom coded responsive site with zero platform bloat, optimized image compression, and mobile-first navigation.',
      results: 'Increased high-ticket client inquiries within 3 weeks of launch with 98/100 Google Lighthouse speed score.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      tags: ['Custom Web Development', 'Sub-1s Speed', 'Luxury UI/UX']
    },
    {
      id: 'royal-celebration',
      category: 'BRANDING',
      client: 'Royal Celebration Events',
      title: 'Digital Event Hub & Brand Visual System',
      summary: 'Luxury wedding invitation platform and event branding identity system.',
      challenge: 'Traditional paper invitations were expensive, slow to distribute, and lacked interactive guest routing.',
      strategy: 'Replaced paper invites with a luxury digital hub featuring 1-click online RSVP and live turn-by-turn map routing.',
      direction: 'Warm gold typography, custom logo mark, and dark translucent glass panels.',
      execution: 'Designed brand guidelines, custom RSVP confirmation engine, and integrated countdown timers.',
      results: 'Over 180 verified digital RSVPs processed with 100% positive guest feedback.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      tags: ['Brand Identity', 'Digital RSVP Hub', 'Google Maps API']
    },
    {
      id: 'velocity-commerce',
      category: 'SEO',
      client: 'Velocity Store',
      title: 'Search Discoverability & Direct Order Architecture',
      summary: 'Search-friendly e-commerce platform with direct WhatsApp order routing.',
      challenge: 'High monthly e-commerce platform fees were cutting into margins, while organic search visibility was low.',
      strategy: 'Engineered a custom web platform with pre-installed JSON-LD schema data and direct WhatsApp order links.',
      direction: 'Minimalist high-contrast dark theme focused on product clarity.',
      execution: 'Implemented technical SEO, structured product schemas, and instant cart WhatsApp formatting.',
      results: 'Eliminated platform monthly fees while ranking for target commercial product keywords.',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      tags: ['Technical SEO', 'WhatsApp Direct Order', 'Zero Monthly Fees']
    },
    {
      id: 'aura-social',
      category: 'SOCIAL MEDIA',
      client: 'Aura Creative House',
      title: 'Social Media Brand System & Campaign Assets',
      summary: 'Cohesive visual identity system across Instagram and LinkedIn channels.',
      challenge: 'Inconsistent visual branding across social media channels was diluting brand credibility.',
      strategy: 'Created a unified content design system with branded templates, story layouts, and ad creative assets.',
      direction: 'Champagne gold accents on deep charcoal surfaces with strong typography.',
      execution: 'Delivered a complete social media design kit, campaign banners, and visual guidelines.',
      results: 'Elevated social brand perception and established visual consistency across all customer touchpoints.',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['Social Branding', 'Content Systems', 'Ad Creatives']
    }
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-20">
      
      {/* Hero */}
      <section className="py-16 border-b border-[#292929] bg-[#050505]">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <div className="badge-gold">
            <span>CASE STUDIES & PORTFOLIO</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-extrabold leading-tight">
            We Build Brands That <br />
            <span className="text-gold-gradient italic font-normal">Deserve to Be Seen.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
            Explore our strategic work across branding, high-performance web development, SEO architecture, and creative content systems.
          </p>

          {/* Filters matching Requirement #15 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 font-mono text-xs font-bold">
            {['ALL', 'BRANDING', 'WEB DESIGN', 'SEO', 'SOCIAL MEDIA'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-xl border transition-all ${
                  activeFilter === filter
                    ? 'bg-[#D9B15F] text-[#050505] border-[#D9B15F] font-black'
                    : 'bg-[#0B0B0B] text-[#A4A4A4] border-[#292929] hover:border-[#D9B15F]/50 hover:text-[#F5F2EA]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#0B0B0B]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="ebenora-card overflow-hidden bg-[#050505] flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#050505]/90 backdrop-blur-md rounded-full border border-[#292929] text-xs font-mono font-bold text-[#D9B15F]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#D9B15F] block mb-1 font-bold">{project.client}</span>
                    <h3 className="text-2xl font-bold text-[#F5F2EA] mb-3 group-hover:text-[#F1D38A] transition-colors">{project.title}</h3>
                    <p className="text-xs text-[#A4A4A4] leading-relaxed mb-6">{project.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-[#A4A4A4] bg-[#111111] px-2.5 py-1 rounded border border-[#292929]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedCaseStudy(project)}
                    className="btn-gold-outline text-xs py-3 w-full flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4 text-[#D9B15F]" />
                    <span>VIEW CASE STUDY</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal matching Requirement #15 */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/90 backdrop-blur-2xl overflow-y-auto">
          <div className="bg-[#0B0B0B] border border-[#D9B15F]/40 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative space-y-6 max-h-[90vh] overflow-y-auto my-8">
            
            <button 
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#151515] border border-[#292929] text-[#A4A4A4] hover:text-[#F5F2EA]"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono font-bold text-[#D9B15F] px-3 py-1 bg-[#151515] rounded-full border border-[#292929] inline-block mb-3">
                {selectedCaseStudy.category} • {selectedCaseStudy.client}
              </span>
              <h2 className="text-3xl font-bold font-serif text-[#F5F2EA]">{selectedCaseStudy.title}</h2>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#292929] text-xs font-sans">
              <div>
                <h4 className="font-mono text-[#F1D38A] uppercase font-bold text-xs mb-1">01 CHALLENGE</h4>
                <p className="text-[#A4A4A4] leading-relaxed">{selectedCaseStudy.challenge}</p>
              </div>

              <div>
                <h4 className="font-mono text-[#F1D38A] uppercase font-bold text-xs mb-1">02 STRATEGY</h4>
                <p className="text-[#A4A4A4] leading-relaxed">{selectedCaseStudy.strategy}</p>
              </div>

              <div>
                <h4 className="font-mono text-[#F1D38A] uppercase font-bold text-xs mb-1">03 CREATIVE DIRECTION</h4>
                <p className="text-[#A4A4A4] leading-relaxed">{selectedCaseStudy.direction}</p>
              </div>

              <div>
                <h4 className="font-mono text-[#F1D38A] uppercase font-bold text-xs mb-1">04 EXECUTION</h4>
                <p className="text-[#A4A4A4] leading-relaxed">{selectedCaseStudy.execution}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#050505] border border-[#D9B15F]/30">
                <h4 className="font-mono text-[#34D399] uppercase font-bold text-xs mb-1">05 OUTCOMES & RESULTS</h4>
                <p className="text-[#F5F2EA] leading-relaxed">{selectedCaseStudy.results}</p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Link 
                to="/contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="btn-gold-primary py-3 px-6 text-xs font-bold"
              >
                BUILD A SIMILAR PROJECT →
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
