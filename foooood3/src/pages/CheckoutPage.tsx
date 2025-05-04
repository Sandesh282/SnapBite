import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { CreditCard, Wallet2, IndianRupee, Banknote, Landmark } from 'lucide-react';

const glassCard = 'bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl';

const paymentOptions = [
  {
    id: 'cod',
    label: 'Cash on Delivery',
    icon: <Banknote className="w-6 h-6 text-rose-600" />, // You can use a cash icon
    logos: null,
  },
  {
    id: 'upi',
    label: 'UPI',
    icon: <IndianRupee className="w-6 h-6 text-green-600" />, // UPI icon
    logos: (
      <span className="flex space-x-1 ml-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/UPI-Logo-vector.svg/32px-UPI-Logo-vector.svg.png" alt="UPI" className="h-5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-5" />
      </span>
    ),
  },
  {
    id: 'credit',
    label: 'Credit Card',
    icon: <CreditCard className="w-6 h-6 text-blue-600" />, // Credit card icon
    logos: (
      <span className="flex space-x-1 ml-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Amex-logo.png" alt="Amex" className="h-5" />
      </span>
    ),
  },
  {
    id: 'debit',
    label: 'Debit Card',
    icon: <Landmark className="w-6 h-6 text-purple-600" />, // Debit card icon
    logos: (
      <span className="flex space-x-1 ml-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-5" />
      </span>
    ),
  },
];

const CheckoutPage: React.FC = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryFee = 49;
  const tax = subtotal * 0.18;
  const total = subtotal + deliveryFee + tax;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      alert('Order placed successfully!');
      navigate('/track-order', { state: { orderId: `ORD${Date.now().toString().slice(-8)}` } });
    } catch (error) {
      alert('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      <div
        className="bg-gradient-to-br min-h-screen pt-24 pb-16 flex items-center justify-center"
        style={{
          background:
            'linear-gradient(135deg, #f8bbd0 0%, #fce4ec 100%)',
        }}
      >
        <div className="w-full max-w-lg mx-auto">
          <div className={glassCard + " p-8"}>
            <h1 className="text-4xl font-bold text-center text-rose-900 mb-8">Payment</h1>
            <div className="bg-rose-50/60 backdrop-blur rounded-2xl p-6 mb-8 border border-white/20">
              <div className="text-lg font-semibold mb-4 text-rose-900">Payment Method</div>
              <div className="space-y-4">
                {paymentOptions.map(option => (
                  <label
                    key={option.id}
                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer border-2 transition-all duration-200 ${paymentMethod === option.id ? 'border-rose-500 bg-white/70 shadow' : 'border-transparent bg-white/30 hover:bg-white/50'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value={option.id}
                        checked={paymentMethod === option.id}
                        onChange={() => setPaymentMethod(option.id)}
                        className="form-radio accent-rose-500 w-5 h-5"
                      />
                      {option.icon}
                      <span className="font-medium text-gray-800 text-base">{option.label}</span>
                    </div>
                    {option.logos}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-lg font-semibold mb-6 px-2">
              <span>Order Total</span>
              <span className="text-2xl text-rose-700 font-bold">₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className={`w-full py-4 rounded-full text-white text-lg font-bold shadow transition-all duration-200 ${isProcessing ? 'bg-rose-300 cursor-wait' : 'bg-rose-600 hover:bg-rose-700'}`}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage; 