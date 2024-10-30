import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/nav';
import Home from './component/Home';
import Cart from './component/Cart';
import Category from './component/Category';
import View from './component/View';

function App() {
  return (
    
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;

