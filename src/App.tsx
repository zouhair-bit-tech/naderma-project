import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Shop from './components/Shop';
import Science from './components/Science';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Benefits />
      <Products />
      <Shop />
      <Science />
      <Footer />
    </div>
  );
}

export default App;