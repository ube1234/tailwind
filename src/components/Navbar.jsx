import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">ShopNow</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link to="/deals" className="text-gray-600 hover:text-gray-900">Deals</Link>
          </div>

          <div className="flex items-center space-x-4">
            <input 
              type="search" 
              placeholder="Search products..." 
              className="hidden md:block px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link to="/wishlist" className="p-2 text-gray-600 hover:text-gray-800">
              <HeartIcon className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="p-2 text-gray-600 hover:text-gray-800">
              <ShoppingCartIcon className="w-6 h-6" />
            </Link>
            <Link to="/profile" className="p-2 text-gray-600 hover:text-gray-800">
              <UserIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 