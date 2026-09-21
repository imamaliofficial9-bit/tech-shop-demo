import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import lifestyleImg from '../assets/images/lifestyle_workspace_1790005213324.jpg';

export const LifestylePromotion: React.FC = () => {
  const { openWhatsAppGeneral } = useShop();

  const handleShopTechnology = () => {
    const elem = document.getElementById('featured');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#111315] relative overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#28B52C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Lifestyle Technology Image (~55%) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={lifestyleImg}
                alt="Modern executive workspace with laptop, headphones, and smartphone"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>

              {/* Floating review snippet */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#111315]/90 backdrop-blur-md border border-white/15 shadow-xl hidden sm:block">
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28B52C]"></span>
                    <span className="font-bold">Verified Tech Ecosystem</span>
                  </div>
                  <span className="text-[#9FA4A8]">100% Guaranteed Original</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy & Conversion (~45%) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28B52C]/10 border border-[#28B52C]/30 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-4">
              <span>TECH FOR EVERYDAY LIFE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Everything You Need to <span className="text-[#28B52C]">Stay Connected</span>
            </h2>

            <p className="text-base text-[#9FA4A8] leading-relaxed mb-6">
              At AL FAIZ COMMUNICATION, we bridge the gap between premium global hardware and local convenience. From flagship smartphones and powerhouse laptops to acoustic studio headphones and rapid GaN charging docks, find everything in one trusted destination.
            </p>

            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28B52C] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/90">
                  <strong className="text-white">Strict Quality Inspection:</strong> Every device is checked for original serials and official compliance.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28B52C] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/90">
                  <strong className="text-white">Instant Consultation:</strong> Direct guidance from hardware specialists on WhatsApp or in our showroom.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28B52C] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/90">
                  <strong className="text-white">Unbeatable Bundles:</strong> Combine mobile cases, tempered guards, and fast chargers with discount pricing.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={handleShopTechnology}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#28B52C] hover:bg-[#168C24] text-white font-bold text-sm shadow-lg shadow-[#28B52C]/20 transition-all"
              >
                <span>Shop Technology</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={openWhatsAppGeneral}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1A1D20] text-white font-semibold text-sm border border-white/10 hover:bg-[#25282B] transition-all"
              >
                <Phone className="w-4 h-4 text-[#28B52C]" />
                <span>Talk to a Specialist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
