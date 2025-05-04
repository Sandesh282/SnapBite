import React from 'react';
import { Star, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { restaurants } from '../../data/restaurants';

const FeaturedRestaurants: React.FC = () => {
  const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Restaurants</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest restaurants in your area, offering delicious meals ready to be delivered to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRestaurants.map((restaurant) => (
            <Link 
              key={restaurant.id}
              to={`/menu?restaurant=${restaurant.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-4 px-4">
                  <div className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-2">
                    {restaurant.cuisine}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors">
                  {restaurant.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-gray-600">{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Delivery Fee: ₹{restaurant.deliveryFee.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full text-primary-500 font-medium flex items-center justify-center">
                    View Menu
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            View All Restaurants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;