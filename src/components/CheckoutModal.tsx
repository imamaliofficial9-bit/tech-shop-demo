import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Truck, 
  Building, 
  CreditCard, 
  MessageCircle, 
  ShieldCheck, 
  ShoppingBag, 
  ArrowLeft,
  Store,
  Check
} from 'lucide-react';
import { useShop, CLEAN_WHATSAPP_NUMBER, WHATSAPP_NUMBER } from '../context/ShopContext';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    freeShippingThreshold,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    addToast,
  } = useShop();

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Lahore');
  const [postalCode, setPostalCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank' | 'pickup'>('cod');
  const [orderNotes, setOrderNotes] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedOrderId, setCompletedOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const shippingCost = paymentMethod === 'pickup' ? 0 : isFreeShipping ? 0 : 15;
  const totalAmount = cartSubtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || (paymentMethod !== 'pickup' && !address.trim())) {
      alert('Please fill in your name, contact phone, and delivery address.');
      return;
    }

    const orderId = 'AFC-' + Math.floor(100000 + Math.random() * 900000);
    setCompletedOrderId(orderId);

    // Format WhatsApp order payload
    const itemsList = cart
      .map(
        (i, index) =>
          `${index + 1}. ${i.product.name} (Qty: ${i.quantity}) - $${(
            i.product.price * i.quantity
          ).toFixed(2)}`
      )
      .join('\n');

    const paymentLabel =
      paymentMethod === 'cod'
        ? 'Cash on Delivery (COD)'
        : paymentMethod === 'bank'
        ? 'Direct Bank Transfer / Raast'
        : 'Store Counter Pickup (Hafeez Centre)';

    const message = encodeURIComponent(
      `🛒 *NEW ORDER - AL FAIZ COMMUNICATION*\n` +
      `----------------------------------------\n` +
      `*Order ID:* ${orderId}\n` +
      `*Customer:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      (email ? `*Email:* ${email}\n` : '') +
      `*City:* ${city}\n` +
      `*Delivery Address:* ${paymentMethod === 'pickup' ? 'Counter Pickup (Shop #14-18, Hafeez Centre)' : address}\n` +
      `*Payment Method:* ${paymentLabel}\n` +
      `----------------------------------------\n` +
      `*ORDER ITEMS:*\n${itemsList}\n` +
      `----------------------------------------\n` +
      `*Subtotal:* $${cartSubtotal.toFixed(2)}\n` +
      `*Shipping:* ${shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}\n` +
      `*GRAND TOTAL:* $${totalAmount.toFixed(2)}\n` +
      (orderNotes ? `*Special Notes:* ${orderNotes}\n` : '') +
      `----------------------------------------\n` +
      `Please confirm order dispatch and delivery timeline!`
    );

    if (viaWhatsApp) {
      window.open(`https://wa.me/${CLEAN_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }

    setIsCompleted(true);
    clearCart();
    addToast({
      type: 'success',
      title: 'Order Submitted!',
      message: `Order #${orderId} placed successfully. Our team will verify shortly.`,
    });
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      <div className="relative min-h-screen px-4 flex items-center justify-center py-10">
        <div className="relative w-full max-w-3xl bg-[#111315] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 text-white">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#28B52C]" />
              <h2 className="text-lg font-extrabold text-white">
                {isCompleted ? 'Order Confirmed' : 'Secure Checkout'}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-[#1A1D20] text-[#9FA4A8] hover:text-white hover:bg-[#25282B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isCompleted ? (
            /* Order Success View */
            <div className="p-8 sm:p-12 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#28B52C]/20 border border-[#28B52C] flex items-center justify-center text-[#28B52C] mb-6 shadow-xl shadow-[#28B52C]/20">
                <Check className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Thank You for Your Order!
              </h3>
              <p className="text-sm text-[#9FA4A8] max-w-md mb-6">
                Your order reference is <strong className="text-white font-mono">{completedOrderId}</strong>. Our team is preparing your hardware package.
              </p>

              <div className="w-full max-w-md p-5 rounded-2xl bg-[#1A1D20] border border-white/10 text-left mb-8 space-y-3 text-xs text-[#9FA4A8]">
                <div className="flex justify-between">
                  <span>Customer Name:</span>
                  <span className="font-semibold text-white">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact Phone:</span>
                  <span className="font-semibold text-white">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Selection:</span>
                  <span className="font-semibold text-[#28B52C] uppercase">
                    {paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white">
                  <span>Total Payable:</span>
                  <span className="text-[#28B52C]">${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(
                      `Hi AL FAIZ COMMUNICATION! I just placed order *${completedOrderId}*. Please share the tracking info once dispatched.`
                    );
                    window.open(`https://wa.me/${CLEAN_WHATSAPP_NUMBER}?text=${text}`, '_blank');
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-[#28B52C] hover:bg-[#168C24] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#28B52C]/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Check Tracking via WhatsApp</span>
                </button>

                <button
                  onClick={handleClose}
                  className="px-6 py-3.5 rounded-xl bg-[#1A1D20] hover:bg-[#25282B] text-white font-bold text-xs border border-white/10 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form className="p-6 sm:p-8 space-y-8">
              {/* Items summary */}
              <div className="p-4 rounded-2xl bg-[#1A1D20] border border-white/5">
                <div className="flex items-center justify-between text-xs font-bold text-[#8E9398] uppercase tracking-wider mb-3">
                  <span>Items in Order ({cart.length})</span>
                  <span>Subtotal: ${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="max-h-36 overflow-y-auto space-y-2 pr-1 no-scrollbar">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between text-xs py-1">
                      <span className="text-white line-clamp-1 flex-1 pr-4">
                        {item.quantity}x {item.product.name}
                      </span>
                      <span className="font-semibold text-[#28B52C] flex-shrink-0">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Details */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#28B52C] text-[#111315] text-[11px] font-extrabold flex items-center justify-center">
                    1
                  </span>
                  Customer & Shipping Address
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Ahmed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1D20] border border-white/10 text-white placeholder-[#6B7075] text-xs focus:border-[#28B52C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1">
                      WhatsApp / Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1D20] border border-white/10 text-white placeholder-[#6B7075] text-xs focus:border-[#28B52C] outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1D20] border border-white/10 text-white placeholder-[#6B7075] text-xs focus:border-[#28B52C] outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1">
                      Full Street Address / House / Plaza *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. House #12, Street 4, Sector G-10/2"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1D20] border border-white/10 text-white placeholder-[#6B7075] text-xs focus:border-[#28B52C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1D20] border border-white/10 text-white text-xs focus:border-[#28B52C] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9FA4A8] mb-1">
                      Order Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Special delivery instructions"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1D20] border border-white/10 text-white placeholder-[#6B7075] text-xs focus:border-[#28B52C] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#28B52C] text-[#111315] text-[11px] font-extrabold flex items-center justify-center">
                    2
                  </span>
                  Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* COD */}
                  <div
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'bg-[#28B52C]/10 border-[#28B52C] text-white'
                        : 'bg-[#1A1D20] border-white/10 text-[#9FA4A8] hover:border-white/20'
                    }`}
                  >
                    <Truck className={`w-5 h-5 mb-2 ${paymentMethod === 'cod' ? 'text-[#28B52C]' : ''}`} />
                    <h4 className="text-xs font-bold text-white">Cash on Delivery</h4>
                    <p className="text-[11px] text-[#8E9398] mt-1">
                      Pay cash when rider arrives at your doorstep.
                    </p>
                  </div>

                  {/* Direct Bank / Raast */}
                  <div
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'bank'
                        ? 'bg-[#28B52C]/10 border-[#28B52C] text-white'
                        : 'bg-[#1A1D20] border-white/10 text-[#9FA4A8] hover:border-white/20'
                    }`}
                  >
                    <CreditCard className={`w-5 h-5 mb-2 ${paymentMethod === 'bank' ? 'text-[#28B52C]' : ''}`} />
                    <h4 className="text-xs font-bold text-white">Bank Transfer / Raast</h4>
                    <p className="text-[11px] text-[#8E9398] mt-1">
                      Direct deposit / EasyPaisa / JazzCash online.
                    </p>
                  </div>

                  {/* Store Pickup */}
                  <div
                    onClick={() => setPaymentMethod('pickup')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'pickup'
                        ? 'bg-[#28B52C]/10 border-[#28B52C] text-white'
                        : 'bg-[#1A1D20] border-white/10 text-[#9FA4A8] hover:border-white/20'
                    }`}
                  >
                    <Store className={`w-5 h-5 mb-2 ${paymentMethod === 'pickup' ? 'text-[#28B52C]' : ''}`} />
                    <h4 className="text-xs font-bold text-white">Counter Pickup</h4>
                    <p className="text-[11px] text-[#8E9398] mt-1">
                      Collect in person at Hafeez Centre showroom.
                    </p>
                  </div>
                </div>
              </div>

              {/* Total & Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>Grand Total to Pay:</span>
                  <span className="text-2xl text-[#28B52C]">${totalAmount.toFixed(2)}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={(e) => handlePlaceOrder(e, true)}
                    className="py-4 px-4 rounded-xl bg-gradient-to-r from-[#28B52C] to-[#168C24] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#28B52C]/25 hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Place Order via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handlePlaceOrder(e, false)}
                    className="py-4 px-4 rounded-xl bg-[#25282B] hover:bg-[#32363A] text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#28B52C]" />
                    <span>Confirm Order Directly</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#8E9398]">
                  <ShieldCheck className="w-4 h-4 text-[#28B52C]" />
                  <span>All shipments are insured and inspectable upon delivery</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
