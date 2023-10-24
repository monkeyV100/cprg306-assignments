"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.split(',')[0].trim().replace(/[\d\s]*$/, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect */}
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
