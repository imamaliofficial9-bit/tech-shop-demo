import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setQuickViewProduct,
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = wishlist
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111315] border-l border-white/10 text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h2 className="text-lg font-extrabold text-white">Your Saved Tech</h2>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                {wishlistProducts.length}
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-lg bg-[#1A1D20] text-[#9FA4A8] hover:text-white hover:bg-[#25282B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#1A1D20] border border-white/10 flex items-center justify-center text-[#8E9398] mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-[#8E9398] max-w-xs mb-6">
                  Save items you love by tapping the heart icon on any device card.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#28B52C] text-white font-bold text-xs hover:bg-[#168C24] transition-colors"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              wishlistProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-xl bg-[#1A1D20] border border-white/5 relative group"
                >
                  {/* Thumbnail */}
                  <div
                    onClick={() => {
                      setQuickViewProduct(item);
                      setIsWishlistOpen(false);
                    }}
                    className="w-20 h-20 rounded-lg bg-white p-2 flex-shrink-0 flex items-center justify-center overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4
                        onClick={() => {
                          setQuickViewProduct(item);
                          setIsWishlistOpen(false);
                        }}
                        className="text-xs font-bold text-white line-clamp-1 cursor-pointer hover:text-[#28B52C] transition-colors"
                      >
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-[#28B52C] font-semibold">
                        {item.category}
                      </span>
                      <div className="text-xs font-extrabold text-white mt-1">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
                      <button
                        onClick={() => addToCart(item, 1)}
                        className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#28B52C] hover:bg-[#168C24] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Move to Cart</span>
                      </button>

                      <button
                        onClick={() => toggleWishlist(item)}
                        className="p-1.5 rounded-lg bg-[#25282B] text-[#9FA4A8] hover:text-rose-400 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
