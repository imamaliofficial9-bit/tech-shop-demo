import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useShop } from '../context/ShopContext';

export const CategoryGrid: React.FC = () => {
  const { setActiveCategory } = useShop();

  const handleCategoryClick = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    const elem = document.getElementById('featured');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 bg-[#F6F7F8] border-b border-[#E8EAEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#28B52C]"></span>
              CURATED DEPARTMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111315] tracking-tight">
              Shop by Category
            </h2>
            <p className="text-base text-[#6B7075] mt-2 max-w-xl">
              Find the technology you need, all in one place. Explore tested devices and genuine hardware.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => handleCategoryClick('all')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#28B52C] hover:text-[#168C24] transition-colors group"
            >
              <span>View All Products</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 4-column Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E8EAEC] hover:border-[#28B52C]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-[#F0F2F4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {category.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#111315]/80 backdrop-blur-sm text-white text-[11px] font-semibold border border-white/10">
                    {category.badge}
                  </span>
                )}

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#111315] shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#28B52C]" />
                </div>
              </div>

              {/* Category Info */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#111315] group-hover:text-[#28B52C] transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#6B7075] mt-1.5 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F2F4] flex items-center justify-between text-xs text-[#6B7075]">
                  <span className="font-medium text-[#111315]/80">{category.itemCount}+ Products</span>
                  <span className="text-[#28B52C] font-semibold flex items-center gap-1 group-hover:underline">
                    Browse
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
