"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ShoppingListPage = () => {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    const handleAddItem = async (item) => {
        
        setItems((prev) => [...prev, item]);
    };

    return (
        <div>
            <h1>Shopping List</h1>
            {items.length > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No items yet.</p>
            )}
        </div>
    );
};

export default ShoppingListPage;