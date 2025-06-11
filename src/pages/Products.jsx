import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'books', name: 'Books' },
    { id: 'home', name: 'Home & Kitchen' },
  ];

  const products = {
    electronics: [
      { id: 1, name: "Premium Headphones", price: 299.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", category: "electronics" },
      { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", category: "electronics" },
      { id: 3, name: "Wireless Earbuds", price: 149.99, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500", category: "electronics" },
      { id: 4, name: "4K Monitor", price: 399.99, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", category: "electronics" },
    ],
    clothing: [
      { id: 5, name: "Designer T-Shirt", price: 49.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", category: "clothing" },
      { id: 6, name: "Denim Jacket", price: 89.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", category: "clothing" },
      { id: 7, name: "Running Shoes", price: 129.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", category: "clothing" },
      { id: 8, name: "Summer Dress", price: 79.99, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500", category: "clothing" },
    ],
    books: [
      { id: 9, name: "Bestselling Novel", price: 19.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500", category: "books" },
      { id: 10, name: "Cookbook", price: 24.99, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500", category: "books" },
      { id: 11, name: "Art Book", price: 34.99, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500", category: "books" },
      { id: 12, name: "Children's Book", price: 14.99, image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=500", category: "books" },
    ],
    home: [
      { id: 13, name: "Coffee Maker", price: 89.99, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500", category: "home" },
      { id: 14, name: "Smart Speaker", price: 129.99, image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500", category: "home" },
      { id: 15, name: "Bedding Set", price: 149.99, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500", category: "home" },
      { id: 16, name: "Kitchen Utensils", price: 59.99, image: "https://images.unsplash.com/photo-1583241475880-683d3a4bc7d3?w=500", category: "home" },
    ],
  };

  const allProducts = Object.values(products).flat();
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  const ProductCard = ({ product }) => (
    <div className="flex-none w-72 bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-blue-600 mb-4">
          ${product.price}
        </p>
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const ScrollSection = ({ title, products }) => (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Products</h1>
          <p className="text-xl mb-6">Find the best deals on top brands</p>
          <div className="flex gap-4">
            <input
              type="search"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-blue-600 mb-4">
                  ${product.price}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products; 