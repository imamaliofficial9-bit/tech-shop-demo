import React from 'react';
import { CheckCircle2, Heart, ShoppingCart, Info, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isCart = toast.type === 'cart';
        const isWishlist = toast.type === 'wishlist';

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl bg-[#111315] border border-white/15 text-white shadow-2xl animate-slideUp backdrop-blur-md"
          >
            <div className="flex-shrink-0 mt-0.5">
              {isSuccess && (
                <CheckCircle2 className="w-5 h-5 text-[#28B52C]" />
              )}
              {isCart && (
                <ShoppingCart className="w-5 h-5 text-[#28B52C]" />
              )}
              {isWishlist && (
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              )}
              {!isSuccess && !isCart && !isWishlist && (
                <Info className="w-5 h-5 text-sky-400" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-white mb-0.5">
                {toast.title}
              </h4>
              <p className="text-xs text-[#9FA4A8] leading-relaxed break-words">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 p-1 text-[#8E9398] hover:text-white rounded-lg transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
