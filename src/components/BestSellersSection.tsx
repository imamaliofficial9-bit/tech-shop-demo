import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const BestSellersSection: React.FC = () => {
  const { setActiveCategory } = useShop();

  const bestSellers = PRODUCTS.filter(
    (p) => p.badge === 'Bestseller' || p.reviewsCount > 100
  ).slice(0, 4);

  const handleViewAll = () => {
    setActiveCategory('all');
    const elem = document.getElementById('featured');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#E8EAEC]/30 border-b border-[#E8EAEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>HIGH DEMAND ITEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111315] tracking-tight">
              Customer Favorites
            </h2>
            <p className="text-base text-[#6B7075] mt-2 max-w-xl">
              Tech products customers keep coming back for. Trusted by thousands for everyday reliability.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 mt-4 sm:mt-0 px-6 py-3 rounded-xl bg-[#111315] text-white hover:bg-black font-bold text-xs shadow transition-all group"
          >
            <span>View All Best Sellers</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
