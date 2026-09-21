import React from 'react';
import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

export const BenefitStrip: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Fast & Reliable Delivery',
      description: 'Quick dispatch nationwide with safe parcel tracking.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Tech Products',
      description: '100% genuine devices & manufacturer-backed warranty.',
    },
    {
      icon: CreditCard,
      title: 'Secure Shopping',
      description: 'Cash on Delivery, Bank Transfer & secure in-store checkout.',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Friendly technical assistance before and after purchase.',
    },
  ];

  return (
    <section className="bg-[#1A1D20] border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 px-2 lg:px-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#25282B] border border-white/5 flex items-center justify-center text-[#28B52C] group-hover:border-[#28B52C]/40 group-hover:bg-[#28B52C]/10 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-[#8E9398] mt-1 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
