import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Heart, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  MessageCircle, 
  Plus, 
  Minus,
  Sparkles,
  Share2
} from 'lucide-react';
import { useShop, CLEAN_WHATSAPP_NUMBER } from '../context/ShopContext';

export const ProductDetailModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCheckoutOpen,
    addToast
  } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'shipping'>('overview');

  if (!quickViewProduct) return null;

  const inWish = isInWishlist(quickViewProduct.id);
  const gallery: string[] = quickViewProduct.galleryImages && quickViewProduct.galleryImages.length > 0 
    ? quickViewProduct.galleryImages 
    : [quickViewProduct.image];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleInquireWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello AL FAIZ COMMUNICATION! I have a question about *${quickViewProduct.name}* (SKU: ${quickViewProduct.sku}, Price: $${quickViewProduct.price}). Is it currently available for immediate dispatch/pickup?`
    );
    window.open(`https://wa.me/${CLEAN_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast({
        type: 'info',
        title: 'Link Copied',
        message: 'Product link copied to clipboard!',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      ></div>

      <div className="relative min-h-screen px-4 flex items-center justify-center py-10">
        <div className="relative w-full max-w-4xl bg-[#111315] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 text-white">
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#1A1D20] text-[#9FA4A8] hover:text-white hover:bg-[#25282B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            {/* Left Gallery (col-span-6) */}
            <div className="md:col-span-6 flex flex-col items-center">
              {/* Main Active Image Showcase */}
              <div className="relative w-full aspect-square rounded-2xl bg-white p-6 flex items-center justify-center overflow-hidden border border-white/10 group">
                <img
                  src={gallery[selectedImageIndex] || quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {quickViewProduct.badge && (
                  <span className="absolute top-4 left-4 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider bg-[#111315] text-[#28B52C] border border-[#28B52C]/30 shadow-md">
                    {quickViewProduct.badge}
                  </span>
                )}
              </div>

              {/* Thumbnail strip */}
              {gallery.length > 1 && (
                <div className="flex gap-2.5 mt-4 w-full overflow-x-auto pb-1 no-scrollbar">
                  {gallery.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl bg-white p-1.5 flex-shrink-0 flex items-center justify-center border-2 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-[#28B52C] scale-105'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumb ${idx}`}
                        className="w-full h-full object-contain mix-blend-multiply"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges under gallery */}
              <div className="grid grid-cols-3 gap-2 mt-6 w-full pt-4 border-t border-white/5 text-[11px] text-[#9FA4A8] text-center">
                <div className="flex flex-col items-center p-2 rounded-xl bg-[#1A1D20]/50">
                  <ShieldCheck className="w-4 h-4 text-[#28B52C] mb-1" />
                  <span>100% Genuine</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-xl bg-[#1A1D20]/50">
                  <Truck className="w-4 h-4 text-[#28B52C] mb-1" />
                  <span>Express Courier</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-xl bg-[#1A1D20]/50">
                  <RotateCcw className="w-4 h-4 text-[#28B52C] mb-1" />
                  <span>7-Day Return</span>
                </div>
              </div>
            </div>

            {/* Right Product Details (col-span-6) */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                {/* Category & SKU */}
                <div className="flex items-center justify-between text-xs text-[#8E9398] mb-2">
                  <span className="text-[#28B52C] font-bold uppercase tracking-wider">
                    {quickViewProduct.category}
                  </span>
                  <span>SKU: {quickViewProduct.sku}</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                  {quickViewProduct.name}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(quickViewProduct.rating)
                            ? 'fill-current'
                            : 'text-[#2E3338]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">
                    {quickViewProduct.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-[#8E9398]">
                    ({quickViewProduct.reviewsCount} customer reviews)
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#8E9398]"></span>
                  <span className="text-xs font-semibold text-[#28B52C]">
                    {quickViewProduct.inStock ? 'In Stock (Ready to ship)' : 'Pre-Order'}
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-[#1A1D20] border border-white/5 mb-6">
                  <span className="text-3xl font-extrabold text-[#28B52C]">
                    ${quickViewProduct.price.toFixed(2)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-base text-[#8E9398] line-through">
                      ${quickViewProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {quickViewProduct.originalPrice && (
                    <span className="ml-auto text-xs font-bold px-2 py-1 rounded bg-[#28B52C]/20 text-[#28B52C]">
                      SAVE ${(quickViewProduct.originalPrice - quickViewProduct.price).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Short Highlights */}
                <ul className="space-y-1.5 mb-6 text-xs text-[#9FA4A8]">
                  {quickViewProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#28B52C] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Quantity & Add to Cart Controls */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#8E9398]">Quantity:</span>
                    <div className="flex items-center bg-[#1A1D20] border border-white/10 rounded-xl px-3 py-1.5">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-[#8E9398] hover:text-white p-1"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-white">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-[#8E9398] hover:text-white p-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => toggleWishlist(quickViewProduct)}
                      className={`p-2.5 rounded-xl border transition-all ${
                        inWish
                          ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                          : 'bg-[#1A1D20] border-white/10 text-[#8E9398] hover:text-white'
                      }`}
                      title={inWish ? 'Remove from wishlist' : 'Save to wishlist'}
                    >
                      <Heart className={`w-4 h-4 ${inWish ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      onClick={handleShare}
                      className="p-2.5 rounded-xl bg-[#1A1D20] border border-white/10 text-[#8E9398] hover:text-white transition-colors"
                      title="Share link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={handleAddToCart}
                      className="py-3.5 px-4 rounded-xl bg-[#28B52C] hover:bg-[#168C24] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#28B52C]/25 transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={handleBuyNow}
                      className="py-3.5 px-4 rounded-xl bg-white hover:bg-neutral-100 text-[#111315] font-extrabold text-xs flex items-center justify-center gap-2 shadow transition-all"
                    >
                      <span>Buy Now</span>
                    </button>
                  </div>

                  <button
                    onClick={handleInquireWhatsApp}
                    className="w-full py-2.5 rounded-xl bg-[#1A1D20] hover:bg-[#25282B] text-[#28B52C] border border-[#28B52C]/30 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire / Negotiate on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Tabs for specs / details */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex gap-4 border-b border-white/10 pb-2 mb-3 text-xs">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`font-bold transition-colors ${
                      activeTab === 'overview'
                        ? 'text-[#28B52C] border-b-2 border-[#28B52C] pb-2 -mb-2.5'
                        : 'text-[#8E9398] hover:text-white'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`font-bold transition-colors ${
                      activeTab === 'specs'
                        ? 'text-[#28B52C] border-b-2 border-[#28B52C] pb-2 -mb-2.5'
                        : 'text-[#8E9398] hover:text-white'
                    }`}
                  >
                    Technical Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`font-bold transition-colors ${
                      activeTab === 'shipping'
                        ? 'text-[#28B52C] border-b-2 border-[#28B52C] pb-2 -mb-2.5'
                        : 'text-[#8E9398] hover:text-white'
                    }`}
                  >
                    Warranty & Returns
                  </button>
                </div>

                <div className="text-xs text-[#9FA4A8] max-h-28 overflow-y-auto">
                  {activeTab === 'overview' && (
                    <p className="leading-relaxed">{quickViewProduct.fullDescription}</p>
                  )}
                  {activeTab === 'specs' && (
                    <div className="space-y-1.5">
                      {Object.entries(quickViewProduct.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-[#8E9398]">{key}</span>
                          <span className="font-semibold text-white">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === 'shipping' && (
                    <div className="space-y-2">
                      <p>
                        <strong className="text-white">Warranty:</strong>{' '}
                        {quickViewProduct.warranty || '1 Year Official Warranty'}
                      </p>
                      <p>
                        <strong className="text-white">Delivery:</strong> Nationwide courier in 24-48 hours. Cash on delivery available.
                      </p>
                      <p>
                        <strong className="text-white">Store Pickup:</strong> Free instant pickup at AL FAIZ COMMUNICATION, Hafeez Centre Lahore.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
