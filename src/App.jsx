import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
