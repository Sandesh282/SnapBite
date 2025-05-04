import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Package, CheckCircle2, XCircle, Star } from 'lucide-react';
import DeliveryMap from '../components/Map/DeliveryMap';

const glassCard = 'bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl';

const DELIVERY_PERSONS = [
  {
    name: 'Amit Sharma',
    phone: '987-654-3210',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Singh',
    phone: '912-345-6789',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ravi Kumar',
    phone: '998-877-6655',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

type OrderStatus = 'placed' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';

const TrackOrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<'out-for-delivery' | 'delivered'>('out-for-delivery');
  const [estimatedTime] = useState<string>('30 min');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Pick a random delivery person
  const [deliveryPerson] = useState(() => DELIVERY_PERSONS[Math.floor(Math.random() * DELIVERY_PERSONS.length)]);

  // Simulate a customer name (for demo, not matching delivery person)
  const customerName = 'Rahul Verma';

  const statusOrder = ['out-for-delivery', 'delivered'];

  useEffect(() => {
    if (!location.state?.orderId) {
      navigate('/');
    }
  }, [location.state, navigate]);

  // Simulate delivery progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 1) {
          clearInterval(timer);
          return 1;
        }
        return prev + 0.01;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update status based on progress
  useEffect(() => {
    if (progress >= 1) {
      setStatus('delivered');
    } else {
      setStatus('out-for-delivery');
    }
  }, [progress]);

  const getStatusText = (status: 'out-for-delivery' | 'delivered') => {
    switch (status) {
      case 'out-for-delivery':
        return 'Order is Out';
      case 'delivered':
        return 'Order Delivered';
    }
  };

  return (
    <Layout>
      <div
        className="min-h-screen pt-24 pb-16"
        style={{
          background:
            'linear-gradient(135deg, #f8bbd0 0%, #fce4ec 100%)',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-rose-900">Track Order</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Status, Map, Rating */}
            <div className="space-y-6">
              {/* Status Bar */}
              <div className={glassCard + " flex flex-col md:flex-row md:items-center md:justify-between p-6"}>
                <div className="flex-1 flex flex-row items-center justify-center space-x-0 md:space-x-0">
                  {statusOrder.map((step, idx) => {
                    const isCompleted = idx < statusOrder.indexOf(status);
                    const isCurrent = idx === statusOrder.indexOf(status);
                    return (
                      <React.Fragment key={step}>
                        <div className="flex flex-col items-center min-w-[90px]">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-base font-bold border-2 transition-all duration-300 ${isCompleted || isCurrent ? 'bg-green-500 border-green-500 text-white' : 'bg-gray-200 border-gray-300 text-gray-400'}`}>{idx + 1}</span>
                          <span className={`mt-2 text-xs text-center font-semibold ${isCompleted || isCurrent ? 'text-green-700' : 'text-gray-400'}`}>{getStatusText(step as 'out-for-delivery' | 'delivered')}</span>
                        </div>
                        {idx < statusOrder.length - 1 && (
                          <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${idx < statusOrder.indexOf(status) ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="mt-6 md:mt-0 text-center md:text-right">
                  <div className="text-xs text-gray-500">Estimated Delivery Time</div>
                  <div className="text-2xl font-bold text-rose-700">{estimatedTime}</div>
                </div>
              </div>
              {/* Map */}
              <div className={glassCard + " p-4"}>
                <DeliveryMap progress={progress} />
              </div>
              {/* Rating */}
              <div className={glassCard + " p-4 flex flex-col items-center"}>
                <div className="font-semibold text-gray-700 mb-2">Rate your order</div>
                <div className="flex items-center mb-2">
                  {[1,2,3,4,5].map(star => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      disabled={submitted}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        fill={star <= rating ? '#facc15' : 'none'}
                      />
                    </button>
                  ))}
                </div>
                <button
                  className="mt-2 px-6 py-2 rounded-full bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition"
                  onClick={() => setSubmitted(true)}
                  disabled={submitted || rating === 0}
                >
                  {submitted ? 'Thank you!' : 'Submit'}
                </button>
              </div>
            </div>
            {/* Right: Delivery Person */}
            <div className={glassCard + " p-6 flex flex-col items-center"}>
              <div className="text-lg font-bold text-rose-800 mb-2">Delivery Person</div>
              <img
                src={deliveryPerson.photo}
                alt={deliveryPerson.name}
                className="w-24 h-24 rounded-full border-4 border-rose-200 shadow mb-2 object-cover"
              />
              <div className="text-base font-semibold text-gray-800">{deliveryPerson.name}</div>
              <div className="text-sm text-gray-500 mb-1">{deliveryPerson.phone}</div>
              <div className="text-xs text-gray-400">for {customerName}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrackOrderPage; 