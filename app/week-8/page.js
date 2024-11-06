"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName);
    };

    return (
        <main className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Ranjit's Shopping List</h1>
            <div className="flex gap-10">
                {}
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                {}
                <div className="w-1/2">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </main>
    );
}
