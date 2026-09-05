import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import EbenoraLogo from './EbenoraLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/919037352739?text=" + encodeURIComponent("Hi Ebenora Creations Team! I would like to discuss a strategic creative project for my business.");

  return (
    <footer className="bg-[#050505] text-[#A4A4A4] pt-24 pb-12 border-t border-[#292929] relative overflow-hidden font-manrope">
      <div className="container mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#292929]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <EbenoraLogo className="h-10 sm:h-12" showTagline={true} />
            
            <p className="font-serif italic text-[#D9B15F] text-xl font-normal pt-2">
              "You think. We create."
            </p>

            <p className="text-xs text-[#A4A4A4] max-w-sm leading-relaxed">
              Ebenora Creations is a luxury creative design and digital studio building bold brands, high-performance websites, powerful content, and world-class SEO strategies designed to help businesses stand out and compete globally.
            </p>
          </div>

          {/* Col: Navigation */}
          <div>
            <h4 className="text-[#F5F2EA] text-xs font-dmsans font-bold uppercase tracking-widest mb-5 text-[#D9B15F]">COMPANY</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link to="/" className="hover:text-[#F1D38A] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#F1D38A] transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#F1D38A] transition-colors">Case Studies</Link></li>
              <li><Link to="/packages" className="hover:text-[#F1D38A] transition-colors">Pricing Packages</Link></li>
              <li><Link to="/blog" className="hover:text-[#F1D38A] transition-colors">Insights & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#F1D38A] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col: Services */}
          <div>
            <h4 className="text-[#F5F2EA] text-xs font-dmsans font-bold uppercase tracking-widest mb-5 text-[#D9B15F]">SERVICES</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link to="/services/branding" className="hover:text-[#F1D38A] transition-colors">Branding & Graphic Design</Link></li>
              <li><Link to="/services/web-development" className="hover:text-[#F1D38A] transition-colors">Websites & Digital</Link></li>
              <li><Link to="/services/seo" className="hover:text-[#F1D38A] transition-colors">SEO & Digital Growth</Link></li>
              <li><Link to="/services/social-media" className="hover:text-[#F1D38A] transition-colors">Social Media Content</Link></li>
              <li><Link to="/services/custom-solutions" className="hover:text-[#F1D38A] transition-colors">Custom Creative Solutions</Link></li>
            </ul>
          </div>

          {/* Col: Direct Contact */}
          <div>
            <h4 className="text-[#F5F2EA] text-xs font-dmsans font-bold uppercase tracking-widest mb-5 text-[#D9B15F]">DIRECT INQUIRY</h4>
            
            <div className="space-y-4 text-xs font-dmsans">
              <a href="tel:+919037352739" className="flex items-center gap-2.5 text-[#F1D38A] hover:underline font-bold text-sm">
                <Phone className="w-4 h-4 text-[#D9B15F]" />
                <span>+91 903 735 2739</span>
              </a>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-bold text-xs hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct Chat</span>
              </a>
            </div>

            <div className="pt-5 border-t border-[#292929] mt-5">
              <span className="text-[10px] font-dmsans text-[#A4A4A4] uppercase tracking-wider block mb-2 font-bold">Social Platforms</span>
              <div className="flex items-center gap-4 text-xs font-dmsans font-bold text-[#A4A4A4]">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#D9B15F]">Instagram</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#D9B15F]">LinkedIn</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#D9B15F]">Behance</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dmsans text-[#A4A4A4]">
          <div>
            © {new Date().getFullYear()} Ebenora Creations. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#D9B15F]">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#D9B15F]">Terms & Conditions</Link>
            
            <button 
              onClick={scrollToTop}
              className="p-2.5 px-4 rounded-xl bg-[#0B0B0B] border border-[#292929] text-[#F5F2EA] hover:border-[#D9B15F] hover:text-[#F1D38A] transition-all flex items-center gap-2 font-bold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D9B15F]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
