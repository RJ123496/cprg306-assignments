'use client';

import { useState } from 'react';

export default function NewItem() {

  const [quantity, setQuantity] = useState(1);


  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };


  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">New Item</h2>
      <div className="flex items-center space-x-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
}