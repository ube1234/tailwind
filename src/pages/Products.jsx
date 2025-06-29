import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import EmailButton from '../components/EmailButton';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
      { id: 4, name: "4K Monitor", price: 399.99, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", category: "electronics" },
    ],
  };

  const allProducts = Object.values(products).flat();
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      category: "electronics",
      rating: 4.8,
      reviews: 128,
      isNew: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      category: "electronics",
      rating: 4.6,
      reviews: 89,
      isNew: true
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      category: "clothing",
      rating: 4.7,
      reviews: 56,
      isNew: false
    },
    {
      id: 4,
      name: "Professional Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      category: "electronics",
      rating: 4.9,
      reviews: 234,
      isNew: true
    }
  ];

  // All products data
  const allProductsData = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      category: "electronics",
      rating: 4.8,
      reviews: 128,
      isNew: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      category: "electronics",
      rating: 4.6,
      reviews: 89,
      isNew: true
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      category: "clothing",
      rating: 4.7,
      reviews: 56,
      isNew: false
    },
    {
      id: 4,
      name: "Professional Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      category: "electronics",
      rating: 4.9,
      reviews: 234,
      isNew: true
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
      category: "electronics",
      rating: 4.5,
      reviews: 78,
      isNew: false
    },
    {
      id: 6,
      name: "Smart Home Speaker",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
      category: "electronics",
      rating: 4.7,
      reviews: 92,
      isNew: true
    },
    {
      id: 7,
      name: "Leather Wallet",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
      category: "clothing",
      rating: 4.4,
      reviews: 45,
      isNew: false
    },
    {
      id: 8,
      name: "Smartphone",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      category: "electronics",
      rating: 4.8,
      reviews: 156,
      isNew: true
    }
  ];

  // Filter products based on category and search query
  const filteredProductsData = allProductsData.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-xl">Discover our wide range of products</p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Products</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 pb-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none w-64 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {product.category}
                  </p>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    ${product.price}
                  </p>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: 'Electronics',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                ),
                count: '24 Products',
                color: 'blue'
              },
              {
                name: 'Clothing',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                ),
                count: '36 Products',
                color: 'purple'
              },
              {
                name: 'Books',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                ),
                count: '42 Products',
                color: 'green'
              },
              {
                name: 'Home & Kitchen',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                ),
                count: '28 Products',
                color: 'orange'
              }
            ].map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name.toLowerCase())}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {category.count}
                  </p>
                  <div className={`mt-4 text-sm font-medium text-${category.color}-500 dark:text-${category.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    View Products →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProductsData.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {product.category}
                </p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ${product.price}
                </p>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Need Help Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need Help Finding Products?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team is here to help you find exactly what you're looking for. Send us an email and we'll get back to you quickly!
            </p>
            <div className="flex justify-center gap-4">
              <EmailButton
                variant="primary"
                size="large"
                subject="Product Inquiry"
                body="Hello, I'm looking for specific products and would appreciate your help in finding them."
              >
                Email Us for Help
              </EmailButton>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-lg font-medium"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products; 