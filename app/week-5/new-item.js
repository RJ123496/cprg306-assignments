"use client";

import React, { useState } from "react";

export default function NewItem() {
  const CATEGORY_OPTIONS = [
    "Dairy",
    "Bakery",
    "Produce",
    "Frozen Foods",
    "Meat",
    "Dry Goods",
    "Canned Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other"
  ];

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      quantity,
      name,
      category,
    };

    console.log(item);

    alert(`Added ${quantity} ${name} of ${category}`);

    setQuantity(1);
    setName("");
    setCategory("Produce");
  };

  return (
    <form
      className="bg-white p-10 mt-10 mx-auto w-1/2 text-black"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="font-bold">Name:</label>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border bg-gray-800 text-white p-2 rounded-md"
          />
        </div>
      </div>

      <div className="my-5">
        <label className="font-bold">Quantity:</label>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            onClick={increment}
            disabled={quantity === 20}
            type="button"
            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="font-bold">Category:</label>
        <select
          className="bg-gray-800 text-white rounded-md p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-800 mt-5 text-white rounded-md p-2"
      >
        Submit
      </button>
    </form>
  );
}