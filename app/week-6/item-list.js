"use client";
import Item from './item';
import React, { useState } from 'react';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = items
        .map(item => item)
        .sort((a, b) =>
            sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
        );

    return (
        <div>
            <div className="mb-10">
                <button
                    className={`p-4 mr-4 rounded-lg text-white ${sortBy === 'name' ? 'bg-blue-600' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`p-4 rounded-lg text-white ${sortBy === 'category' ? 'bg-blue-600' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            <ul className="flex flex-col gap-4 w-full">
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}