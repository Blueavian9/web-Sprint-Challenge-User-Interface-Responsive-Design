import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <h1>Restaurant</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/menu" className="mr-4">Menu</Link>
        <Link to="/reservations">Reservations</Link>
      </nav>
    </header>
  );
}

export default Header;
