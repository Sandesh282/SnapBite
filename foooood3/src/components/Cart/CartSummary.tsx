import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const glassCard = 'relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden';

const CartSummary: React.FC = () => {
  const { subtotal, totalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const deliveryFee = 49; // Updated to ₹49
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + deliveryFee + tax;
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=checkout');
      return;
    }
    
    navigate('/checkout');
  };
  
  return (
    <div className={glassCard + " p-8"}>
      {/* Glass gradient overlay for extra depth */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(120deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.08) 100%)'}} />
      <h2 className="text-2xl font-bold mb-6 relative z-10">Order Summary</h2>
      
      <div className="space-y-3 mb-4 relative z-10">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>GST (18%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="border-t border-white/40 pt-4 mb-6 relative z-10">
        <div className="flex justify-between text-xl font-bold text-gray-900">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
      
      <button
        onClick={handleCheckout}
        disabled={totalItems === 0}
        className={`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 text-white font-medium relative z-10 ${
          totalItems === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-rose-600 hover:bg-rose-700 transition-colors'
        }`}
      >
        <ShoppingBag size={20} />
        <span>Proceed to Checkout</span>
      </button>
      
      <div className="mt-4 relative z-10">
        <button
          onClick={() => navigate('/menu')}
          className="w-full text-rose-600 hover:text-rose-700 font-semibold mt-2 transition-all"
        >
          Continue Shopping
        </button>
      </div>
      {/* Inner border for extra glass depth */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'}} />
    </div>
  );
};

export default CartSummary;