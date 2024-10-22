import React from 'react';
import ItemList from './item-list';

export default function Page() {
    return (
        <main className="p-5 bg-white min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-black">Ranjit's Shopping List</h1>
            <ItemList />
        </main>
    );
}