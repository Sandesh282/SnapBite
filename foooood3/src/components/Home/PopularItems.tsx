import React from 'react';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { menuItems } from '../../data/menuItems';

const PopularItems: React.FC = () => {
  const { addToCart } = useCart();
  const popularItems = menuItems.filter(item => item.popular).slice(0, 4);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Popular Dishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most ordered items that customers love. Try them today and discover why they're so popular!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-md">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium ml-1">{item.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <div className="text-sm text-gray-500 mb-2">
                      {item.category} • {item.prepTime}
                    </div>
                  </div>
                  <div className="text-primary-600 font-bold">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus size={16} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;