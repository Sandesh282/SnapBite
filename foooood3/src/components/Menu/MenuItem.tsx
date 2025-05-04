import React from 'react';
import { Star, Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../../types';
import { useCart } from '../../context/CartContext';

const glassCard = 'bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.015]';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { addToCart } = useCart();
  
  return (
    <div className={glassCard + " flex flex-col md:flex-row overflow-hidden group"}>
      {/* Image Section */}
      <div className="md:w-48 w-full h-48 md:h-auto relative flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover object-center"
        />
        {item.popular && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              Popular
            </div>
          </div>
        )}
      </div>
      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-4 md:p-6 min-w-0">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <h3 className="font-bold text-lg text-gray-800 truncate">{item.name}</h3>
            <div className="flex items-center mt-1 space-x-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                <span className="text-sm font-medium">{item.rating}</span>
              </div>
              <div className="text-sm text-gray-500 truncate">
                {item.prepTime} • {item.category}
              </div>
            </div>
          </div>
          <div className="flex items-center flex-shrink-0">
            <span className="text-lg font-semibold text-rose-700">₹{item.price.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm my-3 line-clamp-2 min-w-0">
          {item.description}
        </p>
        <div className="flex justify-end mt-2">
          <button 
            onClick={() => addToCart(item)}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md min-w-[140px]"
          >
            <Plus size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;