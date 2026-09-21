import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Tag, MessageCircle } from 'lucide-react';
import { useShop, WHATSAPP_NUMBER } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    cartCount,
    freeShippingThreshold,
    setIsCheckoutOpen,
    orderViaWhatsApp,
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'TECH10') {
      setDiscountPercent(10);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "TECH10" for 10% off!');
    }
  };

  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const shippingFee = cart.length === 0 ? 0 : isFreeShipping ? 0 : 15;
  const grandTotal = cartSubtotal - discountAmount + shippingFee;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111315] border-l border-white/10 text-white flex flex-col shadow-2xl">
          {/* Cart Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#28B52C]" />
              <h2 className="text-lg font-extrabold text-white">Your Tech Cart</h2>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#28B52C]/20 text-[#28B52C] border border-[#28B52C]/30">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg bg-[#1A1D20] text-[#9FA4A8] hover:text-white hover:bg-[#25282B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#1A1D20] p-4 border-b border-white/5">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="flex items-center gap-1.5 text-white">
                <Truck className="w-4 h-4 text-[#28B52C]" />
                {isFreeShipping ? (
                  <span className="font-bold text-[#28B52C]">
                    You've unlocked FREE Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-white">${amountToFreeShipping.toFixed(2)}</strong> more for Free Shipping
                  </span>
                )}
              </span>
              <span className="font-bold text-xs text-white/70">
                ${cartSubtotal.toFixed(0)} / ${freeShippingThreshold}
              </span>
            </div>
            <div className="w-full bg-[#25282B] h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#28B52C] to-[#38d43d] h-full transition-all duration-500 rounded-full"
                style={{
                  width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#1A1D20] border border-white/10 flex items-center justify-center text-[#8E9398] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Your cart is empty</h3>
                <p className="text-xs text-[#8E9398] max-w-xs mb-6">
                  Explore our smartphones, laptops, audio devices, and accessories.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#28B52C] text-white font-bold text-xs hover:bg-[#168C24] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 rounded-xl bg-[#1A1D20] border border-white/5 relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg bg-white p-2 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start pr-6">
                        <h4 className="text-xs font-bold text-white line-clamp-1">
                          {item.product.name}
                        </h4>
                      </div>
                      <span className="text-[10px] text-[#28B52C] font-semibold">
                        {item.product.category}
                      </span>
                      <div className="text-xs font-extrabold text-white mt-1">
                        ${item.product.price.toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-2 bg-[#111315] border border-white/10 rounded-lg px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-[#9FA4A8] hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1 text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-[#9FA4A8] hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#28B52C]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label="Remove item"
                    className="absolute top-3 right-3 text-[#6B7075] hover:text-rose-400 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#0D0E10] border-t border-white/10 space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#8E9398] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Coupon (try TECH10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#1A1D20] border border-white/10 rounded-lg text-white placeholder-[#6B7075] outline-none focus:border-[#28B52C]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#25282B] hover:bg-[#28B52C] hover:text-[#111315] text-xs font-bold rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#9FA4A8]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">${cartSubtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-[#28B52C]">
                    <span>Discount (10% VIP)</span>
                    <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-white">
                    {shippingFee === 0 ? (
                      <span className="text-[#28B52C] font-bold">FREE</span>
                    ) : (
                      `$${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-extrabold text-white">
                  <span>Estimated Total</span>
                  <span className="text-[#28B52C]">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#28B52C] to-[#168C24] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#28B52C]/20 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#1A1D20] hover:bg-[#25282B] text-[#28B52C] font-bold text-xs flex items-center justify-center gap-2 border border-[#28B52C]/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Instant Order on WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
