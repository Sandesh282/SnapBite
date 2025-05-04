import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-pink-600 shadow-md py-3'
          : 'bg-pink-600 py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`font-bold text-2xl transition-colors ${
              isScrolled || !isHomePage ? 'text-primary-100' : 'text-white'
            }`}
          >
            SnapBite
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors hover:text-primary-500 ${
                isScrolled || !isHomePage ? 'text-white' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`transition-colors hover:text-primary-500 ${
                isScrolled || !isHomePage ? 'text-white' : 'text-white'
              }`}
            >
              Menu
            </Link>
            <div className="relative group">
              <div className={`flex items-center space-x-1 cursor-pointer transition-colors hover:text-primary-500 ${
                isScrolled || !isHomePage ? 'text-white' : 'text-white'
              }`}>
                <Search size={20} />
              </div>
            </div>
            <Link 
              to="/cart" 
              className="relative"
            >
              <ShoppingCart 
                size={24} 
                className={`transition-colors hover:text-primary-500 ${
                  isScrolled || !isHomePage ? 'text-white' : 'text-white'
                }`} 
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link 
              to={isAuthenticated ? "/settings" : "/login"} 
              className={`transition-colors hover:text-primary-500 ${
                isScrolled || !isHomePage ? 'text-white' : 'text-white'
              }`}
            >
              <User size={24} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative"
            >
              <ShoppingCart 
                size={24} 
                className={`transition-colors ${
                  isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                }`} 
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-500 py-2"
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-gray-700 hover:text-primary-500 py-2"
              >
                Menu
              </Link>
              <Link 
                to="/cart" 
                className="text-gray-700 hover:text-primary-500 py-2"
              >
                Cart
              </Link>
              <Link 
                to={isAuthenticated ? "/settings" : "/login"} 
                className="text-gray-700 hover:text-primary-500 py-2"
              >
                {isAuthenticated ? "My Account" : "Login / Sign Up"}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;