import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import EbenoraLogo from './EbenoraLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappUrl = "https://wa.me/919037352739?text=" + encodeURIComponent("Hi Ebenora Creations Team! I'd like to discuss a strategic creative project for my business.");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'SEO & GROWTH', path: '/services/seo' },
    { name: 'PACKAGES', path: '/packages' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3.5 bg-[#050505]/92 backdrop-blur-2xl border-b border-[#D9B15F]/25 shadow-[0_15px_40px_rgba(0,0,0,0.95)]' 
        : 'py-5 bg-transparent border-b border-white/5'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Ebenora Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <EbenoraLogo className="h-9 sm:h-11 lg:h-12" showTagline={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 font-manrope font-bold text-xs tracking-wider">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`transition-all duration-300 relative py-1 ${
                  active 
                    ? 'text-[#F1D38A] font-extrabold' 
                    : 'text-[#A4A4A4] hover:text-[#F5F2EA]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F1D38A] to-[#D9B15F] rounded-full shadow-[0_0_10px_rgba(217,177,95,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* WHATSAPP CTA BUTTON */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#34E075] transition-all duration-300 font-manrope font-extrabold text-xs tracking-wider shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span>WHATSAPP CHAT</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-[#0B0B0B] border border-[#292929] text-[#F5F2EA] hover:border-[#D9B15F]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D9B15F]" /> : <Menu className="w-6 h-6 text-[#F5F2EA]" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[70px] bg-[#050505]/98 backdrop-blur-2xl border-t border-[#292929] px-6 py-8 flex flex-col justify-between z-50 overflow-y-auto">
          <div className="flex flex-col gap-4 font-serif text-xl">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    active 
                      ? 'bg-[#0B0B0B] border-[#D9B15F] text-[#F1D38A] font-bold' 
                      : 'bg-[#0B0B0B]/50 border-[#292929] text-[#A4A4A4] hover:text-[#F5F2EA]'
                  }`}
                >
                  <span>{link.name}</span>
                  {active ? (
                    <span className="text-xs font-dmsans text-[#D9B15F] font-bold">● ACTIVE</span>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-[#A4A4A4]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#292929] mt-6">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center py-4 text-xs font-bold rounded-xl flex items-center gap-2 bg-[#25D366] text-white"
            >
              <MessageCircle className="w-5 h-5 fill-current text-white" />
              <span>WHATSAPP DIRECT CHAT</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
