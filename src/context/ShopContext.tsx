import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ToastMessage } from '../types';
import { PRODUCTS } from '../data/products';

interface CustomerDetails {
  name: string;
  phone: string;
  city: string;
  address: string;
  paymentMethod: 'cod' | 'bank' | 'pickup';
  notes?: string;
}

interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  cartSubtotal: number;
  cartCount: number;
  freeShippingThreshold: number;
  
  wishlist: string[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
  
  whatsappNumber: string;
  inquireProductWhatsApp: (product: Product) => void;
  orderViaWhatsApp: (details: CustomerDetails) => void;
  openWhatsAppGeneral: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Editable WhatsApp Number for AL FAIZ COMMUNICATION business
export const WHATSAPP_NUMBER = '+92 300 1234567';
export const CLEAN_WHATSAPP_NUMBER = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Local storage initialized states
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('afc_cart');
      return saved ? JSON.parse(saved) : [
        // Believable initial item so cart drawer has previewable content
        { product: PRODUCTS[0], quantity: 1 }
      ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('afc_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[1].id, PRODUCTS[3].id];
    } catch {
      return [PRODUCTS[1].id];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('afc_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('afc_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [wishlist]);

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    addToast({
      type: 'cart',
      title: 'Added to Cart',
      message: `${product.name} (x${quantity}) has been added to your cart.`,
      productImage: product.image,
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast({
      type: 'info',
      title: 'Item Removed',
      message: 'Product removed from your shopping cart.',
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    if (wishlist.includes(product.id)) {
      setWishlist((prev) => prev.filter((id) => id !== product.id));
      addToast({
        type: 'wishlist',
        title: 'Removed from Wishlist',
        message: `${product.name} removed from your saved items.`,
      });
    } else {
      setWishlist((prev) => [...prev, product.id]);
      addToast({
        type: 'wishlist',
        title: 'Saved to Wishlist',
        message: `${product.name} added to your wishlist.`,
        productImage: product.image,
      });
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const freeShippingThreshold = 100; // Free delivery over $100

  // WhatsApp helpers for direct customer acquisition & inquiries
  const inquireProductWhatsApp = (product: Product) => {
    const text = encodeURIComponent(
      `Hello AL FAIZ COMMUNICATION! 👋\n\nI am interested in purchasing:\n*${product.name}*\nPrice: $${product.price.toFixed(2)}\nSKU: ${product.sku}\nCategory: ${product.category}\n\nPlease let me know if this item is in stock and available for delivery/pickup. Thank you!`
    );
    window.open(`https://wa.me/${CLEAN_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const orderViaWhatsApp = (details: CustomerDetails) => {
    const itemsList = cart
      .map(
        (item) =>
          `• ${item.product.name} x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}`
      )
      .join('\n');

    const total = cartSubtotal.toFixed(2);
    const text = encodeURIComponent(
      `🛒 *NEW ORDER - AL FAIZ COMMUNICATION*\n----------------------------------\n*Customer Details:*\nName: ${details.name}\nPhone: ${details.phone}\nCity: ${details.city}\nDelivery Address: ${details.address}\nPayment Preference: ${details.paymentMethod.toUpperCase()}\n\n*Order Items:*\n${itemsList}\n\n*Total Order Amount: $${total}*\n----------------------------------\nPlease confirm my order and share dispatch details!`
    );

    window.open(`https://wa.me/${CLEAN_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const openWhatsAppGeneral = () => {
    const text = encodeURIComponent(
      `Hello AL FAIZ COMMUNICATION! 👋\nI have a general tech inquiry regarding your smartphones, laptops, and gadget inventory.`
    );
    window.open(`https://wa.me/${CLEAN_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        cartCount,
        freeShippingThreshold,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        toasts,
        addToast,
        removeToast,
        whatsappNumber: WHATSAPP_NUMBER,
        inquireProductWhatsApp,
        orderViaWhatsApp,
        openWhatsAppGeneral,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
