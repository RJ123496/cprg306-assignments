import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) =>
        sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
    );

    return (
        <div className="mt-4">
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-5 py-2 rounded-md font-semibold text-white transition-colors ${
                        sortBy === "name" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
                    }`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-5 py-2 rounded-md font-semibold text-white transition-colors ${
                        sortBy === "category" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
                    }`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
            </div>
            <ul className="flex flex-col gap-4">
                {sortedItems.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}