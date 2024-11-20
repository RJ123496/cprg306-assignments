"use client";

import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
    const CATEGORY_OPTIONS = [
        "Dairy", "Bakery", "Produce", "Frozen Foods", "Meat", 
        "Dry Goods", "Canned Goods", "Beverages", "Snacks", "Household", "Other"
    ];

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
    const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            id: Math.random().toString(36).substring(2, 9),
            name,
            quantity,
            category,
        };
        onAddItem(item);
        setQuantity(1);
        setName("");
        setCategory("Produce");
    };

    return (
        <form className="bg-white p-6 mb-6 rounded-lg shadow-lg text-gray-700" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block font-semibold mb-1 text-gray-600">Item Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-gray-300 bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block font-semibold mb-1 text-gray-600">Quantity:</label>
                <div className="flex items-center">
                    <button
                        onClick={decrement}
                        disabled={quantity === 1}
                        type="button"
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md disabled:bg-gray-200 focus:outline-none"
                    >
                        -
                    </button>
                    <span className="px-4 py-2 bg-gray-100 text-lg font-semibold text-center">{quantity}</span>
                    <button
                        onClick={increment}
                        disabled={quantity === 20}
                        type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded-r-md disabled:bg-gray-300 focus:outline-none"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <label className="block font-semibold mb-1 text-gray-600">Category:</label>
                <select
                    className="w-full border border-gray-300 bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
                Add Item
            </button>
        </form>
    );
}
