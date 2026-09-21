import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Truck, 
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';
import { useShop, WHATSAPP_NUMBER } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setActiveCategory, openWhatsAppGeneral } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    const elem = document.getElementById('featured');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0E10] text-[#9FA4A8] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info (Span 2 on desktop) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A1D20] to-[#25282B] border border-white/15 flex items-center justify-center p-2 shadow-inner">
                <div className="relative flex items-center justify-center w-full h-full">
                  <span className="w-3.5 h-3.5 rounded-sm bg-[#28B52C] rotate-45"></span>
                  <span className="absolute w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  AL FAIZ COMMUNICATION
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-[#8E9398] uppercase">
                  TECHNOLOGY & MOBILE HARDWARE
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8E9398] leading-relaxed max-w-sm mb-6">
              Modern technology, useful accessories, and everyday devices for work, life, and play. Trusted retail showroom & nationwide delivery.
            </p>

            <div className="space-y-2.5 text-xs text-[#9FA4A8]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#28B52C] flex-shrink-0" />
                <span>Hafeez Centre Main Boulevard, Gulberg III, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#28B52C] flex-shrink-0" />
                <span>Hotline: {WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#28B52C] flex-shrink-0" />
                <span>support@alfaizcommunication.pk</span>
              </div>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Shop Categories
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleCategoryClick('smartphones')}
                  className="hover:text-[#28B52C] transition-colors"
                >
                  Smartphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('laptops')}
                  className="hover:text-[#28B52C] transition-colors"
                >
                  Laptops & Notebooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('computer-accessories')}
                  className="hover:text-[#28B52C] transition-colors"
                >
                  Computer Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('audio')}
                  className="hover:text-[#28B52C] transition-colors"
                >
                  Audio & Headphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('smart-devices')}
                  className="hover:text-[#28B52C] transition-colors"
                >
                  Smart Devices & Watches
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('gaming')}
                  className="hover:text-[#28B52C] transition-colors"
                >
                  Gaming Gear
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Customer Service
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#contact-whatsapp" className="hover:text-[#28B52C] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <button onClick={openWhatsAppGeneral} className="hover:text-[#28B52C] transition-colors text-left">
                  WhatsApp Support
                </button>
              </li>
              <li>
                <span className="hover:text-[#28B52C] cursor-pointer transition-colors">
                  Shipping & Dispatch
                </span>
              </li>
              <li>
                <span className="hover:text-[#28B52C] cursor-pointer transition-colors">
                  7-Day Return Policy
                </span>
              </li>
              <li>
                <span className="hover:text-[#28B52C] cursor-pointer transition-colors">
                  PTA Verification Guide
                </span>
              </li>
              <li>
                <span className="hover:text-[#28B52C] cursor-pointer transition-colors">
                  Warranty Claim Procedure
                </span>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Connect With Us
            </h4>
            <div className="flex flex-col gap-3">
              <button
                onClick={openWhatsAppGeneral}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1A1D20] text-white hover:bg-[#28B52C] hover:text-[#111315] transition-all text-xs font-bold border border-white/5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Community</span>
              </button>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-[#1A1D20] text-[#9FA4A8] hover:text-[#28B52C] hover:bg-[#25282B] flex items-center justify-center transition-colors border border-white/5"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-[#1A1D20] text-[#9FA4A8] hover:text-[#28B52C] hover:bg-[#25282B] flex items-center justify-center transition-colors border border-white/5"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-xl bg-[#1A1D20] text-[#9FA4A8] hover:text-[#28B52C] hover:bg-[#25282B] flex items-center justify-center transition-colors border border-white/5 text-xs font-bold"
                >
                  TT
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs">
                <p className="text-white font-semibold mb-1">Visit Retail Store:</p>
                <p className="text-[#8E9398]">Mon - Sat: 10:00 AM – 9:00 PM</p>
                <p className="text-[#8E9398]">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9398]">
          <p>© 2026 AL FAIZ COMMUNICATION. All rights reserved.</p>

          {/* Payment & Security Badges */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/70">
              <Truck className="w-3.5 h-3.5 text-[#28B52C]" />
              Cash On Delivery
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1 text-white/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#28B52C]" />
              Direct Bank Transfer
            </span>
            <span className="text-white/20">•</span>
            <span>Store Counter Pickup</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-[#1A1D20] hover:bg-[#28B52C] text-[#9FA4A8] hover:text-white transition-all border border-white/5"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
