"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "C:/Users/mac_h/OneDrive/documents/2023school/CPRG306FWebdevelopment/cprg306-assignments/app/week10/_utils/auth-context";





import { getItems, addItem } from '../_services/shopping-list-service'; // Import Firestore functions

const Page = () => {
  const { user } = useUserAuth(); // Use the useUserAuth hook to get the current user

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  useEffect(() => {
    if (user) {
      // Fetch shopping list items for the current user
      getItems(user.uid)
        .then((items) => setItems(items))
        .catch((error) => console.error('Error fetching items:', error));
    }
  }, [user]);

  const handleAddItem = (newItem) => {
    if (user) {
      // Add the new item to Firestore for the current user
      addItem(user.uid, newItem)
        .then((itemId) => {
          // Update the local state with the newly added item
          setItems([...items, { id: itemId, data: newItem }]);
        })
        .catch((error) => console.error('Error adding item:', error));
    }
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.data.name.split(',')[0].trim().replace(/[\d\s]*$/, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div style={{ flex: 1 }}>
          {selectedItemName && (
            <MealIdeas ingredient={selectedItemName} />
          )}
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link href="/">
          <button>Go Back to Home Page</button>
        </Link>
      </div>
    </main>
  );
};

export default Page;
