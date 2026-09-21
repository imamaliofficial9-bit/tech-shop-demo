/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitStrip } from './components/BenefitStrip';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PromotionalBanner } from './components/PromotionalBanner';
import { FreshArrivalsCarousel } from './components/FreshArrivalsCarousel';
import { BestSellersSection } from './components/BestSellersSection';
import { LifestylePromotion } from './components/LifestylePromotion';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { WhatsAppContactSection } from './components/WhatsAppContactSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

// Modals & Overlays
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ToastContainer } from './components/ToastContainer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-[#F6F7F8] text-[#111315] font-sans antialiased selection:bg-[#28B52C] selection:text-white flex flex-col">
        {/* Sticky Header with Navigation, Search, and Cart */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Banner with Dynamic CTA & Showcase */}
          <Hero />

          {/* Quick Value Propositions Strip */}
          <BenefitStrip />

          {/* Popular Categories Grid */}
          <CategoryGrid />

          {/* Featured Tech Products with Category Filters & Sorting */}
          <FeaturedProducts />

          {/* Promotional Banner: Power Up Your Productivity */}
          <PromotionalBanner />

          {/* Fresh Arrivals Carousel */}
          <FreshArrivalsCarousel />

          {/* Customer Favorites / Best Sellers */}
          <BestSellersSection />

          {/* Lifestyle Technology Section */}
          <LifestylePromotion />

          {/* Why Shop With AL FAIZ COMMUNICATION */}
          <WhyChooseUs />

          {/* Verified Customer Feedback */}
          <Testimonials />

          {/* Direct WhatsApp Technical Consultation & Store Map */}
          <WhatsAppContactSection />

          {/* Exclusive VIP Tech Newsletter */}
          <Newsletter />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Drawers & Overlays */}
        <CartDrawer />
        <WishlistDrawer />
        <SearchModal />
        <ProductDetailModal />
        <CheckoutModal />
        <ToastContainer />
        <FloatingWhatsAppButton />
      </div>
    </ShopProvider>
  );
}
