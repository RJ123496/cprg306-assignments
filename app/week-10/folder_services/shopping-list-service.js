import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const firestoreService = {
    getItems: async (userId) => {
        try {
            const itemsCollection = collection(db, 'users', userId, 'items');
            const snapshot = await getDocs(itemsCollection);
            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        } catch (error) {
            console.error(`Error fetching items for user ${userId}:`, error);
            throw new Error("Failed to fetch items.");
        }
    },

    addItem: async (userId, itemData) => {
        try {
            const itemsCollection = collection(db, 'users', userId, 'items');
            const docRef = await addDoc(itemsCollection, itemData);
            return docRef.id;
        } catch (error) {
            console.error(`Error adding item for user ${userId}:`, error);
            throw new Error("Failed to add item.");
        }
    },
};