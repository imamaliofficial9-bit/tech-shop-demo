import React from 'react';
import { Star, Heart, ShoppingBag, Eye, MessageCircle, Check } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct,
    inquireProductWhatsApp 
  } = useShop();

  const isFavorite = isInWishlist(product.id);

  return (
    <div className="group rounded-2xl bg-white border border-[#E8EAEC] hover:border-[#28B52C]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Image Area */}
      <div className="relative aspect-square w-full bg-[#F6F7F8] p-6 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-108"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge === 'New' && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#28B52C] text-white text-[11px] font-bold shadow-sm">
              NEW
            </span>
          )}
          {product.badge === 'Sale' && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#E53E3E] text-white text-[11px] font-bold shadow-sm">
              SALE
            </span>
          )}
          {product.badge === 'Bestseller' && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#111315] text-white text-[11px] font-bold border border-white/10 shadow-sm">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 z-10 ${
            isFavorite
              ? 'bg-rose-50 text-rose-600 shadow'
              : 'bg-white/90 text-[#6B7075] hover:text-rose-500 hover:bg-white shadow-sm'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Button (Desktop) */}
        <div className="absolute inset-x-4 bottom-3 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-full py-2 px-3 rounded-lg bg-[#111315]/90 backdrop-blur-sm text-white text-xs font-semibold hover:bg-black flex items-center justify-center gap-1.5 shadow-lg border border-white/10"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#6B7075] mb-2">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-[#28B52C]">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-[#111315]">{product.rating}</span>
              <span className="text-[#8E9398]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => setQuickViewProduct(product)}
            className="text-base font-bold text-[#111315] hover:text-[#28B52C] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#6B7075] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Section */}
        <div className="mt-5 pt-3 border-t border-[#F0F2F4]">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-[#111315]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#8E9398] line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-[11px] font-bold text-[#28B52C] bg-[#EAF8EA] px-2 py-0.5 rounded">
                Save ${(product.originalPrice - product.price).toFixed(0)}
              </span>
            )}
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-5 gap-2">
            {/* Add To Cart Button (Span 4) */}
            <button
              onClick={() => addToCart(product, 1)}
              className="col-span-4 py-2.5 px-3 rounded-xl bg-[#28B52C] hover:bg-[#168C24] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>

            {/* Direct WhatsApp Inquire (Span 1) */}
            <button
              onClick={() => inquireProductWhatsApp(product)}
              title="Inquire on WhatsApp"
              aria-label="Inquire product on WhatsApp"
              className="col-span-1 py-2.5 rounded-xl bg-[#EAF8EA] hover:bg-[#d5f3d5] text-[#168C24] flex items-center justify-center transition-colors border border-[#28B52C]/20"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
