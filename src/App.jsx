import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import './App.css';

function App() {
  const products = [
    { id: 1, name: "Product 1", price: 99.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 149.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 199.99, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Product 4", price: 79.99, image: "https://via.placeholder.com/200" },
  ];

  const categories = ["Electronics", "Clothing", "Books", "Home & Kitchen"];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/deals" element={<Deals />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 