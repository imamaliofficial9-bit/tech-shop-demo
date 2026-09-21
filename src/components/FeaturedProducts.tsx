import React, { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const FeaturedProducts: React.FC = () => {
  const { activeCategory, setActiveCategory } = useShop();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categoriesFilter = [
    { id: 'all', label: 'All Products' },
    { id: 'smartphones', label: 'Smartphones' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'audio', label: 'Audio' },
    { id: 'computer-accessories', label: 'PC Accessories' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'chargers-cables', label: 'Chargers & Power' },
  ];

  // Filter products
  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categorySlug === activeCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured order
  });

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#28B52C]"></span>
              TOP SELECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111315] tracking-tight">
              Featured Tech
            </h2>
            <p className="text-base text-[#6B7075] mt-2 max-w-xl">
              Popular picks for work, entertainment, and everyday life. Tested for longevity and peak capability.
            </p>
          </div>

          {/* Sort Controller */}
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs font-semibold text-[#6B7075] flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F6F7F8] border border-[#E8EAEC] text-xs font-bold text-[#111315] rounded-xl px-3 py-2 outline-none focus:border-[#28B52C]"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categoriesFilter.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#111315] text-white shadow-md'
                    : 'bg-[#F6F7F8] text-[#6B7075] hover:bg-[#E8EAEC] hover:text-[#111315]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F6F7F8] rounded-2xl border border-dashed border-[#E8EAEC]">
            <p className="text-sm font-semibold text-[#6B7075]">
              No products found in this category right now.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-3 px-4 py-2 rounded-xl bg-[#28B52C] text-white text-xs font-bold"
            >
              Reset Category Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
