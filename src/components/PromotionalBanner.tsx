import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import promoImg from '../assets/images/promo_desk_setup_1790005195459.jpg';

export const PromotionalBanner: React.FC = () => {
  const { setActiveCategory } = useShop();

  const handleExploreAccessories = () => {
    setActiveCategory('computer-accessories');
    const elem = document.getElementById('featured');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1A1D20] via-[#25282B] to-[#1A1D20] border border-white/10 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#28B52C]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14">
            {/* Left Copy (~50%) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28B52C]/10 border border-[#28B52C]/30 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WORK & PLAY ESSENTIALS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Power Up Your <span className="text-[#28B52C]">Productivity</span>
              </h2>

              <p className="text-base sm:text-lg text-[#9FA4A8] leading-relaxed mb-6 max-w-lg">
                Smart accessories and powerful essentials designed for work, study, gaming, and everyday life. Ergonomic comfort meets precision performance.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28B52C]" />
                  <span>Ultra-durable hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28B52C]" />
                  <span>Universal compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28B52C]" />
                  <span>Fast plug-and-play setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28B52C]" />
                  <span>Official replacement warranty</span>
                </div>
              </div>

              <button
                onClick={handleExploreAccessories}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#28B52C] hover:bg-[#168C24] text-white font-bold text-sm shadow-lg shadow-[#28B52C]/25 hover:brightness-105 transition-all"
              >
                <span>Explore Accessories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Image (~50%) */}
            <div className="lg:col-span-6 z-10">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
                <img
                  src={promoImg}
                  alt="Modern desk productivity setup with laptop, mechanical keyboard, and precision mouse"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    Pro Workspace Bundle
                  </span>
                  <span className="text-[#28B52C] font-bold">In Stock Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
