import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-4">SnapBite</h3>
            <p className="text-gray-300 mb-4">
              Delicious food delivered to your doorstep. Order now and enjoy the best culinary experience from local restaurants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-300 hover:text-primary-500 transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu?category=Pizza" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Pizza
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Burgers" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Burgers
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Sushi" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Sushi
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Desserts" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/menu?category=Healthy" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Healthy Options
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Foodie Street, Delicious City, FL 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500" />
                <span className="text-gray-300">info@snapbite.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SnapBite. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-primary-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;