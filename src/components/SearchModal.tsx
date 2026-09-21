import React, { useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    setQuickViewProduct,
    setActiveCategory,
  } = useShop();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const query = searchQuery.toLowerCase().trim();

  const matchingProducts = query
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query)
      )
    : [];

  const matchingCategories = query
    ? CATEGORIES.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query)
      )
    : [];

  const handleSelectProduct = (product: any) => {
    setQuickViewProduct(product);
    setIsSearchOpen(false);
  };

  const handleSelectCategory = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    setIsSearchOpen(false);
    const elem = document.getElementById('featured');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      ></div>

      <div className="relative min-h-screen px-4 flex items-start justify-center pt-20 pb-12">
        <div className="relative w-full max-w-2xl bg-[#111315] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10">
          {/* Search Input Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#28B52C] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search smartphones, laptops, earbuds, chargers, hubs..."
              className="flex-1 bg-transparent text-white text-base placeholder-[#6B7075] outline-none font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1.5 rounded-lg text-[#8E9398] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="px-2.5 py-1 rounded-lg bg-[#1A1D20] text-xs font-semibold text-[#8E9398] hover:text-white"
            >
              ESC
            </button>
          </div>

          {/* Search Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
            {!query ? (
              <div>
                <div className="text-xs font-bold text-[#8E9398] uppercase tracking-wider mb-3">
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Apex 5G',
                    'AeroBook Pro',
                    'Wireless Earbuds',
                    'USB-C Hub',
                    'Mechanical Keyboard',
                    'Fast Charger',
                    'Smartwatch',
                  ].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1.5 rounded-lg bg-[#1A1D20] hover:bg-[#25282B] text-xs font-medium text-white border border-white/5 flex items-center gap-1.5 transition-colors"
                    >
                      <Tag className="w-3 h-3 text-[#28B52C]" />
                      <span>{tag}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="text-xs font-bold text-[#8E9398] uppercase tracking-wider mb-3">
                    Browse Top Departments
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {CATEGORIES.slice(0, 6).map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleSelectCategory(c.slug)}
                        className="p-2.5 rounded-xl bg-[#1A1D20] hover:bg-[#25282B] text-left transition-colors flex items-center justify-between"
                      >
                        <span className="text-xs font-bold text-white">{c.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#28B52C]" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : matchingProducts.length === 0 && matchingCategories.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-sm font-bold text-white mb-1">
                  No matches found for "{searchQuery}"
                </p>
                <p className="text-xs text-[#8E9398]">
                  Try searching for general terms like "laptop", "mouse", "audio", or "charger".
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {matchingCategories.length > 0 && (
                  <div>
                    <div className="text-xs font-bold text-[#28B52C] uppercase tracking-wider mb-2">
                      Matching Categories ({matchingCategories.length})
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {matchingCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleSelectCategory(cat.slug)}
                          className="px-3.5 py-2 rounded-xl bg-[#1A1D20] hover:bg-[#28B52C] hover:text-[#111315] text-xs font-bold text-white transition-all flex items-center gap-2"
                        >
                          <span>{cat.name}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {matchingProducts.length > 0 && (
                  <div>
                    <div className="text-xs font-bold text-[#8E9398] uppercase tracking-wider mb-3">
                      Products ({matchingProducts.length})
                    </div>
                    <div className="space-y-2.5">
                      {matchingProducts.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => handleSelectProduct(prod)}
                          className="p-3 rounded-xl bg-[#1A1D20] hover:bg-[#25282B] border border-white/5 hover:border-[#28B52C]/30 flex items-center justify-between gap-4 cursor-pointer transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex-shrink-0 flex items-center justify-center">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="text-left">
                              <h4 className="text-sm font-bold text-white hover:text-[#28B52C] transition-colors">
                                {prod.name}
                              </h4>
                              <div className="flex items-center gap-2 mt-0.5 text-xs text-[#8E9398]">
                                <span className="text-[#28B52C] font-semibold">
                                  {prod.category}
                                </span>
                                <span>•</span>
                                <div className="flex items-center gap-1 text-amber-400">
                                  <Star className="w-3 h-3 fill-current" />
                                  <span className="text-white text-[11px] font-bold">
                                    {prod.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="text-right flex-shrink-0">
                            <div className="text-sm font-extrabold text-[#28B52C]">
                              ${prod.price.toFixed(2)}
                            </div>
                            {prod.originalPrice && (
                              <div className="text-[11px] text-[#8E9398] line-through">
                                ${prod.originalPrice.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
