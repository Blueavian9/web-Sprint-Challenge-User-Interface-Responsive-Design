import React from 'react';
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className="p-8">
      <h2>Menu</h2>
      <MenuItem name="Pizza" description="Delicious cheese pizza" price="0" />
      <MenuItem name="Burger" description="Juicy beef burger" price="" />
    </div>
  );
}

export default Menu;
