import React from 'react';
import { ShieldCheck, Headphones, Tag, ShoppingBag } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Quality Products',
      description:
        'Every device is sourced directly through certified distributor channels, fully PTA compliant and backed by official manufacturer warranties.',
    },
    {
      icon: Headphones,
      title: 'Helpful Customer Service',
      description:
        'Our knowledgeable team offers genuine hardware advice before purchase and responsive warranty support throughout your device ownership.',
    },
    {
      icon: Tag,
      title: 'Competitive Prices',
      description:
        'We believe in honest, transparent market pricing. Enjoy premium global electronics and accessories without excessive markups.',
    },
    {
      icon: ShoppingBag,
      title: 'Convenient Shopping',
      description:
        'Order online with nationwide Cash on Delivery, instant WhatsApp ordering, or visit our retail store to inspect products in person.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E8EAEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-2">
            <span>OUR CORE COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111315] tracking-tight">
            Why Shop With AL FAIZ COMMUNICATION?
          </h2>
          <p className="text-base text-[#6B7075] mt-3">
            Built on integrity, technical expertise, and dependable service for technology lovers across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#F6F7F8] border border-[#E8EAEC] hover:border-[#28B52C]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EAEC] group-hover:bg-[#28B52C] group-hover:border-[#28B52C] text-[#28B52C] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111315] mb-2 group-hover:text-[#111315]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7075] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
