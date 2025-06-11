import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Latest gadgets and tech devices',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
      count: 156
    },
    {
      id: 'clothing',
      name: 'Clothing',
      description: 'Fashion for all seasons',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
      count: 243
    },
    {
      id: 'books',
      name: 'Books',
      description: 'Best-selling books and more',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800',
      count: 89
    },
    {
      id: 'home',
      name: 'Home & Kitchen',
      description: 'Everything for your home',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800',
      count: 178
    },
    {
      id: 'beauty',
      name: 'Beauty',
      description: 'Skincare and cosmetics',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
      count: 112
    },
    {
      id: 'sports',
      name: 'Sports',
      description: 'Sports equipment and accessories',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
      count: 95
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-xl text-gray-600">Browse our wide range of products by category</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        {category.count} products
                      </span>
                      <span className="text-sm font-medium group-hover:translate-x-2 transition-transform">
                        Shop Now →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Brands Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Nike', 'Apple', 'Samsung', 'Adidas'].map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-gray-800">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories; 