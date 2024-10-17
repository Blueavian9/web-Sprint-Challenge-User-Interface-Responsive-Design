import React from 'react';

function MenuItem({ name, description, price }) {
  return (
    <div className="border p-4 m-2">
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default MenuItem;
