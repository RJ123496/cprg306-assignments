"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <main className="p-6 bg-gray-50 min-h-screen flex justify-center">
            <div className="w-full max-w-lg">
                <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Ranjit's Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}