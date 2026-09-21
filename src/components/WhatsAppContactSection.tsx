import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight, Send, Check } from 'lucide-react';
import { useShop, WHATSAPP_NUMBER, CLEAN_WHATSAPP_NUMBER } from '../context/ShopContext';

export const WhatsAppContactSection: React.FC = () => {
  const { openWhatsAppGeneral, addToast } = useShop();

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [interestedItem, setInterestedItem] = useState('smartphones');
  const [inquiryNote, setInquiryNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    const text = encodeURIComponent(
      `👋 *NEW CUSTOMER INQUIRY - AL FAIZ COMMUNICATION*\n----------------------------------------\nName: ${inquiryName}\nPhone: ${inquiryPhone}\nInterested Category: ${interestedItem.toUpperCase()}\nDetails / Looking for: ${inquiryNote || 'General inquiry'}\n----------------------------------------\nPlease share availability, best pricing, and recommendations!`
    );

    window.open(`https://wa.me/${CLEAN_WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSubmitted(true);
    addToast({
      type: 'success',
      title: 'Inquiry Sent',
      message: 'Opening WhatsApp chat with our technical sales team!',
    });
  };

  return (
    <section id="contact-whatsapp" className="py-20 bg-[#111315] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#28B52C]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Contact & Store Info (~50%) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28B52C]/10 border border-[#28B52C]/30 text-[#28B52C] text-xs font-bold uppercase tracking-wider mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>DIRECT EXPERT ASSISTANCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Need Help Finding the <span className="text-[#28B52C]">Right Tech?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9FA4A8] leading-relaxed mb-8 max-w-lg">
              Tell us what you're looking for and our team can help you find the right device, check real-time stock, or prepare your in-store pickup.
            </p>

            {/* Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {/* WhatsApp Lead Card */}
              <div 
                onClick={openWhatsAppGeneral}
                className="p-5 rounded-2xl bg-[#1A1D20] border border-[#28B52C]/40 hover:border-[#28B52C] cursor-pointer transition-all group shadow-lg shadow-[#28B52C]/5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#28B52C] text-[#111315] flex items-center justify-center font-bold">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#28B52C] transition-colors">
                      WhatsApp Chat
                    </h4>
                    <span className="text-[11px] text-[#28B52C] font-semibold">Avg reply: &lt; 5 mins</span>
                  </div>
                </div>
                <p className="text-xs text-[#9FA4A8]">
                  Click to chat directly: <strong className="text-white">{WHATSAPP_NUMBER}</strong>
                </p>
              </div>

              {/* Phone Hotline */}
              <div className="p-5 rounded-2xl bg-[#1A1D20] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#25282B] text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Call Support</h4>
                    <span className="text-[11px] text-[#8E9398]">Mon - Sat: 10AM - 9PM</span>
                  </div>
                </div>
                <p className="text-xs text-[#9FA4A8]">
                  Direct inquiries: <span className="text-white">{WHATSAPP_NUMBER}</span>
                </p>
              </div>

              {/* Store Location */}
              <div className="p-5 rounded-2xl bg-[#1A1D20] border border-white/10 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25282B] text-[#28B52C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      AL FAIZ COMMUNICATION Showroom & Service Center
                    </h4>
                    <p className="text-xs text-[#9FA4A8] leading-relaxed">
                      Shop #14-18, Prime Commercial Plaza, Hafeez Centre Main Boulevard, Gulberg III, Lahore, Pakistan
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-[#28B52C]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Open Today until 9:00 PM • Free parking available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Card (~50%) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#1A1D20] border border-white/15 p-7 sm:p-9 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Request a Quick Quote / Callback
                  </h3>
                  <p className="text-xs text-[#9FA4A8] mt-1">
                    Send your model requirement directly to our counter managers.
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#28B52C] animate-ping"></div>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#28B52C]/20 border border-[#28B52C] flex items-center justify-center text-[#28B52C] mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Inquiry Transferred to WhatsApp
                  </h4>
                  <p className="text-xs text-[#9FA4A8] max-w-sm mb-6">
                    Our technical representative is ready to help you with pricing, discounts, and dispatch details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#28B52C] hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Usman"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#111315] border border-white/10 text-white placeholder-[#6B7075] text-sm focus:border-[#28B52C] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1.5">
                      WhatsApp / Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#111315] border border-white/10 text-white placeholder-[#6B7075] text-sm focus:border-[#28B52C] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1.5">
                      Device Category
                    </label>
                    <select
                      value={interestedItem}
                      onChange={(e) => setInterestedItem(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#111315] border border-white/10 text-white text-sm focus:border-[#28B52C] outline-none transition-colors"
                    >
                      <option value="smartphones">Smartphones & Mobile Devices</option>
                      <option value="laptops">Laptops & Workstations</option>
                      <option value="accessories">Computer Accessories</option>
                      <option value="audio">Audio & Headphones</option>
                      <option value="smart-devices">Smartwatches & Gadgets</option>
                      <option value="chargers">Fast Chargers & Cables</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1.5">
                      Which model or specs are you looking for? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking for Apex 5G 512GB in Black or recommended noise-cancelling headphones..."
                      value={inquiryNote}
                      onChange={(e) => setInquiryNote(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#111315] border border-white/10 text-white placeholder-[#6B7075] text-sm focus:border-[#28B52C] outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#28B52C] to-[#168C24] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#28B52C]/25 hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-[#8E9398] text-center">
                    Instant direct conversation with AL FAIZ COMMUNICATION support. No spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
