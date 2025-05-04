import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

// Enhanced Glassmorphism utility class
const glassCard =
  'bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl';

const CartPage: React.FC = () => {
  const { cartItems, totalItems } = useCart();
  
  return (
    <Layout>
      <div
        className="min-h-screen pt-24 pb-16"
        style={{
          background:
            'linear-gradient(135deg, #f8bbd0 0%, #fce4ec 100%)',
        }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-bold mb-3 text-rose-900">Your Cart</h1>
            <p className="text-lg text-rose-700">
              {totalItems === 0 
                ? 'Your cart is empty' 
                : `You have ${totalItems} ${totalItems === 1 ? 'item' : 'items'} in your cart`}
            </p>
          </div>
          {totalItems === 0 ? (
            <div className={`${glassCard} p-12 text-center max-w-lg mx-auto`}>
              <div className="flex justify-center mb-6">
                <ShoppingCart size={72} className="text-rose-200" />
              </div>
              <h2 className="text-3xl font-semibold text-rose-700 mb-4">Your cart is empty</h2>
              <p className="text-rose-400 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                to="/menu"
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full transition-all text-lg shadow"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
              <div className="lg:col-span-2">
                <div className={`${glassCard} p-8`}>
                  <div className="divide-y divide-rose-100">
                    {cartItems.map(item => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <CartSummary />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;