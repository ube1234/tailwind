import React, { useState, useEffect } from 'react';
import Newsletter from '../components/Newsletter';

function Deals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      name: "Premium Headphones",
      originalPrice: 299.99,
      dealPrice: 199.99,
      discount: 33,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      sold: 45,
      total: 100
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      originalPrice: 399.99,
      dealPrice: 299.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      sold: 32,
      total: 50
    },
    {
      id: 3,
      name: "Wireless Earbuds Pro",
      originalPrice: 249.99,
      dealPrice: 149.99,
      discount: 40,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
      sold: 78,
      total: 100
    },
    {
      id: 4,
      name: "4K Ultra HD Monitor",
      originalPrice: 599.99,
      dealPrice: 449.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
      sold: 15,
      total: 30
    }
  ];

  const DealCard = ({ deal }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold transform transition-transform duration-300 group-hover:scale-110">
            {deal.discount}% OFF
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{deal.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-red-600">${deal.dealPrice}</span>
          <span className="text-lg text-gray-500 line-through">${deal.originalPrice}</span>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Sold: {deal.sold}</span>
            <span>Left: {deal.total - deal.sold}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 group-hover:bg-blue-700"
              style={{ width: `${(deal.sold / deal.total) * 100}%` }}
            />
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 mb-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Flash Deals</h1>
          <p className="text-xl mb-6">Limited time offers with amazing discounts</p>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Additional Deals Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
                  alt="Special Offer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">Weekend Special</h3>
                  <p className="mb-4">Up to 50% off on selected items</p>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800"
                  alt="New Arrivals"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">New Arrivals</h3>
                  <p className="mb-4">Check out our latest products</p>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16">
          <Newsletter 
            title="Get Deal Alerts"
            subtitle="Subscribe to get notified about our flash deals and special offers"
            buttonText="Subscribe"
            variant="gradient"
          />
        </div>
      </div>
    </div>
  );
}

export default Deals; 