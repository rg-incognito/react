// src/components/SideNav.js
import React, { useState } from 'react';
import './SideNav.css';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger-menu" onClick={toggleNav}>
        ☰
      </button>
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
