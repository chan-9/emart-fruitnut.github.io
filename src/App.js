import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
