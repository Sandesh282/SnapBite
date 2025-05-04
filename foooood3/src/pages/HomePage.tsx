import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import FeaturedRestaurants from '../components/Home/FeaturedRestaurants';
import PopularItems from '../components/Home/PopularItems';
import AppFeatures from '../components/Home/AppFeatures';
import { MapPin, ArrowDown } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <Hero />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <MapPin className="text-primary-500 mr-2" size={24} />
                <span className="text-gray-600">Delivering to Central San Francisco</span>
                <button className="ml-2 text-primary-500 hover:text-primary-600">
                  <ArrowDown size={16} />
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-6">Hungry? We've Got You Covered</h2>
              <p className="text-gray-600 mb-8">
                Order from the best local restaurants with easy, on-demand delivery right to your doorstep. 
                SnapBite offers a wide selection of your favorite cuisines, all just a few taps away.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#restaurants" 
                  className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-full transition-colors"
                >
                  Browse Restaurants
                </a>
                <a 
                  href="#popular" 
                  className="bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-full transition-colors"
                >
                  Popular Dishes
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <div id="restaurants">
          <FeaturedRestaurants />
        </div>
        
        <div id="popular">
          <PopularItems />
        </div>
        
        <AppFeatures />
        
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
              <p className="text-primary-100 mb-8 text-lg">
                Delicious food is just a few clicks away. Order now and enjoy the best culinary experience from the comfort of your home.
              </p>
              <a 
                href="/menu" 
                className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors text-lg"
              >
                Browse Our Menu
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;