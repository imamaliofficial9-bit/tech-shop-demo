import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles } from 'lucide-react';
import { useShop, WHATSAPP_NUMBER } from '../context/ShopContext';

export const FloatingWhatsAppButton: React.FC = () => {
  const { openWhatsAppGeneral } = useShop();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      {/* Popover Bubble */}
      {showTooltip && (
        <div className="relative bg-[#111315] text-white border border-[#28B52C]/40 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn max-w-[260px]">
          <div className="w-2 h-2 rounded-full bg-[#28B52C] animate-ping flex-shrink-0"></div>
          <div className="text-left">
            <p className="text-xs font-bold text-white flex items-center gap-1">
              <span>Chat with Hardware Rep</span>
            </p>
            <p className="text-[11px] text-[#9FA4A8]">Direct WhatsApp stock check</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-[#8E9398] hover:text-white p-1 ml-auto"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <button
        onClick={openWhatsAppGeneral}
        aria-label="Chat with AL FAIZ COMMUNICATION on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#28B52C] hover:bg-[#168C24] text-white shadow-xl shadow-[#28B52C]/30 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 fill-current text-[#111315]" />
        <span className="text-xs font-extrabold text-[#111315] hidden sm:inline-block">
          Need Help? Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};
