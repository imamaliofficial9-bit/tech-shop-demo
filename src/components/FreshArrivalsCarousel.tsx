import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const FreshArrivalsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Products with New badge or latest
  const freshArrivals = PRODUCTS.filter((p) => p.badge === 'New' || p.price > 80);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="fresh-arrivals" className="py-20 bg-[#F6F7F8] border-b border-[#E8EAEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JUST LANDED IN STORE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111315] tracking-tight">
              Fresh Arrivals
            </h2>
            <p className="text-base text-[#6B7075] mt-2 max-w-xl">
              Be the first to discover the latest technology. Freshly released gadgets and imported flagships.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous products"
              className="w-11 h-11 rounded-xl bg-white border border-[#E8EAEC] text-[#111315] hover:bg-[#28B52C] hover:text-white hover:border-[#28B52C] flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next products"
              className="w-11 h-11 rounded-xl bg-white border border-[#E8EAEC] text-[#111315] hover:bg-[#28B52C] hover:text-white hover:border-[#28B52C] flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {freshArrivals.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
