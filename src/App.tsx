import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PaymentMethods from './components/PaymentMethods';
import Security from './components/Security';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <PaymentMethods />
      <Security />
      <Footer />
    </div>
  );
}

export default App;