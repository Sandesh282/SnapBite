import React from 'react';
import { Clock, Award, Truck, CreditCard } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 rounded-lg transition-all">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 text-primary-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AppFeatures: React.FC = () => {
  const features = [
    {
      icon: <Clock size={28} />,
      title: 'Fast Delivery',
      description: 'Get your food delivered in under 30 minutes or your next order is on us!'
    },
    {
      icon: <Award size={28} />,
      title: 'Quality Food',
      description: 'We partner with the best restaurants to ensure you get the highest quality meals.'
    },
    {
      icon: <Truck size={28} />,
      title: 'Order Tracking',
      description: 'Track your order in real-time and know exactly when your food will arrive.'
    },
    {
      icon: <CreditCard size={28} />,
      title: 'Secure Payment',
      description: 'Multiple secure payment options including credit cards and digital wallets.'
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best food delivery experience with these amazing features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;