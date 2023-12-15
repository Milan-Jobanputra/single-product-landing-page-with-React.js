// App.js
import React from 'react';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductDetails />
        <Features />
        <CallToAction />
      </main>
    </div>
  );
};

export default App;
