import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import heroImg from '../assets/images/hero_tech_gear_1790005172426.jpg';

export const Hero: React.FC = () => {
  const { setActiveCategory } = useShop();

  const handleShopNow = () => {
    const elem = document.getElementById('featured');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreCategories = () => {
    const elem = document.getElementById('categories');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-[#111315] overflow-hidden pt-6 pb-16 lg:py-20 border-b border-white/5">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#28B52C]/10 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none -z-0"></div>
      
      {/* Subtle Grid Lines Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-0" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (~45%) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1D20] border border-[#28B52C]/30 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#28B52C] animate-ping"></span>
              <span>NEXT-GEN TECHNOLOGY</span>
            </div>

            {/* Large Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Upgrade Your World With <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E8EAEC] to-[#28B52C]">Better Tech</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#9FA4A8] leading-relaxed mb-8 max-w-xl">
              Discover smartphones, laptops, smart devices, accessories, and everyday tech built for the way you live and work. Authentic gear with trusted local warranty.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleShopNow}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#28B52C] to-[#168C24] text-white font-bold text-base hover:shadow-lg hover:shadow-[#28B52C]/30 hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleExploreCategories}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#1A1D20] text-white font-semibold text-base border border-white/10 hover:bg-[#25282B] hover:border-white/20 transition-all"
              >
                <span>Explore Categories</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-xs text-[#8E9398]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#28B52C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
                <span>(3.8k+ Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80">
                <ShieldCheck className="w-4 h-4 text-[#28B52C]" />
                <span>100% PTA Approved & Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column (~55%) - Composite High-End Product Scene */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              {/* Product Frame with Ambient Glow */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#1A1D20]/80 to-[#111315] shadow-2xl p-2 sm:p-3 group">
                <img
                  src={heroImg}
                  alt="Modern premium technology products composition: smartphone, laptop, smartwatch, headphones, and speaker"
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Interactive Product Tag 1 */}
                <div className="absolute top-6 right-6 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#111315]/90 backdrop-blur-md border border-white/15 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28B52C]"></div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-bold text-white">Pro Studio Gear</span>
                    <span className="text-[10px] text-[#28B52C] font-semibold">Hi-Res Certified</span>
                  </div>
                </div>

                {/* Floating Interactive Product Tag 2 */}
                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#111315]/90 backdrop-blur-md border border-white/15 shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#28B52C]/20 border border-[#28B52C]/40 flex items-center justify-center text-[#28B52C]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white">Next-Gen Speed</span>
                    <span className="text-[11px] text-[#8E9398]">Fast Dispatch Nationwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
