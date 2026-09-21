import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Header: React.FC = () => {
  const { 
    cartCount, 
    cartSubtotal, 
    setIsCartOpen, 
    setIsSearchOpen, 
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    setActiveCategory,
    openWhatsAppGeneral,
    whatsappNumber
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, category?: string) => {
    setMobileMenuOpen(false);
    if (category) {
      setActiveCategory(category);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0D0E10] text-[#8E9398] text-xs border-b border-white/5 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#28B52C] animate-pulse"></span>
              Fast & Safe Delivery Across Pakistan
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#28B52C]" />
              100% Genuine Tech & PTA Approved Devices
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={openWhatsAppGeneral}
              className="flex items-center gap-1.5 text-[#28B52C] hover:text-[#32cf36] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp: {whatsappNumber}</span>
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1 text-white/60">
              <Clock className="w-3 h-3" />
              <span>Mon-Sat: 10AM - 9PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111315]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
            : 'bg-[#111315] border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            {/* Abstract Tech Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A1D20] to-[#25282B] border border-white/15 flex items-center justify-center p-2 shadow-inner group-hover:border-[#28B52C]/60 transition-colors">
              <div className="relative flex items-center justify-center w-full h-full">
                <span className="w-3.5 h-3.5 rounded-sm bg-[#28B52C] rotate-45 transform transition-transform group-hover:scale-110"></span>
                <span className="absolute w-1.5 h-1.5 rounded-full bg-white"></span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-white transition-colors">
                  AL FAIZ
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#28B52C]/20 text-[#28B52C] border border-[#28B52C]/40">
                  TECH
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] font-medium text-[#8E9398] uppercase">
                COMMUNICATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-white hover:text-[#28B52C] transition-colors relative py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="text-sm font-medium text-[#9FA4A8] hover:text-white transition-colors py-1"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection('featured', 'smartphones')}
              className="text-sm font-medium text-[#9FA4A8] hover:text-white transition-colors py-1"
            >
              Mobile
            </button>
            <button
              onClick={() => scrollToSection('featured', 'laptops')}
              className="text-sm font-medium text-[#9FA4A8] hover:text-white transition-colors py-1"
            >
              Laptops
            </button>
            <button
              onClick={() => scrollToSection('featured', 'computer-accessories')}
              className="text-sm font-medium text-[#9FA4A8] hover:text-white transition-colors py-1"
            >
              Accessories
            </button>
            <button
              onClick={() => scrollToSection('fresh-arrivals')}
              className="text-sm font-medium text-[#9FA4A8] hover:text-white transition-colors py-1 flex items-center gap-1"
            >
              <span>New Arrivals</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#28B52C]"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact-whatsapp')}
              className="text-sm font-medium text-[#9FA4A8] hover:text-white transition-colors py-1"
            >
              Contact
            </button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search tech products"
              className="p-2.5 rounded-lg bg-[#1A1D20] text-[#9FA4A8] hover:text-white hover:bg-[#25282B] border border-white/5 transition-all"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setIsWishlistOpen(!isWishlistOpen)}
              aria-label="View Wishlist"
              className="relative p-2.5 rounded-lg bg-[#1A1D20] text-[#9FA4A8] hover:text-white hover:bg-[#25282B] border border-white/5 transition-all"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#28B52C] text-[#111315] font-bold text-[10px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger with Subtotal */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Cart"
              className="flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-xl bg-gradient-to-r from-[#28B52C] to-[#168C24] text-white hover:brightness-110 shadow-lg shadow-[#28B52C]/20 transition-all transform active:scale-95 font-medium"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white text-[#111315] font-bold text-[10px] flex items-center justify-center shadow">
                  {cartCount}
                </span>
              </div>
              <span className="text-xs font-bold hidden sm:inline">
                ${cartSubtotal.toFixed(2)}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-[#1A1D20] text-[#9FA4A8] hover:text-white border border-white/5 transition-colors"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-[#111315] border-l border-white/10 flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#28B52C]/20 border border-[#28B52C]/50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#28B52C]" />
                </div>
                <span className="font-bold text-white text-base">AL FAIZ TECH</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-[#1A1D20] text-[#9FA4A8] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-white hover:bg-[#1A1D20] font-medium"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-[#8E9398]" />
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[#9FA4A8] hover:text-white hover:bg-[#1A1D20] font-medium"
              >
                <span>Shop by Category</span>
                <ChevronRight className="w-4 h-4 text-[#8E9398]" />
              </button>
              <button
                onClick={() => scrollToSection('featured', 'smartphones')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[#9FA4A8] hover:text-white hover:bg-[#1A1D20] font-medium"
              >
                <span>Smartphones & Mobile</span>
                <ChevronRight className="w-4 h-4 text-[#8E9398]" />
              </button>
              <button
                onClick={() => scrollToSection('featured', 'laptops')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[#9FA4A8] hover:text-white hover:bg-[#1A1D20] font-medium"
              >
                <span>Laptops & Ultrabooks</span>
                <ChevronRight className="w-4 h-4 text-[#8E9398]" />
              </button>
              <button
                onClick={() => scrollToSection('featured', 'computer-accessories')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[#9FA4A8] hover:text-white hover:bg-[#1A1D20] font-medium"
              >
                <span>Computer Accessories</span>
                <ChevronRight className="w-4 h-4 text-[#8E9398]" />
              </button>
              <button
                onClick={() => scrollToSection('fresh-arrivals')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[#28B52C] hover:bg-[#1A1D20] font-medium"
              >
                <span className="flex items-center gap-2">
                  <span>Fresh Arrivals</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#28B52C] text-black font-bold">HOT</span>
                </span>
                <ChevronRight className="w-4 h-4 text-[#28B52C]" />
              </button>
              <button
                onClick={() => scrollToSection('contact-whatsapp')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[#9FA4A8] hover:text-white hover:bg-[#1A1D20] font-medium"
              >
                <span>Contact & Store Visit</span>
                <ChevronRight className="w-4 h-4 text-[#8E9398]" />
              </button>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppGeneral();
                }}
                className="w-full py-3 rounded-xl bg-[#28B52C] text-[#111315] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#28B52C]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <div className="text-center text-xs text-[#8E9398]">
                AL FAIZ COMMUNICATION © 2026
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
