export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  galleryImages: string[];
  badge?: 'New' | 'Sale' | 'Bestseller';
  shortDescription: string;
  fullDescription: string;
  specs: Record<string, string>;
  features: string[];
  inStock: boolean;
  stockCount: number;
  sku: string;
  warranty: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  productPurchased: string;
  rating: number;
  verified: boolean;
  date: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'cart' | 'wishlist';
  title: string;
  message: string;
  productImage?: string;
}
