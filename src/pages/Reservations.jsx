import React, { useState } from 'react';

function Reservations() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${name} on ${date}.`);
  };

  return (
    <div className="p-8">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 m-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 m-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default Reservations;
