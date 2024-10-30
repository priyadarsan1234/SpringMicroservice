import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <h1><Link style={{textDecoration:'none', color:'white', fontSize:'22px', fontWeight:'bold'}} to="/">Home Page</Link></h1>
      <div className='second'>
        <div><Link style={{textDecoration:'none', color:'white', fontSize:'18px', fontWeight:'bold'}} to="/cart">Cart</Link></div>
        <div><Link style={{textDecoration:'none', color:'white', fontSize:'18px', fontWeight:'bold'}} to="/page2">Favorite</Link></div>
        <div><Link style={{textDecoration:'none', color:'white', fontSize:'18px', fontWeight:'bold'}} to="/page3">My Order</Link></div>
        <div><Link style={{textDecoration:'none', color:'white', fontSize:'18px', fontWeight:'bold'}} to="/page3">Profile</Link></div>
      </div>
    </nav>
  );
}

export default Nav;
