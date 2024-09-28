import React from 'react';
import Tooltip from './icone';
import Navbar from './navbar';

export default function Header() {
  return (
    <div
      className="flex w-full p-4 justify-between"
      style={{
        background: "linear-gradient(to right, rgba(173, 216, 230, 1), rgba(255, 255, 255, 1), rgba(173, 216, 230, 1))",
      }}
    >
      <Tooltip />
      <Navbar />
    </div>
  );
}
