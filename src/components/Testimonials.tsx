import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F6F7F8] border-b border-[#E8EAEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-2">
            <span>REAL BUYER EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111315] tracking-tight">
            What Customers Say
          </h2>
          <p className="text-base text-[#6B7075] mt-3">
            Real feedback from tech enthusiasts, remote professionals, and everyday device buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-white border border-[#E8EAEC] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E8EAEC]" />
                </div>

                {/* Quote */}
                <p className="text-sm text-[#111315] leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0F2F4]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#111315]">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#8E9398]">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#28B52C]">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <div className="mt-2 text-[11px] text-[#6B7075] bg-[#F6F7F8] px-2.5 py-1 rounded-md inline-block">
                  Purchased: {testimonial.productPurchased}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
