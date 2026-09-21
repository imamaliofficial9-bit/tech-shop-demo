import React, { useState } from 'react';
import { Mail, Check, Shield } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Newsletter: React.FC = () => {
  const { addToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    addToast({
      type: 'success',
      title: 'Subscribed to VIP Tech Alerts',
      message: `Welcome aboard! We've sent a 10% welcome coupon to ${email}`,
    });
  };

  return (
    <section className="py-16 bg-[#0D0E10] border-t border-white/5 relative overflow-hidden">
      {/* Subtle radial emerald glow */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[600px] h-[300px] bg-[#28B52C]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1D20] border border-[#28B52C]/30 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>EXCLUSIVE TECH CLUB</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Stay Ahead of the Tech Curve
        </h2>

        <p className="text-sm sm:text-base text-[#9FA4A8] max-w-xl mx-auto mb-8 leading-relaxed">
          Get new arrivals, flash sale alerts, and useful tech updates delivered directly to your inbox. No spam, ever.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1A1D20] border border-[#28B52C]/50 text-white shadow-xl animate-fadeIn">
            <div className="w-8 h-8 rounded-full bg-[#28B52C] text-black flex items-center justify-center font-bold">
              <Check className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">You're Subscribed!</p>
              <p className="text-xs text-[#9FA4A8]">Check your inbox for your exclusive welcome offer.</p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9398]" />
              <input
                type="email"
                required
                placeholder="Enter your work or personal email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#1A1D20] border border-white/15 text-white placeholder-[#6B7075] text-sm focus:border-[#28B52C] outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto flex-shrink-0 px-7 py-3.5 rounded-xl bg-[#28B52C] hover:bg-[#168C24] text-white font-bold text-sm shadow-lg shadow-[#28B52C]/20 hover:brightness-105 active:scale-95 transition-all"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#8E9398]">
          <Shield className="w-3.5 h-3.5 text-[#28B52C]" />
          <span>We respect your privacy. Unsubscribe anytime with 1-click.</span>
        </div>
      </div>
    </section>
  );
};
