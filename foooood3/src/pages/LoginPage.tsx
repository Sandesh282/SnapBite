import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import LoginForm from '../components/Auth/LoginForm';
import SignupForm from '../components/Auth/SignupForm';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h1>
                <p className="text-gray-600 mt-2">
                  {isLogin 
                    ? 'Sign in to continue to SnapBite' 
                    : 'Join SnapBite and start ordering delicious food'}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`flex-1 py-3 text-center font-medium ${
                      isLogin 
                        ? 'text-primary-600 border-b-2 border-primary-500' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setIsLogin(true)}
                  >
                    Sign In
                  </button>
                  <button
                    className={`flex-1 py-3 text-center font-medium ${
                      !isLogin 
                        ? 'text-primary-600 border-b-2 border-primary-500' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              
              {isLogin ? <LoginForm /> : <SignupForm />}
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
                <p>
                  By continuing, you agree to SnapBite's{' '}
                  <Link to="#" className="text-primary-600 hover:text-primary-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="#" className="text-primary-600 hover:text-primary-500">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link to="/" className="text-gray-600 hover:text-primary-500">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;