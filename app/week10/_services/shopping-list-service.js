import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Function to get all items for a specific user from Firestore
export const getItems = async (userId) => {
  const itemRef = collection(db, `users/${userId}/items`);
  const querySnapshot = await getDocs(itemRef);
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  return items;
};

// Function to add a new item to a specific user's list of items in Firestore
export const addItem = async (userId, item) => {
  const itemRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemRef, item);
  return docRef.id;
};
